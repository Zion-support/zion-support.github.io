import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Building2,;
  Building, ;
  Rocket, ;
  Shield, ;
  Heart, ;
  TrendingUp, ;
  Users, ;
  Globe, ;
  Factory, ;
  City,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Zap,;
  Brain,;
  Cloud,;
  Cpu,;
  Lock,;
  Database,;
  Network,;
  BarChart3,;
  Target,;
  Award,;
  Code,;
  Truck,;
  Server,;
  Smartphone,;
  Eye,;
  Leaf,;
  Scale,;
  Car,;
  Home,;
  ShoppingCart,;
  Factory as FactoryIcon,;
  City as CityIcon;
} from "lucide-react"
import { Link } from "react-router-dom"
export default function Solutions() {;
  const solutions = [;
    {;
      name: 'Enterprise Solutions',icon: Building2,description: 'Large-scale business transformations and digital modernization',features: [;
        'AI-Powered Process AutomationEnterprise Data Analytics'
        'Cloud Migration & OptimizationDigital Twin Implementation',;
        'Cybersecurity & ComplianceLegacy System Modernization'
      ],;
      benefits: [;
        '50% reduction in operational costs3x faster decision making'
        '99.9% system uptimeEnhanced security posture'
      ],;
      color: 'from-blue-500 to-cyan-500',featured: true;
    };
    {;
      name: 'SMB Solutions',icon: Building,description: 'Small to medium business growth and efficiency solutions',features: [;
        'AI-Powered Marketing AutomationCustomer Relationship Management'
        'Business Intelligence DashboardsProcess Optimization',;
        'Cloud Infrastructure SetupCybersecurity Protection'
      ],;
      benefits: [;
        '40% increase in productivityImproved customer retention'
        'Reduced IT overheadScalable growth foundation'
      ],;
      color: 'from-purple-500 to-pink-500',featured: false;
    };
    {;
      name: 'Startup Solutions',icon: Rocket,description: 'Accelerate growth and build scalable foundations',features: [;
        'MVP Development & LaunchAI-Powered Growth Hacking'
        'Scalable Infrastructure DesignData-Driven Decision Making',;
        'Customer Acquisition AutomationInvestor-Ready Analytics'
      ],;
      benefits: [;
        '10x faster market validation3x user engagement increase'
        'Reduced time to marketInvestor-ready metrics'
      ],;
      color: 'from-green-500 to-emerald-500',featured: false;
    };
    {;
      name: 'Healthcare Solutions',icon: Heart,description: 'AI-powered healthcare innovation and patient care',features: [;
        'Medical Image AnalysisPatient Data Analytics'
        'Predictive DiagnosticsHealthcare Process Automation',;
        'Compliance & SecurityTelemedicine Platforms'
      ],;
      benefits: [;
        '30% improvement in diagnostic accuracy40% faster patient processing'
        'Enhanced patient outcomesReduced healthcare costs'
      ],;
      color: 'from-red-500 to-pink-500',featured: false;
    };
    {;
      name: 'Manufacturing Solutions',icon: Factory,description: 'Smart manufacturing and Industry 4.0 transformation',features: [;
        'IoT Device IntegrationPredictive Maintenance'
        'Quality Control AutomationSupply Chain Optimization',;
        'Digital Twin ImplementationEnergy Efficiency Management'
      ],;
      benefits: [;
        '25% reduction in downtime20% improvement in quality'
        '15% energy cost savingsReal-time production insights'
      ],;
      color: 'from-orange-500 to-red-500',featured: false;
    };
    {;
      name: 'Financial Services',icon: Shield,description: 'Secure, compliant, and innovative financial technology',;
      features: [;
        'Fraud Detection & PreventionRisk Assessment & Management'
        'Regulatory ComplianceCustomer Experience Optimization',;
        'Blockchain IntegrationReal-time Analytics'
      ],;
      benefits: [;
        '99.9% fraud detection accuracy60% faster risk assessment'
        'Full regulatory complianceEnhanced customer trust'
      ],;
      color: 'from-indigo-500 to-purple-500',featured: false;
    };
  ];
  const industrySolutions = [;
    {;
      title: 'Retail & E-commerce',description: 'Digital transformation for modern retail',icon: ShoppingCart,color: 'from-purple-500 to-pink-500',solutions: ['AI-Powered PersonalizationInventory Optimization', 'Customer AnalyticsOmnichannel Integration']
    },;
    {;
      title: 'Transportation & Logistics',description: 'Smart logistics and fleet management',icon: Truck,color: 'from-blue-500 to-cyan-500',solutions: ['Route OptimizationFleet Tracking', 'Predictive MaintenanceSupply Chain Analytics']
    },;
    {;
      title: 'Real Estate',description: 'Property technology and market insights',icon: Home,color: 'from-green-500 to-emerald-500',solutions: ['Market AnalysisProperty Valuation', 'Investment AnalyticsCustomer Relationship Management']
    },;
    {;
      title: 'Education',description: 'EdTech solutions for modern learning',icon: Brain,color: 'from-orange-500 to-red-500',solutions: ['Learning AnalyticsPersonalized Education', 'Administrative AutomationStudent Engagement']
    };
  ],;

  const technologyStack = [;
    {;
      category: 'AI & Machine Learning',technologies: ['TensorFlowPyTorch', 'Scikit-learnOpenAI GPT', 'Computer VisionNLP'],;
      icon: Brain,color: 'from-blue-500 to-cyan-500'
    };
    {;
      category: 'Cloud & Infrastructure',technologies: ['AWSAzure', 'Google CloudKubernetes', 'DockerTerraform'],;
      icon: Cloud,color: 'from-green-500 to-emerald-500'
    };
    {;
      category: 'Data & Analytics',technologies: ['Apache SparkHadoop', 'TableauPower BI', 'PythonR'],;
      icon: Database,color: 'from-purple-500 to-pink-500'
    };
    {;
      category: 'Security & Compliance',technologies: ['Zero TrustSOC 2', 'GDPRHIPAA', 'Penetration TestingSecurity Monitoring'],;
      icon: Lock,color: 'from-red-500 to-orange-500'
    };
  ];
  const successMetrics = [;
    {;
      metric: '500+',label: 'Projects Delivered',description: 'Successfully completed projects across industries',icon: CheckCircle,color: 'from-green-500 to-emerald-500'
    };
    {;
      metric: '99.9%',label: 'Client Satisfaction',description: 'Consistently high client satisfaction ratings',icon: Star,color: 'from-yellow-500 to-orange-500'
    };
    {;
      metric: '50%',label: 'Cost Reduction',description: 'Average cost savings for our clients',icon: TrendingUp,color: 'from-blue-500 to-cyan-500'
    };
    {;
      metric: '3x',label: 'Performance Boost',description: 'Average performance improvement achieved',icon: Zap,color: 'from-purple-500 to-pink-500'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for businesses of all sizes. From AI-powered automation to cloud infrastructure, we help organizations transform and grow."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></[^>]*>
        <div className="container-responsive relative z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Technology;
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Solutions</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your business with our comprehensive technology solutions. From AI-powered ;
              automation to cloud infrastructure, we help organizations of all sizes innovate and grow.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/case-studies"
                className="[^"]*"
              >;
                View Case Studies;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        {/* Background Elements */};
        <div className="absolute inset-0 -z-10">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Solutions Grid */};
      <section className="py-20">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Tailored technology solutions designed to meet the unique needs of your business;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {solutions.map((solution, index) => (;
              <motion.div
                key={solution.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${;
                  solution.featured ;
                    ? 'bg-gradient-to-br from-slate-800 to-slate-700 ring-2 ring-blue-400/50' ;
                    : 'bg-slate-800/50 hover:bg-slate-800'
                }`};
              >;
                {solution.featured && (;&& (; (
                  <div className="absolute -top-3 -right-3">;
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">;
                      <[^>]*/>
                      Featured;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-2xl font-bold text-white mb-3">{solution.name}</[^>]*>
                <p className="text-gray-300 mb-6">{solution.description}</[^>]*>
                ;
                <div className="space-y-4 mb-6">;
                  <div>;
                    <h4 className="font-semibold text-white text-sm mb-2">Key Features:</[^>]*>
                    <ul className="space-y-2">;
                      {solution.features.slice(0, 3).map((feature, idx) => (;
                        <li key={idx} className="flex items-center text-gray-300 text-sm">;
                          <[^>]*/>
                          {feature};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div>;
                    <h4 className="font-semibold text-white text-sm mb-2">Key Benefits:</[^>]*>
                    <ul className="space-y-2">;
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (;
                        <li key={idx} className="flex items-center text-gray-300 text-sm">;
                          <[^>]*/>
                          {benefit};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Learn More;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Industry Solutions */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry-Specific Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Specialized solutions designed for the unique challenges of your industry;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {industrySolutions.map((solution, index) => (;
              <motion.div
                key={solution.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">;
                  {solution.title};
                </[^>]*>
                <p className="text-gray-300 mb-6">{solution.description}</[^>]*>
                ;
                <div className="space-y-2 mb-6">;
                  {solution.solutions.map((item, idx) => (;
                    <div key={idx} className="flex items-center text-gray-300 text-sm">;
                      <[^>]*/>
                      {item};
                    </[^>]*>
                  ))};
                </[^>]*>
                ;
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Get Industry Solution;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technology Stack */};
      <section className="py-20">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Our Technology Stack;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Built with cutting-edge technologies to deliver robust, scalable, and secure solutions;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {technologyStack.map((tech, index) => (;
              <motion.div
                key={tech.category};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</[^>]*>
                ;
                <div className="space-y-2">;
                  {tech.technologies.map((technology, idx) => (;
                    <div key={idx} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-2 rounded-lg">;
                      {technology};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Success Metrics */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Proven Results;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our track record speaks for itself - delivering measurable value to businesses across industries;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {successMetrics.map((metric, index) => (;
              <motion.div
                key={metric.label};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                ;
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</[^>]*>
                <div className="text-lg font-semibold text-blue-400 mb-2">{metric.label}</[^>]*>
                <p className="text-gray-400 text-sm">{metric.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container-responsive text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Let's discuss how our technology solutions can help you achieve your business goals. ;
              Our experts are ready to create a customized plan for your organization.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/case-studies"
                className="[^"]*"
              >;
                View Success Stories;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};