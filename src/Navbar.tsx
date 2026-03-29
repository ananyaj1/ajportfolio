import { useState } from "react";
import "@/Navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState("about");

  const getItemClass = (name: string) =>
    `item ${selected === name ? "active" : ""}`;

  const handleSelection = (section: string) => {
    setSelected(section);
  };

  return (
    <div className="navbar">
      <button
        className={getItemClass("about")}
        onClick={() => handleSelection("about")}
      >
        about me
      </button>

      <button
        className={getItemClass("work")}
        onClick={() => handleSelection("work")}
      >
        work
      </button>

      <button
        className={getItemClass("play")}
        onClick={() => handleSelection("play")}
      >
        play
      </button>
    </div>
  );
};

export default Navbar;
