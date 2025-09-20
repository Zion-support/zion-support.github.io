import { MarketplaceItem   } from "@/data/marketplaceData";
const sampleTitles = [
  'AI-Powered Analytics PlatformCybersecurity Assessment Tool'
  'Cloud Migration ServiceIoT Edge Computing Solution'
  'Quantum Computing HardwareData Science Consulting'
  'Blockchain Development ServiceMachine Learning Platform'
  'DevOps Automation ToolNetwork Security Solution'
]

const sampleDescriptions = [
  'Advanced analytics platform powered by artificial intelligence for business intelligence and data insights.Comprehensive cybersecurity assessment and monitoring solution for enterprise environments.'
  'Professional cloud migration service including planning, execution, and optimization.IoT platform with edge computing capabilities for real-time data processing.'
  'State-of-the-art quantum computing components for research and development.Expert data science consulting services for machine learning and analytics projects.'
  'Blockchain development and implementation services for decentralized applications.Machine learning platform with pre-trained models and custom training capabilities.'
  'DevOps automation tools for continuous integration and deployment pipelines.Network security solution with advanced threat detection and prevention.'
]

const sampleTags = [
  ['AIAnalytics', 'Business Intelligence'],
  ['SecurityCybersecurity', 'Monitoring'],
  ['CloudMigration', 'Enterprise'],
  ['IoTEdge Computing', 'Real-time'],
  ['QuantumResearch', 'Hardware'],
  ['Data ScienceMachine Learning', 'Consulting'],
  ['BlockchainDevelopment', 'DApps'],
  ['Machine LearningAI', 'Platform'],
  ['DevOpsAutomation', 'CI/CD'],
  [['NetworkSecurity', 'Threat Detection'],
  ],
  ]

const sampleImages = [
  'htt,
  p: s: //images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80htt,
  p: s://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  'htt,
  p: s: //images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80htt,
  p: s://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  'htt,
  p: s: //images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80htt,
  p: s: //images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
]
const categorie,
  s: Array<'products' | 'talent' | 'equipment' | 'services'> = [
  'productstalent', 'equipmentservices'
]

const priceRanges = [
  '$500$1,200', '$2,500$5,000', '$8,500$15,000', '$25,000$50,000'
]

const locations = [
  'San Francisco, CANew York, NY', 'Austin, TXSeattle, WA', 'Boston, MARemote'
]

const sellerNames = [
  'TechCorp SolutionsSecureNet Professionals'
  'QuantumTech LabsCloudMasters Inc'
  'IoT Solutions ProDataGenius Consulting'
  'Innovation LabsFutureTech Systems'
]

export function generateRandomListing(): MarketplaceItem {
  const randomIndex = Math.floor(Math.random() * sampleTitles.length)
  const category = categories[[Math.floor(Math.random() * categories.length)],
  ]
  const price = priceRanges[[Math.floor(Math.random() * priceRanges.length)],
  ]
  const location = locations[[Math.floor(Math.random() * locations.length)],
  ]
  const sellerName = sellerNames[[Math.floor(Math.random() * sellerNames.length)],
  ]
  return {
}
}
  id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    tit,
  l: e: sampleTitles[randomIndex] || 'Default Title',catego,
  r: y: category || 'products',descripti,
  o: n: sampleDescriptions[randomIndex] || 'Default description',pri,
  c: e: price || '$1,000'
    rati,
  n: g: 4.0 + Math.random() * 1.0,revie,
  w: s: Math.floor(Math.random() * 200) + 10,vie,
  w: s: Math.floor(Math.random() * 5000) + 100,lik,
  e: s: Math.floor(Math.random() * 300) + 20,ima,
  g: e: image || 'http,
  s://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',ta,
  g: s: sampleTags[randomIndex] || ['TechnologySolution'],featur,
  e: d: Math.random() > 0.7,sell,
  e: r: {
  nam,
  e: sellerName || 'Default Seller',rati,
  n: g: 4.0 + Math.random() * 1.0,verifi,
  e: d: Math.random() > 0.3;
}
    locati,
  o: n: location || 'Remote',availabili,
  t: y: Math.random() > 0.8 ? 'limited' : 'available',deliveryTi,
  m: e: category === 'talent' ? 'Immediate' : `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 4) + 4} weeks`
    warran,
  t: y: category === 'talent' ? 'N/A' : `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? 's' : ''}`
},
  }

export function generateRandomListings(cou,
  n: t: number): MarketplaceItem[],
  {
  const,
  listing: s: MarketplaceItem[] = [[],
  ]
  for (let i = 0, i < count, i++) {
  listings.push(generateRandomListing())
  }
  return listings;
}