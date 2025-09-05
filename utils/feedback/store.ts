import fs from &quot;fs&quot;;
import path from &quot;path&quot;;

export type FeedbackRecord = {
  id: string;
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string };
  rating: number;
  comment?: string;
  kind: &quot;general&quot; | &quot;bug&quot; | &quot;feature&quot;;
  context?: { actionType?: string; metadata?: any };
};

const DATA_DIR = path.join(process.cwd(), &quot;data&quot;, &quot;runtime&quot;);
const DB_PATH = path.join(DATA_DIR, &quot;feedback.json&quot;);

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), &quot;utf-8&quot;);
}

export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {
  ensureDataFile();
  const raw = fs.readFileSync(DB_PATH, &quot;utf-8&quot;);
  const data = JSON.parse(raw || &quot;{}&quot;);
  const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec);
  fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), &quot;utf-8&quot;);
  return rec;
}