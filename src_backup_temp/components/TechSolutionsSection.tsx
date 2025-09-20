import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function TechSolutionsSection("props": "any) {;
export function TechSolutionsSection("props": any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ";
          className="text-center mb-16";
          initial = {;
  { "opacity": 0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6 "}}
        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Technology Solutions;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Comprehensive technology solutions designed to drive innovation",;
            enhance security, and accelerate your digital transformation journey.</p>;
        </motion.div>;
";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-8">;
          {techSolutions.map((solution", index) => (;
            <motion.div;
              key={solution.title}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 "hover": "borde r-blue-500/50 transition-all duration-300 "hover": shado w-lg "hover": shado w-blue-500/25 group";
              initial = {;
  { "opacity": 0",;
  "y": "3 0;
"}}
              whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
              viewport={{ "once": "tru e "}}
              transition = {;
  { "duration": "0.6",;
  "delay": "inde x * 0.1;
"}}
            >;
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-"hover": "scal e-110 transition-transform duration-300`"}>";
                <span className="text-3xl">{solution.icon}</span>;
              </div>;
              <h3 className="text-xl font - bold text-white mb-3 group - "hover": "tex t-blue - 400 transition - colors duration -200">;
                {solution.title"}
              </h3>;

export default TechSolutionsSection;
