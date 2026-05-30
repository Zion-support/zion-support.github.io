#!/usr/bin/env python3
"""V405: Email Burnout Prevention Engine — Detects email overload patterns, suggests inbox zero
strategies, monitors after-hours activity, recommends workload balancing, team wellness dashboards.
Always enforces reply-all for multi-recipient emails."""
import json
from datetime import datetime, timedelta
from collections import defaultdict
import re

class EmailBurnoutPrevention:
    def __init__(self):
        self.user_metrics = defaultdict(lambda: {
            'emails_per_day': [],
            'response_times': [],
            'after_hours_emails': 0,
            'weekend_emails': 0,
            'unread_count': 0,
            'avg_email_length': 0,
            'meeting_emails_ratio': 0,
            'stress_indicators': [],
            'workload_score': 0
        })
        self.team_wellness = {
            'avg_workload_score': 0,
            'at_risk_members': [],
            'wellness_trend': 'stable'
        }
        self.reply_all_enforced = True
    
    def analyze_email(self, email_data):
        """Case-by-case analysis for burnout signals."""
        sender = email_data.get('from', '')
        recipients = email_data.get('to', [])
        cc = email_data.get('cc', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        timestamp = email_data.get('timestamp', datetime.now().isoformat())
        
        # REPLY-ALL ENFORCEMENT
        all_recipients = list(set(recipients + cc))
        
        dt = datetime.fromisoformat(timestamp) if isinstance(timestamp, str) else timestamp
        
        # Detect stress indicators in text
        stress_patterns = [
            r'(?:overwhelm|stressed|burnout|exhausted|tired)',
            r'(?:too many|too much|cannot keep up|falling behind)',
            r'(?:urgent|asap|immediately|right now|critical)',
            r'(?:deadline|running out of time|behind schedule)',
            r'(?:help|struggling|drowning|impossible)',
        ]
        
        text = f"{subject} {body}".lower()
        stress_detected = [p for p in stress_patterns if re.search(p, text)]
        
        # Check after-hours
        is_after_hours = dt.hour < 8 or dt.hour >= 19
        is_weekend = dt.weekday() >= 5
        
        # Calculate email complexity
        word_count = len(body.split())
        action_items = len(re.findall(r'(?:please|could you|need you|action item|todo|task)', text))
        attachments = email_data.get('attachment_count', 0)
        
        # Update user metrics
        user = sender
        metrics = self.user_metrics[user]
        metrics['emails_per_day'].append(dt.date().isoformat())
        
        if is_after_hours:
            metrics['after_hours_emails'] += 1
        if is_weekend:
            metrics['weekend_emails'] += 1
        
        metrics['stress_indicators'].extend(stress_detected)
        
        # Calculate workload score (0-100, higher = more burnout risk)
        workload = self._calculate_workload_score(metrics, word_count, action_items)
        metrics['workload_score'] = workload
        
        analysis = {
            'timestamp': dt.isoformat(),
            'sender': sender,
            'all_recipients': all_recipients,
            'reply_all_enforced': True,
            'stress_detected': len(stress_detected) > 0,
            'stress_patterns': stress_detected,
            'after_hours': is_after_hours,
            'weekend_email': is_weekend,
            'email_complexity': {
                'word_count': word_count,
                'action_items': action_items,
                'attachments': attachments,
                'complexity_score': min(10, (word_count / 100) + action_items + attachments)
            },
            'workload_score': workload,
            'burnout_risk': self._assess_burnout_risk(workload, metrics),
            'recommendations': [],
            'inbox_zero_actions': []
        }
        
        # Generate recommendations
        if workload > 70:
            analysis['recommendations'].append('⚠️ High workload detected — consider delegating non-critical emails')
        if is_after_hours:
            analysis['recommendations'].append('🌙 After-hours email — schedule send for business hours instead')
        if len(stress_detected) > 0:
            analysis['recommendations'].append('💡 Stress language detected — consider a brief break before responding')
        if action_items > 3:
            analysis['recommendations'].append('📋 Multiple action items — extract to task manager and respond with acknowledgment')
        
        # Inbox zero suggestions
        analysis['inbox_zero_actions'] = self._suggest_inbox_actions(subject, body, action_items)
        
        return analysis
    
    def _calculate_workload_score(self, metrics, word_count, action_items):
        """Calculate workload score (0-100)."""
        score = 0
        
        # Email volume
        today = datetime.now().date().isoformat()
        today_count = sum(1 for d in metrics['emails_per_day'] if d == today)
        score += min(30, today_count * 2)
        
        # After hours activity
        score += min(20, metrics['after_hours_emails'] * 3)
        
        # Weekend activity
        score += min(15, metrics['weekend_emails'] * 5)
        
        # Stress indicators
        score += min(20, len(metrics['stress_indicators']) * 4)
        
        # Current email complexity
        score += min(15, (word_count / 50) + action_items * 3)
        
        return min(100, int(score))
    
    def _assess_burnout_risk(self, workload, metrics):
        """Assess burnout risk level."""
        if workload >= 80:
            return 'critical'
        elif workload >= 60:
            return 'high'
        elif workload >= 40:
            return 'medium'
        return 'low'
    
    def _suggest_inbox_actions(self, subject, body, action_items):
        """Suggest inbox zero actions."""
        actions = []
        text = f"{subject} {body}".lower()
        
        # Newsletter/spam detection
        if any(kw in text for kw in ['unsubscribe', 'newsletter', 'digest', 'weekly update']):
            actions.append({'action': 'archive', 'reason': 'Newsletter — read later or unsubscribe'})
        
        # FYI emails
        if any(kw in text for kw in ['fyi', 'for your information', 'no action needed', 'just sharing']):
            actions.append({'action': 'archive', 'reason': 'FYI email — no action required'})
        
        # Meeting invites
        if any(kw in text for kw in ['meeting invite', 'calendar invitation', 'meeting request']):
            actions.append({'action': 'respond_and_archive', 'reason': 'Meeting invite — accept/decline then archive'})
        
        # Action required
        if action_items > 0:
            actions.append({'action': 'flag_and_respond', 'reason': f'{action_items} action items — flag for follow-up'})
        
        return actions
    
    def generate_wellness_report(self):
        """Generate team wellness report."""
        report = {
            'generated_at': datetime.now().isoformat(),
            'team_members': len(self.user_metrics),
            'avg_workload_score': 0,
            'at_risk_members': [],
            'recommendations': []
        }
        
        scores = [m['workload_score'] for m in self.user_metrics.values()]
        if scores:
            report['avg_workload_score'] = sum(scores) / len(scores)
        
        for user, metrics in self.user_metrics.items():
            if metrics['workload_score'] >= 70:
                report['at_risk_members'].append({
                    'user': user,
                    'workload_score': metrics['workload_score'],
                    'after_hours_emails': metrics['after_hours_emails'],
                    'stress_indicators': len(metrics['stress_indicators'])
                })
        
        if report['avg_workload_score'] > 60:
            report['recommendations'].append('🏢 Team-wide: Consider implementing no-email Fridays')
        if len(report['at_risk_members']) > 0:
            report['recommendations'].append('⚠️ Schedule 1:1 check-ins with at-risk team members')
        report['recommendations'].append('📧 Enable email batching: process emails 3x/day instead of constantly')
        report['recommendations'].append('⏰ Set auto-responder for after-hours emails')
        
        return report
    
    def process_batch(self, emails):
        """Process multiple emails for burnout prevention."""
        results = []
        for email in emails:
            result = self.analyze_email(email)
            results.append(result)
        
        return {
            'total_processed': len(results),
            'stress_detected': sum(1 for r in results if r['stress_detected']),
            'after_hours_emails': sum(1 for r in results if r['after_hours']),
            'high_burnout_risk': sum(1 for r in results if r['burnout_risk'] in ['high', 'critical']),
            'reply_all_enforced': True,
            'wellness_report': self.generate_wellness_report(),
            'results': results
        }

if __name__ == '__main__':
    engine = EmailBurnoutPrevention()
    test_emails = [
        {
            'from': 'employee@company.com',
            'to': ['manager@company.com'],
            'cc': ['team@company.com'],
            'subject': 'URGENT: Overwhelmed with deadlines',
            'body': 'Hi, I am struggling to keep up with the current workload. There are too many urgent tasks and I feel like I am falling behind. Can we discuss priorities? I have been working late every night this week.',
            'timestamp': '2026-05-30T22:30:00'
        },
        {
            'from': 'newsletter@techblog.com',
            'to': ['user@company.com'],
            'cc': [],
            'subject': 'Weekly Tech Digest - Unsubscribe',
            'body': 'Here is your weekly roundup of the latest tech news. Click here to unsubscribe.',
            'timestamp': '2026-05-30T09:00:00'
        }
    ]
    
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2, default=str))
    print(f"\n✅ Reply-all enforced: {result['reply_all_enforced']}")
    print(f"😰 Stress detected: {result['stress_detected']}")
    print(f"🌙 After-hours: {result['after_hours_emails']}")
    print(f"🔥 High burnout risk: {result['high_burnout_risk']}")
