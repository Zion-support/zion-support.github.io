import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Play, 
  Settings, 
  Target, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  TrendingUp,
  Shield,
  Users,
  Clock,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function FinOpsAdvisor() {
  const features = [
    {
      icon: BarChart3,
      title: "Cost Analysis",
      description: "Comprehensive analysis of your cloud spending patterns"
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description: "Data-driven recommendations to reduce costs"
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Establish policies and controls for cloud spending"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Educate your team on FinOps best practices"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of cloud costs and usage"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate cost optimization and reporting processes"
    }
  ];

  const benefits = [
    "Reduce cloud costs by 20-40%",
    "Improve resource utilization",
    "Better budget planning and forecasting",
    "Enhanced team accountability",
    "Faster decision-making with real-time data",
    "Compliance with financial policies"
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize costs during peak shopping seasons"
    },
    {
      industry: "SaaS",
      description: "Scale efficiently while controlling costs"
    },
    {
      industry: "Healthcare",
      description: "Ensure compliance while optimizing resources"
    },
    {
      industry: "Finance",
      description: "Maintain security while reducing operational costs"
    }
  ];





          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>






