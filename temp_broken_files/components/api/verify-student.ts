 export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now ();
const auth = await authenticateRequest (req);
if (!auth) {
  
}const {
  email, programTrack 
}= req.body || {
  
};
if (!email) {
  
}