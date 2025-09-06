



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



