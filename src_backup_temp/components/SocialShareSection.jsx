export function SocialShareSection("props": "any) {;
    const socialPlatforms = [;
        { "name": 'Twitter'", "icon": '🐦', "url": '"https": "//twitter.com/ziontechgroup' "},;
        {"name": 'LinkedIn', "icon": '💼', "url": '"https": "//linkedin.com/company/ziontechgroup'"},;
        {"name": 'Facebook', "icon": '📘', "url": '"https": "//facebook.com/ziontechgroup'"},;
        {"name": 'Instagram', "icon": '📷', "url": '"https": "//instagram.com/ziontechgroup'"}
    ];
    return (<section className="py-16 bg-white/5">;
      <div className="container mx-auto px-4 text-center">;
        <h2 className="text-3xl font-bold text-white mb-8">;
          Follow Us;
        </h2>;
        <p className="text-xl text-zion-slate-light mb-8">;
          Stay connected and get the latest updates;
        </p>;
        <div className="flex justify-center space-x-8">;
          {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-4xl "hover": "scale-110 transition-transform" title={platform.name"}>;
export function SocialShareSection($1) { const socialPlatforms = [ { name: &apos;Twitter&apos;,icon: &apos;🐦&apos;,url: &apos;https: {name: &apos;LinkedIn&apos;,icon: &apos;💼&apos;,url: &apos;https: {name: &apos;Facebook&apos;,icon: &apos;📘&apos;,url: &apos;https: {name: &apos;Instagram&apos;,icon: &apos;📷&apos;,url: &apos;https: ]; return (<section className=&quot;py-16 bg-white/5&quot;> <div className=&quot;container mx-auto px-4 text-center&quot;> <h2 className=&quot;text-3xl font-bold text-white mb-8&quot;> Follow Us </h2> <p className=&quot;text-xl text-zion-slate-light mb-8&quot;> Stay connected and get the latest updates </p> <div className=&quot;flex justify-center space-x-8&quot;> {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-4xl hover:scale-110 transition-transform&quot; title={platform.name}> {platform.icon} </a>))} </div> </div> </section>)} export default SocialShareSection;
export function SocialShareSection($1) {
    const socialPlatforms = [{ "name": 'Twitter', "icon": '🐦', "url": 'https://twitter.com/ziontechgroup' },
        {"name": 'LinkedIn', "icon": '💼', "url": 'https://linkedin.com/company/ziontechgroup'},
        {"name": 'Facebook', "icon": '📘', "url": 'https://facebook.com/ziontechgroup'},
        {"name": 'Instagram', "icon": '📷', "url": 'https://instagram.com/ziontechgroup'};
    ];
    return (<section className="py-16 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Follow Us
        </h2>
        <p className="text-xl text-zion-slate-light mb-8">
          Stay connected and get the latest updates
        </p>
        <div className="flex justify-center space-x-8">
          {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-4xl "hover": scale-110 transition-transform" title={platform.name}>
              {platform.icon}
            </a>))}
        </div>;
      </div>;
    </section>)}
;
export default SocialShareSection;
export default SocialShareSection;
export function SocialShareSection($1) { const socialPlatforms = [ { name: 'Twitter',icon: '🐦',url: 'https: {name: 'LinkedIn',icon: '💼',url: 'https: {name: 'Facebook',icon: '📘',url: 'https: {name: 'Instagram',icon: '📷',url: 'https: ]; return (<section className="py-16 bg-white/5"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl font-bold text-white mb-8"> Follow Us </h2> <p className="text-xl text-zion-slate-light mb-8"> Stay connected and get the latest updates </p> <div className="flex justify-center space-x-8"> {socialPlatforms.map((platform) => (<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="text-4xl hover:scale-110 transition-transform" title={platform.name}> {platform.icon} </a>))} </div> </div> </section>)} export default SocialShareSection;