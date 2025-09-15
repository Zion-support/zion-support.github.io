#!/usr/bin/env python3
"""
Seed script for adding sample updates to the database.
Run this after initializing the database to populate it with sample update data.
"""

import os
import sys
from datetime import datetime, timedelta

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import app
from models import db, Update, User, Category, Course

def seed_updates():
    """Seed the database with sample updates."""
    with app.app_context():
        # Check if updates already exist
        if Update.query.first():
            print("Updates already exist in the database. Skipping seed.")
            return
        
        # Create sample updates
        sample_updates = [
            {
                'title': 'New Course: Advanced Blockchain Development',
                'content': '''We're excited to announce our newest course: Advanced Blockchain Development!

This comprehensive course covers:
• Smart contract development with Solidity
• DeFi protocol design and implementation
• Layer 2 scaling solutions
• Cross-chain interoperability
• Security best practices and auditing

The course includes hands-on projects, real-world case studies, and mentorship from industry experts. Perfect for developers looking to advance their blockchain skills and contribute to the future of decentralized finance.

Enrollment opens next week with early bird pricing available for the first 50 students.''',
                'summary': 'Comprehensive blockchain development course covering smart contracts, DeFi protocols, and security best practices.',
                'update_type': 'course',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(hours=2)
            },
            {
                'title': 'Feature Launch: Interactive AI Labs',
                'content': '''We are launching Interactive AI Labs across select courses!

Highlights:
• GPU-backed sandboxed environments
• Preloaded datasets and notebooks
• One-click lab resets and hints
• Auto-grading for select exercises

Rollout starts next week for AI Fundamentals and Computer Vision tracks, with more labs coming soon.''',
                'summary': 'New GPU-powered Interactive AI Labs with auto-grading and one-click resets.',
                'update_type': 'feature',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(hours=8)
            },
            {
                'title': 'Webinar Series: Production-Ready LLM Systems',
                'content': '''Join our free webinar series on designing, deploying, and monitoring production LLM systems.

Schedule:
• Part 1: Retrieval and Caching Strategies
• Part 2: Evaluation and Guardrails
• Part 3: Cost Optimization and Observability

Register today to reserve your seat and receive recordings and materials after each session.''',
                'summary': 'Free 3-part webinar on production LLM systems: retrieval, guardrails, and cost.',
                'update_type': 'event',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=5)
            },
            {
                'title': 'System Maintenance Scheduled',
                'content': '''Scheduled maintenance will occur this weekend to improve platform performance and add new features.

Maintenance Window:
• Start: Saturday, 2:00 AM UTC
• End: Saturday, 6:00 AM UTC
• Duration: 4 hours

What's being improved:
• Database optimization for faster course loading
• Enhanced video streaming capabilities
• Improved mobile responsiveness
• New progress tracking features

During maintenance, the platform will be temporarily unavailable. We apologize for any inconvenience and appreciate your patience as we work to improve your learning experience.

All user progress and data will be preserved.''',
                'summary': '4-hour maintenance window this weekend to improve platform performance and add new features.',
                'update_type': 'system',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=1)
            },
            {
                'title': 'Community Challenge: Build a DApp',
                'content': '''Join our community challenge and build a decentralized application (DApp)!

Challenge Details:
• Build a functional DApp using any blockchain platform
• Submit your project by the end of the month
• Winners receive exclusive prizes and recognition

Prizes include:
🥇 1st Place: $1000 in ZION tokens + Featured on our platform
🥈 2nd Place: $500 in ZION tokens + Course vouchers
🥉 3rd Place: $250 in ZION tokens + Premium membership

Judging criteria:
• Innovation and creativity (30%)
• Technical implementation (40%)
• User experience and design (20%)
• Documentation and presentation (10%)

Submit your projects at: academy.zion.community/challenge

Good luck to all participants! We can't wait to see what you build.''',
                'summary': 'Community challenge to build DApps with prizes up to $1000 in ZION tokens.',
                'update_type': 'announcement',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(days=2)
            },
            {
                'title': 'New Learning Path: Web3 Fundamentals',
                'content': '''We've launched a new learning path specifically designed for Web3 beginners!

The Web3 Fundamentals path includes:
1. Introduction to Blockchain Technology
2. Cryptocurrency Basics
3. Smart Contracts 101
4. DeFi Fundamentals
5. NFT Basics and Use Cases
6. Web3 Security Essentials

Each module includes:
• Interactive lessons with real examples
• Hands-on exercises and projects
• Community discussion forums
• Progress tracking and certificates

This path is perfect for:
• Developers new to blockchain
• Business professionals exploring Web3
• Students interested in emerging tech
• Anyone curious about the future of the internet

Start your Web3 journey today and earn your first certificate!''',
                'summary': 'New beginner-friendly learning path covering blockchain basics, DeFi, NFTs, and Web3 security.',
                'update_type': 'course',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=3)
            },
            {
                'title': 'Emergency: Security Update Required',
                'content': '''URGENT: All users must update their passwords immediately.

We've detected a potential security vulnerability and are implementing mandatory password updates for all accounts.

Required Actions:
1. Change your password immediately
2. Enable two-factor authentication (2FA) if not already enabled
3. Review your account activity for any suspicious login attempts

Password Requirements:
• Minimum 12 characters
• Include uppercase and lowercase letters
• Include numbers and special characters
• Avoid common patterns or personal information

If you notice any suspicious activity on your account, please contact our security team immediately at security@zion.academy.

We apologize for the inconvenience and appreciate your prompt action to secure your account.''',
                'summary': 'Mandatory password update required due to security vulnerability. Enable 2FA recommended.',
                'update_type': 'security',
                'priority': 'urgent',
                'created_at': datetime.utcnow() - timedelta(days=4)
            }
        ]
        
        # Additional new updates to enrich content
        more_updates = [
            {
                'title': 'Introducing Mentor Office Hours',
                'content': '''We are launching weekly mentor office hours for enrolled students.

Schedule:
• Wednesdays: 5:00 PM – 7:00 PM UTC
• Saturdays: 3:00 PM – 5:00 PM UTC

Drop in to get help on projects, discuss career paths, and review code with experienced mentors.''',
                'summary': 'Weekly mentor office hours now available to support your learning.',
                'update_type': 'announcement',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(hours=12)
            },
            {
                'title': 'Course Update: AI Fundamentals v2.1',
                'content': '''We refreshed AI Fundamentals with new lessons on:
• Contrastive learning basics
• Modern evaluation techniques
• Efficient fine-tuning with LoRA

All enrolled learners automatically receive the updated materials.''',
                'summary': 'AI Fundamentals updated with contrastive learning, evals, and LoRA.',
                'update_type': 'course',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(days=1, hours=3)
            },
            {
                'title': 'New Feature: Progress Streaks',
                'content': '''Stay motivated with learning streaks! Earn badges for 3, 7, 14, and 30-day streaks.

Keep your streak alive by completing any lesson or quiz each day.''',
                'summary': 'Earn badges by maintaining daily learning streaks.',
                'update_type': 'feature',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=6)
            },
            {
                'title': 'Security Notice: OAuth Provider Rotation',
                'content': '''We are rotating OAuth credentials for third-party providers next week.

Expected impact: brief sign-in interruptions under 5 minutes during the window. No action is required from users.''',
                'summary': 'Upcoming OAuth credential rotation; brief sign-in interruptions possible.',
                'update_type': 'security',
                'priority': 'high',
                'created_at': datetime.utcnow() - timedelta(days=7)
            },
            {
                'title': 'Community Spotlight: Capstone Showcase',
                'content': '''Join our live Capstone Showcase to see standout learner projects across AI and Web3.

Submit your project for consideration by Friday and get feedback from mentors and peers.''',
                'summary': 'Live Capstone Showcase featuring standout projects. Submissions open now.',
                'update_type': 'event',
                'priority': 'normal',
                'created_at': datetime.utcnow() - timedelta(days=9)
            }
        ]
        
        # Create and add additional updates
        for update_data in more_updates:
            update = Update(**update_data)
            db.session.add(update)
        
        # Commit all updates
        db.session.commit()
        print(f"Successfully seeded {len(sample_updates) + len(more_updates)} total sample updates!")
        
        # Print summary
        print("\nAll updates now in database:")
        for update in Update.query.order_by(Update.created_at.desc()).all():
            print(f"• {update.title} ({update.priority} priority, {update.update_type})")

if __name__ == '__main__':
    print("Seeding database with sample updates...")
    seed_updates()
    print("Update seeding completed!")