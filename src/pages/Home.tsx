import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from "@/components/HeroSection";
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";
import { SEO } from "@/components/SEO";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - AI-Powered Technology Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, expert talent, and innovative services. Leading provider of technology solutions for startups to enterprises. Get started today!"
        keywords="AI solutions, technology services, digital transformation, AI consulting, cloud services, cybersecurity, enterprise solutions, micro SAAS, startup technology"
        canonical="https://ziontechgroup.com/"
        ogType="website"
        tags={["AI", "Technology", "Digital Transformation", "Cloud Services", "Cybersecurity"]}
      />

      <HeroSection />
      
      <EnhancedServicesShowcase />
      
      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark/30 to-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team of experts is ready to help you implement the perfect solution for your needs
            </p>
            
            {/* Contact Info */}
            <div className="bg-zion-slate-dark/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/20 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-zion-cyan mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zion-slate-light">
                <div>
                  <p><span className="text-zion-cyan">Phone:</span> +1 302 464 0950</p>
                  <p><span className="text-zion-cyan">Email:</span> kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p><span className="text-zion-cyan">Website:</span> ziontechgroup.com</p>
                  <p><span className="text-zion-cyan">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-neon-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-zion-slate-dark/20 text-white font-semibold rounded-xl hover:bg-zion-slate-dark/30 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;