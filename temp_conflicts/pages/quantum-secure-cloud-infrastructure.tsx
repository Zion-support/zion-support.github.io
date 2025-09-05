import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';

const QuantumSecureCloudInfrastructure: React.FC = () => {
  const features = [
    &quot;Quantum-resistant encryption protocols&quot;,
    &quot;Post-quantum cryptography implementation&quot;,
    &quot;Quantum key distribution (QKD)&quot;,
    &quot;Quantum-secure authentication systems&quot;,
    &quot;Quantum-resistant digital signatures&quot;,
    &quot;Quantum-safe communication channels&quot;,
    &quot;Quantum-resistant hash functions&quot;,
    &quot;Quantum-secure access controls&quot;,
    &quot;Quantum-resistant certificate management&quot;,
    &quot;Quantum-safe data transmission&quot;
  ];

  const benefits = [
    &quot;Future-proof security against quantum attacks&quot;,
    &quot;Unbreakable encryption standards&quot;,
    &quot;Compliance with quantum security regulations&quot;,
    &quot;Enhanced data protection&quot;,
    &quot;Competitive security advantage&quot;
  ];

  const pricing = {
    starter: &quot;$1,499/month&quot;,
    professional: &quot;$2,999/month&quot;,
    enterprise: &quot;Custom pricing&quot;
  };

  return (
    <div className=&quot;min-h-screen bg-black text-white&quot;>
      <SEO 
        title=&quot;Quantum-Secure Cloud Infrastructure 2045 | Zion Tech Group&quot;
        description=&quot;Future-proof cloud infrastructure with quantum-resistant encryption and post-quantum cryptography for ultimate security.&quot;
        keywords={[&quot;quantum-secure cloud&quot;, &quot;post-quantum cryptography&quot;, &quot;quantum-resistant encryption&quot;, &quot;cloud security&quot;, &quot;quantum key distribution&quot;]}
      />
      
      {/* Hero Section */}
      <section className=&quot;relative py-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]&quot;></div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center&quot;
          >
            <div className=&quot;flex justify-center mb-6&quot;>
              <div className=&quot;w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center&quot;>
                <Cloud className=&quot;w-10 h-10 text-white&quot; />
              </div>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent&quot;>
              Quantum-Secure Cloud Infrastructure 2045
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Future-proof your cloud infrastructure with quantum-resistant encryption, post-quantum cryptography, 
              and quantum key distribution for ultimate security against emerging quantum threats.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl shadow-emerald-500/25&quot;
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;px-8 py-4 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300&quot;
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gray-900/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Quantum-Secure Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Advanced security features designed to protect against current and future quantum computing threats.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;bg-gray-800/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300&quot;
              >
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4&quot;>
                  <Check className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold mb-2&quot;>{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Why Choose Quantum-Secure Cloud?
            </h2>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Star className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold mb-2&quot;>{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className=&quot;py-20 bg-gray-900/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Pricing Plans
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Choose the perfect plan for your quantum-secure cloud infrastructure needs.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {Object.entries(pricing).map(([plan, price], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800/50 border rounded-xl p-8 ${
                  plan === 'professional' 
                    ? 'border-emerald-500/50 bg-emerald-900/20' 
                    : 'border-gray-600/50'
                }`}
              >
                <h3 className=&quot;text-2xl font-bold mb-4 capitalize&quot;>{plan}</h3>
                <div className=&quot;text-4xl font-bold mb-6&quot;>{price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300&quot;
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Ready for Quantum-Secure Cloud?
            </h2>
            <p className=&quot;text-xl text-gray-400 mb-8 max-w-3xl mx-auto&quot;>
              Future-proof your cloud infrastructure with quantum-resistant security that protects against emerging threats.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl shadow-emerald-500/25&quot;
            >
              Secure Your Cloud Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumSecureCloudInfrastructure;
export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title=&quot;Quantum-Secure Cloud Infrastructure&quot;
			description=&quot;Future-proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks.&quot;
			subtitle=&quot;Protect data beyond the quantum horizon&quot;
			pricePerMonthUSD={5999}
			implementationWeeks=&quot;6-10 weeks&quot;
			roiNote=&quot;Meet emerging PQC compliance and safeguard long-lived data&quot;
			features={[
				&quot;PQC algorithms for data at-rest and in-transit&quot;,
				&quot;Hybrid crypto transition plans&quot;,
				&quot;HSM/KMS integrations and key rotation&quot;,
				&quot;Zero Trust + PQC reference designs&quot;,
				&quot;Threat modeling and validation&quot;,
				&quot;NIST PQC roadmap alignment]}
			]}
			industries={[&quot;Financial Services&quot;, &quot;Healthcare&quot;, &quot;Government&quot;]}
			url=&quot;https://ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>
	);
}
