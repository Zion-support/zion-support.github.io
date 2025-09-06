<<<<<<< HEAD
return (
    <div className='container max-w-xl py-10'>;
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>;
      <ul className='space-y-4'>;
        {REWARDS && REWARDS.map(r => (;
<<<<<<< HEAD
          <li
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;

import { Gift } from 'lucide-react'
<<<<<<< HEAD
=======
          <li
            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;

import { Gift } from 'lucide-react'

  )
}
const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]
const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]

  return (
    <div className='container max-w-xl py-10'>
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>
      <ul className='space-y-4'>
        {REWARDS.map(r => (
          <li
            key={r.id}
            className='flex justify-between items-center border rounded-md p-4'
          >            <div>
              <p className='font-medium'>{r.title}</p>
              <p className='text-sm text-muted-foreground'>{r.cost} pts</p>
            </div>
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

        ))}

=======
        ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </ul>;
    </div>;
  );
}
<<<<<<< HEAD

=======
;
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  );
}
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
<<<<<<< HEAD
<<<<<<< HEAD
import { Gift } from 'lucide-react'
=======
import { Gift } from 'lucide-react'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
