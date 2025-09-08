
;
import { useState } from 'react',import { Button } from '@/components/ui/button',import { Input } from '@/components/ui/input',import { Label } from '@/components/ui/label',import { Textarea } from '@/components/ui/textarea',try {on_submit ({ email, address })} finally {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { 'hasError': false }static getDerivedStateFromError(error) {return { 'hasError': true }componentDidCatch(error, errorInfo) {console.error('Error caught by 'boundary':', error, errorInfo)}render() {if (this.state.hasError) {return <div>Something went wrong.</div>;'
    }return this.props.children;
  }
}
import React from 'react';'
import { useState  } from 'react';'
import { Button  } from '@/components/ui/button';'
import { Input  } from '@/components/ui/input';'
import { Label  } from '@/components/ui/label';'
import { Textarea  } from '@/components/ui/textarea';'
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle} from '@/components/ui/dialog';'
import { User, Mail, MapPin, CreditCard  } from 'lucide-react';'
import { isProdDomain  } from '@/utils/getStripe';'
interface GuestCheckoutModalProps  {import { useState   } from 'react';'
import { Button   } from '@/components/ui/button';'
import { Input   } from '@/components/ui/input';'
import { Label   } from '@/components/ui/label';'
import { Dialog;
  }
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle  } from '@/components/ui/dialog';'
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
 } from '@/components/ui/dialog';'
interface GuestCheckoutModalProps  {'open': boolean;
  }
  'onOpenChange': ('open': boolean) => void;
  'onSubmit': ('details': { 'email': string; 'address': string }) => void;
export default function GuestCheckoutModal(): any ({open,onOpenChange,onSubmit}: GuestCheckoutModalProps) {const [email, setEmail] = useState('')const [address, setAddress] = useState('')const [isSubmitting, setIsSubmitting]  = useState(false)const handleSubmit = async ('e': React && React.FormEvent) => {e && e.preventDefault()if (!email || !address) {alert('Please fill in all required fields')return;'
    }setIsSubmitting(true)try {onSubmit({ email, address })} finally {setIsSubmitting(false)}
  }
  },const handleSubmit  = null;return (<Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className='bg-zion-blue border-zion-cyan/20 max-w-md'>;'
        <DialogHeader>;
          <DialogTitle className='text-white flex items-center gap-2'>;'
            <User className='h-5 w-5 text-zion-cyan' />;'
            Guest Checkout;
          </DialogTitle>;
          <DialogDescription className='text-zion-slate-light'>;'
            Enter your details to complete your purchase as a guest.;
          </DialogDescription>;
        </DialogHeader>;
        {!isProdDomain() && (<div className='rounded-md bg-amber-500/20 p-2 text-center text-amber-400'>;'
            }
            Pay with test data – use card 4242 4242 4242 4242 and any future date.;
          </div>;
        )}<Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className='bg-zion-blue border-zion-cyan/20 max-w-md'>;'
        <DialogHeader>;
          <DialogTitle className='text-white flex items-center gap-2'>;'
            <User className='h-5 w-5 text-zion-cyan' />;'
            Guest Checkout;
          </DialogTitle>;
          <DialogDescription className='text-zion-slate-light'>;'
            Enter your details to complete your purchase as a guest.;
          </DialogDescription>;
        </DialogHeader>;{!isProdDomain() && (<div className='rounded-md bg-amber-500/20 p-2 text-center text-amber-400'>;'
            }
            Pay with test data – use card 4242 4242 4242 4242 and any future;
            date.;
          </div>;
        )}<form onSubmit={handleSubmit} className='space-y-4'>;'
          <div className='space-y-2'>;<Label;'
              htmlFor='guest-email';'
              className='text-white flex items-center gap-2'>;'
              <Mail className='h-4 w-4 text-zion-cyan' />;'
              Email Address;
            </Label>;
            <Input;
              id='guest-email';'
              type='email';'
              value={email || ''}'
              onChange={(e) => setEmail(e.target.value || '')}'
              placeholder='your.email@example.com';'
              required;
              className='bg-zion-blue-light border-zion-cyan/30 text-white 'placeholder':text-zion-slate-light';'
            />;
          </div>;
          <div className='space-y-2'>;'
            <Label htmlFor='guest-address' className='text-white flex items-center gap-2'>;'
              <MapPin className='h-4 w-4 text-zion-cyan' />;'
              Shipping Address;
            </Label>;
            />;
          </div>;
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>;'
            <p className='text-yellow-400 text-sm'>;'
              💡 Creating an account allows you to track your order and checkout faster next time.;
            </p>;
          </div>;
          <DialogFooter className='space-x-2'>;'
            <Button;
              type='button';'
              variant='outline';'
              onClick={() => onOpenChange(false)}
              className='border-zion-cyan/30 text-zion-slate-light 'hover':bg-zion-cyan/10';'
            >;
              Cancel;
            </Button>;
            <Button;
              type='submit';'
              disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan 'hover':bg-zion-cyan/90 text-zion-blue';'
            >;
              value={email || ''}'
              onChange={e => { return setEmail(e && e.target.value || '')}'
              placeholder='your && your.email@example && example.com'              required; }'
              className='bg-zion-blue-light border-zion-cyan/30 text-white 'placeholder':text-zion-slate-light';'
            />;
          </div>;<div className='space-y-2'>;<Label;'
              htmlFor='guest-address';'
              className='text-white flex items-center gap-2'>;'
              <MapPin className='h-4 w-4 text-zion-cyan' />;'
              Shipping Address;
            </Label>;
            <Textarea;
              id='guest-address';'
              value={address || ''}'
              onChange={e => { return setAddress(e && e.target.value || '')}'
              placeholder='Enter your full shipping address...'              required; }'
              className='bg-zion-blue-light border-zion-cyan/30 text-white 'placeholder':text-zion-slate-light min-h-[80px]';'
            />;
          </div>;<div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3'>;'
            <p className='text-yellow-400 text-sm'>;'
    <Dialog open={open} onOpenChange={onOpenChange}>;
      <DialogContent className='bg - zion - blue border - zion - cyan / 20 max - w-md'>;'
        <DialogHeader>;
          <DialogTitle className='text - white flex items - center gap - 2'>;'
            <User className='h - 5 w - 5 text - zion - cyan' />;'
            Guest Checkout;
          </DialogTitle>;
          <DialogDescription className='text - zion - slate - light'>;'
            Enter your details to complete your purchase as a guest.;
          </DialogDescription>;
        </DialogHeader>;
        {!isProdDomain () && (<div className='rounded - md bg - amber - 500 / 20 p - 2 text - center text - amber - 400'>;'
            }
            Pay with test data – use card 4242 4242 4242 4242 and any future;
            date.;
          </div>)}
        <form on_submit={handle_submit} className='space - y-4'>;'
          <div className='space - y-2'>;'
            <Label;
              html_for='guest - email';'
              className='text - white flex items - center gap - 2';'
            >;
              <Mail className='h - 4 w - 4 text - zion - cyan' />;'
              Email Address;
            </Label>;
            <Input;
              id='guest - email';'
              type='email';'
              value={email || ''}'
              on_change={e => { return set_email (e.target.value || '')}'
              placeholder='your.email@example.com'              required; }'
              className='bg - zion - blue - light border - zion - cyan / 30 text - white 'placeholder':text - zion - slate - light';'
            />;
          </div>;
          <div className='space - y-2'>;'
            <Label;
              html_for='guest - address';'
              className='text - white flex items - center gap - 2';'
            >;
              <MapPin className='h - 4 w - 4 text - zion - cyan' />;'
              Shipping Address;
            </Label>;
            <Textarea;
              id='guest - address';'
              value={address || ''}'
              on_change={e => { return set_address (e.target.value || '')}'
              placeholder='Enter your full shipping address...'              required; }'
              className='bg - zion - blue - light border - zion - cyan / 30 text - white 'placeholder':text - zion - slate - light min - h-[80px]';'
            />;
          </div>;
          <div className='bg - yellow - 500 / 10 border border - yellow - 500 / 30 rounded - lg p - 3'>;'
            <p className='text - yellow - 400 text - sm'>;💡 Creating an account allows you to track your order and checkout;'
              faster next time.;
            </p>;
          </div>;<form onSubmit={handleSubmit} className='space-y-4'>;'
          <div className='space-y-2'>;'
            <Label htmlFor='guest-email' className='text-white flex items-center gap-2'>;'
              <Mail className='h-4 w-4 text-zion-cyan' />;'
              Email Address;
            </Label>;
            <Input;
              {isSubmitting ? ('Processing...';'
              ) : (<>;
                  <CreditCard className='h-4 w-4 mr-2' />;'
                  }
                  Continue to Payment;
                </>;
              )}disabled={isSubmitting || !email || !address}
              className='bg-zion-cyan 'hover':bg-zion-cyan/90 text-zion-blue'>;'
              {isSubmitting ? ('Processing...';'
              ) : (<>;
                  <CreditCard className='h-4 w-4 mr-2' />;'
                  }
                  Continue to Payment;
                </>;
              )}}<DialogFooter className='space - x-2'>;'
            <Button;
              type='button';'
              variant='outline';'
              on_click={() => onOpenChange (false)}
              className='border - zion - cyan / 30 text - zion - slate - light 'hover':bg - zion - cyan / 10'            >;'
              Cancel;
            </Button>;
            <Button;
              type='submit';'
              disabled={is_submitting || !email || !address}
              className='bg - zion - cyan 'hover':bg - zion - cyan / 90 text - zion - blue'            >;'
              {is_submitting ? ('Processing...') : (<>;'
                  <CreditCard className='h - 4 w - 4 mr - 2' />;'
                  }
                  Continue to Payment;
                </>)}</Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;</Dialog>;
  )}</Dialog>)}
}</Button>;
          </DialogFooter>;
        </form>;
      </DialogContent>;
    </Dialog>;
  )