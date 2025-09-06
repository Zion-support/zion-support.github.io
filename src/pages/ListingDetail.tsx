} from '@/components/ui/dialog';

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

import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.



  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

  if (!listing) {

  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);

  if (!listing) {;
    return (

import { cn } from '@/lib / utils';
import Link from 'next / link';
import { MARKETPLACE_LISTINGS } from '@/data / marketplace_data';
import { toast } from '@/hooks / use - toast';
import { PaymentButton } from '@/components / transactions / PaymentButton';
import { ProfileContact } from '@/components / profile / ProfileContact';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { use_currency } from '@/hooks / use_currency';
export default /**
 * ListingDetail - Function description
 */
function ListingDetail() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = use_router ();
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState (0);  const [is_loading, setIsLoading] = useState (false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState (false);
  const [isChatOpen, setIsChatOpen] = useState (false);
  const { user } = use_auth ();
  const { format_price } = use_currency ();
;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find (item => item.id === id);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
        <div className='container mx - auto'>;
          <div className='text - center py - 20'>;
            <h1 className='text - 3xl font - bold text - white mb - 4'>;
              Listing Not Found;
            </h1>;
            <p className='text - zion - slate - light mb - 8'>;
              The listing you're looking for doesn't exist or has been removed.;
            </p>;
            <Button;
              as_child;
              className='bg - gradient - to - r from - zion - purple to - zion - purple - dark';
            >;

              <Link href='/marketplace'>Back to Marketplace</Link>;
            </Button>;
          </div>;
        </div>;
      setIsChatOpen(true);
    } else {;
      setIsContactDialogOpen(true);
    }
  },

  return (


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
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}

                        className={cn(

                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',

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
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
                        <ImageWithRetry

                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"

                          fallbackSrc="/placeholder.svg"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Description Section */}



              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                



                {/* Features */}
                <div className='mt-8'>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    Key Features;
                  </h3>;
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
                    <div className='flex items-start gap-3'>;
                      <div className='p-2 rounded-full bg-zion-purple/20'>;
                        <Brain className='h-5 w-5 text-zion-purple' />;
                      </div>;
                      <div>;
                        <h4 className='font-medium text-white'>Advanced AI</h4>;
                        <p className='text-sm text-zion-slate-light'>;
                          State-of-the-art machine learning techniques;
                        </p>;
                      </div>;
                    </div>;
                    <div className='flex items-start gap-3'>;
                      <div className='p-2 rounded-full bg-zion-cyan/20'>;
                        <Shield className='h-5 w-5 text-zion-cyan' />;
                      </div>;
                      <div>;
                        <h4 className='font-medium text-white'>;
                          Enterprise Security;
                        </h4>;
                        <p className='text-sm text-zion-slate-light'>;
                          Built-in data protection and encryption;
                        on_click={() => setSelectedImageIndex (index)}
                        className={cn (
                          'w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2',
                          index === selectedImageIndex;
                            ? 'border - zion - purple';
                            : 'border - transparent'                        )}                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2";
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent")}
                  <div className="flex p - 4 gap - 2 overflow - x-auto">;
                    {listing.images.map ((image, index, ) => (
                      <div;
                        key = {index, }
                        on_click = {(, ) => setSelectedImageIndex (index), }
                        class_name = {cn (
                          "w - 20 h - 20 flex - shrink - 0 cursor - pointer rounded overflow - hidden border - 2",
                          index === selectedImageIndex ? "border - zion - purple" : "border - transparent"), }
                      >;
                        <ImageWithRetry;
                          src = {image, }
                          alt={`${listing.title} - image ${index + 1}`}
                          className='object - cover';
                          fallback_src='/placeholder.svg'                        />                          className="object - cover";
                          fallback_src="/placeholder.svg";
                        />;
                      </div>))}
                  </div>)}
              </div>;
              {/* Description Section */}
              <div className='mt - 8 bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light'>;
                <h2 className='text - 2xl font - bold text - white mb - 4'>;
                  Description;
                </h2>;
                <p className='text - zion - slate - light whitespace - pre - line'>;
                      </div>;
                    </div>;
                  </div>;
                </div>;


                {/* Tags */}
                <div className='mt-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {listing.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
                      >                        {tag}                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                {/* Tags */}
                  </div>;
                </div>;
              </div>;
            </div>;

                </div>;

                <h1 className='text-2xl font-bold text-white mb-4'>;
                  {listing && listing.title}
                </h1>;

                  <div className='flex items-center gap-2 mb-6'>;
                    <div className='flex items-center'>;
                      {[...Array(5)].map((_, i) => (;
            
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
            {/* Right Column - Details */}
            <div className='lg:col - span - 1'>;
              <div className='bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6'>;
                <div className='mb - 2'>;
                  <Badge;
                    variant='secondary';
                    className='bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30';
                  >;
                    {listing.category}
                  </Badge>;
                  {listing.featured && (
                    <Badge className='ml - 2 bg - zion - cyan / 20 text - zion - cyan'>                      Featured;
                    </Badge>)}
                </div>            {/* Right Column - Details */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - lg p - 6 border border - zion - blue - light sticky top - 6">;
                <div className="mb - 2">;
                  <Badge variant="secondary" className="bg - zion - purple / 20 text - zion - cyan hover:bg - zion - purple / 30">;

                    {listing.category}
                  </Badge>;
                  {listing.featured && (

            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (


                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>

                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">



                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(


                            'h-5 w-5',

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
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />;
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
