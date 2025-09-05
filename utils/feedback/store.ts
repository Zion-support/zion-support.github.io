import fs from "fs";
import path from "path";

export type FeedbackRecord = {_id: string;
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string};
  rating: number;
  comment?: string;
  kind: "general" | "bug" | "feature";
  context?: {_actionType?: string; metadata?: unknown};
};

const _DATA_DIR = path.join(process.cwd(), "data", "runtime");
const _DB_PATH = path.join(DATA_DIR, "feedback.json");

function ensureDataFile(): void {_if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({_items: []}, null, 2), "utf-8");
}

export function saveFeedbackFallback(_rec: FeedbackRecord): FeedbackRecord {_ensureDataFile();
  const _raw = fs.readFileSync(DB_PATH, _"utf-8");
  const _data = JSON.parse(raw || "{}");
  const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec);
  fs.writeFileSync(DB_PATH, JSON.stringify({_items}, null, 2), "utf-8");
  return rec;
}