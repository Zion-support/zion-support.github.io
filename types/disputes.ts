<<<<<<< HEAD
<<<<<<< HEAD

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
=======

=======


=======
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',



export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
<<<<<<< HEAD
<<<<<<< HEAD

  | 'Other',;

=======
  | 'Other',;
export type DisputeAttachment = {;
  id: string,;
  fileName: string,;
  fileSize: number,;
  mimeType: string,;
  path: string, // server-side storage path;
  uploadedAt: string,;
  uploadedByUserId: string;
},;
export type DisputeMessage = {;
  id: string,;
  authorUserId: string,;
  authorRole: 'client' | 'talent' | 'admin',;
  body: string,;
  createdAt: string;
},;
export type DisputeCase = {;
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string,;
  entityType?: 'milestone' | 'contract' | 'thread',;
  entityId?: string,;
  clientUserId: string,;
  talentUserId: string,;
  createdAt: string,;
  updatedAt: string,;
  status: DisputeStatus,;
  reason: DisputeReason,;
  reasonDetails?: string,;
  description: string,;
  attachments: DisputeAttachment[],;
  messages: DisputeMessage[],;
  adminNotes?: string,;
  resolvedAt?: string,;
  resolutionSummary?: string;
},;
export type DisputeListItem = Pick<;
  DisputeCase,;
  'id' | 'projectId' | 'createdAt' | 'status';
> & {;
  talentName: string,;
  clientName: string,;
  projectName?: string;
},;
export type UserSummary = {;
  id: string,;
  name: string,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type DisputeAttachment = {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string; // server-side storage path
  uploadedAt: string;
  uploadedByUserId: string;
}
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
export type DisputeMessage = {
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
}
export type DisputeCase = {
  id: string; // case id like DSP-YYYYMMDD-XXXX
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
};
export type DisputeCase = {
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread',;
  entityId?: string,;
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  role: 'admin' | 'client' | 'talent';

};


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
}
export type DisputeListItem = Pick<
  DisputeCase
  'id' | 'projectId' | 'createdAt' | 'status'
> & {
  talentName: string;
  clientName: string;
  projectName?: string;
}
  status: DisputeStatus,;
  reason: DisputeReason,;
  reasonDetails?: string,;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string,;
  resolvedAt?: string,;
  resolutionSummary?: string;
};
export type DisputeListItem = Pick<;
  DisputeCase;
  'id' | 'projectId' | 'createdAt' | 'status';
> & {;
  talentName: string;
  clientName: string;
  projectName?: string;
},;
export type UserSummary = {
  id: string;
  name: string;


  role: 'admin' | 'client' | 'talent';
}
};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
