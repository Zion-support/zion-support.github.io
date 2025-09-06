// Support utilities for help system
export interface HelpArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  tags: string[];
  priority: number;
  createdAt: string;
  updatedAt: string;
}

export interface SupportEvent {
  id: string;
  type: 'chat_completion' | 'escalation' | 'feedback';
  sessionId: string;
  payload: any;
  timestamp: string;
}

export interface IntentMatch {
  intentMatched: boolean;
  matchedArticleIds: string[];
  confidence: number;
  suggestedActions: string[];
}

// Mock help articles
const mockArticles: HelpArticle[] = [
  {
    id: '1',
    title: 'How to create an account',
    slug: 'create-account',
    content: 'To create an account, click the "Sign Up" button and fill in your details...',
    category: 'account',
    tags: ['account', 'signup', 'registration'],
    priority: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'How to post a job',
    slug: 'post-job',
    content: 'To post a job, go to the jobs section and click "Post New Job"...',
    category: 'jobs',
    tags: ['jobs', 'posting', 'employer'],
    priority: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    title: 'How to apply for jobs',
    slug: 'apply-jobs',
    content: 'To apply for jobs, browse the job listings and click "Apply"...',
    category: 'jobs',
    tags: ['jobs', 'application', 'talent'],
    priority: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    title: 'Payment and billing',
    slug: 'payment-billing',
    content: 'We accept various payment methods including credit cards and PayPal...',
    category: 'billing',
    tags: ['payment', 'billing', 'money'],
    priority: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    title: 'Account security',
    slug: 'account-security',
    content: 'Keep your account secure by using a strong password and enabling 2FA...',
    category: 'security',
    tags: ['security', 'password', '2fa'],
    priority: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export function getHelpArticles(): HelpArticle[] {
  return mockArticles;
}

export function getHelpArticle(slug: string): HelpArticle | null {
  return mockArticles.find(article => article.slug === slug) || null;
}

export function searchHelpArticles(query: string): HelpArticle[] {
  const searchTerms = query.toLowerCase().split(/\s+/);
  
  return mockArticles.filter(article => {
    const searchText = `${article.title} ${article.content} ${article.tags.join(' ')}`.toLowerCase();
    return searchTerms.some(term => searchText.includes(term));
  }).sort((a, b) => b.priority - a.priority);
}

export function matchIntent(query: string): IntentMatch {
  const searchTerms = query.toLowerCase();
  
  // Simple intent matching based on keywords
  const intents = {
    'account': ['account', 'login', 'signup', 'register', 'password', 'email'],
    'jobs': ['job', 'work', 'employment', 'hire', 'apply', 'posting'],
    'billing': ['payment', 'billing', 'money', 'cost', 'price', 'subscription'],
    'security': ['security', 'safe', 'hack', 'breach', 'privacy'],
    'support': ['help', 'support', 'contact', 'issue', 'problem', 'bug']
  };
  
  const matchedCategories: string[] = [];
  let maxConfidence = 0;
  
  for (const [category, keywords] of Object.entries(intents)) {
    const matches = keywords.filter(keyword => searchTerms.includes(keyword));
    if (matches.length > 0) {
      matchedCategories.push(category);
      maxConfidence = Math.max(maxConfidence, matches.length / keywords.length);
    }
  }
  
  const matchedArticles = searchHelpArticles(query);
  const matchedArticleIds = matchedArticles.map(article => article.id);
  
  return {
    intentMatched: matchedCategories.length > 0,
    matchedArticleIds,
    confidence: maxConfidence,
    suggestedActions: matchedCategories
  };
}

export function logSupportEvent(event: Omit<SupportEvent, 'id' | 'timestamp'>): void {
  // In a real app, this would log to a database or monitoring service
  console.log('Support Event:', {
    ...event,
    id: `event_${Date.now()}`,
    timestamp: new Date().toISOString()
  });
}

export function getSuggestedActions(intent: IntentMatch): string[] {
  const actions: string[] = [];
  
  if (intent.intentMatched) {
    if (intent.matchedArticleIds.length > 0) {
      actions.push('Read the help articles below');
    }
    if (intent.confidence > 0.7) {
      actions.push('Try the suggested solutions');
    } else {
      actions.push('Contact support for personalized help');
    }
  } else {
    actions.push('Browse our help center');
    actions.push('Contact our support team');
  }
  
  return actions;
}