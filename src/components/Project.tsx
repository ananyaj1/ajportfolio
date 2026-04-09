import { useState } from "react";
import styles from "@/assets/css/Project.module.css";
import TabBar from "@/components/TabBar";
import LayerPanel from "@/components/LayerPanel";
import { LAYERS } from "@/constants/Layers";

const Project = () => {
  const [active, setActive] = useState("ingestion");
  const layer = LAYERS.find((l) => l.id === active) ?? LAYERS[0];
  const tabs = LAYERS.map((l) => ({
    id: l.id,
    label: l.label,
  }));
  return (
    <div className={styles.root}>
      <div className={styles.project_section}>
        <p className={styles.eyebrow}>Distributed Call Processing System</p>
        <TabBar tabs={tabs} active={active} onChange={setActive} />
      </div>
      <LayerPanel key={active} layer={layer} />
    </div>
  );
};
export default Project;
