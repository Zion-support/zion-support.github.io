import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Database,
  Eye,
  Lightbulb,
  Users,
  Shield,
  Clock,
  Star,
  ArrowUpRight
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AIBusinessIntelligence: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns and insights in your data"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live monitoring and visualization of key business metrics with instant updates"
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using historical data and AI algorithms"
    },
    {
      icon: Target,
      title: "Custom Insights",
      description: "Tailored analytics solutions designed specifically for your business needs"
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through data-driven decision making",
    "Reduce operational costs by 20-30% with optimized processes",
    "Improve customer satisfaction by 35% with personalized insights",
    "Accelerate time-to-market by 40% with predictive analytics",
    "Enhance risk management with real-time monitoring",
    "Boost employee productivity with automated reporting"
  ];

  const useCases = [
    {
      title: "Sales & Marketing",
      description: "Predict customer behavior, optimize campaigns, and increase conversion rates",
      icon: TrendingUp
    },
    {
      title: "Operations & Supply Chain",
      description: "Optimize inventory levels, predict demand, and streamline logistics",
      icon: Database
    },
    {
      title: "Financial Planning",
      description: "Forecast cash flow, identify cost-saving opportunities, and manage risk",
      icon: Target
    },
    {
      title: "Customer Service",
      description: "Personalize customer experiences and predict support needs",
      icon: Users
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Basic AI analytics dashboard",
        "Up to 5 data sources",
        "Standard reporting",
        "Email support",
        "Monthly insights report"
      ],
      popular: false
    },
    {
      plan: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Advanced AI algorithms",
        "Up to 20 data sources",
        "Custom dashboards",
        "Predictive modeling",
        "Priority support",
        "Weekly insights report",
        "API access"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "Full-scale AI intelligence platform for large organizations",
      features: [
        "Custom AI models",
        "Unlimited data sources",
        "Real-time analytics",
        "Advanced predictions",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group's AI Business Intelligence platform transformed how we make decisions. We've seen a 30% increase in operational efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Inc.",
      content: "The predictive analytics capabilities have revolutionized our supply chain management. We've reduced costs by 25% while improving delivery times.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Retail Co.",
      content: "Our marketing campaigns are now 40% more effective thanks to the AI-powered customer insights. The ROI has been incredible.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEOHead 
        config={{
          title: "AI Business Intelligence - Zion Tech Group",
          description: "Transform your business with AI-powered analytics, predictive modeling, and real-time insights. Drive growth with data-driven decision making.",
          keywords: "AI business intelligence, predictive analytics, business analytics, machine learning, data insights, Zion Tech Group",
          type: "website"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI Business Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your data into actionable insights with cutting-edge artificial intelligence. 
            Make smarter decisions, predict future trends, and drive unprecedented business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
              to deliver insights that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered business intelligence can transform your organization and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence solutions are designed to address real business challenges 
              across various industries and departments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-900 rounded-2xl p-8 border-2 ${
                plan.popular ? 'border-cyan-500' : 'border-gray-700'
              } hover:border-cyan-500 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transform hover:scale-105'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from business leaders who have transformed their operations with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                  <div className="text-cyan-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their decision-making 
            with AI-powered business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-cyan-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;