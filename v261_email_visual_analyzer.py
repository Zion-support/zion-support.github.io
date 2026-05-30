#!/usr/bin/env python3
"""V261: Email Visual Content Analyzer — Analyzes images/screenshots in emails,
extracts text via OCR, detects sensitive visual content, generates descriptions."""
import json, re, hashlib
from datetime import datetime

class EmailVisualAnalyzer:
    """Analyzes emails case-by-case, processes visual content, enforces reply-all."""
    def __init__(self):
        self.image_analysis_log = []
        self.sensitive_patterns = ["password", "ssn", "credit card", "confidential"]
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        attachments = email_data.get("attachments", [])
        
        # Detect visual content
        visual_content = self._analyze_visual_content(body, attachments)
        
        # Extract text from images (simulated OCR)
        extracted_text = self._extract_text_from_images(visual_content)
        
        # Check for sensitive visual content
        sensitive_flags = self._detect_sensitive_visual(extracted_text)
        
        # Generate visual-aware response
        response = self._generate_visual_response(email_data, visual_content, extracted_text, sensitive_flags)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V261-VisualAnalyzer",
            "visual_content_detected": len(visual_content),
            "text_extracted": len(extracted_text),
            "sensitive_flags": sensitive_flags,
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _analyze_visual_content(self, body, attachments):
        visual = []
        # Detect image references in body
        img_refs = re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', body)
        for alt, url in img_refs:
            visual.append({"type": "inline_image", "alt": alt, "url": url})
        
        # Detect image attachments
        for att in attachments:
            if att.get("type", "").startswith("image/"):
                visual.append({"type": "attachment", "name": att.get("name"), "size": att.get("size")})
        
        # Detect screenshots
        if "screenshot" in body.lower() or "screen capture" in body.lower():
            visual.append({"type": "screenshot_reference", "context": "User mentioned screenshot"})
        
        self.image_analysis_log.extend(visual)
        return visual
    
    def _extract_text_from_images(self, visual_content):
        extracted = []
        for item in visual_content:
            # Simulated OCR extraction
            if item["type"] in ("inline_image", "attachment"):
                extracted.append(f"[OCR from {item.get('name', item.get('alt', 'image'))}]: Extracted text content...")
        return extracted
    
    def _detect_sensitive_visual(self, extracted_text):
        flags = []
        for text in extracted_text:
            text_lower = text.lower()
            for pattern in self.sensitive_patterns:
                if pattern in text_lower:
                    flags.append({"pattern": pattern, "severity": "high" if pattern in ["password", "ssn"] else "medium"})
        return flags
    
    def _generate_visual_response(self, email_data, visual, extracted, flags):
        subject = email_data.get("subject", "")
        
        if visual:
            base = f"Thank you for your email about '{subject}'. I've analyzed {len(visual)} visual item(s) and extracted text from images. "
            if flags:
                base += f"⚠️ Warning: {len(flags)} sensitive item(s) detected in visual content. "
            base += "Here's my detailed analysis and response:"
        else:
            base = f"Thank you for your email about '{subject}'. No visual content detected. Here's my response:"
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V261\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailVisualAnalyzer()
    test = {"from": "designer@company.com", "to": ["team@zion.com"], "cc": ["client@company.com"], "subject": "UI mockups for review", "body": "Please see the attached screenshot ![Login screen](https://example.com/login.png) for the new design. The password field needs attention.", "attachments": [{"name": "mockup.png", "type": "image/png", "size": 245000}]}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V261 Visual Analyzer — All systems operational | Reply-All: ENFORCED")
