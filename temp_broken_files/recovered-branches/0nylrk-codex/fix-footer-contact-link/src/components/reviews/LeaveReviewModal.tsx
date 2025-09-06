 import {
  Dialog;
DialogContent;
DialogDescription;
DialogHeader;
DialogTitle;
interface LeaveReviewModalProps {
  projectId: string;
revieweeId: string;
revieweeName: string;
isOpen: boolean;
onClose: () => void 
}export function LeaveReviewModal ({
  projectId;
revieweeId;
revieweeName;
isOpen;
onClose 
}: LeaveReviewModalProps) {
  const {
  userReview, submitReview, updateReview, isSubmitting 
}= useReviews (projectId);
const [open, setOpen] = useState (isOpen);
useEffect ( () => {
  setOpen (isOpen) 
}, [isOpen]);
const handleOpenChange = (open: boolean) => {
  setOpen (open);
if (!open) {
  onClose () 
}
};
if (userReview) {
  //Update existing review 
}
};
return (</DialogTitle> <DialogDescription> Your feedback helps build a trustworthy community. It will be visible after moderation. </DialogDescription> </DialogHeader> <ReviewForm projectId= {
  projectId 
}revieweeId= {
  revieweeId 
}revieweeName= {
  revieweeName 
}onSubmit= {
  handleSubmit 
}defaultValues= {
  userReview || undefined 
}isSubmitting= {
  isSubmitting 
}/> </DialogContent> </Dialog>) 
}