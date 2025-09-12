from datetime import datetime

from models import db, Category, Course, Lesson


def seed_data():
    # Create categories
    categories = {
        'AI Fundamentals': Category(name='AI Fundamentals'),
        'Product & Startup': Category(name='Product & Startup'),
        'Governance': Category(name='Governance'),
    }

    for name, category in categories.items():
        existing = Category.query.filter_by(name=name).first()
        if not existing:
            db.session.add(category)

    db.session.commit()

    # Courses to seed
    seed_courses = [
        {
            'title': 'Zion Founder Launch Course',
            'description': 'Launch your AI-native product with Zion best practices and templates.',
            'category': 'Product & Startup',
            'is_premium_tier': False,
            'lessons': [
                {'title': 'Welcome & Orientation', 'content_type': 'text', 'content_data': 'Welcome to Zion! Learn how to navigate the academy and set up your workspace.'},
                {'title': 'Idea to MVP in 7 Days', 'content_type': 'text', 'content_data': 'A focused plan to go from concept to working MVP quickly.'},
                {'title': 'Launch Checklist', 'content_type': 'text', 'content_data': 'A comprehensive checklist to prepare for launch.'},
            ],
        },
        {
            'title': 'AI Agents 101',
            'description': 'Build reliable, observable AI agents that actually ship value.',
            'category': 'AI Fundamentals',
            'is_premium_tier': False,
            'lessons': [
                {'title': 'Agent Design Patterns', 'content_type': 'text', 'content_data': 'Overview of planner-executor, toolformer, and retrieval-augmented patterns.'},
                {'title': 'Evaluation & Observability', 'content_type': 'text', 'content_data': 'How to measure and improve agent quality.'},
                {'title': 'Safety & Guardrails', 'content_type': 'text', 'content_data': 'Implement safe tool-use and constraints.'},
            ],
        },
        {
            'title': 'Decentralized Governance Basics',
            'description': 'Understand core mechanics of on-chain governance and token voting.',
            'category': 'Governance',
            'is_premium_tier': False,
            'lessons': [
                {'title': 'Governance Models', 'content_type': 'text', 'content_data': 'Token-weighted, quadratic, delegated voting and tradeoffs.'},
                {'title': 'Proposal Lifecycle', 'content_type': 'text', 'content_data': 'From draft to execution.'},
            ],
        },
    ]

    for course_def in seed_courses:
        category = Category.query.filter_by(name=course_def['category']).first()
        if not category:
            continue

        course = Course.query.filter_by(title=course_def['title']).first()
        if not course:
            course = Course(
                title=course_def['title'],
                description=course_def['description'],
                category_id=category.id,
                is_premium_tier=course_def['is_premium_tier'],
                created_at=datetime.utcnow(),
            )
            db.session.add(course)
            db.session.flush()

            # Add lessons
            for index, lesson_def in enumerate(course_def['lessons'], start=1):
                lesson = Lesson(
                    title=lesson_def['title'],
                    content_type=lesson_def.get('content_type', 'text'),
                    content_data=lesson_def.get('content_data', ''),
                    lesson_order=index,
                    course_id=course.id,
                )
                db.session.add(lesson)

    db.session.commit()
    print('Seeded categories, courses, and lessons.')

