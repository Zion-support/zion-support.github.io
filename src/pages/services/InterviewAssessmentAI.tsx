import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, BarChart3, Mic, Video, Shield, DollarSign, ExternalLink } from 'lucide-react';

const InterviewAssessmentAI: React.FC = () => {
	const modules = [
		{ icon: Mic, title: 'Speech + Transcription', desc: 'Real-time or recorded interviews with diarization and sentiment.' },
		{ icon: Video, title: 'Video Signals', desc: 'Optional webcam signals with consent and privacy controls.' },
		{ icon: FileText, title: 'Skills Rubrics', desc: 'Structured, role-based rubrics with calibrated scoring and notes.' },
		{ icon: BarChart3, title: 'Analytics', desc: 'Funnel metrics, time-to-hire, source quality, DEI insights.' },
		{ icon: Shield, title: 'Compliance', desc: 'Bias testing, retention policy, candidate opt-out and audit trail.' }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			<section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
				<h1 className="text-4xl font-bold sm:text-5xl">AI Interview Assessment Platform</h1>
				<p className="mt-4 max-w-2xl text-slate-300">Screen faster with structured interviews, AI-assisted scoring, and transparent feedback. Built with privacy-by-design.</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Schedule a demo</Link>
					<Link to="/contact" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{modules.map((m) => (
						<div key={m.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
							<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
								<m.icon className="h-5 w-5" />
							</div>
							<h3 className="text-lg font-semibold">{m.title}</h3>
							<p className="mt-2 text-sm text-slate-300">{m.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
					<div className="mb-2 font-semibold text-white">Pricing</div>
					<ul className="grid gap-2 sm:grid-cols-2">
						<li>Pilot (up to 50 interviews): $3,500</li>
						<li>Growth: $1,000/mo + $20/interview</li>
						<li>Enterprise: custom, SSO + data retention controls</li>
					</ul>
					<div className="mt-4 flex items-center gap-2 text-xs">
						<DollarSign className="h-3 w-3" />
						Includes calibration, bias testing, and hiring manager training.
					</div>
					<a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
						See hiring solutions <ExternalLink className="ml-1 h-3 w-3" />
					</a>
					<div className="mt-6 text-xs text-slate-400">Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</div>
				</div>
			</section>
		</div>
	);
};

export default InterviewAssessmentAI;