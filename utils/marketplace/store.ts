import fs from "fs";
import path from "path";

const _DATA_DIR = path.join(process.cwd(), "data", "runtime");
const _DB_PATH = path.join(DATA_DIR, "marketplace.json");

function ensureDataFile(): void {_if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, _{ recursive: true});
  }
  if (!fs.existsSync(DB_PATH)) {_const initial: MarketplaceDb = { offers: [], _projects: []};
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8");
  }
}

export function readDb(): MarketplaceDb {_ensureDataFile();
  try {
    const _raw = fs.readFileSync(DB_PATH, _"utf-8");
    const _data = JSON.parse(raw) as MarketplaceDb;
    if (!data.offers) data.offers = [];
    if (!data.projects) data.projects = [];
    return data;} catch (err) {_return { offers: [], _projects: []};
  }
}

export function writeDb(_db: MarketplaceDb): void {_ensureDataFile();
  fs.writeFileSync(DB_PATH, _JSON.stringify(db, _null, _2), _"utf-8");}

export function saveOffer(_offer: Offer): Offer {_const _db = readDb();
  const _index = db.offers.findIndex(_(o) => o.id === offer.id);
  if (index >= 0) {
    db.offers[index] = offer;} else {_db.offers.push(offer);}
  writeDb(db);
  return offer;
}

export function getOfferById(_id: string): Offer | undefined {_const _db = readDb();
  return db.offers.find(_(o) => o.id === id);}

export function listOffers(_params?: {_talentSlug?: string; clientId?: string; status?: string}): Offer[] {_const _db = readDb();
  let _list = db.offers;
  if (params?.talentSlug) list = list.filter(_(o) => o.talentSlug === params.talentSlug);
  if (params?.clientId) list = list.filter(_(o) => o.clientId === params.clientId);
  if (params?.status) list = list.filter(_(o) => o.status === params.status);
  return list.sort(_(a, _b) => b.createdAtIso.localeCompare(a.createdAtIso));}

export function saveProject(_project: Project): Project {_const _db = readDb();
  const _index = db.projects.findIndex(_(p) => p.id === project.id);
  if (index >= 0) {
    db.projects[index] = project;} else {_db.projects.push(project);}
  writeDb(db);
  return project;
}

export function getProjectById(_id: string): Project | undefined {_const _db = readDb();
  return db.projects.find(_(p) => p.id === id);}