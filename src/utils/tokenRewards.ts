// Token rewards utility functions

export interface TokenReward {
  id: string;
  name: string;
  description: string;
  value: number;
  type: 'points' | 'discount' | 'access' | 'badge';
  expiresAt?: Date;
  isActive: boolean;
}

export interface UserTokenBalance {
  userId: string;
  totalTokens: number;
  availableTokens: number;
  rewards: TokenReward[];
}

export class TokenRewardManager {
  private rewards: TokenReward[] = [];
  private userBalances: Map<string, UserTokenBalance> = new Map();

  addReward(reward: TokenReward): void {
    this.rewards.push(reward);
  }

  getUserBalance(userId: string): UserTokenBalance | null {
    return this.userBalances.get(userId) || null;
  }

  updateUserBalance(userId: string, tokens: number): void {
    const currentBalance = this.userBalances.get(userId);
    if (currentBalance) {
      currentBalance.totalTokens += tokens;
      currentBalance.availableTokens += tokens;
    } else {
      this.userBalances.set(userId, {
        userId,
        totalTokens: tokens,
        availableTokens: tokens,
        rewards: []
      });
    }
  }

  redeemReward(userId: string, rewardId: string): boolean {
    const userBalance = this.userBalances.get(userId);
    const reward = this.rewards.find(r => r.id === rewardId && r.isActive);

    if (!userBalance || !reward) {
      return false;
    }

    if (userBalance.availableTokens >= reward.value) {
      userBalance.availableTokens -= reward.value;
      userBalance.rewards.push(reward);
      return true;
    }

    return false;
  }

  getActiveRewards(): TokenReward[] {
    return this.rewards.filter(reward => reward.isActive);
  }

  expireRewards(): void {
    const now = new Date();
    this.rewards.forEach(reward => {
      if (reward.expiresAt && reward.expiresAt < now) {
        reward.isActive = false;
      }
    });
  }
}

export const tokenRewardManager = new TokenRewardManager();