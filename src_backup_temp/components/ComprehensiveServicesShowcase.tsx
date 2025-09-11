import {  import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
export default function Page(props: any) {';
const ComprehensiveServicesShowcase: Reac t.FC = () => {;';';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');';';
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');';';
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services
  const allServices: Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025';
  ];';';
  // Get unique categories';
export default function Page("props": "any) {;
const "ComprehensiveServicesShowcase": React.FC = () => {;
  const [selectedCategory", setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services;
  const "allServices": "Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025",;
    ...EMERGING_TECH_SERVICES_2025;
export default function Page(props: any) {
const ComprehensiveServicesShowcase: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');  // Combine all services
  const allServices: Servic e[] = [...EXPANDED_INNOVATIVE_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];
  // Get unique categories';
  // Get unique categories'    return cats}, [allServices]) ;
  // Get unique innovation levels
    return levels}, [allServices]);  // Filter services
    return allServices.filter(service => {;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesInnovationLevel && matchesSearch})}, [allServices, selectedCategory, selectedInnovationLevel, searchTerm]);';
  ';';
      case 'AI & Customer Experience':;';';
      case 'AI & Supply Chain':;';';
      case 'AI & Legal Tech':;';';
      case 'AI & Healthcare':;';';
      case 'AI & Financial Services':;';';
      case 'AI & Content Marketing':;"';
        return <Brain className="h-6 w-6"   />;';';
      case 'Cybersecurity & AI':'';';
      case 'Cybersecurity & Quantum':"';
        return <Shield className="h-6 w-6"   />;';';
      case 'Blockchain & Supply Chain':"';
        return <Database className="h-6 w-6"   />;';';
      case 'IoT & Edge Computing':"';
        return <Network className="h-6 w-6"   />;';';
      case 'Quantum Computing':"';
        return <Cpu className="h-6 w-6"   />;';';
      case 'AR/VR & Immersive Tech':"';
        return <Eye className="h-6 w-6"   />;';';
      case '5G & Telecommunications':"';
        return <Globe className="h-6 w-6"   />;';';
      case 'Space Technology':"';
        return <Rocket className="h-6 w-6"   />;';';
      case 'Neuromorphic Computing':"';
        return <Brain className="h-6 w-6"   />;';';
      case 'Digital Twin & Simulation':"';
        return <Settings className="h-6 w-6"   />;';';
      case 'Synthetic Biology':"';
        return <Target className="h-6 w-6"   />;';';
      case 'Brain-Computer Interface':"';
        return <Brain className="h-6 w-6"   />;';';
      case 'Sustainability & Energy':"';
        return <Zap className="h-6 w-6"   />;';';
      case 'Autonomous Vehicles & Fleet Management':"
        return <Rocket className="h-6 w-6"   />;
      default:"
        return <Star className="h-6 w-6"   />};';
  };';';
      return matchesCategory && matchesInnovationLevel && matchesSearch})}, [allServices, selectedCategory, selectedInnovationLevel, searchTerm]);
;
      case 'AI & Customer Experience': ";      case 'AI & Customer Experience':;
      case 'AI & Supply Chain':;
      case 'AI & Legal Tech':;
      case 'AI & Healthcare':;
      case 'AI & Financial Services':;
      case 'AI & Content Marketing':;"
        return <Brain className="h-6 w-6"   />;
      case 'Cybersecurity & AI':'
      case 'Cybersecurity & Quantum':"
        return <Shield className="h-6 w-6"   />;
      case 'Blockchain & Supply Chain':"
        return <Database className="h-6 w-6"   />;
      case 'IoT & Edge Computing':"
        return <Network className="h-6 w-6"   />;
      case 'Quantum Computing':"
        return <Cpu className="h-6 w-6"   />;
      case 'AR/VR & Immersive Tech':"
        return <Eye className="h-6 w-6"   />;
      case '5G & Telecommunications':"
        return <Globe className="h-6 w-6"   />;
      case 'Space Technology':"
        return <Rocket className="h-6 w-6"   />;
      case 'Neuromorphic Computing':"
        return <Brain className="h-6 w-6"   />;
      case 'Digital Twin & Simulation':"
        return <Settings className="h-6 w-6"   />;
      case 'Synthetic Biology':"
        return <Target className="h-6 w-6"   />;
      case 'Brain-Computer Interface':"
        return <Brain className="h-6 w-6"   />;
      case 'Sustainability & Energy':"
        return <Zap className="h-6 w-6"   />;
      case 'Autonomous Vehicles & Fleet Management':"
        return <Rocket className="h-6 w-6"   />;
      "default":";
        return <Star className="h-6 w-6"   />"};
  };                value={selectedCategory"}
                onChange={(e) => setSelectedCategory(e.target.value)}";
                className="px-4 py-2 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-zion-cyan "focus": borde r-transparent";
              >;
                {categories.map(category  => (;
                  <option key={category} value={category}>;
                    {category === 'all' ? 'All Categories' : category}                value={selectedInnovationLevel"}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}";
                className="px-4 py-2 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-zion-cyan "focus": borde r-transparent";
              >;
                {innovationLevels.map(level  => (;
                  <option key={level} value={level}>;
                    {level === 'all' ? 'All Levels' : level}                          {benefit}
                        </div>) ) }
                    </div>
                  </div>
                  {/* Tags */}"
                  <div className="mb-6">"
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 5).map((tag, idx) => (
                        <span
                          key={idx}"
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                          {tag}
                        </span>) ) }
                    </div>;
                  </div>;
                  {/* CTA Buttons */}";
                  <div className="flex gap-3">;
                    <Link`;
                      to={`/contact?service=${service.id}`}";
                      className="flex-1 bg-zion-cyan text-white text-center py-2 px-4 rounded-lg "hover": "b g-zion-cyan-light transition-colors font-medium";
                      Get Started;
                    </Link>;
                    <Link`;
                      to={`/services/${service.id"}`}";
                      className="flex-1 border border-zion-cyan text-zion-cyan text-center py-2 px-4 rounded-lg "hover": "b g-zion-cyan "hover": tex t-white transition-colors font-medium";
                      Learn More;
                    </Link>;
                  </div>;
                </div>;
              </motion.div>) ) "};
          </div> {filteredServices.length === 0 && (;";
            <div className="text-center py-16">;";              <button;
                onClick={() => {;
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                  setSearchTerm('')}}"                className="text-zion-cyan "hover": "tex t-zion-cyan-light font-medium";
              >;
                Clear all filters;
              </button>;
            </div>) "}
        </div>;
      </section>;
      {/* Call to Action Section */}";
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-16">;";
        <div className="container mx-auto px-4 text-center">";
          <h2 className="text-3xl "md": "tex t-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>";
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Our innovative technology solutions are designed to give you a competitive edge.Contact us today to discuss how we can help you achieve your goals.</p>";
          <div className="flex flex-wrap justify-center gap-4">;
            <Link ";
              to="/contact";
              className="inline-flex items-center px-8 py-3 bg-white text-zion-blue font-semibold rounded-lg "hover": b g-gray-100 transition-colors";
              Contact Us";
              <ArrowRight className="ml-2 h-5 w-5"    />            </Link>;
            <a";
              href=""tel":+13024640950";
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg "hover": b g-white "hover": tex t-zion-blue transition-colors";
";
              <Phone className="mr-2 h-5 w-5"   />              Call Now;              <button;
                onClick={() => {;
                  setSelectedCategory('all');
                  setSelectedInnovationLevel('all');
                  setSearchTerm('')}}"                className="text-zion-cyan hover: tex t-zion-cyan-light font-medium";
              >;
                Clear all filters;
              </button>;
            </div>) }
        </div>;
      </section>;
      {/* Call to Action Section */}";
      <section className="bg-gradient-to-r from-zion-blue to-zion-cyan text-white py-16">;";
        <div className="container mx-auto px-4 text-center">";
          <h2 className="text-3xl md: tex t-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>";
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Our innovative technology solutions are designed to give you a competitive edge.Contact us today to discuss how we can help you achieve your goals.</p>";
          <div className="flex flex-wrap justify-center gap-4">;
            <Link ";
              to="/contact";
              className="inline-flex items-center px-8 py-3 bg-white text-zion-blue font-semibold rounded-lg hover: b g-gray-100 transition-colors";
              Contact Us";
              <ArrowRight className="ml-2 h-5 w-5"    />            </Link>;
            <a";
              href="tel:+13024640950";
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-zion-blue transition-colors";
";
              <Phone className="mr-2 h-5 w-5"   />              Call Now;
    </div>;) };
export default ComprehensiveServicesShowcase}}}}'"`
</motion>
</string>
</string>
</string>