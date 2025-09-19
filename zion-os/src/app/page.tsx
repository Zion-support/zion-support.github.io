
export default function HomePage() {,
  const features = [,
    {,
      icon: '🤖';
      title: 'AI-Powered Intelligence';
      description:,
        'ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.';
      features: [,
        'ZionGPT Core IntegrationResume Builder + Proposal AI';
        'Autonomous Decision EngineAI Moderation System',
      ];
      gradient: 'bg-gradient-to-r from-blue-600 to-purple-600',};
    {,
      icon: '🏪';
      title: 'Complete Marketplace';
      description:,
        'Jobs, talent, projects, and token systems create a thriving digital economy ecosystem.';
      features: [,
        'Job & Talent MarketplaceToken System + Rewards';
        'On-chain Contract BuilderMulti-currency Support',
      ];
      gradient: 'bg-gradient-to-r from-green-600 to-emerald-600',};
    {,
      icon: '🗳️';
      title: 'Governance & DAO';
      description:,
        'Flexible governance from admin control to full DAO systems with dual governance options.';
      features: [,
        'DAO Proposal VotingDual Governance (Local + Global)';
        'Sovereign TreasuryKYC/AML + ID Verification',
      ];
      gradient: 'bg-gradient-to-r from-purple-600 to-pink-600',};
        </div>,
      </section>,
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,
        <div className="max-w-7xl mx-auto">,
          <div className="text-center mb-16">,
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need</h2>,
            <p className="text-xl text-white/70 max-w-2xl mx-auto">,
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (,
              <FeatureCard,
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                gradient={feature.gradient}
              />,
            ))}
          </div>,
        </div>,
      </section>,
    </div>,
  );
}
,]