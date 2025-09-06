



  id: string;
  type: string;
  message: string;
  rating: number;


  comment?: string;
  kind: 'general' | 'bug' | 'feature';
  context?: { actionType?: string; metadata?: any };
};


}


export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c


export async function saveFeedbackFallback(
  feedback: FeedbackRecord,
): Promise<void> {
  feedbackData.push(feedback);
  console.log("Feedback saved:", feedback.id);
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
}
ursor/automate-test-improve-and-merge-code-646c


