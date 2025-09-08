export function ProjectReviewSection() {const { user } = useAuth(),const { reviews, userReview, isLoading, reportReview } = useReviews(project.id),const [isReviewModalOpen, setIsReviewModalOpen] = useState(false),const isCompleted = project.status === 'completed',const isClient = user?.id === project.client_id,const isTalent = user?.id === project.talent_id,const clientProfile = project?.talent_profile,const talentProfile = project.talent_profile,// Determine who the current user needs to review;'
interface ProjectReviewSectionProps  {'project': Project;
interface ProjectReviewSectionProps  {'project': Project;
        {isCompleted ? (<div className='space-y-6'>;'
            {(isClient || isTalent) && (<div className='border-b pb-4 mb-4'>;'
                  <div className='bg-muted/20 rounded-lg p-4 text-center'>;'
                    <h3 className='font-medium mb-2'>Thank you for your review!</h3>;'
                    <p className='text-sm text-muted-foreground mb-3'>;'
                      Your review is {userReview.status === 'approved' ? 'published' : 'pending approval'}'
                    </p>;
                    {userReview.status === 'pending' && (<Button variant='outline' onClick={() => setIsReviewModalOpen(true)}>;'
                        Edit Review;
                      </Button>;
import { Project } from '@/types/projects',import { useState } from 'react',import { Star  } from 'lucide-react';'
                    {userReview.status === 'pending' && (<Button variant='outline' onClick={() => setIsReviewModalOpen(true)}>;'
  )}<ReviewsList;
        ) : (<div className='bg-muted/20 rounded-lg p-6 text-center'>;'
            <h3 className='font-medium mb-2'>Reviews will be available once the project is completed</h3>;'
            <p className='text-sm text-muted-foreground'>;'
  )}}import { Project  } from '@/types / projects';'
interface ProjectReviewSectionProps  {'project': Project;
