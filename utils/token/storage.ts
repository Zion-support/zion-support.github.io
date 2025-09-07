/**
 * Token storage utilities
 */

import { TokenConfig, TokenTransaction } from './service';

export interface TokenStorage {
  tokens: TokenConfig[];
  transactions: TokenTransaction[];
  lastUpdated: string;
}

export class TokenStorageService {
  private storageKey = 'zion_token_storage';

  async saveStorage(storage: TokenStorage): Promise<void> {
    try {
      // In a real implementation, this would save to a database
      // For now, we'll use localStorage as a fallback
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
      }
    } catch (error) {
      console.error('Failed to save token storage:', error);
    }
  }

  async loadStorage(): Promise<TokenStorage> {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          return JSON.parse(stored);
        }
      }
    } catch (error) {
      console.error('Failed to load token storage:', error);
    }
    
    // Return empty storage if loading fails
    return {
      tokens: [],
      transactions: [],
      lastUpdated: new Date().toISOString()
    };
  }

  async clearStorage(): Promise<void> {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.storageKey);
      }
    } catch (error) {
      console.error('Failed to clear token storage:', error);
    }
  }

  async exportStorage(): Promise<string> {
    const storage = await this.loadStorage();
    return JSON.stringify(storage, null, 2);
  }

  async importStorage(data: string): Promise<boolean> {
    try {
      const storage = JSON.parse(data);
      await this.saveStorage(storage);
      return true;
    } catch (error) {
      console.error('Failed to import token storage:', error);
      return false;
    }
  }
}

// Export singleton instance
export const tokenStorageService = new TokenStorageService();