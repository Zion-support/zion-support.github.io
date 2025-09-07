import React from 'react';
import {  import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
export default function Page("props": "any) {;
", { "id": 'Metaverse', "name": 'Metaverse', "count": "allService s.filter(s => s.category === 'Metaverse').length", "icon": '🌍' }, { "id": 'Edge Computing', "name": 'Edge Computing', "count": "allService s.filter(s => s.category === 'Edge Computing').length", "icon": '🌐' }, { "id": 'Cybersecurity', "name": 'Cybersecurity', "count": "allService s.filter(s => s.category === 'Cybersecurity').length", "icon": '🛡️' };
  ] { "id": 'all', "name": 'All Levels', "icon": '🌟' }, { "id": 'Advanced', "name": 'Advanced', "icon": '🚀' }, { "id": 'Cutting-edge', "name": 'Cutting-edge', "icon": '⚡' }, { "id": 'Revolutionary', "name": 'Revolutionary', "icon": '💫' };
  ];
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    ;
    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation}) ;
    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation}
    );
    switch(sortBy) {;
      case 'price': ";
        return a.price - b.price;      case 'name':;
        return a.title.localeCompare(b.title);
      case 'innovation':;
';
  'Advanced': 1", 'Cutting-edge': "2",;  ;
  'Revolutionary': "3 ;
"};
        return (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0) - ;
               (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0);      case 'category': ";
        return a.category.localeCompare(b.category) ;
      "default":;
        return 0"}) ;
    "hidden": "{ "opacity": 0 "},;
    "visible": "{;
      "opacity": 1",;
      "transition": "{;
        "staggerChildren": 0.1;
      default:;
        return 0}
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
  const itemVariants = {;
  "hidden": "{ "y": 2 0",;
  "opacity": "0;
"},                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}";
                className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl pl-12 pr-4 py-3 text-white placeholder-zion-slate-400 "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan/50 "focus": borde r-zion-cyan";
              />;
            </div>;
            {/* Filters Row */"}";
            <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-4 gap-4">;
              {/* Category Filter */"}";
              <div className="relative">;
                <select;
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}";
                  className="w-full bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl px-4 py-3 text-white "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan/50 "focus": borde r-zion-cyan appearance-none";
                  {categories.map((category) => (;
                    <option key={category.id"} value={category.id}>;
                      {category.icon} {category.name} ({category.count});
                    </option>;
                  ))}
                </select>";
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-slate-400 w-4 h-4 pointer-events-none"   />              </div>;
              {/* Innovation Level Filter */}";
                  value={innovationLevel}
                  onChange={(e) => setInnovationLevel(e.target.value)}";
                  {innovationLevels.map((level) => (;
                    <option key={level.id"} value={level.id}>;
                      {level.icon} {level.name}
              {/* Sort By */}";
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}";
";
                  <option value="name">Sort by Name</option>";
                  <option value="price">Sort by Price</option>";
                  <option value="innovation">Sort by Innovation</option>";
                  <option value="category">Sort by Category</option>;
              {/* View Mode Toggle */"}";
              <div className="flex bg-zion-slate-900/50 border border-zion-slate-600 rounded-xl p-1">;
                <button';
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-3 py-2 rounded-lg transition-all ${viewMode === 'grid'';
                      ? 'bg-zion-cyan text-white'';
                      : 'text-zion-slate-400 "hover": "tex t-white'`;
                  "}`}
                  <Grid className="w-4 h-4 mx-auto"   />                </button>;
                  onClick={() => setViewMode('list')}`;
                  className={`flex-1 px-3 py-2 rounded-lg transition-all ${viewMode === 'list'';
                  <List className="w-4 h-4 mx-auto"   />                </button>;
            {/* Price Range Slider */}";
            <div className="mt-6">;";
              <label className="block text-sm font-medium text-zion-slate-300 mb-2">;
                Price "Range": "${priceRange[0]"} - ${priceRange[1]}
              </label>";
              <div className="flex gap-4 items-center">;
                <input";
                  type="range";
                  min="0";
                  max="10000";
                  value={priceRange[0]}
                  onChange={;
  (e) => setPriceRange([parseInt(e.target.value),;
  priceRange[1]]);
}";
                  className="flex-1 h-2 bg-zion-slate-600 rounded-lg appearance-none cursor-pointer slider";
                  value={priceRange[1]}
  (e) => setPriceRange([priceRange[0],;
  parseInt(e.target.value)]);
          </motion.div>;
      </section>;
      {/* Services Grid */}";
      <section className="relative px-4 "sm": "p x-6 "lg": p x-8 pb-20">;";
        <div className="max-w-7xl mx-auto">;
          {/* Results Count */"}";
          <div className="mb-8">";
            <p className="text-zion-slate-300">;
              Showing {filteredServices.length} of {allServices.length} services;
            </p>;
          {/* Services Grid / List */}
          <motion.div;
            variants={containerVariants}";
            initial="hidden";
            animate="visible"';
            className={viewMode === 'grid'';
              ? 'grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-6'';
              : 'space-y-4';
            {sortedServices.map((service) => (;
                key={service.id"}
                variants={itemVariants}`;
                className={`bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-6 "hover": "borde r-zion-cyan/50 "hover": shado w-lg "hover": shado w-zion-cyan/20 transition-all duration-300 cursor-pointer group ${viewMode === 'list' ? 'flex items-center gap-6' : ''`;
                onClick={() => handleServiceClick(service)}
                {viewMode === 'grid' ? (;
                  // Grid View;
                  <>;
                    {/* Header */}";
                    <div className="flex items-start justify-between mb-4">";
                      <div className="flex items-center gap-3">;
                        {getCategoryIcon(service.category)}
                        <div>";
                          <h3 className="text-lg font-semibold text-white group-"hover": "tex t-zion-cyan transition-colors">;
                            {service.title"}
                          </h3>";
                          <p className="text-sm text-zion-slate-400">{service.category}</p>;
                        <div>"
                          <h3 className="text-lg font-semibold text-white group-hover: tex t-zion-cyan transition-colors">
                            {service.title}
                          "
                          <p className="text-sm text-zion-slate-400">{service.category}</p>
                        </div>
                      {getInnovationIcon(service.innovationLevel) }
                    {/* Description */}";
                    <p className="text-zion-slate-300 text-sm mb-4 line-clamp-3">;
                      {service.description}
                    {/* Tags */}";
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {service.tags.slice(0, 3).map((tag, index) => (;
                        <span;
                          key={index}";
                          className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-lg";
                          {tag}
                        </span>) ) }
                    {/* Price and Features */}";
                    <div className="space-y-3">";
                      <div className="flex items-center justify-between">";
                        <span className="text-2xl font-bold text-zion-cyan">;
                          ${service.price.toLocaleString()}
                        </span>";
                        <span className="text-sm text-zion-slate-400">/month</span>;
                      <div className="flex items-center gap-2 text-sm text-zion-slate-400">";
                        <Clock className="w-4 h-4"   />;
                        <span>{service.estimatedDelivery}</span>;
                        <Shield className="w-4 h-4"   />                        <span>{service.supportLevel}</span>;
                    {/* CTA Button */}";
                    <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-xl font-medium "hover": "fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2">;
                      Learn More";
                      <ArrowRight className="w-4 h-4"   />                    </button>;
                  </>) : (;
                  // List View;
                  <>";
                    <div className="flex-1">";
                      <div className="flex items-start justify-between mb-2">";
                          {getCategoryIcon(service.category)"}
                            <h3 className="text-xl font-semibold text-white group-"hover": "tex t-zion-cyan transition-colors">;
                            <p className="text-zion-slate-400">{service.category}</p>;
                  // List View
                  <>"
                    <div className="flex-1">"
                      <div className="flex items-start justify-between mb-2">"
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-white group-hover: tex t-zion-cyan transition-colors">
                            <p className="text-zion-slate-400">{service.category}</p>
                      <p className="text-zion-slate-300 mb-3">;
                      <div className="flex flex-wrap gap-2">;
                        {service.tags.slice(0, 5).map((tag, index) => (;
                    <div className="text-right space-y-2">";
                      <div className="text-2xl font-bold text-zion-cyan">;
                      </div>";
                      <div className="text-sm text-zion-slate-400">/month</div>";
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-xl font-medium "hover": "fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-all duration-300 flex items-center gap-2">;
                        <ArrowRight className="w-4 h-4"   />                      </button>;
                  </>) "}
              </motion.div>) ) }
          {/* No Results */}
          {filteredServices.length === 0 && (<motion.div;
              initial={{ "opacity": "0 "}}
              animate={{ "opacity": "1 "}}";
              className="text-center py-20";
              <div className="text-6xl mb-4">🔍</div>";
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>";
              <p className="text-zion-slate-400 mb-6">;
                Try adjusting your search criteria or filters;
          {filteredServices.length === 0 && (<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"
              className="text-center py-20"
              <div className="text-6xl mb-4">🔍</div>"
              <h3 className="text-2xl font-semibold text-white mb-2">No services found"
              <p className="text-zion-slate-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button      onClick={;
  () => {;
                  setSearchTerm('');
                  setActiveCategory('all');
                  setPriceRange([0,;
  10000]);
                  setInnovationLevel('all')}}"                className="bg-zion-cyan text-white px-6 py-3 rounded-xl font-medium "hover": "b g-zion-cyan/90 transition-colors";
              >;
                Clear All Filters;
              </button>;
            </motion.div>) "}
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            animate={{ "opacity": "1 "}}
            exit={{ "opacity": "0 "}}";
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4";
            onClick={closeModal}
              initial = {;
  { "scale": "0.9",;
"}}
              animate = {;
  { "scale": "1",;
  "opacity": "1;
              exit = {;
"}}";
              className="bg-zion-slate-900 border border-zion-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
              <div className="p-8">;
                <div className="flex items-start justify-between mb-6">";
                    <div className="flex items-center gap-3 mb-2">;
                      {getCategoryIcon(selectedService.category)}";
                      <span className="text-zion-slate-400">{selectedService.category}</span>;
                    <h2 className="text-3xl font-bold text-white mb-2">;
                      {selectedService.title}
                    </h2>";
                    <p className="text-zion-slate-300 text-lg">;
                      {selectedService.description}
                  <button onClick={closeModal}";
                    className="text-zion-slate-400 "hover": "tex t-white transition-colors";
                    <X className="w-6 h-6"   />                  </button>;
                {/* Price and Key Info */"}";
                <div className="grid grid-cols-1 "md": "gri d-cols-3 gap-6 mb-8">";
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">";
                    <div className="text-3xl font-bold text-zion-cyan mb-1">;
                      ${selectedService.price.toLocaleString()"}
                    <div className="text-zion-slate-400">per month</div>;
                    <div className="text-2xl font-bold text-zion-purple mb-1">;
                      {selectedService.estimatedDelivery}
                    <div className="text-zion-slate-400">delivery time</div>;
                    <div className="text-2xl font-bold text-zion-green mb-1">;
                      {selectedService.roi}
                    <div className="text-zion-slate-400">ROI</div>;
                {/* Features and Benefits */}";
                <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-8 mb-8">;
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <CheckCircle className="w-5 h-5 text-zion-green"   />                      Key Features;
                    <ul className="space-y-2">;
                      {selectedService.features.map((feature", index) => (";
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">";
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />;
                          {feature}
                        </li>) ) }
                    </ul>;
                      <TrendingUp className="w-5 h-5 text-zion-green"   />                      Benefits;
                      {selectedService.benefits.map((benefit, index) => (";
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />;
                {/* Features and Benefits */}"
                <div className="grid grid-cols-1 md: gri d-cols-2 gap-8 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <CheckCircle className="w-5 h-5 text-zion-green"   />                      Key Features
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => ("
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">"
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />
                    </ul>
                      <TrendingUp className="w-5 h-5 text-zion-green"   />                      Benefits
                      {selectedService.benefits.map((benefit, index) => ("
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />
                          {benefit}
                {/* Use Cases and Target Audience */}";
                      <Target className="w-5 h-5 text-zion-cyan"   />                      Use Cases;
                      {selectedService.useCases.map((useCase", index) => (";
                          {useCase}
                      <Users className="w-5 h-5 text-zion-purple"   />                      Target Audience;
                      {selectedService.targetAudience.map((audience, index) => (";
                {/* Use Cases and Target Audience */}"
                      <Target className="w-5 h-5 text-zion-cyan"   />                      Use Cases
                      {selectedService.useCases.map((useCase, index) => ("
                      <Users className="w-5 h-5 text-zion-purple"   />                      Target Audience
                      {selectedService.targetAudience.map((audience, index) => ("
                          {audience}
                {/* Technical Specs */}
                {selectedService.technicalSpecs && (";
                      <Code className="w-5 h-5 text-zion-cyan"   />                      Technical Specifications;
                    <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-6">;
                        <h4 className="font-medium text-zion-slate-300 mb-2">Technology Stack</h4>";
                          {selectedService.technicalSpecs.technology.map((tech", index) => (";
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-cyan text-sm rounded-lg">;
                {selectedService.technicalSpecs && ("
                  <div className="mb-8">"
                      <Code className="w-5 h-5 text-zion-cyan"   />                      Technical Specifications
                    <div className="grid grid-cols-1 md: gri d-cols-2 gap-6">
                        <h4 className="font-medium text-zion-slate-300 mb-2">Technology Stack</h4>"
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => ("
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-cyan text-sm rounded-lg">
                              {tech}
                        <h4 className="font-medium text-zion-slate-300 mb-2">Integrations</h4>";
                          {selectedService.technicalSpecs.integrations.map((integration, index) => (";
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-purple text-sm rounded-lg">;
                              {integration}
                  </div>) }
                {/* Contact and CTA */}";
                <div className="border-t border-zion-slate-700 pt-6">";
                  <div className="flex flex-col "md": "fle x-row items-center justify-between gap-4">";
                    <div className="text-center "md": tex t-left">";
                      <p className="text-zion-slate-400 mb-2">Ready to get started?</p>";
                      <div className="flex items-center gap-4 text-sm text-zion-slate-300">;
                        <span>📞 {selectedService.contactInfo.phone"}</span>;
                        <span>✉️ {selectedService.contactInfo.email}</span>;
                    <div className="flex gap-3">";
                      <button className="bg-zion-slate-700 text-white px-6 py-3 rounded-xl font-medium "hover": "b g-zion-slate-600 transition-colors">;
                        Request Demo;
                      </button>";
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-medium "hover": fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-colors">;
                        Get Started;
          </motion.div>;) "};
      </AnimatePresence>;
    </div>;) ;
</div></div></div></div></div></div></div>};
export default ComprehensiveServicesShowcase2025}}}}}}}}}}'"`;
</motion>;
</motion>