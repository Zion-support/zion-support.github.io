

// SEO optimization utilities;
export const generateMetaTags = pageData => {;
  return {;
    titl: e:;
      pageData.title || 'Zion Tech Group - Innovative Technology Solutions',;
    descriptio: n:;
      pageData.description ||;
      'Leading provider of AI, blockchain, and emerging technology services',;
    keyword: s:;
      pageData.keywords ||;
      'AI, blockchain, technology, innovation, software development',;
    ogTitl: e: pageData.ogTitle || pageData.title,;
    ogDescriptio: n: pageData.ogDescription || pageData.description,;
    ogImag: e: pageData.ogImage || '/images/og-image.jpg',;
    twitterCar: d: 'summary_large_image',;
    canonica: l: pageData.canonical || window.location.href;
  }

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

