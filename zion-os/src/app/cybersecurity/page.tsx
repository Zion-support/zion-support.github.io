import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;Cybersecurity Services - Zion Tech Group | Advanced Threat Protection&quot;,
  description: &quot;Protect your organization with Zion Tech Group's comprehensive cybersecurity solutions. From threat detection to compliance management, we secure your digital assets.&quot;,
  keywords: &quot;cybersecurity, threat protection, security services, compliance, Zion Tech Group, security solutions, threat detection&quot;};

export default function CybersecurityPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>Cybersecurity Services</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Protect your organization from evolving cyber threats with our comprehensive 
            security solutions. From threat detection to compliance management, 
            we secure your digital assets and ensure business continuity.
          </p>
        </div>
      </section>

      {/* Security Overview */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
              <div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
                  Comprehensive Security for the Digital Age
                </h2>
                <p className=&quot;text-gray-300 text-lg mb-6 leading-relaxed&quot;>
                  In today's interconnected world, cybersecurity is not just a technical 
                  requirement—it's a business imperative. Our multi-layered security 
                  approach protects your organization from sophisticated threats while 
                  ensuring compliance with industry standards.
                </p>
                <div className=&quot;space-y-4 mb-6&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-green-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>24/7 threat monitoring & detection</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-green-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>AI-powered security analytics</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-green-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Compliance & regulatory support</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-green-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Incident response & recovery</span>
                  </div>
                </div>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Secure Your Organization
                </Link>
              </div>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-full h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center&quot;>
                  <svg className=&quot;w-32 h-32 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Services */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Core Security Services
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive cybersecurity solutions designed for enterprise protection
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Threat Detection & Response */}
            <div className=&quot;card group hover:bg-green-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Threat Detection & Response</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Advanced threat detection using AI and machine learning with 
                rapid incident response capabilities.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• AI-powered threat detection</li>
                <li>• Real-time monitoring</li>
                <li>• Incident response automation</li>
                <li>• Threat intelligence feeds</li>
              </ul>
              <Link href=&quot;/cybersecurity/threat-detection&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Security Assessment */}
            <div className=&quot;card group hover:bg-blue-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Security Assessment</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Comprehensive security assessments including penetration testing, 
                vulnerability scanning, and risk analysis.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Penetration testing</li>
                <li>• Vulnerability assessments</li>
                <li>• Security architecture review</li>
                <li>• Risk analysis & reporting</li>
              </ul>
              <Link href=&quot;/cybersecurity/security-assessment&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Compliance Management */}
            <div className=&quot;card group hover:bg-purple-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Compliance Management</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Ensure compliance with industry standards including SOC2, ISO 27001, 
                GDPR, and industry-specific regulations.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• SOC2 compliance</li>
                <li>• ISO 27001 certification</li>
                <li>• GDPR compliance</li>
                <li>• Industry regulations</li>
              </ul>
              <Link href=&quot;/cybersecurity/compliance&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Identity & Access Management */}
            <div className=&quot;card group hover:bg-indigo-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Identity & Access Management</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Secure identity management with multi-factor authentication, 
                single sign-on, and privileged access management.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Multi-factor authentication</li>
                <li>• Single sign-on (SSO)</li>
                <li>• Privileged access management</li>
                <li>• Identity governance</li>
              </ul>
              <Link href=&quot;/cybersecurity/identity-access&quot; className=&quot;text-indigo-400 hover:text-indigo-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Data Protection */}
            <div className=&quot;card group hover:bg-red-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Data Protection</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Comprehensive data protection including encryption, backup, 
                and disaster recovery solutions.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Data encryption</li>
                <li>• Backup & recovery</li>
                <li>• Data loss prevention</li>
                <li>• Privacy protection</li>
              </ul>
              <Link href=&quot;/cybersecurity/data-protection&quot; className=&quot;text-red-400 hover:text-red-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Security Training */}
            <div className=&quot;card group hover:bg-yellow-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Security Training</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Employee security awareness training and phishing simulation 
                to build a security-conscious culture.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Security awareness training</li>
                <li>• Phishing simulations</li>
                <li>• Incident response training</li>
                <li>• Compliance training</li>
              </ul>
              <Link href=&quot;/cybersecurity/security-training&quot; className=&quot;text-yellow-400 hover:text-yellow-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/10 to-blue-600/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Security Framework
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Our comprehensive security approach based on industry best practices
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <span className=&quot;text-2xl font-bold text-green-400&quot;>1</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Identify</h3>
              <p className=&quot;text-gray-400&quot;>
                Asset discovery, risk assessment, and threat intelligence 
                to understand your security posture.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <span className=&quot;text-2xl font-bold text-blue-400&quot;>2</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Protect</h3>
              <p className=&quot;text-gray-400&quot;>
                Implement security controls, access management, and 
                data protection measures.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <span className=&quot;text-2xl font-bold text-purple-400&quot;>3</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Detect</h3>
              <p className=&quot;text-gray-400&quot;>
                Continuous monitoring, threat detection, and 
                security event analysis.
              </p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
                <span className=&quot;text-2xl font-bold text-red-400&quot;>4</span>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Respond</h3>
              <p className=&quot;text-gray-400&quot;>
                Incident response, containment, and recovery 
                to minimize business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Compliance Standards
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Industry-recognized security and compliance frameworks
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>SOC2 Type II</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Service Organization Control 2 certification demonstrating 
                security, availability, and processing integrity.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Coverage:</strong> Security, Availability, Processing Integrity
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>ISO 27001</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                International standard for information security management 
                systems (ISMS) certification.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Coverage:</strong> Information Security Management
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>GDPR Compliance</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                General Data Protection Regulation compliance for 
                organizations handling EU citizen data.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Coverage:</strong> Data Privacy & Protection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Technology Stack */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Security Technology Stack
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Industry-leading security tools and platforms
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;card text-center&quot;>
              <h3 className=&quot;text-lg font-semibold mb-4&quot;>SIEM & Monitoring</h3>
              <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <div>Splunk</div>
                <div>IBM QRadar</div>
                <div>Microsoft Sentinel</div>
                <div>ELK Stack</div>
              </div>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <h3 className=&quot;text-lg font-semibold mb-4&quot;>Endpoint Protection</h3>
              <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <div>CrowdStrike</div>
                <div>Carbon Black</div>
                <div>SentinelOne</div>
                <div>Microsoft Defender</div>
              </div>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <h3 className=&quot;text-lg font-semibold mb-4&quot;>Network Security</h3>
              <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <div>Palo Alto Networks</div>
                <div>Cisco</div>
                <div>Fortinet</div>
                <div>Check Point</div>
              </div>
            </div>
            
            <div className=&quot;card text-center&quot;>
              <h3 className=&quot;text-lg font-semibold mb-4&quot;>Identity & Access</h3>
              <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <div>Okta</div>
                <div>Auth0</div>
                <div>Microsoft Azure AD</div>
                <div>CyberArk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Success Metrics */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Security Success Metrics
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Measurable improvements in security posture and threat response
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl font-bold gradient-text mb-2&quot;>99.9%</div>
              <div className=&quot;text-gray-400&quot;>Threat detection rate</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl font-bold gradient-text mb-2&quot;>90%</div>
              <div className=&quot;text-gray-400&quot;>Reduction in incident response time</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl font-bold gradient-text mb-2&quot;>100%</div>
              <div className=&quot;text-gray-400&quot;>Compliance achievement rate</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl font-bold gradient-text mb-2&quot;>24/7</div>
              <div className=&quot;text-gray-400&quot;>Security monitoring coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Secure Your Organization?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Protect your digital assets with comprehensive cybersecurity solutions. 
              Let's discuss how we can strengthen your security posture.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Secure Your Organization
              </Link>
              <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                View Security Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}