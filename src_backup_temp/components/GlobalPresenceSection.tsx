<<<<<<< HEAD

export default GlobalPresenceSection;
=======
import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function GlobalPresenceSection("props": "any) {export function GlobalPresenceSection("props": any) {;
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
            Global Presence;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Serving clients worldwide with local expertise and global reach.Our distributed team ensures 24 / 7 support and cultural understanding.</p>;
        </motion.div>;
        {/* Global Statistics */"}
        <motion.div;
          className="grid grid - cols - 2 "md": "gri d - cols - 4 gap-8 mb-16"          initial = {;
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
  "delay": "0.2;
"}}
        > {globalStats.map ( (stat, index) => {;
            ;
            return (";
              <div key = {stat.label} className="text-center">";
                <div className="flex justify-center mb-3">";
                  <div className="p-2 bg-blue-100 rounded-lg">";
                    <IconComponent className="h-6 w-6 text-blue-600"   />                  </div>;
                </div>";
                <div className="text-2xl font-bold text-gray-900 mb-1">;
                  {stat.value}
                </div>";
                <div className="text-sm text-gray-600">{stat.label}</div>;
          initial={{ "opacity": "0", "y": "3 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6", "delay": "0.2 "}}
        >;
          {globalStats.map((stat, index) => (";
            <div key={stat.label} className="text-center">";
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">";
                <span className="text-2xl">{stat.icon}</span>;
              </div>;
            )})}
        </motion.div>;
        {/* Global Offices */}
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

export default GlobalPresenceSection;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
