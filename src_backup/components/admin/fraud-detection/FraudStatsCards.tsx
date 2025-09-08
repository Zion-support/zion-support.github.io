<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
=======
import React from "react,
import { Card, CardHeader, CardTitle, CardDescription } from @/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react
import { FraudStats } from "@/types/fraud,
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud",
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
} from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from '@/types/fraud';

<<<<<<< HEAD

=======
<<<<<<< HEAD
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
=======
<<<<<<< HEAD
import React from react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card;
import { AlertTriangle, AlertCircle, ShieldAlert } from lucide-react'
import { FraudStats } from @/types/fraud";
>>>>>>> origin/resolved-merge-conflicts
:src/components/admin/fraud-detection/FraudStatsCards.tsx
interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
  return (
    <div className;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";


interface FraudStatsCardsProps {
  stats: FraudStats
}

export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
return (

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      



      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src/components/admin/fraud-detection/FraudStatsCards.tsx
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <Card>

        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      



      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src/components/admin/fraud-detection/FraudStatsCards.tsx
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <Card>

        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      



      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/admin/fraud-detection/FraudStatsCards.tsx
  );
};
";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud",;

interface FraudStatsCardsProps {;
  stats: FraudStats;
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Card>;
        <CardHeader className="pb-2">;
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>;
          <CardDescription>Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
          <div>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2 flex flex-row items-center justify-between">;
<<<<<<< HEAD


=======
<<<<<<< HEAD
          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types/fraud';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'import { FraudStats  } from '@/types/fraud';
          <div>;import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-reactimport { FraudStats  } from @/types/fraud';
>>>>>>> origin/resolved-merge-conflicts
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div>;
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {

  return (

export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {
  return (
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className=grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8>;
>>>>>>> origin/resolved-merge-conflicts
  )}export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {return (<div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
=======
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">{stats.total_flags}</CardTitle>;

          <CardDescription > Total Flags</CardDescription>;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font-bold">{stats.pending_flags}</CardTitle>;
            <CardDescription > Pending Review</CardDescription>;
          </div>;
          {stats.pending_flags > 0 && <ShieldAlert className="h - 5 w - 5 text - amber-500" />}
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - amber-500">{stats.suspicious_count}</CardTitle>;
            <CardDescription > Suspicious</CardDescription>;
          </div>;
          <AlertTriangle className="h - 5 w - 5 text - amber-500" />;
        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb - 2 flex flex - row items - center justify-between">;
          <div>;
            <CardTitle className="text - 2xl font - bold text - red-500">{stats.dangerous_count}</CardTitle>;
            <CardDescription > Dangerous</CardDescription>;
          </div>;
          <AlertCircle className="h - 5 w - 5 text - red-500" />;

        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;

        </CardHeader>;
      </Card>;
      <Card>;
        <CardHeader className="pb-2">;

        </CardHeader>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
:src/components/admin/fraud-detection/FraudStatsCards.tsx
      </Card>;
    </div>;
  );
};
      </Card>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>)}
";)



  )


<<<<<<< HEAD

=======
=======
      </Card>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
