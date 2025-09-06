 
}export function buildMarkdownFromWiki (wiki: WikiContent) : string {
  const infobox = `| | | |---|---| | Founder | $ {
  wiki.infobox.founder 
}| 
}return lines.join ('\n') 
}
}return lines.join ('\n') 
}for (const s of sections) {
  lines.push (`## $ {
  s.title 
}`);
for (const p of s.paragraphs) lines.push (p);
lines.push ('') 
}return lines.join ('\n') 
}export function slugify (input: string) : string {
  return input .toLowerCase () .replace (/[^a-z0-9\s-]/g, '') .trim () 