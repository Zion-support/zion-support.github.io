// Content optimization utility
export const contentOptimizer = {
  optimizeText: (text) => {
    if (!text) return '';
    return text.trim().replace(/\s+/g, ' ');
  },
  
  truncateText: (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  },
  
  formatDate: (date) => {
    if (!date) return '';
    try {
      return new Date(date).toLocaleDateString();
    } catch (error) {
      console.warn('Date formatting error:', error);
      return '';
    }
  }
};

export default contentOptimizer;