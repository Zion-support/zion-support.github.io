import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { SERVICES } from "@/data/servicesData";
import { TrustedBySection } from "@/components/TrustedBySection";
<<<<<<< HEAD
<<<<<<< HEAD
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary";
// import { Button } from "@/components/ui/button";
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
import { ErrorBoundary } from "@/components/GlobalErrorBoundary";
import { Button } from "@/components/ui/button";
=======
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary";
// import { Button } from "@/components/ui/button";
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
// import { ErrorBoundary } from "@/components/GlobalErrorBoundary";
// import { Button } from "@/components/ui/button";
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

import useSWR from 'swr';
<<<<<<< HEAD
<<<<<<< HEAD
// import { captureException } from "@/utils/sentry";
// import { captureException } from "@/utils/monitoring/sentry.client";
import { SkeletonCard } from '@/components/ui';
// import { useDelayedError } from '@/hooks/useDelayedError';
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
import { captureException } from "@/utils/sentry";
import { SkeletonCard } from '@/components/ui';
import { useDelayedError } from '@/hooks/useDelayedError';
=======
// import { captureException } from "@/utils/sentry";
// import { captureException } from "@/utils/monitoring/sentry.client";
import { SkeletonCard } from '@/components/ui';
// import { useDelayedError } from '@/hooks/useDelayedError';
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
// import { captureException } from "@/utils/sentry";
// import { captureException } from "@/utils/monitoring/sentry.client";
import { SkeletonCard } from '@/components/ui';
// import { useDelayedError } from '@/hooks/useDelayedError';
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

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
<<<<<<< HEAD
<<<<<<< HEAD
    // captureException(err);
    console.error('Error fetching services:', err);
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
    captureException(err);
=======
    // captureException(err);
    console.error('Error fetching services:', err);
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
    // captureException(err);
    console.error('Error fetching services:', err);
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
<<<<<<< HEAD
  // const delayedError = useDelayedError(error);
  const delayedError = error; // Temporary fallback
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
  const delayedError = useDelayedError(error);
=======
  // const delayedError = useDelayedError(error);
  const delayedError = error; // Temporary fallback
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
  // const delayedError = useDelayedError(error);
  const delayedError = error; // Temporary fallback
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

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
<<<<<<< HEAD
<<<<<<< HEAD
        {/* <Button data-testid="retry-button" onClick={() => mutate()}>
          Retry
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
        <Button data-testid="retry-button" onClick={() => mutate()}>
          Retry
        </Button>
=======
        {/* <Button data-testid="retry-button" onClick={() => mutate()}>
          Retry
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
        {/* <Button data-testid="retry-button" onClick={() => mutate()}>
          Retry
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
        </Button> */}
        <button data-testid="retry-button" onClick={() => mutate()} className="bg-blue-600 text-white py-2 px-4 rounded">
          Retry
        </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      </div>
    );
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
    <ErrorBoundary>
=======
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
<<<<<<< HEAD
<<<<<<< HEAD
              {/* <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
=======
<<<<<<< HEAD
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
<<<<<<< HEAD
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
=======
              {/* <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
              </Button>
=======
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
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
              </Button> */}
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-2 px-4 rounded">
                Request a Quote
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
    </ErrorBoundary>
=======
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  );
}
