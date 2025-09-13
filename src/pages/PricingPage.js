import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MICRO_SAAS_SERVICES, PRICING_TIERS, CONTACT_INFO } from '../data/microSaasServices';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Transparent Pricing Plans
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Choose the perfect plan for your business needs. All plans include our core features with flexible scaling options.
                    </p>
                </div>
            </section>
        </div>
    );
}
