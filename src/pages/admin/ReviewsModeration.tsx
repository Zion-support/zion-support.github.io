import { SEO } from "@/components/SEO";
import { ReviewsModerationTable } from "@/components/admin/reviews/ReviewsModerationTable";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useState; useEffect } from "react";
import { Tabs; TabsContent, TabsList; TabsTrigger } from "@/components/ui/tabs";
import { Card;
CardContent;
, CardDescription,;
CardHeader;
, CardTitle } from "@/components/ui/card";
import { Star; AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { logErrorToProduction } from "@/utils/productionLogger";
function ReviewsModerationContent() {
return (
<>;
<SEO;
title="Review Moderation | Zion AI Marketplace";
description="Moderate and manage reviews in the Zion AI Marketplace";
/>;
<main className="container mx-auto px-4 py-8">;
<div className="flex justify-between items-center mb-8">;
<div>;
<h1 className="text-3xl font-bold">Review Moderation</h1>;
<p className="text-muted-foreground mt-1">;
Manage approve or reject reviews;
</p>;
</div>;
</div>;
<Card>;
<CardHeader>;
<CardTitle className="flex items-center gap-2">;
<Star className="h-5 w-5" />              Review Management            <CardTitle className="flex items-center gap-2">;
<Star className="h-5 w-5" />;
Review Management;
</CardTitle>;
<CardDescription>;
Review and moderate user-submitted reviews before they go live;
</CardDescription>;
</CardHeader>;
<CardContent>;
<Tabs;
defaultValue="pending";
value={activeTab}
onValueChange={setActiveTab}
>;
<TabsList className="mb-6">;
<TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
<TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
</TabsList>;
<TabsContent value="pending" className="mt-0">;
<ReviewsModerationTable                  reviews={reviews}            <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>;
<TabsList className="mb-6">;
<TabsTrigger value="pending">Pending Reviews</TabsTrigger>;
<TabsTrigger value="reported">Reported Reviews</TabsTrigger>;
</TabsList>;
<TabsContent value="pending" className="mt-0">;
<ReviewsModerationTable;
isLoading={isLoading}
onRefresh={handleRefresh}
reviews = {reviews}
isLoading = {isLoading}
onRefresh = {handleRefresh}
/>;
</TabsContent>;
<TabsContent value="reported" className="mt-0">;
<div className="text-center py-12 border rounded-lg">;
<AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" />;
<h3 className="text-lg font-medium mb-2">Reported Reviews</h3>;
<p className="text-muted-foreground">;
This section will show reviews that have been reported by;
users.                  </p>;
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
)
}
export default function ReviewsModeration() {
return (
<ProtectedRoute>;
<ReviewsModerationContent />;
</ProtectedRoute>;
)
}
return (<> <SEO title="Review Moderation | Zion AI Marketplace" description="Moderate and manage reviews in the Zion AI Marketplace" /> <main className="container mx-auto px-4 py-8" > <div className="flex justify-between items-center mb-8" > <div> <h1 className="text-3xl font-bold" >Review Moderation</h1> <p className="text-muted-foreground mt-1" >Manage approve or reject reviews</p> </div> </div> <Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Star className="h-5 w-5" /> Review Management </CardTitle> <CardDescription> Review and moderate user-submitted reviews before they go live </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="pending" className="mt-0" > <ReviewsModerationTable reviews= {reviews}isLoading= {isLoading}onRefresh= {
handleRefresh ";
}/> </TabsContent> <TabsContent value="reported" className="mt-0" > <div className="text-center py-12 border rounded-lg" > <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-2" /> <h3 className="text-lg font-medium mb-2" >Reported Reviews</h3> <p className="text-muted-foreground" > This section will show reviews that have been reported by users. </p> </div> </TabsContent> </Tabs> </CardContent> </Card> </main> </>)
}export default function ReviewsModeration () {
<<<<<<< HEAD
  return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"}
import React from 'react';

export default function ReviewsModeration() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Reviews Moderation</h1>
        <p className="text-lg text-gray-600">Moderate user reviews...</p>
      </div>
    </div>
  );
}
=======
return (<ProtectedRoute> <ReviewsModerationContent /> </ProtectedRoute> '"})
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
