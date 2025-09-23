import { ProductListing } from "@/types/listings";

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  aiScore: number;
  setupTime: string;
  support: string;
  integrations: string[];
  limitations?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: ProductListing[];
  pricingTiers: PricingTier[];
}

export const COMPREHENSIVE_PRICING_GUIDE_2029: ServiceCategory[] = [
  {
    id: "ai-analytics-services",
    name: "AI & Analytics Services",
    description: "Advanced AI-powered analytics and business intelligence solutions",
    icon: "🧠",
    services: [],
    pricingTiers: [
      {
        id: "ai-analytics-starter",
        name: "AI Analytics Starter",
        price: 999,
        currency: "$",
        period: "month",
        description: "Perfect for small businesses starting their AI journey",
        features: [
          "Basic AI-powered analytics dashboard",
          "Up to 10,000 data points per month",
          "Standard reporting templates",
          "Email support",
          "Basic integrations (3 platforms)"
        ],
        aiScore: 85,
        setupTime: "1-2 weeks",
        support: "Email support",
        integrations: ["Google Analytics", "Facebook", "Shopify"],
        limitations: ["Limited to 10,000 data points", "Basic AI models only"]
      },
      {
        id: "ai-analytics-professional",
        name: "AI Analytics Professional",
        price: 2499,
        currency: "$",
        period: "month",
        description: "Advanced AI analytics for growing businesses",
        features: [
          "Advanced AI-powered analytics dashboard",
          "Up to 100,000 data points per month",
          "Custom reporting templates",
          "Priority email & chat support",
          "Advanced integrations (10 platforms)",
          "Custom AI model training",
          "Real-time alerts & notifications"
        ],
        popular: true,
        aiScore: 92,
        setupTime: "2-3 weeks",
        support: "Priority email & chat support",
        integrations: ["Google Analytics", "Facebook", "Shopify", "Salesforce", "HubSpot", "Stripe", "Zendesk", "Intercom", "Slack", "Microsoft Teams"],
        limitations: ["Limited to 100,000 data points"]
      },
      {
        id: "ai-analytics-enterprise",
        name: "AI Analytics Enterprise",
        price: 4999,
        currency: "$",
        period: "month",
        description: "Enterprise-grade AI analytics with unlimited capabilities",
        features: [
          "Enterprise AI analytics platform",
          "Unlimited data points",
          "Custom AI model development",
          "Dedicated account manager",
          "24/7 phone & chat support",
          "Unlimited integrations",
          "Advanced security & compliance",
          "Custom training & onboarding"
        ],
        aiScore: 98,
        setupTime: "4-6 weeks",
        support: "24/7 dedicated support",
        integrations: ["All major platforms", "Custom APIs", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "quantum-computing-services",
    name: "Quantum Computing Services",
    description: "Next-generation quantum computing solutions for complex problems",
    icon: "⚛️",
    services: [],
    pricingTiers: [
      {
        id: "quantum-starter",
        name: "Quantum Starter",
        price: 4999,
        currency: "$",
        period: "month",
        description: "Entry-level quantum computing access",
        features: [
          "Access to quantum simulators",
          "Basic quantum algorithms",
          "Up to 100 quantum operations per month",
          "Documentation & tutorials",
          "Community support"
        ],
        aiScore: 90,
        setupTime: "2-3 weeks",
        support: "Community support",
        integrations: ["Qiskit", "Cirq", "PennyLane"],
        limitations: ["Limited quantum operations", "Simulator only", "Basic algorithms"]
      },
      {
        id: "quantum-professional",
        name: "Quantum Professional",
        price: 14999,
        currency: "$",
        period: "month",
        description: "Professional quantum computing with real hardware access",
        features: [
          "Access to real quantum hardware",
          "Advanced quantum algorithms",
          "Up to 1,000 quantum operations per month",
          "Priority support",
          "Custom algorithm development",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 95,
        setupTime: "4-6 weeks",
        support: "Priority support",
        integrations: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Custom frameworks"],
        limitations: ["Limited to 1,000 operations per month"]
      },
      {
        id: "quantum-enterprise",
        name: "Quantum Enterprise",
        price: 49999,
        currency: "$",
        period: "month",
        description: "Enterprise quantum computing with dedicated resources",
        features: [
          "Dedicated quantum hardware access",
          "Unlimited quantum operations",
          "Custom quantum algorithm development",
          "Dedicated quantum engineer",
          "24/7 support",
          "Custom integrations",
          "Advanced security protocols"
        ],
        aiScore: 99,
        setupTime: "8-12 weeks",
        support: "24/7 dedicated support",
        integrations: ["All quantum platforms", "Custom quantum frameworks", "On-premise quantum computers"],
        limitations: []
      }
    ]
  },
  {
    id: "edge-ai-services",
    name: "Edge AI Services",
    description: "AI processing at the edge for real-time decision making",
    icon: "🌐",
    services: [],
    pricingTiers: [
      {
        id: "edge-ai-starter",
        name: "Edge AI Starter",
        price: 799,
        currency: "$",
        period: "month",
        description: "Basic edge AI capabilities for IoT devices",
        features: [
          "Basic edge AI inference",
          "Up to 1,000 inferences per day",
          "Standard AI models",
          "Basic device management",
          "Email support"
        ],
        aiScore: 88,
        setupTime: "1-2 weeks",
        support: "Email support",
        integrations: ["TensorFlow Lite", "PyTorch Mobile", "Basic IoT platforms"],
        limitations: ["Limited inferences per day", "Basic models only", "Limited device types"]
      },
      {
        id: "edge-ai-professional",
        name: "Edge AI Professional",
        price: 1999,
        currency: "$",
        period: "month",
        description: "Professional edge AI with advanced capabilities",
        features: [
          "Advanced edge AI inference & training",
          "Up to 10,000 inferences per day",
          "Custom AI model optimization",
          "Advanced device management",
          "Priority support",
          "Real-time monitoring",
          "Custom integrations"
        ],
        popular: true,
        aiScore: 94,
        setupTime: "2-3 weeks",
        support: "Priority support",
        integrations: ["TensorFlow Lite", "PyTorch Mobile", "ONNX Runtime", "AWS IoT", "Azure IoT", "Google Cloud IoT", "Custom platforms"],
        limitations: ["Limited to 10,000 inferences per day"]
      },
      {
        id: "edge-ai-enterprise",
        name: "Edge AI Enterprise",
        price: 4999,
        currency: "$",
        period: "month",
        description: "Enterprise edge AI with unlimited capabilities",
        features: [
          "Unlimited edge AI operations",
          "Custom AI model development",
          "Advanced security protocols",
          "Dedicated support team",
          "Custom hardware integration",
          "Advanced analytics",
          "Compliance & governance"
        ],
        aiScore: 97,
        setupTime: "4-6 weeks",
        support: "24/7 dedicated support",
        integrations: ["All major platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "neuromorphic-computing",
    name: "Neuromorphic Computing",
    description: "Brain-inspired computing for energy-efficient AI processing",
    icon: "🧬",
    services: [],
    pricingTiers: [
      {
        id: "neuromorphic-starter",
        name: "Neuromorphic Starter",
        price: 2999,
        currency: "$",
        period: "month",
        description: "Basic neuromorphic computing access",
        features: [
          "Access to neuromorphic simulators",
          "Basic neural network models",
          "Up to 100,000 neural operations per month",
          "Documentation & tutorials",
          "Community support"
        ],
        aiScore: 89,
        setupTime: "3-4 weeks",
        support: "Community support",
        integrations: ["Nengo", "BRIAN", "NEST", "Basic frameworks"],
        limitations: ["Limited operations per month", "Simulator only", "Basic models"]
      },
      {
        id: "neuromorphic-professional",
        name: "Neuromorphic Professional",
        price: 8999,
        currency: "$",
        period: "month",
        description: "Professional neuromorphic computing with hardware access",
        features: [
          "Access to neuromorphic hardware",
          "Advanced neural network models",
          "Up to 1,000,000 neural operations per month",
          "Custom model development",
          "Priority support",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 94,
        setupTime: "6-8 weeks",
        support: "Priority support",
        integrations: ["Intel Loihi", "IBM TrueNorth", "BrainChip Akida", "Custom frameworks"],
        limitations: ["Limited to 1M operations per month"]
      },
      {
        id: "neuromorphic-enterprise",
        name: "Neuromorphic Enterprise",
        price: 29999,
        currency: "$",
        period: "month",
        description: "Enterprise neuromorphic computing with dedicated resources",
        features: [
          "Dedicated neuromorphic hardware",
          "Unlimited neural operations",
          "Custom neuromorphic architecture",
          "Dedicated engineer",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 98,
        setupTime: "10-12 weeks",
        support: "24/7 dedicated support",
        integrations: ["All neuromorphic platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "biocomputing-dna-storage",
    name: "Biocomputing & DNA Storage",
    description: "Revolutionary DNA-based computing and ultra-dense storage",
    icon: "🧪",
    services: [],
    pricingTiers: [
      {
        id: "biocomputing-starter",
        name: "Biocomputing Starter",
        price: 3999,
        currency: "$",
        period: "month",
        description: "Basic biocomputing and DNA storage access",
        features: [
          "Basic DNA storage (1TB equivalent)",
          "Simple biocomputing operations",
          "Standard error correction",
          "Documentation & tutorials",
          "Email support"
        ],
        aiScore: 87,
        setupTime: "4-6 weeks",
        support: "Email support",
        integrations: ["Basic DNA synthesis", "Standard sequencing", "Cloud storage APIs"],
        limitations: ["Limited storage capacity", "Basic operations only", "Standard error correction"]
      },
      {
        id: "biocomputing-professional",
        name: "Biocomputing Professional",
        price: 11999,
        currency: "$",
        period: "month",
        description: "Professional biocomputing with advanced capabilities",
        features: [
          "Advanced DNA storage (10TB equivalent)",
          "Advanced biocomputing operations",
          "Enhanced error correction",
          "Custom DNA synthesis",
          "Priority support",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 93,
        setupTime: "8-10 weeks",
        support: "Priority support",
        integrations: ["Custom DNA synthesis", "Advanced sequencing", "Multiple cloud platforms", "Custom APIs"],
        limitations: ["Limited to 10TB equivalent storage"]
      },
      {
        id: "biocomputing-enterprise",
        name: "Biocomputing Enterprise",
        price: 39999,
        currency: "$",
        period: "month",
        description: "Enterprise biocomputing with unlimited capabilities",
        features: [
          "Unlimited DNA storage",
          "Custom biocomputing architecture",
          "Advanced error correction",
          "Dedicated biologist",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 97,
        setupTime: "14-18 weeks",
        support: "24/7 dedicated support",
        integrations: ["All DNA platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "photonics-computing",
    name: "Photonics Computing",
    description: "Light-based computing for ultra-fast AI processing",
    icon: "💡",
    services: [],
    pricingTiers: [
      {
        id: "photonics-starter",
        name: "Photonics Starter",
        price: 2499,
        currency: "$",
        period: "month",
        description: "Basic photonics computing access",
        features: [
          "Access to photonics simulators",
          "Basic optical neural networks",
          "Up to 1,000 optical operations per month",
          "Documentation & tutorials",
          "Email support"
        ],
        aiScore: 86,
        setupTime: "2-3 weeks",
        support: "Email support",
        integrations: ["Basic optical frameworks", "Simulation tools", "Standard APIs"],
        limitations: ["Limited operations per month", "Simulator only", "Basic models"]
      },
      {
        id: "photonics-professional",
        name: "Photonics Professional",
        price: 7999,
        currency: "$",
        period: "month",
        description: "Professional photonics computing with hardware access",
        features: [
          "Access to photonics hardware",
          "Advanced optical neural networks",
          "Up to 10,000 optical operations per month",
          "Custom model optimization",
          "Priority support",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 93,
        setupTime: "4-6 weeks",
        support: "Priority support",
        integrations: ["Lightmatter", "Luminous Computing", "Lightelligence", "Custom frameworks"],
        limitations: ["Limited to 10K operations per month"]
      },
      {
        id: "photonics-enterprise",
        name: "Photonics Enterprise",
        price: 24999,
        currency: "$",
        period: "month",
        description: "Enterprise photonics computing with dedicated resources",
        features: [
          "Dedicated photonics hardware",
          "Unlimited optical operations",
          "Custom photonic architecture",
          "Dedicated engineer",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 97,
        setupTime: "8-10 weeks",
        support: "24/7 dedicated support",
        integrations: ["All photonics platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "swarm-robotics",
    name: "Swarm Robotics",
    description: "Coordinated multi-robot systems for complex tasks",
    icon: "🤖",
    services: [],
    pricingTiers: [
      {
        id: "swarm-robotics-starter",
        name: "Swarm Robotics Starter",
        price: 1599,
        currency: "$",
        period: "month",
        description: "Basic swarm robotics platform",
        features: [
          "Up to 10 robots",
          "Basic coordination algorithms",
          "Standard task templates",
          "Basic monitoring",
          "Email support"
        ],
        aiScore: 89,
        setupTime: "2-3 weeks",
        support: "Email support",
        integrations: ["ROS", "Basic robot APIs", "Standard platforms"],
        limitations: ["Limited to 10 robots", "Basic algorithms", "Standard tasks only"]
      },
      {
        id: "swarm-robotics-professional",
        name: "Swarm Robotics Professional",
        price: 4999,
        currency: "$",
        period: "month",
        description: "Professional swarm robotics with advanced capabilities",
        features: [
          "Up to 100 robots",
          "Advanced coordination algorithms",
          "Custom task development",
          "Advanced monitoring & analytics",
          "Priority support",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 94,
        setupTime: "4-6 weeks",
        support: "Priority support",
        integrations: ["ROS", "Gazebo", "Custom robot APIs", "Cloud computing", "Edge computing"],
        limitations: ["Limited to 100 robots"]
      },
      {
        id: "swarm-robotics-enterprise",
        name: "Swarm Robotics Enterprise",
        price: 15999,
        currency: "$",
        period: "month",
        description: "Enterprise swarm robotics with unlimited capabilities",
        features: [
          "Unlimited robots",
          "Custom swarm architecture",
          "Advanced AI coordination",
          "Dedicated engineer",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 97,
        setupTime: "6-8 weeks",
        support: "24/7 dedicated support",
        integrations: ["All robot platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "quantum-internet",
    name: "Quantum Internet",
    description: "Next-generation quantum communication infrastructure",
    icon: "🌍",
    services: [],
    pricingTiers: [
      {
        id: "quantum-internet-starter",
        name: "Quantum Internet Starter",
        price: 3499,
        currency: "$",
        period: "month",
        description: "Basic quantum internet access",
        features: [
          "Basic quantum key distribution",
          "Up to 1GB quantum data per month",
          "Standard security protocols",
          "Documentation & tutorials",
          "Email support"
        ],
        aiScore: 88,
        setupTime: "6-8 weeks",
        support: "Email support",
        integrations: ["Basic quantum networks", "Standard protocols", "Cloud APIs"],
        limitations: ["Limited data transfer", "Basic security", "Standard protocols only"]
      },
      {
        id: "quantum-internet-professional",
        name: "Quantum Internet Professional",
        price: 9999,
        currency: "$",
        period: "month",
        description: "Professional quantum internet with advanced capabilities",
        features: [
          "Advanced quantum key distribution",
          "Up to 100GB quantum data per month",
          "Enhanced security protocols",
          "Custom quantum routing",
          "Priority support",
          "Performance optimization"
        ],
        popular: true,
        aiScore: 94,
        setupTime: "10-12 weeks",
        support: "Priority support",
        integrations: ["Advanced quantum networks", "Custom protocols", "Multiple platforms", "Custom APIs"],
        limitations: ["Limited to 100GB per month"]
      },
      {
        id: "quantum-internet-enterprise",
        name: "Quantum Internet Enterprise",
        price: 34999,
        currency: "$",
        period: "month",
        description: "Enterprise quantum internet with unlimited capabilities",
        features: [
          "Unlimited quantum data transfer",
          "Custom quantum architecture",
          "Advanced security protocols",
          "Dedicated engineer",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 98,
        setupTime: "12-16 weeks",
        support: "24/7 dedicated support",
        integrations: ["All quantum platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "brain-computer-interface",
    name: "Brain-Computer Interface",
    description: "Direct neural communication with computers",
    icon: "🧠",
    services: [],
    pricingTiers: [
      {
        id: "bci-starter",
        name: "BCI Starter",
        price: 1999,
        currency: "$",
        period: "month",
        description: "Basic brain-computer interface platform",
        features: [
          "Basic EEG signal processing",
          "Simple thought-to-text",
          "Up to 100 neural commands per day",
          "Standard accuracy (70-80%)",
          "Email support"
        ],
        aiScore: 85,
        setupTime: "3-4 weeks",
        support: "Email support",
        integrations: ["Basic EEG sensors", "Standard APIs", "Basic platforms"],
        limitations: ["Limited commands per day", "Basic accuracy", "Standard sensors only"]
      },
      {
        id: "bci-professional",
        name: "BCI Professional",
        price: 5999,
        currency: "$",
        period: "month",
        description: "Professional BCI with advanced capabilities",
        features: [
          "Advanced neural signal processing",
          "High-accuracy thought-to-text",
          "Up to 1,000 neural commands per day",
          "High accuracy (85-95%)",
          "Priority support",
          "Custom model training"
        ],
        popular: true,
        aiScore: 92,
        setupTime: "6-8 weeks",
        support: "Priority support",
        integrations: ["Advanced EEG sensors", "fNIRS", "TMS", "Custom APIs", "Advanced platforms"],
        limitations: ["Limited to 1K commands per day"]
      },
      {
        id: "bci-enterprise",
        name: "BCI Enterprise",
        price: 19999,
        currency: "$",
        period: "month",
        description: "Enterprise BCI with unlimited capabilities",
        features: [
          "Unlimited neural commands",
          "Custom BCI architecture",
          "Ultra-high accuracy (95%+)",
          "Dedicated neuroscientist",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 96,
        setupTime: "8-10 weeks",
        support: "24/7 dedicated support",
        integrations: ["All BCI platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  },
  {
    id: "space-computing",
    name: "Space Computing",
    description: "AI and computing infrastructure in space",
    icon: "🚀",
    services: [],
    pricingTiers: [
      {
        id: "space-computing-starter",
        name: "Space Computing Starter",
        price: 5999,
        currency: "$",
        period: "month",
        description: "Basic space computing access",
        features: [
          "Access to satellite computing resources",
          "Basic space-to-ground processing",
          "Up to 1TB data processing per month",
          "Standard latency (500-1000ms)",
          "Email support"
        ],
        aiScore: 87,
        setupTime: "8-10 weeks",
        support: "Email support",
        integrations: ["Basic satellite networks", "Standard APIs", "Cloud platforms"],
        limitations: ["Limited data processing", "High latency", "Basic resources only"]
      },
      {
        id: "space-computing-professional",
        name: "Space Computing Professional",
        price: 17999,
        currency: "$",
        period: "month",
        description: "Professional space computing with advanced capabilities",
        features: [
          "Advanced satellite computing",
          "Low-latency space-to-ground processing",
          "Up to 100TB data processing per month",
          "Low latency (100-500ms)",
          "Priority support",
          "Custom optimization"
        ],
        popular: true,
        aiScore: 93,
        setupTime: "12-16 weeks",
        support: "Priority support",
        integrations: ["Advanced satellite networks", "Custom protocols", "Multiple platforms", "Custom APIs"],
        limitations: ["Limited to 100TB per month"]
      },
      {
        id: "space-computing-enterprise",
        name: "Space Computing Enterprise",
        price: 59999,
        currency: "$",
        period: "month",
        description: "Enterprise space computing with unlimited capabilities",
        features: [
          "Unlimited space computing resources",
          "Custom space architecture",
          "Ultra-low latency (<100ms)",
          "Dedicated space engineer",
          "24/7 support",
          "Advanced security",
          "Custom integrations"
        ],
        aiScore: 98,
        setupTime: "16-20 weeks",
        support: "24/7 dedicated support",
        integrations: ["All space platforms", "Custom hardware", "On-premise solutions"],
        limitations: []
      }
    ]
  }
];

export default COMPREHENSIVE_PRICING_GUIDE_2029;