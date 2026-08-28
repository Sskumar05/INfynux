import { ServiceFeature } from "./types";

export type ServiceDetails = {
  id: string;
  name: string;
  highlights: string[];
  description: string;
  heroVisual: {
    image?: string;
    alt?: string;
    urlLabel: string;
    sidebarActive: string;
    sidebarInactive: string;
    mainHeading: string;
    metrics: string[];
    chartData: number[];
    terminal: {
      user: string;
      command: string;
      output1: string;
      output2: string;
      status: string;
    };
  };
  features: { 
    title: string; 
    desc: string; 
    details: string[]; 
    tags: string[]; 
  }[];
  techStack: {
    categories: {
      name: string;
      description: string;
      technologies: string[];
    }[];
  };
  process: { name: string; heading: string; desc: string }[];
  faqs: { q: string; a: string }[];
  benefits: { title: string; desc: string }[];
};

export type Category = {
  id: string;
  name: string;
  eyebrow: string;
  tags: string[];
  services: ServiceDetails[];
};

export const servicesData: Category[] = [
  {
    id: "ai-product-engineering",
    name: "AI Product Engineering",
    eyebrow: "#1 in demand · \"Design and build AI-native products that solve real business problems — not just AI demos.\"",
    tags: ["GPT", "Claude", "OpenAI", "LangChain", "MCP"],
    services: [
      {
        id: "ai-product-development",
        name: "AI Product Development",
        highlights: ["Idea to production AI product", "RAG/fine-tuning/prompting", "Full observability & evals"],
        description: "End-to-end AI products built around a real user problem",
        heroVisual: {
          image: "/assets/services/ai-product-development.jpg",
          alt: "AI Product Development — LLM evaluation and safety dashboard",
          urlLabel: "ai-platform.workspace/models",
          sidebarActive: "Model Evals",
          sidebarInactive: "RAG Pipeline",
          mainHeading: "LLM Performance & Guardrails",
          metrics: ["14ms Token Latency", "99.8% Safety Pass"],
          chartData: [20, 35, 25, 45, 60, 50, 80, 110],
          terminal: {
            user: "root@mlops:~$",
            command: "python eval_pipeline.py --model gpt-4o",
            output1: "Running hallucination checks...",
            output2: "Pipeline evaluations completed:",
            status: "PASSED"
          }
        },
        features: [
          { 
            title: "AI Model Integration", 
            desc: "Seamlessly integrate state-of-the-art foundation models like OpenAI or Claude into your product.",
            details: ["LLM API Orchestration", "Model Agnostic Layer", "Context Window Mgmt", "Latency Optimization"],
            tags: ["Foundation Models", "API Integration"]
          },
          { 
            title: "RAG & Knowledge Systems", 
            desc: "Connect AI models to your proprietary data for accurate, hallucination-free generation.",
            details: ["Vector Embeddings", "Semantic Search", "Document Chunking", "Source Citation"],
            tags: ["Data Engineering", "Vector DB"]
          },
          { 
            title: "AI Agent Workflows", 
            desc: "Build autonomous agents capable of multi-step reasoning and API execution.",
            details: ["Tool Execution", "Multi-step Reasoning", "State Management", "Human-in-the-Loop"],
            tags: ["Autonomous", "Orchestration"]
          },
          { 
            title: "AI Evaluation & Monitoring", 
            desc: "Implement rigorous evaluation harnesses to track model latency, cost, and safety in production.",
            details: ["Hallucination Evals", "Token Cost Tracking", "Latency Dashboards", "Output Guardrails"],
            tags: ["Observability", "MLOps"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "AI Models & APIs",
              description: "The core foundation models powering the intelligence layer.",
              technologies: ["OpenAI", "Anthropic Claude", "Llama 3", "Mistral"]
            },
            {
              name: "Orchestration & Data",
              description: "Frameworks and vector databases for RAG and agentic workflows.",
              technologies: ["LangChain", "LlamaIndex", "Pinecone", "Milvus", "Python"]
            },
            {
              name: "Application Stack",
              description: "The fast, scalable frontend and backend systems running the product.",
              technologies: ["FastAPI", "Next.js", "React", "PostgreSQL", "AWS"]
            }
          ]
        },
        process: [
          { name: "Discovery & Data Audit", heading: "Analyze data readiness and business goals for AI integration.", desc: "We evaluate your proprietary data structures, assess API readiness, and map exact user flows. This phase ensures the AI integration solves an actual business problem before engineering begins." },
          { name: "Prototyping & Model Selection", heading: "Test foundational models and build a rapid proof-of-concept.", desc: "Engineers run benchmarking tests across OpenAI, Claude, and open-source models to determine the best latency-to-cost ratio. A minimal clickable prototype is then built to validate the core reasoning loop." },
          { name: "Development & Tuning", heading: "Implement RAG, fine-tuning, and robust guardrails.", desc: "We construct the full AI pipeline, embedding your proprietary data into vector databases and setting up complex prompt orchestration. Strict output guardrails are coded to actively prevent hallucinations." },
          { name: "Evaluation & Launch", heading: "Rigorous testing for hallucinations and deployment to production.", desc: "Automated evaluation harnesses are deployed to stress-test the model against thousands of edge cases. Once accuracy thresholds are met, the application goes live with full token and latency observability." }
        ],
        faqs: [
          { q: "Which AI models do you recommend for production?", a: "We remain model-agnostic, typically recommending OpenAI GPT-4o or Claude 3.5 Sonnet for complex reasoning, and open-source models like Llama 3 for data privacy or cost reduction." },
          { q: "How do you ensure the AI doesn't hallucinate?", a: "We build Retrieval-Augmented Generation (RAG) pipelines that explicitly ground the AI's answers in your proprietary data, combined with strict output guardrail checks before delivery." },
          { q: "Can we track our exact token costs?", a: "Yes. We implement granular token observability using tools like LangSmith, allowing you to track exactly how much each user prompt costs in production." },
          { q: "Is our proprietary data safe when sent to these APIs?", a: "We utilize zero-data-retention Enterprise API tiers, ensuring that foundation model providers like OpenAI cannot use your data to train their public models." },
          { q: "Do you build the frontend application as well?", a: "Yes. We construct full-stack AI applications, including custom Next.js/React frontends designed to elegantly handle AI streaming and real-time generation." }
        ],
        benefits: [
          { title: "Production-Ready AI", desc: "Move beyond brittle prototypes with reliable, enterprise-grade AI features designed for real-world user interaction." },
          { title: "Model & Cost Optimization", desc: "We actively route prompts to the most cost-effective models based on the required reasoning complexity, minimizing token bloat." },
          { title: "Evaluation & Monitoring", desc: "Rigorous LLM-as-a-judge evaluation frameworks ensure that hallucinations are caught before the user ever sees them." },
          { title: "Secure AI Architecture", desc: "We design AI data pipelines with robust access controls, ensuring proprietary information is never leaked to public models." }
        ]
      },
      {
        id: "ai-feature-integration",
        name: "AI Feature Integration",
        highlights: ["Add AI to existing product", "No rebuild required", "Ships in 4-6 weeks"],
        description: "Bolt intelligent features onto your current codebase",
        heroVisual: {
          image: "/assets/services/ai-feature-integration.jpg",
          alt: "AI Feature Integration — microservices health and feature flag dashboard",
          urlLabel: "core-app.workspace/ai-microservice",
          sidebarActive: "API Endpoints",
          sidebarInactive: "Feature Flags",
          mainHeading: "AI Microservice Health",
          metrics: ["0ms Core App Impact", "99.9% Uptime"],
          chartData: [20, 22, 25, 23, 28, 20, 24, 21],
          terminal: {
            user: "root@gateway:~$",
            command: "kubectl apply -f ai-feature.yaml",
            output1: "Deploying AI endpoint behind feature flag...",
            output2: "Routing 15% traffic to AI beta segment:",
            status: "LIVE"
          }
        },
        features: [
          { 
            title: "Codebase & Data Audit", 
            desc: "Identify the perfect integration touchpoints within your existing application.",
            details: ["Legacy Code Review", "Data Readiness Check", "API Bottleneck Scan", "Security Posture"],
            tags: ["Technical Audit", "Pre-flight"]
          },
          { 
            title: "API-First Connectivity", 
            desc: "Secure and seamless microservice endpoints that don't disrupt your core stack.",
            details: ["Stateless Microservices", "REST/GraphQL APIs", "Rate Limiting", "Payload Validation"],
            tags: ["Microservices", "API Gateway"]
          },
          { 
            title: "Feature-Flagged Rollout", 
            desc: "Safely deploy new AI features to specific user segments to gauge performance.",
            details: ["A/B Testing", "Segmented Rollout", "Kill Switches", "Traffic Routing"],
            tags: ["Deployment", "Risk Mgmt"]
          },
          { 
            title: "Post-Launch Telemetry", 
            desc: "Track user interactions, token usage, and feature adoption in real time.",
            details: ["Usage Analytics", "Cost-per-User", "Feedback Loops", "Error Tracking"],
            tags: ["Analytics", "Monitoring"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Microservices",
              description: "Fast, isolated backend environments running the AI integrations.",
              technologies: ["Node.js", "Python", "FastAPI", "Docker", "Redis"]
            },
            {
              name: "APIs & Orchestration",
              description: "Intelligent layers securely parsing existing app data to language models.",
              technologies: ["OpenAI API", "GraphQL", "LangChain JS", "WebSockets"]
            },
            {
              name: "Observability",
              description: "Monitoring systems ensuring the new features perform at scale.",
              technologies: ["Datadog", "LangSmith", "Sentry", "CloudWatch"]
            }
          ]
        },
        process: [
          { name: "Architecture Review", heading: "Review existing codebase to plan seamless AI endpoints.", desc: "Senior architects review your current tech stack to identify safe insertion points for intelligent features. We design isolated microservices that prevent the AI integration from slowing down your core app." },
          { name: "API Development", heading: "Build secure, scalable microservices for AI features.", desc: "Our engineers build the backend logic, utilizing LangChain and Python to process requests and communicate with foundational LLMs. Strict payload validation ensures your data is sanitized before leaving your servers." },
          { name: "Frontend Integration", heading: "Connect the UI to AI endpoints with optimal UX.", desc: "We implement skeleton loaders, streaming text, and optimistic UI updates into your existing React or Vue frontend. This ensures users aren't left staring at loading spinners while models generate responses." },
          { name: "Testing & Rollout", heading: "A/B testing and staged rollouts to monitor performance.", desc: "The new feature is deployed behind a feature flag, allowing you to turn it on for a small cohort of beta users. We closely monitor token spend, latency, and API error rates before a global launch." }
        ],
        faqs: [
          { q: "Do we need to rewrite our backend to add AI?", a: "Rarely. We typically build an independent, stateless microservice that communicates seamlessly with your current stack via REST or GraphQL." },
          { q: "Will heavy AI processing slow down our main application?", a: "No. By isolating the AI workloads in separate microservices and utilizing asynchronous processing, your core application's speed remains completely unaffected." },
          { q: "Can we control which users get access to the AI feature?", a: "Yes. We deploy new AI features behind strict feature flags, allowing you to enable it for specific cohorts, beta testers, or premium pricing tiers." },
          { q: "How do you handle long generation times in the UI?", a: "We use WebSockets or Server-Sent Events (SSE) to stream the AI responses directly to the frontend, preventing users from waiting on long loading spinners." },
          { q: "Can we track if users are actually using the new AI feature?", a: "Absolutely. We implement granular telemetry to track feature adoption, drop-off rates, and exact token costs on a per-user basis." }
        ],
        benefits: [
          { title: "Zero Core Disruption", desc: "We build isolated AI microservices so your main application's performance and stability are completely unaffected." },
          { title: "Rapid Deployment", desc: "By bolting on AI via API bridges, we can ship high-impact intelligent features in weeks, not months." },
          { title: "Granular Rollouts", desc: "Every AI feature is securely wrapped in feature flags, allowing you to A/B test adoption with specific cohorts." },
          { title: "Cost-Per-User Tracking", desc: "Detailed telemetry logs exactly how many tokens each user consumes, ensuring you maintain a profitable unit economy." }
        ]
      },
      {
        id: "ai-agents-assistants",
        name: "AI Agents & Assistants",
        highlights: ["Task-executing agents", "Tool-use & function calling", "Human-in-loop guardrails"],
        description: "Agents that take real actions, not just answer questions",
        heroVisual: {
          image: "/assets/services/ai-agents-assistants.jpg",
          alt: "AI Agents & Assistants — autonomous agent reasoning trace and approval workflow",
          urlLabel: "agents.workspace/orchestration",
          sidebarActive: "Reasoning Trace",
          sidebarInactive: "Tool Access",
          mainHeading: "Agentic Tool Execution",
          metrics: ["98% Task Success", "0.2s API Response"],
          chartData: [80, 85, 90, 88, 92, 95, 94, 98],
          terminal: {
            user: "root@agent-core:~$",
            command: "python agent_loop.py --task 'Sync CRM'",
            output1: "Agent selected tool: update_crm_record()",
            output2: "Executing API call... Action validated &",
            status: "COMMITTED"
          }
        },
        features: [
          { 
            title: "Agent Architecture Design", 
            desc: "Define the reasoning capabilities and tool boundaries for your autonomous agent.",
            details: ["Reasoning Loops", "Tool Definitions", "Memory Management", "Prompt Constraints"],
            tags: ["Architecture", "System Prompt"]
          },
          { 
            title: "Workflow Orchestration", 
            desc: "Connect multi-step processes across various APIs and internal systems.",
            details: ["Multi-Agent Routing", "API Chaining", "State Persistence", "Error Recovery"],
            tags: ["Orchestration", "Pipelines"]
          },
          { 
            title: "Guardrails & Approvals", 
            desc: "Ensure safety with strict schema validation and human-in-the-loop checkpoints.",
            details: ["Schema Validation", "Human Approval UX", "Action Dry-Runs", "Permission Scopes"],
            tags: ["Security", "Compliance"]
          },
          { 
            title: "Behavior Analytics", 
            desc: "Monitor agent decisions, action success rates, and conversational flow.",
            details: ["Traceability Logs", "Success/Fail Metrics", "Conversation Review", "Token Tracking"],
            tags: ["Tracing", "Metrics"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Agent Frameworks",
              description: "The core orchestration logic giving agents autonomy.",
              technologies: ["LangGraph", "LlamaIndex", "AutoGPT Core", "Python"]
            },
            {
              name: "Tool Integration",
              description: "Systems enabling agents to write data, send emails, or interact with CRMs.",
              technologies: ["REST APIs", "Zapier Core", "Celery", "RabbitMQ"]
            },
            {
              name: "Database & Memory",
              description: "Long-term persistence allowing agents to remember user context.",
              technologies: ["PostgreSQL", "Redis", "Vector DB", "MongoDB"]
            }
          ]
        },
        process: [
          { name: "Workflow Mapping", heading: "Identify manual tasks ideal for autonomous agent execution.", desc: "We document the exact decisions a human currently makes in a workflow, mapping out the if/then branches. This blueprint dictates the reasoning loop and the specific APIs the agent will need access to." },
          { name: "Tool & Plugin Development", heading: "Build APIs that allow the agent to interact with your systems.", desc: "Engineers develop safe, sandboxed endpoints (tools) that the agent can call, such as 'read_inbox' or 'update_crm'. Every tool is equipped with strict schema definitions so the LLM knows exactly how to format its requests." },
          { name: "Orchestration & Logic", heading: "Implement LangChain or custom logic for multi-step reasoning.", desc: "We utilize frameworks like LangGraph to construct cycles where the agent thinks, acts, observes the result, and decides what to do next. Memory systems are attached so the agent retains context over long sessions." },
          { name: "Human-in-the-Loop Testing", heading: "Ensure safety by requiring human approval for critical actions.", desc: "Before any agent is allowed to send emails or modify databases autonomously, we build approval UIs. The agent queues an action, and a human clicks 'approve' until trust in the reasoning loop reaches 100%." }
        ],
        faqs: [
          { q: "Is an AI agent different from a standard chatbot?", a: "Yes. Chatbots simply return text responses. AI Agents use 'function calling' to autonomously take multi-step actions across various software systems." },
          { q: "Can the agent perform destructive actions in our database?", a: "Not unless explicitly allowed. We design agents within strict permission scopes and require 'Human-in-the-Loop' approvals for any irreversible actions." },
          { q: "How do agents remember previous context?", a: "We utilize vector databases and Redis to implement long-term and short-term memory, allowing the agent to recall preferences across different user sessions." },
          { q: "Can multiple agents work together?", a: "Yes, we architect multi-agent systems using LangGraph where a 'Manager Agent' delegates sub-tasks to specialized 'Worker Agents' to complete complex workflows." },
          { q: "How do we monitor what the agent is doing?", a: "We implement rigorous traceability logging (via LangSmith) that records the agent's entire thought process, api calls, and success rates for every task." }
        ],
        benefits: [
          { title: "Autonomous Execution", desc: "Shift from reactive chatbots to proactive agents capable of triggering multi-step API chains." },
          { title: "Stateful Memory", desc: "Agents remember past interactions, user preferences, and enterprise rules across entirely separate sessions." },
          { title: "Human-in-the-Loop Safety", desc: "High-risk actions require human approval via a secure dashboard, guaranteeing the AI never goes rogue." },
          { title: "Scalable Operations", desc: "Handle 10x the workflow volume without increasing operational headcount or slowing down response times." }
        ]
      },
      {
        id: "generative-ai-applications",
        name: "Generative AI Applications",
        highlights: ["Text/image/workflow gen", "Custom gen-AI UI", "Enterprise-safe deployment"],
        description: "Full applications built around generative AI as the core experience",
        heroVisual: {
          image: "/assets/services/generative-ai-applications.jpg",
          alt: "Generative AI Applications — multi-modal AI creation studio interface",
          urlLabel: "gen-app.workspace/studio",
          sidebarActive: "Generation Log",
          sidebarInactive: "Content Moderation",
          mainHeading: "Multi-Modal Inference",
          metrics: ["100% GPU Usage", "0 Content Flags"],
          chartData: [90, 80, 85, 95, 100, 110, 105, 120],
          terminal: {
            user: "root@inference:~$",
            command: "npm run trigger:stable-diffusion",
            output1: "Compiling complex user prompt...",
            output2: "Generating image & streaming result:",
            status: "200 OK"
          }
        },
        features: [
          { 
            title: "Prompt & Pipeline Design", 
            desc: "Chain LLMs and diffusion models for highly accurate, multi-modal content generation.",
            details: ["Prompt Engineering", "Model Orchestration", "Generation Pipelines", "Output Evaluation"],
            tags: ["Multi-modal", "Pipeline"]
          },
          { 
            title: "Custom Generation UI", 
            desc: "Build tailored interfaces that abstract away complex prompting for your end users.",
            details: ["User-Friendly AI Controls", "Real-Time Generation", "Prompt Abstraction", "Responsive Interface"],
            tags: ["UX/UI", "Client Side"]
          },
          { 
            title: "Content Moderation", 
            desc: "Implement safety filters and guardrails to manage and sanitize outputs.",
            details: ["Safety Filters", "Output Validation", "Policy Guardrails", "Human Review Controls"],
            tags: ["Trust & Safety", "Compliance"]
          },
          { 
            title: "Scalable Inference", 
            desc: "Deploy architectures designed to handle high traffic loads and bursty GPU requests.",
            details: ["GPU Optimization", "Model Serving", "Request Load Handling", "Inference Monitoring"],
            tags: ["Cloud Infra", "Performance"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Generative Models",
              description: "Multi-modal foundation models for generating text, images, or audio.",
              technologies: ["Stable Diffusion", "Midjourney API", "GPT-4o", "Claude 3.5"]
            },
            {
              name: "Application Stack",
              description: "Fast frontend architectures built for real-time generative feedback.",
              technologies: ["Next.js", "React", "WebSockets", "Vercel"]
            },
            {
              name: "Inference Infrastructure",
              description: "Scalable backends handling heavy GPU processing workloads.",
              technologies: ["AWS SageMaker", "Replicate", "RunPod", "Docker"]
            }
          ]
        },
        process: [
          { name: "Concept & UX Strategy", heading: "Design intuitive interfaces tailored for generative workflows.", desc: "We map out how users will interact with the AI, focusing on abstracting away raw prompting. The UI is designed to feel like magic, providing sliders and buttons that secretly compile into complex LLM instructions." },
          { name: "Pipeline Engineering", heading: "Chain models together for complex text/image generation.", desc: "Our engineers string together multiple models—for example, using GPT-4 to refine a user's idea before passing the polished prompt into a Stable Diffusion image generator. This multi-modal pipeline guarantees high-quality outputs." },
          { name: "Moderation Integration", heading: "Implement content filters and safety guardrails.", desc: "Before outputs are delivered to the user, they pass through secondary, smaller models trained specifically to catch NSFW, copyrighted, or off-brand content. This ensures the application remains brand-safe." },
          { name: "Deployment & Scaling", heading: "Deploy on scalable cloud architecture for bursty workloads.", desc: "Generative models require heavy GPU computation. We utilize serverless GPU providers like RunPod or Replicate to ensure your application can scale instantly during viral traffic spikes without crashing." }
        ],
        faqs: [
          { q: "Can you combine text and image generation in one app?", a: "Yes, we architect multi-modal pipelines that string LLMs and diffusion models together to create complex, cohesive generative workflows." },
          { q: "Who owns the generated images or text?", a: "Under the current commercial API terms of models like OpenAI and Anthropic, you and your users typically retain ownership of the generated outputs." },
          { q: "How do you prevent the AI from generating inappropriate content?", a: "We run all user prompts and model outputs through secondary moderation algorithms (like OpenAI's Moderation API) before they are displayed on the frontend." },
          { q: "Will high GPU costs ruin our margins?", a: "We optimize inference costs by caching identical generations, utilizing serverless GPU endpoints, and selecting smaller models for simpler reasoning tasks." },
          { q: "Do users have to learn complex prompting?", a: "No. We build custom UI controls (sliders, drop-downs) that abstract the prompting logic, so users just click buttons while we compile the complex prompt under the hood." }
        ],
        benefits: [
          { title: "Bespoke User Experience", desc: "We build intuitive interfaces that abstract complex prompt engineering away from the end user." },
          { title: "High Throughput Scaling", desc: "Our cloud architecture seamlessly handles viral traffic spikes without throttling GPU inference queues." },
          { title: "Brand Safety", desc: "Pre-computation moderation checks guarantee no off-brand or prohibited content is ever generated." },
          { title: "Multi-Modal Dominance", desc: "We connect text, image, and audio models together to create deep, interactive multimedia generation." }
        ]
      },
      {
        id: "ai-consulting",
        name: "AI Consulting",
        highlights: ["Where AI actually helps", "Build vs buy analysis", "Roadmap in 2 weeks"],
        description: "Honest advice on where AI creates value before you build",
        heroVisual: {
          image: "/assets/services/ai-consulting.jpg",
          alt: "AI Consulting — strategic roadmap and ROI projection dashboard",
          urlLabel: "consulting.workspace/roi-matrix",
          sidebarActive: "Tech Audit",
          sidebarInactive: "ROI Projections",
          mainHeading: "Strategic AI Roadmap",
          metrics: ["12-Month Plan", "Cost/Benefit Assessed"],
          chartData: [10, 15, 25, 40, 60, 90, 115, 140],
          terminal: {
            user: "root@strategist:~$",
            command: "generate_roadmap --focus ROI",
            output1: "Analyzing internal infrastructure...",
            output2: "Compiling build-vs-buy report:",
            status: "READY"
          }
        },
        features: [
          { 
            title: "Opportunity Mapping", 
            desc: "Identify high-ROI areas in your business where AI can tangibly reduce costs.",
            details: ["Workflow Bottleneck ID", "ROI Projections", "Use-Case Scoring", "Cost-Benefit Analysis"],
            tags: ["Strategy", "Business Value"]
          },
          { 
            title: "Feasibility Review", 
            desc: "Assess the technical viability and data readiness required for custom AI solutions.",
            details: ["Data Quality Assessment", "Security Constraints", "Tech Stack Compatibility", "Regulatory Checks"],
            tags: ["Technical Audit", "Feasibility"]
          },
          { 
            title: "Build vs Buy Analysis", 
            desc: "Make cost-effective decisions on when to purchase SaaS versus building proprietary AI.",
            details: ["Vendor Evaluation", "Custom Build Costs", "TCO Modeling", "Lock-in Risk Assessment"],
            tags: ["Procurement", "TCO"]
          },
          { 
            title: "Strategic Roadmap", 
            desc: "Receive a comprehensive 12-month phased integration plan for your engineering team.",
            details: ["Phased Rollout Plan", "Resource Allocation", "Timeline Estimates", "Risk Mitigation Matrix"],
            tags: ["Planning", "Roadmap"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Strategy & Mapping",
              description: "Collaborative tooling used during discovery and scoping workshops.",
              technologies: ["Miro", "FigJam", "Notion", "Lucidchart"]
            },
            {
              name: "Data Profiling",
              description: "Tools for analyzing your current data readiness for AI integration.",
              technologies: ["Pandas", "SQL", "Tableau", "Snowflake"]
            },
            {
              name: "Project Management",
              description: "Systems used to deliver the final technical roadmap.",
              technologies: ["Jira", "Linear", "Confluence", "Figma"]
            }
          ]
        },
        process: [
          { name: "Business Deep-Dive", heading: "Understand your operational bottlenecks and strategic goals.", desc: "Our strategists conduct intensive interviews with your department heads to uncover areas where time is wasted on repetitive cognitive tasks. We map these bottlenecks against current AI capabilities." },
          { name: "Market & Tech Analysis", heading: "Evaluate existing SaaS vs custom build options.", desc: "We perform a thorough market sweep to see if an off-the-shelf $50/mo SaaS tool already solves your problem. If not, we estimate the Total Cost of Ownership (TCO) for building a custom proprietary solution." },
          { name: "Feasibility Study", heading: "Assess your data readiness and technical infrastructure.", desc: "Engineers audit your databases and APIs to determine if your data is structured, clean, and accessible enough to train or ground an AI model. We highlight security and compliance risks." },
          { name: "Roadmap Delivery", heading: "Provide a phased, actionable 12-month implementation plan.", desc: "We compile all findings into a boardroom-ready presentation detailing exact architectural diagrams, ROI projections, and a sprint-by-sprint hiring or execution plan for your internal team." }
        ],
        faqs: [
          { q: "Will you just tell us to build custom AI software with you?", a: "No. If a $50/month off-the-shelf SaaS tool solves your bottleneck more effectively than custom software, we will explicitly advise you to buy it." },
          { q: "Who leads the consulting engagements?", a: "You work directly with Senior AI Engineers and Technical Product Strategists, not junior analysts." },
          { q: "What exactly do we get at the end of the engagement?", a: "A boardroom-ready document detailing use-case ROI, data-readiness audits, architectural blueprints, and a phased execution roadmap for your team." },
          { q: "Do you assess our internal engineering capabilities?", a: "Yes, we evaluate your team's current skill set and provide recommendations on necessary training or strategic hires needed to manage the AI long-term." },
          { q: "How long does the consulting phase typically last?", a: "Most strategic AI audits and roadmap deliveries are completed within an intensive 2 to 4-week engagement." }
        ],
        benefits: [
          { title: "Unbiased Strategy", desc: "We provide honest build-vs-buy advice to ensure you never over-invest in custom tech unnecessarily." },
          { title: "Risk Mitigation", desc: "We audit your data cleanliness and security posture to prevent expensive deployment failures." },
          { title: "Boardroom Clarity", desc: "Cut through the AI hype with clear, mathematical ROI projections for every proposed feature." },
          { title: "Actionable Roadmaps", desc: "Receive a step-by-step technical execution playbook that your internal engineering team can immediately follow." }
        ]
      },
      {
        id: "ai-workflow-automation",
        name: "AI Workflow Automation",
        highlights: ["Automate repetitive ops", "n8n/custom pipelines", "Human approval checkpoints"],
        description: "Replace manual operational work with automation pipelines",
        heroVisual: {
          image: "/assets/services/ai-workflow-automation.jpg",
          alt: "AI Workflow Automation — n8n-style visual pipeline builder with AI decision nodes",
          urlLabel: "n8n.workspace/pipeline-1",
          sidebarActive: "Workflow Execution",
          sidebarInactive: "Error Logs",
          mainHeading: "API Pipeline Automation",
          metrics: ["1,240 Executions", "0 Errors (24h)"],
          chartData: [40, 50, 45, 60, 55, 75, 70, 85],
          terminal: {
            user: "root@automations:~$",
            command: "n8n trigger --workflow invoice-sync",
            output1: "Extracting unstructured PDF data via LLM...",
            output2: "Webhook dispatched to CRM successfully:",
            status: "OK"
          }
        },
        features: [
          { 
            title: "Process Mapping", 
            desc: "Document current manual workflows to identify precise automation points.",
            details: ["Workflow Diagramming", "SOP Documentation", "Time-Tracking Analysis", "Friction Point ID"],
            tags: ["Process Mining", "Discovery"]
          },
          { 
            title: "Pipeline Build", 
            desc: "Develop secure automation pipelines connecting disjointed internal systems.",
            details: ["Webhook Integration", "API Bridging", "Custom Logic Nodes", "Data Transformation"],
            tags: ["Engineering", "Integration"]
          },
          { 
            title: "Exception Handling", 
            desc: "Manage API errors gracefully and route complex edge cases to human operators.",
            details: ["Error Catching", "Retry Logic", "Human Escalation Paths", "Alert Thresholds"],
            tags: ["Resilience", "Ops"]
          },
          { 
            title: "Ongoing Maintenance", 
            desc: "Keep automations running smoothly through API deprecations and updates.",
            details: ["Version Control", "API Update Monitoring", "Pipeline Audits", "Uptime SLAs"],
            tags: ["Maintenance", "Support"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Automation Engines",
              description: "The core platforms driving the business logic and API chaining.",
              technologies: ["n8n", "Make.com", "Zapier", "Apache Airflow"]
            },
            {
              name: "AI & Decision Logic",
              description: "LLMs used to process unstructured data inside the pipelines.",
              technologies: ["OpenAI API", "Python Scripts", "AWS Lambda", "Anthropic"]
            },
            {
              name: "Integrations",
              description: "Common enterprise software we regularly connect and automate.",
              technologies: ["Salesforce", "HubSpot", "Slack", "Google Workspace"]
            }
          ]
        },
        process: [
          { name: "Workflow Audit", heading: "Document the exact steps, decisions, and systems in your manual process.", desc: "We sit alongside your operators to map every click, copy-paste, and cognitive decision involved in their daily tasks. We identify which software systems hold the data and if they have accessible APIs." },
          { name: "Integration Design", heading: "Map APIs, webhooks, and data structures needed for automation.", desc: "Architects design a pipeline that routes data between your disjointed systems. For unstructured tasks like 'read this PDF invoice', we insert specific AI extraction nodes into the architecture." },
          { name: "Pipeline Construction", heading: "Build the automated flow with AI decision nodes.", desc: "Using enterprise tools like n8n or custom Python scripts, we build the actual automation logic. We implement rigorous error catching so if an API goes down, the pipeline pauses and alerts a human rather than failing silently." },
          { name: "UAT & Deployment", heading: "Test thoroughly with real data before going live.", desc: "We run the automated pipeline against historical data to ensure the outputs match human standards. Once validated, we switch the pipeline to live, instantly reducing your team's manual workload." }
        ],
        faqs: [
          { q: "Can you automate workflows across legacy software without APIs?", a: "Yes. While APIs are preferred, we can utilize Robotic Process Automation (RPA) or custom scraping scripts to interact with legacy systems." },
          { q: "What happens if an automation fails or encounters a weird edge case?", a: "We engineer strict error-catching logic. If an API fails or the AI confidence score drops, the workflow pauses and alerts a human via Slack to intervene." },
          { q: "Is it secure to pass our company data through these automation platforms?", a: "We heavily favor enterprise-grade, self-hosted automation engines like n8n, ensuring your proprietary data never touches a public cloud server." },
          { q: "How is AI used in these automations?", a: "AI nodes are injected to handle 'unstructured' steps—like reading an unstructured email, extracting the intent, and deciding which API path to trigger next." },
          { q: "Who fixes the automation if a third-party API changes?", a: "We provide ongoing maintenance SLAs to proactively update your pipelines whenever third-party software updates their API specifications." }
        ],
        benefits: [
          { title: "Drastic Time Savings", desc: "Replace hours of manual copy-pasting and data entry with instant, background API processing." },
          { title: "Zero Data Silos", desc: "We seamlessly bridge legacy software to modern CRMs, ensuring perfectly synced data across the organization." },
          { title: "Graceful Exception Handling", desc: "If an edge-case API fails, the workflow intelligently routes the task to a human instead of crashing." },
          { title: "Enterprise Reliability", desc: "Self-hosted, secure n8n environments guarantee your operational workflows remain private and compliant." }
        ]
      }
    ]
  },
  {
    id: "custom-software-development",
    name: "Custom Software Development",
    eyebrow: "Outcome based development · \"Build scalable web, mobile, SaaS, and enterprise applications engineered for long-term growth.\"",
    tags: ["React", "Next.js", "Node.js", "Laravel", "React Native"],
    services: [
      {
        id: "web-development",
        name: "Web Development",
        highlights: ["React/Next.js frontend", "Node.js or Laravel backend", "Role-based auth + admin"],
        description: "Full-stack web apps built for scale",
        heroVisual: {
          image: "/assets/services/web-development.jpg",
          alt: "Web Development — Next.js code editor with live UI preview and performance metrics",
          urlLabel: "web.workspace/dashboard",
          sidebarActive: "Analytics",
          sidebarInactive: "Settings",
          mainHeading: "Web Application Performance",
          metrics: ["99.9% Uptime", "Sub-100ms Load"],
          chartData: [40, 70, 45, 90, 60, 110, 85, 120],
          terminal: {
            user: "root@web-server:~$",
            command: "npm run deploy:production",
            output1: "Building optimized Next.js frontend...",
            output2: "Deploying API to edge network:",
            status: "SUCCESS"
          }
        },
        features: [
          { 
            title: "Custom UI/UX", 
            desc: "Tailored interfaces designed around users and business workflows.",
            details: ["Component Libraries", "Responsive Layouts", "Accessibility (a11y)", "State Management"],
            tags: ["Frontend", "Design System"]
          },
          { 
            title: "Scalable API Architecture", 
            desc: "Reliable backend APIs built for integrations and future growth.",
            details: ["REST/GraphQL Endpoints", "Rate Limiting", "JWT Authentication", "Query Optimization"],
            tags: ["Backend", "Services"]
          },
          { 
            title: "Cloud Deployment", 
            desc: "Secure and scalable deployment using modern cloud infrastructure.",
            details: ["Containerization", "Load Balancing", "CDN Integration", "SSL Management"],
            tags: ["DevOps", "Infrastructure"]
          },
          { 
            title: "CI/CD Automation", 
            desc: "Automated testing and deployment pipelines for faster, safer releases.",
            details: ["Automated Unit Tests", "Staging Environments", "Zero-Downtime Deploys", "Rollback Scripts"],
            tags: ["Pipelines", "Reliability"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Frontend",
              description: "Modern, reactive frameworks for delivering lightning-fast user interfaces.",
              technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
              name: "Backend",
              description: "Scalable server architectures and robust database management.",
              technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"]
            },
            {
              name: "Cloud & Deployment",
              description: "Secure, auto-scaling infrastructure ensuring 99.9% uptime.",
              technologies: ["AWS", "Vercel", "Docker", "GitHub Actions"]
            }
          ]
        },
        process: [
          { name: "Discovery & UX", heading: "Map user journeys and create wireframes tailored to web paradigms.", desc: "We analyze your target audience to construct high-fidelity Figma prototypes mapping out every screen. This guarantees stakeholders agree on the interface before a single line of frontend code is written." },
          { name: "Architecture Planning", heading: "Design database schemas and API specifications.", desc: "Senior engineers draft entity-relationship diagrams and determine whether a REST or GraphQL approach best suits the data flow. We select cloud infrastructure optimized for your expected traffic." },
          { name: "Full-Stack Build", heading: "Develop front-end interfaces and secure back-end services in tandem.", desc: "Frontend teams translate designs into pixel-perfect React components while backend teams build the APIs and database logic. They integrate seamlessly via strict schema contracts." },
          { name: "Testing & Deployment", heading: "Automated CI/CD pipelines ensure safe, zero-downtime launches.", desc: "We write automated unit and integration tests to verify critical logic. Code is then deployed through staging environments before being safely pushed to production via continuous deployment pipelines." }
        ],
        faqs: [
          { q: "What technologies do you use for web development?", a: "We specialize in modern JavaScript/TypeScript ecosystems, heavily utilizing Next.js for the frontend and Node.js with PostgreSQL for the backend to ensure maximum performance." },
          { q: "Can we manage the website content ourselves?", a: "Yes, we integrate user-friendly headless CMS platforms like Sanity or Strapi, allowing your marketing team to update content without touching the code." },
          { q: "How do you handle website security and data privacy?", a: "We implement strict JWT authentication, role-based access control, input sanitization against SQL injections, and deploy over secure HTTPS/SSL protocols." },
          { q: "Will the web application be SEO optimized?", a: "Absolutely. Our Next.js architectures utilize Server-Side Rendering (SSR), guaranteeing that search engines can instantly crawl and index your dynamic pages." },
          { q: "Can you integrate the app with our existing CRM?", a: "Yes, we build robust API bridges that natively sync your new web application's data with legacy CRMs like Salesforce or HubSpot." }
        ],
        benefits: [
          { title: "Extreme Scalability", desc: "Build on Node.js and Postgres architectures that effortlessly handle traffic spikes and complex relational data." },
          { title: "Sub-Second Performance", desc: "We optimize Core Web Vitals heavily, ensuring lightning-fast Next.js rendering that keeps users engaged." },
          { title: "Enterprise Grade Security", desc: "Protect user data with strict JWT auth, role-based access, and robust protection against SQL injection." },
          { title: "SEO Optimized Code", desc: "Server-side rendering ensures search engines can fully crawl, index, and rank your dynamic content." }
        ]
      },
      {
        id: "mobile-app-development",
        name: "Mobile App Development",
        highlights: ["Cross-platform React Native", "Native perf where needed", "Store launch"],
        description: "Cross-platform apps that feel native, ship fast",
        heroVisual: {
          image: "/assets/services/mobile-app-development.jpg",
          alt: "Mobile App Development — cross-platform builder with iOS/Android preview and 60fps metrics",
          urlLabel: "mobile.workspace/build",
          sidebarActive: "React Native",
          sidebarInactive: "App Store",
          mainHeading: "Mobile Build Status",
          metrics: ["60 FPS Rendering", "100% Passed"],
          chartData: [100, 105, 110, 115, 120, 125, 130, 135],
          terminal: {
            user: "root@fastlane:~$",
            command: "fastlane release_production",
            output1: "Compiling iOS and Android binaries...",
            output2: "Submitting to App Store and Google Play:",
            status: "UPLOADED"
          }
        },
        features: [
          { 
            title: "Cross-Platform Development", 
            desc: "Build iOS and Android applications simultaneously using React Native to cut costs and time to market.",
            details: ["Unified Codebase", "React Native Architecture", "Platform-Specific UI", "OTA Updates"],
            tags: ["React Native", "Efficiency"]
          },
          { 
            title: "Native Device Features", 
            desc: "Seamlessly integrate with device cameras, GPS, Bluetooth, and biometric authentication.",
            details: ["Push Notifications", "Biometric Auth", "Bluetooth Low Energy", "Geolocation Tracking"],
            tags: ["Hardware", "Sensors"]
          },
          { 
            title: "Offline-Ready Experience", 
            desc: "Implement robust local caching so your application works flawlessly without an internet connection.",
            details: ["Local Data Storage", "Sync Handling", "Network Recovery", "Background Updates"],
            tags: ["Offline", "Resilience"]
          },
          { 
            title: "App Store Deployment", 
            desc: "Complete end-to-end management of the Apple App Store and Google Play submission and review processes.",
            details: ["Provisioning Profiles", "Compliance Review", "Screenshot Generation", "Release Management"],
            tags: ["Distribution", "Publishing"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Mobile Stack",
              description: "Cross-platform frameworks delivering native-level performance.",
              technologies: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin"]
            },
            {
              name: "Backend & APIs",
              description: "Real-time databases and serverless architectures tailored for mobile.",
              technologies: ["Firebase", "Node.js", "GraphQL", "Supabase"]
            },
            {
              name: "Testing & Release",
              description: "Automation tools ensuring smooth app store deployments.",
              technologies: ["Detox", "Jest", "Fastlane", "TestFlight", "Google Play Console"]
            }
          ]
        },
        process: [
          { name: "Mobile Strategy", heading: "Define core loops, native features, and platform-specific constraints.", desc: "We analyze Apple and Google design guidelines to ensure compliance and sketch out touch-optimized navigation flows. We identify where native integrations like GPS or biometric auth are required." },
          { name: "UI & Interaction Design", heading: "Craft touch-optimized, fluid interfaces.", desc: "Designers create high-fidelity screens focusing on thumb-zones, gesture interactions, and dark mode compatibility. These designs are tested on actual devices to ensure a premium native feel." },
          { name: "Cross-Platform Engineering", heading: "Build iOS and Android simultaneously using React Native.", desc: "Engineers construct a unified React Native codebase, integrating APIs and writing specific native modules (Swift/Kotlin) only when hardware-level performance is strictly necessary." },
          { name: "Store Deployment", heading: "Navigate Apple and Google compliance for a smooth launch.", desc: "We handle the generation of provisioning profiles, app store screenshots, and privacy policies. We submit the binaries and manage the entire review process until the app is live in both stores." }
        ],
        faqs: [
          { q: "Do you build for iOS, Android, or both?", a: "We build cross-platform applications using React Native, allowing us to deploy to both iOS and Android simultaneously from a single, highly efficient codebase." },
          { q: "Can cross-platform apps utilize native device hardware?", a: "Yes. React Native easily bridges to native modules, allowing full access to GPS, camera, Bluetooth, and biometric authentication (FaceID/TouchID)." },
          { q: "Do you handle the App Store submission process?", a: "Yes, we handle end-to-end compliance, provisioning profile generation, and the complete submission/review process for both Apple and Google stores." },
          { q: "Will the app work if the user loses internet connection?", a: "We design robust offline-first architectures utilizing local device storage, syncing the data seamlessly once the network connection is restored." },
          { q: "How do you handle post-launch bug fixes?", a: "We utilize Over-The-Air (OTA) updates to push critical Javascript bug fixes directly to users' phones without requiring them to download a new version from the app store." }
        ],
        benefits: [
          { title: "Native-Like Experience", desc: "Build smooth mobile experiences with 60fps responsive interactions and deep device-specific capabilities." },
          { title: "Cross-Platform Delivery", desc: "Develop for both iOS and Android from a single React Native codebase, cutting time-to-market in half." },
          { title: "Reliable Mobile Performance", desc: "Optimize loading times, memory usage, and background API calls specifically for weak 4G networks." },
          { title: "App Store Ready", desc: "Navigate Apple and Google compliance effortlessly; we handle all provisioning, screenshots, and reviews." }
        ]
      },
      {
        id: "custom-software",
        name: "Custom Software Development",
        highlights: ["Built for your exact workflow", "No page-builder limits", "Full IP ownership"],
        description: "100% custom-coded solutions, no licensing lock-in",
        heroVisual: {
          image: "/assets/services/custom-software.jpg",
          alt: "Custom Software Development — enterprise architecture admin panel with microservice node health",
          urlLabel: "internal.workspace/sys-admin",
          sidebarActive: "Database Sync",
          sidebarInactive: "Access Logs",
          mainHeading: "Enterprise Architecture",
          metrics: ["Secure Sync", "0 Data Leaks"],
          chartData: [50, 45, 55, 60, 58, 65, 70, 75],
          terminal: {
            user: "root@sys-core:~$",
            command: "kubectl get pods --namespace=production",
            output1: "Checking microservice instances...",
            output2: "All nodes running optimally:",
            status: "HEALTHY"
          }
        },
        features: [
          { 
            title: "Workflow Mapping", 
            desc: "Design data architecture around your company's proprietary operational processes.",
            details: ["Entity Relationship Modeling", "Process Flow Diagrams", "Access Control Logic", "Data Migration"],
            tags: ["Architecture", "Planning"]
          },
          { 
            title: "Custom Admin & Reporting", 
            desc: "Build actionable dashboards that provide real-time insights tailored to your KPIs.",
            details: ["Real-time Dashboards", "CSV/PDF Exports", "Granular Permissions", "Audit Logging"],
            tags: ["Internal Tools", "Analytics"]
          },
          { 
            title: "Stack Integration", 
            desc: "Connect your new software with existing legacy tools via custom API bridges.",
            details: ["Legacy System Bridging", "Webhooks & Sync", "ETL Pipelines", "3rd-Party Auth"],
            tags: ["Integration", "APIs"]
          },
          { 
            title: "Scalable Architecture", 
            desc: "Ensure your software grows without limits, utilizing cloud-native databases.",
            details: ["Microservices", "Database Sharding", "Caching Layers", "Horizontal Scaling"],
            tags: ["Performance", "Cloud-Native"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Enterprise Backend",
              description: "Robust, statically typed languages built for complex business logic.",
              technologies: ["Java", "Spring Boot", "Go", "C# .NET"]
            },
            {
              name: "Data & Storage",
              description: "High-integrity relational and NoSQL databases for massive datasets.",
              technologies: ["PostgreSQL", "MongoDB", "Elasticsearch", "Redis"]
            },
            {
              name: "DevOps & Scaling",
              description: "Containerized environments allowing infinite horizontal scaling.",
              technologies: ["Docker", "Kubernetes", "AWS ECS", "Terraform"]
            }
          ]
        },
        process: [
          { name: "Business Analysis", heading: "Deep dive into your unique operational bottlenecks.", desc: "We shadow your team to understand your proprietary workflows. By mapping out how data moves through your business, we identify exactly what the custom software needs to automate and track." },
          { name: "System Architecture", heading: "Design a custom, highly scalable, and modular software blueprint.", desc: "Architects design robust data models and select enterprise-grade technologies (like Java or Go) capable of handling your specific security and transaction volume requirements." },
          { name: "Iterative Development", heading: "Build core modules first, demonstrating value in agile sprints.", desc: "We develop the software in bi-weekly sprints, prioritizing the most critical business logic first. You receive live demonstrations of functioning modules, allowing you to give continuous feedback." },
          { name: "Integration & Training", heading: "Deploy the system, migrate data, and train your team.", desc: "We securely migrate your historical data into the new system via ETL pipelines. We then deploy the software to production and provide comprehensive onboarding materials for your staff." }
        ],
        faqs: [
          { q: "Why should we build custom software instead of buying SaaS?", a: "Off-the-shelf software forces your business to adapt to their generic workflows. Custom software is mapped perfectly to your proprietary operations, giving you a distinct competitive advantage." },
          { q: "Will we own the intellectual property and source code?", a: "Yes, absolutely. Upon completion, 100% of the IP, source code repositories, and database ownership is legally transferred to you." },
          { q: "Can this custom software talk to our older legacy systems?", a: "Yes, we specialize in building custom API bridges and ETL pipelines that securely sync data between modern applications and older, disparate legacy databases." },
          { q: "How do you ensure the software can handle future growth?", a: "We utilize scalable microservices, cloud-native containerization (Docker/Kubernetes), and database indexing to guarantee the software won't crack under enterprise-level data volume." },
          { q: "How do you handle internal training for the new software?", a: "We prioritize intuitive UX design to minimize the learning curve, and provide comprehensive documentation and live onboarding sessions for your staff." }
        ],
        benefits: [
          { title: "Proprietary Workflows", desc: "Stop forcing your team to use rigid off-the-shelf software. We build systems mapped directly to your exact operational processes." },
          { title: "Total IP Ownership", desc: "You own the complete source code and database, ensuring zero vendor lock-in or recurring per-seat licensing bloat." },
          { title: "Legacy System Bridging", desc: "We build custom APIs to ensure your new software natively synchronizes data with older legacy systems you still rely on." },
          { title: "Infinite Scalability", desc: "Enterprise-grade microservices and database sharding ensure the software never lags, regardless of data growth." }
        ]
      },
      {
        id: "saas-development",
        name: "SaaS Development",
        highlights: ["Multi-tenant architecture", "Billing built in", "Public API + webhooks"],
        description: "Production-grade SaaS — multi-tenant, billed, scalable",
        heroVisual: {
          image: "/assets/services/saas-development.jpg",
          alt: "SaaS Development — multi-tenant admin portal with MRR charts and Stripe webhook logs",
          urlLabel: "saas.workspace/admin",
          sidebarActive: "Tenants & Billing",
          sidebarInactive: "Webhooks",
          mainHeading: "Multi-Tenant Metrics",
          metrics: ["Stripe Synced", "10k+ Active Seats"],
          chartData: [30, 45, 60, 80, 110, 130, 150, 180],
          terminal: {
            user: "root@saas-admin:~$",
            command: "npm run sync:stripe-webhooks",
            output1: "Verifying tenant subscriptions...",
            output2: "Row-level security enforcement:",
            status: "ACTIVE"
          }
        },
        features: [
          { 
            title: "Multi-Tenant Isolation", 
            desc: "Securely segregate customer data at the database level using row-level security.",
            details: ["Row-Level Security", "Schema Separation", "Tenant Configurations", "Subdomain Routing"],
            tags: ["Architecture", "Data Security"]
          },
          { 
            title: "Integrated Billing", 
            desc: "Connect Stripe or Paddle to automatically handle subscriptions, metered billing, and invoices.",
            details: ["Stripe Integration", "Subscription Tiers", "Invoice Generation", "Dunning Management"],
            tags: ["Payments", "Monetization"]
          },
          { 
            title: "Usage Metering", 
            desc: "Track resource consumption natively to support sophisticated tiered pricing models.",
            details: ["Event Tracking", "Seat Limits", "Quota Enforcement", "Overage Billing"],
            tags: ["Analytics", "Pricing Logic"]
          },
          { 
            title: "Public API & Webhooks", 
            desc: "Provide extensibility to your users, allowing them to integrate your SaaS into their stacks.",
            details: ["API Key Generation", "Developer Portal", "Webhook Dispatcher", "API Documentation"],
            tags: ["Platform", "Integrations"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Full-Stack Core",
              description: "The primary technologies utilized for building scalable SaaS interfaces and APIs.",
              technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
            },
            {
              name: "Database & ORM",
              description: "Type-safe database interaction layer managing complex multi-tenant relationships.",
              technologies: ["PostgreSQL", "Prisma", "Supabase", "Redis"]
            },
            {
              name: "SaaS Services",
              description: "Essential third-party services for auth, billing, and transactional email.",
              technologies: ["Stripe", "Clerk Auth", "Resend", "AWS S3"]
            }
          ]
        },
        process: [
          { name: "Product Strategy", heading: "Define user tiers, billing models, and core SaaS features.", desc: "We help you define the specific feature constraints for free, pro, and enterprise tiers. We map out the onboarding flow to ensure frictionless user activation and conversion." },
          { name: "Foundation Engineering", heading: "Build secure multi-tenant architecture and authentication.", desc: "Before building features, engineers construct a rock-solid database schema utilizing row-level security to guarantee that one tenant's data can never bleed into another's." },
          { name: "Feature Development", heading: "Implement the core product loops and dashboard analytics.", desc: "We develop the primary software logic alongside administrative dashboards that allow you to track MRR, user churn, and active usage metrics across your entire customer base." },
          { name: "Monetization Integration", heading: "Setup Stripe for subscriptions, metering, and invoicing.", desc: "We integrate payment gateways and webhook listeners. If a user upgrades, downgrades, or their credit card fails, the system automatically adjusts their permissions and emails them." }
        ],
        faqs: [
          { q: "How do you prevent one client's data from leaking to another?", a: "We engineer strict multi-tenant architectures utilizing PostgreSQL Row-Level Security (RLS) or separate database schemas, guaranteeing absolute data isolation between tenants." },
          { q: "Can you handle complex usage-based billing models?", a: "Yes, we integrate deeply with Stripe's metering APIs, allowing you to automatically bill users based on exact API calls, seats utilized, or storage consumed." },
          { q: "How do users manage their own team permissions?", a: "We build comprehensive Role-Based Access Control (RBAC) modules, allowing account owners to invite team members and restrict specific dashboard capabilities." },
          { q: "Is the SaaS platform built to handle enterprise clients?", a: "Yes. The architecture supports custom subdomains, white-label branding, SAML/SSO authentication, and public API endpoints necessary to close enterprise deals." },
          { q: "Do you build the marketing landing page as well?", a: "Yes, we can design and develop high-converting marketing sites alongside the core SaaS application, sharing the same underlying design system." }
        ],
        benefits: [
          { title: "Flawless Multi-Tenancy", desc: "Rigorous database schema separation and row-level security ensure strict data isolation between your SaaS clients." },
          { title: "Automated Monetization", desc: "Deep integration with Stripe natively handles tiered subscriptions, prorated upgrades, and usage metering." },
          { title: "Extensible Platform APIs", desc: "We construct secure webhook dispatchers and public APIs, allowing power users to deeply integrate with your product." },
          { title: "Investor-Ready Code", desc: "Maintainable, scalable architectures that pass aggressive technical due diligence from VCs without refactoring." }
        ]
      }
    ]
  },
  {
    id: "product-engineering",
    name: "Product Engineering",
    eyebrow: "170+ projects delivered · \"From product discovery to continuous delivery, we help transform ideas into scalable digital products.\"",
    tags: ["Figma", "AWS", "Docker", "Kubernetes"],
    services: [
      {
        id: "product-discovery",
        name: "Product Discovery",
        highlights: ["Clickable prototype week 1", "Market/competitor research", "No delivery surprises"],
        description: "See your product as real screens before code is written",
        heroVisual: {
          image: "/assets/services/product-discovery.jpg",
          alt: "Product Discovery — digital whiteboard with user journey maps and wireframe prototypes",
          urlLabel: "figma.workspace/prototype",
          sidebarActive: "UX Wireframes",
          sidebarInactive: "Design System",
          mainHeading: "Interactive Prototyping",
          metrics: ["100% Validated", "Ready for Dev"],
          chartData: [20, 25, 30, 35, 40, 50, 70, 100],
          terminal: {
            user: "root@design-ops:~$",
            command: "export figma_assets --format svg",
            output1: "Compiling design system tokens...",
            output2: "Developer handoff documentation:",
            status: "GENERATED"
          }
        },
        features: [
          { 
            title: "Discovery Workshops", 
            desc: "Align stakeholders on the core vision, user personas, and target KPIs.",
            details: ["Persona Mapping", "KPI Definition", "Feature Prioritization", "Stakeholder Alignment"],
            tags: ["Strategy", "Workshops"]
          },
          { 
            title: "Competitor Research", 
            desc: "Understand the market landscape to identify unique value propositions.",
            details: ["Market Analysis", "SWOT Assessment", "UX Tear-downs", "Pricing Research"],
            tags: ["Research", "Market Fit"]
          },
          { 
            title: "Clickable Prototypes", 
            desc: "Visualize the final solution with high-fidelity, interactive Figma screens.",
            details: ["Wireframing", "Interaction Design", "Figma Prototyping", "User Flow Mapping"],
            tags: ["UX/UI", "Prototyping"]
          },
          { 
            title: "Feasibility Assessment", 
            desc: "Evaluate the technical viability of the product before committing engineering budget.",
            details: ["Tech Stack Selection", "Risk Analysis", "Cost Estimation", "Roadmap Generation"],
            tags: ["Engineering", "Planning"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Prototyping",
              description: "Industry-standard design tools used to create high-fidelity, clickable models.",
              technologies: ["Figma", "Adobe XD", "Framer", "Sketch"]
            },
            {
              name: "Collaboration",
              description: "Digital whiteboards utilized during discovery workshops and wireframing.",
              technologies: ["Miro", "FigJam", "Whimsical", "Lucidchart"]
            },
            {
              name: "Documentation",
              description: "Systems for recording feature requirements and technical architecture.",
              technologies: ["Notion", "Confluence", "Jira", "Linear"]
            }
          ]
        },
        process: [
          { name: "Stakeholder Alignment", heading: "Workshops to define business goals, target users, and KPIs.", desc: "We run intensive workshops to extract your vision, forcing alignment on who the target user is and what metrics will define the product's ultimate success." },
          { name: "User Journey Mapping", heading: "Plot the optimal path for users to achieve their goals.", desc: "UX strategists map out the flow of screens, eliminating friction points and ensuring that the most valuable actions require the fewest clicks." },
          { name: "Wireframing & UI", heading: "Develop high-fidelity designs.", desc: "We transition from rough wireframes to beautiful, pixel-perfect UI screens, applying a cohesive design system of typography, colors, and interactive states." },
          { name: "Interactive Prototyping", heading: "Create a clickable model to validate with real users.", desc: "The static screens are linked together in Figma to mimic a real application. You can click through menus and forms to test the logic before any expensive code is written." }
        ],
        faqs: [
          { q: "Why should we pay for discovery instead of jumping into development?", a: "Pivoting during the design phase costs hundreds; pivoting during engineering costs thousands. Discovery eliminates massive financial risk by validating ideas visually first." },
          { q: "What exactly is delivered at the end of discovery?", a: "You receive a complete, high-fidelity clickable Figma prototype, a technical architecture blueprint, and an accurate, unpadded estimate for full engineering delivery." },
          { q: "Are we obligated to use your development team afterward?", a: "No. You have full ownership of the prototype, documentation, and blueprints, and are free to take them to any engineering team globally." },
          { q: "Can we use the prototype to pitch investors?", a: "Absolutely. The clickable prototypes we deliver look and feel exactly like a real coded application, making them perfect for board presentations or seed-stage fundraising." },
          { q: "How long does the Product Discovery phase take?", a: "Depending on the complexity of the product, discovery sprints typically run between 2 to 4 weeks." }
        ],
        benefits: [
          { title: "Risk Elimination", desc: "Validate complex features visually before spending massive engineering budgets on the wrong solution." },
          { title: "Pitch Ready Prototypes", desc: "Walk away with a gorgeous, interactive Figma prototype you can use to secure early funding or board approval." },
          { title: "Accurate Estimations", desc: "By defining every screen and logic flow in advance, you receive highly accurate technical timelines." },
          { title: "Market Gap Analysis", desc: "Deep UX tear-downs of your competitors reveal friction points that you can capitalize on immediately." }
        ]
      },
      {
        id: "product-development",
        name: "Product Development",
        highlights: ["Agile 2-week sprints", "Weekly demos", "Senior oversight"],
        description: "Turn a validated idea into a shipped product",
        heroVisual: {
          image: "/assets/services/product-development.jpg",
          alt: "Product Development — agile sprint dashboard with Kanban board and CI/CD pipeline status",
          urlLabel: "agile.workspace/sprints",
          sidebarActive: "Sprint Velocity",
          sidebarInactive: "Backlog",
          mainHeading: "Agile Development Cycle",
          metrics: ["14-Day Sprint", "95% Velocity"],
          chartData: [85, 90, 88, 92, 95, 94, 98, 100],
          terminal: {
            user: "root@git-repo:~$",
            command: "git merge feature/new-dashboard",
            output1: "Running automated test suites...",
            output2: "Deploying to staging environment:",
            status: "MERGED"
          }
        },
        features: [
          { 
            title: "Sprint Planning", 
            desc: "Organize iterations cleanly into manageable, value-delivering bi-weekly chunks.",
            details: ["Backlog Grooming", "Story Pointing", "Velocity Tracking", "Sprint Goals"],
            tags: ["Agile", "Management"]
          },
          { 
            title: "Bi-Weekly Demos", 
            desc: "Provide total transparency through regular, live demonstrations of working software.",
            details: ["Live Walkthroughs", "Feedback Incorporation", "Progress Transparency", "Stakeholder Review"],
            tags: ["Communication", "Delivery"]
          },
          { 
            title: "Automated Testing", 
            desc: "Ensure reliability by mandating high test coverage for critical business logic.",
            details: ["Unit Testing", "Integration Testing", "E2E Suites", "Coverage Reports"],
            tags: ["Quality", "Reliability"]
          },
          { 
            title: "Staging to Production", 
            desc: "Maintain smooth deployment pipelines that ensure zero-downtime releases.",
            details: ["Staging Environments", "Blue/Green Deploy", "Database Migrations", "Release Tagging"],
            tags: ["DevOps", "CI/CD"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Development Stack",
              description: "The primary technologies utilized for rapidly building scalable products.",
              technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"]
            },
            {
              name: "DevOps & CI/CD",
              description: "Pipelines guaranteeing smooth, zero-downtime production rollouts.",
              technologies: ["Docker", "GitHub Actions", "AWS", "Vercel"]
            },
            {
              name: "Project Management",
              description: "Agile methodologies tracking sprint velocity and ticket completion.",
              technologies: ["Jira", "Linear", "Slack", "Confluence"]
            }
          ]
        },
        process: [
          { name: "Backlog Creation", heading: "Break down the prototype into epic and user story tickets.", desc: "Product Managers convert visual prototypes into granular engineering tasks. Each Jira ticket outlines exact acceptance criteria so developers know precisely what constitutes 'done'." },
          { name: "Agile Sprints", heading: "Execute development in focused 2-week iterations.", desc: "Engineers pull tickets into bi-weekly sprints, prioritizing core architecture first. At the end of every 14 days, we demonstrate live, working software to you for immediate feedback." },
          { name: "QA & Testing", heading: "Continuous integration and automated testing for every commit.", desc: "Before any code merges, automated test suites run to verify logic, while QA engineers manually attempt to break the UI. This dual-layered approach prevents regressions." },
          { name: "Deployment", heading: "Push to production with zero-downtime CI/CD pipelines.", desc: "Approved code is automatically built, containerized, and deployed to live cloud servers. Users experience seamless updates without ever seeing a maintenance page." }
        ],
        faqs: [
          { q: "What project management methodology do you use?", a: "We adhere strictly to Agile Scrum methodologies, organizing work into 2-week sprints to ensure continuous momentum and adaptability." },
          { q: "How often will we see progress?", a: "You will receive a live, interactive demonstration of working software at the end of every 14-day sprint, guaranteeing absolute transparency." },
          { q: "Can we change requirements halfway through the project?", a: "Yes. Agile is designed for flexibility. If market feedback changes your priorities, we simply groom the backlog and adjust the scope for the next sprint." },
          { q: "Who handles the quality assurance?", a: "Dedicated QA engineers write automated tests and manually verify UX on staging environments before any feature is allowed to touch production." },
          { q: "Who is our main point of contact?", a: "You will be assigned a dedicated Technical Product Manager who bridges the gap between your business goals and the engineering team." }
        ],
        benefits: [
          { title: "Predictable Agile Delivery", desc: "Bi-weekly sprints guarantee continuous momentum and total transparency into exactly what features are being built." },
          { title: "Zero Black-Box Engineering", desc: "You receive live software demonstrations every two weeks, ensuring the product always aligns with your expectations." },
          { title: "Rigorous QA Standards", desc: "Automated regression testing and manual UX checks are built directly into the sprint lifecycle, not rushed at the end." },
          { title: "Seamless CI/CD Scaling", desc: "From day one, we build staging and production pipelines that allow for zero-downtime feature releases." }
        ]
      },
      {
        id: "app-modernization",
        name: "App Modernization",
        highlights: ["Legacy → modern stack", "Zero data loss", "Minimal downtime"],
        description: "Migrate legacy systems without disrupting the business",
        heroVisual: {
          image: "/assets/services/app-modernization.jpg",
          alt: "App Modernization — migration telemetry dashboard showing legacy to microservices transition",
          urlLabel: "cloud.workspace/migration",
          sidebarActive: "Strangler Pattern",
          sidebarInactive: "Legacy DB",
          mainHeading: "Migration Telemetry",
          metrics: ["0% Data Loss", "Parallel Sync"],
          chartData: [100, 90, 80, 60, 45, 30, 15, 0],
          terminal: {
            user: "root@migration-tool:~$",
            command: "python etl_pipeline.py --sync-all",
            output1: "Transforming legacy schemas to modern DB...",
            output2: "Shadow traffic validation:",
            status: "VERIFIED"
          }
        },
        features: [
          { 
            title: "Codebase Audit", 
            desc: "Analyze the current state of legacy applications to identify technical debt and dependencies.",
            details: ["Dependency Mapping", "Security Audit", "Logic Extraction", "Debt Calculation"],
            tags: ["Analysis", "Code Review"]
          },
          { 
            title: "Migration Plan", 
            desc: "Design a step-by-step transition strategy using the strangler-fig pattern.",
            details: ["Strangler-Fig Pattern", "Phased Rollouts", "Architecture Design", "Risk Mitigation"],
            tags: ["Strategy", "Architecture"]
          },
          { 
            title: "Parallel Validation", 
            desc: "Test the modern application in parallel with the legacy system to ensure complete data integrity.",
            details: ["Shadow Traffic", "Data Syncing", "A/B Output Testing", "Fallback Protocols"],
            tags: ["Testing", "Integrity"]
          },
          { 
            title: "Performance Tuning", 
            desc: "Optimize the newly modernized stack for maximum speed, security, and cloud scalability.",
            details: ["Caching Layers", "Query Optimization", "Auto-Scaling", "Load Testing"],
            tags: ["Performance", "Optimization"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Modernization Core",
              description: "Target technologies replacing the outdated legacy frameworks.",
              technologies: ["Next.js", "Node.js", "Go", "React"]
            },
            {
              name: "Data Migration",
              description: "Tools utilized to safely extract, transform, and load historical data.",
              technologies: ["PostgreSQL", "MongoDB", "Apache Airflow", "ETL Scripts"]
            },
            {
              name: "Containerization",
              description: "DevOps infrastructure allowing old and new systems to run synchronously.",
              technologies: ["Docker", "Kubernetes", "AWS ECS", "Terraform"]
            }
          ]
        },
        process: [
          { name: "System Audit", heading: "Map existing legacy architecture and identify technical debt.", desc: "Engineers dive deep into your aging codebase to document undocumented business logic, flag massive security vulnerabilities, and analyze tightly coupled database dependencies." },
          { name: "Strategy & Blueprint", heading: "Design the target modern architecture (e.g., monolith to microservices).", desc: "We design a scalable cloud-native architecture that resolves current bottlenecks. We then construct a safe roadmap mapping how to move from point A to point B." },
          { name: "Incremental Refactoring", heading: "Strangler-fig approach: replace parts of the system without downtime.", desc: "Instead of a risky 'big bang' rewrite, we rewrite small modules one by one, quietly routing traffic to the modern code while the rest of the legacy system stays online." },
          { name: "Data Migration & Cutover", heading: "Securely move data to modern databases and launch.", desc: "We build strict ETL pipelines to transform messy legacy data into clean modern schemas. Once data integrity is verified, we permanently shut off the old systems." }
        ],
        faqs: [
          { q: "Will our daily business operations face downtime during migration?", a: "No. We utilize the Strangler-Fig pattern, running the modern application alongside the legacy system to ensure zero operational disruption." },
          { q: "How do you guarantee we won't lose historical data?", a: "We engineer rigorous ETL pipelines with shadow-traffic testing, guaranteeing perfect data transformation and integrity before the old databases are ever deprecated." },
          { q: "Do we have to rewrite the entire application at once?", a: "Not at all. We modernize modularly—for example, replacing the frontend UI first while temporarily keeping the legacy backend running behind secure API bridges." },
          { q: "What happens to undocumented legacy business logic?", a: "Our senior architects perform deep reverse-engineering of the legacy codebase to document hidden rules, ensuring no critical logic is lost during the translation to modern frameworks." },
          { q: "Will modernization lower our server costs?", a: "Usually, yes. By migrating monolithic legacy systems into auto-scaling, cloud-native microservices, you eliminate the need to pay for continuously over-provisioned hardware." }
        ],
        benefits: [
          { title: "Strangler-Fig Safety", desc: "We modernize application modules incrementally alongside the legacy system, completely avoiding dangerous 'big-bang' rewrites." },
          { title: "Guaranteed Data Integrity", desc: "Rigorous ETL pipelines and parallel shadow testing ensure no historical data is ever corrupted during the transition." },
          { title: "Elimination of Tech Debt", desc: "Close glaring security vulnerabilities and remove reliance on deprecated libraries that no longer receive patches." },
          { title: "Cloud-Native Performance", desc: "Transform slow monolithic apps into auto-scaling microservices that are significantly cheaper and faster to run." }
        ]
      },
      {
        id: "cloud-devops",
        name: "Cloud & DevOps",
        highlights: ["AWS/Azure/GCP", "CI/CD setup", "Infra-as-code"],
        description: "Reliable infrastructure with automated pipelines",
        heroVisual: {
          urlLabel: "aws.workspace/infrastructure",
          sidebarActive: "CI/CD Pipelines",
          sidebarInactive: "Cluster Health",
          mainHeading: "Infrastructure Monitoring",
          metrics: ["Auto-Scaling", "0 Downtime"],
          chartData: [45, 50, 48, 55, 52, 60, 58, 62],
          terminal: {
            user: "root@devops:~$",
            command: "terraform apply -auto-approve",
            output1: "Provisioning AWS resources (VPC, ECS)...",
            output2: "Infrastructure changes applied:",
            status: "SUCCESS"
          }
        },
        features: [
          { 
            title: "Architecture Design", 
            desc: "Establish a secure, scalable, and resilient cloud foundation tailored to your specific traffic needs.",
            details: ["VPC Design", "Multi-AZ Setup", "Disaster Recovery", "Security Groups"],
            tags: ["Cloud Infra", "Architecture"]
          },
          { 
            title: "CI/CD Implementation", 
            desc: "Automate code build, testing, and deployment pipelines to accelerate delivery cycles.",
            details: ["Pipeline Automation", "Artifact Registries", "Environment Configs", "Zero-Downtime"],
            tags: ["Pipelines", "Automation"]
          },
          { 
            title: "Monitoring & Alerting", 
            desc: "Deploy proactive observability tools to automatically resolve issues before users notice.",
            details: ["Log Aggregation", "Uptime Monitoring", "PagerDuty Alerts", "APM Tracing"],
            tags: ["Observability", "Operations"]
          },
          { 
            title: "Cost Optimization", 
            desc: "Audit and right-size cloud resource provisioning to aggressively reduce monthly infrastructure spend.",
            details: ["Resource Rightsizing", "Spot Instances", "Storage Tiering", "Billing Alarms"],
            tags: ["FinOps", "Cost Savings"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Cloud Providers",
              description: "The foundational cloud platforms hosting your architecture.",
              technologies: ["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean"]
            },
            {
              name: "Infrastructure as Code",
              description: "Frameworks used to codify, version-control, and automate server provisioning.",
              technologies: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"]
            },
            {
              name: "CI/CD & Observability",
              description: "Tools ensuring smooth deployments and deep visibility into system health.",
              technologies: ["GitHub Actions", "Jenkins", "Datadog", "Prometheus"]
            }
          ]
        },
        process: [
          { name: "Infrastructure Audit", heading: "Analyze current cloud setup for security, cost, and bottlenecks.", desc: "DevOps engineers inspect your existing cloud accounts, looking for over-provisioned servers, exposed ports, and architectural choke points that cause downtime." },
          { name: "IaC Implementation", heading: "Codify your infrastructure using Terraform or CloudFormation.", desc: "We translate manual server setups into clean Terraform code. This ensures your infrastructure is version-controlled, repeatable, and easily deployable to multiple regions." },
          { name: "Pipeline Automation", heading: "Set up robust CI/CD for automated testing and zero-downtime deployment.", desc: "We construct secure pipelines that automatically run tests, build Docker containers, and deploy to Kubernetes clusters, completely eliminating manual human deployment errors." },
          { name: "Observability", heading: "Integrate logging, metrics, and alerting systems.", desc: "We wire up Datadog or Prometheus to track CPU spikes and database deadlocks, configuring automated alerts so engineers are paged before the application ever crashes." }
        ],
        faqs: [
          { q: "Which cloud provider do you specialize in?", a: "We are cloud-agnostic, with deep certified expertise across AWS, Google Cloud (GCP), and Microsoft Azure, recommending platforms based on your specific requirements." },
          { q: "What is Infrastructure as Code (IaC)?", a: "IaC (like Terraform) replaces manual server clicking with written code. It makes scaling, versioning, and recovering your infrastructure completely automated and error-free." },
          { q: "How do you ensure zero-downtime deployments?", a: "We utilize CI/CD pipelines to build and test code in isolated environments, executing blue/green deployments to seamlessly route users to the new version without server downtime." },
          { q: "Can you help lower our massive AWS bill?", a: "Yes. Our cloud audits routinely cut infrastructure bills by 20-40% via instance rightsizing, spot-instance utilization, and deprecating orphaned resources." },
          { q: "How do you monitor for application crashes?", a: "We deploy Application Performance Monitoring (APM) tools like Datadog that track CPU, memory, and latency spikes, triggering PagerDuty alerts before a crash occurs." }
        ],
        benefits: [
          { title: "Infrastructure as Code", desc: "By codifying your servers in Terraform, we ensure exact repeatability and version-controlled architecture scaling." },
          { title: "Zero-Downtime Deployments", desc: "Automated CI/CD pipelines allow your team to ship code to production multiple times a day without interrupting users." },
          { title: "Proactive Observability", desc: "Custom Datadog alerts page the correct engineers long before a CPU spike escalates into a platform crash." },
          { title: "Aggressive Cloud FinOps", desc: "We right-size your instances and configure smart auto-scaling to permanently reduce your monthly AWS/GCP bills." }
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing & SEO",
    eyebrow: "Data-driven. ROI focused. · \"SEO, paid ads, content, and social — data-driven growth that turns traffic into revenue.\"",
    tags: ["GA4", "Search Console", "Meta Ads", "SEMrush"],
    services: [
      {
        id: "seo-services",
        name: "SEO Services",
        highlights: ["Technical + on-page SEO", "Content strategy", "Monthly reports"],
        description: "Sustainable organic growth on technical foundations",
        heroVisual: {
          urlLabel: "analytics.workspace/seo",
          sidebarActive: "Keyword Rankings",
          sidebarInactive: "Crawl Errors",
          mainHeading: "Organic Traffic Growth",
          metrics: ["+145% Traffic", "Page 1 Position"],
          chartData: [10, 15, 25, 40, 65, 85, 110, 140],
          terminal: {
            user: "root@seo-tools:~$",
            command: "python crawl_analyzer.py --domain",
            output1: "Scanning for broken links and 404s...",
            output2: "Core Web Vitals optimized:",
            status: "INDEXED"
          }
        },
        features: [
          { 
            title: "Technical Audit", 
            desc: "Resolve deep structural issues, core web vitals, and crawlability roadblocks that hinder search performance.",
            details: ["Crawl Diagnostics", "Site Speed (CWV)", "Canonical Tags", "Indexation Fixes"],
            tags: ["Technical SEO", "Auditing"]
          },
          { 
            title: "Keyword & Content Strategy", 
            desc: "Target high-intent search terms through comprehensive competitor analysis and topical mapping.",
            details: ["Keyword Research", "Topical Clusters", "Competitor Gap", "Search Intent"],
            tags: ["Content", "Strategy"]
          },
          { 
            title: "On-Page Optimization", 
            desc: "Improve site relevance by perfectly aligning meta tags, headers, and content structure with search intent.",
            details: ["Meta Data Tuning", "Header Structuring", "Internal Linking", "Image Alt Text"],
            tags: ["On-Page", "Optimization"]
          },
          { 
            title: "Monthly Reporting", 
            desc: "Transparent tracking of organic growth, keyword ranking improvements, and total conversion volume.",
            details: ["Traffic Analytics", "Ranking Tracking", "Conversion Goals", "Backlink Monitoring"],
            tags: ["Analytics", "Reporting"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "SEO Platforms",
              description: "Industry-leading tools for keyword research, rank tracking, and competitor analysis.",
              technologies: ["SEMrush", "Ahrefs", "Moz", "SurferSEO"]
            },
            {
              name: "Analytics",
              description: "Systems to meticulously measure organic traffic and attribution.",
              technologies: ["Google Analytics 4", "Google Search Console", "Looker Studio"]
            },
            {
              name: "Technical SEO",
              description: "Auditing software used to resolve deep-level crawlability and indexing issues.",
              technologies: ["Screaming Frog", "Lighthouse", "Schema Markup", "PageSpeed Insights"]
            }
          ]
        },
        process: [
          { name: "Technical Audit", heading: "Identify indexation, speed, and structural issues hindering growth.", desc: "We run deep crawls to expose 404s, slow Core Web Vitals, and missing canonical tags. We deliver a prioritized developer checklist to immediately repair the site's foundation." },
          { name: "Keyword & Competitor Strategy", heading: "Map high-intent search terms to specific landing pages.", desc: "We analyze competitor traffic gaps and isolate high-value keywords that actually drive revenue. We map these terms to specific URLs to ensure there is zero keyword cannibalization." },
          { name: "On-Page & Content", heading: "Optimize metadata, headers, and deploy high-quality topical content.", desc: "Our specialists rewrite H1s, title tags, and URL structures for maximum relevance. We then produce deep, helpful content to establish topical authority in Google's eyes." },
          { name: "Off-Page & Authority", heading: "Acquire high-quality backlinks and build domain authority.", desc: "We execute white-hat outreach campaigns to secure relevant backlinks from high-authority domains, sending strong trust signals that push your site to Page 1." }
        ],
        faqs: [
          { q: "How long until we see tangible ranking improvements?", a: "SEO is a foundational investment. Technical fixes show immediate indexing results, but significant keyword ranking growth typically compounds between months 3 and 6." },
          { q: "Do you guarantee page 1 rankings?", a: "No ethical agency can guarantee specific algorithmic placements. However, we guarantee strict adherence to data-driven, white-hat practices that historically yield page 1 results." },
          { q: "Do you handle the actual content writing?", a: "Yes. We have dedicated copywriters who produce high-quality, long-form content specifically tailored to satisfy Google's 'Helpful Content' guidelines." },
          { q: "What is Technical SEO and why do I need it?", a: "It involves fixing backend code—like server latency, mobile responsiveness, and messy canonical tags—ensuring Google bots can actually crawl your site without abandoning it." },
          { q: "How do you measure SEO success?", a: "We don't just track vanity traffic. Our Looker Studio dashboards correlate organic visibility directly to form fills, lead generation, and ultimate revenue." }
        ],
        benefits: [
          { title: "Technical Superiority", desc: "We fix deep crawlability errors and server latency issues that basic marketing agencies consistently overlook." },
          { title: "High-Intent Keyword Strategy", desc: "We target semantic clusters focused on conversion and revenue, rather than chasing empty, high-volume vanity metrics." },
          { title: "White-Hat Authority", desc: "Sustainable link-building and digital PR campaigns that permanently elevate domain authority without penalty risks." },
          { title: "Transparent ROI Reporting", desc: "Real-time Looker Studio dashboards correlate organic traffic growth directly to form fills and generated revenue." }
        ]
      },
      {
        id: "social-media-branding",
        name: "Social Media & Branding",
        highlights: ["Content calendar & creative", "Brand voice/identity", "Community management"],
        description: "Consistent brand presence across the right channels",
        heroVisual: {
          urlLabel: "social.workspace/planner",
          sidebarActive: "Content Calendar",
          sidebarInactive: "Engagement Stats",
          mainHeading: "Audience Growth Matrix",
          metrics: ["+45k Impressions", "High Engagement"],
          chartData: [40, 45, 60, 55, 80, 95, 120, 140],
          terminal: {
            user: "root@buffer:~$",
            command: "npm run publish --platforms=all",
            output1: "Uploading media assets to CDN...",
            output2: "Distribution synced across channels:",
            status: "POSTED"
          }
        },
        features: [
          { 
            title: "Brand Guidelines", 
            desc: "Establish a cohesive visual identity and distinctive voice that resonates with your core demographic.",
            details: ["Visual Identity", "Tone of Voice", "Color Palettes", "Typography Specs"],
            tags: ["Branding", "Design"]
          },
          { 
            title: "Monthly Calendar", 
            desc: "Plan and schedule a strategic content roadmap that balances engagement, education, and conversion.",
            details: ["Content Pillars", "Post Scheduling", "Trend Jacking", "Approval Workflows"],
            tags: ["Planning", "Strategy"]
          },
          { 
            title: "Creative Production", 
            desc: "Design scroll-stopping graphic assets and produce high-retention video content for your channels.",
            details: ["Short-Form Video", "Carousels", "Custom Graphics", "Copywriting"],
            tags: ["Content", "Media"]
          },
          { 
            title: "Community Management", 
            desc: "Actively engage with your audience to build brand loyalty and resolve customer inquiries publicly.",
            details: ["Comment Replies", "DM Management", "Brand Advocacy", "Crisis Handling"],
            tags: ["Engagement", "Social"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Creative & Design",
              description: "The primary suite used to generate brand-aligned visuals and video assets.",
              technologies: ["Canva Pro", "Adobe Photoshop", "Adobe Premiere", "Figma"]
            },
            {
              name: "Scheduling & Publishing",
              description: "Tools ensuring consistent, automated delivery of content across platforms.",
              technologies: ["Buffer", "Hootsuite", "Later", "Sprout Social"]
            },
            {
              name: "Analytics & Reporting",
              description: "Dashboards providing real-time insights into audience engagement and growth.",
              technologies: ["Meta Insights", "LinkedIn Analytics", "Looker Studio"]
            }
          ]
        },
        process: [
          { name: "Brand Voice & Identity", heading: "Define how your brand sounds and looks across channels.", desc: "We formalize your color palettes, fonts, and tone of voice. This ensures that whether a post goes up on LinkedIn or TikTok, it looks unmistakably like your company." },
          { name: "Content Strategy", heading: "Develop content pillars and a rolling 30-day calendar.", desc: "We architect a posting schedule balanced between educational, entertaining, and promotional content. Everything is approved by you in advance via a transparent calendar tool." },
          { name: "Creative Production", heading: "Design graphics, shoot video, and write engaging copy.", desc: "Our creative team designs carousels, edits short-form videos, and writes punchy captions tailored to the specific algorithms of each chosen social network." },
          { name: "Distribution & Engagement", heading: "Publish optimally and interact actively with your community.", desc: "We schedule posts during peak audience activity times. Our community managers then actively respond to comments and DMs to boost algorithm favorability and build brand loyalty." }
        ],
        faqs: [
          { q: "Which social media platforms should my business focus on?", a: "We strategically select platforms based on where your buyers live. B2B software thrives on LinkedIn, while D2C ecommerce excels on TikTok and Instagram." },
          { q: "Will you produce video content for us?", a: "Yes. Our creative team handles the scripting, editing, and production of high-retention short-form videos designed specifically for Reels and TikTok." },
          { q: "Do we get to approve the posts before they go live?", a: "Absolutely. We provide a full 30-day content calendar via a staging link, giving you complete oversight and approval power before anything is published." },
          { q: "How do you handle customer complaints in the comments?", a: "We establish clear crisis-management guidelines during onboarding, enabling our community managers to gracefully de-escalate public issues and route them to your support team." },
          { q: "What metrics define a successful social media strategy?", a: "Beyond vanity likes, we track meaningful engagement rates, follower growth velocity, and ultimate referral traffic driven directly to your website." }
        ],
        benefits: [
          { title: "Unwavering Consistency", desc: "A robust 30-day content calendar ensures your brand remains hyper-visible without scrambling for daily ideas." },
          { title: "Platform-Native Creative", desc: "We don't copy-paste. Assets are specifically tailored to respect the distinct algorithms and cultures of LinkedIn vs. TikTok." },
          { title: "Active Community Building", desc: "Prompt community management turns passive comment sections into highly engaged, loyal brand advocates." },
          { title: "Premium Visual Identity", desc: "High-quality graphic design and video editing ensure your organic presence matches the professionalism of your actual product." }
        ]
      },
      {
        id: "google-meta-ads",
        name: "Google & Meta Ads",
        highlights: ["Full-funnel setup", "Conversion tracking", "Weekly optimization"],
        description: "Paid campaigns managed for ROI, not impressions",
        heroVisual: {
          urlLabel: "ads.workspace/manager",
          sidebarActive: "Campaign ROAS",
          sidebarInactive: "A/B Testing",
          mainHeading: "Ad Spend vs Conversions",
          metrics: ["4.2x ROAS", "-20% CAC"],
          chartData: [20, 30, 25, 45, 60, 80, 75, 110],
          terminal: {
            user: "root@tracking:~$",
            command: "curl -X POST api/capi/sync",
            output1: "Syncing server-side conversion pixels...",
            output2: "Attribution modeled perfectly:",
            status: "TRACKED"
          }
        },
        features: [
          { 
            title: "Campaign Strategy", 
            desc: "Define highly targeted audiences, exact match keywords, and strict bidding goals to prevent wasted spend.",
            details: ["Audience Targeting", "Keyword Selection", "Bid Strategies", "Funnel Mapping"],
            tags: ["Strategy", "Planning"]
          },
          { 
            title: "Conversion Tracking", 
            desc: "Implement flawless pixel and server-side tracking to mathematically measure your true Return on Ad Spend (ROAS).",
            details: ["CAPI Integration", "Pixel Setup", "UTM Tracking", "Value Attribution"],
            tags: ["Tracking", "Analytics"]
          },
          { 
            title: "A/B Testing", 
            desc: "Continuously iterate on ad creatives, copy hooks, and landing pages to lower Customer Acquisition Costs (CAC).",
            details: ["Creative Variations", "Headline Testing", "Landing Page CRO", "Offer Iteration"],
            tags: ["Optimization", "Testing"]
          },
          { 
            title: "Weekly Optimization", 
            desc: "Shift budgets aggressively on a weekly basis to double down on the highest performing ad variations.",
            details: ["Budget Reallocation", "Search Term Scrubbing", "Audience Refresh", "Performance Reports"],
            tags: ["Management", "Scaling"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Ad Networks",
              description: "The primary bidding and delivery platforms driving targeted traffic.",
              technologies: ["Google Ads", "Meta Business Manager", "LinkedIn Ads", "TikTok Ads"]
            },
            {
              name: "Tracking & Pixel",
              description: "Infrastructure guaranteeing accurate conversion attribution and ROAS measurement.",
              technologies: ["Google Tag Manager", "Facebook CAPI", "GA4", "UTM Builders"]
            },
            {
              name: "Landing Pages & CRO",
              description: "Tools utilized to drastically increase the conversion rate of paid traffic.",
              technologies: ["Unbounce", "Webflow", "Hotjar", "VWO"]
            }
          ]
        },
        process: [
          { name: "Tracking & Pixel Setup", heading: "Ensure GA4 and advertising pixels are accurately tracking conversions.", desc: "Before spending a dollar, we implement server-side APIs and tracking pixels. This guarantees every lead or sale is perfectly attributed to the exact ad that generated it." },
          { name: "Audience & Keyword Research", heading: "Identify high-converting demographics and search intent.", desc: "We construct rigorous audience personas and hunt for high-intent 'bottom-of-funnel' search queries to ensure your budget is spent on buyers, not browsers." },
          { name: "Creative & Copy Execution", heading: "Design compelling ad variations for rigorous A/B testing.", desc: "Copywriters craft varied hooks and designers produce multiple creatives. We launch these in isolated tests to scientifically determine which angle yields the lowest Cost Per Click." },
          { name: "Optimization & Scaling", heading: "Shift budget weekly to the highest performing ad sets.", desc: "We scrub search term reports weekly to block wasted spend, pausing losing ads and aggressively scaling budgets on campaigns that prove a positive Return on Ad Spend (ROAS)." }
        ],
        faqs: [
          { q: "Do you manage both search and social ads?", a: "Yes, we structure omni-channel funnels utilizing Google Ads to capture high search intent, and Meta/LinkedIn ads for retargeting and demand generation." },
          { q: "Who retains ownership of the ad accounts?", a: "You do. You pay the ad networks directly with your own credit card, meaning you retain 100% of the historical pixel data if we ever part ways." },
          { q: "How do you ensure you aren't wasting budget on bad clicks?", a: "We apply aggressive negative keyword lists and scrub search term reports weekly, blocking irrelevant traffic before it drains your budget." },
          { q: "Do you build the landing pages as well?", a: "Yes. High-converting ads require high-converting destinations. We design dedicated, frictionless landing pages specifically tailored to the ad's offer." },
          { q: "How often do you report on campaign performance?", a: "You receive a live dashboard tracking Cost Per Acquisition (CPA) and ROAS in real-time, backed by comprehensive end-of-month strategy reviews." }
        ],
        benefits: [
          { title: "Flawless Pixel Attribution", desc: "Server-side tracking ensures every conversion is measured perfectly, giving the algorithm accurate data to scale." },
          { title: "Relentless A/B Testing", desc: "We continuously rotate ad hooks, creatives, and landing page designs to systematically lower Customer Acquisition Costs." },
          { title: "Waste Elimination", desc: "Weekly search term scrubbing and negative keyword management ensure you never pay for irrelevant, non-converting clicks." },
          { title: "Scalable ROAS Generation", desc: "Once a winning funnel is established, we implement smart bidding strategies to scale revenue aggressively without losing efficiency." }
        ]
      },
      {
        id: "ai-search-visibility",
        name: "AI Search Visibility (AEO+GEO)",
        highlights: ["Optimize for AI answer engines", "Structured data/schema", "Citation tracking"],
        description: "Show up when people ask AI instead of Googling",
        heroVisual: {
          urlLabel: "aeo.workspace/visibility",
          sidebarActive: "LLM Citations",
          sidebarInactive: "Schema Data",
          mainHeading: "Brand Mention Velocity",
          metrics: ["#1 in ChatGPT", "Zero-Click Boost"],
          chartData: [5, 10, 12, 25, 45, 70, 95, 130],
          terminal: {
            user: "root@aeo-crawler:~$",
            command: "python check_llm_citations.py",
            output1: "Querying Perplexity & ChatGPT APIs...",
            output2: "Brand recommended as primary solution:",
            status: "VERIFIED"
          }
        },
        features: [
          { 
            title: "Content Audit for AI", 
            desc: "Evaluate your brand's visibility and sentiment when queried inside ChatGPT, Perplexity, and Claude.",
            details: ["LLM Query Tests", "Sentiment Analysis", "Citation Frequency", "Gap Analysis"],
            tags: ["Audit", "Visibility"]
          },
          { 
            title: "Schema Markup", 
            desc: "Inject rich, structured data context into your site so LLMs can perfectly parse your factual information.",
            details: ["JSON-LD Setup", "Entity Linking", "Knowledge Graph", "Product Schema"],
            tags: ["Structured Data", "Technical"]
          },
          { 
            title: "Entity Optimization", 
            desc: "Establish deep topical authority by ensuring your brand is recognized as an authoritative knowledge entity.",
            details: ["Brand Entities", "Wikipedia/WikiData", "Digital PR", "Author Authority"],
            tags: ["Entities", "Authority"]
          },
          { 
            title: "Visibility Tracking", 
            desc: "Monitor your presence, citation frequency, and referral volume stemming directly from AI engine responses.",
            details: ["Mention Tracking", "AI Sentiment Shift", "Zero-Click Impact", "Referral Analytics"],
            tags: ["Analytics", "Monitoring"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "AI Engines",
              description: "The primary LLM ecosystems where we optimize your brand's presence.",
              technologies: ["ChatGPT Search", "Perplexity AI", "Claude 3", "Google SGE"]
            },
            {
              name: "Semantic Data",
              description: "Frameworks used to structure your website's data for machine ingestion.",
              technologies: ["Schema.org", "JSON-LD", "Knowledge Graph APIs", "Wikidata"]
            },
            {
              name: "AEO Analytics",
              description: "Emerging tracking tools specialized in monitoring AI citations and sentiment.",
              technologies: ["Brand Mention APIs", "Custom Python Trackers", "SEMrush Sensors"]
            }
          ]
        },
        process: [
          { name: "Entity & Intent Mapping", heading: "Identify the questions your target audience asks AI engines.", desc: "We determine exactly what prompts your customers type into ChatGPT or Perplexity, analyzing if your brand is currently recommended as the answer or completely ignored." },
          { name: "Schema & Metadata Structuring", heading: "Format your site data so LLMs can easily ingest and cite it.", desc: "We implement advanced JSON-LD schema across your architecture, effectively feeding structured data directly to crawlers so LLMs understand exactly what your business does." },
          { name: "Authority & Citation Building", heading: "Ensure your brand is mentioned across authoritative data sources.", desc: "LLMs pull from established knowledge graphs. We run digital PR campaigns to get your brand cited in authoritative datasets and Wikipedia-style sources that AI models trust." },
          { name: "AEO Monitoring", heading: "Track how often your brand appears in ChatGPT, Perplexity, and Google SGE.", desc: "We employ automated trackers that query AI models weekly to monitor if your brand sentiment is improving and if citation rates are increasing against your competitors." }
        ],
        faqs: [
          { q: "How is Answer Engine Optimization (AEO) different from SEO?", a: "Traditional SEO optimizes for clicking blue links on a Google page. AEO structures your data explicitly so that conversational AI models (like ChatGPT) confidently recommend your brand as the factual answer." },
          { q: "Why do we need schema markup for AI?", a: "AI crawlers struggle to interpret purely visual websites. Deep JSON-LD schema feeds the AI structured, machine-readable data, preventing the LLM from hallucinating your pricing or features." },
          { q: "Which AI engines do you optimize for?", a: "We focus heavily on the dominant generative search models, specifically ChatGPT Search, Perplexity AI, Claude, and Google's AI Overviews (SGE)." },
          { q: "How do you track if people are finding us via AI?", a: "Direct click-attribution is currently limited, so we utilize custom Python trackers to monitor 'Brand Citations' and sentiment shifts across thousands of test prompts weekly." },
          { q: "Does AEO replace traditional SEO?", a: "No. They are highly symbiotic. Establishing traditional domain authority and acquiring backlinks remains a core signal that LLMs use to verify if a brand is trustworthy." }
        ],
        benefits: [
          { title: "Pioneer Advantage", desc: "Capitalize on Answer Engine Optimization (AEO) before your competitors even realize search behavior has shifted." },
          { title: "Direct Citation Authority", desc: "Being recommended explicitly by ChatGPT or Perplexity builds unparalleled trust with potential customers." },
          { title: "Deep Semantic Structuring", desc: "We structure your web data flawlessly so LLMs can parse your features, pricing, and services without hallucinating." },
          { title: "Future-Proofed Traffic", desc: "Protect your brand's digital visibility against the inevitable decline of traditional blue-link search engine behavior." }
        ]
      }
    ]
  },
  {
    id: "engineering-team-extension",
    name: "Engineering Team Extension",
    eyebrow: "NDA day 1 · Honest advice · \"Add experienced engineers to your team without the overhead of hiring full-time.\"",
    tags: ["Slack", "Jira", "Linear", "Notion"],
    services: [
      {
        id: "tech-consulting",
        name: "Tech Consulting",
        highlights: ["Architecture review", "Team structure advice", "Written docs"],
        description: "Get technical decisions right before committing time",
        heroVisual: {
          urlLabel: "audit.workspace/architecture",
          sidebarActive: "Tech Debt Score",
          sidebarInactive: "Security Scan",
          mainHeading: "Codebase Health Index",
          metrics: ["A-Grade Arch", "0 Vulnerabilities"],
          chartData: [30, 45, 40, 60, 55, 75, 80, 95],
          terminal: {
            user: "root@auditor:~$",
            command: "sonar-scanner --analyze-repo",
            output1: "Scanning for architectural anti-patterns...",
            output2: "Technical debt assessment generated:",
            status: "COMPLETE"
          }
        },
        features: [
          { 
            title: "Stack & Architecture Review", 
            desc: "Rigorously evaluate your technology choices to prevent expensive scaling bottlenecks.",
            details: ["Component Coupling", "Tech Debt Review", "Scaling Bottlenecks", "Security Vulnerabilities"],
            tags: ["Architecture", "Audit"]
          },
          { 
            title: "Codebase Audit", 
            desc: "Assess the structural quality and security of your current code to accurately measure technical debt.",
            details: ["Static Analysis", "Code Quality", "Dependency Checks", "Test Coverage"],
            tags: ["Code Quality", "Security"]
          },
          { 
            title: "Team Recommendations", 
            desc: "Advise on how to optimally structure, hire, and manage your internal engineering organization.",
            details: ["Org Chart Design", "Hiring Rubrics", "Agile Training", "Process Optimization"],
            tags: ["Management", "Scaling"]
          },
          { 
            title: "Written Documentation", 
            desc: "Deliver clear, actionable, and executive-ready reports that outline a precise technical roadmap.",
            details: ["Executive Summaries", "Action Plans", "Cost/Benefit Matrices", "Architecture Diagrams"],
            tags: ["Reporting", "Deliverables"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Analysis & Diagramming",
              description: "Tools utilized to visually map complex distributed systems.",
              technologies: ["Lucidchart", "Miro", "Draw.io", "AWS Architecture Tool"]
            },
            {
              name: "Code Auditing",
              description: "Static analysis software to detect security flaws and technical debt.",
              technologies: ["SonarQube", "Snyk", "ESLint", "CodeClimate"]
            },
            {
              name: "Documentation",
              description: "Platforms used to deliver comprehensive architectural playbooks.",
              technologies: ["Notion", "Confluence", "Markdown", "Swagger/OpenAPI"]
            }
          ]
        },
        process: [
          { name: "Discovery", heading: "Understand your business goals, current tech stack, and pain points.", desc: "We begin under strict NDA to thoroughly understand your roadmap. We interview your leads to identify precisely where the tech is failing your business objectives." },
          { name: "Deep-Dive Audit", heading: "Review code quality, infrastructure, security, and scalability.", desc: "Senior architects parse your repositories, flag architectural anti-patterns, run security vulnerability scans, and evaluate if the database schema can support future growth." },
          { name: "Strategy & Architecture", heading: "Design solutions, select optimal stacks, and plan migrations.", desc: "Based on the audit, we design a modernized architecture. We calculate the trade-offs of refactoring versus rebuilding, aiming for the most cost-effective path to stability." },
          { name: "Executive Report", heading: "Deliver actionable documentation and a phased execution roadmap.", desc: "You receive a comprehensive playbook containing architectural diagrams, technical debt scores, and a step-by-step sprint plan detailing exactly what to fix and when." }
        ],
        faqs: [
          { q: "Do you actually read our source code?", a: "Yes. Under a strict NDA, our senior architects run deep static analysis and manually review your repositories to assess technical debt and architectural coupling." },
          { q: "Will you provide architectural diagrams?", a: "Yes. We map your current system state versus the proposed future state, delivering complete entity-relationship and infrastructure diagrams." },
          { q: "Can you help us interview and hire internal engineers?", a: "Absolutely. We routinely develop technical hiring rubrics, conduct system-design interviews, and help you structure your internal engineering org chart." },
          { q: "Is this consulting totally objective?", a: "100%. We provide brutal honesty regarding tech debt and build-vs-buy decisions, cutting through internal company politics to deliver what is best for the product." },
          { q: "How is the final strategy delivered?", a: "We present a boardroom-ready executive summary alongside a highly technical, sprint-by-sprint execution playbook for your engineering leads to follow." }
        ],
        benefits: [
          { title: "Senior Architectural Insight", desc: "Gain direct access to battle-tested CTO-level expertise without committing to a $250k+ full-time executive salary." },
          { title: "Deep Technical Due Diligence", desc: "Our audits expose hidden security flaws and structural tech debt before they cripple your upcoming scaling efforts." },
          { title: "Objective Roadmap Definition", desc: "We provide unbiased, third-party technical strategies, cutting through internal politics to deliver what the business actually needs." },
          { title: "Process Optimization", desc: "Beyond code, we refine your sprint methodologies and hiring rubrics to permanently increase your internal team's velocity." }
        ]
      },
      {
        id: "legacy-modernization",
        name: "Legacy Modernization",
        highlights: ["Framework migration", "Dependency upgrades", "Zero-downtime rollout"],
        description: "Bring aging systems up to modern standards",
        heroVisual: {
          urlLabel: "legacy.workspace/refactor",
          sidebarActive: "Microservices",
          sidebarInactive: "Monolith Metrics",
          mainHeading: "Codebase Refactoring",
          metrics: ["Dependencies Updated", "0% Regressions"],
          chartData: [90, 80, 70, 50, 40, 20, 10, 5],
          terminal: {
            user: "root@refactor:~$",
            command: "npm run migrate:v1-to-v2",
            output1: "Containerizing legacy monolith app...",
            output2: "Strangler proxy routing traffic:",
            status: "STABLE"
          }
        },
        features: [
          { 
            title: "System Assessment", 
            desc: "Identify critical pain points, security flaws, and undocumented dependencies in your legacy platform.",
            details: ["Legacy Auditing", "Risk Profiling", "Data Flow Tracing", "Feature Parity Mapping"],
            tags: ["Discovery", "Analysis"]
          },
          { 
            title: "Migration Roadmap", 
            desc: "Formulate a step-by-step transition strategy that utilizes the strangler-fig pattern for safe upgrading.",
            details: ["Phased Strategy", "Tool Selection", "Resource Allocation", "Timeline Creation"],
            tags: ["Planning", "Strategy"]
          },
          { 
            title: "Incremental Rollout", 
            desc: "Deploy modernized modules progressively to minimize operational risk and user disruption.",
            details: ["Strangler Fig Pattern", "Micro-Frontends", "A/B Traffic Routing", "Fallback Mechanisms"],
            tags: ["Execution", "Safety"]
          },
          { 
            title: "Documentation Handover", 
            desc: "Empower your internal engineering team with comprehensive documentation of the newly modernized stack.",
            details: ["System Architectures", "Developer Guides", "API Specs", "Runbooks"],
            tags: ["Handover", "Training"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Modern Architectures",
              description: "Target technologies replacing monolithic and outdated systems.",
              technologies: ["Microservices", "Next.js", "Node.js", "Go"]
            },
            {
              name: "Cloud & Containerization",
              description: "Infrastructure permitting legacy and modern apps to run concurrently.",
              technologies: ["Docker", "Kubernetes", "AWS Fargate", "Terraform"]
            },
            {
              name: "Data ETL",
              description: "Tools for securely migrating data from legacy formats to modern databases.",
              technologies: ["Apache Airflow", "AWS DMS", "PostgreSQL", "Python ETL"]
            }
          ]
        },
        process: [
          { name: "Legacy System Audit", heading: "Map dependencies, undocumented logic, and security vulnerabilities.", desc: "We investigate the old application, untangling spaghetti code and mapping out hidden business rules. We identify severe security risks that demand immediate patching." },
          { name: "Modernization Strategy", heading: "Choose between re-platforming, refactoring, or a complete rewrite.", desc: "We determine the safest path forward. If a full rewrite is too risky, we design a 'strangler' architecture where new features are built in a modern stack alongside the old one." },
          { name: "Parallel Engineering", heading: "Build the modern system while maintaining the legacy application.", desc: "Engineers construct the new cloud-native microservices. We utilize API gateways to route traffic seamlessly between the legacy code and the newly modernized modules." },
          { name: "Seamless Cutover", heading: "Migrate traffic and data with zero disruption to end-users.", desc: "Once a module reaches complete feature parity, we switch the traffic over entirely. Old systems are slowly deprecated and shut down without the end-user ever noticing." }
        ],
        faqs: [
          { q: "Will our daily business operations face downtime during migration?", a: "No. We utilize the Strangler-Fig pattern, running the modern application alongside the legacy system to ensure zero operational disruption." },
          { q: "How do you guarantee we won't lose historical data?", a: "We engineer rigorous ETL pipelines with shadow-traffic testing, guaranteeing perfect data transformation and integrity before the old databases are ever deprecated." },
          { q: "Do we have to rewrite the entire application at once?", a: "Not at all. We modernize modularly—for example, replacing the frontend UI first while temporarily keeping the legacy backend running behind secure API bridges." },
          { q: "What happens to undocumented legacy business logic?", a: "Our senior architects perform deep reverse-engineering of the legacy codebase to document hidden rules, ensuring no critical logic is lost during the translation to modern frameworks." },
          { q: "Will modernization lower our server costs?", a: "Usually, yes. By migrating monolithic legacy systems into auto-scaling, cloud-native microservices, you eliminate the need to pay for continuously over-provisioned hardware." }
        ],
        benefits: [
          { title: "Strangler-Fig Safety", desc: "We modernize application modules incrementally alongside the legacy system, completely avoiding dangerous 'big-bang' rewrites." },
          { title: "Guaranteed Data Integrity", desc: "Rigorous ETL pipelines and parallel shadow testing ensure no historical data is ever corrupted during the transition." },
          { title: "Elimination of Tech Debt", desc: "Close glaring security vulnerabilities and remove reliance on deprecated libraries that no longer receive patches." },
          { title: "Cloud-Native Performance", desc: "Transform slow monolithic apps into auto-scaling microservices that are significantly cheaper and faster to run." }
        ]
      },
      {
        id: "testing-qa",
        name: "Testing & QA",
        highlights: ["Manual + automated testing", "Regression suites", "Load testing"],
        description: "Catch what breaks before your users do",
        heroVisual: {
          urlLabel: "qa.workspace/e2e-tests",
          sidebarActive: "Test Suites",
          sidebarInactive: "Coverage Map",
          mainHeading: "Automated Regression",
          metrics: ["1,420 Passing", "98% Coverage"],
          chartData: [85, 87, 86, 92, 94, 98, 97, 100],
          terminal: {
            user: "root@cypress:~$",
            command: "npx cypress run --browser chrome",
            output1: "Executing End-to-End user journeys...",
            output2: "All assertions passed successfully:",
            status: "ALL GREEN"
          }
        },
        features: [
          { 
            title: "Test Plan Design", 
            desc: "Define a comprehensive testing scope that explicitly targets your platform's most critical user journeys.",
            details: ["Test Case Auth", "Coverage Strategy", "Environment Setup", "Requirement Tracing"],
            tags: ["Planning", "QA"]
          },
          { 
            title: "Automated Regression", 
            desc: "Engineer robust CI/CD test suites to aggressively prevent older bugs from ever reappearing.",
            details: ["E2E Automation", "CI/CD Integration", "Flaky Test Fixes", "Nightly Builds"],
            tags: ["Automation", "CI/CD"]
          },
          { 
            title: "Performance & Load Testing", 
            desc: "Simulate massive traffic spikes to guarantee architectural stability during peak usage periods.",
            details: ["Stress Testing", "Spike Simulations", "Latency Checks", "Memory Profiling"],
            tags: ["Performance", "Load"]
          },
          { 
            title: "Bug Tracking", 
            desc: "Manage issue resolution efficiently by integrating rich test reports directly into your Jira or Linear boards.",
            details: ["Repro Steps", "Video Evidence", "Severity Triaging", "Dev Handoff"],
            tags: ["Tracking", "Reporting"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "End-to-End Testing",
              description: "Frameworks designed to simulate real user interactions in the browser.",
              technologies: ["Cypress", "Playwright", "Selenium", "Puppeteer"]
            },
            {
              name: "Unit & Integration",
              description: "Low-level libraries verifying component and API functionality.",
              technologies: ["Jest", "Vitest", "Mocha", "Supertest"]
            },
            {
              name: "Load & Performance",
              description: "Stress testing utilities to benchmark server breaking points.",
              technologies: ["k6", "Apache JMeter", "Artillery", "Lighthouse"]
            }
          ]
        },
        process: [
          { name: "Test Strategy", heading: "Define coverage goals, environments, and manual vs. automated split.", desc: "We review the product requirements to identify the highest-risk user journeys. We then outline exactly which features need automated scripts versus which require manual UX testing." },
          { name: "Test Case Authoring", heading: "Write comprehensive edge cases and user journeys.", desc: "QA engineers write out detailed, step-by-step test cases in Jira or TestRail, capturing extreme edge cases, invalid inputs, and negative paths that a developer might overlook." },
          { name: "Automation Implementation", heading: "Build robust, flaky-free automated test suites in CI/CD.", desc: "Using Cypress or Playwright, we code end-to-end regression scripts. These are hooked directly into your GitHub Actions so they execute automatically on every single pull request." },
          { name: "Execution & Reporting", heading: "Continuous testing, load testing, and detailed bug reporting.", desc: "We simulate thousands of concurrent users using k6 to ensure the server holds up. Any bugs found are logged with video recordings and exact reproduction steps for the devs." }
        ],
        faqs: [
          { q: "What is the difference between manual and automated testing?", a: "Manual testing relies on human QA engineers exploring the UI for edge cases. Automated testing writes code (like Cypress) to perfectly repeat identical workflows on every deployment." },
          { q: "Do you integrate the automated tests into our CI/CD pipeline?", a: "Yes. We configure GitHub Actions or Jenkins to run our test suites automatically on every pull request, blocking broken code from merging." },
          { q: "How do you test if our application can handle a viral traffic spike?", a: "We write load testing scripts using k6 or Artillery, simulating tens of thousands of concurrent users to intentionally find and fix server breaking points." },
          { q: "How are bugs reported to our developers?", a: "We log bugs directly into your Jira or Linear board, providing exact reproduction steps, console logs, and screen recordings to eliminate developer guesswork." },
          { q: "Do you maintain the automated tests over time?", a: "Yes. As your UI evolves, test selectors will break. We actively maintain and update the automation scripts so they don't become flaky." }
        ],
        benefits: [
          { title: "Flawless Code Merges", desc: "Automated regression tests block broken code from ever being deployed to production, securing the core product." },
          { title: "High Traffic Confidence", desc: "Load testing ensures your infrastructure holds steady during major marketing pushes or viral traffic spikes." },
          { title: "Detailed Dev Handoffs", desc: "Bugs are reported with perfect reproduction steps and video recordings, eliminating developer guesswork." },
          { title: "Reduced Support Strain", desc: "By catching edge-case bugs internally, you drastically lower the volume of support tickets filed by frustrated customers." }
        ]
      },
      {
        id: "support-maintenance",
        name: "Support & Maintenance",
        highlights: ["Security patches/updates", "Uptime monitoring", "Monthly reports"],
        description: "A neglected product is a liability",
        heroVisual: {
          urlLabel: "datadog.workspace/alerts",
          sidebarActive: "Active Incidents",
          sidebarInactive: "Patch Logs",
          mainHeading: "24/7 Server Health",
          metrics: ["100% SLA Met", "0 Unpatched CVEs"],
          chartData: [15, 10, 12, 8, 5, 2, 0, 0],
          terminal: {
            user: "root@pagerduty:~$",
            command: "npm audit --audit-level=critical",
            output1: "Scanning for zero-day vulnerabilities...",
            output2: "All dependencies are patched and secure:",
            status: "SECURE"
          }
        },
        features: [
          { 
            title: "Patches & Updates", 
            desc: "Proactively keep your frameworks, libraries, and server operating systems secure against zero-day exploits.",
            details: ["Dependency Bumps", "Security Patching", "OS Upgrades", "Vulnerability Scans"],
            tags: ["Security", "Maintenance"]
          },
          { 
            title: "Monitoring & Incident Response", 
            desc: "Ensure absolute maximum uptime with 24/7 observability and automated on-call routing protocols.",
            details: ["24/7 Uptime Checks", "PagerDuty Routing", "SLA Fulfillment", "Downtime Recovery"],
            tags: ["Operations", "SLA"]
          },
          { 
            title: "Performance Alerts", 
            desc: "Address memory leaks and API latency proactively before they cascade into user-facing outages.",
            details: ["Latency Thresholds", "Memory Profiling", "DB Deadlock Alerts", "Proactive Fixes"],
            tags: ["Performance", "Alerting"]
          },
          { 
            title: "Health Reports", 
            desc: "Provide transparent, regular system updates detailing prevented incidents and completed maintenance tasks.",
            details: ["Uptime Stats", "Incident Post-mortems", "Task Logs", "Future Recommendations"],
            tags: ["Reporting", "Transparency"]
          }
        ],
        techStack: {
          categories: [
            {
              name: "Observability",
              description: "Dashboards tracking API metrics, server loads, and application errors.",
              technologies: ["Datadog", "New Relic", "Sentry", "AWS CloudWatch"]
            },
            {
              name: "Incident Response",
              description: "Routing software ensuring the right engineers are paged immediately.",
              technologies: ["PagerDuty", "Opsgenie", "Slack Integrations", "Statuspage"]
            },
            {
              name: "Security & Auditing",
              description: "Automated scanners detecting outdated or vulnerable package dependencies.",
              technologies: ["Dependabot", "Snyk", "SonarQube", "OWASP ZAP"]
            }
          ]
        },
        process: [
          { name: "Onboarding & Audit", heading: "Set up monitoring tools and document incident response playbooks.", desc: "We deploy Sentry and Datadog across your infrastructure to catch errors instantly. We write runbooks so our on-call engineers know exactly how to reboot or fix your specific app." },
          { name: "Proactive Monitoring", heading: "24/7 tracking of server health, API latency, and error rates.", desc: "Automated systems watch your CPU, memory, and database health 24/7. If an API endpoint starts responding 500ms slower than normal, an alert is triggered before a crash happens." },
          { name: "Routine Maintenance", heading: "Apply security patches, update dependencies, and optimize databases.", desc: "Every month, we safely upgrade your npm/pip packages to their latest secure versions. We run database vacuuming and optimize indexes to ensure long-term speed doesn't degrade." },
          { name: "Incident Resolution", heading: "Rapid response SLA to triage and fix critical production issues.", desc: "If the site goes down at 3 AM, PagerDuty wakes up our engineers. We execute the runbook, restore services, and deliver a detailed post-mortem report explaining what failed." }
        ],
        faqs: [
          { q: "Do you offer 24/7 emergency support?", a: "Yes. We define strict Service Level Agreements (SLAs) tailored to your business, up to and including 24/7 PagerDuty incident response." },
          { q: "Will you maintain an application built by another development team?", a: "Yes. We begin with a rigorous onboarding audit to document the existing architecture, establish runbooks, and secure the infrastructure before taking over maintenance." },
          { q: "How do you handle zero-day security vulnerabilities?", a: "We utilize automated dependency scanners (like Snyk) that immediately alert us to compromised packages, allowing us to patch the application proactively." },
          { q: "Can we use maintenance hours for new feature development?", a: "Yes. If the application is stable and requires no emergency patches, retainer hours can be re-allocated to developing minor features or UI improvements." },
          { q: "How are we kept informed of server health?", a: "You receive comprehensive monthly health reports detailing uptime metrics, patched dependencies, prevented incidents, and recommendations for future optimization." }
        ],
        benefits: [
          { title: "Ironclad Security", desc: "Routine dependency updates and OS patching guarantee you remain protected against the latest zero-day exploits." },
          { title: "24/7 Incident Response", desc: "Strict SLA agreements mean our engineers are paged instantly if servers go down, getting you back online in minutes." },
          { title: "Extended App Lifespan", desc: "Active maintenance prevents slow code-rot, extending the usable life of your platform by several years." },
          { title: "Proactive Issue Resolution", desc: "Observability alerts catch memory leaks and API slowdowns before they ever escalate into user-facing outages." }
        ]
      }
    ]
  }
];
