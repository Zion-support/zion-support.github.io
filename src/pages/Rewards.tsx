
const _REWARDS = [
  {_id: 'coupon5', _title: '$5 Coupon', _cost: 500},
  {_id: 'premium-week', _title: 'Premium Week', _cost: 1000},
  {_id: 'swag-pack', _title: 'Swag Pack', _cost: 2000}];

export default function RewardsPage() {_return (_<div className="container max-w-xl py-10">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
      <ul className="space-y-4">
        {REWARDS.map((r) => (
          <li key={r.id} className="flex justify-between items-center border rounded-md p-4">
            <div>
              <p className="font-medium">{_r.title}</p>
              <p className="text-sm text-muted-foreground">{_r.cost} pts</p>
            </div>
            <Gift className="h-5 w-5" />
          </li>
        ))}
      </ul>
    </div>
  );
}
