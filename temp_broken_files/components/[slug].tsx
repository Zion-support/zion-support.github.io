 if (!service) {
  return (<UltraAdvancedFuturisticBackground> </div> </div> </UltraAdvancedFuturisticBackground> return (<UltraAdvancedFuturisticBackground> <Head>) ) 
}</ul> </div> <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit" > <div className="flex items-end justify-between mb-3" > <div> </div> </div> </div> </div> </div> </UltraAdvancedFuturisticBackground>) 
}//Static export support: generate root-level pages for service slugs type Svc = typeof enhancedRealMicroSaasServices[number];
function collectAllServices () : Svc[] {
  return enhancedRealMicroSaasServices .concat (
}catch {
  return null;
}
}export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices ();
const candidateSlugs = new Set<string> ();
//Gather existing root-level page slugs to avoid conflicts const pagesDir = path.join (process.cwd (), 'pages');
const staticSlugs = new Set<string> ();
try {
  const entries = fs.readdirSync (pagesDir, {
  withFileTypes: true 
});
for (const entry of entries) {
  if (entry.isFile () && /\.tsx?$/.test (entry.name) ) {
  const base = entry.name.replace (/\. (tsx|ts|jsx|js) $/i, '');
if (base !== 'index'&& base !== '[slug]'&& !base.startsWith (' ') ) {
  staticSlugs.add (base.toLowerCase () ) 
}
}
}
}catch {
  
}return {
  paths: uniqueNonConflicting.map ( (slug) => ({
  params: {
  slug 
}
}) );
fallback: true 
}
};
