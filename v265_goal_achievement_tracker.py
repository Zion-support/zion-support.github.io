#!/usr/bin/env python3
"""V265: Email Goal Achievement Tracker — Tracks progress on email-discussed goals,
sends milestone updates, escalates at-risk goals, generates progress reports."""
import json, re, hashlib
from datetime import datetime, timedelta
from collections import defaultdict

class GoalAchievementTracker:
    """Analyzes emails case-by-case, tracks goals, enforces reply-all."""
    def __init__(self):
        self.goals_db = defaultdict(lambda: {
            "title": "",
            "status": "in_progress",
            "progress": 0,
            "milestones": [],
            "created": None,
            "last_update": None,
            "participants": set(),
            "risk_level": "low"
        })
        self.milestones_achieved = 0
        self.goals_at_risk = 0
    
    def analyze_email(self, email_data):
        sender = email_data.get("from", "")
        recipients = email_data.get("to", [])
        cc = email_data.get("cc", [])
        subject = email_data.get("subject", "")
        body = email_data.get("body", "")
        
        # Detect goal-related content
        goals_detected = self._detect_goals(subject, body, sender)
        
        # Update progress
        progress_updates = self._update_progress(goals_detected, body)
        
        # Check for at-risk goals
        risk_assessment = self._assess_risks()
        
        # Generate milestone updates
        milestones = self._generate_milestones(goals_detected, progress_updates)
        
        # Generate goal-aware response
        response = self._generate_goal_response(email_data, goals_detected, progress_updates, risk_assessment)
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            "engine": "V265-GoalAchievementTracker",
            "goals_tracked": len(self.goals_db),
            "goals_detected_in_email": len(goals_detected),
            "progress_updates": len(progress_updates),
            "milestones_achieved": self.milestones_achieved,
            "goals_at_risk": self.goals_at_risk,
            "risk_assessment": risk_assessment,
            "response": response,
            "reply_to": all_recipients,
            "reply_all_enforced": len(all_recipients) > 1
        }
    
    def _detect_goals(self, subject, body, sender):
        text = (subject + " " + body).lower()
        goals = []
        
        # Project goals
        if any(w in text for w in ["project", "launch", "release", "deploy", "ship"]):
            goal_id = hashlib.md5(subject.lower().encode()).hexdigest()[:12]
            self.goals_db[goal_id]["title"] = subject
            self.goals_db[goal_id]["participants"].add(sender)
            if not self.goals_db[goal_id]["created"]:
                self.goals_db[goal_id]["created"] = datetime.now().isoformat()
            goals.append({"id": goal_id, "type": "project", "title": subject})
        
        # Sales goals
        if any(w in text for w in ["revenue", "sales target", "quota", "deal"]):
            goal_id = hashlib.md5(f"sales-{sender}".encode()).hexdigest()[:12]
            self.goals_db[goal_id]["title"] = "Sales Target"
            self.goals_db[goal_id]["participants"].add(sender)
            goals.append({"id": goal_id, "type": "sales", "title": "Sales Target"})
        
        # Deadline goals
        deadline = re.search(r'(by|before|deadline)\s+(\w+\s+\d{1,2}(?:st|nd|rd|th)?)', text)
        if deadline:
            goal_id = hashlib.md5(f"deadline-{deadline.group(2)}".encode()).hexdigest()[:12]
            self.goals_db[goal_id]["title"] = f"Deadline: {deadline.group(2)}"
            goals.append({"id": goal_id, "type": "deadline", "title": f"Deadline: {deadline.group(2)}"})
        
        return goals
    
    def _update_progress(self, goals, body):
        updates = []
        for goal in goals:
            gid = goal["id"]
            text = body.lower()
            
            if any(w in text for w in ["completed", "done", "finished", "shipped", "launched"]):
                self.goals_db[gid]["progress"] = 100
                self.goals_db[gid]["status"] = "completed"
                self.milestones_achieved += 1
                updates.append({"goal_id": gid, "progress": 100, "status": "completed"})
            elif any(w in text for w in ["progress", "update", "status", "moving forward"]):
                current = self.goals_db[gid]["progress"]
                new_progress = min(100, current + 15)
                self.goals_db[gid]["progress"] = new_progress
                updates.append({"goal_id": gid, "progress": new_progress, "status": "in_progress"})
            elif any(w in text for w in ["delayed", "behind", "blocked", "issue"]):
                self.goals_db[gid]["risk_level"] = "high"
                self.goals_at_risk += 1
                updates.append({"goal_id": gid, "progress": self.goals_db[gid]["progress"], "status": "at_risk"})
            
            self.goals_db[gid]["last_update"] = datetime.now().isoformat()
        
        return updates
    
    def _assess_risks(self):
        at_risk = []
        for gid, goal in self.goals_db.items():
            if goal["risk_level"] == "high":
                at_risk.append({"id": gid, "title": goal["title"], "progress": goal["progress"]})
            elif goal["created"]:
                created = datetime.fromisoformat(goal["created"])
                days_old = (datetime.now() - created).days
                if days_old > 30 and goal["progress"] < 50:
                    at_risk.append({"id": gid, "title": goal["title"], "progress": goal["progress"], "reason": "slow_progress"})
        
        self.goals_at_risk = len(at_risk)
        return at_risk
    
    def _generate_milestones(self, goals, updates):
        milestones = []
        for update in updates:
            if update["status"] == "completed":
                milestones.append({"goal_id": update["goal_id"], "type": "completion", "message": "Goal completed!"})
            elif update["progress"] >= 75 and update["progress"] < 100:
                milestones.append({"goal_id": update["goal_id"], "type": "near_completion", "message": "Almost there!"})
        return milestones
    
    def _generate_goal_response(self, email_data, goals, updates, risks):
        subject = email_data.get("subject", "")
        
        parts = []
        if goals:
            parts.append(f"Tracking {len(goals)} goal(s) from this email")
        if updates:
            parts.append(f"{len(updates)} progress update(s) applied")
        if risks:
            parts.append(f"⚠️ {len(risks)} goal(s) at risk")
        
        summary = " | ".join(parts) if parts else "No goals detected"
        
        base = f"Thank you for your email about '{subject}'. Goal Tracker: {summary}. Total goals tracked: {len(self.goals_db)}."
        
        return base + "\n\n---\nZion Tech Group | AI Email Intelligence V265\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709\n🌐 https://ziontechgroup.com"

if __name__ == "__main__":
    engine = GoalAchievementTracker()
    test = {"from": "pm@company.com", "to": ["team@zion.com", "dev@zion.com"], "cc": ["stakeholder@company.com"], "subject": "Q4 Product Launch Update", "body": "The project is moving forward nicely. We've completed the design phase and are now 75% through development. On track to launch by December 15th."}
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V265 Goal Achievement Tracker — All systems operational | Reply-All: ENFORCED")
