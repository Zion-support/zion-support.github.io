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
import React from 'react'; const Terms = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Terms of Service </h1> <p className="text-xl text-gray-600"> Terms and conditions for using our services. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>Acceptance of Terms</h2> <p>By accessing and using our services,you accept and agree to be bound by the terms and provision of this agreement.</p> <h2>Use License</h2> <p>Permission is granted to temporarily download one copy of the materials on our website for personal,non-commercial transitory viewing only.</p> <h2>Disclaimer</h2> <p>The materials on our website are provided on an 'as is' basis. We make no warranties,expressed or implied,and hereby disclaim and negate all other warranties.</p> <h2>Limitations</h2> <p>In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )}; export default Terms;

<<<<<<< HEAD
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";
export default function Terms() {
    return (<>
      <SEO title="Terms of Service" description="The terms and conditions for using the Zion platform." canonical="https://ziontechgroup.com/terms"/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
      <Footer />
    </>)}
=======
import React from 'react'; const Terms = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Terms of Service </h1> <p className="text - xl text - gray - 600"> Terms and conditions for using our services. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Acceptance of Terms</h2> <p > By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p> <h2 > Use License</h2> <p > Permission is granted to temporarily download one copy of the materials on our website for personal, non - commercial transitory viewing only.</p> <h2 > Disclaimer</h2> <p > The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p> <h2 > Limitations</h2> <p > In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p> </div> </div> </div> )} export default Terms;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import SEO from '../components/SEO';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
