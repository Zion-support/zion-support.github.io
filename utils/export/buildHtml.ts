<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { BookProject } from '../book/bookTypes',;
=======
=======
import type { BookProject } from '../book/bookTypes',;
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project,;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
    .join('\n'),;



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


interface Chapter {
  title: string;
  content: string;
}

interface Visuals {
  timelineImages: string[];
  daoVoteCharts: string[];
  uiScreens: string[];
}



pr-12325
import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {const { meta, chapters, visuals } = project;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import type { BookProject } from '../book/bookTypes';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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




    .join('\n\n'),;
  const visualsHtml = [;
    ...visuals.timelineImages,;
    ...visuals.daoVoteCharts,;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n'),;

  const chapterHtml = chapters;
    .map(;
      (c) => `;
      <section class="chapter">;
        <h2>${escapeHtml(c.title)}</h2>;
        <div class="content">${paragraphize(c.content)}</div>;
      </section>;
    `);
    .join('\n\n');
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    .join('\n');    .join('\n\n');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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








  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';


  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
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
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a






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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




<<<<<<< HEAD

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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
interface Meta {
  title: string;
  subtitle?: string;
  author: string;
  publisher?: string;
}
</style>;
</head>;
<body>;
  <section class="cover">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

<<<<<<< HEAD
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
=======

  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
  return `<!doctype html>;
<html>;
<head>;
<meta charset="utf-8" />;
<title>${escapeHtml(meta.title)}</title>;
<style>;
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







>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
</style>;
</head>;
<body>;
  <section class="cover">;






    <div>${escape_html (meta.publisher || '')}</div>;
    <h1>${escape_html (meta.title)}</h1>;
    <h3>${escape_html (meta.subtitle || '')}</h3>;
    <div class="by">By ${escape_html (meta.author)}</div>;


    <div>${escapeHtml(meta.publisher |'')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle |'')}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;







    ${barcode}
  </section>;
  ${quotes_html}
  ${chapter_html}
  ${visuals_html}
</body>;
</html>`;
}


function paragraphize(text: string): string {if (!text) return '';
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
  return text;
    .split(/\n\n+/);
    .map((p) => `<p>${escapeHtml(p)}</p>`);
    .join('\n');
}
function escapeHtml(s: string): string {return s;
;
function escapeHtml(s: string): string {;
  return s;
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function paragraphize(text: string): string {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
















;
function escapeHtml(s: string): string {;
  return s;
    .replace(/&/g, '&amp,');
}
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }




}

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
<<<<<<< HEAD
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
=======
}


}


}

}
  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

"`;
pr-12325
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
