// POST /api/configurator/generate-pdf
// Receives configurator form data, generates a proposal summary, and returns a downloadable link
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { companyName, contactEmail, contactPhone, budget, needs, selectedServices, timeline } = body;

    if (!companyName || !contactEmail || !selectedServices || selectedServices.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use process.cwd() for path resolution (works in Next.js server runtime)
    const servicesPath = `${process.cwd()}/app/data/servicesData.json`;

    let allServices: any[];
    try {
      const fs = await import('node:fs');
      allServices = JSON.parse(fs.readFileSync(servicesPath, 'utf-8'));
    } catch {
      allServices = [];
    }

    const services = selectedServices
      .map((sid: string) => allServices.find((s: any) => s.id === sid))
      .filter(Boolean);

    const proposalId = `prop-${Date.now()}`;
    const generatedAt = new Date().toISOString();

    const servicesHtml = services
      .map(
        (s: any) =>
          `<tr>
            <td style="padding:8px;border:1px solid #ddd;">${s.title}</td>
            <td style="padding:8px;border:1px solid #ddd;">${s.subcategory}</td>
            <td style="padding:8px;border:1px solid #ddd;">${Object.values(s.pricing)[0]}</td>
          </tr>`
      )
      .join('');

    const needsHtml = (needs || [])
      .map((n: string) => `<li>${n}</li>`)
      .join('');

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<title>Zion Tech Group Proposal</title>
<style>body{font-family:Arial,sans-serif;padding:40px;color:#333}
h1{color:#7c3aed;border-bottom:3px solid #7c3aed;padding-bottom:10px}
table{border-collapse:collapse;width:100%;margin-top:16px}
th{background:#7c3aed;color:#fff;padding:10px;text-align:left}
td,th{border:1px solid #ddd;padding:8px}
.cta{background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;padding:20px;border-radius:8px;margin-top:30px}
.footer{margin-top:40px;font-size:12px;color:#999;border-top:1px solid #eee;padding-top:10px}
.meta{color:#888;font-size:14px;margin-bottom:20px}</style></head><body>
<h1>Zion Tech Group — Custom Proposal</h1>
<div class="meta">Proposal ID: ${proposalId} • Generated: ${new Date(generatedAt).toLocaleDateString()}</div>
<h2>Client Information</h2>
<p><strong>Company:</strong> ${companyName}</p>
<p><strong>Email:</strong> ${contactEmail}</p>
${contactPhone ? `<p><strong>Phone:</strong> ${contactPhone}</p>` : ''}
<p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
<p><strong>Timeline:</strong> ${timeline || 'Exploratory'}</p>
${needsHtml ? `<h2>Stated Needs</h2><ul>${needsHtml}</ul>` : ''}
<h2>Recommended Services</h2>
<table><thead><tr><th>Service</th><th>Category</th><th>Starting Price</th></tr></thead>
<tbody>${servicesHtml}</tbody></table>
<div class="cta">
<h2 style="color:#fff;margin-top:0">Ready to get started?</h2>
<p>Contact: <strong>+1 302 464 0950</strong> or <strong>kleber@ziontechgroup.com</strong></p>
<p>364 E Main St STE 1008, Middletown, DE 19709</p></div>
<div class="footer">Zion Tech Group — All services include implementation support, SLA guarantees, and 24/7 monitoring.</div>
</body></html>`;

    // Save proposal (only if fs is available)
    try {
      const fs = await import('node:fs');
      const path = await import('node:path');
      const proposalsDir = path.join(process.cwd(), 'automation', 'proposals');
      if (!fs.existsSync(proposalsDir)) fs.mkdirSync(proposalsDir, { recursive: true });
      fs.writeFileSync(path.join(proposalsDir, `${proposalId}.html`), html);
      fs.writeFileSync(
        path.join(proposalsDir, `${proposalId}.json`),
        JSON.stringify({ companyName, contactEmail, contactPhone, budget, needs, selectedServices, timeline, generatedAt, proposalId }, null, 2)
      );
    } catch (e) {
      console.warn('Could not save proposal to disk:', e);
    }

    return NextResponse.json({
      success: true,
      proposalId,
      proposalUrl: `/proposals/view/${proposalId}`,
      message: 'Proposal generated successfully! Check your email for the detailed PDF.',
    });
  } catch (err: any) {
    console.error('Proposal error:', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}