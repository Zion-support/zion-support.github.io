import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Revolutionary quantum consciousness AI consulting and autonomous business operations for enterprise transformation." />
      </Helmet>
      
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <h1 className="text-left">
              Zion Tech Group
            </h1>
            <p className="text-left">
              Revolutionary quantum consciousness AI consulting and autonomous business operations for enterprise transformation.
            </p>
            <div className="text-left">
              <a 
                href="/services"
                className="text-left"
              >
                Explore Services
              </a>
              <a 
                href="/contact"
                className="text-left"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="text-left">
            <div className="text-left">
              <h3 className="text-left">Quantum AI</h3>
              <p className="text-left">
                Revolutionary quantum consciousness AI consulting that transforms enterprise decision-making with 99.9% accuracy.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-left">Autonomous Operations</h3>
              <p className="text-left">
                Self-healing infrastructure and autonomous business operations that reduce costs by 70% while increasing efficiency.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-left">Enterprise Solutions</h3>
              <p className="text-left">
                Comprehensive AI-powered solutions for Fortune 500 companies, delivering measurable ROI and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;