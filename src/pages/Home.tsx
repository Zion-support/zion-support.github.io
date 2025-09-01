import { Link  } from 'react-router-dom';
 from 'react';
export default function Home () {
export default Home;
import { motion, AnimatePresence  } from 'framer-motion';

 from 'lucide - react';

export default function Home() {
  return (
    // The container class will provide max-width and horizontal padding.
    // Specific padding for sections (e.g., py-8, py-12) should be handled
    // within each section or by adding them to this container div if appropriate.
    <div className="container py-6 md:py-10"> {/* Added container and some vertical padding */}
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      {/* Sections remain the same */}
      <ITServiceRequestHero />

