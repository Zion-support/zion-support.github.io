import React from 'react';
import { InteractiveTechDemo } from '../components/InteractiveTechDemo';
import { SEO } from '../components/SEO';

const InteractiveDemo: React.FC = () => {
  return (
    <>
      <SEO 
        title="Interactive Technology Demo - Zion Tech Group"
        description="Experience our cutting-edge AI, quantum computing, and cybersecurity technologies in action. Interactive demos showcasing real-time performance and capabilities."
        keywords="interactive demo, AI demo, quantum computing demo, cybersecurity demo, technology showcase, Zion Tech Group"
      />
      <InteractiveTechDemo />
    </>
  );
};

export default InteractiveDemo;