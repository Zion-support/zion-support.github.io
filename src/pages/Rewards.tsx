


  return (
    <div className='container max-w-xl py-10'>;
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>;
      <ul className='space-y-4'>;
        {REWARDS && REWARDS.map(r => (;
          <li
            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;

=======
import { Gift } from 'lucide-react'

const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },

  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }];

export default function RewardsPage() {
  return (
    <div className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
      <ul className="space-y-4">
        {REWARDS.map((r) => (
          <li key={r.id} className="flex justify-between items-center border rounded-md p-4">
            <div>
              <p className="font-medium">{r.title}</p>
              <p className="text-sm text-muted-foreground">{r.cost} pts</p>
            </div>
            <Gift className="h-5 w-5" />
          </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        ))}

      </ul>;
    </div>;
  );
}

=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import { Gift } from 'lucide-react';
const REWARDS = [;
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },
];
const REWARDS = [;
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium - week', title: 'Premium Week', cost: 1000 },
  { id: 'swag - pack', title: 'Swag Pack', cost: 2000 },
];
  return (
    <div className='container max - w-xl py - 10'>;
      <h1 className='text - 3xl font - bold mb - 6'>Rewards</h1>;
      <ul className='space - y-4'>;
        {REWARDS.map (r => (
          <li;
            key={r.id}
            className='flex justify - between items - center border rounded - md p - 4';
          >            <div>;
              <p className='font - medium'>{r.title}</p>;
              <p className='text - sm text - muted - foreground'>{r.cost} pts</p>;
            </div>;
            <Gift className='h - 5 w - 5' />          </li>            <Gift className="h - 5 w - 5" />;
          </li>))}
      </ul>;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import { Gift } from 'lucide-react'


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
