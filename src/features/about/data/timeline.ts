import type { Timeline } from "../types/timeline";
import { WORK_PROJECTS } from "@/data/projects";

export const CAREER_TIMELINE: Timeline = {
  name: "Ananya Joshi",
  entries: [
    {
      id: "umich",
      type: "education",
      period: "Sept 2019 — May 2023",
      org: "University of Michigan",
      sub: "Bachelor of Engineering in Computer Science · Ann Arbor, MI",
      projects: [],
    },
    {
      id: "gap",
      type: "work",
      period: "May — Aug 2022",
      org: "GAP",
      sub: "Software Engineer Intern",
      projects: [
        {
          name: "Pricing & Promotion Validator",
          stack: ["React.", "Java.", "JUnit.", "REST."],
          bullets: [
            "Identified a bottleneck in manual promotion verification; built a prototype to automate the audit process via internal REST APIs.",
            "Designed wireframes and implemented a React interface to cross-reference real-time pricing against promotional rules.",
            "Partnered with two engineers to deliver the client-side implementation — 30% reduction in verification time during pilot.",
            "Developed a JUnit test suite to validate secure data handling for credit card storage modules.",
          ],
        },
      ],
    },
    {
      id: "cih",
      type: "work",
      period: "Aug 2023 — Present",
      org: "CIH",
      sub: "Software Engineer · Commodity & Ingredient Hedging · Chicago, IL",
      projects: WORK_PROJECTS.map((project) => ({
        id: project.id,
        name: project.title,
        stack: project.stack,
        bullets: project.highlights,
      })),
    },
  ],
};
