<<<<<<< HEAD
<<<<<<< HEAD
export interface FeedbackRecord {
=======
export interface FeedbackRecord {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  type: string;
  message: string;
  rating: number;
  metadata: Record<string, any>;
  createdAt: string;
  ip: string;
}
const feedbackData: FeedbackRecord[] = [];
<<<<<<< HEAD
export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}
export function writeAll(rows: any[]): void {
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}
export function getAllFeedback(): FeedbackRecord[] {
  return [...feedbackData];
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export async function saveFeedbackFallback(feedback: FeedbackRecord): Promise<void> {;
  feedbackData.push(feedback);
  console.log('Feedback saved:', feedback.id);
}

export function writeAll(rows: any[]): void {;
  console.log('Writing feedback rows:', rows.length);
  // Implementation would write to database or file
}

export function getAllFeedback(): FeedbackRecord[] {;
  return [...feedbackData];
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}