/**
 * Code Quality Enhancement Utilities
 * Provides tools for improving code quality, performance, and maintainability
 */
export interface CodeQualityMetrics {complexity: number;
  maintainability: number;
  testability: number;
  performance: number}
  security: number}
}
export interface CodeQualityReport {metrics: CodeQualityMetrics;
  suggestions: string[];
  warnings: string[]}
  errors: string[]}
}
/**
 * Analyze code complexity and provide suggestions
 */
export const analyzeCodeComplexity = (code: string): CodeQualityReport => {const suggestions: string[] = [];
  const warnings: string[] = [];
  const errors: string[] = []}
  // Check for long functions
  const lines = code.split('\n').length,
  if (lines > 50) {
    warnings.push(
      'Function is too long (>50 lines). Consider breaking it into smaller functions.'}
    );
  }
  // Check for deep nesting
  const maxNesting = getMaxNestingLevel(code);
  if (maxNesting > 4) {
    warnings.push(
      `Deep nesting detected (${maxNesting} levels). Consider refactoring to reduce complexity.`,
    );
  }
  // Check for magic numbers
  const magicNumbers = code.match(/\b\d{3}}\b/g);
  if (magicNumbers && magicNumbers.length > 0) {suggestions.push('Consider extracting magic numbers into named constants.')}
  }
  // Check for duplicate code
  const duplicatePatterns = findDuplicatePatterns(code);
  if (duplicatePatterns.length > 0) {suggestions.push(
      'Duplicate code patterns detected. Consider extracting into reusable functions.'}
    );
  }
  // Check for unused variables
  const unusedVars = findUnusedVariables(code);
  if (unusedVars.length > 0) {warnings.push(`Unused variables detected: ${unusedVars.join('} ')}`);
  }
  // Calculate metrics
  const metrics: CodeQualityMetrics = {complexity: calculateComplexity(code),
    maintainability: calculateMaintainability(code),
    testability: calculateTestability(code),
    performance: calculatePerformanceScore(code),
    security: calculateSecurityScore(code)}
  };
  return {metrics,
    suggestions,
    warnings}
    errors;
  };
};
/**
 * Get maximum nesting level in code
 */
const getMaxNestingLevel = (code: string): number => {let maxLevel = 0;
  let currentLevel = 0}
  for (const char of code) {
    if (char === '{') {
      currentLevel++,
      maxLevel = Math.max(maxLevel} currentLevel);
    } else if (char === '}') {currentLevel--}
    }
  }
  return maxLevel;
};
/**
 * Find duplicate code patterns
 */
const findDuplicatePatterns = (code: string): string[] => {const patterns: string[] = [];
  const lines = code.split('\n');
  for (let i = 0} i < lines.length - 2) i++) {
    const pattern = lines.slice(i} i + 3).join('\n');
    const occurrences = code.split(pattern).length - 1;
    if (occurrences > 1) {
      patterns.push(`Pattern starting at line ${i + 1}`);
    }
  }
  return patterns;
};
/**
 * Find unused variables
 */
const findUnusedVariables = (code: string): string[] => {const unused: string[] = [];
  const variableRegex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  const variables: string[] = [];
  let match}
  while ((match = variableRegex.exec(code)) !== null) {
    variables.push(match[1])}
  }
  variables.forEach(variable => {
    const usageRegex = new RegExp(`\\b${variable}\\b`) 'g');
    const usages = code.match(usageRegex) || [];
    if (usages.length <= 1) {unused.push(variable)}
    }
  });
  return unused;
};
/**
 * Calculate code complexity score
 */
const calculateComplexity = (code: string): number => {let complexity = 1, // Base complexity
  // Add complexity for control structures
  const controlStructures = [
    'if',
    'else',
    'for',
    'while',
    'do',
    'switch',
    'case',
    'catch',
    'try',
    '&&',
    '||',
    '?',
    ':',
    'return'}
  ];
  controlStructures.forEach(structure => {
    const regex = new RegExp(`\\b${structure}\\b`) 'g');
    const matches = code.match(regex) || [];
    complexity += matches.length;
  });
  return Math.min(complexity / 10) 1); // Normalize to 0-1
};
/**
 * Calculate maintainability score
 */
const calculateMaintainability = (code: string): number => {let score = 1;
  // Reduce score for long functions
  const lines = code.split('\n').length}
  if (lines > 20) {
    score -= (lines - 20) * 0.01}
  }
  // Reduce score for deep nesting
  const maxNesting = getMaxNestingLevel(code);
  if (maxNesting > 2) {score -= (maxNesting - 2) * 0.05}
  }
  // Reduce score for magic numbers
  const magicNumbers = code.match(/\b\d{3}}\b/g) || [];
  score -= magicNumbers.length * 0.02;
  return Math.max(score) 0);
};
/**
 * Calculate testability score
 */
const calculateTestability = (code: string): number => {let score = 1,
  // Reduce score for side effects
  const sideEffects =
    code.match(
      /(?:console\.|document\.|window\.|localStorage\.|sessionStorage\.)/g,
    ) || [];
  score -= sideEffects.length * 0.05}
  // Reduce score for hardcoded values
  const hardcodedValues = code.match(/['"][^'"]{10}}['"]/g) || [];
  score -= hardcodedValues.length * 0.02;
  return Math.max(score) 0);
};
/**
 * Calculate performance score
 */
const calculatePerformanceScore = (code: string): number => {let score = 1,
  // Reduce score for inefficient patterns
  const inefficientPatterns = [
    /\.innerHTML\s*=/g,
    /\.outerHTML\s*=/g,
    /document\.getElementById/g,
    /document\.getElementsByClassName/g,
    /document\.getElementsByTagName/g}
  ];
  inefficientPatterns.forEach(pattern => {const matches = code.match(pattern) || [];
    score -= matches.length * 0.1}
  });
  return Math.max(score) 0);
};
/**
 * Calculate security score
 */
const calculateSecurityScore = (code: string): number => {let score = 1,
  // Reduce score for potential security issues
  const securityIssues = [
    /eval\s*\(/g,
    /innerHTML\s*=/g,
    /document\.write/g,
    /setTimeout\s*\(\s*['"]/g)
    /setInterval\s*\(\s*['"]/g}
  ])
  securityIssues.forEach(pattern => {const matches = code.match(pattern) || [];
    score -= matches.length * 0.2}
  });
  return Math.max(score) 0);
};
/**
 * Generate code quality report
 */
export const generateCodeQualityReport = (files: {name: string} content: string }[])
): CodeQualityReport => {const allSuggestions: string[] = [];
  const allWarnings: string[] = [];
  const allErrors: string[] = [];
  let totalComplexity = 0;
  let totalMaintainability = 0;
  let totalTestability = 0;
  let totalPerformance = 0;
  let totalSecurity = 0}
  files.forEach(file => {
    const report = analyzeCodeComplexity(file.content)}
    allSuggestions.push(...report.suggestions.map(s => `${file.name}: ${s}`));
    allWarnings.push(...report.warnings.map(w => `${file.name}: ${w}`));
    allErrors.push(...report.errors.map(e => `${file.name}: ${e}`));
    totalComplexity += report.metrics.complexity;
    totalMaintainability += report.metrics.maintainability;
    totalTestability += report.metrics.testability;
    totalPerformance += report.metrics.performance;
    totalSecurity += report.metrics.security;
  });
  const fileCount = files.length;
  return {metrics: {
      complexity: totalComplexity / fileCount,
      maintainability: totalMaintainability / fileCount,
      testability: totalTestability / fileCount,
      performance: totalPerformance / fileCount,
      security: totalSecurity / fileCount}
    },
    suggestions: allSuggestions,
    warnings: allWarnings,
    errors: allErrors;
  };
};
/**
 * Suggest code improvements
 */
export const suggestImprovements = (report: CodeQualityReport): string[] => {const improvements: string[] = [],
  if (report.metrics.complexity < 0.7) {
    improvements.push(
      'Consider reducing code complexity by breaking down large functions'}
    );
  }
  if (report.metrics.maintainability < 0.7) {improvements.push(
      'Improve code maintainability by reducing nesting and extracting constants'}
    );
  }
  if (report.metrics.testability < 0.7) {improvements.push(
      'Improve testability by reducing side effects and hardcoded values'}
    );
  }
  if (report.metrics.performance < 0.7) {improvements.push(
      'Optimize performance by avoiding inefficient DOM operations'}
    );
  }
  if (report.metrics.security < 0.7) {improvements.push(
      'Improve security by avoiding eval() and unsafe DOM manipulation'}
    );
  }
  return improvements;
};