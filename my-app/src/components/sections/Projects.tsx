import {ExternalLinkIcon, GithubIcon, NotebookIcon, TargetIcon, SparkIcon, CheckIcon, ArrowIcon, BrainIcon, LayersIcon, DatabaseIcon} from "../ui/Icons";

type Project = {
  index: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  impact: { value: string; label: string }[];
  stack: string[];
  demo: string;
  code: string;
  writeup: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "HuntTrack",
    tagline: "Job search, run like a pipeline",
    problem:
      "Job seekers lose track of dozens of applications across inboxes and spreadsheets, and never learn which channels actually convert.",
    solution:
      "A full-stack tracker with a kanban pipeline, saved filter views, and a weekly analytics digest that surfaces response and interview rates per source.",
    features: [
      "Drag-and-drop pipeline with stage history",
      "Composable filters saved as shareable views",
      "Weekly cohort analytics on conversion rate",
    ],
    impact: [
      { value: "3.4k", label: "apps tracked" },
      { value: "-62%", label: "admin time" },
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Chart.js"],
    demo: "https://hunttrack-five.vercel.app",
    code: "https://github.com/arpitasi1gh/hunttrack",
    writeup: "#",
  },
  {
    index: "02",
    name: "CollabFlow",
    tagline: "Real-time workspaces without the lag",
    problem:
      "Distributed teams edit the same documents blind, causing overwritten work and constant 'who's changing this?' pings.",
    solution:
      "A WebSocket collaboration hub with live cursors, presence, and CRDT-backed state so every client converges without a central lock.",
    features: [
      "Live cursors and presence at 60fps",
      "Conflict-free merges via CRDT documents",
      "Redis pub/sub fan-out across regions",
    ],
    impact: [
      { value: "<80ms", label: "sync latency" },
      { value: "500+", label: "concurrent peers" },
    ],
    stack: ["React", "WebSockets", "Redis", "Node"],
    demo: "#",
    code: "#",
    writeup: "#",
  },
  {
    index: "03",
    name: "AgentForge",
    tagline: "Build agents that actually finish tasks",
    problem:
      "LLM prototypes forget context, hallucinate tool calls, and break the moment a workflow needs more than one step.",
    solution:
      "An agent builder with retrieval-backed memory, typed tool schemas, and a multi-step reasoning loop that replays and self-corrects failed steps.",
    features: [
      "RAG memory over a Pinecone vector store",
      "Typed tool calling with schema validation",
      "Step-by-step trace viewer for debugging runs",
    ],
    impact: [
      { value: "92%", label: "task completion" },
      { value: "18", label: "built-in tools" },
    ],
    stack: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    demo: "#",
    code: "#",
    writeup: "#",
  },
];

export function ProjectCard({project, delay} : {project: Project; delay: number}) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden transition hover:border-primary/50 hover:-translate-y-0.5 flex flex-col h-full group">


      <div className="px-6 py-5 bg-surface-2/60 border-b border-border flex justify-between items-start gap-4">

        <div>
          <h3 className="font-display text-2xl leading-tight tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>

        <span className="font-mono shrink-0 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
          {project.index}
        </span>

      </div>


      <div className="px-6 py-6 bg-card flex flex-col gap-5 flex-1">

        <div>
          <div className="flex items-center gap-2 text-primary">
            <TargetIcon />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Problem</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-primary">
            <SparkIcon />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Solution</span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{project.solution}</p>
        </div>

        <ul className="space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <CheckIcon className="w-5 h-5 mt-1 shrink-0 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3">
          {project.impact.map((m) => (
            <div key={m.label} className="rounded-xl bg-surface px-4 py-3">
              <div className="font-display text-xl">{m.value}</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="font-mono rounded-full border border-border bg-surface px-2.5 py-1 text-[0.7rem] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
        
      </div>
      

      <div className="px-6 py-4 bg-surface-2/60 border-t border-border">

        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mr-2.5 inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          <ExternalLinkIcon className="w-4 h-4" />
          Live demo
        </a>

        <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:bg-surface">
          <GithubIcon className="w-4 h-4" />
          Code
        </a>

        <a href={project.writeup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <NotebookIcon className="w-4 h-4" />
          Build log
          <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>

      </div>


    </div>
  );
};

export default function Projects() {

  return (
    <div id="projects" className="w-full max-w-7xl px-5 py-20 sm:py-28 mx-auto">

      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Portfolio</span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.08]">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground font-sans">Real-world use · Real-time share · AI-native</p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 120}/>
        ))}
      </div>
      
    </div>
  );
};