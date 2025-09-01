import React, { useState } from 'react';
import { comprehensiveMicroSaasServices2025 } from "../../data / 2025 - comprehensive - micro - saas - services";
import { emergingTechInnovationServices2025 } from "../../data / 2025 - emerging - tech - innovations";
import { enterpriseITInnovationServices2025 } from "../../data / 2025 - enterprise - it - innovations";
import { expandedInnovativeServices2025 } from "../../data / 2025 - expanded - innovative - services";
import { innovativeITAIServices2025 } from "../../data / 2025 - innovative - it - ai - services";
import { motion } from 'framer - motion';


const InnovativeServicesOverview = () => {
    const [selectedService, setSelectedService] = useState (null) ;
    const [selectedCategory, setSelectedCategory] = useState ('all') ;
    const allServices = [
        ...comprehensiveMicroSaasServices2025,
        ...innovativeITAIServices2025,
        ...expandedInnovativeServices2025,
        ...emergingTechInnovationServices2025,
        ...enterpriseITInnovationServices2025
    ];
    const categories = [
        { id: 'all', name: 'All Services', count: allServices.length },
        { id: 'ai - services', name: 'AI & Machine Learning', count: allServices.filter (s => s.category.includes ('AI') || s.category.includes ('Machine Learning') ) .length },
        { id: 'quantum - computing', name: 'Quantum Computing', count: allServices.filter (s => s.category.includes ('Quantum') ) .length },
        { id: 'blockchain', name: 'Blockchain & Web3', count: allServices.filter (s => s.category.includes ('Blockchain') ) .length },
        { id: 'enterprise - it', name: 'Enterprise IT', count: allServices.filter (s => s.category.includes ('Enterprise') ) .length },
        { id: 'emerging - tech', name: 'Emerging Technologies', count: allServices.filter (s => s.category.includes ('Space') || s.category.includes ('Robotics') || s.category.includes ('Metaverse') ) .length },
        { id: 'cybersecurity', name: 'Cybersecurity', count: allServices.filter (s => s.category.includes ('Security') || s.category.includes ('Cybersecurity') ) .length },
        { id: 'healthcare', name: 'Healthcare & Biotech', count: allServices.filter (s => s.category.includes ('Healthcare') || s.category.includes ('Biology') ) .length },
        { id: 'finance', name: 'Finance & Trading', count: allServices.filter (s => s.category.includes ('Finance') || s.category.includes ('Trading') ) .length },
        { id: 'sustainability', name: 'Sustainability & Energy', count: allServices.filter (s => s.category.includes ('Energy') || s.category.includes ('Climate') ) .length }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter (service => {
            const category = categories.find (c => c.id === selectedCategory) ;
            if (!category) return true;
            const categoryMappings = {
