import pageStyles from "@/components/layout/page-section.module.css";
import { WORK_PROJECTS } from "@/data/projects";
import styles from "./work.module.css";

const Work = () => (
  <section className={pageStyles.section}>
    <div className={pageStyles.header}>
      <h1 className={pageStyles.title}>project work.</h1>
      <p className={styles.overview_intro}>
        Selected work at Commodity & Ingredient Hedging.
      </p>
    </div>

    <div className={styles.project_list}>
      {WORK_PROJECTS.map((project) => (
        <article className={styles.project_card} key={project.id}>
          <div>
            <h2 className={styles.project_title}>{project.title}</h2>
            <p className={styles.project_summary}>{project.summary}</p>
            <ul className={styles.project_tags} aria-label="Technology stack">
              {project.stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className={styles.project_aside}>
            <p className={styles.project_fact}>
              <strong>{project.facts[0].value}</strong>
              <span>{project.facts[0].label}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
    <div className={styles.overview_footer}>
      <a className={styles.project_link} href="#/about">
        about me <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
);

export default Work;
