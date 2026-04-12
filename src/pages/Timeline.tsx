import { useState } from "react";
import styles from "@/assets/css/Timeline.module.css";
import type { Timeline } from "@/types/TimelineType";

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
    <div className={`${styles.content_section} ${styles.about}`}>
      <div className={styles.work_intro}>
        <p className={styles.work_eyebrow}>Career </p>
        <h1 className={styles.page_title}>ABOUT ME.</h1>
        <p className={styles.page_subtitle}>
          Building systems that turn complexity into usable products.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.timeline}>
        {timeline.entries.map((entry) => {
          const isOpen = expanded[entry.id];
          const entryHeaderClass = entry.projects.length
            ? `${styles.entry_header} ${styles.entry_header_clickable}`
            : styles.entry_header;
          return (
            <div key={entry.id} className={styles.entry}>
              <div className={styles["entry-left"]}>
                <span className={styles.period}>{entry.period}</span>
              </div>

              <div className={styles.entry_right}>
                <div
                  className={entryHeaderClass}
                  onClick={() => entry.projects.length && toggle(entry.id)}
                >
                  <div>
                    <div className={styles.org}>{entry.org}</div>
                    <div className={styles.sub}>{entry.sub}</div>
                  </div>

                  {entry.projects.length > 0 && (
                    <span className={styles.toggle}>{isOpen ? "−" : "+"}</span>
                  )}
                </div>

                {isOpen && entry.projects.length > 0 && (
                  <div className={styles.projects}>
                    {entry.projects.map((proj, pi) => {
                      const key = `${entry.id}-${pi}`;
                      const isActive = activeProject === key;

                      return (
                        <div
                          key={pi}
                          className={styles.project}
                          style={{
                            borderLeft: isActive
                              ? "3px solid #000"
                              : "1px solid #000",
                          }}
                        >
                          <div
                            className={styles.proj_header}
                            onClick={() =>
                              setActiveProject(isActive ? null : key)
                            }
                          >
                            <span className={styles.proj_name}>
                              {proj.name}
                            </span>

                            <div className={styles.proj_right}>
                              <div className={styles.stack}>
                                {proj.stack.map((t) => (
                                  <span key={t} className={styles.tag}>
                                    {t}
                                  </span>
                                ))}
                              </div>

                              <span className={styles.proj_toggle}>
                                {isActive ? "−" : "+"}
                              </span>
                            </div>
                          </div>

                          {isActive && (
                            <ul className={styles.bullets}>
                              {proj.bullets.map((b, bi) => (
                                <li key={bi} className={styles.bullet}>
                                  {b}
                                </li>
                              ))}
                            </ul>
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

      <div className={styles.divider} />

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
            href="/ajportfolio/Resume.pdf"
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
    </div>
  );
};

export default CareerTimeline;
