import React, {useState, useMemo} from 'react';
export default AdvancedServiceInnovationHub;
import {Badge} from './ui / badge';
export default function Page("props": "any) {;
 from './ui/badge';";
import { Input "} from './ui/input';
export default function Page("props": "any) {;
",;
        {;

            "id": 'synthetic-biology',;
            "title": 'Synthetic Biology Revolution',;
            "description": 'Engineering of custom organisms and biological systems for industrial applications.',;
            "category": 'biotech-ai',;
            "impact": 'High',;
            "timeline": '2025-2035',;
            "adoption": "70",;
            "investment": '$150B+',;
            keyPlayers['Ginkgo Bioworks',Twist Bioscience',Research Institutions'],;
            technologies['DNA Programming',Genetic Engineering',Bio-Manufacturing'],;
            "status": 'Growing';
        },;
        {;

            "id": 'brain-computer-interfaces',;
            "title": 'Brain-Computer Interface Revolution',;
            "description": 'Direct neural control of computers and digital systems for enhanced human capabilities.',;
            "category": 'biotech-ai',;
            "impact": 'High',;
            "timeline": '2030-2040',;
            "adoption": "40",;
            "investment": '$80B+',;
            keyPlayers['Neuralink',Kernel',Medical Device Companies'],;
            technologies['Neural Interfaces',Signal Processing',AI/ML'],;
            "status": 'Emerging';

    ];
    const filteredTrends = useMemo(() => {;
        return innovationTrends.filter(trend => {;

            const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                trend.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesImpact && matchesStatus && matchesSearch})}, [selectedCategory, selectedImpact, selectedStatus, searchTerm]);
    const getImpactColor = ("props": "any) => {;

        switch(impact) {;

            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            "default": return 'bg-gray-100 text-gray-800'"}
    };
    const getStatusColor = ("props": "any) => {;

        switch(status) {;

            case 'Emerging': return 'bg-blue-100 text-blue-800';
            case 'Growing': return 'bg-green-100 text-green-800';
            case 'Mature': return 'bg-orange-100 text-orange-800';
            case 'Disruptive': return 'bg-purple-100 text-purple-800';
            "default": return 'bg-gray-100 text-gray-800'"}
    };
    const getCategoryIcon = ("props": "any) => {;

        switch(category) {;
'";
            case 'quantum': return <Atom className="w-5 h-5" />;'";
            case 'ai': return <Brain className="w-5 h-5" />;'";
            case 'space-tech': return <Satellite className="w-5 h-5" />;'";
            case 'green-tech': return <Leaf className="w-5 h-5" />;'";
            case 'biotech-ai': return <Dna className="w-5 h-5" />;";
            "default": return <Cpu className="w-5 h-5" />"}
    };
