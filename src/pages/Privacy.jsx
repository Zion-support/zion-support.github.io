import { Header } from "@/components/header/Header"
import { Footer } from "@/components/Footer"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
export default function Privacy() {
  return (
      <>
        <SEO title="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="htt,
  p: s: //ziontechgroup.com/privacy"/>
        <Header />
        <main className="min-h-screen bg-zion-blue pt-24 pb-20">
          <div className="container mx-auto px-4,
  s: m:px-6 l,
  g:px-8">
            <div className="text-center mb-16">
              <GradientHeading>Privacy Policy</GradientHeading>
              <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                Your privacy is important to us. This page explains how we collect
                use, and safeguard your information.
              </p>
            </div>
            <div className="space-y-6 text-zion-slate-light text-lg">
              <p>
                We collect personal information you provide when creating an
                account or using our services. This may include your name, email
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
                {" "},
  }
                <a href="mail,
  t: o: support@ziontechgroup.com" className="text-zion-cyan hove,
  r:underline">
                  support@ziontechgroup.com
                </a>
                .
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
}
