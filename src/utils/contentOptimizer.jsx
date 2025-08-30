import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContentOptimizer = ({ content, onOptimize }) => {
  const [optimizedContent, setOptimizedContent] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const optimizeContent = async () => {
    setIsOptimizing(true);
    
    // Simulate optimization process
    setTimeout(() => {
      const optimized = content
        .replace(/\s+/g, ' ')
        .trim()
        .split('. ')
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join('. ');
      
      setOptimizedContent(optimized);
      
      // Generate suggestions
      const newSuggestions = [
        'Consider adding more specific keywords',
        'Break down long sentences for better readability',
        'Add bullet points for key information',
        'Include a clear call-to-action'
      ];
      
      setSuggestions(newSuggestions);
      setIsOptimizing(false);
      
      if (onOptimize) {
        onOptimize(optimized);
      }
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={optimizeContent}
        disabled={isOptimizing}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {isOptimizing ? 'Optimizing...' : 'Optimize Content'}
      </button>
      
      {optimizedContent && (
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 


}}
          animate = {
  { opacity: 1,
  y: 0 


}}
          className="space-y-4"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Optimized Content:</h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              {optimizedContent}
            </div>
          </div>
          
          {suggestions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Suggestions:</h3>
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
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

export default ContentOptimizer;
