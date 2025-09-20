import React from "react"
import { SEO     } from "../../components/SEO";
import { Cloud, Code, Zap, Shield, BarChart3, ArrowRight, CheckCircle, Star, Users, Globe, Server, Database, Lock, RefreshCw, GitBranch, Docker, Kubernetes     } from "lucide-react";
import { Link     } from "react-router-dom";
export default function CloudDevOps() {
  const services = [
  {
  na,
  m: e: 'Cloud Infrastructure',ic,
  o: n: Cloud,descripti,
  o: n: 'Scalable and secure cloud infrastructure design and implementation',featur,
  e: s: [
  'Multi-cloud architecture designAWS, Azure, and GCP expertise'
        'Infrastructure as Code (IaC)Auto-scaling and load balancing'
        'High availability and disaster recoveryCost optimization strategies'
]
      benefi,
  t: s: [
  '99.9% uptime guarantee50% cost reduction'
        'Instant scalabilityEnhanced security posture'
]
      colo,
  r: 'from-blue-500 to-cyan-500'
},
  {
  na,
  m: e: 'DevOps Automation',ic,
  o: n: Code,descripti,
  o: n: 'Streamline development and operations with intelligent automation',featur,
  e: s: [
  'CI/CD pipeline automationInfrastructure automation'
        'Testing and deployment automationMonitoring and alerting'
        'Performance optimizationSecurity automation'
]
      benefi,
  t: s: [
  '10x faster deploymentsReduced human error'
        'Improved collaborationFaster time to market'
]
      colo,
  r: 'from-green-500 to-emerald-500'
},
  {
  na,
  m: e: 'Container Orchestration',ic,
  o: n: Docker,descripti,
  o: n: 'Modern containerization and orchestration solutions',featur,
  e: s: [
  'Docker containerizationKubernetes orchestration'
        'Microservices architectureService mesh implementation'
        'Container securityMonitoring and logging'
]
      benefi,
  t: s: [
  'Improved resource utilizationFaster application deployment'
        'Better scalabilityEnhanced portability'
]
      colo,
  r: 'from-purple-500 to-pink-500'
},
  {
  na,
  m: e: 'Security & Compliance',ic,
  o: n: Shield,descripti,
  o: n: 'Comprehensive security and compliance solutions',featur,
  e: s: [
  'Identity and access managementNetwork security'
        'Data encryptionCompliance frameworks'
        'Security monitoringIncident response'
]
      benefi,
  t: s: [
  'Enhanced security postureRegulatory compliance'
        'Reduced security risks24/7 threat monitoring'
]
      colo,
  r: 'from-red-500 to-orange-500'
},
  {
  na,
  m: e: 'Monitoring & Analytics',ic,
  o: n: BarChart3,descripti,
  o: n: 'Real-time monitoring and analytics for optimal performance',featur,
  e: s: [
  'Application performance monitoringInfrastructure monitoring'
        'Log aggregation and analysisReal-time alerting'
        'Performance optimizationCapacity planning'
]
      benefi,
  t: s: [
  'Proactive issue detectionImproved performance'
        'Better resource planningReduced downtime'
]
      colo,
  r: 'from-indigo-500 to-purple-500'
},
  {
  na,
  m: e: 'Database Management',ic,
  o: n: Database,descripti,
  o: n: 'Scalable and reliable database solutions',featur,
  e: s: [
  'Database design and optimizationHigh availability setup'
        'Backup and recoveryPerformance tuning'
        'Security hardeningMigration services'
]
      benefi,
  t: s: [
  'Improved performanceEnhanced reliability'
        'Better data securityReduced maintenance overhead'
]
      colo,
  r: 'from-emerald-500 to-green-500'
},
  ]
  const technologies = [
  { na,
  m: e: 'AWS', ic,
  o: n: Cloud, catego,
  r: y: 'Cloud Platform' },
  },
  { na,
  m: e: 'Azure', ic,
  o: n: Cloud, catego,
  r: y: 'Cloud Platform' },
  },
  { na,
  m: e: 'Google Cloud', ic,
  o: n: Cloud, catego,
  r: y: 'Cloud Platform' },
  },
  { na,
  m: e: 'Docker', ic,
  o: n: Docker, catego,
  r: y: 'Containerization' },
  },
  { na,
  m: e: 'Kubernetes', ic,
  o: n: Kubernetes, catego,
  r: y: 'Orchestration' },
  },
  { na,
  m: e: 'Terraform', ic,
  o: n: Code, catego,
  r: y: 'Infrastructure' },
  },
  { na,
  m: e: 'Jenkins', ic,
  o: n: RefreshCw, catego,
  r: y: 'CI/CD' },
  },
  { na,
  m: e: 'GitLab CI', ic,
  o: n: GitBranch, catego,
  r: y: 'CI/CD' },
  },
  { na,
  m: e: 'Ansible', ic,
  o: n: Zap, catego,
  r: y: 'Automation' },
  },
  { na,
  m: e: 'Prometheus', ic,
  o: n: BarChart3, catego,
  r: y: 'Monitoring' },
  },
  { na,
  m: e: 'Grafana', ic,
  o: n: BarChart3, catego,
  r: y: 'Visualization' },
  },
  { na,
  m: e: 'ELK Stack', ic,
  o: n: BarChart3, catego,
  r: y: 'Logging' },
  },
  ]
  const caseStudies = [
  {
  compa,
  n: y: 'TechCorp Inc.',indust,
  r: y: 'E-commerce',challen,
  g: e: 'Legacy infrastructure causing 40% downtime during peak seasons',soluti,
  o: n: 'Migrated to AWS with auto-scaling and implemented CI/CD pipelines',resul,
  t: s: [
  '99.9% uptime achieved60% reduction in infrastructure costs'
        'Deployment time reduced from 4 hours to 15 minutes'
],
  },
  {
  compa,
  n: y: 'HealthPlus Systems',indust,
  r: y: 'Healthcare',challen,
  g: e: 'Manual deployment processes causing delays and errors',soluti,
  o: n: 'Implemented containerization with Kubernetes and automated CI/CD',resul,
  t: s: [
  'Zero deployment errors90% faster deployment cycles'
        'Improved compliance and security'
],
  },
  {
  compa,
  n: y: 'StartupXYZ',indust,
  r: y: 'SaaS',challen,
  g: e: 'Need for rapid scaling and cost optimization',soluti,
  o: n: 'Multi-cloud strategy with infrastructure as code and monitoring',resul,
  t: s: [
  '10x faster scaling capability50% cost optimization'
        'Improved developer productivity'
],
  },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Cloud DevOps Services - Zion Tech Group"
        description="Transform your infrastructure with our comprehensive Cloud DevOps services including cloud migration, automation, containerization, and security solutions."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Cloud;
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent"> DevOps</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your digital transformation with modern cloud infrastructure, intelligent automation,
  and DevOps best practices that drive efficiency and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/request-quote"
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600,
  hove: r: from-blue-600,
  hove: r:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-blue-500/25";"
              >
                Get Cloud Assessment;
              </Link>
              <Link;
                to="/contact"
                className="className="px-8 py-4 border border-blue-400 text-blue-400,
  hove: r:bg-blue-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Schedule Consultation;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cloud DevOps Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end solutions that;
              modernize your infrastructure and accelerate your development cycles.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {services.map((service, index) => (
  <div;
                key={service.name},
  }
                className="className="group p-8 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-cyan-400">Key,
  Feature: s:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature},
  }
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-green-400">Key,
  Benefit: s:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {benefit},
  }
                      </li>
                    ))}
                  </ul>
                </div>

                <Link;
                  to="/request-quote"
                  className="className="inline-flex items-center gap-2 text-blue-400,
  hove: r:text-blue-300 font-medium transition-colors";"
                >
                  Learn More;
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and tools to deliver robust, scalable, and secure solutions.
            </p>
          </div>

          <div className="grid grid-cols-2,
  m: d: grid-cols-4 l,
  g:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
  <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-xl flex items-center justify-center group-hov,
  e: r:bg-slate-700 transition-colors duration-300">
                  <tech.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've transformed organizations with our Cloud DevOps solutions;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
  <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-sm text-blue-400 mb-1">{study.industry}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Challen,
  g: e:</h4>
                    <p className="text-sm text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Soluti,
  o: n:</h4>
                    <p className="text-sm text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Resul,
  t: s:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {result},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Cloud DevOps Process;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful cloud transformation and DevOps implementation;
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-8">
            {[
  {
  ste,
  p: '01',tit,
  l: e: 'Assessment & Planning',descripti,
  o: n: 'Evaluate current infrastructure and plan migration strategy',ic,
  o: n: BarChart3;
},
  {
  st,
  e: p: '02',tit,
  l: e: 'Design & Architecture',descripti,
  o: n: 'Design scalable cloud architecture and DevOps workflows',ic,
  o: n: Code;
},
  {
  st,
  e: p: '03',tit,
  l: e: 'Implementation',descripti,
  o: n: 'Execute migration and implement automation tools',ic,
  o: n: Zap;
},
  {
  st,
  e: p: '04',tit,
  l: e: 'Optimization',descripti,
  o: n: 'Monitor performance and continuously optimize',ic,
  o: n: RefreshCw;
},
  ].map((phase, index) => (
  <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {phase.step},
  }
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our Cloud DevOps solutions can modernize your infrastructure;
              accelerate your development cycles, and drive operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/request-quote"
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600,
  hove: r: from-blue-600,
  hove: r:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-blue-500/25";"
              >
                Get Started Today;
              </Link>
              <Link;
                to="/contact"
                className="className="px-8 py-4 border border-blue-400 text-blue-400,
  hove: r:bg-blue-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Schedule Free Consultation;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
