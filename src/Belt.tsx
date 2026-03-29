import "@/Belt.css";

const Belt = () => {
  const footerItems = [
    { label: "Frontend Development", icon: "/develop.svg" },
    { label: "Backend Development", icon: "/pattern.svg" },
    { label: "API Design", icon: "/system.svg" },
    { label: "UI Design", icon: "/figma.svg" },
    { label: "Data Pipelines", icon: "/database.svg" },
    { label: "Component Architecture", icon: "/react.svg" },
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
