<<<<<<< HEAD

export default ServicesOverview;
=======
import {  import { motion  } from 'framer-motion';
 from 'lucide-react';
;
export function ServicesOverview(...args[]): "{;
      "icon": Hear t",;
      "color": 'from-zion-pink to-zion-purple',;
      "description": 'Healthcare artificial intelligence solutions',;
      "services": "INNOVATIVE_MICRO_SAAS_SERVICES_202 5.filter(s => s.category.includes('Healthcare'))"};
  ];
;
  return ();
    <div className="py-20 bg-futuristic relative overflow-hidden">;
      {/* Background effects */}";
      <div className="absolute inset-0 opacity-10">";
        <div className="cyber-grid w-full h-full"></div>;
      </div>;
";
      <div className="container-responsive relative z-10">;
        {/* Header */}
        <motion.div";
          className="text-center mb-16";
          initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition={{ "duration": "0.6 "}}
";
          <h1 className="heading-responsive font-bold mb-6">";
            <span className="text-gradient neon-text-cyan">Comprehensive Technology</span>;
            <br  />";
            <span className="text-white">Services Portfolio</span>;
          </h1>";
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">;
            Discover our complete range of innovative micro SAAS services, IT solutions, and AI platforms.From cutting - edge quantum computing to practical business applications, we provide the technology;
            solutions your business needs to thrive in the digital age.</p>;
        </motion.div>;
        {/* Service Categories Grid */}";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 "xl": gri d-cols-4 gap-6 mb-16">;
          {serviceCategories.map((category", index)  => (;
            <motion.div;
              key={category.id}";
              className="group";
              initial = {;
  { "opacity": "0",;
  "y": "3 0;
"}}
              whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
              transition = {;
  { "duration": "0.6",;
  "delay": "inde x * 0.1;
"}}
              whileHover={{ "y": "-10 "}}
";
              <Link to={`/services/${category.id}`} className="block">";
                <div className="card-futuristic h-full "hover": "borde r-zion-cyan/50 transition-all duration-300">;
                  {/* Category Icon */"}`;
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-"hover": "scal e-110 transition-transform duration-300`"}>";
                    <category.icon className="w-8 h-8 text-white" />;
                  </div>;

export default ServicesOverview;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
