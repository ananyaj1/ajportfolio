import styles from "@/assets/css/TabBar.module.css";
import type { JSX } from "react";

type TabItem = {
  id: string;
  label: string;
};

type TabBarProps = {
  tabs: TabItem[];
  active: string;
  onChange: (id: string) => void;
};

const TabBar = ({ tabs, active, onChange }: TabBarProps): JSX.Element => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__inner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${
              tab.id === active ? styles.tab__active : ""
            }`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
