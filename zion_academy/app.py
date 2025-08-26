from flask import Flask, render_template, request, jsonify
import os
import uuid
from datetime import datetime, date
from sqlalchemy import func, desc

# Import db instance from models.py FIRST
from models import db, AnalyticsEvent, FeedbackSubmission, ContentAnalytics
from seed_db import seed_data # Assuming seed_db.py is in the same directory

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
instance_folder = os.path.join(basedir, 'instance')
os.makedirs(instance_folder, exist_ok=True)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(instance_folder, 'academy.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'dev_secret_key' # IMPORTANT: Change this for production!

# Initialize db with the app AFTER app is configured
db.init_app(app)

# Now that db is initialized with app, import all the models that use this db instance
from models import User, Category, Course, Lesson, Quiz, Question, Enrollment, Certificate, LessonCompletion

@app.cli.command('init-db')
def init_db_command():
    """Creates the database tables."""
    with app.app_context(): # Operations on db require app context
        db.create_all()
    print('Initialized the database and created tables.')

@app.route('/')
@app.route('/academy')
@app.route('/learn')
def index():
    return render_template('index.html', title='Welcome to Zion Academy')

@app.route('/academy/founder-course')
@app.route('/learn/launch')
def founder_course():
    """Display the founder onboarding course."""
    with app.app_context():
        course = Course.query.filter_by(title='Zion Founder Launch Course').first()
    if course:
        return render_template('course_detail.html', title=course.title, course=course)
    return render_template('404.html', title='Course Not Found'), 404

@app.route('/courses')
def course_list():
    courses_data = []
    try:
        # Ensure app context for DB operations, especially if called outside a request context sometimes
        with app.app_context():
            courses_data = Course.query.all()
    except Exception as e:
        # This error is common if 'flask init-db' hasn't been run yet
        print(f"Error fetching courses: {e}. Run 'flask init-db' if you haven\'t already.") # Escaped apostrophe
    return render_template('course_list.html', title='Our Courses', courses=courses_data)

@app.cli.command('seed-db')
def seed_db_command():
    """Seeds the database with initial sample data."""
    seed_data()
    # No need to print here, seed_data() already prints messages.
    print('Database seeding process initiated from CLI command.')

@app.route('/course/<int:course_id>')
def course_detail(course_id):
    course = None
    try:
        with app.app_context():
            # Query for the course by ID, and also eagerly load its lessons
            # and category to avoid separate queries in the template.
            course = Course.query.options(db.joinedload(Course.lessons), db.joinedload(Course.category)).get(course_id)
    except Exception as e:
        print(f"Error fetching course {course_id}: {e}")

    if course:
        return render_template('course_detail.html', title=course.title, course=course)
    else:
        # Handle course not found, maybe redirect to course list or show a 404 page
        # For now, redirecting to course list with a flashed message (if flash is set up)
        # or just rendering a simple not found message.
        return render_template('404.html', title="Course Not Found"), 404 # Assuming you have a 404.html


# ----- Progress Tracking Endpoints -----

@app.route('/api/enroll', methods=['POST'])
def api_enroll():
    """Enroll a user in a course if not already enrolled."""
    data = request.get_json() or {}
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    if not user_id or not course_id:
        return jsonify({'error': 'Missing user_id or course_id'}), 400

    with app.app_context():
        enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
        if not enrollment:
            enrollment = Enrollment(user_id=user_id, course_id=course_id, progress=0)
            db.session.add(enrollment)
            db.session.commit()

    return jsonify({'message': 'enrolled'}), 201


@app.route('/api/complete', methods=['POST'])
def api_complete_lesson():
    """Mark a lesson as completed and update progress."""
    data = request.get_json() or {}
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    lesson_id = data.get('lesson_id')
    if not user_id or not course_id or not lesson_id:
        return jsonify({'error': 'Missing identifiers'}), 400

    with app.app_context():
        enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
        if not enrollment:
            return jsonify({'error': 'Enrollment not found'}), 404

        completion = LessonCompletion.query.filter_by(
            enrollment_user_id=user_id,
            enrollment_course_id=course_id,
            lesson_id=lesson_id,
        ).first()
        if not completion:
            completion = LessonCompletion(
                enrollment_user_id=user_id,
                enrollment_course_id=course_id,
                lesson_id=lesson_id,
            )
            db.session.add(completion)

        total_lessons = Lesson.query.filter_by(course_id=course_id).count()
        completed = LessonCompletion.query.filter_by(
            enrollment_user_id=user_id,
            enrollment_course_id=course_id,
        ).count()
        enrollment.progress = int((completed / total_lessons) * 100) if total_lessons else 0

        if enrollment.progress == 100:
            existing = Certificate.query.filter_by(user_id=user_id, course_id=course_id).first()
            if not existing:
                cert = Certificate(
                    user_id=user_id,
                    course_id=course_id,
                    certificate_url=f"/certificates/{user_id}_{course_id}.pdf",
                )
                db.session.add(cert)

        db.session.commit()

    return jsonify({'progress': enrollment.progress})


@app.route('/api/progress/<int:user_id>')
def api_user_progress(user_id):
    """Return progress and achievements for a user."""
    with app.app_context():
        enrollments = Enrollment.query.filter_by(user_id=user_id).all()
        progress_data = []
        for e in enrollments:
            course = Course.query.get(e.course_id)
            progress_data.append({
                'course_id': e.course_id,
                'course_title': course.title if course else '',
                'progress': e.progress,
                'completed': e.progress == 100,
            })

        certificates = Certificate.query.filter_by(user_id=user_id).all()
        achievements = [
            {
                'course_id': c.course_id,
                'certificate_url': c.certificate_url,
            }
            for c in certificates
        ]

    return jsonify({'enrollments': progress_data, 'achievements': achievements})


@app.route('/api/generate-quiz', methods=['POST'])
def api_generate_quiz():
    """Return a simple quiz for a topic."""
    data = request.get_json() or {}
    topic = data.get('topic', 'Zion OS')
    quiz = [
        {
            'question': f'What is the primary goal of {topic}?',
            'options': ['AI, Talent, Trust mission', 'Other'],
        },
        {
            'question': 'Which token powers governance in Zion?',
            'options': ['ZION$', 'BTC'],
        },
    ]
    return jsonify({'quiz': quiz})


@app.route('/api/summarize', methods=['POST'])
def api_summarize():
    """Return a basic summary of provided text."""
    data = request.get_json() or {}
    text = data.get('text', '')
    summary = '.'.join(text.split('.')[:2]).strip()
    return jsonify({'summary': summary})


# ----- Analytics Endpoints -----

@app.route('/api/analytics/track', methods=['POST'])
def api_track_event():
    """Track user analytics events"""
    data = request.get_json() or {}
    
    # Generate session ID if not provided
    session_id = data.get('session_id') or str(uuid.uuid4())
    
    # Create analytics event
    event = AnalyticsEvent(
        user_id=data.get('user_id'),
        session_id=session_id,
        event_type=data.get('event_type'),
        event_data=data.get('event_data'),
        course_id=data.get('course_id'),
        lesson_id=data.get('lesson_id'),
        user_agent=request.headers.get('User-Agent'),
        ip_address=request.remote_addr,
        referrer=request.headers.get('Referer')
    )
    
    with app.app_context():
        db.session.add(event)
        db.session.commit()
    
    return jsonify({
        'success': True,
        'session_id': session_id,
        'event_id': event.id
    })


@app.route('/api/analytics/content/<content_type>/<int:content_id>')
def api_content_analytics(content_type, content_id):
    """Get analytics for specific content"""
    with app.app_context():
        # Get aggregated analytics
        analytics = ContentAnalytics.query.filter_by(
            content_type=content_type,
            content_id=content_id
        ).order_by(desc(ContentAnalytics.date)).limit(30).all()
        
        # Get recent events
        events = AnalyticsEvent.query.filter_by(
            course_id=content_id if content_type == 'course' else None,
            lesson_id=content_id if content_type == 'lesson' else None
        ).order_by(desc(AnalyticsEvent.timestamp)).limit(100).all()
        
        # Calculate current metrics
        current_metrics = {
            'total_views': sum(a.views for a in analytics),
            'total_clicks': sum(a.clicks for a in analytics),
            'avg_completion_rate': sum(a.completion_rate for a in analytics) / len(analytics) if analytics else 0,
            'total_feedback': sum(a.feedback_count for a in analytics)
        }
        
        return jsonify({
            'content_type': content_type,
            'content_id': content_id,
            'current_metrics': current_metrics,
            'daily_analytics': [{
                'date': a.date.isoformat(),
                'views': a.views,
                'clicks': a.clicks,
                'completion_rate': a.completion_rate,
                'time_spent': a.time_spent_seconds
            } for a in analytics],
            'recent_events': [{
                'event_type': e.event_type,
                'timestamp': e.timestamp.isoformat(),
                'user_id': e.user_id,
                'event_data': e.event_data
            } for e in events]
        })


@app.route('/api/analytics/dashboard')
def api_analytics_dashboard():
    """Get overall analytics dashboard data"""
    with app.app_context():
        # Get top performing content
        top_courses = db.session.query(
            Course.id,
            Course.title,
            func.count(AnalyticsEvent.id).label('total_views')
        ).join(AnalyticsEvent, Course.id == AnalyticsEvent.course_id)\
         .filter(AnalyticsEvent.event_type == 'view')\
         .group_by(Course.id)\
         .order_by(desc('total_views'))\
         .limit(10).all()
        
        top_lessons = db.session.query(
            Lesson.id,
            Lesson.title,
            Course.title.label('course_title'),
            func.count(AnalyticsEvent.id).label('total_views')
        ).join(AnalyticsEvent, Lesson.id == AnalyticsEvent.lesson_id)\
         .join(Course, Lesson.course_id == Course.id)\
         .filter(AnalyticsEvent.event_type == 'view')\
         .group_by(Lesson.id)\
         .order_by(desc('total_views'))\
         .limit(10).all()
        
        # Get feedback summary
        feedback_summary = db.session.query(
            FeedbackSubmission.feedback_type,
            func.count(FeedbackSubmission.id).label('count')
        ).group_by(FeedbackSubmission.feedback_type).all()
        
        return jsonify({
            'top_courses': [{
                'id': c.id,
                'title': c.title,
                'views': c.total_views
            } for c in top_courses],
            'top_lessons': [{
                'id': l.id,
                'title': l.title,
                'course_title': l.course_title,
                'views': l.total_views
            } for l in top_lessons],
            'feedback_summary': [{
                'type': f.feedback_type,
                'count': f.count
            } for f in feedback_summary]
        })


# ----- Feedback Endpoints -----

@app.route('/api/feedback/submit', methods=['POST'])
def api_submit_feedback():
    """Submit user feedback"""
    data = request.get_json() or {}
    
    feedback = FeedbackSubmission(
        user_id=data.get('user_id'),
        feedback_type=data.get('feedback_type'),
        content_type=data.get('content_type'),
        content_id=data.get('content_id'),
        title=data.get('title'),
        description=data.get('description'),
        priority=data.get('priority', 'medium')
    )
    
    with app.app_context():
        db.session.add(feedback)
        db.session.commit()
    
    return jsonify({
        'success': True,
        'feedback_id': feedback.id,
        'message': 'Feedback submitted successfully'
    })


@app.route('/api/feedback/list')
def api_feedback_list():
    """Get list of feedback submissions"""
    with app.app_context():
        feedbacks = FeedbackSubmission.query.order_by(desc(FeedbackSubmission.created_at)).all()
        
        return jsonify({
            'feedbacks': [{
                'id': f.id,
                'type': f.feedback_type,
                'content_type': f.content_type,
                'content_id': f.content_id,
                'title': f.title,
                'description': f.description,
                'priority': f.priority,
                'status': f.status,
                'created_at': f.created_at.isoformat(),
                'user_id': f.user_id
            } for f in feedbacks]
        })


@app.route('/api/feedback/<int:feedback_id>', methods=['PUT'])
def api_update_feedback(feedback_id):
    """Update feedback status (admin only)"""
    data = request.get_json() or {}
    
    with app.app_context():
        feedback = FeedbackSubmission.query.get(feedback_id)
        if not feedback:
            return jsonify({'error': 'Feedback not found'}), 404
        
        # Update fields
        if 'status' in data:
            feedback.status = data['status']
        if 'admin_response' in data:
            feedback.admin_response = data['admin_response']
        if 'priority' in data:
            feedback.priority = data['priority']
        
        if data.get('status') == 'resolved':
            feedback.resolved_at = datetime.utcnow()
        
        feedback.updated_at = datetime.utcnow()
        db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Feedback updated successfully'
    })


# ----- Content Performance Tracking -----

@app.route('/api/analytics/update-content-metrics', methods=['POST'])
def api_update_content_metrics():
    """Update aggregated content metrics (called periodically)"""
    data = request.get_json() or {}
    content_type = data.get('content_type')
    content_id = data.get('content_id')
    
    if not content_type or not content_id:
        return jsonify({'error': 'Missing content_type or content_id'}), 400
    
    with app.app_context():
        today = date.today()
        
        # Get or create analytics record for today
        analytics = ContentAnalytics.query.filter_by(
            content_type=content_type,
            content_id=content_id,
            date=today
        ).first()
        
        if not analytics:
            analytics = ContentAnalytics(
                content_type=content_type,
                content_id=content_id,
                date=today
            )
            db.session.add(analytics)
        
        # Calculate metrics from events
        events = AnalyticsEvent.query.filter_by(
            course_id=content_id if content_type == 'course' else None,
            lesson_id=content_id if content_type == 'lesson' else None
        ).filter(
            func.date(AnalyticsEvent.timestamp) == today
        ).all()
        
        # Update metrics
        analytics.views = len([e for e in events if e.event_type == 'view'])
        analytics.clicks = len([e for e in events if e.event_type == 'click'])
        analytics.unique_views = len(set(e.session_id for e in events if e.event_type == 'view'))
        
        # Calculate time spent
        time_events = [e for e in events if e.event_type == 'time_spent' and e.event_data]
        total_time = sum(e.event_data.get('seconds', 0) for e in time_events)
        analytics.time_spent_seconds = total_time
        
        # Calculate completion rate (for lessons)
        if content_type == 'lesson':
            completions = len([e for e in events if e.event_type == 'completion'])
            analytics.completion_rate = (completions / analytics.views * 100) if analytics.views > 0 else 0
        
        # Update feedback count
        feedback_count = FeedbackSubmission.query.filter_by(
            content_type=content_type,
            content_id=content_id
        ).count()
        analytics.feedback_count = feedback_count
        
        db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Content metrics updated successfully'
    })


# ----- Admin Dashboard -----

@app.route('/admin/dashboard')
def admin_dashboard():
    """Admin dashboard for analytics and feedback management"""
    return render_template('admin_dashboard.html', title='Admin Dashboard')


@app.route('/user/<int:user_id>')
def user_profile(user_id):
    """Display user profile with progress and achievements."""
    user = None
    with app.app_context():
        user = User.query.get(user_id)
        enrollments = Enrollment.query.filter_by(user_id=user_id).all()
        courses = {e.course_id: Course.query.get(e.course_id) for e in enrollments}
        certificates = Certificate.query.filter_by(user_id=user_id).all()

    return render_template(
        'user_profile.html',
        title=f'{user.username} Profile' if user else 'User Profile',
        user=user,
        enrollments=enrollments,
        courses=courses,
        certificates=certificates,
    )

# ----- New Micro SAAS Services Endpoints -----

@app.route('/api/services/ai-consulting', methods=['POST'])
def api_ai_consulting():
    """AI Strategy Consulting Service"""
    data = request.get_json() or {}
    
    # AI consulting service logic
    service_data = {
        'service_name': 'AI Strategy Consulting',
        'description': 'Comprehensive AI strategy development and implementation consulting',
        'features': [
            'AI readiness assessment',
            'Strategy roadmap development',
            'Technology stack recommendations',
            'Implementation planning',
            'ROI analysis and forecasting'
        ],
        'pricing': {
            'basic': 2500,
            'professional': 5000,
            'enterprise': 10000
        },
        'delivery_time': '2-4 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-consulting'
    }
    
    return jsonify(service_data)

@app.route('/api/services/quantum-computing', methods=['POST'])
def api_quantum_computing():
    """Quantum Computing Solutions Service"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Quantum Computing Solutions',
        'description': 'Advanced quantum computing implementation and optimization',
        'features': [
            'Quantum algorithm development',
            'Quantum software optimization',
            'Quantum hardware integration',
            'Performance benchmarking',
            'Quantum security implementation'
        ],
        'pricing': {
            'basic': 5000,
            'professional': 15000,
            'enterprise': 50000
        },
        'delivery_time': '4-8 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/quantum-computing'
    }
    
    return jsonify(service_data)

@app.route('/api/services/cybersecurity', methods=['POST'])
def api_cybersecurity():
    """Advanced Cybersecurity Services"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Advanced Cybersecurity Solutions',
        'description': 'Comprehensive cybersecurity assessment and implementation',
        'features': [
            'Security audit and assessment',
            'Threat detection systems',
            'Incident response planning',
            'Compliance management',
            'Security training programs'
        ],
        'pricing': {
            'basic': 3000,
            'professional': 8000,
            'enterprise': 20000
        },
        'delivery_time': '3-6 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/cybersecurity'
    }
    
    return jsonify(service_data)

@app.route('/api/services/cloud-migration', methods=['POST'])
def api_cloud_migration():
    """Cloud Migration and Optimization Service"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Cloud Migration & Optimization',
        'description': 'Seamless cloud migration with optimization and cost management',
        'features': [
            'Migration strategy planning',
            'Infrastructure assessment',
            'Data migration services',
            'Performance optimization',
            'Cost optimization analysis'
        ],
        'pricing': {
            'basic': 4000,
            'professional': 12000,
            'enterprise': 30000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/cloud-migration'
    }
    
    return jsonify(service_data)

@app.route('/api/services/data-analytics', methods=['POST'])
def api_data_analytics():
    """Advanced Data Analytics Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Advanced Data Analytics Platform',
        'description': 'Comprehensive data analytics and business intelligence solutions',
        'features': [
            'Data warehouse design',
            'ETL pipeline development',
            'Business intelligence dashboards',
            'Predictive analytics models',
            'Real-time data processing'
        ],
        'pricing': {
            'basic': 2000,
            'professional': 6000,
            'enterprise': 15000
        },
        'delivery_time': '4-8 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/data-analytics'
    }
    
    return jsonify(service_data)

@app.route('/api/services/automation-platform', methods=['POST'])
def api_automation_platform():
    """Business Process Automation Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Business Process Automation Platform',
        'description': 'End-to-end business process automation and workflow optimization',
        'features': [
            'Process mapping and analysis',
            'Workflow automation design',
            'Integration with existing systems',
            'Performance monitoring',
            'Continuous optimization'
        ],
        'pricing': {
            'basic': 1500,
            'professional': 4000,
            'enterprise': 10000
        },
        'delivery_time': '3-6 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/automation-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/blockchain-solutions', methods=['POST'])
def api_blockchain_solutions():
    """Blockchain and Web3 Solutions"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Blockchain & Web3 Solutions',
        'description': 'Comprehensive blockchain development and Web3 integration',
        'features': [
            'Smart contract development',
            'DeFi platform creation',
            'NFT marketplace development',
            'Blockchain integration',
            'Web3 strategy consulting'
        ],
        'pricing': {
            'basic': 8000,
            'professional': 25000,
            'enterprise': 75000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/blockchain-solutions'
    }
    
    return jsonify(service_data)

@app.route('/api/services/iot-platform', methods=['POST'])
def api_iot_platform():
    """Internet of Things Platform Development"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'IoT Platform Development',
        'description': 'Complete IoT platform development and device management',
        'features': [
            'IoT device integration',
            'Data collection and processing',
            'Real-time monitoring dashboards',
            'Predictive maintenance',
            'Scalable infrastructure'
        ],
        'pricing': {
            'basic': 6000,
            'professional': 18000,
            'enterprise': 45000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/iot-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-content-generation', methods=['POST'])
def api_ai_content_generation():
    """AI-Powered Content Generation Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Content Generation Platform',
        'description': 'Advanced AI-powered content creation and management system',
        'features': [
            'Multi-format content generation',
            'Brand voice customization',
            'SEO optimization',
            'Content scheduling',
            'Performance analytics'
        ],
        'pricing': {
            'basic': 1000,
            'professional': 3000,
            'enterprise': 8000
        },
        'delivery_time': '2-4 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-content-generation'
    }
    
    return jsonify(service_data)

@app.route('/api/services/customer-intelligence', methods=['POST'])
def api_customer_intelligence():
    """Customer Intelligence and Analytics Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Customer Intelligence Platform',
        'description': 'Comprehensive customer behavior analysis and prediction',
        'features': [
            'Customer journey mapping',
            'Behavioral analytics',
            'Predictive modeling',
            'Personalization engine',
            'ROI optimization'
        ],
        'pricing': {
            'basic': 2500,
            'professional': 7000,
            'enterprise': 18000
        },
        'delivery_time': '4-8 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/customer-intelligence'
    }
    
    return jsonify(service_data)

@app.route('/api/services/healthcare-ai', methods=['POST'])
def api_healthcare_ai():
    """Healthcare AI Solutions Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Healthcare AI Solutions',
        'description': 'AI-powered healthcare diagnostics and patient care optimization',
        'features': [
            'Medical image analysis',
            'Diagnostic assistance',
            'Patient care optimization',
            'Drug discovery support',
            'Compliance management'
        ],
        'pricing': {
            'basic': 15000,
            'professional': 45000,
            'enterprise': 120000
        },
        'delivery_time': '12-24 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/healthcare-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/fintech-solutions', methods=['POST'])
def api_fintech_solutions():
    """FinTech Innovation Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'FinTech Innovation Platform',
        'description': 'Advanced financial technology solutions and digital banking',
        'features': [
            'Digital banking platform',
            'Payment processing systems',
            'Risk assessment AI',
            'Compliance automation',
            'Financial analytics'
        ],
        'pricing': {
            'basic': 20000,
            'professional': 60000,
            'enterprise': 150000
        },
        'delivery_time': '16-32 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/fintech-solutions'
    }
    
    return jsonify(service_data)

@app.route('/api/services/supply-chain-ai', methods=['POST'])
def api_supply_chain_ai():
    """AI-Powered Supply Chain Optimization"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Supply Chain AI Optimization',
        'description': 'Intelligent supply chain management and optimization',
        'features': [
            'Demand forecasting',
            'Inventory optimization',
            'Route optimization',
            'Supplier management',
            'Risk assessment'
        ],
        'pricing': {
            'basic': 8000,
            'professional': 25000,
            'enterprise': 75000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/supply-chain-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/energy-optimization', methods=['POST'])
def api_energy_optimization():
    """AI Energy Management and Optimization"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Energy Management Platform',
        'description': 'Intelligent energy consumption optimization and management',
        'features': [
            'Energy consumption analysis',
            'Predictive maintenance',
            'Renewable energy integration',
            'Cost optimization',
            'Sustainability reporting'
        ],
        'pricing': {
            'basic': 12000,
            'professional': 35000,
            'enterprise': 90000
        },
        'delivery_time': '10-20 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/energy-optimization'
    }
    
    return jsonify(service_data)

@app.route('/api/services/retail-ai', methods=['POST'])
def api_retail_ai():
    """Retail AI and Customer Experience Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Retail AI Platform',
        'description': 'AI-powered retail optimization and customer experience',
        'features': [
            'Inventory management AI',
            'Customer behavior analysis',
            'Personalized recommendations',
            'Price optimization',
            'Store layout optimization'
        ],
        'pricing': {
            'basic': 5000,
            'professional': 15000,
            'enterprise': 45000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/retail-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/legal-ai', methods=['POST'])
def api_legal_ai():
    """Legal AI and Document Analysis Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Legal AI Platform',
        'description': 'AI-powered legal document analysis and contract review',
        'features': [
            'Document analysis AI',
            'Contract review automation',
            'Legal research assistance',
            'Compliance checking',
            'Risk assessment'
        ],
        'pricing': {
            'basic': 8000,
            'professional': 25000,
            'enterprise': 75000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/legal-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/education-ai', methods=['POST'])
def api_education_ai():
    """AI-Powered Education and Learning Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Education Platform',
        'description': 'Personalized learning and educational AI solutions',
        'features': [
            'Adaptive learning algorithms',
            'Student performance tracking',
            'Content personalization',
            'Assessment automation',
            'Learning analytics'
        ],
        'pricing': {
            'basic': 3000,
            'professional': 9000,
            'enterprise': 25000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/education-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/real-estate-ai', methods=['POST'])
def api_real_estate_ai():
    """Real Estate AI and Market Analysis Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Real Estate AI Platform',
        'description': 'AI-powered real estate market analysis and investment insights',
        'features': [
            'Market trend analysis',
            'Property valuation AI',
            'Investment opportunity identification',
            'Risk assessment',
            'Portfolio optimization'
        ],
        'pricing': {
            'basic': 6000,
            'professional': 18000,
            'enterprise': 50000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/real-estate-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/transportation-ai', methods=['POST'])
def api_transportation_ai():
    """AI Transportation and Logistics Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Transportation AI Platform',
        'description': 'Intelligent transportation and logistics optimization',
        'features': [
            'Route optimization AI',
            'Fleet management',
            'Predictive maintenance',
            'Traffic analysis',
            'Cost optimization'
        ],
        'pricing': {
            'basic': 10000,
            'professional': 30000,
            'enterprise': 80000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/transportation-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/agriculture-ai', methods=['POST'])
def api_agriculture_ai():
    """AI-Powered Agriculture and Precision Farming"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Agriculture AI Platform',
        'description': 'Precision farming and agricultural optimization',
        'features': [
            'Crop monitoring AI',
            'Soil analysis',
            'Weather prediction',
            'Yield optimization',
            'Resource management'
        ],
        'pricing': {
            'basic': 8000,
            'professional': 25000,
            'enterprise': 70000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/agriculture-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/construction-ai', methods=['POST'])
def api_construction_ai():
    """AI Construction and Project Management Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Construction AI Platform',
        'description': 'AI-powered construction project management and optimization',
        'features': [
            'Project planning AI',
            'Resource optimization',
            'Safety monitoring',
            'Quality control',
            'Cost management'
        ],
        'pricing': {
            'basic': 12000,
            'professional': 35000,
            'enterprise': 90000
        },
        'delivery_time': '10-20 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/construction-ai'
    }
    
    return jsonify(service_data)

@app.route('/api/services/entertainment-ai', methods=['POST'])
def api_entertainment_ai():
    """AI Entertainment and Media Platform"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Entertainment AI Platform',
        'description': 'AI-powered content creation and entertainment optimization',
        'features': [
            'Content generation AI',
            'Audience analysis',
            'Trend prediction',
            'Personalization engine',
            'Performance analytics'
        ],
        'pricing': {
            'basic': 5000,
            'professional': 15000,
            'enterprise': 45000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/entertainment-ai'
    }
    
    return jsonify(service_data)

# ----- NEW INNOVATIVE MICRO SAAS SERVICES -----

@app.route('/api/services/quantum-ai-fusion', methods=['POST'])
def api_quantum_ai_fusion():
    """Quantum AI Fusion Platform - Revolutionary AI-Quantum Computing Integration"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Quantum AI Fusion Platform',
        'description': 'Revolutionary platform combining quantum computing with artificial intelligence for unprecedented computational power',
        'features': [
            'Quantum neural networks',
            'Quantum machine learning algorithms',
            'Hybrid classical-quantum processing',
            'Quantum-enhanced optimization',
            'Real-time quantum simulation'
        ],
        'pricing': {
            'basic': 25000,
            'professional': 75000,
            'enterprise': 200000
        },
        'delivery_time': '16-32 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/quantum-ai-fusion'
    }
    
    return jsonify(service_data)

@app.route('/api/services/neuromorphic-computing', methods=['POST'])
def api_neuromorphic_computing():
    """Neuromorphic Computing Platform - Brain-Inspired AI Architecture"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Neuromorphic Computing Platform',
        'description': 'Brain-inspired computing architecture that mimics neural networks for ultra-efficient AI processing',
        'features': [
            'Spiking neural networks',
            'Event-driven processing',
            'Low-power AI inference',
            'Real-time learning',
            'Neuromorphic hardware integration'
        ],
        'pricing': {
            'basic': 35000,
            'professional': 100000,
            'enterprise': 300000
        },
        'delivery_time': '20-40 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/neuromorphic-computing'
    }
    
    return jsonify(service_data)

@app.route('/api/services/edge-ai-orchestration', methods=['POST'])
def api_edge_ai_orchestration():
    """Edge AI Orchestration Platform - Distributed Intelligence Management"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Edge AI Orchestration Platform',
        'description': 'Intelligent orchestration of AI workloads across distributed edge computing infrastructure',
        'features': [
            'Distributed AI deployment',
            'Edge device management',
            'Load balancing optimization',
            'Real-time model updates',
            'Edge-cloud synchronization'
        ],
        'pricing': {
            'basic': 15000,
            'professional': 45000,
            'enterprise': 120000
        },
        'delivery_time': '12-24 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/edge-ai-orchestration'
    }
    
    return jsonify(service_data)

@app.route('/api/services/federated-learning-platform', methods=['POST'])
def api_federated_learning_platform():
    """Federated Learning Platform - Privacy-Preserving AI Training"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'Federated Learning Platform',
        'description': 'Privacy-preserving AI training across distributed data sources without data sharing',
        'features': [
            'Distributed model training',
            'Privacy-preserving algorithms',
            'Secure aggregation protocols',
            'Model versioning',
            'Performance monitoring'
        ],
        'pricing': {
            'basic': 20000,
            'professional': 60000,
            'enterprise': 150000
        },
        'delivery_time': '16-28 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/federated-learning-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-ethics-governance', methods=['POST'])
def api_ai_ethics_governance():
    """AI Ethics and Governance Platform - Responsible AI Implementation"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Ethics & Governance Platform',
        'description': 'Comprehensive framework for ethical AI development, deployment, and governance',
        'features': [
            'Bias detection and mitigation',
            'Explainable AI frameworks',
            'Ethical guidelines enforcement',
            'Compliance monitoring',
            'Stakeholder transparency'
        ],
        'pricing': {
            'basic': 18000,
            'professional': 55000,
            'enterprise': 140000
        },
        'delivery_time': '12-20 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-ethics-governance'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-marketplace-platform', methods=['POST'])
def api_ai_marketplace_platform():
    """AI Marketplace Platform - AI Model and Service Exchange"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Marketplace Platform',
        'description': 'Comprehensive marketplace for AI models, services, and data exchange',
        'features': [
            'AI model marketplace',
            'Service discovery engine',
            'Quality assessment tools',
            'Revenue sharing system',
            'Community collaboration'
        ],
        'pricing': {
            'basic': 12000,
            'professional': 35000,
            'enterprise': 90000
        },
        'delivery_time': '10-18 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-marketplace-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-automation-factory', methods=['POST'])
def api_ai_automation_factory():
    """AI Automation Factory - Intelligent Process Automation at Scale"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Automation Factory',
        'description': 'Scalable platform for building, deploying, and managing intelligent automation workflows',
        'features': [
            'Visual workflow designer',
            'AI-powered decision engines',
            'Integration connectors',
            'Performance analytics',
            'Scalable deployment'
        ],
        'pricing': {
            'basic': 8000,
            'professional': 25000,
            'enterprise': 75000
        },
        'delivery_time': '8-16 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-automation-factory'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-research-platform', methods=['POST'])
def api_ai_research_platform():
    """AI Research Platform - Collaborative Research and Development"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Research Platform',
        'description': 'Collaborative platform for AI research, experimentation, and knowledge sharing',
        'features': [
            'Research collaboration tools',
            'Experiment tracking',
            'Knowledge base management',
            'Publication workflows',
            'Research analytics'
        ],
        'pricing': {
            'basic': 15000,
            'professional': 45000,
            'enterprise': 120000
        },
        'delivery_time': '12-20 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-research-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-talent-platform', methods=['POST'])
def api_ai_talent_platform():
    """AI Talent Platform - AI Skills Development and Talent Management"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Talent Platform',
        'description': 'Comprehensive platform for AI skills development, talent acquisition, and career advancement',
        'features': [
            'Skills assessment tools',
            'Learning path customization',
            'Talent matching algorithms',
            'Career development tracking',
            'Industry networking'
        ],
        'pricing': {
            'basic': 5000,
            'professional': 15000,
            'enterprise': 45000
        },
        'delivery_time': '6-12 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-talent-platform'
    }
    
    return jsonify(service_data)

@app.route('/api/services/ai-innovation-hub', methods=['POST'])
def api_ai_innovation_hub():
    """AI Innovation Hub - Startup Incubation and Innovation Management"""
    data = request.get_json() or {}
    
    service_data = {
        'service_name': 'AI Innovation Hub',
        'description': 'Comprehensive hub for AI startup incubation, innovation management, and ecosystem development',
        'features': [
            'Startup incubation programs',
            'Innovation challenge management',
            'Resource allocation tools',
            'Progress tracking',
            'Ecosystem analytics'
        ],
        'pricing': {
            'basic': 25000,
            'professional': 75000,
            'enterprise': 200000
        },
        'delivery_time': '16-32 weeks',
        'contact': 'kleber@ziontechgroup.com',
        'phone': '+1 302 464 0950',
        'website': 'https://ziontechgroup.com/services/ai-innovation-hub'
    }
    
    return jsonify(service_data)

@app.route('/api/services/services-directory', methods=['GET'])
def api_services_directory():
    """Get comprehensive services directory"""
    
    services_directory = {
        'ai_services': [
            {
                'name': 'AI Strategy Consulting',
                'endpoint': '/api/services/ai-consulting',
                'category': 'AI & Machine Learning',
                'starting_price': 2500,
                'description': 'Comprehensive AI strategy development and implementation consulting'
            },
            {
                'name': 'AI Content Generation Platform',
                'endpoint': '/api/services/ai-content-generation',
                'category': 'AI & Machine Learning',
                'starting_price': 1000,
                'description': 'Advanced AI-powered content creation and management system'
            },
            {
                'name': 'Customer Intelligence Platform',
                'endpoint': '/api/services/customer-intelligence',
                'category': 'AI & Machine Learning',
                'starting_price': 2500,
                'description': 'Comprehensive customer behavior analysis and prediction'
            },
            {
                'name': 'Quantum AI Fusion Platform',
                'endpoint': '/api/services/quantum-ai-fusion',
                'category': 'AI & Machine Learning',
                'starting_price': 25000,
                'description': 'Revolutionary platform combining quantum computing with artificial intelligence'
            },
            {
                'name': 'Neuromorphic Computing Platform',
                'endpoint': '/api/services/neuromorphic-computing',
                'category': 'AI & Machine Learning',
                'starting_price': 35000,
                'description': 'Brain-inspired computing architecture for ultra-efficient AI processing'
            },
            {
                'name': 'Edge AI Orchestration Platform',
                'endpoint': '/api/services/edge-ai-orchestration',
                'category': 'AI & Machine Learning',
                'starting_price': 15000,
                'description': 'Intelligent orchestration of AI workloads across distributed edge computing'
            },
            {
                'name': 'Federated Learning Platform',
                'endpoint': '/api/services/federated-learning-platform',
                'category': 'AI & Machine Learning',
                'starting_price': 20000,
                'description': 'Privacy-preserving AI training across distributed data sources'
            },
            {
                'name': 'AI Ethics & Governance Platform',
                'endpoint': '/api/services/ai-ethics-governance',
                'category': 'AI & Machine Learning',
                'starting_price': 18000,
                'description': 'Comprehensive framework for ethical AI development and governance'
            },
            {
                'name': 'AI Marketplace Platform',
                'endpoint': '/api/services/ai-marketplace-platform',
                'category': 'AI & Machine Learning',
                'starting_price': 12000,
                'description': 'Marketplace for AI models, services, and data exchange'
            },
            {
                'name': 'AI Automation Factory',
                'endpoint': '/api/services/ai-automation-factory',
                'category': 'AI & Machine Learning',
                'starting_price': 8000,
                'description': 'Scalable platform for intelligent automation workflows'
            },
            {
                'name': 'AI Research Platform',
                'endpoint': '/api/services/ai-research-platform',
                'category': 'AI & Machine Learning',
                'starting_price': 15000,
                'description': 'Collaborative platform for AI research and experimentation'
            },
            {
                'name': 'AI Talent Platform',
                'endpoint': '/api/services/ai-talent-platform',
                'category': 'AI & Machine Learning',
                'starting_price': 5000,
                'description': 'AI skills development and talent management platform'
            },
            {
                'name': 'AI Innovation Hub',
                'endpoint': '/api/services/ai-innovation-hub',
                'category': 'AI & Machine Learning',
                'starting_price': 25000,
                'description': 'AI startup incubation and innovation management hub'
            }
        ],
        'quantum_services': [
            {
                'name': 'Quantum Computing Solutions',
                'endpoint': '/api/services/quantum-computing',
                'category': 'Quantum & Emerging Tech',
                'starting_price': 5000,
                'description': 'Advanced quantum computing implementation and optimization'
            }
        ],
        'it_services': [
            {
                'name': 'Advanced Cybersecurity Solutions',
                'endpoint': '/api/services/cybersecurity',
                'category': 'IT & Infrastructure',
                'starting_price': 3000,
                'description': 'Comprehensive cybersecurity assessment and implementation'
            },
            {
                'name': 'Cloud Migration & Optimization',
                'endpoint': '/api/services/cloud-migration',
                'category': 'IT & Infrastructure',
                'starting_price': 4000,
                'description': 'Seamless cloud migration with optimization and cost management'
            }
        ],
        'data_services': [
            {
                'name': 'Advanced Data Analytics Platform',
                'endpoint': '/api/services/data-analytics',
                'category': 'Data & Analytics',
                'starting_price': 2000,
                'description': 'Comprehensive data analytics and business intelligence solutions'
            }
        ],
        'automation_services': [
            {
                'name': 'Business Process Automation Platform',
                'endpoint': '/api/services/automation-platform',
                'category': 'Automation',
                'starting_price': 1500,
                'description': 'End-to-end business process automation and workflow optimization'
            }
        ],
        'emerging_tech': [
            {
                'name': 'Blockchain & Web3 Solutions',
                'endpoint': '/api/services/blockchain-solutions',
                'category': 'Quantum & Emerging Tech',
                'starting_price': 8000,
                'description': 'Comprehensive blockchain development and Web3 integration'
            },
            {
                'name': 'IoT Platform Development',
                'endpoint': '/api/services/iot-platform',
                'category': 'Quantum & Emerging Tech',
                'starting_price': 6000,
                'description': 'Complete IoT platform development and device management'
            }
        ],
        'industry_solutions': [
            {
                'name': 'Healthcare AI Solutions',
                'endpoint': '/api/services/healthcare-ai',
                'category': 'Industry Solutions',
                'starting_price': 15000,
                'description': 'AI-powered healthcare diagnostics and patient care optimization'
            },
            {
                'name': 'FinTech Innovation Platform',
                'endpoint': '/api/services/fintech-solutions',
                'category': 'Industry Solutions',
                'starting_price': 20000,
                'description': 'Advanced financial technology solutions and digital banking'
            },
            {
                'name': 'Supply Chain AI Optimization',
                'endpoint': '/api/services/supply-chain-ai',
                'category': 'Industry Solutions',
                'starting_price': 8000,
                'description': 'Intelligent supply chain management and optimization'
            },
            {
                'name': 'AI Energy Management Platform',
                'endpoint': '/api/services/energy-optimization',
                'category': 'Industry Solutions',
                'starting_price': 12000,
                'description': 'Intelligent energy consumption optimization and management'
            },
            {
                'name': 'Retail AI Platform',
                'endpoint': '/api/services/retail-ai',
                'category': 'Industry Solutions',
                'starting_price': 5000,
                'description': 'AI-powered retail optimization and customer experience'
            },
            {
                'name': 'Legal AI Platform',
                'endpoint': '/api/services/legal-ai',
                'category': 'Industry Solutions',
                'starting_price': 8000,
                'description': 'AI-powered legal document analysis and contract review'
            },
            {
                'name': 'AI Education Platform',
                'endpoint': '/api/services/education-ai',
                'category': 'Industry Solutions',
                'starting_price': 3000,
                'description': 'Personalized learning and educational AI solutions'
            },
            {
                'name': 'Real Estate AI Platform',
                'endpoint': '/api/services/real-estate-ai',
                'category': 'Industry Solutions',
                'starting_price': 6000,
                'description': 'AI-powered real estate market analysis and investment insights'
            },
            {
                'name': 'Transportation AI Platform',
                'endpoint': '/api/services/transportation-ai',
                'category': 'Industry Solutions',
                'starting_price': 10000,
                'description': 'Intelligent transportation and logistics optimization'
            },
            {
                'name': 'Agriculture AI Platform',
                'endpoint': '/api/services/agriculture-ai',
                'category': 'Industry Solutions',
                'starting_price': 8000,
                'description': 'Precision farming and agricultural optimization'
            },
            {
                'name': 'Construction AI Platform',
                'endpoint': '/api/services/construction-ai',
                'category': 'Industry Solutions',
                'starting_price': 12000,
                'description': 'AI-powered construction project management and optimization'
            },
            {
                'name': 'Entertainment AI Platform',
                'endpoint': '/api/services/entertainment-ai',
                'category': 'Industry Solutions',
                'starting_price': 5000,
                'description': 'AI-powered content creation and entertainment optimization'
            }
        ],
        'contact_info': {
            'phone': '+1 302 464 0950',
            'email': 'kleber@ziontechgroup.com',
            'address': '364 E Main St STE 1008 Middletown DE 19709',
            'website': 'https://ziontechgroup.com'
        },
        'total_services': 35,
        'categories': [
            'AI & Machine Learning',
            'Quantum & Emerging Tech',
            'IT & Infrastructure',
            'Data & Analytics',
            'Automation',
            'Industry Solutions'
        ]
    }
    
    return jsonify(services_directory)

if __name__ == '__main__':
    app.run(debug=True)
