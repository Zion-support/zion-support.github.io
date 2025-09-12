import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Leaf, Zap, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
const greenFeatures = [
    {
        icon: Leaf,
        title: "Energy Efficiency",
        description: "Reduce power consumption by up to 40% with our green IT solutions",
        benefits: ["Lower electricity bills", "Reduced carbon footprint", "Extended hardware lifespan"]
    },
    {
        icon: Zap,
        title: "Smart Power Management",
        description: "Intelligent power management systems that optimize energy usage",
        benefits: ["Automated power scheduling", "Peak demand reduction", "Real-time monitoring"]
    },
    {
        icon: Globe,
        title: "Sustainable Practices",
        description: "Implement eco-friendly IT practices across your organization",
        benefits: ["Paperless workflows", "Remote work optimization", "Green procurement"]
    },
    {
        icon: TrendingUp,
        title: "Performance Optimization",
        description: "Maintain high performance while reducing environmental impact",
        benefits: ["Efficient resource utilization", "Optimized workflows", "Sustainable scaling"]
    }
];
const greenStats = [
    { number: "40%", label: "Energy Reduction" },
    { number: "60%", label: "Carbon Footprint Decrease" },
    { number: "25%", label: "Cost Savings" },
    { number: "100%", label: "Green Certified" }
];
export default function GreenIT() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("section", { className: "bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20", children: _jsx("div", { className: "container mx-auto px-4 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx(Leaf, { className: "w-20 h-20 mx-auto mb-6 text-green-300" }), _jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Green IT Solutions" }), _jsx("p", { className: "text-xl text-green-100 max-w-3xl mx-auto mb-8", children: "Transform your IT infrastructure with sustainable, energy-efficient solutions that reduce costs and environmental impact while maintaining peak performance." }), _jsx("button", { className: "bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-300", children: "Get Started" })] }) }) }), _jsx("section", { className: "py-20 bg-green-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-8", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: greenStats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-green-700 mb-2", children: stat.number }), _jsx("div", { className: "text-green-600 text-sm md:text-base", children: stat.label })] }, stat.label))) }) }) }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(motion.h2, { className: "text-3xl font-bold text-center mb-16 text-gray-800", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: "Sustainable IT Features" }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 gap-8", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: greenFeatures.map((feature, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "bg-white border border-green-200 rounded-xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-green-300", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6", children: _jsx(feature.icon, { className: "w-8 h-8 text-green-600" }) }), _jsx("h3", { className: "text-2xl font-bold text-gray-800 mb-4", children: feature.title }), _jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: feature.description }), _jsx("ul", { className: "space-y-3 mb-6", children: feature.benefits.map((benefit, idx) => (_jsxs("li", { className: "flex items-center gap-3 text-gray-600", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-500 flex-shrink-0" }), _jsx("span", { children: benefit })] }, idx))) }), _jsxs("div", { className: "flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300", children: [_jsx("span", { className: "font-medium", children: "Learn More" }), _jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }, feature.title))) })] }) }), _jsx("section", { className: "bg-gradient-to-r from-green-600 to-green-700 text-white py-20", children: _jsx("div", { className: "container mx-auto px-4 text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "Ready to Go Green?" }), _jsx("p", { className: "text-xl text-green-100 mb-8 max-w-2xl mx-auto", children: "Join the sustainable IT revolution and make a positive impact on both your business and the environment." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("button", { className: "bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors duration-300", children: "Get Green IT Assessment" }), _jsx("button", { className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300", children: "Contact Our Team" })] })] }) }) })] }));
}
