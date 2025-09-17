
;
export default function Page("props": "any) {;
    setExpandedSections(newExpanded)"};
;
  const navigationSections = [{;
      "title": "Main Navigation",;
      "icon": "Hom e",;
      items[;";
        { "name": "Home", "href": "/", "icon": "Hom e "},";
        { "name": "Solutions", "href": "/solutions", "icon": "Targe t "},";
        { "name": "Services", "href": "/services", "icon": "Za p "},";
        { "name": "Case Studies", "href": "/case-studies", "icon": "FileTex t "},";
        { "name": "Blog", "href": "/blog", "icon": "FileTex t "},";
        { "name": "Partners", "href": "/partners", "icon": "Handshak e "},";
        { "name": "About", "href": "/about", "icon": "User s "},";
        { "name": "Contact", "href": "/contact", "icon": "MessageCircl e "},";
        { "name": "Careers", "href": "/careers", "icon": "Briefcas e "},";
        { "name": "Partners", "href": "/partners", "icon": "Handshak e "}              </button>;
              <AnimatePresence>;
                {expandedSections.has(section.title) && (<motion.div;
                    initial = {;
  { "opacity": "0",;
  "height": "0;
"}}
                    animate = {;
  { "opacity": "1",;
  "height": 'auto';
}}
                    exit = {;
  { "opacity": "0",;
  "height": "0;
"}}
                    transition={{ "duration": "0.3 "}}";
                    className="ml-7 mt-2 space-y-1";
                  >;
                    {section.items.map((item) => (<Link;
                        key={item.name}
                        initial = {;
  { "opacity": "0",;
  "x": "-20;
"}}
                        animate = {;
  { "opacity": "1",;
  "x": "0;
"}}
                        transition = {;
  { "duration": "0.2",;
  "delay": "itemInde x * 0.05;
"}}
                      >";
                        <item.icon className="w-4 h-4" />;
                        <span>{item.name}</span>;
                        {isActive(item.href) && (";
                          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>;
                        )}
                      </Link>;
                    ))}
                  </motion.div>;
                )}
              </AnimatePresence>;
            </div>) ) }
        </nav>;
        {/* Contact Info */}
        <motion.div";
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg";
          initial = {;
  { "opacity": "0",;
  "y": "2 0;
"}}
          animate = {;
  { "opacity": "1",;
  "y": "0;
"}}
          transition = {;
  { "duration": "0.5",;
  "delay": "0.5;

}}
        >"
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?"
          <div className="space-y-2 text-xs text-zion-slate-light">"
            <div className="flex items-center space-x-2">"
              <Phone className="w-3 h-3"   />
              <span>+1 302 464 0950</span>
            </div>"
            <div className="flex items-center space-x-3 text-sm text-slate-400">"
              <Mail className="w-4 h-4"   />
              <span>kleber@ziontechgroup.com</span>
            </div>"
            <div className="flex items-center space-x-2">"
              <MapPin className="w-3 h-3"   />;              <span>Middletown, DE</span>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </aside>;) };
'"`;
</motion>;
</motion>