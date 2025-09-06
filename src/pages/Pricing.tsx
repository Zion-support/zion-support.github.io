import React from 'react';
<<<<<<< HEAD
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
=======

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
            Most Popular
          </span>
        </div>
      )}
<<<<<<< HEAD
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {period && <span className="text-gray-600 ml-1">/{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options to fit businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PricingTier
              name="Startup"
              price="$2,500"
              period="month"
              description="Perfect for small businesses and startups"
              features={[
                "Basic AI integration",
                "Simple SaaS development",
                "Standard support (9-5 EST)",
                "Monthly reporting",
                "Up to 2 team members",
                "Basic security features"
              ]}
              cta="Get Started"
            />

            <PricingTier
              name="Professional"
              price="$7,500"
              period="month"
              description="Ideal for growing businesses"
              features={[
                "Advanced AI solutions",
                "Custom SaaS development",
                "Priority support (24/7)",
                "Weekly reporting & analytics",
                "Up to 10 team members",
                "Advanced security & compliance",
                "API integrations",
                "Custom dashboards"
              ]}
              popular={true}
              cta="Start Free Trial"
            />

            <PricingTier
              name="Enterprise"
              price="Custom"
              description="Tailored solutions for large organizations"
              features={[
                "Full AI transformation",
                "Enterprise SaaS platform",
                "Dedicated account manager",
                "Real-time monitoring",
                "Unlimited team members",
                "Enterprise security suite",
                "Custom integrations",
                "White-label solutions",
                "SLA guarantees"
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Individual Services
            </h2>
            <p className="text-xl text-gray-600">
              Need specific services? We offer flexible à la carte options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">AI Chatbot Development</span>
                  <span className="font-semibold">$5,000 - $15,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Machine Learning Model</span>
                  <span className="font-semibold">$10,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Computer Vision System</span>
                  <span className="font-semibold">$15,000 - $75,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">AI Consulting (per hour)</span>
                  <span className="font-semibold">$200 - $400</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">MVP Development</span>
                  <span className="font-semibold">$25,000 - $75,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Full SaaS Platform</span>
                  <span className="font-semibold">$75,000 - $200,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">API Development</span>
                  <span className="font-semibold">$5,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monthly Maintenance</span>
                  <span className="font-semibold">$2,000 - $10,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Cloud Migration</span>
                  <span className="font-semibold">$10,000 - $100,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">DevOps Setup</span>
                  <span className="font-semibold">$15,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Security Audit</span>
                  <span className="font-semibold">$5,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Managed IT (per month)</span>
                  <span className="font-semibold">$3,000 - $15,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Technical Architecture Review</span>
                  <span className="font-semibold">$2,500 - $10,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Digital Transformation Strategy</span>
                  <span className="font-semibold">$10,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">Technology Due Diligence</span>
                  <span className="font-semibold">$15,000 - $75,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">CTO as a Service (monthly)</span>
                  <span className="font-semibold">$8,000 - $20,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pricing FAQ
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you determine project pricing?
              </h3>
              <p className="text-gray-600">
                We base our pricing on project complexity, timeline, required expertise, and ongoing support needs. 
                Every project receives a detailed estimate after our initial consultation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment options including milestone-based payments for projects 
                and monthly billing for ongoing services. We work with you to find a payment structure that fits your budget.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in ongoing support?
              </h3>
              <p className="text-gray-600">
                Our support includes bug fixes, security updates, performance monitoring, backup management, 
                and technical assistance. Enterprise clients also receive dedicated account management and SLA guarantees.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can change your plan at any time. Upgrades take effect immediately, 
                while downgrades take effect at your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us for a free consultation and custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Call Us: +1 302 464 0950
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
=======
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry - ${name} Plan`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
        </p>
      </section>

      {/* AI Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI solutions with transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="AI Starter"
            price="$2,500"
            period="per project"
            description="Perfect for small businesses getting started with AI"
            features={[
              "Basic AI implementation",
              "Custom model training",
              "API integration",
              "Email support",
              "30-day warranty"
            ]}
            popular={false}
          />
          <PricingCard
            name="AI Professional"
            price="$7,500"
            period="per project"
            description="Ideal for growing businesses with complex AI needs"
            features={[
              "Advanced AI models",
              "Custom development",
              "Integration support",
              "Priority support",
              "90-day warranty",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="AI Enterprise"
            price="$25,000"
            period="per project"
            description="Complete AI solution for large organizations"
            features={[
              "Custom AI development",
              "Dedicated team",
              "White-label options",
              "24/7 support",
              "1-year warranty",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Development</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete micro SaaS solutions with transparent pricing and fast delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Solo SaaS"
            price="$15,000"
            period="one-time"
            description="Perfect for individual entrepreneurs"
            features={[
              "Basic SaaS platform",
              "User authentication",
              "Payment integration",
              "Basic analytics",
              "Mobile responsive",
              "3-month support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Business SaaS"
            price="$35,000"
            period="one-time"
            description="Ideal for small to medium businesses"
            features={[
              "Advanced SaaS platform",
              "Multi-tenant architecture",
              "Advanced analytics",
              "API development",
              "Admin dashboard",
              "6-month support"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise SaaS"
            price="$75,000"
            period="one-time"
            description="Complete solution for large organizations"
            features={[
              "Custom SaaS platform",
              "White-label options",
              "Advanced security",
              "Custom integrations",
              "Dedicated support",
              "12-month support"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions with flexible pricing options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="IT Support"
            price="$2,500"
            period="per month"
            description="Basic IT support and maintenance"
            features={[
              "24/7 monitoring",
              "Basic maintenance",
              "Email support",
              "Security updates",
              "Backup management"
            ]}
            popular={false}
          />
          <PricingCard
            name="IT Management"
            price="$5,000"
            period="per month"
            description="Complete IT management solution"
            features={[
              "Full IT management",
              "Priority support",
              "Advanced security",
              "Cloud migration",
              "Performance optimization"
            ]}
            popular={true}
          />
          <PricingCard
            name="IT Enterprise"
            price="$15,000"
            period="per month"
            description="Enterprise-grade IT solutions"
            features={[
              "Dedicated IT team",
              "Custom solutions",
              "Advanced security",
              "Disaster recovery",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer custom solutions tailored to your specific needs.
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
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Pricing;
=======
}
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
