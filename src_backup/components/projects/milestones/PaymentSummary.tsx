import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {}
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), ;
    0;
  ).toFixed(2),
  
  const paidAmount = milestones'
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()), 
      0;
    ).toFixed(2),

    .filter(m => m && m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m && m.amount.toString());      0;
    ).toFixed(2);

  return (

              ${totalPayment}

            </p>
          </div>

<<<<<<< HEAD
            <p className='font-medium'>
=======
            <p className="font-medium">
>>>>>>> origin/resolved-merge-conflicts
              ${paidAmount}

            </p>;
          </div>;
        </div>;
      </CardContent>;