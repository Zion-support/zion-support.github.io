import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { FlaskConical, ShieldCheck, FileCode, GitBranch, Phone, Mail, MapPin, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ServiceAds from '../components/sections/ServiceAds';
export default function ApiMockContractTestingPage() {
  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const adItems = $2;
      description: 'Spin up OpenAPI/GraphQL mocks in seconds, validate breaking changes in CI, and gate deployments with contract tests. SDK stubs, data generators, and snapshot diffs included.',
      price: 'Starting at $69/month',
      features: [
        'OpenAPI/GraphQL import and live mock serverContract tests gated in CI (GitHub/GitLab/Bitbucket)Dynamic data generators and scenario templatesSnapshot diffs and changelog with approvals'
      ],
      link: 'https://ziontechgroup.com/api-mock-contract-testing',
      contactInfo
    }
  ],

  const tiers = [
    { name: 'Starter', price: '$69/month', items: ['1 project5 mocksOpenAPI importCI status checks'] },
    { name: 'Team', price: '$149/month', items: ['5 projectsUnlimited mocksRecord/replaySlack alerts'] },
    { name: 'Enterprise', price: 'Custom', items: ['SAML/SSORBACPrivate cloud/VPCPremium support'] }
  ],

=======
import Layout from '../components/layout/Layout';

export default function apimockcontracttesting() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Api Mock Contract Testing - Zion Tech Group</title>
        <meta name="description" content="Api Mock Contract Testing solutions and services." />
      </Head>
<<<<<<< HEAD

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <ServiceAds heading="API Quality Fast-Track" subheading="Mock, validate, and ship with confidence." items={adItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className="bg-black/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white text-xl font-bold">{t.name}</h3>
                </div>
                <div className="text-cyan-400 font-semibold mb-4">{t.price}</div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 w-4 h-4 mt-0.5 text-emerald-400"><Check /> <span>{i}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center gap-2 text-cyan-400 w-4 h-4"><Phone /><span>{contactInfo.mobile}</span></div>
              <div className="flex items-center justify-center gap-2 text-purple-400 w-4 h-4"><Mail /><span>{contactInfo.email}</span></div>
              <div className="flex items-center justify-center gap-2 text-green-400 w-4 h-4 text-xs"><MapPin /><span >{contactInfo.address}</span></div>
            </div>
            <div className="text-center">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

=======
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Api Mock Contract Testing</h1>
          <p className="text-lg text-gray-600">
            Professional api mock contract testing solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
