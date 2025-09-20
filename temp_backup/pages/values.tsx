import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Shield, Users, Globe, 
  Star, CheckCircle, TrendingUp, Infinity, 
  Eye, Sparkles, Clock, Zap, Heart,
  Lightbulb, Award, Lock, Rocket
} from 'lucide-react';

const ValuesPage: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We believe that innovation is the driving force behind progress. Every solution we create, every service we offer, and every decision we make is guided by our commitment to pushing the boundaries of what's possible.",
      longDescription: "Innovation isn't just about creating new technology—it's about reimagining how technology can serve humanity. We invest heavily in research and development, encourage creative thinking, and maintain a culture where bold ideas are celebrated and nurtured. Our team is constantly exploring emerging technologies, from quantum computing to AI consciousness, to ensure we stay at the forefront of technological advancement.",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Pioneering AI consciousness evolution",
        "Developing quantum-resistant cybersecurity",
        "Creating autonomous business intelligence systems",
        "Advancing space technology applications"
      ]
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We hold ourselves to the highest standards of quality and performance. Excellence is not just a goal—it's our foundation, ensuring that every deliverable exceeds expectations.",
      longDescription: "Excellence permeates every aspect of our work. From the initial client consultation to the final implementation and ongoing support, we maintain rigorous quality standards. Our development processes include comprehensive testing, peer reviews, and continuous improvement cycles. We believe that excellence is achieved through attention to detail, continuous learning, and an unwavering commitment to delivering the best possible outcomes for our clients.",
      color: "from-emerald-500 to-teal-500",
      examples: [
        "99.99% uptime guarantees",
        "Comprehensive quality assurance processes",
        "Continuous performance optimization",
        "Rigorous security testing protocols"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe that the best solutions emerge from diverse perspectives working together. Collaboration is at the heart of our approach, both internally and with our clients.",
      longDescription: "Collaboration is more than just working together—it's about creating an environment where different viewpoints, skills, and experiences can combine to produce extraordinary results. We foster a culture of open communication, mutual respect, and shared ownership. Our teams work closely with clients to understand their unique challenges and co-create solutions that truly address their needs. We believe that the best outcomes come from partnerships built on trust, transparency, and shared goals.",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Cross-functional team collaboration",
        "Client partnership approach",
        "Open knowledge sharing",
        "Community-driven development"
      ]
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to creating positive change that extends beyond individual clients to benefit industries, communities, and society as a whole.",
      longDescription: "Our vision extends beyond business success to creating meaningful impact on a global scale. We develop solutions that address real-world challenges, from climate change to healthcare accessibility. We believe that technology should be a force for good, improving lives and creating opportunities for people around the world. Our commitment to global impact drives us to think beyond immediate business needs and consider the long-term implications of our work.",
      color: "from-indigo-500 to-purple-500",
      examples: [
        "Sustainable technology solutions",
        "Healthcare accessibility improvements",
        "Educational technology advancements",
        "Environmental impact reduction"
      ]
    }
  ];

  const additionalPrinciples = [
    {
      icon: Lock,
      title: "Integrity & Trust",
      description: "We operate with complete transparency and honesty, building lasting relationships based on trust and mutual respect."
    },
    {
      icon: Heart,
      title: "Empathy & Understanding",
      description: "We deeply understand our clients' challenges and design solutions that truly address their needs and aspirations."
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "We never stop learning, evolving, and improving, both as individuals and as an organization."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "We approach challenges with creativity and innovation, finding unique solutions to complex problems."
    }
  ];

  const impactMetrics = [
    { number: "1000+", label: "Innovations Delivered", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "200+", label: "Countries Impacted", icon: Globe },
    { number: "24/7", label: "Global Support", icon: Clock }
  ];

const values: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>values | Zion Tech Group</title>
        <meta name="description" content="values - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">values</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default values;
