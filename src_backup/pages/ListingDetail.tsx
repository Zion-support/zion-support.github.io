import { useState } from 'react',
import { useAuth } from '@/hooks/useAuth',
import { ChatWidget } from '@/components/ChatWidget',
import { useRouter } from 'next/router',
import { Badge } from '@/components/ui/badge',
import { Button } from '@/components/ui/button',
import Skeleton from '@/components/ui/skeleton',
import ImageWithRetry from '@/components/ui/ImageWithRetry',
import { Star, MessageSquare, Brain, Shield } from 'lucide-react'
import { cn } from '@/lib/utils',
import Link from 'next/link',
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',
import { toast } from '@/hooks/use-toast',
import { PaymentButton } from '@/components/transactions/PaymentButton',
import { ProfileContact } from '@/components/profile/ProfileContact',
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
                    <div className='w-full h-full flex items-center justify-center bg-zion-blue-light/20'>
                      <span className='text-zion-slate-light'>No image available</span>
                  <div className='flex p-4 gap-2 overflow-x-auto'>
                          'w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2'
                          index === selectedImageIndex ? 'border-zion-purple' : 'border-transparent'
                            'h-5 w-5',
                            i < Math.floor(listing.rating!) ? 'text-zion-cyan fill-zion-cyan' : 'text-zion-slate-light'
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      onPaymentInitiated={() => {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...'
                        })
                <div className='space-y-3 mb-8'>;
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                <div className='space-y-3 mb-8'>
                  {listing.price !== null ? (
                    <PaymentButton
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      onPaymentInitiated={() => {
                        toast({
                          title: 'Payment Processing',
                          description: 'Redirecting to secure checkout...'
                        })
                <div className='space-y-3 mb-8'>;
                      buttonText='Buy Now'
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                      }
                      className='w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-6'
                    >
                      {isLoading ? 'Processing...' : 'Request Quote'}
                    variant='outline' 
                    onClick={handleContact}
                    disabled={isLoading}
                    className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  >
                    <MessageSquare className='h-4 w-4 mr-2' />
                <div className='border-t border-zion-blue-light pt-6'>
                  <h3 className='text-lg font-bold text-white mb-3'>Publisher</h3>
                  <div className='flex items-center gap-3'>
                    {listing.author.avatarUrl ? (
                      <div className='relative h-12 w-12 rounded-full overflow-hidden'>
                            target.src = 'https: //ui-avatars.com/api/?name=' + encodeURIComponent(listing.author.name)
                          }
                <div className='border-t border-zion-blue-light mt-6 pt-6'>;
                  <div className='flex justify-between mb-2'>;
                    <span className='text-zion-slate-light'>Listed on</span>;
                    <span className='text-white'>{new Date(listing && listing.createdAt).toLocaleDateString()}</span>;
                  </div>;
                  <div className='flex justify-between mb-2'>;
                    <span className='text-zion-slate-light'>ID</span>;
                    <span className='text-white'>{listing && listing.id}</span>;
                      button_text='Buy Now';
                      className='w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white py - 6';
                      }
                              encodeURIComponent (listing.author.name);                          }
                        />;
                      </div>) : (                            target.src = 'https: //ui - avatars.com / api/?name=' + encodeURIComponent (listing.author.name);
                            target.src = 'https: //ui - avatars.com / api/?name=' + encodeURIComponent (listing.author.name);
                          }
                      <p className='font - medium text - white'>{listing.author.name}</p>;
                      <p className='text - xs text - zion - slate - light'>Member since 2022</p>;
                <div className='border - t border - zion - blue - light mt - 6 pt - 6'>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>Listed on</span>;
                    <span className='text - white'>{new Date (listing.created_at).toLocaleDateString ()}</span>;
                  </div>;
                  <div className='flex justify - between mb - 2'>;
                    <span className='text - zion - slate - light'>ID</span>;
                    <span className='text - white'>{listing.id}</span>;
}/>) : (<Button </Button>) ';
}<Button > <MessageSquare className=' h-4 w-4 mr-2'/> Contact Publisher </Button> </div> ;
}';
}/> </div>) : (<div className=' h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center'> <span className=' text-lg font-medium text-zion-purple'> {listing.author.name.charAt (0) ;
}</span> </div>) ';
}<div> <p className=' font-medium text-white'> {listing.author.name ';
}</p> <p className=' text-xs text-zion-slate-light'>Member since 2022</p> listing.id ;
}recipientId= {listing.author.id ;
}isOpen= {isChatOpen ;
}onClose= {() => setIsChatOpen (false) ';
}/> <DialogHeader> <DialogTitle className=' text-xl font-bold text-white' >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </>) ;
}''
