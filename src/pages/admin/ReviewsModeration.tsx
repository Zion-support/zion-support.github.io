<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { SEO } from '@/components/SEO';
import { ReviewsModerationTable } from '@/components/admin/reviews/ReviewsModerationTable';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Star, AlertTriangle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState('pending');
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

import { SEO } from "@/components/SEO";
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from "@/components/ui/use-toast";
import { logErrorToProduction } from '@/utils/productionLogger';
function ReviewsModerationContent() {

  const [ activeTab, setActiveTab ] = useState("pending"),
  const [ reviews, setReviews ] = useState([]),
  const [ isLoading, setIsLoading ] = useState(true),

  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews([]);
<<<<<<< HEAD
      setIsLoading(false);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setIsLoading(false);
=======
      setIsLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } catch (error) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error : undefined,
        { message: 'Error fetching reviews' }
      );
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        title: 'Error',
        description: 'Failed to load reviews. Please try again later.',
        variant: 'destructive',
      });
<<<<<<< HEAD
      setIsLoading(false);    }
  };

  useEffect(() => {
    fetchReviews();
=======
      setIsLoading(false);
=======
      setIsLoading(false)
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' });
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"});
      setIsLoading(false)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"}),
      setIsLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    fetchReviews();
=======
    fetchReviews()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [activeTab]);

  const handleRefresh = () => {
    fetchReviews();
  };

  return (
    <>
      <SEO
        title='Review Moderation | Zion AI Marketplace'
        description='Moderate and manage reviews in the Zion AI Marketplace'
      />
      <main className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold'>Review Moderation</h1>
            <p className='text-muted-foreground mt-1'>
              Manage, approve, or reject reviews
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Star className='h-5 w-5' />              Review Management
=======
<<<<<<< HEAD
            <CardTitle className='flex items-center gap-2'>
              <Star className='h-5 w-5' />
=======
    fetchReviews()
  }, [activeTab]);

  const handleRefresh = () => {
    fetchReviews()
  };


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
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Review Management
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live
            </CardDescription>
          </CardHeader>
          <CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <Tabs
              defaultValue='pending'
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className='mb-6'>
                <TabsTrigger value='pending'>Pending Reviews</TabsTrigger>
                <TabsTrigger value='reported'>Reported Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value='pending' className='mt-0'>
<<<<<<< HEAD
                <ReviewsModerationTable                  reviews={reviews}
=======
                <ReviewsModerationTable
=======
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-0">
                <ReviewsModerationTable 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  reviews={reviews}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </TabsContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

              <TabsContent value='reported' className='mt-0'>
                <div className='text-center py-12 border rounded-lg'>
                  <AlertTriangle className='h-10 w-10 text-amber-500 mx-auto mb-2' />
                  <h3 className='text-lg font-medium mb-2'>Reported Reviews</h3>
                  <p className='text-muted-foreground'>
                    This section will show reviews that have been reported by
<<<<<<< HEAD
                    users.                  </p>
=======
                    users.
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              
              <TabsContent value="reported" className="mt-0">
                <div className="text-center py-12 border rounded-lg">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-lg font-medium mb-2">Reported Reviews</h3>
                  <p className="text-muted-foreground">
                    This section will show reviews that have been reported by users.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function ReviewsModeration() {
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

};
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage, approve, or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {;
  reviews ;
}isLoading= {;
  isLoading ;
}onRefresh= {;
  handleRefresh ";
}/> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>) ;
}export default function ReviewsModeration () {;
<<<<<<< HEAD
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"
=======
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
