



  const chapterHtml = chapters;
    .map(;
      (c) => `;
      <section class="chapter">;
        <h2>${escapeHtml(c.title)}</h2>;
        <div class="content">${paragraphize(c.content)}</div>;
      </section>;
    `);




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


;
function escapeHtml(s: string): string {;
  return s;

=======
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

    <div>${escape_html (meta.publisher || '')}</div>;
    <h1>${escape_html (meta.title)}</h1>;
    <h3>${escape_html (meta.subtitle || '')}</h3>;
    <div class="by">By ${escape_html (meta.author)}</div>;

    ${barcode}
  </section>;
  ${quotesHtml}
  ${chapterHtml}
  ${visualsHtml}
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    .replace(/&/g, '&amp,');
    .replace(/</g, '<');
    .replace(/>/g, '>');
    .replace(/"/g, '"');
    .replace(/'/g, '&#039,');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
