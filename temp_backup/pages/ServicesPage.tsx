import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { SERVICES } from "@/data/servicesData";
import { TrustedBySection } from "@/components/TrustedBySection";

import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

import useSWR from 'swr';


// Filter options specific to services
const SERVICE_FILTERS = [
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

async function fetchServices(): Promise<ProductListing[]> {
  try {
    const res = await fetch('/api/services');
    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as ProductListing[];
  } catch (err) {

    throw err;
  }
}

export default function ServicesPage() {
  const { data, error, isLoading, mutate } = useSWR<ProductListing[]>(
    '/api/services',
    fetchServices,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );


  const listings = data || SERVICES;

  if (isLoading || (error && !delayedError)) {
    return (
      <div data-testid="loading-state" className="container mx-auto px-4 py-12">
        {/* Optional: you can add a skeleton for the title if needed */}
        {/* <Skeleton className="h-8 w-1/3 mb-8" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (delayedError) {
    return (
      <div data-testid="error-state" className="py-12 text-center space-y-4">
        <p className="text-red-400">Failed to load services. {delayedError?.message}</p>

    );
  }

  return (

              {/* <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button> */}
              <button className="border border-zion-purple text-zion-cyan hover:bg-zion-purple/10 py-2 px-4 rounded flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </button>
            </Link>
            <Link to="/request-quote">
              {/* <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote

              </Button> */}
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-2 px-4 rounded">
                Request a Quote
              </button>


            </Link>
          </div>
        </div>
      </div>
      <DynamicListingPage
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
      />
      <div className="bg-zion-blue-dark py-8 text-center">
        <p className="text-white">
          New to Zion? Learn more{' '}
          <Link to="/about" className="text-zion-cyan underline">about our mission</Link>{' '}
          or <Link to="/contact" className="text-zion-cyan underline">contact our team</Link> for custom solutions.
        </p>
      </div>
      <TrustedBySection />
    </>



  );
}
