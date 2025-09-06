<<<<<<< HEAD
export type BookChapter = {
  title: string;
  content: string;
};

export type QuoteCallout = {
  text: string;
  attribution?: string;
};

export type Visuals = {
  timelineImages: string[]; // base64 or URLs
  daoVoteCharts: string[];
  uiScreens: string[];
  quoteCallouts: QuoteCallout[];
};

export type BookMeta = {
  title: string;
  subtitle?: string;
  author: string;
  isbn?: string;
  publisher?: string;
};

export type BookProject = {
  meta: BookMeta;
  chapters: BookChapter[];
  visuals: Visuals;
};
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
