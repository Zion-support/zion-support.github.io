 function ok (res: NextApiResponse, data: any) {
  return res.status (200) .json ({
  ok: true, ...data 
}) 
}function bad (res: NextApiResponse, msg: string, code = 400) {
  return res.status (code) .json ({
  ok: false, error: msg 
}) 
}async function tryWriteToFirestore (doc: FeedbackRecord) {
  const {
  FIREBASE PROJECT ID, FIREBASE CLIENT EMAIL, FIREBASE PRIVATE KEY 
}= process.env as Record<string string | undefined>;
if (!FIREBASE PROJECT ID || !FIREBASE CLIENT EMAIL || !FIREBASE PRIVATE KEY) return false;
try {
  if (admin.apps.length === 0) {
  admin.initializeApp ({
  credential: admin.credential.cert ({
  projectId: FIREBASE PROJECT ID;
clientEmail: FIREBASE CLIENT EMAIL;
}catch (e) {
  return false;
}
}export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const doc: FeedbackRecord = {
  id: uuidv4 ();
createdAtIso: new Date () .toISOString ();
user;
rating: r;
comment: comment || undefined;
kind: k;
context: context || undefined 
};
const wrote = await tryWriteToFirestore (doc);
if (!wrote) saveFeedbackFallback (doc);
return ok (res, {
  id: doc.id 
}) 
}