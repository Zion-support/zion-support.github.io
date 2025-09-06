<<<<<<< HEAD
return (
    <div className='container max-w-xl py-10'>;
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>;
      <ul className='space-y-4'>;
        {REWARDS && REWARDS.map(r => (;
          <li
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { Gift } from 'lucide-react'
const REWARDS = [
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],

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
        ))}
      </ul>;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

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
import { Gift } from 'lucide-react'
=======
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
