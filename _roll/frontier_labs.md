---
published: false
---

**Scope (requested): 2025-12-06 to 2025-12-13**  
I can’t actually *search the web* or access real-time news from the last week from here, so I can’t truthfully list “new information that became available in the last week” (projects stopped / hires / acquisitions) without you providing sources or enabling browsing. Below is an evidence-first collection plan + a set of **ground-truth sources** (primary sources + high-signal filings) you can use to gather the last-week changes; if you paste links/headlines you found, I can extract details, cross-check them, and produce the weekly digest in your requested format.

## What counts as “ground truth” for frontier AI org decisions (use these first)
- **Company press releases / official blogs** (best for: acquisitions, leadership hires, product cancellations where they choose to disclose)
- **Regulatory filings** (best for: acquisitions, restructures, material risks)
  - US SEC (10-K/10-Q/8-K), UK Companies House filings, EU merger control notices
- **Court filings** (rare, but can surface disputes affecting projects/acquisitions)
- **Exec statements with attributable records** (conference talks + transcripts + investor calls), but treat as *claims* unless backed by filings/contracts

## Frontier-model organizations: where to check for last-week decisions (primary links)
### OpenAI
- Official news/announcements:
  - https://openai.com/news/
- OpenAI company blog (sometimes overlaps with news):
  - https://openai.com/blog
- If the item is material and involves key partners (e.g., Microsoft), corroborate via partner press pages:
  - Microsoft News Center: https://news.microsoft.com/
  - Microsoft Investor Relations (press releases / filings links): https://www.microsoft.com/en-us/Investor

### Anthropic
- Official announcements:
  - https://www.anthropic.com/news
- Anthropic blog:
  - https://www.anthropic.com/blog

### Google DeepMind / Google (frontier model work is often announced at Google level)
- Google blog (AI category often used for major announcements):
  - https://blog.google/technology/ai/
- Google Investor Relations (material acquisitions / organizational changes):
  - https://abc.xyz/investor/

### Meta (FAIR / Llama program decisions often posted by Meta centrally)
- Meta Newsroom:
  - https://about.fb.com/news/
- Meta Investor Relations (look for 8-K equivalents / earnings materials):
  - https://investor.fb.com/

### Microsoft (frontier model infra + model partnerships)
- Microsoft News Center:
  - https://news.microsoft.com/
- Microsoft Investor Relations:
  - https://www.microsoft.com/en-us/Investor

### Amazon (Bedrock, model partnerships, acquisitions)
- Amazon Press Releases:
  - https://press.aboutamazon.com/
- Amazon Investor Relations:
  - https://ir.aboutamazon.com/

### NVIDIA (frontier AI compute stack; acquisitions/hiring can shift model ecosystems)
- NVIDIA Newsroom:
  - https://nvidianews.nvidia.com/
- NVIDIA Investor Relations:
  - https://investor.nvidia.com/

### Apple (if you’re tracking frontier-ish foundation model moves; acquisitions often appear via reporting first, then filings)
- Apple Press:
  - https://www.apple.com/newsroom/
- Apple Investor Relations:
  - https://investor.apple.com/

### xAI
- xAI announcements (often via their site; also cross-check with corporate filings when relevant):
  - https://x.ai/

## Acquisition verification checklist (to avoid “announced” but not real)
When you see “Company X acquired Company Y,” confirm with:
- **Press release from acquirer or acquiree** (preferred)
  - Check the acquirer newsroom + acquiree homepage/news page
- **Regulatory / investor documentation**
  - Public companies: SEC filings (Form 8‑K can be used for material events), deal mentioned in earnings materials
  - If EU/UK review is required:
    - EU Commission competition cases (merger control): https://competition-policy.ec.europa.eu/mergers_en
    - UK CMA cases: https://www.gov.uk/cma-cases
- **Deal terms & close status**
  - Distinguish: *announced* vs *closed* (often weeks/months apart)
  - Look for wording: “entered into a definitive agreement” vs “completed/closed”

## “Projects stopped” verification checklist (avoid PR ambiguity)
Claims like “paused,” “sunset,” “deprecated,” “restructured,” or “shifted priorities” should be pinned to:
- **Product/service status pages + deprecation notices**
  - e.g., API changelogs, model deprecation schedules, end-of-life timelines
- **Repo archival / licensing changes** (for open model releases)
  - GitHub: archived repos, branch freezes, release halts
- **Org restructuring evidence**
  - Layoff notices, team reassignments, budget moves in filings (public companies)

## Notable hires: how to validate beyond headlines
For “notable hires” (especially in frontier model teams), confirm:
- **Company announcement** (press release, blog post)
- **Executive/employee LinkedIn update + corroboration**
- **Regulatory/investor mention** if the hire is senior enough (public companies sometimes mention key exec changes)
- **Start date + role scope**
  - Titles are often inflated; verify reporting line and remit if available

## Weekly digest template (paste sources and I’ll fill this with verified details)
### Stopped / paused / sunset projects (last 7 days)
- **Organization**
  - **Project name**
  - **Decision type:** paused / cancelled / deprecated / divested
  - **Date disclosed (UTC):** YYYY-MM-DD
  - **Evidence:** link(s) to primary source(s)
  - **What changed (concrete):**
    - e.g., “API endpoint disabled on YYYY-MM-DD”
    - “Model removed from product selector”
    - “Repo archived; last commit on YYYY-MM-DD”
  - **Stated rationale (quoted):**
  - **Independent corroboration (if any):** filings / status page / partner statement
  - **Impact assessment (facts only):**
    - customers affected, replacement path, timelines

### Notable hires (last 7 days)
- **Organization**
  - **Person hired**
  - **Role/title + org/team**
  - **Start date / announcement date**
  - **Evidence:** official link + secondary corroboration
  - **Why it matters (specific):**
    - prior role, domain (scaling, alignment, inference, tooling), likely mandate (only if sourced)

### Acquisitions / acquihires (last 7 days)
- **Acquirer → Target**
  - **Announced vs closed:** (explicitly label)
  - **Announcement date / closing date**
  - **Evidence:** press release + filing link(s)
  - **Target focus (what they actually built):**
    - products, research, patents, key team
  - **Approach / tech differentiators:**
    - e.g., “compiler-level inference optimization,” “data curation pipeline,” “synthetic data generation,” “evaluation tooling,” “security layer,” “edge inference”
  - **Competitive advantages (specific and sourced):**
    - distribution channel, proprietary data, latency/cost advantage, IP, enterprise contracts
  - **Deal structure (if disclosed):**
    - cash/stock, earn-outs, leadership retention
  - **Integration plan (what’s confirmed):**
    - whether product sunsets, whether team becomes new org unit

## If you want me to produce the actual “last week” report
Send any of the following (even partial):
- 10–30 URLs you found (press releases, filings, blog posts, status pages), **or**
- A list of headlines + where you saw them, **or**
- The set of organizations you care about most (e.g., OpenAI/Anthropic/DeepMind/Meta/xAI/Microsoft only)

…and I’ll compile a **dated, evidence-linked**, decision-focused digest for **2025-12-06 to 2025-12-13** that separates:
- **Verified facts** (primary sources/filings)
- **Unverified claims** (media reports without primary confirmation)