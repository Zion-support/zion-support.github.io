import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  Database, 
  UserCheck, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Clock,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Link as LinkIcon,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Key,
  EyeOn,
  Camera,
  CameraOff,
  Microphone,
  MicrophoneOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  PlayButton,
  PauseButton,
  StopButton,
  PlayIcon,
  PauseIcon,
  StopIcon,
  PlayIcon2,
  PauseIcon2,
  StopIcon2,
  PlayIcon3,
  PauseIcon3,
  StopIcon3,
  PlayIcon4,
  PauseIcon4,
  StopIcon4,
  PlayIcon5,
  PauseIcon5,
  StopIcon5,
  PlayIcon6,
  PauseIcon6,
  StopIcon6,
  PlayIcon7,
  PauseIcon7,
  StopIcon7,
  PlayIcon8,
  PauseIcon8,
  StopIcon8,
  PlayIcon9,
  PauseIcon9,
  StopIcon9,
  PlayIcon10,
  PauseIcon10,
  StopIcon10
} from 'lucide-react';
export default function Privacy() {
	return (
<>
			<SEO
				title="Privacy Policy"
				description="Learn how Zion Tech Group handles your data and protects your privacy."
				canonical="https://ziontechgroup.com/privacy"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>Privacy Policy</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Your privacy is important to us. This page explains how we collect, use, and safeguard your information.
						</p>
						<p className="mt-2 text-zion-slate-light text-sm">
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
					
					<div className="max-w-4xl mx-auto space-y-8">
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
							<p className="text-zion-slate-light mb-4">
								Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
							</p>
							<p className="text-zion-slate-light">
								By using our services, you agree to the collection and use of information in accordance with this policy.
							</p>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.1 Personal Information</h3>
							<p className="text-zion-slate-light mb-4">
								We may collect personal information that you provide directly to us, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Name and contact information (email, phone number, address)</li>
								<li>Professional information (resume, skills, work history)</li>
								<li>Account credentials and profile information</li>
								<li>Communication preferences and marketing opt-ins</li>
								<li>Payment and billing information</li>
							</ul>
							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.2 Automatically Collected Information</h3>
							<p className="text-zion-slate-light mb-4">
								We automatically collect certain information when you use our services:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Device information (IP address, browser type, operating system)</li>
								<li>Usage data (pages visited, time spent, features used)</li>
								<li>Cookies and similar tracking technologies</li>
								<li>Log files and analytics data</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
							<p className="text-zion-slate-light mb-4">
								We use the information we collect for various purposes, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Providing and maintaining our services</li>
								<li>Processing transactions and payments</li>
								<li>Connecting talent with opportunities</li>
								<li>Improving our platform and user experience</li>
								<li>Communicating with you about our services</li>
								<li>Ensuring security and preventing fraud</li>
								<li>Complying with legal obligations</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
							<p className="text-zion-slate-light mb-4">
								We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>With your explicit consent</li>
								<li>To service providers who assist in operating our platform</li>
								<li>To comply with legal requirements or protect our rights</li>
								<li>In connection with a business transfer or merger</li>
								<li>To prevent fraud or security threats</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
							<p className="text-zion-slate-light mb-4">
								We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
							</p>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
							<p className="text-zion-slate-light mb-4">
								You have certain rights regarding your personal information:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Access and review your personal information</li>
								<li>Update or correct inaccurate information</li>
								<li>Request deletion of your personal information</li>
								<li>Opt-out of marketing communications</li>
								<li>Control cookie preferences</li>
								<li>Data portability</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
							<p className="text-zion-slate-light mb-4">
								If you have questions about our privacy practices or would like to exercise your rights, please contact us at:
							</p>
							<div className="bg-zion-slate-dark p-4 rounded-lg">
								<p className="text-zion-slate-light">
									<strong>Email:</strong>{' '}
									<a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:underline">
										privacy@ziontechgroup.com
									</a>
								</p>
								<p className="text-zion-slate-light mt-2">
									<strong>Address:</strong> Zion Tech Group, Privacy Team
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
</>
	);
}
