<<<<<<< HEAD

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ChatWidget } from "@/components/ChatWidget";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import { Star, MessageSquare, Brain, Shield } from 'lucide-react'
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData";
import { toast } from "@/hooks/use-toast";
import { PaymentButton } from "@/components/transactions/PaymentButton";
import { ProfileContact } from "@/components/profile/ProfileContact";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter();
  const id = router.query.id as string;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
=======
<<<<<<< HEAD
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
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog';
  Dialog,
  DialogContent,
  DialogHeader,;
  DialogTitle;
} from '@/components/ui/dialog';
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
=======
} from '@/components/ui/dialog';

import { useCurrency } from '@/hooks/useCurrency';

export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const router = useRouter();
  const id = router && router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);


>>>>>>> merged-prs-20250907-203621
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();

<<<<<<< HEAD
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);

=======
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

<<<<<<< HEAD
  const router = useRouter();
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
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

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

<<<<<<< HEAD
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),


  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);

  if (!listing) {;
    return (
      <div className="min-h-screen bg-zion-blue py-12 px-4">
>>>>>>> merged-prs-20250907-203621
  if (!listing) {
    return (
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
<<<<<<< HEAD
      )
=======
      </div>
    );  }
  const handleContact = () => {
    if (user) {
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);    }      <div className="min-h-screen bg-zion-blue py-12 px-4">

      <div className="min-h-screen bg-zion-blue py-12 px-4">
=======
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

      <div className="min-h-screen bg-zion-blue py-12 px-4">

      <div className="min-h-screen bg-zion-blue py-12 px-4">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> merged-prs-20250907-203621
  }

  const handleContact = () => {
    if (user) {
      setIsChatOpen(true)
<<<<<<< HEAD
    } else {
      setIsContactDialogOpen(true)
    }
  };

  return (
=======
      </div>);  }
  const handle_contact = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setIsChatOpen (true);
    } else {
      setIsContactDialogOpen (true);    }      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;
        <div className="container mx - auto">;
          <div className="text - center py - 20">;
            <h1 className="text - 3xl font - bold text - white mb - 4">Listing Not Found</h1>;
              <p className="text - zion - slate - light mb - 8">The listing you're looking for doesn't exist or has been removed.</p>;
              <Button as_child className="bg - gradient - to - r from - zion - purple to - zion - purple - dark">;
                <Link href="/marketplace">Back to Marketplace</Link>;
              </Button>;
            </div>;
          </div>;
        </div>);
  const handle_contact = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setIsChatOpen (true);
    } else {
      setIsContactDialogOpen (true);      setIsChatOpen (true);

    } else {
      setIsContactDialogOpen (true);
    }
<<<<<<< HEAD
  }
  return (
    <>
      <div className='min-h-screen bg-zion-blue py-12 px-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <div className='bg-zion-blue-dark rounded-lg overflow-hidden border border-zion-blue-light'>
                <div className='aspect-[16/9] w-full relative'>
                  {listing.images && listing.images.length > 0 ? (
                    <ImageWithRetry
                      src={
                        listing.images[selectedImageIndex] |
                        listing.images[0] |
                        '/placeholder.svg'
                      }
                      alt={listing.title}
                      className='object-cover'
                      fallbackSrc='/placeholder.svg'                    />
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      )
import { useState } from "react",;
import { useAuth } from "@/hooks/useAuth",;
import { ChatWidget } from "@/components/ChatWidget",;
import { useRouter } from "next/router",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import Skeleton from "@/components/ui/skeleton",;
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { Star, MessageSquare, Brain, Shield } from 'lucide-react';
import { cn } from "@/lib/utils",;
import Link from 'next/link',;
import { MARKETPLACE_LISTINGS } from "@/data/marketplaceData",;
import { toast } from "@/hooks/use-toast",;
import { PaymentButton } from "@/components/transactions/PaymentButton",;
import { ProfileContact } from "@/components/profile/ProfileContact",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { useCurrency } from '@/hooks/useCurrency',;
export default function ListingDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = useRouter(),;
  const id = router.query.id as string,;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
  const [isLoading, setIsLoading] = useState(false),;
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false),;
  const [isChatOpen, setIsChatOpen] = useState(false),;
  const { user } = useAuth(),;
  const { formatPrice } = useCurrency(),;
  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),;
  if (!listing) {;
    return (;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="container mx-auto">;
          <div className="text-center py-20">;
            <h1 className="text-3xl font-bold text-white mb-4">Listing Not Found</h1>;
              <p className="text-zion-slate-light mb-8">The listing you're looking for doesn't exist or has been removed.</p>;
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">;
                <Link href="/marketplace">Back to Marketplace</Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      );
  }
;
  const handleContact = () => {;
    if (user) {;
      setIsChatOpen(true);
    } else {;
      setIsContactDialogOpen(true);
    }
  },

  return (
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    <>
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
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
<<<<<<< HEAD
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2";
=======
<<<<<<< HEAD
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">


                    {listing.images.map((image, index) => (
                      <div 
                        key = {index}

                        className={cn(
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
=======


                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
<<<<<<< HEAD
                        className={cn(
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
=======

                        className={cn(

                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> merged-prs-20250907-203621
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >
                        <ImageWithRetry
<<<<<<< HEAD
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"
                          fallbackSrc="/placeholder.svg"
=======

<<<<<<< HEAD
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >;
                        <ImageWithRetry;
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"
=======
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"

                          fallbackSrc="/placeholder.svg"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Description Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className='mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Description
                </h2>
                <p className='text-zion-slate-light whitespace-pre-line'>
                  {listing.description}
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-purple/20">
                        <Brain className="h-5 w-5 text-zion-purple" />
                          fallbackSrc="/placeholder.svg"
                        />
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
                        <h4 className='font-medium text-white'>
                          Enterprise Security
                        </h4>
                        <p className='text-sm text-zion-slate-light'>
                          Built-in data protection and encryption
                        </p>                      </div>
                    </div>
                  </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


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
                  {listing.description}
                </p>;
                {/* Features */}
                <div className='mt - 8'>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    Key Features;
                  </h3>;
                  <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
                    <div className='flex items - start gap - 3'>;
                      <div className='p - 2 rounded - full bg - zion - purple / 20'>;
                        <Brain className='h - 5 w - 5 text - zion - purple' />;
                      </div>;
                      <div>;
                        <h4 className='font - medium text - white'>Advanced AI</h4>;
                        <p className='text - sm text - zion - slate - light'>;
                          State - of - the - art machine learning techniques;
                        </p>;
                      </div>;
                    </div>;
                    <div className='flex items - start gap - 3'>;
                      <div className='p - 2 rounded - full bg - zion - cyan / 20'>;
                        <Shield className='h - 5 w - 5 text - zion - cyan' />;
                      </div>;
                      <div>;
                        <h4 className='font - medium text - white'>;
                          Enterprise Security;
                        </h4>;
                        <p className='text - sm text - zion - slate - light'>;
                          Built - in data protection and encryption;
                        </p>                      </div>;
                    </div>;
                  </div>;
                </div>;
                {/* Features */}


<<<<<<< HEAD
                )}
              </div>
              {/* Description Section */}
              <div className='mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Description
                </h2>
                <p className='text-zion-slate-light whitespace-pre-line'>
                  {listing.description}
                </p>
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
                        <h4 className="font-medium text-white">Enterprise Security</h4>
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
=======
                        <h4 className='font-medium text-white'>
                          Enterprise Security
                        </h4>
                        <p className='text-sm text-zion-slate-light'>
                          Built-in data protection and encryption
                        </p>                      </div>
                    </div>
                  </div>
                </div>
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <h4 className="font-medium text-white">Enterprise Security</h4>
>>>>>>> merged-prs-20250907-203621
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>;
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-purple/20">;
                        <Brain className="h-5 w-5 text-zion-purple" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Advanced AI</h4>;
                        <p className="text-sm text-zion-slate-light">State-of-the-art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start gap-3">;
                      <div className="p-2 rounded-full bg-zion-cyan/20">;
                        <Shield className="h-5 w-5 text-zion-cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font-medium text-white">Enterprise Security</h4>;
                        <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>;

                <div className="mt - 8">;
                  <h3 className="text - xl font - bold text - white mb - 4">Key Features</h3>;
                  <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - purple / 20">;
                        <Brain className="h - 5 w - 5 text - zion - purple" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Advanced AI</h4>;
                        <p className="text - sm text - zion - slate - light">State - of - the - art machine learning techniques</p>;
                      </div>;
                    </div>;
                    <div className="flex items - start gap - 3">;
                      <div className="p - 2 rounded - full bg - zion - cyan / 20">;
                        <Shield className="h - 5 w - 5 text - zion - cyan" />;
                      </div>;
                      <div>;
                        <h4 className="font - medium text - white">Enterprise Security</h4>;
                        <p className="text - sm text - zion - slate - light">Built - in data protection and encryption</p>;

                      </div>;
                    </div>;
                  </div>;
                </div>;


<<<<<<< HEAD
                <div className='mt-8'>;
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>;
                  <div className='flex flex-wrap gap-2'>;
                    {listing && listing.tags.map((tag, i) => (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;



>>>>>>> merged-prs-20250907-203621
                
                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
                      </Badge>
                    ))}
<<<<<<< HEAD
                  </div>
                </div>
              </div>
            </div>
            
=======

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
                      </Badge>))}

                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
=======

                </div>;

                <h1 className='text-2xl font-bold text-white mb-4'>;
                  {listing && listing.title}
                </h1>;

                  <div className='flex items-center gap-2 mb-6'>;
                    <div className='flex items-center'>;
                      {[...Array(5)].map((_, i) => (;
            
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
<<<<<<< HEAD
                    {listing.category}
                  </Badge>
                  {listing.featured && (
=======
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

              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
<<<<<<< HEAD
                    {listing.category}
                  </Badge>
                  {listing.featured && (
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
                      Featured
                    </Badge>
                  )}
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <h1 className='text-2xl font-bold text-white mb-4'>
                  {listing.title}
                </h1>
                  <div className='flex items-center gap-2 mb-6'>
                    <div className='flex items-center'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
<<<<<<< HEAD
                            "h-5 w-5";
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
                    </span>
                  </div>
                )}
                
                {/* Price */}
=======

<<<<<<< HEAD
                            'h-5 w-5',


                            'h-5 w-5'
                            'h-5 w-5',
                            i < Math.floor(listing.rating!)
=======

                            'h-5 w-5',

                            i < Math.floor(listing.rating!)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                            "h-5 w-5"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          ),}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)
                          ),}
                        />;
                      ))}
=======

                            "h-5 w-5",
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"

                          ),}
                        />
                      ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </div>;
                    <span className='text-sm text-zion-slate-light'>;
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount}{' '}
                      reviews);
                    </span>;
                  </div>;
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />;
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                    </span>



=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </span>
                  </div>
                )}
                {/* Price */}
<<<<<<< HEAD
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className='mb-6'>
                  {listing.price !== null ? (
                    <div className='text-3xl font-bold text-white'>
                      {formatPrice(listing.price)}

=======

                </div>;


                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                  {listing && listing.price !== null ? (                    </span>;
                  </div>;
                )}



                {/* Price */}
                <div className="mb-6">;
                  {listing && listing.price !== null ? (;
                    <div className="text-3xl font-bold text-white">;
                      {formatPrice(listing && listing.price)}
                    </div>;
                  ) : (;
                    <div className="text-2xl font-bold text-white">;
                      Custom Pricing;
                    </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
<<<<<<< HEAD
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
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

                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
=======

                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                </div>;



                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                ;
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton


                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}

                      amount={listing.price}
<<<<<<< HEAD
=======
                      serviceId={listing.id}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                    />
                  ) : (
=======
                    />;
                  ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
ursor/fix-website-loading-errors-and-merge-6662
                {/* Publisher Info */}
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}

                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement,
ursor/fix-website-loading-errors-and-merge-6662
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                        />
                      </div>
                    ) : (
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
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
                  ) : (
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                  {listing.price !== null ? (                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
                
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton
                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
                  <Button
                    variant='outline'
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
>>>>>>> merged-prs-20250907-203621
                      buttonText="Buy Now"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6"
                      onPaymentInitiated={() => {
                        toast({
                          title: "Payment Processing",
                          description: "Redirecting to secure checkout..."
                        })
<<<<<<< HEAD
                      }}
                    />
                  ) : (
                    <Button 
                      onClick={handleContact}
                      disabled={isLoading}
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    />;
                  ) : (;
                    <Button;
                      onClick={handleContact}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      disabled={isLoading}
>>>>>>> merged-prs-20250907-203621
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
=======



>>>>>>> merged-prs-20250907-203621
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>
                  <div className="flex items-center gap-3">
                    {listing.author.avatarUrl ? (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <ImageWithRetry
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
<<<<<<< HEAD
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
=======
<<<<<<< HEAD
                          className='object-cover'
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.src =
                              'https://ui-avatars.com/api/?name=' +
                              encodeURIComponent(listing.author.name);                          }}
                        />
                      </div>
                    ) : (                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement,



>>>>>>> merged-prs-20250907-203621
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        />
                      </div>
                    ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div>


                    )}
                    <div>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
<<<<<<< HEAD
                    <div>
                      <p className="font-medium text-white">{listing.author.name}</p>
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">
=======
<<<<<<< HEAD
                    <div>
=======

                    <div>


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <p className="font-medium text-white">{listing.author.name}</p>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                


                {/* Additional Info */}

>>>>>>> merged-prs-20250907-203621
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">Listed on</span>
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zion-slate-light">ID</span>
                    <span className="text-white">{listing.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      <ChatWidget
=======
<<<<<<< HEAD
      <ChatWidget
        roomId = {listing.id,}
        recipientId = {listing.author.id,}
        isOpen = {isChatOpen,}
        onClose = {() => setIsChatOpen(false),}
      />
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6";
                    >;
                      {isLoading ? "Processing..." : "Request Quote"}
                    </Button>;
                  )}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing && listing.id}</span>;
                      service_id={listing.id}
                      provider_id={listing.author.id}
                      button_text='Buy Now';
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';
                      amount = {listing.price, }
                      service_id = {listing.id, }
                      provider_id = {listing.author.id, }
                      button_text="Buy Now";
                      className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6";
                      onPaymentInitiated={(, ) => {
                        toast ({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...',
                        });
                      }}
                    />) : (
                    <Button;
                      on_click={handle_contact}
                      disabled={is_loading}
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6'                    >;
                      {is_loading ? 'Processing...' : 'Request Quote'}
                    </Button>)}
                  <Button;
                    variant="outline";
                    onClick={handleContact}
                    disabled={isLoading}
                    className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                  >;
                    <MessageSquare className="h-4 w-4 mr-2" />;
                    Contact Publisher;
                  </Button>;
                </div>;
                {/* Publisher Info */}
                <div className="border-t border-zion-blue-light pt-6">;
                  <h3 className="text-lg font-bold text-white mb-3">Publisher</h3>;
                  <div className="flex items-center gap-3">;
                    {listing.author.avatarUrl ? (;
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">;
                        <ImageWithRetry;
                          src={listing.author.avatarUrl}
                          alt={listing.author.name}
                          className="object-cover";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name);
                          }}
                        />;
                      </div>;
                    ) : (;
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>;
                      </div>;
                    )}
                    <div>;
                      <p className="font-medium text-white">{listing.author.name}</p>;
                      <p className="text-xs text-zion-slate-light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border-t border-zion-blue-light mt-6 pt-6">;
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">Listed on</span>;
                    <span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>ID</span>;
                    <span className='text - white'>{listing.id}</span>                  </div>                      </div>)}
                    <div>;
                      <p className="font - medium text - white">{listing.author.name}</p>;
                      <p className="text - xs text - zion - slate - light">Member since 2022</p>;
                    </div>;
                  </div>;
                </div>;
                {/* Additional Info */}
                <div className="border - t border - zion - blue - light mt - 6 pt - 6">;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">Listed on</span>;
                    <span className="text - white">{new Date (listing.created_at).toLocaleDateString ()}</span>;
                  </div>;
                  <div className="flex justify - between mb - 2">;
                    <span className="text - zion - slate - light">ID</span>;
                    <span className="text - white">{listing.id}</span>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

      />;


      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>;
          <DialogHeader>;
            <DialogTitle className='text-xl font-bold text-white'>;
              Contact Publisher;
            </DialogTitle>;
          </DialogHeader>;
          <ProfileContact

>>>>>>> merged-prs-20250907-203621
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
<<<<<<< HEAD
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType="service"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
=======

            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
      <ChatWidget;
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />;
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">

          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
            profileType='service'          />            profileType="service"
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            profileType="service"
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
);
}/>) : (<Button </Button>) ";
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> ;
}";
}/> </div>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {listing.author.name.charAt (0) ;
}</span> </div>) ";
}<div> <p className=" font-medium text-white"> {listing.author.name ";
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> listing.id ;
}recipientId= {listing.author.id ;
}isOpen= {isChatOpen ;
}onClose= {() => setIsChatOpen (false) ";
}/> <DialogHeader> <DialogTitle className=" text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </>) ;
}'"}
  )
}
;
  )
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            email={listing && listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing && listing.author.name}
            profileType='service'          />            profileType="service";
          <DialogHeader>;
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;
          </DialogHeader>;
          <ProfileContact
            email={listing && listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing && listing.author.name}
            profileType="service"
          />;
        </DialogContent>;
      </Dialog>;
    </>;
  );


  )
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
