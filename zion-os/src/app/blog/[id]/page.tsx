import Link from 'next/link';

interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const POSTS: Record<string, BlogPostMeta & { content: string[] }> = {
  'sovereign-ai-commerce-2025': {
    id: 'sovereign-ai-commerce-2025',
    title: 'Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025',
    excerpt:
      'A practical blueprint for deploying autonomous, self-regulating AI marketplaces powered by Zion OS.',
    category: 'AI Solutions',
    author: 'Dr. Kleber Santos',
    date: '2025-09-15',
    readTime: '9 min read',
    content: [
      'Sovereign AI commerce represents the convergence of autonomous decision systems, verifiable identity, and programmable markets. With Zion OS, organizations can deploy marketplaces that self-orchestrate supply, demand, and policy without central bottlenecks.',
      'In this guide, we outline a phased approach: start with identity and governance, introduce autonomous listing and matching, then activate treasury and incentive policies. Each phase is measurable and reversible, ensuring safe rollout.',
      'Key building blocks include: DID-backed identity, reputation scoring, policy engines, event-driven orchestration, and human-in-the-loop controls for sensitive actions.',
      'Outcomes: reduced operational cost, higher market liquidity, and more resilient ecosystems that adapt in real time to participant behavior and external signals.'
    ],
  },
  'ai-governance-safety-2025': {
    id: 'ai-governance-safety-2025',
    title: 'AI Governance in 2025: Safety, Alignment, and Accountability',
    excerpt:
      'A pragmatic framework for implementing AI governance that balances innovation with safety, transparency, and regulatory compliance.',
    category: 'AI Ethics',
    author: 'Dr. Emily Watson',
    date: '2025-09-14',
    readTime: '7 min read',
    content: [
      'As AI systems orchestrate increasingly critical processes, organizations need governance models that ensure alignment with human values while enabling rapid iteration.',
      'This article introduces a layered governance blueprint: capability thresholds and guardrails, policy-as-code with auditable change controls, red-teaming and evaluation gates, and incident response with postmortem learning loops.',
      'We include a practical rollout checklist that maps responsibilities across product, security, legal, and operations, with metrics to track model risk, drift, and real-world impact.'
    ],
  },
  'quantum-edge-ai-systems': {
    id: 'quantum-edge-ai-systems',
    title: 'Quantum-Accelerated Edge AI Systems: Architecture and Use Cases',
    excerpt:
      'How hybrid quantum-classical pipelines unlock low-latency, high-accuracy inference at the edge for robotics, telecom, and finance.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-09-10',
    readTime: '8 min read',
    content: [
      'We detail an architecture where classical edge devices perform feature extraction while quantum co-processors handle combinatorial optimization and sampling tasks.',
      'Patterns covered include: route optimization for logistics robots, anomaly detection in 5G networks, and portfolio rebalancing with real-time constraints.',
      'We also outline deployment considerations: hardware abstraction layers, batching strategies, error mitigation, and cost controls.'
    ],
  },
  'autonomous-supply-chains': {
    id: 'autonomous-supply-chains',
    title: 'Autonomous Supply Chains: From Forecasting to Self-Healing Logistics',
    excerpt:
      'Deploy event-driven, policy-aware AI agents that forecast demand, negotiate contracts, and dynamically re-route logistics with human oversight.',
    category: 'AI Solutions',
    author: 'Michael Rodriguez',
    date: '2025-09-08',
    readTime: '10 min read',
    content: [
      'Supply chains benefit from autonomous agents that perceive, decide, and act across procurement, warehousing, and distribution.',
      'We present a reference implementation on Zion OS using message buses, digital twins, and incentive-aligned policies to minimize stockouts and reduce carrying costs.',
      'Case studies demonstrate 15–30% lead time reductions and resilient performance under disruption scenarios.'
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((id) => ({ id }));
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = POSTS[params.id];

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-gray-500 mb-6">The article you are looking for does not exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-700 text-sm font-medium">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-xl text-gray-700 mb-8">{post.excerpt}</p>

        <article className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <div className="mt-12">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

