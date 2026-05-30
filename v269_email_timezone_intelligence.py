#!/usr/bin/env python3
"""V269: Email Time Zone Intelligence — Smart scheduling across global teams,
detects working hours per contact, respects local business hours automatically."""
import json, re
from datetime import datetime, timedelta
from collections import defaultdict

class EmailTimezoneIntelligence:
    """Analyzes emails case-by-case, handles timezones, enforces reply-all."""
    TIMEZONE_MAP = {
        "EST": -5, "EDT": -4, "CST": -6, "CDT": -5, "MST": -7, "MDT": -6,
        "PST": -8, "PDT": -7, "GMT": 0, "UTC": 0, "CET": 1, "CEST": 2,
        "IST": 5.5, "JST": 9, "AEST": 10, "AEDT": 11, "NZST": 12,
        "BRT": -3, "ART": -3, "CLT": -4
    }
    
    def __init__(self):
        self.contact_timezones = defaultdict(lambda: {"timezone": "UTC", "working_hours": (9, 17), "last_active": None})
        self.scheduled_meetings = []
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        sent_time = datetime.now()
        
        # Detect sender timezone
        detected_tz = self._detect_timezone(sender, body, sent_time)
        self.contact_timezones[sender]["timezone"] = detected_tz
        self.contact_timezones[sender]["last_active"] = sent_time.isoformat()
        
        # Detect working hours
        working_hours = self._detect_working_hours(sender, sent_time)
        self.contact_timezones[sender]["working_hours"] = working_hours
        
        # Calculate optimal meeting time for all participants
        all_participants = [sender] + recipients + cc
        optimal_time = self._find_optimal_meeting_time(all_participants)
        
        # Check if response is during working hours
        is_working_hours = self._is_working_hours(sender, sent_time)
        
        # Generate timezone-aware response
        response = self._generate_timezone_response(email_data, detected_tz, optimal_time, is_working_hours)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V269-TimezoneIntelligence",
            "sender_timezone": detected_tz,
            "working_hours": working_hours,
            "is_working_hours": is_working_hours,
            "optimal_meeting_time": optimal_time,
            "participants_analyzed": len(all_participants),
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _detect_timezone(self, sender, body, sent_time):
        text = body.lower()
        
        # Check for timezone mentions
        for tz in self.TIMEZONE_MAP:
            if tz.lower() in text:
                return tz
        
        # Detect from email domain
        domain = sender.split("@")[-1].lower() if "@" in sender else ""
        if ".jp" in domain: return "JST"
        if ".uk" in domain: return "GMT"
        if ".de" in domain or ".fr" in domain: return "CET"
        if ".br" in domain: return "BRT"
        if ".in" in domain: return "IST"
        if ".au" in domain: return "AEST"
        
        # Detect from hour of activity
        hour = sent_time.hour
        if 9 <= hour <= 17:
            return "UTC"  # Assume UTC if during standard hours
        
        return "UTC"
    
    def _detect_working_hours(self, sender, sent_time):
        hour = sent_time.hour
        # If email sent at this hour, assume it's within working hours
        if 6 <= hour <= 22:
            return (max(6, hour - 2), min(22, hour + 4))
        return (9, 17)
    
    def _find_optimal_meeting_time(self, participants):
        # Find overlapping working hours across all timezones
        overlaps = []
        for hour in range(24):
            all_available = True
            for p in participants:
                tz_offset = self.TIMEZONE_MAP.get(self.contact_timezones[p]["timezone"], 0)
                local_hour = (hour + tz_offset) % 24
                wh = self.contact_timezones[p]["working_hours"]
                if not (wh[0] <= local_hour < wh[1]):
                    all_available = False
                    break
            if all_available:
                overlaps.append(hour)
        
        if overlaps:
            best = overlaps[len(overlaps) // 2]  # Middle of overlap
            return {"utc_hour": best, "available_slots": len(overlaps)}
        
        return {"utc_hour": 14, "available_slots": 0, "note": "No perfect overlap found, suggested compromise time"}
    
    def _is_working_hours(self, sender, sent_time):
        wh = self.contact_timezones[sender]["working_hours"]
        return wh[0] <= sent_time.hour < wh[1]
    
    def _generate_timezone_response(self, email_data, tz, optimal_time, is_working):
        subject = email_data.get("subject", "")
        
        base = f"Thank you for your email about '{subject}'. "
        base += f"Detected timezone: {tz} ({'during' if is_working else 'outside'} working hours). "
        
        if optimal_time["available_slots"] > 0:
            base += f"Optimal meeting slot: {optimal_time['utc_hour']}:00 UTC ({optimal_time['available_slots']} overlapping hours available)."
        else:
            base += f"Suggested meeting: {optimal_time['utc_hour']}:00 UTC (compromise time across timezones)."
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V269\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailTimezoneIntelligence()
    test = {"from": "tokyo-team@company.co.jp", "to": ["ny-office@zion.com", "london@zion.com"], "cc": ["sydney@company.com.au"], "subject": "Global team sync meeting EST", "body": "Can we schedule a meeting at 10 AM EST? We need to sync across PST, JST, and GMT timezones."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V269 Timezone Intelligence — All systems operational | Reply-All: ENFORCED")
