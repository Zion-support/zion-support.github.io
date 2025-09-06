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
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
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
