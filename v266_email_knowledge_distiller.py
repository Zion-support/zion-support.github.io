#!/usr/bin/env python3
"""V266: Email Knowledge Distiller — Extracts key knowledge from email threads,
builds team knowledge base, detects and summarizes expert insights."""
import json, re, hashlib
from datetime import datetime
from collections import defaultdict

class EmailKnowledgeDistiller:
    """Analyzes emails case-by-case, distills knowledge, enforces reply-all."""
    def __init__(self):
        self.knowledge_base = defaultdict(list)
        self.expert_insights = []
        self.thread_summaries = {}
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        
        # Extract knowledge points
        knowledge_points = self._extract_knowledge(subject, body, sender)
        
        # Detect expert insights
        insights = self._detect_expert_insights(body, sender)
        
        # Build thread context
        thread_id = self._get_thread_id(subject)
        self._update_thread_summary(thread_id, subject, body, sender)
        
        # Categorize knowledge
        categories = self._categorize_knowledge(knowledge_points)
        
        # Generate knowledge-aware response
        response = self._generate_knowledge_response(email_data, knowledge_points, insights, categories)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V266-KnowledgeDistiller",
            "knowledge_points_extracted": len(knowledge_points),
            "expert_insights_detected": len(insights),
            "categories_identified": len(categories),
            "thread_id": thread_id,
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _extract_knowledge(self, subject, body, sender):
        text = body.lower()
        points = []
        
        # Technical knowledge
        if any(w in text for w in ["api", "architecture", "design", "implementation"]):
            tech_match = re.search(r'(api|architecture|design)\s+(.+?)(?:\.|$)', text, re.I)
            if tech_match:
                points.append({"type": "technical", "content": tech_match.group(0)[:200], "expert": sender})
        
        # Process knowledge
        if any(w in text for w in ["process", "workflow", "procedure", "steps"]):
            proc_match = re.search(r'(process|workflow|procedure)\s+(.+?)(?:\.|$)', text, re.I)
            if proc_match:
                points.append({"type": "process", "content": proc_match.group(0)[:200], "expert": sender})
        
        # Decision knowledge
        if any(w in text for w in ["decided", "decision", "agreed", "concluded"]):
            dec_match = re.search(r'(decided|decision|agreed)\s+(.+?)(?:\.|$)', text, re.I)
            if dec_match:
                points.append({"type": "decision", "content": dec_match.group(0)[:200], "expert": sender})
        
        # Best practices
        if any(w in text for w in ["best practice", "recommend", "should", "always"]):
            bp_match = re.search(r'(best practice|recommend|should)\s+(.+?)(?:\.|$)', text, re.I)
            if bp_match:
                points.append({"type": "best_practice", "content": bp_match.group(0)[:200], "expert": sender})
        
        for point in points:
            self.knowledge_base[point["type"]].append(point)
        
        return points
    
    def _detect_expert_insights(self, body, sender):
        text = body.lower()
        insights = []
        
        # Expert indicators
        expert_phrases = ["from my experience", "in my opinion", "i've learned", "based on", "lessons learned"]
        if any(phrase in text for phrase in expert_phrases):
            insight_match = re.search(r'(?:' + '|'.join(expert_phrases) + r')\s+(.+?)(?:\.|$)', text, re.I)
            if insight_match:
                insight = {
                    "expert": sender,
                    "insight": insight_match.group(1)[:200],
                    "timestamp": datetime.now().isoformat()
                }
                insights.append(insight)
                self.expert_insights.append(insight)
        
        return insights
    
    def _get_thread_id(self, subject):
        clean = re.sub(r'^(re|fw|fwd):\s*', '', subject, flags=re.I).strip().lower()
        return hashlib.md5(clean.encode()).hexdigest()[:12]
    
    def _update_thread_summary(self, thread_id, subject, body, sender):
        if thread_id not in self.thread_summaries:
            self.thread_summaries[thread_id] = {"subject": subject, "participants": set(), "key_points": []}
        self.thread_summaries[thread_id]["participants"].add(sender)
        self.thread_summaries[thread_id]["key_points"].append(body[:100])
    
    def _categorize_knowledge(self, points):
        categories = {}
        for point in points:
            cat = point["type"]
            if cat not in categories:
                categories[cat] = []
            categories[cat].append(point)
        return categories
    
    def _generate_knowledge_response(self, email_data, knowledge, insights, categories):
        subject = email_data.get("subject", "")
        
        parts = []
        if knowledge:
            parts.append(f"Extracted {len(knowledge)} knowledge point(s)")
        if insights:
            parts.append(f"Captured {len(insights)} expert insight(s)")
        if categories:
            parts.append(f"Categorized into {len(categories)} area(s)")
        
        summary = " | ".join(parts) if parts else "Knowledge base updated"
        
        base = f"Thank you for your email about '{subject}'. Knowledge Distiller: {summary}. Total knowledge points: {sum(len(v) for v in self.knowledge_base.values())}."
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V266\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailKnowledgeDistiller()
    test = {"from": "architect@company.com", "to": ["team@zion.com", "dev@zion.com"], "cc": ["cto@company.com"], "subject": "API Design Best Practices", "body": "From my experience, the API should follow RESTful principles. We decided to use OAuth2 for authentication. The best practice is to version APIs and document thoroughly."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V266 Knowledge Distiller — All systems operational | Reply-All: ENFORCED")
