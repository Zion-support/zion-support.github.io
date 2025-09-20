import { Gift } from "lucide-react";
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