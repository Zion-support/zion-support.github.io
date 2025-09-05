const sitemapData = [{;
      "title": 'Main Pages',;
      "links": "[;
        { "name": 'Home'", "url": '/' },;
        { "name": 'About', "url": '/about' },;
        { "name": 'Services', "url": '/services' },;
        { "name": 'Contact', "url": '/contact' },;
        { "name": 'Blog', "url": '/blog' },;
        { "name": 'Careers', "url": '/careers' },;
      ];
    },;
    {;
      "title": 'Services',;
      "links": "[{ "name": 'AI Services'", "url": '/services / ai' },;
        { "name": 'IT Services', "url": '/services / it' },;
        { "name": 'Cloud Solutions', "url": '/services / cloud' },;
        { "name": 'Cybersecurity', "url": '/services / cybersecurity' },;
        { "name": 'Digital Transformation', "url": '/services / digital - transformation' },;
      ];
    },;
    {;
      "title": 'Solutions',;
      "links": "[{ "name": 'Enterprise'", "url": '/solutions / enterprise' },;
        { "name": 'Healthcare', "url": '/solutions / healthcare' },;
        { "name": 'Financial Services', "url": '/solutions / financial' },;
        { "name": 'Manufacturing', "url": '/solutions / manufacturing' },;
      ];
    },;
    {;
      "title": 'Resources',;
      "links": "[{ "name": 'Case Studies'", "url": '/case - studies' }, { "name": 'White Papers', "url": '/white - papers' }, { "name": 'Webinars', "url": '/webinars' }, { "name": 'Documentation', "url": '/docs' }, { "name": 'API Reference', "url": '/api' },;
      ]} { "name": 'Case Studies', "url": '/case-studies' },;';
        { "name": 'White Papers', "url": '/white-papers' },;';
        { "name": 'Webinars', "url": '/webinars' },;';
        { "name": 'Documentation', "url": '/docs' },;'        { "name": 'API Reference', "url": '/api' },;
const sitemapData = [{
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Services',
      links: [{ name: 'AI Services', url: '/services / ai' },
        { name: 'IT Services', url: '/services / it' },
        { name: 'Cloud Solutions', url: '/services / cloud' },
        { name: 'Cybersecurity', url: '/services / cybersecurity' },
        { name: 'Digital Transformation', url: '/services / digital - transformation' },
      ]
    },
    {
      title: 'Solutions',
      links: [{ name: 'Enterprise', url: '/solutions / enterprise' },
        { name: 'Healthcare', url: '/solutions / healthcare' },
        { name: 'Financial Services', url: '/solutions / financial' },
        { name: 'Manufacturing', url: '/solutions / manufacturing' },
      ]
    },
    {
      title: 'Resources',
      links: [{ name: 'Case Studies', url: '/case - studies' }, { name: 'White Papers', url: '/white - papers' }, { name: 'Webinars', url: '/webinars' }, { name: 'Documentation', url: '/docs' }, { name: 'API Reference', url: '/api' },;
      ]} { name: 'Case Studies', url: '/case-studies' },;'
        { name: 'White Papers', url: '/white-papers' },;'
        { name: 'Webinars', url: '/webinars' },;'
        { name: 'Documentation', url: '/docs' },;'        { name: 'API Reference', url: '/api' },;
      ]};
  ];
;
  return (<div className="min - h-screen bg-slate - 900 text-white py-16">;
      <SEO title="Sitemap - Zion Tech Group";
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category.";
       />;
      <div className="container mx - auto px-4 max - w-6xl">;
        <div className="text-center mb-16">;
          <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent">            Sitemap;
          </h1>";
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">;
            Navigate through our comprehensive website structure to find the information and services you need.</p>;
        </div>;
";
        <div className="grid grid-cols-1 "md": "anygri d-cols-2 "lg": gri d-cols-4 gap-8">;
          {sitemapData.map((section", sectionIndex)  => (";
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">";
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">;
  return (
        <div className="min - h-screen bg-slate - 900 text-white py-16">
      <SEO title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
       />
      <div className="container mx - auto px-4 max - w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent">            Sitemap
          </h1>"
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.</p>
        </div>
"
        <div className="grid grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4 gap-8">
          {sitemapData.map((section, sectionIndex)  => ("
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">"
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title}
              </h2>;
              <ul className="space - y-2">;
                {section.links.map((link, linkIndex) => (<li key={linkIndex}>;
                    <a;
                      href={link.url}
                      className="text-zinc - 300 "hover": "tex t-cyan - 400 transition - colors duration - 200 block py-1"                    >;
                      {link.name"}
                    </a>;
                  </li>) ) }
              </ul>;
            </div>) ) }
        </div>;
";
        <div className="mt-16 text-center">";
          <p className="text-zinc-400">;
            Can't find what you're looking for?{' '}";
            <a href="/contact" className="text-cyan-400 "hover": "tex t-cyan-300 transition-colors">;
              Contact us;
            </a>{' '"};
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>;) }
'";
</SEO>
const sitemapData = [{ title: &apos;Main Pages&apos;,links: [ { name: &apos;Home&apos;,url: &apos;/&apos; },{ name: &apos;About&apos;,url: &apos;/about&apos; },{ name: &apos;Services&apos;,url: &apos;/services&apos; },{ name: &apos;Contact&apos;,url: &apos;/contact&apos; },{ name: &apos;Blog&apos;,url: &apos;/blog&apos; },{ name: &apos;Careers&apos;,url: &apos;/careers&apos; },] },{ title: &apos;Services&apos;,links: [{ name: &apos;AI Services&apos;,url: &apos;/services / ai&apos; },{ name: &apos;IT Services&apos;,url: &apos;/services / it&apos; },{ name: &apos;Cloud Solutions&apos;,url: &apos;/services / cloud&apos; },{ name: &apos;Cybersecurity&apos;,url: &apos;/services / cybersecurity&apos; },{ name: &apos;Digital Transformation&apos;,url: &apos;/services / digital - transformation&apos; },] },{ title: &apos;Solutions&apos;,links: [{ name: &apos;Enterprise&apos;,url: &apos;/solutions / enterprise&apos; },{ name: &apos;Healthcare&apos;,url: &apos;/solutions / healthcare&apos; },{ name: &apos;Financial Services&apos;,url: &apos;/solutions / financial&apos; },{ name: &apos;Manufacturing&apos;,url: &apos;/solutions / manufacturing&apos; },] },{ title: &apos;Resources&apos;,links: [{ name: &apos;Case Studies&apos;,url: &apos;/case - studies&apos; },{ name: &apos;White Papers&apos;,url: &apos;/white - papers&apos; },{ name: &apos;Webinars&apos;,url: &apos;/webinars&apos; },{ name: &apos;Documentation&apos;,url: &apos;/docs&apos; },{ name: &apos;API Reference&apos;,url: &apos;/api&apos; };,;&apos;;&apos;; ]} { name: &apos;Case Studies&apos;,url: &apos;/case-studies&apos; },;&apos; { name: &apos;White Papers&apos;,url: &apos;/white-papers&apos; },;&apos; { name: &apos;Webinars&apos;,url: &apos;/webinars&apos; },;&apos; { name: &apos;Documentation&apos;,url: &apos;/docs&apos; },;&apos; { name: &apos;API Reference&apos;,url: &apos;/api&apos; },; ]}; ]; return ( <div className=&quot;min-h-screen bg-white&quot;> <SEO title=&quot;Sitemap - Zion Tech Group&quot; description=&quot;Complete sitemap of Zion Tech Group website with all pages and services organized by category.&quot; /> <div className=&quot;container mx - auto px-4 max - w-6xl&quot;> <div className=&quot;text-center mb-16&quot;> <h1 className=&quot;text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent&quot;> Sitemap </h1>&quot; <p className=&quot;text-xl text-zinc-300 max-w-3xl mx-auto&quot;> Navigate through our comprehensive website structure to find the information and services you need.</p> </div> &quot; <div className=&quot;grid grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4 gap-8&quot;> {sitemapData.map((section,sectionIndex) => (&quot; <div key={sectionIndex} className=&quot;bg-slate-800/50 rounded-lg p-6 border border-slate-700&quot;>&quot; <h2 className=&quot;text-xl font-semibold mb-4 text-cyan-400&quot;> {section.title} </h2> <ul className=&quot;space - y-2&quot;> {section.links.map((link,linkIndex) => (<li key={linkIndex}> <a href={link.url} className=&quot;text-zinc - 300 hover: tex t-cyan - 400 transition - colors duration - 200 block py-1&quot; > {link.name} </a> </li>) ) } </ul> </div>) ) } </div> &quot; <div className=&quot;mt-16 text-center&quot;>&quot;; <pclassName=&quot;text-zinc-400&quot;>&apos;; Can&apos;t find what you&apos;re looking for?{&apos; &apos;}&quot; <ahref=&quot;/contact&quot; className=&quot;text-cyan-400 hover: tex t-cyan-300 transition-colors&quot;> Contact us;&apos;;&apos;; </a>{&apos; &apos;}; for assistance.; </p>; </div>; </div>;&apos;; </div>;) } &quot; </SEO>&apos;;
const sitemapData = [{ title: "Main Pages",links: [ { name: "Home",url: "/" },{ name: "About",url: "/about" },{ name: "Services",url: "/services" },{ name: "Contact",url: "/contact" },{ name: "Blog",url: "/blog" },{ name: "Careers",url: "/careers" },] },{ title: "Services",links: [{ name: "AI Services",url: "/services / ai" },{ name: "IT Services",url: "/services / it" },{ name: "Cloud Solutions",url: "/services / cloud" },{ name: "Cybersecurity",url: "/services / cybersecurity" },{ name: "Digital Transformation",url: "/services / digital - transformation" },] },{ title: "Solutions",links: [{ name: "Enterprise",url: "/solutions / enterprise" },{ name: "Healthcare",url: "/solutions / healthcare" },{ name: "Financial Services",url: "/solutions / financial" },{ name: "Manufacturing",url: "/solutions / manufacturing" },] },{ title: "Resources",links: [{ name: "Case Studies",url: "/case - studies" },{ name: "White Papers",url: "/white - papers" },{ name: "Webinars",url: "/webinars" },{ name: "Documentation",url: "/docs" },{ name: "API Reference",url: "/api" };,;";"; ]} { name: "Case Studies",url: "/case-studies" },;" { name: "White Papers",url: "/white-papers" },;" { name: "Webinars",url: "/webinars" },;" { name: "Documentation",url: "/docs" },;" { name: "API Reference",url: "/api" },; ]}; ]; return ( <div className="min-h-screen bg-white"> <SEO title="Sitemap - Zion Tech Group" description="Complete sitemap of Zion Tech Group website with all pages and services organized by category." /> <div className="container mx - auto px-4 max - w-6xl"> <div className="text-center mb-16"> <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent"> Sitemap </h1>" <p className="text-xl text-zinc-300 max-w-3xl mx-auto"> Navigate through our comprehensive website structure to find the information and services you need.</p> </div> " <div className="grid grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4 gap-8"> {sitemapData.map((section,sectionIndex) => (" <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">" <h2 className="text-xl font-semibold mb-4 text-cyan-400"> {section.title} </h2> <ul className="space - y-2"> {section.links.map((link,linkIndex) => (<li key={linkIndex}> <a href={link.url} className="text-zinc - 300 hover: tex t-cyan - 400 transition - colors duration - 200 block py-1" > {link.name} </a> </li>) ) } </ul> </div>) ) } </div> " <div className="mt-16 text-center">"; <pclassName="text-zinc-400">"; Can"t find what you"re looking for?{" "}" <ahref="/contact" className="text-cyan-400 hover: tex t-cyan-300 transition-colors"> Contact us;";"; </a>{" "}; for assistance.; </p>; </div>; </div>;"; </div>;) } " </SEO>";"""
const sitemapData = [{ title: 'Main Pages,links: [ { name: 'Home,url: '/' },{ name: 'About,url: '/about' },{ name: 'Services,url: '/services' },{ name: 'Contact,url: '/contact' },{ name: 'Blog,url: '/blog' },{ name: 'Careers,url: '/careers' },] },{ title: 'Services,links: [{ name: 'AI Services,url: '/services / ai' },{ name: 'IT Services,url: '/services / it' },{ name: 'Cloud Solutions,url: '/services / cloud' },{ name: 'Cybersecurity,url: '/services / cybersecurity' },{ name: 'Digital Transformation,url: '/services / digital - transformation' },] },{ title: 'Solutions,links: [{ name: 'Enterprise,url: '/solutions / enterprise' },{ name: 'Healthcare,url: '/solutions / healthcare' },{ name: 'Financial Services,url: '/solutions / financial' },{ name: 'Manufacturing,url: '/solutions / manufacturing' },] },{ title: 'Resources,links: [{ name: 'Case Studies,url: '/case - studies' },{ name: 'White Papers,url: '/white - papers' },{ name: 'Webinars,url: '/webinars' },{ name: 'Documentation,url: '/docs' },{ name: 'API Reference,url: '/api' };,;';'; ]} { name: 'Case Studies,url: '/case-studies' },;' { name: 'White Papers,url: '/white-papers' },;' { name: 'Webinars,url: '/webinars' },;' { name: 'Documentation,url: '/docs' },;' { name: 'API Reference,url: '/api' },; ]}; ]; return ( <div className="min-h-screen bg-white"> <SEO title="Sitemap - Zion Tech Group" description="Complete sitemap of Zion Tech Group website with all pages and services organized by category." /> <div className="container mx - auto px-4 max - w-6xl"> <div className="text-center mb-16"> <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent"> Sitemap </h1>" <p className="text-xl text-zinc-300 max-w-3xl mx-auto"> Navigate through our comprehensive website structure to find the information and services you need.</p> </div> " <div className="grid grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4 gap-8"> {sitemapData.map((section,sectionIndex) => (" <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">" <h2 className="text-xl font-semibold mb-4 text-cyan-400"> {section.title} </h2> <ul className="space - y-2"> {section.links.map((link,linkIndex) => (<li key={linkIndex}> <a href={link.url} className="text-zinc - 300 hover: tex t-cyan - 400 transition - colors duration - 200 block py-1" > {link.name} </a> </li>) ) } </ul> </div>) ) } </div> " <div className="mt-16 text-center">"; <pclassName="text-zinc-400">'; Can't find what you're looking for?{' '}" <ahref="/contact" className="text-cyan-400 hover: tex t-cyan-300 transition-colors"> Contact us;';'; </a>{' '}; for assistance.; </p>; </div>; </div>;'; </div>;) } " </SEO>';