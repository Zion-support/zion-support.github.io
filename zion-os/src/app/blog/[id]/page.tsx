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
  'ai-safety-guardrails-2025': {
    id: 'ai-safety-guardrails-2025',
    title: 'Operational AI Safety Guardrails 2025: Policy-Driven Autonomy at Scale',
    excerpt:
      'A practical reference for implementing runtime guardrails, policy engines, and human escalation paths across critical AI workflows.',
    category: 'AI Governance',
    author: 'Dr. Emily Watson',
    date: '2025-09-15',
    readTime: '9 min read',
    content: [
      'As autonomous systems assume higher-impact responsibilities, safety must be designed as a first-class runtime concern, not a post-hoc checklist.',
      'This guide covers policy grammars, risk scoring, intervention thresholds, graded permissions, and auditability patterns for regulated industries.'
    ]
  },
  'quantum-supply-chains-2025': {
    id: 'quantum-supply-chains-2025',
    title: 'Quantum-Accelerated Supply Chains: Near-Term Wins Using Hybrid Methods',
    excerpt:
      'How hybrid quantum-classical optimization improves routing, allocation, and inventory resilience in volatile environments.',
    category: 'Quantum Computing',
    author: 'Dr. Sarah Chen',
    date: '2025-09-15',
    readTime: '8 min read',
    content: [
      'Hybrid approaches (QAOA, VQE + classical heuristics) can unlock measurable gains in complex logistics without fault-tolerant hardware.',
      'We outline evaluation criteria, pilot architectures, and KPIs that separate hype from durable value in operations.'
    ]
  },
  'ai-governance-blueprint-2025': {
    id: 'ai-governance-blueprint-2025',
    title: 'AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy',
    excerpt:
      'A pragmatic framework for dual-layer governance blending automated policy engines with human oversight for AI systems at scale.',
    category: 'AI Governance',
    author: 'Dr. Emily Watson',
    date: '2025-09-15',
    readTime: '8 min read',
    content: [
      'Enterprises adopting autonomous AI need governance beyond static checklists. Dual-layer policy couples machine-enforceable rules with human exception paths.',
      'This blueprint outlines roles, policy grammars, escalation thresholds, and audit trails. It includes a rollout sequence and measurable safety KPIs.'
    ]
  },
  'edge-ai-marketplaces': {
    id: 'edge-ai-marketplaces',
    title: 'Edge AI Marketplaces: Low-Latency Autonomous Commerce at the Edge',
    excerpt:
      'Designing and operating marketplaces where agents negotiate and transact at the edge for speed, privacy, and resilience.',
    category: 'AI Solutions',
    author: 'Michael Rodriguez',
    date: '2025-09-14',
    readTime: '7 min read',
    content: [
      'Edge-native marketplaces reduce round trips and keep sensitive data local while enabling autonomous negotiation and fulfillment.',
      'We cover reference topologies, event buses, local policy enforcement, and synchronization with cloud systems for compliance and analytics.'
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

