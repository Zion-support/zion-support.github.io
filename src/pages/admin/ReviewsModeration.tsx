

function ReviewsModerationContent() {
  const [active_tab, setActiveTab] = useState ('pending');
  const [reviews, set_reviews] = useState ([]);
  const [is_loading, setIsLoading] = useState (true);
  const fetch_reviews = async () => {
    setIsLoading (true);
    try {
      // In a real application, you would fetch reviews from an API;
      // For now, let's simulate a delay and return empty data;
      await new Promise (resolve => set_timeout (resolve, 1000));
      set_reviews ([]);
      setIsLoading (false);
      logErrorToProduction (
        error instanceof Error ? error.message : String (error),
        error instanceof Error ? error : undefined,
        { message: 'Error fetching reviews' }
<<<<<<< HEAD
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
=======
      )
      toast({
        title: 'Error'
        description: 'Failed to load reviews. Please try again later.'
        variant: 'destructive'
      })
      setIsLoading(false) }
<<<<<<< HEAD
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

=======
  };
  useEffect(() => {;
    fetchReviews();        title: "Error",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { SEO } from "@/components/SEO",
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { useState, useEffect } from "react",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from "@/components/ui/use-toast",
import { logErrorToProduction } from '@/utils/productionLogger',
function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState("pending"),
  const [reviews, setReviews] = useState([]),
  const [isLoading, setIsLoading] = useState(true),
  
  const fetchReviews = async () => {
    setIsLoading(true),
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000)),
      setReviews([]),
      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' }),
      toast({
        title: "Error",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        description: "Failed to load reviews. Please try again later.",
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' });
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"});
      setIsLoading(false)
    }

<<<<<<< HEAD
=======
  useEffect(() => {
    fetchReviews()
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }, [activeTab]),

  const handleRefresh = () => {
    fetchReviews()
<<<<<<< HEAD
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <Star className="h-5 w-5" />
              Review Management
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live
            </CardDescription>
          </CardHeader>
          <CardContent>

            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>

=======
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>

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
                <ReviewsModerationTable 
                  reviews={reviews}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                  reviews = {reviews,}
                  isLoading = {isLoading,}
                  onRefresh = {handleRefresh,}

              

=======

              
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </TabsContent>
              
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              <TabsContent value="reported" className="mt-0">
                <div className="text-center py-12 border rounded-lg">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.

                  </p>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>

  );
}


export default function ReviewsModeration() {
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
=======
  )

  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"};
;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>;
        </div>;
        <Card>;
          <CardHeader>;

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
