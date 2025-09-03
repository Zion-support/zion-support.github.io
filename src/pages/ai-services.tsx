<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Helmet  } from 'react-helmet-async'; import { Link  } from 'react-router-dom'; import { Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, TrendingUp, Code, Database, Network, Smartphone, MessageSquare, FileText, ShoppingCart, Headphones, Search, Clock, Camera, CreditCard, Globe2, Monitor, Server, BarChart, PieChart, LineChart, Activity, Building2, Home, Car, GraduationCap, Heart, ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, Bell, Eye, Download, Upload, Share2, QrCode, Tablet, Laptop, Desktop, Watch, Speaker, Microphone, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Volume1, Volume3, Volume4, Volume5, Volume6, Volume7, Volume8, Volume9, Volume10, Volume11, Volume12, Volume13, Volume14, Volume15, Volume16, Volume17, Volume18, Volume19, Volume20, Volume21, Volume22, Volume23, Volume24, Volume25, Volume26, Volume27, Volume28, Volume29, Volume30, Volume31, Volume32, Volume33, Volume34, Volume35, Volume36, Volume37, Volume38, Volume39, Volume40, Volume41, Volume42, Volume43, Volume44, Volume45, Volume46, Volume47, Volume48, Volume49, Volume50, Volume51, Volume52, Volume53, Volume54, Volume55, Volume56, Volume57, Volume58, Volume59, Volume60, Volume61, Volume62, Volume63, Volume64, Volume65, Volume66, Volume67, Volume68, Volume69, Volume70, Volume71, Volume72, Volume73, Volume74, Volume75, Volume76, Volume77, Volume78, Volume79, Volume80, Volume81, Volume82, Volume83, Volume84, Volume85, Volume86, Volume87, Volume88, Volume89, Volume90, Volume91, Volume92, Volume93, Volume94, Volume95, Volume96, Volume97, Volume98, Volume99, Volume100  } from 'lucide-react'; export default function AIServices() { const aiServiceCategories = [{ name: "AI-Powered Business Intelligence", description: "Advanced analytics and business intelligence solutions powered by artificial intelligence", icon: Brain, count: 18, color: "from-purple-400 to-pink-500", solutions: ["Predictive Analytics", "Data Visualization", "Business Intelligence", "Machine Learning Models", "Real-time Analytics", "Custom Dashboards"] }, { name: "AI Automation & Workflow", description: "Intelligent automation solutions that streamline business processes and workflows", icon: Workflow, count: 22, color: "from-blue-400 to-cyan-500", solutions: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Intelligent Automation", "Business Process Management", "Task Automation"] }, { name: "AI-Powered Customer Experience", description: "AI-driven solutions that enhance customer interactions and improve satisfaction", icon: Users, count: 15, color: "from-green-400 to-emerald-500", solutions: ["Chatbots", "Customer Support", "Personalization", "Sentiment Analysis", "Customer Analytics", "Voice Assistants"] }, { name: "AI Security & Compliance", description: "Intelligent security solutions that protect data and ensure regulatory compliance", icon: Shield, count: 12, color: "from-red-400 to-orange-500", solutions: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Security Analytics", "Risk Assessment", "Privacy Protection"] } ]; const featuredAIServices = [{ title: "AI-Powered Business Intelligence Platform", description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics", price: "From $2,999/month", features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration"], href: "/services/ai-business-intelligence", color: "from-purple-400 to-pink-500", popular: true }, { title: "Intelligent Document Processing Suite", description: "AI-powered document processing platform that automatically extracts, categorizes, and analyzes information from various document types", price: "From $1,499/month", features: ["OCR Technology", "Natural Language Processing", "Automated Classification", "Data Extraction", "Compliance Monitoring", "Integration APIs"], href: "/services/ai-document-processing", color: "from-blue-400 to-cyan-500" }, { title: "AI-Powered Marketing Automation", description: "Intelligent marketing automation that personalizes campaigns, optimizes customer journeys, and maximizes ROI through AI-driven insights", price: "From $2,499/month", features: ["Personalization Engine", "Predictive Customer Scoring", "A/B Testing Automation", "Multi-channel Campaigns", "ROI Analytics", "CRM Integration"], href: "/services/ai-marketing-automation", color: "from-green-400 to-emerald-500" } ];
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const aiservices = () => {
  return (
    <>
      <Head>
        <title>ai-services - Zion Tech Group</title>
        <meta name="description" content="Professional ai-services services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ai-services
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional ai-services services and solutions
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
export default aiservices
>>>>>>> main
