<<<<<<< HEAD
// Support utilities;
export const support = {
  // Add support functionality here
=======
<<<<<<< HEAD
// Support utilities
export const support = {
  // Add support functionality here
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  logEvent: (event: any) => null
  getArticles: () => []
  getArticleById: (id: string) => null
}
<<<<<<< HEAD
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;
  for (const article of articles) {
    const titleMatch = article && article.title.toLowerCase().includes(queryLower);
    const contentMatch = article && article.content.toLowerCase().includes(queryLower);
    const tagMatch = article && article.tags.some(tag => tag && tag.toLowerCase().includes(queryLower));

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
}
  // Add support functionality here;
  log_event: (event: any) => null,
  get_articles: () => [],
  getArticleById: (id: string) => null;
}
;
export const logSupportEventToOperator = (event: any) =>: any {
=======
=======
  logEvent: (event: any) => null,
  getArticles: () => [],
  getArticleById: (id: string) => null;
};

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const logSupportEventToOperator = (event: any) => {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
<<<<<<< HEAD
=======
=======
};
=======

}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
