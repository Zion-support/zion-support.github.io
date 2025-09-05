import type {_ProductListing} from '@/types/listings';
import Link from 'next/link';

export default function EquipmentRecommendations() {_const { isAuthenticated, _user} = useAuth();
  const [listings, setListings] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect__(() => {_if (isAuthenticated && user?.id) {
      setLoading(true);
      fetchRecommendations(user.id)
        .then(setListings)
        .catch__(() => setError(true))
        .finally__(() => setLoading(false));}
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {_return (
      <Dialog open>
        <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
          <DialogHeader>
            <DialogTitle>Authentication required</DialogTitle>
          </DialogHeader>
          <p>Please sign in to get personalized AI picks.</p>
          <Button asChild className="mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <Link href="/auth/login?returnTo=/equipment/recommendations">Sign In</Link>
          </Button>
        </DialogContent>
      </Dialog>
    );}

  return (
    <div className="min-h-screen bg-zion-blue py-8 px-4">
      <h1 className="text-2xl font-bold text-white mb-6">AI Equipment Recommendations</h1>
      {_loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
        </div>
      )}
      {_error && <ErrorState error="Failed to load recommendations." />}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {_listings.map(_(listing) => (
          <div key={listing.id} className="break-inside-avoid mb-4">
            <ProductListingCard listing={_listing} />
          </div>
        ))}
      </div>
    </div>
  );
}
