import { supabase } from './supabase/client';

export type Tenant = {
  id: string;
  name: string; // e.g., Zion Health
  subdomain: string; // e.g., health
  fullDomain?: string; // e.g., health.ziontechgroup.com
  logoUrl?: string;
  accentColorHex?: string; // used as --accent
  brandColorHex?: string; // used as --brand
  whiteLabel?: boolean;
  categories?: string[];
  defaultAiTerms?: 'HIPAA' | 'GDPR' | 'NONE';
  createdAt?: string;
};

export const defaultTenant: Tenant = {
  id: 'default',
  brandName: 'Zion Tech Group',
  subdomain: null,
  customDomain: null,
  primaryColor: '#4f46e5',
  logoUrl: null,
  themePreset: 'light',
  navbarLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Autonomy', href: '/autonomy' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Talent', href: '/talent' },
    { label: 'Contact', href: '/contact' },
  ],
  footerText: '© ' + new Date().getFullYear() + ' Zion Tech Group',
  heroTitle: 'Intelligent AI Platforms for the Next Decade',
  heroSubtitle:
    'Ship faster with our high‑performance, white‑label platform and expert services.',
  suspended: false,
};

export function getSubdomainFromHost(host?: string): string | null {
  if (!host) return null;
  const parts = host.split(':')[0].split('.');
  if (parts.length <= 2) return null; // example.com or localhost
  return parts[0];
}

export async function fetchTenantBySubdomain(
  subdomain: string
): Promise<Tenant | null> {
  if (isSupabaseConfigured()) {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('subdomain', subdomain)
      .maybeSingle();
    if (error) {
      console.error('Error fetching tenant:', error);
      return null;
    }
    return data;
  }
  return null;
}

export async function fetchTenantById(id: string): Promise<Tenant | null> {
  if (isSupabaseConfigured()) {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) {
      console.error('Error fetching tenant:', error);
      return null;
    }
    return data;
  }
  return null;
}

const isSupabaseConfigured = () => {
  return (
    typeof process !== 'undefined' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !==
      'https://placeholder.supabase.co' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
  );
};
