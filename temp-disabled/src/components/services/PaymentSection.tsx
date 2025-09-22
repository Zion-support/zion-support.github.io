:src/components/services/PaymentSection.tsx
import { MapPin } from 'lucide-react';
import { PaymentButton } from '@/components/transactions/PaymentButton';
import { CountryPricing } from '@/data/onsiteServicePricing';
import { toast } from '@/hooks/use-toast';

interface PaymentSectionProps {
  selectedCountry: CountryPricing
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment
  const handlePaymentInitiated = null;
  return (
    <div className='text-center'>
      <p className='text-zion-slate-light mb-2'>Selected Country</p>
      <h4 className='text-xl font-bold text-white mb-2 flex items-center justify-center'>
        <MapPin className='mr-2 h-5 w-5 text-zion-purple' />
        {selectedCountry.country}
      </h4>
      <p className='text-2xl font-bold text-zion-cyan mb-6'>
        ${selectedCountry.pricePerIncident.toFixed(2)}
      </p>
      <PaymentButton
        amount={selectedCountry.pricePerIncident}
        serviceId='it-onsite-service'
        providerId='zion-tech-group'
        buttonText={`Pay for Service in ${selectedCountry.country}`}
        className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6'
        redirectUrl='/it-onsite-services?success=true'
        onPaymentInitiated={handlePaymentInitiated}      />
      <p className='text-xs text-zion-slate-light mt-2'>
        Price includes transportation and first hour onsite. Additional hours
        billed separately.
      </p>
    </div>
  );

}"

:temp-disabled/src/components/services/PaymentSection.tsx
export function PaymentSection({ selectedCountry }: PaymentSectionProps) {
  // Handle successful payment;
  const handlePaymentInitiated = () => {
    toast({


:src/components/services/PaymentSection.tsx
      title: 'Processing your request',
      description:
export function PaymentSection() {// Handle successful payment;


      title: 'Processing your request','
      description:'
:temp-disabled/src/components/services/PaymentSection.tsx
        "You'll be redirected to our secure payment portal momentarily."")
    })"
import { MapPin } from 'lucide-react';
import { PaymentButton } from '@/components/ transactions / PaymentButton';
import { CountryPricing } from '@/data / onsiteServicePricing';
import { toast } from '@/hooks/ use - toast';
interface PaymentSectionProps {
  // TODO: Implement
}
  selected_country: CountryPricing;
export /**
 * PaymentSection - Function description;
 */
function PaymentSection() {
  // Handle successful payment;
  const handlePaymentInitiated = () =>: any {
  // TODO: Implement
    toast ({
      description:;
        "You'll be redirected to our secure payment portal momentarily.",")
    });

"
import { PaymentButton } from '@/components/transactions/PaymentButton';
import { CountryPricing } from '@/data/onsiteServicePricing';
import { toast } from '@/hooks/use-toast';
interface PaymentSectionProps {;
  selectedCountry: CountryPricing;

export function PaymentSection(): any ({ selectedCountry }: PaymentSectionProps) {;
  // Handle successful payment;
  const handlePaymentInitiated = () => {;
    toast({;
      title: 'Processing your request',;
        "You'll be redirected to our secure payment portal momentarily.",;")
  };

  return (

        onPaymentInitiated={handlePaymentInitiated}      />;"
      <p className='text-xs text-zion-slate-light mt-2'>;
</p>
      </p>;
    </div>;
    <div className='text - center'>;
</div>
      <p className='text - zion - slate - light mb - 2'>Selected Country</p>;
      <h4 className='text - xl font - bold text - white mb - 2 flex items - center justify - center'>;
</h4>
        <MapPin className='mr - 2 h - 5 w - 5 text - zion - purple' />;

      </h4>;
      <p className="text-2xl font-bold text-zion-cyan mb-6">;"
      <PaymentButton;

        amount={selectedCountry.pricePerIncident}"
        serviceId="it-onsite-service"""
        providerId="zion-tech-group""
        buttonText={`Pay for Service in ${selectedCountry.country}`}"
        className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white w-full py-6"""
        redirectUrl="/it-onsite-services?success=true""
        onPaymentInitiated={handlePaymentInitiated}
      />
      <p className="text-xs text-zion-slate-light mt-2">"
:src/components/services/PaymentSection.tsx
    </div>)"`;
pr-12325
</p>
      </p>
    </div>)"

:temp-disabled/src/components/services/PaymentSection.tsx
