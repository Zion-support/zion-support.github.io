<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import {useEffect, useState} from 'react'
import {ProductListingCard} from '@/components/ProductListingCard'
import {useAuth} from '@/hooks/useAuth'
import {fetchRecommendations} from '@/api/recommendations'
import type { ProductListing } from '@/types/listings'
import {
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { Loader2 } from 'lucide-react'
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';
export default function EquipmentRecommendations() {

  const { isAuthenticated, user } = useAuth()
  const [listings, setListings] = useState<ProductListing[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  useEffect(() => {
export default function EquipmentRecommendations() {
  const { isAuthenticated, user } = useAuth()
  const [listings, setListings] = useState<ProductListing[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
<<<<<<< HEAD

  useEffect((,) => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false)) }        .catch((,) => setError(true))
        .finally((,) => setLoading(false))
        .finally(() => setLoading(false))
    }
  }, [isAuthenticated, user])
  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className='bg-zion-blue border-zion-blue-light text-white'>          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useEffect, useState } from 'react',;
import { ProductListingCard } from '@/components/ProductListingCard',;
import { useAuth } from '@/hooks/useAuth',;
import { fetchRecommendations } from '@/api/recommendations',;
import type { ProductListing } from '@/types/listings',;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button',;
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';

export default function EquipmentRecommendations() {;
  const { isAuthenticated, user } = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {;
export default function EquipmentRecommendations() {;
  const { isAuthenticated, user } = useAuth(),;
  const [listings, setListings] = useState<ProductListing[]>([]),;
  const [loading, setLoading] = useState<boolean>(false),;
  const [error, setError] = useState<boolean>(false),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  useEffect((,) => {;
    if (isAuthenticated && user?.id) {;

import { useEffect, useState } from 'react';
import { ProductListingCard } from '@/components/ProductListingCard';
import { useAuth } from '@/hooks/useAuth';
import { fetchRecommendations } from '@/api/recommendations';
import type { ProductListing } from '@/types/listings';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'
import Link from 'next/link';
import { ErrorState } from '@/components/jobs/applications';

export default function EquipmentRecommendations() { const { isAuthenticated, user  } = useAuth(),
  const [ listings, setListings ] = useState<ProductListing[]>([]),
  const [ loading, setLoading ] = useState<boolean>(false),
  const [ error, setError ] = useState<boolean>(false),


  useEffect(() => {
    if (isAuthenticated && user?.id) {

      setLoading(true);


      fetchRecommendations(user && user.id);
=======

  useEffect((,) => {
    if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false)) }        .catch((,) => setError(true))
        .finally((,) => setLoading(false))
        .finally(() => setLoading(false))
    }
  }, [isAuthenticated, user])
  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className='bg-zion-blue border-zion-blue-light text-white'>          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
import { useEffect, useState } from 'react',;
import { ProductListingCard } from '@/components/ProductListingCard',;
import { useAuth } from '@/hooks/useAuth',;
import { fetchRecommendations } from '@/api/recommendations',;
import type { ProductListing } from '@/types/listings',;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button',;
import { Loader2 } from 'lucide-react';
import Link from 'next/link',;
import { ErrorState } from '@/components/jobs/applications',;
export default function EquipmentRecommendations() {;
  const { isAuthenticated, user } = useAuth(),;
  const [listings, setListings] = useState<ProductListing[]>([]),;
  const [loading, setLoading] = useState<boolean>(false),;
  const [error, setError] = useState<boolean>(false),;
  useEffect(() => {;
    if (isAuthenticated && user?.id) {;
      setLoading(true);
      fetchRecommendations(user.id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        .then(setListings);
        .catch(() => setError(true));
        .finally(() => setLoading(false));
<<<<<<< HEAD

  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
<<<<<<< HEAD

          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>

=======
>>>>>>>           <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
          <Button
            asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
>>>>>>>             <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }, [isAuthenticated, user]),

  if (!isAuthenticated) {
    return (
<<<<<<< HEAD


=======
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
<<<<<<< HEAD
<<<<<<< HEAD


          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button
            asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
>>>>>>>           </Button>
        </DialogContent>
      </Dialog>
    )
<<<<<<< HEAD
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'>;
            <Link href='/auth/login?returnTo=/equipment/recommendations'>;
              Sign In;
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">;
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>;
          </Button>;
        </DialogContent>;
      </Dialog>;
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
<<<<<<< HEAD

=======
  }
  return (
    <div className='min-h-screen bg-zion-blue py-8 px-4'>
      <h1 className='text-2xl font-bold text-white mb-6'>
        AI Equipment Recommendations
      </h1>
        <div className='flex justify-center py-20'>
          <Loader2 className='h-8 w-8 animate-spin text-zion-purple' />
        </div>
      )}
      {error && <ErrorState error='Failed to load recommendations.' />}
      <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
        {listings.map(listing => (
          <div key={listing.id} className='break-inside-avoid mb-4'>            <ProductListingCard listing={listing} />      {error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {listings.map((listing,) => (
          <div key={listing.id} className="break-inside-avoid mb-4">
          </div>
        ))}
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          </div>
        ))}
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
        </div>
      )}
      {error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {listings.map((listing) => (
          <div key={listing.id} className="break-inside-avoid mb-4">
            <ProductListingCard listing={listing} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>
        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           </div>
>>>>>>>         ))}

      </div>;
    </div>;
  );
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
