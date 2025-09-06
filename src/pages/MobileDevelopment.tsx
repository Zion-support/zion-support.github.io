import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const MobileDevelopment: React.FC = () => {
<<<<<<< HEAD
  const services = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and SwiftUI',
      features: [
        'Swift & SwiftUI development',
        'Core Data integration',
        'Push notifications',
        'App Store optimization',
        'iOS 17+ compatibility',
      ],
      price: '$5,000 - $50,000',
      duration: '4-16 weeks',
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications built with Kotlin and Jetpack Compose',
      features: [
        'Kotlin & Jetpack Compose',
        'Room database',
        'Firebase integration',
        'Google Play optimization',
        'Material Design 3',
      ],
      price: '$4,500 - $45,000',
      duration: '4-14 weeks',
    },
    {
      title: 'React Native Development',
      description: 'Cross-platform mobile applications with React Native',
      features: [
        'Cross-platform development',
        'Native module integration',
        'State management',
        'Performance optimization',
        'Code sharing between platforms',
      ],
      price: '$6,000 - $60,000',
      duration: '6-20 weeks',
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful cross-platform apps with Flutter and Dart',
      features: [
        'Single codebase for iOS & Android',
        'Custom UI components',
        'State management (Bloc/Riverpod)',
        'Platform channels',
        'Performance optimization',
      ],
      price: '$5,500 - $55,000',
      duration: '5-18 weeks',
    },
  ];

  const platforms = [
    'iOS', 'Android', 'React Native', 'Flutter', 'Xamarin',
    'Ionic', 'Cordova', 'Progressive Web Apps', 'Apple Watch', 'Android Wear',
  ];

  const features = [
    {
      title: 'User Experience',
      description: 'Intuitive and engaging user interfaces',
      icon: '🎨',
    },
    {
      title: 'Performance',
      description: 'Fast and responsive applications',
      icon: '⚡',
    },
    {
      title: 'Security',
      description: 'Secure data handling and authentication',
      icon: '🔒',
    },
    {
      title: 'Scalability',
      description: 'Apps that grow with your business',
      icon: '📈',
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support and updates',
      icon: '🔧',
    },
    {
      title: 'Analytics',
      description: 'User behavior tracking and insights',
      icon: '📊',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Mobile Development Services</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            Create stunning mobile applications that engage users and drive business growth.
            From native iOS and Android to cross-platform solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Get App Consultation
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </Link>
=======
  return (
    <>
      <SEO title="Mobile Development" description="Mobile Development page" url="/services/mobile-development" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Mobile Development</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MobileDevelopment;
