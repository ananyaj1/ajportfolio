import styles from "@/assets/css/Belt.module.css";
import type { JSX } from "react";
import { footerItems } from "@/constants/Layers";
import type { FooterItem } from "@/types/Layout";

const Belt = (): JSX.Element => {
  const repeatedItems: FooterItem[] = [...footerItems, ...footerItems];
  return (
    <div className={styles.conveyerbelt}>
      {repeatedItems.map((item, i) => (
        <div className={styles.item} key={i}>
          {item.label} <img src={item.icon} />
        </div>
      ))}
    </div>
  );
};
export default Belt;
