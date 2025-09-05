import { MilestoneSuggestionInput, MilestoneSuggestionResponse, SuggestedMilestoneItem } from &quot;../shared/types.js&quot;;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_TOKEN;

async function callOpenAI(input: MilestoneSuggestionInput): Promise<SuggestedMilestoneItem[] | null> {
  if (!OPENAI_API_KEY) return null;

  const system = `You are an expert project planner. Given a scope of work, start and end date, and project type, propose 3-7 phased milestones. Each milestone must include: title, description, suggestedDueDateIso (ISO 8601 within the provided range), estimatedEffortHours (integer). Tailor phases to the project type. Prefer week-based deadlines. Output ONLY valid JSON object with key \"milestones\": [...]`;

  const user = {
    scopeOfWork: input.scopeOfWork,
    startDateIso: input.startDateIso,
    endDateIso: input.endDateIso,
    projectType: input.projectType
  };

  const body = {
    model: &quot;gpt-4o-mini&quot;,
    messages: [
      { role: &quot;system&quot;, content: system },
      { role: &quot;user&quot;, content: `INPUT:\n${JSON.stringify(user, null, 2)}\n\nReturn JSON object: {\"milestones\": [{ title, description, suggestedDueDateIso, estimatedEffortHours }]}` }
    ],
    temperature: 0.3
  } as any;

  const resp = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
    method: &quot;POST&quot;,
    headers: {
      &quot;Content-Type&quot;: &quot;application/json&quot;,
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) return null;
  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return null;

  try {
    const parsed = JSON.parse(content);
    const milestones: SuggestedMilestoneItem[] = Array.isArray(parsed?.milestones)
      ? parsed.milestones
      : [];
    if (!milestones.length) return null;
    return milestones.map((m) => ({
      title: String(m.title).slice(0, 120),
      description: String(m.description || "&quot;).slice(0, 2000),
      suggestedDueDateIso: String(m.suggestedDueDateIso),
      estimatedEffortHours: Math.max(1, parseInt(String(m.estimatedEffortHours), 10) || 8),
      tags: [&quot;AI Suggested&quot;]
    }));
  } catch {
    return null;
  }
}

function createHeuristicPlan(input: MilestoneSuggestionInput): SuggestedMilestoneItem[] {
  const start = new Date(input.startDateIso);
  const end = new Date(input.endDateIso);
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const phases = Math.min(6, Math.max(3, Math.round(totalDays / 14)));
  const perPhaseDays = Math.max(5, Math.round(totalDays / phases));

  const titlesByType: Record<string, string[]> = {
    &quot;Web Dev&quot;: [&quot;Discovery & Planning&quot;, &quot;Design&quot;, &quot;Implementation&quot;, &quot;QA & UAT&quot;, &quot;Deployment&quot;],
    &quot;AI/ML&quot;: [&quot;Problem Framing & Data Audit&quot;, &quot;Data Pipeline & EDA&quot;, &quot;Model Baseline&quot;, &quot;Iteration & Evaluation&quot;, &quot;Integration & Monitoring&quot;],
    &quot;DevOps&quot;: [&quot;Infrastructure Assessment&quot;, &quot;CI/CD Setup&quot;, &quot;Observability&quot;, &quot;Security Hardening&quot;, &quot;Scaling & Cost Ops&quot;],
    &quot;Mobile&quot;: [&quot;Requirements & Wireframes&quot;, &quot;App Skeleton&quot;, &quot;Feature Implementation&quot;, &quot;Testing & Beta&quot;, &quot;Store Release&quot;],
    &quot;Data Engineering&quot;: [&quot;Requirements & Modeling&quot;, &quot;Ingestion Pipelines&quot;, &quot;Transformations & Quality&quot;, &quot;Serving Layer&quot;, &quot;Monitoring & Docs&quot;],
    Other: [&quot;Phase 1&quot;, &quot;Phase 2&quot;, &quot;Phase 3&quot;, &quot;Phase 4&quot;, &quot;Phase 5&quot;]
  };

  const pool = titlesByType[input.projectType] || titlesByType.Other;

  const milestones: SuggestedMilestoneItem[] = [];
  let phaseStart = new Date(start);
  for (let i = 0; i < phases; i++) {
    const due = new Date(phaseStart);
    due.setDate(due.getDate() + perPhaseDays);
    const title = pool[i] || `Phase ${i + 1}`;
    const description = `${title} for: ${input.scopeOfWork.substring(0, 300)}...`;
    const estimatedEffortHours = perPhaseDays * 6; // approx 6h per day
    milestones.push({
      title,
      description,
      suggestedDueDateIso: due.toISOString(),
      estimatedEffortHours,
      tags: [&quot;AI Suggested"]
    });
    phaseStart = due;
  }
  return milestones;
}

export async function generateMilestones(input: MilestoneSuggestionInput): Promise<MilestoneSuggestionResponse> {
  const ai = await callOpenAI(input);
  const milestones = ai && ai.length ? ai : createHeuristicPlan(input);
  return { milestones };
}