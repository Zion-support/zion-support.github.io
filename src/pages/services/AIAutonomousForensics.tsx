import React from "react"
import { motion } from "framer-motion"
import { ;
  Search,;
  Brain, ;
  Target, ;
  BarChart3, ;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  ChartBar,;
  PieChart,;
  Activity,;
  Eye,;
  Clock,;
  DollarSign,;
  Award,;
  MessageSquare,;
  Share2,;
  TrendingUp,;
  Zap,;
  Shield,;
  Users,;
  Fingerprint;
} from "lucide-react"
const AIAutonomousForensics: React.FC = () => {
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Investigation',description: 'Advanced machine learning for autonomous incident investigation and evidence analysis'
    };
    {;
      icon: Search,title: 'Evidence Collection',description: 'Automated collection and preservation of digital evidence across multiple sources'
    };
    {;
      icon: Target,title: 'Pattern Recognition',description: 'AI-driven pattern recognition to identify connections and anomalies in evidence'
    };
    {;
      icon: BarChart3,title: 'Forensic Analytics',description: 'Comprehensive analysis and reporting of forensic findings with AI insights'
    };
    {;
      icon: Shield,title: 'Chain of Custody',description: 'Secure chain of custody tracking with blockchain verification'
    };
    {;
      icon: Fingerprint,title: 'Digital Fingerprinting',description: 'Advanced digital fingerprinting and evidence correlation'
    };
  ];
  const benefits = [;
    'Reduce investigation time by 70%Improve evidence discovery by 80%',;
    'Enhance forensic accuracy by 90%Automate routine forensics tasks',;
    '24/7 autonomous operationReal-time incident response'
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6">;
              <[^>]*/>
              AI-Powered Autonomous Forensics;
            </[^>]*>
            ;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Revolutionize Digital Forensics with;
              <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> AI Intelligence</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your digital forensics capabilities with our AI-powered autonomous platform. ;
              Conduct investigations faster, discover evidence more effectively, and maintain chain of custody.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300">;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Advanced Forensics Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our AI platform provides comprehensive digital forensics capabilities for modern investigations;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Choose AI Autonomous Forensics?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Experience measurable improvements in investigation efficiency and evidence discovery;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</[^>]*>
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            ;
            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Forensics?</[^>]*>
              <p className="text-gray-300 mb-6">;
                Join thousands of investigators already using AI to enhance their forensics capabilities.;
              </[^>]*>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">;
                Get Started Today;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready to Revolutionize Digital Forensics?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Start your journey to AI-powered forensics with our comprehensive platform.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300">;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIAutonomousForensics;