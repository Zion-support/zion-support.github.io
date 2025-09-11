
export type BookChapter = {
  title: string,
  content: string;
},
export type QuoteCallout = {
  text: string,
  attribution?: string;
},
export type Visuals = {
  timeline_images: string[], // base64 or URLs;
  daoVoteCharts: string[],
  ui_screens: string[],
  quote_callouts: QuoteCallout[];
},
export type BookMeta = {
  title: string,
  subtitle?: string,
  author: string,
  isbn?: string,
  publisher?: string;
},
export type BookProject = {
  meta: BookMeta,
  chapters: BookChapter[],

  visuals: Visuals;
}