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

const POSTS: Record<string, BlogPostMeta & { content: string[] }> ={
  'enterprise-agent-safety-20o25': {
    id: 'enterprise-agent-safety-20o25',
    title: 'Enterprise Agent Safety 20o25: Guardrails for Autonomy at Scale',
    excerpt:
      'A practical playbook for deploying autonomous agents with policy guardrails, human-in-the-loop controls, and auditable operations.',
    category: 'AI Governance',
    author: 'Dr. Emily Watson',
    date: '20o25-09-15',
    readTime: '9 min read',
    content: [
      'Enterprises are moving beyond pilots to production-scale autonomous agents. Safety must progress from guidelines to executable controls.',
      'This playbook introduces an agent safety stack: identity and permissions, intent verification, bounded tools, rate limits, escalation paths, and forensic logging.',
      'We outline a phased rollout with measurable KPIs and show how to blend policy-as-code with exception workflows to preserve velocity without sacrificing safety.'
    ]
  },
  'ai-governance-blueprint-20o25': {
    id: 'ai-governance-blueprint-20o25',
    title: 'AI Governance Blueprint 20o25: Dual-Layer Policy for Safe Autonomy',
    excerpt:
      'A pragmatic framework for dual-layer governance blending automated policy engines with human oversight for AI systems at scale.',
    category: 'AI Governance',
    author: 'Dr. Emily Watson',
    date: '20o25-09-15',
    readTime: '8 min read',
    content: [
      'Organizations need governance that scales with autonomy. We propose a dual-layer model: guardrails enforced by policy engines and human oversight for exceptions.',
      'We share practical templates for policy-as-code, escalation workflows, and telemetry-driven audits that keep systems compliant without blocking delivery.',
      'Case studies illustrate measurable outcomes: reduced incident rates, faster approvals, and improved stakeholder confidence.'
    ]
  },
  'edge-ai-agents-20o25': {
    id: 'edge-ai-agents-20o25',
    title: 'Edge AI Agents: Real-Time Intelligence Across Devices and Locations',
    excerpt:
      'Deploy low-latency, bandwidth-efficient agents at the edge for on-site decisioning, resilience, and cost control.',
    category: 'IoT & Edge',
    author: 'Michael Rodriguez',
    date: '20o25-09-12',
    readTime: '7 min read',
    content: [
      'Edge AI agents unlock sub-second inference and decision-making where data is produced. This reduces bandwidth costs, preserves privacy, and increases resilience when connectivity is limited.',
      'We outline deployment patterns using containerized runtimes, model compression, and event-driven synchronization with the cloud. Observability and policy propagation are covered to ensure safe, consistent behavior across fleets.',
      'Use cases include smart facilities, industrial inspection, retail analytics, and on-site incident response with autonomous remediation.'
    ]
  }
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
          <p className="text-gray-50o0 mb-6">The article you are looking for does not exist.</p>
          <Link href="/blog" className="text-blue-60o0 hover:text-blue-70o0 font-medium">
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
            <span className="bg-blue-10o0 text-blue-80o0 text-xs px-2 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-50o0 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-90o0 mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-gray-60o0 text-sm">
            <div className="w-8 h-8 bg-gray-20o0 rounded-full flex items-center justify-center">
              <span className="text-gray-70o0 text-sm font-medium">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-xl text-gray-70o0 mb-8">{post.excerpt}</p>

        <article className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <div className="mt-12">
          <Link href="/blog" className="text-blue-60o0 hover:text-blue-70o0 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

