import React from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
export default function Services() {
<<<<<<< HEAD
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com',
	};
	return (
<>
			<SEO
				title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group"
				description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started."
				canonical="/services"
				url="https://ziontechgroup.com/services"
			/>
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-12">
						{servicesCatalog.map((category) => (
							<section key={category.slug}>
								<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{category.name}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map((item) => (
										<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
											<div className="flex items-start justify-between gap-4">
												<div>
													<h3 className="text-xl font-semibold text-white">{item.title}</h3>
													<p className="text-zion-slate-light mt-2">{item.description}</p>
												</div>
												<div className="text-right min-w-[120px]">
													<div className="text-zion-cyan font-semibold">{item.price}</div>
													<div className="text-zion-slate-light text-sm">
														{item.billing === 'month'
															? 'Monthly'
															: item.billing === 'hour'
															? 'Hourly'
															: 'Project-based'}
													</div>
												</div>
											</div>
											<ul className="mt-4 space-y-2 text-zion-slate-light text-sm list-disc list-inside">
												{item.features.map((f, idx) => (
													<li key={idx}>{f}</li>
												))}
											</ul>
											<div className="mt-6 flex items-center justify-between">
												<Link
													to={item.href}
													target={item.external ? '_blank' : undefined}
													rel={item.external ? 'noopener noreferrer' : undefined}
													className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20"
												>
													<span>{item.ctaLabel}</span>
													{item.external && <ExternalLink className="w-4 h-4" />}
												</Link>
												<span className="text-zion-slate-light text-sm">Category: {item.category}</span>
											</div>
										</div>
									))}
								</div>
							</section>
						))}
					</div>
					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white">
									<Phone className="w-5 h-5" />
									<span>{contact.mobile}</span>
								</div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white">
									<Mail className="w-5 h-5" />
									<span>{contact.email}</span>
								</div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white">
									<MapPin className="w-5 h-5" />
									<span>{contact.address}</span>
								</div>
							</div>
						</div>
						<div className="mt-6">
							<Link to="/contact" className="inline-flex items-center gap-2 text-white underline">
								Go to contact page
							</Link>
						</div>
					</section>
				</div>
			</main>
</>
	);
=======
  const services = [
    {
      id: 'ai',
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Data Science Consulting"
      ],
      benefits: [
        "Increase operational efficiency by up to 300%",
        "Reduce costs through intelligent automation",
        "Gain competitive advantage with AI insights",
        "Scale operations without proportional cost increase"
      ],
      link: "/services/ai"
    },
    {
      id: 'talent',
      title: "Tech Talent",
      description: "Access world-class developers, engineers, and IT professionals for your projects",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Full-Stack Developers",
        "DevOps Engineers",
        "Data Scientists",
        "UI/UX Designers",
        "Project Managers",
        "QA Engineers"
      ],
      benefits: [
        "Reduce hiring time by 70%",
        "Access global talent pool",
        "Flexible engagement models",
        "Proven track record of success"
      ],
      link: "/talent"
    },
    {
      id: 'equipment',
      title: "Equipment & Infrastructure",
      description: "High-performance technology infrastructure and hardware solutions for modern businesses",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Cloud Infrastructure",
        "High-Performance Computing",
        "Network Solutions",
        "Security Hardware",
        "Data Center Equipment",
        "IoT Devices"
      ],
      benefits: [
        "Optimize performance and reliability",
        "Reduce infrastructure costs",
        "Scale with business growth",
        "Enhanced security and compliance"
      ],
      link: "/equipment"
    },
    {
      id: 'consulting',
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology optimization",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        "Digital Strategy",
        "Technology Roadmap",
        "Process Optimization",
        "Change Management",
        "Risk Assessment",
        "Performance Audits"
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      link: "/consulting"
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      features: [
        "Security Audits",
        "Penetration Testing",
        "SOC2 Compliance",
        "Incident Response",
        "Security Training",
        "Threat Intelligence"
      ],
      benefits: [
        "Protect against cyber threats",
        "Achieve compliance standards",
        "Reduce security risks",
        "Build customer trust"
      ],
      link: "/services/cybersecurity"
    },
    {
      id: 'cloud',
      title: "Cloud Services",
      description: "Scalable cloud solutions and DevOps services for modern application development",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
        "Monitoring & Logging",
        "Cost Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs",
        "Improve scalability and reliability",
        "Accelerate development cycles",
        "Enhanced disaster recovery"
      ],
      link: "/services/cloud"
    }
  ];

  const stats = [
    {
      icon: Globe,
      value: "500+",
      label: "Projects Delivered",
      description: "Across 25+ countries"
    },
    {
      icon: Code,
      value: "50+",
      label: "Technologies",
      description: "Modern tech stack"
    },
    {
      icon: Star,
      value: "99.9%",
      label: "Client Satisfaction",
      description: "Proven track record"
    },
    {
      icon: Lock,
      value: "100%",
      label: "Security",
      description: "Zero breaches"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Learn More About {service.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <span className="flex items-center justify-center">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}
