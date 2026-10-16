import styles from "./navbar.module.css";
import type { JSX } from "react";
import type { Section } from "@/types/navigation";

type NavbarProps = {
  selected: Section;
  onSelect: (section: Section) => void;
};

const Navbar = ({ selected, onSelect }: NavbarProps): JSX.Element => {
  const getItemClass = (name: Section) =>
    `${styles.item} ${selected === name ? styles.active : ""}`;

  return (
    <div className={styles.navbar}>
      <button
        className={getItemClass("work")}
        aria-current={selected === "work" ? "page" : undefined}
        onClick={() => onSelect("work")}
      >
        work
      </button>

      <button
        className={getItemClass("about")}
        aria-current={selected === "about" ? "page" : undefined}
        onClick={() => onSelect("about")}
      >
        about me
      </button>

      <button
        className={getItemClass("play")}
        aria-current={selected === "play" ? "page" : undefined}
        onClick={() => onSelect("play")}
      >
        play
      </button>
    </div>
  );
};
export default Navbar;
