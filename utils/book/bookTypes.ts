export type BookChapter = {_title: string;
  content: string;};

export type QuoteCallout = {_text: string;
  attribution?: string;};

export type Visuals = {_timelineImages: string[]; // base64 or URLs
  daoVoteCharts: string[];
  uiScreens: string[];
  quoteCallouts: QuoteCallout[];};

export type BookMeta = {_title: string;
  subtitle?: string;
  author: string;
  isbn?: string;
  publisher?: string;};

export type BookProject = {_meta: BookMeta;
  chapters: BookChapter[];
  visuals: Visuals;};