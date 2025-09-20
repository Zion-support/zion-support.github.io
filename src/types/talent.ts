import React from "react";

export interface Talent {id: string; name: string; email: string;
avatar?: string;
bio?: string;,
skills: string[], experience: number; hourlyRate: number; currency: string;
}
location: {}
export interface Education {id: string; institution: string; degree: string; field: string; startDate: Date;
}
endDate?: Date;}
gpa?: number}

export interface Certification {id: string; name: string; issuer: string; issueDate: Date;
}
expiryDate?: Date;}
credentialId?: string}

}
portfolio?: string;}
twitter?: string}

export interface TalentFilter {skills?: string[];
}
experienceRange?: {}
min: number; max: number};
export interface TalentSearchResult {talents: Talent[], total: number; page: number; limit: number; hasMore: boolean}

export interface TalentFormData {name: string; email: string; bio: string; skills: string[], experience: number; hourlyRate: number; currency: string;
}
