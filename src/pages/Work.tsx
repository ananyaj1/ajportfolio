import LayerPanel from "@/components/LayerPanel";
import ProjectSection from "@/components/ProjectSection";
import TabbedLayers from "@/components/TabbedLayers";
import {
  CALL_PROJECT_LAYERS,
  PLATFORM_MODERNIZATION_LAYER,
} from "@/constants/Layers";
import wrench from "@/assets/icons/wrench.svg";
import styles from "@/assets/css/Work.module.css";

const Work = () => {
  return (
    <section className={`${styles.content_section} ${styles.work}`}>
      <div className={styles.work_intro}>
        <p className={styles.work_eyebrow}>Portfolio</p>
        <h1 className={styles.page_title}>PROJECT WORK.</h1>
        <p className={styles.page_subtitle}>
          Selected work from my career across backend systems, AI workflows, and
          product development.
        </p>
      </div>

      <ProjectSection eyebrow="Distributed Call Processing System">
        <TabbedLayers layers={CALL_PROJECT_LAYERS} />
      </ProjectSection>
      <hr className={styles.divider} />
      <ProjectSection eyebrow="Platform Modernization and Architecture">
        <LayerPanel layer={PLATFORM_MODERNIZATION_LAYER} />
      </ProjectSection>

      <div className="coming_soon">
        <p className="coming_soon_text">Coming Soon</p>
        <img src={wrench} alt="" />
      </div>
    </section>
  );
};
export default Work;
