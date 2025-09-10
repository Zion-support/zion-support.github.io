import React from "react"
import { Link, useSearchParams  } from "react-router-dom";
export default function Page() {
,
    {
      id: "ai - sales",
      title: "AI Sales Copilot",
      description: "Intelligent sales optimization platform that enhances sales performance through AI - driven insights, lead scoring, and automated follow-up sequences.",
      url: "/services / ai - sales - copilot",
      type: "service",
      category: "AI Services",
      tags: ["AI", "Sales", "CRM", "Automation", "Lead Generation"],
      relevance: 0.89,
      lastUpdated: "2024 - 11 - 25",
      icon: Users
    },
    // Cloud Services
    {
      id: "cloud - devops",
      title: "Cloud DevOps Platform",
      description: "Comprehensive cloud DevOps solution that automates infrastructure deployment, scaling, and management across multiple cloud providers.",
      url: "/services / cloud - devops",
      type: "service",
      category: "Cloud & Infrastructure",
      tags: ["Cloud", "DevOps", "Automation", "Infrastructure", "AWS", "Azure"],
      relevance: 0.87,
      lastUpdated: "2024 - 11 - 20",
      icon: Cloud
    },
    {
      id: "it - infrastructure",
      title: "IT Infrastructure Management",
      description: "Enterprise - grade IT infrastructure solutions including server management, network optimization, and disaster recovery planning.",
      url: "/services / it - infrastructure",
      type: "service",
      category: "Cloud & Infrastructure",
      tags: ["Infrastructure", "IT", "Enterprise", "Networking", "Security"],
      relevance: 0.84,
      lastUpdated: "2024 - 11 - 18",
      icon: Server
    },
    // Security Services
    {
      id: "ai - cybersecurity",
      title: "AI Cybersecurity Platform",
      description: "Next - generation cybersecurity solution powered by artificial intelligence for advanced threat detection, prevention, and response.",
      url: "/services / ai - cybersecurity - platform",
      type: "service",
      category: "Security & Compliance",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Security", "Compliance"],
      relevance: 0.91,
      lastUpdated: "2024 - 11 - 22",
      icon: Shield,
      featured: true
    },
    {
      id: "zero - trust",
      title: "Zero Trust Network Access",
      description: "Modern security architecture that implements zero - trust principles for enhanced network security and access control.",
      url: "/services / zero - trust - network - access",
      type: "service",
      category: "Security & Compliance",
      tags: ["Zero Trust", "Security", "Network", "Access Control", "Compliance"],
      relevance: 0.86,
      lastUpdated: "2024 - 11 - 15",
      icon: Lock
    },
    // Quantum Computing
    {
      id: "quantum - computing",
      title: "Quantum Computing Solutions",
      description: "Cutting - edge quantum computing services for optimization problems, cryptography, and scientific simulations.",
      url: "/services / quantum - computing",
      type: "service",
      category: "Quantum Computing",
      tags: ["Quantum Computing", "Optimization", "Cryptography", "AI", "Research"],
      relevance: 0.88,
      lastUpdated: "2024 - 11 - 10",
      icon: Atom
    },
    // Blog Posts
    {
      id: "ai - trends - 2024",
      title: "AI Trends to Watch in 2024",
      description: "Explore the latest artificial intelligence trends that will shape the technology landscape in 2024 and beyond.",
      url: "/blog / ai - trends - 2024",
      type: "blog",
      category: "AI & Technology",
      tags: ["AI", "Trends", "Technology", "2024", "Innovation"],
      relevance: 0.82,
      lastUpdated: "2024 - 12 - 01",
      icon: BookOpen
    },
    {
      id: "cloud - migration - guide",
      title: "Complete Guide to Cloud Migration",
      description: "A comprehensive guide to migrating your infrastructure to the cloud, including best practices and common pitfalls.",
      url: "/blog / cloud - migration - guide",
      type: "blog",
      category: "Cloud & Infrastructure",
      tags: ["Cloud Migration", "Guide", "Best Practices", "Infrastructure"],
      relevance: 0.79,
      lastUpdated: "2024 - 11 - 28",
      icon: Cloud
    },
    // Case Studies
    {
      id: "healthcare - ai - case - study",
      title: "AI Transformation in Healthcare",
      description: "How a leading healthcare provider leveraged AI to improve patient outcomes and operational efficiency.",
      url: "/case - studies / healthcare - ai - transformation",
      type: "case - study",
      category: "Healthcare",
      tags: ["AI", "Healthcare", "Case Study", "Transformation", "Patient Care"],
      relevance: 0.85,
      lastUpdated: "2024 - 11 - 20",
      icon: FileText
    }
  ];
  const filterOptions = [{ id: "ai - services", name: "AI Services", icon: Brain, count: 0 },
    { id: "cloud - infrastructure", name: "Cloud & Infrastructure", icon: Cloud, count: 0 },
    { id: "security", name: "Security & Compliance", icon: Shield, count: 0 },
    { id: "quantum", name: "Quantum Computing", icon: Atom, count: 0 },
    { id: "iot", name: "IoT & Edge Computing", icon: Network, count: 0 },
    { id: "blog", name: "Blog Posts", icon: BookOpen, count: 0 },
    { id: "case - studies", name: "Case Studies", icon: FileText, count: 0 },
    { id: "documentation", name: "Documentation", icon: Code, count: 0 }