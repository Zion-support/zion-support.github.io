

import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {const { meta, chapters, visuals } = project;
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
    .join('\n');    .join('\n\n');
  const visualsHtml = [;
    ...visuals.timelineImages;
    ...visuals.daoVoteCharts;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n');

  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
