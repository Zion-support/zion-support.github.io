import { MarketplaceItem } from '@/data/marketplaceData';

const categories = [
  'AI & Analytics',
  'Cybersecurity',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Consulting',
  'IoT & Hardware',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Digital Transformation'
];

const locations = [
  'United States',
  'United Kingdom',
  'Canada',
  'Germany',
  'Australia',
  'Netherlands',
  'Singapore',
  'Japan',
  'India',
  'Brazil'
];

const companyNames = [
  'TechSolutions Pro',
  'SecureTech Solutions',
  'CloudTech Experts',
  'AI Innovations Lab',
  'Digital Strategy Partners',
  'IoT Solutions Hub',
  'DataFlow Analytics',
  'CyberShield Systems',
  'CloudBridge Technologies',
  'SmartCity Solutions'
];

const titles = [
  'AI-Powered Business Intelligence Platform',
  'Cybersecurity Assessment & Implementation',
  'Cloud Migration & DevOps Automation',
  'Machine Learning Model Development',
  'Digital Transformation Consulting',
  'IoT Platform Development',
  'Web Application Development',
  'Mobile App Development',
  'Data Analytics Dashboard',
  'Enterprise Security Solution'
];

const descriptions = [
  'Comprehensive solution designed to transform your business operations with cutting-edge technology.',
  'Advanced security implementation with real-time threat detection and automated response systems.',
  'Seamless cloud migration with automated CI/CD pipelines and infrastructure optimization.',
  'Custom machine learning models tailored to your specific business requirements and data.',
  'Strategic consulting services to modernize your business processes and technology infrastructure.',
  'Scalable IoT platform for connected devices with real-time monitoring and analytics.',
  'Modern web applications built with the latest technologies and best practices.',
  'Cross-platform mobile applications with native performance and modern UI/UX.',
  'Interactive dashboards providing real-time insights and actionable business intelligence.',
  'Enterprise-grade security solution with comprehensive threat protection and compliance features.'
];

const features = [
  ['Real-time Analytics', 'AI-powered Insights', 'Custom Dashboards', 'Predictive Modeling'],
  ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Reporting'],
  ['Multi-cloud Strategy', 'CI/CD Automation', 'Infrastructure as Code', 'Performance Monitoring'],
  ['Custom Model Training', 'Data Preprocessing', 'API Integration', 'Performance Optimization'],
  ['Strategic Planning', 'Process Optimization', 'Change Management', 'Implementation Support'],
  ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Scalable Architecture'],
  ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Integration'],
  ['Cross-platform Support', 'Native Performance', 'Offline Capabilities', 'Push Notifications'],
  ['Interactive Visualizations', 'Real-time Updates', 'Custom Reports', 'Data Integration'],
  ['Zero Trust Architecture', 'Advanced Threat Protection', '24/7 Monitoring', 'Compliance Management']
];

export function generateRandomListing(): MarketplaceItem {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomCompany = companyNames[Math.floor(Math.random() * companyNames.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomFeatures = features[Math.floor(Math.random() * features.length)];
  
  const rating = 4.0 + Math.random() * 1.0; // 4.0 to 5.0
  const reviewCount = Math.floor(Math.random() * 200) + 50; // 50 to 250
  const price = Math.random() > 0.3 ? Math.floor(Math.random() * 5000) + 1000 : null; // 70% chance of having a price
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: randomTitle,
    description: randomDescription,
    category: randomCategory,
    price: price,
    currency: 'USD',
    rating: Math.round(rating * 10) / 10,
    reviewCount: reviewCount,
    images: [
      `https://images.unsplash.com/photo-${Math.random().toString(36).substr(2, 8)}?auto=format&fit=crop&w=800&q=80`,
      `https://images.unsplash.com/photo-${Math.random().toString(36).substr(2, 8)}?auto=format&fit=crop&w=800&q=80`
    ],
    tags: [randomCategory, 'Technology', 'Enterprise', 'Innovation'],
    location: randomLocation,
    availability: 'Available',
    seller: {
      name: randomCompany,
      rating: 4.0 + Math.random() * 1.0,
      verified: Math.random() > 0.2
    },
    features: randomFeatures,
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Random date within last 30 days
    updatedAt: new Date().toISOString().split('T')[0]
  };
}

export function generateRandomListings(count: number): MarketplaceItem[] {
  const listings: MarketplaceItem[] = [];
  for (let i = 0; i < count; i++) {
    listings.push(generateRandomListing());
  }
  return listings;
}