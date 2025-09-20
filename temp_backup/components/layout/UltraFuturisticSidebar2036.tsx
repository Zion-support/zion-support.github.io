import React from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  X, Home, Globe, Rocket, Brain, Atom, Shield, Target, 
  Sparkles, DollarSign, BookOpen, Building, Users, 
  ChevronRight, Zap, Star, TrendingUp, Award, 
  Settings, HelpCircle, MessageCircle, Phone, Mail
} from 'lucide-react',

interface SidebarProps {
  isOpen: boolean,
  onClose: () => void
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
export default UltraFuturisticSidebar2036,