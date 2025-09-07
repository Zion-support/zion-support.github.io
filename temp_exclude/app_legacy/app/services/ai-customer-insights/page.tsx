<<<<<<< HEAD
import Link from 'next/link';
=======
import React from 'react';
import { Metadata } from 'next';
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

export const metadata: Metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.',
  keywords: 'AI customer insights, customer analytics, behavior analysis, data insights',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Customer Insights | Zion Tech Group',
    description: 'Transform customer data into actionable insights with AI-powered analytics.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Insights | Zion Tech Group',
    description: 'Transform customer data into actionable insights with AI-powered analytics.',
  },
};

<<<<<<< HEAD
export default function ServicePage() {
=======
export default function AICustomerInsightsPage() {
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Customer Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.
          </p>
        </div>

<<<<<<< HEAD
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Unlock Customer Insights?
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics"
              description="AI-powered customer lifetime value prediction, churn risk analysis, and purchase behavior forecasting"
            />
            <FeatureItem
              icon="😊"
              title="Sentiment Analysis"
              description="Real-time sentiment analysis from reviews, social media, and customer feedback across all channels"
            />
            <FeatureItem
              icon="🎯"
              title="Customer Segmentation"
              description="Advanced AI clustering to identify high-value customer segments and personalized targeting strategies"
            />
            <FeatureItem
              icon="📊"
              title="Behavioral Analytics"
              description="Deep insights into customer journey, engagement patterns, and conversion optimization opportunities"
            />
            <FeatureItem
              icon="🔮"
              title="Churn Prediction"
              description="Early warning system to identify at-risk customers and trigger retention campaigns"
            />
            <FeatureItem
              icon="📈"
              title="ROI Optimization"
              description="AI recommendations for marketing spend allocation and customer acquisition strategies"
            />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavior Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyze customer behavior patterns and preferences using advanced AI.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Purchase patterns</li>
              <li>• Engagement metrics</li>
              <li>• Preference tracking</li>
            </ul>
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
          </div>

<<<<<<< HEAD
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$79"
              period="per month"
              description="Perfect for small businesses and startups"
              features={[
                'Up to 10,000 customers',
                'Basic analytics',
                'Sentiment analysis',
                'Email support',
                'Standard reports',
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$199"
              period="per month"
              description="Ideal for growing businesses and marketing teams"
              features={[
                'Up to 100,000 customers',
                'Advanced AI features',
                'Predictive modeling',
                'Priority support',
                'Custom dashboards',
                'API access',
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$599"
              period="per month"
              description="For large organizations with complex customer data"
              features={[
                'Unlimited customers',
                'Custom AI models',
                'Real-time processing',
                '24/7 support',
                'Custom integrations',
                'Dedicated analyst',
              ]}
              popular={false}
            />
=======
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Predict customer actions and optimize your strategies accordingly.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Churn prediction</li>
              <li>• Lifetime value</li>
              <li>• Next best action</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Insights</h3>
            <p className="text-gray-600 mb-4">
              Get real-time customer insights to make immediate decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Live dashboards</li>
              <li>• Instant alerts</li>
              <li>• Dynamic reports</li>
            </ul>
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white'}`}
    >
      {popular && (
        <div className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-teal-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function InsightCategory({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DataSourceCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock Customer Insights?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and discover the power of AI-driven customer
        analytics. Analyze your first 1,000 customers for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
=======
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
