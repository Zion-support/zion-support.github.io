import React, {useState} from 'react'import {motion, AnimatePresence} from framer-motionimport {}
  Brain,;
  Shield,;
  Rocket,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  Users,;
  TrendingUp,;
  CheckCircle,;
  DollarSign,;
  Clock,'Target,'Award'''} from 'lucide-react'import {Link} from react-router-dom// Import the new service data;const serviceCategories = []{}"id": "micro-saas'",'''"name": "Micro SAAS Solutions'",'''"icon": "<Rocket className=w-6 h-6'  />","color": "from-purple-600 to-pink-600'",';
    "services": "revolutionary2027AdvancedMicroSaasServices"},;
  {}
"id": "it-infrastructure'",'''"name": "IT Infrastructure & Cybersecurity'",'''';
    "icon": "<Shield className='w-6 h-6'  />","color": "from-red-600 to-orange-600'",';
    "services": "revolutionary2027ITInfrastructureCybersecurityServices"},;
  {}
"id": "ai-innovation'",'''"name": "AI Innovation Services'",'''';
    "icon": "<Brain className='w-6 h-6'  />","color": "from-blue-600 to-cyan-600'",';
    "services": "revolutionary2027AIInnovationServices"}
];
export function ComprehensiveServicesShowcase("props": "any) {"}
'const [selectedCategory, setSelectedCategory] = useState(micro-saas');
  const [selectedService, setSelectedService] = useState(null);
  const containerVariants = {}
    "hidden": "{"opacity": 0"},;
    "visible": "{"}
      "opacity": "1",;
      "transition": "{"}
        "staggerChildren": "0.1",;
        "delayChildren": "0.2"}
    }
  }
;
  const itemVariants = {}
  "hidden": "{"y": 20",;
  "opacity": "0"},;
    "visible": "{"}
      "y": "0",;
      "opacity": "1",;
      "transition": "{"}
''"duration": "0.5",''"ease": "easeOut'''"}';
    }
  }
;
  const cardVariants = {}
  "hidden": "{"scale": 0.95",;
  "opacity": "0"},;
    "visible": "{"}
      "scale": "1",;
      "opacity": "1",;
      "transition": "{"}
''"duration": "0.4",''"ease": "easeOut'''"}';
    }
  };
  return ('''';
    <section className='py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light'>'''';
      <div className='max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8'>;
        {/* Header Section */"}''';
        <motion.div '''className=text-center mb-16''initial = {}';
  {"opacity": "0",;
  "y": "30"}}
          animate = {}
