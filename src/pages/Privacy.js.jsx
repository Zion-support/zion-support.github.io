<<<<<<< HEAD
import { Header } from '@/components/Header';'''
import { Footer } from '@/components/Footer';'''
import { SEO } from '@/components/SEO';'''
import { GradientHeading } from '@/components/GradientHeading';
export default function Privacy() {}
  return()
    <>
      <SEO;
        title="Privacy Policy""""
        description="Learn how Zion Tech Group handles your data and protects your privacy.""""
        canonical="https://ziontechgroup.com/privacy"""
      />"""
      <Header />""""
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">""""
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">""""
          <div className="text-center mb-16">"""
            <GradientHeading>Privacy Policy</GradientHeading>""""
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we;
              collect, use, and safeguard your information.
            </p>"""
          </div>""""
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>'
              {' '}
              We collect personal information you provide when creating an;
              account or using our services. This may include your name, email,
              and other details required to deliver our marketplace features.'
            </p>''
            <p>'''
              {' '}
              Zion Tech Group uses this data solely to operate and improve our;
              platform. We do not sell your personal information to third;
              parties.
            </p>
            <p>'
              If you have questions about our privacy practices, please contact''
              us at{' '}"""
              <a""""
                href="mailto:support@ziontechgroup.com""""
                className="text-zion-cyan hover:underline"""
              >
                support@ziontechgroup.com;
=======
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
export default function Privacy() {

    return (<>
      <SEO title="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="https://ziontechgroup.com/privacy"/>
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Privacy Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we collect,
              use, and safeguard your information.
            </p>
          </div>
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              We collect personal information you provide when creating an
              account or using our services. This may include your name, email,
              and  other details required to deliver our marketplace
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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
<<<<<<< HEAD
    </>
  );
}'"""
'"'"""
=======
    </>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
