import database from "@/assets/icons/database.svg";
import develop from "@/assets/icons/develop.svg";
import pattern from "@/assets/icons/pattern.svg";
import system from "@/assets/icons/system.svg";
import reactlogo from "@/assets/icons/react.svg";
import figmalogo from "@/assets/icons/figma.svg";

export type FooterItem = { label: string; icon: string };

export const footerItems: FooterItem[] = [
  { label: "end-to-end page design & delivery", icon: develop },
  { label: "schema design for high-volume applications", icon: database },
  {
    label: "high-throughput, multi-threaded data pipelines",
    icon: system,
  },
  { label: "UI & interface design for business needs", icon: figmalogo },
  { label: "scalable data architecture", icon: pattern },
  { label: "reusable component & hook libraries", icon: reactlogo },
];
