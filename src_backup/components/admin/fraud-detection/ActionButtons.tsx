<<<<<<< HEAD:src_backup/components/admin/fraud-detection/ActionButtons.tsx
>
        <Eye className="h-4 w-4" />
      </Button>
      <Button



};
'"},;
  );
};


        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
=======

;
import { Eye, Info, AlertTriangle, Ban  } from 'lucide-react';
interface ActionButtonsProps  {export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {return (<div className="flex space-x-2">;
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
>;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button;
}'"},)}variant="ghost";
        size="icon";
        title="Send Warning";
        aria-label="Send warning";
        onClick={() => onAction(flagId, 'warning')}disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        aria-label="Suspend user";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/admin/fraud-detection/ActionButtons.tsx
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
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/ActionButtons.tsx
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
          size='sm'
origin/cursor/automate-test-improve-and-merge-code-2533
          onClick={() => onAction(flagId, 'ignore')}
        >
          Ignore
        </Button>
      )}

    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )


  );
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



import React from 'react';
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/ActionButtons.tsx
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
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
=======
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === 'pending' && (<Button;
          variant="ghost";
          size="sm";
import React from 'react';
import { Button  } from '@/components/ui/button';
interface ActionButtonsProps  {size='sm';
          onClick={() => onAction(flagId, 'ignore')}
        >;
          Ignore;
        </Button>;
      )}</div>;
  ))}import { Button  } from '@/components / ui / button';
import React from "react",import { Button } from "@/components/ui/button",interface ActionButtonsProps  {flagId: string,status: string,onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {return (<div className="flex space-x-2">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/admin/fraud-detection/ActionButtons.tsx
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
      {status === 'pending' && (<Button;
          variant="ghost";
          size="sm";
          onClick={() => onAction(flagId, 'ignore')}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/ActionButtons.tsx
  );
};
=======
=======
import { Button } from '@/components/ui/ button';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:src/components/admin/fraud-detection/ActionButtons.tsx
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
interface ActionButtonsProps {
  flag_id: string;
=======
  )}interface ActionButtonsProps  {flag_id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/admin/fraud-detection/ActionButtons.tsx
  status: string;
  on_action: (flag_id: string,action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
export const ActionButtons: React.FC < ActionButtonsProps> = ({flag_id,status,on_action}) => {  return (<div className='flex space - x-2'>;
      <Button;
        variant='ghost';
        size='icon';
        title='View Details';
        aria - label='View details';
        on_click={() => alert ('View details (would open a detailed view)')}        variant="ghost";
        size="icon";
        title="View Details";
        aria - label="View details";
        on_click = {(, ) => alert ("View details (would open a detailed view)") }
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
      {status === 'pending' && (<Button;
          variant='ghost';
          size='sm'          on_click={() => on_action (flag_id, 'ignore')}          variant="ghost";
          size="sm";
          on_click={() => on_action (flag_id, 'ignore')}
          on_click = {(, ) => on_action (flag_id, 'ignore') }
        >;
          Ignore;
        </Button>)}
<<<<<<< HEAD:src_backup/components/admin/fraud-detection/ActionButtons.tsx
    </div>);
}
'"},
  );
}

);
};
'"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    </div>)}
'"},)})}'";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/admin/fraud-detection/ActionButtons.tsx
