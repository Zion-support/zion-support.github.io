      (c) => `;
      <section class="chapter">;
        <h2>${escape_html (c.title)}</h2>;
        <div class="content">${paragraphize (c.content)}</div>;
      </section>;
    `);
  return `<!doctype html>;
<html>;
<head>;
<meta charset="utf - 8" />;
<title>${escape_html (meta.title)}</title>;
<style>;
  @page { margin: 1in }
  body { font - family: ui - serif, Georgia, Cambria, 'Times New Roman', Times, serif, color: #111 }
  .cover { break - after: page, display: flex, flex - direction: column, justify - content: center, height: 90vh }
  .cover h1 { font - size: 40px, margin: 0 }
  .cover h3 { font - size: 20px, margin: 8px 0 0 0, color: #444 }
  .cover .by { margin - top: 24px, color: #666 }
  .barcode { margin - top: 24px, height: 64px }
  .quote { border - left: 4px solid #222, padding - left: 12px, margin: 16px 0, color: #333 }
  .quote cite { display: block, margin - top:6px, color:#666, font - style: normal }
  .chapter { break - before: page }
  .chapter h2 { font - size: 28px, margin: 0 0 12px 0 }
  .content p { line - height: 1.6, margin: 0 0 12px 0, white - space: pre - wrap }
  .visual { break - inside: avoid, margin: 12px 0 }
  .visual img { max - width: 100%, height: auto }
</style>;
</head>;
<body>;
  <section class="cover">;
    ${barcode}
  </section>;
  ${quotes_html}
  ${chapter_html}
  ${visuals_html}
</body>;
</html>`;
}
