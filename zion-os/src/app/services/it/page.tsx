export default function ITServicesPage() {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white&quot;>
      {/* Hero Section */}
      <div className=&quot;bg-gradient-to-r from-green-600 to-blue-600 py-20&quot;>
        <div className=&quot;container mx-auto px-6 text-center&quot;>
          <h1 className=&quot;text-5xl font-bold mb-6&quot;>💻 IT Services & Solutions</h1>
          <p className=&quot;text-xl text-green-100 max-w-3xl mx-auto&quot;>
            Comprehensive IT infrastructure, cloud solutions, and digital transformation services 
            to modernize your business and drive operational excellence.
          </p>
          <div className=&quot;mt-8&quot;>
            <a href=&quot;tel:+13024640950&quot; className=&quot;bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors mr-4&quot;>
              Call Now: +1 302 464 0950
            </Link>
            <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors&quot;>
              Get IT Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className=&quot;bg-zinc-800 py-4&quot;>
        <div className=&quot;container mx-auto px-6 text-center text-sm&quot;>
          <span className=&quot;mr-8&quot;>📱 +1 302 464 0950</span>
          <span className=&quot;mr-8&quot;>✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* IT Services Grid */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
            
            {/* Cloud Infrastructure */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>☁️</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>Cloud Infrastructure</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Design, deploy, and optimize cloud infrastructure on AWS, Azure, and Google Cloud. 
                From migration to ongoing management, we ensure your cloud journey is seamless and cost-effective.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• Cloud architecture design and planning</li>
                  <li>• Migration from on-premises to cloud</li>
                  <li>• Multi-cloud and hybrid cloud solutions</li>
                  <li>• Cost optimization and resource management</li>
                  <li>• Disaster recovery and backup strategies</li>
                  <li>• 24/7 cloud infrastructure monitoring</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$150/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$5K - $50K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Management</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$2K - $10K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free initial cloud assessment | Custom pricing for enterprise
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/cloud-services&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About Cloud Infrastructure
              </Link>
            </div>

            {/* DevOps & CI/CD */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>🚀</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>DevOps & CI/CD</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Accelerate your software delivery with automated deployment pipelines, 
                infrastructure as code, and DevOps culture implementation that drives innovation.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• CI/CD pipeline design and implementation</li>
                  <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                  <li>• Container orchestration (Kubernetes, Docker)</li>
                  <li>• Monitoring and observability setup</li>
                  <li>• DevOps culture transformation</li>
                  <li>• Automated testing and quality gates</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$175/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$8K - $75K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Support</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$3K - $15K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free DevOps maturity assessment | Training included
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/devops&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About DevOps & CI/CD
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>🛡️</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>Cybersecurity</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Protect your business with comprehensive cybersecurity solutions including security audits, 
                penetration testing, compliance frameworks, and incident response planning.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• Security assessments and penetration testing</li>
                  <li>• Compliance frameworks (SOC2, ISO27001, HIPAA)</li>
                  <li>• Security architecture design and review</li>
                  <li>• Incident response planning and training</li>
                  <li>• Security awareness and training programs</li>
                  <li>• Threat intelligence and monitoring</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$200/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$10K - $100K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Security</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$5K - $25K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free security assessment | Compliance roadmap included
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/cybersecurity&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About Cybersecurity
              </Link>
            </div>

            {/* Data Engineering */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>📈</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>Data Engineering</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Build robust data pipelines, warehousing solutions, and ETL processes that transform 
                raw data into actionable business intelligence and insights.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• Data pipeline design and implementation</li>
                  <li>• Data warehouse architecture and design</li>
                  <li>• ETL/ELT process development</li>
                  <li>• Real-time data streaming solutions</li>
                  <li>• Data quality and governance</li>
                  <li>• Business intelligence and reporting</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$160/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$15K - $150K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Maintenance</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$3K - $20K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free data assessment | Custom analytics solutions
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/data-engineering&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About Data Engineering
              </Link>
            </div>

            {/* API Development */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>🔌</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>API Development</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Design and develop robust APIs, microservices architecture, and API gateway solutions 
                that enable seamless integration and data exchange between systems.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• RESTful API design and development</li>
                  <li>• GraphQL API implementation</li>
                  <li>• Microservices architecture design</li>
                  <li>• API gateway and management</li>
                  <li>• API documentation and testing</li>
                  <li>• Performance optimization and scaling</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$140/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$8K - $80K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Support</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$2K - $12K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free API assessment | Documentation included
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/api-development&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About API Development
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className=&quot;bg-zinc-800 rounded-xl p-8 border border-zinc-700&quot;>
              <div className=&quot;text-4xl mb-6&quot;>🔄</div>
              <h2 className=&quot;text-3xl font-bold mb-4&quot;>Digital Transformation</h2>
              <p className=&quot;text-zinc-300 mb-6 text-lg&quot;>
                Guide your organization through end-to-end digital transformation with strategic consulting, 
                legacy system modernization, and change management expertise.
              </p>
              
              <div className=&quot;space-y-4 mb-8&quot;>
                <h3 className=&quot;text-xl font-semibold text-green-400&quot;>Services Include:</h3>
                <ul className=&quot;space-y-2 text-zinc-300&quot;>
                  <li>• Digital strategy and roadmap development</li>
                  <li>• Legacy system modernization</li>
                  <li>• Change management and training</li>
                  <li>• Process optimization and automation</li>
                  <li>• Technology stack evaluation</li>
                  <li>• ROI measurement and analytics</li>
                </ul>
              </div>

              <div className=&quot;bg-zinc-700 rounded-lg p-6 mb-6&quot;>
                <h4 className=&quot;text-lg font-semibold mb-4&quot;>Pricing Structure</h4>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Consulting Rate</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$250/hour</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Project Range</span>
                    <span className=&quot;text-yellow-400 font-semibold&quot;>$25K - $500K</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span>Monthly Advisory</span>
                    <span className=&quot;text-green-400 font-semibold&quot;>$10K - $50K</span>
                  </div>
                  <div className=&quot;text-sm text-zinc-400 mt-2&quot;>
                    Free transformation assessment | Strategic roadmap included
                  </div>
                </div>
              </div>

              <a href=&quot;https://ziontechgroup.com/digital-transformation&quot; className=&quot;block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors&quot;>
                Learn More About Digital Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Service Delivery Process */}
      <section className=&quot;py-20 bg-zinc-800&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>⚡ IT Service Delivery Process</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-3xl mx-auto&quot;>
              Our proven methodology ensures successful project delivery, on-time completion, and maximum value for your investment
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;>1</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Discovery</h3>
              <p className=&quot;text-zinc-300&quot;>Comprehensive analysis of your current IT infrastructure, requirements, and business objectives.</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;>2</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Strategy</h3>
              <p className=&quot;text-zinc-300&quot;>Develop detailed project plan, architecture design, and implementation roadmap.</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;>3</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Implementation</h3>
              <p className=&quot;text-zinc-300&quot;>Agile development and deployment with continuous testing and quality assurance.</p>
            </div>
            
            <div className=&quot;text-center&quot;>
              <div className=&quot;bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4&quot;>4</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Optimization</h3>
              <p className=&quot;text-zinc-300&quot;>Performance tuning, monitoring setup, and ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>🛠️ Technology Stack</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-3xl mx-auto&quot;>
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable, and future-proof solutions
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-green-400&quot;>Cloud & Infrastructure</h3>
              <ul className=&quot;space-y-2 text-zinc-300&quot;>
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Kubernetes, Docker, Terraform</li>
                <li>• Ansible, Jenkins, GitLab CI</li>
                <li>• Prometheus, Grafana, ELK Stack</li>
              </ul>
            </div>
            
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-green-400&quot;>Development & APIs</h3>
              <ul className=&quot;space-y-2 text-zinc-300&quot;>
                <li>• Node.js, Python, Java, .NET</li>
                <li>• React, Angular, Vue.js</li>
                <li>• REST, GraphQL, gRPC</li>
                <li>• PostgreSQL, MongoDB, Redis</li>
              </ul>
            </div>
            
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4 text-green-400&quot;>Security & Compliance</h3>
              <ul className=&quot;space-y-2 text-zinc-300&quot;>
                <li>• OWASP, NIST, ISO27001</li>
                <li>• Penetration testing tools</li>
                <li>• SIEM, IDS/IPS solutions</li>
                <li>• Compliance automation tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=&quot;py-20 bg-gradient-to-r from-green-600 to-blue-600&quot;>
        <div className=&quot;container mx-auto px-6 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Modernize Your IT Infrastructure?</h2>
          <p className=&quot;text-xl text-green-100 mb-8 max-w-2xl mx-auto&quot;>
            Let's discuss how our IT services can transform your technology landscape, 
            improve efficiency, and drive business growth through digital innovation.
          </p>
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a href=&quot;tel:+13024640950&quot; className=&quot;bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg&quot;>
                📞 Call +1 302 464 0950
              </Link>
              <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg&quot;>
                ✉️ Schedule IT Consultation
              </Link>
            </div>
            <p className=&quot;text-green-100 text-sm&quot;>
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}