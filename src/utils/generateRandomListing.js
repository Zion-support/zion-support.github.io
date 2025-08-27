export function generateRandomListing() {
  const categories = [
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data & Analytics',
    'IoT & Edge Computing',
    'Quantum Computing',
    'IT Infrastructure',
    'Business Solutions'
  ];

  const titles = [
    'Advanced AI Analytics Platform',
    'Cloud Migration Solution',
    'Cybersecurity Assessment Tool',
    'Data Visualization Dashboard',
    'IoT Device Management System',
    'Quantum Computing Simulator',
    'Enterprise IT Monitoring',
    'Business Process Automation'
  ];

  const descriptions = [
    'Comprehensive solution for enterprise AI implementation and analytics.',
    'Seamless cloud migration with zero downtime and data integrity.',
    'Advanced security assessment and threat detection platform.',
    'Interactive data visualization and business intelligence tools.',
    'Complete IoT device management and monitoring solution.',
    'Quantum computing simulation and algorithm development platform.',
    'Enterprise-grade IT infrastructure monitoring and management.',
    'End-to-end business process automation and optimization.'
  ];

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  const randomPrice = Math.floor(Math.random() * 5000) + 100;
  const randomRating = (Math.random() * 2 + 3).toFixed(1);
  const randomReviews = Math.floor(Math.random() * 500) + 10;

  return {
    id: Date.now() + Math.random(),
    title: randomTitle,
    description: randomDescription,
    category: randomCategory,
    price: randomPrice,
    rating: parseFloat(randomRating),
    reviewCount: randomReviews,
    featured: Math.random() > 0.8,
    availability: Math.random() > 0.3 ? 'In Stock' : 'Available Soon',
    tags: [randomCategory, 'Technology', 'Enterprise'],
    images: ['/api/placeholder/400/300'],
    createdAt: new Date().toISOString()
  };
}