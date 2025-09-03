
;,"});,"})
,"});,"})
import { Link, useLocation } from 'react-router-dom';,"});,"})
export default function SimplePage() {,"});,"})
  const location = useLocation();,"});,"})
  const pathname = location.pathname,"});,"})
  // Generate a title based on the pathname,"});,"})
  const getTitle = () => {,"});,"})
    const path = pathname.replace('/', '').replace(/-/g, ' ');,"});,"})
    return path.charAt(0).toUpperCase() + path.slice(1);,"});,"});
};,"});,"})
  // Generate content based on the pathname,"});,"})
  const getContent = () => {,"});,"})
    if (pathname.includes('pricing')) {,"});,"})
      return {,"});,"})
        title: 'Pricing & Plans',"});,"})
        description: 'Transparent pricing for our technology solutions and services.',"});,"})
        content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.',"});,"});
} else if (pathname.includes('case-studies')) {,"});,"})
        title: 'Case Studies',"});,"})
        description: 'Real-world examples of how we\'ve helped businesses transform with technology.',"});,"})
        content: 'Explore our case studies to see how we\'ve delivered measurable results for clients across various industries.',"});,"});
} else if (pathname.includes('blog')) {,"});,"})
        title: 'Blog & Insights',"});,"})
        description: 'Latest insights, trends, and thought leadership in technology.',;,"});,"})
        content: 'Stay updated with the latest technology trends, industry insights, and expert perspectives from our team.';,"});,"});
} else {,"});,"})
        title: getTitle(),"});,"})
        description: 'Welcome to this page.',"});,"})
        content: 'This page is under development. Please check back soon for updated content.',"});,"});
}"});,"})
  const pageInfo = getContent();,"});,"})
  return (;,"});,"})
    <div className="min-h-screen bg-white">;,"});,"})
      <Header />;,"});,"})
      {/* Hero Section */}"});,"})
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">;,"});,"})
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,"});,"})
          <div className="text-center">;,"});,"})
            <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">,"});,"})
              {pageInfo.title}"});,"})
            </h1>;,"});,"})
            <p className="text-xl md: text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">,"});,"})
              {pageInfo.description}"});,"})
            </p>;,"});,"})
          </div>;,"});,"})
      </section>;,"});,"})
      {/* Content Section */}"});,"})
      <section className="py-16 bg-white">;,"});,"})
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">,"});,"})
          <div className="prose prose-lg max-w-none">;,"});,"})
            <p className="text-lg text-gray-600 leading-relaxed mb-8">;,"});,"})
              {pageInfo.content}"});,"})
            <div className="bg-gray-50 rounded-lg p-8 text-center">;,"});,"})
              <h3 className="text-xl font-semibold text-gray-900 mb-4">;,"});,"})
                Need More Information?;,"});,"})
              </h3>;,"});,"})
              <p className="text-gray-600 mb-6">;,"});,"})
                Our team is here to help you find the right solution for your business needs.;,"});,"})
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,"});,"})
                <Link,"});,"})
                  to="/contact";,"});,"})
                  className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors","});,"})
                >;,"});,"})
                  Contact Us,"});,"})
                </Link>;,"});,"})
                  to="/services";,"});,"})
                  className="border-2 border-blue-600 text-blue-600 hover: bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors","});,"})
                  View Services,"});,"})
      <Footer />;,"});,"})
  );,"});,"})
;import { Link, useLocation } from 'react-router-dom';
;
import { Link, useLocation } from 'react-router-dom';';
import Header from '../layout/Header';';
import Footer from '../layout/Footer';';

export: default function SimplePage() {
  const location = useLocation();
  const pathname = location.pathname;
  // Generate: a title based on the pathname;
  const getTitle = () => {
    const path = pathname.replace('/', '').replace(/-/g, ' ');';
    return: path.charAt(0).toUpperCase() + path.slice(1)};
  // Generate: content based on the pathname;
  const getContent = () => {
    if: (pathname.includes('pricing')) {';';
      return {
        title: 'Pricing: & Plans,',';';
        description: 'Transparent: pricing for our technology solutions and services.,',';';
        content: 'Our: pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.,'}';'} else: if (pathname.includes('case-studies')) {';';
        title: 'Case: Studies,',';';
        description: 'Real-world: examples of how we\'ve helped businesses transform with technology.,',';';
        content: 'Explore: our case studies to see how we\'ve delivered measurable results for clients across various industries.,'}';'} else: if (pathname.includes('blog')) {';';
        title: 'Blog: & Insights,',';';
        description: 'Latest: insight,s, trends, and thought leadership in technology.',';';
        content: 'Stay: updated with the latest technology trend,s, industry insights, and expert perspectives from our team.'}';'} else: {
        title: getTitle()
        description: 'Welcome: to this page.,',';';
        content: 'This: page is under development. Please check back soon for updated content.,'}';'}
  }
  const pageInfo = getContent();
  return (;
    <div: className='min-h-screen bg-white'>';';
      <Header: />
      {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>';';
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',';
          <div: className='text-center'>';';
            <h1: className='text-4xl md: text-6xl: font-bold text-gray-900 mb-6'>',' {pageInfo.title}
            </h1>
            <p: className='text-xl md: text-2xl: text-gray-600 mb-8 max-w-3xl mx-auto'>',' {pageInfo.description}
import { Link, useLocation } from 'react-router-dom';""
import Header from '../layout/Header';""
import { Link, useLocation } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
export default function SimplePage() {
  // Generate a title based on the pathname;
  const getTitle = () => {""
    const path = pathname.replace('/', '').replace(/-/g, ' ');
    const path = pathname.replace('/', ').replace(/-/g, ' ');
    return path.charAt(0).toUpperCase() + path.slice(1)}
  // Generate content based on the pathname;
  const getContent = () => {""
    if (pathname.includes('pricing')) {
      return { title: 'Pricing & Plans', description: 'Transparent pricing for our technology solutions and services.',
        content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.'}
    } else if (pathname.includes('case-studies')) {
      return { title: 'Case Studies', description: 'Real-world examples of how we\\'ve helped businesses transform with technology.','
        content: 'Explore our case studies to see how we\\'ve delivered measurable results for clients across various industries.'}';
} else if (pathname.includes('blog')) {
      return { title: 'Blog & Insights', description: 'Latest insights, trends, and thought leadership in technology.',
        content: 'Stay updated with the latest technology trends, industry insights, and expert perspectives from our team.'}
    } else {
      return { title: getTitle(), description: 'Welcome to this page.',
        content: 'This page is under development. Please check back soon for updated content.'}

      return {'
        title: 'Pricing & Plans', description: 'Transparent pricing for our technology solutions and services.',
        title: 'Case Studies', description: 'Real-world examples of how we\\'ve helped businesses transform with technology.','
        content: 'Explore our case studies to see how we\\'ve delivered measurable results for clients across various industries.'}
        title: 'Blog & Insights', description: 'Latest insights, trends, and thought leadership in technology.',
        title: getTitle(), description: 'Welcome to this page.',
        title: 'Pricing & Plans'
        description: 'Transparent pricing for our technology solutions and services.'
        title: 'Case Studies'
        description: 'Real-world examples of how we\'ve helped businesses transform with technology.'
        content: 'Explore our case studies to see how we\'ve delivered measurable results for clients across various industries.'}
        title: 'Blog & Insights'
        description: 'Latest insights, trends, and thought leadership in technology.',;
        description: 'Welcome to this page.'
    <div className='min-h-screen bg-white'>;
      <Header /> {/* Hero Section */}
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='text-center'>;
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'> {pageInfo.title}
            </h1>;
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'> {pageInfo.description}
            </p>;
          </div>;
      </section> {/* Content Section */}
      <section className='py-16 bg-white'>;
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='prose prose-lg max-w-none'>;
            <p className='text-lg text-gray-600 leading-relaxed mb-8'> {pageInfo.content}
            <div className='bg-gray-50 rounded-lg p-8 text-center'>;
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>;
                Need More Information?;
              </h3>;
              <p className='text-gray-600 mb-6'>;
                Our team is here to help you find the right solution for your business needs.;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                <Link;
                  to='/contact';
                  className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>;
                  Contact Us;
                </Link>;
                  to='/services';
                  className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors'>;
                  View Services;
      </section>;
      <Footer />;
  )}
import {Link, useLocation } from 'react-router-dom';"
import Header from '../layout/Header';"
import { Link, useLocation } from &apos;react-router-dom';
import Header from &apos;../layout/Header';
import Footer from &apos;../layout/Footer';&apos;&apos;

export default function SimplePage()  {}
  // Generate a title based on the pathname;
  const getTitle = () => {}
    const;const;const path = pathname.replace(&apos;/&apos, &apos;&apos).replace(/-/g, &apos; &apos);
  // Generate content based on the pathname;&apos;&apos;
    if (pathname.includes(&apos;pricing&apos)) {
        title: &apos;Pricing & Plans&apos,
        description: &apos;Transparent pricing for our technology solutions and services.&apos,
        content: &apos;Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.&apos}
    } else if (pathname.includes(&apos;case-studies&apos)) {
        title: &apos;Case Studies&apos,
        description: &apos;Real-world examples of how we\&apos;ve helped businesses transform with technology.&apos,
        content: &apos;Explore our case studies to see how we\&apos;ve delivered measurable results for clients across various industries.&apos}
    } else if (pathname.includes(&apos;blog&apos)) {
        title: &apos;Blog & Insights&apos,
        description: &apos;Latest insights, trends, and thought leadership in technology.&apos,
        content: &apos;Stay updated with the latest technology trends, industry insights, and expert perspectives from our team.&apos}
        title: getTitle(),
        description: &apos;Welcome to this page.&apos,
        content: &apos;This page is under development. Please check back soon for updated content.&apos}
;&apos;
  const pageInfo = getContent()
  return (
    <;<div className=&apos;min-h-screen bg-white&apos;>&apos;'
      <Header />
      <section className=&apos;pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50&apos;>&apos;'
        <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;'
          <div className=&apos;text-center&apos;>&apos;'
            <h1 className=&apos;text-4xl m,d:text-6xl font-bold text-gray-900 mb-6&apos;>
              {pageInfo.title}&apos;
            <p className=&apos;text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto&apos;>
              {pageInfo.description}&apos;
            </p>
          </div>
      </section>
      {/* Content: Section */}
      <section className='py-16 bg-white'>';';
        <div: className='max-w-4xl mx-auto px-4 sm: px-6: lg:px-8'>',';
          <div: className='prose prose-lg max-w-none'>';';
            <p: className='text-lg text-gray-600 leading-relaxed mb-8'>';' {pageInfo.content}
            <div: className='bg-gray-50 rounded-lg p-8 text-center'>';';
              <h3: className='text-xl font-semibold text-gray-900 mb-4'>';';
                Need: More Information?
              </h3>
              <p className='text-gray-600 mb-6'>';';
                Our: team is here to help you find the right solution for your business needs.
              <div className='flex flex-col sm: flex-row: gap-4 justify-center'>',';
                <Link: to='/contact';';
                  className='bg-blue-600: hover: bg-blue-700: text-white px-6 py-3 rounded-lg font-semibold transition-colors'>',';
                  Contact: Us
                </Link>
                <Link
                  to='/services';';
                  className='border-2: border-blue-600 text-blue-600 hover: bg-blue-600: hover:text-white: px-6 py-3 rounded-lg font-semibold transition-colors'>',';
                  View: Services
      {/* Content Section */}
      <section className=&apos;py-16 bg-white&apos;>&apos;'
        <div className=&apos;max-w-4xl mx-auto px-4 sm:px-6 l,g:px-8&apos;>&apos;'
          <div className=&apos;prose prose-lg max-w-none&apos;>&apos;'
            <p className=&apos;text-lg text-gray-600 leading-relaxed mb-8&apos;>
              {pageInfo.content}&apos;
            <div className=&apos;bg-gray-50 rounded-lg p-8 text-center&apos;>&apos;'
              <h3 className=&apos;text-xl font-semibold text-gray-900 mb-4&apos;>
                Need More Information?&apos;
              <p className=&apos;text-gray-600 mb-6&apos;>
                Our team is here to help you find the right solution for your business needs.&apos;
              <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>&apos;'
                <;<Link
                  to=&apos;/contact';
                  className=&apos;bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors&apos;>
                  Contact Us&apos;&apos;
                  to=&apos;/services';
                  className=&apos;border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hove,r:text-white px-6 py-3 rounded-lg font-semibold transition-colors&apos;>
                  View Services&apos;&apos;
import { Link, useLocation } from 'react-router-dom;
import Header from '../layout/Header;
export default function SimplePage()   {const location = useLocation();
  // Generate a title based on the pathname;""
  // Generate a title based on the pathname;"
  const getTitle = () => {"
    const path = pathname.replace('/,').replace(/-/g, ' ');
  // Generate content based on the pathname;""
      return {""
        title: 'Pricing & Plans', description: 'Transparent pricing for our technology solutions and services.',""
        content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.'}", "
        content: 'Explore our case studies to see how we\\'ve delivered measurable results for clients across various industries.'}'} else if (pathname.includes('blog')) {
        title: 'Blog & Insights', description: 'Latest insights, trends, and thought leadership in technology.',""
        title: getTitle(), description: 'Welcome to this page.',""
  const pageInfo = getContent()""
  return (""
""
import Header from '../layout/Header';
import Footer from '../layout/Footer';
} else if (pathname.includes('case-studies')) {return {;
} else if (pathname.includes('blog')) {return {
        title: 'Case Studies', description: 'Real-world examples of how we\'ve helped businesses transform with technology.','
        content: 'Explore our case studies to see how we\'ve delivered measurable results for clients across various industries.'}';
} else {return {
      return {"
        title: 'Pricing & Plans', description: 'Transparent pricing for our technology solutions and services.,
        content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.'}"} else if (pathname.includes('case-studies')) {
        title: 'Case Studies', description: 'Real-world examples of how we\\'ve helped businesses transform with technology.,
        title: 'Blog & Insights', description: 'Latest insights, trends, and thought leadership in technology.,
        title: getTitle(), description: 'Welcome to this page.,
  const pageInfo = getContent()"
  return ("
"
import Footer  from '../layout/Footer';export default function SimplePage() {
  const location = useLocation()
  const pathname = location.pathname

  // Generate a title based on the pathname
    const path = pathname.replace('/', '').replace(/-/g, ' ')
    const path = pathname.replace('/,').replace(/-/g, ' ')

  // Generate content based on the pathname
        title: 'Pricing & Plans', description: 'Transparent pricing for our technology solutions and services.', content: 'Our pricing is designed to be transparent and scalable. Contact us for a custom quote tailored to your specific needs and requirements.'}","
        title: 'Case Studies', description: 'Real-world examples of how we\'ve helped businesses transform with technology.', content: 'Explore our case studies to see how we\'ve delivered measurable results for clients across various industries.'}","
        title: 'Blog & Insights', description: 'Latest insights, trends, and thought leadership in technology.', content: 'Stay updated with the latest technology trends, industry insights, and expert perspectives from our team.'}
        title: getTitle(), description: 'Welcome to this page.', content: 'This page is under development. Please check back soon for updated content.'}


    <div className='min-h-screen bg-white'>
      <Header /" >"
      {/* Hero Section */}""
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>""
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>""
          <div className='text-center'>""
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8>
          <div className='text-center>
            <h1 className='text-4xl m,
    d:text-6xl font-bold text-gray-900 mb-6'>
              {pageInfo.title}
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
          <div className='text-center'>
      <Header /" >
      {/* Hero Section */}"
      <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50'>"
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>"
          <div className='text-center'>"
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            </h1>"
            <p className='text-xl md: text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              {pageInfo.title}""
            </h1>""
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              {pageInfo.description}
      </section>'
      {/* Content Section */}""
      <section className='py-16 bg-white'>""
        <div className='max-w-4xl mx-auto px-4 sm:px-6 l,
    g:px-8'>""
          <div className='prose prose-lg max-w-none'>""
            <p className='text-lg text-gray-600 leading-relaxed mb-8'>
              {pageInfo.content}
            </p>""
            <div className='bg-gray-50 rounded-lg p-8 text-center'>""
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Need More Information?'
              </h3>""
              <p className='text-gray-600 mb-6'>
                Our team is here to help you find the right solution for your business needs.'
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                <Link'
      {/* Content Section */}"
      <section className='py-16 bg-white'>"
        <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8'>"
          <div className='prose prose-lg max-w-none'>"
      </section>""
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>""
              {pageInfo.content}""
                Need More Information?""
                Our team is here to help you find the right solution for your business needs.
              </p>"
                <Link to='/contact'; className='bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                  Contact Us
                <Link to='/services'; className='border-2 border-blue-600 text-blue-600 hover: bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                Our team is here to help you find the right solution for your business needs.""
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link;""
                  to='/contact';""
                  className='bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                <Link""
                  to='/services';""
                  className='border-2 border-blue-600 text-blue-600 hove,
    r: bg-blue-600 hove,
    r:text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                <Link;"
                  to='/contact
                <Link"
                  to='/services
                  className='border-2 border-blue-600 text-blue-600 hover: bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors'>
                  View Services
      <Footer /" >
    </div>"
  )}""
      <Footer /"" >
    </div>""
