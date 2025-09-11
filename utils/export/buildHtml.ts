


<<<<<<< HEAD
<<<<<<< HEAD
import type { BookProject } from '../book/bookTypes',;
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project,;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
    .join('\n'),;
import type { BookProject } from '../book/bookTypes';
export function buildPrintableHtml(project: BookProject): string {;
  const { meta, chapters, visuals } = project;
  const quotesHtml = visuals.quoteCallouts;
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`);
    .join('\n');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const chapterHtml = chapters;
    .map(;
      (c) => `;
      <section class="chapter">;
        <h2>${escapeHtml(c.title)}</h2>;
        <div class="content">${paragraphize(c.content)}</div>;
      </section>;
    `);
<<<<<<< HEAD
<<<<<<< HEAD
    .join('\n\n'),;
  const visualsHtml = [;
    ...visuals.timelineImages,;
    ...visuals.daoVoteCharts,;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n'),;
    .join('\n\n');
  const visualsHtml = [;
    ...visuals.timelineImages;
    ...visuals.daoVoteCharts;
    ...visuals.uiScreens];
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join('\n');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    .join ('\n\n'),
  const visuals_html = [;
    ...visuals.timeline_images,
    ...visuals.daoVoteCharts,
    ...visuals.ui_screens];
    .map ((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok;
    .join ('\n'),
  const barcode = meta.isbn ? `<img class="barcode" src="/api / barcode / isbn?code=${encodeURIComponent (meta.isbn)}" />` : '';
<<<<<<< HEAD
<<<<<<< HEAD
  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return `<!doctype html>;
<html>;
<head>;
<meta charset="utf-8" />;
<title>${escapeHtml(meta.title)}</title>;
<style>;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
function escapeHtml(s: string): string {;
  return s;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
</style>;
</head>;
<body>;
  <section class="cover">;
<<<<<<< HEAD
<<<<<<< HEAD
    <div>${escapeHtml(meta.publisher |'')}</div>;
    <h1>${escapeHtml(meta.title)}</h1>;
    <h3>${escapeHtml(meta.subtitle |'')}</h3>;
    <div class="by">By ${escapeHtml(meta.author)}</div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <div>${escape_html (meta.publisher || '')}</div>;
    <h1>${escape_html (meta.title)}</h1>;
    <h3>${escape_html (meta.subtitle || '')}</h3>;
    <div class="by">By ${escape_html (meta.author)}</div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ${barcode}
  </section>;
  ${quotesHtml}
  ${chapterHtml}
  ${visualsHtml}
</body>;
</html>`;


}
<<<<<<< HEAD
<<<<<<< HEAD
function paragraphize(text: string): string {if (!text) return '';
  return text;
    .split(/\n\n+/);
    .map((p) => `<p>${escapeHtml(p)}</p>`);
    .join('\n');
=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
function escapeHtml(s: string): string {return s;
;
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
=======
function paragraphize(text: string): string {;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
}
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
