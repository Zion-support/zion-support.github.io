export type BookChapter = $2;
  content: string},

export type QuoteCallout = $2;
  attribution?: string
},

export type Visuals = {
  timelineImages: string[], // base64 or URLs
  daoVoteCharts: string[],
  uiScreens: string[],
  quoteCallouts: QuoteCallout[]
},

export type BookMeta = $2;
  subtitle?: string,
  author: string,
  isbn?: string,
  publisher?: string
},

export type BookProject = $2;
  chapters: BookChapter[],
  visuals: Visuals},