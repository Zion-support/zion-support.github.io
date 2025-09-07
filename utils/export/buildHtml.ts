interface Chapter {
  title: string;
  content: string;
}

interface Visuals {
  timelineImages: string[];
  daoVoteCharts: string[];
  uiScreens: string[];
}

interface Meta {
  title: string;
  subtitle?: string;
  author: string;
  publisher?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function paragraphize(content: string): string {
  return content
    .split('\n\n')
    .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
    .join('\n');
}

export function buildHtml(
  chapters: Chapter[],
  visuals: Visuals,
  meta: Meta,
  quotesHtml: string,
  barcode: string
): string {
  const chapterHtml = chapters
    .map((c) => `
      <section class="chapter">
        <h2>${escapeHtml(c.title)}</h2>
        <div class="content">${paragraphize(c.content)}</div>
      </section>
    `)
    .join('\n\n');

  const visualsHtml = [
    ...visuals.timelineImages,
    ...visuals.daoVoteCharts,
    ...visuals.uiScreens
  ];

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(meta.title)}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
      .cover { text-align: center; margin-bottom: 40px; }
      .chapter { margin-bottom: 30px; }
      h1 { font-size: 2.5em; margin-bottom: 10px; }
      h2 { font-size: 1.8em; margin-bottom: 15px; }
      h3 { font-size: 1.3em; margin-bottom: 20px; }
      .by { font-style: italic; margin-bottom: 20px; }
      p { line-height: 1.6; margin-bottom: 15px; }
    </style>
  </head>
  <body>
    <section class="cover">
      <div>${escapeHtml(meta.publisher || '')}</div>
      <h1>${escapeHtml(meta.title)}</h1>
      <h3>${escapeHtml(meta.subtitle || '')}</h3>
      <div class="by">By ${escapeHtml(meta.author)}</div>
      ${barcode}
    </section>
    ${quotesHtml}
    ${chapterHtml}
    ${visualsHtml.join('\n')}
  </body>
</html>`;
}