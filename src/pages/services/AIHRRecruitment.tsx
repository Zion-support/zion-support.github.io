  Briefcase, 
  Brain, 
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  FileText,
  Clock,
  Award
} from 'lucide-react';

const AIHRRecruitment = () => {
      icon: Search,
      title: "Intelligent Candidate Sourcing",
      description: "AI-powered talent discovery across multiple platforms and databases"
    },
    {
      icon: Brain,
      title: "Smart Resume Parsing",
      description: "Advanced AI algorithms to extract and analyze candidate information"
    },
    {
      icon: Target,
      title: "Predictive Candidate Matching",
      description: "Machine learning models to find the perfect fit for your roles"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive insights into hiring metrics and process optimization"
      description: "Advanced algorithms that automatically match candidates to job requirements based on skills, experience, and cultural fit."
    },
    {
      icon: Search,
      title: "Intelligent Talent Sourcing",
      description: "Automated candidate discovery across multiple platforms with AI-driven outreach and engagement strategies."
    },
    {
      icon: MessageSquare,
      title: "Smart Interview Automation",
      description: "AI-powered interview scheduling, question generation, and candidate assessment tools."
    },
    {
      icon: FileText,
      title: "Resume Parsing & Analysis",
      description: "Automated resume screening with intelligent extraction of skills, experience, and qualifications."
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair, objective candidate evaluation."
    },
    {
      icon: Zap,
      title: "Predictive Performance Analytics",
      description: "Data-driven insights to predict candidate success and optimize hiring decisions."
    }
  ];

  const useCases = [
    {
      title: "High-Volume Recruitment",
      description: "Handle thousands of applications efficiently with AI-powered screening and ranking.",
      icon: Users
    },
    {
      title: "Technical Hiring",
      description: "Assess technical skills through AI-powered coding challenges and technical interviews.",
      icon: Briefcase
    },
    {
      title: "Cultural Fit Assessment",
      description: "Evaluate candidate alignment with company values and team dynamics.",
      icon: Target
    },
    {
      title: "Employee Retention",
      description: "Predict turnover risk and identify factors that contribute to employee satisfaction.",
      icon: TrendingUp
    }
  ];

      icon: Users,
      title: "Smart Candidate Sourcing",
      description: "AI-powered talent discovery that identifies and attracts top candidates across multiple platforms."
    },
    {
      icon: Search,
      title: "Intelligent Resume Parsing",
      description: "Advanced NLP algorithms that extract key information and match candidates to job requirements."
    },
    {
      icon: Target,
      title: "Predictive Candidate Scoring",
      description: "Machine learning models that predict candidate success and cultural fit based on multiple data points."
    },
    {
      icon: Brain,
      title: "Automated Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple stakeholders and time zones."
    },
    {
      icon: Zap,
      title: "Bias-Free Screening",
      description: "AI algorithms designed to eliminate unconscious bias and ensure fair candidate evaluation."
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR compliance and data protection measures."
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government",
    "Non-profit"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI HR & Recruitment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your hiring process with intelligent AI-powered recruitment solutions. 
              Find the best talent faster, reduce bias, and optimize your HR operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent HR & Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform streamlines every aspect of the hiring process while ensuring quality and fairness
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
      {/* Recruitment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Recruitment Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From job posting to onboarding, our AI streamlines every step of your hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentProcess.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
              </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming talent acquisition across industries and company sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
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
      {/* Benefits Section */}
              Why Choose AI HR & Recruitment?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your hiring process from manual and time-consuming to intelligent and efficient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-teal-500/10">
            Join innovative companies using AI to build better teams and find exceptional talent faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Services</h3>
            <p className="text-gray-300">Discover our complete range of AI and technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services/ai-business-intelligence" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Business Intelligence</h4>
                    <p className="text-gray-300 text-sm">Transform data into actionable insights</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-marketing-automation" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Marketing Automation</h4>
                    <p className="text-gray-300 text-sm">Automate marketing with AI intelligence</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-legal-tech" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">AI Legal Tech</h4>
                    <p className="text-gray-300 text-sm">Streamline legal processes with AI</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRRecruitment;
}
