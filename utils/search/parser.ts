  // rudimentary skill tokenization
  const tokens = lower.split(/[^a-z0-9+.#]/).filter(Boolean);
  
  return Array.from(found);

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(
      w =>
        w.length > 2 &&
        ![
          'show',
          'me',
          'with',
          'and',
          'for',
          'the',
          'a',
          'an',
          'to',
          'by',
          'of',
          'under',
          'over',
          'in',
        ].includes(w)
    );
}

export async function parseQueryToFilters(
  query: string
): Promise<ParsedFilters> {
  const base: ParsedFilters = {
    type: extractType(query),
    skills: extractSkills(query),
    location: extractLocation(query),
    availability: extractAvailability(query),
    ...extractBudget(query),
    keywords: extractKeywords(query),
  };

  const apiKey =
    process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) return base;

  try {
    const system = `You are Operator GPT parsing user search intent into filters for a marketplace. Return ONLY a compact JSON object with keys: type (one of: all|talent|jobs|projects), skills (array of strings), location (string|optional), minBudgetUsd (number|optional), maxBudgetUsd (number|optional), availability (full-time|part-time|contract|optional).`;
    const user = `Query: ${query}`;
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' },
      }),
    });
    if (!resp.ok) throw new Error(`${resp.status}`);
    const data = await resp.json();
    const content = data.choices?.[0]?.message?.content;
    const parsed = JSON.parse(content || '{}');
    return {
      type: parsed.type || base.type,
      skills: Array.isArray(parsed.skills) ? parsed.skills : base.skills,
      location: parsed.location ?? base.location,
      minBudgetUsd: parsed.minBudgetUsd ?? base.minBudgetUsd,
      maxBudgetUsd: parsed.maxBudgetUsd ?? base.maxBudgetUsd,
      availability: parsed.availability ?? base.availability,
      keywords: base.keywords,
    };
  } catch {
    return base;
  }

  const words = query && query.toLowerCase().split(/\s+/);
  const keywords: string[] = [];
  const skills: string[] = [];
  
  // Simple keyword extraction
  for (const word of words) {
    if (word && word.length > 2) {
      keywords && keywords.push(word);
    }
  }
  
  if (keywords && keywords.length > 0) {
    filters && filters.keywords = keywords;
  }
  
  // Extract skills (simple heuristic)
  const skillKeywords = ['javascript', 'react', 'node', 'python', 'java', 'typescript', 'vue', 'angular', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'c++', 'c#', 'html', 'css', 'sql', 'mongodb', 'postgresql', 'mysql', 'redis', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'git', 'github', 'gitlab', 'jenkins', 'ci/cd', 'devops', 'frontend', 'backend', 'fullstack', 'mobile', 'ios', 'android', 'web', 'api', 'rest', 'graphql', 'microservices', 'blockchain', 'ai', 'ml', 'data', 'analytics', 'design', 'ui', 'ux', 'figma', 'sketch', 'adobe', 'photoshop', 'illustrator'];
  
  for (const word of words) {
    if (skillKeywords && skillKeywords.includes(word)) {
      skills && skills.push(word);
    }
  }
  
  if (skills && skills.length > 0) {
    filters && filters.skills = skills;
  }
  
  return filters;

    keywords: [],
    skills: [],
    location: null,
    type: null;
  }
}
;
export const search_all = (parsed: any, access: any) =>: any {
  // Add search functionality here;
  return {
    all: [],
    talent: [],
    jobs: [],
    projects: [];

  };
};


export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here;
  return null;

}


}

}
