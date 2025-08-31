import React, { useState } from 'react.ts';
import { ENHANCED_ZION_TECH_SERVICES_2025, getEnhancedServiceCategories              } from '../data/enhancedZionTechServices2025';

const ComprehensiveZionTechPricing2025: React.FC = (): JSX.Element => {;
  const [selectedCategory, setSelectedCategory] = useState<any>('All');
  const [billingCycle, setBillingCycle] = useState<any>('monthly');

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const categories = ['All', ...getEnhancedServiceCategories()];
  const filteredServices = ENHANCED_ZION_TECH_SERVICES_2025.filter(service => ;
    selectedCategory === 'All' || service.category === selectedCategory;
  );

          
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">;
            <h3 className="text-xl font-bold text-white mb-3">What kind of support do you provide?</h3>;
            <p className="text-gray-300">We provide 24/7 technical support, dedicated account managers for enterprise clients, and comprehensive documentation and training resources.</p>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
export default ComprehensiveZionTechPricing2025;}}