import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MICRO_SAAS_SERVICES, PRICING_TIERS, CONTACT_INFO } from '../data/microSaasServices';

export default function PricingPage() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsx("section", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Transparent Pricing Plans" }), _jsx("p", { className: "text-xl md:text-2xl mb-8 max-w-3xl mx-auto", children: "Choose the perfect plan for your business needs. All plans include our core features with flexible scaling options." })] }) }) }));
}