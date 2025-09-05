<<<<<<< HEAD
import fs from "fs",;
import path from "path",;
import { MarketplaceDb, Offer, Project } from "./types",;
;
const DATA_DIR = path.join(process.cwd(), "data", "runtime"),;
const DB_PATH = path.join(DATA_DIR, "marketplace.json"),;
;
function ensureDataFile():void {;
  if (!fs.existsSync(DATA_DIR)) {;
    fs.mkdirSync(DATA_DIR, { recursive:true }),;
  }
  if (!fs.existsSync(DB_PATH)) {;
    const initial:MarketplaceDb = { offers:[], projects:[] },;
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8"),;
  }
}
;
export function readDb():MarketplaceDb {;
  ensureDataFile(),;
  try {;
    const raw = fs.readFileSync(DB_PATH, "utf-8"),;
    const data = JSON.parse(raw) as MarketplaceDb,;
    if (!data.offers) data.offers = [],;
    if (!data.projects) data.projects = [],;
    return data,;
  } catch (err) {;
    return { offers:[], projects:[] },;
  }
}
;
export function writeDb(db:MarketplaceDb):void {;
  ensureDataFile(),;
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8"),;
}
;
export function saveOffer(offer:Offer):Offer {;
  const db = readDb(),;
  const index = db.offers.findIndex((o) => o.id === offer.id),;
  if (index >= 0) {;
    db.offers[index] = offer;
  } else {;
    db.offers.push(offer),;
  }
  writeDb(db),;
  return offer,;
=======
import fs from "fs",
import path from "path",
import { MarketplaceDb, Offer, Project } from "./types",

const DATA_DIR = path.join(process.cwd(), "data", "runtime"),
const DB_PATH = path.join(DATA_DIR, "marketplace.json"),

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(DB_PATH)) {
    const initial: MarketplaceDb = { offers: [], projects: [] },
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8")
  }
}

export function readDb(): MarketplaceDb {
  ensureDataFile(),
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8"),
    const data = JSON.parse(raw) as MarketplaceDb,
    if (!data.offers) data.offers = [],
    if (!data.projects) data.projects = [],
    return data
  } catch (err) {
    return { offers: [], projects: [] }
  }
}

export function writeDb(db: MarketplaceDb): void {
  ensureDataFile(),
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8")
}

export function saveOffer(offer: Offer): Offer {
  const db = readDb(),
  const index = db.offers.findIndex((o) => o.id === offer.id),
  if (index >= 0) {
    db.offers[index] = offer
  } else {
    db.offers.push(offer)
  }
  writeDb(db),
  return offer
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export function getOfferById(id:string):Offer | undefined {;
  const db = readDb(),;
  return db.offers.find((o) => o.id === id);
}
<<<<<<< HEAD
;
export function listOffers(params?:{ talentSlug?:string, clientId?:string, status?:string }):Offer[] {;
  const db = readDb(),;
  let list = db.offers,;
  if (params?.talentSlug) list = list.filter((o) => o.talentSlug === params.talentSlug),;
  if (params?.clientId) list = list.filter((o) => o.clientId === params.clientId),;
  if (params?.status) list = list.filter((o) => o.status === params.status),;
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso)),;
}
;
export function saveProject(project:Project):Project {;
  const db = readDb(),;
  const index = db.projects.findIndex((p) => p.id === project.id),;
  if (index >= 0) {;
    db.projects[index] = project;
  } else {;
    db.projects.push(project),;
  }
  writeDb(db),;
  return project,;
=======

export function listOffers(params?: { talentSlug?: string, clientId?: string, status?: string }): Offer[] {
  const db = readDb(),
  let list = db.offers,
  if (params?.talentSlug) list = list.filter((o) => o.talentSlug === params.talentSlug),
  if (params?.clientId) list = list.filter((o) => o.clientId === params.clientId),
  if (params?.status) list = list.filter((o) => o.status === params.status),
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso))
}

export function saveProject(project: Project): Project {
  const db = readDb(),
  const index = db.projects.findIndex((p) => p.id === project.id),
  if (index >= 0) {
    db.projects[index] = project
  } else {
    db.projects.push(project)
  }
  writeDb(db),
  return project
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export function getProjectById(id:string):Project | undefined {;
  const db = readDb(),;
  return db.projects.find((p) => p.id === id);
}