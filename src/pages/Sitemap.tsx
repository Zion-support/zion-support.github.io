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
import React from 'react'; const Sitemap = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Sitemap </h1> <p className="text-xl text-gray-600"> Find all our pages and resources in one place. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Pages</h3> <ul className="space-y-2"> <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li> <li><a href="/about" className="text-blue-600 hover:text-blue-800">About</a></li> <li><a href="/services" className="text-blue-600 hover:text-blue-800">Services</a></li> <li><a href="/solutions" className="text-blue-600 hover:text-blue-800">Solutions</a></li> <li><a href="/contact" className="text-blue-600 hover:text-blue-800">Contact</a></li> </ul> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3> <ul className="space-y-2"> <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li> <li><a href="/news" className="text-blue-600 hover:text-blue-800">News</a></li> <li><a href="/help" className="text-blue-600 hover:text-blue-800">Help</a></li> <li><a href="/support" className="text-blue-600 hover:text-blue-800">Support</a></li> </ul> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3> <ul className="space-y-2"> <li><a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></li> <li><a href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</a></li> <li><a href="/cookies" className="text-blue-600 hover:text-blue-800">Cookie Policy</a></li> </ul> </div> </div> </div> </div> )}; export default Sitemap;

