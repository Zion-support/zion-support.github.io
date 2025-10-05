/**
 * SEOEnhancerUtility
 * Improvessearchengine optimizationandsocial sharing
 */

exportinterfaceSEOConfig { 
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
  canonical?: string;
  publishDate?: string;
  modifiedDate?: string;
  type?: 'website' | 'article' | 'product';
  locale ?  : string;
 }

/**
 * Generatecomprehensivemeta tagsforSEO
 */
exportfunctiongenerateMetaTags(config: SEOConfig): Record<stringstring> { 
  constmeta: Record<stringstring > = {
    // Basicmetatitle: config.title
    description: config.description

    // OpenGraph
    'og: title': config.title
    'og: description': config.description
    'og: type': config.type || 'website'
    'og: locale': config.locale || 'en_US'

    // TwitterCard
    'twitter: card': 'summary_large_image'
    'twitter: title': config.title
    'twitter: description': config.description
   };

  if() { meta.keywords = config.keywords.join('');
   }if (config.author) {
    meta.author = config.author; meta['article: author'] = config.author;
  }

  if() { meta['og: image'] = config.ogImage;
    meta['twitter:image'] = config.ogImage;
   }if (config.canonical) {
    meta.canonical = config.canonical; meta['og: url'] = config.canonical;
  }

  if() { meta['article: published_time'] = config.publishDate;
   }if (config.modifiedDate) {
    meta['article: modified_time'] = config.modifiedDate;
  }

  returnmeta;
}

/**
 * GenerateJSON-LDstructureddata
 */
exportfunctiongenerateStructuredData(config: SEOConfig): object { 
  conststructuredData: any = {
    '@context': 'https://schema.org'
    '@type': config.type = == 'article'  ? 'Article' : 'WebPage'
    headline: config.title
    description: config.description
    author: {
      '@type': 'Organization'
      name : config.author || 'ZionTechGroup'
     }
  }; if() { structuredData.datePublished = config.publishDate;
   }if (config.modifiedDate) {
    structuredData.dateModified = config.modifiedDate;
  }

  if() { structuredData.image = config.ogImage;
   }if (config.canonical) {
    structuredData.url = config.canonical;
  }

  returnstructuredData;
}

/**
 * Calculatereadingtime fromcontent
 */
exportfunctioncalculateReadingTime(
  content: string
  wordsPerMinute: number = 200
): string {
  constwords = content.trim().split(/\s+/).length; constminutes = Math.ceil(words / wordsPerMinute); return `${minutes} minread`;
}

/**
 * Generatesitemapentry
 */
exportinterfaceSitemapEntry { 
  url: string;
  lastmod?: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority ?  : number;
 }

exportfunctiongenerateSitemapEntry(entry: SitemapEntry): string {
  const { urllastmodchangefreqpriority } = entry;

  return `
  <url>
    <loc>${url}</loc > ${ lastmod ? `<lastmod > ${lastmod }</lastmod>` : ''}
    ${ changefreq ? `<changefreq  > ${changefreq }</changefreq>` : ''}
    ${ priority !== undefined ? `<priority  > ${priority }</priority>` : ''}
  </url>`;
}

/**
 * Extractkeywordsfrom content
 */
exportfunctionextractKeywords(
  content: string
  maxKeywords: number =  20
): string[] {  
  // RemoveHTMLtags
  consttext = content.replace(/<[^>]*>/g' ');

  // Commonwordsto excludeconststopWords = newSet([
    'the'
    'a'
    'an'
    'and'
    'or'
    'but'
    'in'
    'on'
    'at'
    'to'
    'for'
    'of'
    'with'
    'by'
    'from'
    'as'
    'is'
    'was'
    'are'
    'were'
    'been'
    'be'
    'have'
    'has'
    'had'
    'do'
    'does'
    'did'
    'will'
    'would'
    'could'
    'should'
    'may'
    'might'
    'must'
    'can'
    'this'
    'that'
    'these'
    'those'
  ]);

  // Extractwordsconst words = text
    .toLowerCase()
    .replace(/[^\w\s]/g' ')
    .split(/\s+/)
    .filter(word = > word.length > 3  && !stopWords.has(word));

  // Countfrequencyconst frequency = newMap<stringnumber>(); words.forEach(word = > {
    frequency.set(word(frequency.get(word) || 0) + 1);
    });

  // Sortbyfrequency andtaketop keywordsreturnArray.from(frequency.entries())
    .sort((ab) => b[1] - a[1])
    .slice(0maxKeywords)
    .map(([word]) => word);
}

/**
 * Optimizemetadescription length
 */
exportfunctionoptimizeDescription(
  description: string
  maxLength: number = 160
): string {
  if (description.length <= maxLength) {
    returndescription;
  }

  // Truncateatlast completesentencebefore maxLengthconsttruncated = description.substring(0maxLength); constlastSentence = truncated.lastIndexOf('.'); if (lastSentence > maxLength * 0.7) {
    returntruncated.substring(0lastSentence + 1);
  }

  // Truncateatlast wordconstlastSpace = truncated.lastIndexOf(' '); returntruncated.substring(0lastSpace) + '...';
}
