import Link from "next/link";
export const metadata = $2;
  description: "Transform your enterprise with Zion Tech Group's comprehensive IT solutions. From cloud migration to DevOps automation, we help organizations modernize their technology infrastructure.",
  keywords: "enterprise IT, digital transformation, cloud migration, DevOps, infrastructure, Zion Tech Group, enterprise solutions"},

export default function EnterpriseITPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Enterprise IT Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with modern, scalable, and secure IT infrastructure. 
            From cloud migration to DevOps automation, we help organizations achieve 
            digital transformation excellence.
          </p>
        </div>
      </section>

      {/* Enterprise Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-blue-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Modernize Your Enterprise Infrastructure
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  In today's digital-first world, enterprises need agile, scalable, 
                  and secure IT infrastructure to compete and thrive. Our comprehensive 
                  solutions help organizations modernize their technology stack while 
                  maintaining operational excellence.
                </p>
                <div className = $2;
                cost optimization, and performance tuning.
              </p>
              <ul className = $2;
                infrastructure as code, and monitoring solutions.
              </p>
              <ul className = $2;
                network configuration, and performance optimization.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Server provisioning</li>
                <li>• Network configuration</li>
                <li>• Performance optimization</li>
                <li>• Capacity planning</li>
              </ul>
              <Link href="/enterprise-it/infrastructure-management" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Data Management */}
            <div className="card group hover:bg-indigo-500/10 transition-colors">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Management</h3>
              <p className="text-gray-400 mb-4">
                Enterprise data solutions including warehousing, analytics, 
                and business intelligence platforms.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Data warehousing</li>
                <li>• Business intelligence</li>
                <li>• Data analytics</li>
                <li>• Master data management</li>
              </ul>
              <Link href="/enterprise-it/data-management" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Security & Compliance */}
            <div className="card group hover:bg-red-500/10 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-400 mb-4">
                Enterprise-grade security solutions with compliance frameworks 
                for SOC2, ISO 27001, and industry-specific regulations.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-400">
                <li>• Security framework implementation</li>
                <li>• Compliance management</li>
                <li>• Threat detection & response</li>
                <li>• Security training</li>
              </ul>
              <Link href="/enterprise-it/security-compliance" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            
            {/* Managed Services */}
            <div className="card group hover:bg-yellow-500/10 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Managed Services</h3>
              <p className="text-gray-400 mb-4">
                24/7 managed IT services including monitoring, maintenance, 
                and support for enterprise infrastructure.
              </p>
              <ul className = $2;
                identifying opportunities and challenges.
              </p>
            </div>
            
            <div className = $2;
                timelines, and success metrics.
              </p>
            </div>
            
            <div className = $2;
                ensuring minimal disruption to operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-400">
                Continuous monitoring, performance tuning, and 
                ongoing optimization for sustained success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformation Success Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measurable improvements our enterprise clients achieve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <div className="text-gray-400">Reduction in deployment time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <div className="text-gray-400">Cost savings on infrastructure</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">System uptime achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3x</div>
              <div className="text-gray-400">Faster development cycles</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help modernize your IT infrastructure 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Transformation
              </Link>
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}