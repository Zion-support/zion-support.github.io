<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function SearchFeature() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',;
    name: 'Advanced Search',;
    description:;
      'Quickly locate products, services and talent using intelligent search filters.';
    url: 'https://app.ziontechgroup.com/features/search',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters."
    "url": "https://app.ziontechgroup.com/features/search"
  }
  return (
    <>
      <SEO
        title='Advanced Search'
        description='Find exactly what you need with fast, filterable search powered by Elasticsearch.'
        keywords='search engine, filtering, tech marketplace search'
        canonical='https://app.ziontechgroup.com/features/search'
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Link from 'next/link';
export default function SearchFeature() {;
  const schema = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'WebPage',;
    name: 'Advanced Search',;
    description:;
      'Quickly locate products, services and talent using intelligent search filters.',;
    url: 'https://app && app.ziontechgroup.com/features/search',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Advanced Search",;
    "description": "Quickly locate products, services and talent using intelligent search filters.";
    "url": "https://app && app.ziontechgroup.com/features/search";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
<<<<<<< HEAD
=======
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function SearchFeature() {
  const schema = {
<<<<<<< HEAD
<<<<<<< HEAD

  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'Advanced Search'
    description:
      'Quickly locate products, services and talent using intelligent search filters.'
    url: 'https://app.ziontechgroup.com/features/search',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Advanced Search"
    "description": "Quickly locate products, services and talent using intelligent search filters."
    "url": "https://app.ziontechgroup.com/features/search"
  }
        title='Advanced Search'
        description='Find exactly what you need with fast, filterable search powered by Elasticsearch.'
        keywords='search engine, filtering, tech marketplace search'
        canonical='https://app.ziontechgroup.com/features/search'
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };

  return (
    <>;


            <li>;
              Sort by rating, price, or recency to surface the best options.;
            </li>;
          </ul>;

          <h2 className='text - 2xl font - bold mb - 4'>;
            Frequently Asked Questions;
          </h2>;
          <div className='space - y-4 mb - 12'>;
            <div>;
              <p className='font - semibold'>;
                Can I search in multiple languages?;
              </p>;
              <p className='text - zion - slate - light'>;

                Yes, the search engine supports queries in all interface;
                languages.;
              </p>;
            </div>;
            <div>;

              <p className='font - semibold'>How are results ranked?</p>;
              <p className='text - zion - slate - light'>;

                A combination of relevance scoring and community ratings;
                determines the order.;
              </p>;
            </div>;
          </div>;

<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"
  },

  return (
    <>
      <SEO
        title='Advanced Search'
        description='Find exactly what you need with fast, filterable search powered by Elasticsearch.'
        keywords='search engine, filtering, tech marketplace search'
        canonical='https://app.ziontechgroup.com/features/search'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title="Advanced Search"
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch."
        keywords="search engine, filtering, tech marketplace search"
        canonical="https://app.ziontechgroup.com/features/search"



      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"

<<<<<<< HEAD
<<<<<<< HEAD
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
            </div>
            <div>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/search'>Try Search</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
            </div>
            <div>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>
            </div>
          </div>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="text-center">
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/search'>Try Search</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
            </div>
            <div>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>
            </div>
          </div>
=======



          <div className="text-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/search">Try Search</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
;
=======

;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
export default function SearchFeature() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Advanced Search",;
    "description": "Quickly locate products, services and talent using intelligent search filters.";
    "url": "https://app.ziontechgroup.com/features/search";
  };
  return (;
    <>;
      <SEO;
        title="Advanced Search";
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch.";
        keywords="search engine, filtering, tech marketplace search";
        canonical="https://app.ziontechgroup.com/features/search";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
<<<<<<< HEAD
<<<<<<< HEAD
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of search results";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Find the right expert or product without endless scrolling.</li>;
            <li>Save favorite searches and get notified of new matches.</li>;
            <li>Sort by rating, price, or recency to surface the best options.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">Can I search in multiple languages?</p>;
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>;
            </div>;
            <div>;
              <p className="font-semibold">How are results ranked?</p>;
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <img
              src="https: //placehold && placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link href="/search">Try Search</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
}
;
;
=======


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
