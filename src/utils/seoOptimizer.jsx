import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SEOOptimizer = ({ content, onOptimize }) => {
  const [seoScore, setSeoScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const analyzeSEO = async () => {
    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    setTimeout(() => {
      let score = 0;
      const newRecommendations = [];
      
      // Check title length
      const titleMatch = content.match(/<title>(.*?)<\/title>/i);
      if (titleMatch) {
        const titleLength = titleMatch[1].length;
        if (titleLength >= 30 && titleLength <= 60) {
          score += 20;
        } else if (titleLength > 0) {
          score += 10;
          newRecommendations.push('Optimize title length (30-60 characters)');
})
      } else {
        newRecommendations.push('Add a title tag');
})
      // Check meta description
      const metaMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i);
      if (metaMatch) {
        const metaLength = metaMatch[1].length;
        if (metaLength >= 120 && metaLength <= 160) {
          score += 20;
        } else if (metaLength > 0) {
          score += 10;
          newRecommendations.push('Optimize meta description length (120-160 characters)');
})
      } else {
        newRecommendations.push('Add a meta description');
})
      // Check headings
      const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
      const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
      if (h1Count > 0 && h2Count > 0) {
        score += 20;
      } else if (h1Count > 0 || h2Count > 0) {
        score += 10;
        newRecommendations.push('Add more heading structure (H1, H2, H3)');
      } else {
        newRecommendations.push('Add heading structure to your content');
})
      // Check images with alt text
      const images = content.match(/<img[^>]*>/gi) || [];
      const imagesWithAlt = images.filter(img => img.includes('alt='));
      if (images.length > 0) {
        if (imagesWithAlt.length === images.length) {
          score += 20;
        } else {
          score += 10;
          newRecommendations.push('Add alt text to all images');
})
})
      // Check internal links
      const internalLinks = content.match(/href="\/[^"]*"/g) || [];
      if (internalLinks.length >= 2) {
        score += 20;
      } else if (internalLinks.length > 0) {
        score += 10;
        newRecommendations.push('Add more internal links');
      } else {
        newRecommendations.push('Add internal links to related pages');
})
      setSeoScore(score);
      setRecommendations(newRecommendations);
      setIsAnalyzing(false);
      
      if (onOptimize) {
        onOptimize({ score, recommendations: newRecommendations });
})
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={analyzeSEO}
        disabled={isAnalyzing}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
      >
        {isAnalyzing ? 'Analyzing SEO...' : 'Analyze SEO'}
      </button>
      
      {seoScore > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">{seoScore}/100</div>
            <div className="text-lg text-gray-600">SEO Score</div>
          </div>
          
          {recommendations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Recommendations:</h3>
              <ul className="space-y-2">
                {recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>{recommendation}</span>
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

export default SEOOptimizer;
