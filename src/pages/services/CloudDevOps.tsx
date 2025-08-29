import React from 'react';
<<<<<<< HEAD

export default function CloudDevOps() {
=======
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Cpu, Database, Server, GitBranch, Package, Monitor, BarChart3, Settings, Users, Globe, Lock, RefreshCw, TrendingUp } from 'lucide-react';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance across AWS, Azure, and Google Cloud Platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Container Orchestration',
      description: 'Kubernetes and containerization expertise for scalable microservices architecture',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated deployment pipelines with GitLab, Jenkins, and GitHub Actions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Monitor,
      title: 'Infrastructure Monitoring',
      description: 'Real-time monitoring and alerting with Prometheus, Grafana, and ELK stack',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps practices with automated security scanning and compliance checks',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Managed databases, backups, and disaster recovery solutions',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud infrastructure',
      price: 'From $5,000',
      features: ['Infrastructure assessment', 'Migration planning', 'Data migration', 'Testing & validation']
    },
    {
      title: 'DevOps Implementation',
      description: 'Complete DevOps transformation with modern tools and practices',
      price: 'From $8,000',
      features: ['CI/CD setup', 'Infrastructure as Code', 'Monitoring & logging', 'Team training']
    },
    {
      title: 'Cloud Optimization',
      description: 'Cost optimization and performance tuning for existing cloud infrastructure',
      price: 'From $3,000',
      features: ['Cost analysis', 'Performance optimization', 'Resource scaling', 'Best practices']
    },
    {
      title: '24/7 Managed Services',
      description: 'Round-the-clock monitoring, maintenance, and support',
      price: 'From $2,500/month',
      features: ['Proactive monitoring', 'Incident response', 'Regular maintenance', 'Performance reports']
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, description: 'Amazon Web Services' },
    { name: 'Azure', icon: Cloud, description: 'Microsoft Azure' },
    { name: 'GCP', icon: Cloud, description: 'Google Cloud Platform' },
    { name: 'Kubernetes', icon: Package, description: 'Container orchestration' },
    { name: 'Docker', icon: Package, description: 'Containerization' },
    { name: 'Terraform', icon: Settings, description: 'Infrastructure as Code' }
  ];

>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Cloud & DevOps Services</h1>
      <p className="text-slate-300 max-w-2xl">
        Transform your infrastructure with our comprehensive cloud and DevOps services, 
        helping you scale efficiently and deploy faster.
      </p>
    </div>
  );
}