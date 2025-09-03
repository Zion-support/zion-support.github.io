<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import { ; TrendingUp,; Target,; Users,; BarChart3,; MessageSquare,; Phone,; Mail,; MapPin,; CheckCircle,; Star,; Zap,; Shield,; Brain,; Clock,; DollarSign,; ArrowRight,; PieChart,; Calculator,; PiggyBank,; CreditCard,; LineChart,;  } from 'lucide-react'; import { SEO } from '@/components/SEO'; ; const AIFinancialPlanningAssistant = () => {; const features = [; {; icon: Brain,; title: 'AI-Powered Investment Analysis',; description:; 'Advanced algorithms analyze market trends, risk factors, and portfolio performance to provide personalized investment recommendations.',; benefits: [; 'Increase portfolio returns by 25%',; 'Reduce investment risk',; 'Optimize asset allocation',; ],; },; {; icon: Calculator,; title: 'Intelligent Budget Planning',; description:; 'AI-driven budget optimization that learns from spending patterns and automatically adjusts financial plans for maximum efficiency.',; benefits: [; 'Save 20% on monthly expenses',; 'Smart spending insights',; 'Automated budget adjustments',; ],; },; {; icon: PieChart,; title: 'Portfolio Risk Management',; description:; 'Real-time risk assessment and diversification strategies to protect investments during market volatility.',; benefits: [; 'Minimize portfolio volatility',; 'Proactive risk mitigation',; 'Better diversification',; ],; },; {; icon: LineChart,; title: 'Predictive Financial Modeling',; description:; 'Machine learning models forecast future financial scenarios, helping users make informed long-term financial decisions.',; benefits: [; 'Long-term financial planning',; 'Scenario analysis',; 'Goal achievement tracking',; ],; },; ]; ; const integrations = [; { name: 'Mint', description: 'Personal finance and budgeting integration' },; { name: 'YNAB', description: 'You Need A Budget synchronization' },; {; name: 'Personal Capital',; description: 'Investment tracking and analysis',; },; { name: 'Robinhood', description: 'Trading platform integration' },; { name: 'Fidelity', description: 'Investment account management' },; { name: 'Chase', description: 'Banking and credit card integration' },; ]; ; const pricingTiers = [; {; name: 'Personal',; price: 149,; period: 'month',; description: 'Perfect for individual financial planning',; features: [; 'Personal budget optimization',; 'Basic investment analysis',; 'Portfolio tracking',; 'Financial goal setting',; 'Mobile app access',; 'Email support',; 'Basic reporting',; ],; popular: false,; },; {; name: 'Professional',; price: 299,; period: 'month',; description: 'Ideal for financial advisors and professionals',; features: [; 'Advanced AI features',; 'Portfolio risk management',; 'Predictive modeling',; 'Client management tools',; 'Full integrations',; 'Priority support',; 'Custom dashboards',; 'Advanced analytics',; ],; popular: true,; },; {; name: 'Enterprise',; price: 799,; period: 'month',; description: 'For financial institutions and large firms',; features: [; 'Unlimited users',; 'Custom AI models',; 'Advanced risk analytics',; 'API access',; 'White-label options',; 'Dedicated account manager',; 'Custom integrations',; 'SLA guarantees',; ],; popular: false,; },; ]; ; const testimonials = [; {; name: 'Amanda Rodriguez',; role: 'Financial Advisor',; company: 'Wealth Management Partners',; content:; "AI Financial Planning Assistant has transformed our client services.We've increased portfolio returns by 25% and improved client satisfaction significantly.",; rating: 5,; },; {; name: 'Michael Thompson',; role: 'Investment Manager',; company: 'Capital Growth Strategies',; content:; 'The predictive modeling and risk management features have given us a competitive edge.Our clients appreciate the data-driven approach.',; rating: 5,; },; {; name: 'Sarah Chen',; role: 'Personal Finance Coach',; company: 'Financial Freedom Academy',;" content:";" "The AI-powered budget optimization helps my clients save money automatically.It's like having a personal financial advisor 24/7.",; rating: 5,; },; ]; ;" return (";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;" <SEO";" title="AI Financial Planning Assistant — Zion Tech Group | Intelligent Financial Planning";" description="Transform your financial planning with AI-powered investment analysis, budget optimization, risk management, and predictive modeling.Increase portfolio returns by 25%.";" keywords="AI financial planning, investment analysis, budget optimization, portfolio management, risk management";" canonical="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIFinancialPlanningAssistant = () => {
  return (
    <>
      <Head>
        <title>Financial Planning Assistant - AI Services</title>
        <meta name="description" content="Professional Financial Planning Assistant services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Financial Planning Assistant
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Financial Planning Assistant services powered by artificial intelligence
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default AIFinancialPlanningAssistant
>>>>>>> main
