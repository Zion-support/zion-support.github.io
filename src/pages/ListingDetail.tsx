
=======
import { useCurrency } from '@/hooks/useCurrency';

export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;

  const router = useRouter();
  const id = router && router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);


  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.



  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
=======
                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
<<<<<<< HEAD

                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}

                        className={cn(
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                          index === selectedImageIndex
                            ? 'border-zion-purple'
                            : 'border-transparent'                        )}                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, index,) => (
                      <div
                        key = {index,}
                        onClick = {(,) => setSelectedImageIndex(index),}

                        className = {cn(
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2"
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        ),}
                      >
                        <ImageWithRetry
                          src = {image,}
                          alt={`${listing.title} - image ${index + 1}`}
                          className='object-cover'
                          fallbackSrc='/placeholder.svg'                        />                          className="object-cover"

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>

=======
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
<<<<<<< HEAD
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-5 w-5'
                            'h-5 w-5',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                            i < Math.floor(listing.rating!)

                              ? 'text-zion-cyan fill-zion-cyan'
                              : 'text-zion-slate-light'                          )}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)                            "h-5 w-5";
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i,) => (
                        <Star
                          key = {i,}
                          className = {cn(

                            "h-5 w-5",
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"

                          ),}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    </span>
                  </div>
                )}
                {/* Price */}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
=======
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}

                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing.price,}
                      serviceId = {listing.id,}
                      providerId = {listing.author.id,}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={(,) => {
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
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'                    >
                      {isLoading ? 'Processing...' : 'Request Quote'}
                    </Button>
                  )}

                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
                <div className="space-y-3 mb-8">;
                  {listing.price !== null ? (;
                    <PaymentButton;
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      amount = {listing.price,}
                      serviceId = {listing.id,}
                      providerId = {listing.author.id,}
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"

                      onPaymentInitiated={(,) => {
                        toast({
                          title: 'Payment Processing'
                          description: 'Redirecting to secure checkout...'

                      onPaymentInitiated={(,) => {;
                        toast({;
                          title: 'Payment Processing',;
                          description: 'Redirecting to secure checkout...',;

                        });
                      }}
=======
                    />
                  ) : (
                    <Button
                      onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'>;
                      {isLoading ? 'Processing...' : 'Request Quote'}
                    </Button>;
                  )}
                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}

                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'>;
                    <MessageSquare className='h-4 w-4 mr-2' />;
                    Contact Publisher;
                  </Button>;
                </div>;


                {/* Publisher Info */}
                <div className='border-t border-zion-blue-light pt-6'>;
                  <h3 className='text-lg font-bold text-white mb-3'>;
                    Publisher;
                  </h3>;
                  <div className='flex items-center gap-3'>;
                    {listing && listing.author.avatarUrl ? (;
                      <div className='relative h-12 w-12 rounded-full overflow-hidden'>;
                        <ImageWithRetry
                          src={listing && listing.author.avatarUrl}
                          alt={listing && listing.author.name}
                          className='object-cover'

                          onError={e => {;
                            const target = e && e.target as HTMLImageElement;
                            target && target.src =;
                              'https://ui-avatars && avatars.com/api/?name=' +;
                              encodeURIComponent(listing && listing.author.name);                          }}
                        />;
                      </div>;
                    ) : (                            target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
                            target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);

                          }}
                        />;
                      </div>;
                    ) : (;
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>;
                        <span className='text-lg font-medium text-zion-purple'>;
                          {listing && listing.author.name && name.charAt(0)}
                        </span>;
                      </div>;
                    )}

                    <div>;
                      <p className='font-medium text-white'>;
                        {listing && listing.author.name}
                      </p>;
                      <p className='text-xs text-zion-slate-light'>;
                        Member since 2022;
                      </p>;
                    </div>;
                  </div>;
                </div>;


                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'>;
                  <div className='flex justify-between mb-2'>;
                    <span className='text-zion-slate-light'>Listed on</span>;
                    <span className='text-white'>;
                      {new Date(listing && listing.createdAt).toLocaleDateString()}
                    </span>;
                  </div>;
                  <div className='flex justify-between mb-2'>;
                    <span className='text-zion-slate-light'>ID</span>;
                    <span className='text-white'>{listing && listing.id}</span>                  </div>                      </div>;

                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
                </div>
                
                    <Badge className="ml - 2 bg - zion - cyan / 20 text - zion - cyan">;
                      Featured;
                    </Badge>)}
                </div>;
                <h1 className='text - 2xl font - bold text - white mb - 4'>;
                  {listing.title}
                </h1>;
                  <div className='flex items - center gap - 2 mb - 6'>;
                    <div className='flex items - center'>;
                      {[...Array (5)].map ((_, i) => (
                        <Star;
                          key={i}
                          className={cn (
                            'h - 5 w - 5',
                            i < Math.floor (listing.rating!);
                              ? 'text - zion - cyan fill - zion - cyan';
                              : 'text - zion - slate - light'                          )}
                        />))}
                    </div>;
                    <span className='text - sm text - zion - slate - light'>;
                      {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews)                            "h - 5 w - 5";
                            i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light")}
                  <div className="flex items - center gap - 2 mb - 6">;
                    <div className="flex items - center">;
                      {[...Array (5)].map ((_, i, ) => (
                        <Star;
                          key = {i, }
                          class_name = {cn (
                            "h - 5 w - 5",
                            i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light"), }
                        />))}
                    </div>;
                    <span className='text - sm text - zion - slate - light'>;
                      {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews);
                    </span>;
                  </div>)}
                {/* Price */}
                <div className='mb - 6'>;
                  {listing.price !== null ? (
                    <div className='text - 3xl font - bold text - white'>;
                      {format_price (listing.price)}
                    </div>) : (
                    <div className='text - 2xl font - bold text - white'>                      Custom Pricing;
                    </div>)}
                </div>;
                {/* Action Buttons */}
                <div className='space - y-3 mb - 8'>                  {listing.price !== null ? (                    </span>;
                  </div>)}
                {/* Price */}
                <div className="mb - 6">;
                  {listing.price !== null ? (
                    <div className="text - 3xl font - bold text - white">;
                      {format_price (listing.price)}
                    </div>) : (
                    <div className="text - 2xl font - bold text - white">;
                      Custom Pricing;
                    </div>)}
                </div>;
                {/* Action Buttons */}
                <div className='space - y-3 mb - 8'>;

                {/* Action Buttons */}
                <div className="space - y-3 mb - 8">;
                  {listing.price !== null ? (
                    <PaymentButton;
                      amount={listing.price}

                        });
                      }}

                    />;
                  ) : (;
                    <Button;
                      onClick={handleContact}

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
                
<<<<<<< HEAD

                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className='object-cover'
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              'https://ui-avatars.com/api/?name=' +
                              encodeURIComponent(listing.author.name);                          }}
                        />
                      </div>
                    ) : (                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)



>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        />
                      </div>
                    ) : (

            profileType="service"
          />
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
