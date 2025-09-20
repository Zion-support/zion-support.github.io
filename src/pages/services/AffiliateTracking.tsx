import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Link2, BarChart3, Wallet, Shield, Globe, ExternalLink, ArrowRight, Mail } from "lucide-react"
export default function AffiliateTracking() {;
  const features: { title: string, description: string }[] = [;
    {;
      title: 'Multi-channel attribution',description: 'Track referrals across links, coupons, QR codes, and partner portals with UTM auto-tagging.'
    },;
    {;
      title: 'Real-time fraud prevention',description: 'Auto-flag suspicious clicks, proxy traffic and cookie stuffing using device fingerprinting.'
    },;
    {;
      title: 'Payout automation',description: 'Automate tiered commissions, bonuses, holds and mass payouts via Stripe, PayPal and ACH.'
    },;
    {;
      title: 'Partner CRM',description: 'Manage applications, onboarding, contracts, and partner lifecycle with nurture workflows.'
    },;
    {;
      title: 'E‑commerce integrations',description: 'Native integrations for Shopify, WooCommerce, BigCommerce and custom checkouts via webhooks.'
    },;
    {;
      title: 'Analytics & BI',description: 'Cohort LTV, ROAS by partner, incremental lift analysis, and predictive recruiting scoring.'
    };
  ],;

  const plans = [;
    {;
      name: 'Starter',price: 49,unit: 'month',bestFor: 'Founders validating their first affiliate program',bullets: [;
        'Up to 200 partnersBasic tracking links and coupons'
        'Manual approvals and payoutsEmail support'
      ];
    },;
    {;
      name: 'Growth',price: 199,unit: 'month',bestFor: 'Scaling DTC and SaaS brands with multiple campaigns',bullets: [;
        'Up to 2,500 partnersAttribution across links, QR and coupons',;
        'Fraud prevention + sandboxAutomated Stripe/PayPal payouts',;
        'Slack alerts and webhooks'
      ];
    },;
    {;
      name: 'Enterprise',price: 599,unit: 'month',bestFor: 'Global programs, agencies and marketplaces',;
      bullets: [;
        'Unlimited partners and campaignsSAML SSO and audit trails'
        'Custom data retention + warehouse syncDedicated CSM and 99.9% SLA'
      ];
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Affiliate Tracking Platform - Zion Tech Group"
        description="Launch and scale a high-performing affiliate program with advanced attribution, fraud prevention, automated payouts, and partner CRM."
        keywords="affiliate tracking, partner marketing, attribution, coupons, referral tracking, payouts"
      />;

      {/* Hero */};
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
        <[^>]*/>
        <div className="relative max-w-7xl mx-auto">;
          <motion.h1
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            Affiliate Tracking Platform;
            <span className="block text-zion-cyan text-2xl md:text-3xl mt-2">Recruit. Attribute. Reward.</[^>]*>
          </[^>]*>

          <p className="text-xl text-zion-slate-light max-w-3xl">;
            End-to-end partner marketing infrastructure: from recruitment to payouts, with trusted, fraud-resistant attribution.;
          </[^>]*>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">;
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white">;
              <Link to="/request-quote">;
                Request a demo;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">;
              <a href="tel:+13024640950">Call +1 302 464 0950</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Feature grid */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((f) => (;
              <motion.div
                key={f.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.4 }};
                className="[^"]*"
              >;
                <div className="flex items-start gap-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold mb-1">{f.title}</[^>]*>
                    <p className="text-zion-slate-light text-sm">{f.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Market context */};
      <section className="py-8 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-zion-blue-dark/30 to-zion-purple/30 border border-zion-blue-light/20 rounded-2xl p-6">;
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">;
            <div className="flex items-center gap-3">;
              <[^>]*/>
              <h3 className="text-white text-lg font-semibold">Market pricing snapshot</[^>]*>
            </[^>]*>
            <div className="flex flex-wrap gap-2">;
              <Badge variant="outline" className="text-zion-cyan border-zion-cyan/40">SaaS</[^>]*>
              <Badge variant="outline" className="text-zion-purple border-zion-purple/40">DTC</[^>]*>
              <Badge variant="outline" className="text-white border-white/20">B2B</[^>]*>
            </[^>]*>
          </[^>]*>
          <p className="text-zion-slate-light mt-3 text-sm">;
            Typical affiliate platforms range from $49–$299/month for SMBs and $500–$1,500+/month for enterprise, depending on partner counts and features. For reference, see pricing from providers like{' '};
            <a className="text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
            <a className="text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
            <a className="text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Plans */};
      <section className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {plans.map((plan, i) => (;
              <motion.div
                key={plan.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.5, delay: i * 0.05 }};
                className={`relative rounded-2xl p-8 ${i === 1 ? 'bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border-2 border-zion-purple' : 'bg-zion-slate-dark/30 border border-zion-blue-light/20'}`}
              >;
                {i === 1 && (;&& (; (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">;
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-4 py-2">Most Popular</[^>]*>
                  </[^>]*>
                )};

                <h3 className="text-2xl font-bold text-white">{plan.name}</[^>]*>
                <p className="text-zion-slate-light text-sm mb-4">{plan.bestFor}</[^>]*>
                <div className="mb-6">;
                  <span className="text-4xl font-bold text-zion-cyan">${plan.price}</[^>]*>
                  <span className="text-zion-slate-light">/{plan.unit}</[^>]*>
                </[^>]*>
                <div className="space-y-2 mb-6">;
                  {plan.bullets.map((b) => (;
                    <div key={b} className="flex items-start gap-2">;
                      <[^>]*/>
                      <span className="text-zion-slate-light text-sm">{b}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
                <Button asChild className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white">;
                  <Link to="/contact">;
                    Get started;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA */};
      <section className="py-12 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto bg-zion-purple/20 border border-zion-purple/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">;
          <div>;
            <h3 className="text-white text-xl font-semibold">Want a tailored affiliate strategy?</[^>]*>
            <p className="text-zion-slate-light text-sm">Email us and well share a free program blueprint for your use case.</[^>]*>
          </[^>]*>
          <div className="flex gap-3">;
            <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">;
              <a href="mailto:kleber@ziontechgroup.com?subject=Affiliate Program Inquiry">Email kleber@ziontechgroup.com</[^>]*>
            </[^>]*>
            <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white">;
              <Link to="/request-quote">Request quote</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* References */};
      <section className="py-8 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <h3 className="text-white text-lg font-semibold mb-4">Helpful links</[^>]*>
          <ul className="space-y-2">;
            <li>;
              <a className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
                <Link2 className="w-4 h-4" /> Tapfiliate pricing <[^>]*/>
              </[^>]*>
            </[^>]*>
            <li>;
              <a className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
                <Link2 className="w-4 h-4" /> FirstPromoter pricing <[^>]*/>
              </[^>]*>
            </[^>]*>
            <li>;
              <a className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light" href="https://[^;]*
                <Link2 className="w-4 h-4" /> Post Affiliate Pro pricing <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

//[^;]*
