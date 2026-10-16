import { useEffect, useRef } from "react";
import styles from "./dot-grid.module.css";

type Dot = {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  velocityX: number;
  velocityY: number;
  glow: number;
};

type Cursor = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  intensity: number;
  active: boolean;
};

type Ripple = {
  x: number;
  y: number;
  startedAt: number;
};

const SPACING = 28;
const INFLUENCE_RADIUS = 150;
const RIPPLE_DURATION = 1400;
const RIPPLE_SPEED = 0.38;
const RIPPLE_WIDTH = 48;

const DotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const landing = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !landing || !context) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let cursor: Cursor | null = null;
    let ripples: Ripple[] = [];
    let lastRipple: Ripple | null = null;
    let frameId = 0;
    let lastFrameTime = 0;
    let visible = true;

    const draw = (now: number) => {
      frameId = 0;
      const elapsed = Math.min(Math.max(now - lastFrameTime, 8), 32);
      lastFrameTime = now;
      const positionEase = 1 - Math.exp(-elapsed / 110);
      const glowEase = 1 - Math.exp(-elapsed / 220);
      const step = elapsed / (1000 / 60);
      const damping = Math.pow(0.78, step);
      ripples = ripples.filter(
        (ripple) => now - ripple.startedAt < RIPPLE_DURATION,
      );
      let settling = ripples.length > 0;

      if (cursor) {
        cursor.x += (cursor.targetX - cursor.x) * positionEase;
        cursor.y += (cursor.targetY - cursor.y) * positionEase;
        const targetIntensity = cursor.active ? 1 : 0;
        cursor.intensity += (targetIntensity - cursor.intensity) * glowEase;
        settling =
          settling ||
          Math.abs(cursor.targetX - cursor.x) > 0.05 ||
          Math.abs(cursor.targetY - cursor.y) > 0.05 ||
          Math.abs(targetIntensity - cursor.intensity) > 0.001;
        if (!cursor.active && cursor.intensity < 0.001) cursor = null;
      }

      context.clearRect(0, 0, width, height);
      context.shadowBlur = 0;
      context.lineWidth = 1;
      for (const ripple of ripples) {
        const age = now - ripple.startedAt;
        const radius = age * RIPPLE_SPEED;
        const opacity =
          0.18 * (1 - age / RIPPLE_DURATION) ** 1.5 * Math.min(age / 80, 1);

        for (const [inset, strength] of [
          [0, 1],
          [32, 0.55],
        ]) {
          const ringRadius = radius - inset;
          if (ringRadius <= 0) continue;
          context.beginPath();
          context.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2);
          context.strokeStyle = `rgba(25, 25, 25, ${opacity * strength})`;
          context.stroke();
        }
      }

      for (const dot of dots) {
        const dx = cursor ? cursor.x - dot.x : 0;
        const dy = cursor ? cursor.y - dot.y : 0;
        const influence = cursor
          ? Math.exp(-(dx * dx + dy * dy) / (2 * INFLUENCE_RADIUS ** 2)) *
            cursor.intensity
          : 0;
        let targetX = dx * influence * 0.009;
        let targetY = dy * influence * 0.009;
        let targetGlow = influence * 0.5;

        for (const ripple of ripples) {
          const age = now - ripple.startedAt;
          const rippleX = dot.x - ripple.x;
          const rippleY = dot.y - ripple.y;
          const distance = Math.hypot(rippleX, rippleY);
          const phase = distance - age * RIPPLE_SPEED;
          const envelope =
            Math.exp(-(phase ** 2) / (2 * RIPPLE_WIDTH ** 2)) *
            (1 - age / RIPPLE_DURATION) ** 1.5;
          const wave = Math.cos(phase / 24) * envelope;
          const displacement = (wave * 10) / Math.max(distance, 1);
          targetX += rippleX * displacement;
          targetY += rippleY * displacement;
          targetGlow = Math.max(targetGlow, Math.abs(wave) * 0.8);
        }
        const offsetScale = Math.min(
          1,
          8 / Math.max(Math.hypot(targetX, targetY), 1),
        );
        targetX *= offsetScale;
        targetY *= offsetScale;
        // Distant dots respond a little later, with a soft spring on release.
        const spring =
          0.045 / (1 + (Math.hypot(dx, dy) / INFLUENCE_RADIUS) * 0.5);

        dot.velocityX =
          (dot.velocityX + (targetX - dot.offsetX) * spring * step) * damping;
        dot.velocityY =
          (dot.velocityY + (targetY - dot.offsetY) * spring * step) * damping;
        dot.offsetX += dot.velocityX * step;
        dot.offsetY += dot.velocityY * step;
        dot.glow += (targetGlow - dot.glow) * glowEase;
        if (
          Math.abs(targetX - dot.offsetX) > 0.01 ||
          Math.abs(targetY - dot.offsetY) > 0.01 ||
          Math.abs(targetGlow - dot.glow) > 0.001 ||
          Math.abs(dot.velocityX) > 0.005 ||
          Math.abs(dot.velocityY) > 0.005
        )
          settling = true;

        if (
          !cursor &&
          Math.abs(dot.offsetX) < 0.01 &&
          Math.abs(dot.offsetY) < 0.01 &&
          dot.glow < 0.001
        ) {
          dot.offsetX = 0;
          dot.offsetY = 0;
          dot.velocityX = 0;
          dot.velocityY = 0;
          dot.glow = 0;
        }

        context.beginPath();
        context.arc(
          dot.x + dot.offsetX,
          dot.y + dot.offsetY,
          1.1 + dot.glow * 0.12,
          0,
          Math.PI * 2,
        );
        context.shadowColor = "rgba(25, 25, 25, 0.2)";
        context.shadowBlur = dot.glow * 3;
        context.fillStyle = `rgba(25, 25, 25, ${0.18 + dot.glow * 0.14})`;
        context.fill();
      }
      context.shadowBlur = 0;

      if (settling && visible && !motionPreference.matches) {
        frameId = requestAnimationFrame(draw);
      }
    };

    const scheduleDraw = () => {
      if (!frameId && visible) frameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      width = landing.clientWidth;
      height = landing.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const columns = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);
      const startX = (width - (columns - 1) * SPACING) / 2;
      const startY = (height - (rows - 1) * SPACING) / 2;
      dots = Array.from({ length: columns * rows }, (_, index) => ({
        x: startX + (index % columns) * SPACING,
        y: startY + Math.floor(index / columns) * SPACING,
        offsetX: 0,
        offsetY: 0,
        velocityX: 0,
        velocityY: 0,
        glow: 0,
      }));
      cursor = null;
      ripples = [];
      lastRipple = null;
      scheduleDraw();
    };

    const moveCursor = (event: PointerEvent) => {
      if (motionPreference.matches || !visible) return;
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      if (cursor) {
        cursor.targetX = x;
        cursor.targetY = y;
        cursor.active = true;
      } else {
        cursor = { x, y, targetX: x, targetY: y, intensity: 0, active: true };
      }
      const now = performance.now();
      if (
        !lastRipple ||
        (now - lastRipple.startedAt >= 120 &&
          Math.hypot(x - lastRipple.x, y - lastRipple.y) >= 28)
      ) {
        lastRipple = { x, y, startedAt: now };
        ripples = [...ripples.slice(-7), lastRipple];
      }
      scheduleDraw();
    };

    const clearCursor = () => {
      if (cursor) cursor.active = false;
      lastRipple = null;
      scheduleDraw();
    };
    const releaseTouch = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") clearCursor();
    };
    const resetMotion = () => {
      cursor = null;
      ripples = [];
      lastRipple = null;
      for (const dot of dots) {
        dot.offsetX = 0;
        dot.offsetY = 0;
        dot.velocityX = 0;
        dot.velocityY = 0;
        dot.glow = 0;
      }
      scheduleDraw();
    };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        scheduleDraw();
      } else {
        cancelAnimationFrame(frameId);
        frameId = 0;
        resetMotion();
      }
    });

    resize();
    resizeObserver.observe(landing);
    visibilityObserver.observe(landing);
    landing.addEventListener("pointermove", moveCursor, { passive: true });
    landing.addEventListener("pointerleave", clearCursor);
    landing.addEventListener("pointerup", releaseTouch);
    landing.addEventListener("pointercancel", clearCursor);
    motionPreference.addEventListener("change", resetMotion);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      landing.removeEventListener("pointermove", moveCursor);
      landing.removeEventListener("pointerleave", clearCursor);
      landing.removeEventListener("pointerup", releaseTouch);
      landing.removeEventListener("pointercancel", clearCursor);
      motionPreference.removeEventListener("change", resetMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.grid} aria-hidden="true" />;
};

export default DotGrid;
