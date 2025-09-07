import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp, 
  Users, 
  Globe, 
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail as MailIcon,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Eye,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  BookOpen,
  GraduationCap,
  Truck,
  Palette,
  Video,
  Music,
  Camera,
  Gamepad2,
  Microscope,
  Flask,
  TestTube,
  Atom,
  Satellite,
  Telescope,
  Leaf as LeafIcon,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Zap as Lightning,
  Gauge,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Target as TargetIcon,
  TrendingDown,
  TrendingUp as TrendingUpIcon,
  ArrowUpRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Calculator,
  Calendar,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CalendarHeart,
  CalendarStar,
  CalendarClock,
  CalendarSearch,
  CalendarEdit,
  CalendarTrash,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarSettings,
  CalendarUser,
  CalendarGroup,
  CalendarEvent,
  CalendarTime,
  CalendarLocation,
  CalendarMap,
  CalendarNavigation,
  CalendarRoute,
  CalendarPath,
  CalendarDirection,
  CalendarArrow,
  CalendarMove,
  CalendarRotate,
  CalendarFlip,
  CalendarShuffle,
  CalendarRepeat,
  CalendarLoop,
  CalendarRefresh,
  CalendarSync,
  CalendarUpdate,
  CalendarUpgrade,
  CalendarDowngrade,
  CalendarChange,
  CalendarSwitch,
  CalendarToggle,
  CalendarOn,
  CalendarOff,
  CalendarEnable,
  CalendarDisable,
  CalendarActivate,
  CalendarDeactivate,
  CalendarStart,
  CalendarStop,
  CalendarPause,
  CalendarResume,
  CalendarContinue,
  CalendarProceed,
  CalendarAdvance,
  CalendarProgress,
  CalendarForward,
  CalendarBackward,
  CalendarNext,
  CalendarPrevious,
  CalendarFirst,
  CalendarLast,
  CalendarBegin,
  CalendarEnd,
  CalendarOpen,
  CalendarClose,
  CalendarEnter,
  CalendarExit,
  CalendarJoin,
  CalendarLeave,
  CalendarAdd,
  CalendarRemove,
  CalendarInsert,
  CalendarDelete,
  CalendarCreate,
  CalendarDestroy,
  CalendarBuild,
  CalendarConstruct,
  CalendarAssemble,
  CalendarDisassemble,
  CalendarConnect,
  CalendarDisconnect,
  CalendarLink,
  CalendarUnlink,
  CalendarBind,
  CalendarUnbind,
  CalendarAttach,
  CalendarDetach,
  CalendarMount,
  CalendarUnmount,
  CalendarInstall,
  CalendarUninstall,
  CalendarSetup,
  CalendarTeardown,
  CalendarInitialize,
  CalendarFinalize,
  CalendarPrepare,
  CalendarCleanup,
  CalendarValidate,
  CalendarVerify,
  CalendarCheck,
  CalendarTest,
  CalendarDebug,
  CalendarFix,
  CalendarRepair,
  CalendarMaintain,
  CalendarOptimize,
  CalendarEnhance,
  CalendarImprove,
  CalendarUpgrade,
  CalendarDowngrade,
  CalendarModify,
  CalendarAdjust,
  CalendarTune,
  CalendarFineTune,
  CalendarCalibrate,
  CalendarConfigure,
  CalendarCustomize,
  CalendarPersonalize,
  CalendarTailor,
  CalendarAdapt,
  CalendarModify,
  CalendarChange,
  CalendarTransform,
  CalendarConvert,
  CalendarTranslate,
  CalendarInterpret,
  CalendarDecode,
  CalendarEncode,
  CalendarEncrypt,
  CalendarDecrypt,
  CalendarCompress,
  CalendarDecompress,
  CalendarArchive,
  CalendarExtract,
  CalendarBackup,
  CalendarRestore,
  CalendarClone,
  CalendarCopy,
  CalendarDuplicate,
  CalendarReplicate,
  CalendarMirror,
  CalendarReflect,
  CalendarEcho,
  CalendarResonate,
  CalendarVibrate,
  CalendarOscillate,
  CalendarPulse,
  CalendarBeat,
  CalendarRhythm,
  CalendarTempo,
  CalendarPace,
  CalendarSpeed,
  CalendarVelocity,
  CalendarAcceleration,
  CalendarMomentum,
  CalendarForce,
  CalendarEnergy,
  CalendarPower,
  CalendarStrength,
  CalendarIntensity,
  CalendarDensity,
  CalendarConcentration,
  CalendarFocus,
  CalendarAttention,
  CalendarAwareness,
  CalendarConsciousness,
  CalendarMindfulness,
  CalendarPresence,
  CalendarExistence,
  CalendarReality,
  CalendarTruth,
  CalendarFact,
  CalendarEvidence,
  CalendarProof,
  CalendarVerification,
  CalendarConfirmation,
  CalendarValidation,
  CalendarAuthentication,
  CalendarAuthorization,
  CalendarPermission,
  CalendarLicense,
  CalendarCertificate,
  CalendarDiploma,
  CalendarDegree,
  CalendarQualification,
  CalendarCredential,
  CalendarBadge,
  CalendarMedal,
  CalendarTrophy,
  CalendarPrize,
  CalendarReward,
  CalendarRecognition,
  CalendarHonor,
  CalendarRespect,
  CalendarAdmiration,
  CalendarAppreciation,
  CalendarGratitude,
  CalendarThanks,
  CalendarWelcome,
  CalendarGreeting,
  CalendarSalutation,
  CalendarIntroduction,
  CalendarPresentation,
  CalendarDemonstration,
  CalendarExhibition,
  CalendarDisplay,
  CalendarShow,
  CalendarReveal,
  CalendarUnveil,
  CalendarExpose,
  CalendarUncover,
  CalendarDiscover,
  CalendarFind,
  CalendarLocate,
  CalendarIdentify,
  CalendarRecognize,
  CalendarDistinguish,
  CalendarDifferentiate,
  CalendarSeparate,
  CalendarDivide,
  CalendarSplit,
  CalendarBreak,
  CalendarCrack,
  CalendarFracture,
  CalendarShatter,
  CalendarSmash,
  CalendarCrush,
  CalendarGrind,
  CalendarPulverize,
  CalendarPowder,
  CalendarDust,
  CalendarParticle,
  CalendarMolecule,
  CalendarAtom,
  CalendarElement,
  CalendarCompound,
  CalendarMixture,
  CalendarSolution,
  CalendarSuspension,
  CalendarColloid,
  CalendarEmulsion,
  CalendarFoam,
  CalendarGel,
  CalendarSolid,
  CalendarLiquid,
  CalendarGas,
  CalendarPlasma,
  CalendarBoseEinstein,
  CalendarFermi,
  CalendarPhoton,
  CalendarElectron,
  CalendarProton,
  CalendarNeutron,
  CalendarQuark,
  CalendarGluon,
  CalendarLepton,
  CalendarBoson,
  CalendarFermion,
  CalendarHadron,
  CalendarMeson,
  CalendarBaryon,
  CalendarNucleon,
  CalendarIsotope,
  CalendarIon,
  CalendarRadical,
  CalendarMolecule,
  CalendarCompound,
  CalendarMixture,
  CalendarSolution,
  CalendarSuspension,
  CalendarColloid,
  CalendarEmulsion,
  CalendarFoam,
  CalendarGel,
  CalendarSolid,
  CalendarLiquid,
  CalendarGas,
  CalendarPlasma,
  CalendarBoseEinstein,
  CalendarFermi,
  CalendarPhoton,
  CalendarElectron,
  CalendarProton,
  CalendarNeutron,
  CalendarQuark,
  CalendarGluon,
  CalendarLepton,
  CalendarBoson,
  CalendarFermion,
  CalendarHadron,
  CalendarMeson,
  CalendarBaryon,
  CalendarNucleon,
  CalendarIsotope,
  CalendarIon,
  CalendarRadical
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('enterprise');

  const solutions = {
    enterprise: {
      title: "Enterprise Solutions",
      description: "Large-scale business transformations with enterprise-grade security and scalability",
      icon: Building2,
      color: "from-blue-500 to-indigo-500",
      features: [
        "AI-Powered Business Intelligence Suite",
        "Zero-Trust Cybersecurity Platform",
        "Intelligent Cloud Infrastructure",
        "Enterprise Blockchain Platform",
        "Digital Twin Platform",
        "Quantum Computing Solutions"
      ],
      benefits: [
        "Scalable to thousands of users",
        "Enterprise-grade security & compliance",
        "24/7 dedicated support",
        "Custom integration & development",
        "Advanced analytics & reporting",
        "Multi-region deployment"
      ],
      pricing: "Custom enterprise pricing",
      timeline: "8-16 weeks"
    },
    smb: {
      title: "SMB Solutions",
      description: "Growth-focused solutions for small to medium businesses",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI Marketing Automation Suite",
        "Customer Support Automation",
        "HR & Recruitment Platform",
        "Financial Planning Tools",
        "Operations Optimization",
        "Business Intelligence Dashboard"
      ],
      benefits: [
        "Affordable pricing plans",
        "Quick implementation",
        "Easy-to-use interfaces",
        "Scalable as you grow",
        "Dedicated support team",
        "Proven ROI metrics"
      ],
      pricing: "$2,000 - $8,000",
      timeline: "4-8 weeks"
    },
    startup: {
      title: "Startup Solutions",
      description: "Accelerate your startup growth with cutting-edge technology",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI Content Creation Studio",
        "Sales Intelligence Platform",
        "Customer Success Automation",
        "Financial Management Tools",
        "Market Research & Analytics",
        "Growth Hacking Tools"
      ],
      benefits: [
        "Startup-friendly pricing",
        "Rapid deployment",
        "Growth-focused features",
        "Flexible scaling options",
        "Expert guidance & support",
        "Competitive advantages"
      ],
      pricing: "$1,500 - $5,000",
      timeline: "2-6 weeks"
    },
    government: {
      title: "Government Solutions",
      description: "Public sector innovation with compliance and security",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: [
        "AI-Powered Research Platform",
        "Cybersecurity & Compliance",
        "Data Analytics & Reporting",
        "Process Automation",
        "Citizen Services Platform",
        "Infrastructure Management"
      ],
      benefits: [
        "Government compliance",
        "Security certifications",
        "Audit trail & reporting",
        "Scalable infrastructure",
        "Expert consultation",
        "Training & support"
      ],
      pricing: "Government contract pricing",
      timeline: "12-20 weeks"
    },
    healthcare: {
      title: "Healthcare Solutions",
      description: "Digital health transformation with AI-powered diagnostics",
      icon: Heart,
      color: "from-pink-500 to-red-500",
      features: [
        "AI Healthcare Diagnostic Platform",
        "Patient Data Management",
        "Medical Imaging Analysis",
        "Predictive Healthcare Analytics",
        "Telemedicine Platform",
        "Healthcare Compliance Tools"
      ],
      benefits: [
        "HIPAA compliant",
        "FDA approval ready",
        "Clinical validation",
        "Integration with EHR systems",
        "Advanced security",
        "Medical expertise support"
      ],
      pricing: "$8,000 - $25,000",
      timeline: "10-16 weeks"
    },
    financial: {
      title: "Financial Solutions",
      description: "Fintech innovation with compliance and risk management",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
      features: [
        "AI-Powered FinTech Platform",
        "Fraud Detection & Prevention",
        "Risk Assessment Tools",
        "Automated Trading Systems",
        "Compliance & Reporting",
        "Financial Analytics"
      ],
      benefits: [
        "Regulatory compliance",
        "Real-time monitoring",
        "Advanced security",
        "Scalable architecture",
        "Expert financial guidance",
        "24/7 support"
      ],
      pricing: "$5,000 - $20,000",
      timeline: "8-12 weeks"
    }
  };

  const currentSolution = solutions[activeTab as keyof typeof solutions];

  return (
    <>
      <SEO 
        title="Business Solutions | Zion Tech Group"
        description="Discover tailored business solutions for enterprises, SMBs, startups, government, healthcare, and financial sectors. Transform your business with AI-powered technology."
        keywords="business solutions, enterprise solutions, SMB solutions, startup solutions, government solutions, healthcare solutions, financial solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Business Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Tailored for Success
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Transform your business with our tailored solutions designed for enterprises, SMBs, startups, 
                government, healthcare, and financial sectors. AI-powered technology that drives real results.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Tabs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.keys(solutions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                  }`}
                >
                  {solutions[key as keyof typeof solutions].title}
                </button>
              ))}
            </div>

            {/* Solution Details */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentSolution.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    <currentSolution.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{currentSolution.title}</h2>
                  <p className="text-lg text-slate-300 mb-6">{currentSolution.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="text-slate-300">Pricing: <span className="text-white font-semibold">{currentSolution.pricing}</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-300">Timeline: <span className="text-white font-semibold">{currentSolution.timeline}</span></span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/request-quote"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {currentSolution.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {currentSolution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-slate-300">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let our experts help you choose the right solution and implement it successfully.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}