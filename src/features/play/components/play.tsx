import { GIRL_MATH_DEMO_URL } from "../data/gallery";
import styles from "./play.module.css";
import pageStyles from "@/components/layout/page-section.module.css";
import ScreenshotGallery from "./screenshot-gallery";

const Play = () => {
  return (
    <section className={pageStyles.section} aria-labelledby="play-title">
      <header className={`${styles.intro} ${pageStyles.header}`}>
        <h1 id="play-title" className={pageStyles.title}>
          play.
        </h1>
        <p>side quests &amp; things I wanted to exist.</p>
      </header>

      <div className={styles.content}>
        <article aria-labelledby="girl-math-title">
          <ScreenshotGallery />

          <div className={styles.project_bottom}>
            <div>
              <h2 id="girl-math-title" className={styles.project_title}>
                Girl Math
              </h2>
              <p className={styles.description}>
                A personal finance tracker built to solve my own budgeting
                frustrations. Girl Math brings spending, subscriptions, and
                savings into one judgment-free space, because getting your
                finances together shouldn't feel like a chore.
              </p>
              <ul className={styles.stack} aria-label="Technology stack">
                <li>React.</li>
                <li>TypeScript.</li>
              </ul>
            </div>
            <div className={styles.actions}>
              <a
                className={styles.launch}
                href={GIRL_MATH_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the live demo <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.source_link}
                href="https://github.com/ananyaj1/girl-math"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <details className={styles.design_details}>
            <summary>A few favorite details</summary>
            <div className={styles.details_grid}>
              <div>
                <h3>Subscriptions, on replay.</h3>
                <p>
                  An iPod-inspired playlist turns recurring charges into a
                  familiar little ritual.
                </p>
              </div>
              <div>
                <h3>A keyboard to get around.</h3>
                <p>
                  Tactile navigation and a pocket companion give a practical
                  tool its own personality.
                </p>
              </div>
            </div>
          </details>
        </article>
      </div>
    </section>
  );
};

export default Play;
