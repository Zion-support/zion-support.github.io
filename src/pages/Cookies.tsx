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
import React from 'react'; const Cookies = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Cookie Policy </h1> <p className="text-xl text-gray-600"> How we use cookies and similar technologies. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>What Are Cookies</h2> <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p> <h2>How We Use Cookies</h2> <p>We use cookies to improve your experience on our website,analyze site traffic,and personalize content.</p> <h2>Types of Cookies</h2> <p>We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser,while persistent cookies remain on your device for a set period.</p> <h2>Managing Cookies</h2> <p>You can control and manage cookies through your browser settings. However,disabling cookies may affect the functionality of our website.</p> </div> </div> </div> )}; export default Cookies;

<<<<<<< HEAD
import React from 'react'; const Cookies = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Cookie Policy </h1> <p className="text - xl text - gray - 600"> How we use cookies and similar technologies. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > What Are Cookies</h2> <p > Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p> <h2 > How We Use Cookies</h2> <p > We use cookies to improve your experience on our website, analyze site traffic, and personalize content.</p> <h2 > Types of Cookies</h2> <p > We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period.</p> <h2 > Managing Cookies</h2> <p > You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p> </div> </div> </div> )} export default Cookies;
import React from 'react'; const Cookies = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Cookie Policy </h1> <p className="text-xl text-gray-600"> How we use cookies and similar technologies. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>What Are Cookies</h2> <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p> <h2>How We Use Cookies</h2> <p>We use cookies to improve your experience on our website,analyze site traffic,and personalize content.</p> <h2>Types of Cookies</h2> <p>We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser,while persistent cookies remain on your device for a set period.</p> <h2>Managing Cookies</h2> <p>You can control and manage cookies through your browser settings. However,disabling cookies may affect the functionality of our website.</p> </div> </div> </div> )}; export default Cookies;
import React from 'react'; const Cookies = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Cookie Policy </h1> <p className="text - xl text - gray - 600"> How we use cookies and similar technologies. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > What Are Cookies</h2> <p > Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p> <h2 > How We Use Cookies</h2> <p > We use cookies to improve your experience on our website, analyze site traffic, and personalize content.</p> <h2 > Types of Cookies</h2> <p > We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period.</p> <h2 > Managing Cookies</h2> <p > You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p> </div> </div> </div> )} export default Cookies;
=======
import React from 'react'; const Cookies = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Cookie Policy </h1> <p className="text - xl text - gray - 600"> How we use cookies and similar technologies. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > What Are Cookies</h2> <p > Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p> <h2 > How We Use Cookies</h2> <p > We use cookies to improve your experience on our website, analyze site traffic, and personalize content.</p> <h2 > Types of Cookies</h2> <p > We use both session cookies and persistent cookies. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period.</p> <h2 > Managing Cookies</h2> <p > You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p> </div> </div> </div> )} export default Cookies;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React from 'react';
import { SEO } from '../components/SEO';

export default function Cookies() {
  return (
    <>
      <SEO 
        title="Cookies - Zion Tech Group" 
        description="Cookies page for Zion Tech Group" 
        keywords="Cookies, zion tech group"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Cookies
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Welcome to our Cookies page
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                Cookies Content
              </h2>
              <p className="text-zion-slate-light">
                This is the Cookies page content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
