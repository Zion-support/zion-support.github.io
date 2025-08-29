<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Share2,
  Bookmark,
  Eye,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Download,
  FileText,
  Video,
  Play,
  Download as DownloadIcon,
  Mail,
  Phone,
  MapPin as MapPinIcon,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Clock as ClockIcon,
  ArrowRight,
  ChevronRight,
  Ticket,
  Microphone,
  PresentationChart,
  Camera,
  Wifi,
  Coffee,
  Utensils,
  Car,
  Plane,
  Train,
  Bus,
  Hotel,
  Building2,
  Map,
  Navigation,
  Compass,
  Target,
  Flag,
  Award as AwardIcon,
  Trophy,
  Medal,
  Ribbon,
  Gift,
  Tag,
  Hash,
  AtSign,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Link,
  Download as DownloadIcon2,
  FileText as FileTextIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  VideoOff,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Database,
  Cloud,
  Wifi as WifiIcon,
  Bluetooth,
  Satellite,
  Radio,
  Tv,
  Projector,
  Screen,
  Display,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Desktop as DesktopIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Wifi as WifiIcon2,
  Bluetooth as BluetoothIcon,
  Satellite as SatelliteIcon,
  Radio as RadioIcon,
  Tv as TvIcon,
  Projector as ProjectorIcon,
  Screen as ScreenIcon,
  Display as DisplayIcon
} from 'lucide-react';

export const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Conference', 'Webinar', 'Workshop', 'Meetup', 'Hackathon', 'Summit', 'Training', 'Networking'];
  const statuses = ['All', 'Upcoming', 'Ongoing', 'Past', 'Registration Open', 'Registration Closed'];

  const events = [
    {
      id: 1,
      title: 'Zion Tech Summit 2024: The Future of AI',
      category: 'Summit',
      status: 'Upcoming',
      date: '2024-12-20',
      time: '09:00',
      duration: '2 days',
      location: 'San Francisco Convention Center',
      address: '123 Main Street, San Francisco, CA 94102',
      virtual: false,
      hybrid: false,
      description: 'Join us for the biggest AI technology summit of the year. Explore cutting-edge AI innovations, network with industry leaders, and discover the future of artificial intelligence.',
      longDescription: 'The Zion Tech Summit 2024 is our flagship event bringing together the brightest minds in AI, machine learning, and emerging technologies. This two-day event features keynote speakers from leading tech companies, interactive workshops, networking sessions, and technology demonstrations.',
      image: '/images/events/zion-tech-summit-2024.jpg',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Innovation', 'Networking', 'Technology'],
      speakers: [
        { name: 'Dr. Sarah Chen', title: 'Chief AI Officer, Zion Tech Group', image: '/images/team/sarah-chen.jpg' },
        { name: 'Dr. Emily Watson', title: 'VP of Research, Zion Tech Group', image: '/images/team/emily-watson.jpg' },
        { name: 'Michael Rodriguez', title: 'CTO, Zion Tech Group', image: '/images/team/michael-rodriguez.jpg' }
      ],
      agenda: [
        { time: '09:00 - 10:00', session: 'Opening Keynote: The AI Revolution', speaker: 'Dr. Sarah Chen' },
        { time: '10:15 - 11:15', session: 'Panel: AI Ethics and Responsibility', speakers: 'Multiple Speakers' },
        { time: '11:30 - 12:30', session: 'Workshop: Building AI Applications', speaker: 'Dr. Emily Watson' },
        { time: '12:30 - 14:00', session: 'Networking Lunch', speaker: 'All Attendees' },
        { time: '14:00 - 15:00', session: 'AI in Healthcare: Breakthroughs', speaker: 'Guest Speaker' },
        { time: '15:15 - 16:15', session: 'Future of Quantum AI', speaker: 'Michael Rodriguez' },
        { time: '16:30 - 17:30', session: 'Closing Remarks & Networking', speaker: 'All Speakers' }
      ],
      registrationUrl: 'https://ziontechsummit2024.eventbrite.com',
      maxAttendees: 1000,
      currentAttendees: 750,
      price: '$299',
      earlyBirdPrice: '$199',
      earlyBirdDeadline: '2024-11-30',
      includes: ['Conference Access', 'Networking Sessions', 'Workshop Materials', 'Lunch & Refreshments', 'Digital Resources'],
      sponsors: ['Microsoft', 'Google Cloud', 'AWS', 'Intel', 'NVIDIA'],
      contactEmail: 'events@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4567',
      socialMedia: {
        twitter: '#ZionTechSummit2024',
        linkedin: 'Zion Tech Summit 2024',
        hashtags: ['#ZionTechSummit', '#AI2024', '#TechInnovation']
      }
    },
    {
      id: 2,
      title: 'AI in Healthcare: Webinar Series',
      category: 'Webinar',
      status: 'Upcoming',
      date: '2024-12-18',
      time: '14:00',
      duration: '90 minutes',
      location: 'Virtual Event',
      address: 'Online',
      virtual: true,
      hybrid: false,
      description: 'Join our expert panel for an in-depth discussion on AI applications in healthcare, including diagnostic tools, treatment optimization, and patient care.',
      longDescription: 'This comprehensive webinar explores the latest developments in AI-powered healthcare solutions. Learn about diagnostic AI, treatment optimization algorithms, and how artificial intelligence is transforming patient care and medical research.',
      image: '/images/events/ai-healthcare-webinar.jpg',
      featured: true,
      tags: ['Healthcare', 'AI', 'Medical Technology', 'Diagnostics', 'Patient Care'],
      speakers: [
        { name: 'Dr. Emily Watson', title: 'VP of Research, Zion Tech Group', image: '/images/team/emily-watson.jpg' },
        { name: 'Dr. Maria Garcia', title: 'Healthcare AI Specialist', image: '/images/team/maria-garcia.jpg' }
      ],
      agenda: [
        { time: '14:00 - 14:15', session: 'Introduction & Overview', speaker: 'Dr. Emily Watson' },
        { time: '14:15 - 14:45', session: 'AI in Medical Diagnostics', speaker: 'Dr. Maria Garcia' },
        { time: '14:45 - 15:15', session: 'Treatment Optimization with AI', speaker: 'Dr. Emily Watson' },
        { time: '15:15 - 15:45', session: 'Q&A Session', speaker: 'Both Speakers' },
        { time: '15:45 - 16:00', session: 'Closing Remarks', speaker: 'Dr. Emily Watson' }
      ],
      registrationUrl: 'https://ziontechgroup.com/webinars/ai-healthcare',
      maxAttendees: 500,
      currentAttendees: 320,
      price: 'Free',
      earlyBirdPrice: 'Free',
      earlyBirdDeadline: null,
      includes: ['Webinar Access', 'Q&A Participation', 'Digital Resources', 'Certificate of Attendance'],
      sponsors: ['Zion Tech Group'],
      contactEmail: 'webinars@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4568',
      socialMedia: {
        twitter: '#AIHealthcareWebinar',
        linkedin: 'AI in Healthcare Webinar',
        hashtags: ['#AIHealthcare', '#MedicalAI', '#HealthTech']
      }
    },
    {
      id: 3,
      title: 'Cybersecurity Workshop: Zero-Trust Architecture',
      category: 'Workshop',
      status: 'Upcoming',
      date: '2024-12-22',
      time: '10:00',
      duration: '6 hours',
      location: 'Zion Tech Group HQ',
      address: '456 Innovation Drive, San Francisco, CA 94105',
      virtual: false,
      hybrid: true,
      description: 'Hands-on workshop covering zero-trust security architecture implementation, best practices, and real-world applications.',
      longDescription: 'This intensive workshop provides hands-on experience with zero-trust security architecture. Participants will learn about implementing zero-trust principles, configuring security tools, and applying best practices in real-world scenarios.',
      image: '/images/events/cybersecurity-workshop.jpg',
      featured: false,
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Workshop', 'Hands-on'],
      speakers: [
        { name: 'Lisa Thompson', title: 'Cybersecurity Lead, Zion Tech Group', image: '/images/team/lisa-thompson.jpg' },
        { name: 'David Kim', title: 'Security Architect', image: '/images/team/david-kim.jpg' }
      ],
      agenda: [
        { time: '10:00 - 10:30', session: 'Introduction to Zero-Trust', speaker: 'Lisa Thompson' },
        { time: '10:30 - 12:00', session: 'Hands-on Lab: Basic Setup', speaker: 'David Kim' },
        { time: '12:00 - 13:00', session: 'Lunch Break', speaker: 'All Participants' },
        { time: '13:00 - 15:00', session: 'Advanced Configuration', speaker: 'Lisa Thompson' },
        { time: '15:00 - 16:00', session: 'Real-world Scenarios', speaker: 'David Kim' },
        { time: '16:00 - 16:30', session: 'Q&A and Discussion', speaker: 'Both Speakers' }
      ],
      registrationUrl: 'https://ziontechgroup.com/workshops/cybersecurity',
      maxAttendees: 50,
      currentAttendees: 35,
      price: '$199',
      earlyBirdPrice: '$149',
      earlyBirdDeadline: '2024-12-15',
      includes: ['Workshop Materials', 'Hands-on Lab Access', 'Lunch', 'Certificate', 'Digital Resources'],
      sponsors: ['Zion Tech Group', 'Security Partner'],
      contactEmail: 'workshops@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4569',
      socialMedia: {
        twitter: '#ZeroTrustWorkshop',
        linkedin: 'Cybersecurity Workshop',
        hashtags: ['#ZeroTrust', '#Cybersecurity', '#SecurityWorkshop']
      }
    },
    {
      id: 4,
      title: 'Quantum Computing Meetup',
      category: 'Meetup',
      status: 'Upcoming',
      date: '2024-12-25',
      time: '18:00',
      duration: '3 hours',
      location: 'Tech Hub San Francisco',
      address: '789 Tech Avenue, San Francisco, CA 94103',
      virtual: false,
      hybrid: false,
      description: 'Join fellow quantum computing enthusiasts for networking, discussions, and insights into the latest developments in quantum technology.',
      longDescription: 'A casual meetup for quantum computing enthusiasts, researchers, and professionals. Share knowledge, discuss latest developments, and network with like-minded individuals in the quantum computing space.',
      image: '/images/events/quantum-meetup.jpg',
      featured: false,
      tags: ['Quantum Computing', 'Meetup', 'Networking', 'Technology', 'Research'],
      speakers: [
        { name: 'Dr. Sarah Chen', title: 'Chief AI Officer, Zion Tech Group', image: '/images/team/sarah-chen.jpg' },
        { name: 'Guest Speaker', title: 'Quantum Researcher', image: '/images/team/guest-speaker.jpg' }
      ],
      agenda: [
        { time: '18:00 - 18:30', session: 'Networking & Refreshments', speaker: 'All Attendees' },
        { time: '18:30 - 19:00', session: 'Introduction & Updates', speaker: 'Dr. Sarah Chen' },
        { time: '19:00 - 19:45', session: 'Guest Presentation', speaker: 'Guest Speaker' },
        { time: '19:45 - 20:15', session: 'Open Discussion', speaker: 'All Attendees' },
        { time: '20:15 - 21:00', session: 'Networking & Socializing', speaker: 'All Attendees' }
      ],
      registrationUrl: 'https://meetup.com/ziontech-quantum',
      maxAttendees: 100,
      currentAttendees: 65,
      price: 'Free',
      earlyBirdPrice: 'Free',
      earlyBirdDeadline: null,
      includes: ['Event Access', 'Networking', 'Refreshments', 'Digital Resources'],
      sponsors: ['Zion Tech Group', 'Tech Hub SF'],
      contactEmail: 'meetups@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4570',
      socialMedia: {
        twitter: '#QuantumMeetup',
        linkedin: 'Quantum Computing Meetup',
        hashtags: ['#QuantumComputing', '#QuantumMeetup', '#TechMeetup']
      }
    },
    {
      id: 5,
      title: 'AI Hackathon: Sustainable Solutions',
      category: 'Hackathon',
      status: 'Upcoming',
      date: '2025-01-15',
      time: '09:00',
      duration: '48 hours',
      location: 'Innovation Center',
      address: '321 Green Street, San Francisco, CA 94104',
      virtual: false,
      hybrid: false,
      description: '48-hour hackathon focused on developing AI solutions for environmental sustainability and climate change challenges.',
      longDescription: 'Join developers, designers, and innovators for a 48-hour hackathon focused on creating AI-powered solutions for environmental sustainability. Work in teams to develop innovative applications that address climate change and environmental challenges.',
      image: '/images/events/ai-hackathon.jpg',
      featured: false,
      tags: ['Hackathon', 'AI', 'Sustainability', 'Climate Change', 'Innovation'],
      speakers: [
        { name: 'Michael Rodriguez', title: 'CTO, Zion Tech Group', image: '/images/team/michael-rodriguez.jpg' },
        { name: 'Sustainability Expert', title: 'Environmental Specialist', image: '/images/team/sustainability-expert.jpg' }
      ],
      agenda: [
        { time: 'Day 1 - 09:00', session: 'Opening Ceremony & Team Formation', speaker: 'Michael Rodriguez' },
        { time: 'Day 1 - 10:00', session: 'Hacking Begins', speaker: 'All Participants' },
        { time: 'Day 2 - 18:00', session: 'Mid-point Check-in', speaker: 'Organizers' },
        { time: 'Day 3 - 09:00', session: 'Final Submissions Due', speaker: 'All Participants' },
        { time: 'Day 3 - 14:00', session: 'Presentations & Judging', speaker: 'Judges' },
        { time: 'Day 3 - 16:00', session: 'Awards & Closing', speaker: 'Michael Rodriguez' }
      ],
      registrationUrl: 'https://ziontechgroup.com/hackathons/sustainability',
      maxAttendees: 200,
      currentAttendees: 150,
      price: '$25',
      earlyBirdPrice: '$15',
      earlyBirdDeadline: '2024-12-31',
      includes: ['Event Access', 'Workspace', 'Meals & Snacks', 'Mentorship', 'Prizes'],
      sponsors: ['Zion Tech Group', 'Environmental Partners', 'Tech Companies'],
      contactEmail: 'hackathons@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4571',
      socialMedia: {
        twitter: '#AISustainabilityHack',
        linkedin: 'AI Sustainability Hackathon',
        hashtags: ['#AIHackathon', '#Sustainability', '#ClimateTech']
      }
    },
    {
      id: 6,
      title: 'Machine Learning Training Bootcamp',
      category: 'Training',
      status: 'Past',
      date: '2024-11-15',
      time: '09:00',
      duration: '5 days',
      location: 'Zion Tech Group Training Center',
      address: '654 Learning Lane, San Francisco, CA 94106',
      virtual: false,
      hybrid: true,
      description: 'Comprehensive 5-day bootcamp covering machine learning fundamentals, algorithms, and practical applications.',
      longDescription: 'This intensive 5-day bootcamp provides comprehensive training in machine learning fundamentals, algorithms, and practical applications. Participants will gain hands-on experience with real-world datasets and projects.',
      image: '/images/events/ml-bootcamp.jpg',
      featured: false,
      tags: ['Machine Learning', 'Training', 'Bootcamp', 'Education', 'Hands-on'],
      speakers: [
        { name: 'Dr. Emily Watson', title: 'VP of Research, Zion Tech Group', image: '/images/team/emily-watson.jpg' },
        { name: 'AI Training Specialist', title: 'Senior ML Engineer', image: '/images/team/ml-specialist.jpg' }
      ],
      agenda: [
        { time: 'Day 1', session: 'ML Fundamentals & Python Basics', speaker: 'AI Training Specialist' },
        { time: 'Day 2', session: 'Supervised Learning Algorithms', speaker: 'Dr. Emily Watson' },
        { time: 'Day 3', session: 'Unsupervised Learning & Clustering', speaker: 'AI Training Specialist' },
        { time: 'Day 4', session: 'Deep Learning & Neural Networks', speaker: 'Dr. Emily Watson' },
        { time: 'Day 5', session: 'Project Work & Presentations', speaker: 'Both Speakers' }
      ],
      registrationUrl: null,
      maxAttendees: 30,
      currentAttendees: 28,
      price: '$999',
      earlyBirdPrice: '$799',
      earlyBirdDeadline: '2024-10-15',
      includes: ['Training Materials', 'Hands-on Projects', 'Lunch Daily', 'Certificate', 'Digital Resources'],
      sponsors: ['Zion Tech Group'],
      contactEmail: 'training@ziontechgroup.com',
      contactPhone: '+1 (555) 123-4572',
      socialMedia: {
        twitter: '#MLBootcamp',
        linkedin: 'ML Training Bootcamp',
        hashtags: ['#MachineLearning', '#MLBootcamp', '#AITraining']
      }
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || event.status === selectedStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const upcomingEvents = events.filter(event => event.status === 'Upcoming');
  const pastEvents = events.filter(event => event.status === 'Past');

  const stats = [
    { number: '6+', label: 'Events This Year', icon: Calendar },
    { number: '500+', label: 'Total Attendees', icon: Users },
    { number: '15+', label: 'Expert Speakers', icon: Microphone },
    { number: '8+', label: 'Event Categories', icon: Tag }
  ];

  const statusColors = {
    'Upcoming': 'text-green-400',
    'Ongoing': 'text-blue-400',
    'Past': 'text-slate-400',
    'Registration Open': 'text-yellow-400',
    'Registration Closed': 'text-red-400'
  };
=======
import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      description: 'Join industry leaders and AI experts for a comprehensive exploration of the latest artificial intelligence innovations and their business applications.',
      date: '2024-12-20',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      type: 'Conference',
      attendees: '500+',
      image: '/images/events/ai-summit.jpg',
      href: '/events/ai-innovation-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Workshop',
      description: 'Hands-on workshop exploring quantum computing fundamentals and practical applications in cryptography and optimization.',
      date: '2024-12-25',
      time: '10:00 AM - 3:00 PM',
      location: 'Zion Tech HQ, Austin',
      type: 'Workshop',
      attendees: '50',
      image: '/images/events/quantum-workshop.jpg',
      href: '/events/quantum-computing-workshop'
    },
    {
      id: 3,
      title: 'Healthcare Tech Symposium',
      description: 'Discover how AI is transforming healthcare delivery, from diagnostics to patient care optimization.',
      date: '2025-01-10',
      time: '8:00 AM - 6:00 PM',
      location: 'Boston Marriott Copley Place',
      type: 'Symposium',
      attendees: '300+',
      image: '/images/events/healthcare-symposium.jpg',
      href: '/events/healthcare-tech-symposium'
    },
    {
      id: 4,
      title: 'Edge Computing & IoT Summit',
      description: 'Explore the future of edge computing and IoT technologies for enterprise applications.',
      date: '2025-01-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Seattle Convention Center',
      type: 'Summit',
      attendees: '400+',
      image: '/images/events/edge-computing-summit.jpg',
      href: '/events/edge-computing-iot-summit'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'AI Business Transformation Conference',
      description: 'Successfully completed with 600+ attendees exploring AI-driven business transformation strategies.',
      date: '2024-11-15',
      location: 'New York Hilton',
      type: 'Conference',
      attendees: '600+',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Cybersecurity & AI Workshop',
      description: 'Interactive workshop on AI-powered cybersecurity solutions for enterprise protection.',
      date: '2024-11-05',
      location: 'Zion Tech HQ, Austin',
      type: 'Workshop',
      attendees: '75',
      status: 'Completed'
    }
  ];

  const eventTypes = [
    'All Events',
    'Conference',
    'Workshop',
    'Symposium',
    'Summit',
    'Webinar'
  ];
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Events - Zion Tech Group"
<<<<<<< HEAD
        description="Discover and join Zion Tech Group's upcoming events, conferences, webinars, and workshops. Connect with industry experts and stay ahead in technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Upcoming
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Events</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover and join our upcoming events, conferences, webinars, and workshops. 
              Connect with industry experts and stay ahead in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
=======
        description="Join us at upcoming events, conferences, and workshops. Discover the latest in AI, quantum computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Upcoming Events &
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Workshops
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us at industry-leading events, conferences, and workshops to discover 
              the latest innovations in AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming-events"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View Events
              </a>
              <a
                href="/contact"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300"
              >
                Host an Event
              </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {events.filter(e => e.featured).length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Featured Events
            </motion.h2>
            
            <div className="space-y-12">
              {events.filter(event => event.featured).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {event.category}
                        </span>
                        <span className={`px-3 py-1 bg-slate-700/50 text-sm rounded-full ${statusColors[event.status as keyof typeof statusColors]}`}>
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{event.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            {new Date(event.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{event.time} ({event.duration})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{event.currentAttendees}/{event.maxAttendees} attendees</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Event Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-slate-400 text-sm">Price:</span>
                            <div className="text-white font-medium">
                              {event.price}
                              {event.earlyBirdPrice && event.earlyBirdPrice !== event.price && (
                                <span className="text-cyan-400 ml-2">Early Bird: {event.earlyBirdPrice}</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-400 text-sm">Format:</span>
                            <div className="text-white font-medium">
                              {event.virtual ? 'Virtual' : event.hybrid ? 'Hybrid' : 'In-Person'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">What\'s Included</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.includes.map((item, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {event.registrationUrl ? (
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                          >
                            <Ticket className="w-5 h-5 mr-2" />
                            Register Now
                          </a>
                        ) : (
                          <button className="inline-flex items-center px-6 py-3 bg-slate-600 text-slate-300 font-semibold rounded-lg cursor-not-allowed">
                            <Ticket className="w-5 h-5 mr-2" />
                            Registration Closed
                          </button>
                        )}
                        <button className="inline-flex items-center px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Event
                        </button>
                      </div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Event Information</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Category:</span>
                            <span className="text-white">{event.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Status:</span>
                            <span className={`${statusColors[event.status as keyof typeof statusColors]}`}>
                              {event.status}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Duration:</span>
                            <span className="text-white">{event.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Format:</span>
                            <span className="text-white">
                              {event.virtual ? 'Virtual' : event.hybrid ? 'Hybrid' : 'In-Person'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Registration</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{event.currentAttendees}</div>
                            <div className="text-slate-400 text-sm">Registered</div>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-white mb-1">{event.maxAttendees}</div>
                            <div className="text-slate-400 text-sm">Max Capacity</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            <span className="text-slate-300 text-sm">{event.contactEmail}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-cyan-400" />
                            <span className="text-slate-300 text-sm">{event.contactPhone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">All Events</h2>
              <p className="text-slate-300 text-lg">
                Showing {filteredEvents.length} of {events.length} events
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {event.category}
                    </span>
                    <span className={`px-2 py-1 bg-slate-700/50 text-xs rounded-full ${statusColors[event.status as keyof typeof statusColors]}`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{event.title}</h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4 text-sm text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-1">
                      {event.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/30 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.currentAttendees}/{event.maxAttendees}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="w-4 h-4" />
                        <span>{event.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {event.registrationUrl ? (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-slate-500 text-xs">Registration Closed</span>
                      )}
                    </div>
=======
      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mark your calendar for these exciting events featuring industry experts, 
              hands-on workshops, and cutting-edge technology demonstrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <span className="text-gray-400 text-sm">{event.attendees} attendees</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {event.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <a
                  href={event.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relive the success of our previous events and discover insights 
              from industry leaders and technology experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.status}
                  </span>
                  <span className="text-gray-400 text-sm">{event.attendees} attendees</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
          
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
=======
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Event Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We host various types of events to meet different learning needs 
              and industry requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {eventTypes.slice(1).map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{type}</h3>
              </motion.div>
            ))}
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Host Your Event with Zion Tech Group
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Interested in hosting an event, workshop, or conference? Partner with Zion Tech Group 
              to create impactful technology events that inspire and educate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Host an Event
              </a>
              <a
                href="/partners"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Become a Partner
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Events?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with industry experts, learn about cutting-edge technologies, 
              and network with like-minded professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming-events"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Events
              </a>
              <a
                href="/contact"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-all duration-300"
              >
                Contact Us
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Events;
=======
}
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
