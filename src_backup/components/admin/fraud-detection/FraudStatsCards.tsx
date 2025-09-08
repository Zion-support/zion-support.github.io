
:src/components/admin/fraud-detection/FraudStatsCards.tsx


import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
import React from react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card;
import { AlertTriangle, AlertCircle, ShieldAlert } from lucide-react'
import { FraudStats } from @/types/fraud";
:src/components/admin/fraud-detection/FraudStatsCards.tsx
interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
  return (
    <div className;


return (



:src/components/admin/fraud-detection/FraudStatsCards.tsx


:src/components/admin/fraud-detection/FraudStatsCards.tsx


:src/components/admin/fraud-detection/FraudStatsCards.tsx
  );
};
";



export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;

;
import React from 'react';
import { Card,CardHeader,CardTitle,CardDescription} from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShieldAlert  } from 'lucide-react';
import { FraudStats  } from '@/types/fraud';
import React from "react",import { Card, CardHeader, CardTitle, CardDescription  } from '@/components/ui/card';
interface FraudStatsCardsProps  {stats: FraudStats;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {return (return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>;
            <CardDescription>Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>;
            <CardDescription>Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h-5 w-5 text-amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>;
            <CardDescription>Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h-5 w-5 text-red-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>;
          <CardDescription>Actions Taken</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>;
          <CardDescription>False Positives</CardDescription>;
        </CardHeader>;
      </Card>;
    </div>;
},import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",import { FraudStats } from "@/types/fraud",interface FraudStatsCardsProps  {stats: FraudStats;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;


          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types/fraud';
          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types/fraud';
          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-reactimport { FraudStats  } from @/types/fraud';
interface FraudStatsCardsProps  {stats: FraudStats;
}export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {return (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats && stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;<Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;


    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
    <div className=grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8>;
  )}export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {return (<div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;

:src/components/admin/fraud-detection/FraudStatsCards.tsx
      </Card>;
    </div>;
  );
};
      </Card>;

