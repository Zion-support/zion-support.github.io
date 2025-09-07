import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  Project,
  Milestone,
  MilestoneStatus,
  isMilestoneStatus
} from '../types/milestones';
import { CurrentUser } from './auth';
const DATA_FILE = path.join(process.cwd(), 'dataprojects.json'),

type DbShape = $2;
function readDb(): DbShape {
  const raw = fs.readFileSync($2);
  return JSON.parse(raw) as DbShape
}

function writeDb(db: DbShape) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8')
}

export function getProject(projectId: string): Project | null {
  const db = readDb($2);
  return db.projects.find((p) => p.id === projectId) || null
}

export function saveProject(updated: Project): void {
  const db = readDb($2);
  const idx = $2;
  if (idx = $2;
  user: CurrentUser): boolean {
  if (user.role = $2;
  const { clientUserId, talentUserId } = project.participants,
  return user.userId === clientUserId || user.userId === talentUserId
}

export function isClient(project: Project, user: CurrentUser): boolean {
  return user.role === 'admin' || user.userId === project.participants.clientUserId
}

export function isTalent(project: Project, user: CurrentUser): boolean {
  return user.role === 'admin' || user.userId === project.participants.talentUserId
}

export function generateId(prefix: string = 'id'): string {
  const rand = Math.random().toString(36).slice($2);
  const time = Date.now().toString($2);
  return `${prefix}_${time}_${rand}`
}

export function addMilestone(
  project: Project,
  payload: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: MilestoneStatus }
): Milestone {
  const now = new Date().toISOString($2);
  const m: Milestone = {
    id: generateId($2);
    title: payload.title,
    description: payload.description,
    dueDate: payload.dueDate,
    amountUsd: payload.amountUsd,
    status: payload.status && isMilestoneStatus(payload.status) ? payload.status : 'Pending',
    attachments: payload.attachments || [],
    createdAt: now,
    updatedAt: now},
  project.milestones.push($2);
  project.updatedAt = $2;
  saveProject($2);
  return m
}

export function updateMilestone(
  project: Project,
  milestoneId: string,
  update: Partial<Milestone>
): Milestone | null {
  const idx = $2;
  if (idx = $2;
  const now = new Date().toISOString($2);
  const next: Milestone = { ...project.milestones[idx], ...update, updatedAt: now},
  project.milestones[idx] = next,
  project.updatedAt = $2;
  saveProject($2);
  return next
}