// Support utilities
export interface SupportEvent {
  type: string;
  sessionId: string;
  payload: any;
  timestamp?: string;
}

export interface SupportArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SupportIntent {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
  suggestedActions: string[];
}

// Mock support articles
export const supportArticles: SupportArticle[] = [
  {
    id: '1',
    title: 'How to get started with Zion Marketplace',
    slug: 'getting-started',
    content: 'Welcome to Zion Marketplace! Here\'s how to get started...',
    category: 'getting-started',
    tags: ['beginner', 'onboarding'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'How to create a project',
    slug: 'creating-projects',
    content: 'Learn how to create and manage projects on Zion Marketplace...',
    category: 'projects',
    tags: ['projects', 'creation'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'How to find talent',
    slug: 'finding-talent',
    content: 'Discover how to find and hire the right talent for your projects...',
    category: 'talent',
    tags: ['talent', 'hiring'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export function findSupportArticles(query: string): SupportArticle[] {
  const normalizedQuery = query.toLowerCase();
  
  return supportArticles.filter(article =>
    article.title.toLowerCase().includes(normalizedQuery) ||
    article.content.toLowerCase().includes(normalizedQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
  );
}

export function analyzeSupportIntent(query: string): SupportIntent {
  const articles = findSupportArticles(query);
  
  return {
    intentMatched: articles.length > 0,
    matchedArticleIds: articles.map(a => a.id),
    confidence: articles.length > 0 ? 0.8 : 0.2,
    suggestedActions: articles.length > 0 ? ['read_article', 'contact_support'] : ['contact_support']
  };
}

export async function logSupportEvent(event: SupportEvent): Promise<void> {
  // Mock implementation - in real app, this would log to a database
  console.log('Support event:', event);
}