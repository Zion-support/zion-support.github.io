import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Sparkles,;
  ArrowRight, ;
  CheckCircle, ;
  TrendingUp, ;
  Shield, ;
  Zap,;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  DollarSign,;
  Clock,;
  Users,;
  Target,;
  Rocket;
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { NEW_INNOVATIVE_SERVICES_2025 } from "../data/newInnovativeServices2025"
export default function NewInnovativeServicesShowcase() {;
  const serviceCategories = [;
    {;
      title: "AI & Legal Tech",description: "Revolutionary legal document automation and compliance solutions",icon: Shield,color: "from-blue-500 to-purple-600"
    };
    {;
      title: "AI & Healthcare",description: "Transformative healthcare analytics and clinical decision support",icon: TrendingUp,color: "from-green-500 to-blue-600"
    };
    {;
      title: "AI & FinTech",description: "Advanced trading platforms with intelligent risk management",icon: DollarSign,color: "from-green-500 to-emerald-600"
    };
  ];
  const keyBenefits = [;
    {;
      title: "Cutting-Edge AI Technology",description: "Leverage the latest advances in machine learning, natural language processing, and predictive analytics",;
      icon: Sparkles;
    };
    {;
      title: "Industry-Specific Solutions",description: "Tailored solutions designed for specific industry challenges and regulatory requirements",icon: Target;
    };
    {;
      title: "Proven ROI & Results",description: "Measurable improvements in efficiency, accuracy, and cost savings across all services",;
      icon: TrendingUp;
    };
    {;
      title: "Enterprise-Grade Security",description: "SOC 2, ISO 27001, and industry-specific compliance certifications for maximum security",;
      icon: Shield;
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <SEO ;
        title="New Innovative Services 2025 - Zion Tech Group"
        description="Discover our latest AI-powered innovative services: Legal document automation, healthcare analytics, and financial trading platforms. Transform your business with cutting-edge technology."
      />;

      {/* Hero Section */};
      <section className="relative py-20 sm:py-32 overflow-hidden">;
        <[^>]*/>
        <div className="relative container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-3 bg-purple-500/20 rounded-2xl">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">;
              New Innovative;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Services 2025</[^>]*>
            </[^>]*>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">;
              Discover our latest AI-powered innovative services designed to transform industries ;
              and revolutionize business operations. Experience the future of technology today.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a ;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Quote;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Categories Overview */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Service Categories;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Explore our three main categories of innovative services, each designed to address ;
              specific industry challenges with cutting-edge AI technology.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-3">;
            {serviceCategories.map((category, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-2xl font-bold mb-4">{category.title}</[^>]*>
                <p className="text-slate-300 mb-6">{category.description}</[^>]*>
                <div className="text-sm text-slate-400">;
                  <div className="flex items-center mb-2">;
                    <[^>]*/>
                    AI-Powered Solutions;
                  </[^>]*>
                  <div className="flex items-center mb-2">;
                    <[^>]*/>
                    Industry Expertise;
                  </[^>]*>
                  <div className="flex items-center">;
                    <[^>]*/>
                    Proven Results;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Key Benefits Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Why Choose Our Innovative Services?;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Our services deliver exceptional value through cutting-edge technology;
              industry expertise, and proven results.;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-8 md:grid-cols-2">;
            {keyBenefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: -20 }};
                animate={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</[^>]*>
                <p className="text-slate-300">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Detailed Services Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">;
              Service Details;
            </[^>]*>
            <p className="text-slate-400 max-w-2xl mx-auto">;
              Explore each service in detail with comprehensive information about features;
              pricing, and implementation.;
            </[^>]*>
          </[^>]*>

          <div className="space-y-12">;
            {NEW_INNOVATIVE_SERVICES_2025.map((service, index) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="grid gap-8 lg:grid-cols-2">;
                  <div>;
                    <div className="flex items-center mb-4">;
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">;
                        <[^>]*/>
                      </[^>]*>
                      <div>;
                        <h3 className="text-2xl font-bold">{service.title}</[^>]*>
                        <p className="text-slate-400 text-sm">{service.category} • {service.subcategory}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    ;
                    <p className="text-slate-300 mb-6">{service.description}</[^>]*>
                    ;
                    <div className="grid gap-4 sm:grid-cols-2 mb-6">;
                      <div className="bg-slate-700/30 rounded-lg p-4">;
                        <div className="text-sm text-slate-400 mb-1">Starting Price</[^>]*>
                        <div className="text-2xl font-bold text-green-400">;
                          {service.currency}{service.price.toLocaleString()};
                          <span className="text-sm text-slate-400">/month</[^>]*>
                        </[^>]*>
                      </[^>]*>
                      <div className="bg-slate-700/30 rounded-lg p-4">;
                        <div className="text-sm text-slate-400 mb-1">Expected ROI</[^>]*>
                        <div className="text-2xl font-bold text-blue-400">{service.roi}</[^>]*>
                      </[^>]*>
                    </[^>]*>

                    <div className="flex flex-col sm:flex-row gap-3">;
                      <Link;
                        to={`/services/${service.id.replace(/-/g, '-')}`};
                        className="[^"]*"
                      >;
                        Learn More;
                        <[^>]*/>
                      </[^>]*>
                      <a;
                        href="tel:+13024640950"
                        className="[^"]*"
                      >;
                        <[^>]*/>
                        Call Now;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div>;
                    <h4 className="font-semibold text-lg mb-4 text-purple-400">Key Features</[^>]*>
                    <div className="space-y-3 mb-6">;
                      {service.features.slice(0, 6).map((feature, featureIndex) => (;
                        <div key={featureIndex} className="flex items-start">;
                          <[^>]*/>
                          <span className="text-sm text-slate-300">{feature}</[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>

                    <h4 className="font-semibold text-lg mb-4 text-purple-400">Target Audience</[^>]*>
                    <div className="flex flex-wrap gap-2 mb-6">;
                      {service.targetAudience.slice(0, 4).map((audience, audienceIndex) => (;
                        <span;
                          key={audienceIndex};
                          className="[^"]*"
                        >;
                          {audience};
                        </[^>]*>
                      ))};
                    </[^>]*>

                    <div className="grid gap-3 text-sm">;
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-400">Delivery Time:</[^>]*>
                        <span className="text-slate-300">{service.estimatedDelivery}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-400">Market Size:</[^>]*>
                        <span className="text-slate-300">{service.marketSize}</[^>]*>
                      </[^>]*>
                      <div className="flex items-center justify-between">;
                        <span className="text-slate-400">Support Level:</[^>]*>
                        <span className="text-slate-300 capitalize">{service.supportLevel}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-slate-900/50">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-slate-300 mb-8">;
              Join forward-thinking organizations that have already revolutionized their operations ;
              with our innovative AI-powered services.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <a ;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
              <a ;
                href="mailto:kleber@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Schedule Consultation;
              </[^>]*>
            </[^>]*>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">;
              <h3 className="font-semibold text-lg mb-3">Contact Information</[^>]*>
              <div className="grid gap-3 text-sm text-slate-300">;
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="tel:+13024640950" className="hover:text-purple-300">+1 302 464 0950</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300">kleber@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <span>364 E Main St STE 1008, Middletown DE 19709</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center">;
                  <[^>]*/>
                  <a href="https: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">ziontechgroup.com</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};