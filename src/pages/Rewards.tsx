import { Gift } from 'lucide-react'
<<<<<<< HEAD

const REWARDS = [
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const REWARDS = [
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]
const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 }
  { id: 'premium-week', title: 'Premium Week', cost: 1000 }
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }
]
<<<<<<< HEAD
import { Gift } from 'lucide-react';
const REWARDS = [;
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },;
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },;
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 },;
];

const REWARDS = [;
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },;
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },;
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 },;
];
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  return (
    <div className='container max-w-xl py-10'>;
      <h1 className='text-3xl font-bold mb-6'>Rewards</h1>;
      <ul className='space-y-4'>;
        {REWARDS && REWARDS.map(r => (;
          <li
<<<<<<< HEAD
            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;
=======
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
<<<<<<< HEAD
  )
}
=======
=======
  );
};
=======
import { Gift } from 'lucide-react'

const REWARDS = [
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        ))}
      </ul>
    </div>
  )
}
  );
}
<<<<<<< HEAD
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
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
