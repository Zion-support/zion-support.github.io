<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
import { useEffect, useState } from 'react',;
import { ProductListingCard } from '@/components/ProductListingCard',;
import { useAuth } from '@/hooks/useAuth',;
import { fetchRecommendations } from '@/api/recommendations',;
import type { ProductListing } from '@/types/listings',;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog',;
import { Button } from '@/components/ui/button',;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useEffect, useState} from 'react';
import {ProductListingCard} from '@/components/ProductListingCard';
import {useAuth} from '@/hooks/useAuth';
import {fetchRecommendations} from '@/api/recommendations';
import type { ProductListing } from '@/types/listings';
import {;
  Dialog,;
  DialogContent,;
  DialogHeader,;
  DialogTitle,;
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .then(setListings);
        .catch(() => setError(true));
        .finally(() => setLoading(false));    }        .catch((,) => setError(true));
        .finally((,) => setLoading(false));
        .finally(() => setLoading(false));
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        .finally(() => setLoading(false))

    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {;
    return (
<<<<<<< HEAD


=======
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
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
    }
  }, [isAuthenticated, user]),

  if (!isAuthenticated) {
    return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
<<<<<<< HEAD
<<<<<<< HEAD


          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">


            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
=======
          <Button
            asChild
            className='mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white'
          >
            <Link href='/auth/login?returnTo=/equipment/recommendations'>
              Sign In
            </Link>          </Button>          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  }
  return (
<<<<<<< HEAD


        ))}
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
          </div>
        ))}
      </div>
    </div>
  )
}
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          </div>
        ))}
      </div>;
    </div>;
  );
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      </div>;
    </div>;
  );
<<<<<<< HEAD
=======
};
}
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import {useEffect, useState} from 'react';
import {ProductListingCard} from '@/components / ProductListingCard';
import {use_auth} from '@/hooks / use_auth';
import {fetch_recommendations} from '@/api / recommendations';
import type { ProductListing } from '@/types / listings';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { Button } from '@/components / ui / button';
import { Loader2 } from 'lucide-react';
import Link from 'next / link';
import { ErrorState } from '@/components / jobs / applications';
export default /**
 * EquipmentRecommendations - Function description
 */
function EquipmentRecommendations() {
  const { is_authenticated, user } = use_auth ();
  const [listings, set_listings] = useState < ProductListing[]>([]);
  const [loading, set_loading] = useState < boolean>(false);
  const [error, set_error] = useState < boolean>(false);
  useEffect (() => {
export default /**
 * EquipmentRecommendations - Function description
 */
function EquipmentRecommendations() {
  const { is_authenticated, user } = use_auth (),
  const [listings, set_listings] = useState < ProductListing[]>([]),
  const [loading, set_loading] = useState < boolean>(false),
  const [error, set_error] = useState < boolean>(false),
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      set_loading (true);
      fetch_recommendations (user.id);
        .then (set_listings);
        .catch (() => set_error (true));
        .finally (() => set_loading (false)) }        .catch ((, ) => set_error (true));
        .finally ((, ) => set_loading (false));
        .finally (() => set_loading (false));
    }
  }, [is_authenticated, user]);
  // Check condition
if ( {) {
  $2
}
    return (
      <Dialog open>;
        <DialogContent className='bg - zion - blue border - zion - blue - light text - white'>          <DialogHeader>;
            <DialogTitle > Authentication required</DialogTitle>;
          </DialogHeader>;
          <p > Please sign in to get personalized AI picks.</p>        <DialogContent className="bg - zion - blue border - zion - blue - light text - white">;
          <DialogHeader>;
            <DialogTitle > Authentication required</DialogTitle>;
          </DialogHeader>;
          <p > Please sign in to get personalized AI picks.</p>;
          <Button;
            as_child;
            className='mt - 4 bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white';
          >;
            <Link href='/auth / login?return_to=/equipment / recommendations'>;
              Sign In;
            </Link>          </Button>          <Button as_child className="mt - 4 bg - gradient - to - r from - zion - purple to - zion - purple - dark text - white">;
            <Link href="/auth / login?return_to=/equipment / recommendations">Sign In</Link>;
          </Button>;
        </DialogContent>;
      </Dialog>);
  }
  return (
    <div className='min - h-screen bg - zion - blue py - 8 px - 4'>;
      <h1 className='text - 2xl font - bold text - white mb - 6'>;
        AI Equipment Recommendations;
      </h1>;
        <div className='flex justify - center py - 20'>;
          <Loader2 className='h - 8 w - 8 animate - spin text - zion - purple' />;
        </div>)}
      {error && <ErrorState error='Failed to load recommendations.' />}
      <div className='columns - 1 sm:columns - 2 md:columns - 3 lg:columns - 4 gap - 4 space - y-4'>;
        {listings.map (listing => (
          <div key={listing.id} className='break - inside - avoid mb - 4'>            <ProductListingCard listing={listing} />      {error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns - 1 sm:columns - 2 md:columns - 3 lg:columns - 4 gap - 4 space - y-4">;
        {listings.map ((listing, ) => (
          <div key={listing.id} className="break - inside - avoid mb - 4">;
          </div>))}
      </div>;
    </div>);
}

}
<<<<<<< HEAD
;
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
