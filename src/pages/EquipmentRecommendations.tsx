=======
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
        .then(setListings);
        .catch(() => setError(true));
        .finally(() => setLoading(false));

        .finally(() => setLoading(false))

    }
  }, [isAuthenticated, user]),

  if (!isAuthenticated) {;
    return (
<<<<<<< HEAD
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
=======
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

            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    )
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
