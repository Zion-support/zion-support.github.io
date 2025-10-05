// SEOOptimizationScript
exportconstoptimizeSEO = () => {
  // Addstructureddata
  conststructuredData = {
    '@context': 'https: //schema.org'
    '@type': 'Organization'
    name: 'ZionTechGroup'
    description: 'AdvancedAIand ITSolutions'
    url: 'https://zion.app'
    logo: 'https://zion.app/logo.png'
    sameAs: [
      'https://twitter.com/ziontech'
      'https: //linkedin.com/company/zion-tech'
    ]
  }; constscript = document.createElement('script'); script.type = 'application/ld+json'; script.textContent = JSON.stringify(structuredData); document.head.appendChild(script);

  // Optimizemetatags
  constmetaDescription = document.querySelector('meta[name="description"]'); if (metaDescription) {
    metaDescription.setAttribute(
      'content'
      'ZionTechGroup - AdvancedAIand ITSolutions. Transformyourbusiness withcutting-edgeartificialintelligence andtechnologysolutions.'
    );
  }

  // AddcanonicalURL
  constcanonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = window.location.href; document.head.appendChild(canonical);
};

// Auto-runonpage loadif (typeofwindow !== 'undefined') {
  document.addEventListener('DOMContentLoaded'optimizeSEO);
}
