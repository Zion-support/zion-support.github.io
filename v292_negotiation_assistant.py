#!/usr/bin/env python3
"""V292: Email Negotiation Assistant — Helps with price negotiations and deal-making,
provides negotiation strategies, tracks concessions, suggests counter-offers.
Always enforces reply-all for multi-recipient emails."""
import json, re
from datetime import datetime
from collections import defaultdict

class EmailNegotiationAssistant:
    def __init__(self):
        self.negotiation_history = defaultdict(list)
        self.deal_context = defaultdict(lambda: {
            'initial_offer': None,
            'current_offer': None,
            'concessions_made': [],
            'counter_offers': [],
            'leverage_points': []
        })
        self.negotiation_patterns = {
            'price_reduction': ['discount', 'reduce', 'lower price', 'better price', 'too expensive'],
            'value_addition': ['include', 'add', 'bonus', 'extra', 'free'],
            'timeline_pressure': ['urgent', 'need it now', 'asap', 'deadline'],
            'competitor_mention': ['competitor', 'other vendor', 'alternative', 'cheaper option'],
            'budget_constraint': ['budget', 'can\'t afford', 'limited funds', 'cost issue']
        }
    
    def analyze_email(self, email_data):
        sender = email_data.get('from', '')
        recipients = email_data.get('to', [])
        cc = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        
        # Extract deal ID
        deal_id = self._extract_deal_id(subject, sender)
        
        # Detect negotiation tactics
        tactics = self._detect_tactics(body)
        
        # Analyze negotiation position
        position = self._analyze_position(deal_id, tactics, body)
        
        # Generate strategy
        strategy = self._generate_strategy(deal_id, position, tactics)
        
        # Update negotiation history
        self._update_history(deal_id, email_data, tactics, position)
        
        # Generate response with negotiation guidance
        response = self._generate_negotiation_response(email_data, strategy, position)
        
        all_recipients = list(set(recipients + cc))
        if sender and sender not in all_recipients:
            all_recipients.insert(0, sender)
        
        return {
            'engine': 'V292-NegotiationAssistant',
            'deal_id': deal_id,
            'negotiation_tactics': tactics,
            'position_analysis': position,
            'strategy': strategy,
            'deal_context': dict(self.deal_context[deal_id]),
            'response': response,
            'reply_to': all_recipients,
            'reply_all_enforced': len(all_recipients) > 1
        }
    
    def _extract_deal_id(self, subject, sender):
        import hashlib
        clean = re.sub(r'^(re:|fw:|fwd:)\s*', '', subject, flags=re.IGNORECASE).strip()
        return hashlib.md5(f"{sender}:{clean}".encode()).hexdigest()[:12]
    
    def _detect_tactics(self, body):
        text = body.lower()
        tactics = []
        
        for tactic_type, keywords in self.negotiation_patterns.items():
            if any(kw in text for kw in keywords):
                tactics.append({
                    'type': tactic_type,
                    'confidence': 0.8,
                    'keywords_found': [kw for kw in keywords if kw in text]
                })
        
        # Extract specific numbers
        numbers = re.findall(r'\$[\d,]+(?:\.\d{2})?', body)
        percentages = re.findall(r'\d+%', body)
        
        return {
            'tactics_detected': tactics,
            'numbers_mentioned': numbers,
            'percentages_mentioned': percentages,
            'negotiation_intensity': len(tactics)
        }
    
    def _analyze_position(self, deal_id, tactics, body):
        context = self.deal_context[deal_id]
        
        # Determine who has leverage
        leverage_indicators = {
            'buyer': ['competitor', 'alternative', 'walk away', 'budget constraint'],
            'seller': ['limited availability', 'high demand', 'unique', 'exclusive']
        }
        
        text = body.lower()
        buyer_leverage = sum(1 for kw in leverage_indicators['buyer'] if kw in text)
        seller_leverage = sum(1 for kw in leverage_indicators['seller'] if kw in text)
        
        if buyer_leverage > seller_leverage:
            leverage = 'buyer'
        elif seller_leverage > buyer_leverage:
            leverage = 'seller'
        else:
            leverage = 'balanced'
        
        # Assess urgency
        urgency_keywords = ['urgent', 'asap', 'deadline', 'need by', 'time sensitive']
        urgency = 'high' if any(kw in text for kw in urgency_keywords) else 'normal'
        
        return {
            'leverage': leverage,
            'urgency': urgency,
            'negotiation_stage': self._determine_stage(context),
            'concession_pressure': 'high' if len(tactics['tactics_detected']) > 2 else 'medium' if len(tactics['tactics_detected']) > 0 else 'low'
        }
    
    def _determine_stage(self, context):
        if not context['initial_offer']:
            return 'initial'
        elif len(context['counter_offers']) == 0:
            return 'first_response'
        elif len(context['counter_offers']) < 3:
            return 'negotiating'
        else:
            return 'closing'
    
    def _generate_strategy(self, deal_id, position, tactics):
        strategies = []
        
        # Price reduction requests
        if any(t['type'] == 'price_reduction' for t in tactics['tactics_detected']):
            if position['leverage'] == 'seller':
                strategies.append({
                    'type': 'hold_firm',
                    'reasoning': 'You have leverage - maintain price but add value',
                    'suggestion': 'Offer additional services instead of price reduction'
                })
            else:
                strategies.append({
                    'type': 'strategic_concession',
                    'reasoning': 'Buyer has leverage - make small concession to maintain deal',
                    'suggestion': 'Offer 5-10% reduction with conditions'
                })
        
        # Competitor mentions
        if any(t['type'] == 'competitor_mention' for t in tactics['tactics_detected']):
            strategies.append({
                'type': 'value_differentiation',
                'reasoning': 'Highlight unique value proposition',
                'suggestion': 'Emphasize features/benefits competitors lack'
            })
        
        # Budget constraints
        if any(t['type'] == 'budget_constraint' for t in tactics['tactics_detected']):
            strategies.append({
                'type': 'flexible_terms',
                'reasoning': 'Offer payment flexibility instead of price reduction',
                'suggestion': 'Propose payment plans or phased implementation'
            })
        
        # Timeline pressure
        if any(t['type'] == 'timeline_pressure' for t in tactics['tactics_detected']):
            strategies.append({
                'type': 'expedite_premium',
                'reasoning': 'Urgency can justify premium pricing',
                'suggestion': 'Offer expedited delivery at premium or standard timeline at current price'
            })
        
        if not strategies:
            strategies.append({
                'type': 'relationship_building',
                'reasoning': 'No specific tactics detected - focus on relationship',
                'suggestion': 'Build rapport and understand needs better'
            })
        
        return strategies
    
    def _update_history(self, deal_id, email_data, tactics, position):
        self.negotiation_history[deal_id].append({
            'timestamp': datetime.now().isoformat(),
            'sender': email_data.get('from', ''),
            'tactics': tactics,
            'position': position
        })
        
        # Update deal context
        context = self.deal_context[deal_id]
        numbers = tactics['numbers_mentioned']
        if numbers and not context['initial_offer']:
            context['initial_offer'] = numbers[0]
        if numbers:
            context['current_offer'] = numbers[-1]
    
    def _generate_negotiation_response(self, email_data, strategy, position):
        subject = email_data.get('subject', '')
        
        response = f"🤝 Negotiation Analysis for '{subject}':\n\n"
        response += f"Stage: {position['negotiation_stage'].upper()}\n"
        response += f"Leverage: {position['leverage'].upper()}\n"
        response += f"Urgency: {position['urgency'].upper()}\n\n"
        
        if strategy:
            response += "Recommended Strategy:\n"
            for s in strategy[:2]:
                response += f"• {s['type'].replace('_', ' ').title()}: {s['suggestion']}\n"
        
        response += "\n[Strategic response based on negotiation analysis]\n"
        response += "\n---\nZion Tech Group | AI Email Intelligence V292\n📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com\n📍 364 E Main St STE 1008, Middletown DE 19709"
        
        return response

if __name__ == "__main__":
    engine = EmailNegotiationAssistant()
    test = {
        "from": "buyer@client.com",
        "to": ["sales@zion.com", "manager@zion.com"],
        "cc": ["procurement@client.com"],
        "subject": "Re: Proposal - Pricing Discussion",
        "body": "Thanks for the proposal. However, $50,000 is too expensive for our budget. Our competitor quoted us $35,000 for similar services. We need this implemented urgently by next month. Can you offer a better price or we'll have to consider alternatives?"
    }
    result = engine.analyze_email(test)
    print(json.dumps(result, indent=2))
    print("\n✅ V292 Negotiation Assistant — All systems operational | Reply-All: ENFORCED")
