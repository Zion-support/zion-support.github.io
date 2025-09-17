<<<<<<< HEAD
=======
<<<<<<< HEAD
import Link from 'next/link';

export const metadata = {
  title: 'Blog & News - Zion Tech Group',
  description: 'Stay updated with the latest insights, news, and thought leadership from Zion Tech Group in AI, quantum computing, and technology innovation.',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 'ai-safety-governance-2025',
      title: 'AI Safety and Governance 2025: Practical Guardrails for Autonomous Systems',
      excerpt: 'A practical framework for policy-as-code, graded permissions, and human-in-the-loop controls.',
      category: 'AI Ethics',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '8 min read',
      image: '/blog/ai-safety-governance.jpg',
      featured: true
    },
    {
      id: 'ai-consciousness-breakthrough',
      title: 'Breakthrough in AI Consciousness Research: What It Means for the Future',
      excerpt: 'Our research team has made significant progress in understanding artificial consciousness, opening new possibilities for human-AI collaboration.',
      category: 'Research & Development',
      author: 'Dr. Emily Watson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/blog/ai-consciousness.jpg',
      featured: true
    },
    {
      id: 'quantum-risk-modeling-2025',
      title: 'Quantum Risk Modeling: Practical Impacts on Financial Services in 2025',
      excerpt: 'Near-term quantum and hybrid methods that boost risk analytics and portfolio construction.',
      category: 'Quantum Computing',
      author: 'Dr. Sarah Chen',
      date: '2025-09-10',
      readTime: '10 min read',
      image: '/blog/quantum-risk.jpg',
      featured: true
    },
    {
      id: 'sovereign-ai-commerce-2025',
      title: 'Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025',
      excerpt: 'We unveil our blueprint for self-orchestrating, sovereign AI marketplaces with built‑in governance, identity, and commerce rails.',
      category: 'AI Solutions',
      author: 'Dr. Kleber Santos',
      date: '2025-09-15',
      readTime: '9 min read',
      image: '/blog/sovereign-ai-commerce.jpg',
      featured: true
    },
    {
      id: 'quantum-computing-finance',
      title: 'Quantum Computing Revolutionizing Financial Trading: A Deep Dive',
      excerpt: 'Discover how our quantum algorithms are transforming financial markets and creating new opportunities for investors and institutions.',
      category: 'Quantum Computing',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      image: '/blog/quantum-finance.jpg',
      featured: true
    },
    {
      id: 'ai-autonomous-systems-future',
      title: 'The Future of Autonomous AI Systems in Business Operations',
      excerpt: 'Explore how autonomous AI systems are reshaping business operations and what organizations need to know to stay competitive.',
      category: 'AI Solutions',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/blog/autonomous-ai.jpg',
      featured: true
    },
    // New featured content
    {
      id: 'agent-safety-playbooks',
      title: 'Agent Safety Playbooks for Enterprise AI',
      excerpt: 'Practical guardrails, red-teaming, and evaluation patterns to deploy autonomous agents responsibly at scale.',
      category: 'AI Safety',
      author: 'Dr. James Wilson',
      date: '2025-09-10',
      readTime: '9 min read',
      image: '/blog/agent-safety.jpg',
      featured: true,
    },
  ];

  const recentPosts = [
    {
      id: 'ai-safety-governance-2025',
      title: 'AI Safety and Governance 2025: Practical Guardrails for Autonomous Systems',
      excerpt: 'Implement measurable guardrails for autonomous AI: policy-as-code, graded permissions, red‑team loops.',
      category: 'AI Ethics',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '8 min read',
      image: '/blog/ai-safety-governance.jpg'
    },
    {
      id: 'autonomous-it-operations',
      title: 'Autonomous IT Operations: From Reactive Support to Self-Healing Systems',
      excerpt: 'Deploy AI-driven observability, incident response, and remediation to cut MTTR.',
      category: 'AI Solutions',
=======
  const featuredPosts: PostListItem[] = [
    {
      id: 'ai-governance-2025',
      title: 'AI Governance 2025: Practical Guardrails for Autonomous Systems',
      excerpt: 'Implement measurable, reversible, and auditable controls for production AI.',
      category: 'AI Solutions',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '8 min read',
      image: '/blog/ai-governance.jpg',
      id: 'ai-governance-blueprint-2025',
      title: 'AI Governance Blueprint 2025: Practical Controls for Autonomous Systems',
      excerpt: 'How to deploy policy engines, observability, and reversible rollouts as autonomy grows.',
      category: 'AI Solutions',
      author: 'Dr. Emily Watson',
      date: '2025-09-14',
      readTime: '11 min read',
>>>>>>> 69252da4b39a233944aebd46f720e5f5b61d8d0f
>>>>>>> resolve-all-prs-and-merge
      author: 'Michael Rodriguez',
      date: '2025-09-05',
      readTime: '7 min read',
      image: '/blog/autonomous-it.jpg',
    },
    {
      id: 'secure-agent-marketplaces',
      title: 'Building Secure Agent Marketplaces: Identity, Reputation, and Policy',
      excerpt:
        'Trust frameworks for multi-agent ecosystems with identity, reputation, and safety.',
      category: 'Cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-09-02',
      readTime: '8 min read',
      image: '/blog/secure-agent-marketplaces.jpg',
    },
    {
      id: 'ai-ops-cost-optimization-2025',
      title: 'AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings',
      excerpt: 'Deploy AI-driven observability and predictive autoscaling to cut spend while improving reliability.',
      image: '/blog/ai-ops-cost.jpg',
      id: 'ai-ops-cost-optimization-2025',
      title: 'AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings',
      excerpt: 'A 6-week rollout to reduce cloud and ops costs by 30–50% using AI-driven rightsizing and autoscaling.',
      category: 'AI Solutions',
      author: 'Michael Rodriguez',
      date: '2025-09-15',
      readTime: '9 min read',
      image: '/blog/ai-ops-cost.jpg'
    },
    {
      id: 'agentic-sales-playbooks',
      title: 'Agentic Sales Playbooks: Autonomous Pipelines from Lead to Close',
      excerpt: 'Build autonomous sales loops with RAG, orchestration, and CRM integration with human-in-the-loop.',
      category: 'AI Solutions',
      author: 'Dr. David Kim',
      date: '2025-09-12',
      readTime: '8 min read',
      image: '/blog/agentic-sales.jpg'
    },
    {
      id: 'agent-safety-tooling',
      title: 'Agent Safety Tooling: Defense-in-Depth for Multi-Agent Systems',
      excerpt: 'Policy guards, runtime monitors, and reputation systems for safer agents.',
      category: 'Cybersecurity',
      author: 'Dr. James Wilson',
                </p>
