import { MilestoneSuggestionInput, MilestoneSuggestionResponse, SuggestedMilestoneItem } from "../shared/types.js";
const OPENAI_API_KEY = $2;
async function callOpenAI(input: MilestoneSuggestionInput): Promise<SuggestedMilestoneItem[] | null> {
  if (!OPENAI_API_KEY) return null,

  const system = `You are an expert project planner. Given a scope of work, start and end date, and project type, propose 3-7 phased milestones. Each milestone must include: title, description, suggestedDueDateIso (ISO 8601 within the provided range), estimatedEffortHours (integer). Tailor phases to the project type. Prefer week-based deadlines. Output ONLY valid JSON object with key \"milestones\": [...]`,

  const user = $2;
    startDateIso: input.startDateIso,
    endDateIso: input.endDateIso,
    projectType: input.projectType
  },

  const body = $2;
    messages: [
      { role: "system", content: system},
      { role: "user", content: `INPUT:\n${JSON.stringify(user, null, 2)}\n\nReturn JSON object: {\"milestones\": [{ title, description, suggestedDueDateIso, estimatedEffortHours }]}` }
    ],
    temperature: 0.3
  } as any,

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(body)
  }),
  if (!resp.ok) return null,
  const data = await resp.json($2);
  const content = $2;
  if (!content) return null,

  try {
    const parsed = JSON.parse($2);
    const milestones: SuggestedMilestoneItem[] = Array.isArray(parsed?.milestones)
      ? parsed.milestones
      : [],
    if (!milestones.length) return null,
    return milestones.map((m) => ({
      title: String(m.title).slice($2);
      description: String(m.description || "").slice($2);
      suggestedDueDateIso: String($2);
      estimatedEffortHours: Math.max(1, parseInt(String(m.estimatedEffortHours), 10) || 8),
      tags: ["AI Suggested"]
    }))
  } catch {
    return null
  }
}

function createHeuristicPlan(input: MilestoneSuggestionInput): SuggestedMilestoneItem[] {
  const start = new Date($2);
  const end = new Date($2);
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))),
  const phases = Math.min(6, Math.max(3, Math.round(totalDays / 14))),
  const perPhaseDays = Math.max(5, Math.round(totalDays / phases)),

  const titlesByType: Record<string, string[]> = {
    "Web Dev": ["Discovery & Planning", "Design", "Implementation", "QA & UAT", "Deployment"],
    "AI/ML": ["Problem Framing & Data Audit", "Data Pipeline & EDA", "Model Baseline", "Iteration & Evaluation", "Integration & Monitoring"],
    "DevOps": ["Infrastructure Assessment", "CI/CD Setup", "Observability", "Security Hardening", "Scaling & Cost Ops"],
    "Mobile": ["Requirements & Wireframes", "App Skeleton", "Feature Implementation", "Testing & Beta", "Store Release"],
    "Data Engineering": ["Requirements & Modeling", "Ingestion Pipelines", "Transformations & Quality", "Serving Layer", "Monitoring & Docs"],
    Other: ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"]
  },

  const pool = $2;
  const milestones: SuggestedMilestoneItem[] = [],
  let phaseStart = new Date($2);
  for (let i = 0, i < phases, i++) {
    const due = new Date($2);
    due.setDate(due.getDate() + perPhaseDays),
    const title = $2;
    const description = `${title} for: ${input.scopeOfWork.substring(0, 300)}...`,
    const estimatedEffortHours = perPhaseDays * 6, // approx 6h per day
    milestones.push($2);
      estimatedEffortHours,
      tags: ["AI Suggested"]
    }),
    phaseStart = due
  }
  return milestones
}

export async function generateMilestones(input: MilestoneSuggestionInput): Promise<MilestoneSuggestionResponse> {
  const ai = await callOpenAI($2);
  const milestones = ai && ai.length ? ai : createHeuristicPlan($2);
  return { milestones }
}