:src/components/services/PaymentSection.tsx
import { MapPin } from 'lucide-react'
import { PaymentButton } from "@/components/transactions/PaymentButton",
import { CountryPricing } from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
interface PaymentSectionProps {
  selectedCountry: CountryPricing
:src/components/services/PaymentSection.tsx
      title: 'Processing your request'
      description:
        "You'll be redirected to our secure payment portal momentarily."
    })
  }

:src/components/services/PaymentSection.tsx
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
  )
}"}
;
