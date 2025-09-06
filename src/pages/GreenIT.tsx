
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button";
import { Leaf, Server, Cloud } from 'lucide-react'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function GreenIT() {

  const greenITSolutions = [
    {
      title: "Renewable Energy Integration",
      description: "Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.",
      icon: Leaf}
  ],

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <>
      <SEO
        title="Green IT Solutions - Sustainable Technology"
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining window.window.window.performance." 
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware"
        canonical="https://app.ziontechgroup.com/marketplace/category/green-it"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Green IT Solutions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Sustainable technology solutions that reduce environmental impact without compromising performance
            </p>
          </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Sustainable IT for a Better Future</h2>
                  <p className="text-zion-slate-light text-lg mb-6">
                    As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers. 
                    Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure 
                    while maintaining performance and reliability.
                  </p>
                  <p className="text-zion-slate-light text-lg mb-6">
                    From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions 
                    for reducing your carbon footprint.
                  </p>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      Explore Green IT Solutions
                    </Button>
                  </div>
                </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <img
                    src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600&q=80"
                    alt="Green IT sustainability"
                    className="object-cover"
  const [expandedSection, setExpandedSection] = useState<string | null>(null);'
  const [selectedCategory, setSelectedCategory] = useState('all')}
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO""
        title="Green IT Solutions - Zion Tech Group""
        description="Transform your technology infrastructure with our sustainable Green IT solutions. Reduce energy consumption, lower costs, and minimize environmental impact."
      />
"
      {/* Hero Section */}""
      <section className="relative py-20 overflow-hidden">""
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>"        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center"">""
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">""
              <Leaf className="w-10 h-10 text-green-400"  />"
            </div>""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">""
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">'
                Green IT''
              </span>{' '}
              Solutions"
            </h1>"            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your technology infrastructure with sustainable
              solutions that reduce energy consumption, lower costs, and
              minimize environmental impact."
            </p>""
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Green IT Assessment"
              </button>""
              <button className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
"
      {/* Environmental Impact */}""
      <section className="py-20">""
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16"">""
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Environmental Impact"
            </h2>""
            <p className="text-xl text-gray-300">
              Real results from implementing sustainable technology solutions
            </p>
          </motion.div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalImpact.map((impact, index) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="text-center"">""
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">""
                  <impact.icon className="w-10 h-10 text-green-400" />"
                </div>""
                <div className="text-4xl font-bold text-white mb-2">
                  {impact.metric}"
                </div>""
                <div className="text-lg font-semibold text-green-400 mb-2">
                  {impact.label}"
                </div>""
                <p className="text-gray-300 text-sm">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"
      {/* Green IT Solutions */}""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16"">""
            <h2 className="text-4xl font-bold text-white mb-4">
              Green IT Solutions"
            </h2>""
            <p className="text-xl text-gray-300">
              Comprehensive sustainable technology solutions for your
              organization
            </p>
          </motion.div>
"
          {/* Category Filter */}""
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${}
'
''
'''`
                  selectedCategory === category.id'''`'`
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'''`'`'`
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'````
}`}
              >
                {category.name} ({category.count}) </button>) ) }
          </div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="group"">""
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">""
                  <div className="p-6">""
                    <div className="flex items-center gap-3 mb-4">`
                      <span``
                        className={`px-3 py-1 rounded-full text-xs font-medium ${}
'
''
'''
                          solution.category === 'energy'''''
                            ? 'bg-green-500/20 text-green-400'''''
                            : solution.category === 'hardware'''''
                              ? 'bg-blue-500/20 text-blue-400'''''`
                              : solution.category === 'software''''`'`
                                ? 'bg-purple-500/20 text-purple-400'''`'`'`
                                : 'bg-orange-500/20 text-orange-400'````
}`}
                      >
                        {categories.find(c => c.id === solution.category) ?.name}
                      </span>
                    </div>"
""
                    <div className="flex items-center gap-3 mb-4">""
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">""
                        <solution.icon className="w-6 h-6 text-green-400" />"
                      </div>""
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200">
                        {solution.name}
                      </h3>
                    </div>"
""
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>                  </div>
                ))}
              </div>
            </div>
                    <h3 className="text-white font-medium text-xl text-center mb-3">{solution.title}</h3>
                    <p className="text-zion-slate-light text-center">{solution.description}</p>
=======
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Our Green IT Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {greenITSolutions.map((solution, index) => (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                    <div className="flex justify-center mb-4">
                      <solution.icon className="h-12 w-12 text-zion-cyan" />
                    </div>
                    <h3 className="text-white font-medium text-xl text-center mb-3">{solution.title}</h3>
                    <p className="text-zion-slate-light text-center">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <li>• Decreased electronic waste through better lifecycle management</li>
                    <li>• Support for renewable energy initiatives</li>
                  </ul>
                </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-white font-medium text-xl mb-4">Business Benefits</h3>
                  <ul className="text-zion-slate-light space-y-2">
                    <li>• Significant cost savings on energy and cooling</li>
                    <li>• Enhanced brand reputation and stakeholder relations</li>
                    <li>• Compliance with emerging environmental regulations</li>
                    <li>• Improved operational efficiency and performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </div>
        </div>
      </main>
    </>
  )
=======
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import { Leaf, Server, Cloud } from 'lucide-react';
import Link from "next/link",;
export default function GreenIT() {;
  const greenITSolutions = [;
    {;
      title: "Energy-Efficient Hardware",;
      description: "Modern processors, storage solutions, and networking equipment delivering significant performance improvements while consuming less power.",;
      icon: Server},;
    {;
      title: "Optimized Cooling Systems",;
      description: "Advanced cooling technologies that reduce energy consumption while maintaining optimal operating temperatures.",;
      icon: Cloud},;
    {;
      title: "Renewable Energy Integration",;
      description: "Solutions for leveraging on-site renewable generation or virtual power purchase agreements to offset carbon footprint.";
      icon: Leaf}
  ];
  return (;
    <>;
      <SEO;
        title="Green IT Solutions - Sustainable Technology";
        description="Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining window.window.window.performance.";
        keywords="green IT, sustainable technology, eco-friendly computing, energy efficient hardware";
        canonical="https://app.ziontechgroup.com/marketplace/category/green-it";
      />;
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <GradientHeading>Green IT Solutions</GradientHeading>;
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">;
              Sustainable technology solutions that reduce environmental impact without compromising performance;
            </p>;
          </div>;
          <div className="mb-16">;
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 mb-16">;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
                <div>;
                  <h2 className="text-3xl font-bold text-white mb-6">Sustainable IT for a Better Future</h2>;
                  <p className="text-zion-slate-light text-lg mb-6">;
                    As AI and cloud computing demand grows exponentially, so does the environmental impact of data centers.;
                    Our Green IT solutions help organizations implement sustainable practices in their IT infrastructure;
                    while maintaining performance and reliability.;
                  </p>;
                  <p className="text-zion-slate-light text-lg mb-6">;
                    From energy-efficient hardware to renewable energy integration, we offer comprehensive solutions;
                    for reducing your carbon footprint.;
                  </p>;
                  <div className="mt-8">;
                    <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">;
                      Explore Green IT Solutions;
                    </Button>;
                  </div>;
                </div>;
                <div className="rounded-lg overflow-hidden relative w-full h-full">;
                  <img;
                    src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&fit=crop&w=800&h=600&q=80";
                    alt="Green IT sustainability";
                    className="object-cover";
                  />;
                </div>;
              </div>;
            </div>;
            <div className="mb-16">;
              <h2 className="text-2xl font-bold text-white mb-8">Our Green IT Solutions</h2>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
                {greenITSolutions.map((solution, index) => (;
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">;
                    <div className="flex justify-center mb-4">;
                      <solution.icon className="h-12 w-12 text-zion-cyan" />;
                    </div>;
                    <h3 className="text-white font-medium text-xl text-center mb-3">{solution.title}</h3>;
                    <p className="text-zion-slate-light text-center">{solution.description}</p>;
                  </div>;
                ))}
              </div>;
            </div>;
            <div className="mb-16">;
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose Green IT?</h2>;
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                  <h3 className="text-white font-medium text-xl mb-4">Environmental Benefits</h3>;
                  <ul className="text-zion-slate-light space-y-2">;
                    <li>• Reduced carbon footprint and greenhouse gas emissions</li>;
                    <li>• Lower energy consumption and resource utilization</li>;
                    <li>• Decreased electronic waste through better lifecycle management</li>;
                    <li>• Support for renewable energy initiatives</li>;
                  </ul>;
                </div>;
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">;
                  <h3 className="text-white font-medium text-xl mb-4">Business Benefits</h3>;
                  <ul className="text-zion-slate-light space-y-2">;
                    <li>• Significant cost savings on energy and cooling</li>;
                    <li>• Enhanced brand reputation and stakeholder relations</li>;
                    <li>• Compliance with emerging environmental regulations</li>;
                    <li>• Improved operational efficiency and performance</li>;
                  </ul>;
                </div>;
              </div>;
            </div>;
          </div>;
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">Ready to implement Green IT solutions?</h2>;
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">;
              Connect with our experts to discuss how we can help you build a more sustainable IT infrastructure.;
            </p>;
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>;
              <Link href="/contact">Contact Our Team</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
