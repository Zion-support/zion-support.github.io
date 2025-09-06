<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Dialog
  DialogContent
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Dialog,
  DialogContent,
  DialogHeader,;
  DialogTitle;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
} from '@/components/ui/dialog';
import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const router = useRouter();
<<<<<<< HEAD
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const id = router && router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { useCurrency } from '@/hooks/useCurrency';
export default function ListingDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.

<<<<<<< HEAD
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const router = useRouter();
  const id = router.query.id as string;  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  const [isLoading, setIsLoading] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { user } = useAuth();
  const { formatPrice } = useCurrency();
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

<<<<<<< HEAD
<<<<<<< HEAD
  if (!listing) {
<<<<<<< HEAD
=======
>>>>>>> 
  // Find the listing from our shared data source - now also checking equipment listings
  const listing = MARKETPLACE_LISTINGS.find(item => item.id === id),

>>>>>>>   if (!listing) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  // Find the listing from our shared data source - now also checking equipment listings;
  const listing = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.find(item => item && item.id === id);

  if (!listing) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return (
      <div className="min-h-screen bg-zion-blue py-12 px-4">
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>         <div className="container mx-auto">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!listing) {
    return (
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

                  ) : (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
    );  }
  const handleContact = () => {
    if (user) {
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);    }      <div className="min-h-screen bg-zion-blue py-12 px-4">
=======

      <div className="min-h-screen bg-zion-blue py-12 px-4">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
  const handleContact = () => {
    if (user) {
      setIsChatOpen(true);
    } else {
      setIsContactDialogOpen(true);      setIsChatOpen(true)
    } else {
      setIsContactDialogOpen(true)
<<<<<<< HEAD
=======
=======

  }

  const handleContact = () => {
    if (user) {
      setIsChatOpen(true)
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  },

  return (
    <>
<<<<<<< HEAD
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
>>>>>>>                   ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="w-full h-full flex items-center justify-center bg-zion-blue-light/20">
                      <span className="text-zion-slate-light">No image available</span>
                    </div>
                  )}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    {listing.images.map((image, index) => (
=======
                {listing.images && listing.images.length > 1 && (
<<<<<<< HEAD
                  <div className='flex p-4 gap-2 overflow-x-auto'>
>>>>>>>                     {listing.images.map((image, index) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      <div
                        key={index}
ursor/fix-website-loading-errors-and-merge-6662
=======
                  <div className="flex p-4 gap-2 overflow-x-auto">


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {listing.images.map((image, index) => (
                      <div 
                        key = {index}
>>>>>>>                         onClick={() => setSelectedImageIndex(index)}

                        className={cn(
<<<<<<< HEAD

=======
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {listing.images && listing.images.length > 1 && (
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                
                {listing.images && listing.images.length > 1 && (
                  <div className="flex p-4 gap-2 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
<<<<<<< HEAD
>>>>>>>                         )}
=======
                        )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      >
                        <ImageWithRetry

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          "w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2",
                          index === selectedImageIndex ? "border-zion-purple" : "border-transparent"
                        )}
                      >;
                        <ImageWithRetry;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          src={image}
                          alt={`${listing.title} - image ${index + 1}`}
                          className="object-cover"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                          fallbackSrc="/placeholder.svg"
=======
>>>>>>>                           fallbackSrc="/placeholder.svg"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        />
                      </div>
<<<<<<< HEAD
>>>>>>>                     ))}
=======
                    ))}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </div>
                )}
              </div>

              {/* Description Section */}
<<<<<<< HEAD

<<<<<<< HEAD
                {/* Features */}
=======
              <div className='mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light'>
                <h2 className='text-2xl font-bold text-white mb-4'>
                  Description
                </h2>
                <p className='text-zion-slate-light whitespace-pre-line'>
                  {listing.description}
                </p>
>>>>>>>                 {/* Features */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zion-purple/20">
                        <Brain className="h-5 w-5 text-zion-purple" />
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                          fallbackSrc="/placeholder.svg"
                        />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
                        <h4 className='font-medium text-white'>
                          Enterprise Security
                        </h4>
                        <p className='text-sm text-zion-slate-light'>
                          Built-in data protection and encryption
                        </p>                      </div>
                    </div>
                  </div>
<<<<<<< HEAD
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
>>>>>>>                         <h4 className="font-medium text-white">Enterprise Security</h4>
ursor/fix-website-loading-errors-and-merge-6662
=======


              <div className="mt-8 bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-zion-slate-light whitespace-pre-line">{listing.description}</p>
                



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        <h4 className="font-medium text-white">Enterprise Security</h4>
>>>>>>>                         <p className="text-sm text-zion-slate-light">Built-in data protection and encryption</p>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
=======
=======

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

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      </div>;
                    </div>;
                  </div>;
                </div>;


>>>>>>>                 {/* Tags */}
                <div className='mt-8'>;
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>;
                  <div className='flex flex-wrap gap-2'>;
                    {listing && listing.tags.map((tag, i) => (;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {/* Tags */}
                <div className='mt-8'>
                  <h3 className='text-xl font-bold text-white mb-4'>Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {listing.tags.map((tag, i) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <Badge
                        key={i}
                        variant='outline'
                        className='border-zion-slate-dark text-zion-slate-light py-1 px-3'
                      >                        {tag}                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                {/* Tags */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                <div className="mt-8">;
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>;
                  <div className="flex flex-wrap gap-2">;
                    {listing && listing.tags.map((tag, i) => (;
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">;



                
                {/* Tags */}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
                    <Badge className='ml-2 bg-zion-cyan/20 text-zion-cyan'>                      Featured
                    </Badge>
                  )}
                </div>            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {/* Tags */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {listing.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-zion-slate-dark text-zion-slate-light py-1 px-3">
                        {tag}
<<<<<<< HEAD
                      </Badge>
                    ))}
<<<<<<< HEAD
                  </div>
                </div>
              </div>
            </div>
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
                    <Badge className='ml-2 bg-zion-cyan/20 text-zion-cyan'>                      Featured
                    </Badge>
                  )}
                </div>            {/* Right Column - Details */}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                      </Badge>))}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD

                </div>;

                <h1 className='text-2xl font-bold text-white mb-4'>;
                  {listing && listing.title}
                </h1>;

                  <div className='flex items-center gap-2 mb-6'>;
                    <div className='flex items-center'>;
                      {[...Array(5)].map((_, i) => (;
            
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

>>>>>>>             <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-lg p-6 border border-zion-blue-light sticky top-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30">
                    {listing.category}
                  </Badge>
                  {listing.featured && (
>>>>>>>                     <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    {listing.category}
                  </Badge>
                  {listing.featured && (
                    <Badge className="ml-2 bg-zion-cyan/20 text-zion-cyan">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      Featured
                    </Badge>
                  )}
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <h1 className='text-2xl font-bold text-white mb-4'>
                  {listing.title}
                </h1>
                  <div className='flex items-center gap-2 mb-6'>
                    <div className='flex items-center'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                       {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-5 w-5'
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                
                <h1 className="text-2xl font-bold text-white mb-4">{listing.title}</h1>
                
                {listing.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
                            i < Math.floor(listing.rating!)
=======

                            'h-5 w-5',

>>>>>>>                             i < Math.floor(listing.rating!)

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                            'h-5 w-5'
                            'h-5 w-5',
                            i < Math.floor(listing.rating!)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

                            "h-5 w-5",
                            i < Math && Math.floor(listing && listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"

<<<<<<< HEAD
=======
                            "h-5 w-5"
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          ),}
                        />
                      ))}
                    </div>
                    <span className='text-sm text-zion-slate-light'>
                      {listing.rating.toFixed(1)} ({listing.reviewCount}{' '}
                      reviews)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
                          ),}
                        />;
                      ))}
                    </div>;
                    <span className='text-sm text-zion-slate-light'>;
                      {listing && listing.rating.toFixed(1)} ({listing && listing.reviewCount}{' '}
                      reviews);
                    </span>;
                  </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                            "h-5 w-5",
                            i < Math.floor(listing.rating!) ? "text-zion-cyan fill-zion-cyan" : "text-zion-slate-light"
                          )}
                        />;
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>                     </span>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </span>
>>>>>>>                   </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======



                    </span>
                  </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                )}
                {/* Price */}
<<<<<<< HEAD

                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}

                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
                    <PaymentButton

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    </span>
                  </div>
                )}
                {/* Price */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className='mb-6'>
                  {listing.price !== null ? (
                    <div className='text-3xl font-bold text-white'>
                      {formatPrice(listing.price)}
<<<<<<< HEAD
                    </div>
                  ) : (
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                    </div>
                  )}
                </div>
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <div className="mb-6">
                  {listing.price !== null ? (
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(listing.price)}
                    </div>
                  ) : (
>>>>>>>                     <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>
>>>>>>>                 {/* Action Buttons */}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
=======
>>>>>>>                       amount={listing.price}
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
                    <div className="text-2xl font-bold text-white">
                      Custom Pricing
                    </div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  )}

                </div>;



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>                ;
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">;
                  {listing && listing.price !== null ? (;
                    <PaymentButton

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      amount={listing.price}
                      serviceId={listing.id}
                      providerId={listing.author.id}

                      amount={listing.price}
>>>>>>>                       serviceId={listing.id}
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
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                    Contact Publisher
                  </Button>
                </div>
>>>>>>>                 {/* Publisher Info */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {/* Publisher Info */}
>>>>>>>                 <div className="border-t border-zion-blue-light pt-6">
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>                             target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
>>>>>>>                           }}
                        />
                      </div>
                    ) : (
<<<<<<< HEAD

=======
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>
                  ) : (
                    <div className='text-2xl font-bold text-white'>                      Custom Pricing
                    </div>
                  )}
                </div>
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
                {/* Action Buttons */}
                <div className='space-y-3 mb-8'>
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </div>;
                {/* Action Buttons */}
                <div className="space-y-3 mb-8">
                  {listing.price !== null ? (
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
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

<<<<<<< HEAD
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement,
=======


                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement,



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                            target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
                          }}
                        />
                      </div>
                    ) : (
                      <div className='h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'>
                        <span className='text-lg font-medium text-zion-purple'>
                          {listing.author.name.charAt(0)}
                        </span>
                      </div>
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Additional Info */}
                <div className='border-t border-zion-blue-light mt-6 pt-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>Listed on</span>
                    <span className='text-white'>
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-zion-slate-light'>ID</span>
                    <span className='text-white'>{listing.id}</span>                  </div>                      </div>
<<<<<<< HEAD
                    )}
                    <div>
>>>>>>>                       <p className="font-medium text-white">{listing.author.name}</p>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    )}

                    <div>


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                    )}
                    <div>
                      <div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <span className="text-lg font-medium text-zion-purple">{listing.author.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      <p className="font-medium text-white">{listing.author.name}</p>
>>>>>>>                       <p className="text-xs text-zion-slate-light">Member since 2022</p>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>                 {/* Additional Info */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {/* Additional Info */}

>>>>>>>                 <div className="border-t border-zion-blue-light mt-6 pt-6">
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
      <ChatWidget
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        roomId = {listing.id,}
        recipientId = {listing.author.id,}
        isOpen = {isChatOpen,}
        onClose = {() => setIsChatOpen(false),}
      />
<<<<<<< HEAD
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className='bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md'>
>>>>>>>           <DialogHeader>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <DialogHeader>
>>>>>>>             <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
                  <div className="flex justify-between mb-2">;
                    <span className="text-zion-slate-light">ID</span>;
                    <span className="text-white">{listing.id}</span>;
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======

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

            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <ChatWidget;
        roomId={listing.id}
        recipientId={listing.author.id}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />;
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </DialogHeader>
          <ProfileContact 
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            profileType='service'          />            profileType="service"
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>
          </DialogHeader>
          <ProfileContact
            email={listing.author.email} // TypeScript now knows this might be undefined
            profileName={listing.author.name}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             profileType="service"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            profileType="service"
>>>>>>>           />
        </DialogContent>
      </Dialog>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
  )
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
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
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
