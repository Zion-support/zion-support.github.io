const Tutorials = () => {
    const tutorialCategories = [
        {
            title: "Beginner",
            description: "Perfect for those new to AI and technology",
            color: "from-green-500 to-emerald-500",
            count: "12"
        },
        {
            title: "Intermediate",
            description: "For users with some experience",
            color: "from-yellow-500 to-orange-500",
            count: "18"
        },
        {
            title: "Advanced",
            description: "Complex topics for experienced users",
            color: "from-red-500 to-pink-500",
            count: "8"
        },
        {
            title: "Expert",
            description: "Cutting-edge research and techniques",
            color: "from-purple-500 to-indigo-500",
            count: "5"
        }
    ];
    const featuredTutorials = [
        {
            title: "Building Your First AI Chatbot",
            description: "Learn to create a conversational AI chatbot using our platform. This comprehensive tutorial covers everything from data preparation to deployment.",
            category: "Beginner",
            duration: "45 min",
            instructor: "Dr. Sarah Chen",
            rating: 4.8,
            students: "2.3k",
            thumbnail: "/images/tutorials/ai-chatbot.jpg"
        },
        {
            title: "Quantum Neural Network Implementation",
            description: "Dive deep into quantum computing and implement neural networks that leverage quantum properties for enhanced performance.",
            category: "Advanced",
            duration: "90 min",
            instructor: "Michael Rodriguez",
            rating: 4.9,
            students: "856",
            thumbnail: "/images/tutorials/quantum-neural.jpg"
        },
        {
            title: "Cybersecurity Best Practices",
            description: "Master essential cybersecurity concepts and implement robust security measures to protect your applications and data.",
            category: "Intermediate",
            duration: "60 min",
            instructor: "James Wilson",
            rating: 4.7,
            students: "1.5k",
            thumbnail: "/images/tutorials/cybersecurity.jpg"
        },
        {
            title: "AI Model Optimization",
            description: "Learn advanced techniques to optimize your AI models for better performance, faster inference, and reduced resource consumption.",
            category: "Expert",
            duration: "75 min",
            instructor: "Dr. Emily Watson",
            rating: 4.6,
            students: "623",
            thumbnail: "/images/tutorials/model-optimization.jpg"
        }
    ];
    const recentTutorials = [
        {
            title: "Data Pipeline Automation",
            category: "Intermediate",
            duration: "40 min",
            instructor: "David Kim",
            rating: 4.5,
            students: "432"
        },
        {
            title: "Cloud Infrastructure Setup",
            category: "Beginner",
            duration: "35 min",
            instructor: "Lisa Thompson",
            rating: 4.4,
            students: "789"
        },
        {
            title: "API Integration Patterns",
            category: "Intermediate",
            duration: "50 min",
            instructor: "Dr. Sarah Chen",
            rating: 4.6,
            students: "567"
        },
        {
            title: "Machine Learning Model Deployment",
            category: "Advanced",
            duration: "65 min",
            instructor: "Michael Rodriguez",
            rating: 4.7,
            students: "345"
        }
    ];
    const learningPaths = [
        {
            title: "AI Developer Path",
            description: "Complete path from beginner to AI expert",
            courses: 8,
            duration: "12 weeks",
            level: "Beginner to Expert"
        },
        {
            title: "Cybersecurity Specialist",
            description: "Master security and compliance",
            courses: 6,
            duration: "8 weeks",
            level: "Intermediate to Expert"
        },
        {
            title: "Quantum Computing Engineer",
            description: "Learn quantum algorithms and applications",
            courses: 5,
            duration: "10 weeks",
            level: "Advanced to Expert"
        }
    ];
};
export {};
