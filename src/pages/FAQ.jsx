import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";

const faqData = [
  {
    question: "What services does Zion Tech Group offer?",
    answer: "We offer comprehensive AI and technology solutions including artificial intelligence consulting, cybersecurity services, cloud infrastructure, mobile app development, and custom software solutions tailored to your business needs."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply contact our team through our contact form or call us directly at +1 (302) 464-0950. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and more. Our AI and technology solutions are designed to be industry-agnostic and can be customized for any sector."
  },
  {
    question: "Do you offer remote support?",
    answer: "Yes, we provide comprehensive remote support for all our services. Our team can assist you from anywhere in the world, ensuring you get the help you need regardless of your location."
  },
  {
    question: "What AI technologies do you use?",
    answer: "We utilize cutting-edge AI technologies including machine learning, natural language processing, computer vision, and autonomous systems. Our solutions are built on the latest frameworks and are continuously updated with the newest advancements."
  },
  {
    question: "How secure are your solutions?",
    answer: "Security is our top priority. All our solutions include enterprise-grade security features, SOC2 compliance, and regular security audits. We follow industry best practices and maintain multiple security certifications."
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Absolutely! We specialize in seamless integration with existing systems. Our team will assess your current infrastructure and ensure our solutions work perfectly with your existing technology stack."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our services within the first 30 days, we'll work to resolve any issues or provide a full refund."
  },
  {
    question: "Can I change my plan mid-contract?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. We'll prorate any billing adjustments and ensure a smooth transition between plans."
  },
  {
    question: "What compliance standards do you meet?",
    answer: "We maintain SOC2 Type II, ISO 27001, and GDPR compliance. Our solutions are designed to meet the highest security and privacy standards required by regulated industries."
  },
  {
    question: "Do you provide compliance documentation?",
    answer: "Yes, we provide comprehensive compliance documentation including audit reports, security assessments, and compliance certificates. This documentation can be shared with your auditors and stakeholders."
  },
  {
    question: "How do you handle data privacy?",
    answer: "We follow strict data privacy protocols and are fully GDPR compliant. All data is encrypted, access is strictly controlled, and we never share your data with third parties without explicit consent."
  },
  {
    question: "What is your response time for support?",
    answer: "Our support team typically responds within 2 hours for email inquiries and within 15 minutes for phone calls. We also offer 24/7 emergency support for critical issues."
  },
  {
    question: "Do you provide training for your solutions?",
    answer: "Yes, we provide comprehensive training for all our solutions. This includes user training, administrator training, and ongoing support to ensure your team can effectively use and maintain the systems we implement."
  }
];

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group" 
        description="Find answers to common questions about Zion Tech Group's AI and technology services." 
        keywords="FAQ, questions, help, support, AI services" 
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
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
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
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
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="/help" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light hover:border-zion-purple text-white font-medium rounded-lg transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}