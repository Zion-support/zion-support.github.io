<<<<<<< HEAD
<<<<<<< HEAD
import { Gift } from 'lucide-react';
=======
import { Gift } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Gift } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const REWARDS = [
  { id: 'coupon5', title: '$5 Coupon', cost: 500 },
  { id: 'premium-week', title: 'Premium Week', cost: 1000 },
<<<<<<< HEAD
<<<<<<< HEAD
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 },
];

=======
  { id: 'swag-pack', title: 'Swag Pack', cost: 2000 }],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
            <Gift className='h-5 w-5' />
=======

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Gift className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </li>
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
