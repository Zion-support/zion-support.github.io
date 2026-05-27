// Type definitions for blog posts
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string // optional full content for detail page
  date: string
  readTime: string
  tags: string[]
  image?: string // optional image URL
}

// Sample blog posts - in a real app, these might come from a CMS or markdown files
export const blogPosts: BlogPost[] = [
  {
    id: 'ai-accessibility-auditor-launch',
    title: 'Launching AI Accessibility Auditor: Making Digital Inclusion Effortless',
    excerpt: 'We are thrilled to announce the launch of our AI Accessibility Auditor, a powerful new service that automatically scans websites and applications for WCAG 2.1 compliance issues, providing actionable remediation guidance.',
    date: 'May 20, 2026',
    readTime: '4 min read',
    tags: ['AI', 'Accessibility', 'Launch', 'WCAG'],
    image: '/images/blog/ai-accessibility-auditor.jpg'
  },
  {
    id: 'ai-carbon-footprint-optimizer',
    title: 'AI Carbon Footprint Optimizer: Reduce Your Digital Environmental Impact',
    excerpt: 'Our new AI Carbon Footprint Optimizer helps organizations measure, analyze, and reduce their digital carbon footprint across cloud infrastructure, software development, and IT operations.',
    date: 'May 15, 2026',
    readTime: '5 min read',
    tags: ['AI', 'Sustainability', 'Carbon', 'ESG'],
    image: '/images/blog/ai-carbon-optimizer.jpg'
  },
  {
    id: 'ai-knowledge-management-update',
    title: 'Major Update to AI Knowledge Management Platform: Enhanced Search & Collaboration',
    excerpt: 'Today we released a major update to our AI Knowledge Management platform, featuring improved semantic search, real-time collaboration tools, and automated content gap analysis.',
    date: 'May 10, 2026',
    readTime: '3 min read',
    tags: ['AI', 'Knowledge Management', 'Update', 'Collaboration'],
    image: '/images/blog/ai-knowledge-management.jpg'
  },
  {
    id: 'ai-sales-intelligence-boost',
    title: 'Boost Your Sales Pipeline with AI-Powered Intelligence',
    excerpt: 'Discover how our AI Sales Intelligence service transforms lead scoring, pipeline forecasting, and deal insights to help sales teams close more deals faster.',
    date: 'May 5, 2026',
    readTime: '4 min read',
    tags: ['AI', 'Sales', 'Intelligence', 'CRM'],
    image: '/images/blog/ai-sales-intelligence.jpg'
  }
];