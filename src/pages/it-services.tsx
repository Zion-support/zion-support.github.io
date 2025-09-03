<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Helmet  } from 'react-helmet-async'; import { Link  } from 'react-router-dom'; import { Server, Cloud, Shield, Database, Network, Cpu, Zap, Users, Building, Globe, Lock, BarChart3, Monitor, Smartphone, Laptop, Desktop, Smartphone as SmartphoneIcon, Tablet, Watch, Headphones, Speaker, Microphone, Camera, Video, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, ArrowRight, CheckCircle, Star, Rocket, Lightbulb, Workflow, Brain, Target, TrendingUp, CreditCard, Heart, Home, Car, GraduationCap, ShoppingBag, Briefcase, Palette, Music, BookOpen, Calendar, Clock, Bell, Eye, Download, Upload, Share2, Link as LinkIcon, QrCode, Building2, MessageSquare, FileText, ShoppingCart, Search, Clock as ClockIcon, Camera as CameraIcon, Video as VideoIcon, FileText as FileTextIcon, ShoppingCart as ShoppingCartIcon, Headphones as HeadphonesIcon, Search as SearchIcon, Clock as ClockIconIcon, Camera as CameraIconIcon, Video as VideoIconIcon, Image as ImageIcon, File as FileIcon, Folder as FolderIcon, Archive as ArchiveIcon, Edit as EditIcon, Plus as PlusIcon, Check as CheckIcon, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, ChevronUp as ChevronUpIcon, ChevronDown as ChevronDownIcon, Menu as MenuIcon, Grid as GridIcon, List as ListIcon, Filter as FilterIcon, SortAsc as SortAscIcon, SortDesc as SortDescIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Fullscreen as FullscreenIcon, FullscreenExit as FullscreenExitIcon, Volume as VolumeIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Mute as MuteIcon, Unmute as UnmuteIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Rewind as RewindIcon, FastForward as FastForwardIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, SkipBack as SkipBackIconIcon, SkipForward as SkipForwardIconIcon, Volume1, Volume3, Volume4, Volume5, Volume6, Volume7, Volume8, Volume9, Volume10, Volume11, Volume12, Volume13, Volume14, Volume15, Volume16, Volume17, Volume18, Volume19, Volume20, Volume21, Volume22, Volume23, Volume24, Volume25, Volume26, Volume27, Volume28, Volume29, Volume30, Volume31, Volume32, Volume33, Volume34, Volume35, Volume36, Volume37, Volume38, Volume39, Volume40, Volume41, Volume42, Volume43, Volume44, Volume45, Volume46, Volume47, Volume48, Volume49, Volume50, Volume51, Volume52, Volume53, Volume54, Volume55, Volume56, Volume57, Volume58, Volume59, Volume60, Volume61, Volume62, Volume63, Volume64, Volume65, Volume66, Volume67, Volume68, Volume69, Volume70, Volume71, Volume72, Volume73, Volume74, Volume75, Volume76, Volume77, Volume78, Volume79, Volume80, Volume81, Volume82, Volume83, Volume84, Volume85, Volume86, Volume87, Volume88, Volume89, Volume90, Volume91, Volume92, Volume93, Volume94, Volume95, Volume96, Volume97, Volume98, Volume99, Volume100  } from 'lucide-react'; export default function ITServices() { const itServiceCategories = [{ name: "Cloud Infrastructure & DevOps", description: "Scalable cloud solutions and automated development operations", icon: Cloud, count: 25, color: "from-blue-400 to-cyan-500", solutions: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code", "CI/CD Pipelines", "Cloud Optimization"] }, { name: "Cybersecurity & Compliance", description: "Enterprise-grade security solutions and regulatory compliance", icon: Shield, count: 18, color: "from-red-400 to-orange-500", solutions: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Security Monitoring", "Incident Response", "Security Training"] }, { name: "Data Management & Analytics", description: "Comprehensive data solutions and business intelligence", icon: Database, count: 22, color: "from-green-400 to-emerald-500", solutions: ["Data Engineering", "Business Intelligence", "Data Warehousing", "Analytics Platforms", "Data Governance", "Machine Learning"] }, { name: "Network & Infrastructure", description: "Enterprise networking and infrastructure solutions", icon: Network, count: 15, color: "from-purple-400 to-indigo-500", solutions: ["Network Design", "Infrastructure Management", "Performance Optimization", "Monitoring", "Security", "Scalability"] } ]; const featuredITServices = [{ title: "Cloud Migration & Modernization", description: "End-to-end cloud migration services with modern architecture and optimization", price: "From $15,000", features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management"], href: "/services/cloud-migration", color: "from-blue-400 to-cyan-500", popular: true }, { title: "Advanced Cybersecurity Suite", description: "Comprehensive cybersecurity platform with threat detection and compliance monitoring", price: "From $8,000", features: ["Threat Detection", "Vulnerability Assessment", "Compliance Monitoring", "Incident Response", "Security Analytics", "24/7 Monitoring"], href: "/services/cybersecurity-suite", color: "from-red-400 to-orange-500" }, { title: "Data Engineering & Analytics Platform", description: "Complete data solution with engineering, warehousing, and analytics capabilities", price: "From $12,000", features: ["Data Engineering", "ETL/ELT Pipelines", "Data Warehousing", "Business Intelligence", "Analytics Dashboards", "Data Governance"], href: "/services/data-engineering", color: "from-green-400 to-emerald-500" } ];
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const itservices = () => {
  return (
    <>
      <Head>
        <title>it-services - Zion Tech Group</title>
        <meta name="description" content="Professional it-services services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              it-services
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional it-services services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default itservices
>>>>>>> main
