} from '@/components/ui/dialog';
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
const router = useRouter();;
const id = router && router.query.id as string;;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);
const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
const [isChatOpen, setIsChatOpen] = useState(false);
}
const { user } = useAuth();
const { formatPrice } = useCurrency();
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.



  // Find the listing from our shared data source - now also checking equipment listings;
const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);;
}
import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { ChatWidget } from '@/components/ChatWidget',;
import { useRouter } from 'next/router',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import Skeleton from "@/components/ui/skeleton";,;
import ImageWithRetry from '@/components/ui/ImageWithRetry';,;
import { Star;, MessageSquare, Brain, Shield } from 'lucide-react';
import { cn } from '@/lib/utils',;
import Link from 'next/link';,;
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',;
import { toast } from '@/hooks/use-toast',;
import { PaymentButton } from '@/components/transactions/PaymentButton',;
import { ProfileContact } from '@/components/profile/ProfileContact',;
import { Dialog;, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { useCurrency } from '@/hooks/useCurrency',;
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
const router = useRouter();,;
const id = router.query.id as string;,;
const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
const [isLoading, setIsLoading] = useState(false),;
const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
const [isChatOpen, setIsChatOpen] = useState(false)}
const { user } = useAuth(),;
const { formatPrice } = useCurrency(),

  // Find the listing from our shared data source - now also checking equipment listings;
const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);,;
if (!listing) {

  // Find the listing from our shared data source - now also checking equipment listings;
const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);;
if (!listing) {;
return (;

            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
                <Link href="/marketplace">Back to Marketplace</Link>

  }
;
const handleContact = () => {;;
if (user) {;
setIsChatOpen(true)
}
      </div>)};  }
  const handle_contact = () =>: any {;
    // Check condition;
if ( {) {};
$2
}
      setIsChatOpen (true)
    } else {;
setIsContactDialogOpen(true);    }      <div className="min-h-screen bg-zion-blue py-12 px-4">
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
                <Link href="/marketplace">Back to Marketplace</Link>
      );
const handleContact = () => {;;
if (user) {;
setIsChatOpen(true)
}
    } else {;
setIsContactDialogOpen(true);      setIsChatOpen(true)
    } else {;
setIsContactDialogOpen(true)
    }
  }
  return (;
    <>
                  {listing.images && listing.images.length > 0 ? (
src={;
listing.images[selectedImageIndex] |;
listing.images[0] |
                        '/placeholder.svg'}
                      alt={listing.title}
                      className='object-cover';
fallbackSrc='/placeholder.svg'                    />
      );
import { useState } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { ChatWidget } from '@/components/ChatWidget',;
import { useRouter } from 'next/router',;
import { Badge } from '@/components/ui/badge',;
import { Button } from '@/components/ui/button',;
import Skeleton from "@/components/ui/skeleton";,;
import ImageWithRetry from '@/components/ui/ImageWithRetry';,;
import { Star;, MessageSquare, Brain, Shield } from 'lucide-react';
import { cn } from '@/lib/utils',;
import Link from 'next/link';,;
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',;
import { toast } from '@/hooks/use-toast',;
import { PaymentButton } from '@/components/transactions/PaymentButton',;
import { ProfileContact } from '@/components/profile/ProfileContact',;
import { Dialog;, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { useCurrency } from '@/hooks/useCurrency',;
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
const router = useRouter();,;
const id = router.query.id as string;,;
const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
const [isLoading, setIsLoading] = useState(false),;
const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
const [isChatOpen, setIsChatOpen] = useState(false)}
const { user } = useAuth(),;
const { formatPrice } = useCurrency(),
  // Find the listing from our shared data source - now also checking equipment listings;
const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);,;
if (!listing) {;
return (;
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>
                <Link href="/marketplace">Back to Marketplace</Link></$1></$1></$1></$1>
      )
  }
;
const handleContact = () => {;;
if (user) {;
setIsChatOpen(true)
}
    } else {;
setIsContactDialogOpen(true)
    }
  },;
return (;

    <>
            {/* Left Column - Images */}
                  {listing.images && listing.images.length > 0 ? (
src={listing.images[selectedImageIndex] || listing.images[0] || "/placeholder.svg"}
                      alt={listing.title}
                      className="object-cover";
fallbackSrc="/placeholder.svg"
                    />

                  ) : (
                      <span className="text-zion-slate-light">No image available</span>
                  )}
                {listing.images && listing.images.length > 1 && (
                
                {listing.images && listing.images.length > 1 && (





                    {listing.images.map((image)}, index) => (
                      <$2 />;
key={index}
                        onClick={() => setSelectedImageIndex(index)}
;
className={cn(;
index === selectedImageIndex
                            ? 'border-zion-purple'
                            : 'border-transparent'                        )}                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                    {listing.images.map((image), index,) => (
                      <$2 />;
key={index,}
                        onClick={(,) => setSelectedImageIndex(index),}
;
className={cn(

                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        ),}
                      >
src={image,}
                          alt={`${listing.title}} - image ${index + 1}`}
                          className='object-cover';
fallbackSrc='/placeholder.svg'                        />                          className="object-cover"
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",;
index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
src={image}
                          alt={`${listing.title}} - image ${index + 1}`}
                          className="object-cover";
fallbackSrc="/placeholder.svg"
                        />
                    ))}
                )}
              {/* Description Section */}

                <h2 className='text-2xl font-bold text-white mb-4'>;
Description</$1>
                  {listing && listing.description}
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                




                {/* Features */}
                  <h3 className='text-xl font-bold text-white mb-4'>;
Key Features</$1>
                        <Brain className='h-5 w-5 text-zion-purple' /></$1>
                        <h4 className='font-medium text-white'>Advanced AI</h4>
                        <p className='text-sm text-zion-slate-light'>;
State-of-the-art machine learning techniques</$1></$1></$1>
                        <Shield className='h-5 w-5 text-zion-cyan' /></$1>
                        <h4 className='font-medium text-white'>;
Enterprise Security</$1>
                        <p className='text-sm text-zion-slate-light'>;
Built-in data protection and encryption;
on_click={() => setSelectedImageIndex (index)}
                        className={cn (
                          'w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2',;
index === selectedImageIndex
                            ? 'border - zion - purple'
                            : 'border - transparent'                        )}                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2";
index === selectedImageIndex ? "border - zion - purple" : "border - transparent")}
                    {listing.images.map ((image), index, ) => (
                      <;$2 />;
key={index,}
                        on_click={(, ) => setSelectedImageIndex (index),}
                        class_name={cn (
                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2",;
index === selectedImageIndex ? "border - zion - purple" : "border - transparent"),}
                      >
src={image,}
                          alt={`${listing.title}} - image ${index + 1}`}
                          className='object - cover';
fallback_src='/placeholder.svg'                        />                          className="object - cover";
fallback_src="/placeholder.svg"
                        /></$1>))}
                  </div>)}
              {/* Description Section */}
  </h2>;
Description</$1>
                  {listing.description}
                {/* Features */}

                  <h3 className='text - xl font - bold text - white mb - 4'>;
Key Features</$1>
                        <Brain className='h - 5 w - 5 text - zion - purple' /></$1>
                        <h4 className='font - medium text - white'>Advanced AI</h4>
                        <p className='text - sm text - zion - slate - light'>;
State - of - the - art machine learning techniques</$1></$1></$1>
                        <Shield className='h - 5 w - 5 text - zion - cyan' /></$1>
                        <h4 className='font - medium text - white'>;
Enterprise Security</$1>
                        <p className='text - sm text - zion - slate - light'>;
Built - in data protection and encryption</$1>                      </div></$1></$1></$1>
                {/* Features */}






                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>


                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                        <Brain className="h-5 w-5 text-zion-purple" /></$1>
                        <h4 className="font-medium text-white">Advanced AI</h4>
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p></$1></$1>
                        <Shield className="h-5 w-5 text-zion-cyan" /></$1>
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>
                        <Brain className="h - 5 w - 5 text - zion - purple" /></$1>
                        <h4 className="font - medium text - white">Advanced AI</h4>
                        <p className="text - sm text - zion - slate - light">State - of - the - art machine learning techniques</p></$1></$1>
                        <Shield className="h - 5 w - 5 text - zion - cyan" /></$1>
                        <h4 className="font - medium text - white">Enterprise Security</h4>
                        <p className="text - sm text - zion - slate - light">Built - in data protection and encryption</p></$1></$1></$1></$1>
                {/* Tags */}
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                    {listing && listing.tags.map((tag), i) => (
key={i}
                        variant='outline';
className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
                      >                        {tag}                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                {/* Tags */}
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                    {listing && listing.tags.map((tag), i) => (
                {/* Tags */}
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                    {listing.tags.map((tag), i) => (
                        {tag}
                    ))}

                {/* Tags */}
                  <h3 className='text - xl font - bold text - white mb - 4'>Tags</h3>
                    {listing.tags.map ((tag), i) => (
key={i}
                        variant='outline';
className='border - zion - slate - dark text - zion - slate - light py - 1 px - 3'
                      >                        {tag}                      <Badge key={i} variant="outline" className="border - zion - slate - dark text - zion - slate - light py - 1 px - 3">
                {/* Tags */}
                  <h3 className="text - xl font - bold text - white mb - 4">Tags</h3>
                    {listing.tags.map ((tag), i) => (
                        {tag}
                      </Badge>))}

                  </div></$1></$1></$1></$1>
                  {listing && listing.title}
                      {[...Array(5)].map((_), i) => (
            {/* Right Column - Details */}
            {/* Right Column - Details */}
variant='secondary';
className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30'
                  >
                    {listing.category}
                  {listing.featured && (
                    <Badge className='ml - 2 bg - zion - cyan / 20 text - zion - cyan'>                      Featured</$1>)}
                </div>            {/* Right Column - Details */}
                    {listing.category}

                  {listing.featured && (

                    {listing.category}
                  {listing.featured && (






                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">;
                  )}

                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (






                      {[...Array(5)].map((_)}, i) => (
key={i}
                          className={cn(;
i < Math.floor(listing.rating!)

                              ? 'text-zion-cyan fill-zion-cyan'
                              : 'text-zion-slate-light'                          )}
                        />
                      ))}
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)                            "h-5 w-5";
i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                      {[...Array(5)].map((_), i,) => (
key={i,}
                          className={cn(

                            "h-5 w-5",;
i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"

                          ),}
                        />
                      ))}
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount}{' '}
                      reviews)</$1></$1>
                            "h-5 w-5",;
i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)





                )}
                {/* Price */}

                  {listing.price !== null ? (
                      {formatPrice(listing.price)}
                  ) : (
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                  )}
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                  {listing && listing.price !== null ? (                    </span></$1>
                )}



                {/* Price */}
                  {listing && listing.price !== null ? (
                      {formatPrice(listing && listing.price)}
                  ) : (
                    <div className="text-2xl font-bold text-white">;
Custom Pricing</$1>
                  {listing.price !== null ? (
                      {formatPrice(listing.price)}
                  ) : (


                    <div className="text-2xl font-bold text-white">;
Custom Pricing
                  )}


                {/* Action Buttons */}
                {/* Action Buttons */}




                {/* Action Buttons */}
                  {listing.price !== null ? (
amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
;
buttonText="Buy Now";
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
onPaymentInitiated={() => {};
toast({
}
title: "Payment Processing"},;,
description: "Redirecting to secure checkout..."
                        })




                  {listing && listing.price !== null ? (
amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
;
buttonText='Buy Now';
className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6';
amount={listing.price,}
                      serviceId={listing.id,}
                      providerId={listing.author.id,}
                      buttonText="Buy Now";
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
onPaymentInitiated={(,) => {;
toast({
}
title: 'Payment Processing'},;,
description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />
                  ) : (
onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'                    >
                      {isLoading ? 'Processing...' : 'Request Quote'}
                  )}

variant='outline';
onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />;
Contact Publisher
                </div>;
buttonText="Buy Now";
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
onPaymentInitiated={() => {};
toast({
}
title: "Payment Processing"},;,
description: "Redirecting to secure checkout..."
                        })

                  {listing.price !== null ? (
amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
                      buttonText='Buy Now';
className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6';
amount={listing && listing.price,}
                      serviceId={listing && listing.id,}
                      providerId={listing && listing.author.id,}
                      buttonText="Buy Now";
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
onPaymentInitiated={(,) => {;
toast({
title: 'Payment Processing',
description: 'Redirecting to secure checkout...'}
onPaymentInitiated={(},) => {;
toast({
}
title: 'Payment Processing'},;,
description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />
                  ) : (
onClick={handleContact}
                      disabled={isLoading}
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'>
                      {isLoading ? 'Processing...' : 'Request Quote'}
                  )}
variant='outline';
onClick={handleContact}
                    disabled={isLoading}
;
className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'>
                    <MessageSquare className='h-4 w-4 mr-2' />;
Contact Publisher</$1></$1>
                {/* Publisher Info */}
                  <h3 className='text-lg font-bold text-white mb-3'>;
Publisher</$1>
                    {listing && listing.author.avatarUrl ? (
src={listing && listing.author.avatarUrl}
                          alt={listing && listing.author.name}
                          className='object-cover';
onError={e => {};
const target = e && e.target as HTMLImageElement;;
target && target.src =
                              'https: //ui-avatars && avatars.com/api/?name=' +}
encodeURIComponent(listing && listing.author.name)};                          }}
                        /></$1>
                    ) : (                            target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name);
target && target.src = "https: //ui-avatars && avatars.com/api/?name=" + encodeURIComponent(listing && listing.author.name)
                          }}
                        /></$1>
                    ) : (
                          {listing && listing.author.name && name.charAt(0)}
                        </span></$1>
                    )}

                        {listing && listing.author.name}
                      <p className='text-xs text-zion-slate-light'>;
Member since 2022</$1></$1></$1></$1>
                {/* Additional Info */}
                    <span className='text-zion-slate-light'>Listed on</span>
                      {new Date(listing && listing.createdAt).toLocaleDateString()}
                    </span></$1>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing && listing.id}</span>                  </div>                      </div>
                  {listing.price !== null ? (
                      {formatPrice(listing.price)}
                  ) : (
                    <div className="text-2xl font-bold text-white">;
Custom Pricing
                  )}

                {/* Publisher Info */}
                  <h3 className='text-lg font-bold text-white mb-3'>;
Publisher</$1>
                    {listing && listing.author.avatarUrl ? (
src={listing && listing.author.avatarUrl}
                          alt={listing && listing.author.name}
                          className='object-cover';
onError={e => {};
const target = e.target as HTMLImageElement;;
target.src =
                              'https: //ui-avatars.com/api/?name=' +}
encodeURIComponent(listing.author.name)};                          }}
                        />
                    ) : (                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        /></$1>
                    ) : (
                          {listing && listing.author.name && name.charAt(0)}
                        </span></$1>
                    )}
                        {listing.author.name}
                      <p className='text-xs text-zion-slate-light'>;
Member since 2022
                {/* Additional Info */}
                    <span className='text-zion-slate-light'>Listed on</span>
                      {new Date(listing && listing.createdAt).toLocaleDateString()}
                    </span></$1>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing && listing.id}</span>                  </div>                      </div>
                  {listing.price !== null ? (
                      {formatPrice(listing.price)}
                  ) : (
                    <div className="text-2xl font-bold text-white">;
Custom Pricing
                  )}

                
                    <Badge className="ml - 2 bg - zion - cyan / 20 text - zion - cyan">;
Featured</$1>)}
                  {listing.title}
                      {[...Array (5)].map ((_), i) => (
key={i}
                          className={cn (
                            'h - 5 w - 5',;
i < Math.floor (listing.rating!)
                              ? 'text - zion - cyan fill - zion - cyan'
                              : 'text - zion - slate - light'                          )}
                        />))}
                      {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews)                            "h - 5 w - 5";
i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light")}
                      {[...Array (5)].map ((_), i, ) => (
key={i,}
                          class_name={cn (
                            "h - 5 w - 5",;
i < Math.floor (listing.rating!) ? "text - zion - cyan fill - zion - cyan" : "text - zion - slate - light"),}
                        />))}
                      {listing.rating.to_fixed (1)} ({listing.review_count}{' '}
                      reviews)</$1></$1>)}
                {/* Price */}
                  {listing.price !== null ? (
                      {format_price (listing.price)}
                    </div>) : (
                    <div className='text - 2xl font - bold text - white'>                      Custom Pricing</$1>)}
                {/* Action Buttons */}
                <div className='space - y-3 mb - 8'>                  {listing.price !== null ? (                    </span></$1>)}
                {/* Price */}
                  {listing.price !== null ? (
                      {format_price (listing.price)}
                    </div>) : (
                    <div className="text - 2xl font - bold text - white">;
Custom Pricing</$1>)}
                {/* Action Buttons */}
                {/* Action Buttons */}
                  {listing.price !== null ? (
amount={listing.price}

                        })
                      }}

                    />
                  ) : (
onClick={handleContact}
;
disabled={isLoading}
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {isLoading ? "Processing..." : "Request Quote"}
                  )}
                  
variant="outline";
onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />;
Contact Publisher
                



                {/* Publisher Info */}
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                    {listing.author.avatarUrl ? (
src={listing.author.avatarUrl}
                          alt={listing.author.name}
;
className="object-cover";
onError={(e) => {};
}
const target = e.target as HTMLImageElement;},




                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                


                {/* Additional Info */}

                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
roomId={listing.id,}
        recipientId={listing.author.id,}
        isOpen={isChatOpen,}
        onClose={() => setIsChatOpen(false),}

      />

      {/* Contact Dialog */}

        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>;
className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                    >
                      {isLoading ? "Processing..." : "Request Quote"}
                  )}

variant="outline";
onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />;
Contact Publisher</$1></$1>
                {/* Publisher Info */}
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                    {listing.author.avatarUrl ? (
src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
onError={(e) => {};
const target = e.target as HTMLImageElement;;
}
target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)}}
                        /></$1>
                    ) : (
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span></$1>
                    )}
                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p></$1></$1></$1>
                {/* Additional Info */}
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span></$1>
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing && listing.id}</span>;
service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text='Buy Now';
className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';
amount={listing.price,}
                      service_id={listing.id,}
                      provider_id={listing.author.id,}
                      button_text="Buy Now";
className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
onPaymentInitiated={(, ) => {;
toast ({
}
title: 'Payment Processing'},;,
description: 'Redirecting to secure checkout...',
                        })
                      }}
                    />) : (
on_click={handle_contact}
                      disabled={is_loading}
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'                    >
                      {is_loading ? 'Processing...' : 'Request Quote'}
                    </Button>)}
variant="outline";
onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />;
Contact Publisher</$1></$1>
                {/* Publisher Info */}
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                    {listing.author.avatarUrl ? (
src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
onError={(e) => {};
const target = e.target as HTMLImageElement;;
}
target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)}}
                        /></$1>
                    ) : (
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span></$1>
                    )}
                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p></$1></$1></$1>
                {/* Additional Info */}
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span></$1>
                    <span className='text - zion - slate - light'>ID</span>
                    <span className='text - white'>{listing.id}</span>                  </div>                      </div>)}
                      <p className="font - medium text - white">{listing.author.name}</p>
                      <p className="text - xs text - zion - slate - light">Member since 2022</p></$1></$1></$1>
                {/* Additional Info */}
                    <span className="text - zion - slate - light">Listed on</span>
                    <span className="text - white">{new Date (listing.created_at).toLocaleDateString ()}</span></$1>
                    <span className="text - zion - slate - light">ID</span>
                    <span className="text - white">{listing.id}</span></$1></$1></$1></$1></$1></$1></$1>
      />
      {/* Contact Dialog */}
            <DialogTitle className='text-xl font-bold text-white'>;
Contact Publisher</$1></$1>
roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Contact Dialog */}

            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>

email={listing.author.email} // TypeScript now knows this might be undefined;
profileName={listing.author.name}
roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
      {/* Contact Dialog */}
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;
profileType="service"
          />
    </>;
email={listing && listing.author.email} // TypeScript now knows this might be undefined;
profileName={listing && listing.author.name}
            profileType='service'          />            profileType="service"
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle></$1>
email={listing && listing.author.email} // TypeScript now knows this might be undefined;
profileName={listing && listing.author.name}
            profileType="service"

          /></$1></$1>
    </>
  )
  )
}

</$1></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></p>