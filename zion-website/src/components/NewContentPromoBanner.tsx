'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Icons removed to avoid dependency issues in this environment

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper';
  featured: boolean;
  readTime: string;
  date: string;
  category: string;
}

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const NewContentPromoBanner = ({
  variant = 'default',
  maxItems = 4,
  autoRotate = true,
  rotationInterval = 5000
}: NewContentPromoBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: 'KG-2025',
      title: 'Enterprise Knowledge Graphs 2025: Unified Search & Reasoning',
      description: 'Design and operate enterprise knowledge graphs for semantic search, RAG, and governed reasoning.',
      href: '/blog/ai-2025-enterprise-knowledge-graphs',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'Knowledge'
    },
    {
      id: 'CS-graph-search-2025',
      title: 'Enterprise Graph Search: 21% Case Resolution Lift',
      description: 'Case study: Graph + hybrid search improved first‑contact resolution by 21% and cut AHT by 18%.',
      href: '/case-studies/ai-2025-enterprise-graph-search-impact',
      type: 'case-study',
      featured: true,
      readTime: '9 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: 'AIFINOPS-2025',
      title: 'AI FinOps Automation 2025: Budgets, Guardrails, and Savings',
      description: 'Automate AI cloud cost governance with real‑time budgets, routing, right‑sizing, and guardrails.',
      href: '/blog/ai-2025-ai-finops-automation',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Optimization'
    },
    {
      id: 'SALES-PLAYBOOKS-2025',
      title: 'Agentic Sales Playbooks 2025: From Leads to Closed Won',
      description: 'Design reliable, compliant agentic sales workflows across prospecting, demos, proposals, and renewals.',
      href: '/blog/ai-2025-agentic-sales-playbooks',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'Operations'
    },
    {
      id: 'B-plat-2025',
      title: 'AI Platform Engineering Blueprint 2025',
      description: 'Governance, evals, routing, observability, and cost controls for enterprise AI platforms.',
      href: '/blog/ai-2025-ai-platform-engineering-blueprint',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Platforms'
    },
    {
      id: 'CS-c360-2025',
      title: 'Customer 360 AI Platform: 23% Cross-Sell Lift',
      description: 'Case study: Unified profiles, uplift modeling, and guardrailed copilots lifted cross-sell by 23%.',
      href: '/case-studies/ai-2025-customer-360-platform-impact',
      type: 'case-study',
      featured: true,
      readTime: '11 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: 'CS-llm-cost-2025',
      title: 'LLM Inference Cost Reduction: 38% Savings (2025)',
      description: 'Case study: Quantization, KV cache, and batching cut cost by 38% and p95 by 27%.',
      href: '/case-studies/ai-2025-llm-inference-cost-reduction',
      type: 'case-study',
      featured: true,
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '70',
      title: 'Enterprise RAG Platforms 2025: Architecture, Quality, and Ops',
      description: 'Design, evaluate, and operate enterprise-grade RAG platforms with quality, safety, and budgets.',
      href: '/blog/ai-2025-enterprise-rag-platforms',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      category: 'RAG'
    },
    {
      id: '73',
      title: 'Enterprise Retrieval Playbook 2025: Reliable RAG at Scale',
      description: 'Corpus curation, chunking, embeddings, hybrid search, routing, evals, and governance for production RAG.',
      href: '/blog/ai-2025-enterprise-retrieval-playbook',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'RAG'
    },
    {
      id: '71',
      title: 'AI Governance 2025: Policy-as-Code and Runtime Enforcement',
      description: 'From policy docs to enforced guardrails across datasets, prompts, tools, and agents.',
      href: '/blog/ai-2025-governance-policy-as-code',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Governance'
    },
    {
      id: '74',
      title: 'Production Prompt Engineering 2025: Patterns that Scale',
      description: 'Schema-first prompts, tool calling, retrieval orchestration, evals, and guardrails for reliability.',
      href: '/blog/ai-2025-production-prompt-engineering',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'Advanced AI'
    },
    {
      id: '75',
      title: 'AI Governance 2025: Operational Playbook for Enterprises',
      description: 'Practical operating model: policies, evaluations, review boards, and runtime enforcement.',
      href: '/blog/ai-2025-ai-governance-operational-playbook',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Governance'
    },
    {
      id: '72',
      title: 'Agent Fleet Management 2025: Reliability, Safety, and Cost',
      description: 'Operate large fleets of AI agents with SLAs: scheduling, guardrails, telemetry, and budgets.',
      href: '/blog/ai-2025-agent-fleet-management',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'Agents'
    },
    {
      id: '54',
      title: 'MLOps Best Practices 2025: Shipping Reliable AI',
      description: 'Versioning, automated evaluations, guardrails, and budget-aware controls for production AI.',
      href: '/blog/ai-2025-mlops-best-practices',
      type: 'blog',
      featured: true,
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      category: 'MLOps'
    },
    {
      id: '55',
      title: 'Vector Databases Benchmarks 2025',
      description: 'A pragmatic comparison focusing on recall, latency tails, scale, and ops tradeoffs.',
      href: '/blog/ai-2025-vector-databases-benchmarks',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'RAG'
    },
    {
      id: '56',
      title: 'Secure Agent Architectures (2025)',
      description: 'Blueprint for secure enterprise agent architectures with policy-as-code, guardrails, and SLAs.',
      href: '/blog/ai-2025-secure-agent-architectures',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'AI Security'
    },
    {
      id: '57',
      title: 'AI Customer Analytics: 19% Revenue Uplift',
      description: 'Case study: Personalization, uplift modeling, and agentic orchestration delivered +19% revenue.',
      href: '/case-studies/ai-2025-customer-analytics-impact',
      type: 'case-study',
      featured: true,
      readTime: '12 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '50',
      title: 'Machine Learning Model Optimization: Advanced Techniques',
      description: 'Hyperparameter tuning, compression, quantization, and serving patterns for faster, cheaper ML.',
      href: '/blog/ml-model-optimization',
      type: 'blog',
      featured: true,
      readTime: '24 min read',
      date: 'Sep 12, 2025',
      category: 'Machine Learning'
    },
    {
      id: '51',
      title: 'AI Ethics and Responsible Development: A Framework',
      description: 'Practical framework for fairness, transparency, and accountability without slowing delivery.',
      href: '/blog/ai-ethics-framework',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'AI Ethics'
    },
    {
      id: '52',
      title: 'Edge AI Deployment: Bringing Intelligence to the Edge',
      description: 'Deploy AI at the edge with optimized runtimes, secure updates, and hybrid routing.',
      href: '/blog/edge-ai-deployment',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Edge Computing'
    },
    {
      id: '53',
      title: 'AI in Financial Services: Risk Management Case Study',
      description: '40% fraud detection improvement and 25% fewer false positives with AI‑powered risk.',
      href: '/case-studies/ai-financial-risk-management',
      type: 'case-study',
      featured: true,
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '54',
      title: 'Cloud Cost Optimization for AI & Data Workloads (2025)',
      description: 'Cut inference, training, and data costs with right-sizing, autoscaling, routing, and caching.',
      href: '/blog/ai-2025-cloud-cost-optimization',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'Optimization'
    },
    {
      id: '55',
      title: 'Agent Safety Red-Teaming (2025): Methods & Tooling',
      description: 'Attack libraries, automated harnesses, and policy guardrails for resilient agent systems.',
      href: '/blog/ai-2025-agent-safety-red-teaming',
      type: 'blog',
      featured: true,
      readTime: '21 min read',
      date: 'Sep 12, 2025',
      category: 'AI Safety'
    },
    {
      id: '40',
      title: 'AI 2026 Outlook: Enterprise Agent Roadmap',
      description: 'Where enterprise AI agents are headed in 2026: architectures, SLAs, governance, and edge.',
      href: '/blog/ai-2026-enterprise-agent-roadmap',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Strategy'
    },
    {
      id: '36',
      title: 'Agentic Data Pipelines in Production (2025)',
      description: 'Design reliable, cost‑efficient, and safe agentic data pipelines from ingestion to orchestration.',
      href: '/blog/ai-2025-agentic-data-pipelines',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Data Platforms'
    },
    {
      id: '35',
      title: 'Evaluations in Production (2025): Shipping with Confidence',
      description: 'Online and offline evaluations for AI quality, safety, and cost. Pipelines and metrics.',
      href: '/blog/ai-2025-evaluations-in-production',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      category: 'Evaluation'
    },
    {
      id: '33',
      title: 'Reliable Realtime Agents in 2025: Architecture & SLAs',
      description: 'Production blueprint for realtime agents with reliability SLAs, safety guardrails, and observability.',
      href: '/blog/ai-2025-reliable-realtime-agents',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      category: 'Reliability'
    },
    {
      id: '31',
      title: 'Agentic Vendor Management 2025: From Intake to Renewal',
      description: 'Automate diligence, smarter negotiations, and renewal guardrails with agentic workflows.',
      href: '/blog/ai-2025-agentic-vendor-management',
      type: 'blog',
      featured: true,
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      category: 'Operations'
    },
    {
      id: '32',
      title: 'Agentic Vendor Management: 32% Faster Cycle Time',
      description: 'Case study: Automated intake, risk, and negotiation cut cycle time by 32% and exceptions by 21%.',
      href: '/case-studies/ai-2025-vendor-management-impact',
      type: 'case-study',
      featured: true,
      readTime: '9 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '16',
      title: 'Agent Marketplaces in 2025: Strategy & Governance',
      description: 'Strategy, reference architectures, monetization, and safety for enterprise agent marketplaces.',
      href: '/blog/ai-2025-agent-marketplaces-strategy',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Strategy'
    },
    {
      id: '15',
      title: 'AI Agent Observability in 2025: Telemetry & Guardrails',
      description: 'End-to-end visibility for agents with structured telemetry, distributed tracing, inline evals, and policy guardrails.',
      href: '/blog/ai-2025-ai-agent-observability',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Agents'
    },
    {
      id: '26',
      title: 'Agentic Supply Planning 2025: Forecasting-to-Fulfillment with AI',
      description: 'Design agentic workflows across demand sensing, planning, and fulfillment to cut expedites and boost OTIF.',
      href: '/blog/ai-2025-agentic-supply-planning',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Supply Chain'
    },
    {
      id: '27',
      title: 'Agentic Supply Planning: 27% Expedites Cut, +6 pts OTIF',
      description: 'Case study: Agentic planning tied forecasting to fulfillment, reducing expedites and improving service.',
      href: '/case-studies/ai-2025-agentic-supply-planning-impact',
      type: 'case-study',
      featured: true,
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '24',
      title: 'AI Supply Chain Resilience 2025: Forecasting, Orchestration, and Risk Controls',
      description: 'Resilient supply chains with AI: demand sensing, dynamic safety stock, and agent workflows.',
      href: '/blog/ai-2025-ai-supply-chain-resilience',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Supply Chain'
    },
    {
      id: '25',
      title: 'AI Supply Chain Orchestration: 27% Expedited Costs Reduced, +6 pts OTIF',
      description: 'Case study: forecasting + optimization + agentic workflows cut costs and improved service.',
      href: '/case-studies/ai-2025-supply-chain-orchestration-impact',
      type: 'case-study',
      featured: true,
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '23',
      title: 'Privacy-Preserving AI in Production (2025)',
      description: 'Ship AI with differential privacy, federated learning, and privacy-by-design guardrails.',
      href: '/blog/ai-2025-privacy-preserving-ai',
      type: 'blog',
      featured: true,
      readTime: '17 min read',
      date: 'Sep 12, 2025',
      category: 'Privacy'
    },
    {
      id: '19',
      title: 'Data Quality for RAG in Production (2025)',
      description: 'Operator guide to curating, evaluating, and governing high-quality knowledge for reliable RAG.',
      href: '/blog/ai-2025-data-quality-rag',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'RAG'
    },
    {
      id: '21',
      title: 'AI Agents for IT Operations 2025: Incident Response and SLO Automation',
      description: 'Reduce toil with AIOps agents for triage, diagnostics, remediation, and SLO-aware controls.',
      href: '/blog/ai-2025-agents-for-it-ops',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'AIOps'
    },
    {
      id: '22',
      title: 'IT Ops Automation with AI Agents: 41% MTTR Reduction',
      description: 'Case study: AI agents automated runbooks and cut MTTR by 41% at a global SaaS platform.',
      href: '/case-studies/ai-2025-it-ops-automation-impact',
      type: 'case-study',
      featured: true,
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '18',
      title: 'Running AI Agents on Kubernetes: Reliability, Cost, and Observability',
      description: 'Production patterns for scheduling, scaling, guardrails, and tracing AI agents on K8s.',
      href: '/blog/ai-2025-agents-on-kubernetes',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'Reliability'
    },
    {
      id: '28',
      title: 'Operational Excellence with AI Agents (2025)',
      description: 'Guide to agentic workflows that cut MTTR by 41% and improve OTIF by 6 points.',
      href: '/blog/ai-2025-operational-excellence-agents',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'Operations'
    },
    {
      id: '29',
      title: 'Operations Excellence Impact: 41% MTTR Reduction',
      description: 'Case study: Agentic ops automated runbooks, reduced expedites 27%, +6 pts OTIF.',
      href: '/case-studies/ai-2025-operations-excellence-impact',
      type: 'case-study',
      featured: true,
      readTime: '10 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production Guide',
      description: 'Master production-ready RAG systems with advanced patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Advanced AI'
    },
    {
      id: '13',
      title: 'Reinforcement Learning in Production: 2025 Patterns',
      description: 'Offline RL, simulators, safety constraints, and guardrails to ship RL safely.',
      href: '/blog/ai-2025-reinforcement-learning-production-patterns',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      category: 'Advanced AI'
    },
    {
      id: '14',
      title: 'Evaluating LLM Agents in 2025: Methods and Metrics',
      description: 'Task success, tool correctness, policy adherence, and automated pipelines.',
      href: '/blog/ai-2025-evaluation-llm-agents',
      type: 'blog',
      featured: true,
      readTime: '22 min read',
      date: 'Sep 12, 2025',
      category: 'AI Safety'
    },
    {
      id: '11',
      title: 'Trust & Safety Guardrails 2025: Practical Patterns',
      description: 'Design, evaluate, and enforce AI trust & safety guardrails with policy-as-code and runtime controls.',
      href: '/blog/ai-2025-trust-safety-guardrails',
      type: 'blog',
      featured: true,
      readTime: '16 min read',
      date: 'Sep 12, 2025',
      category: 'AI Safety'
    },
    {
      id: '12',
      title: 'Financial Services Copilots: 42% Faster Handling',
      description: 'Case study: Tier‑1 bank launched compliant AI copilots across ops, cutting handling time by 42%.',
      href: '/case-studies/ai-2025-financial-services-copilots',
      type: 'case-study',
      featured: true,
      readTime: '12 min read',
      date: 'Sep 12, 2025',
      category: 'Case Study'
    },
    {
      id: '9',
      title: 'Foundation Models Cost Optimization 2025',
      description: 'Cut inference and training costs with quantization, distillation, caching, and smart routing in 2025 stacks.',
      href: '/blog/ai-2025-foundation-models-cost-optimization',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Optimization'
    },
    {
      id: '10',
      title: 'AI-Powered Customer Service: 90% Satisfaction',
      description: 'Case study: 90% CSAT and 60% cost reduction through AI assistants, deflection, and smart escalation.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      featured: true,
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      category: 'Case Study'
    },
    {
      id: '0',
      title: 'Edge AI Agents 2025: Running Autonomous Agents in Production',
      description: 'Architectures, safety, and observability for deploying autonomous agents on edge devices with low latency and high reliability.',
      href: '/blog/ai-2025-edge-agents-in-production',
      type: 'blog',
      featured: true,
      readTime: '21 min read',
      date: 'Sep 05, 2025',
      category: 'Edge AI'
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025',
      description: 'Explore how vision, voice, and text integration is revolutionizing human-computer interaction and AI applications.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      featured: true,
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      category: 'Multimodal AI'
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Discover quantum computing breakthroughs in machine learning, enabling exponential speedups for complex problems.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      featured: true,
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      category: 'Quantum AI'
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings and 300% productivity gains.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      featured: true,
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      category: 'Case Study'
    },
    {
      id: '5',
      title: 'Building Scalable AI Infrastructure',
      description: 'Learn how to design and implement AI infrastructure that scales with your business needs.',
      href: '/blog/scalable-ai-infrastructure',
      type: 'blog',
      featured: false,
      readTime: '20 min read',
      date: 'Jan 25, 2025',
      category: 'AI Infrastructure'
    },
    {
      id: '6',
      title: 'Enterprise AI Security Best Practices',
      description: 'Comprehensive guide to securing AI systems in enterprise environments.',
      href: '/blog/enterprise-ai-security',
      type: 'blog',
      featured: false,
      readTime: '18 min read',
      date: 'Jan 22, 2025',
      category: 'AI Security'
    },
    {
      id: '7',
      title: 'AI Customer Service: 90% Satisfaction',
      description: 'How an e-commerce company achieved 90% customer satisfaction with AI-powered service.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      featured: false,
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      category: 'Case Study'
    },
    {
      id: '8',
      title: 'AI in Healthcare: Trends and Opportunities',
      description: 'Explore the latest trends in AI healthcare applications and personalized medicine.',
      href: '/blog/ai-healthcare-trends-2025',
      type: 'blog',
      featured: false,
      readTime: '22 min read',
      date: 'Jan 18, 2025',
      category: 'AI Healthcare'
    },
    {
      id: '9991',
      title: 'LLM Inference Optimization on GPUs (2025)',
      description: 'Quantization, KV cache strategies, smart batching, and parallelism to cut latency and cost.',
      href: '/blog/ai-2025-llm-inference-optimization-gpus',
      type: 'blog',
      featured: true,
      readTime: '15 min read',
      date: 'Sep 12, 2025',
      category: 'Inference'
    },
    {
      id: '9992',
      title: 'Serverless GenAI Architectures (2025)',
      description: 'Event-driven GenAI with functions, queues, vector DBs, and eval guardrails on AWS/GCP/Azure.',
      href: '/blog/ai-2025-serverless-genai-architectures',
      type: 'blog',
      featured: true,
      readTime: '14 min read',
      date: 'Sep 12, 2025',
      category: 'Architecture'
    }
  ];

  const displayedContent = variant === 'featured' 
    ? newContent.filter(item => item.featured).slice(0, maxItems)
    : newContent.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered && displayedContent.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayedContent.length, rotationInterval, currentIndex]);

  const nextSlide = () => {
    const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? displayedContent.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'whitepaper': return '📄';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'whitepaper': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'minimal') {
    return (
      <section className="py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Content</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedContent.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (displayedContent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {variant === 'featured' ? 'Featured Content' : 'Latest Content'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {variant === 'featured' 
              ? 'Discover our most popular and impactful content, handpicked by our experts.'
              : 'Stay ahead with our latest insights, case studies, and technical guides.'
            }
          </p>
        </div>

        <div className="relative">
          {/* Main Content Display */}
          <div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-96">
              {displayedContent.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                    <div className="h-full flex items-center">
                      <div className="w-1/2 p-12">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{getTypeIcon(item.type)}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                            {item.type.replace('-', ' ').toUpperCase()}
                          </span>
                          {item.featured && (
                            <span className="ml-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-indigo-100 mb-6 line-clamp-3">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-indigo-200 mb-6">
                          <div className="flex items-center">
                            <span className="mr-2">⏱️</span>
                            {item.readTime}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2">🏷️</span>
                            {item.category}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        
                        <Link
                          href={item.href}
                          className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                        >
                          Read More
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                      
                      <div className="w-1/2 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <div className="text-8xl opacity-20">
                          {getTypeIcon(item.type)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            {displayedContent.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-6">
                <div className="flex justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-lg">◀</span>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <span className="text-lg">▶</span>
                  </button>
                </div>
              </div>
            )}

            {/* Dots Indicator */}
            {displayedContent.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {displayedContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {item.readTime}
                    </div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromoBanner;