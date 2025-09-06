import React, {useState, useRef, useEffect, useCallback} from 'react';'''; import {motion, AnimatePresence, useScroll} from 'framer-motion';'''; import {Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X} from 'lucide-react'; import {Button} from "./button";""";" import {Badge} from "./badge";""";" export function InteractiveTimeline(props: any) {}; const [currentEventIndex, setCurrentEventIndex] = useState(0); const [isPlaying, setIsPlaying] = useState(autoPlay); const [playbackSpeed, setPlaybackSpeed] = useState(1); const [selectedEvent, setSelectedEvent] = useState(null); const [showFilters, setShowFilters] = useState(false); const [filters, setFilters] = useState({}; status[],; category[],; priority[],; progress: 0; });'; const [viewMode, setViewMode] = useState('timeline'); const [zoomLevel, setZoomLevel] = useState(1); const timelineRef = useRef(null);" const {scrollYProgress: _scrollYProgress} = useScroll({}";" """;" target: timelineRef,""";" offset["start end", "end start"]; });';
;';;';
import React, {useState, useRef, useEffect, useCallback} from 'react';; import {motion, AnimatePresence, useScroll} from 'framer-motion';; import {Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X} from 'lucide-react'; import {Button} from "./button";""";" import {Badge} from "./badge";""";" export function InteractiveTimeline(props: any) {}; const [currentEventIndex, setCurrentEventIndex] = useState(0); const [isPlaying, setIsPlaying] = useState(autoPlay); const [playbackSpeed, setPlaybackSpeed] = useState(1); const [selectedEvent, setSelectedEvent] = useState(null); const [showFilters, setShowFilters] = useState(false); const [filters, setFilters] = useState({}; status[],; category[],; priority[],; progress: 0; });'; const [viewMode, setViewMode] = useState('timeline'); const [zoomLevel, setZoomLevel] = useState(1); const timelineRef = useRef(null);" const {scrollYProgress: _scrollYProgress} = useScroll({}";" """;" target: timelineRef,""";" offset["start end", "end start"]; });
;
import React, {useState, useRef, useEffect, useCallback} from 'react';; import {motion, AnimatePresence, useScroll} from 'framer-motion';; import {Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X} from 'lucide-react'; import {Button} from "./button";""";" import {Badge} from "./badge";""";" export function InteractiveTimeline("props": "any) {"}; const [currentEventIndex, setCurrentEventIndex] = useState(0); const [isPlaying, setIsPlaying] = useState(autoPlay); const [playbackSpeed, setPlaybackSpeed] = useState(1); const [selectedEvent, setSelectedEvent] = useState(null); const [showFilters, setShowFilters] = useState(false); const [filters, setFilters] = useState({}; status[],; category[],; priority[],; "progress": "0; "});'; const [viewMode, setViewMode] = useState('timeline'); const [zoomLevel, setZoomLevel] = useState(1); const timelineRef = useRef(null);" const {"scrollYProgress": "_scrollYProgress"} = useScroll({}";" """;" "target": "timelineRef",""";" offset["start end", "end start"]; });
;
import React, {useState, useRef, useEffect, useCallback} from 'react';'''; import {motion, AnimatePresence, useScroll} from 'framer-motion';'''; import {Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X} from 'lucide-react'; import {Button} from "./button";""";" import {Badge} from "./badge";""";" export function InteractiveTimeline(props: any) {}; const [currentEventIndex, setCurrentEventIndex] = useState(0); const [isPlaying, setIsPlaying] = useState(autoPlay); const [playbackSpeed, setPlaybackSpeed] = useState(1); const [selectedEvent, setSelectedEvent] = useState(null); const [showFilters, setShowFilters] = useState(false); const [filters, setFilters] = useState({}; status[],; category[],; priority[],; progress: 0; }
    );'; const [viewMode, setViewMode] = useState('timeline'); const [zoomLevel, setZoomLevel] = useState(1); const timelineRef = useRef(null);" const {scrollYProgress: _scrollYProgress} = useScroll({}";" """;" target: timelineRef,""";" offset["start end", "end start"]; }
    );
import React, {useState, useRef, useEffect, useCallback} from 'react';''
import {motion, AnimatePresence, useScroll} from 'framer-motion';''
import {Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X} from 'lucide-react';''
import {Button} from "button.tsx";""
import {Badge} from "badge.tsx";"
export function InteractiveTimeline($1) {}
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({})
        status[],;
        category[],;
        priority[],;"
        "progress": 0';');
    }
});'
    const [viewMode, setViewMode] = useState('timeline');'
    const [zoomLevel, setZoomLevel] = useState(1);
    const timelineRef = useRef(null);'
    const {"scrollYProgress": _scrollYProgress} = useScroll({"target": timelineRef,")"}
        offset["start end", "end start"];}
});"
    // Filter events based on current filters;
    const filteredEvents = events.filter(event => {const matchesPriority = filters.priority.length === 0 || filters.priority.includes(event.priority);}
        return matchesStatus && matchesCategory && matchesPriority}
});
    // Auto-play functionality;
    useEffect(() => {}
        if (!isPlaying || filteredEvents.length === 0);
            return;
        const interval = setInterval(() => {}
            setCurrentEventIndex(prev => {);}
                const next = (prev + 1) % filteredEvents.length;
                if (next === 0) {}
                    setIsPlaying(false); // Stop when reaching the end;
                };
                return next})}, 3000 / playbackSpeed);
        return () => clearInterval(interval)}, [isPlaying, filteredEvents.length, playbackSpeed]);
    // Handle event selection;
    const handleEventClick = useCallback((event) => {setSelectedEvent(event);}
        onEventClick?.(event)}, [onEventClick]);
    // Handle status change;
    const handleStatusChange = useCallback((eventId, newStatus) => {onStatusChange?.(eventId, newStatus)};, [onStatusChange]);
    // Get status icon and color;
    const getStatusIcon = (props) => {}
        switch (status) {"}
            case 'completed':''
                return { "icon": CheckCircle, "color": 'text-green-400', "bgColor": 'bg-green-400/20' };''
            case 'in-progress':';''
                return {"icon": Clock, "color": 'text-yellow-400', "bgColor": 'bg-yellow-400/20'};''
            case 'upcoming':';''
                return {"icon": Circle, "color": 'text-zinc-400', "bgColor": 'bg-zinc-400/20'};''
            case 'milestone':';''
                return {"icon": Star, "color": 'text-purple-400', "bgColor": 'bg-purple-400/20'};''
            "default": ';''
                return {icon: Circle, "color": 'text-zinc-400', "bgColor": 'bg-zinc-400/20'}}'
    };
    // Get priority color;
    const getPriorityColor = (props) => {}
        switch (priority) {'}
            case 'critical':''
                return 'border-red-500/50 bg-red-500/10';''
            case 'high':';''
                return 'border-orange-500/50 bg-orange-500/10';''
            case 'medium':';''
                return 'border-yellow-500/50 bg-yellow-500/10';''
            case 'low':';''
                return 'border-green-500/50 bg-green-500/10';''
            "default": ';''
                return 'border-zinc-500/50 bg-zinc-500/10'}'
    };
    // Get category icon;
    const getCategoryIcon = (props) => {}
        const iconMap = {'}
  'AI & ML': Zap,''
            'Cybersecurity': Shield,''
            'Cloud': Globe,''
            'Development': Rocket,''
            'Research': TrendingUp,''
            'Team': Users,''
  'Launch': Award;'
};
        return iconMap[category] || Calendar};
    // Toggle play/pause;
    const togglePlayback = useCallback(() => {setIsPlaying(!isPlaying)};, [isPlaying]);
    // Reset timeline;
    const resetTimeline = useCallback(() => {setCurrentEventIndex(0);}
        setIsPlaying(false)}, []);
    // Export timeline;
    const exportTimeline = useCallback(() => {'}
        const dataBlob = new Blob([dataStr], { "type": 'application/json' };);'
        const url = URL.createObjectURL(dataBlob);'
        const link = document.createElement('a');''
        link.href = url;';';''
        link.download = `timeline-${new Date().toISOString().split('T')[0]}.json`;``
        link.click();
        URL.revokeObjectURL(url)}, [filteredEvents]);
    // Share timeline;
    const shareTimeline = useCallback(() => {}
        if (navigator.share) {}
            navigator.share({'})
                "title": 'Project Timeline',''
                "text": 'Check out our project timeline',''
                "url": window.location.href;");
            })};
        else {navigator.clipboard.writeText(window.location.href)};
    };, []);
    if (!enabled || filteredEvents.length === 0);
        return null;
    return (")
    <div className="min-h-screen bg-white">"
</div>"
      <div className="flex items-center justify-between mb-6">"
</div>
        <div>
</div>"
          <h3 className="text-xl font-semibold text-white mb-2">Interactive Timeline</h3>""
          <p className="text-zinc-300 text-sm">Track project milestones and progress</p>"
        </div>"
        <div className="flex items-center gap-2">"
</div>"
          <divclassName="flex bg-zion-blue/20 rounded-lg p-1">"
</divclassName>)"
            {['timeline', 'list', 'kanban'].map((mode) => (<button key={mode} onClick={() => setViewMode(mode)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${viewMode === mode';';'`}
</button>
              </button>))};
          </div>'
          <div className="flex items-center gap-2 bg-zion-blue/20 rounded-lg p-1">"
</div>"
            <Button size="sm" variant="ghost" onClick={togglePlayback} className="text-zinc-400 "hover": text-white p-2">"
</Button>"
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}"
</Pause>
            </Button>"
            <Button size="sm" variant="ghost" onClick={resetTimeline} className="text-zinc-400 "hover": text-white p-2">"
</Button>"
              <RotateCcw className="w-4 h-4" />"
</RotateCcw>
            </Button>"
            <select value={playbackSpeed} onChange={(e) => setPlaybackSpeed(Number(e.target.value))} className="bg-transparent text-zinc-300 text-xs border-none "focus": outline-none">"
</select>
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={3}>3x</option>
            </select>
          </div>"
          <div className="flex items-center gap-1 bg-zion-blue/20 rounded-lg p-1">"
</div>"
            <Button size="sm" variant="ghost" onClick={() => setZoomLevel(prev => Math.max(0.5,"})
</Button>"
              <ZoomOut className="w-4 h-4" />"
</ZoomOut>
            </Button>)"
            <span className="text-zinc-300 text-xs px-2">{Math.round(zoomLevel * 100)}%</span>""
            <Button size="sm" variant="ghost" onClick={() => setZoomLevel(prev => Math.min(2,"})
</Button>"
              <ZoomIn className="w-4 h-4" />"
</ZoomIn>
            </Button>
          </div>"
          <Button size="sm" variant="outline" onClick={shareTimeline} className="border-zion-blue-light/30 text-zinc-300 "hover": text-white">"
</Button>"
            <Share2 className="w-4 h-4 mr-2" />"
</Share2>
          </Button>"
          <Button size="sm" variant="outline" onClick={exportTimeline} className="border-zion-blue-light/30 text-zinc-300 "hover": text-white">"
</Button>"
            <Download className="w-4 h-4 mr-2" />"
</Download>
          </Button>
        </div>
      </div>"
      <div className="mb-6">"
</div>)"
        <Button size="sm" variant="ghost" onClick={() => setShowFilters(!showFilters)} className="text-zinc-400 "hover": text-white mb-3">';'
</Button>'
          <FilterclassName="w-4 h-4 mr-2" />';'
</FilterclassName>
        </Button>
        <AnimatePresence>
</AnimatePresence>'
          {showFilters && (<motion.div className="grid grid-cols-2 "md": grid-cols-4 gap-4 p-4 bg-zion-blue/10 rounded-lg border border-zion-blue-light/20" initial = {"})
  { height: 0,"}
  "opacity": 0;"
}} animate = {"}
  { "height": 'auto',''}
  "opacity": 1;"
}} exit = {"}
  { "height": 0,""}
  "opacity": 0;""
}} transition={{ "duration": 0.2 }}>"
</motion>
              <div>
</div>"
                <label className="text-zinc-300 text-sm font-medium">Status</label>"
                <select multiple value={filters.status} onChange={);}
  (e) => {}
</select>"
                  <option value="completed">Completed</option>""
                  <option value="in-progress">In Progress</option>""
                  <option value="upcoming">Upcoming</option>""
                  <option value="milestone">Milestone</option>"
                </select>
              </div>
              <div>
</div>"
                <label className="text-zinc-300 text-sm font-medium">Category</label>"
                <select multiple value={filters.category} onChange={}
  (e) => {}
</select>"
                  <option value="AI & ML">AI & ML</option>""
                  <option value="Cybersecurity">Cybersecurity</option>""
                  <option value="Cloud">Cloud</option>""
                  <option value="Development">Development</option>""
                  <option value="Research">Research</option>""
                  <option value="Team">Team</option>""
                  <option value="Launch">Launch</option>"
                </select>
              </div>
              <div>
</div>"
                <label className="text-zinc-300 text-sm font-medium">Priority</label>"
                <select multiple value={filters.priority} onChange={}
  (e) => {}
</select>"
                  <option value="critical">Critical</option>""
                  <option value="high">High</option>""
                  <option value="medium">Medium</option>""
                  <option value="low">Low</option>"
                </select>
              </div>
              <div>
</div>"
                <label className="text-zinc-300 text-sm font-medium">Progress</label>""
                <div className="mt-1">"
</div>"
                  <input type="range" min="0" max="100" value={filters.progress || 0} onChange={"}
  (e) => setFilters(prev => ({ ...prev,})
</input>"
                  <div className="text-xs text-zinc-400 mt-1">"
</div>
                  </div>
                </div>
              </div>);
            </motion.div>)};
        </AnimatePresence>
      </div>"
      {showProgress && (<div className="mb-6">"})
</div>"
          <divclassName="flex items-center justify-between text-sm text-zinc-300 mb-2">"
</divclassName>"
            <span>Overall Progress</span>';')'
            <span>{Math.round((filteredEvents.filter(e => e.status === 'completed').length / filteredEvents.length) * 100)}%</span>'
          </div>'
          <divclassName="w-full bg-zinc-700 rounded-full h-2">';'
</divclassName>'
            <motion.div className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full" initial={{ "width": 0 }} whileInView={{ "width": `${(filteredEvents.filter(e => e.status === 'completed').length / filteredEvents.length) * 100}%` }} transition = {``}
</motion>
          </div>
            </div>'
      {viewMode === 'timeline' && (<div className="relative">"})
</div>"
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zion-cyan via-zion-blue to-zion-purple" />"
</div>"
          <div className="space-y-6">"
</div>"
                return (<motion.div key={event.id} className={`relative flex items-start gap-6 group ${isCurrent ? 'scale-105' : "}`} initial = {""`})
  { "opacity": 0,""}
  "x": -50;"
}} whileInView = {"}
  { "opacity": 1,""}
  "x": 0;"
}} transition = {"}
  { "duration": 0.6,""}
  "delay": index * 0.1;""
}} whileHover={{ "scale": 1.02 }}>"
</motion>"
                  <divclassName="relative z-10">"
</divclassName>"
                    <motion.div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isCurrent';';''`}
                        ? 'border-zion-cyan bg-zion-cyan/20 scale-110'''
                        : 'border-zion-blue-light/30'}`} animate = {``}
  isCurrent ? { scale[1, 1.1,;];}
  1];
} : {}} transition = {'}
  { "duration": 2,""}
  "repeat": Infinity;"
}}>
</motion>
                      <statusInfo .icon className={`w-8 h-8 ${statusInfo.color}`} />
</statusInfo>
                    </motion.div>
                    ';'
                    {/* Progress Ring for in-progress events */}'
                    {event.status === 'in-progress' && (<svg className="absolute inset-0 w-16 h-16 transform -rotate-90">"})
</svg>"
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-zion-cyan/20" />"
</circle>)"
                        <motion .circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-zion-cyan" strokeDasharray={2 * Math.PI * 28} strokeDashoffset={2 * Math.PI * 28 * (1 - event.metadata.progress / 100)} initial={{ "strokeDashoffset": 2 * Math.PI * 28 }} animate={{ "strokeDashoffset": 2 * Math.PI * 28 * (1 - event.metadata.progress / 100) }} transition = {""}
  { "duration": 1,""}
  "ease": "easeOut""
}} />
</motion>
                      </svg>)};
                  </div>"
                  <motion.div className={`flex-1 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${isCurrent';';''`}
                        ? 'border-zion-cyan/50 bg-zion-cyan/10'''
                        : 'border-zion-blue-light/30 "hover": border-zion-blue-light/50 hover:bg-zion-blue/10'}`} onClick={() => handleEventClick(event)}>
</motion>'
                    <div className="flex items-start justify-between mb-3">"
</div>"
                      <div className="flex-1">"
</div>"
                        <div className="flex items-center gap-3 mb-2">"
</div>"
                          <h4 className="text-white font-semibold group-"hover": text-zion-cyan transition-colors duration-200">"
</h4>
                          </h4>"
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(event.priority)}`}>
</Badge>
                          </Badge>"
                          {event.metadata.verified && (<Badge variant="outline" className="text-xs border-green-500/30 text-green-400">"})
</Badge>);
                            </Badge>)};
                        </div>"
                        <p className="text-zinc-300 text-sm mb-3 line-clamp-2">"
</p>
                        </p>"
                        <div className="flex items-center gap-4 text-xs text-zinc-400">"
</div>"
                          <span className="flex items-center gap-1">"
</span>"
                            <Calendar className="w-3 h-3" />"
</Calendar>
                          </span>"
                          <span className="flex items-center gap-1">"
</span>"
                            <Clock className="w-3 h-3" />"
</Clock>
                          </span>"
                          <span className="flex items-center gap-1">"
</span>"
                            <CategoryIcon className="w-3 h-3" />"
</CategoryIcon>
                          </span>"
                          {event.participants.length > 0 && (<span className="flex items-center gap-1">"})
</span>"
                              <Users className="w-3 h-3" />"
</Users>);
                            </span>)};
                        </div>
                      </div>"
                      <div className="ml-4">"
</div>
                        <select value={event.status} onChange={(e) => handleStatusChange(event.id,})
</select>"
                          <option value="upcoming">Upcoming</option>""
                          <option value="in-progress">In Progress</option>""
                          <option value="completed">Completed</option>""
                          <option value="milestone">Milestone</option>"
                        </select>
                      </div>
                    </div>"
                    {event.tags.length > 0 && (<div className="flex flex-wrap gap-2 mt-3">"})
</div>)"
                        {event.tags.map((tag, tagIndex) => (<Badge key={tagIndex} variant="outline" className="text-xs border-zion-blue-light/30 text-zinc-400 "hover": text-white">")
</Badge>);
                          </Badge>))};
                          </div>"
                    {event.actions && event.actions.length > 0 && (<divclassName="flex items-center gap-2 mt-4 pt-3 border-t border-zion-blue-light/20">';'})
</divclassName>)'
                        {event.actions.map((action, actionIndex) => (<Button key={actionIndex} size="sm" variant={action.variant || 'outline'} onClick={(e) => {'}
</Button>'
                            <action .icon className="w-3 h-3 mr-1" />"
</action>
                          </Button>))};
                          </div>
                  </motion.div>
                </motion.div>)})};
          </div>
            </div>"
      {viewMode === 'list' && (<div className="space-y-3">"})
</div>)"
          {filteredEvents.map((event, index) => (<motion.div key={event.id} className="p-4 rounded-lg border border-zion-blue-light/30 "hover": border-zion-blue-light/50 hover:bg-zion-blue/10 transition-all duration-200 cursor-pointer" initial = {"})
  { opacity: 0,"}
  "y": 20;"
}} whileInView = {"}
  { "opacity": 1,""}
  "y": 0;"
}} transition = {"}
  { "duration": 0.4,""}
  "delay": index * 0.05;");
}} onClick={() => handleEventClick(event)}>
</motion>"
              <divclassName="flex items-center justify-between">"
</divclassName>"
                <divclassName="flex items-center gap-4">';'
</divclassName>'
                  <div className={`w-3 h-3 rounded-full ${event.status === 'completed' ? 'bg-green-400' :';';''`}
                    event.status === 'in-progress' ? 'bg-yellow-400' :';';''
                        event.status === 'milestone' ? 'bg-purple-400' : 'bg-zinc-400'}`} />
</div>
                  <div>
</div>'
                    <h4 className="text-white font-medium">{event.title}</h4>""
                    <p className="text-zinc-400 text-sm">{event.date}</p>"
                  </div>
                </div>"
                <div className="flex items-center gap-3">"
</div>"
                  <Badge variant="outline" className="text-xs">"
</Badge>
                  </Badge>"
                  <Badge variant="outline" className={`text-xs ${getPriorityColor(event.priority)}`}>
</Badge>
                  </Badge>"
                  <ArrowRight className="w-4 h-4 text-zinc-400" />"
</ArrowRight>
                </div>
              </div>
            </motion.div>))};
            </div>"
      {viewMode === 'kanban' && (<divclassName="grid grid-cols-4 gap-4">';'})
</divclassName>)'
          {['upcoming', 'in-progress', 'completed', 'milestone'].map((status) => (<divkey={status} className="space-y-3">")
</divkey>"
              <h4className="text-zinc-300 font-medium text-center capitalize">';'
</h4className>
              </h4>'
              <div className="space-y-2">"
</div>)"
                    .map((event, index) => (<motion.div key={event.id} className="p-3 rounded-lg border border-zion-blue-light/30 bg-zion-blue/20 cursor-pointer "hover": border-zion-blue-light/50 transition-all duration-200" initial = {"})
  { opacity: 0,"}
  "scale": 0.9;"
}} whileInView = {"}
  { "opacity": 1,""}
  "scale": 1;"
}} transition = {"}
  { "duration": 0.3,""}
  "delay": index * 0.1;");
}} onClick={() => handleEventClick(event)}>
</motion>"
                      <h5 className="text-white font-medium text-sm mb-1">{event.title}</h5>""
                      <p className="text-zinc-400 text-xs line-clamp-2">{event.description}</p>""
                      <div className="flex items-center justify-between mt-2">"
</div>"
                        <Badge variant="outline" className="text-xs">"
</Badge>
                        </Badge>"
                        <span className="text-zinc-500 text-xs">{event.date}</span>"
                      </div>
                    </motion.div>))};
              </div>
            </div>))};
            </div>
      <AnimatePresence>
</AnimatePresence>"
        {selectedEvent && (<motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ "opacity": 0 }} animate={{ "opacity": 1 }} exit={{ "opacity": 0 }}>")
</motion>)"
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}/>"
</div>"
            <motion.div className="relative bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" initial = {""}
  { "scale": 0.9,""}
  "opacity": 0;"
}} animate = {"}
  { "scale": 1,""}
  "opacity": 1;"
}} exit = {"}
  { "scale": 0.9,""}
  "opacity": 0;""
}} transition={{ "duration": 0.2 }}>"
</motion>"
              <div className="flex items-center justify-between mb-4">"
</div>"
                <h3 className="text-xl font-semibold text-white">{selectedEvent.title}</h3>""
                <Button size="sm" variant="ghost" onClick={() => setSelectedEvent(null)} className="text-zinc-400 "hover": text-white">"
</Button>"
                  <X className="w-4 h-4" />"
</X>
                </Button>
              </div>"
              <div className="space-y-4">"
</div>"
                <p className="text-zinc-300">{selectedEvent.description}</p>""
                <div className="grid grid-cols-2 gap-4 text-sm">"
</div>
                  <div>
</div>"
                    <span className="text-zinc-400">"Date": </span>""
                    <span className="text-white ml-2">{selectedEvent.date}</span>"
                  </div>
                  <div>
</div>"
                    <span className="text-zinc-400">"Duration": </span>""
                    <span className="text-white ml-2">{selectedEvent.duration}</span>"
                  </div>
                  <div>
</div>"
                    <span className="text-zinc-400">"Category": </span>""
                    <span className="text-white ml-2">{selectedEvent.category}</span>"
                  </div>
                  <div>
</div>"
                    <span className="text-zinc-400">"Priority": </span>""
                    <span className="text-white ml-2 capitalize">{selectedEvent.priority}</span>"
                  </div>
                </div>
                {selectedEvent.participants.length > 0 && (<div>})
</div>"
                    <span className="text-zinc-400 text-sm">"Participants": </span>""
                    <div className="flex flex-wrap gap-2 mt-2">"
</div>)"
                      {selectedEvent.participants.map((participant, index) => (<Badge key={index} variant="outline" className="text-xs">")
</Badge>);
                        </Badge>))};
                    </div>
                      </div>
                {selectedEvent.metadata.dependencies.length > 0 && (<div>})
</div>"
                    <span className="text-zinc-400 text-sm">"Dependencies": </span>""
                    <div className="flex flex-wrap gap-2 mt-2">"
</div>)"
                      {selectedEvent.metadata.dependencies.map((dependency, index) => (<Badge key={index} variant="outline" className="text-xs border-orange-500/30 text-orange-400">")
</Badge>);
                        </Badge>))};
                    </div>
                      </div>
              </div>
            </motion.div>
          </motion.div>)};
      </AnimatePresence>
        </div>
</motion>
</div>
</motion>
</motion>"
</div>;';';''
import React,{useState,useRef,useEffect,useCallback} from 'react'; import { motion, AnimatePresence, useScroll, Calendar, Clock, CheckCircle, Circle, ArrowRight, Play, Pause, RotateCcw, ZoomIn, ZoomOut, Share2, Download, Star, Award, Users, TrendingUp, Zap, Shield, Globe, Rocket, Filter, X } from 'lucide-react'; import { Button, Badge } from 'lucide-react'; export function InteractiveTimeline($1) { const [currentEventIndex,setCurrentEventIndex] = useState(0); const [isPlaying,setIsPlaying] = useState(autoPlay); const [playbackSpeed,setPlaybackSpeed] = useState(1); const [selectedEvent,setSelectedEvent] = useState(null); const [showFilters,setShowFilters] = useState(false); const [filters,setFilters] = useState({ status[],; category[],; priority[],; progress: 0'}
}); const [viewMode,setViewMode] = useState('timeline'); const [zoomLevel,setZoomLevel] = useState(1); const timelineRef = useRef(null); const {scrollYProgress: _scrollYProgress} = useScroll({target: timelineRef,offset["start end","end start"]}
}); const filteredEvents = events.filter(event => {const matchesPriority = filters.priority.length === 0 || filters.priority.includes(event.priority); return matchesStatus && matchesCategory && matchesPriority}
}); useEffect(() => { if (!isPlaying || filteredEvents.length === 0) return; const interval = setInterval(() => { setCurrentEventIndex(prev => { const next = (prev + 1) % filteredEvents.length; if (next === 0) { setIsPlaying(false)} return next})},3000 / playbackSpeed); return () => clearInterval(interval)},[isPlaying,filteredEvents.length,playbackSpeed]); const handleEventClick = useCallback((event) => {setSelectedEvent(event); onEventClick?.(event)},[onEventClick]); const handleStatusChange = useCallback((eventId,newStatus) => {onStatusChange?.(eventId,newStatus)};,[onStatusChange]); const getStatusIcon = (props) => { switch (status) { case 'completed': return { icon: CheckCircle,color: 'text-green-400',bgColor: 'bg-green-400/20' };; case 'in-progress':'; return {icon: Clock,color: 'text-yellow-400',bgColor: 'bg-yellow-400/20'}; case 'upcoming':'; return {icon: Circle,color: 'text-zinc-400',bgColor: 'bg-zinc-400/20'}; case 'milestone':'; return {icon: Star,color: 'text-purple-400',bgColor: 'bg-purple-400/20'}; default:'; return {icon: Circle,color: 'text-zinc-400',bgColor: 'bg-zinc-400/20'}} }; const getPriorityColor = (props) => { switch (priority) { case 'critical': return 'border-red-500/50 bg-red-500/10'; case 'high':'; return 'border-orange-500/50 bg-orange-500/10'; case 'medium':'; return 'border-yellow-500/50 bg-yellow-500/10'; case 'low':'; return 'border-green-500/50 bg-green-500/10'; default:'; return 'border-zinc-500/50 bg-zinc-500/10'} }; const getCategoryIcon = (props) => { const iconMap = { 'AI & ML': Zap,'Cybersecurity': Shield,'Cloud': Globe,'Development': Rocket,'Research': TrendingUp,'Team': Users,'Launch': Award };; return iconMap[category] || Calendar}; const togglePlayback = useCallback(() => {setIsPlaying(!isPlaying)};,[isPlaying]); const resetTimeline = useCallback(() => {setCurrentEventIndex(0); setIsPlaying(false)},[]); const exportTimeline = useCallback(() => { const dataBlob = new Blob([dataStr],{ type: 'application/json' };); const url = URL.createObjectURL(dataBlob); const link = document.createElement('a'); link.href = url;';'; link.download = `timeline-${new Date().toISOString().split('T')[0]}.json`; link.click(); URL.revokeObjectURL(url)},[filteredEvents]); const shareTimeline = useCallback(() => { if (navigator.share) { navigator.share({ title: 'Project Timeline',text: 'Check out our project timeline',url: window.location.href })} else {navigator.clipboard.writeText(window.location.href)} };,[]); if (!enabled || filteredEvents.length === 0) return null; return ( <div className="min-h-screen bg-white"> {} <div className="flex items-center justify-between mb-6"> <div> <h3 className="text-xl font-semibold text-white mb-2">Interactive Timeline</h3> <p className="text-zinc-300 text-sm">Track project milestones and progress</p> </div> <div className="flex items-center gap-2"> {} <divclassName="flex bg-zion-blue/20 rounded-lg p-1"> {['timeline','list','kanban'].map((mode) => (<button key={mode} onClick={() => setViewMode(mode)} className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${viewMode === mode';'; ? 'bg-zion-cyan text-zion-blue-dark' : 'text-zinc-400 hover:text-white'}`}> {mode.charAt(0).toUpperCase() + mode.slice(1)} </button>))} </div> {} <div className="flex items-center gap-2 bg-zion-blue/20 rounded-lg p-1"> <Button size="sm" variant="ghost" onClick={togglePlayback} className="text-zinc-400 hover:text-white p-2"> {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />} </Button> <Button size="sm" variant="ghost" onClick={resetTimeline} className="text-zinc-400 hover:text-white p-2"> <RotateCcw className="w-4 h-4" /> </Button> <select value={playbackSpeed} onChange={(e) => setPlaybackSpeed(Number(e.target.value))} className="bg-transparent text-zinc-300 text-xs border-none focus:outline-none"> <option value={0.5}>0.5x</option> <option value={1}>1x</option> <option value={2}>2x</option> <option value={3}>3x</option> </select> </div> {} <div className="flex items-center gap-1 bg-zion-blue/20 rounded-lg p-1"> <Button size="sm" variant="ghost" onClick={() => setZoomLevel(prev => Math.max(0.5,prev - 0.1))} className="text-zinc-400 hover:text-white p-2"> <ZoomOut className="w-4 h-4" /> </Button> <span className="text-zinc-300 text-xs px-2">{Math.round(zoomLevel * 100)}%</span> <Button size="sm" variant="ghost" onClick={() => setZoomLevel(prev => Math.min(2,prev + 0.1))} className="text-zinc-400 hover:text-white p-2"> <ZoomIn className="w-4 h-4" /> </Button> </div> {} <Button size="sm" variant="outline" onClick={shareTimeline} className="border-zion-blue-light/30 text-zinc-300 hover:text-white"> <Share2 className="w-4 h-4 mr-2" /> Share </Button> <Button size="sm" variant="outline" onClick={exportTimeline} className="border-zion-blue-light/30 text-zinc-300 hover:text-white"> <Download className="w-4 h-4 mr-2" /> Export </Button> </div> </div> {} <div className="mb-6"> <Button size="sm" variant="ghost" onClick={() => setShowFilters(!showFilters)} className="text-zinc-400 hover:text-white mb-3">'; <FilterclassName="w-4 h-4 mr-2" />'; {showFilters ? 'Hide' : 'Show'} Filters </Button> <AnimatePresence> {showFilters && (<motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-zion-blue/10 rounded-lg border border-zion-blue-light/20" initial = { { height: 0,opacity: 0 }} animate = { { height: 'auto',opacity: 1 }} exit = { { height: 0,opacity: 0 }} transition={{ duration: 0.2 }}> <div> <label className="text-zinc-300 text-sm font-medium">Status</label> <select multiple value={filters.status} onChange={ (e) => { const selected = Array.from(e.target.selectedOptions,option => option.value); setFilters(prev => ({ ...prev,status: selected }))}} className="mt-1 w-full px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none"> <option value="completed">Completed</option> <option value="in-progress">In Progress</option> <option value="upcoming">Upcoming</option> <option value="milestone">Milestone</option> </select> </div> <div> <label className="text-zinc-300 text-sm font-medium">Category</label> <select multiple value={filters.category} onChange={ (e) => { const selected = Array.from(e.target.selectedOptions,option => option.value); setFilters(prev => ({ ...prev,category: selected }))}} className="mt-1 w-full px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none"> <option value="AI & ML">AI & ML</option> <option value="Cybersecurity">Cybersecurity</option> <option value="Cloud">Cloud</option> <option value="Development">Development</option> <option value="Research">Research</option> <option value="Team">Team</option> <option value="Launch">Launch</option> </select> </div> <div> <label className="text-zinc-300 text-sm font-medium">Priority</label> <select multiple value={filters.priority} onChange={ (e) => { const selected = Array.from(e.target.selectedOptions,option => option.value); setFilters(prev => ({ ...prev,priority: selected }))}} className="mt-1 w-full px-3 py-2 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-zinc-300 text-sm focus:border-zion-cyan focus:outline-none"> <option value="critical">Critical</option> <option value="high">High</option> <option value="medium">Medium</option> <option value="low">Low</option> </select> </div> <div> <label className="text-zinc-300 text-sm font-medium">Progress</label> <div className="mt-1"> <input type="range" min="0" max="100" value={filters.progress || 0} onChange={ (e) => setFilters(prev => ({ ...prev,progress: Number(e.target.value) }))} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"/> <div className="text-xs text-zinc-400 mt-1"> {filters.progress || 0}% Complete </div> </div> </div> </motion.div>)} </AnimatePresence> </div> {} {showProgress && (<div className="mb-6"> <divclassName="flex items-center justify-between text-sm text-zinc-300 mb-2"> <span>Overall Progress</span>'; <span>{Math.round((filteredEvents.filter(e => e.status === 'completed').length / filteredEvents.length) * 100)}%</span> </div> <divclassName="w-full bg-zinc-700 rounded-full h-2">'; <motion.div className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${(filteredEvents.filter(e => e.status === 'completed').length / filteredEvents.length) * 100}%` }} transition = { { duration: 1,ease: "easeOut" }}/> </div> </div> )} {} {viewMode === 'timeline' && (<div className="relative"> {} <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zion-cyan via-zion-blue to-zion-purple" /> {} <div className="space-y-6"> {filteredEvents.map((event,index) => { const statusInfo = getStatusIcon(event.status); const CategoryIcon = getCategoryIcon(event.category); const isCurrent = index === currentEventIndex; return (<motion.div key={event.id} className={`relative flex items-start gap-6 group ${isCurrent ? 'scale-105' : "}`} initial = { { opacity: 0,x: -50 }} whileInView = { { opacity: 1,x: 0 }} transition = { { duration: 0.6,delay: index * 0.1 }} whileHover={{ scale: 1.02 }}> {} <divclassName="relative z-10"> <motion.div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isCurrent';'; ? 'border-zion-cyan bg-zion-cyan/20 scale-110' : 'border-zion-blue-light/30'}`} animate = { isCurrent ? { scale[1,1.1,; 1] } : {}} transition = { { duration: 2,repeat: Infinity }}> <statusInfo .icon className={`w-8 h-8 ${statusInfo.color}`} /> </motion.div> '; {} {event.status === 'in-progress' && (<svg className="absolute inset-0 w-16 h-16 transform -rotate-90"> <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-zion-cyan/20" /> <motion .circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-zion-cyan" strokeDasharray={2 * Math.PI * 28} strokeDashoffset={2 * Math.PI * 28 * (1 - event.metadata.progress / 100)} initial={{ strokeDashoffset: 2 * Math.PI * 28 }} animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - event.metadata.progress / 100) }} transition = { { duration: 1,ease: "easeOut" }} /> </svg>)} </div> {} <motion.div className={`flex-1 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${isCurrent';'; ? 'border-zion-cyan/50 bg-zion-cyan/10' : 'border-zion-blue-light/30 hover:border-zion-blue-light/50 hover:bg-zion-blue/10'}`} onClick={() => handleEventClick(event)}> <div className="flex items-start justify-between mb-3"> <div className="flex-1"> <div className="flex items-center gap-3 mb-2"> <h4 className="text-white font-semibold group-hover:text-zion-cyan transition-colors duration-200"> {event.title} </h4> <Badge variant="outline" className={`text-xs ${getPriorityColor(event.priority)}`}> {event.priority} </Badge> {event.metadata.verified && (<Badge variant="outline" className="text-xs border-green-500/30 text-green-400"> Verified </Badge>)} </div> <p className="text-zinc-300 text-sm mb-3 line-clamp-2"> {event.description} </p> <div className="flex items-center gap-4 text-xs text-zinc-400"> <span className="flex items-center gap-1"> <Calendar className="w-3 h-3" /> {event.date} </span> <span className="flex items-center gap-1"> <Clock className="w-3 h-3" /> {event.duration} </span> <span className="flex items-center gap-1"> <CategoryIcon className="w-3 h-3" /> {event.category} </span> {event.participants.length > 0 && (<span className="flex items-center gap-1"> <Users className="w-3 h-3" /> {event.participants.length} participants </span>)} </div> </div> {} <div className="ml-4"> <select value={event.status} onChange={(e) => handleStatusChange(event.id,e.target.value)} className="px-2 py-1 bg-zion-blue/20 border border-zion-blue-light/30 rounded text-xs text-zinc-300 focus:border-zion-cyan focus:outline-none" onClick={(e) => e.stopPropagation()}> <option value="upcoming">Upcoming</option> <option value="in-progress">In Progress</option> <option value="completed">Completed</option> <option value="milestone">Milestone</option> </select> </div> </div> {} {event.tags.length > 0 && (<div className="flex flex-wrap gap-2 mt-3"> {event.tags.map((tag,tagIndex) => (<Badge key={tagIndex} variant="outline" className="text-xs border-zion-blue-light/30 text-zinc-400 hover:text-white"> {tag} </Badge>))} </div> )} {} {event.actions && event.actions.length > 0 && (<divclassName="flex items-center gap-2 mt-4 pt-3 border-t border-zion-blue-light/20">'; {event.actions.map((action,actionIndex) => (<Button key={actionIndex} size="sm" variant={action.variant || 'outline'} onClick={(e) => { e.stopPropagation(); action.action()}} className="text-xs"> <action .icon className="w-3 h-3 mr-1" /> {action.label} </Button>))} </div> )} </motion.div> </motion.div>)})} </div> </div> )} {} {viewMode === 'list' && (<div className="space-y-3"> {filteredEvents.map((event,index) => (<motion.div key={event.id} className="p-4 rounded-lg border border-zion-blue-light/30 hover:border-zion-blue-light/50 hover:bg-zion-blue/10 transition-all duration-200 cursor-pointer" initial = { { opacity: 0,y: 20 }} whileInView = { { opacity: 1,y: 0 }} transition = { { duration: 0.4,delay: index * 0.05 }} onClick={() => handleEventClick(event)}> <divclassName="flex items-center justify-between"> <divclassName="flex items-center gap-4">'; <div className={`w-3 h-3 rounded-full ${event.status === 'completed' ? 'bg-green-400' :';'; event.status === 'in-progress' ? 'bg-yellow-400' :';'; event.status === 'milestone' ? 'bg-purple-400' : 'bg-zinc-400'}`} /> <div> <h4 className="text-white font-medium">{event.title}</h4> <p className="text-zinc-400 text-sm">{event.date}</p> </div> </div> <div className="flex items-center gap-3"> <Badge variant="outline" className="text-xs"> {event.category} </Badge> <Badge variant="outline" className={`text-xs ${getPriorityColor(event.priority)}`}> {event.priority} </Badge> <ArrowRight className="w-4 h-4 text-zinc-400" /> </div> </div> </motion.div>))} </div> )} {} {viewMode === 'kanban' && (<divclassName="grid grid-cols-4 gap-4">'; {['upcoming','in-progress','completed','milestone'].map((status) => (<divkey={status} className="space-y-3"> <h4className="text-zinc-300 font-medium text-center capitalize">'; {status.replace('-',' ')} ({filteredEvents.filter(e => e.status === status).length}) </h4> <div className="space-y-2"> {filteredEvents .filter(event => event.status === status) .map((event,index) => (<motion.div key={event.id} className="p-3 rounded-lg border border-zion-blue-light/30 bg-zion-blue/20 cursor-pointer hover:border-zion-blue-light/50 transition-all duration-200" initial = { { opacity: 0,scale: 0.9 }} whileInView = { { opacity: 1,scale: 1 }} transition = { { duration: 0.3,delay: index * 0.1 }} onClick={() => handleEventClick(event)}> <h5 className="text-white font-medium text-sm mb-1">{event.title}</h5> <p className="text-zinc-400 text-xs line-clamp-2">{event.description}</p> <div className="flex items-center justify-between mt-2"> <Badge variant="outline" className="text-xs"> {event.category} </Badge> <span className="text-zinc-500 text-xs">{event.date}</span> </div> </motion.div>))} </div> </div>))} </div> )} {} <AnimatePresence> {selectedEvent && (<motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}/> <motion.div className="relative bg-zion-blue-dark/95 backdrop-blur-md border border-zion-blue-light/30 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" initial = { { scale: 0.9,opacity: 0 }} animate = { { scale: 1,opacity: 1 }} exit = { { scale: 0.9,opacity: 0 }} transition={{ duration: 0.2 }}> <div className="flex items-center justify-between mb-4"> <h3 className="text-xl font-semibold text-white">{selectedEvent.title}</h3> <Button size="sm" variant="ghost" onClick={() => setSelectedEvent(null)} className="text-zinc-400 hover:text-white"> <X className="w-4 h-4" /> </Button> </div> <div className="space-y-4"> <p className="text-zinc-300">{selectedEvent.description}</p> <div className="grid grid-cols-2 gap-4 text-sm"> <div> <span className="text-zinc-400">Date:</span> <span className="text-white ml-2">{selectedEvent.date}</span> </div> <div> <span className="text-zinc-400">Duration:</span> <span className="text-white ml-2">{selectedEvent.duration}</span> </div> <div> <span className="text-zinc-400">Category:</span> <span className="text-white ml-2">{selectedEvent.category}</span> </div> <div> <span className="text-zinc-400">Priority:</span> <span className="text-white ml-2 capitalize">{selectedEvent.priority}</span> </div> </div> {selectedEvent.participants.length > 0 && (<div> <span className="text-zinc-400 text-sm">Participants:</span> <div className="flex flex-wrap gap-2 mt-2"> {selectedEvent.participants.map((participant,index) => (<Badge key={index} variant="outline" className="text-xs"> {participant} </Badge>))} </div> </div> )} {selectedEvent.metadata.dependencies.length > 0 && (<div> <span className="text-zinc-400 text-sm">Dependencies:</span> <div className="flex flex-wrap gap-2 mt-2"> {selectedEvent.metadata.dependencies.map((dependency,index) => (<Badge key={index} variant="outline" className="text-xs border-orange-500/30 text-orange-400"> {dependency} </Badge>))} </div> </div> )} </div> </motion.div> </motion.div>)} </AnimatePresence> </div> )} </motion> </div> </motion> </motion> </div>;';';''