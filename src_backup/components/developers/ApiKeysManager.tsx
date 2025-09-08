

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

import { format } from date-fns",
import { useApiKeys, type ApiKeyScope } from "@/hooks/useApiKeys,

import { Button } from @/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card,
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from @/components/ui/dialog",
import { Input } from "@/components/ui/input,
import { Checkbox } from @/components/ui/checkbox",
import { Label } from "@/components/ui/label,
import { Badge } from @/components/ui/badge",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover,
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from @/components/ui/dropdown-menu",
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog;
import CodeBlock from ./CodeBlock";
export function ApiKeysManager() {
    keys;
    loading;
    newApiKey;
    fetchApiKeys;
    createApiKey;
    regenerateApiKey;
    revokeApiKey;
    clearNewApiKey
  } = useApiKeys();
  
origin/cursor/automate-test-improve-and-merge-code-2533
  // Create key form state
  const [keyName, setKeyName] = useState("),
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]),

  // Load keys on mount
  useState(() => {



    await createApiKey(keyName, selectedScopes)

    setShowCreateDialog(false)
    setKeyName(')
    setSelectedScopes([]) }
  const handleRegenerateKey = async (keyId: string) => {
    await regenerateApiKey(keyId)
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys()
  })
  const handleCreateKey = async () => {

    await createApiKey(keyName, selectedScopes)
    setShowCreateDialog(false)
    setKeyName(")
    setSelectedScopes([])


import { useState } from 'react';
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from 'lucide-react';
import { format } from 'date - fns';
import { useApiKeys, type ApiKeyScope } from '@/hooks / useApiKeys';
import { Button } from '@/components / ui / button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

  CardTitle,
} from '@/components / ui / card';

  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

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

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,

  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import CodeBlock from './CodeBlock';

export /**
 * ApiKeysManager - Function description
 */
function ApiKeysManager() {
    keys,
    loading,

    newApiKey,
    fetchApiKeys, 
    createApiKey, 
    regenerateApiKey, 
    revokeApiKey,



    {

      value: 'jobs:read
      label: Read Jobs'
      description: 'Access to view job listings
    }
    {
      value: jobs:write'
      label: 'Write Jobs
      description: Create and manage job listings'
    }
    {
      value: 'talent:read
      label: Read Talent'
      description: 'Access to view talent profiles
    }
    {
      value: quotes:write'
      label: 'Write Quotes
      description: Create and manage quotes'
    }

    {

    if (keyName.trim() === " || selectedScopes.length === 0) return;
    
    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName(");
    setSelectedScopes([])
  }

    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null)
  }
  
    await revokeApiKey(keyId);
    setShowDeleteConfirm(null)
  }
  
  // Scope options
  const scopeOptions: { value: ApiKeyScope, label: string, description: string }[] = [
    { value: 'jobs:read, label: Read Jobs', description: 'Access to view job listings },
    { value: jobs:write', label: 'Write Jobs, description: Create and manage job listings' },
    { value: 'talent:read, label: Read Talent', description: 'Access to view talent profiles },
    { value: quotes:write', label: 'Write Quotes, description: Create and manage quotes' },
    { value: 'webhooks:manage, label: Manage Webhooks', description: 'Set up and manage webhook endpoints }],
  // Toggle a scope selection



    )
  }
  const getExampleCode = (key: string) => {    return `curl -X GET "https://api.ziontechgroup.com/v1/jobs \\
  -H Authorization: Bearer ${key}" \\

export function ApiKeysManager() {
    keys,
    loading,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    regenerateApiKey,
    revokeApiKey,

    clearNewApiKey} = useApiKeys();

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;


    string | null;
  >(null);

  // Create key form state;
  const [keyName, setKeyName] = useState(');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);

  // Load keys on mount;
  useState(() => {
    fetchApiKeys();
  });
    if (keyName && keyName.trim() === ' || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
    setKeyName(');
    setSelectedScopes([]);  }

    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);  useState(() => {
    fetchApiKeys();
  });

    if (keyName && keyName.trim() === " || selectedScopes && selectedScopes.length === 0) return;

    await createApiKey(keyName, selectedScopes);
    setShowCreateDialog(false);
  -H Content-Type: application/json"`
  }

  // Reset form when dialog closes
    setKeyName(");
    setSelectedScopes([]);
  }

    await regenerateApiKey(keyId);
    setShowRegenerateConfirm(null);

    await revokeApiKey(keyId);
    setShowDeleteConfirm(null);
  }

    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null);
  },

  const handleRevokeKey = async (keyId: string,) => {
    await revokeApiKey(keyId),
    setShowDeleteConfirm(null);
  },

  // Scope options;
    value: ApiKeyScope;
    label: string;
    description: string;
  }[] = [;
    {
      value: jobs:read',
      label: 'Read Jobs,
      description: Access to view job listings'},
    {
      value: 'jobs:write,
      label: Write Jobs',
      description: 'Create and manage job listings},
    {
      value: talent:read',
      label: 'Read Talent,
      description: Access to view talent profiles'},
    {
      value: 'quotes:write,
      label: Write Quotes',
      description: 'Create and manage quotes},
    {
      value: webhooks:manage',
      label: 'Manage Webhooks,
      description: Set up and manage webhook endpoints'}];

  // Toggle a scope selection;
  const toggleScope = (scope: ApiKeyScope) => {
    setSelectedScopes(prev =>;
      prev && prev.includes(scope) ? prev && prev.filter(s => s !== scope) : [...prev, scope];
    );
  }

  const getExampleCode = (key: string) => {    return `curl -X GET https://api && api.ziontechgroup.com/v1/jobs" \\;
  -H "Authorization: Bearer ${key} \\;
  -H Content-Type: application/json"`;  }

  // Reset form when dialog closes;
    setKeyName(');  -H "Content-Type: application/json`;
  }

  // Reset form when dialog closes;
    setKeyName(');
    setShowCreateDialog(false);
  }

  return (
    <Card className='bg-zinc-900 border-zinc-800 text-white>;
      <CardHeader>;
        <CardTitle className=text-xl flex items-center'>;
          <Key className='mr-2 size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className=text-zinc-400'>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;
        <div className='flex justify-between items-center mb-6>;
          <p className=text-sm text-zinc-400'>;
            You have {keys && keys.length} API {keys && keys.length === 1 ? 'key : keys'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant='default>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className=bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create API Key</DialogTitle>;
                <DialogDescription className='text-zinc-400>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;

              <div className=space-y-4 py-4'>;
                <div className='space-y-2>;
                  <Label htmlFor=key-name'>Key Name</Label>;
                  <Input
                    id='key-name
                    value={keyName}
                    onChange={e => setKeyName(e && e.target.value)}
                    placeholder=e && e.g. Production API Key';
                    className='bg-zinc-800 border-zinc-700                  />;
                </div>;

                <div className=space-y-2'>;
                  <Label>Scopes</Label>;
                  <div className='grid gap-2 pt-2>;
                    {scopeOptions && scopeOptions.map(scope => (;
                      <div
                        key={scope && scope.value}
                        className=flex items-center space-x-2'>;
                        <Checkbox

  }),
  
    if (keyName.trim() === " || selectedScopes.length === 0) return,
    
    await createApiKey(keyName, selectedScopes),
    setShowCreateDialog(false),
    setKeyName("),

    setSelectedScopes([])
  },


    await regenerateApiKey(keyId),
    setShowRegenerateConfirm(null)
  },


    await revokeApiKey(keyId),
    setShowDeleteConfirm(null)
  }
  // Scope options

                  <Label>Scopes</Label>
                  <div className=grid gap-2 pt-2">
                    {scopeOptions.map((scope) => (
                      <div key={scope.value} className="flex items-center space-x-2>



                        <Checkbox 
                          id={scope.value} 

                          onCheckedChange={() => toggleScope(scope.value)}
                        />;
                        <Label;
                          htmlFor={scope.value}

                          className=text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                        >
                          {scope.label}
                          <span className="block text-xs text-zinc-400 mt-1>{scope.description}</span>
                        </Label>

                      </div>
                    ))}



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
                <Button variant=outline' onClick={handleDialogClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName.trim() === ' |selectedScopes.length === 0
                  }
                >


                  Create Key

                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>



                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
                <Button variant=outline' onClick={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button
                  onClick={handleCreateKey}
                  disabled={
                    keyName && keyName.trim() === ' || selectedScopes && selectedScopes.length === 0
                  }>                  Create Key              ;
              <DialogFooter>;
                <Button variant="outline onClick={handleDialogClose}>Cancel</Button>;
                <Button onClick={handleCreateKey} disabled={keyName && keyName.trim() === " || selectedScopes && selectedScopes.length === 0}>;
    <Card className=bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;
        <CardTitle className='text - xl flex items - center>;
          <Key className=mr - 2' size={20} /> API Keys;
        </CardTitle>;
        <CardDescription className='text - zinc - 400>;
          Create and manage API keys for accessing the Zion APIs.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className=flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400>;
            You have {keys.length} API {keys.length === 1 ? key' : 'keys}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;
              <Button variant=default'>Create New API Key</Button>;
            </DialogTrigger>;
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white>;
              <DialogHeader>;
                <DialogTitle > Create API Key</DialogTitle>;
                <DialogDescription className=text - zinc - 400'>;
                  Generate a new API key for accessing the Zion APIs.;
                </DialogDescription>;
              </DialogHeader>;
              <div className='space - y-4 py - 4>;
                <div className=space - y-2'>;
                  <Label html_for='key - name>Key Name</Label>;
                  <Input;
                    id=key - name';
                    value={key_name}
                    on_change={e => setKeyName (e.target.value)}
                    placeholder='e.g. Production API Key;
                    className=bg - zinc - 800 border - zinc - 700'                  />;
                </div>;
                <div className='space - y-2>;
                  <Label > Scopes</Label>;
                  <div className=grid gap - 2 pt - 2'>;
                    {scope_options.map (scope => (
                      <div;
                        key={scope.value}
                        className='flex items - center space - x-2;
                      >;
                        <Checkbox;
                          id={scope.value}                          checked={selected_scopes.includes (scope.value)}                  <div className="grid gap - 2 pt - 2>;
                    {scope_options.map ((scope, ) => (
                      <div key={scope.value} className=flex items - center space - x-2">;
                        <Checkbox;
                          id={scope.value}
                          onCheckedChange={() => toggle_scope (scope.value)}
                        />;
                        <Label;
                          html_for={scope.value}
                          className=text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {scope.label}
                          <span className='block text - xs text - zinc - 400 mt - 1>;
                            {scope.description}
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70;
                        >;
                          {scope.label}
                          <span className=block text - xs text - zinc - 400 mt - 1">{scope.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant=outline' on_click={handleDialogClose}>;
                  Cancel;
                </Button>;
                <Button;
                  on_click={handleCreateKey}
                  disabled={
                    key_name.trim () === ' || selected_scopes.length === 0;
                  }
                >                  Create Key;
              <DialogFooter>;
                <Button variant="outline on_click={handleDialogClose}>Cancel</Button>;
                <Button on_click={handleCreateKey} disabled={key_name.trim () === " || selected_scopes.length === 0}>;

                </Button>;

              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        {/* New API Key Alert */}

{/* New API Key Alert */}
origin/cursor/automate-test-improve-and-merge-code-2533
        {newApiKey && (


        {/* API Keys List */}
        <div className=space-y-4">;
          {loading ? (
            <div className="text - center py - 8 text - zinc-500>Loading API keys...</div>) : keys.length === 0 ? (
            <div className=text - center py - 8 text - zinc-500">;
              <Key className="mx - auto mb - 2 opacity-30 size={24} />;
              <p > No API keys found.</p>;
              <p className=text - sm mt-1">Create one to access the Zion APIs.</p>;
            </div>) : (
            keys.map ((key) => (
              <div key={key.id} className="p - 4 border border - zinc - 800 rounded-lg>;
                <div className=flex items - center justify-between">;
                  <div className="flex items-center>;
                    <div>;
                      <h3 className=font-medium">{key.name}</h3>;
                      <div className="flex items - center space - x-2 mt-1>;
                        <span className=text - sm text - zinc - 400 font-mono">{key.key_prefix}••••••••••••</span>;
                        {key.is_active ? (

              >
                <X size={14} />
              </Button>
            </div>



              This key will only be displayed once. Please save it securely.

            </p>
            <CodeBlock code={newApiKey} className="mb-3 />
            <div className=text-sm text-zinc-400">
              <span className="font-medium>Example usage:</span>
            </div>
            <CodeBlock code={getExampleCode(newApiKey)} language=bash" />
          </div>
        )}

        {/* API Keys List */}
        <div className='space-y-4>
;
        {/* API Keys List */}
        <div className="space-y-4>

          {loading ? (
            <div className=text-center py-8 text-zinc-500">Loading API keys...</div>
          ) : keys.length === 0 ? (
            <div className="text-center py-8 text-zinc-500>
              <Key className=mx-auto mb-2 opacity-30" size={24} />
              <p>No API keys found.</p>
              <p className="text-sm mt-1>Create one to access the Zion APIs.</p>
            </div>
          ) : (



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




                      <DropdownMenuItem

                      <DropdownMenuItem

                        onClick={() => setShowDeleteConfirm(key.id)}
                        className=cursor-pointer text-red-500'
                        disabled={!key.is_active}


                      >
                        <X size={14} className=mr-2' /> Revoke

                    <Badge
                      key = {scope}
                      variant="secondary
                      className=bg-zinc-800 text-zinc-300 hover:bg-zinc-800"



                  {key.scopes.map(scope => (
                    <Badge
                      key={scope}
                      variant=secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
                      {scope}
                    </Badge>
                  ))}
                </div>
<div className=mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
                    Created: {format(new Date(key.created_at), 'MMM d, yyyy)}
                  </span>
                    <PopoverTrigger className=flex items-center hover:text-zinc-300'>
                      <Clock size={12} className='mr-1 />
                      Last used:{ '}
                      {key.last_used_at
                        ? format(new Date(key.last_used_at), 'MMM d, yyyy)
                        : Never'}

                <div className="mt-3 flex flex-wrap gap-2>
                  {key.scopes.map((scope) => (
                    <Badge 
                      key={scope} 
                      variant=secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800
                    >


                      {scope}
                    </Badge>;
                  ))}

                      <p className=text-sm mb-1">Last Used</p>
                      <p className="text-xs text-zinc-400>
                        {key.last_used_at
                          ? format(new Date(key.last_used_at), 'MMM d, yyyy HH:mm:ss)

                    <PopoverContent className=bg-zinc-900 border-zinc-800 text-white w-64 p-3'>
                      <p className='text-sm mb-1>Last Used</p>
                      <p className=text-xs text-zinc-400'>
                        {key.last_used_at
                          ? format(
                              new Date(key.last_used_at)
                              'MMM d, yyyy HH:mm:ss
                            )
                          : This API key has never been used'}

                      </p>
                    </PopoverContent>
                  </Popover>
                  {key.expires_at && (



                  )}
                </div>;
              </div>;
            ));
          )}



      <CardFooter className="justify-between border-t border-zinc-800 py-4>

        <div className=text-xs text-zinc-500">
          Keep your API keys secure. They have the same permissions as your account.
        </div>
        <Button variant="outline size=sm" onClick={fetchApiKeys}>

        </div>
      </CardContent>
<CardFooter className=justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500>
          Keep your API keys secure. They have the same permissions as your
          account.
        </div>
        <Button variant=outline' size='sm onClick={fetchApiKeys}>
          Refresh

          Refresh

        </Button>


      </CardFooter>      >

      >

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className=text-zinc-400">
              This action will invalidate the existing key and generate a new one.
              Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => showRegenerateConfirm && handleRegenerateKey(showRegenerateConfirm)}
              className=bg-blue-600 hover:bg-blue-700"

<AlertDialog
        open={showRegenerateConfirm !== null}
        onOpenChange={open => !open && setShowRegenerateConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white>
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>
            <AlertDialogDescription className=text-zinc-400'>
              This action will invalidate the existing key and generate a new
              one. Any applications using this key will need to be updated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                showRegenerateConfirm &&
                handleRegenerateKey(showRegenerateConfirm)
              }
              className=bg-blue-600 hover:bg-blue-700'
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
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white>

          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>
            <AlertDialogDescription className=text-zinc-400'>
              This action will revoke the API key and it can no longer be used
              to access the API. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
origin/cursor/automate-test-improve-and-merge-code-2533
              onClick={() =>
                showDeleteConfirm && handleRevokeKey(showDeleteConfirm)
              }
              className=bg-red-600 hover:bg-red-700'
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>

      >;

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;

              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;



              This action will invalidate the existing key and generate a new one.;
              Any applications using this key will need to be updated.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;



            >;

              Regenerate;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;



              This action will revoke the API key and it can no longer be used;
              to access the API. This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;



      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Revoke API Key?</AlertDialogTitle>;
            <AlertDialogDescription className=text-zinc-400">;

              This action will revoke the API key and it can no longer be used to access the API.;
              This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;



            >;

              Revoke;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;



