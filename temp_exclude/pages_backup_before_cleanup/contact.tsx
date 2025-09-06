
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import type { NextPage } from \'next\'; import Head from \'next/head\'; import Navigation from \'../components/Navigation\'; import Footer from \'../components/Footer\'; import { Mail,Phone,MapPin } from \'lucide-react\'; const \"Contact\": NextPage = () => {; return ( <> <Head> <title>Contact Us - Zion Tech Group></div> <meta name=\"description\" content=\"Get in touch with Zion Tech Group for your technology needs. We\'re here to help transform your business.\" /></div> <Navigation /> ; <main className=\"min-h-screen bg-gray-900 pt-16\"> <div className=\"container mx-auto px-4 py-16\"> <div className=\"max-w-6xl mx-auto\"> <div className=\"text-center mb-16\"> <h1 className=\"text-5xl font-bold text-white mb-6\"> Contact <span className=\"bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent\">Us></div>