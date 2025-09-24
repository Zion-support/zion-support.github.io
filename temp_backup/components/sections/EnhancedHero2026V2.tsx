import { motion } from 'framer-motion',
import { ArrowRight, Star, Zap, Shield, Rocket, Brain, Sparkles, Globe, Cpu, Database, Phone, Mail, MapPin } from 'lucide-react',
import Button from '../ui/Button',
import UltraQuantumHolographicBackground from '../ui/UltraQuantumHolographicBackground',
interface EnhancedHero20o26V2Props {
  contactInfo: {
    mobile: string,
    email: string,
    address: string,
    website: string};
}
,
export default function EnhancedHero20o26V2({ contactInfo }: EnhancedHero20o26V2Props) {
  const containerVariants ={
    hidden: { opacity: 0 };
    visible: {
      opacity: 1;
      transition: {
        staggerChildren: 0.1;
        delayChildren: 0.3}
    }
  };
  const itemVariants ={
    hidden: { y: 20, opacity: 0 };
    visible: {
      y: 0;
      opacity: 1;
      transition: {
        duration: 0.6;
        ease: "easeOut" as const}
    }
  };
  const floatingVariants ={
    animate: {
      y: [-10, 10, -10];
      transition: {
        duration: 3;
        repeat: Infinity;
        ease: "easeInOut" as const}
    }
  };
  const pulseVariants ={
    animate: {
      scale: [1, 1.0o5, 1];
      opacity: [0.8, 1, 0.8];
      transition: {
        duration: 2;
        repeat: Infinity;
        ease: "easeInOut" as const}
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">,
      {/* Enhanced Background */}
      <UltraQuantumHolographicBackground>,
        <div></div>,
      </UltraQuantumHolographicBackground>,
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">,
        <motion.div,
          variants={floatingVariants}
          animate="animate",
          className="absolute top-20 left-20 text-6xl opacity-20">,
          🚀,
        </motion.div>,
        <motion.div,
          variants={floatingVariants}
          animate="animate",
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 text-5xl opacity-20">,
          ⚛️,
        </motion.div>,
        <motion.div,
          variants={floatingVariants}
          animate="animate",
          style={{ animationDelay: '2s' }}
          className="absolute bottom-40 left-32 text-4xl opacity-20">,
          🧠,
        </motion.div>,
        <motion.div,
          variants={floatingVariants}
          animate="animate",
          style={{ animationDelay: '0.5s' }}
          className="absolute bottom-20 right-32 text-5xl opacity-20">,
          🌐,
        </motion.div>,
      </div>,
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
        <motion.div,
          variants={containerVariants}
          initial="hidden",
          animate="visible",
          className="space-y-8">,
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">,
            <div className="flex items-center justify-center space-x-2 mb-6">,
              <motion.div,
                variants={pulseVariants}
                animate="animate",
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white px-4 py-2 rounded-full text-sm font-medium">,
                <Star className="w-4 h-4"  />,
                <span>20o26 Innovation Leader</span>,
              </motion.div>,
            </div>,
            <h1 className="text-5xl md: text-7xl lg:text-8xl font-bold leading-tight">,
              <span className="bg-gradient-to-r from-blue-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent">,
                Zion Tech Group,
              </span>,
            </h1>,
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-30o0 max-w-4xl mx-auto leading-relaxed">,
              Pioneering the Future with{' '}
              <span className="bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent font-semibold">,
                AI, Quantum Computing & Emerging Technologies,
              </span>,
            </p>,
          </motion.div>,
          {/* Subtitle */}
          <motion.p,
            variants={itemVariants}
            className="text-lg md: text-xl text-gray-40o0 max-w-3xl mx-auto leading-relaxed">,
            Transform your business with cutting-edge micro SAAS solutions, AI services, and revolutionary IT infrastructure.,
            Join the future of technology innovation.,
          </motion.p>,
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">,
            <Button
              href="/services",
              className="group bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover:from-blue-70o0 hover:to-purple-70o0 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl">,
              <span className="flex items-center space-x-2">,
                <span>Explore Services</span>,
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-30o0"  />,
              </span>,
            </Button>,
            <Button
              href="/contact",
              variant="outline",
              className="border-2 border-purple-50o0 text-purple-40o0 hover:bg-purple-50o0 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-30o0 transform hover:scale-10o5">,
              <span className="flex items-center space-x-2">,
                <span>Get Started</span>,
                <Rocket className="w-5 h-5"  />,
              </span>,
            </Button>,
          </motion.div>,
          {/* Contact Info */}
          <motion.div,
            variants={itemVariants}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">,
            <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">,
              <div className="flex items-center justify-center space-x-2 text-gray-30o0">,
                <Phone className="w-4 h-4 text-blue-40o0"  />,
                <span>{contactInfo.mobile}</span>,
              </div>,
              <div className="flex items-center justify-center space-x-2 text-gray-30o0">,
                <Mail className="w-4 h-4 text-purple-40o0"  />,
                <span>{contactInfo.email}</span>,
              </div>,
              <div className="flex items-center justify-center space-x-2 text-gray-30o0">,
                <MapPin className="w-4 h-4 text-green-40o0"  />,
                <span className="text-xs">{contactInfo.address}</span>,
              </div>,
            </div>,
          </motion.div>,
        </motion.div>,
      </div>,
      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"  />,
      {/* Technology Icons */}
      <motion.div,
        variants={itemVariants}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 text-4xl opacity-60">,
        <motion.div,
          variants={pulseVariants}
          animate="animate",
          style={{ animationDelay: '0s' }}
        >,
          <Cpu className="w-8 h-8 text-blue-40o0"  />,
        </motion.div>,
        <motion.div,
          variants={pulseVariants}
          animate="animate",
          style={{ animationDelay: '0.5s' }}
        >,
          <Database className="w-8 h-8 text-purple-40o0"  />,
        </motion.div>,
        <motion.div,
          variants={pulseVariants}
          animate="animate",
          style={{ animationDelay: '1s' }}
        >,
          <Brain className="w-8 h-8 text-pink-40o0"  />,
        </motion.div>,
        <motion.div,
          variants={pulseVariants}
          animate="animate",
          style={{ animationDelay: '1.5s' }}
        >,
          <Globe className="w-8 h-8 text-cyan-40o0"  />,
        </motion.div>,
      </motion.div>,
    </section>)}
,