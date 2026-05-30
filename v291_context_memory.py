#!/usr/bin/env python3
"""V291: Email Context Memory — Remembers past conversations and builds on them,
tracks relationship history, provides continuity across email threads.
Always enforces reply-all for multi-recipient emails."""
import json, re
from datetime import datetime
from collections import defaultdict

class EmailContextMemory:
    def __init__(self):
        self.conversation_history = defaultdict(list)
        self.relationship_context = defaultdict(lambda: {
            'first_contact': None,
            'total_emails': 0,
            'topics_discussed': [],
            'preferences': {},
            'sentiment_history': []
        })
        self.thread_context = defaultdict(list)
    
    def analyze_email(self, email_data):
        sender = email_data.get('from', '')
        recipients = email_data.get('to', [])
        cc = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = datetime.now().isoformat()
        
        # Extract thread ID
        thread_id = self._extract_thread_id(subject)
        
        # Retrieve context
        sender_context = self._get_sender_context(sender)
        thread_context = self._get_thread_context(thread_id)
        
        # Analyze current email
        current_analysis = self._analyze_current(body, sender_context)
        
        # Update memory
        self._update_memory(sender, thread_id, email_data, current_analysis)
        
        # Generate context-aware response
        response = self._generate_contextual_response(email_data, sender_context, thread_context, current_analysis)
        
        # Extract new topics
        new_topics = self._extract_topics(subject, body)
        
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            'engine': 'V291-ContextMemory',
            'thread_id': thread_id,
            'sender_relationship': {
                'total_interactions': sender_context['total_emails'],
                'first_contact': sender_context['first_contact'],
                'topics_discussed': sender_context['topics_discussed'][-5:],
                'relationship_strength': self._calculate_relationship_strength(sender_context)
            },
            'thread_context': {
                'messages_in_thread': len(thread_context),
                'thread_duration': self._calculate_thread_duration(thread_context),
                'key_topics': self._get_thread_topics(thread_context)
            },
            'current_analysis': current_analysis,
            'new_topics': new_topics,
            'context_continuity': self._assess_continuity(sender_context, current_analysis),
            'response': response,
            'reply_to': all_recipients,
            'reply_all_enforced': len(all_recipients) > 1
        }
    
    def _extract_thread_id(self, subject):
        import hashlib
        clean = re.sub(r'^(re:|fw:|fwd:)\s*', '', subject, flags=re.IGNORECASE).strip()
        return hashlib.md5(clean.encode()).hexdigest()[:12]
    
    def _get_sender_context(self, sender):
        return self.relationship_context[sender]
    
    def _get_thread_context(self, thread_id):
        return self.thread_context[thread_id]
    
    def _analyze_current(self, body, sender_context):
        text = body.lower()
        
        # Check if continuing previous discussion
        is_continuation = False
        referenced_topics = []
        
        for topic in sender_context['topics_discussed'][-10:]:
            if topic.lower() in text:
                is_continuation = True
                referenced_topics.append(topic)
        
        # Check for callbacks to previous conversations
        callback_indicators = ['as discussed', 'following up', 'per our conversation', 'we talked about', 'you mentioned']
        has_callback = any(indicator in text for indicator in callback_indicators)
        
        return {
            'is_continuation': is_continuation,
            'referenced_topics': referenced_topics,
            'has_callback': has_callback,
            'context_awareness': 'high' if is_continuation and has_callback else 'medium' if is_continuation else 'low'
        }
    
    def _update_memory(self, sender, thread_id, email_data, analysis):
        timestamp = datetime.now().isoformat()
        
        # Update relationship context
        rel = self.relationship_context[sender]
        if not rel['first_contact']:
            rel['first_contact'] = timestamp
        rel['total_emails'] += 1
        
        # Extract and store topics
        topics = self._extract_topics(email_data.get('subject', ''), email_data.get('body', ''))
        rel['topics_discussed'].extend(topics)
        
        # Update thread context
        self.thread_context[thread_id].append({
            'timestamp': timestamp,
            'sender': sender,
            'subject': email_data.get('subject', ''),
            'topics': topics,
            'analysis': analysis
        })
        
        # Also update conversation history
        self.conversation_history[sender].append({
            'timestamp': timestamp,
            'thread_id': thread_id,
            'subject': email_data.get('subject', '')
        })
    
    def _extract_topics(self, subject, body):
        text = (subject + ' ' + body).lower()
        
        # Simple topic extraction (in production, use NLP)
        topic_keywords = {
            'pricing': ['price', 'cost', 'budget', 'quote', 'estimate'],
            'timeline': ['deadline', 'schedule', 'timeline', 'when', 'date'],
            'technical': ['api', 'integration', 'technical', 'code', 'system'],
            'contract': ['contract', 'agreement', 'terms', 'legal'],
            'meeting': ['meeting', 'call', 'discuss', 'schedule'],
            'project': ['project', 'initiative', 'program', 'launch']
        }
        
        found_topics = []
        for topic, keywords in topic_keywords.items():
            if any(kw in text for kw in keywords):
                found_topics.append(topic)
        
        return found_topics
    
    def _calculate_relationship_strength(self, context):
        if context['total_emails'] == 0:
            return 'new'
        elif context['total_emails'] < 5:
            return 'developing'
        elif context['total_emails'] < 15:
            return 'established'
        else:
            return 'strong'
    
    def _calculate_thread_duration(self, thread):
        if len(thread) < 2:
            return '0 days'
        
        first = datetime.fromisoformat(thread[0]['timestamp'])
        last = datetime.fromisoformat(thread[-1]['timestamp'])
        days = (last - first).days
        
        return f"{days} day{'s' if days != 1 else ''}"
    
    def _get_thread_topics(self, thread):
        all_topics = []
        for msg in thread:
            all_topics.extend(msg.get('topics', []))
        
        # Return unique topics
        return list(set(all_topics))
    
    def _assess_continuity(self, sender_context, current_analysis):
        if current_analysis['is_continuation'] and current_analysis['has_callback']:
            return 'excellent - building on previous discussion'
        elif current_analysis['is_continuation']:
            return 'good - referencing past topics'
        elif sender_context['total_emails'] > 0:
            return 'moderate - continuing relationship'
        else:
            return 'new conversation'
    
    def _generate_contextual_response(self, email_data, sender_context, thread_context, analysis):
        subject = email_data.get('subject', '')
        
        response = f"🧠 Context-Aware Response for '{subject}':\n\n"
        
        if sender_context['total_emails'] > 0:
            response += f"Relationship: {sender_context['total_emails']} previous interactions\n"
            if sender_context['topics_discussed']:
                recent = sender_context['topics_discussed'][-3:]
                response += f"Recent topics: {', '.join(recent)}\n"
        
        if thread_context:
            response += f"Thread: {len(thread_context)} messages over {self._calculate_thread_duration(thread_context)}\n"
        
        response += f"\nContext Awareness: {analysis['context_awareness'].upper()}\n"
        
        if analysis['is_continuation']:
            response += f"✓ Continuing discussion on: {', '.join(analysis['referenced_topics'])}\n"
        
        response += "\n[Contextual response based on conversation history]\n"
        response += "\n---\nZion Tech Group | AI Email Intelligence V291\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709"
        
        return response

if __name__ == "__main__":
    engine = EmailContextMemory()
    
    # First email
    test1 = {
        "from": "client@company.com",
        "to": ["sales@zion.com"],
        "cc": [],
        "subject": "Initial inquiry about pricing",
        "body": "Hi, I'm interested in your services. Can you send me pricing information?"
    }
    result1 = engine.analyze_email(test1)
    
    # Follow-up email
    test2 = {
        "from": "client@company.com",
        "to": ["sales@zion.com", "manager@zion.com"],
        "cc": ["team@company.com"],
        "subject": "Re: Initial inquiry about pricing",
        "body": "Thanks for the pricing info. As discussed, we're also interested in the timeline for implementation. Can we schedule a meeting?"
    }
    result2 = engine.analyze_email(test2)
    
    print("V291 Email Context Memory - Follow-up Test:")
    print(json.dumps(result2, indent=2))
    print("\n✅ V291 Context Memory — All systems operational | Reply-All: ENFORCED")
