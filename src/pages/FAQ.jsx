import React from 'react';
<<<<<<< HEAD
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
<<<<<<< HEAD

=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
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
<<<<<<< HEAD

    return (
        <>
            <SEO 
                title="FAQ - Frequently Asked Questions" 
                description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform." 
                keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support" 
                canonical="https://ziontechgroup.com/faq"
            />
            <main className="min-h-screen bg-zion-slate-dark pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <GradientHeading>Frequently Asked Questions</GradientHeading>
                        <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
                            Find answers to the most common questions about Zion Tech Group and our marketplace platform
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-zion-cyan/20">
                                    <AccordionTrigger className="text-left text-white hover:text-zion-cyan px-6 py-4">
                                        <span className="text-lg font-medium">{item.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4">
                                        <p className="text-zion-slate-light leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
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
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    Contact Support
                                </a>
                                <a 
                                    href="/help-center" 
                                    className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan hover:bg-zion-cyan hover:text-white text-zion-cyan font-medium rounded-lg transition-all duration-300"
                                >
                                    Help Center
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
=======
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
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
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-zion-cyan/20 bg-zion-slate-dark/50 backdrop-blur-xl rounded-xl mb-4">
                                <AccordionTrigger className="text-left text-white hover:text-zion-cyan px-6 py-4">
                                    <span className="text-lg font-medium">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4">
                                    <p className="text-zion-slate-light leading-relaxed">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                
                <div className="mt-16 text-center">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-zion-slate-light mb-6">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:shadow-lg hover:shadow-zion-cyan/25 text-white font-medium rounded-lg transition-all duration-300">
                                Contact Support
                            </a>
                            <a href="/help" className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan/20 hover:border-zion-cyan/40 text-zion-cyan font-medium rounded-lg transition-all duration-300">
                                Help Center
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
    );
}
=======

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What services does Zion Tech Group offer?</h3>
            <p className="text-zion-slate-light">
              We offer comprehensive technology solutions including AI services, cybersecurity, cloud infrastructure, 
              digital transformation, quantum computing, blockchain solutions, and more.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">How can I get started with your services?</h3>
            <p className="text-zion-slate-light">
              Contact us through our contact form or call us at +1 302 464 0950. Our team will schedule a 
              consultation to understand your needs and provide a customized solution.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What are your pricing models?</h3>
            <p className="text-zion-slate-light">
              We offer flexible pricing models including project-based, subscription, and custom enterprise solutions. 
              Pricing varies based on the scope and complexity of your requirements.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
            <p className="text-zion-slate-light">
              Yes, we provide comprehensive ongoing support including 24/7 monitoring, maintenance, updates, 
              and technical assistance for all our solutions.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What industries do you serve?</h3>
            <p className="text-zion-slate-light">
              We serve a wide range of industries including healthcare, finance, manufacturing, retail, 
              education, government, and more. Our solutions are adaptable to any sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
