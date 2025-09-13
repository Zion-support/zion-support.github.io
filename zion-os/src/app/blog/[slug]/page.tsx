import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  content: string;
  date: string;
  tag: string;
};

const postsBySlug: Record<string, Post> = {
  'ai-deployment-blueprint-2025': {
    slug: 'ai-deployment-blueprint-2025',
    title: 'AI Deployment Blueprint: Launch Faster in 2025',
    content:
      `Learn the minimal path to production for AI assistants, analytics, and automation.\n\nKey steps:\n- Scope a single narrow workflow\n- Instrument telemetry from day one\n- Add approvals where risk is meaningful\n- Ship weekly with user feedback`,
    date: '2025-09-12',
    tag: 'AI',
  },
  'service-pricing-starters-for-smbs': {
    slug: 'service-pricing-starters-for-smbs',
    title: 'Starter Pricing: AI, IT, and Web3 Service Bundles',
    content:
      `Transparent entry pricing and ranges that make budgeting simple.\n\nIncludes:\n- AI assistant packages\n- IT foundation bundles\n- Web3 kickoff kits`,
    date: '2025-09-12',
    tag: 'Business',
  },
  'web3-stack-checklist-for-enterprise': {
    slug: 'web3-stack-checklist-for-enterprise',
    title: 'Enterprise Web3 Stack Checklist',
    content:
      `A minimal-but-complete stack: identity, smart contracts, infra, and monitoring.`,
    date: '2025-09-12',
    tag: 'Web3',
  },
  'ai-governance-playbook': {
    slug: 'ai-governance-playbook',
    title: "AI Governance Playbook: Guardrails That Don’t Slow You Down",
    content:
      `Standards for safe AI delivery without bureaucracy.\n\nFocus areas:\n- Model risk tiers\n- Data retention & PII handling\n- Human-in-the-loop checkpoints\n- Incident response drills`,
    date: '2025-09-12',
    tag: 'AI',
  },
  'it-cost-optimization-quick-wins': {
    slug: 'it-cost-optimization-quick-wins',
    title: 'IT Cost Optimization: 9 Quick Wins for Q4',
    content:
      `Reduce spend with surgical changes across cloud, licenses, data, and automation.`,
    date: '2025-09-12',
    tag: 'IT',
  },
  'token-rewards-growth-loops': {
    slug: 'token-rewards-growth-loops',
    title: 'Designing Token Reward Growth Loops',
    content:
      `Design incentives that compound engagement while remaining sustainable and compliant.`,
    date: '2025-09-12',
    tag: 'Web3',
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsBySlug[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Post not found</h1>
          <p className="text-white/70 mb-6">The article you’re looking for does not exist.</p>
          <Link href="/blog" className="underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-wide text-blue-100 mb-3">{post.tag}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          <div className="text-blue-100/80">{new Date(post.date).toLocaleDateString()}</div>
        </div>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-3xl mx-auto whitespace-pre-wrap">
          {post.content}
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">← All posts</Link>
        </div>
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(postsBySlug).map((slug) => ({ slug }));
}

