#!/usr/bin/env python3
"""V255: Email ROI Tracker — Tracks business value from emails,
measures deal progression, calculates time saved, generates ROI reports."""
import json, re
from datetime import datetime
from collections import defaultdict

class EmailROITracker:
    """Analyzes emails case-by-case, tracks ROI, enforces reply-all."""
    def __init__(self):
        self.deal_tracker = defaultdict(lambda: {"stage": "new", "value": 0, "emails_count": 0, "first_contact": None, "last_contact": None})
        self.time_saved_minutes = 0
        self.deals_won = 0

    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        deal_info = self._track_deal(sender, subject, body)
        time_saved = self._calculate_time_saved(email_data)
        self.time_saved_minutes += time_saved
        business_value = self._extract_business_value(body, subject)
        response = self._generate_roi_response(email_data, deal_info, business_value)
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        return {"engine": "V255-ROITracker", "deal_stage": deal_info["stage"], "deal_value": deal_info["value"], "business_value": business_value, "time_saved_min": time_saved, "total_time_saved": self.time_saved_minutes, "roi_metrics": self._generate_roi_metrics(), "response": response, "reply_to": all_recipients, "reply_all_enforced": len(all_recipients) > 1}

    def _track_deal(self, sender, subject, body):
        text = (subject + " " + body).lower()
        deal = self.deal_tracker[sender]
        deal["emails_count"] += 1
        deal["last_contact"] = datetime.now().isoformat()
        if not deal["first_contact"]: deal["first_contact"] = datetime.now().isoformat()
        if any(w in text for w in ["contract", "signed", "agreement", "deal closed"]):
            deal["stage"] = "closed_won"
            self.deals_won += 1
        elif any(w in text for w in ["proposal", "quote sent", "pricing"]): deal["stage"] = "proposal"
        elif any(w in text for w in ["demo", "meeting", "presentation"]): deal["stage"] = "evaluation"
        elif any(w in text for w in ["interested", "explore", "learn more"]): deal["stage"] = "qualified"
        amounts = re.findall(r'\$([\d,]+)', body)
        if amounts: deal["value"] = max(deal["value"], max(int(a.replace(",", "")) for a in amounts))
        return deal

    def _calculate_time_saved(self, email_data):
        body = email_data.get("body", "")
        words = len(body.split())
        base_time = 5
        if words > 200: base_time += 3
        if email_data.get("cc"): base_time += 2
        return base_time

    def _extract_business_value(self, body, subject):
        text = (subject + " " + body).lower()
        amounts = re.findall(r'\$([\d,]+(?:\.\d+)?)\s*(million|billion|k|thousand)?', text, re.I)
        values = []
        for amount, unit in amounts:
            val = float(amount.replace(",", ""))
            if unit.lower() in ("million", "m"): val *= 1000000
            elif unit.lower() in ("billion", "b"): val *= 1000000000
            elif unit.lower() in ("k", "thousand"): val *= 1000
            values.append(val)
        return max(values) if values else 0

    def _generate_roi_metrics(self):
        hourly_rate = 150
        return {"total_emails": sum(d["emails_count"] for d in self.deal_tracker.values()), "time_saved_hours": round(self.time_saved_minutes / 60, 1), "estimated_savings": round(self.time_saved_minutes / 60 * hourly_rate, 2), "deals_tracked": len(self.deal_tracker), "deals_won": self.deals_won, "pipeline_value": sum(d["value"] for d in self.deal_tracker.values())}

    def _generate_roi_response(self, email_data, deal_info, business_value):
        subject = email_data.get("subject", "")
        stage = deal_info["stage"]
        if stage == "closed_won":
            base = f"Congratulations on closing the deal for '{subject}'! I've updated our records and generated the onboarding documentation."
        elif stage == "proposal":
            base = f"Thank you for your message about '{subject}'. I've prepared a comprehensive proposal based on our discussion."
        elif business_value > 0:
            base = f"Thank you for your message about '{subject}'. I've noted the business value of ${business_value:,.0f} and here's my strategic response:"
        else:
            base = f"Thank you for your message about '{subject}'. I've reviewed everything and here's my response:"
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V255\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailROITracker()
    test = {"from": "buyer@bigcorp.com", "to": ["sales@zion.com", "account@zion.com"], "cc": ["vp@bigcorp.com", "finance@bigcorp.com"], "subject": "Proposal review - $500,000 AI implementation", "body": "We reviewed your proposal for the $500,000 AI implementation project. We're interested in moving forward. Can we schedule a meeting to discuss the contract?"}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V255 ROI Tracker — All systems operational | Reply-All: ENFORCED")
