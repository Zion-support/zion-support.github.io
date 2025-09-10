import {  import { motion  } from 'framer-motion';
 params - Function parameters;
 * @returns {*} Function return value;
 */;
function ClientSuccessStoriesSection("props": "any) {;
export function ClientSuccessStoriesSection("props": any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div ";
          className="text-center mb-16";
          initial = {;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Client Success Stories;
          </h2>";
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Real results from real clients.Discover how we've helped businesses;
            across industries achieve remarkable transformations and measurable success.</p>;
        </motion.div>;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          transition = {;

  { duration: 0.6,
  delay: 0.1;
}}";
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16">;
          {successMetrics.map ( (metric, index) => {;            return (";
              <div key = {metric.label} className="text-center">";
                <div className="flex justify-center mb-4">";
                  <div className="p-3 bg-green-100 rounded-full">";
                    <IconComponent className="h-8 w-8 text-green-600"   />                  </div>;
                </div>";
                <div className="text-3xl font-bold text-gray-900 mb-2">;
                  {metric.value}
                </div>";
                <div className="text-gray-600">{metric.label}</div>;
              </div>;
            )})}
        </motion.div>;
        {/* Testimonials Grid */}";
        <div className="grid "md": "gri d-cols-2 gap-8 mb-12">;
          {testimonials.map((testimonial", index)  => (";
        <div className="grid grid-cols-1 "lg": "gri d-cols-3 gap-8 mb-16">;
          {successStories.map((story", index) => (;
            <motion.div;
              key={story.id}";
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden "hover": "borde r-blue-500/50 transition-all duration-300 "hover": shado w-lg "hover": shado w-blue-500/25";
              initial = {;
  { opacity: 0,
  y: 30;
}}
              whileInView = {;

  { opacity: 1,
  y: 0;
}}
              viewport={{ once: true }}
              transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}            >";
              <div className="flex items-center mb-6">";
                <div className="text-4xl mr-4">{testimonial.avatar}</div>;
                <div>";
                  <h3 className="text-xl font-bold text-gray-900">;
                    {testimonial.name}
                  </h3>";
                  <p className="text-gray-600">{testimonial.role}</p>";
                  <p className="text-blue-600 font-medium">{testimonial.comp}</p>;
                </div>";
                <div className="absolute top-3 right-3">";
                  <div className="flex items-center gap-1">;
                    {[...Array(story.rating)].map((_, i) => (";
                      <span key={i} className="text-yellow-400 text-sm">★</span>;                <div className="mb-4">;
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">"Challenge": "</h4>;
                  <p className="text-gray - 400 text-sm">{story.challenge"}</p>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">"Solution": "</h4>;
                  <p className="text-gray - 400 text-sm">{story.solution"}</p>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">"Results": "</h4>;
                  <ul className="space - y-1">;
                    {story.results.map((result", resultIndex) => (<li key={resultIndex} className="flex items - center gap-2 text-sm">;
                        <div className="w-2 h-2 bg-green - 400 rounded-full"></div>;
                        <span className="text-gray -300">{result}</span>;
                      </li>) ) }
                  </ul>;
                </div>;
                <div className="border-t border-slate - 700 pt -4">;
                  <blockquote className="text-gray - 300 text-sm italic mb-3">                    "{story.testimonial}";
                  </blockquote>";
                  <div className="flex items-center gap-3">";
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">";
                      <span className="text-white font-semibold text-sm">;
                        {story.author.split(' ').map(n => n[0]).join('')}
                      </span>;
                    </div>;
                    <div>";
                      <div className="text-white font-semibold text-sm">{story.author}</div>";
                      <div className="text-gray-400 text-xs">{story.position}</div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>) ) }
        </div>;
        {/* Success Metrics */}
        <motion.div;
          className="mb-16";          initial = {;
  { opacity: 0,
  y: 30;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.4;
}}        >";
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold text-white text-center mb-8">;
              Success by the Numbers;
            </h3>;}}
        >"
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Success by the Numbers

            <div className="grid grid - cols - 2 "md": "gri d - cols - 4 gap-8">;
              <div className="text-center">;
                <div className="text-4xl font - bold text-blue - 400 mb-2">98%</div>;
                <div className="text-gray - 300 text-sm">Client Satisfaction</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font - bold text-green - 400 mb-2">500+</div>;
                <div className="text-gray - 300 text-sm">Projects Delivered</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font - bold text-purple - 400 mb-2">25+</div>;
                <div className="text-gray - 300 text-sm">Industries Served</div>;
              </div>;
              <div className="text-center">;
                <div className="text-4xl font - bold text-orange - 400 mb-2">99.9%</div>;
                <div className="text-gray - 300 text-sm">Uptime Guarantee</div>              </div>;
            </div>;
          </div>;
        </motion.div>;
        <motion.div;
          className="text-center"          initial = {;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.6;
}}        >";
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">";
            <h3 className="text-2xl font-bold mb-4">;
              Ready to Write Your Success Story?;
            </h3>";
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">;
              Join hundreds of satisfied clients who have transformed their;
              businesses with our innovative technology solutions.</p>";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">";
              <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 "hover": b g-gray-100 rounded-lg font-medium transition-colors duration-200">;
                Start Your Project";
                <ArrowRight className="ml-2 h-5 w-5"   />;
              </button>";
              <button className="inline-flex items-center px-6 py-3 border border-white text-white "hover": b g-white "hover": tex t-green-600 rounded-lg font-medium transition-colors duration-200">;
                View All Case Studies";
                <Award className="ml-2 h-5 w-5"   />              </button>;
            </div>;
          </div>;
        </motion.div>;}}
        >"
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">"
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            "
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our innovative technology solutions.</p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">"
              <button className="inline-flex items-center px-6 py-3 bg-white text-green-600 hover: b g-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project"
                <ArrowRight className="ml-2 h-5 w-5"   />
              </button>"
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover: b g-white hover: tex t-green-600 rounded-lg font-medium transition-colors duration-200">
                View All Case Studies"
                <Award className="ml-2 h-5 w-5"   />              </button>
            </div>
          </div>
        </motion.div>
      </div>;
    </section>;) "};
;
    </section>;) };
export default ClientSuccessStoriesSection;";
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default ClientSuccessStoriesSection;
export default ClientSuccessStoriesSection;
'";
</motion>;
</motion>;
</motion>;
</motion>