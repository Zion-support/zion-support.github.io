import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  ShoppingCart, 
  Headphones, 
  Mail, 
  Search, 
  Clock, 
  DollarSign, 
  Target, 
  Workflow, 
  Atom, 
  Truck, 
  Factory, 
  Leaf, 
  Satellite, 
  Building, 
  Gauge, 
  MessageCircle, 
  Calendar, 
  Package, 
  CreditCard, 
  Globe2, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Settings, 
  Eye, 
  Heart, 
  GraduationCap, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Award as AwardIcon, 
  Users as UsersIcon, 
  Globe as GlobeIcon, 
  Target as TargetIcon, 
  TrendingUp as TrendingUpIcon, 
  Star as StarIcon, 
  CheckCircle as CheckCircleIcon, 
  ArrowRight as ArrowRightIcon, 
  Zap as ZapIcon, 
  Brain as BrainIcon, 
  Cloud as CloudIcon, 
  Shield as ShieldIcon, 
  Rocket as RocketIcon, 
  Cpu as CpuIcon, 
  Lock as LockIcon, 
  Code as CodeIcon, 
  Database as DatabaseIcon, 
  Network as NetworkIcon, 
  Smartphone as SmartphoneIcon, 
  BarChart3 as BarChart3Icon, 
  MessageSquare as MessageSquareIcon, 
  FileText as FileTextIcon, 
  ShoppingCart as ShoppingCartIcon, 
  Headphones as HeadphonesIcon, 
  Mail as MailIcon, 
  Search as SearchIcon, 
  Clock as ClockIcon, 
  DollarSign as DollarSignIcon, 
  Workflow as WorkflowIcon, 
  Atom as AtomIcon, 
  Truck as TruckIcon, 
  Factory as FactoryIcon, 
  Leaf as LeafIcon, 
  Satellite as SatelliteIcon, 
  Building as BuildingIcon, 
  Gauge as GaugeIcon, 
  MessageCircle as MessageCircleIcon, 
  Calendar as CalendarIcon, 
  Package as PackageIcon, 
  CreditCard as CreditCardIcon, 
  Globe2 as Globe2Icon, 
  ShieldCheck as ShieldCheckIcon, 
  Lightbulb as LightbulbIcon, 
  Settings as SettingsIcon, 
  Eye as EyeIcon, 
  Heart as HeartIcon, 
  GraduationCap as GraduationCapIcon, 
  ShoppingBag as ShoppingBagIcon, 
  MapPin as MapPinIcon, 
  Phone as PhoneIcon 
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we do, ensuring your data and systems are protected.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in all our deliverables and client interactions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business transformation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team specializing in AI, ML, and data science solutions.',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Engineers',
      description: 'Certified professionals in AWS, Azure, and Google Cloud platforms.',
      image: '/team/cloud-team.jpg'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Specialists',
      description: 'Certified security professionals with expertise in threat detection and prevention.',
      image: '/team/security-team.jpg'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are a leading technology solutions provider dedicated to transforming businesses 
                through innovative AI, cloud infrastructure, and digital transformation services.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  To empower organizations with cutting-edge technology solutions that drive innovation, 
                  enhance security, and accelerate digital transformation.
                </p>
                <p className="text-gray-600">
                  We believe technology should be an enabler, not a barrier. Our mission is to make 
                  advanced AI, cloud, and security technologies accessible and beneficial for businesses of all sizes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  To be the world's most trusted technology partner, recognized for our innovation, 
                  reliability, and commitment to client success.
                </p>
                <p className="text-gray-600">
                  We envision a future where every organization can leverage the power of AI and 
                  cloud technologies to achieve unprecedented growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                    <value.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, 
                business, and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-cyan-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-cyan-100">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-cyan-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your business with our technology solutions? 
                Contact us today for a free consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-600 hover:text-cyan-700">
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-600 hover:text-cyan-700">
                  +1 302 464 0950
                </a>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
