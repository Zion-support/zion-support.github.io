export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Privacy <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Your privacy is important to us. This page explains how we collect,
            use, and safeguard your information.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-zion-slate-light text-lg">
          <p>
            We collect personal information you provide when creating an
            account or using our services. This may include your name, email,
            and any other details required to deliver our marketplace
            features.
          </p>
          <p>
            Zion Tech Group uses this data solely to operate and improve our
            platform. We do not sell your personal information to third
            parties.
          </p>
          <p>
            If you have questions about our privacy practices, please contact
            us at{" "}
            <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
              support@ziontechgroup.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
