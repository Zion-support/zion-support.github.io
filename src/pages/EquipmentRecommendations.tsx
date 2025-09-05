import { useEffect, useState } from 'react',
import { ProductListingCard } from '@/components/ProductListingCard',
import { useAuth } from '@/hooks/useAuth',
import { fetchRecommendations } from '@/api/recommendations',
import type { ProductListing } from '@/types/listings',
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog',
import { Button } from '@/components/ui/button',
import { Loader2 } from 'lucide-react'
import Link from 'next/link',
import { ErrorState } from '@/components/jobs/applications',
export default function EquipmentRecommendations() {
  const { isAuthenticated, user } = useAuth(),
  const [listings, setListings] = useState<ProductListing[]>([]),
  const [loading, setLoading] = useState<boolean>(false),
  const [error, setError] = useState<boolean>(false),

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      setLoading(true),
      fetchRecommendations(user.id)
        .then(setListings)
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }
  }, [isAuthenticated, user]),

  if (!isAuthenticated) {
    return (
      <Dialog open>
        <DialogContent className=&quot;bg-zion-blue border-zion-blue-light text-white&quot;>
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
          <Button asChild className=&quot;mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot;>
            <Link href=&quot;/auth/login?returnTo=/equipment/recommendations&quot;>Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className=&quot;min-h-screen bg-zion-blue py-8 px-4&quot;>
      <h1 className=&quot;text-2xl font-bold text-white mb-6&quot;>AI Equipment Recommendations</h1>
      {loading && (
        <div className=&quot;flex justify-center py-20&quot;>
          <Loader2 className=&quot;h-8 w-8 animate-spin text-zion-purple&quot; />
        </div>
      )}
      {error && <ErrorState error=&quot;Failed to load recommendations.&quot; />}
      <div className=&quot;columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4&quot;>
        {listings.map((listing) => (
          <div key={listing.id} className=&quot;break-inside-avoid mb-4&quot;>
            <ProductListingCard listing={listing} />
          </div>
        ))}
      </div>
    </div>
  )
}
