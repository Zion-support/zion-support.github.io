import React from 'react';
import Link from 'next/link';

export default function AIAgentGuardrailsPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-purple-50 to-indigo-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-4'>
              <span>🛡️</span>
              AI Security & Governance
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              AI Agent Guardrails in Production: Making Agents Predictable
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Learn how to implement robust guardrails for AI agents in production environments. 
              Ensure predictable behavior with scoped tools, approvals, evaluations, and budget controls.
            </p>
            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
              <span>📅 January 25, 2025</span>
              <span>⏱️ 12 min read</span>
              <span>👥 8,500+ views</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>The Challenge of Production AI Agents</h2>
            <p className='text-lg text-gray-700 mb-6'>
              As AI agents move from experimental prototypes to production systems, ensuring predictable 
              and safe behavior becomes critical. Without proper guardrails, AI agents can make costly 
              mistakes, violate business rules, or compromise security.
            </p>

            <div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8'>
              <h3 className='text-xl font-semibold text-red-900 mb-3'>Common Production Failures</h3>
              <ul className='space-y-2 text-red-800'>
                <li>• Unauthorized API calls leading to unexpected costs</li>
                <li>• Data privacy violations and compliance breaches</li>
                <li>• Inconsistent decision-making across similar scenarios</li>
                <li>• Resource exhaustion and system instability</li>
                <li>• Hallucinated responses in critical business contexts</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>The Four Pillars of AI Agent Guardrails</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-600 text-xl'>🔧</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>Scoped Tools</h3>
                </div>
                <p className='text-gray-700 mb-4'>
                  Limit agent capabilities to specific, pre-approved tools and functions. 
                  Prevent unauthorized access to sensitive systems or expensive operations.
                </p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• API rate limiting and quotas</li>
                  <li>• Function whitelisting</li>
                  <li>• Resource access controls</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                    <span className='text-green-600 text-xl'>✅</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>Approval Workflows</h3>
                </div>
                <p className='text-gray-700 mb-4'>
                  Implement human-in-the-loop approval for high-risk actions. 
                  Ensure critical decisions receive appropriate oversight.
                </p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Threshold-based approvals</li>
                  <li>• Escalation procedures</li>
                  <li>• Audit trail maintenance</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <span className='text-purple-600 text-xl'>📊</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>Continuous Evaluation</h3>
                </div>
                <p className='text-gray-700 mb-4'>
                  Monitor agent performance with automated evaluations and quality metrics. 
                  Detect drift and performance degradation early.
                </p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Automated testing suites</li>
                  <li>• Performance benchmarking</li>
                  <li>• Quality score tracking</li>
                </ul>
              </div>

              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <span className='text-orange-600 text-xl'>💰</span>
                  </div>
                  <h3 className='text-xl font-semibold text-gray-800'>Budget Controls</h3>
                </div>
                <p className='text-gray-700 mb-4'>
                  Implement cost controls and spending limits to prevent runaway expenses. 
                  Monitor resource usage and set automatic cutoffs.
                </p>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Daily/monthly spending limits</li>
                  <li>• Per-request cost caps</li>
                  <li>• Automatic shutdown triggers</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Implementation Architecture</h2>
            
            <div className='bg-gray-50 p-6 rounded-lg mb-8'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Guardrail System Components</h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold'>1</div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Policy Engine</h4>
                    <p className='text-gray-600 text-sm'>Centralized rule management and enforcement</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold'>2</div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Monitoring Layer</h4>
                    <p className='text-gray-600 text-sm'>Real-time tracking of agent actions and performance</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold'>3</div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Intervention System</h4>
                    <p className='text-gray-600 text-sm'>Automated responses to policy violations</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold'>4</div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Audit & Reporting</h4>
                    <p className='text-gray-600 text-sm'>Comprehensive logging and compliance reporting</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Code Example: Basic Guardrail Implementation</h2>
            
            <div className='bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 overflow-x-auto'>
              <pre className='text-sm'>
{`class AgentGuardrail {
  constructor(config) {
    this.maxCostPerRequest = config.maxCostPerRequest || 10;
    this.approvalThreshold = config.approvalThreshold || 100;
    this.allowedTools = config.allowedTools || [];
    this.budgetLimit = config.budgetLimit || 1000;
  }

  async validateAction(action, context) {
    // Check tool permissions
    if (!this.allowedTools.includes(action.tool)) {
      throw new Error('Unauthorized tool access');
    }

    // Check cost limits
    if (action.estimatedCost > this.maxCostPerRequest) {
      return { approved: false, reason: 'Cost limit exceeded' };
    }

    // Check budget
    if (context.totalSpent + action.estimatedCost > this.budgetLimit) {
      return { approved: false, reason: 'Budget limit exceeded' };
    }

    // Check approval threshold
    if (action.estimatedCost > this.approvalThreshold) {
      return { approved: false, requiresApproval: true };
    }

    return { approved: true };
  }
}`}
              </pre>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Best Practices for Production Deployment</h2>

            <div className='space-y-6 mb-8'>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-blue-800 mb-3'>1. Gradual Rollout Strategy</h3>
                <p className='text-blue-700 mb-3'>
                  Start with read-only operations and gradually expand to more complex actions as confidence builds.
                </p>
                <ul className='space-y-1 text-sm text-blue-600'>
                  <li>• Phase 1: Information retrieval and analysis</li>
                  <li>• Phase 2: Low-risk data modifications</li>
                  <li>• Phase 3: High-impact business operations</li>
                </ul>
              </div>

              <div className='bg-green-50 border border-green-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-green-800 mb-3'>2. Comprehensive Testing</h3>
                <p className='text-green-700 mb-3'>
                  Implement automated testing at multiple levels to catch issues before they reach production.
                </p>
                <ul className='space-y-1 text-sm text-green-600'>
                  <li>• Unit tests for individual guardrail functions</li>
                  <li>• Integration tests for end-to-end workflows</li>
                  <li>• Chaos engineering for failure scenarios</li>
                </ul>
              </div>

              <div className='bg-purple-50 border border-purple-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-purple-800 mb-3'>3. Monitoring & Alerting</h3>
                <p className='text-purple-700 mb-3'>
                  Set up comprehensive monitoring to detect anomalies and policy violations in real-time.
                </p>
                <ul className='space-y-1 text-sm text-purple-600'>
                  <li>• Real-time performance dashboards</li>
                  <li>• Automated alerting for policy violations</li>
                  <li>• Regular compliance audits</li>
                </ul>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Measuring Guardrail Effectiveness</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center p-6 bg-white border border-gray-200 rounded-lg'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>99.9%</div>
                <div className='text-sm text-gray-600'>Policy Compliance Rate</div>
              </div>
              <div className='text-center p-6 bg-white border border-gray-200 rounded-lg'>
                <div className='text-3xl font-bold text-green-600 mb-2'>0.1%</div>
                <div className='text-sm text-gray-600'>False Positive Rate</div>
              </div>
              <div className='text-center p-6 bg-white border border-gray-200 rounded-lg'>
                <div className='text-3xl font-bold text-purple-600 mb-2'>&lt;50ms</div>
                <div className='text-sm text-gray-600'>Guardrail Latency</div>
              </div>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Getting Started with Guardrails</h2>
            <p className='text-lg text-gray-700 mb-6'>
              Implementing robust guardrails for AI agents requires careful planning and execution. 
              Our team can help you design and deploy a comprehensive guardrail system tailored to your specific needs.
            </p>

            <div className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg text-center'>
              <h3 className='text-2xl font-bold mb-4'>Secure Your AI Agents Today</h3>
              <p className='text-lg mb-6 opacity-90'>
                Get expert guidance on implementing production-ready AI agent guardrails for your organization.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                >
                  Schedule Security Audit
                </Link>
                <Link
                  href='/services/ai-services'
                  className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Related Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Link href='/blog/genai-security-2025' className='group'>
              <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  GenAI Security in 2025
                </h3>
                <p className='text-gray-600 mb-4'>
                  A pragmatic blueprint for securing GenAI systems in production with real controls.
                </p>
                <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
              </article>
            </Link>
            
            <Link href='/blog/ai-automation-enterprise' className='group'>
              <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  AI Automation for Enterprise
                </h3>
                <p className='text-gray-600 mb-4'>
                  Complete implementation guide for enterprise AI automation with proven strategies.
                </p>
                <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
              </article>
            </Link>
            
            <Link href='/blog/cybersecurity-2025-trends' className='group'>
              <article className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  Cybersecurity Trends 2025
                </h3>
                <p className='text-gray-600 mb-4'>
                  Essential security measures every organization needs to implement this year.
                </p>
                <span className='text-blue-600 font-medium group-hover:underline'>Read More →</span>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}