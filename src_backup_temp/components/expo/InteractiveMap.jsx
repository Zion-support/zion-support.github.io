export function InteractiveMap("props": "any) {;
    const locations = [;
        { "name": 'New York'", "subdomain": 'ny.zionapp.com', "top": '40%', "left": '35%' },;
        {"name": 'London', "subdomain": 'london.zionapp.com', "top": '30%', "left": '50%'},;
        {"name": 'Tokyo', "subdomain": 'tokyo.zionapp.com', "top": '45%', "left": '80%'}
    ];
    return (<section className="py-12 bg-background text-foreground" id="map">;
      <div className="container mx-auto px-4 space-y-6 text-center">;
        <h2 className="text-3xl font-bold">Zion Multiverse Map</h2>;
        <div className="relative max-w-3xl mx-auto">;
          <img loading="lazy" src=""https": "//upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.png" alt="World map" className="w-full h-auto"  />;
          {locations.map((loc) => (<a key={loc.name"} href={`"https": "//${loc.subdomain"}`} className="absolute inline-flex items-center justify-center w-4 h-4 bg-zion-cyan rounded-full" style="{{{ "top": "loc.top; "left": loc.left"}}"} title={`Visit ${loc.name}`} />))}
        </div>;
      </div>;
    </section>)}
;
export default InteractiveMap;
export function InteractiveMap($1) { const locations = [ { name: &apos;New York&apos;,subdomain: &apos;ny.zionapp.com&apos;,top: &apos;40%&apos;,left: &apos;35%&apos; },{name: &apos;London&apos;,subdomain: &apos;london.zionapp.com&apos;,top: &apos;30%&apos;,left: &apos;50%&apos;},{name: &apos;Tokyo&apos;,subdomain: &apos;tokyo.zionapp.com&apos;,top: &apos;45%&apos;,left: &apos;80%&apos;}; ]; return (<section className=&quot;py-12 bg-background text-foreground&quot; id=&quot;map&quot;> <div className=&quot;container mx-auto px-4 space-y-6 text-center&quot;> <h2 className=&quot;text-3xl font-bold&quot;>Zion Multiverse Map</h2> <div className=&quot;relative max-w-3xl mx-auto&quot;> <img loading=&quot;lazy&quot; src=&quot;https: {locations.map((loc) => (<a key={loc.name} href={`https: </div> </div> </section>)} export default InteractiveMap;&apos;;&apos;;
export function InteractiveMap($1) {
    const locations = [{ "name": 'New York', "subdomain": 'ny.zionapp.com', "top": '40%', "left": '35%' },
        {"name": 'London', "subdomain": 'london.zionapp.com', "top": '30%', "left": '50%'},
        {"name": 'Tokyo', "subdomain": 'tokyo.zionapp.com', "top": '45%', "left": '80%'};
    ];
    return (<section className="py-12 bg-background text-foreground" id="map">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Zion Multiverse Map</h2>
        <div className="relative max-w-3xl mx-auto">
          <img loading="lazy" src=""https": //upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.png" alt="World map" className="w-full h-auto"  />
          {locations.map((loc) => (<a key={loc.name} href={`"https": //${loc.subdomain}`} className="absolute inline-flex items-center justify-center w-4 h-4 bg-zion-cyan rounded-full" style="{{{ "top": loc.top; left: loc.left}}"} title={`Visit ${loc.name}`} />))}
        </div>
      </div>
    </section>)}
export default InteractiveMap;';';
export function InteractiveMap($1) { const locations = [ { name: 'New York',subdomain: 'ny.zionapp.com',top: '40%',left: '35%' },{name: 'London',subdomain: 'london.zionapp.com',top: '30%',left: '50%'},{name: 'Tokyo',subdomain: 'tokyo.zionapp.com',top: '45%',left: '80%'}; ]; return (<section className="py-12 bg-background text-foreground" id="map"> <div className="container mx-auto px-4 space-y-6 text-center"> <h2 className="text-3xl font-bold">Zion Multiverse Map</h2> <div className="relative max-w-3xl mx-auto"> <img loading="lazy" src="https: {locations.map((loc) => (<a key={loc.name} href={`https: </div> </div> </section>)} export default InteractiveMap;';';