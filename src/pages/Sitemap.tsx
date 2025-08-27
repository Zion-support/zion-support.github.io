import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, Briefcase, Users, ShoppingCart, Building, FileText, HelpCircle, Settings, Shield, Globe, MessageSquare, Star } from 'lucide-react';

export default function Sitemap() {
    const sitemapSections = [
        {
            title: 'Main Pages',
            icon: Home,
            links: [
                { name: 'Home', path: '/', description: 'Main landing page' },
                { name: 'About Us', path: '/about', description: 'Company information and mission' },
                { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
                { name: 'Careers', path: '/careers', description: 'Job opportunities' },
                { name: 'Partners', path: '/partners', description: 'Partnership programs' },
                { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
            ]
        },
        {
            title: 'Services',
            icon: Briefcase,
            links: [
                { name: 'IT Solutions', path: '/services/it-solutions', description: 'Infrastructure and IT services' },
                { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence solutions' },
                { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
                { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
                { name: 'On-Site Support', path: '/it-onsite-services', description: 'Local technical support' },
                { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
            ]
        },
        {
            title: 'Talent & Recruitment',
            icon: Users,
            links: [
                { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
                { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
                { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
                { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring process' },
                { name: 'Post a Job', path: '/post-job', description: 'Create job listings' },
                { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI recruitment platform' },
            ]
        },
        {
            title: 'Marketplace',
            icon: ShoppingCart,
            links: [
                { name: 'Equipment', path: '/equipment', description: 'Tech equipment and hardware' },
                { name: 'Equipment Details', path: '/equipment-detail', description: 'Detailed product information' },
                { name: 'Categories', path: '/categories', description: 'Browse by category' },
                { name: 'Featured', path: '/featured', description: 'Highlighted products' },
                { name: 'Deals', path: '/deals', description: 'Special offers and discounts' },
            ]
        },
        {
            title: 'Company & Business',
            icon: Building,
            links: [
                { name: 'About Us', path: '/about', description: 'Company overview' },
                { name: 'Careers', path: '/careers', description: 'Employment opportunities' },
                { name: 'Partners', path: '/partners', description: 'Business partnerships' },
                { name: 'Press & Media', path: '/press', description: 'News and press releases' },
                { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
            ]
        },
        {
            title: 'Resources & Content',
            icon: FileText,
            links: [
                { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
                { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
                { name: 'API Reference', path: '/api', description: 'API documentation' },
                { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' },
                { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
                { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
            ]
        },
        {
            title: 'Support & Help',
            icon: HelpCircle,
            links: [
                { name: 'Help Center', path: '/help-center', description: 'Comprehensive help resources' },
                { name: 'FAQ', path: '/faq', description: 'Common questions and answers' },
                { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
                { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
                { name: 'Status Page', path: '/status', description: 'Service status updates' },
                { name: 'Support Ticket', path: '/support-ticket', description: 'Submit support requests' },
            ]
        },
        {
            title: 'Tools & Applications',
            icon: Settings,
            links: [
                { name: 'AI Tools', path: '/ai-tools', description: 'AI-powered applications' },
                { name: 'Analytics Dashboard', path: '/analytics', description: 'Data insights and metrics' },
                { name: 'Project Management', path: '/projects', description: 'Project tracking tools' },
                { name: 'Time Tracking', path: '/time-tracking', description: 'Time management tools' },
                { name: 'Reporting', path: '/reporting', description: 'Business intelligence reports' },
            ]
        },
        {
            title: 'Security & Compliance',
            icon: Shield,
            links: [
                { name: 'Security Overview', path: '/security', description: 'Security measures and policies' },
                { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance information' },
                { name: 'Privacy Policy', path: '/privacy', description: 'Data protection policies' },
                { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
                { name: 'GDPR', path: '/gdpr', description: 'Data protection regulations' },
            ]
        },
        {
            title: 'Global & Local',
            icon: Globe,
            links: [
                { name: 'Global Services', path: '/global', description: 'Worldwide service coverage' },
                { name: 'Local Support', path: '/local-support', description: 'Regional assistance' },
                { name: 'International', path: '/international', description: 'Cross-border solutions' },
                { name: 'Regional Offices', path: '/offices', description: 'Office locations worldwide' },
            ]
        },
        {
            title: 'Communication',
            icon: MessageSquare,
            links: [
                { name: 'Contact Us', path: '/contact', description: 'Get in touch' },
                { name: 'Support Chat', path: '/chat', description: 'Live chat support' },
                { name: 'Newsletter', path: '/newsletter', description: 'Stay updated' },
                { name: 'Social Media', path: '/social', description: 'Follow us online' },
                { name: 'Feedback', path: '/feedback', description: 'Share your thoughts' },
            ]
        },
        {
            title: 'Featured & Special',
            icon: Star,
            links: [
                { name: 'Featured Services', path: '/featured', description: 'Highlighted offerings' },
                { name: 'Special Offers', path: '/offers', description: 'Limited-time deals' },
                { name: 'Premium Solutions', path: '/premium', description: 'Advanced service tiers' },
                { name: 'Custom Solutions', path: '/custom', description: 'Tailored services' },
            ]
        }
    ];

    return (
        <>
            <SEO 
                title="Sitemap - Zion Tech Group" 
                description="Complete navigation guide for Zion Tech Group's website. Find all pages, services, and resources." 
                keywords="sitemap, navigation, Zion Tech Group, website structure" 
                canonical="https://ziontechgroup.com/sitemap" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                            Sitemap
                        </h1>
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                            Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
                            technology solutions, resources, and company information.
                        </p>
                    </div>

                    {/* Sitemap Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {sitemapSections.map((section) => (
                            <Card key={section.title} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-zion-cyan/20 p-2 rounded-lg">
                                            <section.icon className="h-5 w-5 text-zion-cyan" />
                                        </div>
                                        <CardTitle className="text-lg text-white">{section.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="space-y-3">
                                        {section.links.map((link) => (
                                            <div key={link.name} className="group">
                                                <Link
                                                    to={link.path}
                                                    className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                                                >
                                                    <h3 className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-1">
                                                        {link.name}
                                                    </h3>
                                                    <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                                                        {link.description}
                                                    </p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Quick Navigation */}
                    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Quick Navigation
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/" className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30">
                                <Home className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                                <span className="text-sm text-white">Home</span>
                            </Link>
                            <Link to="/services" className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30">
                                <Briefcase className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                                <span className="text-sm text-white">Services</span>
                            </Link>
                            <Link to="/contact" className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30">
                                <MessageSquare className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                                <span className="text-sm text-white">Contact</span>
                            </Link>
                            <Link to="/about" className="text-center p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30">
                                <Building className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                                <span className="text-sm text-white">About</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
