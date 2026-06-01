#!/usr/bin/env python3
"""
Test script for case_analyzer.py
"""
import sys
sys.path.insert(0, '/Users/klebergarciaalcatrao/.openclaw/workspace/zion.app/commands')
from case_analyzer import analyze_email

# Test cases
test_emails = [
    {
        'subject': 'Urgent: Server down!',
        'body': 'The server is down and we need immediate assistance. This is critical.',
    },
    {
        'subject': 'Question about pricing',
        'body': 'Hi, I would like to know more about your pricing plans for the enterprise package.',
    },
    {
        'subject': 'Thanks for the great service!',
        'body': 'Thank you for the excellent support. I am very satisfied with the results.',
    },
    {
        'subject': 'Complaint about billing',
        'body': 'I am upset about the incorrect charge on my invoice. Please fix this as soon as possible.',
    },
    {
        'subject': 'Team meeting tomorrow',
        'body': 'Just a reminder about the team meeting tomorrow at 10am. Please bring your updates.',
    }
]

for i, email in enumerate(test_emails):
    print(f'\n--- Test Email {i+1} ---')
    print(f"Subject: {email['subject']}")
    print(f"Body: {email['body']}")
    result = analyze_email(email)
    print(f"Sentiment: {result['sentiment']}")
    print(f"Urgency: {result['urgency']}")
    print(f"Intent: {result['intent']}")
    print(f"Suggested Actions: {result['suggested_actions']}")
    print(f"Reply-all Suggested: {result['reply_all_suggested']}")