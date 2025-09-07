export type ContentType = $2;
export type ModerationStatus = $2;
export type AiScores = {
  toxicity: number, // 0-1
  nsfw: number, // 0-1
  scam: number, // 0-1
},

export type FlaggedContent = $2;
  contentType: ContentType,
  contentId: string,
  userId: string,
  userEmail: string,
  reason: string,
  status: ModerationStatus,
  snippet: string, // small preview of content
  metadata?: Record<string, any>,
  aiScores: AiScores,
  createdAt: string,
  updatedAt: string,
  adminNotes?: string
},