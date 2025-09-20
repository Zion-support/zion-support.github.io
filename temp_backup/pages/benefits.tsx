import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Heart, Shield, DollarSign, GraduationCap, Globe, 
  ArrowRight, CheckCircle, TrendingUp, Infinity, 
  Eye, Sparkles, Clock, Zap, Users, Award,
  Coffee, Dumbbell, TreePine, Home, Car, Plane,
  BookOpen, Monitor, Smartphone, Wifi, Utensils
} from 'lucide-react';

const BenefitsPage: React.FC = () => {
  const benefitCategories = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs to keep you healthy and happy',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      benefits: [
        {
          name: 'Medical, Dental & Vision',
          description: '100% employer-paid premium coverage for you and your family',
          details: ['Comprehensive medical coverage', 'Dental and vision plans', 'Prescription drug coverage', 'Mental health services']
        },
        {
          name: 'Wellness Programs',
          description: 'Gym memberships, fitness classes, and wellness challenges',
          details: ['Free gym memberships', 'On-site fitness classes', 'Wellness challenges and rewards', 'Health coaching services']
        },
        {
          name: 'Mental Health Support',
          description: 'Professional counseling and mental health resources',
          details: ['Employee assistance program', 'Mental health counseling', 'Stress management workshops', 'Meditation and mindfulness programs']
        }
      ]
    },
    {
      title: 'Financial Security',
      description: 'Competitive compensation and financial benefits to secure your future',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        {
          name: 'Competitive Salary',
          description: 'Above-market compensation with regular performance reviews',
          details: ['Market-leading base salaries', 'Performance-based bonuses', 'Annual salary reviews', 'Equity participation']
        },
        {
          name: '401(k) & Retirement',
          description: 'Generous retirement savings with employer matching',
          details: ['401(k) with 6% employer match', 'Roth 401(k) options', 'Financial planning services', 'Retirement education']
        },
        {
          name: 'Stock Options & Equity',
          description: 'Ownership in the company through stock options and equity grants',
          details: ['Stock option grants', 'Restricted stock units', 'Performance equity awards', 'Employee stock purchase plan']
        }
      ]
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities to advance your career and skills',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        {
          name: 'Professional Development',
          description: 'Courses, certifications, and learning resources',
          details: ['Unlimited learning budget', 'Professional certifications', 'Conference attendance', 'Online learning platforms']
        },
        {
          name: 'Tuition Reimbursement',
          description: 'Support for advanced degrees and continuing education',
          details: ['Graduate degree support', 'Course reimbursement', 'Professional development', 'Industry certifications']
        },
        {
          name: 'Internal Training',
          description: 'Company-sponsored training and skill development',
          details: ['Technical workshops', 'Leadership training', 'Soft skills development', 'Cross-functional training']
        }
      ]
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and time off to maintain work-life harmony',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        {
          name: 'Flexible Work Arrangements',
          description: 'Remote work options and flexible scheduling',
          details: ['100% remote work option', 'Flexible start/end times', 'Hybrid work models', 'Work from anywhere']
        },
        {
          name: 'Unlimited PTO',
          description: 'Take time off when you need it to recharge',
          details: ['Unlimited paid time off', 'Sick leave coverage', 'Personal days', 'Mental health days']
        },
        {
          name: 'Family-Friendly Policies',
          description: 'Support for families and life events',
          details: ['Paid parental leave', 'Family medical leave', 'Childcare support', 'Elder care resources']
        }
      ]
    },
    {
      title: 'Office & Perks',
      description: 'Modern office amenities and daily perks to enhance your work experience',
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      benefits: [
        {
          name: 'Modern Office Spaces',
          description: 'Beautiful, well-equipped offices with modern amenities',
          details: ['Open concept workspaces', 'Private meeting rooms', 'Collaboration areas', 'Quiet zones']
        },
        {
          name: 'Daily Perks',
          description: 'Free meals, snacks, and beverages throughout the day',
          details: ['Free breakfast and lunch', 'Unlimited snacks', 'Premium coffee and tea', 'Healthy food options']
        },
        {
          name: 'Technology & Equipment',
          description: 'Latest technology and equipment to do your best work',
          details: ['Latest laptops and devices', 'Dual monitors', 'Ergonomic furniture', 'Mobile phone plans']
        }
      ]
    },
    {
      title: 'Community & Culture',
      description: 'Team building, social events, and a supportive community',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        {
          name: 'Team Building',
          description: 'Regular team events and social activities',
          details: ['Team offsites', 'Social events', 'Holiday parties', 'Team building activities']
        },
        {
          name: 'Employee Resource Groups',
          description: 'Connect with colleagues who share your interests',
          details: ['Diversity groups', 'Professional networks', 'Interest-based clubs', 'Mentorship programs']
        },
        {
          name: 'Recognition Programs',
          description: 'Celebrate achievements and contributions',
          details: ['Employee of the month', 'Performance awards', 'Innovation recognition', 'Peer recognition']
        }
      ]
    }
  ];

  const additionalPerks = [
    {
      icon: Plane,
      title: 'Travel & Transportation',
      description: 'Commuter benefits, travel allowances, and transportation support'
    },
    {
      icon: Home,
      title: 'Home Office Setup',
      description: 'Ergonomic furniture and equipment for remote work'
    },
    {
      icon: Car,
      title: 'Transportation Benefits',
      description: 'Commuter passes, parking, and ride-sharing credits'
    },
    {
      icon: Wifi,
      title: 'Internet & Utilities',
      description: 'Home internet and utility reimbursements'
    }
  ];

  const totalCompensation = [
    { label: 'Base Salary', value: 'Competitive' },
    { label: 'Performance Bonus', value: 'Up to 25%' },
    { label: 'Equity Value', value: '$50K-$200K' },
    { label: 'Benefits Value', value: '$15K-$25K' }
  ];

const benefits: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>benefits | Zion Tech Group</title>
        <meta name="description" content="benefits - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">benefits</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default benefits;
