
import { useState } from &quot;react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ChatWidget } from &quot;@/components/ChatWidget&quot;;
import { useRouter } from &quot;next/router&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Skeleton from &quot;@/components/ui/skeleton&quot;;
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import { Star, MessageSquare, Brain, Shield } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import Link from 'next/link';
import { MARKETPLACE_LISTINGS } from &quot;@/data/marketplaceData&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { PaymentButton } from &quot;@/components/transactions/PaymentButton&quot;;
import { ProfileContact } from &quot;@/components/profile/ProfileContact&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { useCurrency } from '@/hooks/useCurrency';

export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter();
  const id = router.query.id as string;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

  if (!listing) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;text-center py-20&quot;>
            <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Listing Not Found</h1>
              <p className=&quot;text-zion-slate-light mb-8&quot;>The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark&quot;>
                <Link href=&quot;/marketplace&quot;>Back to Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      );
  }

  const handleContact = () => {
    if (user) {
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);
    }
  };

  return (
    <>
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {/* Left Column - Images */}
            <div className=&quot;lg:col-span-2&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light&quot;>
                <div className=&quot;aspect-[16/9] w-full relative&quot;>
                  {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={listing.images[selectedImageIndex] || listing.images[0] || &quot;/placeholder.svg&quot;}
                      alt={listing.title}
                      className=&quot;object-cover&quot;
                      fallbackSrc=&quot;/placeholder.svg&quot;
                    />
                  ) : (
                    <div className=&quot;w-full h-full flex items-center justify-center bg-zion-blue-light/20&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>No image available</span>
                    </div>
                  )}
                </div>
                
                {listing.images && listing.images.length > 1 && (
                  <div className=&quot;flex p-4 gap-2 overflow-x-auto&quot;>
                    {listing.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          &quot;w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2&quot;,
                          index === selectedImageIndex ? &quot;border-zion-purple&quot; : &quot;border-transparent&quot;
                        )}
                      >
                        <ImageWithRetry
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className=&quot;object-cover&quot;
                          fallbackSrc=&quot;/placeholder.svg&quot;
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description Section */}
              <div className=&quot;mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light&quot;>
                <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>Description</h2>
                <p className=&quot;text-zion-slate-light whitespace-pre-line&quot;>{listing.description}</p>
                
                {/* Features */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Key Features</h3>
                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                    <div className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;p-2 rounded-full bg-zion-purple/20&quot;>
                        <Brain className=&quot;h-5 w-5 text-zion-purple&quot; />
                      </div>
                      <div>
                        <h4 className=&quot;font-medium text-white&quot;>Advanced AI</h4>
                        <p className=&quot;text-sm text-zion-slate-light&quot;>State-of-the-art machine learning techniques</p>
                      </div>
                    </div>
                    <div className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;p-2 rounded-full bg-zion-cyan/20&quot;>
                        <Shield className=&quot;h-5 w-5 text-zion-cyan&quot; />
                      </div>
                      <div>
                        <h4 className=&quot;font-medium text-white&quot;>Enterprise Security</h4>
                        <p className=&quot;text-sm text-zion-slate-light&quot;>Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Tags</h3>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light py-1 px-3&quot;>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6&quot;>
                <div className=&quot;mb-2&quot;>
                  <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className=&quot;ml-2 bg-zion-cyan/20 text-zion-cyan&quot;>
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>{listing.title}</h1>
                
                {listing.rating && (
                  <div className=&quot;flex items-center gap-2 mb-6&quot;>
                    <div className=&quot;flex items-center&quot;>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            &quot;h-5 w-5&quot;,
                            i < Math.floor(listing.rating!) ? &quot;text-zion-cyan fill-zion-cyan&quot; : &quot;text-zion-slate-light&quot;
                          )}
                        />
                      ))}
                    </div>
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {/* Price */}
                <div className=&quot;mb-6&quot;>
                  {listing.price !== null ? (
                    <div className=&quot;text-3xl font-bold text-white&quot;>
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
                    <div className=&quot;text-2xl font-bold text-white&quot;>
                      Custom Pricing
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className=&quot;space-y-3 mb-8&quot;>
                  {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText=&quot;Buy Now&quot;
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                      onPaymentInitiated={() => {
                        toast({
                          title: &quot;Payment Processing&quot;,
                          description: &quot;Redirecting to secure checkout...&quot;
                        });
                      }}
                    />
                  ) : (
                    <Button 
                      onClick={handleContact}
                      disabled={isLoading}
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                    >
                      {isLoading ? &quot;Processing...&quot; : &quot;Request Quote&quot;}
                    </Button>
                  )}
                  
                  <Button 
                    variant=&quot;outline&quot; 
                    onClick={handleContact}
                    disabled={isLoading}
                    className=&quot;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                  >
                    <MessageSquare className=&quot;h-4 w-4 mr-2&quot; />
                    Contact Publisher
                  </Button>
                </div>
                
                {/* Publisher Info */}
                <div className=&quot;border-t border-zion-blue-light pt-6&quot;>
                  <h3 className=&quot;text-lg font-bold text-white mb-3&quot;>Publisher</h3>
                  <div className=&quot;flex items-center gap-3&quot;>
                    {listing.author.avatarUrl ? (
                      <div className=&quot;relative h-12 w-12 rounded-full overflow-hidden&quot;>
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className=&quot;object-cover&quot;
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = &quot;https://ui-avatars.com/api/?name=&quot; + encodeURIComponent(listing.author.name);
                          }}
                        />
                      </div>
                    ) : (
                      <div className=&quot;h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center&quot;>
                        <span className=&quot;text-lg font-medium text-zion-purple&quot;>{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className=&quot;font-medium text-white&quot;>{listing.author.name}</p>
                      <p className=&quot;text-xs text-zion-slate-light&quot;>Member since 2022</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className=&quot;border-t border-zion-blue-light mt-6 pt-6&quot;>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Listed on</span>
                    <span className=&quot;text-white&quot;>{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>ID</span>
                    <span className=&quot;text-white&quot;>{listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatWidget
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className=&quot;bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md&quot;>
          <DialogHeader>
            <DialogTitle className=&quot;text-xl font-bold text-white&quot;>Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType=&quot;service&quot;
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
