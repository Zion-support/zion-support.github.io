import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function TeamExpertiseSection("props": "any) {];
;
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">;
      <div className="max - w-7xl mx - auto px-6">;
        <motion.div;
          className="text-center mb-16"          initial = {;
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
            Team Expertise;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Our team of certified professionals brings decades of combined experience;
            in cutting - edge technologies and proven methodologies.</p>;
        </motion.div>;
          initial = {;
  { "opacity": 0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.1;
"}}";
          className="grid grid-cols-2 "md": "gri d-cols-4 gap-8 mb-16";
        > {stats.map ( (stat", index) => {;
            ;
            return (";
              <div key = {stat.label} className="text-center">";
                <div className="flex justify-center mb-4">";
                  <div className="p-3 bg-blue-100 rounded-full">";
                    <IconComponent className="h-8 w-8 text-blue-600"   />                  </div>;
                </div>";
                <div className="text-3xl font-bold text-gray-900 mb-2">;
                  {stat.value}
                </div>";
                <div className="text-gray-600">{stat.label}</div>";
        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-8 mb-16">;
          {teamExpertise.map((expertise", index) => (;
            <motion.div;
              key={expertise.title}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center "hover": "borde r-blue-500/50 transition-all duration-300 "hover": shado w-lg "hover": shado w-blue-500/25 group";
              initial={{ "opacity": 0", "y": "3 0 "}}
              whileInView={{ "opacity": "1", "y": "0 "}}
              viewport={{ "once": "tru e "}}
              transition={{ "duration": "0.6", "delay": "inde x * 0.1 "}}
            >";
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-"hover": "scal e-110 transition-transform duration-300">";
                <span className="text-3xl">{expertise.icon"}</span>;
              </div>;
              <div className="text-4xl font - bold text-blue - 400 mb-3 group - "hover": "tex t-blue - 300 transition - colors duration -200">;
                {expertise.count"}
              </div>;

export default TeamExpertiseSection;
