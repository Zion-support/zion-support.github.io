<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import crypto from 'crypto';
import {
  FlaggedContent,
  ModerationStatus,
  AiScores,;
} from '../types/moderation';
=======
export interface Flag {
  id: string;
  type: 'spam' | 'inappropriate' | 'harassment' | 'other';
  content: string;
  reporterId: string;
  targetId: string;
  targetType: 'post' | 'comment' | 'user';
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  createdAt: string;
  updatedAt: string;
  adminNotes?: string;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

// In-memory storage for development
const flags: Flag[] = [];

export async function getFlagById(id: string): Promise<Flag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function getAllFlags(): Promise<Flag[]> {
  return [...flags];
}

export async function createFlag(flagData: Omit<Flag, 'id' | 'createdAt' | 'updatedAt'>): Promise<Flag> {
  const flag: Flag = {
    ...flagData,
    id: `flag-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  flags.push(flag);
  return flag;
}

<<<<<<< HEAD
export async function updateFlagStatus(
  id: string,
  status: ModerationStatus,
  adminNotes?: string
): Promise<FlaggedContent | undefined> {
  const flag = await getFlagById(id);
  if (!flag) return undefined;
  flag.status = status;
  flag.adminNotes = adminNotes || flag.adminNotes;
  flag.updatedAt = new Date().toISOString();
  await upsertFlag(flag);
  return flag;
=======
// Moderation database utilities
export interface ModerationFlag {
  id: string, type: 'spam' | 'inappropriate' | 'harassment' | 'other',
  content: string, reporterId: string,
  reportedUserId?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed', createdAt: Date,
  updatedAt: Date, moderatorId?: string,
  notes?: string;
}

export interface ModerationAction {
  id: string, flagId: string,
  action: 'warn' | 'suspend' | 'ban' | 'dismiss', moderatorId: string,
  reason: string, createdAt: Date,
}

// Mock database - in production, this would connect to a real database
const flags: ModerationFlag[] = []; const actions: ModerationAction[] = [];

export async function createFlag(flag: Omit<ModerationFlag, 'id' | 'createdAt' | 'updatedAt'>): Promise<ModerationFlag> {
  const newFlag: ModerationFlag = {
    ...flag,
    id: `flag_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  flags.push(newFlag);
  return newFlag;
}

export async function getFlag(id: string): Promise<ModerationFlag | null> {
  return flags.find(flag => flag.id === id) || null;
}

export async function updateFlag(id: string, updates: Partial<ModerationFlag>): Promise<ModerationFlag | null> {
=======
export async function updateFlag(id: string, updates: Partial<Pick<Flag, 'status' | 'adminNotes'>>): Promise<Flag | null> {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return null;
  
  flags[flagIndex] = {
    ...flags[flagIndex],
    ...updates,
<<<<<<< HEAD
    updatedAt: new Date(),
  };
  return flags[flagIndex];
}

export async function getAllFlags(): Promise<ModerationFlag[]> {
  return [...flags];
}

export async function createAction(action: Omit<ModerationAction, 'id' | 'createdAt'>): Promise<ModerationAction> {
  const newAction: ModerationAction = {
    ...action,
    id: `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  };
  actions.push(newAction);
  return newAction;
}

export async function getActionsForFlag(flagId: string): Promise<ModerationAction[]> {
  return actions.filter(action => action.flagId === flagId);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    updatedAt: new Date().toISOString()
  };
  
  return flags[flagIndex];
}

export async function deleteFlag(id: string): Promise<boolean> {
  const flagIndex = flags.findIndex(flag => flag.id === id);
  if (flagIndex === -1) return false;
  
  flags.splice(flagIndex, 1);
  return true;
}

export async function updateFlagStatus(id: string, status: string, adminNotes?: string): Promise<Flag | null> {
  return updateFlag(id, { status: status as any, adminNotes });
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
