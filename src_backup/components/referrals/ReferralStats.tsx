import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { ReferralStats as ReferralStatsType } from '@/types/referrals',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralStats as ReferralStatsType } from '@/types/referrals';
      description: 'People you've invited',;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>;
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>;
      {statCards && statCards.map((card, i) => (;
        <Card key={i}>;
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>;
            <CardTitle className='text-sm font-medium'>{card && card.title}</CardTitle>;
                </p>              </>              <div className='h-6 w-20 bg-muted animate-pulse rounded' />;
            ) : (;
              <>;
                <div className='text-2xl font-bold'>{card && card.value}</div>;
                <p className='text-xs text-muted-foreground'>{card && card.description}</p>;
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
