  logEvent: (event: any) => null;
  getArticles: () => [];
  getArticleById: (id: string) => null;
}
  logEvent: (event: any) => null,getArticles: () => [],getArticleById: (id: string) => null;getArticleById: (id: string) => null;
  getArticleById: (id: string) => null;
}export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;export interface IntentMatch  {intentMatched: boolean;
  logEvent: (event: any) => null,
  getArticles: () => [],
<<<<<<< HEAD
<<<<<<< HEAD
  getArticleById: (id: string) => null;
=======
  getArticleById: (id: string) => null
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  getArticleById: (id: string) => null;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
};

export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here
  return null;

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
}export function matchIntent(query: string,articles: HelpArticle[],): IntentMatch {const queryLower = query.toLowerCase()const matchedArticles: string[] = [];
  let confidence  = 0;for (const article of articles) {const titleMatch = article.title.toLowerCase().includes(queryLower)const contentMatch = article.content.toLowerCase().includes(queryLower)const tagMatch = article.tags.some((tag) =>;
      tag.toLowerCase().includes(queryLower),)if (titleMatch || contentMatch || tagMatch) {matchedArticles && matchedArticles.push(article && article.id)confidence += titleMatch ? 0 && 0.8 : contentMatch ? 0 && 0.6 : tagMatch ? 0 && 0.4 : 0;
    }
  }return {intentMatched: matchedArticles && matchedArticles.length > 0,matchedArticleIds: matchedArticles,confidence: Math.min(confidence, 1)confidence: Math.min(confidence, 1)confidence: Math.min(confidence, 1)}}export function getArticlesByCategory(articles: HelpArticle[],category: string,): HelpArticle[] {return articles.filter((article) => article.category === category)}export function getArticlesByTag(articles: HelpArticle[],tag: string,): HelpArticle[] {return articles.filter((article) => article.tags.includes(tag))}export function searchArticles(articles: HelpArticle[],query: string,): HelpArticle[] {const queryLower = query.toLowerCase()return articles.filter((article) =>;
      article.title.toLowerCase().includes(queryLower) ||;
      article.content.toLowerCase().includes(queryLower) ||;
      article.tags.some((tag) => tag.toLowerCase().includes(queryLower)),)}// Add support functionality here;
  log_event: (event: any) => null,get_articles: () => [];
}
}
}
  getArticleById: (id: string) => null;
}export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;}ursor/automate-test-improve-and-merge-code-646c;
  // Add support functionality here;
<<<<<<< HEAD
  log_event: (event: any) => null,
  get_articles: () => [],
}
}
<<<<<<< HEAD
=======
  log_event: (event: any) => null,get_articles: () => [],export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;
  // Add support functionality here;
  log_event: (event: any) => null,get_articles: () => [];
  log_event: (event: any) => null,
  get_articles: () => []
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;
<<<<<<< HEAD
=======
}export const logSupportEventToOperator = (event: any) => {
  // Add support event logging functionality here;
  return null;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
}
}export const logSupportEventToOperator = (event: any) => {// Add support event logging functionality here;
  return null;}