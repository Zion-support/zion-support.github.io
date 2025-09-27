import React, { useState  useCallback } from 'react';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning';
  severity: 'low' | 'medium' | 'high' | 'critical';
  rule: string;
  description: string;
  element: string;
  selector: string;
  impact: string;
  help: string;
  wcagLevel: string;
  wcagCriteria: string}

interface AccessibilityMetrics {
  totalIssues: number;
  errors: number;
  warnings: number;
  score: number}

interface AdvancedAccessibilityAuditorProps {
  onAuditComplete?: (metrics: AccessibilityMetrics) => void;
  onIssueFound?: (issue: AccessibilityIssue) => void;
  className?: string}

export const AdvancedAccessibilityAuditor: React.FC<AdvancedAccessibilityAuditorProps> = ({
  onAuditComplete  onIssueFound  className = ''
}) => {
  const [isAuditing  setIsAuditing] = useState(false);
  const [metrics  setMetrics] = useState<AccessibilityMetrics | null>(null);
  const [selectedFilter  setSelectedFilter] = useState<string>('all');
  const [selectedSeverity  setSelectedSeverity] = useState<string>('all');

  const auditAccessibility = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsAuditing(true);
    const issues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img  index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push({
            id: `alt-text-${index}`type: 'error'severity: 'critical'rule: 'image-alt'description: 'Image missing alternative text'element: img.tagName 
            selector: img.tagName.toLowerCase()impact: 'Screen readers cannot convey the purpose of this image',
            help: 'Add an alt attribute to describe the image content',
            wcagLevel: 'A',
            wcagCriteria: '1.1.1'
          })}
      });

      // Calculate metrics
      const newMetrics: AccessibilityMetrics = {totalIssues: issues.length 
        errors: issues.filter(issue => issue.type === 'error').length 
        warnings: issues.filter(issue => issue.type === 'warning').length 
        score: Math.max(0100 - (issues.length * 5))
      };

      setMetrics(newMetrics);
      if (onAuditComplete) {
        onAuditComplete(newMetrics)}

    } catch (error) {console.error('Accessibility audit failed:"error)} finally {
      setIsAuditing(false)}
  }[onAuditComplete  onIssueFound]);

  React.useEffect(() => {
    auditAccessibility()}[auditAccessibility]);

  return (

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2 xl font-bold text-gray-900 dark:text-white" id="accessibility-auditor">Accessibility Auditor</h2>
          <p className="text-gray-600 dark:text-gray-400">WCAG compliance and accessibility analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isAuditing ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isAuditing ? 'Auditing...' : 'Ready'}
            </span>
          </div>
          <button
            onClick={auditAccessibility}
            disabled={isAuditing}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
            aria-label={isAuditing ? 'Auditing...' : 'Run Audit'}>
            {isAuditing ? 'Auditing...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {metrics && (
        <>
          {/* Accessibility Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2" id="accessibility-score">Accessibility Score</h3>
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}>
                    {metrics.score}
                  </div>
                  <div>
                    <div className="text-lg font-medium">{getScoreLabel(metrics.score)}</div>
                    <div className="text-sm opacity-90">{metrics.totalIssues} issues found</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2 xl font-bold">{metrics.wcagCompliance.levelAA}%</div>
                <div className="text-sm opacity-90">WCAG AA Compliance</div>
              </div>
            </div>
          </div>

          {/* Issue Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4"
            >
              <div className="text-2 xl font-bold text-red-600">{metrics.criticalIssues}</div>
              <div className="text-sm text-red-600">Critical Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4"
            >
              <div className="text-2 xl font-bold text-orange-600">{metrics.seriousIssues}</div>
              <div className="text-sm text-orange-600">Serious Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4"
            >
              <div className="text-2 xl font-bold text-yellow-600">{metrics.moderateIssues}</div>
              <div className="text-sm text-yellow-600">Moderate Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
            >
              <div className="text-2 xl font-bold text-blue-600">{metrics.minorIssues}</div>
              <div className="text-sm text-blue-600">Minor Issues</div>
            </motion.div>
          </div>

          {/* WCAG Compliance */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" id="wcag-compliance">WCAG Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2 xl font-bold text-green-500">{metrics.wcagCompliance.levelA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level A</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2 xl font-bold text-blue-500">{metrics.wcagCompliance.levelAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AA</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2 xl font-bold text-purple-500">{metrics.wcagCompliance.levelAAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AAA</div>
              </div>
            </div>
          </div>

          {/* Issues List */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="issues-found">Issues Found</h3>
              <div className="flex space-x-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Types</option>
                  <option value="error">Errors</option>
                  <option value="warning">Warnings</option>
                  <option value="info">Info</option>
                </select>
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="serious">Serious</option>
                  <option value="moderate">Moderate</option>
                  <option value="minor">Minor</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {filteredIssues.map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: 20 }}
                    className={`p-4 rounded-lg border-l-4 ${getSeverityColor(issue.severity)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {issue.description}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                            {issue.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {issue.impact}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Help:</strong> {issue.help}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          Element: {issue.element} • Selector: {issue.selector} • WCAG {issue.wcagLevel} ({issue.wcagCriteria})
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </>

    <div className={`advanced-accessibility-auditor ${className}`}>
      {isAuditing && <div>Auditing accessibility...</div>}
      {metrics && (
        <div>
          <h3>Accessibility Score: {metrics.score}/100</h3>
          <p>Issues: {metrics.totalIssues} (Errors: {metrics.errors}, Warnings: {metrics.warnings})</p>
        </div>

      )}
    </div>
  )};

export default AdvancedAccessibilityAuditor;