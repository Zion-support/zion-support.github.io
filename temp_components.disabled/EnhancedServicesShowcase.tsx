import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services-2025';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

