import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Target, 
  Brain, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Star,
  Shield,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Filter,
  UserCheck,
  FileText,
  Calendar,
  Award,
  Briefcase,
  Heart,
  Globe,
  Lock,
  Database,
  Code,
  GraduationCap
} from 'lucide-react';
const AIHRRecruitment: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that analyze skills, experience, and cultural fit to find the perfect candidates for your organization.",
      benefits: ["Skill-based matching", "Cultural fit analysis", "Predictive success modeling"]
    },
    {
      icon: Target,
      title: "Intelligent Sourcing",
      description: "Automated talent discovery across multiple platforms and databases to identify passive candidates and expand your talent pool.",
      benefits: ["Multi-platform sourcing", "Passive candidate discovery", "Talent pipeline building"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights that forecast hiring success, employee retention, and workforce planning needs.",
      benefits: ["Hiring success prediction", "Retention forecasting", "Workforce planning"]
    },
    {
      icon: Zap,
      title: "Automated Screening",
      description: "Intelligent pre-screening to save time and improve quality",
      benefits: ["Resume parsing", "Skill assessment", "Background verification"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered HR Recruitment
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your hiring process with intelligent AI solutions that find the best talent faster and more efficiently.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="text-blue-400 mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
              {feature.benefits && (
                <ul className="text-gray-400 text-xs space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default AIHRRecruitment;
