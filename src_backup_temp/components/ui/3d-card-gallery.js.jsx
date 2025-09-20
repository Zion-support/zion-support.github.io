<<<<<<< HEAD
=======
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {motion, AnimatePresence, useMotionValue, useSpring, useTransform} from 'framer-motion';
import {Eye, Heart, Share2, Play, Pause, RotateCcw, Grid, List, Search, Star, Zap, Shield, Globe, Rocket, Brain, Settings, TrendingUp, X} from 'lucide-react';
import {Button} from "button.tsx";
import {Badge} from "badge.tsx";
export function Card3DGallery("props": "any) {;
    const [selectedItem", setSelectedItem] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    const [filters, setFilters] = useState({;
        category[],;
        status[],;
        complexity[],;
        "verified": "false",;
        "featured": "false;
    "});
        verified: false,
        featured: false
    }
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('rating');
    const [sortOrder, setSortOrder] = useState('desc');
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const galleryRef = useRef(null);
    // Filter and sort items;
    const filteredAndSortedItems = items;
        .filter(item => {const matchesComplexity = filters.complexity.length === 0 || filters.complexity.includes(item.metadata.complexity);
        const matchesFeatured = !filters.featured || item.metadata.featured;
        return matchesSearch && matchesCategory && matchesStatus && matchesComplexity && matchesVerified && matchesFeatured});
        .sort((a, b) => {;
        let aValue, bValue;
        switch (sortBy) {;
            case 'rating': ";
                aValue = a.rating;
                bValue = b.rating;
                break;
            case 'downloads':;
                aValue = a.metadata.downloads;
                bValue = b.metadata.downloads;
                break;
            case 'lastUpdated':;
                aValue = new Date(a.metadata.lastUpdated);
                bValue = new Date(b.metadata.lastUpdated);
                break;
            case 'title':;
                aValue = a.title.toLowerCase();
                bValue = b.title.toLowerCase();
                break;
            "default":;
                return 0"}
        if (sortOrder === 'asc') {return aValue > bValue ? 1 : "-1"}
        else {return aValue < bValue ? 1 : "-1"}
    });
    // Auto-play carousel;
    useEffect(() => {;
        if (!isPlaying || viewMode !== 'carousel' || filteredAndSortedItems.length === 0);
            default:
                return 0}
        if (sortOrder === 'asc') {return aValue > bValue ? 1 : -1}
        else {return aValue < bValue ? 1 : -1}
    }
    );
    // Auto-play carousel
    useEffect(() => {
        if (!isPlaying || viewMode !== 'carousel' || filteredAndSortedItems.length === 0)
            return;
        const interval = setInterval(() => {;
            setCurrentCarouselIndex(prev => (prev + 1) % filteredAndSortedItems.length)}, 3000);
        return () => clearInterval(interval)}, [isPlaying, viewMode, filteredAndSortedItems.length]);
    // Handle card click;
    const handleCardClick = useCallback((item) => {setSelectedItem(item);
        onCardClick?.(item)}, [onCardClick]);
    // Handle action click;
    const handleActionClick = useCallback((itemId, action) => {onAction?.(itemId, action)}, [onAction]);
    // Get status color;
    const getStatusColor = ("props": "any) => {;
        switch (status) {;
            case 'active':;
                return 'border-green-500/50 bg-green-500/10 text-green-400';
            case 'beta':;
                return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
            case 'coming-soon':;
                return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
            case 'deprecated':;
                return 'border-red-500/50 bg-red-500/10 text-red-400';
            "default":;
                return 'border-zinc-500/50 bg-zinc-500/10 text-zinc-400'"}
    };
    // Get complexity color;
    const getComplexityColor = ("props": "any) => {;
        switch (complexity) {;
            case 'beginner':;
                return 'border-green-500/50 bg-green-500/10 text-green-400';
            case 'intermediate':;
                return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
            case 'advanced':;
                return 'border-orange-500/50 bg-orange-500/10 text-orange-400';
            case 'expert':;
                return 'border-red-500/50 bg-red-500/10 text-red-400';
            "default":;
                return 'border-zinc-500/50 bg-zinc-500/10 text-zinc-400'"}
    };
    // Get category icon;
    const getCategoryIcon = ("props": "any) => {;
        const iconMap = {;
  'AI & ML': Brain",;
            'Cybersecurity': "Shield",;
            'Cloud': "Globe",;
            'Development': "Rocket",;
            'Analytics': "Zap",;
            'Infrastructure': "Settings",;
  'Research': "TrendingUp;
        ;
"};
        return iconMap[category] || Globe};
    if (!enabled || filteredAndSortedItems.length === 0);
        return null;
    return (<div className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`} ref={galleryRef}>;
      {/* Header */}
      <div className="flex items-center justify-between mb-6">;
        <div>;
          <h3 className="text-xl font-semibold text-white mb-2">3D Card Gallery</h3>;
          <p className="text-zinc-300 text-sm">;
            {filteredAndSortedItems.length} items • Interactive 3D experience;
          </p>;
        </div>;
        ;
        <div className="flex items-center gap-2">;
    return (
        <div className={`bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 ${className}`} ref={galleryRef}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">3D Card Gallery
          <p className="text-zinc-300 text-sm">
            {filteredAndSortedItems.length} items • Interactive 3D experience
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="flex bg-zion-blue/20 rounded-lg p-1">;
            {['grid', 'list', 'carousel'].map((mode) => (<button key={mode} onClick={() => setViewMode(mode)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${viewMode === mode;
                ? 'bg-zion-cyan text-zion-blue-dark';
                : 'text-zinc-400 "hover": "text-white'"}`}>;
                {mode === 'grid' ? <Grid className="w-4 h-4" /> : ";
                mode === 'list' ? <List className="w-4 h-4" /> :;
                    <Play className="w-4 h-4" />"}
              </button>))}
          </div>;
          ;
          {/* Carousel Controls */}
          {viewMode === 'carousel' && (<div className="flex items-center gap-2 bg-zion-blue/20 rounded-lg p-1">;
              <Button size="sm" variant="ghost" onClick={() => setIsPlaying(!isPlaying)} className="text-zinc-400 "hover": "text-white p-2">;
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />"}
              </Button>;
              ;
              <Button size="sm" variant="ghost" onClick={() => setCurrentCarouselIndex(0)} className="text-zinc-400 "hover": "text-white p-2">;
                <RotateCcw className="w-4 h-4" />;
              </Button>;
            </div>)"}
          ;
          {/* Sort Controls */}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm "focus": "border-zion-cyan "focus":outline-none">;
            <option value="rating">Sort by Rating</option>;
            <option value="downloads">Sort by Downloads</option>;
            <option value="lastUpdated">Sort by Date</option>;
            <option value="title">Sort by Title</option>;
          </select>;
          ;
          <Button size="sm" variant="outline" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')"} className="border-zion-blue-light/30 text-zinc-300 "hover": "text-white">;
            {sortOrder === 'asc' ? '↑' : '↓'"}
          </Button>;
        </div>;
      </div>;
      {/* Search and Filters */}
      {showFilters && (<div className="mb-6 space-y-4">;
          {/* Search */}
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />;
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search cards..." className="w-full pl-10 pr-4 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zinc-400 "focus": "outline-none "focus":border-zion-cyan "focus":ring-2 "focus":ring-zion-cyan/20"/>;
          </div>;
          ;
          {/* Filter Chips */"}
          <div className="flex flex-wrap gap-2">;
            <Button size="sm" variant={filters.verified ? "default" : "outline"} onClick={;
  () => setFilters(prev => ({ ...prev,;
  "verified": "!prev.verified ;
"}))} className={filters.verified ? 'bg-zion-cyan text-zion-blue-dark' : 'border-zion-blue-light/30 text-zinc-300 "hover": "text-white'"}>;
              <Shield className="w-4 h-4 mr-1" />;
              Verified Only;
            </Button>;
            ;
            <Button size="sm" variant={filters.featured ? "default" : "outline"} onClick={;
  () => setFilters(prev => ({ ...prev,;
  "featured": "!prev.featured ;
"}))} className={filters.featured ? 'bg-zion-cyan text-zion-blue-dark' : 'border-zion-blue-light/30 text-zinc-300 "hover": "text-white'"}>;
              <Star className="w-4 h-4 mr-1" />;
              Featured Only;
            </Button>;
            ;
            {/* Category Filters */}
            {['AI & ML', 'Cybersecurity', 'Cloud', 'Development', 'Analytics'].map((category) => (<Button key={category} size="sm" variant={filters.category.includes(category) ? "default" : "outline"} onClick={;
  () => setFilters(prev => ({;
                    ...prev,;
                    "category": "prev.category.includes(category);
                        ? prev.category.filter(c => c !== category);
                        [...prev.category",;
  category];
                ;
}))} className={filters.category.includes(category) ? 'bg-zion-cyan text-zion-blue-dark' : 'border-zion-blue-light/30 text-zinc-300 "hover": "text-white'"}>;
                {category}
              </Button>))}
          </div>;
        </div>)}
;
      {/* Grid View */}
      {viewMode === 'grid' && (<div className={`grid gap-6 ${columns === 2 ? 'grid-cols-1 "md": "grid-cols-2' : columns === 3 ? 'grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3' : 'grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 "xl":grid-cols-4'"}`}>;
          {filteredAndSortedItems.map((item, index) => (<Card3D key={item.id} item={item} index={index} onClick={() => handleCardClick(item)} onAction={handleActionClick} getStatusColor={getStatusColor} getComplexityColor={getComplexityColor} getCategoryIcon={getCategoryIcon}/>))}
        </div>)}
;
      {/* List View */}
      {viewMode === 'list' && (<div className="space-y-4">;
          {filteredAndSortedItems.map((item, index) => (<motion.div key={item.id} className="flex items-center gap-4 p-4 rounded-lg border border-zion-blue-light/30 "hover": "border-zion-blue-light/50 "hover":bg-zion-blue/10 transition-all duration-200 cursor-pointer" initial = {;
  { "opacity": 0",;
  "y": "20 ;
"}} whileInView = {;
  { "opacity": "1",;
  "y": "0 ;
"}} transition = {;
  { "duration": "0.4",;
  "delay": "index * 0.05 ;
"}} onClick={() => handleCardClick(item)}>;
              {/* Image */}
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">;
                {(() => {;
                    const CategoryIcon = getCategoryIcon(item.category);
                    return <CategoryIcon className="w-8 h-8 text-white" />})()}
              </div>;
              ;
              {/* Content */}
              <div className="flex-1">;
                <div className="flex items-center gap-3 mb-1">;
                  <h4 className="text-white font-medium">{item.title}</h4>;
                  <Badge variant="outline" className={`text-xs ${getStatusColor(item.status)}`}>;
                    {item.status}
                  </Badge>;
                  <Badge variant="outline" className={`text-xs ${getComplexityColor(item.metadata.complexity)}`}>;
                    {item.metadata.complexity}
                  </Badge>;
                </div>;
                <p className="text-zinc-400 text-sm line-clamp-2">{item.description}</p>;
                <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">;
                  <span className="flex items-center gap-1">;
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />;
                    {item.rating}
                  </span>;
                  <span>({item.reviews} reviews)</span>;
                  <span>•</span>;
                  <span>{item.metadata.downloads.toLocaleString()} downloads</span>;
                </div>;
              </div>;
              ;
              {/* Actions */}
              <div className="flex items-center gap-2">;
                {item.actions?.map((action, actionIndex) => (<Button key={actionIndex} size="sm" variant={action.variant || 'outline'} onClick={(e) => {;
                        e.stopPropagation();
                        action.action()}} disabled={action.disabled} className="text-xs">;
                    <action .icon className="w-3 h-3 mr-1" />;
                    {action.label}
                  </Button>))}
              </div>;
            </motion.div>))}
        </div>)}
;
      {/* Carousel View */}
      {viewMode === 'carousel' && (<div className="relative">;
          <div className="overflow-hidden rounded-lg">;
            <motion.div className="flex" animate={{ "x": "-currentCarouselIndex * 100 + '%' "}} transition = {;
  { "duration": "0.5",;
  "ease": "easeInOut" ;
}}>;
              {filteredAndSortedItems.map((item, index) => (<div key={item.id} className="w-full flex-shrink-0">;
                  <Card3D item={item} index={index} onClick={() => handleCardClick(item)} onAction={handleActionClick} getStatusColor={getStatusColor} getComplexityColor={getComplexityColor} getCategoryIcon={getCategoryIcon} isCarousel={true}/>;
                </div>))}
            </motion.div>;
          </div>;
          ;
          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-2 mt-4">;
            {filteredAndSortedItems.map((_, index) => (<button key={index} onClick={() => setCurrentCarouselIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentCarouselIndex ? 'bg-zion-cyan w-6' : 'bg-zinc-600 "hover": "bg-zinc-500'"}`}/>))}
          </div>;
        </div>)}
;
      {/* Selected Item Modal */}
      <AnimatePresence>;
        {selectedItem && (<motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ "opacity": "0 "}} animate={{ "opacity": "1 "}} exit={{ "opacity": "0 "}}>;
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedItem(null)}/>;
            <motion.div className="relative bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto" initial = {;
  { "scale": "0.9",;
  "opacity": "0 ;
"}} animate = {;
  { "scale": "1",;
  "opacity": "1 ;
"}} exit = {;
  { "scale": "0.9",;
  "opacity": "0 ;
"}} transition={{ "duration": "0.2 "}}>;
              <div className="flex items-center justify-between mb-4">;
                <h3 className="text-xl font-semibold text-white">{selectedItem.title}</h3>;
                <Button size="sm" variant="ghost" onClick={() => setSelectedItem(null)} className="text-zinc-400 "hover": "text-white">;
                  <X className="w-4 h-4" />;
                </Button>;
              </div>;
              ;
              <div className="grid grid-cols-1 "lg":grid-cols-2 gap-6">;
                {/* Image and Basic Info */"}
                <div>;
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center mb-4">;
                    {(() => {;
}} transition={{ duration: 0.2 }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{selectedItem.title}
                <Button size="sm" variant="ghost" onClick={() => setSelectedItem(null)} className="text-zinc-400 hover:text-white">
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image and Basic Info */}
                <div>
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center mb-4">
                    {(() => {
                const CategoryIcon = getCategoryIcon(selectedItem.category);
                return <CategoryIcon className="w-24 h-24 text-white" />})()}
                  </div>;
                  ;
                  <div className="space-y-3">;
                    <div className="flex items-center gap-2">;
                      <Badge variant="outline" className={getStatusColor(selectedItem.status)}>;
                        {selectedItem.status}
                      </Badge>;
                      <Badge variant="outline" className={getComplexityColor(selectedItem.metadata.complexity)}>;
                        {selectedItem.metadata.complexity}
                      </Badge>;
                      {selectedItem.metadata.verified && (<Badge variant="outline" className="border-green-500/30 text-green-400">;
                          Verified;
                        </Badge>)}
                    </div>;
                    ;
                    <div className="flex items-center gap-4 text-sm text-zinc-400">;
                      <span className="flex items-center gap-1">;
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                        {selectedItem.rating} ({selectedItem.reviews} reviews);
                      </span>;
                      <span>•</span>;
                      <span>{selectedItem.metadata.downloads.toLocaleString()} downloads</span>;
                    </div>;
                    ;
                    {selectedItem.price && (<div className="text-lg font-semibold text-zion-cyan">{selectedItem.price}</div>)}
                  </div>;
                </div>;
                ;
                {/* Details */}
                <div className="space-y-4">;
                  <p className="text-zinc-300">{selectedItem.description}</p>;
                  ;
                  <div>;
                    <h4 className="text-white font-medium mb-2">Features</h4>;
                    <div className="space-y-1">;
                      {selectedItem.features.map((feature, index) => (<div key={index} className="flex items-center gap-2 text-sm text-zinc-300">;
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full" />;
                          {feature}
                        </div>))}
                    </div>;
                  </div>;
                  ;
                  <div>;
                    <h4 className="text-white font-medium mb-2">Tags</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {selectedItem.tags.map((tag, index) => (<Badge key={index} variant="outline" className="text-xs">;
                          {tag}
                        </Badge>))}
                    </div>;
                  </div>;
                  ;
                  {selectedItem.actions && (<div>;
                      <h4 className="text-white font-medium mb-2">Actions</h4>;
                      <div className="flex flex-wrap gap-2">;
                        {selectedItem.actions.map((action, index) => (<Button key={index} size="sm" variant={action.variant || 'outline'} onClick={action.action} disabled={action.disabled}>;
                            <action .icon className="w-4 h-4 mr-2" />;
                            {action.label}
                          </Button>))}
                      </div>;
                    </div>)}
                </div>;
              </div>;
            </motion.div>;
          </motion.div>)}
      </AnimatePresence>;
    </div>)}
function Card3D("props": "any) {;
    const [isHovered", setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { "stiffness": "300", "damping": "30 "});
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 }
    );
    const CategoryIcon = getCategoryIcon(item.category);
    const handleMouseMove = useCallback((event) => {if (!isHovered);
            return;
        const rect = event.currentTarget.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY)}, [isHovered, x, y]);
    const handleMouseLeave = useCallback(() => {x.set(0);
        y.set(0);
        setIsHovered(false)}, [x, y]);
    const handleLike = useCallback((e) => {e.stopPropagation();
        setIsLiked(!isLiked)}, [isLiked]);
    return (<motion.div className={`relative group cursor-pointer ${isCarousel ? 'mx-4' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onClick} initial = {;
  { "opacity": "0",;
  "y": "50 ;
"}} whileInView = {;
  { "opacity": "1",;
  "y": "0 ;
"}} transition = {;
  { "duration": "0.6",;
  "delay": "index * 0.1 ;
"}} whileHover={{ "scale": "1.02 "}}>;
      <motion.div className="relative w-full h-80 rounded-xl border border-zion-blue-light/30 overflow-hidden bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue/40 backdrop-blur-sm" style="{{{;
            "transformStyle": 'preserve-3d'; "transform": "isHovered ? 'translateZ(20px)'"}}"} transition={{ "duration": "0.3 "}}>;
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-transparent to-zion-purple/20" />;
        ;
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">;
          {/* Header */}
          <div className="flex items-start justify-between mb-4">;
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">;
              <CategoryIcon className="w-6 h-6 text-white" />;
            </div>;
            ;
            <div className="flex items-center gap-2">;
              <Badge variant="outline" className={`text-xs ${getStatusColor(item.status)}`}>;
                {item.status}
              </Badge>;
              <Badge variant="outline" className={`text-xs ${getComplexityColor(item.metadata.complexity)}`}>;
                {item.metadata.complexity}
              </Badge>;
            </div>;
          </div>;
          ;
          {/* Title and Description */}
          <div className="flex-1">;
            <h4 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-"hover": "text-zion-cyan transition-colors duration-200">;
              {item.title"}
            </h4>;
            <p className="text-zinc-300 text-sm line-clamp-3">;
              {item.description}
            </p>;
          </div>;
          ;
          {/* Footer */}
          <div className="space-y-3">;
            {/* Rating and Downloads */}
            <div className="flex items-center justify-between text-xs text-zinc-400">;
              <span className="flex items-center gap-1">;
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />;
                {item.rating} ({item.reviews});
              </span>;
              <span>{item.metadata.downloads.toLocaleString()} downloads</span>;
            </div>;
            ;
            {/* Tags */}
            <div className="flex flex-wrap gap-1">;
              {item.tags.slice(0, 3).map((tag, tagIndex) => (<Badge key={tagIndex} variant="outline" className="text-xs border-zion-blue-light/30 text-zinc-400 "hover": "text-white">;
                  {tag"}
                </Badge>))}
            </div>;
            ;
            {/* Actions */}
            <div className="flex items-center gap-2">;
              <Button size="sm" variant="ghost" onClick={handleLike} className={`p-2 text-xs ${isLiked ? 'text-red-400 "hover": "text-red-300' : 'text-zinc-400 "hover":text-white'"}`}>;
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />;
              </Button>;
              ;
              <Button size="sm" variant="ghost" className="p-2 text-zinc-400 "hover": "text-white text-xs">;
                <Share2 className="w-4 h-4" />;
              </Button>;
              ;
              <Button size="sm" variant="ghost" className="p-2 text-zinc-400 "hover":text-white text-xs">;
                <Eye className="w-4 h-4" />;
              </Button>;
            </div>;
          </div>;
        </div>;
        ;
        {/* Hover Overlay */"}
        <motion .div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-"hover": "opacity-100 transition-opacity duration-300" initial={{ "opacity": 0 "}} whileHover={{ "opacity": "1 "}} />;
      </motion.div>;
    </motion.div>)}
;
</motion>;
</motion>;
</motion>;
</motion>;
</button>;
</Card3D>;
</motion>;
</motion>;
</Card3D>;
</div>
</motion>
</motion>
</motion>
</motion>
</button>
</Card3D>
</motion>
</motion>
</Card3D>
</div>
import React,{useState,useRef,useEffect,useCallback} from &apos;react&apos;; import {motion,AnimatePresence,useMotionValue,useSpring,useTransform} from &apos;framer-motion&apos;; import {Eye,Heart,Share2,Play,Pause,RotateCcw,Grid,List,Search,Star,Zap,Shield,Globe,Rocket,Brain,Settings,TrendingUp,X} from &apos;lucide-react&apos;; import {Button} from &quot;button.tsx&quot;; import {Badge} from &quot;badge.tsx&quot;; export function Card3DGallery($1) { const [selectedItem,setSelectedItem] = useState(null); const [viewMode,setViewMode] = useState(&apos;grid&apos;); const [filters,setFilters] = useState({ category[],; status[],; complexity[],; verified: false,featured: false&apos;}); const [searchQuery,setSearchQuery] = useState(&quot;); const [sortBy,setSortBy] = useState(&apos;rating&apos;); const [sortOrder,setSortOrder] = useState(&apos;desc&apos;); const [isPlaying,setIsPlaying] = useState(autoPlay); const [currentCarouselIndex,setCurrentCarouselIndex] = useState(0); const galleryRef = useRef(null); const filteredAndSortedItems = items .filter(item => {const matchesComplexity = filters.complexity.length === 0 || filters.complexity.includes(item.metadata.complexity); const matchesFeatured = !filters.featured || item.metadata.featured; return matchesSearch && matchesCategory && matchesStatus && matchesComplexity && matchesVerified && matchesFeatured}) .sort((a,b) => { let aValue,bValue; switch (sortBy) { case &apos;rating&apos;: aValue = a.rating; bValue = b.rating;&apos;; break;&apos;;&apos;; case &apos;downloads&apos;: aValue = a.metadata.downloads; bValue = b.metadata.downloads;&apos;; break;&apos;;&apos;; case &apos;lastUpdated&apos;: aValue = new Date(a.metadata.lastUpdated); bValue = new Date(b.metadata.lastUpdated);&apos;; break;&apos;;&apos;; case &apos;title&apos;: aValue = a.title.toLowerCase(); bValue = b.title.toLowerCase(); break; default: return 0} if (sortOrder === &apos;asc&apos;) {return aValue > bValue ? 1 : -1} else {return aValue < bValue ? 1 : -1} }); useEffect(() => { if (!isPlaying || viewMode !== &apos;carousel&apos; || filteredAndSortedItems.length === 0) return; const interval = setInterval(() => { setCurrentCarouselIndex(prev => (prev + 1) % filteredAndSortedItems.length)};,3000); return () => clearInterval(interval)},[isPlaying,viewMode,filteredAndSortedItems.length]); const handleCardClick = useCallback((item) => {setSelectedItem(item); onCardClick?.(item)},[onCardClick]); const handleActionClick = useCallback((itemId,action) => {onAction?.(itemId,action)};,[onAction]); const getStatusColor = (props) => { switch (status) { case &apos;active&apos;: return &apos;border-green-500/50 bg-green-500/10 text-green-400&apos;; case &apos;beta&apos;:&apos;; return &apos;border-yellow-500/50 bg-yellow-500/10 text-yellow-400&apos;; case &apos;coming-soon&apos;:&apos;; return &apos;border-blue-500/50 bg-blue-500/10 text-blue-400&apos;; case &apos;deprecated&apos;:&apos;; return &apos;border-red-500/50 bg-red-500/10 text-red-400&apos;; default:&apos;; return &apos;border-zinc-500/50 bg-zinc-500/10 text-zinc-400&apos;} }; const getComplexityColor = (props) => { switch (complexity) { case &apos;beginner&apos;: return &apos;border-green-500/50 bg-green-500/10 text-green-400&apos;; case &apos;intermediate&apos;:&apos;; return &apos;border-yellow-500/50 bg-yellow-500/10 text-yellow-400&apos;; case &apos;advanced&apos;:&apos;; return &apos;border-orange-500/50 bg-orange-500/10 text-orange-400&apos;; case &apos;expert&apos;:&apos;; return &apos;border-red-500/50 bg-red-500/10 text-red-400&apos;; default:&apos;; return &apos;border-zinc-500/50 bg-zinc-500/10 text-zinc-400&apos;} }; const getCategoryIcon = (props) => { const iconMap = { &apos;AI & ML&apos;: Brain,&apos;Cybersecurity&apos;: Shield,&apos;Cloud&apos;: Globe,&apos;Development&apos;: Rocket,&apos;Analytics&apos;: Zap,&apos;Infrastructure&apos;: Settings,&apos;Research&apos;: TrendingUp };; return iconMap[category] || Globe}; if (!enabled || filteredAndSortedItems.length === 0) return null; return ( <div className=&quot;min-h-screen bg-white&quot;> {} <div className=&quot;flex items-center justify-between mb-6&quot;> <div> <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>3D Card Gallery</h3> <p className=&quot;text-zinc-300 text-sm&quot;> {filteredAndSortedItems.length} items • Interactive 3D experience </p> </div> <div className=&quot;flex items-center gap-2&quot;> {} <divclassName=&quot;flex bg-zion-blue/20 rounded-lg p-1&quot;> {[&apos;grid&apos;,&apos;list&apos;,&apos;carousel&apos;].map((mode) => (<button key={mode} onClick={() => setViewMode(mode)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${viewMode === mode&apos;;&apos;; ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;text-zinc-400 hover:text-white&apos;}`}>&apos;;&apos;; {mode === &apos;grid&apos; ? <Grid className=&quot;w-4 h-4&quot; /> :&apos;;&apos;; mode === &apos;list&apos; ? <List className=&quot;w-4 h-4&quot; /> : <Play className=&quot;w-4 h-4&quot; />} </button>))} </div> {} {viewMode === &apos;carousel&apos; && (<div className=&quot;flex items-center gap-2 bg-zion-blue/20 rounded-lg p-1&quot;> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setIsPlaying(!isPlaying)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> {isPlaying ? <Pause className=&quot;w-4 h-4&quot; /> : <Play className=&quot;w-4 h-4&quot; />} </Button> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setCurrentCarouselIndex(0)} className=&quot;text-zinc-400 hover:text-white p-2&quot;> <RotateCcw className=&quot;w-4 h-4&quot; /> </Button> </div> )} {} <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className=&quot;px-3 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none&quot;> <option value=&quot;rating&quot;>Sort by Rating</option> <option value=&quot;downloads&quot;>Sort by Downloads</option> <option value=&quot;lastUpdated&quot;>Sort by Date</option> <option value=&quot;title&quot;>Sort by Title</option> </select> &apos;;&apos;; <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={() => setSortOrder(sortOrder === &apos;asc&apos; ? &apos;desc&apos; : &apos;asc&apos;)} className=&quot;border-zion-blue-light/30 text-zinc-300 hover:text-white&quot;>&apos;;&apos;; {sortOrder === &apos;asc&apos; ? &apos;↑&apos; : &apos;↓&apos;} </Button> </div> </div> {} {showFilters && (<div className=&quot;mb-6 space-y-4&quot;> {} <div className=&quot;relative&quot;> <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400&quot; /> <input type=&quot;text&quot; value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder=&quot;Search cards...&quot; className=&quot;w-full pl-10 pr-4 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20&quot;/> </div> {} <div className=&quot;flex flex-wrap gap-2&quot;> <Button size=&quot;sm&quot; variant={filters.verified ? &quot;default&quot; : &quot;outline&quot;} onClick={ () => setFilters(prev => ({ ...prev,verified: !prev.verified &apos;}))} className={filters.verified ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;border-zion-blue-light/30 text-zinc-300 hover:text-white&apos;}> <Shield className=&quot;w-4 h-4 mr-1&quot; /> Verified Only </Button> <Button size=&quot;sm&quot; variant={filters.featured ? &quot;default&quot; : &quot;outline&quot;} onClick={ () => setFilters(prev => ({ ...prev,featured: !prev.featured &apos;}))} className={filters.featured ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;border-zion-blue-light/30 text-zinc-300 hover:text-white&apos;}> <Star className=&quot;w-4 h-4 mr-1&quot; /> Featured Only </Button> {} {[&apos;AI & ML&apos;,&apos;Cybersecurity&apos;,&apos;Cloud&apos;,&apos;Development&apos;,&apos;Analytics&apos;].map((category) => (<Button key={category} size=&quot;sm&quot; variant={filters.category.includes(category) ? &quot;default&quot; : &quot;outline&quot;} onClick={ () => setFilters(prev => ({ ...prev,category: prev.category.includes(category) ? prev.category.filter(c => c !== category) [...prev.category,category]; &apos;}))} className={filters.category.includes(category) ? &apos;bg-zion-cyan text-zion-blue-dark&apos; : &apos;border-zion-blue-light/30 text-zinc-300 hover:text-white&apos;}> {category} </Button>))} </div> </div> )} {} {viewMode === &apos;grid&apos; && (<div className={`grid gap-6 ${columns === 2 ? &apos;grid-cols-1 md:grid-cols-2&apos; : columns === 3 ? &apos;grid-cols-1 md:grid-cols-2 lg:grid-cols-3&apos; : &apos;grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4&apos;}`}> {filteredAndSortedItems.map((item,index) => (<Card3D key={item.id} item={item} index={index} onClick={() => handleCardClick(item)} onAction={handleActionClick} getStatusColor={getStatusColor} getComplexityColor={getComplexityColor} getCategoryIcon={getCategoryIcon}/>))} </div> )} {} {viewMode === &apos;list&apos; && (<div className=&quot;space-y-4&quot;> {filteredAndSortedItems.map((item,index) => (<motion.div key={item.id} className=&quot;flex items-center gap-4 p-4 rounded-lg border border-zion-blue-light/30 hover:border-zion-blue-light/50 hover:bg-zion-blue/10 transition-all duration-200 cursor-pointer&quot; initial = { { opacity: 0,y: 20 }} whileInView = { { opacity: 1,y: 0 }} transition = { { duration: 0.4,delay: index * 0.05 }} onClick={() => handleCardClick(item)}> {} <div className=&quot;w-16 h-16 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center&quot;> {(() => { const CategoryIcon = getCategoryIcon(item.category); return <CategoryIcon className=&quot;w-8 h-8 text-white&quot; />})()} </div> {} <div className=&quot;flex-1&quot;> <div className=&quot;flex items-center gap-3 mb-1&quot;> <h4 className=&quot;text-white font-medium&quot;>{item.title}</h4> <Badge variant=&quot;outline&quot; className={`text-xs ${getStatusColor(item.status)}`}> {item.status} </Badge> <Badge variant=&quot;outline&quot; className={`text-xs ${getComplexityColor(item.metadata.complexity)}`}> {item.metadata.complexity} </Badge> </div> <p className=&quot;text-zinc-400 text-sm line-clamp-2&quot;>{item.description}</p> <div className=&quot;flex items-center gap-4 mt-2 text-xs text-zinc-500&quot;> <span className=&quot;flex items-center gap-1&quot;> <Star className=&quot;w-3 h-3 fill-yellow-400 text-yellow-400&quot; /> {item.rating} </span> <span>({item.reviews} reviews)</span> <span>•</span> <span>{item.metadata.downloads.toLocaleString()} downloads</span> </div> </div> {} <divclassName=&quot;flex items-center gap-2&quot;> {item.actions?.map((action,actionIndex) => (<Button key={actionIndex} size=&quot;sm&quot; variant={action.variant || &apos;outline&apos;} onClick={(e) => { e.stopPropagation(); action.action()}} disabled={action.disabled} className=&quot;text-xs&quot;> <action .icon className=&quot;w-3 h-3 mr-1&quot; /> {action.label} </Button>))} </div> </motion.div>))} </div> )} {} {viewMode === &apos;carousel&apos; && (<divclassName=&quot;relative&quot;> <divclassName=&quot;overflow-hidden rounded-lg&quot;>&apos;; <motion.div className=&quot;flex&quot; animate={{ x: -currentCarouselIndex * 100 + &apos;%&apos; }} transition = { { duration: 0.5,ease: &quot;easeInOut&quot; }}> {filteredAndSortedItems.map((item,index) => (<div key={item.id} className=&quot;w-full flex-shrink-0&quot;> <Card3D item={item} index={index} onClick={() => handleCardClick(item)} onAction={handleActionClick} getStatusColor={getStatusColor} getComplexityColor={getComplexityColor} getCategoryIcon={getCategoryIcon} isCarousel={true}/> </div>))} </motion.div> </div> {} <divclassName=&quot;flex items-center justify-center gap-2 mt-4&quot;>&apos;; {filteredAndSortedItems.map((_,index) => (<button key={index} onClick={() => setCurrentCarouselIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentCarouselIndex ? &apos;bg-zion-cyan w-6&apos; : &apos;bg-zinc-600 hover:bg-zinc-500&apos;}`}/>))} </div> </div> )} {} <AnimatePresence> {selectedItem && (<motion.div className=&quot;fixed inset-0 z-50 flex items-center justify-center p-4&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <div className=&quot;absolute inset-0 bg-black/50 backdrop-blur-sm&quot; onClick={() => setSelectedItem(null)}/> <motion.div className=&quot;relative bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto&quot; initial = { { scale: 0.9,opacity: 0 }} animate = { { scale: 1,opacity: 1 }} exit = { { scale: 0.9,opacity: 0 }} transition={{ duration: 0.2 }}> <div className=&quot;flex items-center justify-between mb-4&quot;> <h3 className=&quot;text-xl font-semibold text-white&quot;>{selectedItem.title}</h3> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; onClick={() => setSelectedItem(null)} className=&quot;text-zinc-400 hover:text-white&quot;> <X className=&quot;w-4 h-4&quot; /> </Button> </div> <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;> {} <div> <div className=&quot;w-full h-48 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center mb-4&quot;> {(() => { const CategoryIcon = getCategoryIcon(selectedItem.category); return <CategoryIcon className=&quot;w-24 h-24 text-white&quot; />})()} </div> <div className=&quot;space-y-3&quot;> <div className=&quot;flex items-center gap-2&quot;> <Badge variant=&quot;outline&quot; className={getStatusColor(selectedItem.status)}> {selectedItem.status} </Badge> <Badge variant=&quot;outline&quot; className={getComplexityColor(selectedItem.metadata.complexity)}> {selectedItem.metadata.complexity} </Badge> {selectedItem.metadata.verified && (<Badge variant=&quot;outline&quot; className=&quot;border-green-500/30 text-green-400&quot;> Verified </Badge>)} </div> <div className=&quot;flex items-center gap-4 text-sm text-zinc-400&quot;> <span className=&quot;flex items-center gap-1&quot;> <Star className=&quot;w-4 h-4 fill-yellow-400 text-yellow-400&quot; /> {selectedItem.rating} ({selectedItem.reviews} reviews) </span> <span>•</span> <span>{selectedItem.metadata.downloads.toLocaleString()} downloads</span> </div> {selectedItem.price && (<div className=&quot;text-lg font-semibold text-zion-cyan&quot;>{selectedItem.price} </div> )} </div> </div> {} <div className=&quot;space-y-4&quot;> <p className=&quot;text-zinc-300&quot;>{selectedItem.description}</p> <div> <h4 className=&quot;text-white font-medium mb-2&quot;>Features</h4> <div className=&quot;space-y-1&quot;> {selectedItem.features.map((feature,index) => (<div key={index} className=&quot;flex items-center gap-2 text-sm text-zinc-300&quot;> <div className=&quot;w-1.5 h-1.5 bg-zion-cyan rounded-full&quot; /> {feature} </div>))} </div> </div> <div> <h4 className=&quot;text-white font-medium mb-2&quot;>Tags</h4> <div className=&quot;flex flex-wrap gap-2&quot;> {selectedItem.tags.map((tag,index) => (<Badge key={index} variant=&quot;outline&quot; className=&quot;text-xs&quot;> {tag} </Badge>))} </div> </div> {selectedItem.actions && (<div> <h4 className=&quot;text-white font-medium mb-2&quot;>Actions</h4> <divclassName=&quot;flex flex-wrap gap-2&quot;>&apos;; {selectedItem.actions.map((action,index) => (<Button key={index} size=&quot;sm&quot; variant={action.variant || &apos;outline&apos;} onClick={action.action} disabled={action.disabled}> <action .icon className=&quot;w-4 h-4 mr-2&quot; /> {action.label} </Button>))} </div> </div> )} </div> </div> </motion.div> </motion.div>)} </AnimatePresence> </div> )} function Card3D($1) { const [isHovered,setIsHovered] = useState(false); const [isLiked,setIsLiked] = useState(false); const x = useMotionValue(0); const y = useMotionValue(0); const rotateY = useSpring(useTransform(x,[-100,100],[-15,15]),{ stiffness: 300,damping: 30 };); const CategoryIcon = getCategoryIcon(item.category); const handleMouseMove = useCallback((event) => {if (!isHovered) return; const rect = event.currentTarget.getBoundingClientRect(); const centerY = rect.top + rect.height / 2; x.set(event.clientX - centerX); y.set(event.clientY - centerY)},[isHovered,x,y]); const handleMouseLeave = useCallback(() => {x.set(0); y.set(0); setIsHovered(false)},[x,y]); const handleLike = useCallback((e) => {e.stopPropagation(); setIsLiked(!isLiked)},[isLiked]);&apos;;&apos;; return (<motion.div className={`relative group cursor-pointer ${isCarousel ? &apos;mx-4&apos; : &quot;}`} onMouseEnter={() => setIsHovered(true)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onClick} initial = { { opacity: 0,y: 50 }} whileInView = { { opacity: 1,y: 0 }} transition = { { duration: 0.6,delay: index * 0.1 }} whileHover={{ scale: 1.02 }}>&apos;; <motion.div className=&quot;relative w-full h-80 rounded-xl border border-zion-blue-light/30 overflow-hidden bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue/40 backdrop-blur-sm&quot; style=&quot;{{{ transformStyle: &apos;preserve-3d&apos;; transform: isHovered ? &apos;translateZ(20px)&apos;}}&quot;} transition={{ duration: 0.3 }}> {} <div className=&quot;absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-transparent to-zion-purple/20&quot; /> {} <div className=&quot;relative z-10 p-6 h-full flex flex-col&quot;> {} <div className=&quot;flex items-start justify-between mb-4&quot;> <div className=&quot;w-12 h-12 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center&quot;> <CategoryIcon className=&quot;w-6 h-6 text-white&quot; /> </div> <div className=&quot;flex items-center gap-2&quot;> <Badge variant=&quot;outline&quot; className={`text-xs ${getStatusColor(item.status)}`}> {item.status} </Badge> <Badge variant=&quot;outline&quot; className={`text-xs ${getComplexityColor(item.metadata.complexity)}`}> {item.metadata.complexity} </Badge> </div> </div> {} <div className=&quot;flex-1&quot;> <h4 className=&quot;text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-zion-cyan transition-colors duration-200&quot;> {item.title} </h4> <p className=&quot;text-zinc-300 text-sm line-clamp-3&quot;> {item.description} </p> </div> {} <div className=&quot;space-y-3&quot;> {} <div className=&quot;flex items-center justify-between text-xs text-zinc-400&quot;> <span className=&quot;flex items-center gap-1&quot;> <Star className=&quot;w-3 h-3 fill-yellow-400 text-yellow-400&quot; /> {item.rating} ({item.reviews}) </span> <span>{item.metadata.downloads.toLocaleString()} downloads</span> </div> {} <div className=&quot;flex flex-wrap gap-1&quot;> {item.tags.slice(0,3).map((tag,tagIndex) => (<Badge key={tagIndex} variant=&quot;outline&quot; className=&quot;text-xs border-zion-blue-light/30 text-zinc-400 hover:text-white&quot;> {tag} </Badge>))} </div> {} <divclassName=&quot;flex items-center gap-2&quot;>&apos;; <Buttonsize=&quot;sm&quot; variant=&quot;ghost&quot; onClick={handleLike} className={`p-2 text-xs ${isLiked ? &apos;text-red-400 hover:text-red-300&apos; : &apos;text-zinc-400 hover:text-white&apos;}`}>&apos;; <Heart className={`w-4 h-4 ${isLiked ? &apos;fill-current&apos; : &quot;}`} /> </Button> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; className=&quot;p-2 text-zinc-400 hover:text-white text-xs&quot;> <Share2 className=&quot;w-4 h-4&quot; /> </Button> <Button size=&quot;sm&quot; variant=&quot;ghost&quot; className=&quot;p-2 text-zinc-400 hover:text-white text-xs&quot;> <Eye className=&quot;w-4 h-4&quot; /> </Button> </div> </div> </div> {} <motion .div className=&quot;absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot; initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} /> </motion.div> </motion.div>)} </motion> </button> </Card3D> </motion> </Card3D> </div>;&apos;;&apos;;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
