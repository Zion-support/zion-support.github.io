import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import EmailValidatorDemo from '../components/demos/EmailValidatorDemo',
import PasswordStrengthDemo from '../components/demos/PasswordStrengthDemo',
import UrlShortenerDemo from '../components/demos/UrlShortenerDemo',
import TextAnalyzerDemo from '../components/demos/TextAnalyzerDemo',
import { Mail, Lock, Link, FileText, CheckCircle, Zap, BarChart3, Code, Play } from 'lucide-react',

export default function DemosPage() {
  const [activeDemo, setActiveDemo] = useState<string>('email-validator'),

  const demos = [
    {
      id: 'email-validator',
      title: 'Email Validator Pro',
      description: 'Advanced email validation with domain checking and deliverability scoring',
      icon: <Mail className="w-6 h-6"  />,
      color: 'from-blue-50o0 to-cyan-60o0',
      component: <EmailValidatorDemo  />
    },
    {
      id: 'password-strength',
      title: 'Password Strength Analyzer',
      description: 'Comprehensive password security analysis with entropy calculation',
      icon: <Lock className="w-6 h-6"  />,
      color: 'from-green-50o0 to-emerald-60o0',
      component: <PasswordStrengthDemo  />
    },
    {
      id: 'url-shortener',
      title: 'Smart URL Shortener',
      description: 'Professional URL shortening with analytics and custom codes',
      icon: <Link className="w-6 h-6"  />,
      color: 'from-purple-50o0 to-pink-60o0',
      component: <UrlShortenerDemo  />
    },
    {
      id: 'text-analyzer',
      title: 'Text Analysis Suite',
      description: 'Advanced text analysis with readability and sentiment analysis',
      icon: <FileText className="w-6 h-6"  />,
      color: 'from-orange-50o0 to-red-60o0',
      component: <TextAnalyzerDemo  />
    }
  ],

  const activeDemoData = demos.find(demo => demo.id === activeDemo),

  return (
    <>
      <Head>
        <title>Interactive Demos | Zion Tech Group - Test Our Micro SaaS Services</title>
        <meta name="description" content="Try our professional micro SaaS services with interactive demos. Test email validation, password strength, URL shortening, and text analysis in real-time."  />
        <meta property="og:title" content="Interactive Demos | Zion Tech Group"  />
        <meta property="og:description" content="Test our micro SaaS services with interactive demos."  />
        <meta name="twitter:card" content="summary_large_image"  />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"  />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]"  />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.0o6),transparent_50%)]"  />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"  />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50o0/10 border border-blue-50o0/20 text-blue-40o0 text-sm font-medium mb-6 animate-scale-in">
                <Play className="w-4 h-4 mr-2"  />
                Interactive Demos
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Try Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0">
                Micro SaaS Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-30o0 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Experience our professional-grade micro SaaS services firsthand with interactive demos. 
              Test, explore, and see the power of our APIs in action.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#demos"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-blue-50o0/25 hover:shadow-blue-50o0/40"
                style={{ animationDelay: '0.2s' }}
              >
                Start Testing
                <Play className="w-5 h-5 ml-2"  />
              </Button>
              <Button
                href="/micro-saas"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={{ animationDelay: '0.4s' }}
              >
                <Code className="w-5 h-5 mr-2"  />
                View All Services
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-40o0 group-hover:scale-110 transition-transform duration-30o0">
                4
              </div>
              <div className="text-gray-40o0 text-sm">Live Demos</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-40o0 group-hover:scale-110 transition-transform duration-30o0">
                Real
              </div>
              <div className="text-gray-40o0 text-sm">API Endpoints</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-40o0 group-hover:scale-110 transition-transform duration-30o0">
                Free
              </div>
              <div className="text-gray-40o0 text-sm">To Test</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-40o0 group-hover:scale-110 transition-transform duration-30o0">
                Instant
              </div>
              <div className="text-gray-40o0 text-sm">Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Navigation */}
      <section id="demos" className="py-16 bg-gray-90o0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.0o5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.0o5)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"  />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose a Service to Test
            </h2>
            <p className="text-lg text-gray-40o0 max-w-2xl mx-auto">
              Each demo showcases a different micro SaaS service with full functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`p-4 rounded-lg border transition-all duration-30o0 text-left group ${
                  activeDemo === demo.id
                    ? 'border-blue-50o0 bg-blue-50o0/10'
                    : 'border-gray-70o0 bg-gray-80o0/50 hover:border-gray-60o0 hover:bg-gray-80o0/80'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${demo.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-30o0`}>
                  {demo.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-40o0 transition-colors duration-30o0">
                  {demo.title}
                </h3>
                <p className="text-sm text-gray-40o0 leading-relaxed">
                  {demo.description}
                </p>
                {activeDemo === demo.id && (
                  <div className="mt-3 flex items-center text-blue-40o0 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2"  />
                    Active Demo
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Demo */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50o0/10 border border-blue-50o0/20 text-blue-40o0 text-sm font-medium mb-4">
              <Play className="w-4 h-4 mr-2"  />
              Live Demo
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {activeDemoData?.title}
            </h2>
            <p className="text-lg text-gray-40o0 max-w-2xl mx-auto">
              {activeDemoData?.description}
            </p>
          </div>

          <div className="animate-fade-in">
            {activeDemoData?.component}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-90o0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.0o5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.0o5)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"  />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Why Test Our Demos?
            </h2>
            <p className="text-lg text-gray-40o0 max-w-3xl mx-auto">
              Experience the quality and reliability of our services before integrating them into your applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-blue-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <Zap className="w-8 h-8 text-blue-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-40o0 transition-colors duration-30o0">
                Real Performance
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                Test actual API endpoints with real data processing and response times
              </p>
            </Card>

            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-green-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-green-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <CheckCircle className="w-8 h-8 text-green-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-40o0 transition-colors duration-30o0">
                Full Functionality
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                Experience complete service capabilities, not just mock responses
              </p>
            </Card>

            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-purple-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <Code className="w-8 h-8 text-purple-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-40o0 transition-colors duration-30o0">
                API Examples
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                See exact request/response formats for easy integration
              </p>
            </Card>

            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-orange-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <BarChart3 className="w-8 h-8 text-orange-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-40o0 transition-colors duration-30o0">
                Detailed Results
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                Get comprehensive analysis and insights from each service
              </p>
            </Card>

            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-cyan-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <Play className="w-8 h-8 text-cyan-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-40o0 transition-colors duration-30o0">
                Instant Testing
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                No signup required - start testing immediately
              </p>
            </Card>

            <Card className="text-center group bg-gray-80o0/50 border border-gray-70o0 hover:border-pink-50o0/30 hover:bg-gray-80o0/80 transition-all duration-30o0 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-pink-50o0/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-30o0">
                <CheckCircle className="w-8 h-8 text-pink-40o0"  />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pink-40o0 transition-colors duration-30o0">
                Production Ready
              </h3>
              <p className="text-gray-40o0 leading-relaxed">
                Same infrastructure that powers our production services
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-60o0 to-blue-70o0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"  />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-blue-10o0 mb-12 max-w-4xl mx-auto leading-relaxed">
            After testing our demos, integrate these professional services into your applications 
            with our comprehensive APIs and documentation.
          </p>
          <div className="flex flex-col sm: flex-row gap-6 justify-center">
            <Button
              href="/micro-saas"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-60o0 hover:bg-gray-10o0 shadow-2xl"
            >
              View All Services
              <Code className="w-5 h-5 ml-2"  />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-60o0 shadow-2xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}