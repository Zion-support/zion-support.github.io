import React from 'react';
import { Link } from 'react-router-dom';
:src/pages/Services.tsx
import { 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp, 
  HardDrive,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
export function Services() {
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',