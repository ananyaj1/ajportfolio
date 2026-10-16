import { useState } from "react";
import styles from "./career-timeline.module.css";
import pageStyles from "@/components/layout/page-section.module.css";
import type { Timeline } from "../types/timeline";

type TimelineProps = {
  timeline: Timeline;
};

const CareerTimeline = ({ timeline }: TimelineProps) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    cih: true,
  });
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className={`${pageStyles.section}`}>
      <div className={pageStyles.header}>
        <h1 className={pageStyles.title}>about me.</h1>
      </div>

      <div className={styles.timeline}>
        {timeline.entries.map((entry) => {
          const isOpen = expanded[entry.id];
          const entryHeaderClass = entry.projects.length
            ? `${styles.entry_header} ${styles.entry_header_clickable}`
            : styles.entry_header;
          const EntryHeader = entry.projects.length ? "button" : "div";
          return (
            <div key={entry.id} className={styles.entry}>
              <div className={styles.entry_left}>
                <span className={styles.period}>{entry.period}</span>
              </div>

              <div className={styles.entry_right}>
                <EntryHeader
                  className={entryHeaderClass}
                  onClick={() => entry.projects.length && toggle(entry.id)}
                  type={entry.projects.length ? "button" : undefined}
                  aria-expanded={
                    entry.projects.length ? Boolean(isOpen) : undefined
                  }
                  aria-controls={
                    entry.projects.length ? `${entry.id}-projects` : undefined
                  }
                >
                  <span>
                    <span className={styles.org}>{entry.org}</span>
                    <span className={styles.sub}>{entry.sub}</span>
                  </span>

                  {entry.projects.length > 0 && (
                    <span className={styles.toggle} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  )}
                </EntryHeader>

                {isOpen && entry.projects.length > 0 && (
                  <div className={styles.projects} id={`${entry.id}-projects`}>
                    {entry.projects.map((proj, pi) => {
                      const key = `${entry.id}-${pi}`;
                      const isActive = activeProject === key;

                      return (
                        <div key={pi} className={styles.project}>
                          <button
                            type="button"
                            className={styles.proj_header}
                            aria-expanded={isActive}
                            aria-controls={`${key}-details`}
                            onClick={() =>
                              setActiveProject(isActive ? null : key)
                            }
                          >
                            <span className={styles.proj_name}>
                              {proj.name}
                            </span>

                            <span className={styles.proj_right}>
                              <span className={styles.stack}>
                                {proj.stack.map((t) => (
                                  <span key={t} className={styles.tag}>
                                    {t}
                                  </span>
                                ))}
                              </span>

                              <span
                                className={styles.proj_toggle}
                                aria-hidden="true"
                              />
                            </span>
                          </button>

                          {isActive && (
                            <div id={`${key}-details`}>
                              <ul className={styles.bullets}>
                                {proj.bullets.map((b, bi) => (
                                  <li key={bi} className={styles.bullet}>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <footer className={styles.footer}>
        <span className={styles.footer_label}>
          ananyajoshi100@gmail.com · (609) 865-3175
        </span>
        <span className={styles.footer_label}>
          <a
            href="https://www.linkedin.com/in/ananyajoshi2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>{" "}
          ·{" "}
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
          ·{" "}
          <a
            href="https://github.com/ananyaj1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </span>
      </footer>
    </section>
  );
};

export default CareerTimeline;
