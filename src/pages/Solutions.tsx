import React from 'react';';
import {
Link
} from 'react-router-dom';';
import {

} from 'lucide-react';';

const Solutions: React.FC = () => {,
	const solutions = [
		{ icon: Zap, title: 'Enterprise Solutions', description: 'Comprehensive AI and automation solutions for large organizations', features: ['Scalable Architecture', '24/7 Support', 'Custom Integration', 'Advanced Analytics'], path: '/solutions/enterprise', color: 'blue' },';
		{ icon: Shield, title: 'SMB Solutions', description: 'Affordable, powerful solutions designed for small and medium businesses', features: ['Quick Deployment', 'Cost-Effective', 'Easy Management', 'ROI Tracking'], path: '/solutions/smb', color: 'green' },';
		{ icon: Globe, title: 'Startup Solutions', description: 'Innovative solutions to help startups scale rapidly and efficiently', features: ['Rapid Prototyping', 'Flexible Pricing', 'Expert Mentorship', 'Growth Analytics'], path: '/solutions/startup', color: 'purple' },';
		{ icon: Cpu, title: 'Government Solutions', description: 'Secure, compliant solutions meeting government standards and requirements', features: ['Security Compliance', 'Data Sovereignty', 'Audit Trails', 'Regulatory Support'], path: '/solutions/government', color: 'red' },';
		{ icon: Database, title: 'Healthcare Solutions', description: 'HIPAA-compliant AI solutions for healthcare organizations', features: ['HIPAA Compliance', 'Patient Privacy', 'Clinical Integration', 'Real-time Analytics'], path: '/solutions/healthcare', color: 'teal' },';
		{ icon: Cloud, title: 'Financial Solutions', description: 'Secure, compliant solutions for financial institutions and fintech companies', features: ['PCI Compliance', 'Fraud Detection', 'Risk Management', 'Regulatory Reporting'], path: '/solutions/financial', color: 'indigo' }';
	];

	const industrySolutions = [
		{ title: 'Manufacturing Solutions', description: 'Smart manufacturing with AI-powered predictive maintenance and quality control', path: '/solutions/manufacturing' },';
		{ title: 'Retail Solutions', description: 'Personalized customer experiences and intelligent inventory management', path: '/solutions/retail' },';
		{ title: 'Education Solutions', description: 'AI-powered learning platforms and educational analytics', path: '/solutions/education' },';
		{ title: 'Transportation Solutions', description: 'Autonomous systems and intelligent logistics optimization', path: '/solutions/transportation' }';
	];

	return (
		<div className="min-h-screen bg-gray-50">";
			<section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">";
				<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";,
					<div className="text-center">";
						<h1 className="text-4xl md: text-6xl font-bold mb-6">Comprehensive AI Solutions</h1>";,
						<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Transform your business with our industry-leading AI and automation solutions. From startups to enterprises, we have the perfect solution for your needs.</p>";
						<div className="flex flex-col sm: flex-row gap-4 justify-center">";,
							<Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">Get Started Today</Link>";,
							<Link to="/demo" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors">Schedule Demo</Link>";,
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">";
				<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";,
					<div className="text-center mb-16">";
						<h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">Choose Your Solution</h2>";,
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored solutions designed to meet the unique needs of your organization</p>";
					</div>
					<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">";,
						{solutions.map((solution) => {
							const IconComponent = solution.icon;
							return (
								<div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover: shadow-xl transition-shadow">";,
									<div className={`w-16 h-16 rounded-lg bg-${solution.color}-100 flex items-center justify-center mb-6`}>`;
										<IconComponent className={`w-8 h-8 text-${solution.color}-600`} />`;
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>";
									<p className="text-gray-600 mb-6">{solution.description}</p>";
									<ul className="space-y-3 mb-8">";
										{solution.features.map((feature) => (
											<li key={feature} className="flex items-center text-gray-700">";
												<CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
												{feature}
											</li>
										))}
									</ul>
									<Link to={solution.path} className={`inline-flex items-center text-${solution.color}-600 hover:text-${solution.color}-700 font-semibold transition-colors`}>`;
										Learn More
										<ArrowRight className="w-4 h-4 ml-2" />";
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-20 bg-gray-50">";
				<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";,
					<div className="text-center mb-16">";
						<h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>";,
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">Specialized solutions crafted for specific industries and use cases</p>";
					</div>
					<div className="grid grid-cols-1 md: grid-cols-2 gap-8">";,
						{industrySolutions.map((solution) => (
							<div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover: shadow-xl transition-shadow">";,
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>";
								<p className="text-gray-600 mb-6">{solution.description}</p>";
								<Link to={solution.path} className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold transition-colors">";,
									Explore Solution
									<ArrowRight className="w-4 h-4 ml-2" />";
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-blue-600">";
				<div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">";,
					<h2 className="text-3xl md: text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>";,
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact our experts to discuss your specific needs and find the perfect solution for your organization.</p>";
					<div className="flex flex-col sm: flex-row gap-4 justify-center">";,
						<Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">Contact Us</Link>";,
						<Link to="/case-studies" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white/10 transition-colors">View Case Studies</Link>";,
					</div>
				</div>
			</section>
		</div>
	);
};

export default Solutions;