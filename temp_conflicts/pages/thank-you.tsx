import React from 'react';
import {_CheckCircle, _Mail, _Clock, _Users, _ArrowRight, _Home, _Briefcase, _Phone} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ThankYouPage() {_const _nextSteps = [
    {
      title: 'Confirmation Email', _description: 'You\'ll receive a confirmation email within the next few minutes.', _icon: <Mail className="w-6 h-6" />, _color: 'from-blue-500 to-cyan-500'},
    {_title: 'Team Review', _description: 'Our team will review your inquiry within 24 hours.', _icon: <Users className="w-6 h-6" />, _color: 'from-purple-500 to-pink-500'},
    {_title: 'Follow-up Call', _description: 'We\'ll schedule a follow-up call to discuss your needs in detail.', _icon: <Phone className="w-6 h-6" />, _color: 'from-green-500 to-emerald-500'}
  ];

	return (
		<>
			<SEO title="Thank You" description="Thank you for your message" url="/thank-you" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-2xl text-center">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Thank you</h1>
					<p className="mt-4 text-gray-300">Your message has been received. Our team will get back to you shortly.</p>
					<div className="mt-8 flex items-center justify-center gap-4">
						<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Back to Home</Link>
						<Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Explore Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}
