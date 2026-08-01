import { CodeIcon, TreeIcon, CubeIcon, DatabaseIcon, ChipIcon, NetworkIcon, ServerIcon, LayersIcon, ToolsIcon, ShieldIcon, BrainIcon, TrophyIcon, GitBranchIcon, RocketIcon, ExternalLinkIcon, ChevronDown} from "../ui/Icons";

export default function Skillstat() {
    return (
        <div id="skills" className="w-full max-w-7xl px-5 py-20 sm:py-28 mx-auto">



            <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Technical expertise in
                </span>
                 <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.08]">
                    <span className="gradient-text">Engineering Skills</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground font-sans">
                    Core CS · Backend · Fullstack · AI · DevOps
                </p>
            </div>



            <div className="mt-12">

                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">01 · Core CS Foundation</span>
                    <div className="h-px flex-1 bg-border/40"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <CodeIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Languages</h4>
                            <p className="mt-1 text-sm text-muted-foreground">C++ · Python · TypeScript · SQL</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <TreeIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Data Structures & Algorithms</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Trees · Graphs · DP · Greedy · Big-O</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <CubeIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Object-Oriented Programming</h4>
                            <p className="mt-1 text-sm text-muted-foreground">SOLID · Inheritance · Polymorphism</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <ChipIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Operating Systems</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Processes · Threads · Deadlocks · Linux</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <DatabaseIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Database Management System</h4>
                            <p className="mt-1 text-sm text-muted-foreground">PostgreSQL · MongoDB · ACID · Indexing</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <NetworkIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Computer Networks</h4>
                            <p className="mt-1 text-sm text-muted-foreground">TCP/IP · HTTP · DNS · REST</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <CubeIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">System Design & Software Engineering</h4>
                            <p className="mt-1 text-sm text-muted-foreground">LLD · HLD · SDLC Principles · Agile Methodology & Workflow</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <ChipIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Core Hardware & Systems</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Computer Organization & Architecture · Digital Logic & Microprocessors · Compiler Design</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <CodeIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Theoretical Foundations</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Discrete Mathematics · Theory of Computation · General Aptitude & Logical Reasoning</p>
                        </div>
                    </div>

                </div>
               
            </div>



            <div className="mt-12">

                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">02 · Production Engineering</span>
                    <div className="h-px flex-1 bg-border/40"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <ServerIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Backend Engineering</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Node.js · Express · Python · JWT · Redis · Prisma · MongoDB</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <LayersIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">Fullstack Development</h4>
                            <p className="mt-1 text-sm text-muted-foreground">React · Next.js · TypeScript · Tailwind · GraphQL · WebSockets</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <ShieldIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">DevOps & Security</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Git · Docker · CI/CD · Auth · RLS · OWASP</p>
                        </div>
                    </div>

                </div>

            </div>



            <div className="mt-12">

                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">03 · Applied AI Specialization</span>
                    <div className="h-px flex-1 bg-border/40"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <BrainIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">LLM Orchestration</h4>
                            <p className="mt-1 text-sm text-muted-foreground">LangChain · OpenAI SDK · Autonomous Agents · Tool Use</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <DatabaseIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">RAG & Vector Search</h4>
                            <p className="mt-1 text-sm text-muted-foreground">RAG Pipelines · Pinecone · Embeddings · Semantic Retrieval</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5 flex gap-3 items-start">
                        <ToolsIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                        <div>
                            <h4 className="font-display font-semibold text-base leading-none">AI Optimization</h4>
                            <p className="mt-1 text-sm text-muted-foreground">Context Engineering · Fine-tuning · Model Evaluation · Monitoring</p>
                        </div>
                    </div>
                    
                </div>

            </div>



            <div className="mt-12">

                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">04 · Problem Solving & Achievements</span>
                    <div className="h-px flex-1 bg-border/40"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5">
                        <div className="flex gap-3 items-start">
                            <TrophyIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                            <div>
                                <h4 className="font-display font-semibold text-base leading-none">100+ Problems Solved</h4>
                                <p className="mt-1 text-sm text-muted-foreground">Active on DSA & Competitive Programming platforms</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            <a href="https://leetcode.com/u/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">LeetCode<ExternalLinkIcon className="h-3 w-3"/></a>
                            <a href="https://codeforces.com/profile/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">Codeforces<ExternalLinkIcon className="h-3 w-3"/></a>
                            <a href="https://www.hackerrank.com/profile/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">HackerRank<ExternalLinkIcon className="h-3 w-3"/></a>
                            <a href="https://auth.geeksforgeeks.org/user/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">GeeksforGeeks<ExternalLinkIcon className="h-3 w-3"/></a>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5">
                        <div className="flex gap-3 items-start">
                            <GitBranchIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                            <div>
                                <h4 className="font-display font-semibold text-base leading-none">400+ Contributions</h4>
                                <p className="mt-1 text-sm text-muted-foreground">3+ projects shipped from prototypes to production-ready applications</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2  mt-3">
                            <a href="https://github.com/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">GitHub Profile<ExternalLinkIcon className="h-3 w-3"/></a>
                            <a href="https://github.com/arpitasi1gh?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">View Repos<ExternalLinkIcon className="h-3 w-3"/></a>
                        </div>
                    </div>

                </div> 

            </div>



            <div className="mt-12">

                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">05 · Community & Collaboration</span>
                    <div className="h-px flex-1 bg-border/40"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5">
                        <div className="flex gap-3 items-start">
                            <GitBranchIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                            <div>
                                <h4 className="font-display font-semibold text-base leading-none">Open Source Contributions</h4>
                                <p className="mt-1 text-sm text-muted-foreground">Merged feature PRs · Active bug triaging · Comprehensive technical documentation</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            <a href="https://github.com/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">View Contributions<ExternalLinkIcon className="h-3 w-3"/></a>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:-translate-y-0.5">
                        <div className="flex gap-3 items-start">
                            <RocketIcon className="h-9 w-9 p-2.5 shrink-0 rounded-lg border bg-surface-2 text-primary"/>
                            <div>
                                <h4 className="font-display font-semibold text-base leading-none">Hackathons & Build Sprints</h4>
                                <p className="mt-1 text-sm text-muted-foreground">48hr fullstack MVPs · Cross-functional team agility · Product demos & pitch decks</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            <a href="https://github.com/arpitasi1gh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary">Explore Demos<ExternalLinkIcon className="h-3 w-3"/></a>
                        </div>
                    </div>

                </div>
                
            </div>



        </div>
    );
};