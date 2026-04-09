import type { Layer } from "@/types/CallSystemType";
import type { FooterItem } from "@/types/GenericType";
import database from "@/assets/icons/database.svg";
import develop from "@/assets/icons/develop.svg";
import pattern from "@/assets/icons/pattern.svg";
import system from "@/assets/icons/system.svg";
import reactlogo from "@/assets/icons/react.svg";
import figmalogo from "@/assets/icons/figma.svg";

export const CALL_PROJECT_LAYERS: Layer[] = [
  {
    id: "ingestion",
    label: "Ingestion Layer",
    tab: "Ingestion",
    subtitle: "Distributed Call Intake",
    stack: ["Python", "AWS S3", "REST APIs"],
    summary:
      "Horizontally scalable workers pull calls from a third-party provider via REST polling, with scheduled job assignment coordinating work across workers. Overlapping execution is handled safely through idempotent processing and state tracking, enabling reliable ingestion of 10k+ calls daily with no single point of failure.",
    bullets: [
      "Scheduled job assignment distributes ingestion work across workers",
      "Overlapping execution handled via idempotent processing and state checks",
      "Status polling loop with exponential back-off",
      "Raw audio + metadata transfer to S3 and Global Relay",
      "Daily integrity audit ensures 100% data catch-up",
    ],
  },
  {
    id: "processing",
    label: "Processing Layer",
    tab: "Processing",
    subtitle: "Reconciliation & Consistency",
    stack: ["Python", "MySQL", "CFML"],
    summary:
      "A reconciliation and integrity layer that continuously audits ingested data against the source provider, detecting and repairing inconsistencies introduced by asynchronous, distributed ingestion. Ensures end-to-end completeness across 10k+ daily records.",
    bullets: [
      "Reconciliation checks between provider API and internal database",
      "Monitors ingestion state to identify stuck or long-running jobs",
      "Tracks repeated failures and high retry counts to surface unstable pipeline behavior",
      "Safely reassigns job ownership and status to recover from failed or overlapping execution",
      "Alerts the team on persistent failures or anomalies to ensure system health",
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence Layer",
    tab: "Intelligence",
    subtitle: "AI Transcript Processing",
    stack: ["AWS Bedrock", "MySQL", "Python"],
    summary:
      "Archived calls are routed through AWS Bedrock to generate structured, searchable summaries — reducing manual note-taking effort by 80% and making call data queryable at scale.",
    bullets: [
      "Trigger on S3 archive event via Lambda",
      "Bedrock prompt chain: transcribe → summarize → tag",
      "Structured JSON output: topics, action items, sentiment",
      "Embeddings stored for semantic search",
      "Fallback path for low-confidence outputs",
    ],
  },
  {
    id: "storage",
    label: "Storage Layer",
    tab: "Storage",
    subtitle: "Hot Storage & Compliant Archival",
    stack: ["S3", "Global Relay", "MySQL"],
    summary:
      "Centralized storage layer managing call data across object storage, compliant archival, and relational state. S3 serves as hot storage for active pipeline operations, Global Relay provides long-term compliant retention, and MySQL tracks ingestion state and metadata.",
    bullets: [
      "S3 stores audio, transcripts, and metadata",
      "MySQL tracks call metadata, status, and job state",
      "Global Relay archives parsed conversations for compliance and audit",
      "Stored data supports validation, summarization, and downstream processing",
      "Storage layer acts as source of truth for pipeline integrity",
    ],
  },
  {
    id: "application",
    label: "Application Layer",
    tab: "Application",
    subtitle: "React / TypeScript Dashboard",
    stack: ["React", "TypeScript", "REST API"],
    summary:
      "A real-time dashboard built on the new architecture, enabling filtering, participant management, and in-place editing of AI-generated summaries, delivered as a clean React/TypeScript SPA.",
    bullets: [
      "Real-time filtering by date, participant, and ingestion status",
      "Inline editing of AI-generated summaries",
      "Participant management with role assignment",
      "Export functionality for call data and summaries",
      "Dynamic UI in response to pipeline and status changes",
    ],
  },
];

export const PLATFORM_MODERNIZATION_LAYER = {
  id: "platform",
  label: "Platform Modernization",
  subtitle: "Legacy Migration & Architecture",
  stack: ["React", "TypeScript", "Tanstack Query", "REST APIs"],
  summary:
    "Led the architectural pitch and ongoing migration off a legacy CFML stack, introducing a modular UI library, standardized backend repository patterns, and the first fully end-to-end implementation of the new architecture.",
  bullets: [
    "Architected and championed the migration strategy to a decoupled React/RESTful stack",
    "Built reusable hooks and TanStack Query abstractions for form state and API interactions — 30% reduction in frontend boilerplate",
    "Defined strongly-typed request/entity models, centralized error handling, and scalable CRUD patterns",
    "Delivered the first end-to-end feature on the new architecture, establishing patterns for the team",
  ],
};

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
