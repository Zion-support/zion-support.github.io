
import Skeleton from "@/components/ui/skeleton";
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import Link from 'next/link';

export default function ListingDetail() {_// useParams may be untyped in this environment, _so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const _router = useRouter();
  const _id = router.query.id as string;
  const [selectedImageIndex, _setSelectedImageIndex] = useState(0);
  const [isLoading, _setIsLoading] = useState(false);
  const [isContactDialogOpen, _setIsContactDialogOpen] = useState(false);
  const [isChatOpen, _setIsChatOpen] = useState(false);
  const { user} = useAuth();
  const {_formatPrice} = useCurrency();

  // Find the listing from our shared data source - now also checking equipment listings
  const _listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

  if (!listing) {_return (
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
                <Link href="/marketplace">Back to Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      );}

  const _handleContact = () => {_if (user) {
      setIsChatOpen(true);} else {_setIsContactDialogOpen(true);}
  };

  return (
    <>
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                <div className="aspect-[16/9] w-full relative">
                  {_listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={listing.images[selectedImageIndex] || listing.images[0] || "/placeholder.svg"}
                      alt={_listing.title}
                      className="object-cover"
                      fallbackSrc="/placeholder.svg"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
                
                {_listing.images && listing.images.length > 1 && (_<div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, _index) => (_<div 
                        key={index}
                        onClick={_() => setSelectedImageIndex(index)}
                        className={_cn(
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2", _index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
                        <ImageWithRetry
                          src={_image}
                          alt={_`${listing.title} - image ${_index + 1}`}
                          className="object-cover"
                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {_/* Description Section */}
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{_listing.description}</p>
                
                {_/* Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-purple/20">
                        <Brain className="h-5 w-5 text-zion-purple" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Advanced AI</h4>
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-cyan/20">
                        <Shield className="h-5 w-5 text-zion-cyan" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {_/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {_listing.tags.map(_(tag, _i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {_tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {_/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {_listing.category}
                  </Badge>
                  {_listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-2xl font-bold text-white mb-4">{_listing.title}</h1>
                
                {_listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map(_(_, _i) => (
                        <Star
                          key={i}
                          className={_cn(
                            "h-5 w-5", _i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {_listing.rating.toFixed(1)} ({_listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {_/* Price */}
                <div className="mb-6">
                  {_listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
                </div>
                
                {_/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {_listing.price !== null ? (_<PaymentButton
                      amount={listing.price}
                      serviceId={_listing.id}
                      providerId={_listing.author.id}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={_() => {
                        toast({
                          title: "Payment Processing", _description: "Redirecting to secure checkout..."});
                      }}
                    />
                  ) : (
                    <Button 
                      onClick={_handleContact}
                      disabled={_isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {_isLoading ? "Processing..." : "Request Quote"}
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    onClick={_handleContact}
                    disabled={_isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher
                  </Button>
                </div>
                
                {_/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {_listing.author.avatarUrl ? (_<div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={_listing.author.name}
                          className="object-cover"
                          onError={_(e) => {
                            const _target = e.target as HTMLImageElement;
                            target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);}}
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{_listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-white">{_listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
                
                {_/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{_new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{_listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatWidget
        roomId={_listing.id}
        recipientId={_listing.author.id}
        isOpen={_isChatOpen}
        onClose={_() => setIsChatOpen(false)}
      />

      {_/* Contact Dialog */}
      <Dialog open={_isContactDialogOpen} onOpenChange={_setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={_listing.author.email} // TypeScript now knows this might be undefined
            profileName={_listing.author.name}
            profileType="service"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
