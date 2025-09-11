import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  ShoppingCart,
  Users,
  Building,
  Rocket,
  DollarSign,
  Clock,
  Globe,
  Lock,
  BarChart3,
  MessageCircle,
  Target,
  TrendingUp,
  Code,
  Server,
  Smartphone,
  Database,
  BookOpen,
  HelpCircle,
  Mail,
  Video,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-3xl font-bold mb-4">$99/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>Basic features</li>
              <li>Email support</li>
              <li>5GB storage</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">$199/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>All basic features</li>
              <li>Priority support</li>
              <li>50GB storage</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">$499/month</p>
            <ul className="space-y-2 text-gray-600">
              <li>All pro features</li>
              <li>24/7 support</li>
              <li>Unlimited storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;