// Global types for the Zion Tech Group application

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;
  };
  features: string[];
  technologies: string[];
  deliveryTime: string;
  complexity: 'basic' | 'intermediate' | 'advanced' | 'enterprise';
  targetAudience: string[];
  useCases: string[];
  benefits: string[];
  requirements: string[];
  support: {
    included: string[];
    additional: string[];
  };
  customization: {
    available: boolean;
    options: string[];
  };
  integration: {
    supported: boolean;
    platforms: string[];
  };
  scalability: {
    horizontal: boolean;
    vertical: boolean;
    autoScaling: boolean;
  };
  security: {
    level: 'basic' | 'standard' | 'enterprise' | 'military';
    features: string[];
    compliance: string[];
  };
  performance: {
    uptime: number;
    responseTime: string;
    throughput: string;
  };
  deployment: {
    options: string[];
    recommended: string;
    timeToDeploy: string;
  };
  maintenance: {
    included: boolean;
    frequency: string;
    updates: string;
  };
  training: {
    included: boolean;
    format: string[];
    duration: string;
  };
  documentation: {
    user: boolean;
    technical: boolean;
    api: boolean;
  };
  testing: {
    unit: boolean;
    integration: boolean;
    e2e: boolean;
    performance: boolean;
  };
  monitoring: {
    included: boolean;
    tools: string[];
    alerts: boolean;
  };
  backup: {
    included: boolean;
    frequency: string;
    retention: string;
  };
  disasterRecovery: {
    included: boolean;
    rto: string;
    rpo: string;
  };
  compliance: {
    gdpr: boolean;
    hipaa: boolean;
    sox: boolean;
    pci: boolean;
    iso27001: boolean;
  };
  certifications: string[];
  awards: string[];
  testimonials: {
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
  }[];
  caseStudies: {
    title: string;
    company: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      improvement: string;
      value: string;
    };
  }[];
  faq: {
    question: string;
    answer: string;
    category: string;
  }[];
  pricing: {
    model: 'fixed' | 'hourly' | 'subscription' | 'usage-based';
    tiers: {
      name: string;
      price: number;
      features: string[];
      limitations: string[];
    }[];
    discounts: {
      type: string;
      amount: number;
      conditions: string[];
    }[];
  };
  timeline: {
    phase: string;
    duration: string;
    deliverables: string[];
    milestones: string[];
  }[];
  team: {
    role: string;
    experience: string;
    skills: string[];
    certifications: string[];
  }[];
  technology: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
    devops: string[];
    ai: string[];
    blockchain: string[];
    iot: string[];
  };
  innovation: {
    patents: string[];
    research: string[];
    partnerships: string[];
    awards: string[];
  };
  sustainability: {
    carbonNeutral: boolean;
    renewableEnergy: boolean;
    wasteReduction: string;
    socialImpact: string[];
  };
  accessibility: {
    wcag: string;
    features: string[];
    testing: boolean;
  };
  internationalization: {
    languages: string[];
    currencies: string[];
    timezones: string[];
    regulations: string[];
  };
  future: {
    roadmap: string[];
    emerging: string[];
    vision: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
    allocated: number;
    spent: number;
    currency: string;
  };
  team: {
    lead: string;
    members: string[];
    external: string[];
  };
  client: {
    name: string;
    contact: string;
    industry: string;
  };
  deliverables: {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
  }[];
  risks: {
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
  dependencies: {
    project: string;
    type: 'blocking' | 'influencing';
    description: string;
  }[];
  metrics: {
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
  lessons: {
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'developer' | 'client' | 'guest';
  permissions: string[];
  profile: {
    avatar?: string;
    bio?: string;
    skills: string[];
    experience: number;
    location: string;
    timezone: string;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
  };
  activity: {
    lastLogin: Date;
    loginCount: number;
    projects: string[];
    tasks: string[];
  };
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;
    features: string[];
  };
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: {
    path: string;
    views: number;
    uniqueViews: number;
  }[];
  trafficSources: {
    source: string;
    medium: string;
    sessions: number;
    percentage: number;
  }[];
  devices: {
    type: string;
    count: number;
    percentage: number;
  }[];
  browsers: {
    name: string;
    version: string;
    count: number;
    percentage: number;
  }[];
  countries: {
    name: string;
    code: string;
    count: number;
    percentage: number;
  }[];
  conversions: {
    goal: string;
    count: number;
    rate: number;
    value: number;
  }[];
  performance: {
    metric: string;
    value: number;
    target: number;
    status: 'good' | 'needs-improvement' | 'poor';
  }[];
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  robots: string;
  og: {
    title: string;
    description: string;
    image: string;
    type: string;
    url: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  structured: {
    type: string;
    data: Record<string, any>;
  }[];
  sitemap: {
    url: string;
    lastmod: Date;
    changefreq: string;
    priority: number;
  }[];
}

export interface Performance {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fmp: number;
  si: number;
  tbt: number;
  score: number;
  recommendations: {
    type: string;
    description: string;
    impact: 'low' | 'medium' | 'high';
    effort: 'low' | 'medium' | 'high';
  }[];
}

export interface Security {
  score: number;
  vulnerabilities: {
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    fix: string;
  }[];
  headers: {
    name: string;
    value: string;
    status: 'present' | 'missing' | 'incorrect';
  }[];
  certificates: {
    valid: boolean;
    issuer: string;
    expires: Date;
    algorithm: string;
  };
  compliance: {
    standard: string;
    status: 'compliant' | 'non-compliant' | 'partial';
    issues: string[];
  }[];
}

export interface Accessibility {
  score: number;
  level: 'A' | 'AA' | 'AAA';
  issues: {
    type: string;
    severity: 'error' | 'warning' | 'info';
    description: string;
    element: string;
    fix: string;
  }[];
  features: {
    name: string;
    implemented: boolean;
    description: string;
  }[];
  testing: {
    automated: boolean;
    manual: boolean;
    tools: string[];
    lastTested: Date;
  };
}

export interface ErrorLog {
  id: string;
  timestamp: Date;
  level: 'error' | 'warning' | 'info' | 'debug';
  message: string;
  stack?: string;
  context: {
    url: string;
    userAgent: string;
    userId?: string;
    sessionId?: string;
  };
  resolved: boolean;
  assignedTo?: string;
  resolution?: string;
}

export interface AuditLog {
  id: string;
  timestamp: Date;
  action: string;
  resource: string;
  userId: string;
  details: Record<string, any>;
  ip: string;
  userAgent: string;
  success: boolean;
  error?: string;
}

export interface Configuration {
  environment: 'development' | 'staging' | 'production';
  version: string;
  build: string;
  features: {
    [key: string]: boolean;
  };
  integrations: {
    [key: string]: {
      enabled: boolean;
      config: Record<string, any>;
    };
  };
  limits: {
    [key: string]: number;
  };
  maintenance: {
    enabled: boolean;
    message: string;
    startTime?: Date;
    endTime?: Date;
  };
}