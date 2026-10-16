import { Section } from "@/types/navigation";

export const resolveRoute = (hash: string) => {
  const path = hash.replace(/^#\/?/, "");
  const [section] = path.split("/");

  if (section === Section.ABOUT) return { section: Section.ABOUT };
  if (section === Section.PLAY) return { section: Section.PLAY };
  return { section: Section.WORK };
};
