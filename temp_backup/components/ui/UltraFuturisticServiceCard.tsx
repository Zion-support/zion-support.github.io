import React from 'react',
import { motion } from 'framer-motion',
import { Star, TrendingUp, Clock, DollarSign, ArrowRight, ExternalLink, Phone, Mail, MapPin, Zap, Brain, Rocket, Globe, Cpu, Lock, Eye, Shield, Target, Users, Award } from 'lucide-react',
import Button from './Button',

interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  variant: string,
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string
  },
  realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}

interface UltraFuturisticServiceCardProps {
  service: Service
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'AI & Machine Learning': <Brain className="w-4 h-4" />,
  'Quantum Computing': <Zap className="w-4 h-4" />,
  'IoT & Smart Cities': <Cpu className="w-4 h-4" />,
  'Robotics & Automation': <Rocket className="w-4 h-4" />,
  'Biotechnology & Healthcare': <Eye className="w-4 h-4" />,
  'Cybersecurity': <Lock className="w-4 h-4" />,
  'Analytics & Business Intelligence': <TrendingUp className="w-4 h-4" />,
  'Cloud & Infrastructure': <Globe className="w-4 h-4" />,
  'Quantum AI & BCI': <Brain className="w-4 h-4" />,
  'Autonomous Systems': <Rocket className="w-4 h-4" />,
  'Space Technology': <Rocket className="w-4 h-4" />,
  'Quantum Finance': <DollarSign className="w-4 h-4" />,
  'Metaverse & VR': <Globe className="w-4 h-4" />,
  'Quantum IoT': <Cpu className="w-4 h-4" />,
  'Autonomous Vehicles': <Rocket className="w-4 h-4" />,
  'Smart Energy': <Zap className="w-4 h-4" />
},
export default UltraFuturisticServiceCard,