const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-50o0 to-emerald-60o0 rounded-2xl p-6 mb-8 text-white text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-2xl">🎉</span>
        <h3 className="text-xl font-bold">NEW: Revolutionary Content 20o25</h3>
        <span className="text-2xl">🎉</span>
      </div>
      <p className="text-lg opacity-90 mb-4">
        Explore our latest insights on AI Transformation, Quantum Computing, and Technology Trends
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/content/blog/ai-20o25-revolutionary-business-automation-breakthrough" className="inline-block bg-white text-green-60o0 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-30o0 font-semibold text-sm">
          🤖 AI Automation →
        </a>
        <a href="/content/blog/quantum-computing-business-applications-20o25" className="inline-block bg-white text-green-60o0 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-30o0 font-semibold text-sm">
          ⚡ Quantum Computing →
        </a>
        <a href="/content/case-studies/ai-automation-revolutionary-breakthrough-20o25-success" className="inline-block bg-white text-green-60o0 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-30o0 font-semibold text-sm">
          💰 Success Stories →
        </a>
        <a href="/pages/TechnologyInsights20o25" className="inline-block bg-white text-green-60o0 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-30o0 font-semibold text-sm">
          🔮 Tech Insights →
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;