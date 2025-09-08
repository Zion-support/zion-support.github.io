import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Lock,
  Database,
  Cpu,
  Network,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Video,
  Eye,
  Target,
  Users,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Server,
  Globe2,
  ShieldCheck,
  Wifi,
  Smartphone,
  Activity,
  Clock,
  BarChart,
  PieChart,
  GitBranch,
  Code,
  Package,
  Play,
  Settings,
  Monitor,
  Shield,
  Rocket,
  Globe,
  Factory,
  Car,
  Heart,
  LineChart,
  Scatter,
  Layers,
  Target as TargetIcon,
  Search,
  Filter,
  RefreshCw,
  Download,
  Upload,
  Bell,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Building as BuildingIcon,
  Video as VideoIcon,
  Eye as EyeIcon,
  Target as TargetIcon2,
  Users as UsersIcon,
  ArrowRight as ArrowRightIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  EyeOff as EyeOffIcon,
  Server as ServerIcon,
  Globe2 as Globe2Icon,
  ShieldCheck as ShieldCheckIcon,
  Wifi as WifiIcon,
  Smartphone as SmartphoneIcon,
  Activity as ActivityIcon,
  Clock as ClockIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  GitBranch as GitBranchIcon,
  Code as CodeIcon,
  Package as PackageIcon,
  Play as PlayIcon,
  Settings as SettingsIcon,
  Monitor as MonitorIcon,
  Shield as ShieldIcon,
  Rocket as RocketIcon,
  Globe as GlobeIcon,
  Factory as FactoryIcon,
  Car as CarIcon,
  Heart as HeartIcon,
  LineChart as LineChartIcon,
  Scatter as ScatterIcon,
  Layers as LayersIcon,
  Cog,
  Wrench,
  Gauge,
  Palette,
  Truck,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Helicopter,
  Satellite,
  Telescope,
  Microscope,
  Camera,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Monitor as MonitorIcon2,
  Laptop,
  Tablet,
  Smartphone as SmartphoneIcon2,
  Watch,
  Calculator,
  Calendar,
  Book,
  Newspaper,
  Magazine,
  Document,
  Folder,
  Archive,
  Trash,
  Recycle,
  Save,
  Edit,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Close,
  Menu,
  MoreHorizontal,
  MoreVertical,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon2,
  Move,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  Grid,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Toolbar,
  StatusBar,
  Battery,
  Wifi as WifiIcon2,
  Signal,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Mute,
  Mic,
  MicOff,
  Video as VideoIcon2,
  VideoOff,
  Image,
  ImageOff,
  File,
  FileText as FileTextIcon2,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileSearch,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileSpreadsheet,
  FilePresentation,
  FileDatabase,
  FileLock,
  FileUnlock,
  FileDownload,
  FileUpload,
  FileShare,
  FileHeart,
  FileStar,
  FileWarning,
  FileAlert,
  FileInfo,
  FileQuestion,
  FileHelp,
  FileSettings,
  FileCog,
  FileWrench,
  FileGear,
  FileSliders,
  FileBarChart,
  FilePieChart,
  FileLineChart,
  FileTrendingUp,
  FileTrendingDown,
  FileActivity,
  FileClock,
  FileCalendar,
  FileTime,
  FileHistory,
  FileRefresh,
  FileRepeat,
  FileLoop,
  FileShuffle,
  FileSkipBack,
  FileSkipForward,
  FilePlay,
  FilePause,
  FileStop,
  FileRecord,
  FileEject,
  FileFastForward,
  FileRewind,
  FileVolume,
  FileMute,
  FileVideo as FileVideoIcon,
  FileVideoOff,
  FileImage as FileImageIcon,
  FileImageOff,
  FileMusic,
  FileMusicOff,
  FileHeadphones,
  FileSpeaker,
  FilePrinter,
  FileScanner,
  FileKeyboard,
  FileMouse,
  FileMonitor,
  FileLaptop,
  FileTablet,
  FileSmartphone,
  FileWatch,
  FileCalculator,
  FileBook,
  FileNewspaper,
  FileMagazine,
  FileDocument,
  FileFolder,
  FileArchive as FileArchiveIcon,
  FileTrash,
  FileRecycle,
  FileSave,
  FileEdit,
  FileCopy,
  FileCut,
  FilePaste,
  FileUndo,
  FileRedo,
  FileZoomIn,
  FileZoomOut,
  FileMaximize,
  FileMinim
} from 'lucide-react';

export default function RoboticsAutomation() {
  const features = [
    {
      icon: Bot,
      title: 'Industrial Robotics',
      description: 'Advanced robotic systems for manufacturing and production',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wrench,
      title: 'Predictive Maintenance',
      description: 'AI-powered maintenance scheduling and optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gauge,
      title: 'Quality Control',
      description: 'Automated inspection and quality assurance systems',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Custom Solutions',
      description: 'Tailored robotics and automation for specific needs',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'IoT Integration',
      description: 'Connected devices and smart factory solutions',
      color: 'from-indigo-500 to-blue-500'
    }
  ];





  return (
    <>
      <SEO 
        title="Robotics & Automation - Zion Tech Group"
        description="Revolutionary robotics and automation solutions including industrial robots, process automation, and IoT integration. Transform your operations with intelligent automation."
        keywords="robotics, automation, industrial robots, process automation, IoT, smart factory, predictive maintenance, quality control"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                Automation Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Robotics &
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your operations with revolutionary robotics and automation technology. 
                Industrial robots, process automation, and IoT integration that 
                increase efficiency, reduce costs, and improve quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>






