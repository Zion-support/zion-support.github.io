export interface AccessibilityIssue {
  type: string;
  message: string;
  element: string;
  severity: 'low' | 'medium' | 'high';
}

export function checkAccessibility(): AccessibilityIssue[] {
  const issues: AccessibilityIssue[] = [];
  
  // Check for missing alt text
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push({
        type: 'missing-alt',
        message: 'Image missing alt text',
        element: `img[${index}]`,
        severity: 'high'
      });
    }
  });
  
  // Check for missing form labels
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input, index) => {
    if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
      issues.push({
        type: 'missing-label',
        message: 'Input missing label',
        element: `input[${index}]`,
        severity: 'medium'
      });
    }
  });
  
  return issues;
}