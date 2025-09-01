import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Cpu,
  Network,
  Wifi,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Cloud as CloudIcon
} from 'lucide-react';

const CloudMigration: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% through cloud-native optimization and pay-as-you-use pricing models."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with advanced threat detection, encryption, and compliance frameworks."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Scale resources up or down automatically based on demand, ensuring optimal performance and cost efficiency."
    },
    {
      icon: Activity,
      title: "Performance",
      description: "Improved application performance with global CDN, load balancing, and optimized infrastructure."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Enable remote work and team collaboration with cloud-based tools and secure access."
    },
    {
      icon: CheckCircle,
      title: "Disaster Recovery",
      description: "Built-in backup, replication, and disaster recovery capabilities for business continuity."
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of current infrastructure, applications, and migration strategy development.",
      icon: BarChart3
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design cloud-native architecture optimized for performance, security, and cost efficiency.",
      icon: Building2
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Phased migration with minimal downtime, data integrity validation, and performance monitoring.",
      icon: Server
    },
    {
      step: "04",
      title: "Optimization",
      description: "Performance tuning, cost optimization, and continuous improvement of cloud infrastructure.",
      icon: TrendingUp
    }
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy",
      description: "Comprehensive cloud adoption strategy and roadmap development.",
      features: ["Multi-cloud strategy", "Cost analysis", "Risk assessment", "Timeline planning"]
    },
    {
      icon: Server,
      title: "Infrastructure Migration",
      description: "Seamless migration of servers, databases, and applications to the cloud.",
      features: ["Lift and shift", "Re-platforming", "Re-architecting", "Data migration"]
    },
    {
      icon: Database,
      title: "Database Migration",
      description: "Specialized database migration services with minimal downtime.",
      features: ["Schema conversion", "Data validation", "Performance tuning", "Backup strategies"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Security-first approach with compliance frameworks and best practices.",
      features: ["Identity management", "Encryption", "Compliance audit", "Security monitoring"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services to help your business transition to the cloud with minimal disruption. Get cost optimization, enhanced security, and improved performance." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/cloud-migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Cloud className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration
              <span className="block text-blue-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with expert cloud migration services. Reduce costs, enhance security, 
              and unlock new capabilities with our proven migration methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/20 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Cloud Migration?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cloud migration delivers tangible benefits that transform your business operations 
                and drive competitive advantage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven, step-by-step approach that ensures successful cloud migration with minimal disruption.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="p-3 bg-blue-500/20 rounded-lg w-fit mx-auto">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration services tailored to your business needs and objectives.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <service.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts guide you through a successful cloud migration journey. 
              Get started with a free consultation and assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600/20 transition-colors font-semibold">
                Download Migration Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigration;