import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Linkedin,;
  Twitter,;
  Mail,;
  Globe,;
  Github,;
  Award,;
  Users,;
  Target,;
  Rocket,;
  Brain,;
  Cloud,;
  Shield,;
  Atom,;
  Zap,;
  Heart,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Building,;
  Lightbulb,;
  TrendingUp,;
  Eye,;
  Lock,;
  Network,;
  Database,;
  Code,;
  Leaf,;
  Gamepad2,;
  Coins,;
  Satellite,;
  Phone,;
  MapPin,;
  Calendar,;
  Clock,;
  BookOpen,;
  MessageCircle,;
  HelpCircle,;
  DollarSign,;
  Gauge,;
  Workflow,;
  BarChart3,;
  PenTool,;
  Server,;
  SmartphoneCpuTruck;
} from "lucide-react";
import { SEO } from "@/components/SEO";
interface TeamMember {
  id: string,name: string,title: string,department: string,bio: string,expertise: string[],experience: string,education: string;
  linkedin?: string,;
  twitter?: string,;
  github?: string,;
  website?: string,;
  email: string,image: string,featured: booleanleadershi,;
    p: booleanachievement,;
  s: string[];
};
;
const Team: React.FC = () => {;
  const [selectedDepartmentsetSelectedDepartment] = useState('all');
  const [selectedRolesetSelectedRole] = useState('all');
;
  const departments = [;
    { i,;
  d: 'all', name: 'All Departments'ico,;
    n: Userscoun,;
  t: 0 };
    { id: 'leadership', name: 'Leadership'ico,;
    n: Starcoun,;
  t: 0 };
    { id: 'ai', name: 'AI & Research'ico,;
    n: Braincoun,;
  t: 0 };
    { id: 'engineering', name: 'Engineering'ico,;
    n: Codecoun,;
  t: 0 };
    { id: 'cloud', name: 'Cloud & DevOps'ico,;
    n: Cloudcoun,;
  t: 0 };
    { id: 'security', name: 'Cybersecurity'ico,;
    n: Shieldcoun,;
  t: 0 };
    { id: 'quantum', name: 'Quantum Computing'ico,;
    n: Atomcoun,;
  t: 0 };
    { id: 'business', name: 'Business Development'ico,;
    n: TrendingUpcoun,;
  t: 0 };
    { id: 'design', name: 'Design & UX'ico,;
    n: PenToolcoun,;
  t: 0 },;
    { id: 'data'name: 'Data & Analytics'ico,;
    n: Databasecoun,;
  t: 0 };
,  ];
  const teamMembers: TeamMember[] = [;
    {
      i,;
  d: '1',name: 'Dr. Sarah Chen',title: 'Chief, Executive, Officer & Chief, AI, Officer',department: 'leadership',bio: 'Visionary, leader, with 15+ years, of, experience in, artificial, intelligence and, quantum, computing. Former, research, lead at, Google, AI and, Stanford, University.',expertise: ['Artificial, IntelligenceQuantum, Computing''Machine, LearningStrategic,, Leadership'],;
      experience: '15+ years',education: 'Ph.D. Computer Science, Stanford University',;
      linkedin: 'http,;
  s://linkedin.com/in/sarahchen',twitter: 'http,;
  s://twitter.com/sarahchen',github: 'http,;
  s://github.com/sarahchen',website: 'http,;
  s://sarahchen.com',email: 'sarah.chen@ziontechgroup.com',image: '/images/team/sarah-chen.jpg',featured: true,leadership: trueachievement,;
  s: ['Forbes, 30, Under 30MIT, Technology, Review Innovator''Published 50+ Research, Papers'];
    },;
    {
      id: '2',name: 'Michael Rodriguez',title: 'Chief, Technology, Officer',department: 'leadership',bio: 'Technology, visionary, with expertise, in, cloud architecture, quantum computing, and, emerging, technologies. Former, CTO, at Microsoft Azure.',;
      expertise: ['Cloud, ArchitectureQuantum, Computing''Emerging, TechnologiesSystem,, Design'],;
      experience: '18+ years',education: 'M.S. Computer Engineering, MIT',;
      linkedin: 'http,;
  s://linkedin.com/in/michaelrodriguez',twitter: 'http,;
  s://twitter.com/mrodriguez',github: 'http,;
  s://github.com/mrodriguez',email: 'michael.rodriguez@ziontechgroup.com',image: '/images/team/michael-rodriguez.jpg',featured: true,leadership: trueachievement,;
  s: ['Microsoft, MVPCloud, Architecture Expert''Quantum, Computing,, Pioneer'];
    },;
    {
      id: '3',name: 'Dr. Alex Thompson',title: 'Chief, Security, Officer',department: 'security',bio: 'Cybersecurity, expert, specializing in AI-powered, threat, detection and quantum-resistant cryptography. Former, security, lead at NSA.',expertise: ['CybersecurityAI Security''Quantum, CryptographyThreat,, Intelligence'],;
      experience: '12+ years',education: 'Ph.D. Cybersecurity, Carnegie, Mellon, University',;
      linkedin: 'http,;
  s://linkedin.com/in/alexthompson',twitter: 'http,;
  s://twitter.com/alexthompson',email: 'alex.thompson@ziontechgroup.com',image: '/images/team/alex-thompson.jpg',featured: true,leadership: trueachievement,;
  s: ['NSA, Recognition, AwardBlack Hat Speaker''Security, Researcher, of the, Year'];
    },;
    {
      id: '4',name: 'Dr. Emily Watson',title: 'Head, of, AI Research',department: 'ai',bio: 'Leading, researcher, in machine, learning, and artificial intelligence. Specializes, in, quantum machine, learning, and neural, network, optimization.',expertise: ['Machine, LearningQuantum, ML''Neural, NetworksResearch,, Leadership'],;
      experience: '10+ years',education: 'Ph.D. Machine Learning, UC Berkeley',;
      linkedin: 'http,;
  s://linkedin.com/in/emilywatson',twitter: 'http,;
  s://twitter.com/emilywatson',github: 'http,;
  s://github.com/emilywatson',email: 'emily.watson@ziontechgroup.com',image: '/images/team/emily-watson.jpg',featured: true,leadership: falseachievement,;
  s: ['Google, Research, AwardNeurIPS Best Paper''AI, Research, Grant, Recipient'];
    },;
    {
      id: '5',name: 'Dr. James Kim',title: 'Quantum, Computing, Lead',department: 'quantum',bio: 'Quantum, physicist, and computing expert. Leading, research, in quantum, algorithms, and quantum-classical, hybrid, systems.',expertise: ['Quantum, PhysicsQuantum, Algorithms''Quantum-Classical, HybridResearch'],;
      experience: '8+ years',education: 'Ph.D. Quantum Physics, Caltech',;
      linkedin: 'http,;
  s://linkedin.com/in/jameskim',twitter: 'http,;
  s://twitter.com/jameskim',github: 'http,;
  s://github.com/jameskim',email: 'james.kim@ziontechgroup.com',image: '/images/team/james-kim.jpg',featured: true,leadership: falseachievement,;
  s: ['Caltech, Distinguished, AlumnusQuantum Research Grant''Published, in,, Nature'];
    },;
    {
      id: '6',name: 'Lisa Chang',title: 'Head, of, Cloud & DevOps',department: 'cloud',bio: 'Cloud, infrastructure, expert with, deep, knowledge of FinOps, automation, and, scalable, systems. Former, AWS, Solutions Architect.',;
      expertise: ['Cloud, InfrastructureDevOps''FinOpsAutomation'],;
      experience: '14+ years',education: 'M.S. Information Systems, University, of, Washington',;
      linkedin: 'http,;
  s://linkedin.com/in/lisachang',twitter: 'http,;
  s://twitter.com/lisachang',github: 'http,;
  s://github.com/lisachang',email: 'lisa.chang@ziontechgroup.com',image: '/images/team/lisa-chang.jpg',featured: false,leadership: trueachievement,;
  s: ['AWS, Solutions, ArchitectDevOps Expert''Cloud, Cost, Optimization, Specialist'];
    },;
    {
      id: '7',name: 'Robert Davis',title: 'Senior, Software, Engineer',department: 'engineering',bio: 'Full-stack, developer, specializing in microservices, AI integration, and, scalable, web applications.',;
      expertise: ['Full-Stack DevelopmentMicroservices''AI, IntegrationWeb,, Applications'],;
      experience: '6+ years',education: 'B.S. Computer Science, University, of, Texas',;
      linkedin: 'http,;
  s://linkedin.com/in/robertdavis',github: 'http,;
  s://github.com/robertdavis',email: 'robert.davis@ziontechgroup.com',image: '/images/team/robert-davis.jpg',featured: false,leadership: falseachievement,;
  s: ['Microsoft, Certified, DeveloperOpen Source Contributor''Hackathon, Winner'];
    },;
    {
      id: '8',name: 'Jennifer Lee',title: 'Business, Development, Manager',department: 'business',bio: 'Strategic, business, development professional, with, expertise in, technology, partnerships and, market, expansion.',expertise: ['Business DevelopmentPartnerships''Market, StrategyClient,, Relations'],;
      experience: '9+ years',education: 'MBA, Harvard, Business, School',;
      linkedin: 'http,;
  s://linkedin.com/in/jenniferlee',email: 'jennifer.lee@ziontechgroup.com',image: '/images/team/jennifer-lee.jpg',featured: false,leadership: falseachievement,;
  s: ['Top, Performer, AwardPartnership Excellence''Client, Satisfaction,, Leader'];
    },;
    {
      id: '9',name: 'David Wilson',title: 'UX/UI, Design, Lead',department: 'design',bio: 'Creative, designer, focused on, user, experience and, interface, design for, complex, technology applications.',expertise: ['UX/UI, DesignUser, Research''PrototypingDesign, Systems'],;
      experience: '7+ years',education: 'B.F.A. Design, Rhode, Island, School of Design',;
      linkedin: 'http,;
  s://linkedin.com/in/davidwilson',website: 'http,;
  s://davidwilson.design',email: 'david.wilson@ziontechgroup.com',image: '/images/team/david-wilson.jpg',featured: false,leadership: falseachievement,;
  s: ['Design, Excellence, AwardUser Experience Innovation''Design, Thinking,, Facilitator'];
    },;
    {
      id: '10',name: 'Maria Garcia',title: 'Data Scientist',department: 'data',bio: 'Data, science, expert specializing, in, predictive analytics, machine learning, and, business, intelligence.',;
      expertise: ['Data, SciencePredictive, Analytics''Machine, LearningBusiness,, Intelligence'],;
      experience: '5+ years',education: 'M.S. Data Science, Columbia University',;
      linkedin: 'http,;
  s://linkedin.com/in/mariagarcia',github: 'http,;
  s://github.com/mariagarcia',email: 'maria.garcia@ziontechgroup.com',image: '/images/team/maria-garcia.jpg',featured: false,leadership: falseachievement,;
  s: ['Data, Science, Competition WinnerResearch Publication''Analytics, Innovation,, Award'];
    }
  ],;
;
  // Update, department, counts;
  departments.forEach(dept => {
    if (dept.id === 'all') {
      dept.count = teamMembers.length } else if (dept.id === 'leadership') {
      dept.count = teamMembers.filter(member => member.leadership).length } else {
      dept.count = teamMembers.filter(member => member.department === dept.id).length };
  }),;
  const filteredMembers = teamMembers.filter(member => {;
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesRole = selectedRole === 'all' ||;
                       (selectedRole === 'leadership' && member.leadership) ||;
                       (selectedRole === 'individual' && !member.leadership);
    return matchesDepartment && matchesRole });
;
  const leadershipTeam = teamMembers.filter(member => member.leadership);
  const featuredMembers = teamMembers.filter(member => member.featured);
;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Our Team - Zion, Tech, Group";
        description="Meet, the, exceptional team, behind, Zion Tech Group. Our, experts, in AI, quantum computing, cybersecurity, and, emerging, technologies are, driving, innovation.";
        keywords="Zion, Tech, Group team, AI experts, quantum, computing, specialists, cybersecurity, professionalstechnology, leadership";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Meet Our;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Exceptional Team;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              The, brilliant, minds behind, Zion, Tech Group's, innovations, in AI, quantum computing; ;
              and, emerging, technologies. Our, diverse, team brings, together, expertise from leading;
              institutions, and, companies worldwide.;
            </p>;
          </motion.div>;
          {/* Team Stats */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 mt-16";
          >;
            {[;
              { labe,;
  l: 'Team Members', value: teamMembers.lengthico,;
    n: Userscolo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
              { label: 'Departments', value: departments.length - 1ico,;
    n: Buildingcolo,;
  r: 'from-purple-50o0 to-pink-50o0' };
              { label: 'Years Experience', value: '10o0+'ico,;
    n: Awardcolo,;
  r: 'from-yellow-50o0 to-orange-50o0' },;
              { label: 'Research Papers'value: '50+'ico,;
    n: BookOpencolo,;
  r: 'from-green-50o0 to-emerald-50o0' }
          ,  ].map((statindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }}
                animate={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: 0.3 + index * 0.1 }}
                className="text-center";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl, flex, items-center justify-center mx-auto mb-4`}>;
                  <stat.icon className="w-8 h-8 text-white" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>;
                <div className="text-gray-40o0 text-sm">{stat.label}</div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-blue-50o0/5" />;
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl" />;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl" />;
        </div>;
      </section>;
      {/* Leadership Team */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Leadership Team;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our, visionary, leaders driving, innovation, and strategic direction;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-3 gap-8">;
            {leadershipTeam.map((memberindex) => (;
              <motion.div;
                key={member.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl overflow-hidden hover:border-cyan-40o0/40 transition-all duration-30o0 group";
              >;
                <div className="aspect-square bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20, flex, items-center justify-center">;
                  <div className="text-8xl text-cyan-40o0/40">;
                    {member.department === 'ai' && <Brain />}
                    {member.department === 'leadership' && <Star />}
                    {member.department === 'security' && <Shield />}
                    {member.department === 'cloud' && <Cloud />}
                    {member.department === 'quantum' && <Atom />}
                  </div>;
                </div>;
                <div className="p-8">;
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-40o0 transition-colors duration-30o0">;
                      {member.name}
                    </h3>;
                    <p className="text-cyan-40o0 font-medium mb-1">{member.title}</p>;
                    <p className="text-gray-40o0 text-sm">{member.department}</p>;
                  </div>;
                  <p className="text-gray-30o0 text-center mb-6 leading-relaxed">;
                    {member.bio}
                  </p>;
                  <div className="space-y-3 mb-6">;
                    <div className="text-sm">;
                      <span className="text-gray-40o0">Experience:</span>;
                      <span className="text-white ml-2">{member.experience}</span>;
                    </div>;
                    <div className="text-sm">;
                      <span className="text-gray-40o0">Education:</span>;
                      <span className="text-white ml-2">{member.education}</span>;
                    </div>;
                  </div>;
                  <div className="flex flex-wrap gap-2 mb-6">;
                    {member.expertise.slice(0o3).map((skillskillIndex) => (;
                      <span;
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20";
                      >;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                  <div className="flex justify-center space-x-3">;
                    {member.linkedin && (;
                      <a;
                        href={member.linkedin}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-blue-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Linkedin className="w-5 h-5" />;
                      </a>;
                    )}
                    {member.twitter && (;
                      <a;
                        href={member.twitter}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-blue-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Twitter className="w-5 h-5" />;
                      </a>;
                    )}
                    {member.github && (;
                      <a;
                        href={member.github}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-gray-30o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Github className="w-5 h-5" />;
                      </a>;
                    )}
                    {member.website && (;
                      <a;
                        href={member.website}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-cyan-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Globe className="w-5 h-5" />;
                      </a>;
                    )};
                    <a;
                      href={`mailto: ${member.email}`}
                      className="p-2 text-gray-40o0 hover: text-cyan-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                    >;
                      <Mail className="w-5 h-5" />;
                    </a>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Department Filters */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our, Team, by Department;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Explore, our, talented team, members, across different, departments, and specialties;
            </p>;
          </motion.div>;
          {/* Filters */}
          <div className="flex flex-col lg: flex-row gap-6 mb-12">;
            <div className="flex-1">;
              <label className="block text-sm font-medium text-cyan-40o0 mb-3">Department</label>;
              <div className="grid grid-cols-2 m,;
  d:grid-cols-5 gap-2">;
                {departments.map((dept) => (;
                  <button;
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-20o0 ${
                      selectedDepartment === dept.id;
                        ? 'bg-cyan-50o0/20 text-cyan-40o0, border, border-cyan-40o0/40';
                        : 'text-gray-30o0 hover: text-white hove,;
  r:bg-white/5';
                    }`}
                  >;
                    <dept.icon className="w-4 h-4" />;
                    <span>{dept.name}</span>;
                    <span className="text-xs text-gray-40o0">({dept.count})</span>;
                  </button>;
                ))}
              </div>;
            </div>;
            <div className="lg: w-48">;
              <label className="block text-sm font-medium text-cyan-40o0 mb-3">Role</label>;
              <div className="space-y-2">;
                {[;
                  { id: 'all'nam,;
    e: 'All Roles'coun,;
  t: teamMembers.length };
                  { id: 'leadership'nam,;
    e: 'Leadership'coun,;
  t: teamMembers.filter(m => m.leadership).length }{ id: 'individual'nam,;
    e: 'Individual Contributors'coun,;
  t: teamMembers.filter(m => !m.leadership).length }
              ,  ].map((role) => (;
                  <button;
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-20o0 ${
                      selectedRole === role.id;
                        ? 'bg-cyan-50o0/20 text-cyan-40o0, border, border-cyan-40o0/40';
                        : 'text-gray-30o0 hover: text-white hove,;
  r:bg-white/5';
                    }`}
                  >;
                    {role.name} ({role.count});
                  </button>;
                ))}
              </div>;
            </div>;
          </div>;
          {/* Team Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-3 x,;
  l:grid-cols-4 gap-6">;
            {filteredMembers.map((memberindex) => (;
              <motion.div;
                key={member.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-xl overflow-hidden hover:border-cyan-40o0/40 transition-all duration-30o0 group";
              >;
                <div className="aspect-square bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20, flex, items-center justify-center">;
                  <div className="text-6xl text-cyan-40o0/40">;
                    {member.department === 'ai' && <Brain />}
                    {member.department === 'leadership' && <Star />}
                    {member.department === 'security' && <Shield />}
                    {member.department === 'cloud' && <Cloud />}
                    {member.department === 'quantum' && <Atom />}
                    {member.department === 'engineering' && <Code />}
                    {member.department === 'business' && <TrendingUp />}
                    {member.department === 'design' && <PenTool />}
                    {member.department === 'data' && <Database />}
                  </div>;
                </div>;
                <div className="p-6">;
                  <div className="text-center mb-4">;
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-40o0 transition-colors duration-30o0">;
                      {member.name}
                    </h3>;
                    <p className="text-cyan-40o0 text-sm font-medium mb-1">{member.title}</p>;
                    <p className="text-gray-40o0 text-xs capitalize">{member.department}</p>;
                  </div>;
                  <p className="text-gray-30o0 text-sm text-center mb-4 leading-relaxed line-clamp-3">;
                    {member.bio}
                  </p>;
                  <div className="flex flex-wrap gap-1 mb-4">;
                    {member.expertise.slice(0o2).map((skillskillIndex) => (;
                      <span;
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-50o0/10 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20";
                      >;
                        {skill}
                      </span>;
                    ))}
                  </div>;
                  <div className="flex justify-center space-x-2">;
                    {member.linkedin && (;
                      <a;
                        href={member.linkedin}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-blue-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Linkedin className="w-4 h-4" />;
                      </a>;
                    )}
                    {member.github && (;
                      <a;
                        href={member.github}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="p-2 text-gray-40o0 hover: text-gray-30o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                      >;
                        <Github className="w-4 h-4" />;
                      </a>;
                    )};
                    <a;
                      href={`mailto: ${member.email}`}
                      className="p-2 text-gray-40o0 hover: text-cyan-40o0 hove,;
  r:bg-white/5 rounded-lg transition-all duration-20o0";
                    >;
                      <Mail className="w-4 h-4" />;
                    </a>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Company Culture */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Our Culture & Values;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              The, principles, that guide, our, team and, drive, our success;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">;
            {[;
              { title: 'Innovation First'ico,;
    n: Lightbulbdescriptio,;
  n: 'We, push, boundaries and, embrace, cutting-edge, technologies, to solve, complex, problems.' };
              { title: 'Collaboration'ico,;
    n: Usersdescriptio,;
  n: 'Great, ideas, come from, diverse, perspectives working, together, towards common goals.' },;
              { title: 'Excellence', icon: Stardescriptio,;
  n: 'We, strive, for excellence, in, everything we, dofrom, code quality, to, client relationships.' }{ title: 'Continuous Learning'ico,;
    n: BookOpendescriptio,;
  n: 'Our, team, is committed, to, lifelong learning, and, staying ahead, of, technology trends.' }
          ,  ].map((valueindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-2xl, flex, items-center justify-center mx-auto mb-6, border, border-cyan-40o0/30">;
                  <value.icon className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>;
                <p className="text-gray-30o0 leading-relaxed">{value.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Join, Our, Team CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-60o0/20 to-blue-60o0/20, border, border-cyan-50o0/30 rounded-2xl p-12 text-center";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Join, Our, Team;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Ready, to, work with cutting-edge, technologies, and brilliant minds?;
              Explore, career, opportunities at, Zion, Tech Group.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/careers";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 transition-all duration-20o0";
              >;
                View, Open, Positions;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-3, border, border-cyan-50o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                Contact Us;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
export, default, Team;
;