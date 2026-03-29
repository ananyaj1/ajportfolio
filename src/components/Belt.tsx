import "@/assets/css/Belt.css";
import database from "@/assets/database.svg";
import develop from "@/assets/develop.svg";
import pattern from "@/assets/pattern.svg";
import system from "@/assets/system.svg";
import reactlogo from "@/assets/react.svg";
import figmalogo from "@/assets/figma.svg";

const Belt = () => {
  const footerItems = [
    { label: "Frontend Development", icon: develop },
    { label: "Backend Development", icon: pattern },
    { label: "API Design", icon: system },
    { label: "UI Design", icon: figmalogo },
    { label: "Data Pipelines", icon: database },
    { label: "Component Architecture", icon: reactlogo },
  ];
  const repeatedItems = [...footerItems, ...footerItems];
  return (
    <div className="conveyerbelt">
      {repeatedItems.map((item, i) => (
        <div className="item" key={i}>
          {item.label} <img src={item.icon} />
        </div>
      ))}
    </div>
  );
};
export default Belt;
