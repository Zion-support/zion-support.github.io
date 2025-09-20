          </p>,
        </div>,
        {/* Industry Filter */}
        <div,
          className="flex flex-wrap justify-center gap-4 mb-12",
        >,
          {industries.map((industry) => (,
            <button,
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${,
                selectedIndustry === industry,
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25',
                  : 'bg-white/10 text-gray-300 hover: bg-white/20 hover:text-white'}`}
            >,
              {industry}
          ))}
        </div>,
        {/* Case Studies Grid */}
        <div,
          className="grid grid-cols-1 md: grid-cols-2 gap-8",
        >,
          <div>,
            {filteredCaseStudies.map((caseStudyindex) => (,
              <div,
                key={caseStudy.id}
                className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover: bg-white/10 transition-all duration-300 cursor-pointer ${,
                  caseStudy.isFeatured ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-white/10'}`}
                onClick={() => setSelectedCase(caseStudy)}
              >,
                {/* Featured Badge */}
                {caseStudy.isFeatured && (,
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">,
                    FEATURED)}
                {/* Header */}
                <div className="flex items-start justify-between mb-4">,
                  <div>,
                    <h3 className="text-xl font-bold text-white mb-2 group-hover: text-blue-400 transition-colors duration-300">,
                      {caseStudy.title}
                    <p className="text-blue-300 font-medium">{caseStudy.company}</p>,
                    <p className="text-gray-400 text-sm">{caseStudy.industry}</p>,
                  <div className="flex items-center gap-1">,
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                    <span className="text-white font-medium">{caseStudy.rating}</span>,
                {/* Challenge */}
                <div className="mb-4">,
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Challenge</h4>,
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>,
                {/* Key Results */}
                <div className="grid grid-cols-2 gap-4 mb-4">,
                  {caseStudy.results.slice(02).map((resultidx) => (,
                    <div key={idx} className="text-center">,
                      <div className="text-2xl font-bold text-white">{result.value}</div>,
                      <div className="text-xs text-gray-400">{result.metric}</div>,
                      <div className="text-xs text-green-400">+{result.improvement}</div>))}
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">,
                  {caseStudy.tags.map((tagidx) => (,
                    <span,
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs",
                    >,
                      {tag}
                  ))}
                {/* Footer */}
                <div className="flex items-center justify-between">,
                  <div className="text-sm text-gray-400">,
                    <div className="flex items-center gap-1">,
                      <Clock className="w-3 h-3" />,
                      {caseStudy.duration}
                    <div className="flex items-center gap-1">,
                      <Users className="w-3 h-3" />,
                      {caseStudy.teamSize}
                  <button className="text-blue-400 hover: text-blue-300 transition-colors duration-300 flex items-center gap-1">,
                    <span className="text-sm font-medium">Read More</span>,
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />,
                  </button>,
                </div>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* CTA Section */}
        <div,
          className="text-center mt-16",
        >,
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">,
            <h3 className="text-2xl font-bold text-white mb-4">,
              Ready to Create Your Success Story?,
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">,
              Join these industry leaders and transform your business with AI.,
              Our experts are ready to help you achieve similar results.,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">,
                <Play className="w-5 h-5" />,
                Watch Case Study Videos,
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">,
                <Target className="w-5 h-5" />,
                Start Your Project,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Case Study Modal */}
      <div>,
        {selectedCase && (,
          <div,
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick={() => setSelectedCase(null)}
          >,
            <div,
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
              onClick={(e) => e.stopPropagation()}
            >,
              <div className="p-8">,
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">,
                  <div>,
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedCase.title}</h2>,
                    <p className="text-blue-300 text-lg">{selectedCase.company}</p>,
                    <p className="text-gray-400">{selectedCase.industry}</p>,
                  <button,
                    onClick={() => setSelectedCase(null)}
                    className="text-gray-400 hover: text-white transition-colors duration-300",
                  >,
                    <X className="w-6 h-6" />,
                {/* Results Grid */}
                <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-8">,
                  {selectedCase.results.map((resultidx) => (,
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">,
                      <div className="text-2xl font-bold text-white mb-1">{result.value}</div>,
                      <div className="text-sm text-gray-400 mb-1">{result.metric}</div>,
                      <div className="text-sm text-green-400 font-medium">+{result.improvement}</div>))}
                {/* Challenge & Solution */}
                <div className="grid md: grid-cols-2 gap-6 mb-8">,
                  <div>,
                    <h3 className="text-lg font-bold text-white mb-3">Challenge</h3>,
                    <p className="text-gray-300">{selectedCase.challenge}</p>,
                  <div>,
                    <h3 className="text-lg font-bold text-white mb-3">Solution</h3>,
                    <p className="text-gray-300">{selectedCase.solution}</p>,
                {/* Testimonial */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">,
                  <p className="text-gray-300 italic mb-4">"{selectedCase.testimonial}"</p>,
                  <div>,
                    <p className="text-white font-medium">{selectedCase.author}</p>,
                    <p className="text-blue-300 text-sm">{selectedCase.role}</p>,
                {/* Project Details */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">,
                  <div className="flex items-center gap-2">,
                    <Clock className="w-4 h-4" />,
                    Duration: {selectedCase.duration}
                  <div className="flex items-center gap-2">,
                    <Users className="w-4 h-4" />,
                    Team: {selectedCase.teamSize}
                  <div className="flex items-center gap-2">,
                    <Star className="w-4 h-4" />,
                    Rating: {selectedCase.rating}/5,
                {/* Action Buttons */}
                <div className="flex gap-4">,
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover: shadow-lg hover:shadow-blue-500/25 transition-all duration-300">,
                    Download Full Case Study,
                  <button className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">,
                    Schedule Consultation,
import React from "react",
const function InteractiveCaseStudies2025() { = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-5xl font-bold mb-6">function InteractiveCaseStudies2025() {</h1>,
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>,
        </div>,
                  </button>,
                </div>,
              </div>,
            </div>,
          </div>,
        )}
      </div>,
    </div>,
  ),
},
export default function InteractiveCaseStudies2025() {,
}}}