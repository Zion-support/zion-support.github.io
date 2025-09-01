        
        const averageSeoScore = Math.round(pageMetrics.reduce((sum, page) => sum + page.seoScore, 0) / totalPages);
        const pagesWithIssues = pageMetrics.filter(page => page.issues.length > 0).length;
        // Collect all issues and count frequency
        const issueCounts = { /* empty */ };
        pageMetrics.forEach(page => {

            page.issues.forEach(issue => {

                issueCounts[issue] = (issueCounts[issue] || 0) + 1;
            });
        });
        const topIssues = Object.entries(issueCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([issue]) => issue);
        const summary = this.generateSummary(pageMetrics, topIssues);
        return {

            totalPages,
            averageWordCount,
            averageSeoScore,
            pagesWithIssues,
            topIssues,
            pageMetrics,
            summary
        };

    generateSummary(pageMetrics, topIssues) {

        const totalPages = pageMetrics.length;
        const excellentPages = pageMetrics.filter(page => page.overallScore >= 80).length;
        const goodPages = pageMetrics.filter(page => page.overallScore >= 60).length;
        const poorPages = pageMetrics.filter(page => page.overallScore < 40).length;
        let summary = `Analyzed ${totalPages} pages. `;
        if (excellentPages > 0) {
`
            summary += `${excellentPages} pages have excellent content quality. `;

        if (goodPages > 0) {
`
            summary += `${goodPages} pages have good content quality. `;

        if (poorPages > 0) {
`
            summary += `${poorPages} pages need significant improvement. `;

        if (topIssues.length > 0) {
`
            summary += `Top issues to address: ${topIssues.slice(0, 3).join(', ')}.`;

        return summary;

    getPageMetrics(pageUrl) {

        return this.analyzedPages.get(pageUrl);

    getAllPageMetrics() {
        return Array.from(this.analyzedPages.values());

    clearCache() {
        this.analyzedPages.clear();
    }
}'
import React, { useState, useEffect } from 'react';'
import { motion } from 'framer-motion';

const ContentQualityAnalyzer = ({ content, onAnalysisComplete }) => {

  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeContent = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      const wordCount = content.split(/\s+/).length;
      const sentenceCount = content.split(/[.!?]+/).length;
      const paragraphCount = content.split(/\n\s*\n/).length;
      
      const analysisResult = {

  wordCount,
        sentenceCount,
        paragraphCount,
        averageWordsPerSentence: Math.round(wordCount / sentenceCount),
        readabilityScore: Math.min(100, Math.max(0, 100 - (wordCount / 10))),
  suggestions: []
      






};
      
      // Generate suggestions based on analysis
      if (wordCount < 300) {
'
        analysisResult.suggestions.push('Consider adding more content for better SEO');
      }
      if (analysisResult.averageWordsPerSentence > 25) {
'
        analysisResult.suggestions.push('Break down long sentences for better readability');
      }
      if (paragraphCount < 3) {
'
        analysisResult.suggestions.push('Add more paragraphs to improve content structure');
      }
      
      setAnalysis(analysisResult);
      setIsAnalyzing(false);
      
      if (onAnalysisComplete) {

        onAnalysisComplete(analysisResult);
      }
    }, 2000);
  };

  return()
    <div className="space-y-4">
      <button
        onClick={analyzeContent}
        disabled={isAnalyzing}"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
      >'
        {isAnalyzing ? 'Analyzing...' : 'Analyze Content Quality'}
      </button>
      
      {analysis && (
        <motion.div
          initial = {

  { opacity: 0,
  y: 20 






}}
          animate = {

  { opacity: 1,
  y: 0 






}}"
          className="space-y-4"
        >"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">"
            <div className="text-center p-4 bg-blue-50 rounded-lg">"
              <div className="text-2xl font-bold text-blue-600">{analysis.wordCount}</div>"
              <div className="text-sm text-gray-600">Words</div>
            </div>"
            <div className="text-center p-4 bg-green-50 rounded-lg">"
              <div className="text-2xl font-bold text-green-600">{analysis.sentenceCount}</div>"
              <div className="text-sm text-gray-600">Sentences</div>
            </div>"
            <div className="text-center p-4 bg-purple-50 rounded-lg">"
              <div className="text-2xl font-bold text-purple-600">{analysis.paragraphCount}</div>"
              <div className="text-sm text-gray-600">Paragraphs</div>
            </div>"
            <div className="text-center p-4 bg-orange-50 rounded-lg">"
              <div className="text-2xl font-bold text-orange-600">{analysis.readabilityScore}</div>"
              <div className="text-sm text-gray-600">Readability</div>
            </div>
          </div>
          
          {analysis.suggestions.length > 0 && (
            <div>"
              <h3 className="text-lg font-semibold mb-2">Suggestions:</h3>"
              <ul className="space-y-2">
                {analysis.suggestions.map((suggestion, index) => ("
                  <li key={index} className="flex items-start space-x-2">"
                    <span className="text-green-500 mt-1">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ContentQualityAnalyzer;
}}}}}}}}}}}}}}}}'"`