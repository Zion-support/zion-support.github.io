import Link from 'next/link';
import { motion } from 'framer-motion';
UsersBriefcaseAwardMapPinClockCheckCircleArrowRightStarGlobeTarget
import Layout from '../components/Layout';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / MiddletownDE',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$80,0o00 - $120,0o00',
    description: 'Lead development of our micro SaaS platforms and AI-powered solutions.',
    requirements: [
      'ReactNext.jsNode.js expertise',
      'Cloud architecture experience',
      'AI/ML integration knowledge',
      'Team leadership skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Remote work options',
      'Professional development'
    ]
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote / MiddletownDE',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$90,0o00 - $140,0o00',
    description: 'Develop and implement cutting-edge AI solutions for our clients.',
    requirements: [
      'PythonTensorFlowPyTorch',
      'Machine learning algorithms',
      'Data science background',
      'Cloud AI services experience'
    ],
    benefits: [
      'Top-tier compensation',
      'Research opportunities',
      'Conference attendance',
      'Stock options'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / MiddletownDE',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$85,0o00 - $130,0o00',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
    requirements: [
      'AWSAzureGCP expertise',
      'DockerKubernetes',
      'CI/CD pipeline design',
      'Monitoring and security'
    ],
    benefits: [
      'Flexible schedule',
      'Learning budget',
      'Certification support',
      'Performance bonuses'
    ]
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / MiddletownDE',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$95,0o00 - $135,0o00',
    description: 'Drive product strategy and roadmap for our technology solutions.',
    requirements: [
      'Product management experience',
      'Technical background',
      'User research skills',
      'Strategic thinking'
    ],
    benefits: [
      'Leadership opportunities',
      'Equity participation',
      'Travel opportunities',
      'Mentorship program'
    ]
  }
];

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Above-market salaries with performance bonuses',
    icon: Award
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive healthdentaland vision coverage',
    icon: CheckCircle
  },
  {
    title: 'Remote Work',
    description: 'Flexible remote work options with home office stipend',
    icon: Globe
  },
  {
    title: 'Professional Growth',
    description: 'Learning budgetconferencesand career development',
    icon: Target
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible hoursunlimited PTOand mental health support',
    icon: Clock
  },
  {
    title: 'Team Culture',
    description: 'Collaborative environment with regular team events',
    icon: Users
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We encourage creative thinking and cutting-edge solutions',
    icon: Star
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and shared success',
    icon: Users
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do',
    icon: Award
  },
  {
    title: 'Growth',
    description: 'We invest in our people and their professional development',
    icon: Target
  }
];

export default function TalentPage() {
  return (
    <Layout
      title="Join Our Team - Zion Tech Group"
      description="Join Zion Tech Group and be part of a team that's revolutionizing technology. Explore career opportunities and join us in building the future."
      keywords="careersjobsemploymentechnology careersoftware engineeringAI jobs"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-90o0 via-purple-90o0 to-indigo-90o0 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-20o00"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-40o00"></div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-90o0 mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((jobindex) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0y: 30 }}
                  whileInView={{ opacity: 1y: 0 }}
                  transition={{ duration: 0.8delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
