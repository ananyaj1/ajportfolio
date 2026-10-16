import { useEffect, useId, useRef, useState } from "react";
import { GIRL_MATH_FRAMES, girlMathScreenshotSrc } from "../data/gallery";
import styles from "./play.module.css";

type GalleryFrame = (typeof GIRL_MATH_FRAMES)[number];

const ScreenshotGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openFrame, setOpenFrame] = useState<GalleryFrame | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const selectedIndexRef = useRef(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dragRef = useRef<{ x: number; scrollLeft: number } | null>(null);
  const draggedRef = useRef(false);
  const dialogTitleId = useId();
  const galleryId = useId();
  const selectedFrame = GIRL_MATH_FRAMES[selectedIndex];

  useEffect(() => {
    if (openFrame && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [openFrame]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new ResizeObserver(() => {
      const frame = gallery.querySelectorAll<HTMLElement>(
        "[data-gallery-frame]",
      )[selectedIndexRef.current];
      if (!frame) return;
      const galleryBounds = gallery.getBoundingClientRect();
      const frameBounds = frame.getBoundingClientRect();
      gallery.scrollTo({
        left:
          gallery.scrollLeft +
          frameBounds.left +
          frameBounds.width / 2 -
          galleryBounds.left -
          gallery.clientWidth / 2,
        behavior: "instant",
      });
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  const closestFrameIndex = () => {
    const gallery = galleryRef.current;
    if (!gallery) return 0;
    const center =
      gallery.getBoundingClientRect().left + gallery.clientWidth / 2;
    const frames = Array.from(
      gallery.querySelectorAll<HTMLElement>("[data-gallery-frame]"),
    );
    return frames.reduce((nearest, frame, index) => {
      const distance = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        return Math.abs(rect.left + rect.width / 2 - center);
      };
      return distance(frame) < distance(frames[nearest]) ? index : nearest;
    }, 0);
  };

  const selectFrame = (index: number) => {
    const gallery = galleryRef.current;
    const nextIndex =
      (index + GIRL_MATH_FRAMES.length) % GIRL_MATH_FRAMES.length;
    const frame = gallery?.querySelectorAll<HTMLElement>(
      "[data-gallery-frame]",
    )[nextIndex];
    if (!gallery || !frame) return;
    const galleryBounds = gallery.getBoundingClientRect();
    const frameBounds = frame.getBoundingClientRect();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    gallery.scrollTo({
      left:
        gallery.scrollLeft +
        frameBounds.left +
        frameBounds.width / 2 -
        galleryBounds.left -
        gallery.clientWidth / 2,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <>
      <div
        className={styles.gallery}
        role="region"
        aria-roledescription="carousel"
        aria-label="Girl Math pages"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            selectFrame(selectedIndex + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
      >
        <div
          ref={galleryRef}
          id={galleryId}
          className={styles.viewport}
          onScroll={() => {
            const index = closestFrameIndex();
            selectedIndexRef.current = index;
            setSelectedIndex(index);
          }}
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            draggedRef.current = false;
            dragRef.current = {
              x: event.clientX,
              scrollLeft: event.currentTarget.scrollLeft,
            };
          }}
          onPointerMove={(event) => {
            const drag = dragRef.current;
            if (!drag) return;
            const delta = event.clientX - drag.x;
            if (Math.abs(delta) > 6) {
              draggedRef.current = true;
              event.currentTarget.dataset.dragging = "true";
              event.currentTarget.setPointerCapture(event.pointerId);
            }
            if (draggedRef.current) {
              event.preventDefault();
              event.currentTarget.scrollLeft = drag.scrollLeft - delta;
            }
          }}
          onPointerUp={(event) => {
            dragRef.current = null;
            delete event.currentTarget.dataset.dragging;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
            if (draggedRef.current) selectFrame(closestFrameIndex());
          }}
          onPointerCancel={(event) => {
            dragRef.current = null;
            delete event.currentTarget.dataset.dragging;
          }}
          onClickCapture={(event) => {
            if (draggedRef.current) {
              event.preventDefault();
              event.stopPropagation();
              draggedRef.current = false;
            }
          }}
        >
          {GIRL_MATH_FRAMES.map((frame, index) => (
            <figure
              key={frame.screen}
              data-gallery-frame
              className={`${styles.frame} ${index === selectedIndex ? styles.selected : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${frame.label}, ${index + 1} of ${GIRL_MATH_FRAMES.length}`}
            >
              <div className={styles.preview}>
                <img
                  src={girlMathScreenshotSrc(frame.image)}
                  alt={`Girl Math ${frame.label} page with sample data`}
                  className={styles.screen}
                  loading={index === 0 ? "eager" : "lazy"}
                  width={780}
                  height={1560}
                  draggable={false}
                />
                <button
                  className={styles.open_frame}
                  type="button"
                  onClick={() => {
                    if (index === selectedIndex) setOpenFrame(frame);
                    else selectFrame(index);
                  }}
                  aria-label={
                    index === selectedIndex
                      ? `View full ${frame.label} screenshot`
                      : `Show ${frame.label}`
                  }
                >
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </figure>
          ))}
        </div>

        <div className={styles.gallery_bar}>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Previous Girl Math page"
              aria-controls={galleryId}
              onClick={() => selectFrame(selectedIndex - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div
              className={styles.current_page}
              aria-live="polite"
              aria-atomic="true"
            >
              <p className={styles.frame_name}>{selectedFrame.label}</p>
              <p className={styles.count}>
                {selectedIndex + 1} / {GIRL_MATH_FRAMES.length}
              </p>
            </div>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Next Girl Math page"
              aria-controls={galleryId}
              onClick={() => selectFrame(selectedIndex + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <button
            type="button"
            className={styles.text_link}
            onClick={() => setOpenFrame(selectedFrame)}
          >
            View full screenshot
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={dialogTitleId}
        onClose={() => setOpenFrame(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className={styles.dialog_content}>
          <header className={styles.dialog_header}>
            <h2 id={dialogTitleId}>{openFrame?.label}</h2>
            <button
              type="button"
              className={styles.close}
              onClick={() => dialogRef.current?.close()}
              aria-label="Close preview"
            >
              ×
            </button>
          </header>
          {openFrame && (
            <div className={styles.preview}>
              <img
                src={girlMathScreenshotSrc(openFrame.image)}
                alt={`Girl Math ${openFrame.label} page with sample data`}
                className={styles.screen}
                width={780}
                height={1560}
              />
            </div>
          )}
          <p className={styles.dialog_note}>
            Sample data{openFrame?.status ? ` · ${openFrame.status}` : ""}
          </p>
        </div>
      </dialog>
    </>
  );
};

export default ScreenshotGallery;
