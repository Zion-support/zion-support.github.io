import Link from 'next/link';

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-white">
			<section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
					<p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
						Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
					</p>
				</div>
			</section>
		</div>
	);
}