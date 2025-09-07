



import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {const { meta, chapters, visuals } = project;
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : }</blockquote>`);`;
    .map ((q) => `<blockquote class="quote"><p>${escape_html (q.text)}</p>${q.attribution ? `<cite>${escape_html (q.attribution)}</cite>` : }</blockquote>`);
      <section class="chapter">;"
</section>
        <h2>${escape_html (c.title)}</h2>;"
        <div class="content">${paragraphize (c.content)}</div>;"
      </section>;"`;
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;""`;
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : ;
</img>`;
    .map ((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;""`;
  const barcode = meta.isbn ? `<img class="barcode" src="/api / barcode / isbn?code=${encodeURIComponent (meta.isbn)}" />` : ;
  return `<!doctype html>;
<html>;
</html>
<head>;
</head>
<meta charset="utf - 8" />;"
</meta>
<title>${escape_html (meta.title)}</title>;
<style>;
</style>
</style>;
</head>;
<body>;
</body>"
  <section class="cover">;"
</section>"
    <div>${escape_html (meta.publisher || )}</div>;
    <h1>${escape_html (meta.title)}</h1>;
    <h3>${escape_html (meta.subtitle || )}</h3>;
    <div class="by">By ${escape_html (meta.author)}</div>;"
  </section>;
</body>;`;
</html>`;"
    <div>${escapeHtml(meta.publisher || )}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle || )}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;"
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');
function paragraphize (text: string): string {
  // TODO: Implement
}
  // Check condition;
if (return ) {
  $2;
  return text;
    .split (/\n\n+/);`;
    .map ((p) => `<p>${escape_html (p)}</p>`);
    .replace (/</g, '<');
    .replace (/>/g, '>');
    .replace (/"/g, '"');
    .replace (/'/g, '&#039, ');


  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

"`;