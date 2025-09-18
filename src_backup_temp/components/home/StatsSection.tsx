import React, { useState, useEffect } from 'react';
import { motion, useInView  } from 'framer-motion';
import { useRef  } from 'react';
import { TrendingUp, Award, Users, Clock  } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  description: string;
  avatar: string;
icon: React.ComponentType<{ className?: string}>;
  color: string}
;
  useEffect(() => {;
    if (isInView) {;
      const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));

interface StatsSectionProps extends React.PropsWithChildren<{}> {
  stats: Sta t[]}
const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: tru e }
    );
  const [counts, setCounts] = useState<any>({}
    );
  useEffect(() => {
    if (isInView) {
      const targetNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
          const suffix = stat.number.replace(/[0-9]/g, '');
          let current = 0;
          const increment = targetNumber / 50;
          const countTimer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
              current = targetNumber;
              clearInterval(countTimer);
            }

            setCounts(prev => ({
              ...prev,
              [stat.label]: Math.floor(current)
            }));
          }, 50);
        }
    );
      }, 500);
      return () => clearTimeout(timer)}
  }, [isInView, stats]);
;
  return (;
    <section className = "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/80 to-zion-slate-dark" role="region" aria-labelledby="stats-heading">;
      <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8">;
        <motion.div;
          className="text-center mb-16";
          initial = {;
  { "opacity": 0",;
  "y": "3 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition={{ "duration": "0.8 "}}
          viewport={{ "once": "tru e "}}
;
          <h2 id="stats-heading" className="text-4xl "md": "tex t-5xl font-bold text-white mb-6">;
            Trusted by <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Industry Leaders</span>;
          </h2>;
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
            Our track record speaks for itself - delivering exceptional results across diverse industries;
          </p>;
        </motion.div>;
        <div ref={ref"} className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-4 gap-8">;
          {stats.map((stat", index)  => (;
            <motion.div;
              key={stat.label}
              className="group relative text-center p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl "hover": "borde r-zion-cyan/40 transition-all duration-500 "hover": shado w-2xl "hover": shado w-zion-cyan/20 overflow-hidden";
              initial = {;
  { "opacity": 0",;
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
              viewport={{ "once": "tru e "}}
              whileHover={{;
                "y": "-8",;
  "transition": "{ "duration": 0.3;
"}

  return (
    <section className = "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/80 to-zion-slate-dark" role="region" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4 sm: p x-6 lg: p x-8">
        <motion.div
          className="text-center mb-16"
          initial = {
  { opacity: 0,
  y: 3 0 
}}
          whileInView = {
  { opacity: 1,
  y: 0 

;
  return (;
    <section className = "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate-dark/80 to-zion-slate-dark" role="region" aria-labelledby="stats-heading">;
      <div className="container mx-auto px-4 sm: p x-6 lg: p x-8">;
        <motion.div;
          className="text-center mb-16";
          initial = {;
  { opacity: 0,;
  y: 3 0;
}}
          whileInView = {;
  { opacity: 1,;
  y: 0;

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: tru e }}
          <h2 id="stats-heading" className="text-4xl md: tex t-5xl font-bold text-white mb-6">
            Trusted by <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our track record speaks for itself - delivering exceptional results across diverse industries
          </p>
        </motion.div>
        <div ref={ref} className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">
          {stats.map((stat, index)  => (
            <motion.div
              key={stat.label}
              className="group relative text-center p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover: borde r-zion-cyan/40 transition-all duration-500 hover: shado w-2xl hover: shado w-zion-cyan/20 overflow-hidden"
              initial = {
  { opacity: 0,
  y: 3 0 
}}
              whileInView = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.6,
  delay: inde x * 0.1 
}}
              viewport={{ once: tru e }}
              whileHover={{
                y: -8,
  transition: { duration: 0.3 

              className="group relative text-center p-6 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover: borde r-zion-cyan/40 transition-all duration-500 hover: shado w-2xl hover: shado w-zion-cyan/20 overflow-hidden";
              initial = {;
  { opacity: 0,;
  y: 3 0;
}}
              whileInView = {;
  { opacity: 1,;
  y: 0;
}}
              transition = {;
  { duration: 0.6,;
  delay: inde x * 0.1;
}}
              viewport={{ once: tru e }}
              whileHover={{;
                y: -8,;
  transition: { duration: 0.3;

}
              }}
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 opacity-0 group-hover: opacit y-100 transition-opacity duration-500"  />
              {/* Icon container */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover: scal e-110 transition-transform duration-300 shadow-lg group-hover: shado w-xl group-hover: shado w-zion-cyan/30`}>;
                <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl group-hover: blu r-2xl transition-all duration-300"  />
              </div>
              {/* Animated number */}
              <motion.div
                className="relative text-4xl md: tex t-5xl font-bold text-white mb-2 group-hover: tex t-zion-cyan transition-colors duration-300"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition = {
  { duration: 0.5,
  delay: inde x * 0.1 + 0.5 
}}
                viewport={{ once: tru e }}
                transition = {;
  { duration: 0.5,;
  delay: inde x * 0.1 + 0.5;
}}
                viewport={{ once: tru e }}
;
                {counts[stat.label] || 0}

                {counts[stat.label] || 0}
                {stat.number.includes('%') ? '%' : stat.number.includes('+') ? '+' : ''}
              </motion.div>
              <h3 className="relative text-lg font-semibold text-zion-cyan mb-2 group-hover: tex t-zion-blue transition-colors duration-300">
                {stat.label}
              <p className="relative text-zion-slate-light text-sm leading-relaxed group-hover: tex t-zion-slate-light/90 transition-colors duration-300">
                {stat.description}
              </p>
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-500"  />
            </motion.div>;
          ))"};
        </div>;
      </div>;
    </section>;
  );
};
export default StatsSection;}}}}};
</motion>;
</motion>;
</motion>;
</any>;
</StatsSectionProps>;
</motion>
</motion>
</motion>
</any>
</StatsSectionProps>
