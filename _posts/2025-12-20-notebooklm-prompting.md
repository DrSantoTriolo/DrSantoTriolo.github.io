---
layout: post
title: "2025-12-20-notebooklm-prompting"
category: [Feed]
---

## What’s changed recently (and why it matters for prompting)

NotebookLM’s *prompt surface area* expanded a lot in 2025, so “best practices” now include choosing the right mechanism—not just wording:

- **Oct 29, 2025:** Chat was upgraded (latest Gemini models), including **1M token context window**, much longer multi‑turn memory, saved conversation history rollout, and goal/voice/role steering. ([blog.google](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/))
- **Nov 13, 2025:** **Deep Research** added (agentic web browsing + research plan + source-grounded report you can add into the notebook), plus new source types (Sheets, Drive URLs, images, PDFs from Drive, .docx). ([blog.google](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/))
- **Dec 16, 2025:** **Chat history fully rolled out across web + mobile** (continue conversations, delete history; shared notebooks keep chats private per user). ([9to5google.com](https://9to5google.com/2025/12/16/notebooklm-chat-history/?utm_source=openai))
- **Dec 18, 2025:** **Data Tables** added (synthesizes sources into structured tables exportable to Google Sheets). ([blog.google](https://blog.google/technology/google-labs/notebooklm-data-tables/))

These directly affect prompting because you can now: (a) rely more on persistent multi-turn workflows, (b) push larger corpora, and (c) use specialized generators (Deep Research / Data Tables) instead of “ask chat to do everything”.

---

## Mechanisms & architectural choices (high-level) → opportunities & constraints

### 1) “Notebook = isolated corpus” (project boundary)

- **Mechanism:** A notebook is a collection of sources for a project; **NotebookLM can’t access information across multiple notebooks at the same time**. ([support.google.com](https://support.google.com/notebooklm/answer/16206563?utm_source=openai))
- **Opportunity:** You get a clean *knowledge boundary*—great for governance, repeatability, and avoiding cross-project contamination.
- **Constraint:** If your question spans projects, you must consolidate sources into one notebook (or move via exports/notes).

**Prompting best practice:** Put the boundary into your prompt:

> “Answer using only sources in this notebook; if the notebook doesn’t contain X, tell me what’s missing.”

---

### 2) “Grounded answering with citations back to your sources”

- **Mechanism:** Chat answers are grounded in your uploaded sources and include citations; you can hover/inspect citations and jump to the quoted location. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Opportunity:** You can demand *auditable* answers (great for research, policy, legal-ish document work—while still not substituting for professional advice).
- **Constraint:** Grounding reduces—but does not eliminate—errors. A 2025 study found NotebookLM had fewer hallucinations than some peers in their evaluation, but still exhibited **overconfident interpretations** (e.g., turning attributed claims into general statements). ([arxiv.org](https://arxiv.org/abs/2509.25498?utm_source=openai))

**Prompting best practice:** Ask for “evidence discipline”, not just citations:

> “For each claim, include a citation. If a claim is an interpretation, label it *Interpretation* and cite the text it’s based on.”

---

### 3) Retrieval control: include/exclude sources

- **Mechanism:** You can check/uncheck sources so the model uses only selected sources for an answer. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Opportunity:** Fast comparative analysis (“what does Source A say vs Source B?”), and you can quarantine low-quality sources.
- **Constraint:** If you forget source selection, you may get blended answers that hide disagreements.

**Prompting best practice:** Use source-scoped passes:

1. “Summarize only Source A’s position.”
2. “Summarize only Source B’s position.”
3. “Now reconcile; list disagreements with citations.”

---

### 4) Ingestion architecture: “static snapshots” + manual sync for Drive docs/slides

- **Mechanism:** For Drive imports, NotebookLM makes a copy; it **doesn’t automatically track changes** and requires manual re-sync. Other source types must be re-uploaded; NotebookLM keeps a **static copy at upload time**. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en-GB&utm_source=openai))
- **Opportunity:** Reproducibility—your analysis is tied to a stable snapshot (useful for audits).
- **Constraint:** You can silently reason over outdated content if you don’t sync.

**Prompting best practice:** Put freshness checks into your workflow:

> “Before answering, tell me which sources look like drafts/older versions (based on dates visible in the text). If uncertain, ask me to sync/re-upload.”

---

### 5) Source-type constraints (web + YouTube are “transcript/text-first”)

- **Mechanism:**
	- Web URL import scrapes **only text**; images/embedded media/nested pages aren’t imported; paywalls aren’t supported. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai))
	- YouTube import uses **only transcripts**; requires public videos with captions; very new uploads may fail; deleted/private videos get removed later. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai))
- **Opportunity:** Prompt precisely for what *is* ingested (transcript-level analysis, quote mining).
- **Constraint:** If meaning is carried by visuals/tables/figures not captured as text, your prompts won’t recover it unless you upload a source that actually contains that content (e.g., the PDF, slides, or an image source where supported).

**Prompting best practice:** Ask for “coverage warnings”:

> “If the answer could depend on charts/figures/visuals, tell me explicitly what you can’t see from the imported text.”

---

### 6) Chat steering: styles + custom instructions/goals

- **Mechanism:** You can configure chat style (Default / Learning Guide / Custom) and response length. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Mechanism (2025 upgrade):** NotebookLM added stronger goal/role steering and major context/memory upgrades (1M token context window, longer conversation memory). ([blog.google](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/))
- **Opportunity:** Turn NotebookLM into a consistent “house style” analyst, tutor, editor, etc. across a long project.
- **Constraint:** A strong persona can make answers *sound* coherent even when evidence is thin—so keep evidence requirements explicit.

**Prompting best practice:** Separate *style* from *epistemics*:

> “Use an analytical tone, but never generalize beyond the citations. Prefer ‘The source states…’ over ‘It is true that…’.”

---

### 7) Agentic expansion: Discover Sources + Deep Research

- **Discover Sources (Apr 2, 2025):** describe a topic → NotebookLM scans many web pages → recommends up to ~10 sources you can import. ([blog.google](https://blog.google/technology/google-labs/notebooklm-discover-sources/?utm_source=openai))
- **Deep Research (Nov 13, 2025):** generates a research plan, browses **hundreds of websites**, produces a source-grounded report, and lets you add the report + sources into the notebook. ([blog.google](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/))
- **Opportunity:** You can go from “I have no corpus” → “I have a curated corpus” quickly, then do grounded Q&A.
- **Constraint:** Web research quality depends on scope constraints you set (domain, time window, source quality bar). Also: importing too many heterogeneous sources can increase contradictions—prompting must manage that.

**Prompting best practice (for Deep Research prompts):**

> “Research **\[question\]**. Prioritize primary sources and reputable outlets. Time window: **2019–2025**. Return: (1) research plan, (2) list of candidate sources with one-line credibility notes, (3) report with citations, (4) ‘open questions’ to resolve.”

---

### 8) Structured outputs: Audio Overviews + Data Tables

- **Audio Overviews:** converts sources into a conversation-style summary, but it’s explicitly not comprehensive/objective and can include inaccuracies; also has interaction limits (e.g., can’t interrupt hosts). ([blog.google](https://blog.google/technology/ai/notebooklm-audio-overviews/?utm_source=openai))
- **Data Tables (Dec 18, 2025):** synthesizes sources into structured tables exportable to Sheets. ([blog.google](https://blog.google/technology/google-labs/notebooklm-data-tables/))
- **Opportunity:** Great for “turn messy text into manipulable structure” (action items, comparisons, study tables).
- **Constraint:** Any synthesis can mis-map fields or flatten nuance—prompt for schema + exception handling.

**Prompting best practice for tables:**

> “Create a table with columns: **Claim**, **Who said it**, **Date**, **Evidence quote**, **Source**. Leave cells blank rather than guessing.”

---

## Best-practice prompting patterns (copy/paste)

### A) Evidence-first Q&A (minimize overconfident synthesis)

> **Task:** Answer the question: **\[X\]**  
> **Rules:**
> 
> 1. Use only notebook sources.
> 2. Every sentence must have a citation.
> 3. If sources conflict, show both sides with citations and do not resolve unless evidence explicitly resolves it.
> 4. End with “What I still can’t answer from the sources”.

### B) “Quote pack” before writing (separates retrieval from generation)

> Pull 10–20 relevant quotes about **\[topic\]**. Group by theme. For each quote: include citation + one-line note on why it matters. Then ask me whether to draft a synthesis.

### C) Comparative reading (forces explicit disagreements)

> Compare Source A vs Source B on **\[question\]**. Output:
> 
> - Agreements (bullets, each with citations)
> - Disagreements (bullets, each with citations)
> - Missing info (what neither source addresses)

### D) Turn sources into an actionable brief

> Create a briefing doc for **\[audience\]** deciding **\[decision\]**. Include: options, pros/cons, risks, and “assumptions” (each assumption must cite what it’s based on, or be labeled unsupported).

### E) Ongoing notebook “operating procedure” (use with custom goals)

> You are my **Evidence-First Research Assistant**. Always: ask 1–3 clarifying questions if the task is underspecified; never invent details; prefer direct quotes; include citations per claim; separate facts vs interpretations.

---

## Practical constraints to design around (so your prompts don’t fight the tool)

- **If you ask for creativity beyond sources, NotebookLM may refuse** (“can’t answer”) because chat is designed to rely on your sources. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Quota/limits matter in workflows:** free vs Pro/Enterprise changes notebook count, sources per notebook, and daily query limits (and more). ([support.google.com](https://support.google.com/notebooklm/answer/16213268?utm_source=openai))
- **Privacy mode differs by account type:** consumer accounts may involve human review *if feedback is provided*, while Enterprise offerings provide stronger guarantees (no human review / no training on your content). ([support.google.com](https://support.google.com/notebooklm/answer/16337734?utm_source=openai))

---

## If you tell me your use case, I can tailor a “prompting playbook”

If you share (1) whether you’re using **Free vs Pro vs Enterprise**, (2) your domain (research, legal review, study, product spec, etc.), and (3) typical source types (PDFs, Drive, web, YouTube), I’ll propose a minimal set of reusable prompt templates + a recommended notebook structure that matches NotebookLM’s grounding/sync/source constraints.

[blog.google - NotebookLM adds custom goals, upgrades performance](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/)[blog.google - NotebookLM adds Deep Research, Docx, Sheets and more](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/)[9to5google.com - NotebookLM rolls out chat history, adds AI Ultra tier](https://9to5google.com/2025/12/16/notebooklm-chat-history/?utm_source=openai)[blog.google - Google’s NotebookLM introduces Data Tables feature](https://blog.google/technology/google-labs/notebooklm-data-tables/)[support.google.com - Create a notebook in NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16206563?utm_source=openai)[support.google.com - Use chat in NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16179559?utm_source=openai)[arxiv.org - Not Wrong, But Untrue: LLM Overconfidence in Document-Based Queries](https://arxiv.org/abs/2509.25498?utm_source=openai)[support.google.com - Add or discover new sources for your notebook - Computer - NotebookLM Help](https://support.google.com/notebooklm/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en-GB&utm_source=openai)[support.google.com - Add or discover new sources for your notebook - Computer - NotebookLM Help](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai)[blog.google - NotebookLM Discover Sources: Add web research to your notebook](https://blog.google/technology/google-labs/notebooklm-discover-sources/?utm_source=openai)[blog.google - NotebookLM now lets you listen to a conversation about your sources](https://blog.google/technology/ai/notebooklm-audio-overviews/?utm_source=openai)[support.google.com - Upgrade NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16213268?utm_source=openai)[support.google.com - Use NotebookLM with a work or school Google account - NotebookLM Help](https://support.google.com/notebooklm/answer/16337734?utm_source=openai)

# 2025-12-20T22:37:44+02:00

(1509 words) 

## What’s changed recently (and why it matters for prompting)

NotebookLM’s *prompt surface area* expanded a lot in 2025, so “best practices” now include choosing the right mechanism—not just wording:

- **Oct 29, 2025:** Chat was upgraded (latest Gemini models), including **1M token context window**, much longer multi‑turn memory, saved conversation history rollout, and goal/voice/role steering. ([blog.google](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/))
- **Nov 13, 2025:** **Deep Research** added (agentic web browsing + research plan + source-grounded report you can add into the notebook), plus new source types (Sheets, Drive URLs, images, PDFs from Drive, .docx). ([blog.google](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/))
- **Dec 16, 2025:** **Chat history fully rolled out across web + mobile** (continue conversations, delete history; shared notebooks keep chats private per user). ([9to5google.com](https://9to5google.com/2025/12/16/notebooklm-chat-history/?utm_source=openai))
- **Dec 18, 2025:** **Data Tables** added (synthesizes sources into structured tables exportable to Google Sheets). ([blog.google](https://blog.google/technology/google-labs/notebooklm-data-tables/))

These directly affect prompting because you can now: (a) rely more on persistent multi-turn workflows, (b) push larger corpora, and (c) use specialized generators (Deep Research / Data Tables) instead of “ask chat to do everything”.

---

## Mechanisms & architectural choices (high-level) → opportunities & constraints

### 1) “Notebook = isolated corpus” (project boundary)

- **Mechanism:** A notebook is a collection of sources for a project; **NotebookLM can’t access information across multiple notebooks at the same time**. ([support.google.com](https://support.google.com/notebooklm/answer/16206563?utm_source=openai))
- **Opportunity:** You get a clean *knowledge boundary*—great for governance, repeatability, and avoiding cross-project contamination.
- **Constraint:** If your question spans projects, you must consolidate sources into one notebook (or move via exports/notes).

**Prompting best practice:** Put the boundary into your prompt:

> “Answer using only sources in this notebook; if the notebook doesn’t contain X, tell me what’s missing.”

---

### 2) “Grounded answering with citations back to your sources”

- **Mechanism:** Chat answers are grounded in your uploaded sources and include citations; you can hover/inspect citations and jump to the quoted location. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Opportunity:** You can demand *auditable* answers (great for research, policy, legal-ish document work—while still not substituting for professional advice).
- **Constraint:** Grounding reduces—but does not eliminate—errors. A 2025 study found NotebookLM had fewer hallucinations than some peers in their evaluation, but still exhibited **overconfident interpretations** (e.g., turning attributed claims into general statements). ([arxiv.org](https://arxiv.org/abs/2509.25498?utm_source=openai))

**Prompting best practice:** Ask for “evidence discipline”, not just citations:

> “For each claim, include a citation. If a claim is an interpretation, label it *Interpretation* and cite the text it’s based on.”

---

### 3) Retrieval control: include/exclude sources

- **Mechanism:** You can check/uncheck sources so the model uses only selected sources for an answer. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Opportunity:** Fast comparative analysis (“what does Source A say vs Source B?”), and you can quarantine low-quality sources.
- **Constraint:** If you forget source selection, you may get blended answers that hide disagreements.

**Prompting best practice:** Use source-scoped passes:

1. “Summarize only Source A’s position.”
2. “Summarize only Source B’s position.”
3. “Now reconcile; list disagreements with citations.”

---

### 4) Ingestion architecture: “static snapshots” + manual sync for Drive docs/slides

- **Mechanism:** For Drive imports, NotebookLM makes a copy; it **doesn’t automatically track changes** and requires manual re-sync. Other source types must be re-uploaded; NotebookLM keeps a **static copy at upload time**. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en-GB&utm_source=openai))
- **Opportunity:** Reproducibility—your analysis is tied to a stable snapshot (useful for audits).
- **Constraint:** You can silently reason over outdated content if you don’t sync.

**Prompting best practice:** Put freshness checks into your workflow:

> “Before answering, tell me which sources look like drafts/older versions (based on dates visible in the text). If uncertain, ask me to sync/re-upload.”

---

### 5) Source-type constraints (web + YouTube are “transcript/text-first”)

- **Mechanism:**
	- Web URL import scrapes **only text**; images/embedded media/nested pages aren’t imported; paywalls aren’t supported. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai))
	- YouTube import uses **only transcripts**; requires public videos with captions; very new uploads may fail; deleted/private videos get removed later. ([support.google.com](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai))
- **Opportunity:** Prompt precisely for what *is* ingested (transcript-level analysis, quote mining).
- **Constraint:** If meaning is carried by visuals/tables/figures not captured as text, your prompts won’t recover it unless you upload a source that actually contains that content (e.g., the PDF, slides, or an image source where supported).

**Prompting best practice:** Ask for “coverage warnings”:

> “If the answer could depend on charts/figures/visuals, tell me explicitly what you can’t see from the imported text.”

---

### 6) Chat steering: styles + custom instructions/goals

- **Mechanism:** You can configure chat style (Default / Learning Guide / Custom) and response length. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Mechanism (2025 upgrade):** NotebookLM added stronger goal/role steering and major context/memory upgrades (1M token context window, longer conversation memory). ([blog.google](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/))
- **Opportunity:** Turn NotebookLM into a consistent “house style” analyst, tutor, editor, etc. across a long project.
- **Constraint:** A strong persona can make answers *sound* coherent even when evidence is thin—so keep evidence requirements explicit.

**Prompting best practice:** Separate *style* from *epistemics*:

> “Use an analytical tone, but never generalize beyond the citations. Prefer ‘The source states…’ over ‘It is true that…’.”

---

### 7) Agentic expansion: Discover Sources + Deep Research

- **Discover Sources (Apr 2, 2025):** describe a topic → NotebookLM scans many web pages → recommends up to ~10 sources you can import. ([blog.google](https://blog.google/technology/google-labs/notebooklm-discover-sources/?utm_source=openai))
- **Deep Research (Nov 13, 2025):** generates a research plan, browses **hundreds of websites**, produces a source-grounded report, and lets you add the report + sources into the notebook. ([blog.google](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/))
- **Opportunity:** You can go from “I have no corpus” → “I have a curated corpus” quickly, then do grounded Q&A.
- **Constraint:** Web research quality depends on scope constraints you set (domain, time window, source quality bar). Also: importing too many heterogeneous sources can increase contradictions—prompting must manage that.

**Prompting best practice (for Deep Research prompts):**

> “Research **\[question\]**. Prioritize primary sources and reputable outlets. Time window: **2019–2025**. Return: (1) research plan, (2) list of candidate sources with one-line credibility notes, (3) report with citations, (4) ‘open questions’ to resolve.”

---

### 8) Structured outputs: Audio Overviews + Data Tables

- **Audio Overviews:** converts sources into a conversation-style summary, but it’s explicitly not comprehensive/objective and can include inaccuracies; also has interaction limits (e.g., can’t interrupt hosts). ([blog.google](https://blog.google/technology/ai/notebooklm-audio-overviews/?utm_source=openai))
- **Data Tables (Dec 18, 2025):** synthesizes sources into structured tables exportable to Sheets. ([blog.google](https://blog.google/technology/google-labs/notebooklm-data-tables/))
- **Opportunity:** Great for “turn messy text into manipulable structure” (action items, comparisons, study tables).
- **Constraint:** Any synthesis can mis-map fields or flatten nuance—prompt for schema + exception handling.

**Prompting best practice for tables:**

> “Create a table with columns: **Claim**, **Who said it**, **Date**, **Evidence quote**, **Source**. Leave cells blank rather than guessing.”

---

## Best-practice prompting patterns (copy/paste)

### A) Evidence-first Q&A (minimize overconfident synthesis)

> **Task:** Answer the question: **\[X\]**  
> **Rules:**
> 
> 1. Use only notebook sources.
> 2. Every sentence must have a citation.
> 3. If sources conflict, show both sides with citations and do not resolve unless evidence explicitly resolves it.
> 4. End with “What I still can’t answer from the sources”.

### B) “Quote pack” before writing (separates retrieval from generation)

> Pull 10–20 relevant quotes about **\[topic\]**. Group by theme. For each quote: include citation + one-line note on why it matters. Then ask me whether to draft a synthesis.

### C) Comparative reading (forces explicit disagreements)

> Compare Source A vs Source B on **\[question\]**. Output:
> 
> - Agreements (bullets, each with citations)
> - Disagreements (bullets, each with citations)
> - Missing info (what neither source addresses)

### D) Turn sources into an actionable brief

> Create a briefing doc for **\[audience\]** deciding **\[decision\]**. Include: options, pros/cons, risks, and “assumptions” (each assumption must cite what it’s based on, or be labeled unsupported).

### E) Ongoing notebook “operating procedure” (use with custom goals)

> You are my **Evidence-First Research Assistant**. Always: ask 1–3 clarifying questions if the task is underspecified; never invent details; prefer direct quotes; include citations per claim; separate facts vs interpretations.

---

## Practical constraints to design around (so your prompts don’t fight the tool)

- **If you ask for creativity beyond sources, NotebookLM may refuse** (“can’t answer”) because chat is designed to rely on your sources. ([support.google.com](https://support.google.com/notebooklm/answer/16179559?utm_source=openai))
- **Quota/limits matter in workflows:** free vs Pro/Enterprise changes notebook count, sources per notebook, and daily query limits (and more). ([support.google.com](https://support.google.com/notebooklm/answer/16213268?utm_source=openai))
- **Privacy mode differs by account type:** consumer accounts may involve human review *if feedback is provided*, while Enterprise offerings provide stronger guarantees (no human review / no training on your content). ([support.google.com](https://support.google.com/notebooklm/answer/16337734?utm_source=openai))

---

## If you tell me your use case, I can tailor a “prompting playbook”

If you share (1) whether you’re using **Free vs Pro vs Enterprise**, (2) your domain (research, legal review, study, product spec, etc.), and (3) typical source types (PDFs, Drive, web, YouTube), I’ll propose a minimal set of reusable prompt templates + a recommended notebook structure that matches NotebookLM’s grounding/sync/source constraints.

[blog.google - NotebookLM adds custom goals, upgrades performance](https://blog.google/technology/google-labs/notebooklm-custom-personas-engine-upgrade/)[blog.google - NotebookLM adds Deep Research, Docx, Sheets and more](https://blog.google/technology/google-labs/notebooklm-deep-research-file-types/)[9to5google.com - NotebookLM rolls out chat history, adds AI Ultra tier](https://9to5google.com/2025/12/16/notebooklm-chat-history/?utm_source=openai)[blog.google - Google’s NotebookLM introduces Data Tables feature](https://blog.google/technology/google-labs/notebooklm-data-tables/)[support.google.com - Create a notebook in NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16206563?utm_source=openai)[support.google.com - Use chat in NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16179559?utm_source=openai)[arxiv.org - Not Wrong, But Untrue: LLM Overconfidence in Document-Based Queries](https://arxiv.org/abs/2509.25498?utm_source=openai)[support.google.com - Add or discover new sources for your notebook - Computer - NotebookLM Help](https://support.google.com/notebooklm/answer/16215270?co=GENIE.Platform%3DDesktop&hl=en-GB&utm_source=openai)[support.google.com - Add or discover new sources for your notebook - Computer - NotebookLM Help](https://support.google.com/notebooklm/answer/16215270?hl=en-AU&ref_topic=16164070&utm_source=openai)[blog.google - NotebookLM Discover Sources: Add web research to your notebook](https://blog.google/technology/google-labs/notebooklm-discover-sources/?utm_source=openai)[blog.google - NotebookLM now lets you listen to a conversation about your sources](https://blog.google/technology/ai/notebooklm-audio-overviews/?utm_source=openai)[support.google.com - Upgrade NotebookLM - NotebookLM Help](https://support.google.com/notebooklm/answer/16213268?utm_source=openai)[support.google.com - Use NotebookLM with a work or school Google account - NotebookLM Help](https://support.google.com/notebooklm/answer/16337734?utm_source=openai)
