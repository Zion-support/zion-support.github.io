// Support utilities
export const support = {
  // Add support functionality here
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
<<<<<<< HEAD
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;
=======

export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(query: string, articles: HelpArticle[]): IntentMatch {
  const queryLower = query && query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;

<<<<<<< HEAD
  for (const article of articles) {
    const titleMatch = article && article.title.toLowerCase().includes(queryLower);
    const contentMatch = article && article.content.toLowerCase().includes(queryLower);
    const tagMatch = article && article.tags.some(tag => tag && tag.toLowerCase().includes(queryLower));
=======
  const keywordToArticle = new Map<string, string[]>();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    if (titleMatch || contentMatch || tagMatch) {
      matchedArticles && matchedArticles.push(article && article.id);
      confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
    }
  }

  return {
    intentMatched: matchedArticles && matchedArticles.length > 0,
    matchedArticleIds: matchedArticles,
    confidence: Math && Math.min(confidence, 1)
  };
}
<<<<<<< HEAD

export function getArticlesByCategory(articles: HelpArticle[], category: string): HelpArticle[] {
  return articles && articles.filter(article => article && article.category === category);
}

export function getArticlesByTag(articles: HelpArticle[], tag: string): HelpArticle[] {
  return articles && articles.filter(article => article && article.tags.includes(tag));
}

export function searchArticles(articles: HelpArticle[], query: string): HelpArticle[] {
  const queryLower = query && query.toLowerCase();
  return articles && articles.filter(article => 
    article && article.title.toLowerCase().includes(queryLower) ||
    article && article.content.toLowerCase().includes(queryLower) ||
    article && article.tags.some(tag => tag && tag.toLowerCase().includes(queryLower))
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
