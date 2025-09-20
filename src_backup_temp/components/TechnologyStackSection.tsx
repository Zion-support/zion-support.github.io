<<<<<<< HEAD

export default TechnologyStackSection;
=======
import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function TechnologyStackSection("props": "any) {export function TechnologyStackSection("props": any) {;
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
            Technology Stack;
          </h2>";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Built with cutting-edge technologies and industry best practices.Our comprehensive tech stack ensures scalability", security, and performance.</p>;
        </motion.div>;
        {/* Technology Categories */}";
        <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-8 mb-16">;
          {technologyCategories.map((category", index) => (;
            <motion.div;
              key={category.category}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6";
              initial={{ "opacity": "0", "y": "3 0 "}}
              whileInView={{ "opacity": "1", "y": "0 "}}
              viewport={{ "once": "tru e "}}
              transition={{ "duration": "0.6", "delay": "inde x * 0.1 "}}
            >";
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">;
                <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>";
                  <span className="text-sm">⚡</span>;
                </div>;
                {category.category}
              

export default TechnologyStackSection;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
