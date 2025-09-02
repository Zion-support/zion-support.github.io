import React, { useState, useMemo } from 'react' import { motion, AnimatePresence    } from 'framer-motion' import { Link    } from 'react-router-dom' import { ArrowRight, Atom, Award, BarChart3, BookOpen, Brain, Building, Calendar, CheckCircle, Clock, Cloud, Code, Common, Cpu, Database, DollarSign, Eye, FileText, Filter, Gauge, Globe, Heart, HelpCircle, Lock, Mail, MapPin, MessageCircle, MessageCircle as MessageCircleIcon, Network, PenTool, Phone, Rocket, Satellite, Search, Server, Shield, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Star, Target, TrendingDown, TrendingUp, Truck, UserCheck, Users, Workflow, Zap, Zap as ZapIcon } from 'lucide-react'; import { enhancedServicesCatalog2025, EnhancedService } from '../data/enhancedServicesCatalog2025'  export default function EnhancedServicesShowcase2025() { const [searchTerm, setSearchTerm] = useState('') const [selectedCategory, setSelectedCategory] = useState('all') const [sortBy, setSortBy] = useState('featured') const [viewMode, setViewMode] = useState<unknown>('grid')
// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

 