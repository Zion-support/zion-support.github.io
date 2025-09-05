
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useAuth } from "@/hooks/useAuth",
import { ChatWidget } from "@/components/ChatWidget",
import { useRouter } from "next/router",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import Skeleton from "@/components/ui/skeleton",
import ImageWithRetry from '@/components/ui/ImageWithRetry',
import { Star, MessageSquare, Brain, Shield } from 'lucide-react'
import { cn } from "@/lib/utils",
import Link from 'next/link',
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",
import { toast } from "@/hooks/use-toast",
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { ProfileContact } from "@/components/profile/ProfileContact",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { useCurrency } from '@/hooks/useCurrency',
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter(),
  const id = router.query.id as string,
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [isLoading, setIsLoading] = useState(false),
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),
  const [isChatOpen, setIsChatOpen] = useState(false),
  const { user } = useAuth(),
  const { formatPrice } = useCurrency(),

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

  if (!listing) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;text-center py-20&quot;>
            <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>Listing Not Found</h1>
              <p className=&quot;text-zion-slate-light mb-8&quot;>The listing you're looking for doesn't exist or has been removed.</p>
              <Button asChild className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark&quot;>
                <Link href=&quot;/marketplace&quot;>Back to Marketplace</Link>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      )
  }

  const handleContact = () => {
    if (user) {
      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
    }
  },

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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  ) : (
                    <div className=&quot;w-full h-full flex items-center justify-center bg-zion-blue-light/20&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>No image available</span>
                    </div>
                  )}
                </div>
                
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
                
<<<<<<< HEAD
                {/* Tags */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Tags</h3>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant=&quot;outline&quot; className=&quot;border-zion-slate-dark text-zion-slate-light py-1 px-3&quot;>
                        {tag}
=======
                {_/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {_listing.tags.map(_(tag, _i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {_tag}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
<<<<<<< HEAD
            {/* Right Column - Details */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6&quot;>
                <div className=&quot;mb-2&quot;>
                  <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30&quot;>
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className=&quot;ml-2 bg-zion-cyan/20 text-zion-cyan&quot;>
=======
            {_/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {_listing.category}
                  </Badge>
                  {_listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Featured
                    </Badge>
                  )}
                </div>
                
<<<<<<< HEAD
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
=======
                <h1 className="text-2xl font-bold text-white mb-4">{_listing.title}</h1>
                
                {_listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map(_(_, _i) => (
                        <Star
                          key={i}
                          className={_cn(
                            "h-5 w-5", _i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          )}
                        />
                      ))}
                    </div>
<<<<<<< HEAD
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
=======
                    <span className="text-sm text-zion-slate-light">
                      {_listing.rating.toFixed(1)} ({_listing.reviewCount} reviews)
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                {/* Price */}
                <div className=&quot;mb-6&quot;>
                  {listing.price !== null ? (
                    <div className=&quot;text-3xl font-bold text-white&quot;>
=======
                {_/* Price */}
                <div className="mb-6">
                  {_listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
                    <div className=&quot;text-2xl font-bold text-white&quot;>
                      Custom Pricing
                    </div>
                  )}
                </div>
                
<<<<<<< HEAD
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
<<<<<<< HEAD
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
=======
                          title: &quot;Payment Processing&quot;,
                          description: &quot;Redirecting to secure checkout...&quot;
                        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      }}
                    />
                  ) : (
                    <Button 
<<<<<<< HEAD
                      onClick={handleContact}
                      disabled={isLoading}
                      className=&quot;w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6&quot;
                    >
                      {isLoading ? &quot;Processing...&quot; : &quot;Request Quote&quot;}
=======
                      onClick={_handleContact}
                      disabled={_isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {_isLoading ? "Processing..." : "Request Quote"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Button>
                  )}
                  
                  <Button 
<<<<<<< HEAD
                    variant=&quot;outline&quot; 
                    onClick={handleContact}
                    disabled={isLoading}
                    className=&quot;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
=======
                    variant="outline" 
                    onClick={_handleContact}
                    disabled={_isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <MessageSquare className=&quot;h-4 w-4 mr-2&quot; />
                    Contact Publisher
                  </Button>
                </div>
                
<<<<<<< HEAD
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
<<<<<<< HEAD
                            const target = e.target as HTMLImageElement,
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
=======
                            const target = e.target as HTMLImageElement;
                            target.src = &quot;https://ui-avatars.com/api/?name=&quot; + encodeURIComponent(listing.author.name);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
                
<<<<<<< HEAD
                {/* Additional Info */}
                <div className=&quot;border-t border-zion-blue-light mt-6 pt-6&quot;>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Listed on</span>
                    <span className=&quot;text-white&quot;>{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>ID</span>
                    <span className=&quot;text-white&quot;>{listing.id}</span>
=======
                {_/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{_new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{_listing.id}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className=&quot;bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md&quot;>
=======
      {_/* Contact Dialog */}
      <Dialog open={_isContactDialogOpen} onOpenChange={_setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <DialogHeader>
            <DialogTitle className=&quot;text-xl font-bold text-white&quot;>Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
<<<<<<< HEAD
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType=&quot;service&quot;
=======
            email={_listing.author.email} // TypeScript now knows this might be undefined
            profileName={_listing.author.name}
            profileType="service"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
