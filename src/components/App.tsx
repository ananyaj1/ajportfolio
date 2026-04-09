import styles from "@/assets/css/App.module.css";

import Navbar from "@/components/Navbar";
import Belt from "@/components/Belt";
import type { JSX } from "react";
import Project from "@/components/Project";
import { useState } from "react";
import { Section } from "@/types/GenericType";
import wrench from "@/assets/icons/wrench.svg";

const App = (): JSX.Element => {
  const [selected, setSelected] = useState<Section>(Section.WORK);

  const renderSection = () => {
    switch (selected) {
      case Section.WORK:
        return (
          <section className={`${styles.content_section} ${styles.work}`}>
            <div className={styles.work_intro}>
              <p className={styles.work_eyebrow}>Portfolio</p>
              <h1 className={styles.page_title}>PROJECT WORK.</h1>
              <p className={styles.page_subtitle}>
                Selected work from my career across backend systems, AI
                workflows, and product development.
              </p>
            </div>

            <Project />
            <div className="coming_soon">
              <p className="coming_soon_text">Coming Soon</p>
              <img src={wrench} alt="" />
            </div>
          </section>
        );

      case Section.ABOUT:
        return (
          <section className={`${styles.content_section} ${styles.about}`}>
            <div className={`coming_soon ${styles.empty_page}`}>
              <p className="coming_soon_text">Coming Soon</p>
              <img src={wrench} alt="" />
            </div>
          </section>
        );

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
      <Navbar selected={selected} onSelect={setSelected} />

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

      <main className={styles.page_content}>{renderSection()}</main>
    </div>
  );
};

export default App;
