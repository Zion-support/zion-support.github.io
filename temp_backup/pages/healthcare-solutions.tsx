import React from 'react',
import { motion } from 'framer-motion',
import { Heart, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, Stethoscope } from 'lucide-react',
import SEO from '../components/SEO',

const healthcareServices = [
  {
    title: 'AI Healthcare Diagnostics',
    description: 'Advanced AI-powered diagnostic systems for accurate and rapid medical assessments',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-healthcare-diagnostics',
    features: ['Medical Imaging AnalysisSymptom Assessment', 'Diagnostic Accuracy']
  },
  {
    title: 'Telemedicine Platform',
    description: 'Comprehensive virtual healthcare platform for remote patient care',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    href: '/telemedicine-platform',
    features: ['Video ConsultationsPatient Management', 'Prescription Management']
  },
  {
    title: 'Healthcare Data Analytics',
    description: 'Advanced analytics for healthcare insights and patient outcomes',
    icon: <Activity className="w-8 h-8 text-green-400" />,
    href: '/healthcare-analytics-platform',
    features: ['Patient AnalyticsOutcome Prediction', 'Resource Optimization']
  },
  {
    title: 'Medical Device Integration',
    description: 'Seamless integration of medical devices and health monitoring systems',
    icon: <Stethoscope className="w-8 h-8 text-purple-400" />,
    href: '/medical-device-integration',
    features: ['IoT Health DevicesReal-time Monitoring', 'Data Synchronization']
  },
  {
    title: 'Healthcare Security & Compliance',
    description: 'HIPAA-compliant security solutions for healthcare data protection',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/healthcare-security-compliance',
    features: ['HIPAA ComplianceData Encryption', 'Access Control']
  },
  {
    title: 'Patient Engagement Platform',
    description: 'Interactive platforms to improve patient engagement and outcomes',
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    href: '/patient-engagement-platform',
    features: ['Patient PortalsHealth Education', 'Appointment Scheduling']
  }
],

export default function HealthcareSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>healthcare-solutions | Zion Tech Group</title>
        <meta name="description" content="healthcare-solutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">healthcare-solutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  ),
},
export default healthcare-solutions,