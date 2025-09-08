export type HelpArticle = $2;
  slug: string,
  title: string,
  body: string,
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes',
  updatedAt: string,
  keywords?: string[]
},

export type IntentResult = $2;
  matchedArticleIds: string[]
},

export function matchIntent(query: string, articles: HelpArticle[]): IntentResult {
  const q = query.toLowerCase($2);
  const matched = $2;
  const keywordToArticle = new Map<string, string[]>(),
  for (const art of articles) {
    for (const kw of art.keywords ?? []) {
      const list = $2;
      list.push($2);
      keywordToArticle.set(kw, list)
    }
  }

  // Simple heuristics
  const heuristics: Array<[RegExp, string[]]> = [
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []],
    [/hire|post job|find talent|contract/i, []],
    [/match|matching|get matched/i, []],
    [/bill|invoice|payment|refund|charge|card/i, []],
    [/dispute|issue|complaint|chargeback/i, []],
    [/profile|setup|verification|kyc|tax/i, []]],

export function getArticlesByCategory(
  articles: HelpArticle[],
  category: string,
): HelpArticle[] {
  return articles.filter((article) => article.category === category);
}

  // Keyword fallback
  for (const [kw, ids] of keywordToArticle.entries()) {
    if (q.includes(kw)) ids.forEach((id) => matched.add(id))
  }

export function searchArticles(
  articles: HelpArticle[],
  query: string,
): HelpArticle[] {
  const queryLower = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.content.toLowerCase().includes(queryLower) ||
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),
  );
}
