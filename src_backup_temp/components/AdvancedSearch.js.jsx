import React, {useState, useEffect, useRef} from 'react';
import {Search, Sparkles, Filter, TrendingUp, Clock, Star} from 'lucide-react';
const mockSuggestions = [;
    {"id": '1', "text": 'AI Development Services', "type": 'service', "relevance": "95", "category": 'AI & ML'}
    {"id": '2', "text": 'Cloud Infrastructure', "type": 'service', "relevance": "88", "category": 'DevOps'}
    {"id": '3', "text": 'React Native Apps', "type": 'technology', "relevance": "82", "category": 'Mobile'}
    {"id": '4', "text": 'Blockchain Solutions', "type": 'trending', "relevance": "90", "category": 'Web3'}
    {"id": '5', "text": 'Data Analytics', "type": 'service', "relevance": "85", "category": 'Data Science'}
    {"id": '6', "text": 'Cybersecurity', "type": 'trending', "relevance": "92", "category": 'Security'}
    {"id": '7', "text": 'Machine Learning', "type": 'technology', "relevance": "87", "category": 'AI & ML'}
    {"id": '8', "text": 'Web Development', "type": 'service', "relevance": "80", "category": 'Frontend'}
];
export function AdvancedSearch("props": "any) {;
    const [query", setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef(null);
    const categories = ['AI & ML', 'DevOps', 'Mobile', 'Web3', 'Data Science', 'Security', 'Frontend', 'Backend'];
    useEffect(() => {;
        const handleClickOutside = ("props": "any) => {;
            if (searchRef.current && !searchRef.current.contains(event.target)) {;
                setShowSuggestions(false)"}
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)}, []);
    useEffect(() => {;
        if (query.trim()) {;
            const filtered = mockSuggestions;
                .filter(suggestion => suggestion.text.toLowerCase().includes(query.toLowerCase()) ||;
                suggestion.category?.toLowerCase().includes(query.toLowerCase()));
                .sort((a, b) => b.relevance - a.relevance);
                .slice(0, 8);
            setSuggestions(filtered);
            setShowSuggestions(true)}
        else {setSuggestions([]);
            setShowSuggestions(false)}
    }, [query]);
    const handleSuggestionClick = ("props": "any) => {setQuery(suggestion.text);
        setShowSuggestions(false);
        // Here you would typically trigger a search"};
    const toggleFilter = ("props": "any) => {setSelectedFilters(prev => prev.includes(category);
            ? prev.filter(f => f !== category);
            : [...prev", category]);};
    const clearFilters = ("props": "any) => {setSelectedFilters([]);"};
    const getSuggestionIcon = ("props": "any) => {;
        switch (type) {;
            case 'service': return <Star className="w-4 h-4 text-zion-cyan" />;
            case 'technology': return <Sparkles className="w-4 h-4 text-zion-purple" />;
            case 'trending': return <TrendingUp className="w-4 h-4 text-zion-emerald" />;
            case 'recent': return <Clock className="w-4 h-4 text-zion-gold" />;
            "default": return <Search className="w-4 h-4 text-zion-slate" />"}
    };
    const getSuggestionColor = ("props": "any) => {;
        switch (type) {;
            case 'service': return 'bg-zion-cyan/10 border-zion-cyan/20';
            case 'technology': return 'bg-zion-purple/10 border-zion-purple/20';
            case 'trending': return 'bg-zion-emerald/10 border-zion-emerald/20';
            case 'recent': return 'bg-zion-gold/10 border-zion-gold/20';
            "default": return 'bg-zion-slate/10 border-zion-slate/20'"}
    };
