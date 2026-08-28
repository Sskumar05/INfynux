# Complete Services Page Ecosystem — Next.js/React (Reference: infynno.com)

Idhu infynno.com oda **Services section full structure** study panni build panna complete system — navbar dropdown mattum illa, ovvoru individual service kum full detail page. Ithu ஒரே `.md` file la ella content, structure, code ellame irukku.

---

## 1. Structure Study — Infynno Services Pages

Infynno homepage + `/services/web-development-company` page ah fetch panni study pannen. Pattern ithu:

1. **Hero** — eyebrow tag + big heading (2 lines) + subtext + 2 CTA buttons + trust badges + stat strip
2. **"Done Right" 3-card section** — numbered 01/02/03, tags kooda
3. **Numbered services grid** — 01, 02, 03... ஒவ்வொரு service கும் 3 highlight bullets + 1 line description + 4 feature bullets
4. **Tech stack tabs section**
5. **Process stepper** — Discovery & NDA → Prototype → Sprint Planning → Build → QA → Launch → Support
6. **Portfolio/case studies grid** — industry tag + project name + result stat + tech chips
7. **Testimonials** — 3-column quote cards
8. **Benefits/"Why us"** — numbered 2-column list
9. **FAQ accordion** — numbered 01-08
10. **Final CTA banner** — heading + subtext + button + numbered mini-steps + badges
11. **Footer** — logo + description + 4 link columns + contact + certifications

**Design cues:** numbering everywhere, short punchy headings, real numbers over adjectives ("9M+ notices" not "many clients"), consistent 3-4 bullet pattern per card, trust badges repeated 3 times across the page.

---

## 2. Full Services Content (Structured, Ready to Customize)

### Category: AI Product Engineering
*Eyebrow: #1 in demand · "Design and build AI-native products that solve real business problems — not just AI demos." · Tags: GPT, Claude, OpenAI, LangChain, MCP*

| Service | Highlights | Description | Features |
|---|---|---|---|
| AI Product Development | Idea to production AI product · RAG/fine-tuning/prompting · Full observability & evals | End-to-end AI products built around a real user problem | Discovery & use-case validation · Model selection · Evaluation harness · Cost/latency optimization |
| AI Feature Integration | Add AI to existing product · No rebuild required · Ships in 4-6 weeks | Bolt intelligent features onto your current codebase | Codebase & data audit · API-first integration · Feature-flagged rollout · Post-launch monitoring |
| AI Agents & Assistants | Task-executing agents · Tool-use & function calling · Human-in-loop guardrails | Agents that take real actions, not just answer questions | Agent architecture & tool design · Workflow orchestration · Guardrails & approvals · Usage analytics |
| Generative AI Applications | Text/image/workflow gen · Custom gen-AI UI · Enterprise-safe deployment | Full applications built around generative AI as the core experience | Prompt & pipeline design · Custom generation UI · Content moderation · Scalable inference |
| AI Consulting | Where AI actually helps · Build vs buy analysis · Roadmap in 2 weeks | Honest advice on where AI creates value before you build | Opportunity mapping · Feasibility review · Build vs buy call · 12-month roadmap |
| AI Workflow Automation | Automate repetitive ops · n8n/custom pipelines · Human approval checkpoints | Replace manual operational work with automation pipelines | Process mapping · Pipeline build · Exception handling · Ongoing maintenance |

### Category: Custom Software Development
*Eyebrow: Outcome based development · "Build scalable web, mobile, SaaS, and enterprise applications engineered for long-term growth." · Tags: React, Next.js, Node.js, Laravel, React Native*

| Service | Highlights | Description | Features |
|---|---|---|---|
| Web Development | React/Next.js frontend · Node.js or Laravel backend · Role-based auth + admin | Full-stack web apps built for scale | Custom UI/UX · Scalable API architecture · Cloud deployment · CI/CD from sprint 1 |
| Mobile App Development | Cross-platform React Native · Native perf where needed · Store launch | Cross-platform apps that feel native, ship fast | RN cross-platform build · Native modules · Push/offline support · Store submission |
| Custom Software Development | Built for your exact workflow · No page-builder limits · Full IP ownership | 100% custom-coded solutions, no licensing lock-in | Workflow mapping · Custom admin/reporting · Stack integration · Scalable architecture |
| SaaS Development | Multi-tenant architecture · Billing built in · Public API + webhooks | Production-grade SaaS — multi-tenant, billed, scalable | Multi-tenant isolation · Stripe/Razorpay billing · Usage metering · API & webhooks |

### Category: Product Engineering
*Eyebrow: 170+ projects delivered · "From product discovery to continuous delivery, we help transform ideas into scalable digital products." · Tags: Figma, AWS, Docker, Kubernetes*

| Service | Highlights | Description | Features |
|---|---|---|---|
| Product Discovery | Clickable prototype week 1 · Market/competitor research · No delivery surprises | See your product as real screens before code is written | Discovery workshops · Competitor research · Clickable prototype · Feasibility assessment |
| Product Development | Agile 2-week sprints · Weekly demos · Senior oversight | Turn a validated idea into a shipped product | Sprint planning · Bi-weekly demos · Automated testing · Staging→production pipeline |
| App Modernization | Legacy → modern stack · Zero data loss · Minimal downtime | Migrate legacy systems without disrupting the business | Codebase audit · Migration plan · Parallel-run validation · Performance tuning |
| Cloud & DevOps | AWS/Azure/GCP · CI/CD setup · Infra-as-code | Reliable infrastructure with automated pipelines | Architecture design · CI/CD implementation · Monitoring/alerting · Cost optimization |

### Category: Digital Marketing & SEO
*Eyebrow: Data-driven. ROI focused. · "SEO, paid ads, content, and social — data-driven growth that turns traffic into revenue." · Tags: GA4, Search Console, Meta Ads, SEMrush*

| Service | Highlights | Description | Features |
|---|---|---|---|
| SEO Services | Technical + on-page SEO · Content strategy · Monthly reports | Sustainable organic growth on technical foundations | Technical audit · Keyword/content strategy · On-page optimization · Monthly reporting |
| Social Media & Branding | Content calendar & creative · Brand voice/identity · Community management | Consistent brand presence across the right channels | Brand guidelines · Monthly calendar · Creative production · Community management |
| Google & Meta Ads | Full-funnel setup · Conversion tracking · Weekly optimization | Paid campaigns managed for ROI, not impressions | Campaign strategy · Conversion tracking · A/B testing · Weekly spend optimization |
| AI Search Visibility (AEO+GEO) | Optimize for AI answer engines · Structured data/schema · Citation tracking | Show up when people ask AI instead of Googling | Content audit for AI engines · Schema markup · Entity optimization · Visibility tracking |

### Category: Engineering Team Extension
*Eyebrow: NDA day 1 · Honest advice · "Add experienced engineers to your team without the overhead of hiring full-time." · Tags: Slack, Jira, Linear, Notion*

| Service | Highlights | Description | Features |
|---|---|---|---|
| Tech Consulting | Architecture review · Team structure advice · Written docs | Get technical decisions right before committing time | Stack/architecture review · Codebase audit · Team recommendations · Written documentation |
| Legacy Modernization | Framework migration · Dependency upgrades · Zero-downtime rollout | Bring aging systems up to modern standards | System assessment · Migration roadmap · Incremental rollout · Documentation handover |
| Testing & QA | Manual + automated testing · Regression suites · Load testing | Catch what breaks before your users do | Test plan/case design · Automated regression · Performance/load testing · Bug tracking |
| Support & Maintenance | Security patches/updates · Uptime monitoring · Monthly reports | A neglected product is a liability | Patches/updates · Monitoring/incident response · Performance alerts · Health reports |

---

## 3. Shared Sections (Same on Every Service Page)

**Process (6 steps):**
1. Discovery & NDA — Sign NDA, structured session, define goals/users/technical needs
2. Visual Prototype — Real screens and flows before any code
3. Sprint Planning — Milestones per 2-week sprint
4. Build — Agile development, weekly updates, AI-assisted tooling
5. QA & Testing — Edge cases, performance, real-world usage
6. Launch & Support — Structured post-launch support window

**FAQ (customize with your real answers):**
- How long does a typical project take?
- Do you sign an NDA before we share details?
- Who owns the code and IP after the project?
- What happens after launch?

**Testimonials:** 3 rotating client quote cards (name, title, company) — replace with real client feedback.

**Benefits ("Why us"):** Direct access to engineers · NDA before any conversation · Fixed process, flexible scope · Post-launch support included

---

## 4. Design Tokens (CSS Variables)

```css
--ink-900: #0b0f14;   /* headings */
--ink-700: #1a2029;   /* body strong */
--ink-500: #4a5568;   /* body muted */
--paper-0: #ffffff;   /* card background */
--paper-50: #f6f7f9;  /* alt section background */
--line: #e3e6eb;      /* borders */
--accent: #ff6a3d;    /* single warm accent — used sparingly */
--accent-soft: #fff1ec;
--radius: 10px;
--maxw: 1180px;
```

---

## 5. Page & Component Architecture (Next.js App Router)

```
services-system/
├── data/servicesData.js          ← all content — single source of truth
├── components/
│   ├── services.module.css
│   ├── ServiceHero.jsx
│   ├── WhyUsCards.jsx
│   ├── ServicesGrid.jsx
│   ├── ProcessSteps.jsx
│   ├── Testimonials.jsx
│   ├── BenefitsList.jsx
│   ├── FAQAccordion.jsx
│   └── CTASection.jsx
└── app/services/
    ├── page.jsx                  ← /services hub (all categories)
    └── [slug]/page.jsx           ← /services/[slug] — one page per service
```

**How it connects:** `servicesData.js` la enna category/service add pannினாலும், `[slug]/page.jsx` automatic ah adhuku full page (hero → why-us → related services → process → testimonials → benefits → FAQ → CTA) render pannும். ஒரு component change பண்ணினா, **every service page** update aagும் — that's what keeps the whole system consistent, exactly like Infynno's site.

**Rule for every service card:** exactly 3 highlight bullets + 1 description line + 4 feature bullets. Never mix counts — this consistency is what makes the pages look designed.

---

## 6. What You Need To Do

1. Replace every placeholder in the tables above with **your real business content** (structure kept, wording must be yours — not copied from Infynno, to avoid copyright issues)
2. Update `siteConfig` (brand name, email, phone, CTA links) — see the code package
3. Swap testimonials with real client quotes
4. Adjust the CSS variables to your brand colors/fonts
5. Add real portfolio/case-study entries per category (Infynno used this section too — not detailed above since it needs your real project data)

---

### Note
Idhu content/structure document mattum. Ready-to-drop-in **React/Next.js code files** (`.jsx` components + `.zip`) already share pannitten previous message la — andha zip file eduthu unga project la merge pannunga. Idhu andha same system oda **readable reference doc** — client kitta kaatna, developer handover pannna, illa documentation ah vaikanumnu venumna use pannunga.
