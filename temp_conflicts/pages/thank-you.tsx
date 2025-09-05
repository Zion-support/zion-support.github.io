import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Mail, 
  Clock, 
  Users, 
  ArrowRight,
  Home,
  Briefcase,
  Phone
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ThankYouPage() {
  const nextSteps = [
    {
      title: 'Confirmation Email',
      description: 'You\'ll receive a confirmation email within the next few minutes.',
      icon: <Mail className=&quot;w-6 h-6&quot; />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Team Review',
      description: 'Our team will review your inquiry within 24 hours.',
      icon: <Users className=&quot;w-6 h-6&quot; />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Follow-up Call',
      description: 'We\'ll schedule a follow-up call to discuss your needs in detail.',
      icon: <Phone className=&quot;w-6 h-6&quot; />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

	return (
		<>
			<SEO title=&quot;Thank You&quot; description=&quot;Thank you for your message&quot; url=&quot;/thank-you&quot; />
			<section className=&quot;relative pt-28 pb-16 md:pt-36 md:pb-24&quot;>
				<div className=&quot;container mx-auto px-4 max-w-2xl text-center&quot;>
					<h1 className=&quot;text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple&quot;>Thank you</h1>
					<p className=&quot;mt-4 text-gray-300&quot;>Your message has been received. Our team will get back to you shortly.</p>
					<div className=&quot;mt-8 flex items-center justify-center gap-4&quot;>
						<Link href=&quot;/&quot; className=&quot;inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors&quot;>Back to Home</Link>
						<Link href=&quot;/services&quot; className=&quot;inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors&quot;>Explore Services</Link>
					</div>
				</div>
			</section>
		</>
	);
}
