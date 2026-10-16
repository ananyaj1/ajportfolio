import styles from "./belt.module.css";
import type { JSX } from "react";
import { footerItems } from "./belt-items";
import type { FooterItem } from "./belt-items";

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
