
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection.jsx";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";

// Simple placeholder components for missing ones
const NewsletterSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
      <p className="text-lg text-gray-300 mb-8">Subscribe to our newsletter for the latest tech insights and updates.</p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
        />
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing Plans</h2>
      <p className="text-xl text-gray-300 mb-12">Flexible pricing options to fit your business needs</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
          <div key={plan} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <h3 className="text-2xl font-bold text-white mb-4">{plan}</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">
              ${index === 0 ? '999' : index === 1 ? '2,999' : '5,999'}/month
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechSolutionsSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Solutions</h2>
      <p className="text-xl text-gray-300 mb-12">Cutting-edge technologies for modern businesses</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['AI & ML', 'Cloud', 'Security', 'DevOps'].map((tech, index) => (
          <div key={tech} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 border border-slate-500">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">{tech}</h3>
            <p className="text-gray-300 text-sm">Advanced solutions for your business needs</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
      <p className="text-xl text-gray-300 mb-12">Real results from real clients</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, index) => (
          <div key={item} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-white mb-4">Client Success {item}</h3>
            <p className="text-gray-300 mb-4">Amazing results achieved through our innovative solutions.</p>
            <div className="text-2xl font-bold text-cyan-400">+150% ROI</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamExpertiseSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Team</h2>
      <p className="text-xl text-gray-300 mb-12">Certified professionals with years of experience</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['AI Specialists', 'Cloud Engineers', 'Security Experts'].map((role, index) => (
          <div key={role} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-semibold text-white mb-4">{role}</h3>
            <p className="text-gray-300">Highly skilled professionals ready to help your business succeed.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GlobalPresenceSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Global Presence</h2>
      <p className="text-xl text-gray-300 mb-12">Serving clients worldwide with localized solutions</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['North America', 'Europe', 'Asia', 'Global'].map((region, index) => (
          <div key={region} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 border border-slate-500">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-lg font-semibold text-white mb-2">{region}</h3>
            <p className="text-gray-300 text-sm">Local expertise, global reach</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InnovationResearchSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Innovation & Research</h2>
      <p className="text-xl text-gray-300 mb-12">Pushing the boundaries of what's possible</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['R&D Lab', 'Innovation Hub'].map((item, index) => (
          <div key={item} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-white mb-4">{item}</h3>
            <p className="text-gray-300">Cutting-edge research and development for tomorrow's solutions.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClientSuccessStoriesSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h2>
      <p className="text-xl text-gray-300 mb-12">Transforming businesses through technology</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Enterprise Client', 'Startup Success'].map((story, index) => (
          <div key={story} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-4">{story}</h3>
            <p className="text-gray-300">Real success stories from our valued clients.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologyStackSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Stack</h2>
      <p className="text-xl text-gray-300 mb-12">Modern technologies for modern solutions</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['React', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
          <div key={tech} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 border border-slate-500">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">{tech}</h3>
            <p className="text-gray-300 text-sm">Cutting-edge technology</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SecurityComplianceSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Security & Compliance</h2>
      <p className="text-xl text-gray-300 mb-12">Enterprise-grade security for your peace of mind</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['SOC 2', 'GDPR', 'HIPAA'].map((compliance, index) => (
          <div key={compliance} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-white mb-4">{compliance}</h3>
            <p className="text-gray-300">Full compliance and security standards.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIServicesShowcase = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Services Showcase</h2>
      <p className="text-xl text-gray-300 mb-12">Revolutionary AI solutions for your business</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Machine Learning', 'Natural Language Processing', 'Computer Vision'].map((service, index) => (
          <div key={service} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-4">{service}</h3>
            <p className="text-gray-300">Advanced AI capabilities for modern businesses.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InteractiveTestimonials = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
      <p className="text-xl text-gray-300 mb-12">What our clients say about us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Client A', 'Client B'].map((client, index) => (
          <div key={client} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-4">{client}</h3>
            <p className="text-gray-300">"Zion Tech Group transformed our business with innovative solutions."</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EnhancedInnovativeServicesShowcase = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Innovative Services</h2>
      <p className="text-xl text-gray-300 mb-12">Cutting-edge solutions for tomorrow's challenges</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Service A', 'Service B', 'Service C'].map((service, index) => (
          <div key={service} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-4">{service}</h3>
            <p className="text-gray-300">Innovative solutions for modern businesses.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EnhancedPricingComparison = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing Comparison</h2>
      <p className="text-xl text-gray-300 mb-12">Compare our plans and choose the best fit</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
          <div key={plan} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-white mb-4">{plan}</h3>
            <p className="text-gray-300">Comprehensive pricing options for every business size.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UltimateServicesShowcase2027 = () => (
  <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">2027 Services</h2>
      <p className="text-xl text-gray-300 mb-12">Future-ready solutions for tomorrow's challenges</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Future A', 'Future B', 'Future C'].map((service, index) => (
          <div key={service} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 border border-slate-500">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-4">{service}</h3>
            <p className="text-gray-300">Next-generation solutions for the future.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - AI, Cloud, and Cybersecurity Solutions"
        description="Transform your business with autonomous AI systems, cloud-native platforms, and secure infrastructure. Leading technology solutions for modern enterprises."
        keywords={["AI", "Cloud", "Cybersecurity", "Digital Transformation", "Technology Solutions"]}
        ogImage="/og-image.svg"
      />
      
      <HeroSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <QuickAccess />
      <FeatureHighlights />
      <ITServiceRequestHero />
      <NewsletterSection />
      <PricingSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <AIServicesShowcase />
      <InteractiveTestimonials />
      <EnhancedInnovativeServicesShowcase />
      <EnhancedPricingComparison />
      <UltimateServicesShowcase2027 />
      
      <FloatingCTA />
    </>
  );
}
