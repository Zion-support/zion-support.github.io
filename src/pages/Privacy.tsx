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
import React from 'react'; const Privacy = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Privacy Policy </h1> <p className="text-xl text-gray-600"> How we collect,use,and protect your information. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>Information We Collect</h2> <p>We collect information you provide directly to us,such as when you create an account,use our services,or contact us for support.</p> <h2>How We Use Your Information</h2> <p>We use the information we collect to provide,maintain,and improve our services,communicate with you,and ensure the security of our platform.</p> <h2>Information Sharing</h2> <p>We do not sell,trade,or otherwise transfer your personal information to third parties without your consent,except as described in this policy.</p> <h2>Data Security</h2> <p>We implement appropriate security measures to protect your personal information against unauthorized access,alteration,disclosure,or destruction.</p> </div> </div> </div> )}; export default Privacy;

<<<<<<< HEAD
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
export default function Privacy() {
    return (<>
      <SEO title="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="https://ziontechgroup.com/privacy"/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Privacy Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we collect,
              use, and safeguard your information.
            </p>
          </div>
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              We collect personal information you provide when creating an
              account or using our services. This may include your name, email,
              and  other details required to deliver our marketplace
              features.
            </p>
            <p>
              Zion Tech Group uses this data solely to operate and improve our
              platform. We do not sell your personal information to third
              parties.
            </p>
            <p>
              If you have questions about our privacy practices, please contact
              us at
              {" "}
              <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                support@ziontechgroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>)}
=======
import React from 'react'; const Privacy = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Privacy Policy </h1> <p className="text - xl text - gray - 600"> How we collect, use, and protect your information. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Information We Collect</h2> <p > We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p> <h2 > How We Use Your Information</h2> <p > We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.</p> <h2 > Information Sharing</h2> <p > We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p> <h2 > Data Security</h2> <p > We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p> </div> </div> </div> )} export default Privacy;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import SEO from '../components/SEO';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
