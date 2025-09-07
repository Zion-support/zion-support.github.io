import fs from "fs";
import path from "path";
import { MarketplaceDb, Offer, Project } from "./types";
const DATA_DIR = path.join(process.cwd(), "data", "runtime"),
const DB_PATH = path.join($2);
function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true})
  }
  if (!fs.existsSync(DB_PATH)) {
    const initial: MarketplaceDb = { offers: [], projects: [] },
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8")
  }
}

export function readDb(): MarketplaceDb {
  ensureDataFile($2);
  try {
    const raw = fs.readFileSync($2);
    const data = $2;
    if (!data.offers) data.offers = $2;
    if (!data.projects) data.projects = $2;
    return data
  } catch (err) {
    return { offers: [], projects: [] }
  }
}

export function writeDb(db: MarketplaceDb): void {
  ensureDataFile($2);
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8")
}

export function saveOffer(offer: Offer): Offer {
  const db = readDb($2);
  const index = $2;
  if (index >= 0) {
    db.offers[index] = offer
  } else {
    db.offers.push(offer)
  }
  writeDb($2);
  return offer
}

export function getOfferById(id: string): Offer | undefined {
  const db = readDb($2);
  return db.offers.find((o) => o.id === id)
}

export function listOffers(params?: { talentSlug?: string, clientId?: string, status?: string }): Offer[] {
  const db = readDb($2);
  let list = $2;
  if (params?.talentSlug) list = $2;
  if (params?.clientId) list = $2;
  if (params?.status) list = $2;
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso))
}

export function saveProject(project: Project): Project {
  const db = readDb($2);
  const index = $2;
  if (index >= 0) {
    db.projects[index] = project
  } else {
    db.projects.push(project)
  }
  writeDb($2);
  return project
}

export function getProjectById(id: string): Project | undefined {
  const db = readDb($2);
  return db.projects.find((p) => p.id === id)
}