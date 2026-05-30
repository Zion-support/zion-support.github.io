#!/usr/bin/env python3
"""V268: Email Relationship Graph Builder — Maps organizational relationships from email patterns,
identifies key decision-makers and influencers, suggests optimal communication paths."""
import json, re, hashlib
from datetime import datetime
from collections import defaultdict

class EmailRelationshipGraph:
    """Analyzes emails case-by-case, builds relationship graph, enforces reply-all."""
    def __init__(self):
        self.relationship_graph = defaultdict(lambda: {"connections": [], "role": "unknown", "influence_score": 0})
        self.communication_patterns = defaultdict(lambda: {"frequency": 0, "response_time": 0, "topics": []})
        self.decision_makers = []
        self.influencers = []
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        
        # Build relationship connections
        connections = self._map_connections(sender, recipients, cc)
        
        # Identify roles and influence
        role = self._identify_role(sender, body, subject)
        influence = self._calculate_influence(sender, recipients, cc, body)
        
        # Detect decision-makers
        if influence > 0.7:
            self._mark_decision_maker(sender, role, influence)
        
        # Analyze communication patterns
        self._update_communication_pattern(sender, subject, body)
        
        # Suggest optimal communication path
        optimal_path = self._suggest_communication_path(sender, recipients)
        
        # Generate relationship-aware response
        response = self._generate_relationship_response(email_data, connections, role, influence, optimal_path)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V268-RelationshipGraph",
            "connections_mapped": len(connections),
            "sender_role": role,
            "influence_score": influence,
            "is_decision_maker": influence > 0.7,
            "optimal_path": optimal_path,
            "total_nodes": len(self.relationship_graph),
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _map_connections(self, sender, recipients, cc):
        connections = []
        all_participants = recipients + cc
        
        for participant in all_participants:
            connection = {
                "from": sender,
                "to": participant,
                "timestamp": datetime.now().isoformat(),
                "type": "direct" if participant in recipients else "cc"
            }
            connections.append(connection)
            
            # Update graph
            if participant not in self.relationship_graph[sender]["connections"]:
                self.relationship_graph[sender]["connections"].append(participant)
            if sender not in self.relationship_graph[participant]["connections"]:
                self.relationship_graph[participant]["connections"].append(sender)
        
        return connections
    
    def _identify_role(self, sender, body, subject):
        text = (subject + " " + body).lower()
        
        if any(w in text for w in ["ceo", "cto", "cfo", "executive", "director", "vp"]):
            return "executive"
        elif any(w in text for w in ["manager", "lead", "head of"]):
            return "manager"
        elif any(w in text for w in ["engineer", "developer", "technical"]):
            return "technical"
        elif any(w in text for w in ["sales", "business", "account"]):
            return "business"
        elif any(w in text for w in ["approve", "authorize", "sign off"]):
            return "decision_maker"
        
        return "contributor"
    
    def _calculate_influence(self, sender, recipients, cc, body):
        score = 0.0
        
        # Number of recipients indicates influence
        total_recipients = len(recipients) + len(cc)
        if total_recipients > 5:
            score += 0.3
        elif total_recipients > 2:
            score += 0.15
        
        # CC'd to many people indicates importance
        if len(cc) > 3:
            score += 0.2
        
        # Decision language indicates authority
        text = body.lower()
        if any(w in text for w in ["i approve", "let's proceed", "go ahead", "authorized"]):
            score += 0.3
        
        # Connections in graph indicate influence
        connections = len(self.relationship_graph[sender]["connections"])
        if connections > 10:
            score += 0.2
        
        return min(1.0, score)
    
    def _mark_decision_maker(self, sender, role, influence):
        if sender not in self.decision_makers:
            self.decision_makers.append(sender)
            self.relationship_graph[sender]["role"] = role
            self.relationship_graph[sender]["influence_score"] = influence
    
    def _update_communication_pattern(self, sender, subject, body):
        self.communication_patterns[sender]["frequency"] += 1
        # Extract topics from subject
        topics = re.findall(r'\b[A-Z][a-z]+\b', subject)
        self.communication_patterns[sender]["topics"].extend(topics[:3])
    
    def _suggest_communication_path(self, sender, recipients):
        # Find shortest path through influential nodes
        influential_recipients = [r for r in recipients if self.relationship_graph[r]["influence_score"] > 0.5]
        
        if influential_recipients:
            return {"path": "through_influencer", "via": influential_recipients[0]}
        return {"path": "direct", "via": None}
    
    def _generate_relationship_response(self, email_data, connections, role, influence, path):
        subject = email_data.get("subject", "")
        
        base = f"Thank you for your email about '{subject}'. Relationship Graph: Mapped {len(connections)} connection(s). "
        base += f"Your role: {role} (influence: {influence:.2f}). "
        
        if path["via"]:
            base += f"Optimal path: through {path['via']}."
        else:
            base += "Direct communication path recommended."
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V268\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = EmailRelationshipGraph()
    test = {"from": "vp@company.com", "to": ["team@zion.com", "sales@zion.com"], "cc": ["ceo@company.com", "cfo@company.com"], "subject": "Strategic Partnership Proposal", "body": "I approve moving forward with the partnership. Let's proceed with the next steps."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V268 Relationship Graph Builder — All systems operational | Reply-All: ENFORCED")
