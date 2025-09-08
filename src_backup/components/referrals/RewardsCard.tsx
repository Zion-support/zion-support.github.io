

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReferralReward } from "@/types/referrals";
import { formatDate } from "@/utils/referralUtils";
import { BadgeDollarSign, Badge } from 'lucide-react'


origin/cursor/automate-test-improve-and-merge-code-2533
interface RewardsCardProps {
  rewards: ReferralReward[];
  is_loading: boolean;


interface RewardsCardProps {

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle} from '@/components/ui/card;
import { ReferralReward } from @/types/referrals';
import { formatDate } from '@/utils/referralUtils;
import { BadgeDollarSign, Badge } from lucide-react';

interface RewardsCardProps {
  rewards: ReferralReward[];
  isLoading: boolean;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from @/components/ui/card"
import { ReferralReward } from "@/types/referrals
import { formatDate } from @/utils/referralUtils"
import { Badge } from '@/components/ui/badge
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from @/components/ui/card'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card;
import { BadgeDollarSign, Badge } from 'lucide-react;
import { Badge } from @/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card;

interface RewardsCardProps {



  isLoading: boolean
}

    return (



          <CardTitle className=flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 />

          <CardTitle className=flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 />

            Your Rewards
          </CardTitle>
          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className=flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent />
          </div>
        </CardContent>
      </Card>

    )




      <Card>
        <CardHeader>
<CardTitle className=flex items-center gap-2'>
            <BadgeDollarSign className='h-5 w-5 />

            Your Rewards
          </CardTitle>

          <CardDescription>Rewards earned from successful referrals</CardDescription>
        </CardHeader>
        <CardContent>

          <div className=flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground>No rewards yet</p>
            <p className=text-sm text-muted-foreground mt-1">

          <div className=flex flex-col items-center justify-center p-4 text-center'>
            <p className='text-muted-foreground>No rewards yet</p>
            <p className=text-sm text-muted-foreground mt-1'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Refer users to earn rewards once they complete onboarding
            </p>
          </div>
        </CardContent>
      </Card>



    )

  }

  return (
    <Card>
      <CardHeader>



        <CardTitle className="flex items-center gap-2>
          <BadgeDollarSign className=h-5 w-5" />

          Your Rewards
        </CardTitle>
        <CardDescription>Rewards earned from successful referrals</CardDescription>
      </CardHeader>
      <CardContent>

;


          </CardTitle>;

          <CardDescription>Rewards earned from successful referrals</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className=flex flex-col items-center justify-center p-4 text-center">;
            <p className="text-muted-foreground>No rewards yet</p>;
            <p className=text-sm text-muted-foreground mt-1">;
              Refer users to earn rewards once they complete onboarding;
            </p>;
          </div>;
        </CardContent>;
      </Card>;
    );
  }

    <Card>;
      <CardHeader>;
        <CardTitle className="flex items-center gap-2>;
          <BadgeDollarSign className=h-5 w-5" />;
          Your Rewards;
        </CardTitle>;
        <CardDescription>;
          Rewards earned from successful referrals;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4>;
          {rewards.map((reward, index) => (;
            <div;
              key={reward.id}
              className={`flex justify-between items-start ${
                index !== rewards.length - 1 ? border-b pb-3" : ";
              }`}
            >;
              <div>;

                <div className='flex items-center gap-2'>;
                  {reward && reward.reward_type === 'credit' ? (;
                    <BadgeDollarSign className='h-4 w-4 text-green-600' />;
                  ) : (;
                    <Badge className='h-4 w-4 text-blue-600' />;

                  )}
                  <p className='font-medium>                    {reward && reward.reward_type === credit'                  <p className=font-medium">;
                    {reward && reward.reward_type === 'credit;
                      ? `$${reward && reward.amount?.toFixed(2)} Credit`;
                      : Visibility Boost'}
                  </p>;
                </div>;



                  Earned on {formatDate(reward.created_at)}

<p className='text-xs text-muted-foreground mt-1>
                  Earned on {formatDate(reward.created_at)}
                </p>
                {reward.expires_at && (



                    Expires on {formatDate(reward.expires_at)}

                  </p>

                )}
              </div>;
            </div>;
          ))}



        </div>;
      </CardContent>;
    </Card>;
  );
}



        </div>
      </CardContent>
    </Card>
  );
}