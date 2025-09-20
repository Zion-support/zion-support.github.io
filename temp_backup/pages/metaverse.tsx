import React from 'react',
import { motion } from 'framer-motion',
import { 
  Gamepad2, Eye, Globe, Users, Target, ArrowRight, 
  CheckCircle, Building, Rocket, Shield, Zap, Star,
  Palette, Music, Film, BookOpen, Cpu, Database,
  Cloud, Lock, Settings, Code, TrendingUp, Award
} from 'lucide-react',

export default function Metaverse() {
  const metaverseServices = [
    {
      title: 'Virtual World Creation',
      description: 'Design and build immersive 3D virtual environments for businesses, education, and entertainment.',
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      features: [
        'Custom 3D Environment DesignInteractive Virtual Spaces',
        'Real-time RenderingMulti-user Environments',
        'Cross-platform CompatibilityPerformance Optimization'
      ],
      useCases: [
        'Virtual Offices & WorkspacesEducational Virtual Campuses',
        'Virtual Events & ConferencesVirtual Shopping Experiences'
      ]
    },
    {
      title: 'Immersive Experiences',
      description: 'Create engaging VR/AR experiences that captivate users and drive engagement.',
      icon: <Eye className="w-12 h-12 text-purple-400" />,
      features: [
        'VR/AR Development360° Video Experiences',
        'Interactive StorytellingSpatial Audio Integration',
        'Haptic Feedback SystemsMotion Tracking'
      ],
      useCases: [
        'Virtual Training & SimulationInteractive Marketing Campaigns',
        'Virtual Tourism & ExplorationImmersive Gaming Experiences'
      ]
    },
    {
      title: 'Digital Twins',
      description: 'Build accurate digital replicas of physical assets and environments for monitoring and optimization.',
      icon: <Building className="w-12 h-12 text-green-400" />,
      features: [
        '3D Asset Scanning & ModelingReal-time Data Integration',
        'Predictive AnalyticsIoT Sensor Integration',
        'Performance MonitoringPredictive Maintenance'
      ],
      useCases: [
        'Smart City PlanningIndustrial Facility Management',
        'Building Information ModelingInfrastructure Monitoring'
      ]
    },
    {
      title: 'VR/AR Solutions',
      description: 'Develop cutting-edge virtual and augmented reality applications for various industries.',
      icon: <Gamepad2 className="w-12 h-12 text-orange-400" />,
      features: [
        'Mobile AR ApplicationsVR Headset Applications',
        'Mixed Reality SolutionsGesture Recognition',
        'Voice CommandsEye Tracking'
      ],
      useCases: [
        'Remote Collaboration ToolsVirtual Design Reviews',
        'AR-powered MaintenanceVirtual Showrooms'
      ]
    },
    {
      title: 'Metaverse Platforms',
      description: 'Build scalable metaverse platforms that can host thousands of concurrent users.',
      icon: <Cpu className="w-12 h-12 text-cyan-400" />,
      features: [
        'Scalable InfrastructureReal-time Multiplayer',
        'User AuthenticationContent Management',
        'Analytics & InsightsMonetization Systems'
      ],
      useCases: [
        'Virtual Social PlatformsVirtual Commerce Platforms',
        'Virtual Learning PlatformsVirtual Entertainment Venues'
      ]
    },
    {
      title: 'Digital Assets',
      description: 'Create and manage digital assets including NFTs, virtual goods, and digital collectibles.',
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      features: [
        'NFT Creation & ManagementDigital Asset Marketplaces',
        'Blockchain IntegrationSmart Contract Development',
        'Digital Rights ManagementAsset Trading Systems'
      ],
      useCases: [
        'Virtual Real EstateDigital Art Galleries',
        'Virtual Fashion & AccessoriesGaming Asset Marketplaces'
      ]
    }
  ],

  const industries = [
    {
      name: 'Real Estate',
      description: 'Virtual property tours, digital twins of buildings, and virtual real estate marketplaces.',
      icon: <Building className="w-8 h-8 text-blue-400" />,
      benefits: [
        'Virtual Property Tours3D Building Visualization',
        'Virtual StagingRemote Property Viewing'
      ]
    },
    {
      name: 'Education',
      description: 'Immersive learning environments, virtual classrooms, and interactive educational experiences.',
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      benefits: [
        'Virtual ClassroomsInteractive Learning Modules',
        'Virtual Field Trips3D Educational Content'
      ]
    },
    {
      name: 'Healthcare',
      description: 'Virtual medical training, patient education, and therapeutic virtual environments.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      benefits: [
        'Medical Training SimulationsVirtual Therapy Sessions',
        'Patient Education ToolsSurgical Planning'
      ]
    },
    {
      name: 'Retail & E-commerce',
      description: 'Virtual shopping experiences, digital showrooms, and immersive product demonstrations.',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      benefits: [
        'Virtual Shopping Malls3D Product Visualization',
        'Virtual Try-On ExperiencesInteractive Product Demos'
      ]
    },
    {
      name: 'Entertainment',
      description: 'Virtual concerts, gaming experiences, and immersive entertainment platforms.',
      icon: <Music className="w-8 h-8 text-yellow-400" />,
      benefits: [
        'Virtual Concert VenuesImmersive Gaming Worlds',
        'Virtual Movie TheatersInteractive Storytelling'
      ]
    },
    {
      name: 'Manufacturing',
      description: 'Virtual factory tours, digital twins, and training simulations.',
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      benefits: [
        'Virtual Factory ToursTraining Simulations',
        'Equipment MaintenanceProcess Optimization'
      ]
    }
  ],

  const technologyStack = [
    {
      category: '3D Graphics & Rendering',
      technologies: [
        'Unity 3DUnreal Engine',
        'Three.jsWebGL',
        'OpenGLVulkan'
      ]
    },
    {
      category: 'VR/AR Development',
      technologies: [
        'Oculus SDKHTC Vive SDK',
        'ARKit & ARCoreWebXR',
        'SteamVRMixed Reality Toolkit'
      ]
    },
    {
      category: 'Backend & Infrastructure',
      technologies: [
        'Node.jsPython',
        'AWS/Azure/GCPDocker',
        'KubernetesWebRTC'
      ]
    },
    {
      category: 'Blockchain & NFTs',
      technologies: [
        'EthereumPolygon',
        'IPFSMetaMask',
        'Web3.jsSolidity'
      ]
    }
  ],

  const developmentProcess = [
    {
      step: '01',
      title: 'Concept & Planning',
      description: 'Define the metaverse vision, user experience goals, and technical requirements.',
      icon: <Target className="w-8 h-8 text-blue-400" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create 3D designs, user interfaces, and interactive prototypes for validation.',
      icon: <Palette className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build the metaverse platform, integrate technologies, and implement features.',
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing, performance optimization, and user experience refinement.',
      icon: <Settings className="w-8 h-8 text-orange-400" />
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy to production, launch the metaverse, and provide ongoing support.',
      icon: <Rocket className="w-8 h-8 text-red-400" />
    }
  ],

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>metaverse | Zion Tech Group</title>
        <meta name="description" content="metaverse - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">metaverse</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  ),
},
export default NextGenTechShowcase2026,