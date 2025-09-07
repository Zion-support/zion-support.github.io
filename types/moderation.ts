
=======

  id: string;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface ModerationResult {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  id: string;
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
>>>>>>> main
  content: string;
  status: 'approved | rejected' | 'pending;
  reason?: string;
  moderatedBy?: string;

  moderatedAt: Date;
=======
export type ModerationStatus = pending' | 'approved | removed' | 'warned | banned';
export interface ModerationAction {

export interface ModerationAction {







>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  id: string;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  adminId: string;
  reason?: string;

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

;
export interface ModerationAction {
  id: string;

  type: "approve | remove" | "warn | ban";
  targetId: string;
  targetType: "post | comment" | "user;
  adminId: string;
  reason?: string;
  createdAt: string;

  created_at: string;

}
}

}
export interface ModerationFlag {

export interface ModerationFlag {
  id: string;
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  type: spam" | "inappropriate | harassment" | "other;
  content: string;
  reporterId: string;
  targetId: string;
  targetType: post" | "comment | user";
  status: ModerationStatus;
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;


}
export interface ModerationFlag {}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export interface ModerationRule {}
  id: string;

=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export interface ModerationFlag {

export interface ModerationFlag {
  id: string;
  type: 'spam | inappropriate' | 'harassment | other';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  content: string;
  reporter_id: string;
  target_id: string;
  target_type: 'post | comment' | 'user;

=======


=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  created_at: string;
  updated_at: string;
  admin_notes?: string}

}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

}
export interface ModerationFlag {
=======
=======

}
export interface ModerationFlag {
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
}


export interface ModerationFlag {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  name: string;
  pattern: string;
  action: 'approve' | reject | 'flag';
  severity: low' | 'medium | high';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======





}
export interface ModerationFlag {


export interface ModerationResult {
  id: string;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
