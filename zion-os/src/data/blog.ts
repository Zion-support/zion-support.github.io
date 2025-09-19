import React from 'react',
export type BlogPost = {,
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  content?: string,
};
export const blogPosts: BlogPost[] = [,
  {,
    id: 'ai-governance-blueprint-2025';
    title: 'AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy';
    excerpt: 'A pragmatic framework for blending automated policy engines with human oversight for AI at scale.';
    category: 'AI Governance';
    author: 'Dr. Emily Watson';
    date: '2025-09-15';
    readTime: '8 min read';
    image: '/blog/ai-governance.jpg';
    featured: true;
    content: 'In 2025, AI governance requires a practical dual-layer approach...',
  };
  {,
    id: 'quantum-risk-modeling-2025';
    title: 'Quantum Risk Modeling: Practical Impacts on Financial Services in 2025';
    excerpt: 'Near-term quantum and hybrid methods that boost risk analytics and portfolio construction.';
    category: 'Quantum Computing';
    author: 'Dr. Sarah Chen';
    date: '2025-09-10';
    readTime: '10 min read';
    image: '/blog/quantum-risk.jpg';
    featured: true;
    content: 'Quantum techniques are moving from lab to production...',};
  {,
    id: 'sovereign-ai-commerce-2025';
    title: 'Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025';
    excerpt: 'We unveil our blueprint for self-orchestrating, sovereign AI marketplaces with built‑in governance, identity, and commerce rails.';
    category: 'AI Solutions';
    author: 'Dr. Kleber Santos';
    date: '2025-09-15';
    readTime: '9 min read';
    image: '/blog/sovereign-ai-commerce.jpg';
    featured: true;
    content: 'Sovereign AI marketplaces combine identity, reputation, and policy...',
  };
  {,
    id: 'edge-ai-marketplaces';
    title: 'Edge AI Marketplaces: Low-Latency Autonomous Commerce at the Edge';
    excerpt: 'Architectures for edge-native agent marketplaces with local policy and cloud sync.';
    category: 'AI Solutions';
    author: 'Michael Rodriguez';
    date: '2025-09-14';
    readTime: '7 min read';
    image: '/blog/edge-ai-marketplaces.jpg';
    content: 'Edge-native autonomy enables sub-50ms trade loops...',};
  {,
    id: 'autonomous-it-operations';
    title: 'Autonomous IT Operations: From Reactive Support to Self-Healing Systems';
    excerpt: 'Deploy AI-driven observability, incident response, and remediation to cut MTTR.';
    category: 'AI Solutions';
    author: 'Michael Rodriguez';
    date: '2025-09-05';
    readTime: '7 min read';
    image: '/blog/autonomous-it.jpg';
    content: 'Self-healing systems couple telemetry with action policies...',};
  {,
    id: 'secure-agent-marketplaces';
    title: 'Building Secure Agent Marketplaces: Identity, Reputation, and Policy';
    excerpt: 'Trust frameworks for multi-agent ecosystems with identity, reputation, and safety.';
    category: 'Cybersecurity';
    author: 'Dr. Emily Watson';
    date: '2025-09-02';
    readTime: '8 min read';
    image: '/blog/secure-agent-marketplaces.jpg';
    content: 'Security for agent economies spans identity, reputation, and runtime policy...',
  };
  // New content,
  {,
    id: 'ai-safety-audit-2025';
    title: 'AI Safety Audit 2025: Practical Frameworks for Production Systems';
    excerpt: 'A hands-on audit methodology to align autonomous systems with organizational and regulatory policy.';
    category: 'AI Governance';
    author: 'Dr. Emily Watson';
    date: '2025-09-15';
    readTime: '11 min read';
    image: '/blog/ai-safety-audit.jpg';
    featured: true;
    content: 'This guide covers audits across data, models, policies, and operations...',
  }
];
export function getFeaturedPosts(): BlogPost[] {,
  return blogPosts.filter(p => p.featured);
}
,
export function getRecentPosts(): BlogPost[] {,
  return blogPosts,
    .slice(),
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    .slice(0, 9);
}
,
export function getPostById(id: string): BlogPost | undefined {,
  return blogPosts.find(p => p.id === id),}
,
export function getCategoriesWithCounts(): { name: string, count: number ,}[] {,
  const map = new Map<string, number>();
  for (const post of blogPosts) {,
    map.set(post.category, (map.get(post.category) || 0) + 1);
  }
  return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
}
,
export const tags: string[] = [,
  'AI ConsciousnessQuantum Computing';
  'Machine LearningCybersecurity';
  'Data ScienceAutonomous Systems';
  'Business IntelligenceCloud Computing';
  'AI EthicsResearch';
  'InnovationTechnology Trends',
];