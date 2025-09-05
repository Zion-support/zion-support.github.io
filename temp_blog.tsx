import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "AI & Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Learn how to build and scale micro SaaS applications for modern businesses.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "SaaS Development",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for SMBs",
    excerpt: "Essential security measures every small business should implement.",
    author: "Emily Johnson",
    date: "2024-01-05",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies",
    excerpt: "A complete guide to successfully migrating your infrastructure to the cloud.",
    author: "David Kim",
    date: "2023-12-28",
    category: "Cloud Computing",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Data Analytics in Digital Transformation",
    excerpt: "How data analytics is driving successful digital transformation initiatives.",
    author: "Lisa Wang",
    date: "2023-12-20",
    category: "Data Analytics",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "The Rise of Edge Computing",
    excerpt: "Understanding edge computing and its impact on modern applications.",
    author: "James Wilson",
    date: "2023-12-15",
    category: "Edge Computing",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  }
];

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends"
    >
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
      </Head>
