import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Code, Bug, Zap, CheckCircle, BarChart3, Sparkles, ArrowRight, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function AICodeReviewSecurityScanner() {
  const features = [
    'AI-powered static code analysis with 99.7% accuracy',
    'Real-time vulnerability detection (OWASP Top 10, CWE)',
    'Automated code quality scoring and improvement suggestions',
    'Integration with GitHub, GitLab, Bitbucket, and Azure DevOps',
    'Custom security rules and compliance frameworks (SOC2, ISO27001)',
    'Performance impact analysis and optimization recommendations',
    'Multi-language support (Python, JavaScript, Java, C#, Go, Rust)',
    'Automated dependency vulnerability scanning and updates',
  ];

  const benefits = [
    'Reduce security vulnerabilities by 85% in production code',
    'Cut code review time by 60% with AI-powered insights',
    'Achieve 99.9% compliance with security standards',
    'Prevent costly security breaches and compliance violations',
    'Improve code quality and maintainability scores',
    'Automate repetitive security checks and code reviews',
  ];

  const securityFeatures = [
    'SQL Injection Detection',
    'Cross-Site Scripting (XSS) Prevention',
    'Authentication & Authorization Flaws',
    'Insecure Direct Object References',
    'Security Misconfiguration Detection',
    'Sensitive Data Exposure Prevention',
    'Missing Function Level Access Control',
    'Cross-Site Request Forgery (CSRF)',
    'Using Components with Known Vulnerabilities',
    'Insufficient Logging & Monitoring',
  ];

  const stack = [
    { name: 'OpenAI GPT-4', url: 'https://openai.com/gpt-4' },
    { name: 'SonarQube', url: 'https://www.sonarqube.org/' },
    { name: 'Snyk Security', url: 'https://snyk.io/' },
    { name: 'GitHub Security', url: 'https://github.com/features/security' },
    { name: 'OWASP ZAP', url: 'https://owasp.org/www-project-zap/' },
    { name: 'Semgrep', url: 'https://semgrep.dev/' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Code Review & Security Scanner</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Automate code reviews, detect security vulnerabilities, and ensure code quality with AI-powered analysis. 
              Protect your applications from the latest security threats while maintaining high development velocity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Free Security Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Key Features</h3>
            </div>
            <ul className="space-y-3">
              {features.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Security Coverage</h3>
            </div>
            <ul className="space-y-3">
              {securityFeatures.slice(0, 5).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Starter: $299/month (up to 5 developers)</li>
              <li>Professional: $799/month (up to 25 developers)</li>
              <li>Enterprise: $1,999/month (unlimited developers)</li>
              <li>Custom: Tailored solutions for large teams</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Avg. market reference: see <a className="text-cyan-400 hover:underline" href="https://www.gartner.com/en/documents/3991477" target="_blank" rel="noreferrer">Gartner Application Security</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Comprehensive Security Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Bug className="h-6 w-6 text-red-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Vulnerability Detection</h4>
              </div>
              <p className="text-slate-300 text-sm">
                AI-powered detection of 1000+ security vulnerabilities with detailed remediation guidance.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Lock className="h-6 w-6 text-yellow-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Compliance Scanning</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Automated compliance checks for SOC2, ISO27001, HIPAA, GDPR, and industry-specific standards.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Eye className="h-6 w-6 text-blue-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Code Quality</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Maintainability, complexity, and performance analysis with actionable improvement suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack & Integrations</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Secure Your Codebase?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-400 mt-6">
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a> for enterprise solutions
          </p>
        </div>
      </section>
    </div>
  );
}