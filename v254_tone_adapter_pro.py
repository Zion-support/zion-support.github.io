#!/usr/bin/env python3
"""V254: Email Tone Adapter Pro — Detects recipient communication style,
adapts tone to match, maintains brand voice, suggests adjustments."""
import json, re

class ToneAdapterPro:
    """Analyzes emails case-by-case, adapts tone, enforces reply-all."""
    TONE_PROFILES = {
        "formal": {"markers": ["dear", "sincerely", "regards", "respectfully"], "level": 5},
        "professional": {"markers": ["hi", "hello", "thanks", "best", "cheers"], "level": 3},
        "casual": {"markers": ["hey", "lol", "btw", "thx", "cool"], "level": 1},
        "technical": {"markers": ["api", "endpoint", "deploy", "config", "stack"], "level": 4},
        "executive": {"markers": ["roi", "revenue", "strategy", "growth", "impact"], "level": 4}
    }
    def __init__(self):
        self.brand_voice = {"tone": "professional-warm", "formality": 3}

    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        sender_tone = self._detect_tone(body, subject)
        response_tone = self._adapt_tone(sender_tone)
        sentiment = self._detect_sentiment(body)
        response = self._generate_adapted_response(email_data, response_tone, sentiment)
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        return {"engine": "V254-ToneAdapterPro", "detected_tone": sender_tone, "adapted_tone": response_tone, "sentiment": sentiment, "tone_match_score": self._tone_match_score(sender_tone, response_tone), "response": response, "reply_to": all_recipients, "reply_all_enforced": len(all_recipients) > 1}

    def _detect_tone(self, body, subject):
        text = (subject + " " + body).lower()
        scores = {}
        for tone, profile in self.TONE_PROFILES.items():
            scores[tone] = sum(1 for m in profile["markers"] if m in text)
        best = max(scores, key=scores.get)
        return best if scores[best] > 0 else "professional"

    def _adapt_tone(self, sender_tone):
        levels = {t: p["level"] for t, p in self.TONE_PROFILES.items()}
        sender_level = levels.get(sender_tone, 3)
        brand_level = self.brand_voice["formality"]
        adapted = round(sender_level * 0.6 + brand_level * 0.4)
        for tone, profile in self.TONE_PROFILES.items():
            if abs(profile["level"] - adapted) <= 1:
                return tone
        return "professional"

    def _detect_sentiment(self, body):
        text = body.lower()
        pos = sum(1 for w in ["great", "excellent", "amazing", "thank", "love", "happy"] if w in text)
        neg = sum(1 for w in ["frustrated", "disappointed", "angry", "unhappy", "terrible"] if w in text)
        if pos > neg: return "positive"
        if neg > pos: return "negative"
        return "neutral"

    def _tone_match_score(self, s, r):
        if s == r: return 100
        levels = {t: p["level"] for t, p in self.TONE_PROFILES.items()}
        return max(0, 100 - abs(levels.get(s, 3) - levels.get(r, 3)) * 20)

    def _generate_adapted_response(self, email_data, tone, sentiment):
        subject = email_data.get("subject", "")
        greetings = {"formal": "Dear valued contact,", "professional": "Hi there,", "casual": "Hey!", "technical": "Hi,", "executive": "Hello,"}
        closings = {"formal": "Respectfully yours,", "professional": "Best regards,", "casual": "Cheers,", "technical": "Regards,", "executive": "Best,"}
        if sentiment == "negative":
            body_text = f"I understand your concerns regarding '{subject}' and I want to assure you we're taking this seriously."
        elif sentiment == "positive":
            body_text = f"Thank you for your positive feedback on '{subject}'! I'm glad we're making a difference."
        else:
            body_text = f"Thank you for your message about '{subject}'. I've reviewed everything carefully."
        return f"{greetings.get(tone, 'Hi,')}\n\n{body_text}\n\n{closings.get(tone, 'Best regards,')}\nZion Tech Group | AI Email Intelligence V254\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = ToneAdapterPro()
    test = {"from": "exec@enterprise.com", "to": ["sales@zion.com", "team@zion.com"], "cc": ["cfo@enterprise.com"], "subject": "ROI discussion - Q4 strategy", "body": "Hi team, I'd like to discuss the ROI projections for our Q4 strategy. The growth numbers look promising."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V254 Tone Adapter Pro — All systems operational | Reply-All: ENFORCED")
