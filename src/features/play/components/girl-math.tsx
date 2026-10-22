import { GIRL_MATH } from "../data/gallery";
import styles from "./play.module.css";
import ScreenshotGallery from "./screenshot-gallery";

const GirlMath = () => {
  return (
    <article aria-labelledby="girl-math-title">
      <ScreenshotGallery
        projectName={GIRL_MATH.projectName}
        frames={GIRL_MATH.frames}
        note={GIRL_MATH.note}
        theme={GIRL_MATH.theme}
      />

      <div className={styles.project_bottom}>
        <div>
          <h2 id="girl-math-title" className={styles.project_title}>
            {GIRL_MATH.projectName}
          </h2>
          <p className={styles.description}>
            A personal finance tracker built to solve my own budgeting
            frustrations. Girl Math brings spending, subscriptions, and savings
            into one judgment-free space, because getting your finances together
            shouldn't feel like a chore.
          </p>
          <ul
            className={styles.stack}
            aria-label={`${GIRL_MATH.projectName} technology stack`}
          >
            <li>React.</li>
            <li>TypeScript.</li>
          </ul>
        </div>
        <div className={styles.actions}>
          <a
            className={styles.launch}
            href={GIRL_MATH.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the live demo <span aria-hidden="true">↗</span>
          </a>
          <a
            className={styles.source_link}
            href={GIRL_MATH.sourceUrl}
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
              An iPod-inspired playlist turns recurring charges into a familiar
              little ritual.
            </p>
          </div>
          <div>
            <h3>A keyboard to get around.</h3>
            <p>
              Tactile navigation and a pocket companion give a practical tool
              its own personality.
            </p>
          </div>
        </div>
      </details>
    </article>
  );
};

export default GirlMath;
