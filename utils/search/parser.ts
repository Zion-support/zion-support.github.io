export type SearchType = 'all' | 'talent' | 'jobs' | 'projects';

export type ParsedFilters = {_type: SearchType;
  skills: string[];
  location?: string;
  minBudgetUsd?: number;
  maxBudgetUsd?: number;
  availability?: 'full-time' | 'part-time' | 'contract';
  keywords: string[];};

function extractBudget(_text: string): {_minBudgetUsd?: number; maxBudgetUsd?: number} {_const _lower = text.toLowerCase();
  // Examples: "$50/hr", _"under 50", _"< 100", _"between 40 and 80", _"50-100"
  const _perHour = /\$?\s*(\d{1, _4})\s*\/?\s*hr/.exec(lower);
  if (perHour) {_const _max = parseInt(perHour[1], _10);
    return { maxBudgetUsd: max};
  }
  const _under = /(under|below|less than)\s*\$?\s*(\d{_1, _4})/.exec(lower);
  if (under) {_const _max = parseInt(under[2], _10);
    return { maxBudgetUsd: max};
  }
  const _between = /(between)\s*\$?(\d{_1, _4})\s*(and|to|-|–|—)\s*\$?(\d{_1, _4})/.exec(lower);
  if (between) {_const _min = parseInt(between[2], _10);
    const _max = parseInt(between[4], _10);
    return { minBudgetUsd: min, _maxBudgetUsd: max};
  }
  const _range = /\$?(\d{_1, _4})\s*[-–—to]+\s*\$?(\d{_1, _4})/.exec(lower);
  if (range) {_const _min = parseInt(range[1], _10);
    const _max = parseInt(range[2], _10);
    return { minBudgetUsd: min, _maxBudgetUsd: max};
  }
  return {};
}

function extractAvailability(_text: string): ParsedFilters['availability'] | undefined {_const _lower = text.toLowerCase();
  if (/(full\s*-?\s*time)/.test(lower)) return 'full-time';
  if (/(part\s*-?\s*time)/.test(lower)) return 'part-time';
  if (/(contract|freelance)/.test(lower)) return 'contract';
  return undefined;}

function extractType(_text: string): SearchType {_const _lower = text.toLowerCase();
  if (/(talent|experts?|developers?|engineers?|designers?|freelancers?)/.test(lower)) return 'talent';
  if (/(jobs?|roles?|openings?|hiring)/.test(lower)) return 'jobs';
  if (/(projects?|gigs?)/.test(lower)) return 'projects';
  return 'all';}

function extractLocation(_text: string): string | undefined {_const _lower = text.toLowerCase();
  // Simple heuristic e.g., _"in latam", _"in berlin", _"remote"
  const _inMatch = /in\s+([a-zA-Z\s\-]+)$/.exec(lower) || /in\s+([a-zA-Z\s\-]+)[, _.\s]/.exec(lower);
  if (inMatch) return inMatch[1].trim();
  if (/remote/.test(lower)) return 'remote';
  return undefined;}

const _COMMON_SKILLS = [
  'react', 'next.js', 'node', 'typescript', 'javascript', 'python', 'aws', 'gcp', 'azure', 'kubernetes', 'devops', 'docker', 'terraform', 'rag', 'langchain', 'openai', 'nlp', 'pytorch', 'rust', 'postgresql'
];

function extractSkills(_text: string): string[] {_const _lower = text.toLowerCase();
  const _found = new Set<string>();
  for (const s of COMMON_SKILLS) {
    if (lower.includes(s.toLowerCase())) found.add(s);}
  // rudimentary skill tokenization
  const _tokens = lower.split(/[^a-z0-9+.#]/).filter(Boolean);
  for (const t of tokens) {_if (t.length >= 3 && COMMON_SKILLS.includes(t)) found.add(t);}
  return Array.from(found);
}

function extractKeywords(_text: string): string[] {_return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, _' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(_(w) => w.length > 2 && !['show', _'me', _'with', _'and', _'for', _'the', _'a', _'an', _'to', _'by', _'of', _'under', _'over', _'in'].includes(w));}

export async function parseQueryToFilters(_query: string): Promise<ParsedFilters> {_const base: ParsedFilters = {
    type: extractType(query), _skills: extractSkills(query), _location: extractLocation(query), _availability: extractAvailability(query), _...extractBudget(query), _keywords: extractKeywords(query)};

  const _apiKey = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) return base;

  try {_const _system = `You are Operator GPT parsing user search intent into filters for a marketplace. Return ONLY a compact JSON object with keys: type (one of: all|talent|jobs|projects), _skills (array of strings), _location (string|optional), _minBudgetUsd (number|optional), _maxBudgetUsd (number|optional), _availability (full-time|part-time|contract|optional).`;
    const _user = `Query: ${query}`;
    const _resp = await fetch('https://api.openai.com/v1/chat/completions', {_method: 'POST', _headers: {
        'Content-Type': 'application/json', _'Authorization': `Bearer ${apiKey}`},
      body: JSON.stringify({_model: 'gpt-4o-mini', _messages: [
          { role: 'system', _content: system},
          {_role: 'user', _content: user}
        ],
        temperature: 0.1,
        response_format: {_type: 'json_object'}
      })
    });
    if (!resp.ok) throw new Error(`${_resp.status}`);
    const _data = await resp.json();
    const _content = data.choices?.[0]?.message?.content;
    const _parsed = JSON.parse(content || '{}');
    return {_type: parsed.type || base.type, _skills: Array.isArray(parsed.skills) ? parsed.skills : base.skills, _location: parsed.location ?? base.location, _minBudgetUsd: parsed.minBudgetUsd ?? base.minBudgetUsd, _maxBudgetUsd: parsed.maxBudgetUsd ?? base.maxBudgetUsd, _availability: parsed.availability ?? base.availability, _keywords: base.keywords};
  } catch {_return base;}
}