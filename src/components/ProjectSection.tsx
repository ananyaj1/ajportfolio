import type { ReactNode } from "react";
import styles from "@/assets/css/ProjectSection.module.css";
type ProjectSectionProps = {
  eyebrow: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const ProjectSection = ({
  eyebrow,
  title,
  subtitle,
  children,
}: ProjectSectionProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.project_section}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {children}
    </div>
  );
};

export default ProjectSection;
