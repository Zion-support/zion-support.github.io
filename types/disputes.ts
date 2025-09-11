<<<<<<< HEAD
<<<<<<< HEAD
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',



export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
=======

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
=======

=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
<<<<<<< HEAD
<<<<<<< HEAD
  | 'Other',;
export type DisputeAttachment = {;
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
export type DisputeMessage = {;
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
};
export type DisputeCase = {;
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
=======

  | 'Other',;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  role: 'admin' | 'client' | 'talent';

};


<<<<<<< HEAD
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
};
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  | 'Other',;


  role: 'admin' | 'client' | 'talent';
}
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
