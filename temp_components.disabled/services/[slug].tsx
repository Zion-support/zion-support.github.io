import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { real2025Q3Additions } from '../../data/real-2025-q3-additions';

// Simplified service data structure
interface SimpleService {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  useCases: string[];
  integrations: string[];
  link: string;
  category: string;
}

// Mock service data for now to fix build issues
const mockService: SimpleService = {
  id: 'default-service',
  name: 'Service Not Found',
  description: 'This service is currently being updated. Please contact us for more information.',
  price: 'Contact Us',
  period: '',
  features: ['Service under development'],
  useCases: ['Contact sales team'],
  integrations: ['Coming soon'],
  link: '/contact',
  category: 'General'
};

		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realMarketAugmentations2025 as unknown as Service[])
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(real2025Q3Additions as unknown as Service[]);
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

	// Define static service slugs that should not be handled by this dynamic route
	const staticServiceSlugs = [
		'ai-evaluation-orchestrator',
		'ai-support-triage-router', 
		'ai-code-review-assistant-pro',
		'ai-revenue-forecasting-copilot'
	];

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink && !staticServiceSlugs.includes(fromLink)) {
			slugs.add(fromLink);
			continue;
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		const idSlug = s.id ? toSlug(s.id) : '';
		const nameSlug = s.name ? toSlug(s.name) : '';
		
		if (idSlug && !staticServiceSlugs.includes(idSlug)) {
			slugs.add(idSlug);
		}
		if (nameSlug && !staticServiceSlugs.includes(nameSlug)) {
			slugs.add(nameSlug);
		}
	}

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	};
