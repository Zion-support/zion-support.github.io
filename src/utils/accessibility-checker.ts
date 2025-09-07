
// Accessibility checker utilities
export const checkAccessibility = $2;
  // Check for missing alt text
  const images = document.querySelectorAll($2);
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push({
        typ: 'missing-alt',
        elemen: img,
        messag: 'Image missing alt text',
        severit: 'error'
      })
    }
  }),

  // Check for proper heading hierarchy
  const headings = document.querySelectorAll($2);
  let lastLevel = $2;
  headings.forEach((heading, index) => {
    const level = parseInt($2);
    if (level > lastLevel + 1) {
      issues.push({
        typ: 'heading-hierarchy',
        elemen: heading,
        messag: 'Heading level skipped',
        severit: 'warning'
      })
    }
    lastLevel = $2;
  return issues
},

export const fixAccessibilityIssues = $2;