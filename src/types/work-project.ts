export type WorkProject = {
  id: string;
  title: string;
  discipline: string;
  role: string;
  summary: string;
  challenge: string;
  outcome: string;
  stack: string[];
  highlights: string[];
  facts: { value: string; label: string }[];
  approach: { title: string; description: string }[];
};
