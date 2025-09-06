import fs from "fs";
import path from "path";
import { MarketplaceDb, Offer, Project } from "./types";
const DATA_DIR = path.join(process.cwd(), "data", "runtime"),;
const DB_PATH = path.join(DATA_DIR, "marketplace.json");
function ensureDataFile(): void {;
  if (!fs.existsSync(DATA_DIR)) {;
    fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (!fs.existsSync(DB_PATH)) {;
    const initial: MarketplaceDb = { offers: [], projects: [] },;
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), "utf-8");
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function readDb(): MarketplaceDb {;
  ensureDataFile(),;
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const data = JSON.parse(raw) as MarketplaceDb;
    if (!data.offers) data.offers = [];
    if (!data.projects) data.projects = [];
    return data;
  } catch (error) {
    return { offers: [], projects: []   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function writeDb(db: MarketplaceDb): void {;
  ensureDataFile(),;
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function saveOffer(offer: Offer): Offer {;
  const db = readDb();
  const index = db.offers.findIndex((o) => o.id === offer.id);
  if (index >= 0) {;
    db.offers[index] = offer;
  } else {;
    db.offers.push(offer);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  writeDb(db);
  return offer;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getOfferById(id: string): Offer | undefined {;
  const db = readDb();
  return db.offers.find((o) => o.id === id);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function listOffers(params?: { talentSlug?: string, clientId?: string, status?: string }): Offer[] {;
  const db = readDb();
  let list = db.offers;
  if (params?.talentSlug) list = list.filter((o) => o.talentSlug === params.talentSlug);
  if (params?.clientId) list = list.filter((o) => o.clientId === params.clientId);
  if (params?.status) list = list.filter((o) => o.status === params.status);
  return list.sort((a, b) => b.createdAtIso.localeCompare(a.createdAtIso));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function saveProject(project: Project): Project {;
  const db = readDb();
  const index = db.projects.findIndex((p) => p.id === project.id);
  if (index >= 0) {;
    db.projects[index] = project;
  } else {;
    db.projects.push(project);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  writeDb(db);
  return project;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getProjectById(id: string): Project | undefined {;
  const db = readDb();
  return db.projects.find((p) => p.id === id);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}