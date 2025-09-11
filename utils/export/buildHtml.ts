


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const chapterHtml = chapters;
    .map(;
      (c) => `;
      <section class="chapter">;
        <h2>${escapeHtml(c.title)}</h2>;
        <div class="content">${paragraphize(c.content)}</div>;
      </section>;
    `);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
function escapeHtml(s: string): string {;
  return s;

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
}>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
