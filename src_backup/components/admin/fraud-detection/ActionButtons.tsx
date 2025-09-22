<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick={() => alert("View details (would open a detailed view)")}
      >
<<<<<<< HEAD
        <Eye className="h-4 w-4" />
      </Button>
      <Button
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Eye className="h-4 w-4" />
      </Button>
      <Button};
=======

<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
'"},;
  )
};

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick={() => onAction(flagId, 'warning')}
<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        aria-label="Ban user"
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
=======
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
          size='sm'
<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
          onClick={() => onAction(flagId, 'ignore')}
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

    </div>
<<<<<<< HEAD
  )


  );
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
interface ActionButtonsProps {;
  flagId: string,;
  status: string,;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
;
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;
  return (;
    <div className="flex space-x-2">;
      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
        aria-label="View details";
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
        aria-label="Send warning";
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        aria-label="Suspend user";
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
        aria-label="Ban user";
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === 'pending' && (;
        <Button;
          variant="ghost";
          size="sm";
          onClick={() => onAction(flagId, 'ignore')}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
  );
<<<<<<< HEAD
};
=======
=======

    </div>
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
  on_action: (
    flag_id: string,
    action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
export const ActionButtons: React.FC < ActionButtonsProps> = ({
  flag_id,
  status,
  on_action,
}) => {  return (
    <div className='flex space - x-2'>;
      <Button;
        variant='ghost';
        size='icon';
        title='View Details';
        aria - label='View details';
        on_click={() => alert ('View details (would open a detailed view)')}        variant="ghost";
        size="icon";
        title="View Details";
        aria - label="View details";
        on_click = {(, ) => alert ("View details (would open a detailed view)"), }
      >;
        <Eye className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Send Warning';
        aria - label='Send warning';
        on_click={() => on_action (flag_id, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Info className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Suspend User';
        aria - label='Suspend user';
        on_click={() => on_action (flag_id, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <AlertTriangle className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Ban User';
        aria - label='Ban user';
        on_click={() => on_action (flag_id, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Ban className='h - 4 w - 4' />;
      </Button>;
      {status === 'pending' && (
        <Button;
          variant='ghost';
          size='sm'          on_click={() => on_action (flag_id, 'ignore')}          variant="ghost";
          size="sm";
          on_click={() => on_action (flag_id, 'ignore')}
          on_click = {(, ) => on_action (flag_id, 'ignore'), }
        >;
          Ignore;
        </Button>)}
    </div>);
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
'"},
  );
}

);
};
'"
<<<<<<< HEAD:src/components/admin/fraud-detection/ActionButtons.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/admin/fraud-detection/ActionButtons.tsx
