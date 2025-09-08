

import React, { useState } from 'react';

import { GradientHeading } from "./GradientHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",
import { FileText } from 'lucide-react'

const faqs = $2;
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},
  {
    question: "What types of AI jobs can I find or post?",
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},
  {
    question: "What IT equipment is available to rent or buy?",
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},
  {
    question: "What is Zion's Green IT program?",
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},
  {
    question: "Are there fees for listing my products or services?",
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},
  {
    question: "How do I track my order status?",
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},
  {
    question: "How do I contact support?",
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],

export function FaqSection() {
  return (
    <section className="py-20 bg-zion-blue" id="faq">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Frequently Asked Questions</GradientHeading>,
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">,
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>

  );
}

import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in machine learning, cloud migration, system administration, and business process optimization."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during the discovery phase and keep you updated throughout the project."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support for all our clients. Our support includes monitoring, maintenance, troubleshooting, and continuous optimization. We also provide dedicated account managers for enterprise clients."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are tailored to meet the specific compliance and security requirements of each industry."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, regular security audits, and advanced threat detection. All our team members are security-certified and we follow industry best practices."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with virtually any technology stack. Our team will assess your current infrastructure and create a seamless integration plan."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope of work, timeline, and specific requirements. We provide detailed quotes after understanding your needs."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training includes documentation, hands-on sessions, and ongoing support."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">





  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger} from "@/components/ui/accordion",
import { GradientHeading } from './GradientHeading'
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from '@/components/ui/accordion'

  {
    question: 'How do I publish my AI product or service?'
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."
  }
  {
    question: 'What types of AI jobs can I find or post?'
    answer:
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.'
  }
  {
    question: 'What IT equipment is available to rent or buy?'
    answer:
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.'
  }
  {
    question: 'How does Zion ensure 24x7x365 availability?'
    answer:
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.'
  }
  {
    question: "What is Zion's Green IT program?"
    answer:
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.'
  }
  {
    question: 'Are there fees for listing my products or services?'
    answer:
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.'
  }
  {
    question: 'How do I track my order status?'
    answer:
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.'
  }
  {
    question: 'How do I contact support?'
    answer:
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.'
  }
]
export function FaqSection() {
import { GradientHeading } from './GradientHeading';
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger,;
} from '@/components/ui/accordion';
import { FileText } from 'lucide-react';
const faqs = [;
  {;
    question: 'How do I publish my AI product or service?',;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.",;
  },;
  {;
    question: 'What types of AI jobs can I find or post?',;
    answer:;
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',;
  },;
  {;
    question: 'What IT equipment is available to rent or buy?',;
    answer:;
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',;
  },;
  {;
    question: 'How does Zion ensure 24x7x365 availability?',;
    answer:;
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',;
  },;
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required.',;
  },;
  {;
    question: 'Are there fees for listing my products or services?',;
    answer:;
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',;
  },;
  {;
    question: 'How do I track my order status?',;
    answer:;
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',;
  },;
  {;
    question: 'How do I contact support?',;
    answer:;
      'Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime.',;
  },;
];
export function FaqSection() {;
  return (
  return (
    <section className='py-20 bg-zion-blue' id='faq'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>
            Find answers to common questions about AI product listings, IT
            equipment rentals, and datacenter maintenance services
          </p>
        </div>
        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>
          <div className='flex items-center mb-6'>
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-zion-purple/10'
              >
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-zion-slate-light'>                  {faq.answer}
                <AccordionContent className="text-zion-slate-light">
import {
  Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger} from "@/components/ui/accordion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { GradientHeading } from "./GradientHeading",
import {
    <section className='py-20 bg-zion-blue' id='faq'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <GradientHeading>Frequently Asked Questions</GradientHeading>;
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>;
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/ accordion';
  {
    question: 'How do I publish my AI product or service?',
    answer:;
      "Create an account, choose 'Post Your Product / Service for Free, ' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check.",
  },
  {
    question: 'What types of AI jobs can I find or post?',
    answer:;
      'You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more.',
  },
  {
    question: 'What IT equipment is available to rent or buy?',
    answer:;
      'Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options.',
  },
  {
    question: 'How does Zion ensure 24x7x365 availability?',
    answer:;
      'We use distributed data centers with automated failover and a global support team working in rotating shifts.',
  },
  {
    question: "What is Zion's Green IT program?",
    answer:;
      'Obsolete hardware is recycled or reused in line with WEEE, RoHS and e - Stewards standards, and we provide disposal certificates when required.',
  },
  {
    question: 'Are there fees for listing my products or services?',
    answer:;
      'No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility.',
  },
  {
    question: 'How do I track my order status?',
    answer:;
      'Check the Orders page in your account or ask our chatbot with your order ID for a quick update.',
  },
  {
    question: 'How do I contact support?',
    answer:;
      'Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime.',
  },
];
export /**
 * FaqSection - Function description
 */
function FaqSection() {
  return (
    <section className='py - 20 bg - zion - blue' id='faq'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='text - center mb - 12'>;
          <GradientHeading > Frequently Asked Questions</GradientHeading>;
          <p className='mt - 4 text - zion - slate - light text - xl max - w-2xl mx - auto'>;
            Find answers to common questions about AI product listings, IT;
            equipment rentals, and datacenter maintenance services;
          </p>;
        </div>;
const faqs = [
  {
    question: "How do I publish my AI product or service?"
    answer:
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
  {
    question: "What types of AI jobs can I find or post?"
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
  {
    question: "What IT equipment is available to rent or buy?"
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
  {
    question: "How does Zion ensure 24x7x365 availability?"
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
  {
    question: "What is Zion's Green IT program?"
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."}
  {
    question: "Are there fees for listing my products or services?"
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
  {
    question: "How do I track my order status?"
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
  {
    question: "How do I contact support?"
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}]



      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."}
  {
    question: "What types of AI jobs can I find or post?",
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."}
  {
    question: "What IT equipment is available to rent or buy?",
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."}
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."}
  {
    question: "What is Zion's Green IT program?",
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."}
  {
    question: "Are there fees for listing my products or services?",
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."}
  {
    question: "How do I track my order status?",
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."}
  {
    question: "How do I contact support?",
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}]
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."},
  {
    question: "What types of AI jobs can I find or post?",
    answer:
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."},
  {
    question: "What IT equipment is available to rent or buy?",
    answer:
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."},
  {
    question: "How does Zion ensure 24x7x365 availability?",
    answer:
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."},
  {
    question: "What is Zion's Green IT program?",
    answer:
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."},
  {
    question: "Are there fees for listing my products or services?",
    answer:
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."},
  {
    question: "How do I track my order status?",
    answer:
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."},
  {
    question: "How do I contact support?",
    answer:
      "Reach us via the chat widget, email support@ziontechgroup.com or call +1 302 464 0950 anytime."}],

xport function FaqSection() {
export function FaqSection() {
  return (
    <section className="py-20 bg-zion-blue" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>Frequently Asked Questions</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services
          </p>
        </div>
ursor/fix-website-loading-errors-and-merge-6662
  return (





        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">

        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>
ursor/fix-website-loading-errors-and-merge-6662
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem key={index} value={`item-${index}`} className="border-zion-purple/10">
                <AccordionTrigger className="text-white hover:text-zion-cyan">
import { GradientHeading } from "./GradientHeading";
        <div className='max - w-3xl mx - auto bg - zion - blue - light rounded - lg border border - zion - purple / 20 p - 6'>;
          <div className='flex items - center mb - 6'>;
            <FileText className='h - 6 w - 6 text - zion - cyan mr - 2' />;
            <h3 className='text - xl font - bold text - white'>Common Questions</h3>;
          </div>;
          <Accordion type='single' collapsible className='w - full'>;
            {faqs.map ((faq, index) => (
              <AccordionItem;
                key={index}
                value={`item-${index}`}
                className='border - zion - purple / 10';
              >;
                <AccordionTrigger className='text - white hover:text - zion - cyan'>                  {faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text - zion - slate - light'>                  {faq.answer}
                <AccordionContent className="text - zion - slate - light">;
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger } from '@/components/ui/ accordion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/ accordion';
  {
        <div className='max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6'>;
          <div className='flex items-center mb-6'>;
            <FileText className='h-6 w-6 text-zion-cyan mr-2' />;
            <h3 className='text-xl font-bold text-white'>Common Questions</h3>;
          </div>;
          <Accordion type='single' collapsible className='w-full'>;
            {faqs && faqs.map((faq, index) => (;
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-zion-purple/10'>;
                <AccordionTrigger className='text-white hover:text-zion-cyan'>                  {faq && faq.question}
                </AccordionTrigger>;
                <AccordionContent className='text-zion-slate-light'>                  {faq && faq.answer}
                <AccordionContent className="text-zion-slate-light">;
import {;
  Accordion;
  AccordionContent;
  AccordionItem;
  AccordionTrigger} from "@/components/ui/accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

  {;
    question: "How do I publish my AI product or service?",;
    answer:;
      "Create an account, choose 'Post Your Product/Service for Free,' fill in the details, and submit for review. Listings go live within 24 hours if they pass our quality check."};
  {;
    question: "What types of AI jobs can I find or post?",;
    answer:;
      "You can hire or apply for roles such as machine learning engineer, data scientist, AI researcher, computer vision expert and more."};
  {;
    question: "What IT equipment is available to rent or buy?",;
    answer:;
      "Servers, storage solutions, networking gear, power supplies and complete rack setups are offered with flexible purchase or rental options."};
  {;
    question: "How does Zion ensure 24x7x365 availability?",;
    answer:;
      "We use distributed data centers with automated failover and a global support team working in rotating shifts."};
  {;
    question: "What is Zion's Green IT program?",;
    answer:;
      "Obsolete hardware is recycled or reused in line with WEEE, RoHS and e-Stewards standards, and we provide disposal certificates when required."};
  {;
    question: "Are there fees for listing my products or services?",;
    answer:;
      "No. Listing products, services, jobs or CVs is free, with optional paid promotion for extra visibility."};
  {;
    question: "How do I track my order status?",;
    answer:;
      "Check the Orders page in your account or ask our chatbot with your order ID for a quick update."};
  {;
    question: "How do I contact support?",;
    answer:;
      "Reach us via the chat widget, email support@ziontechgroup && ziontechgroup.com or call +1 302 464 0950 anytime."}];
export function FaqSection() {;


  {
    question: "How do I publish my AI product or service?",
    answer:


export function FaqSection() {
  return (






        <div className="max-w-3xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-6">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-zion-cyan mr-2" />
            <h3 className="text-xl font-bold text-white">Common Questions</h3>
          </div>
import { ChevronDown, ChevronUp  } from 'lucide-react';
const FaqSection: React.FC = () => {const [openIndex, setOpenIndex]  = useState<number | null>(null)const faqs = [;
    {question: 'What services does Zion Tech offer?',answer: 'We offer comprehensive AI solutions, IT services, cloud migration, cybersecurity, data analytics, and digital transformation services to help businesses modernize and grow.';
    },{question: 'How long does implementation take?',answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.';
    },{question: 'Do you provide ongoing support?',answer: 'Yes, we offer 24/7 support for all our services. Our support includes monitoring, maintenance, updates, and technical assistance to ensure optimal performance.';
    },{question: 'What makes Zion Tech different?',answer: 'We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions, provide comprehensive support, and maintain a track record of successful implementations across various industries.';
    },{question: 'Do you work with small businesses?',answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our solutions are scalable and can be tailored to fit any budget and requirement.';
    },{question: 'How do you ensure data security?',answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, compliance with industry standards, and continuous monitoring to protect your data.';
    },{question: 'What industries do you serve?',answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and government. Our solutions are tailored to meet the specific compliance and security requirements of each industry.';
    },{question: 'Can you work with our existing systems?',answer: 'Absolutely! We specialize in integrating with existing systems and can work with virtually any technology stack. Our team will assess your current infrastructure and create a seamless integration plan.';
    },{question: 'What is your pricing model?',answer: 'We offer flexible pricing models including project-based, retainer, and subscription options. Pricing depends on the scope of work, timeline, and specific requirements. We provide detailed quotes after understanding your needs.';
    },{question: 'Do you offer training for our team?',answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training includes documentation, hands-on sessions, and ongoing support.';
    }
  ];const toggleFaq = (index: number) => {setOpenIndex(openIndex === index ? null : index)}return (<section className="py-16 px-4 bg-gray-50">;
      <div className="container mx-auto max-w-4xl">;
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>;
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Find answers to common questions about our services and solutions.;
          </p>;
        </div>;
        <div className="space-y-4">;
          {faqs.map((faq, index) => (<div;
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden";
            >;
              <button;
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors";
              >;
                <h3 className="text-lg font-semibold text-gray-900 pr-4">;
                  {faq.question}
                </h3>;
                {openIndex === index ? (<ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />;
                ) : (<ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />;
                )}
              </button>;
              {openIndex === index && (<div className="px-6 pb-4">;
                  <p className="text-gray-600 leading-relaxed">;
                    {faq.answer}
                  </p>;
                </div>;
              )}
            </div>;
          ))}
        </div>;
        <div className="mt-12 text-center">;
          <p className="text-gray-600 mb-4">;
            Still have questions? We're here to help!;
          </p>;
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">;
            Contact Us;
          </button>;
        </div>;
      </div>;
    </section>;
  )}export default FaqSection;
        </div>
      </div>
    </section>
  );
}

export default FaqSection;




        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zion-slate-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
