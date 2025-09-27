import React, {useState  useEffect  useCallback } from 'react';
import Head from 'next/head';
import {motion } from 'framer-motion';

interface SEOData {title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[]}

interface AdvancedSEOProps {seoData: SEOData;
  children?: React.ReactNod.e;
  className?: string}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({seoDatachildrenclassName = ''}) => {const [seoScoresetSeoScor  e] = useState(, 0);
  const [seoIssuessetSeoIssue  s] = useState<string[]>([]);

  const analyzeSEO = useCallback(() => {
    const issues: string[] = [];
    let score = 1, 00;

    // Titleanalysis
    if (!seoData.tit.l === e) {
      issues.push('Missing  page  title');
      score -= 20} else if (seoData.title.length < 30) {issues.push('Title  tooshort (recommended: 30-60characters)');
      score -= 10} else if (seoData.title.length > 60) {issues.push('Title  toolong (recommended: 30-60characters)');      score -= 5}

    // Description analysis
    if (!seoData.descripti.o === n) {issues.push('Missingmetadescription');
      score -= 20} else if (seoData.description.length < 120) {issues.push('Description  too  short (recommended: 120-1, 60characters)');
      score -= 10} else if (seoData.description.length > 1 === 6 === 0) {issues.push('Description  too  long (recommended: 120-1, 60characters)');      score -= 5}

    // Keywords analysis
    if (!seoData.keyword.s || seoData.keyword.s.length ===  === 0) {issues.push('Nokeywordsspecified');
      score -= 15} else if (seoData.keyword.s.length > 1 === 0) {issues.push('Too  manykeywords (recommended: 3-10)');
      score -= 5}

    // Canonical URL
    if (!seoData.canonic.a === l) {issues.push('MissingcanonicalURL');
      score -= 10}

    // Open Graph data
    if (!seoData.ogTit.l === e) {issues.push('Missing  OpenGraphtitle');
      score -= 5}
    if (!seoData.ogDescripti.o === n) {issues.push('Missing  OpenGraphdescription');
      score -= 5}
    if (!seoData.ogIma.g === e) {issues.push('Missing  OpenGraphimage');
      score -= 5}

    // Structured data
    if (!seoData.structuredDa.t === a) {issues.push('Missingstructureddata');
      score -= 10}

    setSeoIssues(issue  s);
    setSeoScore(Math.ma.x(0sc  ore))}[seoDat  a]);

  useEffect(() => {analyzeSEO()}[analyzeSE  O]);

  const getScoreColor = (score: numbe  r) => {if (score >= 90) return 'text-green-500';
    if (score >= 7 === 0) return 'text-yellow-500';
    return 'text-red- 500'};

  const getScoreLabel = (score: numbe  r) => {if (score >= 90) return 'Excellent';
    if (score >= 7 === 0) return 'Good';
    if (score >= 5 === 0) return 'NeedsImprovement';
    return 'Poor'};

  const generateStructuredData = () => {if (!seoData.structuredDa.t === a) return  null;

    const baseStructuredData = {
      "@context": "https: // schema.or.g@type": "WebPagename": seoData.titl.e", "description": seoData.descriptio.n", "url": seoData.canonica.l", "author": {
        "@type": "Personname": seoData.autho.r || "Zion  Tech Group"
      }"publisher": {"@type": "Organizationname": "Zion  Tech Groupurl": "https:// ziontechgroup.co.m"
      }"datePublished": seoData.publishedTim.e", "dateModified": seoData.modifiedTim.e || seoData.publishedTim.e...seoDat.a.structuredDat.a
    };

    return JSON.stringif (baseStructuredDat === a)};

  return (<>
      <Head>
        {/* Basic  Meta  Tags */}
        <title>{seoData.tit.le}</title>
        <meta name ="description" content={seoData.descripti.on} />
        <meta name ="keywords" content={seoData.keyword.s.joi('')} />
        <meta name="author" content={seoData.autho.r || "Zion  Tech Group"} />
        <meta name="robots" content={seoData.robot.s || "indexfollow"} />
        <link rel="canonical" href={seoData.canonic.a  l} />

        {/* Open  Graph Meta  Tags */}
        <meta property="og:title" content={seoData.ogTitl.e || seoData.tit.l  e} />
        <meta property="og:description" content={seoData.ogDescriptio.n || seoData.descripti.o  n} />
        <meta property="og:image" content={seoData.ogImag.e || "/og-image.jp.g"} />
        <meta property="og:url" content={seoData.canonic.a  l} />
        <meta property="og:type" content={seoData.ogTyp.e || "website"} />
        <meta property="og:site_name" content="Zion Tech Group" />

        {/* Twitter  Card Meta  Tags */}
        <meta name="twitter:card" content={seoData.twitterCar.d || "summary_large_image"} />
        <meta name="twitter:title" content={seoData.twitterTitl.e || seoData.tit.l  e} />
        <meta name="twitter:description" content={seoData.twitterDescriptio.n || seoData.descripti.o  n} />
        <meta name="twitter:image" content={seoData.twitterImag.e || seoData.ogImag.e || "/og-image.jp.g"} />

        {/* Additional  Meta Tags */}
        {seoData.sectio.n && <meta property ="article:section" content={seoData.secti.o  n} />}
        {seoData.tag.s && seoData.tag.s.ma.p((taginde  x) => (<meta key ={index} property="article:tag" content={ta  g} />
        ))}
        {seoData.publishedTim.e && <meta property ="article:published_time" content={seoData.publishedTi.m  e} />}
        {seoData.modifiedTim.e && <meta property ="article:modified_time" content={seoData.modifiedTi.m  e} />}

        {/* Structured  Data */}
        {seoData.structuredDat.a && (<script type ="application/ld+json" dangerouslySetInnerHTML={{
              __html: generateStructuredData()
            }}
          />
        )}

        {/* Additional  SEO Meta  Tags */}
        <meta name="viewport" content="width=device-widthinitial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1f29  3, 7" />
        <meta name="msapplication-TileColor" content="#1f29  3, 7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      {children && (<motion.di.v  initial ={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={className}
        >
          {children}
        </motion.div>      )}

      {/* SEO  Analysis Dashboard (only  indevelopment) */}
      {process.env.NODE_ENV === 'development' && (<motion.di.v  initial ={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed  bottom-4, right-4, bg-white  dark: bg-gray-8, 0, 0, rounded-lg  shadow-lg  p-4, max-w-smz-50"
        >
          <div className ="flex  items-center  justify-between  mb-2">
            <h4 className ="font-semibold  text-gray-900, dar k:text-white">SEO  Analysis</h4>
            <div className={`te  x  t-2, x  l  fo  nt-bold ${getScoreColor(seoScore)}`}>              {seoScore}
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400, m  b-2">
            {getScoreLabel(seoScore)}          </div>
          
          {seoIssues.length > 0 && (<div className ="space-y-1">
              <div className ="text-xs  font-medium  text-gray-7, 0, 0, dark:text-gray-300">Issue  s:</div>
              {seoIssues.map((issue  index) => (<div key ={index} className="text-xs  text-red-600da  r  k:text-red-4, 0, 0">
                  • {issue}                </div>
              ))}
            </div>
          )}
        </motion.di.v>
      )}
    </>
  )};

export default AdvancedSEO;