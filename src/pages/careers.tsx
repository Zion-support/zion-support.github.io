import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Target,
  Handshake,
  Lightbulb,
  Atom,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  Eye,
  PenTool,
  Leaf,
  Satellite,
  FileText,
  Sparkles,
  Tag,
  BookOpen,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Coffee,
  Gamepad2,
  Palette,
  Music,
  Camera,
  Plane,
  Car,
  Home,
  Wifi,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  Users as UsersIcon,
  Zap as ZapIcon
} from 'lucide-react';

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 24 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'data-science', name: 'Data Science', count: 3 },
    { id: 'product', name: 'Product Management', count: 2 },
    { id: 'design', name: 'Design & UX', count: 2 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 24 },
    { id: 'remote', name: 'Remote', count: 15 },
    { id: 'new-york', name: 'New York, NY', count: 4 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 3 },
    { id: 'london', name: 'London, UK', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Software Engineer - Full Stack',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Build scalable web applications and APIs using modern technologies. Lead technical decisions and mentor junior developers.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Comprehensive health coverage',
        'Professional development budget'
      ],
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-ml',
      location: 'san-francisco',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$140k - $200k',
      description: 'Research and develop cutting-edge AI algorithms for healthcare, finance, and manufacturing applications.',
      requirements: [
        'PhD in Computer Science, Mathematics, or related field',
        'Strong background in machine learning and deep learning',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Published research in top-tier conferences'
      ],
      benefits: [
        'Competitive salary and equity',
        'Access to cutting-edge computing resources',
        'Conference attendance and publication support',
        'Collaboration with leading researchers'
      ],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'Cybersecurity Engineer',
      department: 'cybersecurity',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110k - $160k',
      description: 'Design and implement security solutions to protect our infrastructure and customer data.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of network security and encryption',
        'Experience with compliance frameworks (SOC2, ISO27001)',
        'Familiarity with threat modeling and risk assessment'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Security certifications support',
        'Latest security tools and training'
      ],
      posted: '3 days ago',
      urgent: true
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'new-york',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$90k - $140k',
      description: 'Analyze complex datasets to extract insights and build predictive models for business applications.',
      requirements: [
        'Strong statistical and mathematical background',
        'Experience with Python, R, or similar languages',
        'Knowledge of SQL and data warehousing',
        'Experience with machine learning algorithms'
      ],
      benefits: [
        'Competitive salary and equity',
        'Hybrid work model',
        'Data science conference attendance',
        'Access to large-scale datasets'
      ],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'product',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $150k',
      description: 'Lead product strategy and development for our AI-powered solutions across different industries.',
      requirements: [
        'Experience in B2B SaaS product management',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Technical background or ability to work with technical teams'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Product management training and certification',
        'Direct impact on company strategy'
      ],
      posted: '2 weeks ago',
      urgent: false
    },
    {
      id: 6,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'london',
      type: 'Full-time',
      experience: '3+ years',
      salary: '£60k - £90k',
      description: 'Create intuitive and beautiful user experiences for our AI-powered applications.',
      requirements: [
        'Strong portfolio demonstrating UX/UI skills',
        'Experience with design tools (Figma, Sketch, etc.)',
        'Understanding of user research and testing',
        'Experience with design systems and component libraries'
      ],
      benefits: [
        'Competitive salary and equity',
        'Hybrid work model',
        'Design tools and software provided',
        'Creative freedom and innovation focus'
      ],
      posted: '1 week ago',
      urgent: false
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = activeDepartment === 'all' || job.department === activeDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from diverse teams working together. We value every voice and perspective.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'We focus on solving real-world problems that make a difference in people\'s lives.'
    },
    {
      icon: Heart,
      title: 'People First',
      description: 'Our team is our greatest asset. We invest in growth, well-being, and work-life balance.'
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules and home office setup support.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity packages, and performance bonuses.'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget, conference attendance, and learning resources.'
    },
    {
      icon: Coffee,
      title: 'Team Culture',
      description: 'Regular team events, hackathons, and a collaborative, supportive environment.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance recognition, career advancement opportunities, and mentorship programs.'
    }
  ];

  const culture = [
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Dedicated time for exploring new ideas and technologies.'
    },
    {
      icon: Gamepad2,
      title: 'Fun & Games',
      description: 'Regular game nights, team challenges, and creative activities.'
    },
    {
      icon: Palette,
      title: 'Creative Freedom',
      description: 'Express your creativity through design, code, and problem-solving.'
    },
    {
      icon: Plane,
      title: 'Travel Opportunities',
      description: 'Conference attendance and team retreats in exciting locations.'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group careers, technology jobs, AI jobs, cybersecurity careers"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Help us build the future of technology. Join a team of innovators, problem-solvers, 
              and visionaries who are transforming industries through AI and cutting-edge solutions.
            </p>
            <div className="mt-8">
              <Link
                to="#open-positions"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and the culture we build together.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work and grow their careers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We foster an environment where creativity, collaboration, and innovation thrive.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/20">
                  <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300">Find the perfect role for your skills and career goals</p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Department Filter */}
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDepartment(dept.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      activeDepartment === dept.id
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
                    }`}
                  >
                    <span>{dept.name}</span>
                    <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                      {dept.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Location Filter */}
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedLocation === location.id
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-slate-800/50 border-slate-600/50 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{location.name}</span>
                    <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                      {location.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-400/30">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {locations.find(l => l.id === job.location)?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        to={`/careers/${job.id}`} // Assuming a job detail page
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{job.description}</p>

                  {/* Requirements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {job.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <Link
                      to={`/careers/${job.id}`} // Assuming a job detail page
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200">
                <FileText className="w-5 h-5 mr-2" />
                Submit Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}