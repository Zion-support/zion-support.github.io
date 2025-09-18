import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network,
  Calendar, Newspaper, Play, Mic, FileText, ExternalLink as ExternalLinkIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "Our latest AI platform transforms how enterprises process and analyze data, delivering real-time insights with unprecedented accuracy and speed.",
      category: "Product Launch",
      date: "2025-01-15",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/ai-bi-platform-launch",
      external: false,
      featured: true,
      tags: ["AI", "Business Intelligence", "Product Launch", "Enterprise"]
    },
    {
      id: 2,
      title: "Zion Tech Group Secures $50M Series B Funding for Quantum Computing Research",
      excerpt: "Major investment round will accelerate our quantum computing initiatives and expand our research capabilities in quantum-resistant cybersecurity.",
      category: "Company News",
      date: "2025-01-10",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/series-b-funding",
      external: false,
      featured: true,
      tags: ["Funding", "Quantum Computing", "Cybersecurity", "Investment"]
    },
    {
      id: 3,
      title: "Zion Tech Group Named Top 10 AI Companies by TechCrunch",
      excerpt: "Recognition of our innovative AI solutions and contributions to the advancement of artificial intelligence technology.",
      category: "Awards & Recognition",
      date: "2025-01-08",
      author: "TechCrunch",
      image: "/api/placeholder/600/400",
      link: "https://techcrunch.com/2025/01/08/top-10-ai-companies-2025",
      external: true,
      featured: false,
      tags: ["Awards", "AI", "Recognition", "TechCrunch"]
    },
    {
      id: 4,
      title: "Partnership Announced: Zion Tech Group and NASA Collaborate on Space Technology",
      excerpt: "Strategic partnership to develop next-generation space exploration technologies and autonomous mission planning systems.",
      category: "Partnerships",
      date: "2025-01-05",
      author: "Zion Tech Group",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/news/nasa-partnership",
      external: false,
      featured: false,
      tags: ["Partnership", "NASA", "Space Technology", "Collaboration"]
    },
    {
      id: 5,
      title: "Zion Tech Group CEO Featured in Forbes: The Future of Autonomous AI",
      excerpt: "Our CEO discusses the future of autonomous AI systems and how they're transforming industries across the globe.",
      category: "Media Coverage",
      date: "2025-01-03",
      author: "Forbes",
      image: "/api/placeholder/600/400",
      link: "https://forbes.com/2025/01/03/future-of-autonomous-ai",
      external: true,
      featured: false,
      tags: ["Media Coverage", "Forbes", "CEO", "Autonomous AI"]
    },
    {
      id: 6,
      title: "New Research Paper: Quantum-Resistant Cryptography in Practice",
      excerpt: "Our research team publishes groundbreaking findings on implementing quantum-resistant cryptographic solutions in real-world applications.",
      category: "Research",
      date: "2024-12-28",
      author: "Zion Tech Group Research Team",
      image: "/api/placeholder/600/400",
      link: "https://ziontechgroup.com/research/quantum-resistant-cryptography",
      external: false,
      featured: false,
      tags: ["Research", "Quantum Computing", "Cryptography", "Security"]
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Announces Expansion to European Market",
      date: "2025-01-12",
      summary: "Strategic expansion to serve European clients with cutting-edge AI and quantum computing solutions.",
      link: "https://ziontechgroup.com/press/european-expansion"
    },
    {
      id: 2,
      title: "Zion Tech Group Launches Quantum Cybersecurity Certification Program",
      date: "2025-01-08",
      summary: "New certification program to train cybersecurity professionals in quantum-resistant security protocols.",
      link: "https://ziontechgroup.com/press/quantum-cybersecurity-certification"
    },
    {
      id: 3,
      title: "Zion Tech Group Reports Record Q4 2024 Results",
      date: "2024-12-20",
      summary: "Strong financial performance driven by increased demand for AI and cybersecurity solutions.",
      link: "https://ziontechgroup.com/press/q4-2024-results"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats and color schemes",
      icon: FileText,
      link: "/media-kit/logos.zip"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of our leadership team",
      icon: Users,
      link: "/media-kit/executives.zip"
    },
    {
      title: "Product Screenshots",
      description: "High-quality images of our technology platforms",
      icon: Code,
      link: "/media-kit/products.zip"
    },
    {
      title: "Company Fact Sheet",
      description: "Key facts and figures about Zion Tech Group",
      icon: FileText,
      link: "/media-kit/fact-sheet.pdf"
    }
  ];

  const categories = ["All", "Product Launch", "Company News", "Awards & Recognition", "Partnerships", "Media Coverage", "Research"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredNews = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

const news: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">news</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default news;
