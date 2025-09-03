<<<<<<< HEAD
import React from 'react'; export default ServicesSitemap; const ServicesSitemap: React.FC = () : JSX.Element => { const allServices = [{ category: "AI - Powered Micro SAAS Services", description: "Cutting - edge AI solutions with measurable business impact", services[; { title: "AI Code Review & Security Analysis", url: "/services / ai - code - review-security", description: "Advanced vulnerability detection with 85% accuracy improvement", pricing: "$49 - $799 / month", features["85% vulnerability reduction", "50 + programming languages", "SAST, DAST, SCA, IAST", "Git integration"]; },; { title: "AI Customer Experience Analytics", url: "/services / ai - customer - experience - analytics", description: "Transform customer insights into actionable intelligence", pricing: "$299 - $1,999 / month", features["Real - time sentiment analysis", "Customer journey tracking", "Predictive analytics", "Omnichannel insights"]; },; { title: "AI DevOps Automation Platform", url: "/services / ai - devops - automation - platform", description: "Revolutionize DevOps workflow with AI - powered automation", pricing: "$199 - $1,499 / month", features["AI pipeline optimization", "Intelligent deployment", "GitOps workflows", "Multi - cloud orchestration"]; },; { title: "AI IoT Edge Computing Platform", url: "/services / ai - iot - edge - computing - platform", description: "Revolutionize IoT with AI - powered edge computing", pricing: "$299 - $2,499 / month", features["Sub - millisecond processing", "Edge AI intelligence", "Distributed computing", "Hybrid cloud integration"]; } ] },; { category: "Cloud & Infrastructure Services", description: "Scalable cloud solutions and enterprise infrastructure", services[; { title: "Cloud DevOps", url: "/services / cloud - devops", description: "Streamlined cloud deployment and management", pricing: "Custom pricing", features["Multi - cloud deployment", "Infrastructure as Code", "Automated scaling", "Cost optimization"]; },; { title: "IT Infrastructure", url: "/services / it - infrastructure", description: "Enterprise - grade infrastructure solutions", pricing: "Custom pricing", features["Network design", "Server management", "Storage solutions", "Backup & recovery"]; },; { title: "Digital Twin", url: "/services / digital - twin", description: "Virtual representation of physical systems", pricing: "Custom pricing", features["Real - time monitoring", "Predictive maintenance", "Performance optimization", "Simulation modeling"]; } ] },; { category: "Data & Analytics Services", description: "Transform data into actionable business intelligence", services[; { title: "Data Analytics", url: "/services / data - analytics", description: "Comprehensive data analysis and visualization", pricing: "Custom pricing", features["Data visualization", "Statistical analysis", "Trend identification", "Reporting dashboards"]; },; { title: "AI Business Intelligence", url: "/services / ai - business - intelligence", description: "AI - powered business insights and reporting", pricing: "Custom pricing", features["Predictive analytics", "Natural language queries", "Automated insights", "Real - time reporting"]; },; { title: "IoT Edge Computing", url: "/services / iot - edge", description: "Real - time edge data processing", pricing: "Custom pricing", features["Edge processing", "Real - time analytics", "Data filtering", "Local decision making"]; } ] },; { category: "Security & Compliance Services", description: "Enterprise - grade security and regulatory compliance", services[; { title: "Zero Trust Network Architecture", url: "/services / zero - trust - network - architecture", description: "Modern security framework for enterprise", pricing: "Custom pricing", features["Identity verification", "Micro - segmentation", "Continuous monitoring", "Least privilege access"]; },; { title: "AI Cybersecurity Suite", url: "/services / ai - cybersecurity - suite", description: "Comprehensive security solutions", pricing: "Custom pricing", features["Threat detection", "Vulnerability assessment", "Incident response", "Security automation"]; },; { title: "AI Compliance Assistant", url: "/services / ai - compliance - assistant", description: "AI - powered compliance management", pricing: "Custom pricing", features["Regulatory monitoring", "Compliance reporting", "Risk assessment", "Audit preparation"]; } ] },; { category: "Additional Specialized Services", description: "Industry - specific and specialized solutions", services[; { title: "Healthcare Technology", url: "/services / healthcare - tech", description: "Technology solutions for healthcare industry", pricing: "Custom pricing", features["HIPAA compliance", "Patient data management", "Telemedicine platforms", "Healthcare analytics"]; },; { title: "Blockchain Enterprise Solutions", url: "/services / blockchain - enterprise - solutions", description: "Enterprise blockchain implementation", pricing: "Custom pricing", features["Smart contracts", "Supply chain tracking", "Digital identity", "Decentralized applications"]; },; { title: "Sustainability Technology", url: "/services / sustainability", description: "Green technology solutions", pricing: "Custom pricing", features["Carbon tracking", "Energy optimization", "Waste reduction", "Environmental monitoring"]; } ]; }; ]; const quickAccessLinks = [{ title: "AI Services Showcase", url: "/ai - services - showcase", description: "Explore our AI solutions" }, { title: "Comprehensive Services", url: "/comprehensive - services", description: "View all services" }, { title: "Pricing Guide", url: "/pricing", description: "Transparent pricing information" }, { title: "Contact Sales", url: "/contact", description: "Get expert consultation" },; { title: "Request Quote", url: "/request - quote", description: "Get custom pricing" }; ]; return (<> <SEO title = "Services Sitemap | Zion Tech Group - Complete Service Directory" description="Complete directory of all Zion Tech Group services: AI - powered micro SAAS, cloud infrastructure, data analytics, security, and more.Find the perfect solution for your business needs." keywords="Zion Tech Group services, AI services, cloud services, data analytics, cybersecurity, micro SAAS, business solutions, service directory" canonical="https:
=======
import React from "react"
import Head from "next/head"
import Link from "next/link"
const ServicesSitemap = () => {
  return (
    <>
      <Head>
        <title>Services Sitemap - Zion Tech Group</title>
        <meta name="description" content="Professional Services Sitemap services"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Services Sitemap
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Services Sitemap services and solutions
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default ServicesSitemap
>>>>>>> main
