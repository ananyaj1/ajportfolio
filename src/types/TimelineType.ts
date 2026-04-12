export type Timeline = {
  name: string;
  entries: Entry[];
};

export type Entry = {
  id: string;
  type: "education" | "work";
  period: string;
  org: string;
  sub: string;
  projects: Project[];
};

export type Project = {
  name: string;
  stack: string[];
  bullets: string[];
};
