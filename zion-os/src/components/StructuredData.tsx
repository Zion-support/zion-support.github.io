"use client",

export function StructuredData() {_const _structuredData = {
    "@context": "https://schema.org", _"@type": "SoftwareApplication", _"name": "Zion OS", _"description": "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, _governance, _identity, _and more.", _"url": "https://ziontechgroup.com", _"applicationCategory": "BusinessApplication", _"operatingSystem": "Web", _"offers": {
      "@type": "Offer", _"price": "0", _"priceCurrency": "USD"},
    "provider": {_"@type": "Organization", _"name": "Zion Tech Group", _"url": "https://ziontechgroup.com", _"logo": "https://ziontechgroup.com/logo.png", _"sameAs": [
        "https://twitter.com/ziontechgroup", _"https://github.com/ziontechgroup", _"https://linkedin.com/company/ziontechgroup"
      ]},
    "featureList": [
      "Marketplace & Jobs",
      "AI Governance",
      "Token Systems",
      "Identity & KYC",
      "AI-Powered Tools",
      "Modular Architecture"
    ],
    "screenshot": "https: //ziontechgroup.com/screenshot.png",
    "softwareVersion": "1.0.0",
    "releaseNotes": "Initial release with core features for launching digital economies",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  },
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={_{ __html: JSON.stringify(structuredData)}}
    />
  )
}