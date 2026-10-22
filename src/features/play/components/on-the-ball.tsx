import { ON_THE_BALL } from "../data/gallery";
import styles from "./play.module.css";
import ScreenshotGallery from "./screenshot-gallery";

const OnTheBall = () => {
  return (
    <article aria-labelledby="on-the-ball-title">
      <ScreenshotGallery
        projectName={ON_THE_BALL.projectName}
        frames={ON_THE_BALL.frames}
        note={ON_THE_BALL.note}
        theme={ON_THE_BALL.theme}
      />

      <div className={styles.project_bottom}>
        <div>
          <h2 id="on-the-ball-title" className={styles.project_title}>
            {ON_THE_BALL.projectName}
          </h2>
          <p className={styles.description}>
            I kept missing concert presales and finding resale tickets that cost
            way more. So I built On the Ball to keep track of upcoming presales,
            so I never miss a show I care about.
          </p>
          <ul
            className={styles.stack}
            aria-label={`${ON_THE_BALL.projectName} technology stack`}
          >
            <li>Next.js.</li>
            <li>TypeScript.</li>
            <li>Ticketmaster API.</li>
          </ul>
        </div>
        <div className={styles.actions}>
          <a
            className={styles.launch}
            href={ON_THE_BALL.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the live demo <span aria-hidden="true">↗</span>
          </a>
          <a
            className={styles.source_link}
            href={ON_THE_BALL.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <details className={styles.design_details}>
        <summary>What I'm building next</summary>
        <div className={`${styles.details_grid} ${styles.next_steps}`}>
          <div>
            <h3>A place to sign in.</h3>
            <p>Add login so each listener can have their own space.</p>
          </div>
          <div>
            <h3>Follows that stick.</h3>
            <p>
              Save followed artists to an account so they stay with me between
              visits and across devices.
            </p>
          </div>
          <div>
            <h3>My artists, in one place.</h3>
            <p>
              Build a separate page to find, follow, and manage the artists I
              care about.
            </p>
          </div>
        </div>
      </details>
    </article>
  );
};

export default OnTheBall;
