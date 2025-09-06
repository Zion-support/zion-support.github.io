<<<<<<< HEAD
// Support utilities
export const support = {
  // Add support functionality here
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
=======

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;


export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}

export function matchIntent(query: string, articles: HelpArticle[]): IntentMatch {
  const queryLower = query && query.toLowerCase();
  const matchedArticles: string[] = [];
  let confidence = 0;



=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
}
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
  getArticleById: (id: string) => null;
}
;
export const logSupportEventToOperator = (event: any) =>: any {
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
