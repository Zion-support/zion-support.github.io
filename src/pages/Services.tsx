import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FooterNewsletter from '../components/FooterNewsletter';
import { Button } from '../components/ui/button';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlight?: boolean;
}

const serviceCategories = [
  {
    icon: '🧠',
    title: 'AI Services',
    description: 'Harness the power of Artificial Intelligence for automation, data analysis, and predictive insights.',
    link: '/services/ai-services',
  },
  {
    icon: '💻',
    title: 'IT Solutions',
    description: 'Robust IT infrastructure, managed services, and strategic consulting to keep your business running smoothly.',
    link: '/services/it-services',
  },
  {
    icon: '🚀',
    title: 'Micro SaaS',
    description: 'Develop and deploy specialized, scalable software-as-a-service applications for niche markets.',
    link: '/services/micro-saas',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Comprehensive security audits, threat protection, and compliance solutions to safeguard your digital assets.',
    link: '/services/cybersecurity',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Expert guidance for cloud migration, optimization, and management across leading platforms.',
    link: '/services/cloud-solutions',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Build engaging and high-performance mobile applications for iOS, Android, and cross-platform.',
    link: '/services/mobile-development',
  },
];

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$49/month',
    features: ['Essential IT Support', 'Basic AI Tools', 'Standard Security', 'Email Support'],
    buttonText: 'Choose Basic',
    buttonLink: '/contact?plan=basic',
  },
  {
    name: 'Pro',
    price: '$199/month',
    features: ['Advanced IT Management', 'Custom AI Solutions', 'Enhanced Cybersecurity', '24/7 Priority Support', 'Cloud Integration'],
    buttonText: 'Choose Pro',
    buttonLink: '/contact?plan=pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    features: ['Dedicated IT Team', 'Full-Scale AI Implementation', 'Advanced Threat Intelligence', 'On-site Support', 'Custom Micro SaaS'],
    buttonText: 'Contact for Quote',
    buttonLink: '/contact?plan=enterprise',
  },
];

const testimonials = [
  {
    quote: "Zion Tech Group's AI services revolutionized our data processing. Truly exceptional!",
    author: "Alex P., Data Solutions Inc.",
    rating: 5,
  },
  {
    quote: "The IT support is incredibly responsive and knowledgeable. Our systems have never been more stable.",
    author: "Maria S., Global Logistics",
    rating: 5,
  },
  {
    quote: "Their Micro SaaS offering was exactly what we needed to streamline our niche operations.",
    author: "David L., Niche Innovations",
    rating: 4,
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 text-center bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our Comprehensive Services
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Delivering innovative AI, robust IT, and scalable Micro SaaS solutions to drive your business forward.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-700 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Explore Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Choose a plan that best fits your business needs, from essential support to full-scale enterprise solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`p-8 rounded-lg shadow-lg transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                <h3 className="text-3xl font-bold mb-4">{tier.name}</h3>
                <p className={`text-5xl font-extrabold mb-6 ${tier.highlight ? 'text-white' : 'text-primary'}`}>
                  {tier.price}
                </p>
                <ul className="text-left mb-8 space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className={`w-6 h-6 mr-2 ${tier.highlight ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={tier.buttonLink}>
                  <Button
                    className={`w-full py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-white text-blue-700 hover:bg-gray-200'
                        : 'bg-primary hover:bg-primary-dark text-white'
                    }`}
                  >
                    {tier.buttonText}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-pink-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Elevate Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss your unique requirements and discover how we can help you succeed.
          </motion.p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-gray-200 px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer Newsletter */}
      <FooterNewsletter />
    </div>
  );
};

export default Services;