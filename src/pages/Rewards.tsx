<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Gift } from 'lucide-react'

const REWARDS = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

            key={r && r.id}
            className='flex justify-between items-center border rounded-md p-4'>            <div>;
              <p className='font-medium'>{r && r.title}</p>;
              <p className='text-sm text-muted-foreground'>{r && r.cost} pts</p>;
            </div>;
            <Gift className='h-5 w-5' />          </li>            <Gift className="h-5 w-5" />;
          </li>;

import { Gift } from 'lucide-react'

const REWARDS = [
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],

export default function RewardsPage() {
=======

const REWARDS = null;
export default function RewardsPage() {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
            <Gift className="h-5 w-5" />
=======
            <Gift className='h-5 w-5' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          </li>
<<<<<<< HEAD
        ))}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </ul>;
    </div>;
  );
}
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
import { Gift } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";

const Rewards: React.FC = () => {
  return (
    <MainLayout title="Rewards - Zion Tech Group" description="Earn rewards for your loyalty and engagement.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Rewards</h1>
        <p className="text-lg">This is the Rewards page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default Rewards;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      </ul>
    </div>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
