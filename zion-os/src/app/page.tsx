import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
  description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions. Launch sovereign AI-powered digital economies with one click.",
  keywords: "AI, digital transformation, blockchain, cloud solutions, machine learning, cybersecurity, enterprise IT, Zion Tech Group",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
    description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions.",
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI-Powered Digital Transformation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
    description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Zion OS</h1>
        <p className="opacity-80">Launch sovereign AI-powered digital economies with one click.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/multiverse/launch">
            <div className="font-semibold">Launch Wizard</div>
            <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
          </a>
          <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/admin/instances">
            <div className="font-semibold">Admin Instances</div>
            <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
          </a>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Featured Services</h2>
          <p className="opacity-80">Explore our comprehensive suite of micro SAAS solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-blue-400 mb-2">🤖 AI & Machine Learning</div>
            <div className="text-sm opacity-80 mb-3">Advanced AI platforms for business intelligence, predictive analytics, and automation.</div>
            <a href="/services" className="text-blue-400 hover:text-blue-300 text-sm">Explore AI Services →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-green-400 mb-2">☁️ IT Infrastructure</div>
            <div className="text-sm opacity-80 mb-3">Cloud migration, DevOps automation, and cybersecurity solutions.</div>
            <a href="/services" className="text-green-400 hover:text-green-300 text-sm">Explore IT Services →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-purple-400 mb-2">🔗 Blockchain & Web3</div>
            <div className="text-sm opacity-80 mb-3">Enterprise blockchain development and DeFi protocol solutions.</div>
            <a href="/services" className="text-purple-400 hover:text-purple-300 text-sm">Explore Web3 Services →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-yellow-400 mb-2">📊 Data & Analytics</div>
            <div className="text-sm opacity-80 mb-3">Modern data warehouses and real-time analytics platforms.</div>
            <a href="/services" className="text-yellow-400 hover:text-yellow-300 text-sm">Explore Data Services →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-red-400 mb-2">🔌 API & Integration</div>
            <div className="text-sm opacity-80 mb-3">Enterprise API management and system integration platforms.</div>
            <a href="/services" className="text-red-400 hover:text-red-300 text-sm">Explore API Services →</a>
          </div>
          
          <div className="p-4 rounded border border-white/10 hover:border-white/20 transition-colors">
            <div className="font-semibold text-cyan-400 mb-2">🌐 IoT & Edge Computing</div>
            <div className="text-sm opacity-80 mb-3">IoT data management and edge computing orchestration.</div>
            <a href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm">Explore IoT Services →</a>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/services" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            View All Services
          </a>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-white/10 text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
        <p className="opacity-80 mb-4">Contact our team to discuss your requirements and get started with our solutions.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-colors">
            Get Started
          </a>
          <a href="tel:+13024640950" className="px-4 py-2 border border-white/20 hover:border-white/40 rounded font-semibold transition-colors">
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </>
  );
}