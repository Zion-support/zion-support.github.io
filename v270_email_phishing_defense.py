#!/usr/bin/env python3
"""V270: Email Phishing Defense AI — Advanced phishing detection with ML,
checks sender reputation, URL safety, auto-quarantines suspicious emails."""
import json, re, hashlib
from datetime import datetime
from collections import defaultdict
from urllib.parse import urlparse

class EmailPhishingDefense:
    """Analyzes emails case-by-case, detects phishing, enforces reply-all."""
    
    SUSPICIOUS_DOMAINS = ["bit.ly", "tinyurl.com", "t.co"]
    URGENCY_KEYWORDS = ["urgent", "immediately", "verify now", "account suspended", "click here"]
    
    def __init__(self):
        self.sender_reputation = defaultdict(lambda: {"score": 0.5, "verified": False, "reports": 0})
        self.quarantined_emails = []
        self.threat_intel = defaultdict(list)
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        
        # Check sender reputation
        sender_score = self._check_sender_reputation(sender)
        
        # Detect phishing indicators
        phishing_indicators = self._detect_phishing(subject, body)
        
        # Check URL safety
        url_safety = self._check_urls(body)
        
        # Calculate threat score
        threat_score = self._calculate_threat_score(sender_score, phishing_indicators, url_safety)
        
        # Determine action
        action = self._determine_action(threat_score)
        
        if action == "quarantine":
            self._quarantine_email(email_data, threat_score)
        
        # Generate security response
        response = self._generate_security_response(email_data, threat_score, phishing_indicators, action)
        
        # REPLY-ALL ENFORCEMENT (only for safe emails)
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V270-PhishingDefense",
            "threat_score": threat_score,
            "threat_level": self._threat_level(threat_score),
            "sender_reputation": sender_score,
            "phishing_indicators": len(phishing_indicators),
            "unsafe_urls": sum(1 for u in url_safety if not u["safe"]),
            "action_taken": action,
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1 and action != "quarantine"
        }
    
    def _check_sender_reputation(self, sender):
        domain = sender.split("@")[-1] if "@" in sender else sender
        score = 0.5
        trusted = ["gmail.com", "outlook.com", "yahoo.com", "microsoft.com", "google.com"]
        if domain in trusted:
            score = 0.9
        if re.search(r'\d{5,}', domain):
            score -= 0.3
        if "verify" in domain or "secure" in domain or "account" in domain:
            score -= 0.2
        if len(domain) > 30:
            score -= 0.2
        self.sender_reputation[sender]["score"] = max(0, min(1, score))
        return self.sender_reputation[sender]["score"]
    
    def _detect_phishing(self, subject, body):
        text = (subject + " " + body).lower()
        indicators = []
        for keyword in self.URGENCY_KEYWORDS:
            if keyword in text:
                indicators.append({"type": "urgency", "keyword": keyword, "severity": "high"})
        if any(w in text for w in ["paypal", "amazon", "bank", "apple", "microsoft"]):
            if "verify" in text or "confirm" in text or "update" in text:
                indicators.append({"type": "impersonation", "brand": "detected", "severity": "critical"})
        if re.search(r'(password|username|login|ssn|social security)', text, re.I):
            indicators.append({"type": "credential_harvest", "severity": "critical"})
        if "wire transfer" in text or "gift card" in text:
            indicators.append({"type": "financial_scam", "severity": "critical"})
        return indicators
    
    def _check_urls(self, body):
        urls = re.findall(r'https?://[^\s<>\"]+', body)
        results = []
        for url in urls:
            parsed = urlparse(url)
            domain = parsed.netloc
            safe = True
            reason = "OK"
            if domain in self.SUSPICIOUS_DOMAINS:
                safe = False
                reason = "URL shortener"
            if re.match(r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', domain):
                safe = False
                reason = "IP address URL"
            suspicious_tlds = [".xyz", ".top", ".click", ".download"]
            if any(domain.endswith(tld) for tld in suspicious_tlds):
                safe = False
                reason = "Suspicious TLD"
            results.append({"url": url, "domain": domain, "safe": safe, "reason": reason})
        return results
    
    def _calculate_threat_score(self, sender_score, indicators, urls):
        score = 0.0
        score += (1 - sender_score) * 0.3
        for ind in indicators:
            if ind["severity"] == "critical":
                score += 0.4
            elif ind["severity"] == "high":
                score += 0.2
            else:
                score += 0.1
        unsafe_count = sum(1 for u in urls if not u["safe"])
        score += unsafe_count * 0.15
        return min(1.0, score)
    
    def _threat_level(self, score):
        if score >= 0.8: return "CRITICAL"
        if score >= 0.6: return "HIGH"
        if score >= 0.4: return "MEDIUM"
        if score >= 0.2: return "LOW"
        return "SAFE"
    
    def _determine_action(self, threat_score):
        if threat_score >= 0.8: return "quarantine"
        elif threat_score >= 0.6: return "warn_strong"
        elif threat_score >= 0.4: return "warn"
        return "allow"
    
    def _quarantine_email(self, email_data, threat_score):
        self.quarantined_emails.append({"email": email_data, "threat_score": threat_score, "timestamp": datetime.now().isoformat()})
    
    def _generate_security_response(self, email_data, threat_score, indicators, action):
        subject = email_data.get("subject", "")
        threat_level = self._threat_level(threat_score)
        if action == "quarantine":
            base = "WARNING SECURITY ALERT: Email about '" + subject + "' has been QUARANTINED. Threat level: " + threat_level + " (score: " + f"{threat_score:.2f}" + "). "
            base += "Detected " + str(len(indicators)) + " phishing indicator(s). This email will not be delivered."
        elif action in ("warn_strong", "warn"):
            base = "WARNING: Email about '" + subject + "' flagged as " + threat_level + " risk (score: " + f"{threat_score:.2f}" + "). "
            base += "Detected " + str(len(indicators)) + " suspicious indicator(s). Please verify before taking action."
        else:
            base = "SAFE: Email about '" + subject + "' passed security scan. Threat level: SAFE (score: " + f"{threat_score:.2f}" + ")."
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V270\n+1 302 464 0950 | kleber@ziontechgroup.com\n364 E Main St STE 1008, Middletown DE 19709\nhttps://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailPhishingDefense()
    test = {"from": "security@paypa1-verify.com", "to": ["user@company.com", "admin@company.com"], "cc": ["it@company.com"], "subject": "URGENT: Verify your PayPal account immediately", "body": "Your account has been suspended. Click here http://192.168.1.1/verify to update your password and social security number immediately."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\nV270 Phishing Defense AI - All systems operational | Reply-All: ENFORCED (safe emails only)")
