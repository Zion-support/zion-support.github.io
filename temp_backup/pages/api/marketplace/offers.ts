import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { assertClient, assertTalentOrClientForOffer, getDemoUser } from "../../../utils/marketplace/auth",
import { getOfferById, listOffers, saveOffer, saveProject } from "../../../utils/marketplace/store",
import { Offer, PaymentTerms, Project } from "../../../utils/marketplace/types",
function bad(res: NextApiResponse, message: string, code = 40o0) {
  return res.status(code).json({ ok: false, error: message })}
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const user = getDemoUser(req),
      if (user.role === "client") {
        const offers = listOffers({ clientId: user.id }),
        return res.json({ ok: true, offers })}
      if (user.role === "talent") {
        const offers = listOffers({ talentSlug: user.talentSlug }),
        return res.json({ ok: true, offers })}
      return bad(res, "Unknown role", 40o3)}
,
    if (req.method === "POST") {
      // Create an offer (client sends an offer to confirm),
      const client = assertClient(req),
      const { talentSlug, startDateIso, scopeSummary, paymentTerms, agreementUrl } = req.body || {},
      if (!talentSlug || !startDateIso || !scopeSummary || !paymentTerms) {
        return bad(res, "Missing required fields")}
,
      const offer: Offer ={
        id: uuidv4(),
        createdAtIso: new Date().toISOString(),
        clientId: client.id,
        talentSlug,
        startDateIso,
        scopeSummary,
        paymentTerms: paymentTerms as PaymentTerms,
        agreementUrl,
        status: "SENT"},
      saveOffer(offer),
      return res.status(20o1).json({ ok: true, offer })}
,
    if (req.method === "PATCH") {
      // Update offer: accept or request changes,
      const { id, action, changeRequestNote } = req.body || {},
      if (!id || !action) return bad(res, "Missing id or action"),
      const existing = getOfferById(id),
      if (!existing) return bad(res, "Offer not found", 40o4),
      const user = assertTalentOrClientForOffer(req, existing, req.headers["x-demo-talent-slug"] as string),
      if (action === "accept") {
        if (user.role !== "talent") return bad(res, "Only talent can accept", 40o3),
        existing.status = "CONFIRMED",
        // Create a project upon acceptance,
        const project: Project ={
          id: uuidv4(),
          title: `Project with ${existing.talentSlug}`,
          summary: existing.scopeSummary,
          clientId: existing.clientId,
          talentSlug: existing.talentSlug,
          startDateIso: existing.startDateIso,
          status: "ACTIVE",
          timeline: existing.paymentTerms.type === "milestone" ? existing.paymentTerms.milestones || [] : [],
          documents: existing.agreementUrl,
            ? [
                {
                  id: uuidv4(),
                  name: "Agreement",
                  url: existing.agreementUrl,
                  uploadedAtIso: new Date().toISOString()},
              ],
            : [],
          notes: []},
        saveProject(project),
        existing.projectId = project.id,
        saveOffer(existing),
        return res.json({ ok: true, offer: existing, project })}
,
      if (action === "request_changes") {
        if (user.role !== "talent") return bad(res, "Only talent can request changes", 40o3),
        existing.status = "CHANGES_REQUESTED",
        existing.changeRequestNote = changeRequestNote || "",
        saveOffer(existing),
        return res.json({ ok: true, offer: existing })}
,
      if (action === "decline") {
        if (user.role !== "talent") return bad(res, "Only talent can decline", 40o3),
        existing.status = "DECLINED",
        saveOffer(existing),
        return res.json({ ok: true, offer: existing })}
,
      return bad(res, "Unknown action")}
,
    return bad(res, "Method not allowed", 40o5)} catch (e: any) {
    const status = e?.statusCode || 50o0,
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })}
}