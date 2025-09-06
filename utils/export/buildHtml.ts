
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
=======
    .join ('\n\n'),
  const visuals_html = [;
    ...visuals.timeline_images,
    ...visuals.daoVoteCharts,
    ...visuals.ui_screens];
    .map ((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join ('\n'),
  const barcode = meta.isbn ? `<img class="barcode" src="/api / barcode / isbn?code=${encodeURIComponent (meta.isbn)}" />` : '';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return `<!doctype html>;
<html>;
<head>;
<meta charset="utf-8" />;
<title>${escapeHtml(meta.title)}</title>;
<style>;

=======

;
function escapeHtml(s: string): string {;
  return s;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');

}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
