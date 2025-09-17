import React from 'react';
import QuantumComputingBreakthrough2035 from '../components/QuantumComputingBreakthrough2035';
import Header from '../Header';
import Footer from '../Footer';

const QuantumComputingBreakthrough2035Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Header />
      <QuantumComputingBreakthrough2035 />
      <Footer />
    </div>
  );
};

export default QuantumComputingBreakthrough2035Page;