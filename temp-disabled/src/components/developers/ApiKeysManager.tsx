
;

export function ApiKeysManager() {const {keys,loading,newApiKey,fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,import { format } from \"date-fns\",import { useApiKeys, type ApiKeyScope } from \"@/hooks/useApiKeys\",import { Button } from \"@/components/ui/button\",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from \"@/components/ui/card\",import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from \"@/components/ui/dialog\",import { Input } from \"@/components/ui/input\",import { Checkbox } from \"@/components/ui/checkbox\",import { Label } from \"@/components/ui/label\",import { Badge } from \"@/components/ui/badge\",import { Popover, PopoverContent, PopoverTrigger } from \"@/components/ui/popover\",import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from \"@/components/ui/dropdown-menu\",import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
import CodeBlock from './CodeBlock';

export function ApiKeysManager() {const {keys;
    loading;
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;}
    clearNewApiKey;}
  } = useApiKeys()const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null />(null),const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null />(null),// Create key form state;
"
const [keyName, setKeyName] = useState(\"\"),const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[] />([]),// Load keys on mount;
  useState(() => {fetchApiKeys()keys,loading,newApiKey;
    fetchApiKeys,createApiKey,regenerateApiKey,revokeApiKey,const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[] />([]),// Load keys on mount;}
  useState(() => {fetchApiKeys()if (keyName.trim() === '' || selectedScopes.length = == 0);}
  return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName('')setSelectedScopes([]) }

const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null;}
  useState(() => {fetchApiKeys()};"
  const handleCreateKey = async () => {if (keyName.trim() === \"\" || selectedScopes.length === 0);}"
  return;await createApiKey(keyName, selectedScopes)setShowCreateDialog(false)setKeyName(\"\")setSelectedScopes([])import { useState  } from 'react';
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



  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),
</ApiKeyScope>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>()
    null);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;
  >(null);
  // Create key form state;
  const [key_name, setKeyName] = useState ('');'
  const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([]);
  // Load keys on mount;
  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {'
    if (=== '' || selected_scopes.length === 0) return) {'
  $2;
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);'
    setKeyName ('');'
    setSelectedScopes ([]) }
  const handleRegenerateKey = async (key_id: string) => {
    await regenerateApiKey (key_id);
    setShowRegenerateConfirm (null);  useState (() => {
    fetchApiKeys ();
  });
  const handleCreateKey = async () => {'
    if (=== "" || selected_scopes.length === 0) return) {"
  $2;
}
    await createApiKey (key_name, selected_scopes);
    setShowCreateDialog (false);"
    setKeyName ("");"
    setSelectedScopes ([]);


const [key_name, setKeyName] = useState ('')const [selected_scopes, setSelectedScopes] = useState < ApiKeyScope[]>([])// Load keys on mount;
  useState (() => {fetchApiKeys ()})const handleCreateKey = async () => {if (=== '' || selected_scopes.length === 0);}
  return) {$2;}
}
    await createApiKey (key_name, selected_scopes)setShowCreateDialog (false)setKeyName ('')setSelectedScopes ([]) }

const handleRegenerateKey = async (key_id: string) => {await regenerateApiKey (key_id)setShowRegenerateConfirm (null;}
  useState (() => {fetchApiKeys ()};"
  const handleCreateKey = async () => {if (=== \"\" || selected_scopes.length === 0);}
  return) {$2;}
}"
    await createApiKey (key_name, selected_scopes)setShowCreateDialog (false)setKeyName (\"\")setSelectedScopes ([])}

const handleRegenerateKey = async (keyId: string) => {await regenerateApiKey(keyId)setShowRegenerateConfirm(null}
});
  const handleCreateKey  = null;

const handleRevokeKey = async (keyId: string) => {await revokeApiKey(keyId)setShowDeleteConfirm(null}
}
;
  const handleRegenerateKey = async (keyId: string,) => {await regenerateApiKey(keyId),setShowRegenerateConfirm(null)},await revokeApiKey(keyId),setShowDeleteConfirm(null)}
  // Scope options;

  const scope_options: {,
  value: ApiKeyScope;
    label: string;,
  description: string;
  }[] = [;

    {"
      value: 'jobs:read'','
  label: 'Read Jobs'''
      description: 'Access to view job listings''
    }
    {'
      value: 'jobs:write'','
  label: 'Write Jobs'''
      description: 'Create and manage job listings''
    }
    {'
      value: 'talent:read'','
  label: 'Read Talent'''
      description: 'Access to view talent profiles''
    }
    {'
      value: 'quotes:write'','
  label: 'Write Quotes'''
      description: 'Create and manage quotes''
    }
    {
'
    if (keyName.trim() === "" || selectedScopes.length === 0) return;"
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);"
    setKeyName("");"]
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
  
  // Scope options;
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = ["
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },''
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },''
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },''
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },']'
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }],'
  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => )
      prev.includes(scope) 
        ? prev.filter(s => s !== scope) 
        : [...prev, scope]

    )
  }'
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs" \\""
  -H "Authorization: Bearer ${key}" \\""
      value: 'webhooks:manage',''
      label: 'Manage Webhooks',''
      description: 'Set up and manage webhook endpoints','
    },
  ];
  // Toggle a scope selection;
  const toggle_scope = (scope: ApiKeyScope) =>: any {
  // TODO: Implement
}
    setSelectedScopes (prev =>;)
      prev.includes (scope) ? prev.filter (string => s !== scope) : [...prev, scope]);
  }'
  const getExampleCode = (key: string) =>: any {    return `curl -X GET "https://api.ziontechgroup.com / v1 / jobs" \\;""
  -H "Authorization: Bearer ${key}" \\;""
  -H "Content - Type: application / json"` }"
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
  // TODO: Implement
}"
    setKeyName ('');  -H "Content - Type: application / json"`;"
  }
  // Reset form when dialog closes;
  const handleDialogClose = () =>: any {
  // TODO: Implement
}"
    setKeyName ('');'
    setShowCreateDialog (false);
  }


const handleDialogClose = () =>: any {setKeyName ('')setShowCreateDialog (false)}setSelectedScopes(prev =>;
      prev.includes(scope) ? prev.filter(s => s !== scope) : [...prev, scope];
    )}


'
import { useState } from 'react';''
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';''
import { format } from 'date-fns';''
import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys';''
import { Button } from '@/components/ui/button';'
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';'
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger,;'
} from '@/components/ui/dialog';''
import { Input } from '@/components/ui/input';''
import { Checkbox } from '@/components/ui/checkbox';''
import { Label } from '@/components/ui/label';''
import { Badge } from '@/components/ui/badge';'
import {;
  Popover,;
  PopoverContent,;
  PopoverTrigger,;'
} from '@/components/ui/popover';'
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;'
} from '@/components/ui/dropdown-menu';'
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;'
} from '@/components/ui/alert-dialog';''
import CodeBlock from './CodeBlock';')
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
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;
    string | null;)
  >(null);

  // Create key form state;'
  const [keyName, setKeyName] = useState('');'
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
</ApiKeyScope>'
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;'
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className='text-xl flex items-center'>;'
</CardTitle>'
          <Key className='mr-2' size={20} /> API Keys;'
</Key>
        </CardTitle>;'
        <CardDescription className='text-zinc-400'>;'
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
        <div className='flex justify-between items-center mb-6'>;'
</div>'
          <p className='text-sm text-zinc-400'>;'
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
</Dialog>
            <DialogTrigger asChild>;
</DialogTrigger>'
              <Button variant='default'>Create New API Key</Button>;'
            </DialogTrigger>;'
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;'
</DialogContent>
              <DialogHeader>;
</DialogHeader>
                <DialogTitle>Create API Key</DialogTitle>;'
                <DialogDescription className='text-zinc-400'>;'
</DialogDescription>
                </DialogDescription>;
              </DialogHeader>;'
              <div className='space-y-4 py-4'>;'
</div>'
                <div className='space-y-2'>;'
</div>'
                  <Label htmlFor='key-name'>Key Name</Label>;'
                  <Input;'
                    id='key-name''
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}
</Input>
                </div>;'
                <div className='space-y-2'>;'
</div>
                  <Label>Scopes</Label>;'
                  <div className='grid gap-2 pt-2'>;'
</div>
                      <div;
                        key={scope && scope.value}'
                        className='flex items-center space-x-2'>;'
</div>
                        <Checkbox;'
                          id={scope && scope.value}                          checked={selectedScopes && selectedScopes.includes(scope && scope.value)}                  <div className="grid gap-2 pt-2">;"
</Checkbox>"
                      <div key={scope && scope.value} className="flex items-center space-x-2">;"
</div>
                        <Checkbox;
                          id={scope && scope.value} 
                          onCheckedChange={() => toggleScope(scope && scope.value)}
</Checkbox>
                        <Label;
                          htmlFor={scope && scope.value}"
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;'
</Label>'
                          <span className='block text-xs text-zinc-400 mt-1'>;'
</span>'
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";""
                          <span className="block text-xs text-zinc-400 mt-1">{scope && scope.description}</span>;"
                      </div>;
                        <Checkbox;
                          id={scope.value} 
                          checked={selectedScopes.includes(scope.value)}
  }
  const handleRegenerateKey = async (keyId: string) => {
</Checkbox>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
</string>
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null),
</string>
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),
</ApiKeyScope>
                  <Label>Scopes</Label>"
                  <div className="grid gap-2 pt-2">"
</div>"
                      <div key={scope.value} className="flex items-center space-x-2">"
</div>
                        <Checkbox;
                          id={scope.value} 

                          onCheckedChange={() => toggleScope(scope.value)}
</Checkbox>
                        <Label;
                          htmlFor={scope.value}


"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
</Label>"
                          <span className="block text-xs text-zinc-400 mt-1">{scope.description}</span>"
                        </Label>



                      </div>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>"
                <Button variant='outline' onClick={handleDialogClose}>;'
</Button>
                </Button>;
                <Button;
                  onClick={handleCreateKey}
                  disabled={'
                    keyName && keyName.trim() === '' || selectedScopes && selectedScopes.length === 0;'
                  }>                  Create Key              ;
</Button>
              <DialogFooter>;
</DialogFooter>'
                <Button variant="outline" onClick={handleDialogClose}>Cancel</Button>;""
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === "" || selectedScopes && selectedScopes.length === 0}>;"
</Button>"
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className='text - xl flex items - center'>;'
</CardTitle>'
          <Key className='mr - 2' size={20} /> API Keys;'
</Key>
        </CardTitle>;'
        <CardDescription className='text - zinc - 400'>;'
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
        <div className='flex justify - between items - center mb - 6'>;'
</div>'
          <p className='text - sm text - zinc - 400'>;'
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
</Dialog>
            <DialogTrigger as_child>;
</DialogTrigger>'
              <Button variant='default'>Create New API Key</Button>;'
            </DialogTrigger>;'
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</DialogContent>
              <DialogHeader>;
</DialogHeader>
                <DialogTitle > Create API Key</DialogTitle>;'
                <DialogDescription className='text - zinc - 400'>;'
</DialogDescription>
                </DialogDescription>;
              </DialogHeader>;'
              <div className='space - y-4 py - 4'>;'
</div>'
                <div className='space - y-2'>;'
</div>'
                  <Label html_for='key - name'>Key Name</Label>;'
                  <Input;'
                    id='key - name';'
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
</Input>
                </div>;'
                <div className='space - y-2'>;'
</div>
                  <Label > Scopes</Label>;'
                  <div className='grid gap - 2 pt - 2'>;'
</div>
                      <div;
                        key={scope.value}'
                        className='flex items - center space - x-2';'
                      >;
</div>
                        <Checkbox;'
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className="grid gap - 2 pt - 2">;"
</Checkbox>"
                      <div key={scope.value} className="flex items - center space - x-2">;"
</div>
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
</Checkbox>
                        <Label;
                          html_for={scope.value}"
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';'
                        >;
</Label>'
                          <span className='block text - xs text - zinc - 400 mt - 1'>;'
</span>'
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";""
                          <span className="block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;"
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>"
                <Button variant='outline' on_click={handleDialogClose}>;'
</Button>
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={'
                    key_name.trim () === '' || selected_scopes.length === 0;'
                  }
                >                  Create Key;
</Button>
              <DialogFooter>;
</DialogFooter>'
                <Button variant="outline" on_click={handleDialogClose}>Cancel</Button>;""
                <Button on_click={handleCreateKey} disabled={key_name.trim () === "" || selected_scopes.length === 0}>;"
</Button>

                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;

        </div>;"
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">;"
</div>"
            <div className="flex justify-between items-start mb-2">;"
</div>"
              <span className="font-medium flex items-center">;"
</span>"
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;"
</Check>
              </span>;
              <Button;
        {/* New API Key Alert */}
        {newApiKey && ("
          <div className="mb-6 p-4 border border-green-800 bg-green-900/30 rounded-md">"
</Button>"
            <div className="flex justify-between items-start mb-2">"
</div>"
              <span className="font-medium flex items-center">"
</span>"
                <Check size={16} className="mr-2 text-green-500" /> New API Key Generated;"
</Check>
              </span>
              <Button;"
                variant="ghost"""
                size="icon"""
                className="h-6 w-6""
                onClick={clearNewApiKey}


        {/* API Keys List */}"
        <div className="space - y-4">;"
</Button>)"
            <div className="text - center py - 8 text - zinc - 500">Loading API keys...</div>) : keys.length === 0 ? (""
            <div className="text - center py - 8 text - zinc - 500">;"
</div>"
              <Key className="mx - auto mb - 2 opacity - 30" size={24} />;"
</Key>
              <p > No API keys found.</p>;"
              <p className="text - sm mt - 1">Create one to access the Zion APIs.</p>;")
            </div>) : ("
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
</div>"
                <div className="flex items - center justify - between">;"
</div>"
                  <div className="flex items - center">;"
</div>
                    <div>;
</div>"
                      <h3 className="font - medium">{key.name}</h3>;""
                      <div className="flex items - center space - x-2 mt - 1">;"
</div>"
                        <span className="text - sm text - zinc - 400 font - mono">{key.key_prefix}••••••••••••</span>;"
                <X size={14} />
</X>
              </Button>
            </div>
"
            <p className="text-sm text-zinc-300 mb-2">"
</p>
            </p>"
            <CodeBlock code={newApiKey} className="mb-3" />"
</CodeBlock>"
            <div className="text-sm text-zinc-400">"
</div>"
              <span className="font-medium">Example usage:</span>"
            </div>)"
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />"
</CodeBlock>
          </div>"
        <div className='space-y-4'>'
</div>'
        <div className="space-y-4">"
</div>"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>""
            <div className="text-center py-8 text-zinc-500">"
</div>"
              <Key className="mx-auto mb-2 opacity-30" size={24} />"
</Key>
              <p>No API keys found.</p>"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>"
            </div>"
              <div key={key.id} className="p-4 border border-zinc-800 rounded-lg">"
</div>"
                <div className="flex items-center justify-between">"
</div>"
                  <div className="flex items-center">"
</div>
                    <div>
</div>"
                      <h3 className="font-medium">{key.name}</h3>""
                      <div className="flex items-center space-x-2 mt-1">"
</div>"
                        <span className="text-sm text-zinc-400 font-mono">{key.key_prefix}••••••••••••</span>""
                          <Badge className="bg-green-700 text-white">Active</Badge>""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>"
                      </div>
                    </div>
                  </div>

                      </div>;
                    </div>;
                  </div>;"
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;"
            </p>;"
            <CodeBlock code={newApiKey} className="mb-3" />;"
</CodeBlock>"
            <div className="text-sm text-zinc-400">;"
</div>"
              <span className="font-medium">Example usage:</span>;"
            </div>;"
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />;"
</CodeBlock>
          </div>;"
        <div className="space-y-4">;"
</div>"
            <div className="text-center py-8 text-zinc-500">Loading API keys...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
</div>"
              <Key className="mx-auto mb-2 opacity-30" size={24} />;"
</Key>
              <p>No API keys found.</p>;"
              <p className="text-sm mt-1">Create one to access the Zion APIs.</p>;"
            </div>;"
              <div key={key && key.id} className="p-4 border border-zinc-800 rounded-lg">;"
</div>"
                <div className="flex items-center justify-between">;"
</div>"
                  <div className="flex items-center">;"
</div>
                    <div>;
</div>"
                      <h3 className="font-medium">{key && key.name}</h3>;""
                      <div className="flex items-center space-x-2 mt-1">;"
</div>"
                        <span className="text-sm text-zinc-400 font-mono">{key && key.key_prefix}••••••••••••</span>;""
                          <Badge className="bg-green-700 text-white">Active</Badge>;""
                          <Badge variant="secondary" className="bg-red-900 text-white border-red-800">Revoked</Badge>;"
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
</DropdownMenu>
                    <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>

                      <Button;"
                        variant='ghost'''
                        size='icon'''
                        aria-label='More options'>;'
</Button>
                        <MoreVertical size={16} />;
</MoreVertical>
                      </Button>;
                    </DropdownMenuTrigger>;
                    <DropdownMenuContent;'
                      align='end'''
                      className='bg-zinc-900 border-zinc-800 text-white'>;'
</DropdownMenuContent>
                      <DropdownMenuItem;
                        onClick={() => setShowRegenerateConfirm(key && key.id)}
</DropdownMenuItem>'
                        <RefreshCw size={14} className='mr-2' /> Regenerate;'
</RefreshCw>
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                
'
                <div className="mt-3 flex flex-wrap gap-2">"
</div>"
                        <X size={14} className='mr-2' /> Revoke                      </DropdownMenuItem>;'
</X>
                    </DropdownMenuContent>;
                  </DropdownMenu>;'
                </div>                        <X size={14} className="mr-2" /> Revoke;"
</X>
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;"
                <div className='mt-3 flex flex-wrap gap-2'>;'
</div>
                    <Badge;
                      key={scope}'
                      variant='secondary'''
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                ;'
</Badge>'
                <div className="mt-3 flex flex-wrap gap-2">;"
</div>
                    <Badge;
                      key = {scope,}"
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"""
                <div className="mt-3 flex flex-wrap gap-2">"
</Badge>
                    <Badge;
                      key={scope} "
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                    >
</Badge>
                    </Badge>;
                    </Badge>;
                </div>;"
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;'
</div>
                  <span>;
</span>
                  </span>;'
                    <PopoverTrigger className='flex items-center hover:text-zinc-300'>;'
</PopoverTrigger>'
                      <Clock size={12} className='mr-1' />;'
</Clock>
                </div>
                '
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
</div>"
                  <span>Created: {format(new Date(key.created_at), 'MMM d, yyyy')}</span>'
                  <Popover>
</Popover>'
                    <PopoverTrigger className="flex items-center hover:text-zinc-300">"
</PopoverTrigger>"
                      <Clock size={12} className="mr-1" />"
</Clock>
                    </PopoverTrigger>"
                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">"
</PopoverContent>"
                      <p className="text-sm mb-1">Last Used</p>""
                      <p className="text-xs text-zinc-400">"
</p>
                      </p>
                    </PopoverContent>
                  </Popover>
                    </PopoverTrigger>;"
                    <PopoverContent className='bg-zinc-900 border-zinc-800 text-white w-64 p-3'>;'
</PopoverContent>'
                      <p className='text-sm mb-1'>Last Used</p>;''
                      <p className='text-xs text-zinc-400'>;'
</p>'
                            )                          : 'This API key has never been used'}                    <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">;"
</PopoverContent>"
                      <p className="text-sm mb-1">Last Used</p>;""
                      <p className="text-xs text-zinc-400">;"
</p>
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                    <span>;
</span>"
                    </span>                  )}                    <span>Expires: {format(new Date(key && key.expires_at), 'MMM d, yyyy')}</span>;'
                </div>;
              </div>;'
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
</CardFooter>"
        <div className="text-xs text-zinc-500">"
</div>
        </div>"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>"
</Button>
        </Button>
      </CardFooter>
        </div>;
      </CardContent>;"
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;'
</CardFooter>'
        <div className='text-xs text-zinc-500'>;'
</div>
        </div>;'
        <Button variant='outline' size='sm' onClick={fetchApiKeys}>          Refresh      ;'
</Button>'
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;"
</CardFooter>"
        <div className="text-xs text-zinc-500">;"
</div>
        </div>;"
        <Button variant="outline" size="sm" onClick={fetchApiKeys}>;"
</Button>
        </Button>;
      </CardFooter>;"
                          <Badge className="bg - green - 700 text - white">Active</Badge>) : (")"
                          <Badge variant="secondary" className="bg - red - 900 text - white border - red - 800">Revoked</Badge>)}"
                      </div>;
                    </div>;
                  </div>;
                  <DropdownMenu>;
</DropdownMenu>
                    <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>
                      <Button;"
                        variant='ghost';''
                        size='icon';''
                        aria - label='More options';'
                      >;
</Button>

                        <MoreVertical size={16} />;
</MoreVertical>
                      </Button>;
                    </DropdownMenuTrigger>;

                    <DropdownMenuContent;'
                      align='end';''
                      className='bg - zinc - 900 border - zinc - 800 text - white';'
                    >;
</DropdownMenuContent>
                      <DropdownMenuItem;
                        on_click={() => setShowRegenerateConfirm (key.id)}
</DropdownMenuItem>'
                        <RefreshCw size={14} className='mr - 2' /> Regenerate;'
</RefreshCw>
                      </DropdownMenuItem>;
                      <DropdownMenuItem;
                        on_click={() => setShowDeleteConfirm (key.id)}
</DropdownMenuItem>'
                        <X size={14} className='mr - 2' /> Revoke                      </DropdownMenuItem>;'
</X>
                    </DropdownMenuContent>;
                  </DropdownMenu>;'
                </div>                        <X size={14} className="mr - 2" /> Revoke;"
</X>
                      </DropdownMenuItem>;
                    </DropdownMenuContent>;
                  </DropdownMenu>;
                </div>;"
                <div className='mt - 3 flex flex - wrap gap - 2'>;'
</div>
                    <Badge;
                      key={scope}'
                      variant='secondary';''
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >;'
</Badge>'
                <div className="mt - 3 flex flex - wrap gap - 2">;"
</div>
                    <Badge;
                      key = {scope, }"
                      variant="secondary";""
                      className="bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800";"
                      {scope}
                    </Badge>))}
                </div>;"
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;'
</div>
                  <span>;
</span>
                  </span>;'
                    <PopoverTrigger className='flex items - center hover:text - zinc - 300'>;'
</PopoverTrigger>'
                      <Clock size={12} className='mr - 1' />;'
</Clock>
                    </PopoverTrigger>;'
                    <PopoverContent className='bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3'>;'
</PopoverContent>'
                      <p className='text - sm mb - 1'>Last Used</p>;''
                      <p className='text - xs text - zinc - 400'>;'
</p>'
                              'MMM d, yyyy HH:mm:ss')                          : 'This API key has never been used'}                    <PopoverContent className="bg - zinc - 900 border - zinc - 800 text - white w - 64 p - 3">;"
</PopoverContent>"
                      <p className="text - sm mb - 1">Last Used</p>;""
                      <p className="text - xs text - zinc - 400">;"
</p>
                      </p>;
                    </PopoverContent>;
                  </Popover>;
                    <span>;
</span>"
                    </span>                  )}                    <span > Expires: {format (new Date (key.expires_at), 'MMM d, yyyy')}</span>)}'
                </div>;
              </div>)))}
        </div>;
      </CardContent>;'
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;'
</CardFooter>'
        <div className='text - xs text - zinc - 500'>;'
</div>
        </div>;'
        <Button variant='outline' size='sm' on_click={fetchApiKeys}>          Refresh;'
</Button>'
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
</CardFooter>"
        <div className="text - xs text - zinc - 500">;"
</div>
        </div>;"
        <Button variant="outline" size="sm" on_click={fetchApiKeys}>;"
</Button>

        </Button>;
      </CardFooter>;
      <AlertDialog;
        open={showRegenerateConfirm !== null}

        onOpenChange={open => !open && setShowRegenerateConfirm (null)}
</AlertDialog>"
        <AlertDialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;'
            <AlertDialogDescription className='text - zinc - 400'>;'
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>
      <AlertDialog;
        open={showRegenerateConfirm !== null} 
        onOpenChange={(open) => !open && setShowRegenerateConfirm(null)}
</AlertDialog>'
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</AlertDialogContent>
          <AlertDialogHeader>
</AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">"
</AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"
</AlertDialogCancel>
            </AlertDialogCancel>
            <AlertDialogAction;
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
</AlertDialogAction>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
            <AlertDialogAction;
              onClick = {() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm),}
</AlertDialogAction>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;"
</AlertDialogDescription>"
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;'
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
</AlertDialogAction>
            <AlertDialogAction;
              on_click = {() => showRegenerateConfirm && handleRegenerateKey (showRegenerateConfirm), }
</AlertDialogAction>'
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle > Regenerate API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text - zinc - 400">;"
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;"
</AlertDialogDescription>"
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;'
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
</AlertDialogAction>
            <AlertDialogAction;
              on_click = {() => showDeleteConfirm && handleRevokeKey (showDeleteConfirm), }
</AlertDialogAction>'
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle > Revoke API Key?</AlertDialogTitle>;"
            <AlertDialogDescription className="text - zinc - 400">;"
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;"

