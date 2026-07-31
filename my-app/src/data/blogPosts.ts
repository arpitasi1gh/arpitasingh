export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-agents-langchain",
    title: "Building Autonomous Agents with LangChain",
    excerpt: "A deep dive into orchestrating LLMs, managing tool calls, and implementing memory retrieval for complex multi-step tasks.",
    date: "June 2026",
    readTime: "6 min read",
    tags: ["AI", "LangChain", "Python"],
    content:`
      # Building Autonomous Agents with LangChain

      This is a **real Markdown** article! 
      *   We can write lists
      *   And use **bold** or *italic* text.
        
      ## Orchestrating LLMs
      Here is how the agent loops work.
    `
  },
  {
    slug: "real-time-collaboration-websockets",
    title: "Scaling Real-Time Collaboration with WebSockets",
    excerpt: "How I built CollabFlow using CRDTs and Redis Pub/Sub to handle 500+ concurrent peers with sub-80ms sync latency.",
    date: "April 2026",
    readTime: "8 min read",
    tags: ["WebSockets", "Redis", "React"],
    content:`
      # Scaling Real-Time Collaboration with WebSockets

      CollabFlow was built using **CRDTs** to ensure data consistency.
      *   Redis Pub/Sub handled broadcasting.
      *   Latency was kept under 80ms.
    `
  },
  {
    slug: "fullstack-job-tracker-prisma",
    title: "Building a Job Tracker with Next.js and Prisma",
    excerpt: "Lessons learned while architecting a full-stack kanban-style tracker with complex filtering and cohort analytics.",
    date: "March 2026",
    readTime: "5 min read",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    content:`
      # Building a Job Tracker with Next.js and Prisma

      This project required advanced **database indexing** and **server-side rendering** for performance.
      *   The kanban board used \`react-beautiful-dnd\`.
      *   Chart.js was used for the analytics dashboard.
    `
  },
];