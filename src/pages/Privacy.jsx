import SEOHead from "../components/SEOHead";
import { FuturisticNavigation } from "../components/FuturisticNavigation";
import { FuturisticFooter } from "../components/FuturisticFooter";
export default function Privacy() {
    return (<>
      <SEOHead title="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="https://ziontechgroup.com/privacy" />
      <FuturisticNavigation />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we collect,
              use, and safeguard your information.
            </p>
          </div>
          <div className="space-y-6 text-zion-slate-light text-lg">
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
              us at
              {" "}
              <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:underline">
                support@ziontechgroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <FuturisticFooter />
    </>);
}
