<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react'

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters,
  onResetFilters 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface EmptyFraudStateProps {
  hasFilters: boolean
  onResetFilters: () => void
}
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({
  hasFilters
  onResetFilters
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
import { ShieldAlert } from 'lucide-react'

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      )}
    </div>
  )
}

<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
=======

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
import React from "react",;

import { Button } from "@/components/ui/button",;
import { ShieldAlert } from 'lucide-react';
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;


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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

import React from "react",;
import { Button } from "@/components/ui/button",;
import { ShieldAlert } from 'lucide-react';
interface EmptyFraudStateProps {;
  hasFilters: boolean,;
  onResetFilters: () => void;
}
;
export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({;
  hasFilters;
  onResetFilters;
}) => {;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      )}
=======
<<<<<<< HEAD
      )}

interface EmptyFraudStateProps {
  has_filters: boolean,
=======
<<<<<<< HEAD
=======
      )}
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
    </div>;
  )}
'";
import { Button } from '@/components/ui/button';
import React from "react",import { Button } from "@/components/ui/button",interface EmptyFraudStateProps  {hasFilters: boolean;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface EmptyFraudStateProps {
  has_filters: boolean,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onResetFilters: () => void;
}
export const EmptyFraudState: React.FC < EmptyFraudStateProps> = ({
  has_filters,

  onResetFilters;

          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {hasFilters && (;
        <Button variant="outline" onClick={onResetFilters}>Clear Filters</Button>;
      )}
    </div>;

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

interface EmptyFraudStateProps {
  hasFilters: boolean;
  onResetFilters: () => void
}

export const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ 
  hasFilters;
  onResetFilters 
}) => {
  return (
<<<<<<< HEAD
    <div className;
=======
<<<<<<< HEAD
    <div className;
=======
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/EmptyFraudState.tsx
    <div className;
=======

    </div>;
  );

    </div>;
  );
};
      )}
    </div>;
  );
};
};

    <div className="text - center py - 12">;
      <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;
      <h3 className="text - lg font - medium">No fraud flags found</h3>;
      <p className="text - muted - foreground mb - 6">;
        {has_filters;
          ? "Try adjusting your filters";
          : "You don't have any fraud flags yet"}
      </p>;
      {has_filters && (
        <Button variant="outline" on_click={onResetFilters}>Clear Filters</Button>)}
    </div>);
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/admin/fraud-detection/EmptyFraudState.tsx
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
