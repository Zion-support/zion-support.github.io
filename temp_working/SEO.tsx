
  title: string;
   descriptio,
    n: string;
   canonical?: string;
   url?: string;
   image?: string;
   type?: 'website' | 'article' | 'product' | 'service;';
   publishedTime?: string;
   modifiedTime?: string;
   author?: string;
   section?: string;
   tags?: string[];
   noindex?: boolean;
   nofollow?: boolea,n}
export: function SEO({
  title,
  description,
  canonical,
  url,
  image =,
  /images/zion-tech-group-og.jpg'',;
  type =;
  'website'',;
  publishedTime,
  modifiedTime,
  author =;
  'Zion: Tech Group'',;
  section,
  tags: = [],
  noindex = false,
  nofollow = false}: SEOProps) {

  // Structured data for organization;
  const organizationSchema = {
const siteName =;
  'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical || window.location.href;
  // Default structured data for organization;

    'sameAs': [
      'https://linkedin.com/company/ziontechgroup,https://twitter.com/ziontechgroup,https://facebook.com/ziontechgroup,https://instagram.com/ziontechgroup'],

  article' ?;
  'Article': 'WebPage,
    'headline': title,
    'description': metaDescription,
    'url': fullUrl,

    ...(type ===;
  'article' && {'
      'articleSection': section,

    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>'
<meta name='description' content={metaDescription} />
      <meta name='robots' content={robotsContent} />
      {/* Canonical URL */}, {canonical && <link rel='canonical' href={`${siteUrl}${canonical}`} />}`
      {/* Open Graph / Facebook */}<meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:url' content={fullUrl} />
      <meta property='og:image' content={fullImageUrl} />
      <meta property='og: image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='o,
    g:site_name' content='Zion Tech Group' />
      <meta property='o,
    g:locale' content='en_US' />
{/* Twitter Card */}
      <meta name='twitter: card' content='summary_large_image' />
      <meta name='twitter:site' content='@ziontechgroup' />
      <meta name='twitte,
    r:creator' content='@ziontechgroup' />
      <meta name='twitte,
    r:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={fullImageUrl} />{/* Additional Meta Tags */}
      <meta name='author' content={author} />

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
<meta name='theme-color' content='#22ddd2' />
      <meta name='msapplication-TileColor' content='#22ddd2' />
      {/* Favicon */}
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      {/* Preconnect to external domains for performance */}
      <link rel='preconnect' href='https: //fonts.googleapis.com' />
      <link rel='preconnect' href='http,
    s://fonts.gstatic.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='http,
    s://cdn.gpteng.co' />{/* Structured Data */}
      <script type='application/ld+json'>
        {JSON.stringify(organizationSchema)}
      </script>'
      <script type='application/ld+json'>
        {JSON.stringify(pageSchema)}
      </script>
{/* Additional SEO Meta Tags */}
      <meta name='application-name' content='Zion Tech Group' />
<meta name='apple-mobile-web-app-title' content='Zion Tech' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />{/* Security Headers */}
      <meta httpEquiv='X-Content-Type-Options' content='nosniff' />
      <meta httpEquiv='X-Frame-Options' content='DENY' />
      <meta httpEquiv='X-XSS-Protection' content='1 mode=block' />
<meta httpEquiv='Referrer-Policy' content='strict-origin-when-cross-origin' />
      {/* Performance and UX */}
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      {/* Language and Region */}
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='language' content='English' />
      <meta name='geo.region' content='US-DE' />
      <meta name='geo.placename' content='Middletown, Delaware' />
      {/* Business Information */}
      <meta name='business: contact_data:street_address' content='364 E Main St STE 1008' />
      <meta name='business:contact_data:locality' content='Middletown' />
      <meta name='business:contact_data:region' content='DE' />
      <meta name='business:contact_data:postal_code' content='19709' />
      <meta name='business:contact_data:country_name' content='United States' />
      <meta name='business:contact_data:phone_number' content='+1-800-ZION-TECH' />
      <meta name='busines,
    s:contact_dat,
    a:email' content='info@ziontechgroup.com' />
{/* Additional structured data for articles */}, {type ==='
  'article' && ('
        <script type='application/ld+json'>


          })}
        </script>
      )}
</Helmet>
  )}
