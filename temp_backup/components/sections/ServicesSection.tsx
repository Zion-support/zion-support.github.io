import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Brain
  Cloud
  RefreshCw
  Wifi
  Shield
  BarChart3,
  ArrowRight,
  Zap
} from 'lucide-react',

const ServicesSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ServicesSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default ServicesSection,
