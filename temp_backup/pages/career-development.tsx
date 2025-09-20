import React from 'react',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import Link from 'next/link',
import { 
  TrendingUp, GraduationCap, Users, Award, Target, 
  ArrowRight, CheckCircle, Star, Infinity, 
  Eye, Sparkles, Clock, Zap, BookOpen, Globe,
  Brain, Atom, Rocket, Shield, Cloud, Cpu,
  Compass, Lightbulb, Trophy, Map
} from 'lucide-react',

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
          requirements: ['Bachelor\'s degree or equivalentBasic programming knowledge', 'Eagerness to learn'],
          responsibilities: ['Code developmentTesting and debugging', 'DocumentationTeam collaboration'],
          timeline: '0-2 years'
        },
        {
          level: 'Mid',
          title: 'Software Engineer',
          description: 'Contributing significantly to technical projects',
          requirements: ['2+ years experienceStrong technical skills', 'Project delivery experience'],
          responsibilities: ['Feature developmentCode reviews', 'Technical designMentoring juniors'],
          timeline: '2-5 years'
        },
        {
          level: 'Senior',
          title: 'Senior Engineer',
          description: 'Technical leadership and complex problem solving',
          requirements: ['5+ years experienceDeep technical expertise', 'Leadership experience'],
          responsibilities: ['Technical architectureSystem design', 'Team leadershipInnovation'],
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
          requirements: ['Senior-level technical skillsTeam leadership experience', 'Strategic thinking'],
          responsibilities: ['Technical strategyTeam leadership', 'Architecture decisionsProject planning'],
          timeline: '5-8 years'
        },
        {
          level: 'Principal',
          title: 'Principal Engineer',
          description: 'Setting technical direction across multiple teams',
          requirements: ['8+ years experienceCross-team influence', 'Strategic vision'],
          responsibilities: ['Technical strategyCross-team coordination', 'Innovation leadershipMentorship'],
          timeline: '8+ years'
        },
        {
          level: 'Distinguished',
          title: 'Distinguished Engineer',
          description: 'Industry-recognized technical leadership',
          requirements: ['10+ years experienceIndustry recognition', 'Strategic impact'],
          responsibilities: ['Company-wide technical strategyIndustry thought leadership', 'Innovation vision'],
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
          requirements: ['Technical backgroundPeople management skills', 'Project delivery experience'],
          responsibilities: ['Team managementProject delivery', 'Career developmentTechnical oversight'],
          timeline: '5-8 years'
        },
        {
          level: 'Director',
          title: 'Engineering Director',
          description: 'Leading multiple teams and strategic initiatives',
          requirements: ['8+ years experienceMulti-team management', 'Strategic planning'],
          responsibilities: ['Multi-team leadershipStrategic planning', 'Process improvementStakeholder management'],
          timeline: '8+ years'
        },
        {
          level: 'VP',
          title: 'VP of Engineering',
          description: 'Leading engineering organization and strategy',
          requirements: ['10+ years experienceOrganizational leadership', 'Strategic vision'],
          responsibilities: ['Engineering strategyOrganizational leadership', 'Executive collaborationIndustry leadership'],
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
          requirements: ['5+ years in domainDeep technical knowledge', 'Industry recognition'],
          responsibilities: ['Technical expertiseKnowledge sharing', 'InnovationConsultation'],
          timeline: '5+ years'
        },
        {
          level: 'Architect',
          title: 'Solution Architect',
          description: 'Designing complex technical solutions',
          requirements: ['8+ years experienceSystem design expertise', 'Business understanding'],
          responsibilities: ['Solution designTechnical strategy', 'Stakeholder collaborationBest practices'],
          timeline: '8+ years'
        },
        {
          level: 'Fellow',
          title: 'Technical Fellow',
          description: 'Highest level of technical expertise and recognition',
          requirements: ['15+ years experienceIndustry leadership', 'Innovation impact'],
          responsibilities: ['Technical visionInnovation leadership', 'Industry influenceStrategic guidance'],
          timeline: '15+ years'
        }
      ]
    }
  ],

  const developmentPrograms = [
    {
      icon: GraduationCap,
      title: 'Technical Skills Development',
      description: 'Continuous learning in cutting-edge technologies',
      programs: [
        'Advanced AI and Machine LearningQuantum Computing Fundamentals',
        'Space Technology ApplicationsCybersecurity Best Practices',
        'Cloud Architecture & DevOps'
      ]
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Building leadership skills at all levels',
      programs: [
        'Team Leadership FundamentalsStrategic Thinking & Planning',
        'Communication & InfluenceChange Management',
        'Executive Leadership'
      ]
    },
    {
      icon: Globe,
      title: 'Business Acumen',
      description: 'Understanding business context and strategy',
      programs: [
        'Business Strategy FundamentalsFinancial Literacy',
        'Customer UnderstandingMarket Analysis',
        'Product Management'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'Fostering innovation and creative thinking',
      programs: [
        'Design ThinkingInnovation Methodologies',
        'Creative Problem SolvingResearch & Development',
        'Patent & IP Strategy'
      ]
    }
  ],

  const mentorshipPrograms = [
    {
      icon: Users,
      title: 'Formal Mentorship',
      description: 'Structured mentorship relationships with experienced leaders',
      benefits: [
        'One-on-one guidanceCareer planning support',
        'Skill developmentNetwork building'
      ]
    },
    {
      icon: Brain,
      title: 'Technical Mentorship',
      description: 'Deep technical guidance from domain experts',
      benefits: [
        'Technical skill developmentBest practices sharing',
        'Code review guidanceArchitecture insights'
      ]
    },
    {
      icon: Target,
      title: 'Career Mentorship',
      description: 'Strategic career guidance and planning',
      benefits: [
        'Career path planningGoal setting',
        'Performance improvementAdvancement strategies'
      ]
    },
    {
      icon: Globe,
      title: 'Cross-functional Mentorship',
      description: 'Learning from different areas of the business',
      benefits: [
        'Broad perspectiveCross-functional skills',
        'Business understandingNetwork expansion'
      ]
    }
  ],

  const growthMetrics = [
    { number: '95%', label: 'Internal Promotions', icon: TrendingUp },
    { number: '200+', label: 'Training Programs', icon: GraduationCap },
    { number: '50+', label: 'Mentorship Pairs', icon: Users },
    { number: '24/7', label: 'Learning Resources', icon: BookOpen }
  ],

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
  )
},

export default career-development,
