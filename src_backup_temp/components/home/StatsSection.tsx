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

const StatsSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">StatsSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default StatsSection;
