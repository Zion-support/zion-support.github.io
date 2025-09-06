<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { ChatWidget } from '@/components/ChatWidget';
import { useRouter } from 'next/router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Skeleton from '@/components/ui/skeleton';
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import { Star, MessageSquare, Brain, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { toast } from '@/hooks/use-toast';
import { PaymentButton } from '@/components/transactions/PaymentButton';
import { ProfileContact } from '@/components/profile/ProfileContact';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,;
} from '@/components/ui/dialog';
import { useCurrency } from '@/hooks/useCurrency';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter();
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

  if (!listing) {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='text-center py-20'>
            <h1 className='text-3xl font-bold text-white mb-4'>
              Listing Not Found
            </h1>
            <p className='text-zion-slate-light mb-8'>
              The listing you're looking for doesn't exist or has been removed.
            </p>
            <Button
              asChild
              className='bg-gradient-to-r from-zion-purple to-zion-purple-dark'
            >
              <Link href='/marketplace'>Back to Marketplace</Link>
            </Button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );  }

  const handleContact = () => {
    if (user) {
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);    }
=======
    );
=======
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
      )
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
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
      )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const handleContact = () => {
    if (user) {
<<<<<<< HEAD
<<<<<<< HEAD
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);
=======
      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  return (
    <>
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
=======
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {/* Left Column - Images */}
            <div className='lg:col-span-2'>
              <div className='bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light'>
                <div className='aspect-[16/9] w-full relative'>
                  {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={
                        listing.images[selectedImageIndex] ||
                        listing.images[0] ||
                        '/placeholder.svg'
                      }
                      alt={listing.title}
                      className='object-cover'
                      fallbackSrc='/placeholder.svg'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center bg-zion-blue-light/20'>
                      <span className='text-zion-slate-light'>
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
<<<<<<< HEAD
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
                          index === selectedImageIndex
                            ? 'border-zion-purple'
                            : 'border-transparent'                        )}
=======
<<<<<<< HEAD
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
                          index === selectedImageIndex
                            ? 'border-zion-purple'
                            : 'border-transparent'
=======
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light">
                <div className="aspect-[16/9] w-full relative">
                  {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={listing.images[selectedImageIndex] || listing.images[0] || "/placeholder.svg"}
                      alt={listing.title}
                      className="object-cover"
                      fallbackSrc="/placeholder.svg"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <div 
                        key = {index}
                        onClick={() => setSelectedImageIndex(index)}
                        className = {cn(
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      >
                        <ImageWithRetry
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
<<<<<<< HEAD
                          className='object-cover'
                          fallbackSrc='/placeholder.svg'                        />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                          className='object-cover'
                          fallbackSrc='/placeholder.svg'
=======
                          className="object-cover"
                          fallbackSrc="/placeholder.svg"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          className="object-cover"
                          fallbackSrc="/placeholder.svg"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Description
                </h2>
                <p className='text-zion-slate-light whitespace-pre-line'>
                  {listing.description}
                </p>

<<<<<<< HEAD
=======
=======
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {/* Features */}
                <div className='mt-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    Key Features
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex items-start gap-3'>
                      <div className='p-2 rounded-full bg-zion-purple/20'>
                        <Brain className='h-5 w-5 text-zion-purple' />
                      </div>
                      <div>
                        <h4 className='font-medium text-white'>Advanced AI</h4>
                        <p className='text-sm text-zion-slate-light'>
                          State-of-the-art machine learning techniques
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <div className='p-2 rounded-full bg-zion-cyan/20'>
                        <Shield className='h-5 w-5 text-zion-cyan' />
                      </div>
                      <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        <h4 className='font-medium text-white'>
                          Enterprise Security
                        </h4>
                        <p className='text-sm text-zion-slate-light'>
                          Built-in data protection and encryption
<<<<<<< HEAD
                        </p>                      </div>
                    </div>
                  </div>
                </div>

=======
                        </p>
=======
              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                
                {/* Features */}
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
                
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {/* Tags */}
                <div className='mt-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {listing.tags.map((tag, i) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
<<<<<<< HEAD
                      >                        {tag}
=======
                      >
=======
                
                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {tag}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {/* Right Column - Details */}
            <div className='lg:col-span-1'>
              <div className='bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6'>
                <div className='mb-2'>
                  <Badge
                    variant='secondary'
                    className='bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
                  >
                    {listing.category}
                  </Badge>
                  {listing.featured && (
<<<<<<< HEAD
                    <Badge className='ml-2 bg-zion-cyan/20 text-zion-cyan'>                      Featured
                    </Badge>
                  )}
                </div>
=======
<<<<<<< HEAD
                    <Badge className='ml-2 bg-zion-cyan/20 text-zion-cyan'>
=======
            
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Featured
                    </Badge>
                  )}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                <h1 className='text-2xl font-bold text-white mb-4'>
                  {listing.title}
                </h1>

<<<<<<< HEAD
=======
=======
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {listing.rating && (
                  <div className='flex items-center gap-2 mb-6'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
<<<<<<< HEAD
                            'h-5 w-5',
                            i < Math.floor(listing.rating!)
                              ? 'text-zion-cyan fill-zion-cyan'
                              : 'text-zion-slate-light'                          )}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)
=======
<<<<<<< HEAD
                            'h-5 w-5',
                            i < Math.floor(listing.rating!)
                              ? 'text-zion-cyan fill-zion-cyan'
                              : 'text-zion-slate-light'
=======
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key = {i}
                          className={cn(
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            "h-5 w-5";
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          )}
                        />
                      ))}
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)
=======
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className='mb-6'>
                  {listing.price !== null ? (
                    <div className='text-3xl font-bold text-white'>
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
<<<<<<< HEAD
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                  {listing.price !== null ? (
=======
<<<<<<< HEAD
                    <div className='text-2xl font-bold text-white'>
=======
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {/* Price */}
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="text-2xl font-bold text-white">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Custom Pricing
                    </div>
                  )}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>
=======
                
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {listing.price !== null ? (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
<<<<<<< HEAD
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
=======
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white py-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      onPaymentInitiated={() => {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        });
                      }}
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                    >
                      {isLoading ? 'Processing...' : 'Request Quote'}
                    </Button>
                  )}

                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>

                {/* Publisher Info */}
                <div className='border-t border-zion-blue-light pt-6'>
                  <h3 className='text-lg font-bold text-white mb-3'>
                    Publisher
                  </h3>
                  <div className='flex items-center gap-3'>
                    {listing.author.avatarUrl ? (
                      <div className='relative h-12 w-12 rounded-full overflow-hidden'>
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className='object-cover'
                          onError={e => {
                            const target = e.target as HTMLImageElement;
<<<<<<< HEAD
                            target.src =
                              'https://ui-avatars.com/api/?name=' +
                              encodeURIComponent(listing.author.name);                          }}
                        />
                      </div>
                    ) : (
=======
<<<<<<< HEAD
                            target.src =
                              'https://ui-avatars.com/api/?name=' +
                              encodeURIComponent(listing.author.name);
=======
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
                      }}
                    />
                  ) : (
                    <Button 
                      onClick = {handleContact}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Publisher
                  </Button>
                </div>
                
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          }}
                        />
                      </div>
                    ) : (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
<<<<<<< HEAD
=======
=======
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    )}
                    <div>
                      <p className='font-medium text-white'>
                        {listing.author.name}
                      </p>
                      <p className='text-xs text-zion-slate-light'>
                        Member since 2022
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'>
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </span>
                  </div>
<<<<<<< HEAD
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing.id}</span>                  </div>
=======
<<<<<<< HEAD
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing.id}</span>
=======
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
=======
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <DialogHeader>
            <DialogTitle className='text-xl font-bold text-white'>
              Contact Publisher
            </DialogTitle>
          </DialogHeader>
          <ProfileContact
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
<<<<<<< HEAD
            profileType='service'          />
=======
<<<<<<< HEAD
            profileType='service'
=======
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType="service"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            profileType="service"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </DialogContent>
      </Dialog>
    </>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

}/>) : (<Button </Button>) ";
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> ;
}";
}/> </div>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {;
  listing.author.name.charAt (0) ;
}</span> </div>) ";
}<div> <p className=" font-medium text-white"> {;
  listing.author.name ";
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> listing.id ;
}recipientId= {;
  listing.author.id ;
}isOpen= {;
  isChatOpen ;
}onClose= {;
  () => setIsChatOpen (false) ";
}/> <DialogHeader> <DialogTitle className=" text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </>) ;
<<<<<<< HEAD
}'"
=======
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
