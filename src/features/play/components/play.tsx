import styles from "./play.module.css";
import pageStyles from "@/components/layout/page-section.module.css";
import GirlMath from "./girl-math";
import OnTheBall from "./on-the-ball";

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
        <OnTheBall />
        <GirlMath />
      </div>
    </section>
  );
};

export default Play;
