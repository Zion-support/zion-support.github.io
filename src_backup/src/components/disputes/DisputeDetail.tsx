import React, { useState, useEffect } from 'react',import { useRouter } from 'next/router',import { useDisputes } from '@/hooks/useDisputes',import {logErrorToProduction} from '@/utils/productionLogger',import {Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;'
} from '@/types/disputes',import { Button } from '@/components/ui/button',import { Textarea } from '@/components/ui/textarea',import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',import { Badge } from '@/components/ui/badge',import { Separator } from '@/components/ui/separator',import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',import { format, formatDistanceToNow } from 'date-fns',import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',import { ArrowDown, Check, MessageSquare, Download  } from 'lucide-react';'
import { useAuth } from '@/hooks/useAuth',import { toast } from 'sonner',export function DisputeDetail() {const router = useRouter(),const { disputeId } = router.query as { disputeId?: string },const { user } = useAuth(),const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),const [dispute, setDispute] = useState<Dispute | null>(null),const [messages, setMessages] = useState<DisputeMessage[]>([]),const [isLoading, setIsLoading] = useState(true),const [message, setMessage] = useState(''),const [adminNote, setAdminNote] = useState(''),const [isSending, setIsSending] = useState(false),const [resolution, setResolution] = useState<{ 'summary': string, 'resolution_type': ResolutionType }>({'summary': '','resolution_type': 'compromise'}),const [activeTab, setActiveTab] = useState('overview'),// Check if user is admin (placeholder - implement proper admin check)const isAdmin = user?.userType === 'admin',useEffect(() => {if (!disputeId) return,const loadDisputeData = async () => {setIsLoading(true),try {const disputeData = await getDisputeById(disputeId),if (!disputeData) {toast.error('Dispute not found'),router.push('/dashboard/disputes'),return;'
        }
        setDispute(disputeData),const messagesData = await getDisputeMessages(disputeId),setMessages(messagesData)} catch (error) {logErrorToProduction('Error loading dispute 'data':', { 'data': error }),toast.error('Failed to load dispute')} finally {setIsLoading(false)}'
    },loadDisputeData()}, [disputeId, getDisputeById, getDisputeMessages, router]),const handleStatusChange = async ('status': DisputeStatus) => {if (!disputeId) return,const success = await updateDisputeStatus(disputeId, status),if (success) {// Update the dispute object with the new status;
      }
      setDispute({ ...dispute!, 'status': status })} else {}
    const success = await resolveDispute(disputeId, {'resolution_type':;
    } catch (error) {logErrorToProduction('Error sending 'message':', { 'data': error })} finally {setIsSending(false)}'
  }
        'resolved_at': new Date().toISOString()})} else {toast.error('Failed to resolve dispute')}'
  },const handleSendMessage = async () => {if (!disputeId || !message.trim()) return,setIsSending(true),try {const success = await addDisputeMessage(disputeId, message, isAdmin),if (success) {// Refresh messages;
        }
        const updatedMessages = await getDisputeMessages(disputeId),setMessages(updatedMessages),setMessage('')Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;'
} from '@/types/disputes',export function DisputeDetail() {const router = useRouter(),const { disputeId } = router.query as { disputeId?: string },const { user } = useAuth(),const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),const [dispute, setDispute] = useState<Dispute | null>(null),const [messages, setMessages] = useState<DisputeMessage[]>([]),const [isLoading, setIsLoading] = useState(true),const [message, setMessage] = useState(''),const [adminNote, setAdminNote] = useState(''),const [isSending, setIsSending] = useState(false),const [resolution, setResolution] = useState<{ 'summary': string, 'resolution_type': ResolutionType }>({'summary': '','resolution_type': 'compromise'}),const [activeTab, setActiveTab] = useState('overview'),// Check if user is admin (placeholder - implement proper admin check)const isAdmin = user?.userType === 'admin',useEffect(() => {if (!disputeId) return,const loadDisputeData = async () => {setIsLoading(true),try {const disputeData = await getDisputeById(disputeId),if (!disputeData) {toast.error('Dispute not found'),router.push('/dashboard/disputes'),return;'
        }
        setDispute(disputeData),const messagesData = await getDisputeMessages(disputeId),setMessages(messagesData)} catch (error) {logErrorToProduction('Error loading dispute 'data':', { 'data': error }),toast.error('Failed to load dispute')} finally {setIsLoading(false)}'
    },loadDisputeData()}, [disputeId, getDisputeById, getDisputeMessages, router]),const handleStatusChange = async ('status': DisputeStatus) => {if (!disputeId) return,const success  = await updateDisputeStatus(disputeId, status)}const success = await resolve_dispute (dispute_id, {'summary': resolution.summary,'resolution_type':;
        (resolution.resolution_type as ResolutionType) || 'compromise'})// Check condition;'
if ( {) {$2;
}
      set_dispute ({...dispute,'resolution_summary': resolution.summary,'resolution_type': resolution.resolution_type,'resolved_at': new Date ().toISOString ()})} else {toast.error ('Failed to resolve dispute')}'
    } catch (error) {logErrorToProduction ('Error sending 'message':', { 'data': error })} finally {setIsSending (false)}'
export function DisputeDetail() {const router = useRouter()const { disputeId } = router && router.query as { disputeId?: string }const { user } = useAuth()const {getDisputeById,updateDisputeStatus,resolveDispute,getDisputeMessages,addDisputeMessage}  = useDisputes()const [dispute, setDispute] = useState<Dispute | null>(null)const [messages, setMessages] = useState<DisputeMessage[]>([])const [isLoading, setIsLoading] = useState(true)const [message, setMessage] = useState('')const [adminNote, setAdminNote] = useState('')const [isSending, setIsSending] = useState(false)const [resolution, setResolution] = useState<{'summary': string;'
    }
    'resolution_type': ResolutionType;
  }>({'summary': '','resolution_type': 'compromise'})const [activeTab, setActiveTab]  = useState('overview')// Check if user is admin (placeholder - implement proper admin check)const isAdmin  = user?.userType === 'admin';useEffect(() => {if (!disputeId) return;'
    }
    const loadDisputeData = async () => {setIsLoading(true)try {const disputeData = await getDisputeById(disputeId)if (!disputeData) {toast && toast.error('Dispute not found')router && router.push('/dashboard/disputes')return;'
        }
        setDispute(disputeData)const messagesData = await getDisputeMessages(disputeId)setMessages(messagesData)} catch (error) {logErrorToProduction('Error loading dispute 'data':', { 'data': error })toast && toast.error('Failed to load dispute')} finally {setIsLoading(false)}'
    }loadDisputeData()}, [disputeId, getDisputeById, getDisputeMessages, router])const handleStatusChange = async ('status': DisputeStatus) => {if (!disputeId) return;
    }
    const success  = await updateDisputeStatus(disputeId, status)if (success) {// Update the dispute object with the new status;
      }
      setDispute({ ...dispute!, 'status': status })} else {toast && toast.error('Failed to update dispute status')}'
  }const handleResolveDispute = async () => {if (!disputeId) return;if (!resolution && resolution.summary) {toast && toast.error('Please provide a resolution summary')return;'
    }const success = await resolveDispute(disputeId, {'summary': resolution && resolution.summary,'resolution_type':;
        (resolution && resolution.resolution_type as ResolutionType) || 'compromise'})if (success && dispute) {setDispute({...dispute,'resolution_summary': resolution && resolution.summary,'resolution_type': resolution && resolution.resolution_type,'resolved_at': new Date().toISOString()})} else {toast && toast.error('Failed to resolve dispute')}'
    )}
  if (!dispute) {return (<div className='p-8 text-center'>;'
        <p>Dispute not found</p>;
  }if (isLoading) {'summary': resolution.summary,if (isLoading) {return (<div className='p-8 text-center'>;'
        <div className='w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div>;'
        <p>Loading dispute details...</p>;
      </div>;
    )}if (!dispute) {return (<div className='p-8 text-center'>;'
        <p>Dispute not found</p>;
        <Button onClick={() => router.push('/dashboard/disputes')} className='mt-4'>;'
    )}const getStatusBadgeVariant = ('status': DisputeStatus,) => {switch (status) {// Check condition;
  const getStatusBadgeVariant = ('status': DisputeStatus, ) =>: any {switch (status) {case 'open':;return 'default';'
      }
      case 'under_review':;'
        return 'secondary';'
      case 'resolved':;return 'outline'; // Changed from './success'; to 'outline';case 'closed':;'
        return 'outline';'
      'default':;
        return 'default';{formatDistanceToNow(new Date(dispute?.created_at || ''), {'addSuffix': true})}'
            </Button>;case 'open': return 'default',case 'under_review': return 'secondary',case 'resolved': return 'outline', // Changed from 'success' to 'outline';'
      case 'closed': return 'outline','default': return 'default';'
    }
  },case 'open': return 'default',case 'under_review': return 'secondary',case 'resolved': return 'outline', // Changed from 'success' to 'outline';'
      case 'closed': return 'outline','default': return 'default';'
    }
  },return (<div className='container mx-auto p-4 space-y-6'>;'
      <div className='flex flex-wrap items-center justify-between gap-4'>;'
        <div>;
          <div className='flex items-center gap-2'>;'
            <h1 className='text-2xl font-bold'>Dispute Case</h1>;'
      <div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'>;'
        <div className=''lg':col-span-2'>;'
          <p className='text-muted-foreground'>;'
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ''), { 'addSuffix': true })}'
          </p>;
        </div>;
            </Button>;
          )}{dispute.status === 'resolved' && dispute.resolution_summary && (<Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'>;'
          <Check className='h-4 w-4' />;'
      )}<div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'>;'
        <div className=''lg':col-span-2'>;'
      {dispute.status === 'resolved' && dispute.resolution_summary && (<Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'>;'
          <Check className='h-4 w-4' />;'
  },if (isLoading) {return (<div className='p-8 text-center'>;'
        <div className='w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div>;'
        <p>Loading dispute details...</p>;
      </div>;
    )}if (!dispute) {return (<div className='p-8 text-center'>;'
        <p>Dispute not found</p>;
        <Button onClick={() => router.push('/dashboard/disputes')} className='mt-4'>;'
          Back to Disputes;
        </Button>;
      </div>;
    )}const getStatusBadgeVariant = ('status': DisputeStatus) => {switch (status) {case 'open': return 'default',case 'under_review': return 'secondary',case 'resolved': return 'outline', // Changed from 'success' to 'outline';'
      }
      case 'closed': return 'outline','default': return 'default';'
    }
  },return (<div className='container mx-auto p-4 space-y-6'>;'
      <div className='flex flex-wrap items-center justify-between gap-4'>;'
        <div>;
          <div className='flex items-center gap-2'>;'
            <h1 className='text-2xl font-bold'>Dispute Case</h1>;'
          <p className='text-muted-foreground'>;'
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ''), { 'addSuffix': true })}'
          </p>;
        </div>;
        <div className='flex gap-2'>;'
          <Button variant='outline' onClick={() => router.push('/dashboard/disputes')}>;'
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === 'open' && (<Button onClick={() => handleStatusChange('under_review')}>;'
      {dispute.status === 'resolved' && dispute.resolution_summary && (<Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'>;'
          <Check className='h-4 w-4' />;'
      )}<div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'>;'
        <div className=''lg':col-span-2'>;'
            <TabsContent value='overview' className='space-y-6'>;'
                    <h3 className='font-medium'>Reason</h3>;'
                    <h3 className='font-medium'>Description</h3>;'
                    <p className='whitespace-pre-wrap'>{dispute.description}</p>;'
            {formatDistanceToNow (new Date (dispute?.created_at || ''), {'add_suffix': true})}'
      {dispute.status === 'resolved' && dispute.resolution_summary && (<Alert className='bg - green - 50 border - green - 200 'dark':bg - green - 900 / 20 'dark':border - green - 900'>;'
      <div className='grid grid - cols - 1 'lg':grid - cols - 3 gap - 6'>;'
        <div className=''lg':col - span - 2'>;'
                    <h3 className='font-medium'>Project</h3>;'
                    <p>{dispute.project?.title || 'Unknown Project'}</p>;'
                    <p className='text-sm text-muted-foreground'>{dispute.project?.scope_summary}</p>;'
                        Milestone 'ID': {dispute.milestone_id}</div>;
      </div>;{dispute && dispute.status === 'resolved' && dispute && dispute.resolution_summary && (<Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'>;'
      )}<div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'>;'
        <div className=''lg':col-span-2'>;'
                        Milestone 'ID': {dispute && dispute.milestone_id}
                        <span>Created on{' '}{format(new Date(dispute && dispute.created_at),'MMM d, yyyy 'at' 'h':mm a';'
                          <span>Resolved on{' '}{format(new Date(dispute && dispute.resolved_at),'MMM d, yyyy 'at' 'h':mm a';)}'
                          </span>;
                        </li>;<div>;
                    <h3 className='font-medium'>Timeline</h3>;'
                    <ul className='space-y-2 mt-2'>;'
                      <li className='flex gap-2 items-center'>;'
                        <Badge variant='outline' className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>1</Badge>;'
                        <span>Created on {format(new Date(dispute.created_at), 'MMM d, yyyy 'at' 'h':mm a')}</span>;'
                      </li>;
                      {dispute.resolved_at && (<li className='flex gap-2 items-center'>;'
                          <Badge variant='outline' className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;'
                            {dispute.status !== 'open' ? '3' : '2'}'
                          <span>Resolved on {format(new Date(dispute.resolved_at), 'MMM d, yyyy 'at' 'h':mm a')}</span>;'
                        </li>;
                      )}{format (new Date (dispute.created_at),'MMM d, yyyy 'at' 'h':mm a')}'
                            {format (new Date (dispute.resolved_at),'MMM d, yyyy 'at' 'h':mm a')}'
                      {dispute.resolution_summary}{dispute.status === 'resolved' && (<Card>;'
                    <p className='whitespace-pre-wrap'>{dispute.resolution_summary}</p>;'
                        <Badge>'Resolution':{' '}'
                          {dispute && dispute.resolution_type.replace('_', ' ')}'
                        </Badge>;
                      </div>;'Resolution': {dispute.resolution_type.replace('_ ')}'
              )}<TabsContent value='messages' className='space-y-6'>;'
                                <div className='flex items-center gap-2 mb-2'>;'
                                  <Avatar className='h-6 w-6'>;'
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || 'User avatar'} />;<AvatarFallback>{msg && msg.user_profile?.display_name?.[0] ||;'
                                    {format(new Date(msg && msg.created_at),'MMM d, 'h':mm a';'
                  <div className='w-full space-y-4'>;'
                      placeholder='Type your message here...';'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className='min-h-[100px]';'
                      disabled={isSending}
                    />;
                    <div className='flex justify-end'>;'
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
                        {isSending ? 'Sending...' : 'Send Message'}</Button>;'
            <TabsContent value='attachments'>;'
                        <Badge>'Resolution':{' '}'
                                    {format (new Date (msg.created_at),'MMM d, 'h':mm a')}'
                  </CardHeader>;<h3 className='font-medium mb-2'>Change Status</h3>;'
                      <div className='flex gap-2'>;'
                        <Button;
                          }
                          variant='outline';'
                          onClick={() => handleStatusChange('open')}'
                          disabled={dispute.status === 'open'}'
                          variant='outline';'
                          onClick={() => handleStatusChange('under_review')}'
                          disabled={dispute.status === 'under_review'}'
                          variant='outline';'
                          onClick={() => handleStatusChange('closed')}'
                          disabled={dispute.status === 'closed'}>;'
                            value={resolution.summary}{dispute.status !== 'resolved' && (<div>;'
                        <h3 className='font-medium mb-2'>Resolve Dispute</h3>;'
                        <div className='space-y-4'>;'
                          <Textarea;
                            }
                            placeholder='Enter resolution summary...';'
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, 'summary': e.target.value })}
                            className='min-h-[100px]';'
                          />;
                          <div className='grid grid-cols-2 gap-4'>;'
                                className='w-full p-2 border rounded';'
                                value={resolution.resolution_type || ''}'
                                onChange={(e) => setResolution({ ...resolution, 'resolution_type': e.target.value as ResolutionType })}
                              >;
                                <option value='client_favor'>In Client's Favor</option>;'
                                <option value='talent_favor'>In Talent's Favor</option>;'
                                <option value='compromise'>Compromise</option>;'
                                <option value='dismissed'>Dismissed</option>;'
                              setResolution({...resolution,'summary': e && e.target.value})}
                                  setResolution({...resolution,'resolution_type': e && e.target;
                                      .value as ResolutionType,on_change={e =>;
                              }
                              set_resolution ({...resolution,'summary': e.target.value})}
                                  set_resolution ({...resolution,'resolution_type': e.target;
                          </div>;.map((msg) => (<div key={msg.id} className='bg-yellow-50 border-l-4 border-yellow-200 p-4 'dark':bg-yellow-900/20 'dark':border-yellow-900'>;'
                            <div className='flex items-center justify-between mb-2'>;'
                              <div className='flex items-center gap-2'>;'
                                <Avatar className='h-6 w-6'>;'
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || 'Admin avatar'} />;'
                                  <AvatarFallback>{msg.user_profile?.display_name?.[0] || 'A'}'
                                  </AvatarFallback>;
                                </Avatar>;
                                <span className='text-sm font-medium'>;'
                            <p className='whitespace-pre-wrap text-sm'>{msg.message}</p>;'
                                  {format(new Date(msg && msg.created_at),'MMM d, 'h':mm a';'
                          onChange={e => { return setAdminNote(e && e.target.value)}                        />; }<Separator className='my-4' />;'
                      <div className='space-y-4'>;'
                        <Textarea;
                          placeholder='Add an admin note (only visible to administrators)...';'
                              className='bg - yellow - 50 border - l-4 border - yellow - 200 p - 4 'dark':bg - yellow - 900 / 20 'dark':border - yellow - 900';'
                                  {format (new Date (msg.created_at),'MMM d, 'h':mm a')}                                </span>;'
                          variant='outline';'
                          onClick={() => {if (adminNote.trim()) {addDisputeMessage(disputeId!, adminNote, true).then(() => {getDisputeMessages(disputeId!).then(setMessages),setAdminNote('')})}import React, { useState, useEffect } from 'react';'
                                setAdminNote('')})}}>;'
                </Card>;<div className='space-y-6'>;'
                  <p className='font-medium'>Talent</p>;'
                  <p className='text-sm text-muted-foreground'>;'
                    alt={<CardContent className='space-y-6'>;'
              <div className='flex items-start gap-4'>;'
                <Avatar className='h-10 w-10'>;'
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || 'Client avatar'} />;'
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Client</p>;'
                  <p className='text-sm text-muted-foreground'>;'
                    {dispute.client_profile?.display_name || 'Unknown Client'}'
                <span className='font-medium'>Case 'ID':</span>;'
                <span className='font-mono'>{dispute.id}</span>;'
              </div>;
              <div className='flex justify-between'>;'
                <span className='font-medium'>'Created':</span>;'
                <span className='font-medium'>'Status':</span>;'
                <span className='font-medium'>Raised 'by':</span>;'
  )try {}catch (error) {logErrorToProduction ('Error sending 'message':', {'data': error;'
})}finally {setIsSending (false)}
if (isLoading) {';'
  }
  return (<div className=' p-8 text-center'> <div className=' w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div> <p>Loading dispute details...</p> </div>)}if (!dispute) {';'
  }
  return (<div className=' p-8 text-center'> () => router.push (' /dashboard/disputes') ';'
}className=' mt-4'> Back to Disputes </Button> </div>)}';'
container mx-auto p-4 space-y-6' > <div className='flex flex-wrap items-center justify-between gap-4' > <div> Start Review </Button>) ';'
}</div> </div> <Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'> <Check className='h-4 w-4' /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {dispute.resolution summary;'
}</AlertDescription> </Alert>) ';'
}<div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'> <div className=''lg':col-span-2'> </TabsList> <TabsContent value='overview' className='space-y-6'> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className='space-y-4'> <div> <h3 className='font-medium'>Reason</h3> <p> {disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ';'
}</p> </div> <div> <h3 className='font-medium'>Description</h3> <p className='whitespace-pre-wrap'> {dispute.description;'
}</p> </div> <div> </div> {';'
  }
  dispute.milestone id && (<div> <h3 className='font-medium'>Related Milestone</h3> <p className='text-sm'>Milestone 'ID': {dispute.milestone id;'
}</p> </div>) ';'
}<div> <h3 className='font-medium'>Timeline</h3> <ul className='space-y-2 mt-2'> <span>Under review</span> </li>)}</li>) ';'
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className='whitespace-pre-wrap'> {dispute.resolution summary;'
}</p> </Badge> </div>)}</CardContent> </Card>) ';'
}</TabsContent> <TabsContent value='messages' className='space-y-6'> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className='space-y-6 max-h-[600px] overflow-y-auto p-2'> {';'
  }
  messages.length === 0 ? (<div className='text-center py-12'> <MessageSquare className='mx-auto h-12 w-12 text-muted-foreground mb-2' /> <p className='text-muted-foreground'>No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note)}> <div className= {`max-w-[80%] $ {';'
  }
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted';'
}p-4 rounded-lg` ';'}> <div className='flex items-center gap-2 mb-2'> <Avatar className='h-6 w-6'> <AvatarImage src= {msg.user profile?.avatar url;'
}alt= {';'
  }
  msg.user profile?.display name |'User avatar';'
} /> <AvatarFallback> {';'
  }
  msg.user profile?.display name?.[0] |'?' ';'
}</AvatarFallback> </Avatar> <span className='text-sm font-medium'> {';'
  }
  msg.user profile?.display name |'Unknown User' ';'
}</span> <span className='text-xs opacity-70'> {';'
  }
  format (new Date (msg.created at),  'MMM d, 'h':mm a') ';'
}</span> </div> <p className='whitespace-pre-wrap'> {msg.message;'
}</p> </div> </div>)}) ) ';'
}</div> </CardContent> <CardFooter> <div className='w-full space-y-4' > <Textarea className='min-h-[100px]' disabled= {isSending ';'
} /> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value='attachments'> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className='text-center py-12'> <Download className='mx-auto h-12 w-12 text-muted-foreground mb-2' /> <p className='text-muted-foreground' >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className='space-y-6'> <div> <h3 className='font-medium mb-2'>Change Status</h3> <div className='flex gap-2' > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className='font-medium mb-2'>Resolve Dispute</h3> <div className='space-y-4' > <Textarea placeholder='Enter resolution summary...' value= {resolution.summary;'
}onChange= {(e) => setResolution ({...resolution, 'summary': e.target.value;
}) '';'
}className='min-h-[100px]' /> <div className='grid grid-cols-2 gap-4'> <div> <label className='text-sm font-medium mb-1 block'>Resolution Type</label> <select > <option value='client favor' >In Client's Favor</option> <option value='talent favor' >In Talent's Favor</option> <option value='compromise' >Compromise</option> <option value='dismissed' >Dismissed</option> </select> </div> </div> <Button onClick={handleResolveDispute;'
}>Resolve Dispute</Button> </div> </div>)}<div> <AvatarFallback> {';'
  }
  msg.user profile?.display name?.[0] |'A';'
}</AvatarFallback> </Avatar>) ';'
}</div> <Separator className='my-4' /> <div className='space-y-4' > <Textarea;'
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ';'
}</Tabs> </div> <div className='space-y-6'> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className='space-y-6'> <div className='flex items-start gap-4'> <Avatar className='h-10 w-10'> <AvatarImage src= {dispute.client profile?.avatar url;'
}alt= {';'
  }
  dispute.client profile?.display name |'Client avatar' ';'
} /> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className='font-medium'>Client</p> </p> </div> </div> <div className='flex justify-center'> <ArrowDown className='h-6 w-6 text-muted-foreground' /> </div> <div className='flex items-start gap-4'> <Avatar className='h-10 w-10'> <AvatarImage src= {dispute.talent profile?.avatar url;'
}alt= {';'
  }
  dispute.talent profile?.display name |'Talent avatar' ';'
} /> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className='font-medium'>Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className='space-y-4 text-sm'> <div className='flex justify-between'> <span className='font-medium'>Case 'ID':</span> <span className='font-mono'> {dispute.id ';'
}</span> </div> <div className='flex justify-between'> </div> </CardContent> </Card> </div> </div> </div>)}''  )}dispute && dispute.talent_profile?.display_name || 'Talent avatar';'
                <span className='font-medium'>Case 'ID':</span>;'
                <span className='font-mono'>{dispute && dispute.id}</span>;'
              </div>;
              <div className='flex justify-between'>;'
                <span className='font-medium'>'Created':</span>;'
                <span className='font-medium'>'Status':</span>;'
                <span className='font-medium'>Raised 'by':</span>;'
                <span className='font - medium'>Case 'ID':</span>;'
                <span className='font - mono'>{dispute.id}</span>;'
              </div>;
              <div className='flex justify - between'>;'
                <span className='font - medium'>'Created':</span>;'
                <span className='font - medium'>'Status':</span>;'
                <span className='font - medium'>Raised 'by':</span>;'
      </div>;</div>)}, [dispute_id, getDisputeById, getDisputeMessages, router])}
const handleResolveDispute  = async () => {;)}, [disputeId, getDisputeById, getDisputeMessages, router])}const handleResolveDispute = async () => {if (!disputeId) return;
}
if (!resolution.summary) {}const success = await resolveDispute (disputeId, {'summary': resolution.summary;
}
if (success && dispute) {setDispute ({...dispute;
}
resolution 'summary': resolution.summary;
resolution 'type': resolution.resolution type;
resolved 'at': new Date () .toISOString ()})}else {;
}const handleSendMessage = async () => {if (!disputeId || !message.trim () ) return;
}
try {;
}catch (error) {logErrorToProduction ('Error sending 'message':', {'data': error ;'
})}finally {setIsSending (false)}if (isLoading) {';'
  }
  return (<div className=' p-8 text-center'> <div className=' w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full'></div> <p>Loading dispute details...</p> </div>)}if (!dispute) {';'
  }
  return (<div className=' p-8 text-center'> () => router.push (' /dashboard/disputes') ';'
}className=' mt-4'> Back to Disputes </Button> </div>)}';'
container mx-auto p-4 space-y-6' > <div className='flex flex-wrap items-center justify-between gap-4' > <div> Start Review </Button>) ';'
}</div> </div> <Alert className='bg-green-50 border-green-200 'dark':bg-green-900/20 'dark':border-green-900'> <Check className='h-4 w-4' /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {dispute.resolution summary ;'
}</AlertDescription> </Alert>) ';'
}<div className='grid grid-cols-1 'lg':grid-cols-3 gap-6'> <div className=''lg':col-span-2'> </TabsList> <TabsContent value='overview' className='space-y-6'> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className='space-y-4'> <div> <h3 className='font-medium'>Reason</h3> <p> {disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ';'
}</p> </div> <div> <h3 className='font-medium'>Description</h3> <p className='whitespace-pre-wrap'> {dispute.description ;'
}</p> </div> <div> </div> {';'
  }
  dispute.milestone id && (<div> <h3 className='font-medium'>Related Milestone</h3> <p className='text-sm'>Milestone 'ID': {dispute.milestone id ;'
}</p> </div>) ';'
}<div> <h3 className='font-medium'>Timeline</h3> <ul className='space-y-2 mt-2'> <span>Under review</span> </li>)}</li>) ';'
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className='whitespace-pre-wrap'> {dispute.resolution summary ;'
}</p> </Badge> </div>)}</CardContent> </Card>) ';'
}</TabsContent> <TabsContent value='messages' className='space-y-6'> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className='space-y-6 max-h-[600px] overflow-y-auto p-2'> {';'
  }
  messages.length === 0 ? (<div className='text-center py-12'> <MessageSquare className='mx-auto h-12 w-12 text-muted-foreground mb-2' /> <p className='text-muted-foreground'>No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note)}> <div className= {`max-w-[80%] $ {';'
  }
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted' ;'
}p-4 rounded-lg` ';'
}> <div className='flex items-center gap-2 mb-2'> <Avatar className='h-6 w-6'> <AvatarImage src= {msg.user profile?.avatar url ;'
}alt= {';'
  }
  msg.user profile?.display name || 'User avatar' ;'
} /> <AvatarFallback> {';'
  }
  msg.user profile?.display name?.[0] || '?' ';'
}</AvatarFallback> </Avatar> <span className='text-sm font-medium'> {';'
  }
  msg.user profile?.display name || 'Unknown User' ';'
}</span> <span className='text-xs opacity-70'> {';'
  }
  format (new Date (msg.created at),  'MMM d, 'h':mm a') ';'
}</span> </div> <p className='whitespace-pre-wrap'> {msg.message ;'
}</p> </div> </div>)}) ) ';'
}</div> </CardContent> <CardFooter> <div className='w-full space-y-4' > <Textarea className='min-h-[100px]' disabled= {isSending ';'
} /> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value='attachments'> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className='text-center py-12'> <Download className='mx-auto h-12 w-12 text-muted-foreground mb-2' /> <p className='text-muted-foreground' >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className='space-y-6'> <div> <h3 className='font-medium mb-2'>Change Status</h3> <div className='flex gap-2' > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className='font-medium mb-2'>Resolve Dispute</h3> <div className='space-y-4' > <Textarea placeholder='Enter resolution summary...' value= {resolution.summary ;'
}onChange= {(e) => setResolution ({...resolution, 'summary': e.target.value ;
}) '';'
}className='min-h-[100px]' /> <div className='grid grid-cols-2 gap-4'> <div> <label className='text-sm font-medium mb-1 block'>Resolution Type</label> <select > <option value='client favor' >In Client's Favor</option> <option value='talent favor' >In Talent's Favor</option> <option value='compromise' >Compromise</option> <option value='dismissed' >Dismissed</option> </select> </div> </div> <Button onClick={handleResolveDispute ;'
}>Resolve Dispute</Button> </div> </div>)}<div> <AvatarFallback> {';'
  }
  msg.user profile?.display name?.[0] || 'A' ;'
}</AvatarFallback> </Avatar>) ';'
}</div> <Separator className='my-4' /> <div className='space-y-4' > <Textarea ;}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ';'
}</Tabs> </div> <div className='space-y-6'> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className='space-y-6'> <div className='flex items-start gap-4'> <Avatar className='h-10 w-10'> <AvatarImage src= {dispute.client profile?.avatar url ;'
}alt= {';'
  }
  dispute.client profile?.display name || 'Client avatar' ';'
} /> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className='font-medium'>Client</p> </p> </div> </div> <div className='flex justify-center'> <ArrowDown className='h-6 w-6 text-muted-foreground' /> </div> <div className='flex items-start gap-4'> <Avatar className='h-10 w-10'> <AvatarImage src= {dispute.talent profile?.avatar url ;'
}alt= {';'
  }
  dispute.talent profile?.display name || 'Talent avatar' ';'
} /> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className='font-medium'>Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className='space-y-4 text-sm'> <div className='flex justify-between'> <span className='font-medium'>Case 'ID':</span> <span className='font-mono'> {dispute.id ';'
}</span> </div> <div className='flex justify-between'> </div> </CardContent> </Card> </div> </div> </div>)}'';
