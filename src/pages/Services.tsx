<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Shield, Brain, Cloud, Code } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, pricing, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-4">
        <p className="text-lg font-semibold text-blue-600 mb-4">{pricing}</p>
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Empowering your business with cutting-edge AI, Micro SaaS, and IT solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-lg text-gray-600">Successful Projects</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">$2B+</div>
            <p className="text-lg text-gray-600">Combined Market Value</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-lg text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Explore Our Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              title="AI Services & Solutions"
              description="Leverage AI for intelligent automation, data analysis, and enhanced decision-making."
              features={[
                "LLM & Generative AI",
                "RAG systems",
                "AI Agents & Automation",
                "Computer Vision & NLP",
                "Predictive Analytics"
              ]}
              pricing="Custom pricing"
              link="/services/ai-services"
            />

            <ServiceCard
              icon={<Zap className="w-6 h-6 text-purple-600" />}
              title="Micro SaaS Solutions"
              description="End-to-end product development with billing, auth, analytics and growth optimization."
              features={[
                "Custom SaaS development",
                "Payment integration (Stripe)",
                "User authentication & authorization",
                "Analytics dashboards",
                "API development & integration"
              ]}
              pricing="Starting at $2,500/month"
              link="/services/micro-saas"
            />

            <ServiceCard
              icon={<Shield className="w-6 h-6 text-green-600" />}
              title="IT Services & Consulting"
              description="Robust IT infrastructure, cloud migration, DevOps, and cybersecurity solutions."
              features={[
                "Cloud Migration (AWS, Azure, GCP)",
                "DevOps & SRE",
                "Cybersecurity Hardening",
                "IT Infrastructure Management",
                "Cost Optimization"
              ]}
              pricing="Starting at $3,000/month"
              link="/services/it-services"
            />

            <ServiceCard
              icon={<Users className="w-6 h-6 text-orange-600" />}
              title="FinTech Solutions"
              description="Innovative financial technology platforms for secure and efficient transactions."
              features={[
                "Payment Gateways",
                "Blockchain & Crypto Solutions",
                "Fraud Detection AI",
                "Algorithmic Trading",
                "Regulatory Compliance"
              ]}
              pricing="Custom pricing"
              link="/services/fintech"
            />

            <ServiceCard
              icon={<Cloud className="w-6 h-6 text-teal-600" />}
              title="Cloud & DevOps"
              description="Scalable cloud infrastructure and automated deployment pipelines."
              features={[
                "Multi-cloud Architecture",
                "Kubernetes Orchestration",
                "CI/CD Pipelines",
                "Infrastructure as Code",
                "Monitoring & Logging"
              ]}
              pricing="Starting at $2,000/month"
              link="/services/cloud-devops"
            />

            <ServiceCard
              icon={<Code className="w-6 h-6 text-indigo-600" />}
              title="Custom Development"
              description="Tailored software solutions built to your specific business requirements."
              features={[
                "Web & Mobile Applications",
                "API Development",
                "Database Design",
                "Integration Services",
                "Legacy System Modernization"
              ]}
              pricing="Starting at $5,000/project"
              link="/services/custom-development"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                We leverage the latest technologies and frameworks to deliver state-of-the-art solutions.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced developers and consultants brings deep expertise to every project.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                With 500+ successful projects, we have a track record of delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us today to discuss your project and discover how our expertise can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
=======
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
}) {
  return (
    <Link
      to={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {price && (
        <div className="text-lg font-semibold text-blue-600 mb-2">{price}</div>
      )}
      <div className="text-sm text-blue-600 font-medium">
        Learn More →
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive technology solutions to accelerate your digital transformation. 
          From AI development to micro SaaS products, we deliver enterprise-grade solutions that drive real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured AI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revolutionary AI-powered solutions that transform how businesses operate and compete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI-Powered CRM Platform"
            href="/services/ai-powered-crm"
            description="Revolutionary CRM with predictive analytics, automated lead scoring, and intelligent customer insights"
            bullets={[
              "Predictive lead scoring (95% accuracy)",
              "Intelligent automation",
              "Advanced analytics dashboard",
              "AI chat assistant",
              "Personalized engagement"
            ]}
            icon="🎯"
            price="From $99/month"
          />
          <ServiceCard
            title="Smart Invoice Generator"
            href="/services/smart-invoice-generator"
            description="AI-powered invoice automation with data extraction, smart categorization, and payment tracking"
            bullets={[
              "AI data extraction (99.2% accuracy)",
              "Smart categorization",
              "Payment tracking & reminders",
              "Financial analytics dashboard",
              "Advanced security & compliance"
            ]}
            icon="💰"
            price="From $29/month"
          />
          <ServiceCard
            title="AI Project Manager"
            href="/services/ai-project-manager"
            description="Intelligent project management with predictive analytics, resource optimization, and risk assessment"
            bullets={[
              "Predictive risk assessment",
              "Smart resource optimization",
              "Intelligent analytics dashboard",
              "Automated task management",
              "AI project assistant"
            ]}
            icon="📊"
            price="From $49/user/month"
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to accelerate your digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="End-to-end product development with billing, auth, analytics and growth optimization"
            icon="🚀"
          />
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making"
            icon="🤖"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
            icon="💻"
          />
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions"
            icon="⛓️"
          />
          <ServiceCard
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Penetration testing, security audits, compliance and incident response"
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Services"
            href="/services/cloud-services"
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP"
            icon="☁️"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
            >
              Email Us
            </a>
          </div>
<<<<<<< HEAD
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
=======
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Services;
=======
<<<<<<< HEAD
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
ursor/automate-test-fix-improve-and-merge-code-48f3
  return (    <>
      <SEO title='Services - Zion Tech Group' /" >'      <div className='min-h-screen bg-white py-20'>'        <div className='max-w-4xl mx-auto px-4'>'          <h1 className='text-4xl font-bold text-gray-900 mb-8'>Services</h1>'          <p className='text-lg text-gray-600'>Content coming soon...</p>'        </div>'      </div>"
</>)}
export default Services""
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
}
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
