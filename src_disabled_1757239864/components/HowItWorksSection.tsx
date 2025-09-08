    visible: {
      opacity: 1,      scale: 1
      transition: {
        duration: 0.5,"
        ease: "easeOut"}}}
  return ("
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}"
      <div className="absolute inset-0 opacity-5">"
        <div className="absolute inset-0" style = {
export function HowItWorksSection({
  className
  style
}: HowItWorksSectionProps) {
  const { t } = useTranslation()
  const steps = getSteps(t)
    icon: Check,
  },
]
import React, { useState } from 'react'
export /**
import { motion, AnimatePresence  } from 'framer-motion'
export default function Page() {
  {
"
    icon: <FileText className="w-8 h-8"  />,"
    title: "Plan","
    description: "Collaborate on project requirements, timeline, and deliverables","
    color: "from-zion-blue to-zion-blue-dark","
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    details: ["
      "Interactive project planning","
      "Timeline optimization","
      "Resource allocation","
      "Risk assessment" ],"
    duration: "4-8 hours","
    success: "90% on-time delivery"
},
  {
"
    icon: <Rocket className="w-8 h-8"  />,"
    title: "Execute","
    description: "Watch your vision come to life with our expert execution","
    color: "from-zion-cyan-light to-zion-cyan","
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    details: ["
      "Agile development process","
      "Regular progress updates","
      "Quality assurance","
      "Performance monitoring" ],"
    duration: "1-4 weeks","
    success: "99% quality score"
},
  {
"
    icon: <CheckCircle className="w-8 h-8"  />,"
    title: "Deliver","
    description: "Receive your completed project with ongoing support and maintenance","
    color: "from-zion-purple-light to-zion-purple","
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    details: ["
      "Comprehensive testing","
      "Documentation delivery","
      "Training and handover","
      "Post-launch support" ],"
    duration: "Ongoing","
    success: "100% client retention"}
]


const getSteps = (t: any,) => [


import React from 'react',
import { GradientHeading } from "./GradientHeading",
import { cn } from "@/lib/utils",
import { useTranslation } from "react-i18next",
interface HowItWorksSectionProps {
  className?: string,
  style?: React.CSSProperties
}

const getSteps = (t: any) => [
  {,
    title: t('how_it_works.post'),
    description: t('how_it_works.post_desc'),
    icon: Send},
  {

}

const getSteps = null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery and maximum value for your investment.
          </p>
        </div>
  return (
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>




    title: t($2);
    description: t($2);
    icon: Search},
  {
    title: t($2);
    description: t($2);
    icon: Handshake},
  {
    title: t($2);
    description: t($2);
    icon: Check}],

export function HowItWorksSection({ className, style }: HowItWorksSectionProps) {
  const { t } = useTranslation($2);
  const steps = getSteps($2);
  return (
    <section className="{cn("py-20" bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.how_it_works_subtitle')}
          </p>
        </div>

import { FileText, Search, Handshake, Check  } from 'lucide-react';
const HowItWorksSection: React.FC = () => {const steps = [;
    {number: '01',title: 'Consultation',description: 'We start with a detailed consultation to understand your business needs and challenges.',icon: <FileText className="w-8 h-8" />;
    },{number: '02',title: 'Strategy & Planning',description: 'Our experts develop a customized strategy and implementation plan tailored to your goals.',icon: <Search className="w-8 h-8" />;
    },{number: '03',title: 'Implementation',description: 'We implement the solution with minimal disruption to your existing operations.',icon: <Handshake className="w-8 h-8" />;
    },{number: '04',title: 'Support & Optimization',description: 'Ongoing support and continuous optimization to ensure maximum value and performance.',icon: <Check className="w-8 h-8" />;
    }
  ];return (<section className="py-16 px-4 bg-white">;
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>;
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Our proven process ensures successful implementation and maximum value from your investment.;
          </p>;
        </div>;

        <div className='relative'>;
          <div className='absolute left-4 md:left-1/2 top-0 h-full w-0 && 0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden'></div>;

          <div className='space-y-12 md:space-y-0'>;
            {steps && steps.map((step, index) => (;

              <div
                key={step && step.title}                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } relative`}>;
                <div className='md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right'>;
                  {index % 2 === 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>;
                    </div>;
                  ) : null}

        duration: 0.5, ";
        ease: "ease_out"}}}
  return (";
    <section className="py - 20 bg - gradient - to - br from - zion - blue via - zion - slate - dark to - zion - blue - dark relative overflow - hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset - 0 opacity - 5">";
        <div className="absolute inset - 0" style = {
export /**
 * HowItWorksSection - Function description
 */
function HowItWorksSection() {
  const { t } = use_translation ();
  const steps = get_steps (t);
  return (
    <section className={cn ('py - 20 bg - zion - blue', class_name)} style={style}>;
      <div className='container mx - auto px - 4'>;
        <div className='text - center mb - 16'>;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className='text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto'>            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
  return (
    <section className={cn ("py - 20 bg - zion - blue", class_name)} style={style}>;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 16">;
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
            {t ('home.how_it_works_subtitle')}
          </p>;
        </div>;
        <div className='relative'>;
          <div className='absolute left - 4 md:left - 1/2 top - 0 h - full w - 0.5 bg - gradient - to - b from - zion - purple via - zion - cyan to - zion - purple - light transform -translate - x-1 / 2 md:block hidden'></div>;
          <div className='space - y-12 md:space - y-0'>;
            {steps.map ((step, index) => (
              <div;
                key={step.title}                className={`flex flex - col md:flex - row items - center ${
                  index % 2 === 0 ? 'md:flex - row - reverse' : '';
                } relative`}
              >;
                <div className='md:w - 1/2 mb - 6 md:mb - 0 md:px - 12 text - center md:text - right'>;
                  {index % 2 === 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}
                      </p>;
                    </div>) : null}
                </div>;
                <div className='relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0'>;
                  <step.icon className='w - 6 h - 6 text - zion - cyan' />;
                </div>;
                <div className='md:w - 1/2 md:px - 12 text - center md:text - left'>;

                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;
                        {step.title}
                      </h3>;
                      <p className='text - zion - slate - light'>;
                        {step.description}

                </div>;
                <div className='relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0'>;
                  <step && step.icon className='w-6 h-6 text-zion-cyan' />;
                </div>;

                <div className='md:w-1/2 md:px-12 text-center md:text-left'>;
                  {index % 2 !== 0 ? (;
                    <div>;
                      <h3 className='text-2xl font-bold text-white mb-3'>;
                        {step && step.title}
                      </h3>;
                      <p className='text-zion-slate-light'>;
                        {step && step.description}
                      </p>                    </div>                    </div>;



        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>
          


export default Component;

}
}
}
  );
}
                      </p>                    </div>                    </div>) : null}
                </div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
                <div className="relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0">;
                  <step.icon className="w - 6 h - 6 text - zion - cyan" />;
                </div>;
                <div className="md:w - 1/2 md:px - 12 text - center md:text - left">;
          <div className="space-y-12 md:space-y-0">,
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "",
                } relative`}
              >
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <div>,
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-zion-slate-light">{step.description}</p>
                    </div>
                  ) : null}
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0">
                  <step.icon className="w-6 h-6 text-zion-cyan" />
                </div>

                <div className="md:w-1/2 md:px-12 text-center md:text-left">
                  {index % 2 !== 0 ? (
                    <div>;
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;
                      <p className="text - zion - slate - light">{step.description}</p>;
                    </div>) : null}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
    </section>);
}
}
}
;
  )}export default HowItWorksSection;





}


export default HowItWorksSection;


import { FileText, Search, Handshake, Check } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Plan",
      description: "Collaborate on project requirements, timeline, and deliverables",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-600/20 to-blue-700/20",
      details: [
        "Interactive project planning",
        "Timeline optimization",
        "Resource allocation",
        "Risk assessment"
      ],
      duration: "4-8 hours",
      success: "90% on-time delivery"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Match",
      description: "Our AI finds the perfect talent and solutions for your needs",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-600/20 to-purple-700/20",
      details: [
        "AI-powered matching",
        "Skill assessment",
        "Compatibility analysis",
        "Quality verification"
      ],
      duration: "2-4 hours",
      success: "95% match accuracy"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Hire & Buy",
      description: "Connect directly with verified professionals and services",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-600/20 to-green-700/20",
      details: [
        "Direct communication",
        "Secure transactions",
        "Contract management",
        "Payment processing"
      ],
      duration: "1-2 days",
      success: "100% secure payments"
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Done",
      description: "Deliver exceptional results with ongoing support",
      color: "from-orange-600 to-orange-700",
      bgColor: "from-orange-600/20 to-orange-700/20",
      details: [
        "Project delivery",
        "Quality assurance",
        "Ongoing support",
        "Performance monitoring"
      ],
      duration: "Ongoing",
      success: "98% client satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you get the best results quickly and efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.bgColor} flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {/* Stats */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-700">{step.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="font-semibold text-green-600">{step.success}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
