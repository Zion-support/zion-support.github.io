:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud",
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
} from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from '@/types/fraud';

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
:src/components/admin/fraud-detection/FraudStatsCards.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface FraudStatsCardsProps {
  stats: FraudStats
}

=======
interface FraudStatsCardsProps {
  stats: FraudStats
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
:src/components/admin/fraud-detection/FraudStatsCards.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.total_flags}</CardTitle>
          <CardDescription>Total Flags</CardDescription>
        </CardHeader>
      </Card>

:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudStatsCards.tsx
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{stats.pending_flags}</CardTitle>
            <CardDescription>Pending Review</CardDescription>
          </div>
          {stats.pending_flags > 0 && <ShieldAlert className="h-5 w-5 text-amber-500" />}
        </CardHeader>
      </Card>

:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
      <Card>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-amber-500">{stats.suspicious_count}</CardTitle>
            <CardDescription>Suspicious</CardDescription>
          </div>
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </CardHeader>
      </Card>

:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudStatsCards.tsx
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-red-500">{stats.dangerous_count}</CardTitle>
            <CardDescription>Dangerous</CardDescription>
          </div>
          <AlertCircle className="h-5 w-5 text-red-500" />
        </CardHeader>
      </Card>

:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
      <Card>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.actioned_count}</CardTitle>
          <CardDescription>Actions Taken</CardDescription>
        </CardHeader>
      </Card>

:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudStatsCards.tsx
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">{stats.false_positives}</CardTitle>
          <CardDescription>False Positives</CardDescription>
        </CardHeader>
      </Card>
    </div>
:src/components/admin/fraud-detection/FraudStatsCards.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  )
},
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud",;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
interface FraudStatsCardsProps {;
  stats: FraudStats;
}
;
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {;
  return (;
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">;
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
          <div>;
export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {
  return (
<div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

export const FraudStatsCards: React.FC < FraudStatsCardsProps> = ({ stats }, ) => {
  return (
    <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap - 4 mb - 8">;
      <Card>;
        <CardHeader className="pb - 2">;
          <CardTitle className="text - 2xl font - bold">{stats.total_flags}</CardTitle>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  );
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  )

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/FraudStatsCards.tsx
