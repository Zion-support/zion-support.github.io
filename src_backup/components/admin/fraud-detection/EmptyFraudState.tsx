:src/components/admin/fraud-detection/EmptyFraudState.tsx
interface EmptyFraudStateProps {
  hasFilters: boolean
  onResetFilters: () => void
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
},) => {
  return (
    <div className="text-center py-12">
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium">No fraud flags found</h3>
      <p className="text-muted-foreground mb-6">
        {hasFilters
          ? "Try adjusting your filters"
          : "You don't have any fraud flags yet"}
      </p>
      {hasFilters && (
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
      )}
    </div>
  )
}
'"
import React from "react"
import {Button} from "@/components/ui/button"
import {ShieldAlert} from 'lucide-react'
:src/components/admin/fraud-detection/EmptyFraudState.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { Button } from "@/components/ui/button",
import { ShieldAlert } from 'lucide-react'

interface EmptyFraudStateProps {
  hasFilters: boolean,
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
}) => {
  return (
    <div className="text-center py-12">
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium">No fraud flags found</h3>
      <p className="text-muted-foreground mb-6">
        {hasFilters
          ? "Try adjusting your filters"
          : "You don't have any fraud flags yet"}
      </p>
      {hasFilters && (
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>
:src/components/admin/fraud-detection/EmptyFraudState.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
import React from "react",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from 'lucide-react';
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
:src/components/admin/fraud-detection/EmptyFraudState.tsx
<<<<<<< HEAD
}
;
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters;

import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'

interface EmptyFraudStateProps {
  hasFilters: boolean,

  onResetFilters: () => void
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ ;
  hasFilters,;
  onResetFilters ;
},) => {;

  return (
:src/components/admin/fraud-detection/EmptyFraudState.tsx
    <div className="text-center py-12">;
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
      <h3 className="text-lg font-medium">No fraud flags found</h3>;
      <p className="text-muted-foreground mb-6">;
        {hasFilters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}

interface EmptyFraudStateProps {
  has_filters: boolean,
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({
  has_filters,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  onResetFilters;
}) => {;
  return (;
    <div className="text-center py-12">;
      <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
      <h3 className="text-lg font-medium">No fraud flags found</h3>;
      <p className="text-muted-foreground mb-6">;
        {hasFilters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;
);
};
};
'";

  return (

    </div>;
  )
};

    <div className="text - center py-12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb-4" />;
      <h3 className="text - lg font-medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb-6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>Clear Filters</Button>)}
    </div>);
:src/components/admin/fraud-detection/EmptyFraudState.tsx
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
interface EmptyFraudStateProps {
  hasFilters: boolean;
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters;
  onResetFilters 
}) => {
  return (
    <div className;
:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
