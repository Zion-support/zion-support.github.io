import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const leadershipValues = [
  {
    icon: Target,
    title: 'Vision & Strategy',
    description: 'Clear direction and strategic planning for sustainable growth'
  },
  {
    icon: Users,
    title: 'Team Development',
    description: 'Building and nurturing high-performing teams'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Fostering creativity and technological advancement'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Putting customer success at the center of everything'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to quality and continuous improvement'
  },
  {
    icon: Lightbulb,
    title: 'Adaptability',
    description: 'Embracing change and learning from challenges'
  }
];

const teamMembers = [
  {
    name: 'Kleber Santos',
    title: 'Founder & CEO',
    description: 'Visionary leader with over 15 years of experience in technology and business innovation.',
    expertise: ['Strategic Planning', 'Technology Innovation', 'Business Development', 'Team Leadership']
  },
  {
    name: 'Executive Team',
    title: 'Leadership Council',
    description: 'Experienced professionals driving innovation and operational excellence.',
    expertise: ['Operations Management', 'Technology Strategy', 'Customer Success', 'Product Development']
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Leadership - Zion Tech Group" 
        description="Meet the visionary leaders driving innovation and transformation at Zion Tech Group. Learn about our leadership team and company values." 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Leadership
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and transformation at Zion Tech Group. 
            Our leadership team combines deep technical expertise with strategic business acumen 
            to deliver exceptional value to our clients.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Leadership Values</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The principles that guide our leadership team and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experienced professionals committed to driving innovation and delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-cyan-400 text-lg mb-4">{member.title}</p>
              <p className="text-gray-300 mb-6">{member.description}</p>
              <div>
                <h4 className="text-lg font-semibold mb-3">Areas of Expertise:</h4>
                <ul className="space-y-2">
                  {member.expertise.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              To empower organizations with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in building lasting partnerships and delivering 
              exceptional value to our clients through innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clear Vision</h3>
              <p className="text-gray-300">Strategic direction for sustainable growth</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
              <p className="text-gray-300">Adapting and evolving with technology</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Success</h3>
              <p className="text-gray-300">Putting clients first in everything we do</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our leadership team can help transform your business 
            with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}