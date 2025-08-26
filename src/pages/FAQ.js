import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function FAQ() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "FAQ", description: "Frequently asked questions about Zion Tech Group services.", canonical: "https://ziontechgroup.com/faq" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "FAQ" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Find answers to common questions about our services and platform." })] }), _jsxs("div", { className: "space-y-6 text-zion-slate-light text-lg", children: [_jsx("p", { children: "Common questions and answers will be displayed here." })] })] }) }), _jsx(Footer, {})] }));
}
