import Head from 'next/head' interface StructuredDataProps  {'';
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';'';
   data?: } export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:''';
}}