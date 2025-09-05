import React, {useState} from 'react';
export default EnhancedServicesShowcase;
import {enhancedServices2025} from '../data/enhanced - services -2025';
export default function Page("props": "any) {;
",;
        { "id": 'emerging-tech', "name": 'Emerging Tech', "icon": '🚀' }
    ];
    const filteredServices = enhancedServices2025.filter(service => {;
";
  const [selectedCategory, setSelectedCategory] = useState("all")";
  const [searchTerm, setSearchTerm] = useState(")";
  const categories = [] = useState(&apos;all&apos)";&apos;&apos,;
  const [searchTerm, setSearchTerm] = useState(&apos;&apos)";&apos;&apos;
  const categories = []&apos;&apos,"""";
  const [selectedCategory, setSelectedCategory] = useState("all")";"";
  const [searchTerm, setSearchTerm] = useState("")";"";
  const categories = [];
  const filteredServices = enhancedServices2025.filter(service => {}
;
    const;const;const matchesSearch =;
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
}
    return matchesCategory && matchesSearch});
}
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
}
    return matchesCategory && matchesSearch});
}
  const containerVariants = {}
;
    "hidden": "{"opacity": 0"},;
    "visible": "{"}
;
      "opacity": "1",;
"transition": "{"}
;
        "staggerChildren": "0.1","delayChildren": "0.2"}}}
;
  const itemVariants = {}
;
    "hidden": "{"opacity": 0", "y": "20"},;
      "y": "0",;
"transition": "{"duration": 0.5"}}}
;
  return();";
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">""{/* comment */}"";";
      <section className="py-20 px-4 "sm": "px-6 "lg":px-8">""",";
        <div className="max-w-7xl mx-auto text-center">"",",;
          <motion.h1"",";
            className = "text-4xl "md": "text-6xl font-bold mb-6"",";
            initial="{{" "opacity": "0", "y": "20 "}}";
            whileInView="{{" "opacity": "1", "y": "0 "}}";
            transition="{{" "duration": "0.6 "}}>;
          >"";
            Comprehensive"";";
            <span className = "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">"{" "}
;
              Technology Solutions;
            </span>;
          </motion.h1>"";
          <motion.p"";";
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto";";
            transition = "{{" "duration": "0.6", "delay": "0.2 "}}>;
          >;
            Discover our extensive portfolio of innovative micro SAAS services,;
            enterprise IT solutions, cutting - edge AI services, and emerging,;
            technology solutions designed to transform your business.</motion.p> {/* comment */}"",;
          <motion.div"";";
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto";"";
            transition="{{" "duration": "0.6", "delay": "0.4 "}}"">"";";
            <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4 text-sm">"";";
              <div className="text-center">""",";
                <div className="text-blue-400 font-semibold">📱 Contact</div>"",";
                <div className="text-gray-300">+1 302 464 0950</div>"",;
              </div>"";";
                <div className="text-blue-400 font-semibold">✉️ Email</div>"";";
                <div className="text-gray-300">kleber@ziontechgroup.com</div>"";";
                <div className="text-blue-400 font-semibold">🌐 Website</div>"",",;
                <div className = "text-gray-300">ziontechgroup.com</div>,;
              </div>,;
          </motion.div> {/* comment */}"";";
            className = "flex flex-col "md": "flex-row gap-4 justify-center items-center mb-12"",";
            transition="{{" "duration": "0.6", "delay": "0.6 "}}
;
            <input"";
              type = "text"",;
              placeholder = "Search services..."">;
              value={searchTerm}"";";
              onChange="{e" => setSearchTerm(e.target.value)}"";";
              className = "px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 "focus": "outline-none "focus":border-blue-400 "focus":ring-2 "focus":ring-blue-400/20 w-full "md":w-80" />""",";
            <div className="flex flex-wrap gap-2"> {categories.map(category => (,;
    "hidden": "{ opacit","y": "0 "},;
    "hidden": "{"opacity": 0"}, "visible": "{"}
;
      "opacity": "1",;
        "staggerChildren": "0.1", "delayChildren": "0.2"}}}
;
    "hidden": "{opacit","y": "0", "y": "20"},;
      "y": "0",;
      "transition": "{duratio","n": "0.5"}}}
;
  return()";
    <;<div className="&apos;min-h-screen" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white&apos;>"&apos;&apos {/* comment */}&apos;&apos,&apos;&apos,";
      <section className="&apos;py-20" px-4 "sm": "px-6 "lg":px-8&apos",>"&apos,&apos,&apos;&apos;";
        <div className="&apos;max-w-7xl" mx-auto text-center&apos;>"&apos;&apos,"";
          <;<motion.h1&apos;&apos,",">;
            className="&apos;text-4xl" "md": "text-6xl font-bold mb-6&apos",&apos,";
            initial = "{{" opacit,"y": "0", "y": "20 "}}>;
          >&apos;&apos,;
            Comprehensive&apos;&apos,&apos;&apos,";
            <span className="&apos;text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400&apos;>&apos {&apos; &apos}
;
              Technology Solutions&apos;&apos;
            </span>";
          </motion.h1>&apos;&apos,&apos;&apos,;
          <motion.p&apos;&apos,&apos;";
            className="&apos;text-xl" text-gray-300 mb-8 max-w-4xl mx-auto&apos;&apos>;
    "hidden": "{"opacity": 0", "y": "20"}, "visible": "{"}
;
      "y": "0", "transition": "{"duration": 0.5"}}}";
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">"""{/* comment */}""""";
      <section className="py-20 px-4 "sm": "px-6 "lg":px-8">"""";
        <div className="max-w-7xl mx-auto text-center">"""""",;
          <motion.h1"""",";
            className="text-4xl "md": "text-6xl font-bold mb-6""",";
          >""""";
            Comprehensive""""";
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">"{" "}";
              Technology Solutions";
          </motion.h1>""""";
          <motion.p"""";
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">;
          >;
            Discover our extensive portfolio of innovative micro SAAS services,;
            enterprise IT solutions, cutting-edge AI services, and emerging,;
technology solutions designed to transform your business.&apos;&apos;</motion.p>";
          {/* comment */}&apos;&apos,&apos;&apos,;
          <motion.div&apos;&apos,";";
            className="&apos;bg-white/10" backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto&apos;&apos;";
            transition="{{" "duration": "0.6", "delay": "0.4 "}}&apos;&apos,>&apos;&apos,&apos;&apos,";
            <div className="&apos;grid" grid-cols-1 "md": "grid-cols-3 gap-4 text-sm&apos",>"&apos,&apos,&apos;&apos;";
              <div className="&apos;text-center&apos;">"&apos;&apos,&apos;&apos;";
                <div className="&apos;text-blue-400" font-semibold&apos;>📱 Contact&apos;</div>&apos;&apos,&apos;&apos,";
                <div className="&apos;text-gray-300&apos;">+1 302 464 0950&apos;</div>&apos;&apos,&apos;&apos,;
              </div>&apos;&apos,&apos;&apos,";
                <div className="&apos;text-blue-400" font-semibold&apos;>✉️ Email&apos;</div>&apos;&apos,&apos;&apos,";
                <div className="&apos;text-gray-300&apos;">kleber@ziontechgroup.com&apos;</div>&apos;&apos,&apos;&apos;";
                <div className="&apos;text-blue-400" font-semibold&apos;>🌐 Website&apos;</div>&apos;&apos,&apos;&apos,",;
                <div className="&apos;text-gray-300&apos,">ziontechgroup.com&apos,</div>;
          </motion.div>";
          {/* comment */}&apos;&apos,&apos;&apos;";
            className="&apos;flex" flex-col "md": "flex-row gap-4 justify-center items-center mb-12&apos",&apos,;
          >&apos;&apos,&apos;&apos,;
            <input&apos;&apos,";
              type=&apos;text&apos;&apos,",">;
              placeholder="&apos;Search" services...&apos,&apos,";
              value="{searchTerm}&apos;&apos;"";
              onChange="{e" => setSearchTerm(e.target.value)}&apos;&apos,";";
              className="&apos;px-6" py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 "focus": "outline-none "focus":border-blue-400 "focus":ring-2 "focus":ring-blue-400/20 w-full m","d": "w-80&apos",&apos,&apos;/>&apos;&apos,&apos;&apos,",;
            <div className = "&apos,flex" flex-wrap gap-2&apos,>;
              {categories.map(category => (&apos}
;
            technology solutions designed to transform your business.</motion.p>";
          {/* comment */}"""";
          <motion.div"""";";
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto"";"";
            transition = "{{" "duration": "0.6", "delay": "0.4 "}}""">""""";
            <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4 text-sm">"""";
              <div className="text-center">"""";
                <div className="text-blue-400 font-semibold">📱 Contact</div>"""";
                <div className="text-gray-300">+1 302 464 0950</div>""""";
              </div>"""";
                <div className="text-blue-400 font-semibold">✉️ Email</div>"""";
                <div className="text-gray-300">kleber@ziontechgroup.com</div>"""";
                <div className="text-blue-400 font-semibold">🌐 Website</div>"""";
                <div className="text-gray-300">ziontechgroup.com</div>"",;
          {/* comment */}"""";
            className="flex flex-col "md": "flex-row gap-4 justify-center items-center mb-12""",;
            <input"""",">;
              type = "text"""","";
              placeholder="Search services...""",>;
              value = {searchTerm}""",";
              onChange = "{e" => setSearchTerm(e.target.value)}"""";
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 "focus": "outline-none "focus":border-blue-400 "focus":ring-2 "focus":ring-blue-400/20 w-full "md":w-80""" />""""";
            <div className="flex flex-wrap gap-2">;
              {categories.map(category => ("",;
                <button key="{category.id}"";
                  onClick="{()" => setSelectedCategory(category.id)}";
                  className="{"px-4" py-2 rounded-lg border transition-all duration-300 ${}
;
                    selectedCategory == = category.id",;
                      ? "bg - blue-600 border-blue-400 text-white""",;
                      : "bg-white/10 border-white/20 text-gray-300 "hover": "bg-white/20 "hover":border-white/40""""}"}"">"";";
                  <span className="mr-2">{category.icon}</span>;
                    selectedCategory === category.id&apos,;
                      ? &apos;bg-blue-600 border-blue-400 text-white&apos;&apos,";
                      : "&apos;bg-white/10 border-white/20 text-gray-300 "hover":bg-white/20 hove","r": "border-white/40&apos",""}"}&apos;&apos,>&apos;&apos,&apos;&apos,";
                  <span className="&apos;mr-2&apos;">{category.icon}&apos;</span>";
                    selectedCategory == = category.id"",;
                      ? "bg-blue-600 border-blue-400 text-white""""";
                      : "bg-white/10 border-white/20 text-gray-300 "hover": "bg-white/20 "hover":border-white/40""""}"}""">""""";
                  <span className = "mr-2">{category.icon}</span>;
                  {category.name}
;
                </button>;
              ))}
