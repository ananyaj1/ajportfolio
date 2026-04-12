import styles from "@/assets/css/App.module.css";

import Navbar from "@/components/Navbar";
import Belt from "@/components/Belt";
import type { JSX } from "react";
import { useRef, useState } from "react";
import { Section } from "@/types/Layout";
import wrench from "@/assets/icons/wrench.svg";
import Work from "@/pages/Work";
import { CAREER_TIMELINE } from "@/constants/Layers";
import CareerTimeline from "@/pages/Timeline";

const App = (): JSX.Element => {
  const [selected, setSelected] = useState<Section>(Section.WORK);
  const contentRef = useRef<HTMLElement | null>(null);

  const handleSelect = (section: Section) => {
    setSelected(section);

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
        return (
          <section className={`${styles.content_section} ${styles.play}`}>
            <div className={`coming_soon ${styles.empty_page}`}>
              <p className="coming_soon_text">Coming Soon</p>
              <img src={wrench} alt="" />
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Navbar selected={selected} onSelect={handleSelect} />

      <section className={styles.landing}>
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

      <main ref={contentRef} className={styles.page_content}>
        {renderSection()}
      </main>
    </div>
  );
};

export default App;
