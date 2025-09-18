import React from 'react';
<<<<<<< HEAD
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, GraduationCap, Users, Award, Target, 
  ArrowRight, CheckCircle, Star, Infinity, 
  Eye, Sparkles, Clock, Zap, BookOpen, Globe,
  Brain, Atom, Rocket, Shield, Cloud, Cpu,
  Compass, Lightbulb, Trophy, Map
} from 'lucide-react';

const CareerDevelopmentPage: React.FC = () => {
  const careerPaths = [
    {
      title: 'Individual Contributor',
      description: 'Deep technical expertise and individual excellence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      levels: [
        {
          level: 'Junior',
          title: 'Junior Engineer',
          description: 'Learning and growing in your technical skills',
          requirements: ['Bachelor\'s degree or equivalent', 'Basic programming knowledge', 'Eagerness to learn'],
          responsibilities: ['Code development', 'Testing and debugging', 'Documentation', 'Team collaboration'],
          timeline: '0-2 years'
        },
        {
          level: 'Mid',
          title: 'Software Engineer',
          description: 'Contributing significantly to technical projects',
          requirements: ['2+ years experience', 'Strong technical skills', 'Project delivery experience'],
          responsibilities: ['Feature development', 'Code reviews', 'Technical design', 'Mentoring juniors'],
          timeline: '2-5 years'
        },
        {
          level: 'Senior',
          title: 'Senior Engineer',
          description: 'Technical leadership and complex problem solving',
          requirements: ['5+ years experience', 'Deep technical expertise', 'Leadership experience'],
          responsibilities: ['Technical architecture', 'System design', 'Team leadership', 'Innovation'],
          timeline: '5+ years'
        }
      ]
    },
    {
      title: 'Technical Leadership',
      description: 'Leading technical teams and driving technical strategy',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      levels: [
        {
          level: 'Lead',
          title: 'Technical Lead',
          description: 'Leading technical direction for projects and teams',
          requirements: ['Senior-level technical skills', 'Team leadership experience', 'Strategic thinking'],
          responsibilities: ['Technical strategy', 'Team leadership', 'Architecture decisions', 'Project planning'],
          timeline: '5-8 years'
        },
        {
          level: 'Principal',
          title: 'Principal Engineer',
          description: 'Setting technical direction across multiple teams',
          requirements: ['8+ years experience', 'Cross-team influence', 'Strategic vision'],
          responsibilities: ['Technical strategy', 'Cross-team coordination', 'Innovation leadership', 'Mentorship'],
          timeline: '8+ years'
        },
        {
          level: 'Distinguished',
          title: 'Distinguished Engineer',
          description: 'Industry-recognized technical leadership',
          requirements: ['10+ years experience', 'Industry recognition', 'Strategic impact'],
          responsibilities: ['Company-wide technical strategy', 'Industry thought leadership', 'Innovation vision'],
          timeline: '10+ years'
        }
      ]
    },
    {
      title: 'Management',
      description: 'Leading teams and driving organizational success',
      icon: Users,
      color: 'from-emerald-500 to-teal-500',
      levels: [
        {
          level: 'Manager',
          title: 'Engineering Manager',
          description: 'Leading engineering teams and delivering results',
          requirements: ['Technical background', 'People management skills', 'Project delivery experience'],
          responsibilities: ['Team management', 'Project delivery', 'Career development', 'Technical oversight'],
          timeline: '5-8 years'
        },
        {
          level: 'Director',
          title: 'Engineering Director',
          description: 'Leading multiple teams and strategic initiatives',
          requirements: ['8+ years experience', 'Multi-team management', 'Strategic planning'],
          responsibilities: ['Multi-team leadership', 'Strategic planning', 'Process improvement', 'Stakeholder management'],
          timeline: '8+ years'
        },
        {
          level: 'VP',
          title: 'VP of Engineering',
          description: 'Leading engineering organization and strategy',
          requirements: ['10+ years experience', 'Organizational leadership', 'Strategic vision'],
          responsibilities: ['Engineering strategy', 'Organizational leadership', 'Executive collaboration', 'Industry leadership'],
          timeline: '10+ years'
        }
      ]
    },
    {
      title: 'Specialist',
      description: 'Deep expertise in specific technical domains',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      levels: [
        {
          level: 'Expert',
          title: 'Domain Expert',
          description: 'Deep expertise in specific technical areas',
          requirements: ['5+ years in domain', 'Deep technical knowledge', 'Industry recognition'],
          responsibilities: ['Technical expertise', 'Knowledge sharing', 'Innovation', 'Consultation'],
          timeline: '5+ years'
        },
        {
          level: 'Architect',
          title: 'Solution Architect',
          description: 'Designing complex technical solutions',
          requirements: ['8+ years experience', 'System design expertise', 'Business understanding'],
          responsibilities: ['Solution design', 'Technical strategy', 'Stakeholder collaboration', 'Best practices'],
          timeline: '8+ years'
        },
        {
          level: 'Fellow',
          title: 'Technical Fellow',
          description: 'Highest level of technical expertise and recognition',
          requirements: ['15+ years experience', 'Industry leadership', 'Innovation impact'],
          responsibilities: ['Technical vision', 'Innovation leadership', 'Industry influence', 'Strategic guidance'],
          timeline: '15+ years'
        }
      ]
    }
  ];

  const developmentPrograms = [
    {
      icon: GraduationCap,
      title: 'Technical Skills Development',
      description: 'Continuous learning in cutting-edge technologies',
      programs: [
        'Advanced AI and Machine Learning',
        'Quantum Computing Fundamentals',
        'Space Technology Applications',
        'Cybersecurity Best Practices',
        'Cloud Architecture & DevOps'
      ]
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Building leadership skills at all levels',
      programs: [
        'Team Leadership Fundamentals',
        'Strategic Thinking & Planning',
        'Communication & Influence',
        'Change Management',
        'Executive Leadership'
      ]
    },
    {
      icon: Globe,
      title: 'Business Acumen',
      description: 'Understanding business context and strategy',
      programs: [
        'Business Strategy Fundamentals',
        'Financial Literacy',
        'Customer Understanding',
        'Market Analysis',
        'Product Management'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'Fostering innovation and creative thinking',
      programs: [
        'Design Thinking',
        'Innovation Methodologies',
        'Creative Problem Solving',
        'Research & Development',
        'Patent & IP Strategy'
      ]
    }
  ];

  const mentorshipPrograms = [
    {
      icon: Users,
      title: 'Formal Mentorship',
      description: 'Structured mentorship relationships with experienced leaders',
      benefits: [
        'One-on-one guidance',
        'Career planning support',
        'Skill development',
        'Network building'
      ]
    },
    {
      icon: Brain,
      title: 'Technical Mentorship',
      description: 'Deep technical guidance from domain experts',
      benefits: [
        'Technical skill development',
        'Best practices sharing',
        'Code review guidance',
        'Architecture insights'
      ]
    },
    {
      icon: Target,
      title: 'Career Mentorship',
      description: 'Strategic career guidance and planning',
      benefits: [
        'Career path planning',
        'Goal setting',
        'Performance improvement',
        'Advancement strategies'
      ]
    },
    {
      icon: Globe,
      title: 'Cross-functional Mentorship',
      description: 'Learning from different areas of the business',
      benefits: [
        'Broad perspective',
        'Cross-functional skills',
        'Business understanding',
        'Network expansion'
      ]
    }
  ];

  const growthMetrics = [
    { number: '95%', label: 'Internal Promotions', icon: TrendingUp },
    { number: '200+', label: 'Training Programs', icon: GraduationCap },
    { number: '50+', label: 'Mentorship Pairs', icon: Users },
    { number: '24/7', label: 'Learning Resources', icon: BookOpen }
  ];
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const career-development: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>career-development | Zion Tech Group</title>
        <meta name="description" content="career-development - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">career-development</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default career-development;
