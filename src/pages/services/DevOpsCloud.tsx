import React from 'react';
import SEOHead from "@/components/SEOHead";
import Link from 'next/link';
import { Check, Cloud, Zap, Shield, Database, Users, Target, Activity, Server, Globe, Cpu, GitBranch } from 'lucide-react';

export default function DevOpsCloudServices() {
  const devopsServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Strategy',
      description: 'Comprehensive cloud migration services with multi-cloud strategy and cost optimization.',
      price: 'From $8,500/project',
      marketPrice: '$7,000 - $25,000/project',
      features: [
        'Cloud readiness assessment',
        'Multi-cloud strategy planning',
        'Migration roadmap development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Performance benchmarking'
      ],
      benefits: [
        'Reduced infrastructure costs by 30-50%',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery',
        'Better resource utilization'
      ]
    },
    {
      icon: Zap,
      title: 'CI/CD Pipeline Development',
      description: 'Automated continuous integration and deployment pipelines for faster, reliable software delivery.',
      price: 'From $6,500/project',
      marketPrice: '$5,500 - $18,000/project',
      features: [
        'Automated build and test pipelines',
        'Deployment automation',
        'Environment management',
        'Rollback and recovery',
        'Pipeline monitoring and alerts',
        'Security scanning integration'
      ],
      benefits: [
        'Faster time to market',
        'Reduced deployment errors',
        'Improved code quality',
        'Enhanced team productivity'
      ]
    },
    {
      icon: Shield,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automated infrastructure provisioning and management using modern IaC tools and practices.',
      price: 'From $5,500/project',
      marketPrice: '$4,500 - $15,000/project',
      features: [
        'Terraform and CloudFormation',
        'Ansible and Puppet automation',
        'Infrastructure versioning',
        'Environment consistency',
        'Automated scaling policies',
        'Cost monitoring and alerts'
      ],
      benefits: [
        'Consistent infrastructure deployment',
        'Reduced manual configuration errors',
        'Faster environment provisioning',
        'Better cost control and visibility'
      ]
    },
    {
      icon: Database,
      title: 'Container Orchestration & Kubernetes',
      description: 'Enterprise-grade container management and orchestration with Kubernetes and Docker.',
      price: 'From $7,500/project',
      marketPrice: '$6,500 - $20,000/project',
      features: [
        'Kubernetes cluster design',
        'Container security and scanning',
        'Auto-scaling and load balancing',
        'Service mesh implementation',
        'Monitoring and logging',
        'Backup and disaster recovery'
      ],
      benefits: [
        'Improved application scalability',
        'Better resource utilization',
        'Enhanced deployment flexibility',
        'Reduced operational overhead'
      ]
    },
    {
      icon: Users,
      title: 'DevOps Consulting & Training',
      description: 'Strategic DevOps consulting and comprehensive team training for organizational transformation.',
      price: 'From $4,500/month',
      marketPrice: '$3,500 - $12,000/month',
      features: [
        'DevOps maturity assessment',
        'Process optimization',
        'Team structure recommendations',
        'Tool selection and implementation',
        'Best practices training',
        'Change management support'
      ],
      benefits: [
        'Improved development velocity',
        'Better team collaboration',
        'Reduced operational costs',
        'Enhanced software quality'
      ]
    },
    {
      icon: Server,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and observability solutions for modern applications.',
      price: 'From $4,800/month',
      marketPrice: '$4,000 - $12,000/month',
      features: [
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Centralized logging and analysis',
        'Real-time alerting',
        'Custom dashboards',
        'Capacity planning insights'
      ],
      benefits: [
        'Proactive issue detection',
        'Improved system reliability',
        'Better user experience',
        'Data-driven optimization'
      ]
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      services: 'EC2, S3, Lambda, RDS, EKS',
      strengths: 'Market leader, extensive services',
      pricing: 'Competitive, pay-as-you-use'
    },
    {
      name: 'Microsoft Azure',
      services: 'Virtual Machines, Blob Storage, Functions, AKS',
      strengths: 'Enterprise integration, hybrid cloud',
      pricing: 'Enterprise discounts, reserved instances'
    },
    {
      name: 'Google Cloud Platform (GCP)',
      services: 'Compute Engine, Cloud Storage, Cloud Functions, GKE',
      strengths: 'AI/ML capabilities, global network',
      pricing: 'Sustained use discounts, committed use'
    },
    {
      name: 'Multi-Cloud Strategy',
      services: 'Cross-platform orchestration, hybrid solutions',
      strengths: 'Vendor independence, best-of-breed',
      pricing: 'Optimized for each workload'
    }
  ];

  const industries = [
    'Financial Services & Banking',
    'Healthcare & Life Sciences',
    'E-commerce & Retail',
    'Media & Entertainment',
    'Manufacturing & Logistics',
    'Education & Research',
    'Government & Public Sector',
    'Startups & Scale-ups'
  ];

  const technologies = [
    'AWS, Azure, GCP',
    'Kubernetes & Docker',
    'Terraform & Ansible',
    'Jenkins & GitLab CI',
    'Prometheus & Grafana',
    'ELK Stack & Splunk',
    'Istio & Linkerd',
    'Helm & ArgoCD'
  ];

  const benefits = [
    'Faster software delivery and deployment',
    'Improved system reliability and uptime',
    'Reduced infrastructure costs',
    'Enhanced security and compliance',
    'Better scalability and performance',
    'Improved team collaboration and productivity'
  ];

  const useCases = [
    {
      title: 'Microservices Migration',
      description: 'Legacy monolithic application migration to microservices architecture with container orchestration.',
      roi: '40-60% cost reduction',
      implementation: '20-32 weeks'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Implementation of multi-cloud architecture for improved resilience and cost optimization.',
      roi: '25-45% cost savings',
      implementation: '16-24 weeks'
    },
    {
      title: 'DevOps Transformation',
      description: 'Complete organizational DevOps transformation with process optimization and tool implementation.',
      roi: '30-50% efficiency improvement',
      implementation: '24-36 weeks'
    },
    {
      title: 'Cloud-Native Development',
      description: 'Modern cloud-native application development with CI/CD and infrastructure automation.',
      roi: '35-55% faster delivery',
      implementation: '12-20 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="DevOps & Cloud Services - Zion Tech Group" 
        description="Comprehensive DevOps consulting, cloud migration, CI/CD pipelines, and infrastructure automation services for modern software delivery."
        keywords="DevOps services, cloud migration, CI/CD, Kubernetes, infrastructure as code, cloud consulting, automation"
        canonical="https://ziontechgroup.com/services/devops-cloud"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            DevOps & Cloud Services
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Accelerate your software delivery with modern DevOps practices and cloud-native solutions. 
            From migration to automation, we help you build faster, more reliable applications.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DevOps & Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end DevOps and cloud solutions that help businesses modernize their software delivery 
              processes and infrastructure for better performance and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-orange-600">{service.price}</p>
                  <p className="text-sm text-gray-500">Market: {service.marketPrice}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-600">
                      <span className="font-medium">✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Providers We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across major cloud platforms to help you choose the right solution for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <div key={provider.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{provider.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Key Services:</span>
                    <p className="text-gray-600">{provider.services}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Strengths:</span>
                    <p className="text-gray-600">{provider.strengths}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Pricing:</span>
                    <p className="text-gray-600">{provider.pricing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World DevOps Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven DevOps solutions that deliver measurable business value across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Expected ROI</div>
                    <div className="text-lg font-semibold text-orange-600">{useCase.roi}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Implementation</div>
                    <div className="text-lg font-semibold text-blue-600">{useCase.implementation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our DevOps Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our DevOps expertise combined with cloud-native technologies enables us to deliver 
                solutions that provide real business value and competitive advantage.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free DevOps Assessment</h3>
              <p className="text-gray-600 mb-6">
                Discover how DevOps can transform your business with our comprehensive 
                DevOps maturity assessment and strategy session.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment Value:</span>
                  <span className="font-semibold text-gray-900">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Cost:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block w-full text-center"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our DevOps and cloud solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors border border-gray-200">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge DevOps and cloud technologies to build robust, scalable, 
              and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center hover:bg-orange-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our DevOps Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful DevOps transformations that drive business value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Evaluate current DevOps maturity
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600 text-sm">
                  Develop DevOps roadmap and goals
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Build and deploy DevOps tools
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Training</h3>
                <p className="text-gray-600 text-sm">
                  Enable teams with new processes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Continuous improvement and scaling
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 text-sm">
                  Ongoing maintenance and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Delivery?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our DevOps experts help you build faster, more reliable applications 
            with modern cloud-native practices and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your DevOps Journey
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}