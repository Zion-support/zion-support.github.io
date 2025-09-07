
import React from 'react';'
const HowItWorksSection = () => {
  const steps = [
    {'
      number: '01',''
      title: 'Consultation',''
      description: 'We start with a detailed consultation to understand your business needs and challenges.','
    },
    {'
      number: '02',''
      title: 'Strategy & Planning',''
      description: 'Our experts develop a customized strategy and implementation plan tailored to your goals.','
    },
    {'
      number: '03',''
      title: 'Implementation',''
      description: 'We implement the solution with minimal disruption to your existing operations.','
    },
    {'
      number: '04',''
      title: 'Support & Optimization',''
      description: 'Ongoing support and continuous optimization to ensure maximum value and performance.','
    },]
  ];

  return ('
    <section className="py-16 px-4 bg-white">"
</section>"
      <div className="container mx-auto max-w-6xl">"
</div>"
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>""
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">"
</p>
        </p>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>"
            <div key={index} className="text-center relative">"
</div>"
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">"
</div>
              </div>"
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>""
              <p className="text-gray-600">{step.description}</p>"
              {index < steps.length - 1 && ("
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>"
            </div>
        </div>
      </div>
    </section>"
    icon: <FileText className="w-8 h-8"  />,""
</FileText>"
    icon: <Rocket className="w-8 h-8"  />,""
</Rocket>"
    icon: <CheckCircle className="w-8 h-8"  />,""
</CheckCircle>"
  { icon: <Clock className="w-6 h-6"  />, value: "3x Faster", label: "Project Delivery" },""
</Clock>"
  { icon: <Target className="w-6 h-6"  />, value: "99.9%", label: "Success Rate" },""
</Target>"
  { icon: <TrendingUp className="w-6 h-6"  />, value: "50%", label: "Cost Reduction" },""
</TrendingUp>"
  { icon: <Award className="w-6 h-6"  />, value: "1000+", label: "Projects Completed" };]"
</Award>)
  const [hoveredStep, setHoveredStep] = useState < number | null> (null)
  const [activeStep, setActiveStep] = useState < number> (0)
      transition: {,
  staggerChildren: 0.2;
        delayChildren: 0.1}}}
  const statsVariants = {
  hidden: { opacity: 0;,
  scale: 0.8;
}"
import React from 'react';''
import { GradientHeading } from './GradientHeading';''
import { Check, Handshake, Search, Send } from 'lucide-react';''
import { cn } from '@/lib / utils';''
import { use_translation } from 'react - i18next';'
interface HowItWorksSectionProps {
  // TODO: Implement
}
  class_name?: string;
  style?: React.CSSProperties;
const get_steps = (t: any, ) =>: any [;
  {'
    title: t ('how_it_works.post'),''
    description: t ('how_it_works.post_desc'),'
    icon: Send,
  },
  {'
    title: t ('how_it_works.match'),''
    description: t ('how_it_works.match_desc'),'
    icon: Search,
  },
  {'
    title: t ('how_it_works.hire_buy'),''
    description: t ('how_it_works.hire_buy_desc'),'
    icon: Handshake,
  },
  {'
    title: t ('how_it_works.done'),''
    description: t ('how_it_works.done_desc'),'
    icon: Check,
  },]
];'
import React, { useState } from 'react';'
export /**;'
import { motion, AnimatePresence  } from 'framer-motion';'
export default /**
 * Page - Function description;
 */
function Page() {
  {'
";""
    icon: <FileText className="w - 8 h - 8"  />, ";"
</FileText>"
    icon: <Rocket className="w - 8 h - 8"  />, ";"
</Rocket>"
    icon: <CheckCircle className="w - 8 h - 8"  />, ";"
</CheckCircle>"
  { icon: <Clock className="w - 6 h - 6"  />, value: "3x Faster", label: "Project Delivery" }, ";"
</Clock>"
  { icon: <Target className="w - 6 h - 6"  />, value: "99.9%", label: "Success Rate" }, ";"
</Target>"
  { icon: <TrendingUp className="w - 6 h - 6"  />, value: "50%", label: "Cost Reduction" }, ";"
</TrendingUp>"
  { icon: <Award className="w - 6 h - 6"  />, value: "1000+", label: "Projects Completed" }];"
</Award>
  const [hovered_step, setHoveredStep] = useState < number | null> (null);
  const [active_step, setActiveStep] = useState < number> (0);
      transition: {,
  stagger_children: 0.2,
        delay_children: 0.1}}}
  const stats_variants = {
  hidden: { opacity: 0,
  scale: 0.8;
},
    visible: {,
  opacity: 1,      scale: 1;,
  transition: {


const getSteps = (t: any,) => [

"
import React from 'react',''
import { GradientHeading } from "./GradientHeading",""
import { Check, Handshake, Search, Send } from 'lucide-react'''
import { cn } from "@/lib/utils",""
import { useTranslation } from "react-i18next","
interface HowItWorksSectionProps {
  // TODO: Implement
}
  className?: string,
  style?: React.CSSProperties;
}


const getSteps = (t: any) => [


  {
"
    title: t('how_it_works.post'),''
    description: t('how_it_works.post_desc'),'
    icon: Send},
  {'
    title: t('how_it_works.match'),''
    description: t('how_it_works.match_desc'),'
    icon: Search},
  {'
    title: t('how_it_works.hire_buy'),''
    description: t('how_it_works.hire_buy_desc'),'
    icon: Handshake},
  {'
    title: t('how_it_works.done'),''
    description: t('how_it_works.done_desc'),'
  return ()'
    <section className={cn('py-20 bg-zion-blue', className)} style={style}>'
</section>'
      <div className='container mx-auto px-4'>'
</div>'
        <div className='text-center mb-16'>'
</div>'
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>''
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>"
</section>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="text-center mb-16">"
</div>"
          <GradientHeading>{t('home.how_it_works_title')}</GradientHeading>''
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">"
</p>
          </p>
        </div>
      return <div>Something went wrong.</div>;"
    icon: <FileText className="w-8 h-8"  />,";"
</FileText>"
    icon: <Rocket className="w-8 h-8"  />,";"
</Rocket>"
    icon: <CheckCircle className="w-8 h-8"  />,";"
</CheckCircle>"
  { icon: <Clock className="w-6 h-6"  />, value: "3x Faster", label: "Project Delivery" },";"
</Clock>"
  { icon: <Target className="w-6 h-6"  />, value: "99 && 99.9%", label: "Success Rate" },";"
</Target>"
  { icon: <TrendingUp className="w-6 h-6"  />, value: "50%", label: "Cost Reduction" },";"
</TrendingUp>]"
  { icon: <Award className="w-6 h-6"  />, value: "1000+", label: "Projects Completed" };];"
</Award>
  const [hoveredStep, setHoveredStep] = useState < number | null> (null) ;
  const [activeStep, setActiveStep] = useState < number> (0) ;
      transition: {;,
  staggerChildren: 0 && 0.2,;
        delayChildren: 0 && 0.1}}};
  const statsVariants = {;
  hidden: { opacity: 0,;
  scale: 0 && 0.8;
},;
    visible: {;,
  opacity: 1,      scale: 1,;
      transition: {;,"
  duration: 0 && 0.5,";""
        ease: "easeOut"}}};""
  return (";""
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">;"
</section>"
      <div className="absolute inset-0 opacity-5">";"
</div>"
        <divclassName="absolute inset-0" style = {")
export function HowItWorksSection(): any ({
  className,
  style,)
}: HowItWorksSectionProps) {
  const { t } = useTranslation()
  const steps = getSteps(t)

  return ()"
    <section className={cn('py-20 bg-zion-blue', className)} style={style}>;'
</divclassName>'
      <div className='container mx-auto px-4'>;'
</div>'
        <div className='text-center mb-16'>;'
</div>'
          <GradientHeading>{t('home && home.how_it_works_title')}</GradientHeading>;''
          <p className='text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto'>            {t('home && home.how_it_works_subtitle')}'
</p>
          </p>;
        </div>;'
        <div className='relative'>  ;'
</div>'
    <section className={cn("py-20 bg-zion-blue", className)} style={style}>;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
        <div className="text-center mb-16">;"
</div>"
          <GradientHeading>{t('home && home.how_it_works_title')}</GradientHeading>;''
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className='relative'>;'
</div>'
          <div className='absolute left-4 md:left-1/2 top-0 h-full w-0 && 0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden'></div>;''
          <div className='space-y-12 md:space-y-0'>;'
</div>
              <div;
                key={step && step.title}                className={`flex flex-col md:flex-row items-center ${'
                  index % 2 === 0 ? 'md:flex-row-reverse' : '''
                } relative`}>;
</div>'
                <div className='md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right'>;'
</div>
                    <div>;
</div>'
                      <h3 className='text-2xl font-bold text-white mb-3'>;'
</h3>
                      </h3>;'
                      <p className='text-zion-slate-light'>;'
</p>
                      </p>;
                    </div>;'
    <section className="py - 20 bg - gradient - to - br from - zion - blue via - zion - slate - dark to - zion - blue - dark relative overflow - hidden">;"
</section>"
      <div className="absolute inset - 0 opacity - 5">";"
</div>"
        <div className="absolute inset - 0" style = {"
export /**
 * HowItWorksSection - Function description;
 */
function HowItWorksSection() {
  const { t } = use_translation ();
  const steps = get_steps (t);
  return ()"
    <section className={cn ('py - 20 bg - zion - blue', class_name)} style={style}>;'
</div>'
      <div className='container mx - auto px - 4'>;'
</div>'
        <div className='text - center mb - 16'>;'
</div>'
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;''
          <p className='text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto'>            {t ('home.how_it_works_subtitle')}'
</p>
          </p>;
        </div>;'
        <div className='relative'>;'
</div>'
    <section className={cn ("py - 20 bg - zion - blue", class_name)} style={style}>;"
</section>"
      <div className="container mx - auto px - 4">;"
</div>"
        <div className="text - center mb - 16">;"
</div>"
          <GradientHeading>{t ('home.how_it_works_title')}</GradientHeading>;''
          <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className='relative'>;'
</div>'
          <div className='absolute left - 4 md:left - 1/2 top - 0 h - full w - 0.5 bg - gradient - to - b from - zion - purple via - zion - cyan to - zion - purple - light transform -translate - x-1 / 2 md:block hidden'></div>;''
          <div className='space - y-12 md:space - y-0'>;'
</div>
              <div;
                key={step.title}                className={`flex flex - col md:flex - row items - center ${'
                  index % 2 === 0 ? 'md:flex - row - reverse' : '';'
                } relative`}
              >;
</div>'
                <div className='md:w - 1/2 mb - 6 md:mb - 0 md:px - 12 text - center md:text - right'>;'
</div>
                    <div>;
</div>'
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;'
</h3>
                      </h3>;'
                      <p className='text - zion - slate - light'>;'
</p>
                      </p>;
                    </div>) : null}
                </div>;'
                <div className='relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0'>;'
</div>'
                  <step.icon className='w - 6 h - 6 text - zion - cyan' />;'
</step>
                </div>;'
                <div className='md:w - 1/2 md:px - 12 text - center md:text - left'>;'
</div>
                    <div>;
</div>'
                      <h3 className='text - 2xl font - bold text - white mb - 3'>;'
</h3>
                      </h3>;'
                      <p className='text - zion - slate - light'>;'
</p>
                </div>;'
                <div className='relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-zion-blue-light border-2 border-zion-purple mx-4 md:mx-0'>;'
</div>'
                  <step && step.icon className='w-6 h-6 text-zion-cyan' />;'
</step>
                </div>;'
                <div className='md:w-1/2 md:px-12 text-center md:text-left'>;'
</div>
                    <div>;
</div>'
                      <h3 className='text-2xl font-bold text-white mb-3'>;'
</h3>
                      </h3>;'
                      <p className='text-zion-slate-light'>;'
</p>
                      </p>                    </div>                    </div>;'
        <div className="relative">"
</div>"
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden"></div>""
          <div className="space-y-12 md:space-y-0">"
</div>
              <div;
                key={step.title}
                className={`flex flex-col md:flex-row items-center ${"
                  index % 2 === 0 ? "md: flex-row-reverse" : "","
                } relative`}
              >
</div>"
                <div className="md:w-1/2 mb-6 md:mb-0 md:px-12 text-center md:text-right">"
</div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>""
                      <p className="text-zion-slate-light">{step.description}</p>"
                    </div>
                </div>;"
                      <h3 className="text-2xl font-bold text-white mb-3">{step && step.title}</h3>;""
                      <p className="text-zion-slate-light">{step && step.description}</p>;"
                    </div>;
                </div>;
              </div>;

          </div>;
        </div>;
      </div>;
    </section>;

                      </p>                    </div>                    </div>) : null}
                </div>;"
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;""
                      <p className="text - zion - slate - light">{step.description}</p>;"
                    </div>) : null}
                </div>;"
                <div className="relative z - 10 flex items - center justify - center w - 12 h - 12 rounded - full bg - zion - blue - light border - 2 border - zion - purple mx - 4 md:mx - 0">;"
</div>"
                  <step.icon className="w - 6 h - 6 text - zion - cyan" />;"
</step>
                </div>;"
                <div className="md:w - 1/2 md:px - 12 text - center md:text - left">;"
</div>
                    <div>;
</div>"
                      <h3 className="text - 2xl font - bold text - white mb - 3">{step.title}</h3>;""
                      <p className="text - zion - slate - light">{step.description}</p>;"
                    </div>) : null}
                </div>;
              </div>))}
          </div>;
        </div>;
      </div>;
    </section>);"

