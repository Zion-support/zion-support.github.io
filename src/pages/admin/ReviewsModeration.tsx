<<<<<<< HEAD
<<<<<<< HEAD
=======
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
import { logErrorToProduction } from '@/utils/productionLogger';
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  
  const fetchReviews = async () => {
    setIsLoading(true),
    try {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        description: "Failed to load reviews. Please try again later.",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      setIsLoading(false);
      logErrorToProduction(;
        error instanceof Error ? error && error.message : String(error),;
        error instanceof Error ? error : undefined,;
        { message: 'Error fetching reviews' }
      );
      toast({;
        title: 'Error',;
        description: 'Failed to load reviews. Please try again later.',;
        variant: 'destructive',;
      });
      setIsLoading(false);    }
  };

  useEffect(() => {;
    fetchReviews();        title: "Error",;
        description: "Failed to load reviews. Please try again later.",;
        variant: "destructive"}),;
      setIsLoading(false);
    }
  };

  useEffect(() => {;
    fetchReviews();
  useEffect((,) => {;
    fetchReviews();
  }, [activeTab]),;

  const handleRefresh = () => {;
    fetchReviews();
  };

  return (
    <>;
      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' });
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"});
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
  
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
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
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
=======
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
<<<<<<< HEAD

=======
              <TabsContent value='pending' className='mt-0'>
                <ReviewsModerationTable                  reviews={reviews}            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <ReviewsModerationTable
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                  reviews = {reviews,}
                  isLoading = {isLoading,}
                  onRefresh = {handleRefresh,}

              <TabsContent value="reported" className="mt-0">
<<<<<<< HEAD
                <div className="text-center py-12 border rounded-lg">
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.
<<<<<<< HEAD
<<<<<<< HEAD

                  </p>
=======
                  </p>
                  </p>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                </div>
<<<<<<< HEAD
              </TabsContent>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>
<<<<<<< HEAD
<<<<<<< HEAD

=======
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
}


export default function ReviewsModeration() {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                />;
              </TabsContent>;

              <TabsContent value='reported' className='mt-0'>;
                <div className='text-center py-12 border rounded-lg'>;
                  <AlertTriangle className='h-10 w-10 text-amber-500 mx-auto mb-2' />;
                  <h3 className='text-lg font-medium mb-2'>Reported Reviews</h3>;
                  <p className='text-muted-foreground'>;
                    This section will show reviews that have been reported by;
                    users.                  </p>              ;
              <TabsContent value="reported" className="mt-0">;
                <div className="text-center py-12 border rounded-lg">;
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
                  <p className="text-muted-foreground">;
                    This section will show reviews that have been reported by users.;
                </div>;
              </TabsContent>;
            </Tabs>;
          </CardContent>;
        </Card>;
      </main>;
    </>;
  );
}

export default function ReviewsModeration() {;
  return (
    <ProtectedRoute>;
      <ReviewsModerationContent />;
    </ProtectedRoute>;
  );
<<<<<<< HEAD
<<<<<<< HEAD


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
=======
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
