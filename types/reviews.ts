
export interface Review {
  }
  export type ProjectStatus = 'InProgress' | 'Completed';'



export type ReviewRole = 'client' | 'talent';'

export type ReviewCategoryScores = {communication?: number; // 1-5 optional;
  }
  qualityOfWork?: number; // 1-5 optional;
  timeliness?: number; // 1-5 optional;
  wouldWorkWithAgain?: boolean; // optional;
}
  "clientId": string, // slug for client/user;
  "talentSlug": string, // slug from TALENT_PROFILES;
  "title": string;
  "status": ProjectStatus,completedAt?: string, // ISO string;
}

export type ReviewRole = 'client' | 'talent';'

export type ReviewCategoryScores = {communication?: number, // 1-5 optional;
  }



