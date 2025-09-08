  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Mail,
  BarChart3, 
  Mail, 
  MessageSquare,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';

export default function AIMarketingAutomation() {
      description: "Intelligent algorithms that automatically optimize marketing campaigns for maximum ROI and engagement.",
      benefits: ["Real-time performance analysis", "Automated A/B testing", "Predictive analytics"]
    },
    {
      icon: Target,
      title: "Intelligent Audience Targeting",
      description: "AI-powered segmentation and targeting for maximum campaign effectiveness",
      benefits: [
        "Behavioral pattern analysis",
        "Predictive customer modeling",
        "Real-time audience optimization",
        "Cross-channel targeting"
      ]
      description: "AI-generated personalized content for each customer segment",
      benefits: [
        "Dynamic content creation",
        "Personalized messaging",
        "Multi-language support",
        "Brand voice consistency"
      ]
    },
    {
      description: "Built-in compliance features and enterprise-grade security"
    "Increase conversion rates by 40-60%",
    "Reduce marketing costs by 30-50%",
    "Improve customer lifetime value",
    "24/7 automated customer engagement",
    "Personalized customer experiences at scale",
    "Data-driven marketing decisions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Marketing Automation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Automate your marketing with AI intelligence that personalizes customer experiences and drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/20 transition-all duration-300">
      title: "E-commerce Marketing",
      description: "Personalized product recommendations and dynamic pricing optimization"
    },
    {
      title: "B2B Lead Generation",
      description: "Intelligent lead scoring and nurturing campaigns"
    },
    {
      title: "Content Marketing",
      description: "AI-generated content and automated content distribution"
    },
    {
      title: "Social Media Marketing",
      description: "Automated social media management and engagement optimization"
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing
            </div>
            </div>
      {/* Features Section */}
      {/* Key Benefits */}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing That Works Smarter
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform delivers unprecedented results through intelligent optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Marketing Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform automates complex marketing tasks while delivering personalized experiences
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
              </motion.div>
      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
              Discover how AI marketing automation is revolutionizing customer engagement across industries
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      {/* Benefits Section */}
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI marketing automation platform adapts to your specific needs and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already leveraging AI to automate and optimize their marketing campaigns.
            </div>
          </motion.div>
}
};

export default AIMarketingAutomation;
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their marketing 
              with AI-powered automation. Start your journey today.
export default AIMarketingAutomation;
