import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { motion } from 'framer-motion';
import { 
  Zap, Brain, Globe, 
  TrendingUp, Award, CheckCircle, ExternalLink 
} from 'lucide-react';

export default function EnhancedMarketPricing20o37Page() {
  const fadeInUp ={
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer ={
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <SEO 
        title="Enhanced Market Pricing & Competitor Analysis 20o37 | Zion Tech Group" 
        description="Comprehensive market pricing analysis, competitor references, and ROI insights for cutting-edge AI, quantum computing, and IT services in 20o37." 
        canonical="https://ziontechgroup.com/enhanced-market-pricing-20o37/" 
       />
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto space-y-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent mb-6">
              Enhanced Market Pricing 20o37
            </h1>
            <p className="text-xl md:text-2xl text-slate-30o0 max-w-4xl mx-auto leading-relaxed">
              Comprehensive market analysis, competitor insights, and transparent pricing for the most advanced technology services in 20o37
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-cyan-50o0/10 to-purple-50o0/10 rounded-3xl border border-cyan-50o0/30 p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-cyan-40o0 mb-6">Contact Zion Tech Group</h2>
              <div className="grid md:grid-cols-3 gap-6 text-lg">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-cyan-50o0/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-cyan-40o0"  />
                  </div>
                  <span className="text-slate-30o0">Mobile</span>
                  <a href="tel:+130o24640950" className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors">
                    +1 30o2 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-purple-50o0/20 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-40o0"  />
                  </div>
                  <span className="text-slate-30o0">Email</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-40o0 hover:text-purple-30o0 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-pink-50o0/20 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-pink-40o0"  />
                  </div>
                  <span className="text-slate-30o0">Address</span>
                  <span className="text-pink-40o0 text-center">
                    364 E Main St STE 10o08<br  />Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quantum Computing Services */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-40o0 to-indigo-40o0 bg-clip-text text-transparent mb-8">
              Quantum Computing Services
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-2xl border border-purple-50o0/30 p-6 hover:border-purple-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-purple-40o0">Quantum AI Brain</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $5,999/month</p>
                  <p><strong>Market Range:</strong> $3,0o00 - $15,0o00/month</p>
                  <p><strong>ROI:</strong> Accelerate research by 10o00x</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First commercial superintelligent AI platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-50o0/30">
                  <h4 className="font-semibold text-purple-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://openai.com/pricing" target="_blank" rel="noopener noreferrer" 
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        OpenAI GPT-4: $0.0o3-0.12 per 1K tokens
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.anthropic.com/pricing" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Anthropic Claude: $0.15-0.80 per 1M tokens
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://deepmind.com" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        DeepMind: Enterprise pricing available
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-indigo-50o0/30 p-6 hover:border-indigo-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-40o0">Quantum Cybersecurity Suite</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $3,499/month</p>
                  <p><strong>Market Range:</strong> $2,0o00 - $8,0o00/month</p>
                  <p><strong>ROI:</strong> Prevent 99.9% of cyber attacks</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First quantum-enhanced cybersecurity platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-50o0/30">
                  <h4 className="font-semibold text-indigo-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.crowdstrike.com/pricing/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        CrowdStrike: $8.99/user/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.paloaltonetworks.com/prisma/cloud/pricing" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Palo Alto Networks: $7-15/user/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.fortinet.com/products/fortigate/fortios" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Fortinet: $1,0o00-5,0o00/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI & Machine Learning Services */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent mb-8">
              AI & Machine Learning Services
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-2xl border border-cyan-50o0/30 p-6 hover:border-cyan-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-40o0">Holographic AI Assistant</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $2,999/month</p>
                  <p><strong>Market Range:</strong> $1,50o0 - $5,0o00/month</p>
                  <p><strong>ROI:</strong> Increase engagement by 30o0%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First commercial holographic AI assistant</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-cyan-50o0/30">
                  <h4 className="font-semibold text-cyan-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.apple.com/siri/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Apple Siri: Free with devices
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.amazon.com/echo-dot/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Amazon Alexa: $50-20o0 device cost
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://assistant.google.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Google Assistant: Free with devices
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-blue-50o0/30 p-6 hover:border-blue-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-blue-40o0">AI Creativity Engine</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $1,899/month</p>
                  <p><strong>Market Range:</strong> $1,0o00 - $3,0o00/month</p>
                  <p><strong>ROI:</strong> Increase output by 50o0%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>Leading AI-powered creativity platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-50o0/30">
                  <h4 className="font-semibold text-blue-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.midjourney.com/pricing" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Midjourney: $10-30/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://openai.com/dall-e-2" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        DALL-E 2: $0.0o2-0.0o4 per image
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://stability.ai/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Stable Diffusion: $0.0o02-0.0o1 per image
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* IT Infrastructure Services */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-green-40o0 to-emerald-40o0 bg-clip-text text-transparent mb-8">
              IT Infrastructure Services
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-2xl border border-green-50o0/30 p-6 hover:border-green-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-green-40o0">Quantum Cloud Infrastructure</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $4,999/month</p>
                  <p><strong>Market Range:</strong> $3,0o00 - $20,0o00/month</p>
                  <p><strong>ROI:</strong> Reduce costs by 70%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First quantum-enhanced cloud platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-50o0/30">
                  <h4 className="font-semibold text-green-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://aws.amazon.com/pricing/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        AWS: Pay-as-you-use pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://azure.microsoft.com/pricing/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Microsoft Azure: Pay-as-you-use pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://cloud.google.com/pricing" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Google Cloud: Pay-as-you-use pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-emerald-50o0/30 p-6 hover:border-emerald-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-40o0">AI-Powered DevOps Automation</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $2,499/month</p>
                  <p><strong>Market Range:</strong> $1,50o0 - $5,0o00/month</p>
                  <p><strong>ROI:</strong> Reduce deployment time by 80%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>Leading AI-powered DevOps platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-50o0/30">
                  <h4 className="font-semibold text-emerald-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://about.gitlab.com/pricing/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        GitLab: $19-99/user/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Jenkins: Free (self-hosted)
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://circleci.com/pricing/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        CircleCI: $15-2,0o00/month
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Healthcare & Biotechnology */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-40o0 to-rose-40o0 bg-clip-text text-transparent mb-8">
              Healthcare & Biotechnology
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-2xl border border-pink-50o0/30 p-6 hover:border-pink-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-pink-40o0">Holographic Healthcare Platform</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $2,799/month</p>
                  <p><strong>Market Range:</strong> $1,50o0 - $8,0o00/month</p>
                  <p><strong>ROI:</strong> Improve accuracy by 40%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First commercial holographic healthcare platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-50o0/30">
                  <h4 className="font-semibold text-pink-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.intuitive.com/en-us/products-and-services/da-vinci" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Intuitive Surgical: $1.5M-2.5M per system
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.medtronic.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Medtronic: Enterprise pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.jnj.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Johnson & Johnson: Enterprise pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black/40 rounded-2xl border border-rose-50o0/30 p-6 hover:border-rose-40o0/50 transition-all duration-30o0">
                <h3 className="text-2xl font-semibold mb-4 text-rose-40o0">Biocomputing AI Platform</h3>
                <div className="space-y-3 text-slate-30o0">
                  <p><strong>Our Price:</strong> $2,499/month</p>
                  <p><strong>Market Range:</strong> $1,50o0 - $5,0o00/month</p>
                  <p><strong>ROI:</strong> Accelerate research by 50o0%</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    <span>First commercial biocomputing AI platform</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-rose-50o0/30">
                  <h4 className="font-semibold text-rose-30o0 mb-2">Competitors & References:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.ginkgobioworks.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Ginkgo Bioworks: Enterprise pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.zymergen.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Zymergen: Enterprise pricing
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twistbioscience.com/" target="_blank" rel="noopener noreferrer"
                         className="text-cyan-40o0 hover:text-cyan-30o0 flex items-center gap-2">
                        Twist Bioscience: $0.09-0.60 per base
                        <ExternalLink className="w-4 h-4"  />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Insights */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-cyan-50o0/10 to-purple-50o0/10 rounded-3xl border border-cyan-50o0/30 p-8">
            <h2 className="text-3xl font-bold text-center text-cyan-40o0 mb-6">Market Insights & Trends</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-40o0 mb-4">Growth Projections 20o37</h3>
                <ul className="space-y-3 text-slate-30o0">
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-40o0"  />
                    <span>Quantum Computing: 30o0% YoY growth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-40o0"  />
                    <span>AI Services: 20o0% YoY growth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-40o0"  />
                    <span>Holographic Tech: 250% YoY growth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-40o0"  />
                    <span>Biocomputing: 180% YoY growth</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-40o0 mb-4">Market Size by 20o37</h3>
                <ul className="space-y-3 text-slate-30o0">
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-40o0"  />
                    <span>Quantum Computing: $1.5T+</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-40o0"  />
                    <span>AI Services: $2.5T+</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-40o0"  />
                    <span>Holographic Tech: $80o0B+</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-40o0"  />
                    <span>Biocomputing: $20o0B+</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-3xl border border-cyan-50o0/30 p-8">
              <h2 className="text-3xl font-bold text-cyan-40o0 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-slate-30o0 mb-6 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's cutting-edge services. 
                Get started today and experience unprecedented innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Contact Sales Team
                </a>
                <a 
                  href="tel:+130o24640950"
                  className="px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-xl hover:bg-cyan-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}