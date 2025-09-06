<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react',;',';'; ; import {SEO } from '@/components/SEO'; export default function SecurityComplianceSection() {return ( <div className="min-h-screen bg-white"> <SEO title="SecurityComplianceSection && SecurityComplianceSection.test - Zion Tech Group" description="Professional SecurityComplianceSection && SecurityComplianceSection.test services by Zion Tech Group" /> <div className="container mx-auto px-4 py-20"> <h1 className="text-4xl font-bold text-white mb-8">SecurityComplianceSection && SecurityComplianceSection.test</h1> <pclassName="text-gray-300 text-lg"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}"
import React from 'react',','' '''' import {SEO } from '@/components/SEO' export default function SecurityComplianceSection() {return ( <div className="min-h-screen bg-white"> <SEO title="SecurityComplianceSection && SecurityComplianceSection.test - Zion Tech Group" description="Professional SecurityComplianceSection && SecurityComplianceSection.test services by Zion Tech Group" /> <div className="container mx-auto px-4 py-20"> <h1 className="text-4xl font-bold text-white mb-8">SecurityComplianceSection && SecurityComplianceSection.test</h1> <p className="text-gray-300 text-lg"> Professional SecurityComplianceSection && SecurityComplianceSection.test services to help your business grow. </p> </div>'; </div>';'; );';';'}"