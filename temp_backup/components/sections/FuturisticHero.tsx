import React from 'react',
import { motion } from 'framer-motion',
import Link from 'next/link',
import { ArrowRight, Star, Zap, Shield, Users, Globe } from 'lucide-react',
import AnimatedBackground from '../ui/AnimatedBackground',
import { Button } from '../ui/Button',

const FuturisticHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FuturisticHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default FuturisticHero,
