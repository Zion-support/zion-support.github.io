// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightTrendingUpUsersDollarSignZapAwardTarget

const caseStudies = [
  {
    id: 1,
    title: "Global Manufacturing AI Transformation",
    company: "Fortune 500 Manufacturer",
    industry: "Manufacturing",
    results: {
      roi: "2500%",
      efficiency: "95%",
      costReduction: "60%",
      timeSaved: "40 hours/week"
    },
    description: "Implemented AI-powered predictive maintenance and autonomous quality control systems across 50+ facilities worldwide.",
    image: "/images/case-studies/manufacturing-ai.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare AI Diagnostic Revolution",
    company: "Leading Hospital Network",
    industry: "Healthcare",
    results: {
      roi: "1800%",
      accuracy: "98%",
      diagnosisSpeed: "10x faster",
      patientSatisfaction: "45% increase"
    },
    description: "Deployed AI diagnostic systems that reduced diagnosis time by 90% while improving accuracy to 98%.",
    image: "/images/case-studies/healthcare-ai.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Financial Services AI Automation",
    company: "Major Bank",
    industry: "Finance",
    results: {
      roi: "3200%",
      processingTime: "85% reduction",
      fraudDetection: "99.5%",
      customerSatisfaction: "60% increase"
    },
    description: "Transformed loan processing and fraud detection with AIreducing processing time from days to minutes.",
    image: "/images/case-studies/finance-ai.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Retail AI Customer Experience",
    company: "Global Retail Chain",
    industry: "Retail",
    results: {
      roi: "2100%",
      salesIncrease: "35%",
      customerRetention: "50%",
      inventoryOptimization: "40%"
    },
    description: "Implemented AI-powered personalization and inventory optimization across 1000+ stores globally.",
    image: "/images/case-studies/retail-ai.jpg",
    featured: false
  }
];

export default function RevolutionaryCaseStudiesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">REVOLUTIONARY SUCCESS STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies are achieving extraordinary results with our AI solutions. 
            These 'aren', 't just numbers—'they', 're transformations that matter.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.filter(study => study.featured).map((studyindex) => (
            <div
              key={study.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-white/90 text-sm">{study.company}</p>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{study.description}</p>
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.results).map(([keyvalue]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>
                  ))}
                <a
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        {/* Additional Case Studies */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {caseStudies.filter(study => !study.featured).map((studyindex) => (
            <div
              key={study.id}
              whileInView={{ opacity: 1x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.company} • {study.industry}</p>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                  <div className="text-xs text-gray-500">ROI</div>
              <p className="text-gray-600 text-sm mb-4">{study.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {study.results.efficiency || study.results.accuracy || study.results.processingTime}
                  <div className="flex items-center text-blue-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {study.results.costReduction || study.results.salesIncrease}
                <a
                  href={`/case-studies/${study.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform flex items-center"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Own Success Story?
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already transforming with our AI solutions. 
            'Let', 's discuss how we can help you achieve similar results.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Transformation
            <a
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              View All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RevolutionaryCaseStudiesShowcase;
import React from "react";

const function RevolutionaryCaseStudiesShowcase() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function RevolutionaryCaseStudiesShowcase() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function RevolutionaryCaseStudiesShowcase() {;
