import React, { useState } from 'react';
import { comprehensiveMicroSaasServices2025 } from '../../data / 2025 - comprehensive - micro - saas -services';
export default function Page() {
,
        { id: 'enterprise - it', name: 'Enterprise IT', count: allServices.filter(s => s.category.includes ('Enterprise') ) .length },
        { id: 'emerging - tech', name: 'Emerging Technologies', count: allServices.filter(s => s.category.includes ('Space') || s.category.includes('Robotics') || s.category.includes('Metaverse') ) .length },
        { id: 'cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes ('Security') || s.category.includes('Cybersecurity') ) .length },
        { id: 'healthcare', name: 'Healthcare & Biotech', count: allServices.filter(s => s.category.includes ('Healthcare') || s.category.includes('Biology') ) .length },
        { id: 'finance', name: 'Finance & Trading', count: allServices.filter(s => s.category.includes ('Finance') || s.category.includes('Trading') ) .length },
        { id: 'sustainability', name: 'Sustainability & Energy', count: allServices.filter(s => s.category.includes ('Energy') || s.category.includes('Climate') ) .length }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter(service => {
            const category = categories.find (c => c.id === selectedCategory) ;
            if(!category) return true;
            const categoryMappings = {
