import styles from "@/assets/css/LayerPanel.module.css";

type Layer = {
  label: string;
  subtitle: string;
  stack: string[];
  summary: string;
  bullets: string[];
};

type LayerPanelProps = {
  layer: Layer;
};

const LayerPanel = ({ layer }: LayerPanelProps) => {
  return (
    <div className={styles.pl_panel} key={layer.label}>
      <h2 className={styles.pl_title}>{`${layer.label} Layer`}</h2>
      <p className={styles.pl_sub}>{layer.subtitle}</p>

      <div className={styles.pl_tags}>
        {layer.stack.map((t) => (
          <span key={t} className={styles.pl_tag}>
            {t}
          </span>
        ))}
      </div>

      <p className={styles.pl_summary}>{layer.summary}</p>

      <ul className={styles.pl_bullets}>
        {layer.bullets.map((b) => (
          <li key={b} className={styles.pl_bullet}>
            <span className={styles.pl_bullet__line} />
            <span className={styles.pl_bullet__text}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayerPanel;
