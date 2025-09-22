
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'
origin/cursor/automate-test-improve-and-merge-code-2533
interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { ReferralReward  } from '@/types / referrals';
import { format_date  } from '@/utils / referral_utils';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
interface RewardsCardProps {

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals",
import { formatDate } from "@/utils/referralUtils",
import { BadgeDollarSign, Badge } from 'lucide-react'
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { ReferralReward } from '@/types/referrals';
import { formatDate } from '@/utils/referralUtils';
import { BadgeDollarSign, Badge } from 'lucide-react';

interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReferralReward } from "@/types/referrals"
import { formatDate } from "@/utils/referralUtils"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface RewardsCardProps {
:src/components/referrals/RewardsCard.tsx
rewards: ReferralReward[],
  isLoading: boolean
}

export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {
  if (isLoading) {
    return (
:src/components/referrals/RewardsCard.tsx
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </CardContent>
      </Card>
    )
}

  if (rewards.length === 0) {
    return (
      <Card>
        <CardHeader>
<CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5" />

      <Card>
        <CardHeader>
<CardTitle className='flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5' />
            Your Rewards
          </CardTitle>

          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>

          <div className="flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">No rewards yet</p>
            <p className="text-sm text-muted-foreground mt-1">
          <div className='flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground'>No rewards yet</p>
            <p className='text-sm text-muted-foreground mt-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>
:src/components/referrals/RewardsCard.tsx


    )

);
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  return (
    <Card>
      <CardHeader>
:src/components/referrals/RewardsCard.tsx
        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />

        <CardTitle className="flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />

          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>
<div className="space-y-4">
          {rewards.map((reward, index) => (
            <div 
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? "border-b pb-3" : ""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { ReferralReward } from "@/types/referrals",;
import { formatDate } from "@/utils/referralUtils",;
import { BadgeDollarSign, Badge } from 'lucide-react';
interface RewardsCardProps {;
  rewards: ReferralReward[];
  isLoading: boolean;
}
;
export function RewardsCard({ rewards, isLoading }: RewardsCardProps) {;
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;
<CardTitle className="flex items-center gap-2">;
            <BadgeDollarSign className="h-5 w-5" />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex items-center justify-center p-4">;
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
:src/components/referrals/RewardsCard.tsx

if (rewards && rewards.length === 0) {;
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className='flex items-center gap-2'>;
            <BadgeDollarSign className='h-5 w-5' />;
            Your Rewards;
          </CardTitle>;
          <CardDescription>;
            Rewards earned from successful referrals;
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className='flex flex-col items-center justify-center p-4 text-center'>;
            <p className='text-muted-foreground'>No rewards yet</p>;
            <p className='text-sm text-muted-foreground mt-1'>              Refer users to earn rewards once they complete onboarding            Your Rewards;          </CardTitle>;
          </CardTitle>;
          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex flex-col items-center justify-center p-4 text-center">;
            <p className="text-muted-foreground">No rewards yet</p>;
            <p className="text-sm text-muted-foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }
;
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2">;
          <BadgeDollarSign className="h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${;
                index !== rewards.length - 1 ? "border-b pb-3" : "";
              }`}
            >;
              <div>;
                <div className='flex items-center gap-2'>;
                  {reward && reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className='h-4 w-4 text-green-600' />;
                  ) : (;
                    <Badge className='h-4 w-4 text-blue-600' />;
                  )}
                  <p className='font-medium'>                    {reward && reward.reward_type === 'credit'                  <p className="font-medium">;
                    {reward && reward.reward_type === 'credit';
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
                      : 'Visibility Boost'}
                  </p>;
                </div>;
<p className="text-xs text-muted-foreground mt-1">;
                  Earned on {formatDate(reward.created_at)}
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;
                </p>;
                {reward.expires_at && (;
                  <p className="text-xs text-muted-foreground">;

<p className='text-xs text-muted-foreground mt-1'>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (
                  <p className='text-xs text-muted-foreground'>
:src/components/referrals/RewardsCard.tsx
                    Expires on {formatDate(reward.expires_at)}
</p>;
                  </p>

                )}
              </div>;
            </div>;
          ))}
:src/components/referrals/RewardsCard.tsx
</div>;
      </CardContent>;
    </Card>;
  );
}

;
        </div>
      </CardContent>
    </Card>
  );
}
:src/components/referrals/RewardsCard.tsx
