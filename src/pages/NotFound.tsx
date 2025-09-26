import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Home,;
  ArrowLeft, ;
  ArrowRight, ;
  MessageCircle, ;
  Search, ;
  HelpCircle,;
  Cloud,;
  Shield,;
  Brain,;
  Zap,;
  Users,;
  BarChart3;
} from "lucide-react"
import { SEO } from "../components/SEO"
const popularCategories = [;
  {;
    title: 'AI & Machine Learning',icon: Brain,services: [;
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' };
      { name: 'AI Content Creation', path: '/services/ai-content-creation' };
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity' };
      { name: 'AI Project Management', path: '/services/ai-project-management' };
    ];
  };
  {;
    title: 'Cloud & Infrastructure',icon: Cloud,services: [;
      { name: 'Cloud DevOps', path: '/services/cloud-devops' };
      { name: 'IT Infrastructure', path: '/services/it-infrastructure' };
      { name: 'Digital Twin', path: '/services/digital-twin' };
      { name: 'Micro SaaS Solutions', path: '/services/micro-saas' };
    ];
  };
  {;
    title: 'Cybersecurity',icon: Shield,services: [;
      { name: 'Zero Trust Network', path: '/services/zero-trust-network-access' };
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp' };
      { name: 'Compliance Assistant', path: '/services/ai-compliance-assistant' };
      { name: 'Threat Intelligence', path: '/services/ai-autonomous-threat-intelligence' };
    ];
  };
  {;
    title: 'Emerging Technologies',icon: Zap,services: [;
      { name: 'Quantum Computing', path: '/services/quantum-computing' };
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing' };
      { name: 'Space Technology', path: '/services/space-tech' };
      { name: 'AI Quantum Hybrid', path: '/services/ai-quantum-hybrid-platform' };
    ];
  };
];
export default function NotFound() {;
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Page Not Found - Zion Tech Group"
        description="The page you're looking for doesn't exist. Explore our services or contact our support team for assistance."
        keywords="404, page not found, error, help, support"
        canonical="https://ziontechgroup.com/404"
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>
        ;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            {/* 404 Number */};
            <div className="mb-8">;
              <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-blue-400 leading-none">;
                404;
              </[^>]*>
            </[^>]*>

            {/* Error Message */};
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Page Not Found;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Oops! The page you're looking for doesn't exist. But don't worry, we've got plenty of amazing services to explore.;
            </[^>]*>

            {/* Action Buttons */};
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">;
              <Link;
                to="/"
                className="[^"]*"
              >;
                <[^>]*/>
                Back to Home;
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                <[^>]*/>
                Explore Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Popular Services Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Popular Services You Might Like;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              While you're here, check out some of our most popular services that are transforming businesses.;
            </[^>]*>
          </[^>]*>

          <motion.div
            className="[^"]*"
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8, delay: 0.4 }};
          >;
            {popularCategories.map((category, index) => (;
              <motion.div
                key={category.title};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: 0.1 * index }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white">{category.title}</[^>]*>
                </[^>]*>
                ;
                <div className="space-y-3">;
                  {category.services.map((service, serviceIndex) => (;
                    <Link;
                      key={service.path};
                      to={service.path};
                      className="[^"]*"
                    >;
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">;
                        {service.name};
                      </[^>]*>
                      <[^>]*/>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Help Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6, delay: 0.6 }};
            className="[^"]*"
          >;
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">;
              <h3 className="text-2xl font-semibold text-white mb-4">Still Can't Find What You're Looking For?</[^>]*>
              <p className="text-slate-300 mb-6">;
                Our team is here to help you navigate our services and find the right solution for your needs.;
              </[^>]*>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Contact Support;
                </[^>]*>
                <Link;
                  to="/search"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Search Site;
                </[^>]*>
                <Link;
                  to="/help"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Help Center;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Back Button */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <button;
              onClick={() => window.history.back()};
              className="[^"]*"
            >;
              <[^>]*/>
              Go Back;
            </[^>]*>

            <Link;
              to="/"
              className="[^"]*"
            >;
              <[^>]*/>
              Back to Home;
            </[^>]*>
          </[^>]*>

          {/* Footer Note */};
          <div className="mt-12 pt-8 border-t border-zion-slate-light">;
            <p className="text-sm text-zion-slate-light">;
              If you believe this is an error, please{' '};
              <Link to="/contact" className="text-zion-cyan hover: underline">;
                contact our support team;
              </[^>]*>
              .;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
