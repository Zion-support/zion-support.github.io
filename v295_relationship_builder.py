#!/usr/bin/env python3
"""V295: Email Relationship Builder — Tracks and nurtures business relationships,
identifies relationship health, suggests engagement strategies.
Always enforces reply-all for multi-recipient emails."""
import json
from datetime import datetime
from collections import defaultdict

class EmailRelationshipBuilder:
    def __init__(self):
        self.relationships = defaultdict(lambda: {
            'first_contact': None,
            'last_contact': None,
            'total_interactions': 0,
            'sentiment_history': [],
            'topics_discussed': [],
            'responsiveness': {'avg_response_time': None, 'response_rate': 0},
            'engagement_score': 0,
            'relationship_stage': 'new'
        })
        self.relationship_stages = ['new', 'developing', 'established', 'strong', 'at_risk']
    
    def analyze_email(self, email_data):
        sender = email_data.get('from', '')
        recipients = email_data.get('to', [])
        cc = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = datetime.now()
        
        # Analyze all relationships in this email
        all_participants = [sender] + recipients + cc
        relationship_analyses = {}
        
        for participant in all_participants:
            if participant != sender:  # Don't analyze self
                analysis = self._analyze_relationship(sender, participant, email_data, timestamp)
                relationship_analyses[participant] = analysis
        
        # Calculate overall relationship health
        health_score = self._calculate_health_score(relationship_analyses)
        
        # Generate engagement suggestions
        suggestions = self._generate_suggestions(relationship_analyses)
        
        # Generate response
        response = self._generate_relationship_response(email_data, relationship_analyses, health_score, suggestions)
        
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            'engine': 'V295-RelationshipBuilder',
            'relationship_analyses': relationship_analyses,
            'overall_health_score': health_score,
            'engagement_suggestions': suggestions,
            'response': response,
            'reply_to': all_recipients,
            'reply_all_enforced': len(all_recipients) > 1
        }
    
    def _analyze_relationship(self, sender, participant, email_data, timestamp):
        rel_key = f"{sender}-{participant}"
        rel = self.relationships[rel_key]
        
        # Update interaction count
        if not rel['first_contact']:
            rel['first_contact'] = timestamp.isoformat()
        rel['last_contact'] = timestamp.isoformat()
        rel['total_interactions'] += 1
        
        # Analyze sentiment
        sentiment = self._analyze_sentiment(email_data.get('body', ''))
        rel['sentiment_history'].append({
            'timestamp': timestamp.isoformat(),
            'sentiment': sentiment
        })
        
        # Extract topics
        topics = self._extract_topics(email_data.get('subject', ''), email_data.get('body', ''))
        rel['topics_discussed'].extend(topics)
        
        # Determine relationship stage
        stage = self._determine_stage(rel)
        rel['relationship_stage'] = stage
        
        # Calculate engagement score
        engagement = self._calculate_engagement(rel)
        rel['engagement_score'] = engagement
        
        return {
            'participant': participant,
            'stage': stage,
            'total_interactions': rel['total_interactions'],
            'sentiment_trend': self._analyze_sentiment_trend(rel['sentiment_history']),
            'engagement_score': engagement,
            'common_topics': list(set(rel['topics_discussed']))[-5:],
            'days_since_first': self._days_between(rel['first_contact'], timestamp),
            'relationship_strength': self._calculate_strength(rel)
        }
    
    def _analyze_sentiment(self, body):
        text = body.lower()
        
        positive_words = ['thank', 'appreciate', 'great', 'excellent', 'happy', 'pleased', 'love']
        negative_words = ['frustrated', 'disappointed', 'angry', 'upset', 'terrible', 'awful']
        
        pos_count = sum(1 for word in positive_words if word in text)
        neg_count = sum(1 for word in negative_words if word in text)
        
        if pos_count > neg_count:
            return 'positive'
        elif neg_count > pos_count:
            return 'negative'
        else:
            return 'neutral'
    
    def _extract_topics(self, subject, body):
        text = (subject + ' ' + body).lower()
        
        topic_keywords = {
            'business': ['project', 'proposal', 'contract', 'deal', 'partnership'],
            'technical': ['api', 'integration', 'system', 'code', 'technical'],
            'support': ['help', 'issue', 'problem', 'support', 'assistance'],
            'sales': ['pricing', 'quote', 'purchase', 'buy', 'cost'],
            'meeting': ['meeting', 'call', 'discuss', 'schedule', 'appointment']
        }
        
        found_topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text for kw in keywords):
                found_topics.append(topic)
        
        return found_topics
    
    def _determine_stage(self, rel):
        interactions = rel['total_interactions']
        
        if interactions == 1:
            return 'new'
        elif interactions < 5:
            return 'developing'
        elif interactions < 15:
            return 'established'
        elif interactions >= 15:
            # Check if at risk (long time since last contact)
            last_contact = datetime.fromisoformat(rel['last_contact'])
            days_since = (datetime.now() - last_contact).days
            if days_since > 60:
                return 'at_risk'
            return 'strong'
        else:
            return 'developing'
    
    def _calculate_engagement(self, rel):
        score = 0.0
        
        # Interaction frequency
        if rel['total_interactions'] > 10:
            score += 0.3
        elif rel['total_interactions'] > 5:
            score += 0.2
        elif rel['total_interactions'] > 1:
            score += 0.1
        
        # Sentiment
        positive_count = sum(1 for s in rel['sentiment_history'] if s['sentiment'] == 'positive')
        if positive_count > len(rel['sentiment_history']) * 0.6:
            score += 0.3
        
        # Topic diversity
        unique_topics = len(set(rel['topics_discussed']))
        if unique_topics > 3:
            score += 0.2
        elif unique_topics > 1:
            score += 0.1
        
        # Recency
        if rel['last_contact']:
            last_contact = datetime.fromisoformat(rel['last_contact'])
            days_since = (datetime.now() - last_contact).days
            if days_since < 7:
                score += 0.2
            elif days_since < 30:
                score += 0.1
        
        return round(min(1.0, score), 2)
    
    def _analyze_sentiment_trend(self, history):
        if len(history) < 2:
            return 'stable'
        
        recent = history[-3:] if len(history) >= 3 else history
        sentiments = [s['sentiment'] for s in recent]
        
        if all(s == 'positive' for s in sentiments):
            return 'improving'
        elif all(s == 'negative' for s in sentiments):
            return 'declining'
        else:
            return 'stable'
    
    def _days_between(self, date1_str, date2):
        if not date1_str:
            return 0
        date1 = datetime.fromisoformat(date1_str)
        return (date2 - date1).days
    
    def _calculate_strength(self, rel):
        engagement = rel['engagement_score']
        interactions = rel['total_interactions']
        
        if engagement > 0.7 and interactions > 10:
            return 'very_strong'
        elif engagement > 0.5 and interactions > 5:
            return 'strong'
        elif engagement > 0.3 and interactions > 2:
            return 'moderate'
        else:
            return 'weak'
    
    def _calculate_health_score(self, analyses):
        if not analyses:
            return 0.0
        
        scores = [a['engagement_score'] for a in analyses.values()]
        return round(sum(scores) / len(scores), 2)
    
    def _generate_suggestions(self, analyses):
        suggestions = []
        
        for participant, analysis in analyses.items():
            if analysis['stage'] == 'at_risk':
                suggestions.append({
                    'participant': participant,
                    'action': 're_engagement',
                    'reason': 'Relationship at risk - no contact in 60+ days',
                    'suggestion': 'Send personalized check-in or value-add content'
                })
            elif analysis['stage'] == 'new':
                suggestions.append({
                    'participant': participant,
                    'action': 'nurture',
                    'reason': 'New relationship - needs development',
                    'suggestion': 'Follow up within 3 days with relevant content'
                })
            elif analysis['sentiment_trend'] == 'declining':
                suggestions.append({
                    'participant': participant,
                    'action': 'relationship_repair',
                    'reason': 'Sentiment declining',
                    'suggestion': 'Address concerns proactively, offer additional value'
                })
            elif analysis['engagement_score'] < 0.4:
                suggestions.append({
                    'participant': participant,
                    'action': 'increase_engagement',
                    'reason': 'Low engagement score',
                    'suggestion': 'Increase touchpoints, provide more value'
                })
        
        return suggestions
    
    def _generate_relationship_response(self, email_data, analyses, health_score, suggestions):
        subject = email_data.get('subject', '')
        
        response = f"🤝 Relationship Analysis for '{subject}':\n\n"
        response += f"Overall Health Score: {health_score}/1.0\n"
        response += f"Relationships Analyzed: {len(analyses)}\n\n"
        
        for participant, analysis in list(analyses.items())[:3]:
            response += f"{participant}:\n"
            response += f"  • Stage: {analysis['stage'].title()}\n"
            response += f"  • Strength: {analysis['relationship_strength'].replace('_', ' ').title()}\n"
            response += f"  • Interactions: {analysis['total_interactions']}\n\n"
        
        if suggestions:
            response += "Engagement Suggestions:\n"
            for s in suggestions[:3]:
                response += f"• {s['participant']}: {s['suggestion']}\n"
        
        response += "\n---\nZion Tech Group | AI Email Intelligence V295\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709"
        
        return response

if __name__ == "__main__":
    engine = EmailRelationshipBuilder()
    test = {
        "from": "longtime-client@company.com",
        "to": ["account-manager@zion.com", "support@zion.com"],
        "cc": ["team@company.com", "executive@company.com"],
        "subject": "Thank you for the excellent support",
        "body": "I just wanted to reach out and thank you for all the great support over the past year. Your team has been fantastic and we really appreciate the partnership. Looking forward to continuing our work together on the new project."
    }
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V295 Relationship Builder — All systems operational | Reply-All: ENFORCED")
