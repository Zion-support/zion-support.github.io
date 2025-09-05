
// Accessibility checker utilities
export const checkAccessibility = () => {
  const issues = [];
  // Check for missing alt text
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push({
        type: 'missing-alt'
        element: img
        message: 'Image missing alt text'
        severity: 'error'
      });
    }
  });
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName[1]);
    if (level > lastLevel + 1) {
      issues.push({
        type: 'heading-hierarchy'
        element: heading
        message: 'Heading level skipped'
        severity: 'warning'
      });
    }
    lastLevel = level;
  });
  return issues;
};
export const fixAccessibilityIssues = (issues) => {
  issues.forEach(issue => {
    if (issue.type === 'missing-alt') {
      issue.element.alt = 'Image description';
    }
  });
};