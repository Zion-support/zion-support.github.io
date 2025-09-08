

import { Button } from "@/components/ui/button,
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from @/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList,
import { LeaveReviewModal } from @/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews;
import { useAuth } from @/hooks/useAuth";
interface ProjectReviewSectionProps {
  project: Project
import { Project  } from '@/types/projects';
import { useState } from "react",
import { Project } from '@/types/projects'
import { useState } from 'react'
import { Project  } from '@/types/projects';
import { useState } from "react",
import { Project } from '@/types/projects'
import { useState } from 'react'
import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { ReviewsList } from '@/components/reviews/ReviewsList'
import { LeaveReviewModal } from '@/components/reviews/LeaveReviewModal'
import { useReviews } from '@/hooks/useReviews'
import { useAuth } from '@/hooks/useAuth'
interface ProjectReviewSectionProps {
  project: Project
  const revieweeId = isClient ? project.talent_id : project.client_id
  const revieweeName = isClient
    ? talentProfile?.full_name |'Talent'
    : clientProfile?.full_name |'Client'
  const canLeaveReview = isCompleted && (isClient |isTalent) && !userReview
  const hasLeftReview = userReview != null
import { Project } from '@/types/projects',
import { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { ReviewsList } from "@/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal",
import { useReviews } from "@/hooks/useReviews",
import { useAuth } from "@/hooks/useAuth",
interface ProjectReviewSectionProps {
  project: Project
}

  const revieweeId = isClient ? project.talent_id : project.client_id
  const revieweeName = isClient
    ? talentProfile?.full_name |Talent'
    : clientProfile?.full_name |'Client
  const canLeaveReview = isCompleted && (isClient |isTalent) && !userReview
  const hasLeftReview = userReview != null
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Card className=mt-6'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2>
          <Star className=h-5 w-5 text-yellow-400' />
          Reviews
        </CardTitle>
        <CardDescription>
          Reviews are visible once the project is completed and both parties
          submit feedback
  const canLeaveReview = isCompleted && (isClient || isTalent) && !userReview,
  const hasLeftReview = userReview != null,
  
    <Card className="mt-6">




        {isCompleted ? (
          <div className="space-y-6>
            {(isClient || isTalent) && (

      <CardContent>
        {isCompleted ? (
          <div className='space-y-6'>
            {(isClient |isTalent) && (
              <div className='border-b pb-4 mb-4'>
      
      <CardContent>
      <CardContent>
        {isCompleted ? (
          <div className='space-y-6'>
            {(isClient |isTalent) && (
              <div className='border-b pb-4 mb-4'>
      
      <CardContent>
              <div className=border-b pb-4 mb-4">
                {canLeaveReview ? (
                  <div className='bg-muted/20 rounded-lg p-4 text-center>
                    <h3 className=font-medium mb-2'>Share your experience</h3>
                    <p className='text-sm text-muted-foreground mb-3>
                      Your review will help build a trustworthy community
                    </p>
                    <Button onClick={(,) => setIsReviewModalOpen(true)}>
                  <div className="bg-muted/20 rounded-lg p-4 text-center">
                    <h3 className="font-medium mb-2">Share your experience</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                {canLeaveReview ? (
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>
                    <h3 className='font-medium mb-2'>Share your experience</h3>
                    <p className='text-sm text-muted-foreground mb-3'>



import { useState } from react';
                  <div className="bg-muted/20 rounded-lg p-4 text-center>
                    <h3 className=font-medium mb-2">Thank you for your review!</h3>
                    <p className="text-sm text-muted-foreground mb-3>
                      Your review is {userReview.status === approved" ? "published : pending approval"}
                    </p>
                    {userReview.status === 'pending' && (
                      <Button
                        variant='outline'
                        onClick={() => setIsReviewModalOpen(true)}
                      >                        Edit Review
                      </Button>
                    {userReview.status === "pending && (
                      <Button variant=outline" onClick={() => setIsReviewModalOpen(true)}>


                    {userReview.status === "pending && (
                      <Button variant=outline" onClick={() => setIsReviewModalOpen(true)}>


            )}

import { Star } from lucide-react';
import { Button } from @/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card,
import { ReviewsList } from @/components/reviews/ReviewsList",
import { LeaveReviewModal } from "@/components/reviews/LeaveReviewModal,
import { useReviews } from @/hooks/useReviews",
import { useAuth } from "@/hooks/useAuth,
interface ProjectReviewSectionProps {
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { ReviewsList } from '@/components/reviews/ReviewsList';
import { LeaveReviewModal } from '@/components/reviews/LeaveReviewModal';
import { useReviews } from '@/hooks/useReviews';
import { useAuth } from '@/hooks/useAuth';
interface ProjectReviewSectionProps {;
                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}
            )}

                  <div className="bg-muted/20 rounded-lg p-4 text-center">;
                    <h3 className="font-medium mb-2">Thank you for your review!</h3>;
                    <p className="text-sm text-muted-foreground mb-3">;
                      Your review is {userReview.status === "approved" ? "published" : "pending approval"}


            <ReviewsList
              reviews = {reviews}
              isLoading = {isLoading}
              onReportReview = {reportReview}
            />
          </div>
        ) : (
          <div className='bg-muted/20 rounded-lg p-6 text-center'>
            <h3 className='font-medium mb-2'>Reviews will be available once the project is completed</h3>
            <p className='text-sm text-muted-foreground'>




    </Card>;
  );


      </CardContent>
      {/* Review Modal */}
      {(isClient |isTalent) && (
        <LeaveReviewModal
          projectId = {project.id,}
          revieweeId = {revieweeId,}
          revieweeName = {revieweeName,}
          isOpen = {isReviewModalOpen,}
          onClose = {(,) => setIsReviewModalOpen(false),}
        />
      )}
    </Card>
  )
}
}
    </Card>;
  );
};
};


;

ursor/fix-website-loading-errors-and-merge-6662
;
;
ursor/fix-website-loading-errors-and-merge-6662
;
;
    </Card>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
