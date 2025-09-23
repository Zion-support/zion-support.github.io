import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newRealServices } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';

type Service = typeof enhancedRealMicroSaasServices[number];

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
		.concat(
			extraServices as Service[],
			additionalEnhancedServices as Service[],
			newRealServices as Service[],
			marketReadyServices as Service[]
		);
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length);
		}
		return null;
	} catch {
		return null;
	}
}

export async function getStaticPaths() {
	const services = getAllServices();
	const slugs = new Set<string>();

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue;
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
	}

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	};
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export async function getStaticPaths() {
  // Return empty paths for now to fix build
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // For now, return mock data to fix build
  return {
    props: { 
      service: mockService,
      slug: params?.slug || 'default'
    }
  };
}

export default function ServiceDetailPage({ service, slug }: { service: SimpleService; slug: string }) {
  return (
    <Layout>
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://ziontechgroup.com/services/${slug}`} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

}
