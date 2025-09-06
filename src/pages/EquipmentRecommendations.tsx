import { useEffect, useState } from 'react';
import { ProductListingCard } from '@/components/ProductListingCard';
import { useAuth } from '@/hooks/useAuth';
import { fetchRecommendations } from '@/api/recommendations';
import type { ProductListing } from '@/types/listings';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';
export default function EquipmentRecommendations() {
  const { isAuthenticated, user } = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
=======
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';

export default function EquipmentRecommendations() { const { isAuthenticated, user  } = useAuth(),
  const [ listings, setListings ] = useState<ProductListing[]>([]),
  const [ loading, setLoading ] = useState<boolean>(false),
  const [ error, setError ] = useState<boolean>(false),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
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
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <Dialog open>
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
          <Button
            asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
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
        </DialogContent>
      </Dialog>
    );
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='min-h-screen bg-zion-blue py-8 px-4'>
      <h1 className='text-2xl font-bold text-white mb-6'>
        AI Equipment Recommendations
      </h1>
=======
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
        </div>
      )}
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
          </div>
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
