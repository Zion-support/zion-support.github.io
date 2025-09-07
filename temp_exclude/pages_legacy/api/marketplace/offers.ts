<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth";
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store";
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message})
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const user = getDemoUser($2);
      if (user.role === "client") {
        const offers = listOffers($2);
        return res.json({ ok: true, offers })
      }
      if (user.role === "talent") {
        const offers = listOffers($2);
        return res.json({ ok: true, offers })
      }
      return bad(res, "Unknown role", 403)
    }

    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm)
      const client = assertClient($2);
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},

      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields")
      }

      const offer: Offer = {
        id: uuidv4($2);
        createdAtIso: new Date().toISOString($2);
        clientId: client.id,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
        status: "SENT"},

      saveOffer($2);
      return res.status(201).json({ ok: true, offer })
    }

    if (req.method === "PATCH") {
      // Update offer: accept or request changes
      const { id, action, changeRequestNote } = req.body || {},
      if (!id || !action) return bad($2);
      const existing = getOfferById($2);
      if (!existing) return bad($2);
      const user = assertTalentOrClientForOffer($2);
      if (action === "accept") {
        if (user.role !== "talent") return bad($2);
        existing.status = $2;
        // Create a project upon acceptance
        const project: Project = {
          id: uuidv4($2);
          title: `Project with ${existing.talentSlug}`,
          summary: existing.scopeSummary,
          clientId: existing.clientId,
          talentSlug: existing.talentSlug,
          startDateIso: existing.startDateIso,
          status: "ACTIVE",
          timeline: existing.paymentTerms.type = $2;
          documents: existing.agreementUrl
            ? [
                {
                  id: uuidv4($2);
                  name: "Agreement",
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()}]
            : [],
          notes: []},
        saveProject($2);
        existing.projectId = $2;
        saveOffer($2);
        return res.json({ ok: true, offer: existing, project })
      }

      if (action === "request_changes") {
        if (user.role !== "talent") return bad($2);
        existing.status = $2;
        existing.changeRequestNote = $2;
        saveOffer($2);
        return res.json({ ok: true, offer: existing})
      }

      if (action === "decline") {
        if (user.role !== "talent") return bad($2);
        existing.status = $2;
        saveOffer($2);
        return res.json({ ok: true, offer: existing})
      }

      return bad(res, "Unknown action")
    }

    return bad(res, "Method not allowed", 405)
  } catch (e: any) {
    const status = $2;
    return res.status(status).json({ ok: false, error: e ?.message || "Server error" })
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}