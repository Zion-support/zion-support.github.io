<<<<<<< HEAD
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Partners() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';

export default function Partners() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
			<SEO title="Partners - Zion Tech Group" description="Our strategic partners and alliances." />
			<div className="container-responsive text-white">
				<h1 className="text-4xl font-bold mb-4">Partners</h1>
				<p className="text-zion-slate-light max-w-2xl">We collaborate with industry leaders to deliver end-to-end solutions.</p>
			</div>
		</div>
	);
}

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Target, Award, CheckCircle, Globe, TrendingUp, Lightbulb } from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations with industry leaders to deliver comprehensive solutions'
    },
    {
      icon: Users,
      title: 'Technology Partners',
      description: 'Integration with cutting-edge platforms and tools to enhance our offerings'
    },
    {
      icon: Target,
      title: 'Channel Partners',
      description: 'Distribution partnerships to expand our reach and market presence'
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Authorized partners with specialized expertise and certifications'
    }
  ];

  const benefits = [
    {
      title: 'Access to Innovation',
      description: 'Early access to cutting-edge technologies and emerging solutions',
      features: ['Technology previews', 'Beta testing opportunities', 'Innovation workshops']
    },
    {
      title: 'Revenue Growth',
      description: 'Expanded market reach and new revenue streams through partnership',
      features: ['Joint go-to-market', 'Revenue sharing', 'Market expansion support']
    },
    {
      title: 'Technical Support',
      description: 'Comprehensive technical assistance and training for your team',
      features: ['Technical training', 'Implementation support', '24/7 assistance']
    },
    {
      title: 'Marketing Support',
      description: 'Co-marketing initiatives and brand collaboration opportunities',
      features: ['Joint campaigns', 'Event participation', 'Content collaboration']
    }
  ];

  const currentPartners = [
    {
      name: 'Technology Leaders',
      description: 'Leading AI and cloud technology providers',
      category: 'Strategic'
    },
    {
      name: 'Industry Experts',
      description: 'Specialized consultants and domain experts',
      category: 'Consulting'
    },
    {
      name: 'Platform Providers',
      description: 'Enterprise software and infrastructure platforms',
      category: 'Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Innovation Leaders
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join our network of strategic partners and together we'll transform industries 
              through cutting-edge technology solutions and collaborative innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We offer various partnership models to suit different business needs and objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-zion-slate-light">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We work with industry leaders and technology innovators to deliver exceptional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-zion-cyan font-medium mb-3">{partner.category}</p>
                <p className="text-zion-slate-light">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join our network of innovative partners and together we'll shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Partnership Discussion
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Contact Partnership Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Partners() {
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  return (
    <>
      <SEO
        title="Partners - Zion Tech Group"
        description="Partner with Zion Tech Group and grow your business together."
        canonical="https://ziontechgroup.com/partners"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Partners</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Partner with Zion Tech Group and unlock new opportunities for growth and success.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our partnership program is currently under development.
              </p>
            </div>
=======
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Download Partner Kit
            </button>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3ce5
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
