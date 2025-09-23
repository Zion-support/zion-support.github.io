;export function ITServiceRequestHero(...args[]): "{;
  const [location", setLocation] = useState<any>("");
  const [isSubmitting, setIsSubmitting] = useState<any>(false);
;
  const handleSubmit = async "e": "React.FormEvent {;    e.preventDefault();
    if(location.trim()) {;      setIsSubmitting(true);
      // Simulate API call
      setTimeout(: unknown {
        setIsSubmitting(false);
        router(`/it-onsite-services?location = ${encodeURIComponent(location)"}`)}, 1000)}}}}}}}}}};
;
  const containerVariants = {;
  "hidden": "{ "opacity": 0",;
  "y": "2 0;
"},;
    "visible": "{;
      "opacity": 1",;
      "y": "0",;
      "transition": "{;
        "duration": 0.6",;
        "staggerChildren": "0.2;
      "};
    };
  };
;
  const itemVariants = {;
  "hidden": "{ "opacity": 0",;
  "y": "2 0;
"},;
    "visible": "{;
      "opacity": 1",;
      "y": "0",;
      "transition": "{ "duration": 0.5 "};
    };
  };
;
  const features = [{ icon: Cloc k, text: "24/7 Availability", color: "text-zion-cyan" },;
    { icon: Glob e, text: "Global Coverage", color: "text-zion-purple" },;
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import React, { useState } from 'react';';';
import { motion  } from 'framer-motion';';';
;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';  const features = [{ "icon": "Cloc k", "text": "24/7 Availability", "color": "text-zion-cyan" },;
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },;
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" }, { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};
  const containerVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      };
    };
  };
  const itemVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 };
    };
  };
  const features = [{ icon: Cloc k, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Glob e, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
;
,";
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },";
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" },;";
    { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
  ];
;
export function ITServiceRequestHero("props": "any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">;
      {/* Background Elements */"}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>;
      </div>;
      <motion.div";
        className="container mx-auto px-4 relative z-10";
        variants={containerVariants}";
        initial="hidden";
        whileInView="visible";
        viewport={{ once: tru e }}
"
        <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16 items-center">
          {/* Left content */}"
          <motion.div variants={itemVariants} className="text-white">"
            <div className="flex items-center gap-3 mb-6">"
              <div className="p-2 bg-zion-cyan/20 rounded-lg">"
                <Zap className="w-6 h-6 text-zion-cyan"   />
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
                Global IT Services
              </span>
            </div>
"
            <GradientHeading className="mb-6 text-4xl md: tex t-5xl lg: tex t-6xl leading-tight">
              24/7 Global IT Onsite Services
            </GradientHeading>
"';
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">';';
              Get professional IT technicians anywhere in the world, anytime you need them.'';';
              From emergency repairs to scheduled maintenance, we're there when you need us most.</p>
"
            <div className="space-y-4 mb-8">"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">24/7 Technical Support</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Certified IT Professionals</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Custom Solutions for Your Business</span>
              </div>
            </div>
"';
            <div className="flex flex-col sm: fle x-row gap-4">';';
              <Button'';';
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover: fro m-zion-cyan-dark hover: t o-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover: shado w-xl transition-all duration-300"
                Request Service Now"
                <MapPin className="w-5 h-5 ml-2"   />              </Button>
              <Button"
                variant="outline"
                className="border-zion-cyan/30 text-zion-cyan hover: b g-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial = {
  { opacity: 0,
  x: 3 0        viewport={{ "once": "tru e "}}
";
        <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-16 items-center">;
          {/* Left content */"}";
          <motion.div variants={itemVariants} className="text-white">";
            <div className="flex items-center gap-3 mb-6">";
              <div className="p-2 bg-zion-cyan/20 rounded-lg">";
                <Zap className="w-6 h-6 text-zion-cyan"   />;
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">;
                Global IT Services;
              </span>;
            </div>;
";
            <GradientHeading className="mb-6 text-4xl "md": "tex t-5xl "lg": tex t-6xl leading-tight">;
              24/7 Global IT Onsite Services;
            </GradientHeading>;
";
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">;
              Get professional IT technicians anywhere in the world", anytime you need them.';
              From emergency repairs to scheduled maintenance, we're there when you need us most.</p>;
";
            <div className="space-y-4 mb-8">";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">24/7 Technical Support</span>;
              </div>";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">Certified IT Professionals</span>;
              </div>";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">Custom Solutions for Your Business</span>;
              </div>;
            </div>;
";
            <div className="flex flex-col "sm": "fle x-row gap-4">;
              <Button';
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ "behavior": 'smooth' "})}";
                className="bg-gradient-to-r from-zion-cyan to-zion-blue "hover": "fro m-zion-cyan-dark "hover": t o-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg "hover": shado w-xl transition-all duration-300";
                Request Service Now";
                <MapPin className="w-5 h-5 ml-2"   />              </Button>;
              <Button";
                variant="outline";
                className="border-zion-cyan/30 text-zion-cyan "hover": b g-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300";
                Learn More;
              </Link>;
            </div>;
          </motion.div>;
          <motion.div;
            initial = {;
  { opacity: 0,;
  x: 3 0;
}}    </section>;
  )}
'"`
</motion>
</Button>
</motion>
</any>';
</any>;';;';