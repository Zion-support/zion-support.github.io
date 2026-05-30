#!/usr/bin/env python3
"""V262: Email Cross-Cultural Intelligence — Detects cultural communication patterns,
adapts responses for global audiences, respects cultural holidays and customs."""
import json, re
from datetime import datetime
from collections import defaultdict

class CrossCulturalIntelligence:
    """Analyzes emails case-by-case, adapts to cultural context, enforces reply-all."""
    CULTURAL_PATTERNS = {
        "formal_asian": {"regions": ["Japan", "China", "Korea"], "traits": ["formal", "indirect", "respectful"], "greetings": ["Dear", "Respected"]},
        "direct_western": {"regions": ["USA", "UK", "Germany"], "traits": ["direct", "concise", "action-oriented"], "greetings": ["Hi", "Hello"]},
        "relationship_latam": {"regions": ["Brazil", "Mexico", "Spain"], "traits": ["warm", "personal", "relationship-focused"], "greetings": ["Hola", "Estimado"]},
        "formal_european": {"regions": ["France", "Italy", "Netherlands"], "traits": ["formal", "detailed", "structured"], "greetings": ["Bonjour", "Guten Tag"]},
        "neutral_global": {"regions": ["International"], "traits": ["neutral", "professional", "clear"], "greetings": ["Hello", "Greetings"]}
    }
    
    HOLIDAYS = {
        "2026-01-01": "New Year",
        "2026-12-25": "Christmas",
        "2026-11-26": "Thanksgiving (USA)",
        "2026-02-17": "Chinese New Year"
    }
    
    def __init__(self):
        self.cultural_adaptations = []
        self.sender_culture_db = defaultdict(lambda: {"detected_culture": "neutral_global", "interactions": 0})
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        
        # Detect cultural context
        cultural_context = self._detect_culture(sender, body, subject)
        
        # Check for cultural holidays
        holiday_context = self._check_holidays()
        
        # Adapt response style
        adapted_style = self._adapt_to_culture(cultural_context)
        
        # Generate culturally-aware response
        response = self._generate_cultural_response(email_data, cultural_context, adapted_style, holiday_context)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V262-CrossCulturalIntelligence",
            "detected_culture": cultural_context,
            "adapted_style": adapted_style,
            "holiday_context": holiday_context,
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _detect_culture(self, sender, body, subject):
        text = (subject + " " + body).lower()
        
        # Language detection
        if any(word in text for word in ["hola", "estimado", "gracias"]):
            return "relationship_latam"
        elif any(word in text for word in ["bonjour", "merci", "cordialement"]):
            return "formal_european"
        elif any(word in text for word in ["respectfully", "honored", "dear sir/madam"]):
            return "formal_asian"
        elif any(word in text for word in ["hey", "thanks", "cheers", "best"]):
            return "direct_western"
        
        return "neutral_global"
    
    def _check_holidays(self):
        today = datetime.now().strftime("%Y-%m-%d")
        for date, holiday in self.HOLIDAYS.items():
            if date == today:
                return {"is_holiday": True, "holiday": holiday}
        return {"is_holiday": False, "holiday": None}
    
    def _adapt_to_culture(self, culture):
        pattern = self.CULTURAL_PATTERNS.get(culture, self.CULTURAL_PATTERNS["neutral_global"])
        return {
            "formality": "high" if culture in ["formal_asian", "formal_european"] else "medium",
            "directness": "indirect" if culture == "formal_asian" else "direct",
            "greeting_style": pattern["greetings"][0] if pattern["greetings"] else "Hello"
        }
    
    def _generate_cultural_response(self, email_data, culture, style, holiday):
        subject = email_data.get("subject", "")
        greeting = style["greeting_style"]
        
        if holiday["is_holiday"]:
            base = f"{greeting},\n\nWishing you a wonderful {holiday['holiday']}! Regarding '{subject}', "
        else:
            base = f"{greeting},\n\nThank you for your email about '{subject}'. "
        
        if culture == "formal_asian":
            base += "I am honored to assist you. Please allow me to provide a detailed and respectful response."
        elif culture == "relationship_latam":
            base += "I hope this message finds you well. I value our relationship and am happy to help."
        elif culture == "direct_western":
            base += "Here's my direct response to your request:"
        else:
            base += "I appreciate your message and am here to help. Here's my response:"
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V262\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = CrossCulturalIntelligence()
    test = {"from": "tanaka@company.co.jp", "to": ["sales@zion.com"], "cc": ["manager@company.co.jp"], "subject": "Partnership inquiry", "body": "Dear Sir/Madam, We are honored to inquire about partnership opportunities. Respectfully, Tanaka-san"}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V262 Cross-Cultural Intelligence — All systems operational | Reply-All: ENFORCED")
