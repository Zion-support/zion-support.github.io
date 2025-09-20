import React, { useState } from 'react';
export /**;
import { motion, AnimatePresence  } from 'framer-motion';
;
export default function Page("props": "any) {;
",;
  {;
";
    "icon": "<FileText className="w-8 h-8"   />",";
    "title": "Plan",";
    "description": "Collaborate on project requirements, timeline, and deliverables",";
    "color": "from-zion-blue to-zion-blue-dark",";
    "bgColor": "from-zion-blue/20 to-zion-blue-dark/20",;
    "details": "[";
      "Interactive project planning"",";
      "Timeline optimization",";
      "Resource allocation",";
      "Risk assessment";
    ],";
    "duration": "4-8 hours",";
    "success": "90% on-time delivery";
  },;
  {;
";
    "icon": "<Rocket className="w-8 h-8"   />",";
    "title": "Execute",";
    "description": "Watch your vision come to life with our expert execution",";
    "color": "from-zion-cyan-light to-zion-cyan",";
    "bgColor": "from-zion-cyan-light/20 to-zion-cyan/20",;
    "details": "[";
      "Agile development process"",";
      "Regular progress updates",";
      "Quality assurance",";
      "Performance monitoring";
    ],";
    "duration": "1-4 weeks",";
    "success": "99% quality score";
  },;
  {;
";
    "icon": "<CheckCircle className="w-8 h-8"   />",";
    "title": "Deliver",";
    "description": "Receive your completed project with ongoing support and maintenance",";
    "color": "from-zion-purple-light to-zion-purple",";
    "bgColor": "from-zion-purple-light/20 to-zion-purple/20",;
    "details": "[";
      "Comprehensive testing"",";
      "Documentation delivery",;";
      "Training and handover",;";
      "Post-launch support";
    ],;";
    "duration": "Ongoing",;";
    "success": "100% client retention"};
];
;
const stats = [;";
  { "icon": "<Clock className="w-6 h-6"   />", "value": "3x Faster", "label": "Project Delivery" },;";
  { "icon": "<Target className="w-6 h-6"   />", "value": "99.9%", "label": "Success Rate" },;";
  { "icon": "<TrendingUp className="w-6 h-6"   />", "value": "50%", "label": "Cost Reduction" },;";
  { "icon": "<Award className="w-6 h-6"   />", "value": "1000+", "label": "Projects Completed" };];
;
  const [hoveredStep, setHoveredStep] = useState < number | null> (null) ;
  const [activeStep, setActiveStep] = useState < number> (0) ;
;
      "transition": "{;
        "staggerChildren": 0.2",;
        "delayChildren": "0.1"}}};
;
  const statsVariants = {;
  "hidden": "{ "opacity": 0",;
  "scale": "0.8;
"},;
    "visible": "{;
      "opacity": 1",;      "scale": "1",;
      "transition": "{;
        "duration": 0.5",;";
        "ease": "easeOut"}}};
  return (";
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">;
      {/* Enhanced background pattern */}";
      <div className="absolute inset-0 opacity-5">";
        <div className="absolute inset-0" style="{{{;
          "backgroundImage": "`radial-gradient(circle at 50% 50%; "backgroundSize": '40px 40px'"}}"}  />;
      </div>;
      {/* Floating decorative elements */}";
      <div className="absolute inset-0">;
        <motion.div";
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30";
          animate={{ "rotate": "36 0 "}}
          transition = {;
  { "duration": "2 0", "repeat": "Infinit y",;
  "ease": "linear";
}}
        />;
        <motion.div";
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30";
          animate={{ "rotate": "-360 "}}
          transition = {;
  { "duration": "2 5", "repeat": "Infinit y",;
  "ease": "linear";
}}
        />;
        <motion.div";
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20";
          animate = {;
  { "scale": "[1", 1.2,;
  1];
}}
          transition = {;
  { "duration": "3", "repeat": "Infinit y",;
  "ease": "easeInOut";
}}
        />;
      </div>;
";
      <div className="container mx-auto px-4 relative z-10">;
        <motion.div";
          className="text-center mb-20";
          initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6 "}}
        >";
          <h2 className="text-4xl "md": "tex t-5xl "lg": tex t-6xl font-bold text-white mb-6">";
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>;
          </h2>";
          <p className="text-zion-slate-light text-lg "md": tex t-xl max-w-4xl mx-auto leading-relaxed">;
            Our streamlined process ensures your project success from concept to completion.Experience the Zion difference with our proven methodology.</p>;
        </motion.div>;
        {/* Stats section */"}
        <motion.div";
          className="grid grid-cols-2 "md": "gri d-cols-4 gap-6 mb-16 max-w-4xl mx-auto";
          variants={containerVariants"}";
          initial="hidden";
          whileInView="visible";
          viewport={{ "once": "tru e "}}
;
          {stats.map((stat, index) => (;
            <motion.div;
              key={index}
              variants={statsVariants}
              className="text-center p - 4 rounded-xl bg-zion - blue - dark / 40 backdrop - blur - sm border border-zion - blue -light / 20";
              <div className="text-zion - cyan mb-2 flex justify -center">                {stat.icon}
              </div>";
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>";
              <div className="text-zion-slate-light text-sm">{stat.label}</div>;
            </motion.div>))}
        </motion.div>;
        <motion.div";
          className="relative";
          variants={containerVariants}";
          initial="hidden";
          whileInView="visible";
          viewport={{ "once": "tru e "}}
;
          {/* Enhanced connection line */}";
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden "lg": "bloc k">";
            <motion.div className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple" initial={{ "width": "0%" "}} whileInView={{ "width": "100%" }} viewport={{ "once": "tru e "}} transition = {;
  { "duration": "2",;
  "delay": "0.5;
          {/* Steps grid */"}";
          <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-5 gap-8 relative">;
            {steps.map((step", index) => (;
              <motion.div;
                key={index}
                variants={containerVariants}";
                className="relative group";
                onHoverStart={ () => setHoveredStep(index) }
                onHoverEnd={ () => setHoveredStep(null) }
                whileHover={{ "y": "-8 "}}
                transition = {;
";
  { "type": "spring",;
  "stiffness": "30 0;
"}}
              >";
                <div className="text-center h-full">;
                  {/* Step number with enhanced styling */}";
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-"hover": "shado w-zion-cyan/25 transition-all duration-300">;
                    {index + 1"}
                  </div>;
                  {/* Icon with enhanced background */}`;
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-"hover": "shado w-xl transition-all duration-300 group-"hover": scal e-110`"}>";
                    <div className="text-white">;
                      {step.icon}
                    </div>
                  </div>
                  {/* Title and description */}"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: tex t-zion-cyan transition-colors">
                    {step.title}
                  "
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>;
                  {/* Duration and success rate */}";
                  <div className="space-y-2 mb-4">";
                    <div className="flex items-center justify-center gap-2 text-zion-cyan/80 text-xs">";
                      <Clock className="w-3 h-3"  />;
                      <span>{step.duration}</span>;
                    </div>";
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">";
                      <Target className="w-3 h-3"  />                      <span>{step.success}</span>;
                    </div>;
                  </div>;
                  {/* Interactive details on hover */}
                  <AnimatePresence>;
                    {hoveredStep === index && (<motion.div;
                        className="mt-4 p - 4 rounded-xl bg-zion - blue - dark / 60 backdrop - blur - sm border border-zion -cyan / 30"                        initial = {;
  { "opacity": "0", "height": "0",;
  "y": "1 0;
"}}
                        animate = {;
";
  { "opacity": "1", "height": "auto",;
  "y": "0;
"}}
                        exit = {;
  { "opacity": "0", "height": "0",;
  "y": "1 0;
"}}
                        transition={{ "duration": "0.3 "}}
                      >;
                        <h4 className="text-zion - cyan font - semibold text-sm mb-3">Key "Features": "</h4>;
                        <div className="space - y-2">;
                          {step.details.map((detail", idx) => (<motion.div;
                              key={idx}
                              className="flex items - center gap-2 text-zion - slate - light / 80 text-xs"                              initial = {;
  { "opacity": "0",;
  "x": "-10;
"}}
                              animate = {;
  { "opacity": "1",;
  "x": "0;
"}}
                              transition={{ "delay": "id x * 0.1 "}}
                            >";
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>;
                              <span>{detail}</span>;
                            </motion.div>) ) }
                        </div>;
                      </motion.div>) }
                  </AnimatePresence>;
                  {/* Hover indicator */}
                  <div className="mt-4 text-zion - cyan / 60 text-xs">                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
                  </div>;
                </div>;
                {/* Hover details */}
                <AnimatePresence>;
                  {hoveredStep === index && (;
                    <motion.div";
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-zion-blue-dark rounded-xl border border-zion-cyan/30 shadow-2xl shadow-zion-cyan/20 backdrop-blur-sm z-10 min-w-[280px]";
                      initial = {;
  { "opacity": "0", "y": "1 0",;
  "scale": "0.95;
"}}
                      animate = {;
  { "opacity": "1", "y": "0",;
  "scale": "1;
"}}
                      exit = {;
  { "opacity": "0", "y": "1 0",;
  "scale": "0.95;
"}}
                      transition={{ "duration": "0.2 "}}
";
                      <h4 className="text-white font-semibold mb-3">Key "Features": "</h4>";
                      <ul className="space-y-2">;
                        {step.details.map((detail", idx) => (";
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">";
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>;
                            {detail}
                          </li>) ) }
                      </ul>;
                      {/* Arrow pointer */}";
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-blue-dark border-l border-t border-zion-cyan/30 rotate-45"></div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </motion.div>) ) }
          </div>;
        </motion.div>;
        {/* Call to action */}
        <motion.div";
          className="text-center mt-16";
          initial = {;
  { "opacity": "0",;
  "y": "2 0 "}}          whileInView = {;
  { "opacity": "1",;
  "y": "0 "}}          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.5 "}}
        >";
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">";
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">"              <p className="text-white text-lg mb-4">;
                Ready to start your project journey?;
              </p>";
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark "hover": "fro m-zion-purple-light "hover": t o-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform "hover": scal e-105 "hover": shado w-lg "hover": shado w-zion-purple/25">;
                Get Started Today";
                <Rocket className="w-5 h-5"  />              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) "}
;
}
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</div>;
</motion>;
</motion>;
</motion>;
</div>
