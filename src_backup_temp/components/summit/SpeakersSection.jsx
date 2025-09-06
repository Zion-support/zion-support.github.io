const speakers = [;
    {"name": 'Alex Zion',;
        "title": 'Founder & CEO',;
        "avatar": '"https": "//placehold.co/100x100'",;
        "twitter": '#',;
        "linkedin": '#'},;
];
export function SpeakersSection("props": "any) {;
    return (<section className="py-12 bg-zion-blue-dark text-white" id="speakers">;
      <div className="container mx-auto px-4">;
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>;
        <div className="grid gap-8 "sm":grid-cols-2 "md":grid-cols-3 "lg":grid-cols-4 justify-items-center">;
          {speakers.map((sp) => (<div key={sp.name"} className="text-center space-y-2">;
              <img loading="lazy" src={sp.avatar} alt={sp.name} className="w-24 h-24 rounded-full mx-auto"  />;
              <p className="font-semibold">{sp.name}</p>;
              <p className="text-sm opacity-80">{sp.title}</p>;
              <div className="flex justify-center gap-3 text-zion-cyan">;
const speakers = [ {name: &apos;Alex Zion&apos;,title: &apos;Founder & CEO&apos;,avatar: &apos;https: twitter: &apos;#&apos;,linkedin: &apos;#&apos;,};,]; export function SpeakersSection($1) { return (<section className=&quot;py-12 bg-zion-blue-dark text-white&quot; id=&quot;speakers&quot;> <div className=&quot;container mx-auto px-4&quot;> <h2 className=&quot;text-3xl font-bold mb-8 text-center&quot;>Speakers</h2> <div className=&quot;grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center&quot;> {speakers.map((sp) => (<div key={sp.name} className=&quot;text-center space-y-2&quot;> <img loading=&quot;lazy&quot; src={sp.avatar} alt={sp.name} className=&quot;w-24 h-24 rounded-full mx-auto&quot; /> <p className=&quot;font-semibold&quot;>{sp.name}</p> <p className=&quot;text-sm opacity-80&quot;>{sp.title}</p> <div className=&quot;flex justify-center gap-3 text-zion-cyan&quot;> {sp.twitter && (<a href={sp.twitter} aria-label=&quot;Twitter&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>T</a>)} {sp.linkedin && (<a href={sp.linkedin} aria-label=&quot;LinkedIn&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>in</a>)} </div> </div>))} </div> </div> </section>)} export default SpeakersSection;
const speakers = [{"name": 'Alex Zion',
        "title": 'Founder & CEO',
        "avatar": 'https://placehold.co/100x100',
        "twitter": '#',
        "linkedin": '#'};,
];
export function SpeakersSection($1) {
    return (<section className="py-12 bg-zion-blue-dark text-white" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2>
        <div className="grid gap-8 "sm": grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {speakers.map((sp) => (<div key={sp.name} className="text-center space-y-2">
              <img loading="lazy" src={sp.avatar} alt={sp.name} className="w-24 h-24 rounded-full mx-auto"  />
              <p className="font-semibold">{sp.name}</p>
              <p className="text-sm opacity-80">{sp.title}</p>
              <div className="flex justify-center gap-3 text-zion-cyan">
                {sp.twitter && (<a href={sp.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">T</a>)}
                {sp.linkedin && (<a href={sp.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>)}
              </div>;
            </div>))}
        </div>;
      </div>;
    </section>)}
;
export default SpeakersSection;
export default SpeakersSection;
const speakers = [ {name: 'Alex Zion',title: 'Founder & CEO',avatar: 'https: twitter: '#',linkedin: '#',};,]; export function SpeakersSection($1) { return (<section className="py-12 bg-zion-blue-dark text-white" id="speakers"> <div className="container mx-auto px-4"> <h2 className="text-3xl font-bold mb-8 text-center">Speakers</h2> <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"> {speakers.map((sp) => (<div key={sp.name} className="text-center space-y-2"> <img loading="lazy" src={sp.avatar} alt={sp.name} className="w-24 h-24 rounded-full mx-auto" /> <p className="font-semibold">{sp.name}</p> <p className="text-sm opacity-80">{sp.title}</p> <div className="flex justify-center gap-3 text-zion-cyan"> {sp.twitter && (<a href={sp.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">T</a>)} {sp.linkedin && (<a href={sp.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>)} </div> </div>))} </div> </div> </section>)} export default SpeakersSection;