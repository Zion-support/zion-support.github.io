<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { BookProject } from '../book/bookTypes',;
=======

import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {const { meta, chapters, visuals } = project;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project,;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
<<<<<<< HEAD
    .join('\n'),;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project;
<<<<<<< HEAD
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
<<<<<<< HEAD
<<<<<<< HEAD
    .join('\n');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
  const quotesHtml = visuals.quoteCallouts;'
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);'
    .join('\n');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    .join('\n');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const chapterHtml = chapters;
    .map(;'
import type { BookProject } from '../book / book_types',
export function buildPrintableHtml (project: BookProject): string {};
  const { meta, chapters, visuals } = project,;
  const quotes_html = visuals.quote_callouts;'"`
    .map ((q) => `<blockquote class="quote"><p>${escape_html (q.text)}</p>${q.attribution ? `<cite>${escape_html (q.attribution)}</cite>` : ''}</blockquote>`);'
    .join ('\n'),
  const chapter_html = chapters;
    .map (`
      (c) => `;"
      <section class="chapter">;
        <h2>${escape_html (c.title)}</h2>;"
        <div class="content">${paragraphize (c.content)}</div>;
      </section>;`
    `);
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    .join('\n\n'),;
  const visualsHtml = [;
    ...visuals.timelineImages,;
    ...visuals.daoVoteCharts,;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n'),;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    .join('\n\n');
=======
    .join('\n');    .join('\n\n');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    .join('\n');    .join('\n\n');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const chapterHtml = chapters;
    .map(;
import type { BookProject } from '../book / book_types',
export function buildPrintableHtml (project: BookProject): string {
  const { meta, chapters, visuals } = project,
  const quotes_html = visuals.quote_callouts;
    .map ((q) => `<blockquote class="quote"><p>${escape_html (q.text)}</p>${q.attribution ? `<cite>${escape_html (q.attribution)}</cite>` : ''}</blockquote>`);
    .join ('\n'),
  const chapter_html = chapters;
    .map (
      (c) => `;
      <section class="chapter">;
        <h2>${escape_html (c.title)}</h2>;
        <div class="content">${paragraphize (c.content)}</div>;
      </section>;
    `);

    .join('\n\n');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const visualsHtml = [;
    ...visuals.timelineImages;
    ...visuals.daoVoteCharts;
    ...visuals.uiScreens];"`
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;'
    .join('\n');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






'"`
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
'
    .join ('\n\n'),
  const visuals_html = [;
    ...visuals.timeline_images,
    ...visuals.daoVoteCharts,
    ...visuals.ui_screens];"`
    .map ((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;'
    .join ('\n'),'"`
  const barcode = meta.isbn ? `<img class="barcode" src="/api / barcode / isbn?code=${encodeURIComponent (meta.isbn)}" />` : '';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======





  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
    .join ('\n\n'),
  const visuals_html = [;
    ...visuals.timeline_images,
    ...visuals.daoVoteCharts,
    ...visuals.ui_screens];
    .map ((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join ('\n'),
  const barcode = meta.isbn ? `<img class="barcode" src="/api / barcode / isbn?code=${encodeURIComponent (meta.isbn)}" />` : '';
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
<<<<<<< HEAD
=======  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
=======  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return `<!doctype html>;
<html>;
<head>;"
<meta charset="utf - 8" />;
<title>${escape_html (meta.title)}</title>;
<style>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
    console.error("Error:", error);
=======




=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



;
function escapeHtml(s: string): string {;
  return s;

<<<<<<< HEAD






  @page { margin: 1in   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
  body { font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif, color: #111   } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover { break-after: page, display: flex, flex-direction: column, justify-content: center, height: 90vh   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover h1 { font-size: 40px, margin: 0   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover h3 { font-size: 20px, margin: 8px 0 0 0, color: #444   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover .by { margin-top: 24px, color: #666   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .barcode { margin-top: 24px, height: 64px   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .quote { border-left: 4px solid #222, padding-left: 12px, margin: 16px 0, color: #333   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .quote cite { display: block, margin-top:6px, color:#666, font-style: normal   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .chapter { break-before: page   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .chapter h2 { font-size: 28px, margin: 0 0 12px 0   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .content p { line-height: 1.6, margin: 0 0 12px 0, white-space: pre-wrap   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .visual { break-inside: avoid, margin: 12px 0   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .visual img { max-width: 100%, height: auto   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  @page { margin: 1in }
  body { font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif, color: #111 }
  .cover { break-after: page, display: flex, flex-direction: column, justify-content: center, height: 90vh }
  .cover h1 { font-size: 40px, margin: 0 }
  .cover h3 { font-size: 20px, margin: 8px 0 0 0, color: #444 }
  .cover .by { margin-top: 24px, color: #666 }
  .barcode { margin-top: 24px, height: 64px }
  .quote { border-left: 4px solid #222, padding-left: 12px, margin: 16px 0, color: #333 }
  .quote cite { display: block, margin-top:6px, color:#666, font-style: normal }
  .chapter { break-before: page }
  .chapter h2 { font-size: 28px, margin: 0 0 12px 0 }
  .content p { line-height: 1.6, margin: 0 0 12px 0, white-space: pre-wrap }
  .visual { break-inside: avoid, margin: 12px 0 }
  .visual img { max-width: 100%, height: auto }
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
</style>;
</head>;
<body>;"
  <section class="cover">;
<<<<<<< HEAD
<<<<<<< HEAD
    <div>${escapeHtml(meta.publisher || '')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle || '')}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;
    ${barcode}
  </section>;
  ${quotesHtml}
  ${chapterHtml}
  ${visualsHtml}
</body>;
</html>`;
}
;
function paragraphize(text: string): string {;
  if (!text) return '';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
    <div>${escape_html (meta.publisher || '')}</div>;
    <h1>${escape_html (meta.title)}</h1>;'
    <h3>${escape_html (meta.subtitle || '')}</h3>;"
    <div class="by">By ${escape_html (meta.author)}</div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div>${escapeHtml(meta.publisher |'')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle |'')}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    ${barcode}
  </section>;
  ${quotes_html}
  ${chapter_html}
  ${visuals_html}
</body>;`
</html>`;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
function paragraphize(text: string): string {if (!text) return '';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return text;
    .split(/\n\n+/);
    .map((p) => `<p>${escapeHtml(p)}</p>`);
    .join('\n');
}
<<<<<<< HEAD
;
function escapeHtml(s: string): string {;
  return s;
=======
function escapeHtml(s: string): string {return s;
;
function escapeHtml(s: string): string {;
  return s;
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  @page { margin: 1in   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  body { font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif, color: #111   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover { break-after: page, display: flex, flex-direction: column, justify-content: center, height: 90vh   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover h1 { font-size: 40px, margin: 0   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover h3 { font-size: 20px, margin: 8px 0 0 0, color: #444   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .cover .by { margin-top: 24px, color: #666   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .barcode { margin-top: 24px, height: 64px   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .quote { border-left: 4px solid #222, padding-left: 12px, margin: 16px 0, color: #333   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .quote cite { display: block, margin-top:6px, color:#666, font-style: normal   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .chapter { break-before: page   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .chapter h2 { font-size: 28px, margin: 0 0 12px 0   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .content p { line-height: 1.6, margin: 0 0 12px 0, white-space: pre-wrap   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .visual { break-inside: avoid, margin: 12px 0   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  .visual img { max-width: 100%, height: auto   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
</style>;
</head>;
<body>;
  <section class="cover">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
    <div>${escapeHtml(meta.publisher || '')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;'
    <h3>${escapeHtml(meta.subtitle || '')}</h3>;"
    <div class="by">By ${escapeHtml(meta.author)}</div>;
    ${barcode  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  </section>;
  ${quotesHtml  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
=======
</style>;
</head>;
<body>;
  <section class="cover">;

    <div>${escape_html (meta.publisher || '')}</div>;
    <h1>${escape_html (meta.title)}</h1>;
    <h3>${escape_html (meta.subtitle || '')}</h3>;
    <div class="by">By ${escape_html (meta.author)}</div>;

    ${barcode}
  </section>;
  ${quotes_html}
  ${chapter_html}
  ${visuals_html}
</body>;
</html>`;
}


    <div>${escapeHtml(meta.publisher || '')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle || '')}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;
    ${barcode  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  </section>;
  ${quotesHtml  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ${chapterHtml  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ${visualsHtml  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
</body>;
</html>`;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function paragraphize(text: string): string {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });



    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');


function paragraphize (text: string): string {
  // Check condition
if (return '') {
  $2
}
  return text;
    .split (/\n\n+/);
    .map ((p) => `<p>${escape_html (p)}</p>`);
    .join ('\n');
}
function escape_html (string: string): string {
  return s;
    .replace (/&/g, '&amp, ');
    .replace (/</g, '<');
    .replace (/>/g, '>');
    .replace (/"/g, '"');
    .replace (/'/g, '&#039, ');
}


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
  ${chapterHtml  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ${visualsHtml  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
</body>;`
</html>`;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
;
function paragraphize(text: string): string {;'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======






'
    .replace(/&/g, '&amp,');'
    .replace(/</g, '<');'
    .replace(/>/g, '>');'"
    .replace(/"/g, '"');'
    .replace(/'/g, '&#039,');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




function paragraphize (text: string): string {}
  // Check condition'
if (return '') {}
  $2;
}
  return text;
    .split (/\n\n+/);`
    .map ((p) => `<p>${escape_html (p)}</p>`);'
    .join ('\n');
}
function escape_html (string: string): string {}
  return s;'
    .replace (/&/g, '&amp, ');'
    .replace (/</g, '<');'
    .replace (/>/g, '>');'"
    .replace (/"/g, '"');'
    .replace (/'/g, '&#039, ');
}





  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }



}



}
<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
