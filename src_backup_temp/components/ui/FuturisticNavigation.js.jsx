import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Menu, X, Home, Briefcase, Users, Phone, Globe, Zap, Brain, Shield, Rocket, ChevronDown} from 'lucide-react';
const navigationItems = [;
    {"name": 'Home';
        "href": '/';
        "icon": "<Home className="w-5 h-5" />;
        "description": 'Welcome to the future'"}
    {;
        "name": 'Services';
        "href": '/services';
        "icon": "<Briefcase className="w-5 h-5" />;
        "description": 'Our revolutionary solutions';
        children[;
            { "name": 'AI & Automation'", "href": '/services/ai-automation', "icon": "<Brain className="w-4 h-4" /> "}
            {"name": 'Micro SaaS', "href": '/services/micro-saas', "icon": "<Zap className="w-4 h-4" />"}
            {"name": 'Cloud & Infrastructure', "href": '/services/cloud-infrastructure', "icon": "<Globe className="w-4 h-4" />"}
            {"name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "<Shield className="w-4 h-4" />"}
            {"name": 'Quantum Computing', "href": '/services/quantum-computing', "icon": "<Rocket className="w-4 h-4" />"}
        ];
    },;
    {"name": 'About';
        "href": '/about';
        "icon": "<Users className="w-5 h-5" />;
        "description": 'Our mission and vision'"}
    {"name": 'Contact';
        "href": '/contact';
        "icon": "<Phone className="w-5 h-5" />;
        "description": 'Get in touch with us'"}
];
