import styles from "./app.module.css";

import Navbar from "@/components/layout/navbar";
import Belt from "@/components/layout/belt";
import DotGrid from "@/components/layout/dot-grid";
import type { JSX } from "react";
import { useRef, useSyncExternalStore } from "react";
import { Section } from "@/types/navigation";
import Work from "@/features/work/components/work";
import Play from "@/features/play/components/play";
import { CAREER_TIMELINE } from "@/features/about/data/timeline";
import CareerTimeline from "@/features/about/components/career-timeline";
import { resolveRoute } from "./routes/navigation";

const subscribeToNavigation = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};
const getHash = () => window.location.hash;

const App = (): JSX.Element => {
  const hash = useSyncExternalStore(subscribeToNavigation, getHash, () => "");
  const { section: selected } = resolveRoute(hash);
  const contentRef = useRef<HTMLElement | null>(null);

  const handleSelect = (section: Section) => {
    const nextHash = `#/${section}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }

    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const renderSection = () => {
    switch (selected) {
      case Section.WORK:
        return <Work />;

      case Section.ABOUT:
        return <CareerTimeline timeline={CAREER_TIMELINE} />;

      case Section.PLAY:
        return <Play />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Navbar selected={selected} onSelect={handleSelect} />

      <section className={styles.landing}>
        <DotGrid />
        <div className={styles.bio}>
          <div className={styles.name}>ANANYA JOSHI.</div>

          <div className={styles.subtitle}>
            <div className={styles.typewriter}>
              <div className={styles.typewrite}>
                fullstack engineer bridging complex data and clean design
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <Belt />
        </div>
      </section>

      <main ref={contentRef} className={styles.page_content} tabIndex={-1}>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
