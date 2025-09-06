import { useEffect, useState } from 'react';
import { ProductListingCard } from '@/components/ProductListingCard';
import { useAuth } from '@/hooks/useAuth';
import { fetchRecommendations } from '@/api/recommendations';
import type { ProductListing } from '@/types/listings';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
<<<<<<< HEAD
=======
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';

export default function EquipmentRecommendations() {
  const { isAuthenticated, user } = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
<<<<<<< HEAD
        .finally(() => setLoading(false));    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
        .finally(() => setLoading(false));
=======
        .finally(() => setLoading(false))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        .finally(() => setLoading(false))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <Dialog open>
<<<<<<< HEAD
        <DialogContent className='bg-zion-blue border-zion-blue-light text-white'>          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <DialogContent className='bg-zion-blue border-zion-blue-light text-white'>
=======
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <Button
            asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
<<<<<<< HEAD
            </Link>          </Button>
=======
            </Link>
=======
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </DialogContent>
      </Dialog>
    );
  }

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    <div className='min-h-screen bg-zion-blue py-8 px-4'>
      <h1 className='text-2xl font-bold text-white mb-6'>
        AI Equipment Recommendations
      </h1>
<<<<<<< HEAD
=======
=======
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {loading && (
        <div className='flex justify-center py-20'>
          <Loader2 className='h-8 w-8 animate-spin text-zion-purple' />
        </div>
      )}
<<<<<<< HEAD
      {error && <ErrorState error='Failed to load recommendations.' />}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {listings.map(listing => (
          <div key={listing.id} className='break-inside-avoid mb-4'>            <ProductListingCard listing={listing} />
=======
<<<<<<< HEAD
      {error && <ErrorState error='Failed to load recommendations.' />}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {listings.map(listing => (
          <div key={listing.id} className='break-inside-avoid mb-4'>
=======
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
        </div>
      )}
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {listings.map((listing) => (
          <div key={listing.id} className="break-inside-avoid mb-4">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <ProductListingCard listing={listing} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
