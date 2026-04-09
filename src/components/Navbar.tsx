import styles from "@/assets/css/Navbar.module.css";
import type { JSX } from "react";
import type { Section } from "@/types/GenericType";

type NavbarProps = {
  selected: Section;
  onSelect: (section: Section) => void;
};

const Navbar = ({ selected, onSelect }: NavbarProps): JSX.Element => {
  const getItemClass = (name: Section) =>
    `${styles.item} ${selected === name ? styles.active : ""}`;

  return (
    <div className={styles.navbar}>
      <button className={getItemClass("work")} onClick={() => onSelect("work")}>
        work
      </button>

      <button
        className={getItemClass("about")}
        onClick={() => onSelect("about")}
      >
        about me
      </button>

      <button className={getItemClass("play")} onClick={() => onSelect("play")}>
        play
      </button>
    </div>
  );
};
export default Navbar;
