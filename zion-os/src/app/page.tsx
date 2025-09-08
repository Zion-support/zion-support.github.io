import Link from 'next/link';

const features = [
  {
    icon: '🚀',
    title: 'One-Click Deployment',
    description: 'Launch your digital economy in minutes, not months.',
    features: ['Automated setup', 'Pre-configured templates', 'Instant scaling'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: '🔒',
    title: 'Sovereign Control',
    description: 'Complete ownership of your digital infrastructure.',
    features: ['Decentralized governance', 'Data sovereignty', 'Custom protocols'],
    gradient: 'from-green-500 to-blue-600'
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Intelligent automation for optimal performance.',
    features: ['Smart contracts', 'Predictive analytics', 'Automated decisions'],
    gradient: 'from-purple-500 to-pink-600'
  }
];

function FeatureCard({ icon, title, description, features, gradient }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-white/60 text-sm flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Launch Sovereign</span>
              <br />
              <span className="text-white">AI-Powered Digital Economies</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Built for the future of decentralized business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </Link>
              <Link href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything you need for launching sovereign digital economies.
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our platform provides all the tools and infrastructure needed to build, deploy, and scale your digital economy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join the revolution in decentralized business. Launch your sovereign AI-powered digital economy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
              🚀 Start Building Now
            </Link>
            <Link href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
              📊 Explore Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}