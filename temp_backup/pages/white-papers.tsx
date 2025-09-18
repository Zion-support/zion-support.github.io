import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink 
} from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: A Comprehensive Guide",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "Artificial Intelligence",
    description: "Explore how artificial intelligence is transforming enterprise operations and what it means for your business.",
    downloadCount: 1250
  },
  {
    id: 2,
    title: "Cloud Migration Strategies: Best Practices and Pitfalls",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cloud Computing",
    description: "Learn the essential strategies for successful cloud migration and avoid common mistakes.",
    downloadCount: 980
  },
  {
    id: 3,
    title: "Cybersecurity in the Digital Age: Protecting Your Assets",
    author: "Emily Johnson",
    date: "2024-01-05",
    category: "Cybersecurity",
    description: "Comprehensive guide to modern cybersecurity threats and how to protect your organization.",
    downloadCount: 1500
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Insights",
    author: "David Kim",
    date: "2023-12-20",
    category: "Data Analytics",
    description: "Discover how to leverage data analytics to drive business decisions and growth.",
    downloadCount: 750
  }
];

export default function WhitePapersPage() {
=======
import { Helmet } from 'react-helmet-async';

const white-papers: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>white-papers | Zion Tech Group</title>
        <meta name="description" content="white-papers - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">white-papers</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default white-papers;
