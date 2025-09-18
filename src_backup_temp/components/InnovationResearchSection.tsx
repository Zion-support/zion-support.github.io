<<<<<<< HEAD
import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function InnovationResearchSection("props": "any) {export function InnovationResearchSection("props": any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ";
          className="text-center mb-16";
          initial={{ "opacity": 0", "y": "2 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6 "}}
        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Innovation & Research;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Pushing the boundaries of technology through cutting-edge research",;
            breakthrough innovations, and collaborative partnerships with leading institutions.</p>;
        </motion.div>;
        {/* Innovation Metrics */}
        <motion.div;
          className="grid grid - cols - 2 "md": "gri d - cols - 4 gap-8 mb-16"          initial={{ "opacity": 0", "y": "3 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6", "delay": "0.2 "}}
        >;
          {innovationMetrics.map((metric, index) => (";
            <div key={metric.label} className="text-center">";
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">";
                <span className="text-2xl">{metric.icon}</span>;
              </div>";
              <div className="text-3xl font-bold text-blue-400 mb-2">{metric.value}</div>";
              <div className="text-gray-300 text-sm">{metric.label}</div>;
            </div>;
          ))}
        </motion.div>;
        {/* Research Areas */}
        <motion.div ";
          className="mb-16";
          initial={{ "opacity": "0", "y": "3 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6", "delay": "0.2 "}}
        >;
          {innovationMetrics.map((metric, index) => (";
            <div key={metric.label} className="text-center">";
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">";
                <span className="text-2xl">{metric.icon}</span>;
              </div>;
            )})}
        </motion.div>;
        {/* Research Areas */}
        <motion.div;
          className="mb-16";
          initial={{ "opacity": "0", "y": "3 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6", "delay": "0.2 "}}
        >;
          {innovationMetrics.map((metric, index) => (<div key={metric.label} className="text-center">;
              <div className="w-16 h-16 bg-gradient - to - br from - blue - 500 to - purple - 600 rounded-2xl flex items - center justify - center mx - auto mb-4">;
                <span className="text-2xl">{metric.icon}</span>;
              </div>) }) }
        </motion.div>;
        {/* Research Areas */}
        <motion.div;
          className="mb-16";          initial = {;
  { "opacity": "0",;
  "y": "3 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.4;
=======

const InnovationResearchSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InnovationResearchSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default InnovationResearchSection;
