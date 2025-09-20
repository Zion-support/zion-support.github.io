import React { useState useEffect } from 'react';
import useJobDetails from '@/hooks/useJobDetails';
import { ApplyToJobModal,, ,  } from '@/components/messaging/job-application';
import { SEO,, ,  } from '@/components/SEO';
import { useWhitelabel,, ,  } from '@/context/WhitelabelContext';
import { JobDetailsSkeleton,  } from '@/components/jobs';
interface Job {
  id: string;,
title: string;
  description: string;
  company_name?: string;
client_id: string;
  skills?: string[];
  created_at: string;,
category: string;
isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}        />
      )}
    </>
  );
  return (<> <Header /> <div className="container mx-auto px-4 py-16 text-center" > <h1 className="text-2xl font-bold mb-4" >Job Not Found</h1> <p className="mb-8" >The job you're looking for doesn't exist or has been removed.</p> <Button onClick={';
  () => router.push ('/careers') ;
}>View All Jobs</Button> </div> </>) ;
}router.push (`/login?redirect=$ {encodeURIComponent (`/jobs/$ {';
  jobId |'' ;
}`) ;
}`);
//Added null check for jobId return;
}setIsApplyModalOpen (true) ;
}
const isOwnJob = user?.id === job.client id;
`$ {job.title ;
}- $ {';
  isWhitelabel ? brandName : 'Zion AI Marketplace' ;
}` ;
}description= {job.description.substring (0 160) ";
}/> <Header /> <main className="container mx-auto px-4 py-8" > <div className="mb-6" > <Button > ← Back to Jobs </Button> </div> <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" > <div className="lg:col-span-2" > <Card> <CardHeader> <div className="flex justify-between items-start" > <div> </div> </div> <Badge> {job.category ";
}</Badge> </div> </CardHeader> <CardContent className="space-y-6" > <div> </div> </div> <div> </Badge>) ) ";
}</div> </div> </CardContent> </Card> </div> <div> <Card> </p> </div> </div> <div className="flex items-start" > <Briefcase className="mt-1 h-5 w-5 text-muted-foreground" /> <div className="ml-3" > <p className="text-sm text-muted-foreground" >Job Type</p> <p className="font-medium" >Freelance / Remote</p> </div> </div> {";
  !isOwnJob && (<Button className="w-full mt-4" onClick={handleApply ;
}disabled= {isOwnJob ;
}> Apply Now </Button>) ;
}</div>) ;
}</CardContent> </Card> </div> </div> </main> {/* Job application modal */ ;
}{job && (<ApplyToJobModal job= {;
  {;
  />) ;
}</>) ;
}'"
}
}