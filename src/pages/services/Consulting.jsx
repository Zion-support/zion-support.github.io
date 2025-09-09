import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Target, Search, FileText, Handshake, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consulting() {
    const consultingServices = [
        {
            title: "Technology Assessment",
            description: "Comprehensive evaluation of your current technology landscape and capabilities",
            features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],
            icon: Search
        },
        {
            title: "Strategic Planning",
            description: "Develop long-term technology strategy aligned with business objectives",
            features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],
            icon: FileText
        },
        {
            title: "Vendor Selection",
            description: "Expert guidance in selecting the right technology partners and solutions",
            features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],
            icon: Handshake
        },
        {
            title: "Project Management",
            description: "Professional project management for technology implementations",
            features: ["Project Planning", "Timeline Management", "Resource Allocation", "Risk Mitigation"],
            icon: Target
        },
        {
            title: "Change Management",
            description: "Supporting organizational change during technology transformations",
            features: ["Stakeholder Communication", "Training Programs", "Process Redesign", "Performance Monitoring"],
            icon: Users
        },
        {
            title: "Performance Optimization",
            description: "Improving system performance and operational efficiency",
            features: ["Performance Analysis", "Bottleneck Identification", "Optimization Strategies", "Monitoring Setup"],
            icon: TrendingUp
        }
    ];

    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "IT Consulting Services - Zion Tech Group", description: "Expert IT consulting services to help your business navigate technology challenges and achieve digital transformation goals.", keywords: "IT consulting, technology consulting, digital transformation, technology strategy", canonical: "https://ziontechgroup.com/services/consulting" }), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "IT Consulting Services" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Strategic technology guidance to help your business thrive in the digital age" })] }), _jsxs("div", { className: "mb-16", children: [_jsx("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Expert Technology Guidance" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-6", children: "Our experienced consultants help organizations navigate complex technology decisions, optimize operations, and achieve sustainable growth through strategic technology investments." }), _jsx("p", { className: "text-zion-slate-light text-lg mb-6", children: "From initial assessment to implementation support, we provide comprehensive consulting services tailored to your unique business needs and objectives." }), _jsx("div", { className: "mt-8", children: _jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Schedule Consultation" }) })] }), _jsx("div", { className: "rounded-lg overflow-hidden", children: _jsx("img", { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&h=600", alt: "IT consulting meeting", className: "object-cover w-full h-full" }) })] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Our Consulting Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: consultingServices.map((service, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx(service.icon, { className: "h-12 w-12 text-zion-cyan" }) }), _jsx("h3", { className: "text-white font-medium text-xl text-center mb-3", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-center mb-4", children: service.description }), _jsxs("ul", { className: "text-zion-slate-light text-sm space-y-1", children: service.features.map((feature, idx) => (_jsx("li", { className: "flex items-center", children: [_jsx("span", { className: "text-zion-cyan mr-2", children: "•" }), feature] }, idx))) })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Why Choose Our Consulting?" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6", children: [_jsx("h3", { className: "text-white font-medium text-xl mb-4", children: "Expertise & Experience" }), _jsxs("ul", { className: "text-zion-slate-light space-y-2", children: [_jsx("li", { children: "• Deep industry knowledge and technical expertise" }), _jsx("li", { children: "• Proven track record of successful implementations" }), _jsx("li", { children: "• Certified professionals with advanced degrees" }), _jsx("li", { children: "• Continuous learning and industry updates" })] })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6", children: [_jsx("h3", { className: "text-white font-medium text-xl mb-4", children: "Tailored Approach" }), _jsxs("ul", { className: "text-zion-slate-light space-y-2", children: [_jsx("li", { children: "• Customized solutions for your specific needs" }), _jsx("li", { children: "• Flexible engagement models and pricing" }), _jsx("li", { children: "• Ongoing support and relationship building" }), _jsx("li", { children: "• Measurable outcomes and ROI tracking" })] })] })] })] })] }), _jsxs("div", { className: "bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Ready to Transform Your Technology?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Let our expert consultants help you navigate the path to digital transformation and technology excellence." }), _jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", asChild: true, children: _jsx(Link, { to: "/contact", children: "Get Started Today" }) })] })] }) })] }));
}
