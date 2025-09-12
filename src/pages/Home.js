import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LatestArticles } from "@/components/home/LatestArticles";
import { ContentShowcase } from "@/components/ContentShowcase";
import { ProductListingCard } from "@/components/ProductListingCard";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Zion Tech Group - The Future of Tech Services", description: "Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions.", keywords: "AI, technology, marketplace, services, talent, IT support, global services, tech professionals", canonical: "https://ziontechgroup.com/" }), _jsx(ITServiceRequestHero, {}), _jsx(HeroSection, {}), _jsx(FeatureHighlights, {}), _jsx(ContentShowcase, {}), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-8", children: "New & Featured" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: MICRO_SAAS_SERVICES.filter(s => [
                                "ai-agent-016",
                                "sales-copilot-017",
                                "sec-compliance-018"
                            ].includes(s.id)).map(item => (_jsx(ProductListingCard, { listing: {
                                    id: item.id,
                                    title: item.title,
                                    description: item.description,
                                    price: Number(item.price.replace(/[^0-9.]/g, "")),
                                    currency: item.price.replace(/[0-9.]/g, "") || "$",
                                    category: item.category,
                                    images: item.images,
                                    rating: item.rating,
                                    reviewCount: item.reviewCount,
                                    aiScore: item.aiScore,
                                    link: item.link,
                                    featured: true
                                } }, item.id))) })] }) }), _jsx(TestimonialsSection, {}), _jsx(LatestArticles, {}), _jsx(CategoriesSection, {}), _jsx(BenefitsSection, {}), _jsx(HowItWorksSection, {}), _jsx(NewsletterSection, {})] }));
}
