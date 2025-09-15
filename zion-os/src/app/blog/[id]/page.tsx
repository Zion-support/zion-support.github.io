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
  'ai-enterprise-agents-2025': {
    id: 'ai-enterprise-agents-2025',
    title: 'Enterprise AI Agents: From Pilots to Production in 2025',
    excerpt:
      'A step-by-step playbook to deploy reliable, governed AI agents across enterprise workflows using Zion OS.',
    category: 'AI Solutions',
    author: 'Dr. Kleber Santos',
    date: '2025-09-15',
    readTime: '8 min read',
    content: [
      'Enterprises are moving beyond chat assistants to task-capable AI agents that integrate with systems, follow policy, and deliver measurable outcomes.',
      'This guide details a production path: define outcomes and risks, design guardrails and approvals, integrate with identity and audit, and iterate with A/B evaluation.',
      'With Zion OS, you get event-driven orchestration, secure connectors, and a safety layer that enforces policy while enabling rapid iteration.',
      'Results include lower cycle times, higher SLA reliability, and scalable automation without sacrificing control.'
    ]
  },
  'quantum-supply-chains-2025': {
    id: 'quantum-supply-chains-2025',
    title: 'Quantum-Ready Supply Chains: Practical Wins You Can Ship This Year',
    excerpt:
      'How hybrid quantum methods improve routing, inventory, and risk buffers today—no sci‑fi required.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-09-14',
    readTime: '7 min read',
    content: [
      'Hybrid quantum-classical optimization already yields incremental wins in routing, warehouse slotting, and inventory buffers under uncertainty.',
      'We outline vendor-neutral pilots with clear KPIs, sandbox data governance, and rollback strategies to keep risk low and learning high.',
      'Teams should start with shadow inference and backtesting, then graduate to canary deployments tied to business guardrails.',
      'The payoff is resilient fulfillment and reduced costs—while building internal quantum literacy.'
    ]
  },
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
  'quantum-risk-modeling-2025': {
    id: 'quantum-risk-modeling-2025',
    title: 'Quantum Risk Modeling: Practical Impacts on Financial Services in 2025',
    excerpt:
      'How near-term quantum techniques are improving portfolio optimization, risk calculations, and stress testing today.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-09-10',
    readTime: '10 min read',
    content: [
      'Quantum-inspired and hybrid quantum-classical methods are already delivering measurable improvements in risk simulations and portfolio construction. While fully fault-tolerant systems are years away, financial institutions can adopt pragmatic techniques now.',
      'In this article, we cover how to prioritize use cases, evaluate vendors, and set up pilot programs with clear KPIs. We also discuss governance, model validation, and compliance considerations for regulated environments.',
      'Key takeaways include: selecting high-leverage problems (e.g., optimization under constraints), building hybrid pipelines, and establishing an experimentation framework that preserves auditability.'
    ]
  },
  'autonomous-it-operations': {
    id: 'autonomous-it-operations',
    title: 'Autonomous IT Operations: From Reactive Support to Self-Healing Systems',
    excerpt:
      'A blueprint for deploying AI-driven observability, incident response, and remediation to cut MTTR and improve reliability.',
    category: 'AI Solutions',
    author: 'Michael Rodriguez',
    date: '2025-09-05',
    readTime: '7 min read',
    content: [
      'Autonomous IT Operations combines event-driven automation, policy engines, and AI-assisted diagnostics to identify and remediate incidents before customers are impacted.',
      'We outline a maturity path: instrument, detect, diagnose, act. Each phase increases automation confidence while keeping humans in control for high-risk actions.',
      'Early adopters report reductions in MTTR of 40–60% and fewer out-of-hours escalations, freeing engineers to focus on proactive improvements.'
    ]
  },
  'secure-agent-marketplaces': {
    id: 'secure-agent-marketplaces',
    title: 'Building Secure Agent Marketplaces: Identity, Reputation, and Policy',
    excerpt:
      'Design principles for trustworthy multi-agent ecosystems, covering identity verification, reputation scoring, and safety policies.',
    category: 'Cybersecurity',
    author: 'Dr. Emily Watson',
    date: '2025-09-02',
    readTime: '8 min read',
    content: [
      'As AI agents transact and collaborate, marketplaces must enforce identity, reputation, and policy to mitigate fraud and abuse.',
      'This guide covers DID-backed identity, attestations, dispute resolution, and graded trust. We include reference architectures and rollout strategies for enterprise environments.',
      'The result is a safer, more resilient ecosystem that preserves innovation while reducing systemic risks.'
    ]
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

