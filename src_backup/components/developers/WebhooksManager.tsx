loading,

    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,

  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

    fetchWebhooks()
'
import { useState, useEffect } from 'react';'
import { format } from 'date - fns';

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

;
loading,testResult,fetchWebhooks,createWebhook,toggleWebhook,deleteWebhook,testWebhook,const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),// Load webhooks on mount;
  useEffect(() => {fetchWebhooks()import { useState, useEffect  } from 'react';
import { format  } from 'date - fns';
import { useState, useEffect } from "react",import { format } from "date-fns",import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X  } from 'lucide-react';
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",import { Input } from "@/components/ui/input",import { Checkbox } from "@/components/ui/checkbox",import { Label } from "@/components/ui/label",import { Badge } from "@/components/ui/badge",import { Switch } from "@/components/ui/switch",import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",import { ScrollArea  } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';
export function WebhooksManager() {const {webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
    clearTestResult
  } = useWebhooks();
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
origin/cursor/automate-test-improve-and-merge-code-2533
import {
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Globe,
  MoreVertical,
  PlayCircle,
  Plus,
  RefreshCw,
<<<<<<< HEAD


=======
<<<<<<< HEAD
  Webhook,
} from 'lucide-react'
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks'
import { Button } from '@/components/ui/button'
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  Webhook,
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Webhook} from 'lucide-react
import { useWebhooks, type WebhookEventType } from @/hooks/useWebhooks'
import { Button } from '@/components/ui/button
>>>>>>> origin/resolved-merge-conflicts
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
  AlertDialog
  AlertDialogAction
  AlertDialogCancel
  AlertDialogContent
  AlertDialogDescription
  AlertDialogFooter
  AlertDialogHeader
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export function WebhooksManager() {
<<<<<<< HEAD
  X,;
} from 'lucide-react';
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';
=======
  X} from 'lucide-react;
import { useWebhooks, type WebhookEventType } from @/hooks/useWebhooks';
=======
  Webhook,
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from '@/components / ui / button';
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,'
} from '@/components / ui / card';
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,'
} from '@/components / ui / dialog';'
import { Input } from '@/components / ui / input';'
import { Checkbox } from '@/components / ui / checkbox';'
import { Label } from '@/components / ui / label';'
import { Badge } from '@/components / ui / badge';'
import { Switch } from '@/components / ui / switch';
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,'
} from '@/components / ui / dropdown - menu';
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,'
} from '@/components / ui / alert - dialog';'
import { ScrollArea } from '@/components / ui / scroll - area';
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,'
} from '@/components / ui / select';'
import { Button  } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger  } from '@/components / ui / dialog';'
import { Input  } from '@/components / ui / input';'
import { Checkbox  } from '@/components / ui / checkbox';'
import { Label  } from '@/components / ui / label';'
import { Badge  } from '@/components / ui / badge';'
import { Switch  } from '@/components / ui / switch';'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from '@/components / ui / dropdown - menu';'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components / ui / alert - dialog';'
import { ScrollArea  } from '@/components / ui / scroll - area';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components / ui / select';
export /**;
 * WebhooksManager - Function description;
 */
function WebhooksManager() {}
  const {    webhooks,    webhooks,
    loading,
    test_result,
    fetch_webhooks,
    create_webhook,
    toggle_webhook,
    delete_webhook,
    test_webhook,
    clearTestResult,
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(
    null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
  // Create webhook form state;'
  const [webhook_name, setWebhookName] = useState ('');'
  const [webhook_url, setWebhookUrl] = useState ('');'
  const [webhook_secret, setWebhookSecret] = useState ('');
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;'
    useState < WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect (() => {}
    fetch_webhooks ();
  }, []);
  const handleCreateWebhook = async () => {}
    // Check condition'
if (=== '' ||) {}
  $2;
}'
      webhook_url.trim () === '' ||;
      selected_events.length === 0);
      return;
    await create_webhook (
      webhook_name,
      webhook_url,
      selected_events,'
      webhook_secret.trim () === '' ? undefined : webhook_secret);
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
  const handleToggleStatus = async (

    webhook_id: string,

    await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id: string) => {}
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id: string) => {}
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);  const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {}
    await toggle_webhook (webhook_id, !current_status);

  }
  const handleDeleteWebhook = async (webhook_id: string) => {}
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);
  }

  const handleTestWebhook = async (webhook_id: string) => {}
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {}
    await toggle_webhook (webhook_id, !current_status);
  },
  const handleDeleteWebhook = async (webhook_id: string, ) => {}
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  },
  const handleTestWebhook = async (webhook_id: string, ) => {}
    await test_webhook (webhook_id, testEventType),
    setShowTestResult (true);
  },
  const resetWebhookForm = () =>: any {'
    setWebhookName ('');'
    setWebhookUrl ('');'
    setWebhookSecret ('');
    setSelectedEvents ([]);

  const {    webhooks,    webhooks
    loading
    testResult
    fetchWebhooks
    createWebhook
    toggleWebhook
    deleteWebhook
    testWebhook
    clearTestResult
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(
    null
  )
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null)
  const [showTestResult, setShowTestResult] = useState(false)
  // Create webhook form state
  }, []),

  const handleCreateWebhook = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  const resetWebhookForm = () => {
    setWebhookName('')
    setWebhookUrl('')
    setWebhookSecret('')
    setSelectedEvents([])
  }
  // Event type options
  const eventOptions: {
    value: WebhookEventType
    label: string
    description: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    clearTestResult;
  } = useWebhooks()const [showCreateDialog, setShowCreateDialog] = useState(false)const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),const [showTestDialog, setShowTestDialog] = useState<string | null>(null),const [showTestResult, setShowTestResult] = useState(false)import { format  } from 'date-fns';
import { Globe,MoreVertical,PlayCircle,Plus,RefreshCw,Webhook} from 'lucide-react';
import { useWebhooks, type WebhookEventType  } from '@/hooks/useWebhooks';
import { Button  } from '@/components/ui/button';
  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
  DialogTrigger;
} from '@/components/ui/dialog';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { Label  } from '@/components/ui/label';
import { Badge  } from '@/components/ui/badge';
import { Switch  } from '@/components/ui/switch';
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
} from '@/components/ui/dropdown-menu';
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle;
} from '@/components/ui/alert-dialog';
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue;
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger  } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
export function WebhooksManager() {X} from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area",import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",export function WebhooksManager() {const {webhooks,loading,X} from 'lucide-react';
import { use_webhooks, type WebhookEventType  } from '@/hooks / use_webhooks';
import { Button  } from '@/components / ui / button';
  Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components / ui / card';
  Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from '@/components / ui / dialog';
import { Input  } from '@/components / ui / input';
import { Checkbox  } from '@/components / ui / checkbox';
import { Label  } from '@/components / ui / label';
import { Badge  } from '@/components / ui / badge';
import { Switch  } from '@/components / ui / switch';
  DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from '@/components / ui / dropdown - menu';
  AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle} from '@/components / ui / alert - dialog';
import { ScrollArea  } from '@/components / ui / scroll - area';
  Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from '@/components / ui / select';
import { Button   } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle   } from '@/components / ui / card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger   } from '@/components / ui / dialog';
import { Input   } from '@/components / ui / input';
import { Checkbox   } from '@/components / ui / checkbox';
import { Label   } from '@/components / ui / label';
import { Badge   } from '@/components / ui / badge';
import { Switch   } from '@/components / ui / switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger   } from '@/components / ui / dropdown - menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle   } from '@/components / ui / alert - dialog';
import { ScrollArea   } from '@/components / ui / scroll - area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue   } from '@/components / ui / select';
export /**;
 * WebhooksManager - Function description;
 */;
function WebhooksManager() {const {    webhooks,    webhooks,loading,test_result,fetch_webhooks,create_webhook,toggle_webhook,delete_webhook,test_webhook,clearTestResult,const [showCreateDialog, setShowCreateDialog] = useState (false)const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(null)const [showTestDialog, setShowTestDialog] = useState < string | null>(null)const [showTestResult, setShowTestResult] = useState (false)// Create webhook form state;
  const [webhook_name, setWebhookName] = useState ('')const [webhook_url, setWebhookUrl] = useState ('')const [webhook_secret, setWebhookSecret] = useState ('')const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([])const [testEventType, setTestEventType] =;
    useState < WebhookEventType>('new_application')// Load webhooks on mount;
  useEffect (() => {fetch_webhooks ()}, [])const handleCreateWebhook = async () => {// Check condition;
if (=== '' ||) {$2;
}
      webhook_url.trim () === '' ||;
      selected_events.length === 0)return;
    await create_webhook (webhook_name,webhook_url,selected_events,webhook_secret.trim () === '' ? undefined : webhook_secret)setShowCreateDialog (false)resetWebhookForm ()}
  const handleToggleStatus = async (webhook_id: string,current_status: boolean) => {await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id: string) => {await delete_webhook (webhook_id)setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id: string) => {await test_webhook (webhook_id, testEventType)setShowTestResult (true)const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {await toggle_webhook (webhook_id, !current_status)}
  const handleDeleteWebhook = async (webhook_id: string) => {await delete_webhook (webhook_id)setShowDeleteConfirm (null)setShowDeleteConfirm (null)}const handleTestWebhook = async (webhook_id: string) => {await test_webhook (webhook_id, testEventType)setShowTestResult (true)const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {await toggle_webhook (webhook_id, !current_status)},const handleDeleteWebhook = async (webhook_id: string, ) => {await delete_webhook (webhook_id),setShowDeleteConfirm (null)},const handleTestWebhook = async (webhook_id: string, ) => {await test_webhook (webhook_id, testEventType),setShowTestResult (true)},const resetWebhookForm = () =>: any {setWebhookName ('')setWebhookUrl ('')setWebhookSecret ('')setSelectedEvents ([])}const handleDeleteWebhook = async (webhookId: string,) => {await deleteWebhook(webhookId)setShowDeleteConfirm(null)}
  const handleTestWebhook = async (webhookId: string,) => {await testWebhook(webhookId, testEventType)setShowTestResult(true)}const {    webhooks,    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
    clearTestResult;
  const [showCreateDialog, setShowCreateDialog] = useState(false)const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null;
  )const [showTestDialog, setShowTestDialog] = useState<string | null>(null)const [showTestResult, setShowTestResult] = useState(false)// Create webhook form state;
  }, []),const handleCreateWebhook  = null;const resetWebhookForm = () => {setWebhookName('')setWebhookUrl('')setWebhookSecret('')setSelectedEvents([])}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {

      value: 'new_application'
      label: 'New Application'

      description: 'When a talent applies to a job'
    }
    {'
      value: 'quote_received''
      label: 'Quote Received''
      description: 'When a quote is received from talent'
    }
    {'
      value: 'milestone_approved''
      label: 'Milestone Approved''
      description: 'When a project milestone is approved'
    }

    {

  }, []),

  }, [])

  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),

  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),"
  const [webhookUrl, setWebhookUrl] = useState(""),"
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),'
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

  // Load webhooks on mount;
  useEffect(() => {}
    fetchWebhooks()
  }, []),

    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,
    
    await createWebhook(
      webhookName, 
      webhookUrl, 
      selectedEvents, "
      webhookSecret.trim() === "" ? undefined : webhookSecret;
    ),
    
    setShowCreateDialog(false),
    resetWebhookForm()
  },

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {}
    await toggleWebhook(webhookId, !currentStatus)
  },

    await deleteWebhook(webhookId),
    setShowDeleteConfirm(null)
  },

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

  const handleTestWebhook = async (webhookId: string) => {


=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await testWebhook(webhookId, testEventType),

    setShowTestResult(true)
  },

  return (

    <Card className='bg-zinc-900 border-zinc-800 text-white'>
      <CardHeader>'
        <CardTitle className='text-xl flex items-center'>'
          <Webhook className='mr-2' size={20} /> Webhooks;
        </CardTitle>'
        <CardDescription className='text-zinc-400'>
          Set up webhooks to get notified when events happen in your Zion;
          account.
        </CardDescription>
      </CardHeader>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <CardContent>
        <div className='flex justify-between items-center mb-6'>
          <p className='text-sm text-zinc-400'>
            You have {webhooks.length}{' '}
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>


          



          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button variant='default'>
                <Plus size={16} className='mr-1' /> Add Webhook
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>
                <DialogDescription className='text-zinc-400'>
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>


import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {;
  Globe,;
  MoreVertical,;
  PlayCircle,;
  Plus,;
  RefreshCw,;
  Webhook,;
  X,;
} from 'lucide-react';
import { useWebhooks, type WebhookEventType } from '@/hooks/useWebhooks';

import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger,;
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
} from '@/components/ui/dropdown-menu';
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
  AlertDialogContent,;
  AlertDialogDescription,;
  AlertDialogFooter,;
  AlertDialogHeader,;
  AlertDialogTitle,;
} from '@/components/ui/alert-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function WebhooksManager() {;
  const {    webhooks,    webhooks,;
    loading,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;

    clearTestResult,;

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
    null;
  );
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [showTestResult, setShowTestResult] = useState(false);

  // Create webhook form state;
  const [webhookName, setWebhookName] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSecret, setWebhookSecret] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;
    useState<WebhookEventType>('new_application');

  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, []);
  const handleCreateWebhook = async () => {;
    if (;'
      webhookName && webhookName.trim() === '' ||;'
      webhookUrl && webhookUrl.trim() === '' ||;
      selectedEvents && selectedEvents.length === 0;
    );
      return;

    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;'
      webhookSecret && webhookSecret.trim() === '' ? undefined : webhookSecret;
    );

    setShowCreateDialog(false);
    resetWebhookForm()
};

  const handleToggleStatus = async (;
    webhookId: string,;
    currentStatus: boolean;
  ) => {;
    await toggleWebhook(webhookId, !currentStatus)
};

  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null)
};

  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus)
};

  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null);    setShowDeleteConfirm(null)
};

  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true);
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean,) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;

  const handleDeleteWebhook = async (webhookId: string,) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;

  const handleTestWebhook = async (webhookId: string,) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true);
  },;

  const resetWebhookForm = () => {;'
    setWebhookName('');'
    setWebhookUrl('');'
    setWebhookSecret('');
    setSelectedEvents([])
};

  // Event type options;
  const eventOptions: {;
    value: WebhookEventType;
    label: string,
  description: string;
  }[] = [;

    },;
  ];

  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
    setSelectedEvents(prev =>;
      prev && prev.includes(event) ? prev && prev.filter(e => e !== event) : [...prev, event];

    <Card className='bg-zinc-900 border-zinc-800 text-white'>;
      <CardHeader>;'
        <CardTitle className='text-xl flex items-center'>;'
          <Webhook className='mr-2' size={20} /> Webhooks;
        </CardTitle>;'
        <CardDescription className='text-zinc-400'>;
          Set up webhooks to get notified when events happen in your Zion;
          account.;
        </CardDescription>;
      </CardHeader>;

      <CardContent>;'
        <div className='flex justify-between items-center mb-6'>;'
          <p className='text-sm text-zinc-400'>;'
            You have {webhooks && webhooks.length}{' '}'
            {webhooks && webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;'
              <Button variant='default'>;'
                <Plus size={16} className='mr-1' /> Add Webhook;
              </Button>;
            </DialogTrigger>;'
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;'
                <DialogDescription className='text-zinc-400'>;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
'
              <div className='space-y-4 py-4'>;'
                <div className='space-y-2'>;'
                  <Label htmlFor='webhook-name'>Webhook Name</Label>;
                  <Input'
                    id='webhook-name'
                    value={webhookName}
                    onChange={e => setWebhookName(e && e.target.value)}'
                    placeholder='e && e.g. Application Notifications';'
                    className='bg-zinc-800 border-zinc-700'                  />;
                </div>;
'
                <div className='space-y-2'>;'
                  <Label htmlFor='webhook-url'>Endpoint URL</Label>;
                  <Input'
                    id='webhook-url'
                    value={webhookUrl}

      value: 'talent_hired',
      label: 'Talent Hired',

<<<<<<< HEAD

      description: 'When talent is hired for a project',
    },
  ];

=======
<<<<<<< HEAD
      description: 'When talent is hired for a project',
    },
  ];
                  <p className='text-xs text-zinc-500'>;value: 'talent_hired',label: 'Talent Hired',description: 'When talent is hired for a project'}];
=======
<<<<<<< HEAD
      description: When talent is hired for a project}];
                  <p className='text-xs text-zinc-500'>;value: talent_hired,label: 'Talent Hired',description: When talent is hired for a project}];
=======
      description: 'When talent is hired for a project',
    },
  ];
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
  // Toggle an event selection;
  const toggle_event = (event: WebhookEventType) =>: any {}
    setSelectedEvents (prev =>;
      prev.includes (event) ? prev.filter (e => e !== event) : [...prev, event]);
  }
  return ('
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;
      <CardHeader>;'
        <CardTitle className='text - xl flex items - center'>;'
          <Webhook className='mr - 2' size={20} /> Webhooks;
        </CardTitle>;'
        <CardDescription className='text - zinc - 400'>;
          Set up webhooks to get notified when events happen in your Zion;
          account.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;'
        <div className='flex justify - between items - center mb - 6'>;'
          <p className='text - sm text - zinc - 400'>;'
            You have {webhooks.length}{' '}'
            {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger as_child>;'
              <Button variant='default'>;'
                <Plus size={16} className='mr - 1' /> Add Webhook;
              </Button>;
            </DialogTrigger>;'
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;
              <DialogHeader>;
                <DialogTitle > Create Webhook</DialogTitle>;'
                <DialogDescription className='text - zinc - 400'>;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;'
              <div className='space - y-4 py - 4'>;'
                <div className='space - y-2'>;'
                  <Label html_for='webhook - name'>Webhook Name</Label>;
                  <Input;'
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}'
                    placeholder='e.g. Application Notifications';'
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                </div>;'
                <div className='space - y-2'>;'
                  <Label html_for='webhook - url'>Endpoint URL</Label>;
                  <Input;'
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}'
                    placeholder='https://example.com / webhook';'
                    className='bg - zinc - 800 border - zinc - 700'                  />;'
                  <p className='text - xs text - zinc - 500'>;
                    The URL where webhook payloads will be sent when events;
                    occur.;
                  </p>;
                </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                </div>;setWebhookName(""),setWebhookUrl(""),setWebhookSecret(""),setWebhookName(""),setWebhookUrl(""),setWebhookSecret(""),setSelectedEvents([])},onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder='Enter secret key';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </div>;setWebhookName(),setWebhookUrl(""),setWebhookSecret(),setWebhookName(""),setWebhookUrl(),setWebhookSecret(""),setSelectedEvents([])},onChange={e => setWebhookSecret(e && e.target.value)}
                    placeholder=Enter secret key;
>>>>>>> origin/resolved-merge-conflicts
                    aria-label='Secret key';
                    className='bg-zinc-800 border-zinc-700'                  />;
                  <p className='text-xs text-zinc-500'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                  <Input;
                    id='webhook - secret';
                    type='password';
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}
                    placeholder='Enter secret key';
                    aria - label='Secret key';
                    className='bg - zinc - 800 border - zinc - 700'                  />;
                  <p className='text - xs text - zinc - 500'>;Used to verify webhook payload signatures. Keep it secret;
                    and secure.;
                  </p>;
                </div>;id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;
                    {eventOptions && eventOptions.map((event,) => (<div key={event && event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event && event.value}onCheckedChange={() => toggleEvent(event && event.value)}
                        />;<Label;
                          htmlFor={event && event.value}
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {event && event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {event && event.description}
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {event && event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                      </div>;
  };
<<<<<<< HEAD
=======
  }
>>>>>>> origin/resolved-merge-conflicts

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  };

<<<<<<< HEAD
  const handleDeleteWebhook = async (webhookId: string) => {
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    onChange={e => setWebhookSecret(e && e.target.value)}'
                    placeholder='Enter secret key';'
                    aria-label='Secret key';'
                    className='bg-zinc-800 border-zinc-700'                  />;'
                  <p className='text-xs text-zinc-500'>;'
                <div className='space - y-2'>;'
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;
                  <Input;'
                    id='webhook - secret';'
                    type='password';
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}'
                    placeholder='Enter secret key';'
                    aria - label='Secret key';'
                    className='bg - zinc - 800 border - zinc - 700'                  />;'
                  <p className='text - xs text - zinc - 500'>;

                    Used to verify webhook payload signatures. Keep it secret;
                    and secure.;
                  </p>;
                </div>;
"
                          id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;
                    {eventOptions && eventOptions.map((event,) => (;"
                      <div key={event && event.value} className="flex items-center space-x-2">;
                        <Checkbox;
                          id={event && event.value} 
                          onCheckedChange={() => toggleEvent(event && event.value)}
                        />;

                        <Label;
                          htmlFor={event && event.value}'
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;
                          {event && event.label}'
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {event && event.description}"
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {event && event.label}"
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                      </div>;
  };

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {}
    await toggleWebhook(webhookId, !currentStatus)
  };

  const handleDeleteWebhook = async (webhookId: string) => {}
    await deleteWebhook(webhookId);
    setShowDeleteConfirm(null)
  };

  const handleTestWebhook = async (webhookId: string) => {}
    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)
  };

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
    setWebhookName(),
    setWebhookUrl(""),
    setWebhookSecret(),
>>>>>>> origin/resolved-merge-conflicts
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setWebhookName(""),
    setWebhookUrl(""),
    setWebhookSecret(""),
    setSelectedEvents([])
  },
<<<<<<< HEAD
=======
    setWebhookName(");"
    setWebhookUrl();"
    setWebhookSecret(");
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const resetWebhookForm = () => {"
    setWebhookName("");"
    setWebhookUrl("");"
    setWebhookSecret("");
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

    setSelectedEvents([])

    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event) 
        : [...prev, event]
    )

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Webhook className="mr-2" size={20} /> Webhooks
        </CardTitle>
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>
      


      
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-zinc-400">

            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>"
              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>"
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>

<<<<<<< HEAD


=======
<<<<<<< HEAD
  }const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {await toggleWebhook(webhookId, !currentStatus)}const handleDeleteWebhook = async (webhookId: string) => {await deleteWebhook(webhookId)setShowDeleteConfirm(null)}const handleTestWebhook = async (webhookId: string) => {await testWebhook(webhookId, testEventType)setShowTestResult(true)}const resetWebhookForm = () => {setWebhookName("")setWebhookUrl("")setWebhookSecret("")setSelectedEvents([])}// Event type options;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {await toggleWebhook(webhookId, !currentStatus)}const handleDeleteWebhook = async (webhookId: string) => {await deleteWebhook(webhookId)setShowDeleteConfirm(null)}const handleTestWebhook = async (webhookId: string) => {await testWebhook(webhookId, testEventType)setShowTestResult(true)}const resetWebhookForm = () => {setWebhookName(")setWebhookUrl(")setWebhookSecret(")setSelectedEvents([])}// Event type options;
>>>>>>> origin/resolved-merge-conflicts
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },{ value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },{ value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },{ value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],// Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {setSelectedEvents(prev =>;
      prev.includes(event)? prev.filter(e => e !== event): [...prev, event];
    )}return (<Card className="bg-zinc-900 border-zinc-800 text-white">;
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">;
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input;
                    id="webhook-name";
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input;
                    id="webhook-url";
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https: //example.com/webhook"
<<<<<<< HEAD

                    className="bg-zinc-800 border-zinc-700"
=======
                    placeholder=https: //example.com/webhook"

                    className="bg-zinc-800 border-zinc-700
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    className="bg-zinc-800 border-zinc-700"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  />

                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>
"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>
                  <Input"
                    id="webhook-secret""
                    type="password"
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}"
                    placeholder="Enter secret key""
                    aria-label="Secret key""
                    className="bg-zinc-800 border-zinc-700"
                  />"
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                "
                <div className="space-y-2">

                  <Label>Event Types</Label>
<<<<<<< HEAD



                  <div className=grid gap-2 pt-2>
                    {eventOptions.map((event) => ("
                      <div key={event.value} className="flex items-center space-x-2>

import { useState, useEffect } from react",
import { format } from "date-fns,
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from lucide-react;
import { useWebhooks, type WebhookEventType } from @/hooks/useWebhooks",
import { Button } from "@/components/ui/button,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog,
import { Input } from @/components/ui/input",
import { Checkbox } from "@/components/ui/checkbox,
import { Label } from @/components/ui/label",
import { Badge } from "@/components/ui/badge,
import { Switch } from @/components/ui/switch",
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu,
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from @/components/ui/alert-dialog",
import { ScrollArea } from "@/components/ui/scroll-area,
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from @/components/ui/select",
export function WebhooksManager() {
  const {
    webhooks,
    loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,
    clearTestResult;
  } = useWebhooks(),
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState("),
  const [webhookUrl, setWebhookUrl] = useState("),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),
  // Load webhooks on mount;
  useEffect(() => {
    fetchWebhooks();
  }, []),
    if (webhookName.trim() === " || webhookUrl.trim() === " || selectedEvents.length === 0) return,
    await createWebhook(;
      webhookName,
      webhookUrl,
      selectedEvents,
      webhookSecret.trim() === " ? undefined : webhookSecret;
    ),
    setShowCreateDialog(false),
    resetWebhookForm();
  },
    await toggleWebhook(webhookId, !currentStatus);
  },
    await deleteWebhook(webhookId),
    setShowDeleteConfirm(null);
  },
    await testWebhook(webhookId, testEventType),
    setShowTestResult(true);
  },
    setWebhookName("),
    setWebhookUrl("),
    setWebhookSecret("),
    setSelectedEvents([]);
  },
  // Event type options;


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    onChange={(e) => setWebhookUrl(e.target.value)}placeholder="https: //example.com/webhook";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key";
                    aria-label="Secret key";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (<div key={event.value} className="flex items-center space-x-2">;
export function WebhooksManager() {const {webhooks,loading,testResult,fetchWebhooks,createWebhook,toggleWebhook,deleteWebhook,testWebhook,clearTestResult;
  } = useWebhooks(),const [showCreateDialog, setShowCreateDialog] = useState(false),const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),const [showTestDialog, setShowTestDialog] = useState<string | null>(null),const [showTestResult, setShowTestResult] = useState(false),// Create webhook form state;
<<<<<<< HEAD
  const [webhookName, setWebhookName] = useState(""),const [webhookUrl, setWebhookUrl] = useState(""),const [webhookSecret, setWebhookSecret] = useState(""),const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),// Load webhooks on mount;
  useEffect(() => {fetchWebhooks()}, []),const handleCreateWebhook = async () => {if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,await createWebhook(webhookName,webhookUrl,selectedEvents,webhookSecret.trim() === "" ? undefined : webhookSecret;
    ),setShowCreateDialog(false),resetWebhookForm()},const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {await toggleWebhook(webhookId, !currentStatus)},const handleDeleteWebhook = async (webhookId: string) => {await deleteWebhook(webhookId),setShowDeleteConfirm(null)},const handleTestWebhook = async (webhookId: string) => {await testWebhook(webhookId, testEventType),setShowTestResult(true)},const resetWebhookForm = () => {setWebhookName(""),setWebhookUrl(""),setWebhookSecret(""),setSelectedEvents([])},// Event type options;
=======
  const [webhookName, setWebhookName] = useState(""),const [webhookUrl, setWebhookUrl] = useState(),const [webhookSecret, setWebhookSecret] = useState(""),const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),// Load webhooks on mount;
  useEffect(() => {fetchWebhooks()}, []),const handleCreateWebhook = async () => {if (webhookName.trim() ===  || webhookUrl.trim() === "" || selectedEvents.length === 0) return,await createWebhook(webhookName,webhookUrl,selectedEvents,webhookSecret.trim() ===  ? undefined : webhookSecret;
    ),setShowCreateDialog(false),resetWebhookForm()},const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {await toggleWebhook(webhookId, !currentStatus)},const handleDeleteWebhook = async (webhookId: string) => {await deleteWebhook(webhookId),setShowDeleteConfirm(null)},const handleTestWebhook = async (webhookId: string) => {await testWebhook(webhookId, testEventType),setShowTestResult(true)},const resetWebhookForm = () => {setWebhookName(""),setWebhookUrl(),setWebhookSecret(""),setSelectedEvents([])},// Event type options;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => ("
                      <div key={event.value} className="flex items-center space-x-2">

import { useState, useEffect } from "react",;
import { format } from "date-fns",;
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from 'lucide-react';
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",;
import { Input } from "@/components/ui/input",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Label } from "@/components/ui/label",;
import { Badge } from "@/components/ui/badge",;
import { Switch } from "@/components/ui/switch",;
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",;
import { ScrollArea } from "@/components/ui/scroll-area",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
export function WebhooksManager() {;
  const {;
    webhooks,;
    loading,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
    clearTestResult;
  } = useWebhooks(),;
  const [showCreateDialog, setShowCreateDialog] = useState(false),;
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),;
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),;
  const [showTestResult, setShowTestResult] = useState(false),;
  // Create webhook form state;
  const [webhookName, setWebhookName] = useState(""),;
  const [webhookUrl, setWebhookUrl] = useState(""),;
  const [webhookSecret, setWebhookSecret] = useState(""),;
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),;
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),;
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []),;
  const handleCreateWebhook = async () => {;
    if (webhookName.trim() === "" || webhookUrl.trim() === "" || selectedEvents.length === 0) return,;
    await createWebhook(;
      webhookName,;
      webhookUrl,;
      selectedEvents,;
      webhookSecret.trim() === "" ? undefined : webhookSecret;
    ),;
    setShowCreateDialog(false),;
    resetWebhookForm();
  },;
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {;
    await toggleWebhook(webhookId, !currentStatus);
  },;
  const handleDeleteWebhook = async (webhookId: string) => {;
    await deleteWebhook(webhookId),;
    setShowDeleteConfirm(null);
  },;
  const handleTestWebhook = async (webhookId: string) => {;
    await testWebhook(webhookId, testEventType),;
    setShowTestResult(true);
  },;
  const resetWebhookForm = () => {;
    setWebhookName(""),;
    setWebhookUrl(""),;
    setWebhookSecret(""),;
    setSelectedEvents([]);
  },;
  // Event type options;
<<<<<<< HEAD
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },{ value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },{ value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },{ value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],// Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {setSelectedEvents(prev =>;
      prev.includes(event)? prev.filter(e => e !== event): [...prev, event];
    )},return (<Card className="bg-zinc-900 border-zinc-800 text-white">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    { value: new_application, label: 'New Application', description: When a talent applies to a job },{ value: 'quote_received', label: Quote Received, description: 'When a quote is received from talent' },{ value: milestone_approved, label: 'Milestone Approved', description: When a project milestone is approved },{ value: 'talent_hired', label: Talent Hired, description: 'When talent is hired for a project' }],// Toggle an event selection;
      prev.includes(event)? prev.filter(e => e !== event): [...prev, event];
    )},return (<Card className=bg-zinc-900 border-zinc-800 text-white">;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [;
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },;
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },;
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },;
    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],;
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;
    setSelectedEvents(prev =>;
      prev.includes(event);
        ? prev.filter(e => e !== event);
        : [...prev, event];
    );
  },;
  return (;
    <Card className="bg-zinc-900 border-zinc-800 text-white">;
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
      <CardHeader>;
        <CardTitle className="text-xl flex items-center">;
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>;
        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="flex justify-between items-center mb-6">;
          <p className="text-sm text-zinc-400">;
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
            <DialogTrigger asChild>;
              <Button variant="default">;
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>;
            </DialogTrigger>;
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
              <DialogHeader>;
                <DialogTitle>Create Webhook</DialogTitle>;
                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-name">Webhook Name</Label>;
                  <Input;
                    id="webhook-name";
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
                    placeholder="e.g. Application Notifications";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-url">Endpoint URL</Label>;
                  <Input;
                    id="webhook-url";
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://example.com/webhook";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>;
                  <Input;
                    id="webhook-secret";
                    type="password";
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="Enter secret key";
                    aria-label="Secret key";
                    className="bg-zinc-800 border-zinc-700";
                  />;
                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;
                <div className="space-y-2">;
                  <Label>Event Types</Label>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (<div key={event.value} className="flex items-center space-x-2">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className="grid gap-2 pt-2>;
                    {eventOptions.map((event) => (<div key={event.value} className=flex items-center space-x-2">;
>>>>>>> origin/resolved-merge-conflicts
                        <Checkbox;
                          id={event.value}checked={selectedEvents.includes(event.value)}<Checkbox;
                          id={event.value}<div className='grid gap-2 pt-2'>;
                    {eventOptions.map(event => (<div;
<<<<<<< HEAD
                          id={event.value} ;
=======
                          id={event.value}
=======
                  <div className="grid gap-2 pt-2">;
                    {eventOptions.map((event) => (;
                      <div key={event.value} className="flex items-center space-x-2">;
                        <Checkbox;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          id={event.value} ;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        <Checkbox;
                          id={event.value} 

                  <div className='grid gap-2 pt-2'>
                    {eventOptions.map(event => (
                      <div
                        key={event.value}
<<<<<<< HEAD


=======
<<<<<<< HEAD
                        className='flex items-center space-x-2';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
                          id={event.value}
                          checked={selectedEvents.includes(event.value)}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        className=flex items-center space-x-2;
>>>>>>> origin/resolved-merge-conflicts
                      >;
                        <Checkbox;
                          id={event.value}
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />
                        <Label
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
<<<<<<< HEAD
=======
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
>>>>>>> origin/resolved-merge-conflicts
                        >
                          {event.label}


                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
=======
                        className='flex items-center space-x-2'
                      >
                        <Checkbox
                          id={event.value}
                          checked={selectedEvents.includes(event.value)}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          onCheckedChange={() => toggleEvent(event.value)}
                        />;
                        <Label;

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >

                          {event.label}

                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>

className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          {event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>
                            {event.description}
                          </span>
                        </Label>

                  </div>;
                </div>;
              </div>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setShowCreateDialog(false),
                <Button
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  variant='outline'
                  onClick={() => {;
                    setShowCreateDialog(false);
                    resetWebhookForm();
<<<<<<< HEAD


=======
<<<<<<< HEAD
'
                <div className='space - y-2'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                <div className=space - y-2'>;
>>>>>>> origin/resolved-merge-conflicts
                          checked={selectedEvents.includes(event.value)}onCheckedChange={() => toggleEvent(event.value)}
                        />;
                        <Label;
                          htmlFor={event.value}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
                        >;
                          {event.label}<span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
                        </Label>;
className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';
                        >;
                          {event.label}
                          <span className='block text-xs text-zinc-400 mt-1'>;
                            {event.description}
                          </span>;
                        </Label>;
                      </div>;
                    ))}</div>;
                </div>;
              </div>;
              <DialogFooter>;
                <Button variant="outline" onClick={() => {setShowCreateDialog(false),</div>;
                </div>;
              </div>;<DialogFooter>;
                <Button;
                  variant='outline';
                  onClick={() => {setShowCreateDialog(false)resetWebhookForm()<div className='space - y-2'>;
                  <Label > Event Types</Label>;
                  <div className='grid gap - 2 pt - 2'>;
                    {event_options.map (event => (<div;
                        key={event.value}
<<<<<<< HEAD
                  <Label > Event Types</Label>;'
=======
                  <Label > Event Types</Label>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
'
                <div className='space - y-2'>;
                  <Label > Event Types</Label>;'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className='grid gap - 2 pt - 2'>;
                    {event_options.map (event => (
                      <div;
                        key={event.value}'
                        className='flex items - center space - x-2';
                      >;
                        <Checkbox;"
                          id={event.value}                          checked={selected_events.includes (event.value)}                  <div className="grid gap - 2 pt - 2">;
                    {event_options.map ((event, ) => ("
                      <div key={event.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={event.value}
                          onCheckedChange={() => toggle_event (event.value)}
                        />;
                        <Label;
                          html_for={event.value}'
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';
                        >;
                          {event.label}'
                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                            {event.description}"
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {event.label}"
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
                <Button;'
                  variant='outline';
                  on_click={() => {}
                    setShowCreateDialog (false);
                    resetWebhookForm ();
                  }
                >;
                  Cancel;
<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                </Button>;

                  setShowCreateDialog(false);
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </Button>;<DialogFooter>;
                <Button variant="outline" onClick={() => {setShowCreateDialog(false)resetWebhookForm()}>;
                  Cancel;
                </Button>;

                  setShowCreateDialog(false);
                  resetWebhookForm()
                }>




                  Cancel
                </Button>
                  selectedEvents.length === 0;
                }>





                <Button onClick={handleCreateWebhook} disabled={
<<<<<<< HEAD
                  webhookName.trim() === "" || 
=======
                  webhookName.trim() === " || 
=======
                </Button>;

                  setShowCreateDialog(false);
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  resetWebhookForm()
                }>

                  webhookUrl.trim() === "" || 
                  selectedEvents.length === 0

                }>

                <Button
                  onClick={handleCreateWebhook}
                  disabled={
                    webhookName.trim() === '' |
                    webhookUrl.trim() === '' |
                    selectedEvents.length === 0
                  }
                >
                  Create Webhook

                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                <Button onClick={handleCreateWebhook} disabled={webhookName.trim() === "" ||;
                  webhookUrl.trim() === "" ||;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Button onClick={handleCreateWebhook} disabled={webhookName.trim() === " ||;
                  webhookUrl.trim() === " ||;
>>>>>>> origin/resolved-merge-conflicts
                  selectedEvents.length === 0;
                }>;
                <Button;
                  onClick={handleCreateWebhook}
                  disabled={webhookName.trim() === '' |;
                    webhookUrl.trim() === '' |;
                    selectedEvents.length === 0;
                  }
                >;
                  Create Webhook;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    webhookName && webhookName.trim() === '' ||

                    webhookUrl && webhookUrl.trim() === '' ||
                    selectedEvents && selectedEvents.length === 0;
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={"
                  webhookName && webhookName.trim() === "" || "
                  webhookUrl && webhookUrl.trim() === "" || 
                  selectedEvents && selectedEvents.length === 0;
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={'
                    webhook_name.trim () === '' ||;'
                    webhook_url.trim () === '' ||;
                    selected_events.length === 0;
                  }
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={"
                  webhook_name.trim () === "" ||;"
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;

                }>;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;

        {/* Webhooks List */}'
        <div className='space - y-4'>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
            <div className='text - center py - 8 text - zinc - 500'>;
                    webhookName && webhookName.trim() === '' ||;
                    webhookUrl && webhookUrl.trim() === '' ||;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div className='text - center py - 8 text - zinc - 500'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className=text - center py - 8 text - zinc - 500'>;
                    webhookName && webhookName.trim() === ' ||;
                    webhookUrl && webhookUrl.trim() === ' ||;
>>>>>>> origin/resolved-merge-conflicts
                    selectedEvents && selectedEvents.length === 0;
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={webhookName && webhookName.trim() === "" ||;
                  webhookUrl && webhookUrl.trim() === "" ||;
                  selectedEvents && selectedEvents.length === 0;
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={webhook_name.trim () === '' ||;
                    webhook_url.trim () === '' ||;
                    selected_events.length === 0;
                  }
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={webhook_name.trim () === "" ||;
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;}>;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;{/* Webhooks List */}
<<<<<<< HEAD
        <div className='space - y-4'>;{/* Webhooks List */}
        <div className='space-y-4'>;
          {loading ? (<div className='text - center py - 8 text - zinc - 500'>;
=======
        <div className='space - y-4>;{/* Webhooks List */}
        <div className=space-y-4'>;
          {loading ? (<div className='text - center py - 8 text - zinc - 500>;
=======
            <div className='text - center py - 8 text - zinc - 500'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Loading webhooks...;
            </div>) : webhooks.length === 0 ? ('
            <div className='text - center py - 8 text - zinc - 500'>;'
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;
              <p > No webhooks found.</p>;'
              <p className='text - sm mt - 1'>;
                Create one to receive event notifications.;
              </p>;
            </div>) : (
            webhooks.map (webhook => (
              <div;
                key={webhook.id}'
                className='p - 4 border border - zinc - 800 rounded - lg';
              >;'"
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
                <div className="flex items - center justify - between">;
                  <div>;'
                    <h3 className='font - medium'>{webhook.name}</h3>;'
                    <div className='flex items - center text - sm text - zinc - 400 mt - 1'>;'
                      <Globe size={14} className='mr - 1' />;'
                      <span className='max - w-md truncate'>{webhook.url}</span>;
                    </div>;
                  </div>;'
                  <div className='flex items - center space - x-2'>;'
                    <div className='flex items - center mr - 2'>;
                      <Switch;'
                        aria - label='Toggle webhook';

                        checked={webhook.is_active}
                        onCheckedChange={() =>;
                          handleToggleStatus (webhook.id, webhook.is_active);
                        }                      />;'
                      <span className='ml - 2 text - sm'>;'
                        {webhook.is_active ? 'Active' : 'Inactive'}

                key={webhook && webhook.id}'
                className='p-4 border border-zinc-800 rounded-lg'>;'"
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;
                  <div>;'
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;'
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;'
                      <Globe size={14} className='mr-1' />;'
                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;
                    </div>;
                  </div>;

'
                  <div className='flex items-center space-x-2'>;'
                    <div className='flex items-center mr-2'>;
                      <Switch'
                        aria-label='Toggle webhook'
                        checked={webhook && webhook.is_active}
                        onCheckedChange={() =>;
                          handleToggleStatus(webhook && webhook.id, webhook && webhook.is_active);
                        }                      />;'
                      <span className='ml-2 text-sm'>;'
                        {webhook && webhook.is_active ? 'Active' : 'Inactive'}
                      </span>;
                    </div>;

                    <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;

                        <Button'
                          variant='ghost''
                          size='icon''
                          aria-label='More options'>;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent'
                        align='end''
                        className='bg-zinc-900 border-zinc-800 text-white'>;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook && webhook.id)}'
                          className='cursor-pointer'                        >;'
                          <PlayCircle size={14} className='mr-2' /> Test;
                        </DropdownMenuItem>;

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
        {/* Webhooks List */}

        <div className="space-y-4">
          {loading ? ("
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>
          ) : webhooks.length === 0 ? ("
            <div className="text-center py-8 text-zinc-500">"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />
              <p>No webhooks found.</p>"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>
            </div>
          ) : (

            webhooks.map((webhook) => (

              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">

                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>
                    <div className="flex items-center text-sm text-zinc-400 mt-1">
                      <Globe size={14} className="mr-1" />

                      <span className="max-w-md truncate">{webhook.url}</span>
                    </div>
                  </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        <DropdownMenuItem;
        {/* Webhooks List */}
        <div className="space-y-4">;
          {loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (webhooks.map((webhook) => (<div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div>;
                    <h3 className="font-medium">{webhook.name}</h3>;
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;
                      <Globe size={14} className="mr-1" />;
                      <span className="max-w-md truncate">{webhook.url}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                      <Switch;
                        aria-label="Toggle webhook";
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;
                      <span className="ml-2 text-sm">;
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    
                      <DropdownMenu>




                      <DropdownMenuTrigger asChild>
<<<<<<< HEAD
                        <Button variant="ghost" size="icon" aria-label="More options">
=======
                        <Button variant="ghost size=icon" aria-label="More options>
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        <Button variant="ghost" size="icon" aria-label="More options">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">

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
                      </span>;
                    </div>;
                      <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
                        <Button variant="ghost" size="icon" aria-label="More options">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
<<<<<<< HEAD
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
=======
                          <span className=block text-xs text-zinc-400 mt-1>{event.description}</span>;
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </Label>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;"
                <Button variant="outline" onClick={() => {;
                  setShowCreateDialog(false),;
                  resetWebhookForm();
                }>;
                  Cancel;
                </Button>;
                <Button onClick={handleCreateWebhook} disabled={;"
                  webhookName.trim() === "" ||;"
                  webhookUrl.trim() === "" ||;
                  selectedEvents.length === 0;
                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>;onClick={() => setShowDeleteConfirm(webhook.id)}className='cursor-pointer text-red-500'                        >;
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>;onClick={() => setShowDeleteConfirm(webhook.id)}className=cursor-pointer text-red-500'                        >;
                          <X size={14} className='mr-2 /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2 /> Delete;
>>>>>>> origin/resolved-merge-conflicts
        {/* Webhooks List */}
        <div className="space-y-4">;
          {loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500">;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (webhooks.map((webhook) => (<div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;
                <div className="flex items-center justify-between">;
                  <div>;
                    <h3 className="font-medium">{webhook.name}</h3>;
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;
                      <Globe size={14} className="mr-1" />;
                      <span className="max-w-md truncate">{webhook.url}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <div className="flex items-center mr-2">;
                      <Switch;
                        aria-label="Toggle webhook";
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;
                      <span className="ml-2 text-sm">;
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>;
                    </div>;
                      <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;
                        <Button variant="ghost" size="icon" aria-label="More options">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}
<<<<<<< HEAD
                          className="cursor-pointer";
=======
                          className=cursor-pointer";
                        >;
                          <PlayCircle size={14} className="mr-2 /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                          className=cursor-pointer text-red-500'
                        >
                          <X size={14} className='mr-2 /> Delete
origin/cursor/automate-test-improve-and-merge-code-2533
                          onClick={() => setShowDeleteConfirm(webhook.id)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

        {/* Webhooks List */}

        <div className=space-y-4">;
          {loading ? (;"
            <div className=text-center py-8 text-zinc-500>Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (;"
            <div className="text-center py-8 text-zinc-500>;
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;
              <p className=text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (;
            webhooks.map((webhook) => (;"
              <div key={webhook.id} className=p-4 border border-zinc-800 rounded-lg>;"
                <div className="flex items-center justify-between>;
                  <div>;
                    <h3 className="font-medium">{webhook.name}</h3>;
                    <div className=flex items-center text-sm text-zinc-400 mt-1">;"
                      <Globe size={14} className=mr-1 />;"
                      <span className="max-w-md truncate>{webhook.url}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <div className=flex items-center mr-2">;
                      <Switch;"
                        aria-label=Toggle webhook;
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;"
                      <span className="ml-2 text-sm>;
                        {webhook.is_active ? "Active" : Inactive}
                      </span>;
                    </div>;
                      <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;"
                        <Button variant="ghost size=icon" aria-label="More options>;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent align="end" className=bg-zinc-900 border-zinc-800 text-white>;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}"
                          className="cursor-pointer;
>>>>>>> origin/resolved-merge-conflicts
                        >;
                          <PlayCircle size={14} className="mr-2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;

<<<<<<< HEAD


=======
<<<<<<< HEAD
                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500"
                        >
                          <X size={14} className="mr-2" /> Delete

                          className='cursor-pointer text-red-500'
                        >
                          <X size={14} className='mr-2' /> Delete
origin/cursor/automate-test-improve-and-merge-code-2533
                          onClick={() => setShowDeleteConfirm(webhook.id)}

        {/* Webhooks List */}

        <div className="space-y-4">;
          {loading ? (;"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;
          ) : webhooks.length === 0 ? (;"
            <div className="text-center py-8 text-zinc-500">;"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;
              <p>No webhooks found.</p>;"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;
            </div>;
          ) : (;
            webhooks.map((webhook) => (;"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;
                  <div>;"
                    <h3 className="font-medium">{webhook.name}</h3>;"
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;"
                      <Globe size={14} className="mr-1" />;"
                      <span className="max-w-md truncate">{webhook.url}</span>;
                    </div>;
                  </div>;"
                  <div className="flex items-center space-x-2">;"
                    <div className="flex items-center mr-2">;
                      <Switch;"
                        aria-label="Toggle webhook";
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      />;"
                      <span className="ml-2 text-sm">;"
                        {webhook.is_active ? "Active" : "Inactive"}
                      </span>;
                    </div>;
                      <DropdownMenu>;
                      <DropdownMenuTrigger asChild>;"
                        <Button variant="ghost" size="icon" aria-label="More options">;
                          <MoreVertical size={16} />;
                        </Button>;
                      </DropdownMenuTrigger>;"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}"
                          className="cursor-pointer";
                        >;"
                          <PlayCircle size={14} className="mr-2" /> Test;
                        </DropdownMenuItem>;
                        <DropdownMenuItem;

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                        <DropdownMenuItem;onClick={() => setShowDeleteConfirm(webhook.id)}
                          className="cursor-pointer text-red-500";
                        >;
                          <X size={14} className="mr-2" /> Delete;
                          className='cursor-pointer text-red-500';
                        >;
                          <X size={14} className='mr-2' /> Delete;
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;
                          onClick={() => setShowDeleteConfirm(webhook && webhook.id)}
                          className='cursor-pointer text-red-500'                        >;
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete;
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;<div className='mt-3 flex flex-wrap gap-2'>;
                  {webhook && webhook.event_types.map((event: WebhookEventType) => (<Badge;
                      key={event}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge
<<<<<<< HEAD
=======
                      variant='secondary
                      className=bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge
>>>>>>> origin/resolved-merge-conflicts


                      key = {event,}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"


                
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </DropdownMenuItem>

                <div className="mt-3 flex flex-wrap gap-2">
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge;
                      key={event} "
                      variant="secondary""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    >

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<div className='mt-3 flex flex-wrap gap-2'>
                  {webhook.event_types.map((event: WebhookEventType) => (
                    <Badge
                      key={event}
                      variant='secondary'
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'
                    >
origin/cursor/automate-test-improve-and-merge-code-2533
                      {event}
                    </Badge>;
                  ))}


                </div>;

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;

                </div>
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
origin/cursor/automate-test-improve-and-merge-code-2533
                      {event}
                    </Badge>
                  ))}

                </div>
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>
                  <span>
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </Badge>;
                  ))}

                    Created:{' '}

                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook && webhook.last_triggered_at && (;
                    <span>;'
                      Last triggered:{' '}

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">

                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                  {webhook.last_triggered_at && ('
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>
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

                  )}


                      {format(
                        new Date(webhook.last_triggered_at)
                        'MMM d, yyyy HH:mm'
                      )}
                    </span>
                  )}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                </div>

              </div>
            ))
          )}
        </div>
      </CardContent>
<<<<<<< HEAD


=======
<<<<<<< HEAD
                      variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      variant=secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800>                    <Badge;
>>>>>>> origin/resolved-merge-conflicts
                      key = {event}
                      variant="secondary";
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800";
                <div className="mt-3 flex flex-wrap gap-2">;
                  {webhook.event_types.map((event: WebhookEventType) => (<Badge;
                      key={event}variant="secondary";
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800";
                    >;
<div className='mt-3 flex flex-wrap gap-2'>;
                  {webhook.event_types.map((event: WebhookEventType) => (<Badge;
                      key={event}
                      variant='secondary';
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800';
                    >;
                      {event}</Badge>;
                  ))}</Badge>;
                  ))}</div>;<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;</div>;
<div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>Created:{' '}
                    {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook && webhook.last_triggered_at && (<span>;
<<<<<<< HEAD
                      Last triggered:{' '}</div>;
=======
                      Last triggered:{' }</div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;'
                <div className='mt - 3 flex flex - wrap gap - 2'>;
                  {webhook.event_types.map ((event: WebhookEventType) => (
                    <Badge;
                      key={event}'
                      variant='secondary';'
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;

                      {event}
                    </Badge>))}
                </div>;'
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                  <span>;'
                    Created:{' '}'
                    {format (new Date (webhook.created_at), 'MMM d, yyyy')}
                  </span>;
                  {webhook.last_triggered_at && (
                    <span>;'
                      Last triggered:{' '}
                      {format (
                        new Date (webhook.last_triggered_at),'
                        'MMM d, yyyy HH:mm')}

                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook.last_triggered_at && ('
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
                </div>;
              </div>)))}
        </div>;
      </CardContent>;'
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;'
        <div className='text - xs text - zinc - 500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;'
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;'
          <RefreshCw size={14} className='mr - 1' /> Refresh        </Button>;
      </CardFooter>;

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}

                </div>;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;

<<<<<<< HEAD


=======
<<<<<<< HEAD
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <span>Created: {format(new Date(webhook.created_at), MMM d, yyyy)}</span>;
>>>>>>> origin/resolved-merge-conflicts
                </div>;
        open={showTestDialog !== null}</div>;
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
<<<<<<< HEAD
                  {webhook.last_triggered_at && (<span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
=======
                  {webhook.last_triggered_at && (<span>Last triggered: {format(new Date(webhook.last_triggered_at), MMM d, yyyy HH:mm)}</span>;
=======
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {webhook.last_triggered_at && (;'
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
                  )}
                </div>;
              </div>;
            ));
          )}
        </div>
      </CardContent>
      "
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">
          Webhooks will be sent with HTTPS POST requests to your endpoint.

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            )))}
        </div>;
      </CardContent>;
      <CardFooter className="justify-between border-t border-zinc-800 py-4">;
        <div className="text-xs text-zinc-500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>;
          <RefreshCw size={14} className="mr-1" /> Refresh;
        </Button>;
      </CardFooter>;
                      {format(new Date(webhook && webhook.last_triggered_at),'MMM d, yyyy HH:mm';
                      )}
                    </span>                  )}<div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook && webhook.last_triggered_at && (<span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
                </div>;
              </div>;
            )))}
        </div>;
      </CardContent>;<CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>;
      </CardFooter>;{/* Test Webhook Dialog */}onOpenChange={open => {          // Check condition;
if ( {) {$2;
}
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;
        <div className="text - xs text - zinc - 500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;
          <RefreshCw size={14} className="mr - 1" /> Refresh;
      </CardFooter>;{/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null }
        onOpenChange = {(open, ) => {<Dialog;
        open={showTestDialog !== null}<Dialog;
        open={showTestDialog !== null}onOpenChange={(open) => {<CardFooter className='justify-between border-t border-zinc-800 py-4'>;
        <div className='text-xs text-zinc-500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;
          <RefreshCw size={14} className='mr-1' /> Refresh;
        </Button>;
      </CardFooter>;
      {/* Test Webhook Dialog */}
<Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {if (!open) {setShowTestDialog(null)setTestEventType('new_application')if (showTestResult) {setShowTestResult(false)clearTestResult() }
        onOpenChange = {(open,) => {<Dialog;
        open={showTestDialog !== null}</Button>;
      </CardFooter>;
      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null, }
        onOpenChange = {(open, ) => {
      <Dialog;
        open={showTestDialog !== null}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
        onOpenChange={(open) => {
<CardFooter className='justify-between border-t border-zinc-800 py-4'>
        <div className='text-xs text-zinc-500'>
          Webhooks will be sent with HTTPS POST requests to your endpoint.
        </div>
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>
          <RefreshCw size={14} className='mr-1' /> Refresh
        </Button>
      </CardFooter>
      {/* Test Webhook Dialog */}
<Dialog
        open={showTestDialog !== null}
        onOpenChange={open => {
origin/cursor/automate-test-improve-and-merge-code-2533

          if (!open) {
            setShowTestDialog(null)
            setTestEventType('new_application')
            if (showTestResult) {
              setShowTestResult(false);
clearTestResult();
            }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </Button>

      </CardFooter>
                      {format(;
                        new Date(webhook && webhook.last_triggered_at),;'
                        'MMM d, yyyy HH:mm';
                      )}
                    </span>                  )}                ;"
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;'
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                  {webhook && webhook.last_triggered_at && (;'
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
                </div>;
              </div>;
            ));
          )}
        </div>;
      </CardContent>;
'
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;'
        <div className='text-xs text-zinc-500'>;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;'
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;'
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>;
      </CardFooter>;

      {/* Test Webhook Dialog */}

        onOpenChange={open => {          // Check condition;
if ( {) {}
  $2;
}"
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
        <div className="text - xs text - zinc - 500">;
          Webhooks will be sent with HTTPS POST requests to your endpoint.;
        </div>;"
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;"
          <RefreshCw size={14} className="mr - 1" /> Refresh;
      </CardFooter>;

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null, }
        onOpenChange = {(open, ) => {}
      <Dialog;
        open={showTestDialog !== null}

      <Dialog;
        open={showTestDialog !== null} 

              setShowTestResult(false)
              clearTestResult() }
        onOpenChange = {(open,) => {;
      <Dialog;
        open={showTestDialog !== null} 
        </Button>
      </CardFooter>

      {/* Test Webhook Dialog */}
      <Dialog;
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
          if (!open) {;

            setTestEventType('new_application');
            if (showTestResult) {;
              setShowTestResult(false);

          }
        }

        onOpenChange={(open) => {}
          // Check condition;
if ( {) {}
  $2;
}
            setShowTestDialog (null);'
            setTestEventType ('new_application');
            // Check condition;
if ( {) {}
  $2;
}
              setShowTestResult (false);
              clearTestResult () }
          }
        }
      >;'
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();

            }
<<<<<<< HEAD
=======
<<<<<<< HEAD
            , }
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
=======
<<<<<<< HEAD
            }
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white>
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            , }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              setShowTestResult(false);
clearTestResult();
            }
origin/cursor/automate-test-improve-and-merge-code-2533
          }
        }

        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">

          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>'
            <DialogDescription className='text-zinc-400'>
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          {!showTestResult ? (
            <>

<<<<<<< HEAD


=======
<<<<<<< HEAD
        open={showTestDialog !== null}onOpenChange={(open) => {if (!open) {setShowTestDialog(null)setTestEventType('new_application')if (showTestResult) {setShowTestResult(false)}
        }onOpenChange={(open) => {// Check condition;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        open={showTestDialog !== null}onOpenChange={(open) => {if (!open) {setShowTestDialog(null)setTestEventType('new_application)if (showTestResult) {setShowTestResult(false)}
        }}onOpenChange={(open) => {// Check condition;
>>>>>>> origin/resolved-merge-conflicts
if ( {) {$2;
}
            setShowTestDialog (null)setTestEventType ('new_application')// Check condition;
if ( {) {$2;
}
              setShowTestResult (false)clearTestResult () }
          }
        }
      >;
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ()}
             }setShowTestResult(false)clearTestResult()}
        }>;
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
<DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className='text-zinc-400'>;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;
          {!showTestResult ? (<>;
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType(value as WebhookEventType)}
                    value = {testEventType}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType)}
                  >;
                    </SelectTrigger>;
                    <SelectContent className='bg-zinc-900 border-zinc-800'>;
                      {eventOptions.map(option => (                        <SelectItem key={option.value} value={option.value}>                      {eventOptions.map((option,) => (>;
        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className='text-zinc-400'>;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;{!showTestResult ? (<>;
              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='test-event-type'>Event Type</Label>;<div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="test-event-type">Event Type</Label>;
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType(value as WebhookEventType)}
                    value = {testEventType}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType)}clearTestResult()}
          }
        }
      >;
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;
            <DialogDescription className="text-zinc-400">;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;
          {!showTestResult ? (<>;
              <div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <Label htmlFor="test-event-type">Event Type</Label>;
                  <Select;
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />
                  >

                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select an event type" />


                    </SelectTrigger>

                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (
                      {eventOptions.map(option => (
origin/cursor/automate-test-improve-and-merge-code-2533
                  <Select
                    value={testEventType}
                    onValueChange={value =>
                      setTestEventType(value as WebhookEventType)
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}
                  >
                    </SelectTrigger>
                    <SelectContent className='bg-zinc-900 border-zinc-800'>
                      {eventOptions.map(option => (                        <SelectItem key={option.value} value={option.value}>                      {eventOptions.map((option,) => (
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {eventOptions.map((option) => (

                      {eventOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
<p className='text-xs text-zinc-500'>
                    The event type will determine the structure of the test
                    payload.
                  </p>
                </div>
              </div>
              <DialogFooter>
origin/cursor/automate-test-improve-and-merge-code-2533
                <Button
                  variant='outline'
                  >;
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;
                      <SelectValue placeholder="Select an event type" />;
                  >;
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;
                    <SelectContent className="bg-zinc-900 border-zinc-800">;
                      {eventOptions.map((option) => ({eventOptions.map(option => (<SelectItem key={option.value} value={option.value}>;
                          {option.label}
                        </SelectItem>;
                      ))}</SelectContent>;

                    </SelectContent>;
                  </Select>;
<<<<<<< HEAD
                  <p className='text-xs text-zinc-500'>;
=======
                  <p className='text-xs text-zinc-500>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
      >;

        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <DialogHeader>;
            <DialogTitle>Test Webhook</DialogTitle>;'
            <DialogDescription className='text-zinc-400'>;
              Send a test webhook to your endpoint.;
            </DialogDescription>;
          </DialogHeader>;

          {!showTestResult ? (;
            <>;'
              <div className='space-y-4 py-4'>;'
                <div className='space-y-2'>;'
                  <Label htmlFor='test-event-type'>Event Type</Label>;

"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="test-event-type">Event Type</Label>

                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
                      setTestEventType(value as WebhookEventType);
                    }
                    value = {testEventType,}
                    onValueChange = {(value,) => setTestEventType(value as WebhookEventType),}

              clearTestResult()

            }
          }
        }
      >"
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>"
            <DialogDescription className="text-zinc-400">
              Send a test webhook to your endpoint.
            </DialogDescription>
          </DialogHeader>
          
          {!showTestResult ? (
            <>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="test-event-type">Event Type</Label>
                  <Select;
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type" />

                    </SelectTrigger>

                    <SelectContent className="bg-zinc-900 border-zinc-800">

                      {eventOptions.map((option) => (
                      {eventOptions.map(option => (
origin/cursor/automate-test-improve-and-merge-code-2533
                        <SelectItem key={option.value} value={option.value}>

                      {event_options.map ((option) => (
                        <SelectItem key={option.value} value={option.value}>;
                          {option.label}
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;'
                  <p className='text - xs text - zinc - 500'>;

                    The event type will determine the structure of the test;
                    payload.;
                  </p>;
                </div>;
              </div>;
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
              <DialogFooter>;
                <Button;
                  variant='outline';
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </SelectContent>
                  </Select>
<p className='text-xs text-zinc-500'>
                    The event type will determine the structure of the test
                    payload.
                  </p>
                </div>
              </div>
              <DialogFooter>

                <Button

                  variant='outline'
                  onClick={() => setShowTestDialog(null)}
                >;
                  Cancel;
                </Button>;
                <Button;
                  onClick={() =>;
                    showTestDialog && handleTestWebhook(showTestDialog);
                  }
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
                >
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <DialogFooter>

                <Button variant="outline" onClick={() => setShowTestDialog(null)}>
                  Cancel;
                </Button>

                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>

                >
origin/cursor/automate-test-improve-and-merge-code-2533
                  Send Test

                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    showTestDialog && handleTestWebhook(showTestDialog)}<DialogFooter>;
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;
                  Cancel;
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
                >;
                  Send Test;
                </Button>;
              </DialogFooter>;
            </>;
          ) : (<>;
                    <Badge;
                      className={testResult &&;
                    </Badge>;
                  </div>;
                >                  Send Test                  </p>;
                </div>;
              </div>;<DialogFooter>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                >                  Send Test                  </p>;
                </div>;
              </div>;

              <DialogFooter>;"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;
                  Cancel;
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
                  Send Test;
                </Button>;
              </DialogFooter>;
            </>;
          ) : (;
            <>;'
              <div className='space-y-4 py-4'>;'
                <div className='space-y-2'>;'
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status</Label>;

                    <Badge;
                      className={}
                        testResult &&
                        testResult.status>= 200 &&;
                        testResult.status < 300;'
                          ? 'bg-green-700';'"
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge;
                      className = {}
                        testResult && testResult.status>= 200 && testResult.status < 300;"
                          ? "bg-green-700";"
                          : "bg-red-700";
                      ,}
                    >;

                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">

                        {testResult?.responseBody || "No response body"}

<div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <Label>Response Status</Label>
                    <Badge
                      className={
                        testResult &&
                        testResult.status >= 200 &&
                        testResult.status < 300
                          ? 'bg-green-700'
                          : 'bg-red-700'
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
<div className='space-y-2 mt-4'>
                    <Label>Response Body</Label>
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>
                        {testResult?.responseBody || 'No response body'}
                      </pre>

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

<div className='space-y-4 py-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <Label>Response Status</Label>
                    <Badge
                      className={
                        testResult &&
                        testResult.status >= 200 &&
                        testResult.status < 300
                          ? 'bg-green-700'
                          : 'bg-red-700'
                      }
                    >;<div className="space-y-4 py-4">;
                <div className="space-y-2">;
                  <div className="flex items-center justify-between">;
                    <Label>Response Status</Label>;
                    <Badge;
                      className={testResult?.status} {testResult?.statusText}<div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}<div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status</Label>;
                    <Badge;
                      className={testResult &&;
                        testResult.status >= 200 &&;
                        testResult.status < 300;
                          ? 'bg-green-700';
                          : 'bg-red-700';
                      }
                    >;
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
<div className='space-y-2 mt-4'>
                    <Label>Response Body</Label>
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>
                        {testResult?.responseBody || 'No response body'}
                      </pre>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </ScrollArea>
                  </div>
                </div>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </Badge>;
                  </div>;
<div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
                    </Badge>;
                  </div>;<div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;
                        {testResult?.responseBody || "No response body"}<DialogFooter>;
                <Button;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </Badge>;
                  </div>;
'
                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body</Label>;'
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;'
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;'
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;"
                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"
                        {testResult?.responseBody || "No response body"}

              <DialogFooter>;
                <Button;'
                  variant='outline';
                  on_click={() => setShowTestDialog (null)}
                >;
                  Cancel;
                </Button>;
                <Button;
                  on_click={() =>;
                    showTestDialog && handleTestWebhook (showTestDialog);
                  }
                >                  Send Test                  </p>;
                </div>;
              </div>;
              <DialogFooter>;"
                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;
                  Cancel;
                </Button>;
                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;
                  Send Test;
                </Button>;
              </DialogFooter>;
            </>) : (
            <>;'
              <div className='space - y-4 py - 4'>;'
                <div className='space - y-2'>;'
                  <div className='flex items - center justify - between'>;
                    <Label > Response Status</Label>;
                    <Badge;
                      className={}
                        test_result &&;
                        test_result.status >= 200 &&;
                        test_result.status < 300;'
                          ? 'bg - green - 700';'"
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;"
                <div className="space - y-2">;"
                  <div className="flex items - center justify - between">;
                    <Label > Response Status</Label>;
                    <Badge;
                      class_name = {}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        test_result && test_result.status >= 200 && test_result.status < 300;"
                          ? "bg - green - 700";"
                          : "bg - red - 700";
=======
<<<<<<< HEAD
                        test_result && test_result.status >= 200 && test_result.status < 300;
                          ? "bg - green - 700";
                          : bg - red - 700";
>>>>>>> origin/resolved-merge-conflicts
                       }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        test_result && test_result.status >= 200 && test_result.status < 300;"
                          ? "bg - green - 700";"
                          : "bg - red - 700";
                      , }
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    >;
                      {test_result?.status} {test_result?.status_text}
                    </Badge>;
                  </div>;'
                  <div className='space - y-2 mt - 4'>;
                    <Label > Response Body</Label>;'
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;'
                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;'
                        {test_result?.response_body || 'No response body'}                      </pre>;"
                  <div className="space - y-2 mt - 4">;
                    <Label > Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;"
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;"
                        {test_result?.response_body || "No response body"}

                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;

<DialogFooter>
                <Button
                  variant='default'
                  onClick={() => {
                    setShowTestDialog(null)
                    setShowTestResult(false)
                    clearTestResult()

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
<DialogFooter>
                <Button
                  variant='default'
                  onClick={() => {
                    setShowTestDialog(null)
                    setShowTestResult(false)
                    clearTestResult()
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
                  }
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  }}
>>>>>>> origin/resolved-merge-conflicts

                >                  Close;
                </Button>;
                <Button'
                  variant='outline'

                  onClick={() => {
                    setShowTestResult(false)
                    clearTestResult()
                  }
                >
                  Test Another Event
                  clearTestResult()
                }>
origin/cursor/automate-test-improve-and-merge-code-2533
                </Button>
              </DialogFooter>
            </>

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

              </div>;<DialogFooter>;
                <Button;
                  variant='default';
                  onClick={() => {setShowTestDialog(null)setShowTestResult(false)clearTestResult()}
                >                  Close;
                </Button>;
                <Button;
                  variant='outline';
                  onClick={() => {setShowTestResult(false)clearTestResult()}
                >;
                  Test Another Event;
                  clearTestResult()}>;
                </Button>;
              </DialogFooter>;
            </>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </Badge>;

                  </div>;

                  <div className="space-y-2 mt-4">;
                    <Label>Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"
                        {testResult?.responseBody || "No response body"}
                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;"
                <Button variant="default" onClick={() => {;
                  setShowTestDialog(null),;
                  setShowTestResult(false);
                  clearTestResult();
                }>;
                  Close;
                </Button>;"
                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
                  clearTestResult();
                }>;
                  Test Another Event;
                </Button>;
              </DialogFooter>;
            </>;

          )}
        </DialogContent>
      </Dialog>

                  onClick={() => {;
                    setShowTestResult(false);
                    clearTestResult();
                  }"
                >                  Test Another Event                <Button variant="outline" onClick={() => {;
                  setShowTestResult(false);
                  clearTestResult();
<<<<<<< HEAD
                }>;
=======
                }}>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            </>;)}
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
                  onClick={() => {setShowTestResult(false)clearTestResult()}
                >                  Test Another Event                <Button variant="outline" onClick={() => {setShowTestResult(false)clearTestResult()}>;
                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;
      </Dialog>;{/* Delete Webhook Confirmation Dialog */}This action will permanently remove this webhook. You will no;
              longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;<AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
      <AlertDialog;
        open={showDeleteConfirm !== null}onOpenChange={(open) => !open && setShowDeleteConfirm(null)}>;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
<AlertDialog;
        open={showDeleteConfirm !== null}
        onOpenChange={open => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className='bg-zinc-900 border-zinc-800 text-white'>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className='text-zinc-400'>;
              This action will permanently remove this webhook. You will no;
              longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;


            <AlertDialogAction 


              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
              className="bg-red-600 hover: bg-red-700"
      <AlertDialog 
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </Button>;
              </DialogFooter>;
            </>;

          )}
        </DialogContent>;
      </Dialog>;
      {/* Delete Webhook Confirmation Dialog */}

              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}

              className="bg-red-600 hover: bg-red-700"
      <AlertDialog;
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel;
            </AlertDialogCancel>

              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}"
              className="bg-red-600 hover: bg-red-700";

        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>

              className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
            <AlertDialogCancel className='bg-transparent text-white hover:bg-zinc-800 border-zinc-700'>;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() =>;
                showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className='bg-red-600 hover:bg-red-700';
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  )className='bg-red-600 hover:bg-red-700'            >;
            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text-zinc-400">;
              This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
              className="bg-red-600 hover: bg-red-700";
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  );
);
origin/cursor/automate-test-improve-and-merge-code-2533
  )
  value: WebhookEventType,  label: string, description: string ;
}[] = [ {;
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' ;
};
{';
  ))value: WebhookEventType,  label: string, description: string ;
}[] = [ {value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' ;
}{';
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' ;
}{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' ;
}{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' ;
}];
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {;
  20 ";
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {;
  showCreateDialog ;
}onOpenChange= {;
  setShowCreateDialog ";
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;
  eventOptions.map ( (event) => (<div key= {;
  event.value ";
}className="flex items-center space-x-2"> <Checkbox id= {;
  event.value ;
}checked= {;
  selectedEvents.includes (event.value) ;
}onCheckedChange= {;
  () => toggleEvent (event.value) ;
}/> <Label htmlFor= {;
  event.value ";
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> ;

}> Cancel </Button> <Button onClick={;
  handleCreateWebhook ;
}];setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {20 ";
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {showCreateDialog;
}onOpenChange= {setShowCreateDialog ";
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {eventOptions && eventOptions.map ( (event) => (<divkey= {event && event.value ";
}className="flex items-center space-x-2"> <Checkboxid= {event && event.value;
}checked= {selectedEvents && selectedEvents.includes (event && event.value)}onCheckedChange= {() => toggleEvent (event && event.value)}/> <LabelhtmlFor= {event && event.value ";
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </Label> </div>) )}</div> </div> </div> <DialogFooter> ;}> Cancel </Button> <ButtononClick={handleCreateWebhook;
}disabled= {";
  webhookName && webhookName.trim () === ""||;
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {/* Webhooks List */ ";
}<div className="space-y-4"> {";
<<<<<<< HEAD
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {webhook && webhook.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {webhook && webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {14 ";
}className="mr-1"/> <span className="max-w-md truncate"> {webhook && webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={() => setShowTestDialog (webhook && webhook.id) ";
}className="cursor-pointer"> <PlayCirclesize= {14 ";
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItemonClick={() => setShowDeleteConfirm (webhook && webhook.id) ";
}className="cursor-pointer text-red-500"> <Xsize= {14 ";
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badgekey= {event ";
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {20 ";
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {showCreateDialog ;
}onOpenChange= {setShowCreateDialog ";
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {eventOptions.map ( (event) => (<div key= {event.value ";
}className="flex items-center space-x-2"> <Checkbox id= {event.value ;
}checked= {selectedEvents.includes (event.value)}onCheckedChange= {() => toggleEvent (event.value)}/> <Label htmlFor= {event.value ";
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) )}</div> </div> </div> <DialogFooter> ;}> Cancel </Button> <Button onClick={handleCreateWebhook ;
}disabled= {";
  webhookName.trim () === ""|| ;
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {/* Webhooks List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {;
  24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {;
=======
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {;
  24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {;
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className=text-center py-8 text-zinc-500> <Webhook className="mx-auto mb-2 opacity-30"size= {
  24 ;
}/> <p>No webhooks found.</p> <p className=text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {
>>>>>>> origin/resolved-merge-conflicts
  webhook.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;
  webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {;
  14 ";
}className="mr-1"/> <span className="max-w-md truncate"> {;
  webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={;
  () => setShowTestDialog (webhook.id) ";
}className="cursor-pointer"> <PlayCircle size= {;
  14 ";
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={;
  () => setShowDeleteConfirm (webhook.id) ";
}className="cursor-pointer text-red-500"> <X size= {;
  14 ";
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {;
  event ";
origin/cursor/automate-test-improve-and-merge-code-2533
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' ;
};
{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' ;
};
{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' ;
}];
setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {
  showCreateDialog 
}onOpenChange= {
  setShowCreateDialog "
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;
  eventOptions && eventOptions.map ( (event) => (<divkey= {
  event && event.value "
}className="flex items-center space-x-2"> <Checkboxid= {
  event && event.value 
}checked= {
  selectedEvents && selectedEvents.includes (event && event.value) 
}onCheckedChange= {
  () => toggleEvent (event && event.value) ;
}/> <LabelhtmlFor= {
  event && event.value "
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </Label> </div>) ) ;
}</div> </div> </div> <DialogFooter> ;

}> Cancel </Button> <ButtononClick={
  handleCreateWebhook 
}disabled= {"
  webhookName && webhookName.trim () === ""|| 
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;
  /* Webhooks List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {
  24 "
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {
  webhook && webhook.id "
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;
  webhook && webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {
  14 "
}className="mr-1"/> <span className="max-w-md truncate"> {;
  webhook && webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={
  () => setShowTestDialog (webhook && webhook.id) ";
}className="cursor-pointer"> <PlayCirclesize= {
  14 "
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItemonClick={
  () => setShowDeleteConfirm (webhook && webhook.id) ";
}className="cursor-pointer text-red-500"> <Xsize= {
  14 "
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badgekey= {
  event "
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {;
  event ;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';
  format (new Date (webhook.created at),  'MMM d, yyyy') ;
}</span> {;
  webhook.last triggered at && (<span>Last triggered: {';
<<<<<<< HEAD
=======
  format (new Date (webhook.created at),  'MMM d, yyyy) ;
}</span> {
  webhook.last triggered at && (<span>Last triggered: {;
>>>>>>> origin/resolved-merge-conflicts
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') ;
origin/cursor/automate-test-improve-and-merge-code-2533
  format (new Date (webhook && webhook.created at),  'MMM d, yyyy') ;
}</span> {;
  webhook && webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook && webhook.last triggered at),  'MMM d, yyyy HH:mm') ;
}</span>) ;
}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {;
  /* Test Webhook Dialog */ ;
}<Dialog open= {;
<<<<<<< HEAD
=======
}<Dialog open= {
>>>>>>> origin/resolved-merge-conflicts
  showTestDialog !== null ;
}onOpenChange= {;
origin/cursor/automate-test-improve-and-merge-code-2533
}<Dialogopen= {
  showTestDialog !== null 
}onOpenChange= {
=======
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className="bg-red-600 hover: bg-red-700";
            >;
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
    </Card>;
  );

  value: WebhookEventType,  label: string, description: string ;
}[] = [ {;'
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' ;
};'
{';'
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' ;
};'
{';'
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' ;
};'
{';'
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' ;

  (open) => {;
  if (!open) {;'
  setShowTestDialog (null);';'
setTestEventType ('new application');
if (showTestResult) {;
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
  ;

}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {;
  testEventType ;
}onValueChange= {;
  (value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {;
  eventOptions.map ( (option) => (<SelectItem key= {;
  option.value ;
}value= {;
  option.value ;
}> {;
  option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {;
  testResult?.status ;
}{;"
  testResult?.statusText ";"
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);
setShowTestResult (false);
clearTestResult ();

}> Close </Button> Test Another Event </Button> </DialogFooter> </>) ;
}</DialogContent> </Dialog> {;
  /* Delete Webhook Confirmation Dialog */ ;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}<AlertDialogopen= {
  showDeleteConfirm !== null 
}onOpenChange= {
<<<<<<< HEAD
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}'"  );
=======
  (open) => !open && setShowDeleteConfirm (null) ;
}> <AlertDialogContent className=bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className=bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
}"  );
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

{'

  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent'
}'
{''
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved'
}'
{''
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project'

  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job' 
}'
{''
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent' 
}'
{''
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved' 
}'
{''
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project' 

}]
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {
  20 "
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {

}onOpenChange= {

  setShowCreateDialog "
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {
  eventOptions.map ( (event) => (<div key= {
  event.value "
}className="flex items-center space-x-2"> <Checkbox id= {

  event.value 
}checked= {

  selectedEvents.includes (event.value) 
}onCheckedChange= {}
  () => toggleEvent (event.value) 
}/> <Label htmlFor= {"
  event.value ""
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) ) 
}</div> </div> </div> <DialogFooter>
}> Cancel </Button> <Button onClick={}
  handleCreateWebhook "
}disabled= {""
  webhookName.trim () === ""|| 

}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {

  /* Webhooks List */ "
}<div className="space-y-4"> {"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {
  24 "
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {
  webhook.id "
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {
  webhook.name "
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {
  14 "
}className="mr-1"/> <span className="max-w-md truncate"> {
  webhook.url "
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={
  () => setShowTestDialog (webhook.id) "
}className="cursor-pointer"> <PlayCircle size= {
  14 "
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={
  () => setShowDeleteConfirm (webhook.id) "
}className="cursor-pointer text-red-500"> <X size= {
  14 "
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {
  event "
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {

  event 
}</Badge>) ) "
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {'

  format (new Date (webhook.created at),  'MMM d, yyyy') 
}</span> {'
  webhook.last triggered at && (<span>Last triggered: {''
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm') 
}</span>) "
}</div> </div>) ) ) ""
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {}
  /* Test Webhook Dialog */ 

}onOpenChange= {

  (open) => {
  if (!open) {
  setShowTestDialog (null);'
setTestEventType ('new application')
if (showTestResult) {
}"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {

}onValueChange= {
  (value) => setTestEventType (value as WebhookEventType) "
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {
  eventOptions.map ( (option) => (<SelectItem key= {

  option.value 

}value= {
  option.value 
}> {
  option.label 

}</SelectItem>) ) "
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={
  () => showTestDialog && handleTestWebhook (showTestDialog) "
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {

}{

  testResult?.statusText "

}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)
setShowTestResult (false)
clearTestResult ()

}

}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog> {}
  /* Delete Webhook Confirmation Dialog */ 
}<AlertDialog open= {}
  showDeleteConfirm !== null;
}onOpenChange= {"
  (open) => !open && setShowDeleteConfirm (null) ""
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) '"
}'"  )
}
;
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
'
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {webhook.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {14 ";
}className="mr-1"/> <span className="max-w-md truncate"> {webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={() => setShowTestDialog (webhook.id) ";
}className="cursor-pointer"> <PlayCircle size= {14 ";
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={() => setShowDeleteConfirm (webhook.id) ";
}className="cursor-pointer text-red-500"> <X size= {14 ";
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {event ";}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {event ;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';format (new Date (webhook && webhook.created at),  'MMM d, yyyy')}</span> {webhook && webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook && webhook.last triggered at),  'MMM d, yyyy HH:mm')format (new Date (webhook.created at),  'MMM d, yyyy')}</span> {webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm')}</span>)}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {/* Test Webhook Dialog */ ;}<Dialogopen= {showTestDialog !== null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
'
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <AlertDialogCancel className=bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className=text-center py-8 text-zinc-500> <Webhook className="mx-auto mb-2 opacity-30"size= {24 ;
}/> <p>No webhooks found.</p> <p className=text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {webhook.id ";
}className=p-4 border border-zinc-800 rounded-lg> <div className="flex items-center justify-between"> <div> <h3 className=font-medium> {webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1> <Globe size= {14 ;
}className="mr-1"/> <span className=max-w-md truncate> {webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2> <div className=flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" endclassName=bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={() => setShowTestDialog (webhook.id) ";
}className=cursor-pointer> <PlayCircle size= {14 ";
}className="mr-2/> Test </DropdownMenuItem> <DropdownMenuItem onClick={() => setShowDeleteConfirm (webhook.id) ;
}className="cursor-pointer text-red-500"> <X size= {14 ;
}className=mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {event ";}variant= secondaryclassName="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {event ;
}</Badge>) ) ;
}</div> <div className=mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';format (new Date (webhook && webhook.created at),  MMM d, yyyy)}</span> {webhook && webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook && webhook.last triggered at),  'MMM d, yyyy HH:mm)format (new Date (webhook.created at),  MMM d, yyyy')}</span> {webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook.last triggered at),  MMM d, yyyy HH:mm)}</span>)}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className=justify-between border-t border-zinc-800 py-4> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {/* Test Webhook Dialog */ ;}<Dialogopen= {showTestDialog !== null;
>>>>>>> origin/resolved-merge-conflicts
}onOpenChange= {}<Dialog open= {showTestDialog !== null ;
}onOpenChange= {(open) => {if (!open) {setShowTestDialog (null)';
setTestEventType ('new application')if (showTestResult) {}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Selectvalue= {testEventType;
}onValueChange= {(value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {eventOptions && eventOptions.map ( (option) => (<SelectItemkey= {option && option.value;
}value= {option && option.value;
}> {option && option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <ButtononClick = {}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {testEventType ;
}onValueChange= {(value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {eventOptions.map ( (option) => (<SelectItem key= {option.value ;
}value= {option.value ;
}> {option.label ;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={() => showTestDialog && handleTestWebhook (showTestDialog) ";
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {testResult?.status ;
}{testResult?.statusText ";
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)setShowTestResult (false)clearTestResult ()}> Close </Button> Test Another Event </Button> </DialogFooter> </>)}</DialogContent> </Dialog> {/* Delete Webhook Confirmation Dialog */ ;}<AlertDialogopen= {showDeleteConfirm !== null;
}onOpenChange= {(open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)}'"  )}
{';
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent';
}
{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved';
}
{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project';
  value: WebhookEventType,  label: string, description: string;
}[] = [ {value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}
{';
  value: 'quote received',  label: 'Quote Received', description: 'When a quote is received from talent';
}
{';
  value: 'milestone approved',  label: 'Milestone Approved', description: 'When a project milestone is approved';
}
{';
  value: 'talent hired',  label: 'Talent Hired', description: 'When talent is hired for a project';
}];
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {20 ";
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {showCreateDialog;
}onOpenChange= {setShowCreateDialog ";
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {eventOptions.map ( (event) => (<div key= {event.value ";
}className="flex items-center space-x-2"> <Checkbox id= {event.value;
}checked= {selectedEvents.includes (event.value)}onCheckedChange= {() => toggleEvent (event.value)}/> <Label htmlFor= {event.value ";
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) )}</div> </div> </div> <DialogFooter>;
}> Cancel </Button> <Button onClick={handleCreateWebhook;
}disabled= {";
  webhookName.trim () === ""||;
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {/* Webhooks List */ ";
}<div className="space-y-4"> {";
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {24 ";
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {webhook.id ";
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {webhook.name ";
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {14 ";
}className="mr-1"/> <span className="max-w-md truncate"> {webhook.url ";
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={() => setShowTestDialog (webhook.id) ";
}className="cursor-pointer"> <PlayCircle size= {14 ";
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={() => setShowDeleteConfirm (webhook.id) ";
}className="cursor-pointer text-red-500"> <X size= {14 ";
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {event ";
}variant=" secondary"className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800"> {event;
}</Badge>) ) ";
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';
  format (new Date (webhook.created at),  'MMM d, yyyy')}</span> {webhook.last triggered at && (<span>Last triggered: {';
  format (new Date (webhook.last triggered at),  'MMM d, yyyy HH:mm')}</span>)}</div> </div>) ) ) ";
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {/* Test Webhook Dialog */;
}<Dialog open= {showTestDialog !== null;
}onOpenChange= {(open) => {if (!open) {setShowTestDialog (null)';
setTestEventType ('new application')if (showTestResult) {}";
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {testEventType;
}onValueChange= {(value) => setTestEventType (value as WebhookEventType) ";
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {eventOptions.map ( (option) => (<SelectItem key= {option.value;
}value= {option.value;
}> {option.label;
}</SelectItem>) ) ";
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={() => showTestDialog && handleTestWebhook (showTestDialog) ";
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {testResult?.status;
}{testResult?.statusText ";
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)setShowTestResult (false)clearTestResult ()}> Close </Button> Test Another Event </Button> </DialogFooter> </>)}</DialogContent> </Dialog> {/* Delete Webhook Confirmation Dialog */;
}<AlertDialog open= {showDeleteConfirm !== null;
<<<<<<< HEAD
}onOpenChange= {(open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)}'"  )}<AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
=======
}onOpenChange= {(open) => !open && setShowDeleteConfirm (null) ;
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className=text-zinc-400> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)}'  )}}<AlertDialogCancel className=bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700>;
=======
'
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <AlertDialog;
        open={showDeleteConfirm !== null} ;
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm);
              }'
              className='bg - red - 600 hover:bg - red - 700'            >;
            <AlertDialogAction;

              className="bg - red - 600 hover: bg - red - 700";
      >;"
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;"
            <AlertDialogDescription className="text - zinc - 400">;

              This action will permanently remove this webhook.;

              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;

<<<<<<< HEAD


=======
<<<<<<< HEAD
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700>;
>>>>>>> origin/resolved-merge-conflicts
              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm) }
              className="bg - red - 600 hover: bg - red - 700";<AlertDialog;
        open={showDeleteConfirm !== null}onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >;
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;
          <AlertDialogHeader>;>;
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;
            <AlertDialogDescription className="text - zinc - 400">;This action will permanently remove this webhook.;
              You will no longer receive events at this endpoint.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;<AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
              className="bg - red - 600 hover: bg - red - 700";
<<<<<<< HEAD
=======
              className="bg - red - 600 hover: bg - red - 700;
>>>>>>> origin/resolved-merge-conflicts

=======
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              Cancel;
            </AlertDialogCancel>;
            <AlertDialogAction;

              className="bg - red - 600 hover: bg - red - 700";

            >;
<<<<<<< HEAD


=======
<<<<<<< HEAD
              className="bg - red - 600 hover: bg - red - 700";>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className="bg - red - 600 hover: bg - red - 700;>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
              className="bg - red - 600 hover: bg - red - 700;>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;
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
    </Card>);
  value: WebhookEventType,  label: string, description: string;
}[] = [ {
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </Card>);
  value: WebhookEventType,  label: string, description: string;
}[] = [ {'
  value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}

}<AlertDialog open= {;
  showDeleteConfirm !== null ;
<<<<<<< HEAD

}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;

=======
<<<<<<< HEAD
}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
=======
<<<<<<< HEAD
}onOpenChange= {
  (open) => !open && setShowDeleteConfirm (null) ;
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className=text-zinc-400> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
>>>>>>> origin/resolved-merge-conflicts
      </AlertDialog>;</Card>)value: WebhookEventType,  label: string, description: string;
}[] = [ {value: 'new application',  label: 'New Application', description: 'When a talent applies to a job';
}<AlertDialog open= {showDeleteConfirm !== null ;
}onOpenChange= {(open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)}'";
}'"
=======
}onOpenChange= {;
  (open) => !open && setShowDeleteConfirm (null) ";
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;
<<<<<<< HEAD
}'"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
}'"
=======
}'"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
