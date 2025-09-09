// Generate random marketplace listings for demo purposes
export function generateRandomListing() {
  const categories = ['Services', 'Talents', 'Equipment', 'AI Models & APIs', 'Content Creation', 'Data Analysis'];
  const locations = ['Global', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'Remote'];
  const availabilities = ['Immediate', 'Available', 'In Stock', 'Next Week', 'Custom Schedule'];
  
  const titles = [
    'Advanced Machine Learning Solutions',
    'Cloud Infrastructure Consulting',
    'Cybersecurity Assessment Service',
    'Data Pipeline Optimization',
    'AI-Powered Analytics Platform',
    'DevOps Automation Suite',
    'Blockchain Development Services',
    'IoT Solution Architecture',
    'Natural Language Processing API',
    'Computer Vision Implementation',
    'Big Data Processing Framework',
    'Microservices Architecture Design',
    'API Gateway Management',
    'Database Performance Tuning',
    'Mobile App Development',
    'Web Application Security',
    'Network Infrastructure Design',
    'Storage Solution Optimization',
    'Backup and Recovery Systems',
    'Disaster Recovery Planning'
  ];
  
  const descriptions = [
    'Professional service offering cutting-edge technology solutions for enterprise clients.',
    'Expert consultation and implementation services for modern business needs.',
    'Comprehensive solution designed to enhance your business operations.',
    'Advanced technology platform with proven track record of success.',
    'Innovative approach to solving complex business challenges.',
    'Professional-grade equipment and tools for technical operations.',
    'High-performance solution optimized for enterprise environments.',
    'Scalable architecture designed for growth and flexibility.',
    'Secure and reliable platform for critical business operations.',
    'User-friendly interface with powerful backend capabilities.'
  ];
  
  const tags = [
    'ai', 'machine-learning', 'cloud', 'cybersecurity', 'data', 'analytics',
    'devops', 'automation', 'blockchain', 'iot', 'api', 'mobile', 'web',
    'database', 'networking', 'storage', 'backup', 'recovery', 'consulting'
  ];
  
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomAvailability = availabilities[Math.floor(Math.random() * availabilities.length)];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
  
  // Generate random tags based on category
  let randomTags = [];
  if (randomCategory === 'Services') {
    randomTags = ['consulting', 'professional', 'enterprise', 'solution'];
  } else if (randomCategory === 'Talents') {
    randomTags = ['expert', 'professional', 'experienced', 'certified'];
  } else if (randomCategory === 'Equipment') {
    randomTags = ['hardware', 'professional', 'enterprise', 'reliable'];
  } else if (randomCategory === 'AI Models & APIs') {
    randomTags = ['ai', 'machine-learning', 'api', 'intelligent'];
  } else if (randomCategory === 'Content Creation') {
    randomTags = ['content', 'creative', 'professional', 'quality'];
  } else if (randomCategory === 'Data Analysis') {
    randomTags = ['data', 'analytics', 'insights', 'business'];
  }
  
  // Add some random additional tags
  const additionalTags = tags.filter(tag => !randomTags.includes(tag));
  const numAdditionalTags = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < numAdditionalTags; i++) {
    const randomTag = additionalTags[Math.floor(Math.random() * additionalTags.length)];
    if (!randomTags.includes(randomTag)) {
      randomTags.push(randomTag);
    }
  }
  
  // Generate random price based on category
  let basePrice, priceRange;
  if (randomCategory === 'Services') {
    basePrice = 1500;
    priceRange = 2000;
  } else if (randomCategory === 'Talents') {
    basePrice = 80;
    priceRange = 120;
  } else if (randomCategory === 'Equipment') {
    basePrice = 800;
    priceRange = 3000;
  } else if (randomCategory === 'AI Models & APIs') {
    basePrice = 3000;
    priceRange = 4000;
  } else if (randomCategory === 'Content Creation') {
    basePrice = 500;
    priceRange = 1000;
  } else if (randomCategory === 'Data Analysis') {
    basePrice = 1200;
    priceRange = 2500;
  }
  
  const randomPrice = basePrice + Math.floor(Math.random() * priceRange);
  const randomRating = 4.0 + (Math.random() * 1.0);
  const randomReviewCount = Math.floor(Math.random() * 200) + 20;
  const randomAiScore = Math.floor(Math.random() * 20) + 80;
  
  const id = `random-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    id,
    title: randomTitle,
    description: randomDescription,
    category: randomCategory,
    price: randomPrice,
    currency: '$',
    tags: randomTags,
    author: {
      name: `Provider ${Math.floor(Math.random() * 1000)}`,
      id: `provider-${Math.floor(Math.random() * 1000)}`
    },
    images: [`https://source.unsplash.com/random/800x500?${randomTags[0]}`],
    createdAt: new Date().toISOString(),
    rating: parseFloat(randomRating.toFixed(1)),
    reviewCount: randomReviewCount,
    location: randomLocation,
    availability: randomAvailability,
    aiScore: randomAiScore
  };
}