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
<<<<<<< HEAD
      date: '2024-01-12',
      readTime: '6 min read',
      image: '/blog/ai-cybersecurity.jpg'
    },
    {
      id: 'data-science-business-intelligence',
      title: 'Transforming Business Intelligence with Advanced Data Science',
      excerpt: 'Learn how advanced data science techniques are revolutionizing business intelligence and decision-making processes.',
      category: 'Data Science',
      author: 'Dr. Maria Garcia',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '/blog/data-science-bi.jpg'
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning: The Next Frontier in AI',
      excerpt: 'Explore the intersection of quantum computing and machine learning, and how it\'s accelerating AI development.',
      category: 'Quantum Computing',
      author: 'Dr. Lisa Park',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '/blog/quantum-ml.jpg'
    },
    {
      id: 'ai-ethics-responsibility',
      title: 'AI Ethics and Responsible Development: Our Commitment',
      excerpt: 'Understanding the importance of ethical AI development and how we ensure our solutions benefit humanity.',
      category: 'AI Ethics',
      author: 'Dr. Emily Watson',
      date: '2023-12-28',
      readTime: '5 min read',
      image: '/blog/ai-ethics.jpg'
    },
    {
      id: 'cloud-infrastructure-ai',
      title: 'Building Scalable AI Infrastructure in the Cloud',
      excerpt: 'Best practices for designing and implementing scalable AI infrastructure using modern cloud technologies.',
      category: 'Infrastructure',
      author: 'Michael Rodriguez',
      date: '2023-12-20',
      readTime: '8 min read',
      image: '/blog/cloud-ai.jpg'
    },
    {
      id: 'ai-content-marketing',
      title: 'AI in Content Marketing: Personalization at Scale',
      excerpt: 'How AI is revolutionizing content marketing through intelligent personalization and automated optimization.',
      category: 'Content Marketing',
      author: 'Dr. David Kim',
      date: '2023-12-15',
      readTime: '6 min read',
      image: '/blog/ai-marketing.jpg'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 12, active: true },
    { name: 'Research & Development', count: 3, active: false },
    { name: 'AI Solutions', count: 2, active: false },
    { name: 'Quantum Computing', count: 2, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'Data Science', count: 1, active: false },
    { name: 'AI Ethics', count: 1, active: false },
    { name: 'Infrastructure', count: 1, active: false },
    { name: 'Content Marketing', count: 1, active: false }
  ];

  const tags = [
    'AI Consciousness', 'Quantum Computing', 'Machine Learning', 'Cybersecurity',
    'Data Science', 'Autonomous Systems', 'Business Intelligence', 'Cloud Computing',
    'AI Ethics', 'Research', 'Innovation', 'Technology Trends'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, breakthroughs, and thought leadership 
            from our team of AI and technology experts.
          </p>
        </div>
      </section>

      {/* Promo Banner - New Article */}
      <section className="py-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog/sovereign-ai-commerce-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                SA
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Solutions</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  A practical blueprint for deploying autonomous, self-regulating AI marketplaces powered by Zion OS.
=======
    { name: 'AI Solutions', count: 4, active: false },
    { name: 'Accessibility', count: 1, active: false },
    { name: 'Infrastructure', count: 1, active: false },
            href="/blog/ai-ops-cost-optimization-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                AO
                AG
                AG
                  AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  Cut cloud and ops costs with AI-driven rightsizing and predictive autoscaling without sacrificing reliability.
                  AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  A pragmatic framework for blending automated policy engines with human oversight for AI at scale.
>>>>>>> 69252da4b39a233944aebd46f720e5f5b61d8d0f
                </p>
