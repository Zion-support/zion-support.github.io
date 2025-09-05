import type {_BookProject} from '../book/bookTypes';

export function buildPrintableHtml(_project: BookProject): string {_const { meta, _chapters, _visuals} = project;
  const _quotesHtml = visuals.quoteCallouts
    .map(_(q) => `<blockquote class="quote"><p>${_escapeHtml(q.text)}</p>${_q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`)
    .join('\n');

  const _chapterHtml = chapters
    .map(_(c) => `
      <section class="chapter">
        <h2>${_escapeHtml(c.title)}</h2>
        <div class="content">${_paragraphize(c.content)}</div>
      </section>
    `,
    )
    .join('\n\n');

  const _visualsHtml = [
    ...visuals.timelineImages,
    ...visuals.daoVoteCharts,
    ...visuals.uiScreens]
    .map(_(src) => `<figure class="visual"><img src="${_src}" /></figure>`) // base64 ok
    .join('\n');

  const _barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${_encodeURIComponent(meta.isbn)}" />` : '';

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${_escapeHtml(meta.title)}</title>
<style>
  @page {_margin: 1in;}
  body {_font-family: ui-serif, _Georgia, _Cambria, _'Times New Roman', _Times, _serif; color: #111;}
  .cover {_break-after: page; display: flex; flex-direction: column; justify-content: center; height: 90vh;}
  .cover h1 {_font-size: 40px; margin: 0;}
  .cover h3 {_font-size: 20px; margin: 8px 0 0 0; color: #444;}
  .cover .by {_margin-top: 24px; color: #666;}
  .barcode {_margin-top: 24px; height: 64px;}
  .quote {_border-left: 4px solid #222; padding-left: 12px; margin: 16px 0; color: #333;}
  .quote cite {_display:block; margin-top:6px; color:#666; font-style: normal;}
  .chapter {_break-before: page;}
  .chapter h2 {_font-size: 28px; margin: 0 0 12px 0;}
  .content p {_line-height: 1.6; margin: 0 0 12px 0; white-space: pre-wrap;}
  .visual {_break-inside: avoid; margin: 12px 0;}
  .visual img {_max-width: 100%; height: auto;}
</style>
</head>
<body>
  <section class="cover">
    <div>${_escapeHtml(meta.publisher || '')}</div>
    <h1>${_escapeHtml(meta.title)}</h1>
    <h3>${_escapeHtml(meta.subtitle || '')}</h3>
    <div class="by">By ${_escapeHtml(meta.author)}</div>
    ${_barcode}
  </section>
  ${_quotesHtml}
  ${_chapterHtml}
  ${_visualsHtml}
</body>
</html>`;
}

function paragraphize(_text: string): string {_if (!text) return '';
  return text
    .split(/\n\n+/)
    .map(_(p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n');
}

function escapeHtml(_s: string): string {_return s
    .replace(/&/g, _'&amp;')
    .replace(/</g, _'&lt;')
    .replace(/>/g, _'&gt;')
    .replace(/"/g, _'&quot;')
    .replace(/'/g, _'&#039;');}