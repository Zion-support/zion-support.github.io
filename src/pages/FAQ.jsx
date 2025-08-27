import React from 'react';

export default function FAQ() {
    const faqData = [
        {
            question: "What is Zion Tech Group?",
            answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with innovative companies, offering a comprehensive platform for AI services, tech talent, and specialized equipment."
        },
        {
            question: "How does the marketplace work?",
            answer: "Our marketplace operates as a two-sided platform where businesses can find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. All basic listings and connections are completely free."
        },
        {
            question: "What types of services are available?",
            answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud services, cybersecurity, and specialized IT onsite services."
        },
        {
            question: "How do I find the right talent for my project?",
            answer: "You can browse our talent directory, use our AI-powered matching system, post job listings, or request quotes for specific projects. Our platform includes detailed profiles, skill assessments, and verified reviews to help you make informed decisions."
        },
        {
            question: "What equipment and hardware is available?",
            answer: "Our marketplace includes specialized AI hardware, servers, networking equipment, development tools, and other tech equipment. We also feature Green IT solutions for sustainable technology practices."
        },
        {
            question: "Is there a cost to use the platform?",
            answer: "Basic access to our marketplace is completely free. This includes browsing listings, creating profiles, and making initial connections. Premium features and advanced tools are available through our enterprise plans."
        },
        {
            question: "How do you ensure quality and reliability?",
            answer: "We implement a comprehensive verification system including profile verification, skill assessments, client reviews, and dispute resolution processes. Our community-driven approach helps maintain high standards across the platform."
        },
        {
            question: "What support is available for users?",
            answer: "We provide 24/7 customer support through our chat system, email support, and comprehensive help center. Enterprise clients also receive dedicated account management and priority support."
        },
        {
            question: "Can I use Zion for both hiring and finding work?",
            answer: "Yes! Many users maintain both client and talent profiles, allowing them to hire for projects while also offering their own services. This flexibility makes Zion ideal for freelancers, agencies, and growing companies."
        },
        {
            question: "How do you handle payments and contracts?",
            answer: "We provide secure payment processing, milestone-based payment systems, and contract templates. Our platform supports various payment methods and includes built-in dispute resolution for project protection."
        },
        {
            question: "What makes Zion different from other platforms?",
            answer: "Zion is specifically designed for AI and high-tech industries, offering specialized tools, AI-powered matching, comprehensive equipment listings, and a focus on sustainable technology. Our free model makes advanced tech accessible to businesses of all sizes."
        },
        {
            question: "How can I get started on Zion?",
            answer: "Getting started is simple! Create a free account, complete your profile, and start exploring the marketplace. You can immediately browse listings, connect with professionals, or showcase your own services and expertise."
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Frequently Asked <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Questions</span>
                    </h1>
                    <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                        Find answers to the most common questions about Zion Tech Group and our marketplace platform
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl overflow-hidden">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-left text-white hover:text-zion-cyan transition-colors duration-300">
                                        <span className="text-lg font-medium">{item.question}</span>
                                        <svg 
                                            className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6">
                                        <p className="text-zion-slate-light leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-zion-slate-light mb-6">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="px-6 py-3 bg-zion-cyan text-white font-medium rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105"
                            >
                                Contact Support
                            </a>
                            <a 
                                href="/help" 
                                className="px-6 py-3 border border-zion-cyan/20 text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
                            >
                                Visit Help Center
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Additional Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a 
                            href="/docs" 
                            className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300 group"
                        >
                            <div className="text-zion-cyan text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
                            <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                            <p className="text-zion-slate-light text-sm">Comprehensive guides and technical documentation</p>
                        </a>
                        <a 
                            href="/training" 
                            className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300 group"
                        >
                            <div className="text-zion-cyan text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
                            <h3 className="text-lg font-bold text-white mb-2">Training</h3>
                            <p className="text-zion-slate-light text-sm">Learn how to use our platform effectively</p>
                        </a>
                        <a 
                            href="/community" 
                            className="p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 hover:shadow-xl hover:shadow-zion-cyan/20 transition-all duration-300 group"
                        >
                            <div className="text-zion-cyan text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                            <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                            <p className="text-zion-slate-light text-sm">Connect with other users and share experiences</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
