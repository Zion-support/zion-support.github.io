<<<<<<< HEAD


=======
<<<<<<< HEAD
import { format } from 'date-fns',
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys',

;
export function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,import { format } from 'date-fns',import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys',import { Button } from '@/components/ui/button',import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog',import { Input } from '@/components/ui/input',import { Checkbox } from '@/components/ui/checkbox',import { Label } from '@/components/ui/label',import { Badge } from '@/components/ui/badge',import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu',import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
import CodeBlock from './CodeBlock';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { format } from "date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",

;
export function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,import { format } from "date-fns",import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",import { Input } from "@/components/ui/input",import { Checkbox } from "@/components/ui/checkbox",import { Label } from "@/components/ui/label",import { Badge } from "@/components/ui/badge",import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
import CodeBlock from './CodeBlock';
import { format } from "date-fns,
import { useApiKeys, type ApiKeyScope } from @/hooks/useApiKeys",
export function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,import { format } from "date-fns,import { useApiKeys, type ApiKeyScope } from @/hooks/useApiKeys",import { Button } from "@/components/ui/button,import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card",import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog,import { Input } from @/components/ui/input",import { Checkbox } from "@/components/ui/checkbox,import { Label } from @/components/ui/label",import { Badge } from "@/components/ui/badge,import { Popover, PopoverContent, PopoverTrigger } from @/components/ui/popover",import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu,import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog;
import CodeBlock from ./CodeBlock';
>>>>>>> origin/resolved-merge-conflicts
export function ApiKeysManager() {const {keys;
    loading;
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    clearNewApiKey
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ApiKeysManager() {
  const { 
    keys,
    loading, 

    loading, 
    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,

import { format } from 'date-fns',
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys',

import { Button } from '@/components/ui/button',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog',
import { Input } from '@/components/ui/input',
import { Checkbox } from '@/components/ui/checkbox',
import { Label } from '@/components/ui/label',
import { Badge } from '@/components/ui/badge',
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu',
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import CodeBlock from './CodeBlock';
export function ApiKeysManager() {
  const { 
    keys;
    loading;
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    clearNewApiKey
  } = useApiKeys();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
  
origin/cursor/automate-test-improve-and-merge-code-2533
  // Create key form state
  const [keyName, setKeyName] = useState(''),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
keys,

    loading, 
    newApiKey;
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 

    revokeApiKey,


  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),


  // Load keys on mount
  useState(() => {
    fetchApiKeys()


    if (keyName.trim() === '' || selectedScopes.length === 0) return;



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await createApiKey(keyName, selectedScopes)

    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName('')
    setSelectedScopes([])

<<<<<<< HEAD

=======
<<<<<<< HEAD
import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date - fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks/ useApiKeys';
import { Button } from '@/components/ui/ button';
=======
<<<<<<< HEAD
import { useState } from 'react;
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from lucide-react';
import { format } from 'date - fns;
import { useApiKeys, type ApiKeyScope } from @/hooks/ useApiKeys';
import { Button } from '@/components/ui/ button;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date - fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks / useApiKeys';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD

  CardTitle,
} from '@/components / ui / card';

=======
<<<<<<< HEAD
  CardTitle,
} from '@/components/ui/ card';
=======
<<<<<<< HEAD
  CardTitle} from @/components/ui/ card';
=======
  CardTitle,
} from '@/components / ui / card';
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
<<<<<<< HEAD

=======
<<<<<<< HEAD
  DialogTrigger,
} from '@/components/ui/ dialog';
import { Input } from '@/components/ui/ input';
import { Checkbox } from '@/components/ui/ checkbox';
import { Label } from '@/components/ui/ label';
import { Badge } from '@/components/ui/ badge';
=======
<<<<<<< HEAD
  DialogTrigger} from '@/components/ui/ dialog;
import { Input } from @/components/ui/ input';
import { Checkbox } from '@/components/ui/ checkbox;
import { Label } from @/components/ui/ label';
import { Badge } from '@/components/ui/ badge;
>>>>>>> origin/resolved-merge-conflicts
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/ popover';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger,
} from '@/components/ui/ dropdown - menu';
=======
  DropdownMenuTrigger} from '@/components/ui/ dropdown - menu;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  DialogTrigger,
} from '@/components / ui / dialog';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components / ui / popover';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components / ui / dropdown - menu';
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
<<<<<<< HEAD

  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import CodeBlock from './CodeBlock';

=======
<<<<<<< HEAD
  AlertDialogTitle,
} from '@/components/ui/ alert - dialog';
import CodeBlock from './CodeBlock';
=======
<<<<<<< HEAD
  AlertDialogTitle} from @/components/ui/ alert - dialog';
import CodeBlock from './CodeBlock;
=======
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import CodeBlock from './CodeBlock';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
export /**
 * ApiKeysManager - Function description
 */
function ApiKeysManager() {
  const {
    keys,
    loading,

    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    clearNewApiKey;
  } = useApiKeys()const [showCreateDialog, setShowCreateDialog] = useState(false)const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),// Create key form state;
  const [keyName, setKeyName] = useState(''),const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),// Load keys on mount;
  useState(() => {fetchApiKeys()keys,loading,newApiKey;
    fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),// Load keys on mount;
  useState(() => {fetchApiKeys()if (keyName.trim() === '' || selectedScopes.length === 0) return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName('')setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)useState(() => {fetchApiKeys()})const handleCreateKey = async () => {if (keyName.trim() === '' || selectedScopes.length === 0) return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName('')setSelectedScopes([])import { useState  } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X  } from 'lucide-react';
import { format  } from 'date - fns';
import { useApiKeys, type ApiKeyScope  } from '@/hooks / useApiKeys';
import { Button  } from '@/components / ui / button';
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components / ui / card';
  Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from '@/components / ui / dialog';
import { Input  } from '@/components / ui / input';
import { Checkbox  } from '@/components / ui / checkbox';
import { Label  } from '@/components / ui / label';
import { Badge  } from '@/components / ui / badge';
  Popover,PopoverContent,PopoverTrigger} from '@/components / ui / popover';
  DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from '@/components / ui / dropdown - menu';
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle} from '@/components / ui / alert - dialog';
export /**;
 * ApiKeysManager - Function description;
 */;
function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,clearNewApiKey} = useApiKeys ()const [showCreateDialog, setShowCreateDialog] = useState (false)const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(null)const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null)// Create key form state;
  const [key_name, setKeyName] = useState ('')const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([])// Load keys on mount;
  useState (() => {fetchApiKeys ()})const handleCreateKey = async () => {if (=== '' || selected_scopes.length === 0) return) {$2;
}
    await createApiKey (key_name, selected_scopes)setShowCreateDialog (false)setKeyName ('')setSelectedScopes ([]) }
  const handleRegenerateKey = async (key_id: string) => {await regenerateApiKey (key_id)setShowRegenerateConfirm (null)useState (() => {fetchApiKeys ()})const handleCreateKey = async () => {if (=== '' || selected_scopes.length === 0) return) {$2;
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);
    setKeyName ('');
    setSelectedScopes ([]);
  }),
  
  const handleCreateKey = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null)
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId)
    setShowDeleteConfirm(null)
  }
  const handleRegenerateKey = async (keyId: string,) => {
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options
  const scopeOptions: {
    value: ApiKeyScope
    label: string
    description: string
  }[] = [


  }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);
  const handleRevokeKey = async (key_id: string) => {
    await revokeApiKey (key_id);
    setShowDeleteConfirm (null);
  }

  const handleRegenerateKey = async (key_id: string, ) => {
    await regenerateApiKey (key_id),
    setShowRegenerateConfirm (null);
  },
  const handleRevokeKey = async (key_id: string, ) => {
    await revokeApiKey (key_id),
    setShowDeleteConfirm (null);
  },
    await createApiKey (key_name, selected_scopes)setShowCreateDialog (false)setKeyName ('')setSelectedScopes ([])}
  const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)}),const handleCreateKey  = null;const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId)setShowDeleteConfirm(null)}
  const handleRegenerateKey = async (keyId: string,) => {await regenerateApiKey(keyId),setShowRegenerateConfirm(null)},await revokeApiKey(keyId),setShowDeleteConfirm(null)}
  // Scope options;
  const scopeOptions: {value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {

      value: 'jobs:read'
      label: 'Read Jobs'
      description: 'Access to view job listings'
    }
    {
      value: 'jobs:write'
      label: 'Write Jobs'
      description: 'Create and manage job listings'
    }
    {
      value: 'talent:read'
      label: 'Read Talent'
      description: 'Access to view talent profiles'
    }
    {
      value: 'quotes:write'
      label: 'Write Quotes'
      description: 'Create and manage quotes'
    }

    {

    if (keyName.trim() === '' || selectedScopes.length === 0) return;
    
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName('');
    setSelectedScopes([])
  };

  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null)
  };
  
  const handleRevokeKey = async (keyId: string) => {
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null)
  };
  
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],
  // Toggle a scope selection
<<<<<<< HEAD


=======
<<<<<<< HEAD
  const toggleScope = (scope: ApiKeyScope) => {
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const toggleScope = (scope: ApiKeyScope) => {
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const toggleScope = (scope: ApiKeyScope) => {}
>>>>>>> origin/resolved-merge-conflicts
  const handleRegenerateKey = async (key_id: string) => {await regenerateApiKey (key_id)setShowRegenerateConfirm (null)const handleRevokeKey = async (key_id: string) => {await revokeApiKey (key_id)setShowDeleteConfirm (null)}const handleRegenerateKey = async (key_id: string, ) => {await regenerateApiKey (key_id),setShowRegenerateConfirm (null)},const handleRevokeKey = async (key_id: string, ) => {await revokeApiKey (key_id),setShowDeleteConfirm (null)},// Scope options;
  const scope_options: {value: ApiKeyScope;
    label: string;
    description: string;
  }[]  = [;{value: 'jobs:read';
      label: 'Read Jobs';
      description: 'Access to view job listings';
    }
    {value: 'jobs:write';
      label: 'Write Jobs';
      description: 'Create and manage job listings';
    }
    {value: 'talent:read';
      label: 'Read Talent';
      description: 'Access to view talent profiles';
    }
    {value: 'quotes:write';
      label: 'Write Quotes';
      description: 'Create and manage quotes';
    }
    {if (keyName.trim() === '' || selectedScopes.length === 0) return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName('')setSelectedScopes([])}const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)}const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId)setShowDeleteConfirm(null)}// Scope options;
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [;
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },{ value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },{ value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },{ value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },{ value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],// Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {setSelectedScopes(prev =>;
      prev.includes(scope)? prev.filter(s => s !== scope): [...prev, scope];
    )}
  const getExampleCode = (key: string) => {    return `curl -X GET 'https://api.ziontechgroup.com/v1/jobs' \\;
  -H 'Authorization: Bearer ${key}' \\;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions.map((scope) => (<div key={scope.value} className='flex items-center space-x-2'>;
import { useState } from 'react',import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',import CodeBlock from './CodeBlock',value: 'webhooks:manage',label: 'Manage Webhooks',description: 'Set up and manage webhook endpoints'}];
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {setSelectedScopes (prev =>;
      prev.includes (scope) ? prev.filter (string => s !== scope) : [...prev, scope])}
  const getExampleCode = (key: string) =>: any {    return `curl -X GET 'https://api.ziontechgroup.com / v1 / jobs' \\;
  -H 'Authorization: Bearer ${key}' \\;
  -H 'Content - Type: application / json'` }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {setKeyName ('')-H 'Content - Type: application / json'`;}
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
    setKeyName ('');
    setShowCreateDialog (false);
  }
    setSelectedScopes(prev =>
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope]
    );
  };

  const getExampleCode = (key: string) => {
    return `curl -X GET 'https://api.ziontechgroup.com/v1/jobs' \\
  -H 'Authorization: Bearer ${key}' \\
  -H 'Content-Type: application/json'`;
  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
setKeyName('');
    setSelectedScopes([]);
    setShowCreateDialog(false);
  };
origin/cursor/automate-test-improve-and-merge-code-2533
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]
=======
  const toggleScope = (scope: ApiKeyScope) => {
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    )
  }
  const getExampleCode = (key: string) => {    return `curl -X GET 'https://api.ziontechgroup.com/v1/jobs' \\
  -H 'Authorization: Bearer ${key}' \\

export function ApiKeysManager() {;
  const {;
    keys,;
    loading,;
    newApiKey,;
    fetchApiKeys,;
    createApiKey,;
    regenerateApiKey,;
    revokeApiKey,;

    clearNewApiKey,;
  } = useApiKeys();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleDialogClose = () =>: any {setKeyName ('')setShowCreateDialog (false)}setSelectedScopes(prev =>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleDialogClose = () =>: any {setKeyName (')setShowCreateDialog (false)}setSelectedScopes(prev =>;
>>>>>>> origin/resolved-merge-conflicts
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope];
    )}const getExampleCode = (key: string) => {return `curl -X GET 'https://api.ziontechgroup.com/v1/jobs' \\;
  -H 'Authorization: Bearer ${key}' \\;
  -H 'Content-Type: application/json'`;
  }// Reset form when dialog closes;
  const handleDialogClose = () => {setKeyName('')setSelectedScopes([])setShowCreateDialog(false)}return (import { format  } from 'date-fns';
import { useApiKeys, type ApiKeyScope  } from '@/hooks/useApiKeys';
import { Button  } from '@/components/ui/button';
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card';
  Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from '@/components/ui/dialog';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { Label  } from '@/components/ui/label';
import { Badge  } from '@/components/ui/badge';
  Popover,PopoverContent,PopoverTrigger} from '@/components/ui/popover';
  DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle} from '@/components/ui/alert-dialog';
export function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,await revokeApiKey(keyId),setShowDeleteConfirm(null)},// Scope options;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;clearNewApiKey}  = useApiKeys()const [showCreateDialog, setShowCreateDialog] = useState(false)const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null;
  )const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null)// Create key form state;
  const [keyName, setKeyName] = useState('')const [selectedScopes, setSelectedScopes]  = useState<ApiKeyScope[]>([])// Load keys on mount;
  useState(() => {fetchApiKeys()})const handleCreateKey = async () => {if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName('')setSelectedScopes([])}const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)useState(() => {fetchApiKeys()})const handleCreateKey = async () => {if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)-H 'Content-Type: application/json'`;
  }// Reset form when dialog closes;
  const handleDialogClose = () => {setKeyName('')setSelectedScopes([])}const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId)setShowDeleteConfirm(null)}const handleRegenerateKey = async (keyId: string,) => {await regenerateApiKey(keyId),setShowRegenerateConfirm(null)},const handleRevokeKey = async (keyId: string,) => {await revokeApiKey(keyId),setShowDeleteConfirm(null)},// Scope options;
  const scopeOptions: {value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
    {value: 'jobs:read',label: 'Read Jobs',description: 'Access to view job listings'},{value: 'jobs:write',label: 'Write Jobs',description: 'Create and manage job listings'},{value: 'talent:read',label: 'Read Talent',description: 'Access to view talent profiles'},{value: 'quotes:write',label: 'Write Quotes',description: 'Create and manage quotes'},{value: 'webhooks:manage',label: 'Manage Webhooks',description: 'Set up and manage webhook endpoints'}];// Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {setSelectedScopes(prev =>;
      prev && prev.includes(scope) ? prev && prev.filter(s => s !== scope) : [...prev, scope];
    )}const getExampleCode = (key: string) => {    return `curl -X GET 'https://api && api.ziontechgroup.com/v1/jobs' \\;
  -H 'Authorization: Bearer ${key}' \\;
  -H 'Content-Type: application/json'`;  }// Reset form when dialog closes;
  const handleDialogClose = () => {setKeyName('')-H 'Content-Type: application/json'`;
  }// Reset form when dialog closes;
  const handleDialogClose = () => {setKeyName('')setShowCreateDialog(false)}return (<Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Key className='mr-2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;<CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key' : 'keys'}
          </p>;<Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;<div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name</Label>;
                  <Input;
                    id='key-name';
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder='e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;<div className='space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map(scope => (<div;
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox
    setSelectedScopes([])
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleRegenerateKey = async (keyId: string) => {

<<<<<<< HEAD
=======
    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },
  

  const handleRevokeKey = async (keyId: string) => {

    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    string | null;
  >(null);

  // Create key form state;
  const [keyName, setKeyName] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  // Load keys on mount;
  useState(() => {;
    fetchApiKeys();
  });
  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName('');
    setSelectedScopes([]);  };

  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);  useState(() => {;
    fetchApiKeys();
  });

  const handleCreateKey = async () => {;
    if (keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
  -H 'Content-Type: application/json'`
  };

  // Reset form when dialog closes
  const handleDialogClose = () => {
    setKeyName('');
    setSelectedScopes([]);
  };

  const handleRegenerateKey = async (keyId: string) => {;
    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);

  const handleRevokeKey = async (keyId: string) => {;
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null);
  };

  const handleRegenerateKey = async (keyId: string,) => {;
    await regenerateApiKey(keyId),;
    setShowRegenerateConfirm(null);
  },;

  const handleRevokeKey = async (keyId: string,) => {;
    await revokeApiKey(keyId),;
    setShowDeleteConfirm(null);
  },;

  // Scope options;
  const scopeOptions: {;
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
    {;
      value: 'jobs:read',;
      label: 'Read Jobs',;
      description: 'Access to view job listings',;
    },;
    {;
      value: 'jobs:write',;
      label: 'Write Jobs',;
      description: 'Create and manage job listings',;
    },;
    {;
      value: 'talent:read',;
      label: 'Read Talent',;
      description: 'Access to view talent profiles',;
    },;
    {;
      value: 'quotes:write',;
      label: 'Write Quotes',;
      description: 'Create and manage quotes',;
    },;
    {;
      value: 'webhooks:manage',;
      label: 'Manage Webhooks',;
      description: 'Set up and manage webhook endpoints',;
    },;
  ];

  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {;
    setSelectedScopes(prev =>;
      prev && prev.includes(scope) ? prev && prev.filter(s => s !== scope) : [...prev, scope];
    );
  };

  const getExampleCode = (key: string) => {    return `curl -X GET 'https://api && api.ziontechgroup.com/v1/jobs' \\;
  -H 'Authorization: Bearer ${key}' \\;
  -H 'Content-Type: application/json'`;  };

  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');  -H 'Content-Type: application/json'`;
  };

  // Reset form when dialog closes;
  const handleDialogClose = () => {;
    setKeyName('');
    setShowCreateDialog(false);
  };

  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Key className='mr-2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key' : 'keys'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name</Label>;
                  <Input
                    id='key-name'
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder='e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;

                <div className='space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map(scope => (;
                      <div
                        key={scope && scope.value}
                        className='flex items-center space-x-2'>;
                        <Checkbox

  }),
  
  const handleCreateKey = async () => {
    if (keyName.trim() === '' || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName(''),

    setSelectedScopes([])
  },

  const handleRegenerateKey = async (keyId: string) => {

    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },

  const handleRevokeKey = async (keyId: string) => {

    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options

                  <Label>Scopes</Label>
                  <div className='grid gap-2 pt-2'>
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className='flex items-center space-x-2'>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                        <Checkbox 
                          id={scope.value} 


                          id={scope.value}
                          checked={selectedScopes.includes(scope.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <Checkbox 
                          id={scope.value} 

                          onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}

                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'

                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>{scope.description}</span>
                        </Label>

                      </div>
                    ))}

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                        <Checkbox;
                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions && scopeOptions.map((scope,) => (<div key={scope && scope.value} className='flex items-center space-x-2'>;
                        <Checkbox;
                          id={scope && scope.value}onCheckedChange={() => toggleScope(scope && scope.value)}
                        />;<Label;
                          htmlFor={scope && scope.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {scope && scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {scope && scope.description}
                          </span>                        </Label>                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
                        >;
                          {scope && scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>{scope && scope.description}</span>;
                      </div>;
                        <Checkbox;
                          id={scope.value}checked={selectedScopes.includes(scope.value)}
  }
  const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null)const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId)setShowDeleteConfirm(null)}
  const handleRegenerateKey = async (keyId: string,) => {clearNewApiKey;
  } = useApiKeys(),const [showCreateDialog, setShowCreateDialog] = useState(false),const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),// Create key form state;
  const [keyName, setKeyName] = useState(''),const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),// Load keys on mount;
  useState(() => {fetchApiKeys()}),const handleCreateKey = async () => {if (keyName.trim() === '' || selectedScopes.length === 0) return,await createApiKey(keyName, selectedScopes),setShowCreateDialog(false),setKeyName(''),setSelectedScopes([]),setShowCreateDialog(false)},return (<Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;
        <CardTitle className='text-xl flex items-center'>;
          <Key className='mr-2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='key-name'>Key Name</Label>;
                  <Input;
                    id='key-name';
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                    placeholder='e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700';
                  />;
                </div>;
                <div className='space-y-2'>;
    setSelectedScopes([])},const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId),setShowRegenerateConfirm(null)},const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId),setShowDeleteConfirm(null)}
  // Scope options;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2'>;
                    {scopeOptions.map((scope) => (<div key={scope.value} className='flex items-center space-x-2'>;
                        <Checkbox;
                          id={scope.value}id={scope.value}
                          checked={selectedScopes.includes(scope.value)}onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
                        >;
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>{scope.description}</span>;
                        </Label>;
                      </div>;
                    ))}className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
                        >;
                          {scope.label}
<<<<<<< HEAD
                          <span className='block text-xs text-zinc-400 mt-1'>;
=======
                          <span className='block text-xs text-zinc-400 mt-1>;
=======
className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {scope.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            {scope.description}
                          </span>
                        </Label>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </div>
                    ))}

                  </div>
                </div>
              </div>

<DialogFooter>
                <Button variant='outline' onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName.trim() === '' |selectedScopes.length === 0
                  }
                >
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              
              <DialogFooter>
                <Button variant='outline' onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleCreateKey} disabled={keyName.trim() === '' || selectedScopes.length === 0}>
                  Create Key
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Create Key

                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          </span>;
                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName.trim() === '' || selectedScopes.length === 0}>;
                  Create Key;
<DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  onClick={handleCreateKey}
                  disabled={keyName.trim() === '' |selectedScopes.length === 0;
                  }
                >;
                  Create Key;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
                  </div>;
                </div>;
              </div>;<DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  onClick={handleCreateKey}
                  disabled={keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0;
                  }>                  Create Key              ;
              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0}>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Key className='mr - 2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='key - name'>Key Name</Label>;
                  <Input;
                    id='key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
                    placeholder='e.g. Production API Key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label > Scopes</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map (scope => (<div;
                        key={scope.value}
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map ((scope, ) => (<div key={scope.value} className='flex items - center space - x-2'>;
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {scope.description}
                          </span>                        </Label>                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>{scope.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' on_click={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={key_name.trim () === '' || selected_scopes.length === 0;
                  }
                >                  Create Key;
              <DialogFooter>;
<<<<<<< HEAD
                <Button variant='outline' on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === '' || selected_scopes.length === 0}>;
=======
                <Button variant="outline" on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === " || selected_scopes.length === 0}>;
>>>>>>> origin/resolved-merge-conflicts


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0
                  }>                  Create Key              ;
              <DialogFooter>;
                <Button variant='outline' onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0}>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center'>;
          <Key className='mr - 2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text - zinc - 400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;
            You have {keys.length} API {keys.length === 1 ? 'key' : 'keys'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant='default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className='text - zinc - 400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='key - name'>Key Name</Label>;
                  <Input;
                    id='key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
                    placeholder='e.g. Production API Key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2'>;
                  <Label > Scopes</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map (scope => (
                      <div;
                        key={scope.value}
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className='grid gap - 2 pt - 2'>;
                    {scope_options.map ((scope, ) => (
                      <div key={scope.value} className='flex items - center space - x-2'>;
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {scope.description}
                          </span>                        </Label>                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1'>{scope.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant='outline' on_click={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={
                    key_name.trim () === '' || selected_scopes.length === 0;
                  }
                >                  Create Key;
              <DialogFooter>;
                <Button variant='outline' on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === '' || selected_scopes.length === 0}>;

                </Button>;

              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        {/* New API Key Alert */}

{/* New API Key Alert */}
origin/cursor/automate-test-improve-and-merge-code-2533
        {newApiKey && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className='mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md'>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === '' || selected_scopes.length === 0}>;</Button>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === " || selected_scopes.length === 0}>;</Button>;
>>>>>>> origin/resolved-merge-conflicts
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;{/* New API Key Alert */}{/* New API Key Alert */}{newApiKey && (<div className='mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md'>;
            <div className='flex justify-between items-start mb-2'>;
              <span className='font-medium flex items-center'>;
                <Check size={16} className='mr-2 text-green-500' /> New API Key Generated;
              </span>;
              <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6'
<<<<<<< HEAD
=======
                variant=ghost'
                size='icon
                className=h-6 w-6'
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
                onClick={clearNewApiKey}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;
            <div className="flex justify-between items-start mb-2">;
              <span className="font-medium flex items-center">;
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;
              </span>;
              <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                variant='ghost'
                size='icon'
                className='h-6 w-6'
origin/cursor/automate-test-improve-and-merge-code-2533
                onClick={clearNewApiKey}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/chore/fix-lint-and-merge

                variant='ghost'
                size='icon'
                className='h-6 w-6'

                variant='ghost'
                size='icon'
                className='h-6 w-6'
origin/cursor/automate-test-improve-and-merge-code-2533
                onClick={clearNewApiKey}

<<<<<<< HEAD
              <Button;
        {/* New API Key Alert */}
        {newApiKey && (<div className='mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md'>;
            <div className='flex justify-between items-start mb-2'>;
              <span className='font-medium flex items-center'>;
                <Check size={16} className='mr-2 text-green-500' /> New API Key Generated;
              </span>;
              <Button;
                variant='ghost';
                size='icon';
                className='h-6 w-6';
                variant='ghost';
                size='icon';
                className='h-6 w-6';
                onClick={clearNewApiKey}{/* API Keys List */}
        <div className='space - y-4'>;
          {loading ? (<div className='text - center py - 8 text - zinc - 500'>Loading API keys...</div>) : keys.length === 0 ? (<div className='text - center py - 8 text - zinc - 500'>;
              <Key className='mx - auto mb - 2 opacity - 30' size={24} />;
              <p > No API keys found.</p>;
              <p className='text - sm mt - 1'>Create one to access the Zion APIs.</p>;
            </div>) : (keys.map ((key) => (<div key={key.id} className='p - 4 border border - zinc - 800 rounded - lg'>;
                <div className='flex items - center justify - between'>;
                  <div className='flex items - center'>;
                    <div>;
<<<<<<< HEAD
                      <h3 className='font - medium'>{key.name}</h3>;
                      <div className='flex items - center space - x-2 mt - 1'>;
                        <span className='text - sm text - zinc - 400 font - mono'>{key.key_prefix}••••••••••••</span>;
=======
                      <h3 className="font - medium">{key.name}</h3>;
                      <div className="flex items - center space - x-2 mt - 1">;
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* API Keys List */}
        <div className='space-y-4'>;
          {loading ? (
            <div className='text - center py - 8 text - zinc-500'>Loading API keys...</div>) : keys.length === 0 ? (
            <div className='text - center py - 8 text - zinc-500'>;
              <Key className='mx - auto mb - 2 opacity-30' size={24} />;
              <p > No API keys found.</p>;
              <p className='text - sm mt-1'>Create one to access the Zion APIs.</p>;
            </div>) : (
            keys.map ((key) => (
              <div key={key.id} className='p - 4 border border - zinc - 800 rounded-lg'>;
                <div className='flex items - center justify-between'>;
                  <div className='flex items-center'>;
                    <div>;
                      <h3 className='font-medium'>{key.name}</h3>;
                      <div className='flex items - center space - x-2 mt-1'>;
                        <span className='text - sm text - zinc - 400 font-mono'>{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (

              >
                <X size={14} />
              </Button>
            </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
            <p className='text-sm text-zinc-300 mb-2'>

            <p className='text-sm text-zinc-300 mb-2'>


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

            <p className="text-sm text-zinc-300 mb-2">
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <p className="text-sm text-zinc-300 mb-2">
            <p className="text-sm text-zinc-300 mb-2>
=======
>>>>>>> origin/chore/fix-lint-and-merge

            <p className=text-sm text-zinc-300 mb-2">
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              This key will only be displayed once. Please save it securely.

            </p>
            <CodeBlock code={newApiKey} className='mb-3' />
            <div className='text-sm text-zinc-400'>
              <span className='font-medium'>Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />
          </div>
        )}

        {/* API Keys List */}
        <div className='space-y-4'>
;
        {/* API Keys List */}
        <div className='space-y-4'>

          {loading ? (
            <div className='text-center py-8 text-zinc-500'>Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className='text-center py-8 text-zinc-500'>
              <Key className='mx-auto mb-2 opacity-30' size={24} />
              <p>No API keys found.</p>
              <p className='text-sm mt-1'>Create one to access the Zion APIs.</p>
            </div>
          ) : (

<<<<<<< HEAD


            keys.map((key) => (

            keys.map((key) => (

              <div key={key.id} className=p-4 border border-zinc-800 rounded-lg">
                <div className="flex items-center justify-between>
                  <div className=flex items-center">
                    <div>
                      <h3 className="font-medium>{key.name}</h3>
                      <div className=flex items-center space-x-2 mt-1">
                        <span className="text-sm text-zinc-400 font-mono>{key.key_prefix}••••••••••••</span>
                        {key.is_active ? (
                          <Badge className=bg-green-700 text-white">Active</Badge>
                        ) : (



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {loading ? (
            <div className='text-center py-8 text-zinc-500'>Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className='text-center py-8 text-zinc-500'>
              <Key className='mx-auto mb-2 opacity-30' size={24} />
              <p>No API keys found.</p>
              <p className='text-sm mt-1'>Create one to access the Zion APIs.</p>
            </div>
          ) : (
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            keys.map((key) => (

            keys.map((key) => (

              <div key={key.id} className='p-4 border border-zinc-800 rounded-lg'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div>
                      <h3 className='font-medium'>{key.name}</h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-zinc-400 font-mono'>{key.key_prefix}••••••••••••</span>
                        {key.is_active ? (
                          <Badge className='bg-green-700 text-white'>Active</Badge>
                        ) : (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        {key.is_active ? (
                          <Badge className='bg-green-700 text-white'>Active</Badge>
                        ) : (
                          <Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>

<p className='text-sm text-zinc-300 mb-2'>
              This key will only be displayed once. Please save it securely.
            </p>
            <CodeBlock code={newApiKey} className='mb-3' />
            <div className='text-sm text-zinc-400'>
              <span className='font-medium'>Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />
          </div>
        )}
        {/* API Keys List */}
        <div className='space-y-4'>
          {loading ? (
            <div className='text-center py-8 text-zinc-500'>
              Loading API keys...
            </div>
          ) : keys.length === 0 ? (
            <div className='text-center py-8 text-zinc-500'>
              <Key className='mx-auto mb-2 opacity-30' size={24} />
              <p>No API keys found.</p>
              <p className='text-sm mt-1'>
                Create one to access the Zion APIs.
              </p>
            </div>
          ) : (
            keys.map(key => (
              <div
                key={key.id}
                className='p-4 border border-zinc-800 rounded-lg'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>                    <div>
                      <h3 className='font-medium'>{key.name}</h3>
                      <div className='flex items-center space-x-2 mt-1'>
                        <span className='text-sm text-zinc-400 font-mono'>
                          {key.key_prefix}••••••••••••
                        </span>
                        {key.is_active ? (
                          <Badge className='bg-green-700 text-white'>
                            Active
                          </Badge>
                        ) : (
                          <Badge
                            variant='secondary'
                            className='bg-red-900 text-white border-red-800'
                          >
                            Revoked
                          </Badge>
origin/cursor/automate-test-improve-and-merge-code-2533
                        )}
                      </div>
                    </div>
                  </div>
<DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='ghost'
                        size='icon'
                        aria-label='More options'
                      >
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='end'
                      className='bg-zinc-900 border-zinc-800 text-white'
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
                          <Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>
=======
                          <Badge variant=secondary" className="bg-red-900 text-white border-red-800>Revoked</Badge>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      <DropdownMenuItem

                      <DropdownMenuItem

                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500'
                        disabled={!key.is_active}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


                      </div>;
                    </div>;
                  </div>;

                          <Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>;
                        {key.is_active ? (>;
                <X size={14} />;
              </Button>;
            </div>;
            <p className='text-sm text-zinc-300 mb-2'>;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className='mb-3' />;
            <div className='text-sm text-zinc-400'>;
              <span className='font-medium'>Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />;
          </div>;
        )}{/* API Keys List */}
        <div className='space-y-4'>;{/* API Keys List */}
        <div className='space-y-4'>;
          {loading ? (<div className='text-center py-8 text-zinc-500'>Loading API keys...</div>;
          ) : keys.length === 0 ? (<div className='text-center py-8 text-zinc-500'>;
              <Key className='mx-auto mb-2 opacity-30' size={24} />;
              <p>No API keys found.</p>;
              <p className='text-sm mt-1'>Create one to access the Zion APIs.</p>;
            </div>;
          ) : ({loading ? (<div className='text-center py-8 text-zinc-500'>Loading API keys...</div>;
          ) : keys.length === 0 ? (<div className='text-center py-8 text-zinc-500'>;
              <Key className='mx-auto mb-2 opacity-30' size={24} />;
              <p>No API keys found.</p>;
              <p className='text-sm mt-1'>Create one to access the Zion APIs.</p>;
            </div>;
          ) : (keys.map((key) => (<div key={key.id} className='p-4 border border-zinc-800 rounded-lg'>;
                <div className='flex items-center justify-between'>;
                  <div className='flex items-center'>;
                    <div>;
                      <h3 className='font-medium'>{key.name}</h3>;
                      <div className='flex items-center space-x-2 mt-1'>;
                        <span className='text-sm text-zinc-400 font-mono'>{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (<Badge className='bg-green-700 text-white'>Active</Badge>;
                        ) : ({key.is_active ? (<Badge className='bg-green-700 text-white'>Active</Badge>;
                        ) : (<Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>;
<p className='text-sm text-zinc-300 mb-2'>;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className='mb-3' />;
            <div className='text-sm text-zinc-400'>;
              <span className='font-medium'>Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />;
          </div>;
        )}
        {/* API Keys List */}
        <div className='space-y-4'>;
          {loading ? (<div className='text-center py-8 text-zinc-500'>;
              Loading API keys...;
            </div>;
          ) : keys.length === 0 ? (<div className='text-center py-8 text-zinc-500'>;
              <Key className='mx-auto mb-2 opacity-30' size={24} />;
              <p>No API keys found.</p>;
              <p className='text-sm mt-1'>;
                Create one to access the Zion APIs.;
              </p>;
            </div>;
          ) : (keys.map(key => (<div;
                key={key.id}
                className='p-4 border border-zinc-800 rounded-lg';
              >;
                <div className='flex items-center justify-between'>;
                  <div className='flex items-center'>                    <div>;
                      <h3 className='font-medium'>{key.name}</h3>;
                      <div className='flex items-center space-x-2 mt-1'>;
                        <span className='text-sm text-zinc-400 font-mono'>;
                          {key.key_prefix}••••••••••••;
                        </span>;
                        {key.is_active ? (<Badge className='bg-green-700 text-white'>;
                            Active;
                          </Badge>;
                        ) : (<Badge;
                            variant='secondary';
                            className='bg-red-900 text-white border-red-800';
                          >;
                            Revoked;
                          </Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;
<DropdownMenu>;
                    <DropdownMenuTrigger asChild>;
                      <Button;
                        variant='ghost';
                        size='icon';
                        aria-label='More options';
                      >;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent;
                      align='end';
                      className='bg-zinc-900 border-zinc-800 text-white';
                    >;
                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key.id)}
                        className='cursor-pointer';
                        disabled={!key.is_active}</div>;
                    </div>;
                  </div>;<Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>;
              This key will only be displayed once. Please save it securely.;
            </p>;
            <CodeBlock code={newApiKey} className='mb-3' />;
            <div className='text-sm text-zinc-400'>;
              <span className='font-medium'>Example usage:</span>;
            </div>;
            <CodeBlock code={getExampleCode(newApiKey)} language='bash' />;
          </div>;
        )}{/* API Keys List */}
        <div className='space-y-4'>;
          {loading ? (<div className='text-center py-8 text-zinc-500'>Loading API keys...</div>;
          ) : keys && keys.length === 0 ? (<div className='text-center py-8 text-zinc-500'>;
              <Key className='mx-auto mb-2 opacity-30' size={24} />;
              <p>No API keys found.</p>;
              <p className='text-sm mt-1'>Create one to access the Zion APIs.</p>;
            </div>;
          ) : (keys && keys.map((key) => (<div key={key && key.id} className='p-4 border border-zinc-800 rounded-lg'>;
                <div className='flex items-center justify-between'>;
                  <div className='flex items-center'>;
                    <div>;
                      <h3 className='font-medium'>{key && key.name}</h3>;
                      <div className='flex items-center space-x-2 mt-1'>;
                        <span className='text-sm text-zinc-400 font-mono'>{key && key.key_prefix}••••••••••••</span>;
                        {key && key.is_active ? (<Badge className='bg-green-700 text-white'>Active</Badge>;
                        ) : (<Badge variant='secondary' className='bg-red-900 text-white border-red-800'>Revoked</Badge>;
                        )}
                      </div>;
                    </div>;
                  </div>;<DropdownMenu>;
                    <DropdownMenuTrigger asChild>;<Button;
                        variant='ghost';
                        size='icon';
                        aria-label='More options'>;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent;
                      align='end';
                      className='bg-zinc-900 border-zinc-800 text-white'>;
                      <DropdownMenuItem
                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
                        className='cursor-pointer';
                        disabled={!key && key.is_active}
                        onClick = {() => setShowRegenerateConfirm(key && key.id)}
                        className='cursor-pointer';
                        disabled = {!key && key.is_active}
                      >;
                        <RefreshCw size={14} className='mr-2' /> Regenerate;
                      </DropdownMenuItem>;<DropdownMenuItem;
                        onClick={() => setShowDeleteConfirm(key.id)}
                        className='cursor-pointer text-red-500';
                        disabled={!key.is_active}
                      >
                        <X size={14} className='mr-2' /> Revoke
origin/cursor/automate-test-improve-and-merge-code-2533
                      </DropdownMenuItem>;
                      <DropdownMenuItem


                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                

                <div className='mt-3 flex flex-wrap gap-2'>
                  {key.scopes.map((scope,) => (
                        onClick={() => setShowDeleteConfirm(key && key.id)}
                      >;
                        <X size={14} className='mr-2' /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                <div className='mt-3 flex flex-wrap gap-2'>;
                  {key.scopes.map((scope,) => (onClick={() => setShowDeleteConfirm(key && key.id)}
                        className='cursor-pointer text-red-500';
                        disabled={!key && key.is_active}                      >;
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className='mr-2' /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;<div className='mt-3 flex flex-wrap gap-2'>;
                  {key && key.scopes.map(scope => (<Badge;
                      key={scope}
                      variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;
<<<<<<< HEAD
                <div className='mt-3 flex flex-wrap gap-2'>;
=======
                <div className="mt-3 flex flex-wrap gap-2">;
>>>>>>> origin/resolved-merge-conflicts
                  {key && key.scopes.map((scope,) => (;



=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      >
                        <X size={14} className='mr-2' /> Revoke

                    <Badge
                      key = {scope,}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<div className='mt-3 flex flex-wrap gap-2'>
=======
<div className='mt-3 flex flex-wrap gap-2>
=======
=======
=======
<<<<<<< HEAD

<div className='mt-3 flex flex-wrap gap-2>
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<div className='mt-3 flex flex-wrap gap-2'>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {key.scopes.map(scope => (
                    <Badge
                      key={scope}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
                      {scope}
                    </Badge>
                  ))}
                </div>
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
                    Created: {format(new Date(key.created_at), 'MMM d, yyyy')}
                  </span>
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>
                      <Clock size={12} className='mr-1' />
                      Last used:{' '}
                      {key.last_used_at
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy')
                        : 'Never'}

                <div className='mt-3 flex flex-wrap gap-2'>
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    >
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {key && key.scopes.map((scope,) => (<Badge;
                      key = {scope}
                      variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800';
<div className='mt-3 flex flex-wrap gap-2'>;
                  {key.scopes.map(scope => (<Badge;
                      key={scope}
                      variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800';
                    >;
                      {scope}
                    </Badge>;
                  ))}
                </div>;
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used:{' '}
                      {key.last_used_at;
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy'): 'Never'}<div className='mt-3 flex flex-wrap gap-2'>;
                  {key.scopes.map((scope) => (<Badge;
                      key={scope}variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800';
                    >;
                      {scope}
                    </Badge>;
                  ))}>;
                      {scope}
                    </Badge>;
                  ))}</div>;<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>Created: {format(new Date(key && key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used:{' '}
                      {key && key.last_used_at;
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy');
                        : 'Never'}
<<<<<<< HEAD
=======
                        ? format(new Date(key && key.last_used_at), MMM d, yyyy');
                        : 'Never}
>>>>>>> origin/resolved-merge-conflicts

                </div>
                
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>
                  <Popover>
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>
                      <Clock size={12} className='mr-1' />
                      Last used: {key.last_used_at 
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy') 
                        : 'Never'}
                    </PopoverTrigger>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      {scope}
                    </Badge>;
                  ))}

                      <p className='text-sm mb-1'>Last Used</p>
                      <p className='text-xs text-zinc-400'>
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss')

                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>
                      <p className='text-sm mb-1'>Last Used</p>
                      <p className='text-xs text-zinc-400'>
                        {key.last_used_at
                          ? format(
                              new Date(key.last_used_at)
                              'MMM d, yyyy HH:mm:ss'
                            )
                          : 'This API key has never been used'}

                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (
<<<<<<< HEAD


=======
<<<<<<< HEAD
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy'): 'Never'}</div>;
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        ? format(new Date(key && key.last_used_at), 'MMM d, yyyy): Never'}</div>;
                <div className=mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy)}</span>;
>>>>>>> origin/resolved-merge-conflicts
                  <Popover>;
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;
                      <Clock size={12} className='mr-1' />;
                      Last used: {key.last_used_at;
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy'): 'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key.last_used_at;
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss'): 'This API key has never been used'}<PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key.last_used_at;
                          ? format(new Date(key.last_used_at)'MMM d, yyyy HH:mm:ss';
                            ): 'This API key has never been used'}</p>;
                    </PopoverContent>;
                  </Popover>;
                  {key.expires_at && (</PopoverTrigger>;
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key && key.last_used_at;
                          ? format(new Date(key && key.last_used_at),'MMM d, yyyy HH:mm:ss';
                            )                          : 'This API key has never been used'}                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;
                      <p className='text-sm mb-1'>Last Used</p>;
                      <p className='text-xs text-zinc-400'>;
                        {key && key.last_used_at ;
                          ? format(new Date(key && key.last_used_at), 'MMM d, yyyy HH:mm:ss')</p>;
                    </PopoverContent>;
                  </Popover>;
                  {key && key.expires_at && (;
                    <span>;
                      Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;

<span>
                      Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
                    </span>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  )}
                </div>;
              </div>;
            ));
          )}
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
        </div>
      </CardContent>
<CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Keep your API keys secure. They have the same permissions as your
          account.
        </div>
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>
          Refresh
origin/cursor/automate-test-improve-and-merge-code-2533
        </Button>
      </CardFooter>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <CardFooter className='justify-between border-t border-zinc-800 py-4'>

        <div className='text-xs text-zinc-500'>
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>

        </div>
      </CardContent>
<CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Keep your API keys secure. They have the same permissions as your
          account.
        </div>
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>
          Refresh

          Refresh

        </Button>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                  {key && key.expires_at && (<span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;<span>Expires: {format(new Date(key.expires_at), 'MMM d, yyyy')}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {key && key.expires_at && (<span>Expires: {format(new Date(key && key.expires_at), MMM d, yyyy')}
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy)}</span>;<span>Expires: {format(new Date(key.expires_at), MMM d, yyyy')}
>>>>>>> origin/resolved-merge-conflicts
                    </span>;
                  )}
                </div>;
              </div>;
            )))}<CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>;
        </div>;
      </CardContent>;
<CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;
          Refresh;
        </Button>;
      </CardFooter>;
        </div>;
      </CardContent>;<CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>;
        </Button>;
      </CardFooter>;

      {/* Regenerate Key Confirmation Dialog */}
<AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will invalidate the existing key and generate a new
              one. Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
              className='bg-blue-600 hover:bg-blue-700'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* Delete Key Confirmation Dialog */}
<AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will revoke the API key and it can no longer be used
              to access the API. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
              className='bg-blue-600 hover:bg-blue-700'            >;
            <AlertDialogAction
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
              className='bg-blue-600 hover:bg-blue-700';

      >;
      </CardFooter>;{/* Regenerate Key Confirmation Dialog */}<Badge className='bg - green - 700 text - white'>Active</Badge>) : (<Badge variant='secondary' className='bg - red - 900 text - white border - red - 800'>Revoked</Badge>)}
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
                    <DropdownMenuTrigger as_child>;
                      <Button;
                        variant='ghost';
                        size='icon';
                        aria - label='More options';
                      >;
                        <MoreVertical size={16} />;
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent;
                      align='end';
                      className='bg - zinc - 900 border - zinc - 800 text - white';
                    >;
                      <DropdownMenuItem;
                        on_click={() => setShowRegenerateConfirm (key.id)}
                        className='cursor - pointer';
                        disabled={!key.is_active}
                        on_click = {() => setShowRegenerateConfirm (key.id) }
                        className='cursor - pointer';
                        disabled = {!key.is_active }
                      >;
                        <RefreshCw size={14} className='mr - 2' /> Regenerate;
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        on_click={() => setShowDeleteConfirm (key.id)}
                        className='cursor - pointer text - red - 500';
                        disabled={!key.is_active}                      >;
                        <X size={14} className='mr - 2' /> Revoke                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>                        <X size={14} className='mr - 2' /> Revoke;
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {key.scopes.map (scope => (<Badge;
                      key={scope}
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >;
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {key.scopes.map ((scope, ) => (<Badge;
                      key = {scope }
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800';
                      {scope}
                    </Badge>))}
                </div>;
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>Created: {format (new Date (key.created_at), 'MMM d, yyyy')}
                  </span>;
                    <PopoverTrigger className='flex items - center hover:text - zinc - 300'>;
                      <Clock size={12} className='mr - 1' />;
                      Last used:{' '}
                      {key.last_used_at;
                        ? format (new Date (key.last_used_at), 'MMM d, yyyy'): 'Never'}
                    </PopoverTrigger>;
                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;
                      <p className='text - sm mb - 1'>Last Used</p>;
                      <p className='text - xs text - zinc - 400'>;
                        {key.last_used_at;
                          ? format (new Date (key.last_used_at),'MMM d, yyyy HH:mm:ss')                          : 'This API key has never been used'}                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;
                      <p className='text - sm mb - 1'>Last Used</p>;
                      <p className='text - xs text - zinc - 400'>;
                        {key.last_used_at;
                          ? format (new Date (key.last_used_at), 'MMM d, yyyy HH:mm:ss')</p>;
                    </PopoverContent>;
                  </Popover>;
                  {key.expires_at && (<span>Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}
                    </span>                  )}                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}
                </div>;
              </div>)))}
        </div>;
      </CardContent>;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Keep your API keys secure. They have the same permissions as your;
          account.;
        </div>;
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>          Refresh;
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;
        <div className='text - xs text - zinc - 500'>;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm (null)}
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;This action will invalidate the existing key and generate a new;
              one. Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
<<<<<<< HEAD
          <AlertDialogFooter>;className='bg-blue-600 hover:bg-blue-700';
=======
          <AlertDialogFooter>;className="bg-blue-600 hover:bg-blue-700";
          <AlertDialogFooter>;className="bg-blue-600 hover:bg-blue-700;
>>>>>>> origin/resolved-merge-conflicts
      <AlertDialog;
        open={showRegenerateConfirm !== null}onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}>;
          <AlertDialogFooter>;

              className='bg-blue-600 hover:bg-blue-700'
      <AlertDialog 
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </CardFooter>      >

      >

        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will invalidate the existing key and generate a new one.
              Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className='bg-blue-600 hover:bg-blue-700'

<AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will invalidate the existing key and generate a new
              one. Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
              className='bg-blue-600 hover:bg-blue-700'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              Regenerate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Key Confirmation Dialog */}
<AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>

          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className='text-zinc-400'>
              This action will revoke the API key and it can no longer be used
              to access the API. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className='bg-red-600 hover:bg-red-700'
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>

      >;

        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
<<<<<<< HEAD
            <AlertDialogDescription className='text-zinc-400'>;
=======
            <AlertDialogDescription className="text-zinc-400">;
>>>>>>> origin/resolved-merge-conflicts

              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700>;
>>>>>>> origin/resolved-merge-conflicts
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
<<<<<<< HEAD
              className='bg-blue-600 hover:bg-blue-700';
=======
              className="bg-blue-600 hover:bg-blue-700";
>>>>>>> origin/resolved-merge-conflicts
<AlertDialog;
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;
              This action will invalidate the existing key and generate a new;
              one. Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() =>;
                showRegenerateConfirm &&;
                handleRegenerateKey(showRegenerateConfirm)}
<<<<<<< HEAD
              className='bg-blue-600 hover:bg-blue-700';
=======
              className=bg-blue-600 hover:bg-blue-700';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            >;

              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {/* Delete Key Confirmation Dialog */}
<AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD

=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      >;
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;

              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700>;
>>>>>>> origin/resolved-merge-conflicts
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() =>;
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)}
<<<<<<< HEAD
              className='bg-red-600 hover:bg-red-700';
=======
              className=bg-red-600 hover:bg-red-700';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >;

              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    </Card>;
  )}
                </div>;
              </div>;
            )))}
        </div>;
      </CardContent>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Keep your API keys secure. They have the same permissions as your account.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>;
          Refresh;
        </Button>;
      </CardFooter>;
      {/* Regenerate Key Confirmation Dialog */}
      <AlertDialog;
        open={showRegenerateConfirm !== null}onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}className='bg-blue-600 hover:bg-blue-700'            >;
            <AlertDialogAction;
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className='bg-blue-600 hover:bg-blue-700';>;
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;<AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showRegenerateConfirm &&;
                handleRegenerateKey (showRegenerateConfirm)}
              className='bg - blue - 600 hover:bg - blue - 700'            >;
            <AlertDialogAction;
              on_click = {() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm) }
              className='bg - blue - 600 hover:bg - blue - 700';
      >;
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;<AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>;
              Cancel;
            </AlertDialogCancel>;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className='bg-blue-600 hover:bg-blue-700';>;
              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;>;
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;<AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
                showDeleteConfirm && handleRevokeKey (showDeleteConfirm)}
              className='bg - red - 600 hover:bg - red - 700'            >;
            <AlertDialogAction;
              on_click = {() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm) }
              className='bg - red - 600 hover: bg - red - 700';
      >;
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className='text - zinc - 400'>;This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;>;
              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;)}

  );
}
<<<<<<< HEAD
;
=======
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
