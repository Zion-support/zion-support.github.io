import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Users,;
  Target, ;
  Award, ;
  Globe, ;
  Zap, ;
  Brain, ;
  Rocket, ;
  Shield,;
  Heart,;
  Star,;
  CheckCircle,;
  ArrowRight;
} from "lucide-react"
export default function About() {;
  const stats = [;
    { number: '500+', label: 'Projects Completed', icon: CheckCircle };
    { number: '50+', label: 'Team Members', icon: Users };
    { number: '25+', label: 'Countries Served', icon: Globe };
    { number: '99%', label: 'Client Satisfaction', icon: Star };
  ];
  const values = [;
    {;
      icon: Brain,title: 'Innovation First',description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    };
    {;
      icon: Shield,title: 'Trust & Security',description: 'Your data and business operations are protected with enterprise-grade security measures.'
    };
    {;
      icon: Heart,title: 'Client Success',description: 'We measure our success by the success of our clients and their digital transformation journey.'
    };
    {;
      icon: Rocket,title: 'Future-Ready',description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
    };
  ];
  const team = [;
    {;
      name: 'Kleber Santos',role: 'CEO & Founder',bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',image: '/team/kleber-santos.jpg'
    };
    {;
      name: 'AI Research Team',role: 'AI & ML Specialists',bio: 'Experts in machine learning, neural networks, and autonomous systems development.',;
      image: '/team/ai-team.jpg'
    };
    {;
      name: 'DevOps Engineers',role: 'Infrastructure & Cloud',bio: 'Specialists in cloud architecture, automation, and scalable infrastructure solutions.',;
      image: '/team/devops-team.jpg'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to revolutionize business through AI, quantum computing, and cutting-edge technology solutions."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              We are a forward-thinking technology company dedicated to transforming businesses through ;
              innovative AI solutions, quantum computing, and cutting-edge digital technologies.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Mission & Vision */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <div className="flex items-center mb-6">;
                <[^>]*/>
                <h2 className="text-3xl font-bold text-white">Our Mission</[^>]*>
              </[^>]*>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">;
                To democratize access to advanced AI and quantum technologies, enabling businesses of all sizes ;
                to leverage cutting-edge solutions for growth, efficiency, and competitive advantage.;
              </[^>]*>
              <p className="text-gray-400 leading-relaxed">;
                We believe that technology should be accessible, understandable, and transformative. ;
                Our team works tirelessly to bridge the gap between complex technological innovations ;
                and practical business applications.;
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/20">;
                <div className="flex items-center mb-6">;
                  <[^>]*/>
                  <h3 className="text-2xl font-bold text-white">Our Vision</[^>]*>
                </[^>]*>
                <p className="text-gray-300 leading-relaxed mb-6">;
                  To be the global leader in AI-powered business solutions, driving the next wave of ;
                  digital transformation and creating a future where technology serves humanity.;
                </[^>]*>
                <div className="space-y-3">;
                  <div className="flex items-center text-gray-300">;
                    <[^>]*/>
                    <span>AI-First Business Solutions</[^>]*>
                  </[^>]*>
                  <div className="flex items-center text-gray-300">;
                    <[^>]*/>
                    <span>Quantum Computing Innovation</[^>]*>
                  </[^>]*>
                  <div className="flex items-center text-gray-300">;
                    <[^>]*/>
                    <span>Sustainable Technology</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Stats Section */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</[^>]*>
            <p className="text-xl text-gray-300">Delivering results that speak for themselves</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div
                key={stat.label};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">;
                  <[^>]*/>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</[^>]*>
                  <div className="text-gray-300">{stat.label}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Values Section */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</[^>]*>
            <p className="text-xl text-gray-300">The principles that guide everything we do</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {values.map((value, index) => (;
              <motion.div
                key={value.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</[^>]*>
                <p className="text-gray-300 leading-relaxed">{value.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Team Section */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</[^>]*>
            <p className="text-xl text-gray-300">The brilliant minds behind our innovative solutions</[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {team.map((member, index) => (;
              <motion.div
                key={member.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">;
                  <span className="text-2xl font-bold text-white">;
                    {member.name.split(' ').map(n => n[0]).join('')};
                  </[^>]*>
                </[^>]*>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</[^>]*>
                <p className="text-cyan-400 mb-3">{member.role}</[^>]*>
                <p className="text-gray-300 leading-relaxed">{member.bio}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join hundreds of companies already leveraging our AI-powered solutions ;
              to drive growth and innovation.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact"
                className="[^"]*"
              >;
                Get Started Today;
                <[^>]*/>
              </[^>]*>
              <a;
                href="/services"
                className="[^"]*"
              >;
                Explore Our Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};