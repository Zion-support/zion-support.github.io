<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
id: string;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

id: string;,
  title: string;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
  dueDate: string;
  status: "completed" | "in_progress" | "pending";
  paymentStatus: "paid" | "pending" | "overdue";
  amount: string
interface ProjectViewProps {
  project: {
    id: string;
origin/cursor/automate-test-improve-and-merge-code-2533
    title: string;
    client: {}
      name: string;
=======
    client: {,
  name: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
      avatar?: string;
    },
    startDate: string;
    endDate?: string;
    status: string;,
  totalAmount: string;
    progress: number;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD

import React from 'react';'
import { Card, CardContent } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { Avatar, AvatarImage, AvatarFallback } from '@/components / ui / avatar';
import {}
=======

import React from 'react';''
import { Card, CardContent } from '@/components/ui/ card';''
import { Button } from '@/components/ui/ button';''
import { Badge } from '@/components/ui/ badge';''
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/ avatar';'
import {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
  CheckCircle,
  ChevronRight,
  FileText,
  MessageSquare,
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
  Video,';
} from 'lucide-react';'
import { Progress } from '@/components / ui / progress';'
import { SeverityIndicator } from '../common / SeverityIndicator';'
import { use_router } from 'next / router';'
import { toast } from 'sonner';

<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React from "react",
import { Card, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
import { SeverityIndicator } from "../common/SeverityIndicator",
import { useRouter } from 'next/router',
import { toast } from "sonner",
interface Milestone {
=======
=======
import React from "react","
import { Card, CardContent } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge","
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",'
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'"
import { Progress } from "@/components/ui/progress","
import { SeverityIndicator } from "../common/SeverityIndicator",'
import { useRouter } from 'next/router',"
import { toast } from "sonner",

interface Milestone {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
  id: string,
  title: string,
  dueDate: string,"
  status: "completed" | "in_progress" | "pending","
  paymentStatus: "paid" | "pending" | "overdue",
  amount: string";
import React from "react",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Badge } from "@/components/ui/badge",;"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;'
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react';"
import { Progress } from "@/components/ui/progress",;"
import { SeverityIndicator } from "../common/SeverityIndicator",;'
import { useRouter } from 'next/router',;"
import { toast } from "sonner",;
=======
  Video,'
} from 'lucide-react';''
import { Progress } from '@/components/ui/ progress';''
import { SeverityIndicator } from '../common / SeverityIndicator';''
import { use_router } from 'next/router';''
import { toast } from 'sonner';''
import React from "react",""
import { Card, CardContent } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",""
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react'''
import { Progress } from "@/components/ui/progress",""
import { SeverityIndicator } from "../common/SeverityIndicator",""
import { useRouter } from 'next/router',''
import { toast } from "sonner","
interface Milestone {
  // TODO: Implement
}
  id: string,
  title: string,
  dueDate: string,"
  status: "completed" | "in_progress" | "pending",""
  paymentStatus: "paid" | "pending" | "overdue","
  amount: string;"
import React from "react",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;""
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar",;""
import { CheckCircle, ChevronRight, FileText, MessageSquare, Video } from 'lucide-react';''
import { Progress } from "@/components/ui/progress",;""
import { SeverityIndicator } from "../common/SeverityIndicator",;""
import { useRouter } from 'next/router',;''
import { toast } from "sonner",;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
interface Milestone {;
  id: string,;
  title: string,;
  dueDate: string,;"
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
  status: "completed" | "in_progress" | "pending",;"
  paymentStatus: "paid" | "pending" | "overdue",;
=======
  status: "completed" | "in_progress" | "pending",;""
  paymentStatus: "paid" | "pending" | "overdue",;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
  amount: string;
}
;
interface ProjectViewProps {;
  project: {;,
  id: string,;
    title: string,;
    client: {;,
  name: string,;
      avatar?: string;
    },;
    startDate: string,;
    endDate?: string,;
    status: string,;
    totalAmount: string,;
    progress: number,;
    description: string;
  },;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

  milestones: Milestone[];
<<<<<<< HEAD
=======

    description: string;
=======
  milestones: Milestone[];,
  description: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
  };
  milestones: Milestone[];

export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {;
  const router = useRouter();

  const startProjectCall = () => {;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
    const roomId = `project-${project && project.id}`;'
    toast && toast.success('Starting project call', {;'
      description: 'Initializing video connection...',;
=======
    const roomId = `project-${project && project.id}`;"
    toast && toast.success('Starting project call', {;''
      description: 'Initializing video connection...',;')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
    });
`
    router && router.push(`/call/${roomId}`);
  };

  const messageClient = () => {;'
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
    toast && toast.info('Opening message thread with client', {;`
      description: `Messaging ${project && project.client.name}...`,;
=======
    toast && toast.info('Opening message thread with client', {;'
      description: `Messaging ${project && project.client.name}...`,;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
    });
    // Navigate to messaging with this client;
  };

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

export function MobileProjectView({ project, milestones }: ProjectViewProps) {}
  const router = useRouter(),
  
  const startProjectCall = () => {}`
    const roomId = `project-${project.id}`,"
    toast.success("Starting project call", {"
      description: "Initializing video connection..."
=======


interface ProjectViewProps  {project: {id: string;
    title: string;
    client: {name: string;}
      avatar?: string;}
    }
    start_date: string;
    end_date?: string;
    status: string;
    total_amount: string;
    progress: number;
    description: string;"
  }id: string,title: string,dueDate: string,status: \"completed\" | \"in_progress\" | \"pending\",paymentStatus: \"paid\" | \"pending\" | \"overdue\",amount: string;
"
interface Milestone  {id: string,title: string,dueDate: string,status: \"completed\" | \"in_progress\" | \"pending\",paymentStatus: \"paid\" | \"pending\" | \"overdue\",amount: string;}
}


export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = useRouter(),
  
  const startProjectCall = () => {
    const roomId = `project-${project.id}`,'
    toast.success("Starting project call", {""
      description: "Initializing video connection..."")
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
    }),
    `
    router.push(`/call/${roomId}`)
  },
  
  const messageClient = () => {"
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
    toast.info("Opening message thread with client", {}`
      description: `Messaging ${project.client.name}...`
    }),;
=======
    toast.info("Opening message thread with client", {"
      description: `Messaging ${project.client.name}...`)
    }),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
    // Navigate to messaging with this client;
  },
<<<<<<< HEAD
  
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
    description: string
  }
  milestones: Milestone[]
export function MobileProjectView({ project, milestones }: ProjectViewProps) {
  const router = null;
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx
=======
export function MobileProjectView(): any ({ project, milestones }: ProjectViewProps) {const router = useRouter()const startProjectCall = () => ;}
  const roomId = `project-${project && project.id}`;
    toast && toast.success('Starting project call', {description: 'Initializing video connection...'})router && router.push(`/call/${roomId}`
}


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
  return (
<<<<<<< HEAD
    <div className="space-y-6 px-4 pb-24">
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">{project.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.client.name}</span>
                </div>
              </div>
              <Badge>{project.status}</Badge>
            </div>
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
            <div className="space-y-1">
=======
            "
            <div className="space-y-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
              <div className="flex justify-between items-center text-sm">
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
=======
            <div className="space-y-1">
              <div className="flex justify-between items-center text-sm">

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <span>Progress</span>
=======


                <span>Progress</span>"
                <span className="font-medium">{project.progress}%</span>
              </div>"
              <Progress value={project.progress} className="h-2" />
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

=======
            "
            <div className="space-y-1">"
</div>"
              <div className="flex justify-between items-center text-sm">"
</div>
                <span>Progress</span>"
                <span className="font-medium">{project.progress}%</span>"
              </div>"
              <Progress value={project.progress} className="h-2" />"
</Progress>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
=======
            "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
            <div className="grid grid-cols-2 gap-3 text-sm">
=======
            <div className="grid grid-cols-2 gap-3 text-sm">

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <div>
                <p className='text-muted-foreground'>Start Date</p>
                <p className='font-medium'>{project.startDate}</p>
=======

              <div>"
                <p className="text-muted-foreground">Start Date</p>"
                <p className="font-medium">{project.startDate}</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
              </div>
              <div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <p className="text-muted-foreground">End Date</p>
=======
"
                <p className="text-muted-foreground">End Date</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
                <p className="font-medium">{project.endDate || "Not set"}</p>

=======
            "
            <div className="grid grid-cols-2 gap-3 text-sm">"
</div>
              <div>
</div>"
                <p className="text-muted-foreground">Start Date</p>""
                <p className="font-medium">{project.startDate}</p>"
              </div>
              <div>
</div>

"
                <p className="text-muted-foreground">End Date</p>""
                <p className="font-medium">{project.endDate || "Not set"}</p>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
              </div>
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
              <div>
</div>"
                <p className="text-muted-foreground">Total Amount</p>""
                <p className="font-medium">{project.totalAmount}</p>"
              </div>
              <div>
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                <p className='text-muted-foreground'>Status</p>
                <p className='font-medium capitalize'>{project.status}</p>
=======
              <div>"
                <p className="text-muted-foreground">Total Amount</p>"
                <p className="font-medium">{project.totalAmount}</p>
              </div>
              <div>"
                <p className="text-muted-foreground">Status</p>"
                <p className="font-medium capitalize">{project.status}</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
=======
</div>"
                <p className="text-muted-foreground">Status</p>""
                <p className="font-medium capitalize">{project.status}</p>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
              </div>
            </div>

<<<<<<< HEAD

            
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <div>
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
=======


            <div>"
              <p className="text-sm text-muted-foreground mb-1">Description</p>"
              <p className="text-sm">{project.description}</p>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

            </div>
<<<<<<< HEAD
=======

                      src={project && project.client.avatar}
                      alt={project && project.client.name}
                    />;
                    <AvatarFallback>{project && project.client.name[0]}</AvatarFallback>;
                  </Avatar>;'
                  <span className='text-sm'>{project && project.client.name}</span>;
                </div>;
              </div>;
              <Badge>{project && project.status}</Badge>;
            </div>;
'
            <div className='space-y-1'>;'
              <div className='flex justify-between items-center text-sm'>;
                <span>Progress</span>;'
                <span className='font-medium'>{project && project.progress}%</span>;
              </div>;'
              <Progress value={project && project.progress} className='h-2' />;
            </div>;
'
            <div className='grid grid-cols-2 gap-3 text-sm'>;
              <div>;'
                <p className='text-muted-foreground'>Start Date</p>;'
                <p className='font-medium'>{project && project.startDate}</p>;
              </div>;
              <div>;'
                <p className='text-muted-foreground'>End Date</p>;'
                <p className='font-medium'>{project && project.endDate || 'Not set'}</p>;
              </div>;
              <div>;'
                <p className='text-muted-foreground'>Total Amount</p>;'
                <p className='font-medium'>{project && project.totalAmount}</p>;
              </div>;
              <div>;'
                <p className='text-muted-foreground'>Status</p>;'
                <p className='font-medium capitalize'>{project && project.status}</p>;
              </div>;
            </div>;

            <div>;'
              <p className='text-sm text-muted-foreground mb-1'>Description</p>;'
              <p className='text-sm'>{project && project.description}</p>;
            </div>;
'
            <div className='flex gap-2'>;'
              <Button size='sm' variant='outline' className='gap-1 flex-1'>;'
                <FileText className='h-4 w-4' /> Contract;
              </Button>;

              <Button'
                size='sm''
                variant='outline''
                className='gap-1 flex-1'
                onClick={messageClient}              >'
                <MessageSquare className='h-4 w-4' /> Message;
              </Button>
              <Button'
                size='sm''
                className='gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light'

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1 flex-1">
                <FileText className="h-4 w-4" /> Contract
=======
            "
            <div className="flex gap-2">"
              <Button size="sm" variant="outline" className="gap-1 flex-1">"
                <FileText className="h-4 w-4" /> Contract;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
              </Button>
              <Button "
                size="sm" "
                variant="outline" "
                className="gap-1 flex-1"
                onClick={messageClient}
              >"
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>
              <Button "
                size="sm" "
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light"
=======
</div>"
              <p className="text-sm text-muted-foreground mb-1">Description</p>""
              <p className="text-sm">{project.description}</p>"
            </div>
                    <AvatarFallback>{project && project.client.name[0]}</AvatarFallback>;
                  </Avatar>;"
                  <span className='text-sm'>{project && project.client.name}</span>;'
                </div>;
              </div>;
              <Badge>{project && project.status}</Badge>;
            </div>;'
            <div className='space-y-1'>;'
</div>'
              <div className='flex justify-between items-center text-sm'>;'
</div>
                <span>Progress</span>;'
                <span className='font-medium'>{project && project.progress}%</span>;'
              </div>;'
              <Progress value={project && project.progress} className='h-2' />;'
</Progress>
            </div>;'
            <div className='grid grid-cols-2 gap-3 text-sm'>;'
</div>
              <div>;
</div>'
                <p className='text-muted-foreground'>Start Date</p>;''
                <p className='font-medium'>{project && project.startDate}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>End Date</p>;''
                <p className='font-medium'>{project && project.endDate || 'Not set'}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>Total Amount</p>;''
                <p className='font-medium'>{project && project.totalAmount}</p>;'
              </div>;
              <div>;
</div>'
                <p className='text-muted-foreground'>Status</p>;''
                <p className='font-medium capitalize'>{project && project.status}</p>;'
              </div>;
            </div>;
            <div>;
</div>'
              <p className='text-sm text-muted-foreground mb-1'>Description</p>;''
              <p className='text-sm'>{project && project.description}</p>;'
            </div>;'
            <div className='flex gap-2'>;'
</div>'
              <Button size='sm' variant='outline' className='gap-1 flex-1'>;'
</Button>'
                <FileText className='h-4 w-4' /> Contract;'
</FileText>
              </Button>;
              <Button;'
                size='sm'''
                variant='outline'''
                className='gap-1 flex-1''
                onClick={messageClient}              >
</Button>'
                <MessageSquare className='h-4 w-4' /> Message;'
</MessageSquare>
              </Button>
              <Button;'
                size='sm'''
                className='gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light'''
            <div className="flex gap-2">"
</Button>"
              <Button size="sm" variant="outline" className="gap-1 flex-1">"
</Button>"
                <FileText className="h-4 w-4" /> Contract;"
</FileText>
              </Button>
              <Button;"
                size="sm"""
                variant="outline"""
                className="gap-1 flex-1""
                onClick={messageClient}
              >
</Button>"
                <MessageSquare className="h-4 w-4" /> Message;"
</MessageSquare>
              </Button>
              <Button;"
                size="sm"""
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                onClick={startProjectCall}
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
              >
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                <Video className="h-4 w-4" /> Call
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
              >"
                <Video className="h-4 w-4" /> Call;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
=======
</Button>"
                <Video className="h-4 w-4" /> Call;"
</Video>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <section>
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
        <h2 className="text-lg font-medium mb-4">Milestones</h2>
=======
      <section>"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
        <div className="space-y-3">
          {milestones.map((milestone) => (
            <Card key={milestone.id}>"
              <CardContent className="p-4">"
                <div className="flex justify-between items-start mb-2">"
                  <div className="flex items-center gap-2">"
                    {milestone.status === "completed" ? ("
                      <CheckCircle className="h-5 w-5 text-green-500" />
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>
                    )}
=======

                    ) : ('
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>
                onClick={startProjectCall}>;'
                <Video className='h-4 w-4' /> Call;
=======
</section>"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>""
        <div className="space-y-3">"
</div>
            <Card key={milestone.id}>
</Card>"
              <CardContent className="p-4">"
</CardContent>"
                <div className="flex justify-between items-start mb-2">"
</div>"
                  <div className="flex items-center gap-2">"
</div>"
                      <CheckCircle className="h-5 w-5 text-green-500" />"
</CheckCircle>"
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>''
                <Video className='h-4 w-4' /> Call;'
</Video>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
              </Button>;
            </div>;
          </div>;
        </CardContent>;

      </Card>;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx

      <section>;'
        <h2 className='text-lg font-medium mb-4'>Milestones</h2>;'
        <div className='space-y-3'>;
          {milestones && milestones.map(milestone => (            <Card key={milestone && milestone.id}>;'
              <CardContent className='p-4'>;'
                <div className='flex justify-between items-start mb-2'>;'
                  <div className='flex items-center gap-2'>;'
                    {milestone && milestone.status === 'completed' ? (;'
                      <CheckCircle className='h-5 w-5 text-green-500' />;
                    ) : (;'
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>;
                    )}

                    }>;
                    {milestone && milestone.paymentStatus}
                  </Badge>;
                </div>;
'
                <div className='pl-7'>;'
                  <div className='flex justify-between text-sm'>;'
                    <span className='text-muted-foreground'>Due Date:</span>;
                    <span>{milestone && milestone.dueDate}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
                    <span className='text-muted-foreground'>Amount:</span>;
                    <span>{milestone && milestone.amount}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
                    <span className='text-muted-foreground'>Status:</span>;'
                    <span className='capitalize'>;'
                      {milestone && milestone.status.replace('_', ' ')}
=======
      <section>;
</section>'
        <h2 className='text-lg font-medium mb-4'>Milestones</h2>;''
        <div className='space-y-3'>;'
</div>
          {milestones && milestones.map(milestone => (            <Card key={milestone && milestone.id}>;
</Card>'
              <CardContent className='p-4'>;'
</CardContent>'
                <div className='flex justify-between items-start mb-2'>;'
</div>'
                  <div className='flex items-center gap-2'>;'
</div>'
                      <CheckCircle className='h-5 w-5 text-green-500' />;'
</CheckCircle>'
                      <div className='h-5 w-5 rounded-full border-2 border-muted-foreground'></div>;'
                  </Badge>;
                </div>;'
                <div className='pl-7'>;'
</div>'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Due Date:</span>;'
                    <span>{milestone && milestone.dueDate}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Amount:</span>;'
                    <span>{milestone && milestone.amount}</span>;
                  </div>;'
                  <div className='flex justify-between text-sm'>;'
</div>'
                    <span className='text-muted-foreground'>Status:</span>;''
                    <span className='capitalize'>;'
</span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                    </span>;
                  </div>;
                  <Button;'
                    size='sm'''
                    variant='outline'''
                    className='w-full mt-3 gap-1'>;'
</Button>'
                    View Details <ChevronRight className='h-4 w-4' />;'
</ChevronRight>

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                  <Button'
                    size='sm''
                    variant='outline''
                    className='w-full mt-3 gap-1'>;'
                    View Details <ChevronRight className='h-4 w-4' />;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;

        </div>;
      </section>;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
    </div>;
  );
}
'
    <div className='space - y-6 px - 4 pb - 24'>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
                    <h3 className="font-medium">{milestone.title}</h3>
=======
    </div>;'
    <div className='space - y-6 px - 4 pb - 24'>;'
</div>'
                    <h3 className="font-medium">{milestone.title}</h3>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                  </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <Badge 
                    variant={
                      milestone.paymentStatus === "paid" ? "default" : 
=======
                  <Badge;
                    variant={"
                      milestone.paymentStatus === "paid" ? "default" : "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline"
;
export function MobileProjectView() { return null; }`
    const roomId = `project-${project.id}`,;"
    toast.success("Starting project call", {;"
      description: "Initializing video connection...";
    }),;`
    router.push(`/call/${roomId}`);
  },;
  const messageClient = () => {;"
    toast.info("Opening message thread with client", {;`
      description: `Messaging ${project.client.name}...`;
    });
    // Navigate to messaging with this client;
  };
  return (;"
    <div className="space-y-6 px-4 pb-24">;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
      <Card>;
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
=======
        <CardContent className="p-4">;
          <div className="space-y-4">;
=======
      <Card>;"
        <CardContent className="p-4">;"
          <div className="space-y-4">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
            <div className="flex items-center justify-between">;
              <div>;"
                <h2 className="text-lg font-medium">{project.title}</h2>;"
                <div className="flex items-center gap-2 mt-1">;"
                  <Avatar className="h-6 w-6">;
=======
                  <Badge;
                    variant={"
                      milestone.paymentStatus === "paid" ? "default" :""
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline""
;)
export function MobileProjectView({ project, milestones }: ProjectViewProps) {;
  const router = useRouter(),;
  const startProjectCall = () => {;
</Badge>"
    <div className="space-y-6 px-4 pb-24">;"
</div>
      <Card>;
</Card>"
        <CardContent className="p-4">;"
</CardContent>"
          <div className="space-y-4">;"
</div>"
            <div className="flex items-center justify-between">;"
</div>
              <div>;
</div>"
                <h2 className="text-lg font-medium">{project.title}</h2>;""
                <div className="flex items-center gap-2 mt-1">;"
</div>"
                  <Avatar className="h-6 w-6">;"
</Avatar>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                    <AvatarImage src={project.client.avatar} alt={project.client.name} />;
</AvatarImage>
                    <AvatarFallback>{project.client.name[0]}</AvatarFallback>;
                  </Avatar>;"
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                  <span className="text-sm">{project.client.name}</span>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
            </div>;
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
=======
            <div className="space-y-1">;
=======
            </div>;"
            <div className="space-y-1">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
              <div className="flex justify-between items-center text-sm">;
                <span>Progress</span>;"
                <span className="font-medium">{project.progress}%</span>;
              </div>;"
              <Progress value={project.progress} className="h-2" />;
            </div>;"
            <div className="grid grid-cols-2 gap-3 text-sm">;
              <div>;"
                <p className="text-muted-foreground">Start Date</p>;"
                <p className="font-medium">{project.startDate}</p>;
              </div>;
              <div>;"
                <p className="text-muted-foreground">End Date</p>;"
                <p className="font-medium">{project.endDate || "Not set"}</p>;
              </div>;
              <div>;"
                <p className="text-muted-foreground">Total Amount</p>;"
                <p className="font-medium">{project.totalAmount}</p>;
              </div>;
              <div>;"
                <p className="text-muted-foreground">Status</p>;"
                <p className="font-medium capitalize">{project.status}</p>;
              </div>;
            </div>;
            <div>;"
              <p className="text-sm text-muted-foreground mb-1">Description</p>;"
              <p className="text-sm">{project.description}</p>;
            </div>;"
            <div className="flex gap-2">;"
              <Button size="sm" variant="outline" className="gap-1 flex-1">;"
                <FileText className="h-4 w-4" /> Contract;
              </Button>;
              <Button;"
                size="sm";"
                variant="outline";"
                className="gap-1 flex-1";
                onClick={messageClient}
              >;"
                <MessageSquare className="h-4 w-4" /> Message;
              </Button>;
              <Button;"
                size="sm";"
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";
                onClick={startProjectCall}
              >;"
                <Video className="h-4 w-4" /> Call;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx

=======
                  <span className="text-sm">{project.client.name}</span>;"
                </div>;
              </div>;
              <Badge>{project.status}</Badge>;
            </div>;"
            <div className="space-y-1">;"
</div>"
              <div className="flex justify-between items-center text-sm">;"
</div>
                <span>Progress</span>;"
                <span className="font-medium">{project.progress}%</span>;"
              </div>;"
              <Progress value={project.progress} className="h-2" />;"
</Progress>
            </div>;"
            <div className="grid grid-cols-2 gap-3 text-sm">;"
</div>
              <div>;
</div>"
                <p className="text-muted-foreground">Start Date</p>;""
                <p className="font-medium">{project.startDate}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">End Date</p>;""
                <p className="font-medium">{project.endDate || "Not set"}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">Total Amount</p>;""
                <p className="font-medium">{project.totalAmount}</p>;"
              </div>;
              <div>;
</div>"
                <p className="text-muted-foreground">Status</p>;""
                <p className="font-medium capitalize">{project.status}</p>;"
              </div>;
            </div>;
            <div>;
</div>"
              <p className="text-sm text-muted-foreground mb-1">Description</p>;""
              <p className="text-sm">{project.description}</p>;"
            </div>;"
            <div className="flex gap-2">;"
</div>"
              <Button size="sm" variant="outline" className="gap-1 flex-1">;"
</Button>"
                <FileText className="h-4 w-4" /> Contract;"
</FileText>
              </Button>;
              <Button;"
                size="sm";""
                variant="outline";""
                className="gap-1 flex-1";"
                onClick={messageClient}
              >;
</Button>"
                <MessageSquare className="h-4 w-4" /> Message;"
</MessageSquare>
              </Button>;
              <Button;"
                size="sm";""
                className="gap-1 flex-1 bg-zion-purple hover:bg-zion-purple-light";"
                onClick={startProjectCall}
              >;
</Button>"
                <Video className="h-4 w-4" /> Call;"
</Video>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
              </Button>;

            </div>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
      <section>;
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
=======
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;
=======
      <section>;"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
        <div className="space-y-3">;
          {milestones.map((milestone) => (;
            <Card key={milestone.id}>;"
              <CardContent className="p-4">;"
                <div className="flex justify-between items-start mb-2">;"
                  <div className="flex items-center gap-2">;"
                    {milestone.status === "completed" ? (;"
                      <CheckCircle className="h-5 w-5 text-green-500" />;
                    ) : (;"
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;
                    )}"
                    <h3 className="font-medium">{milestone.title}</h3>;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx

      <section>;
</section>"
        <h2 className="text-lg font-medium mb-4">Milestones</h2>;""
        <div className="space-y-3">;"
</div>
            <Card key={milestone.id}>;
</Card>"
              <CardContent className="p-4">;"
</CardContent>"
                <div className="flex justify-between items-start mb-2">;"
</div>"
                  <div className="flex items-center gap-2">;"
</div>"
                      <CheckCircle className="h-5 w-5 text-green-500" />;"
</CheckCircle>"
                      <div className="h-5 w-5 rounded-full border-2 border-muted-foreground"></div>;""
                    <h3 className="font-medium">{milestone.title}</h3>;"
                  </div>;
                  <Badge;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                    variant={;
                      milestone.paymentStatus === "paid" ? "default" :;
=======

                    variant={;"
                      milestone.paymentStatus === "paid" ? "default" :;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";
=======

                    variant={;"
                      milestone.paymentStatus === "paid" ? "default" :;""
                      milestone.paymentStatus === "overdue" ? "destructive" : "outline";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                    }
                  >;
</Badge>
                  </Badge>
                </div>
                "
                <div className="pl-7">"
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Due Date:</span>

                    <span>{milestone.dueDate}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Amount:</span>
                    <span>{milestone.amount}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
                    <span className="text-muted-foreground">Status:</span>'"
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>
                  </div>
                  <Button "
                    size="sm" "
                    variant="outline" "
                    className="w-full mt-3 gap-1"
                  >"
                    View Details <ChevronRight className="h-4 w-4" />
=======
</div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Due Date:</span>"
                    <span>{milestone.dueDate}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Amount:</span>"
                    <span>{milestone.amount}</span>
                  </div>"
                  <div className="flex justify-between text-sm">"
</div>"
                    <span className="text-muted-foreground">Status:</span>""
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>'
                  </div>
                  <Button;'
                    size="sm"""
                    variant="outline"""
                    className="w-full mt-3 gap-1""
                  >
</Button>"
                    View Details <ChevronRight className="h-4 w-4" />"
</ChevronRight>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                  </Button>
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD
                  </Badge>;
                </div>;"
                <div className="pl-7">;"
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Due Date:</span>;
                    <span>{milestone.dueDate}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Amount:</span>;
                    <span>{milestone.amount}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
                    <span className="text-muted-foreground">Status:</span>;'"
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button;"
                    size="sm";"
                    variant="outline";"
                    className="w-full mt-3 gap-1";
                  >;"
                    View Details <ChevronRight className="h-4 w-4" />;
=======
</div>"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Due Date:</span>;"
                    <span>{milestone.dueDate}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Amount:</span>;"
                    <span>{milestone.amount}</span>;
                  </div>;"
                  <div className="flex justify-between text-sm">;"
</div>"
                    <span className="text-muted-foreground">Status:</span>;""
                    <span className="capitalize">{milestone.status.replace('_ ')}</span>;'
                  </div>;
                  <Button;'
                    size="sm";""
                    variant="outline";""
                    className="w-full mt-3 gap-1";"
                  >;
</Button>"
                    View Details <ChevronRight className="h-4 w-4" />;"
</ChevronRight>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
          ))}
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      </section>;
    </div>;
  );
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      </section>;
    </div>;
  );
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}


<<<<<<< HEAD:src_backup/mobile/components/projects/MobileProjectView.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

                  </Badge>;
                </div>;

}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;
=======
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD:src/mobile/components/projects/MobileProjectView.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/mobile/components/projects/MobileProjectView.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/mobile/components/projects/MobileProjectView.tsx
=======


        </div>;
      </section>;"
    </div>)<div className=\"pl-7\" />;"
                  <div className=\"flex justify-between text-sm\" />;"
                    <span className=\"text-muted-foreground\" />Due Date:</span>;
                    <span />{milestone.dueDate}</span>;
                  </div>;"
                  <div className=\"flex justify-between text-sm\" />;"
                    <span className=\"text-muted-foreground\" />Amount:</span>;
                    <span />{milestone.amount}</span>;
                  </div>;"
                  <div className=\"flex justify-between text-sm\" />;"
                    <span className=\"text-muted-foreground\" />Status:</span>;"
                    <span className=\"capitalize\" />{milestone.status.replace('_ ')}</span>;
                  </div>;
                  <Button;"
                    size=\"sm\";"
                    variant=\"outline\";"
                    className=\"w-full mt-3 gap-1\" />
"
                    View Details <ChevronRight className=\"h-4 w-4\" />;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
          ))}</div>;
      </section>;

    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/mobile/components/projects/MobileProjectView.tsx
