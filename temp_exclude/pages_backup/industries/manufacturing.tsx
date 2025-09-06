import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
const services = [
  {
    title: 'Smart Factory Solutions',
    description: 'IoT-enabled manufacturing systems for intelligent production management.',
    icon: Settings,
    features: [,
      'Real-time production monitoring,',
      'Automated quality control',',
      'Predictive maintenance',',
      'Supply chain integration'';
    ];
  },
  {}
    title: 'Predictive Maintenance AI,',
    description: 'AI-powered systems to predict and prevent equipment failures.,',
    icon: Brain,
    features: [,
      'Equipment health monitoring,',
      'Failure prediction algorithms',',
      'Maintenance scheduling',',
      'Cost optimization'';
    ];
  },
  {}
    title: 'IoT Sensor Networks,',
    description: 'Connected sensor systems for comprehensive factory monitoring.,',
    icon: Cpu,
    features: [,
      'Environmental monitoring,',
      'Equipment status tracking',',
      'Data collection systems',',
      'Real-time alerts'';
    ];
  },
  {}
    title: 'Quality Control Systems,',
    description: 'Automated quality assurance using computer vision and AI.,',
    icon: Shield,
    features: [,
      'Visual inspection systems,',
      'Defect detection algorithms',',
      'Quality metrics tracking',',
      'Automated reporting'';
    ];
  },
  {}
    title: 'Supply Chain Optimization,',
    description: 'AI-driven supply chain management for improved efficiency.,',
    icon: BarChart3,
    features: [,
      'Demand forecasting,',
      'Inventory optimization',',
      'Supplier management',',
      'Logistics coordination'';
    ];
  },
  {}
    title: 'Digital Twin Technology,',
    description: 'Virtual replicas of physical manufacturing systems for simulation.,',
    icon: Database,
    features: [,
      '3D factory modeling,',
      'Process simulation',',
      'Performance optimization',',
      'Scenario planning'';
    ];
  }
];
const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automated processes and AI optimization improve production efficiency.',
    icon: Activity
  },
  {}
    title: 'Reduced Downtime,',
    description: 'Predictive maintenance prevents unexpected equipment failures.,',
    icon: Wrench,
  },
  {}
    title: 'Better Quality,',
    description: 'Automated quality control ensures consistent product quality.,',
    icon: Shield,
  },
  {}
    title: 'Cost Savings,',
    description: 'Optimized operations and reduced waste lower manufacturing costs.,',
    icon: BarChart3,
  }
];
export default function ManufacturingPage() {
  return (
    <Layout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with smart factory solutions, IoT networks, predictive maintenance, and digital twin technology."
      keywords="manufacturing technology, smart factory, IoT manufacturing, predictive maintenance, digital twin, Industry 4.0"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
}