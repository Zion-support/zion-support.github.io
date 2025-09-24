import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import type { DisputeCase } from '../types/disputes';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const DATA_ROOT = path.join(process.cwd(), 'data');
const DISPUTES_FILE = path.join(DATA_ROOT, 'disputes.json');
const UPLOADS_ROOT = path.join(process.cwd(), 'uploads', 'disputes');

async function ensureDir(dir: string): Promise<void> {
	try {
		await access(dir, fs.constants.F_OK);
	} catch {
		await mkdir(dir, { recursive: true });
	}
}

export async function readAllDisputes(): Promise<DisputeCase[]> {
	try {
		const raw = await readFile(DISPUTES_FILE, 'utf8');
		return JSON.parse(raw) as DisputeCase[];
	} catch {
		return [];
	}
}

export async function writeAllDisputes(all: DisputeCase[]): Promise<void> {
	await ensureDir(DATA_ROOT);
	await writeFile(DISPUTES_FILE, JSON.stringify(all, null, 2), 'utf8');
}

export function generateCaseId(): string {
	return `case_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function getDisputeUploadDir(caseId: string): string {
	return path.join(UPLOADS_ROOT, caseId);
}

export async function ensureDisputeUploadDir(caseId: string): Promise<string> {
	const dir = getDisputeUploadDir(caseId);
	await ensureDir(dir);
	return dir;
}

export async function createDispute(dispute: DisputeCase): Promise<DisputeCase> {
	const all = await readAllDisputes();
	all.push(dispute);
	await writeAllDisputes(all);
	return dispute;
}
