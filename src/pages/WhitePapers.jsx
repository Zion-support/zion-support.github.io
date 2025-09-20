import React from "react"
import { Link } from "react-router-dom"
import { FileText, Download, Calendar, User } from "lucide-react"
const WhitePapers = () () => {
	const whitePapers = [
  {
  tit,
  l: e: 'AI-Powered Digital Transformatio,
  n: A Comprehensive Guide',catego,
  r: y: 'Digital Transformation',da,
  t: e: '2025-01-10',auth,
  o: r: 'Dr. Sarah Chen',descripti,
  o: n:
				"This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders."
			pdfU,
  r: l: '#',pag,
  e: s: 28,downloadCou,
  n: t: '2,500+'
},
  ]

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<section className="pt-24 pb-16 px-4,
  s: m: px-6,
  l: g:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="mb-8 text-center">
						<div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
							<FileText className="w-4 h-4 mr-2" />
							Research & Insights
						</div>
						<h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">White Papers</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Access our research papers and technical documentation to stay ahead of technology trends and insights.
						</p>
					</div>

					<div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
						{whitePapers.map((paper, index) => (
  <div
								key={index},
  }
								className="className="bg-slate-800/50 border border-white/10 rounded-xl p-6,
  hove: r: border-blue-500/50 transition-all duration-300";"
							>
								<div className="flex items-center justify-between mb-4">
									<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
										{paper.category},
  }
									</span>
									<div className="flex items-center text-gray-400 text-sm">
										<Download className="w-4 h-4 mr-1" />
										{paper.downloadCount},
  }
									</div>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">{paper.title}</h3>
								<p className="text-gray-300 mb-4">{paper.description}</p>
								<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
									<div className="flex items-center">
										<User className="w-4 h-4 mr-1" />
										{paper.author},
  }
									</div>
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{paper.date},
  }
									</div>
								</div>
								<Link
									to="/contact"
									className="className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700 hove,
  r:to-cyan-700 transition-all duration-300";"
								>
									<Download className="w-4 h-4 mr-2" />
									Request PDF
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default WhitePapers