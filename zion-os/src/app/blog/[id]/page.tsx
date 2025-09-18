import React from 'react';
import { notFound } from 'next/navigation';

const blogPosts = {
  'ai-governance-framework-2025': {
    id: 'ai-governance-framework-2025',
    title: 'AI Governance Framework 2025: Building Trust in Autonomous Systems',
    excerpt: 'A comprehensive framework for implementing AI governance, risk management, and compliance in enterprise environments.',
    category: 'AI Governance',
    author: 'Dr. Emily Watson',
    date: '2025-09-16',
    readTime: '12 min read',
    content: [
      'AI governance is no longer optional—it\'s essential for building trust and ensuring responsible AI deployment at scale.',
      'This framework covers policy development, risk assessment, compliance monitoring, and continuous governance across the AI lifecycle.',
      'We outline practical implementation steps including governance structures, risk frameworks, compliance checklists, and monitoring systems.',
      'Key components include AI ethics committees, risk assessment protocols, bias detection systems, and audit trails for AI decisions.',
      'The framework addresses regulatory requirements including EU AI Act, NIST AI Risk Management Framework, and industry-specific guidelines.',
      'Case studies demonstrate how organizations have successfully implemented AI governance, reducing risks by 60% and improving stakeholder trust.'
    ]
  },
  'agentic-safety-patterns-2025': {
    id: 'agentic-safety-patterns-2025',
    title: 'Agentic Safety Patterns 2025: Guardrails for Autonomous Systems',
    excerpt: 'A catalog of pragmatic safety patterns for deploying autonomous agents with measurable risk controls and human override.',
    category: 'AI Safety',
    author: 'Dr. Michael Chen',
    date: '2025-09-15',
    readTime: '15 min read',
    content: [
      'Autonomous agents require robust safety patterns to ensure reliable operation in production environments.',
      'This catalog presents proven patterns for implementing guardrails, monitoring, and human oversight.',
      'Key patterns include circuit breakers, confidence thresholds, human-in-the-loop controls, and audit trails.',
      'We provide implementation examples and best practices for each safety pattern.',
      'Case studies show how these patterns have prevented failures and improved system reliability.'
    ]
  }
};

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          <div className="text-gray-300 space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}