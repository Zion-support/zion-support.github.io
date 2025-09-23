import Head from 'next/head';
import Link from 'next/link';

export default function TechnologyInsightsPage() {
  const technologyTrends = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing in 20o25',
      description: 'Exploring the latest developments in quantum computing and their implications for AI and automation.',
      category: 'Emerging Tech',
      readTime: '15 min read',
      featured: true
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Revolution',
      description: 'How edge computing is transforming AI deployment and enabling real-time intelligent applications.',
      category: 'AI/ML',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicle Technology',
      description: 'The current state and future of autonomous vehicle technology and its broader applications.',
      category: 'Autonomy',
      readTime: '18 min read',
      featured: false
    }
  ];

  const researchAreas = [
    {
      title: 'Autonomous Systems Research',
      description: 'Pioneering research in building truly autonomous systems that can operate independently.',
