
import { SEO } from &quot;@/components/SEO&quot;;
import { ReviewsModerationTable } from &quot;@/components/admin/reviews/ReviewsModerationTable&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { useState, useEffect } from &quot;react&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Star, AlertTriangle } from 'lucide-react'
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { logErrorToProduction } from '@/utils/productionLogger';

function ReviewsModerationContent() {
  const [activeTab, setActiveTab] = useState(&quot;pending&quot;);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      // In a real application, you would fetch reviews from an API
      // For now, let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReviews([]);
      setIsLoading(false);
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching reviews' });
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [activeTab]);

  const handleRefresh = () => {
    fetchReviews();
  };
  
  return (
    <>
      <SEO
        title=&quot;Review Moderation | Zion AI Marketplace&quot;
        description=&quot;Moderate and manage reviews in the Zion AI Marketplace&quot;
      />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;flex justify-between items-center mb-8&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold&quot;>Review Moderation</h1>
            <p className=&quot;text-muted-foreground mt-1&quot;>Manage, approve, or reject reviews</p>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className=&quot;flex items-center gap-2&quot;>
              <Star className=&quot;h-5 w-5&quot; />
              Review Management
            </CardTitle>
            <CardDescription>
              Review and moderate user-submitted reviews before they go live
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue=&quot;pending&quot; value={activeTab} onValueChange={setActiveTab}>
              <TabsList className=&quot;mb-6&quot;>
                <TabsTrigger value=&quot;pending&quot;>Pending Reviews</TabsTrigger>
                <TabsTrigger value=&quot;reported&quot;>Reported Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;pending&quot; className=&quot;mt-0&quot;>
                <ReviewsModerationTable 
                  reviews={reviews}
                  isLoading={isLoading}
                  onRefresh={handleRefresh}
                />
              </TabsContent>
              
              <TabsContent value=&quot;reported&quot; className=&quot;mt-0&quot;>
                <div className=&quot;text-center py-12 border rounded-lg&quot;>
                  <AlertTriangle className=&quot;h-10 w-10 text-amber-500 mx-auto mb-2&quot; />
                  <h3 className=&quot;text-lg font-medium mb-2&quot;>Reported Reviews</h3>
                  <p className=&quot;text-muted-foreground&quot;>
                    This section will show reviews that have been reported by users.
                  </p>
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
  return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
  );
}
