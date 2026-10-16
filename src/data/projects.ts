import type { WorkProject } from "@/types/work-project";

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: "distributed-processing",
    title: "Distributed Processing & Python Services",
    discipline: "Distributed systems · Backend engineering",
    role: "Python services, workflow architecture & AI integration",
    summary:
      "Reliable background services for 10k+ daily calls, from concurrent ingestion to AI-powered transcript processing.",
    challenge:
      "Call ingestion, file transfer, and archival span multiple stages and external services. Concurrent workers need to coordinate safely, and failed jobs need a durable path to recovery without holding up API requests.",
    outcome:
      "Distributed Python services process 10k+ daily calls with durable workflow state and dedicated recovery workflows. AWS S3 and Bedrock integrations turn call data into usable client context, reducing manual client note-taking by 80%.",
    stack: [
      "Python.",
      "FastAPI.",
      "Redis/RQ.",
      "AWS S3.",
      "AWS Bedrock.",
      "MySQL.",
    ],
    highlights: [
      "Built distributed Python services processing 10k+ daily calls, using Redis/RQ to coordinate concurrent workers and MySQL to maintain durable workflow state across ingestion, file transfer, and archival.",
      "Designed concurrency and fault-tolerance mechanisms using transactional row locking, idempotent processing, automatic retries, persisted failure states, and dedicated recovery workflows.",
      "Developed FastAPI-based asynchronous job infrastructure to decouple API requests from background workloads, with durable execution history, operational monitoring, and automated failure notifications.",
      "Integrated AWS S3 and Bedrock into production workflows, building AI-powered transcript processing and relational models that reduced manual client note-taking by 80%.",
    ],
    facts: [
      { value: "10k+", label: "calls processed daily" },
      { value: "80%", label: "less manual client note-taking" },
      { value: "Durable", label: "workflow state & execution history" },
    ],
    approach: [
      {
        title: "Separate requests from execution.",
        description:
          "FastAPI-based asynchronous job infrastructure decouples API requests from background workloads. Redis/RQ coordinates concurrent Python workers across the processing stages.",
      },
      {
        title: "Make recovery part of the system.",
        description:
          "MySQL maintains durable workflow state. Transactional row locking, idempotent processing, automatic retries, persisted failure states, and dedicated recovery workflows support safe concurrent execution and fault tolerance.",
      },
      {
        title: "Turn call data into client context.",
        description:
          "AWS S3 and Bedrock are integrated into production data workflows for transcript processing. Relational models support the resulting data, while monitoring and automated notifications surface execution failures.",
      },
    ],
  },
  {
    id: "commodity-market-data",
    title: "Commodity Market Data & Analytics",
    discipline: "Data engineering · Commodity markets",
    role: "Python ingestion pipelines & relational data modeling",
    summary:
      "An automated pipeline that retrieves, versions, and processes USDA WASDE commodity supply-and-demand reports.",
    challenge:
      "Market reports arrive as external source files and can be revised after release. Processing needs to distinguish report releases from source-file versions and track ingestion state so revised data can be handled reliably.",
    outcome:
      "Automated ingestion brings external commodity supply-and-demand data into a relational workflow. Release tracking, source-file versioning, and idempotent processing enable reliable handling of revised market data.",
    stack: ["Python.", "SQL.", "AWS."],
    highlights: [
      "Built an automated Python ingestion pipeline for USDA WASDE reports, retrieving, versioning, and processing commodity supply-and-demand data from external sources.",
      "Designed relational data models and idempotent processing workflows to track report releases, source-file versions, and ingestion state, enabling reliable processing of revised market data.",
    ],
    facts: [
      { value: "USDA WASDE", label: "commodity supply-and-demand reports" },
      { value: "Versioned", label: "source files & report releases" },
      { value: "Idempotent", label: "ingestion & revision processing" },
    ],
    approach: [
      {
        title: "Automate external report ingestion.",
        description:
          "A Python pipeline retrieves and processes USDA WASDE reports, moving commodity supply-and-demand data from external sources into a structured data workflow.",
      },
      {
        title: "Model releases and revisions explicitly.",
        description:
          "Relational models track report releases, source-file versions, and ingestion state. This gives each revision a place in the data model instead of treating every file as an unrelated input.",
      },
      {
        title: "Make repeated processing safe.",
        description:
          "Idempotent processing workflows support reliable ingestion when market data is revised or a source file needs to be processed again.",
      },
    ],
  },
  {
    id: "platform-modernization",
    title: "Full-Stack Platform Modernization",
    discipline: "Full-stack architecture · Developer experience",
    role: "Architectural pitch, migration & reusable UI foundations",
    summary:
      "An ongoing migration from legacy CFML to a decoupled React and REST API architecture, with 30% less frontend boilerplate.",
    challenge:
      "Internal commodity risk-management applications needed a path from legacy CFML to a decoupled frontend and API architecture, with consistent patterns for forms, server state, and full-stack feature development.",
    outcome:
      "The ongoing migration establishes a decoupled React and REST API architecture. A modular UI library, reusable hooks, and TanStack Query abstractions reduce frontend boilerplate by 30%, while typed models and repository patterns improve consistency.",
    stack: ["React.", "TypeScript.", "TanStack Query.", "REST APIs."],
    highlights: [
      "Led the architectural pitch and ongoing migration of internal commodity risk-management applications from legacy CFML to a decoupled React and REST API architecture.",
      "Built a modular UI library and reusable React hooks with TanStack Query to standardize forms, server-state management, and API interactions, reducing frontend boilerplate by 30%.",
      "Established strongly typed frontend models and standardized backend repository patterns to improve consistency across full-stack feature development.",
    ],
    facts: [
      { value: "30%", label: "less frontend boilerplate" },
      { value: "Decoupled", label: "React & REST API architecture" },
      { value: "Ongoing", label: "migration from legacy CFML" },
    ],
    approach: [
      {
        title: "Define the architecture and migration direction.",
        description:
          "I led the architectural pitch and ongoing migration to a decoupled React and REST API architecture for internal commodity risk-management applications.",
      },
      {
        title: "Build shared frontend foundations.",
        description:
          "A modular UI library and reusable React hooks with TanStack Query standardize forms, server-state management, and API interactions across features.",
      },
      {
        title: "Carry consistency across the stack.",
        description:
          "Strongly typed frontend models and standardized backend repository patterns give full-stack feature development a shared set of conventions.",
      },
    ],
  },
  {
    id: "internal-analytics",
    title: "Internal Analytics & Business Intelligence",
    discipline: "Backend engineering · Business intelligence",
    role: "Backend ownership, historical data models & team analytics",
    summary:
      "An analytics backend connecting client activity and revenue, from individual performance to hierarchical team reporting.",
    challenge:
      "Business users needed a connected view of client interactions, trades, visits, tasks, and calendar activity. Reporting also needed to show historical changes and extend from individual metrics to entire team hierarchies.",
    outcome:
      "Historical models connect client activity with revenue so business users can drill into client performance, analyze trends, and compare reporting periods. Hierarchical team analytics lets leaders aggregate employee metrics across their organizations.",
    stack: ["SQL.", "Lucee.", "JavaScript."],
    highlights: [
      "Owned backend development for an internal analytics platform, translating business requirements into data models and aggregation workflows spanning client interactions, trades, visits, tasks, and calendar activity.",
      "Designed historical analytics models linking client activity and revenue, enabling users to drill into client performance, analyze trends over time, and track changes across reporting periods.",
      "Extended the architecture from individual reporting to hierarchical team analytics, enabling leaders to aggregate employee metrics and evaluate performance across their organizations.",
    ],
    facts: [
      { value: "Historical", label: "client activity & revenue models" },
      { value: "Connected", label: "interactions, trades, tasks & activity" },
      { value: "Hierarchical", label: "individual-to-team analytics" },
    ],
    approach: [
      {
        title: "Translate business questions into data models.",
        description:
          "I owned backend development and translated business requirements into relational models and aggregation workflows spanning client interactions, trades, visits, tasks, and calendar activity.",
      },
      {
        title: "Keep historical performance in view.",
        description:
          "Historical analytics models link client activity and revenue, supporting drill-downs into client performance, trends over time, and comparisons across reporting periods.",
      },
      {
        title: "Extend reporting through the organization.",
        description:
          "Hierarchical team analytics builds on individual reporting so leaders can aggregate employee metrics and evaluate performance across their organizations.",
      },
    ],
  },
];
