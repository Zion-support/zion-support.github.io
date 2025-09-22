:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD

import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from 'lucide-react'
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea",
interface ReviewCardProps {
  review: Review,
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState(""),
  const [isReporting, setIsReporting] = useState(false),
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),

  const handleReport = async () => {
    if (!reportReason.trim()) return,

    setIsReporting(true),
    const success = await onReport(review.id, reportReason),
    setIsReporting(false),

    if (success) {
      setReportReason(""),
      setIsReportDialogOpen(false)
    }
  },

  const renderStars = (rating?: number) => {
    if (!rating) return null,

    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  },

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  },

  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
return (
      <div className='flex'>;
        {[1, 2, 3, 4, 5].map(star => (;
:src_backup/components/reviews/ReviewCard.tsx
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
  DialogTrigger} from "@/components/ui/dialog",
import { Textarea } from "@/components/ui/textarea";
interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const handleReport = null;
import { Review } from '@/types/reviews'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {  Dialog,  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
  DialogTrigger
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
interface ReviewCardProps {
  review: Review
onReport: (reviewId: string, reason: string) => Promise<boolean>
}export function ReviewCard ({
  review, onReport
}: ReviewCardProps) {
  const handleReport = async () => {
  if (!reportReason.trim () ) return
setIsReporting (true)
const success = await onReport (review.id, reportReason)
setIsReporting (false)
if (success) {
export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState('')
  const [isReporting, setIsReporting] = useState(false)
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false)
  const handleReport = async () => {
    if (!reportReason.trim()) return
    setIsReporting(true)
    const success = await onReport(review.id, reportReason)
    setIsReporting(false)
    if (success) {
      setReportReason('')
      setIsReportDialogOpen(false)
    }
  }
  const renderStars = (rating?: number) => {
    if (!rating) return null
    return (
      <div className='flex'>
        {[1, 2, 3, 4, 5].map(star => (
origin/cursor/automate-test-improve-and-merge-code-2533
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />;

import {  Dialog,  Dialog,

import { useState } from "react","
import { formatDistanceToNow } from "date-fns",'
import { Star, Flag, User } from 'lucide-react'"
import { Review } from "@/types/reviews","
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",
import {}
  Dialog,

  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

:src_backup/components/reviews/ReviewCard.tsx
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { Star, Flag, User } from 'lucide-react'
import { Review } from "@/types/reviews",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {}
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
          />
        ))}
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD:src_backup/components/reviews/ReviewCard.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>
    )
  }
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }
  const getInitials = (name: string,) => {
    return name
      .split(" ")
      .map((n,) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }
  return (
    <div className='border rounded-lg p-4 bg-card'>
      <div className='flex justify-between items-start mb-3'>
        <div className='flex items-center gap-3'>
          {review.is_anonymous ? (
            <Avatar>
              <AvatarFallback className='bg-muted'>
                <User className='h-4 w-4' />
  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
:src/components/reviews/ReviewCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <AvatarFallback className="bg-muted">
=======
"
              <AvatarFallback className="bg-muted">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/reviews/ReviewCard.tsx
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
:src/components/reviews/ReviewCard.tsx
<AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
<<<<<<< HEAD
                  {review.reviewer_profile?.display_name ? 
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { Star, Flag, User } from 'lucide-react';
import { Review } from "@/types/reviews",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
  DialogTrigger} from "@/components/ui/dialog",;
import { Textarea } from "@/components/ui/textarea",;
interface ReviewCardProps {;
  review: Review,;
  onReport: (reviewId: string, reason: string) => Promise<boolean>;
}
;
export function ReviewCard({ review, onReport }: ReviewCardProps) {;
  const [reportReason, setReportReason] = useState(""),;
  const [isReporting, setIsReporting] = useState(false),;
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false),;
  const handleReport = async () => {;
    if (!reportReason.trim()) return,;
    setIsReporting(true),;
    const success = await onReport(review.id, reportReason),;
    setIsReporting(false),;
    if (success) {;
      setReportReason(""),;
      setIsReportDialogOpen(false);
    }
  },;
  const renderStars = (rating?: number) => {;
    if (!rating) return null,;
    return (;
      <div className="flex">;
        {[1, 2, 3, 4, 5].map((star) => (;
          <Star;
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />;
        ))}
      </div>;
    );
  };
  const getInitials = (name: string) => {;
    return name;
      .split(" ");
      .map((n) => n[0]);
      .join("");
      .toUpperCase();
      .substring(0, 2);
  };
return (;
    <div className="border rounded-lg p-4 bg-card">;
      <div className="flex justify-between items-start mb-3">;
        <div className="flex items-center gap-3">;
          {review.is_anonymous ? (;
            <Avatar>;
              <AvatarFallback className="bg-muted">;
                <User className="h-4 w-4" />;
              </AvatarFallback>;
            </Avatar>;
          ) : (;
            <Avatar>;
              {review.reviewer_profile?.avatar_url ? (;
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />;
              ) : (;
                <AvatarFallback>;
                  {review.reviewer_profile?.display_name ?;
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>;
              )}
            </Avatar>;
          )}
:src_backup/components/reviews/ReviewCard.tsx
<div className="flex items - center gap - 3">;

          {review.is_anonymous ? (
            <Avatar>;"
              <AvatarFallback className="bg - muted">;"
                <User className="h - 4 w - 4" />;
              </AvatarFallback>;
            </Avatar>) : (
            <Avatar>;
              {review.reviewer_profile?.avatar_url ? (

                <AvatarImage src={review && review.reviewer_profile.avatar_url} alt={review && review.reviewer_profile.display_name} />;
              ) : (;
                <AvatarFallback>;
                  {review && review.reviewer_profile?.display_name ? ;"
                    getInitials(review && review.reviewer_profile.display_name) : "??"}
<AvatarImage
                  src={review.reviewer_profile.avatar_url}
                  alt={review.reviewer_profile.display_name}
                />
              ) : (
                <AvatarFallback>
                  {review.reviewer_profile?.display_name
                    ? getInitials(review.reviewer_profile.display_name)
                    : '??'}
origin/cursor/automate-test-improve-and-merge-code-2533
                </AvatarFallback>
              )}
            </Avatar>
          )}
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD
<div>
            <div className='font-medium'>
              {review.is_anonymous
                ? 'Anonymous'
                : review.reviewer_profile?.display_name |'User'}
            </div>
            <div className='text-sm text-muted-foreground'>
              {formatDistanceToNow(new Date(review.created_at), {
                addSuffix: true
              })}
            </div>
          </div>
        </div>
        <div className='flex'>{renderStars(review.rating)}</div>
      </div>
      <div className='mb-4'>
        <p className='text-sm whitespace-pre-wrap'>{review.review_text}</p>
      </div>
      {(review.communication_rating |
        review.quality_rating |
        review.timeliness_rating |
:src/components/reviews/ReviewCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        review.would_work_again !== undefined) && (
        <div className='border-t pt-3 mt-3'>
          <div className='flex flex-wrap gap-2'>
            {review.communication_rating && (

              </Badge>
            )}

            {review.quality_rating && ('
              <Badge variant='outline' className='flex gap-1 items-center'>
                Quality'
                <span className='ml-1 text-yellow-500'>
                  {review.quality_rating}/5;
                </span>
              </Badge>
            )}

            {review.timeliness_rating && ('
              <Badge variant='outline' className='flex gap-1 items-center'>
                Timeliness'
                <span className='ml-1 text-yellow-500'>
                  {review.timeliness_rating}/5;
                </span>
              </Badge>
            )}'
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Communication;'
                <span className='ml - 1 text - yellow - 500'>;
                  {review.communication_rating}/5;
                </span>;
              </Badge>)}
            {review.quality_rating && ('
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Quality;'
                <span className='ml - 1 text - yellow - 500'>;
                  {review.quality_rating}/5;
                </span>;
              </Badge>)}
            {review.timeliness_rating && ('
              <Badge variant='outline' className='flex gap - 1 items - center'>;
                Timeliness;'
                <span className='ml - 1 text - yellow - 500'>;
                  {review.timeliness_rating}/5;
                </span>;
              </Badge>)}
            {review.would_work_again !== undefined && (
:src_backup/components/reviews/ReviewCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
              <Badge
                variant={review.would_work_again ? 'default' : 'secondary'}
                className={`${review.would_work_again ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}              >
                {review.would_work_again
                  ? 'Would work again'
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD
                  : 'Would not work again'}              </Badge>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                {review.would_work_again ? "Would work again" : "Would not work again"}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
        <div className="flex">;
          {renderStars(review.rating)}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>

      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && ("
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication"
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
</Badge>
            )}
            {review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}

            {review.timeliness_rating && (
<Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              <Badge variant="outline" className="flex gap - 1 items - center">;
                Timeliness;"
                <span className="ml - 1 text - yellow - 500">{review.timeliness_rating}/5</span>;
              </Badge>)}
            {review.would_work_again !== undefined && (
              <Badge;

              </Badge>
            )}
            {review.quality_rating && (
"
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality"
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>

              </Badge>
            )}
            {review.timeliness_rating && (
"
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness"
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </Badge>
            )}

            {review.would_work_again !== undefined && (
:src_backup/components/reviews/ReviewCard.tsx
              <Badge 
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >"
                {review.would_work_again ? "Would work again" : "Would not work again"}
</Badge>
                  : 'Would not work again'}
              </Badge>
origin/cursor/automate-test-improve-and-merge-code-2533
            )}

            {review && review.quality_rating && (;'
              <Badge variant='outline' className='flex gap-1 items-center'>;
                Quality;'
                <span className='ml-1 text-yellow-500'>;
                  {review && review.quality_rating}/5;
                </span>;
              </Badge>;
            )}

            {review && review.timeliness_rating && (;'
              <Badge variant='outline' className='flex gap-1 items-center'>;
                Timeliness;'
                <span className='ml-1 text-yellow-500'>;
                  {review && review.timeliness_rating}/5;
                </span>;
              </Badge>;
            )}

            {review && review.would_work_again !== undefined && (;
              <Badge'
                variant={review && review.would_work_again ? 'default' : 'secondary'}'`
                className={`${review && review.would_work_again ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>;
                {review && review.would_work_again;'
                  ? 'Would work again';'
                  : 'Would not work again'}              </Badge>;"
                {review && review.would_work_again ? "Would work again" : "Would not work again"}
          <div>;"
            <div className="font-medium">;"
              {review && review.is_anonymous ? "Anonymous" : review && review.reviewer_profile?.display_name || "User"}
            </div>;"
            <div className="text-sm text-muted-foreground">;
              {formatDistanceToNow(new Date(review && review.created_at), { addSuffix: true })}
            </div>;
          </div>;
        </div>;
"
        <div className="flex">;
          {renderStars(review && review.rating)}
        </div>;
      </div>;
"
      <div className="mb-4">;"
        <p className="text-sm whitespace-pre-wrap">{review && review.review_text}</p>;
      </div>;

      {(review && review.communication_rating || review && review.quality_rating || review && review.timeliness_rating || review && review.would_work_again !== undefined) && (;"
        <div className="border-t pt-3 mt-3">;"
          <div className="flex flex-wrap gap-2">;
            {review && review.communication_rating && (;"
              <Badge variant="outline" className="flex gap-1 items-center">;
                Communication;"
                <span className="ml-1 text-yellow-500">{review && review.communication_rating}/5</span>;
              </Badge>;
            )}

            {review && review.quality_rating && (;"
              <Badge variant="outline" className="flex gap-1 items-center">;
                Quality;"
                <span className="ml-1 text-yellow-500">{review && review.quality_rating}/5</span>;
              </Badge>;
            )}

            {review && review.timeliness_rating && (;"
              <Badge variant="outline" className="flex gap-1 items-center">;
                Timeliness;"
                <span className="ml-1 text-yellow-500">{review && review.timeliness_rating}/5</span>;
              </Badge>;
            )}

            {review && review.would_work_again !== undefined && (;
              <Badge"
                variant={review && review.would_work_again ? "default" : "secondary"}"`
                className={`${review && review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>;"
                {review && review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            )}
          </div>;
        </div>;
      )}
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD

      <div className='mt-3 flex justify-end'>
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='ghost' size='sm' className='text-muted-foreground'>
              <Flag className='h-3 w-3 mr-1' />              Report
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="mt-3 flex justify-end">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>"
            <Button variant="ghost" size="sm" className="text-muted-foreground">"
              <Flag className="h-3 w-3 mr-1" />
              Report

=======
              Report

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/reviews/ReviewCard.tsx
<div className='mt-3 flex justify-end'>
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='ghost' size='sm' className='text-muted-foreground'>
              <Flag className='h-3 w-3 mr-1' />
              Report
:src/components/reviews/ReviewCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              Report;
              Report;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/reviews/ReviewCard.tsx
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                please provide details below.
              </DialogDescription>
            </DialogHeader>
'
      <div className='mt-3 flex justify-end'>;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger asChild>;'
            <Button variant='ghost' size='sm' className='text-muted-foreground'>;'
              <Flag className='h-3 w-3 mr-1' />              Report      ;"
      <div className="mt-3 flex justify-end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger asChild>;"
            <Button variant="ghost" size="sm" className="text-muted-foreground">;"
              <Flag className="h-3 w-3 mr-1" />;
              </Badge>)}
          </div>;
        </div>)}'
      <div className='mt - 3 flex justify - end'>;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger as_child>;'
            <Button variant='ghost' size='sm' className='text - muted - foreground'>;'
              <Flag className='h - 3 w - 3 mr - 1' />              Report;"
      <div className="mt - 3 flex justify - end">;
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>;
          <DialogTrigger as_child>;"
            <Button variant="ghost" size="sm" className="text - muted - foreground">;"
              <Flag className="h - 3 w - 3 mr - 1" />;
            </Button>;
          </DialogTrigger>;
          <DialogContent>;
            <DialogHeader>;

              onChange = {(e,) => setReportReason(e && e.target.value),}"
              className="min-h-[100px]";
            />;

            <DialogFooter>;

              <Button'
                variant='outline'
                onClick={() => setIsReportDialogOpen(false)}
              >;
                Cancel;
              </Button>;
              <Button;
                onClick={handleReport}
:src/components/reviews/ReviewCard.tsx
onChange = {(e,) => setReportReason(e.target.value),}

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                If you believe this review violates our community guidelines, please provide details below.
              </DialogDescription>
            </DialogHeader>

            <Textarea"
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}

              className="min-h-[100px]"
            />

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <DialogFooter>
=======

"
              className="min-h-[100px]"
            />

            <DialogFooter>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/reviews/ReviewCard.tsx
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel;
              </Button>

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button 
=======

              <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/reviews/ReviewCard.tsx
                onClick={handleReport} 
                disabled={!reportReason.trim() || isReporting}
              >"
                {isReporting ? "Submitting..." : "Submit Report"}

=======

=======
                disabled={!reportReason.trim() || isReporting}
              >
                {isReporting ? 'Submitting...' : 'Submit Report'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                disabled={!reportReason.trim() || isReporting}
              >
                {isReporting ? 'Submitting...' : 'Submit Report'}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/reviews/ReviewCard.tsx
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
:src/components/reviews/ReviewCard.tsx
<<<<<<< HEAD
      </div>
    </div>
  )
}
;

                disabled={!reportReason && reportReason.trim() || isReporting}>;'"
                {isReporting ? 'Submitting...' : 'Submit Report'}              </Button>                {isReporting ? "Submitting..." : "Submit Report"}
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
    </div>;
  );

              <DialogTitle > Report Review</DialogTitle>;
              <DialogDescription>;
                If you believe this review violates our community guidelines,
                please provide details below.;
              </DialogDescription>;
            </DialogHeader>;
            <Textarea;'
              placeholder='Why are you reporting this review?'              value={report_reason}
              on_change={e => setReportReason (e.target.value)}'
              className='min - h-[100px]';"
              placeholder="Why are you reporting this review?";
              value = {report_reason, }
              on_change = {(e, ) => setReportReason (e.target.value), }"
              className="min - h-[100px]";
            />;
            <DialogFooter>;
              <Button;'
                variant='outline';
                on_click={() => setIsReportDialogOpen (false)}
              >;
                Cancel;
              </Button>;
              <Button;
                on_click={handle_report}
                disabled={!report_reason.trim () || is_reporting}              >;'"
                {is_reporting ? 'Submitting...' : 'Submit Report'}              </Button>                {is_reporting ? "Submitting..." : "Submit Report"}
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
    </div>);
}</div>);"
}";"
return (<div className="border rounded - lg p - 4 bg - card"> <div className="flex justify - between items - start mb - 3"> <div className="flex items - center gap - 3"> {";"
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg - muted"> <User className="h - 4 w - 4" /> </AvatarFallback> </Avatar>) : (<Avatar> {}
  review.reviewer profile?.avatar url ? (<AvatarImage src= {}
  review.reviewer profile.avatar url;
}alt= {}
  review.reviewer profile.display name;"
}/>) : (<AvatarFallback> {";"
  review.reviewer profile?.display name ? get_initials (review.reviewer profile.display name) : "??";
}</AvatarFallback>);"
}</Avatar>) ";"
}<div> </div> <div className="text - sm text - muted - foreground"> {}
  formatDistanceToNow (new Date (review.created at), {}
  add_suffix: true;"
}) ";"
}</div> </div> </div> <div className="flex"> {"
  render_stars (review.rating) ";"
}</div> </div> <div className="mb - 4"> <p className="text - sm whitespace - pre - wrap"> {}
  review.review text;"
}</p> </div> {";"
  (review.communication rating || review.quality rating || review.timeliness rating || review.would work again !== undefined) && (<div className="border - t pt - 3 mt - 3"> <div className="flex flex - wrap gap - 2" > {";"
  review.communication rating && (<Badge variant="outline" className="flex gap - 1 items - center"> Communication <span className="ml - 1 text - yellow - 500" > {}
  review.communication rating;"
}/5</span> </Badge>) ";"
}Quality <span className="ml - 1 text - yellow - 500" > {}
  review.quality rating;"
}/5</span> </Badge>) ";"
}Timeliness <span className="ml - 1 text - yellow - 500" > {}
  review.timeliness rating;
}/5</span> </Badge>);
}{}
  review.would work again !== undefined && (<Badge </Badge>);"
}</div> </div>) ";"
}<DialogTrigger as_child> <Button variant="ghost" size="sm" className="text - muted - foreground"> <Flag className="h - 3 w - 3 mr - 1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle > Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines, please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button on_click={}
  handle_report;
}disabled= {}
  !report_reason.trim () || is_reporting;
:src_backup/components/reviews/ReviewCard.tsx
}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>);
}"}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>
    </div>
  );
}</div>) ;
};";
return (<div className="border rounded-lg p-4 bg-card"> <div className="flex justify-between items-start mb-3"> <div className="flex items-center gap-3"> {";
  review.is anonymous ? (<Avatar> <AvatarFallback className="bg-muted"> <User className="h-4 w-4" /> </AvatarFallback> </Avatar>) : (<Avatar> {;
  review.reviewer profile?.avatar url ? (<AvatarImage src= {;
  review.reviewer profile.avatar url ;
}alt= {;
  review.reviewer profile.display name ;
}/>) : (<AvatarFallback> {";
  review.reviewer profile?.display name ? getInitials (review.reviewer profile.display name) : "??" ;
}</AvatarFallback>) ;
}</Avatar>) ";
}<div> </div> <div className="text-sm text-muted-foreground"> {;
  formatDistanceToNow (new Date (review.created at), {;
  addSuffix: true ;
}) ";
}</div> </div> </div> <div className="flex"> {;
  renderStars (review.rating) ";
}</div> </div> <div className="mb-4"> <p className="text-sm whitespace-pre-wrap"> {;
  review.review text ;
}</p> </div> {";
  (review.communication rating || review.quality rating || review.timeliness rating || review.would work again !== undefined) && (<div className="border-t pt-3 mt-3"> <div className="flex flex-wrap gap-2" > {";
  review.communication rating && (<Badge variant="outline" className="flex gap-1 items-center"> Communication <span className="ml-1 text-yellow-500" > {;
  review.communication rating ;
}/5</span> </Badge>) ";
}Quality <span className="ml-1 text-yellow-500" > {;
  review.quality rating ;
}/5</span> </Badge>) ";
}Timeliness <span className="ml-1 text-yellow-500" > {;
  review.timeliness rating ;
}/5</span> </Badge>) ;
}{;
  review.would work again !== undefined && (<Badge </Badge>) ;
}</div> </div>) ";
}<DialogTrigger asChild> <Button variant="ghost" size="sm" className="text-muted-foreground"> <Flag className="h-3 w-3 mr-1" /> Report </Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Report Review</DialogTitle> <DialogDescription> If you believe this review violates our community guidelines, please provide details below. </DialogDescription> </DialogHeader> <Textarea Cancel </Button> <Button onClick={;
  handleReport ;
}disabled= {;
  !reportReason.trim () || isReporting ;
}> </Button> </DialogFooter> </DialogContent> </Dialog> </div> </div>) ;
}"
:src/components/reviews/ReviewCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
