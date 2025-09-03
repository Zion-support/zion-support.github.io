<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  Handshake, Globe, Award, Users, Building, ;
  Star, CheckCircle, ArrowRight, ExternalLink ;
} from 'lucide-react';
;
export default function Partners() {;
  const partners = [;
    {;
      id: 1,;
      name: "Microsoft",;
      category: "Technology Partner",;
      description: "Strategic partnership in cloud computing and AI solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://microsoft.com",;
      benefits: ["Azure Integration", "AI Services", "Enterprise Solutions"];
    },;
    {;
      id: 2,;
      name: "Google Cloud",;
      category: "Cloud Partner",;
      description: "Advanced cloud infrastructure and machine learning platforms",;
      logo: "/api/placeholder/200/100",;
      website: "https://cloud.google.com",;
      benefits: ["GCP Services", "ML Platforms", "Data Analytics"];
    },;
    {;
      id: 3,;
      name: "IBM",;
      category: "Quantum Computing Partner",;
      description: "Quantum computing research and development collaboration",;
      logo: "/api/placeholder/200/100",;
      website: "https://ibm.com",;
      benefits: ["Quantum Systems", "Research Collaboration", "Enterprise AI"];
    },;
    {;
      id: 4,;
      name: "Amazon Web Services",;
      category: "Cloud Infrastructure Partner",;
      description: "Comprehensive cloud services and infrastructure solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://aws.amazon.com",;
      benefits: ["AWS Services", "Infrastructure", "Global Reach"];
    },;
    {;
      id: 5,;
      name: "NVIDIA",;
      category: "AI Hardware Partner",;
      description: "Advanced GPU solutions for AI and machine learning workloads",;
      logo: "/api/placeholder/200/100",;
      website: "https://nvidia.com",;
      benefits: ["GPU Solutions", "AI Acceleration", "Deep Learning"];
    },;
    {;
      id: 6,;
      name: "Intel",;
      category: "Technology Partner",;
      description: "Advanced processor technologies and AI optimization",;
      logo: "/api/placeholder/200/100",;
      website: "https://intel.com",;
      benefits: ["Processor Tech", "AI Optimization", "Performance"];
    }
  ];
;
  const partnershipTypes = [;
    {;
      title: "Technology Partners",;
      description: "Leading technology companies providing cutting-edge solutions",;
      icon: Building,;
      count: 12,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "Cloud Partners",;
      description: "Global cloud providers enabling scalable infrastructure",;
      icon: Globe,;
      count: 8,;
      color: "from-green-500 to-emerald-500";
    },;
    {;
      title: "Research Partners",;
      description: "Academic institutions and research organizations",;
      icon: Award,;
      count: 15,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Channel Partners",;
      description: "Distribution and implementation partners worldwide",;
      icon: Handshake,;
      count: 25,;
      color: "from-orange-500 to-red-500";
    }
  ];
;
  const benefits = [;
    "Access to cutting-edge technology and platforms",;
    "Joint research and development opportunities",;
    "Global market reach and distribution channels",;
    "Technical support and training programs",;
    "Co-marketing and go-to-market strategies",;
    "Priority access to new features and updates";
  ];
;
  return (;
    <>;
      <SEO ;
        title="Partners - Zion Tech Group | Strategic Technology Partnerships";
        description="Discover our strategic partnerships with leading technology companies, cloud providers, and research institutions that enable us to deliver world-class solutions.";
        keywords="partners, partnerships, technology partners, cloud partners, strategic alliances, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Our Partners;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                Strategic partnerships with industry leaders enable us to deliver ;
                comprehensive technology solutions and drive innovation across all sectors.;
              </p>;
              <div className="flex items-center justify-center">;
                <Handshake className="w-16 h-16 text-blue-400" />;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Partnership Types */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Categories</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We work with diverse partners across technology, research, and distribution to deliver comprehensive solutions;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {partnershipTypes.map((type, index) => (;
                <motion.div;
=======
import {SEO } from '@/components/SEO';

export default function Partners() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Partners - Zion Tech Group" description="Professional Partners services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Partners</h1>
        <p className="text-gray-300 text-lg">
          Professional Partners services to help your business grow.
        </p>
      </div>
    </div>
=======
<<<<<<< HEAD
import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { 
  Handshake, Globe, Award, Users, Building, 
  Star, CheckCircle, ArrowRight, ExternalLink 
} from &apos;lucide-react';&apos;&apos;

export default function Partners() {}
  const partners = [
    ;{
      id: 1,
      name: &quot;Microsoft&quot;,
      category: &quot;Technology Partner&quot;,
      description: &quot;Strategic partnership in cloud computing and AI solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://microsoft.com&quot;,
      benefits: [&quot;Azure Integration&quot;, &quot;AI Services&quot;, &quot;Enterprise Solutions&quot;]
    },
    {
      id: 2,
      name: &quot;Google Cloud&quot;,
      category: &quot;Cloud Partner&quot;,
      description: &quot;Advanced cloud infrastructure and machine learning platforms&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://cloud.google.com&quot;,
      benefits: [&quot;GCP Services&quot;, &quot;ML Platforms&quot;, &quot;Data Analytics&quot;]
    },
    {
      id: 3,
      name: &quot;IBM&quot;,
      category: &quot;Quantum Computing Partner&quot;,
      description: &quot;Quantum computing research and development collaboration&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://ibm.com&quot;,
      benefits: [&quot;Quantum Systems&quot;, &quot;Research Collaboration&quot;, &quot;Enterprise AI&quot;]
    },
    {
      id: 4,
      name: &quot;Amazon Web Services&quot;,
      category: &quot;Cloud Infrastructure Partner&quot;,
      description: &quot;Comprehensive cloud services and infrastructure solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://aws.amazon.com&quot;,
      benefits: [&quot;AWS Services&quot;, &quot;Infrastructure&quot;, &quot;Global Reach&quot;]
    },
    {
      id: 5,
      name: &quot;NVIDIA&quot;,
      category: &quot;AI Hardware Partner&quot;,
      description: &quot;Advanced GPU solutions for AI and machine learning workloads&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://nvidia.com&quot;,
      benefits: [&quot;GPU Solutions&quot;, &quot;AI Acceleration&quot;, &quot;Deep Learning&quot;]
    },
    {
      id: 6,
      name: &quot;Intel&quot;,
      category: &quot;Technology Partner&quot;,
      description: &quot;Advanced processor technologies and AI optimization&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;http,s://intel.com&quot;,
      benefits: [&quot;Processor Tech&quot;, &quot;AI Optimization&quot;, &quot;Performance&quot;]
    }
  ];&quot;

=======
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Handshake, Globe, Award, Users, Building, Star, CheckCircle, ArrowRight, ExternalLink 
} from 'lucide-react';
export default function Partners() {
  const partners = [
<<<<<<< HEAD
    {
      id: 1, name: "Microsoft",
      category: "Technology Partner", description: "Strategic partnership in cloud computing and AI solutions",
      logo: "/api/placeholder/200/100", website: "https://microsoft.com",
      benefits: ["Azure Integration", "AI Services", "Enterprise Solutions"]
=======
  {
      id: 1, name: "Microsoft",
      category: "Technology Partner", description: "Strategic partnership in cloud computing and AI solutions",
      logo: "/api/placeholder/200/100", website: "https://microsoft.com",
      benefits: ["Azure Integration,AI Services,Enterprise Solutions"]
>>>>>>> main
    }, {
      id: 2,
      name: "Google Cloud", category: "Cloud Partner",
      description: "Advanced cloud infrastructure and machine learning platforms", logo: "/api/placeholder/200/100",
<<<<<<< HEAD
      website: "https://cloud.google.com", benefits: ["GCP Services", "ML Platforms", "Data Analytics"]
=======
      website: "https://cloud.google.com", benefits: ["GCP Services,ML Platforms,Data Analytics"]
>>>>>>> main
    }, {
      id: 3,
      name: "IBM", category: "Quantum Computing Partner",
      description: "Quantum computing research and development collaboration", logo: "/api/placeholder/200/100",
<<<<<<< HEAD
      website: "https://ibm.com", benefits: ["Quantum Systems", "Research Collaboration", "Enterprise AI"]
=======
      website: "https://ibm.com", benefits: ["Quantum Systems,Research Collaboration,Enterprise AI"]
>>>>>>> main
    }, {
      id: 4,
      name: "Amazon Web Services", category: "Cloud Infrastructure Partner",
      description: "Comprehensive cloud services and infrastructure solutions", logo: "/api/placeholder/200/100",
<<<<<<< HEAD
      website: "https://aws.amazon.com", benefits: ["AWS Services", "Infrastructure", "Global Reach"]
=======
      website: "https://aws.amazon.com", benefits: ["AWS Services,Infrastructure,Global Reach"]
>>>>>>> main
    }, {
      id: 5,
      name: "NVIDIA", category: "AI Hardware Partner",
      description: "Advanced GPU solutions for AI and machine learning workloads", logo: "/api/placeholder/200/100",
<<<<<<< HEAD
      website: "https://nvidia.com", benefits: ["GPU Solutions", "AI Acceleration", "Deep Learning"]
=======
      website: "https://nvidia.com", benefits: ["GPU Solutions,AI Acceleration,Deep Learning"]
>>>>>>> main
    }, {
      id: 6,
      name: "Intel", category: "Technology Partner",
      description: "Advanced processor technologies and AI optimization", logo: "/api/placeholder/200/100",
<<<<<<< HEAD
      website: "https://intel.com", benefits: ["Processor Tech", "AI Optimization", "Performance"]
=======
      website: "https://intel.com", benefits: ["Processor Tech,AI Optimization,Performance"]
>>>>>>> main
    }
  ];
>>>>>>> main
  const partnershipTypes = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      title: &quot;Technology Partners&quot;,
      description: &quot;Leading technology companies providing cutting-edge solutions&quot;,
      icon: Building,
      count: 12,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Cloud Partners&quot;,
      description: &quot;Global cloud providers enabling scalable infrastructure&quot;,
      icon: Globe,
      count: 8,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      title: &quot;Research Partners&quot;,
      description: &quot;Academic institutions and research organizations&quot;,
      icon: Award,
      count: 15,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Channel Partners&quot;,
      description: &quot;Distribution and implementation partners worldwide&quot;,
      icon: Handshake,
      count: 25,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ];&quot;

  const benefits = [
    &quot;Access to cutting-edge technology and platforms&quot;,
    &quot;Joint research and development opportunities&quot;,
    &quot;Global market reach and distribution channels&quot;,
    &quot;Technical support and training programs&quot;,
    &quot;Co-marketing and go-to-market strategies&quot;,
    &quot;Priority access to new features and updates&quot;
  ];

  return (&quot;
=======
=======
  {
>>>>>>> main
      title: "Technology Partners", description: "Leading technology companies providing cutting-edge solutions",
      icon: Building, count: 12,
      color: "from-blue-500 to-cyan-500"
    }, {
      title: "Cloud Partners",
      description: "Global cloud providers enabling scalable infrastructure", icon: Globe,
      count: 8, color: "from-green-500 to-emerald-500"
    },
    {
      title: "Research Partners", description: "Academic institutions and research organizations",
      icon: Award, count: 15,
      color: "from-purple-500 to-pink-500"
    }, {
      title: "Channel Partners",
      description: "Distribution and implementation partners worldwide", icon: Handshake,
      count: 25, color: "from-orange-500 to-red-500"
    }
  ];
  const benefits = [
<<<<<<< HEAD
    "Access to cutting-edge technology and platforms", "Joint research and development opportunities",
    "Global market reach and distribution channels", "Technical support and training programs",
    "Co-marketing and go-to-market strategies", "Priority access to new features and updates"
=======
    "Access to cutting-edge technology and platforms,Joint research and development opportunities,Global market reach and distribution channels,Technical support and training programs,Co-marketing and go-to-market strategies,Priority access to new features and updates"
>>>>>>> main
  ];
  return (
>>>>>>> main
    <>
      <SEO 
        title=&quot;Partners - Zion Tech Group | Strategic Technology Partnerships&quot;
        description=&quot;Discover our strategic partnerships with leading technology companies, cloud providers, and research institutions that enable us to deliver world-class solutions.&quot;
        keywords=&quot;partners, partnerships, technology partners, cloud partners, strategic alliances, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Our Partners&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Strategic partnerships with industry leaders enable us to deliver 
                comprehensive technology solutions and drive innovation across all sectors.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Handshake className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Partnership Categories&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We work with diverse partners across technology, research, and distribution to deliver comprehensive solutions&quot;
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {partnershipTypes.map((type, index) => (&quot;}
=======
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
>>>>>>> main
                <motion.div
>>>>>>> main
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <type.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>;
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>;
                  <div className="text-2xl font-bold text-blue-400">{type.count}+</div>;
                </motion.div>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                    <type.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{type.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-3&quot;>{type.description}&quot;</p>
                  <div className=&quot;text-2xl font-bold text-blue-400&quot;>{type.count}+&quot;</div>
                </motion.div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* Partners Grid */}
<<<<<<< HEAD
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Our Strategic Partners</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Leading technology companies and organizations that share our vision of innovation;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {partners.map((partner, index) => (;
                <motion.div;
=======
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Our Strategic Partners&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Leading technology companies and organizations that share our vision of innovation&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&quot;>
              {partners.map((partner, index) => (&quot;}
                <motion.div
>>>>>>> main
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105";
                >;
                  <div className="h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">;
                    <div className="text-4xl opacity-20 font-bold text-white">{partner.name.charAt(0)}</div>;
                  </div>;
                  ;
                  <div className="mb-3">;
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">;
                      {partner.category}
                    </span>;
                  </div>;
                  ;
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>;
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>;
                  ;
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>;
                    <div className="space-y-1">;
                      {partner.benefits.map((benefit, benefitIndex) => (;
                        <div key={benefitIndex} className="flex items-center text-xs text-gray-400">;
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />;
                          {benefit}
                        </div>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className=&quot;h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4&quot;>&quot;"
                    <div className=&quot;text-4xl opacity-20 font-bold text-white&quot;>{partner.name.charAt(0)}&quot;</div>
                  </div>
                  
                  <div className=&quot;mb-3&quot;>&quot;"
                    <span className=&quot;px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot;>
                      {partner.category}&quot;
                    </span>
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{partner.name}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{partner.description}&quot;</p>
                  
                  <div className=&quot;mb-4&quot;>&quot;"
                    <h4 className=&quot;text-sm font-semibold text-white mb-2&quot;>Key Benefits&quot;</h4>
                    <div className=&quot;space-y-1&quot;>
                      {partner.benefits.map((benefit, benefitIndex) => (&quot;}
                        <div key={benefitIndex} className=&quot;flex items-center text-xs text-gray-400&quot;>&quot;"
                          <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2&quot; />
                          {benefit}&quot;
                        </div>
>>>>>>> main
                      ))}
                    </div>;
                  </div>;

                  <a;
                    href={partner.website}
<<<<<<< HEAD
                    target="_blank";
                    rel="noopener noreferrer";
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors";
                  >;
                    <span className="text-sm">Visit Website</span>;
                    <ExternalLink className="w-4 h-4 ml-1" />;
                  </a>;
                </motion.div>;
=======
<<<<<<< HEAD
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors&quot;
                  >&quot;
                    <span className=&quot;text-sm&quot;>Visit Website&quot;</span>
                    <ExternalLink className=&quot;w-4 h-4 ml-1&quot; />&quot;
=======
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover: text-blue-300 transition-colors"
                  >
                    <span className="text-sm">Visit Website</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
>>>>>>> main
                  </a>
                </motion.div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* Partnership Benefits */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Benefits</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our strategic partnerships provide mutual value and enable us to deliver superior solutions;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
              {benefits.map((benefit, index) => (;
                <motion.div;
=======
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Partnership Benefits&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our strategic partnerships provide mutual value and enable us to deliver superior solutions&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&quot;>
              {benefits.map((benefit, index) => (&quot;}
                <motion.div
>>>>>>> main
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50";
                >;
                  <div className="flex items-start">;
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />;
                    <p className="text-gray-300">{benefit}</p>;
                  </div>;
                </motion.div>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50&quot;
                >&quot;
                  <div className=&quot;flex items-start&quot;>&quot;"
                    <Star className=&quot;w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0&quot; />&quot;
                    <p className=&quot;text-gray-300&quot;>{benefit}&quot;</p>
                  </div>
                </motion.div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* Become a Partner */}
<<<<<<< HEAD
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Become a Partner;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join our network of strategic partners and help shape the future of technology. ;
                We're always looking for innovative companies to collaborate with.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105";
                >;
                  <Handshake className="w-5 h-5 mr-2" />;
                  Partner with Us;
                </a>;
                <a;
                  href="/about";
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200";
                >;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  Learn More;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
=======
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Become a Partner&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join our network of strategic partners and help shape the future of technology. 
<<<<<<< HEAD
                We&apos;re always looking for innovative companies to collaborate with.&apos;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
=======
<<<<<<< HEAD
                We&apos;re always looking for innovative companies to collaborate with.'
=======
<<<<<<< HEAD
                We&apos;re always looking for innovative companies to collaborate with.'
=======
                We're always looking for innovative companies to collaborate with.'
>>>>>>> main
>>>>>>> main
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
>>>>>>> main
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Handshake className=&quot;w-5 h-5 mr-2&quot; />
                  Partner with Us&quot;
                </a>
                <a
                  href=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Learn More&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
>>>>>>> main
>>>>>>> main
  );
}