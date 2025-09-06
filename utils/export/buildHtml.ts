 const chapterHtml = chapters .map ( (c) => ` <section class="chapter"> <h2>$ {
  escapeHtml (c.title) 
}</h2> <div class="content">$ {
  paragraphize (c.content) 
}</div> </section> `) .join ('\n\n');
const visualsHtml = [ ...visuals.timelineImages;
...visuals.daoVoteCharts;
...visuals.uiScreens] return `<!doctype html> <html> <head> <meta charset="utf-8" /> <title>$ {
  escapeHtml (meta.title) 
}</title> <style> </style> </head> <body> <section class="cover"> <div>$ {
  escapeHtml (meta.publisher || '') 
}</div> <h1>$ {
  escapeHtml (meta.title) 
}</h1> <h3>$ {
  escapeHtml (meta.subtitle || '') 
}</h3> <div class="by">By $ {
  escapeHtml (meta.author) 
}</div> $ {
  barcode 
}</section> $ {
  quotesHtml 
}$ {
  chapterHtml 
}$ {
  visualsHtml 
}</body> </html>` 
}