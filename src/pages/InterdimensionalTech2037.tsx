import React from 'react';
import InterdimensionalTechShowcase2037 from '../components/InterdimensionalTechShowcase2037';
import Header from '../Header';
import Footer from '../Footer';

const InterdimensionalTech2037Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <InterdimensionalTechShowcase2037 />
      <Footer />
    </div>
  );
};

export default InterdimensionalTech2037Page;