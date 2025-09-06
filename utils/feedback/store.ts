export interface FeedbackRecord {
  id: string;
  type: string;
  message: string;
  rating: number;
  metadata: Record < string, any>;
  created_at: string;
  ip: string;
}
const feedback_data: FeedbackRecord[] = [];
;
export async function saveFeedbackFallback (feedback: FeedbackRecord): Promise < void> {
  feedback_data.push (feedback);
  console.log ('Feedback saved:', feedback.id);
}
export function write_all (rows: any[]): void {
  console.log ('Writing feedback rows:', rows.length);
  // Implementation would write to database or file;
}
export function getAllFeedback (): FeedbackRecord[] {
  return [...feedback_data];
}
