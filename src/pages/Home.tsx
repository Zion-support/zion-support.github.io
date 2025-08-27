
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Brain, Workflow, Shield, Atom, Cpu } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { ServicesShowcase } from "@/components/ServicesShowcase.tsx";
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: CheckCircle
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: CheckCircle
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: CheckCircle
    }
  ];

  const innovativeServices = [
    {
      title: 'AI Workflow Automation',
      description: 'Transform business operations with intelligent automation that learns and scales',
      price: 'From $299/month',
      path: '/services/ai-workflow-automation',
      icon: Workflow
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention',
      price: 'From $499/month',
      path: '/services/ai-cybersecurity',
      icon: Shield
    },
    {
      title: 'Quantum Computing',
      description: 'Solve complex problems 1000x faster with quantum computing solutions',
      price: 'From $2,999/month',
      path: '/services/quantum-computing-solutions',
      icon: Atom
    },
    {
      title: 'IoT Edge Computing',
      description: 'Process data at the edge and reduce latency by 90%',
      price: 'From $399/month',
      path: '/services/iot-edge-computing',
      icon: Cpu
    }
  ];
