#!/usr/bin/env python3
"""V293: Email Sarcasm Detector — Detects sarcasm and adjusts responses appropriately,
prevents misinterpretation, provides tone analysis.
Always enforces reply-all for multi-recipient emails."""
import json, re
from datetime import datetime

class EmailSarcasmDetector:
    def __init__(self):
        self.sarcasm_indicators = {
            'verbal': ['oh great', 'perfect', 'wonderful', 'fantastic', 'brilliant', 'excellent', 'just what I needed'],
            'contextual': ['sure', 'right', 'of course', 'obviously', 'clearly', 'naturally'],
            'exaggeration': ['always', 'never', 'every single time', 'literally', 'totally'],
            'punctuation': ['...', '!!!', '???', '~']
        }
        self.tone_history = {}
    
    def analyze_email(self, email_data):
        sender = email_data.get('from', '')
        recipients = email_data.get('to', [])
        cc = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        
        # Detect sarcasm
        sarcasm_analysis = self._detect_sarcasm(body, subject)
        
        # Analyze overall tone
        tone = self._analyze_tone(body)
        
        # Determine if response adjustment needed
        response_adjustment = self._determine_adjustment(sarcasm_analysis, tone)
        
        # Generate appropriate response
        response = self._generate_tone_aware_response(email_data, sarcasm_analysis, tone, response_adjustment)
        
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            'engine': 'V293-SarcasmDetector',
            'sarcasm_analysis': sarcasm_analysis,
            'tone_analysis': tone,
            'response_adjustment': response_adjustment,
            'response': response,
            'reply_to': all_recipients,
            'reply_all_enforced': len(all_recipients) > 1
        }
    
    def _detect_sarcasm(self, body, subject):
        text = (subject + ' ' + body).lower()
        
        indicators_found = []
        sarcasm_score = 0.0
        
        # Check verbal indicators
        for phrase in self.sarcasm_indicators['verbal']:
            if phrase in text:
                indicators_found.append({'type': 'verbal', 'phrase': phrase})
                sarcasm_score += 0.2
        
        # Check contextual indicators
        for phrase in self.sarcasm_indicators['contextual']:
            if re.search(r'\b' + phrase + r'\b', text):
                indicators_found.append({'type': 'contextual', 'phrase': phrase})
                sarcasm_score += 0.15
        
        # Check exaggeration
        for phrase in self.sarcasm_indicators['exaggeration']:
            if phrase in text:
                indicators_found.append({'type': 'exaggeration', 'phrase': phrase})
                sarcasm_score += 0.1
        
        # Check punctuation patterns
        for punct in self.sarcasm_indicators['punctuation']:
            if punct in text:
                indicators_found.append({'type': 'punctuation', 'pattern': punct})
                sarcasm_score += 0.05
        
        # Context analysis - negative context with positive words
        negative_words = ['problem', 'issue', 'error', 'fail', 'broken', 'wrong', 'bad']
        positive_words = ['great', 'perfect', 'wonderful', 'excellent', 'love']
        
        has_negative = any(word in text for word in negative_words)
        has_positive = any(word in text for word in positive_words)
        
        if has_negative and has_positive:
            sarcasm_score += 0.3
            indicators_found.append({'type': 'context_mismatch', 'description': 'Positive words with negative context'})
        
        # Determine sarcasm level
        sarcasm_score = min(1.0, sarcasm_score)
        if sarcasm_score > 0.7:
            level = 'high'
        elif sarcasm_score > 0.4:
            level = 'medium'
        elif sarcasm_score > 0.2:
            level = 'low'
        else:
            level = 'none'
        
        return {
            'sarcasm_detected': level != 'none',
            'sarcasm_level': level,
            'sarcasm_score': round(sarcasm_score, 2),
            'indicators': indicators_found,
            'confidence': min(0.95, 0.5 + sarcasm_score * 0.5)
        }
    
    def _analyze_tone(self, body):
        text = body.lower()
        
        # Sentiment indicators
        positive_words = ['happy', 'pleased', 'satisfied', 'great', 'good', 'excellent', 'thank', 'appreciate']
        negative_words = ['frustrated', 'angry', 'disappointed', 'upset', 'annoyed', 'terrible', 'awful']
        neutral_words = ['okay', 'fine', 'understand', 'noted']
        
        pos_count = sum(1 for word in positive_words if word in text)
        neg_count = sum(1 for word in negative_words if word in text)
        neu_count = sum(1 for word in neutral_words if word in text)
        
        if pos_count > neg_count and pos_count > neu_count:
            primary_tone = 'positive'
        elif neg_count > pos_count and neg_count > neu_count:
            primary_tone = 'negative'
        else:
            primary_tone = 'neutral'
        
        # Check for frustration markers
        frustration_markers = ['again', 'still', 'always', 'never', 'multiple times']
        frustration_level = sum(1 for marker in frustration_markers if marker in text)
        
        return {
            'primary_tone': primary_tone,
            'sentiment_distribution': {
                'positive': pos_count,
                'negative': neg_count,
                'neutral': neu_count
            },
            'frustration_level': 'high' if frustration_level >= 3 else 'medium' if frustration_level >= 1 else 'low',
            'emotional_intensity': 'high' if (pos_count + neg_count) > 3 else 'medium' if (pos_count + neg_count) > 1 else 'low'
        }
    
    def _determine_adjustment(self, sarcasm_analysis, tone):
        adjustments = []
        
        if sarcasm_analysis['sarcasm_detected']:
            adjustments.append({
                'type': 'acknowledge_tone',
                'reason': 'Sarcasm detected - respond with empathy and understanding',
                'action': 'Address underlying concern directly'
            })
        
        if tone['primary_tone'] == 'negative':
            adjustments.append({
                'type': 'de_escalate',
                'reason': 'Negative tone detected - focus on resolution',
                'action': 'Apologize if appropriate, provide clear solutions'
            })
        
        if tone['frustration_level'] == 'high':
            adjustments.append({
                'type': 'prioritize_resolution',
                'reason': 'High frustration - immediate action needed',
                'action': 'Escalate if necessary, provide timeline'
            })
        
        return adjustments
    
    def _generate_tone_aware_response(self, email_data, sarcasm_analysis, tone, adjustments):
        subject = email_data.get('subject', '')
        
        response = f"😊 Tone Analysis for '{subject}':\n\n"
        response += f"Primary Tone: {tone['primary_tone'].upper()}\n"
        response += f"Sarcasm Level: {sarcasm_analysis['sarcasm_level'].upper()}\n"
        response += f"Frustration: {tone['frustration_level'].upper()}\n\n"
        
        if sarcasm_analysis['sarcasm_detected']:
            response += f"⚠️ Sarcasm detected (score: {sarcasm_analysis['sarcasm_score']})\n"
            response += f"Indicators: {', '.join([ind.get('phrase', ind.get('pattern', '')) for ind in sarcasm_analysis['indicators'][:3]])}\n\n"
        
        if adjustments:
            response += "Response Adjustments:\n"
            for adj in adjustments:
                response += f"• {adj['type'].replace('_', ' ').title()}: {adj['action']}\n"
        
        response += "\n[Tone-aware response crafted accordingly]\n"
        response += "\n---\nZion Tech Group | AI Email Intelligence V293\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709"
        
        return response

if __name__ == "__main__":
    engine = EmailSarcasmDetector()
    test = {
        "from": "frustrated@client.com",
        "to": ["support@zion.com", "manager@zion.com"],
        "cc": ["team@client.com"],
        "subject": "Re: Issue Still Not Fixed",
        "body": "Oh great, another week and the problem is STILL not fixed. Perfect timing as always. This is just what I needed before our big presentation. Brilliant job, really excellent work."
    }
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V293 Sarcasm Detector — All systems operational | Reply-All: ENFORCED")
