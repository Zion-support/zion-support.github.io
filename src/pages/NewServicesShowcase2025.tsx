<<<<<<< HEAD
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
import React from 'react'; const NewServicesShowcase2025 = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> New Services 2025 </h1> <p className="text-xl text-gray-600"> Discover our latest innovations and cutting-edge solutions. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI Analytics</h3> <p className="text-gray-600 mb-4">Next-generation AI-powered analytics for deeper business insights.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge Computing</h3> <p className="text-gray-600 mb-4">Bring computing power closer to your data sources.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Solutions</h3> <p className="text-gray-600 mb-4">Connect and manage your devices with smart IoT solutions.</p> <span className="text-sm text-blue-600">Explore</span> </div> </div> </div> </div> )}; export default NewServicesShowcase2025;

<<<<<<< HEAD
import React from 'react'; const NewServicesShowcase2025 = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> New Services 2025 </h1> <p className="text - xl text - gray - 600"> Discover our latest innovations and cutting - edge solutions. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Advanced AI Analytics</h3> <p className="text - gray - 600 mb - 4">Next - generation AI - powered analytics for deeper business insights.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Edge Computing</h3> <p className="text - gray - 600 mb - 4">Bring computing power closer to your data sources.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">IoT Solutions</h3> <p className="text - gray - 600 mb - 4">Connect and manage your devices with smart IoT solutions.</p> <span className="text - sm text - blue - 600">Explore</span> </div> </div> </div> </div> )} export default NewServicesShowcase2025;
import React from 'react'; const NewServicesShowcase2025 = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> New Services 2025 </h1> <p className="text-xl text-gray-600"> Discover our latest innovations and cutting-edge solutions. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI Analytics</h3> <p className="text-gray-600 mb-4">Next-generation AI-powered analytics for deeper business insights.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge Computing</h3> <p className="text-gray-600 mb-4">Bring computing power closer to your data sources.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Solutions</h3> <p className="text-gray-600 mb-4">Connect and manage your devices with smart IoT solutions.</p> <span className="text-sm text-blue-600">Explore</span> </div> </div> </div> </div> )}; export default NewServicesShowcase2025;
import React from 'react'; const NewServicesShowcase2025 = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> New Services 2025 </h1> <p className="text - xl text - gray - 600"> Discover our latest innovations and cutting - edge solutions. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Advanced AI Analytics</h3> <p className="text - gray - 600 mb - 4">Next - generation AI - powered analytics for deeper business insights.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Edge Computing</h3> <p className="text - gray - 600 mb - 4">Bring computing power closer to your data sources.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">IoT Solutions</h3> <p className="text - gray - 600 mb - 4">Connect and manage your devices with smart IoT solutions.</p> <span className="text - sm text - blue - 600">Explore</span> </div> </div> </div> </div> )} export default NewServicesShowcase2025;
=======
import React from 'react'; const NewServicesShowcase2025 = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> New Services 2025 </h1> <p className="text - xl text - gray - 600"> Discover our latest innovations and cutting - edge solutions. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Advanced AI Analytics</h3> <p className="text - gray - 600 mb - 4">Next - generation AI - powered analytics for deeper business insights.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Edge Computing</h3> <p className="text - gray - 600 mb - 4">Bring computing power closer to your data sources.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">IoT Solutions</h3> <p className="text - gray - 600 mb - 4">Connect and manage your devices with smart IoT solutions.</p> <span className="text - sm text - blue - 600">Explore</span> </div> </div> </div> </div> )} export default NewServicesShowcase2025;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import { SEO } from '../components/SEO';

export default function NewServicesShowcase2025() {
  return (
    <>
      <SEO 
        title="NewServicesShowcase2025 - Zion Tech Group" 
        description="NewServicesShowcase2025 page for Zion Tech Group" 
        keywords="NewServicesShowcase2025, zion tech group"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              NewServicesShowcase2025
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Welcome to our NewServicesShowcase2025 page
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                NewServicesShowcase2025 Content
              </h2>
              <p className="text-zion-slate-light">
                This is the NewServicesShowcase2025 page content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
