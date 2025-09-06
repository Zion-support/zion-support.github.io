/**
 * Moderation database utilities
 */

export interface ModerationFlag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'violence' | 'other';
  reason: string;
  reporterId: string;
  targetId: string;
  targetType: 'user' | 'post' | 'comment' | 'message';
  status: 'pending' | 'approved' | 'rejected' | 'resolved';
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  metadata?: Record<string, any>;
}

export interface ModerationAction {
  id: string;
  flagId: string;
  action: 'warn' | 'suspend' | 'ban' | 'remove_content' | 'no_action';
  reason: string;
  moderatorId: string;
  createdAt: string;
  metadata?: Record<string, any>;
}

export class ModerationDb {
  private flags: ModerationFlag[] = [];
  private actions: ModerationAction[] = [];

  async createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {
    const newFlag: ModerationFlag = {
      ...flag,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.flags.push(newFlag);
    return newFlag;
  }

  async getFlag(id: string): Promise<ModerationFlag | null> {
    return this.flags.find(flag => flag.id === id) || null;
  }

  async getFlags(filters?: {
    status?: string;
    type?: string;
    targetType?: string;
    reporterId?: string;
  }): Promise<ModerationFlag[]> {
    let filteredFlags = this.flags;
    
    if (filters) {
      if (filters.status) {
        filteredFlags = filteredFlags.filter(flag => flag.status === filters.status);
      }
      if (filters.type) {
        filteredFlags = filteredFlags.filter(flag => flag.type === filters.type);
      }
      if (filters.targetType) {
        filteredFlags = filteredFlags.filter(flag => flag.targetType === filters.targetType);
      }
      if (filters.reporterId) {
        filteredFlags = filteredFlags.filter(flag => flag.reporterId === filters.reporterId);
      }
    }
    
    return filteredFlags.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async updateFlag(id: string, updates: Partial<ModerationFlag>): Promise<ModerationFlag | null> {
    const flagIndex = this.flags.findIndex(flag => flag.id === id);
    if (flagIndex === -1) return null;
    
    this.flags[flagIndex] = {
      ...this.flags[flagIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.flags[flagIndex];
  }

  async createAction(action: Omit<ModerationAction, 'id' | 'createdAt'>): Promise<ModerationAction> {
    const newAction: ModerationAction = {
      ...action,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };
    
    this.actions.push(newAction);
    
    // Update flag status if action is taken
    if (action.action !== 'no_action') {
      await this.updateFlag(action.flagId, {
        status: 'resolved',
        resolvedAt: new Date().toISOString(),
        resolvedBy: action.moderatorId
      });
    }
    
    return newAction;
  }

  async getActions(flagId?: string): Promise<ModerationAction[]> {
    if (flagId) {
      return this.actions.filter(action => action.flagId === flagId);
    }
    return this.actions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getStats(): Promise<{
    totalFlags: number;
    pendingFlags: number;
    resolvedFlags: number;
    flagsByType: Record<string, number>;
    flagsByStatus: Record<string, number>;
  }> {
    const totalFlags = this.flags.length;
    const pendingFlags = this.flags.filter(flag => flag.status === 'pending').length;
    const resolvedFlags = this.flags.filter(flag => flag.status === 'resolved').length;
    
    const flagsByType = this.flags.reduce((acc, flag) => {
      acc[flag.type] = (acc[flag.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const flagsByStatus = this.flags.reduce((acc, flag) => {
      acc[flag.status] = (acc[flag.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      totalFlags,
      pendingFlags,
      resolvedFlags,
      flagsByType,
      flagsByStatus
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Export singleton instance
export const moderationDb = new ModerationDb();