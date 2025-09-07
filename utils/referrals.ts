export type ReferralEvent = 'visit' | 'signup' | 'profile completed' | 'job created' | 'hire';

export interface Referral {
  id: string;
  referrerId: string;
  referredId: string;
  event: ReferralEvent;
  timestamp: string;
  reward?: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface ReferralStats {
  totalReferrals: number;
  completedReferrals: number;
  pendingReferrals: number;
  totalRewards: number;
}

class ReferralTracker {
  private referrals: Referral[] = [];

  trackReferral(referrerId: string, referredId: string, event: ReferralEvent): Referral {
    const referral: Referral = {
      id: Math.random().toString(36).substr(2, 9),
      referrerId,
      referredId,
      event,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    this.referrals.push(referral);
    return referral;
  }

  getReferralsByUser(userId: string): Referral[] {
    return this.referrals.filter(r => r.referrerId === userId || r.referredId === userId);
  }

  getReferralStats(userId: string): ReferralStats {
    const userReferrals = this.getReferralsByUser(userId);
    
    return {
      totalReferrals: userReferrals.length,
      completedReferrals: userReferrals.filter(r => r.status === 'completed').length,
      pendingReferrals: userReferrals.filter(r => r.status === 'pending').length,
      totalRewards: userReferrals
        .filter(r => r.status === 'completed')
        .reduce((sum, r) => sum + (r.reward || 0), 0)
    };
  }

  updateReferralStatus(referralId: string, status: Referral['status'], reward?: number): boolean {
    const referral = this.referrals.find(r => r.id === referralId);
    if (!referral) return false;

    referral.status = status;
    if (reward !== undefined) {
      referral.reward = reward;
    }

    return true;
  }
}

export const referralTracker = new ReferralTracker();