
import type { BookProject } from '../book/bookTypes';

  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
    .join('\n');

  const chapterHtml = chapters;
    .map(;
      (c) => `;
      <section class="chapter">;
        <h2>${escapeHtml(c.title)}</h2>;
        <div class="content">${paragraphize(c.content)}</div>;
      </section>;
    `);

    .join('\n\n');
  const visualsHtml = [;
    ...visuals.timelineImages;
    ...visuals.daoVoteCharts;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n');

  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
  return `<!doctype html>;
<html>;
<head>;
<meta charset="utf-8" />;
<title>${escapeHtml(meta.title)}</title>;
<style>;

    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');

}