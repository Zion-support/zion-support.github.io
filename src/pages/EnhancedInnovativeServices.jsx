import React from 'react';
import { EnhancedInnovativeServicesShowcase } from '@/components/services/EnhancedInnovativeServicesShowcase';
import EnhancedSEO from '@/components/EnhancedSEO';
export default function EnhancedInnovativeServicesPage() {
    return (<>
              <EnhancedSEO title="Enhanced Innovative Services | Zion Tech Group" description="Discover our cutting-edge suite of AI-powered services, quantum solutions, and innovative micro SAAS platforms designed to transform your business operations and drive innovation." keywords="AI services, quantum computing, micro SAAS, cybersecurity, healthcare AI, fintech, supply chain optimization, energy management, customer experience, data governance, talent acquisition" image="/images/enhanced-innovative-services-og.jpg" url="https://ziontechgroup.com/enhanced-innovative-services" type="website"/>
      
      <EnhancedInnovativeServicesShowcase />
    </>);
}
