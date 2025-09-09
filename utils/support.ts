  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null
};

export type IntentResult = $2;
  matchedArticleIds: string[]
},

export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(
  query: string,
  articles: HelpArticle[],
): IntentMatch {
  const queryLower = query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;

  for (const article of articles) {
    const titleMatch = article.title.toLowerCase().includes(queryLower);
    const contentMatch = article.content.toLowerCase().includes(queryLower);
    const tagMatch = article.tags.some((tag) =>
      tag.toLowerCase().includes(queryLower),
    );

    if (titleMatch || contentMatch || tagMatch) {
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
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
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
}
}
}export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;

}
