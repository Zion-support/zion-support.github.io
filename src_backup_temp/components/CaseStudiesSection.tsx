import {  import { motion  } from 'framer-motion';
;
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function CaseStudiesSection("props": "any) {;
export function CaseStudiesSection("props": any) {;
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
            Success Stories;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Discover how we've helped businesses across industries achieve;
            remarkable results through innovative technology solutions.</p>;
        </motion.div>;
";
        <div className="grid grid-cols-1 "lg": gri d-cols-3 gap-8">;
          {caseStudies.map((study", index) => (;
            <motion.div;
              key={study.id}";
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden "hover": "borde r-blue-500/50 transition-all duration-300 "hover": shado w-lg "hover": shado w-blue-500/25";
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
            >";
              <div className="flex items-center mb-6">;
                <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color} mr-4`}>";
                  <span className="text-2xl">{study.logo}</span>;
                </div>;
                <div>";
                  <h3 className="text-xl font-bold text-gray-900">;
                    {study.comp}
                  "
                  <p className="text-gray-600 text-sm">{study.industry}</p>
                </div>
              </div>
"
              <div className="mb-6">"
                <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>"
                <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
"
                <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>"
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>
"
              <div className="mb-6">"
                <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>"
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => ("
                    <li key={resultIndex} className="flex items-center text-sm text-gray-700">"
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"   />                      {result}
                    </li>) ) }
                </ul>;
              </div>;
";
              <div className="flex items-center justify-between">";
                <div className="flex items-center text-sm text-gray-600">";
                  <Star className="h-4 w-4 text-yellow-500 mr-1"   />;
                  <span>5.0</span>"                  <span className="mx-2">•</span>;
                  <span>Verified Results</span>;
                </div>;
              </div>;
            </motion.div>) ) }
        </div>;
        <motion.div;
          className="mt-16 text-center"          initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
          whileInView = {;
  { "opacity": "1",;
  "y": "0;
"}}
          viewport={{ "once": "tru e "}}
          transition = {;
  { "duration": "0.6",;
  "delay": "0.4;

export default CaseStudiesSection;
