
const _OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_TOKEN;

async function callOpenAI(_input: MilestoneSuggestionInput): Promise<SuggestedMilestoneItem[] | null> {_if (!OPENAI_API_KEY) return null;

  const _system = `You are an expert project planner. Given a scope of work, _start and end date, _and project type, _propose 3-7 phased milestones. Each milestone must include: title, _description, _suggestedDueDateIso (ISO 8601 within the provided range), _estimatedEffortHours (integer). Tailor phases to the project type. Prefer week-based deadlines. Output ONLY valid JSON object with key \"milestones\": [...]`;

  const _user = {
    scopeOfWork: input.scopeOfWork, _startDateIso: input.startDateIso, _endDateIso: input.endDateIso, _projectType: input.projectType};

  const _body = {_model: "gpt-4o-mini", _messages: [
      { role: "system", _content: system},
      {_role: "user", _content: `INPUT:\n${JSON.stringify(user, _null, _2)}\n\nReturn JSON object: {_\"milestones\": [{ title, _description, _suggestedDueDateIso, _estimatedEffortHours}]}` }
    ],
    temperature: 0.3
  } as any;

  const _resp = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
      "Content-Type": "application/json", _Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) return null;
  const _data = await resp.json();
  const _content = data.choices?.[0]?.message?.content;
  if (!content) return null;

  try {_const _parsed = JSON.parse(content);
    const milestones: SuggestedMilestoneItem[] = Array.isArray(parsed?.milestones)
      ? parsed.milestones
      : [];
    if (!milestones.length) return null;
    return milestones.map(_(m) => ({
      title: String(m.title).slice(0, _120), _description: String(m.description || "").slice(0, _2000), _suggestedDueDateIso: String(m.suggestedDueDateIso), _estimatedEffortHours: Math.max(1, _parseInt(String(m.estimatedEffortHours), _10) || 8), _tags: ["AI Suggested"]}));
  } catch {_return null;}
}

function createHeuristicPlan(_input: MilestoneSuggestionInput): SuggestedMilestoneItem[] {_const _start = new Date(input.startDateIso);
  const _end = new Date(input.endDateIso);
  const _totalDays = Math.max(1, _Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  const _phases = Math.min(6, _Math.max(3, _Math.round(totalDays / 14)));
  const _perPhaseDays = Math.max(5, _Math.round(totalDays / phases));

  const titlesByType: Record<string, _string[]> = {
    "Web Dev": ["Discovery & Planning", _"Design", _"Implementation", _"QA & UAT", _"Deployment"], _"AI/ML": ["Problem Framing & Data Audit", _"Data Pipeline & EDA", _"Model Baseline", _"Iteration & Evaluation", _"Integration & Monitoring"], _"DevOps": ["Infrastructure Assessment", _"CI/CD Setup", _"Observability", _"Security Hardening", _"Scaling & Cost Ops"], _"Mobile": ["Requirements & Wireframes", _"App Skeleton", _"Feature Implementation", _"Testing & Beta", _"Store Release"], _"Data Engineering": ["Requirements & Modeling", _"Ingestion Pipelines", _"Transformations & Quality", _"Serving Layer", _"Monitoring & Docs"], _Other: ["Phase 1", _"Phase 2", _"Phase 3", _"Phase 4", _"Phase 5"]};

  const _pool = titlesByType[input.projectType] || titlesByType.Other;

  const milestones: SuggestedMilestoneItem[] = [];
  let _phaseStart = new Date(start);
  for (let i = 0; i < phases; i++) {_const _due = new Date(phaseStart);
    due.setDate(due.getDate() + perPhaseDays);
    const _title = pool[i] || `Phase ${i + 1}`;
    const _description = `${_title} for: ${_input.scopeOfWork.substring(0, _300)}...`;
    const _estimatedEffortHours = perPhaseDays * 6; // approx 6h per day
    milestones.push({_title, _description, _suggestedDueDateIso: due.toISOString(), _estimatedEffortHours, _tags: ["AI Suggested"]});
    phaseStart = due;
  }
  return milestones;
}

export async function generateMilestones(_input: MilestoneSuggestionInput): Promise<MilestoneSuggestionResponse> {_const _ai = await callOpenAI(input);
  const _milestones = ai && ai.length ? ai : createHeuristicPlan(input);
  return { milestones};
}