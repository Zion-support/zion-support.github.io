<<<<<<< HEAD
<<<<<<< HEAD
import { SEO } from '@/components/SEO'
import { ReviewsModerationTable } from '@/components/admin/reviews/ReviewsModerationTable'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
function ReviewsModerationContent() {

  const [activeTab, setActiveTab] = useState('pending')
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchReviews = async () => {
    setIsLoading(true)
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000))
      setReviews([])
      setIsLoading(false)
      logErrorToProduction(
        error instanceof Error ? error.message : String(error)
        error instanceof Error ? error : undefined
        { message: 'Error fetching reviews' }
      )
      toast({
        title: 'Error'
        description: 'Failed to load reviews. Please try again later.'
        variant: 'destructive'
      })
      setIsLoading(false) }
  }
  useEffect(() => {
    fetchReviews();        title: "Error"
        description: "Failed to load reviews. Please try again later."
        variant: "destructive"})
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchReviews()
  useEffect((,) => {
    fetchReviews()
  }, [activeTab])
  const handleRefresh = () => {
    fetchReviews()
  }

  };
  useEffect(() => {;
    fetchReviews();        title: "Error",

import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { logErrorToProduction } from '@/utils/productionLogger',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function ReviewsModerationContent() {
=======
function ReviewsModerationContent() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  
  const fetchReviews = async () => {
    setIsLoading(true),
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise (resolve => set_timeout (resolve, 1000));
      set_reviews ([]);
      setIsLoading (false);
      logErrorToProduction (
        error instanceof Error ? error.message : String (error),
        error instanceof Error ? error : undefined,
        { message: 'Error fetching reviews' }
      );
      toast ({
        title: 'Error',
        description: 'Failed to load reviews. Please try again later.',
        variant: 'destructive',
      });
      setIsLoading (false) }
  }
  useEffect (() => {
    fetch_reviews ();        title: "Error",
        description: "Failed to load reviews. Please try again later.",
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        variant: "destructive"}),
      setIsLoading (false);
    }
  }
  useEffect (() => {
    fetch_reviews ();
  useEffect ((, ) => {
    fetch_reviews ();
  }, [active_tab]),
  const handle_refresh = () =>: any {
    fetch_reviews ();
  }
import { SEO } from '@/components/SEO';
import { ReviewsModerationTable } from '@/components/admin/reviews/ReviewsModerationTable';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Star, AlertTriangle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState('pending');
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {;
    setIsLoading(true);
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews([]);



  return (
    <>;

      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"}),
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  useEffect(() => {
    fetchReviews()
  useEffect((,) => {
    fetchReviews()
  },

  }
  useEffect(() => {
    fetchReviews()
  }, [activeTab]),

  const handleRefresh = () => {
    fetchReviews()
  },
  
  }
  },
  
  return (
  },
  
  }
    <>
      <SEO
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Review Moderation</h1>
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Star className='h-5 w-5' />              Review Management            <CardTitle className="flex items-center gap-2">
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Star className='h-5 w-5' />              Review Management            <CardTitle className="flex items-center gap-2">
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Star className="h-5 w-5" />
              Review Management
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live
            </CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
=======

            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsContent value='pending' className='mt-0'>
                <ReviewsModerationTable                  reviews={reviews}            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      <main className='container mx-auto px-4 py-8'>;
        <div className='flex justify-between items-center mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold'>Review Moderation</h1>;
            <p className='text-muted-foreground mt-1'>;
              Manage, approve, or reject reviews;
            </p>;
          </div>;
        </div>;

        <Card>;
          <CardHeader>;
            <CardTitle className='flex items-center gap-2'>;
              <Star className='h-5 w-5' />              Review Management            <CardTitle className="flex items-center gap-2">;
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <Tabs
              defaultValue='pending'
              value={activeTab}
              onValueChange={setActiveTab}>;
              <TabsList className='mb-6'>;
                <TabsTrigger value='pending'>Pending Reviews</TabsTrigger>;
                <TabsTrigger value='reported'>Reported Reviews</TabsTrigger>;
              </TabsList>;

              <TabsContent value='pending' className='mt-0'>;
                <ReviewsModerationTable                  reviews={reviews}            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;

              <TabsContent value="pending" className="mt-0">;

                <ReviewsModerationTable
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                  reviews = {reviews,}
                  isLoading = {isLoading,}
                  onRefresh = {handleRefresh,}

              


              
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </TabsContent>
              

              <TabsContent value="reported" className="mt-0">
                <div className="text-center py-12 border rounded-lg">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.
                  </p>
<<<<<<< HEAD
<<<<<<< HEAD
                  </p>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
=======
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


export default function ReviewsModeration() {
      <SEO;
        title='Review Moderation | Zion AI Marketplace';
        description='Moderate and manage reviews in the Zion AI Marketplace';
      />;
      <main className='container mx - auto px - 4 py - 8'>;
        <div className='flex justify - between items - center mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold'>Review Moderation</h1>;
            <p className='text - muted - foreground mt - 1'>;
              Manage, approve, or reject reviews;
            </p>;
  )
<<<<<<< HEAD
}
export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  )
}
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {
  reviews
}isLoading= {
  isLoading
}onRefresh= {
  handleRefresh "
}/> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>)
}export default function ReviewsModeration () {
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"};
;

import { SEO } from "@/components/SEO",;
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { useState, useEffect } from "react",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Star, AlertTriangle } from 'lucide-react';
import { toast } from "@/components/ui/use-toast",;
import { logErrorToProduction } from '@/utils/productionLogger',;
function ReviewsModerationContent() {;
  const [activeTab, setActiveTab] = useState("pending"),;
  const [reviews, setReviews] = useState([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const fetchReviews = async () => {;
    setIsLoading(true),;
    try {;
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      setReviews([]),;
      setIsLoading(false);
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),;
      toast({;
        title: "Error",;
        description: "Failed to load reviews. Please try again later.",;
        variant: "destructive"}),;
      setIsLoading(false);
    }
  },;
  useEffect(() => {;
    fetchReviews();
  }, [activeTab]),;
  const handleRefresh = () => {;
    fetchReviews();
  };
  return (;
    <>;
      <SEO;
        title="Review Moderation | Zion AI Marketplace";
        description="Moderate and manage reviews in the Zion AI Marketplace";
      />;
      <main className="container mx-auto px-4 py-8">;
        <div className="flex justify-between items-center mb-8">;
          <div>;
            <h1 className="text-3xl font-bold">Review Moderation</h1>;
            <p className="text-muted-foreground mt-1">Manage, approve, or reject reviews</p>;
          </div>;
        </div>;
        <Card>;
          <CardHeader>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <CardTitle className="flex items-center gap-2">;
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
              <TabsList className="mb-6">;
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
              </TabsList>;
              <TabsContent value="pending" className="mt-0">;
                <ReviewsModerationTable;
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />;
              </TabsContent>;
              <TabsContent value="reported" className="mt-0">;
                <div className="text-center py-12 border rounded-lg">;
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
                  <p className="text-muted-foreground">;
                    This section will show reviews that have been reported by users.;
                  </p>;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
    </>;
  );
}
;
export default function ReviewsModeration() {;
  return (;
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>;
  );
<<<<<<< HEAD
}
;
}
;
=======


return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <main className="container mx - auto px - 4 py - 8" > <div className="flex justify - between items - center mb - 8" > <div> <h1 className="text - 3xl font - bold" >Review Moderation</h1> <p className="text - muted - foreground mt - 1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items - center gap - 2" > <Star className="h - 5 w - 5" /> Review Management </CardTitle> <CardDescription> Review and moderate user - submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt - 0" > <ReviewsModerationTable reviews= {
  reviews;
}is_loading= {
  is_loading;
}on_refresh= {
  handle_refresh ";
}/> </TabsContent> <TabsContent value="reported" className="mt - 0" > <div className="text - center py - 12 border rounded - lg" > <AlertTriangle className="h - 10 w - 10 text - amber - 500 mx - auto mb - 2" /> <h3 className="text - lg font - medium mb - 2" >Reported Reviews</h3> <p className="text - muted - foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>);
}export default /**
 * ReviewsModeration - Function description
 */
function ReviewsModeration() {
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"};
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
