import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {allEnhancedServices} from "../data/enhanced-2025-comprehensive-services";
const ComprehensiveServicesOverview2025 = (props: any) => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        'all',
        'AI & Business Intelligence',
        'Cybersecurity & Quantum Computing',
        'DevOps & Infrastructure',
        'Blockchain & Supply Chain',
        'Healthcare & AI',
        'Quantum Computing & AI',
        'FinTech & AI',
        'IoT & Edge Computing',
        'Legal Tech & AI',
        'Marketing & AI',
        'Energy & Sustainability',
        'Logistics & Transportation'
    ];
    const filteredServices = allEnhancedServices.filter(service => selectedCategory === 'all' || service.category === selectedCategory);
    const getCategoryIcon = (props: any) => {
        const icons = {
  'AI & Business Intelligence': '🧠',
            'Cybersecurity & Quantum Computing': '🔒',
            'DevOps & Infrastructure': '⚙️',
            'Blockchain & Supply Chain': '⛓️',
            'Healthcare & AI': '🏥',
            'Quantum Computing & AI': '🔮',
            'FinTech & AI': '💰',
            'IoT & Edge Computing': '🌐',
            'Legal Tech & AI': '⚖️',
            'Marketing & AI': '📢',
            'Energy & Sustainability': '⚡',


export default ComprehensiveServicesOverview2025;