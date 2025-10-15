// Accessibility testing utilities
export const accessibilityTests = {
  // Check for proper heading hierarchy
  checkHeadingHierarchy: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const issues = [];
    let previousLevel = 0;

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      
      if (index === 0 && level !== 1) {
        issues.push('First heading should be h1');
      }
      
      if (level > previousLevel + 1) {
        issues.push(`Heading ${heading.tagName} skips level after h${previousLevel}`);
      }
      
      previousLevel = level;
    });

    return issues;
  },

  // Check for proper alt text on images
  checkImageAltText: () => {
    const images = document.querySelectorAll('img');
    const issues = [];

    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        issues.push(`Image ${index + 1} missing alt text`);
      }
    });

    return issues;
  },

  // Check for proper form labels
  checkFormLabels: () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    const issues = [];

    inputs.forEach((input, index) => {
      const id = input.getAttribute('id');
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledby = input.getAttribute('aria-labelledby');
      const label = id ? document.querySelector(`label[for="${id}"]`) : null;

      if (!label && !ariaLabel && !ariaLabelledby) {
        issues.push(`Form input ${index + 1} missing label`);
      }
    });

    return issues;
  },

  // Check for proper color contrast
  checkColorContrast: () => {
    // This would need a more sophisticated implementation
    // For now, return a placeholder
    return ['Color contrast check requires manual testing'];
  },

  // Check for keyboard navigation
  checkKeyboardNavigation: () => {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const issues = [];

    interactiveElements.forEach((element, index) => {
      if (element.getAttribute('tabindex') === '0' && !element.getAttribute('role')) {
        issues.push(`Element ${index + 1} has tabindex="0" but no role`);
      }
    });

    return issues;
  },

  // Run all accessibility tests
  runAllTests: () => {
    const results = {
      headingHierarchy: accessibilityTests.checkHeadingHierarchy(),
      imageAltText: accessibilityTests.checkImageAltText(),
      formLabels: accessibilityTests.checkFormLabels(),
      colorContrast: accessibilityTests.checkColorContrast(),
      keyboardNavigation: accessibilityTests.checkKeyboardNavigation()
    };

    const totalIssues = Object.values(results).flat().length;
    
    console.warn('Accessibility Test Results:', results);
    console.warn(`Total Issues Found: ${totalIssues}`);
    
    return { results, totalIssues };
  }
};

// Initialize accessibility testing
export const initAccessibilityTesting = () => {
  if (process.env.NODE_ENV === 'development') {
    // Run tests in development mode
    setTimeout(() => {
      accessibilityTests.runAllTests();
    }, 1000);
  }
};
