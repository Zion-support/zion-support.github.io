 //Persist to data/requests as a simple CMS-like log const dir = path.join (process.cwd (), 'datarequests');
if (!fs.existsSync (dir) ) fs.mkdirSync (dir, {
  recursive: true 
});
const payload = {
  timestamp, talentSlug, requesterName, requesterEmail, projectInfo 
};
const file = path.join (dir, `request-$ {
  timestamp.replace (/[:.]/g, '-') 
}.json`);
fs.writeFileSync (file, JSON.stringify (payload, null, 2), 'utf8');
// Email hooks could be integrated here (e.g., Resend, SendGrid, Nodemailer) return res.status (200) .json ({
  ok: true 
}) 
}catch (err) {
  console.error ('Request-to-hire failed', err);
return res.status (500) .json ({
  error: 'Internal error' 
}) 
}
}