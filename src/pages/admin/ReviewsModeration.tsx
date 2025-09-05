
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
<<<<<<< HEAD
        title: "Error",
        description: "Failed to load reviews. Please try again later.",
        variant: "destructive"}),
      setIsLoading(false)
=======
        title: &quot;Error&quot;,
        description: &quot;Failed to load reviews. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
=======

function ReviewsModerationContent() {_const [activeTab, _setActiveTab] = useState("pending");
  const [reviews, _setReviews] = useState([]);
  const [isLoading, _setIsLoading] = useState(true);
  
  const _fetchReviews = async () => {
    setIsLoading(true);
    try {
      // In a real application, _you would fetch reviews from an API
      // For now, _let's simulate a delay and return empty data
      await new Promise(resolve => setTimeout(resolve, _1000));
      setReviews([]);
      setIsLoading(false);} catch (error) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error fetching reviews'});
      toast({_title: "Error", _description: "Failed to load reviews. Please try again later.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      setIsLoading(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

<<<<<<< HEAD
  useEffect(() => {
    fetchReviews()
  }, [activeTab]),

  const handleRefresh = () => {
    fetchReviews()
  },
=======
  useEffect__(() => {_fetchReviews();}, [activeTab]);

  const _handleRefresh = () => {_fetchReviews();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
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
<<<<<<< HEAD
            <Tabs defaultValue=&quot;pending&quot; value={activeTab} onValueChange={setActiveTab}>
              <TabsList className=&quot;mb-6&quot;>
                <TabsTrigger value=&quot;pending&quot;>Pending Reviews</TabsTrigger>
                <TabsTrigger value=&quot;reported&quot;>Reported Reviews</TabsTrigger>
=======
            <Tabs defaultValue="pending" value={_activeTab} onValueChange={_setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </TabsList>
              
              <TabsContent value=&quot;pending&quot; className=&quot;mt-0&quot;>
                <ReviewsModerationTable 
                  reviews={_reviews}
                  isLoading={_isLoading}
                  onRefresh={_handleRefresh}
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
  )
}

export default function ReviewsModeration() {_return (
    <ProtectedRoute>
      <ReviewsModerationContent />
    </ProtectedRoute>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
