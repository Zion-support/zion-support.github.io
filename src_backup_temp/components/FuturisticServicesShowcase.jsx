import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ADVANCED_MICRO_SERVICES} from "../data/advancedMicroServices.jsx";
const ServiceCard = ("props": "any) => {;
    const [isHovered", setIsHovered] = useState(false);
    return (<motion.div initial = {;
  { "opacity": "0", "y": "50",;
  "scale": "0.9 ;

"}} animate = {;
  isVisible ? { "opacity": "1", "y": "0",;
  "scale": "1 ;

"} : "{"}} transition = {;
  { "duration": "0.6",;
  "delay": "index * 0.1 ;

"}} className="relative group" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>;
      {/* Animated Background */}      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-"hover": "blur-2xl transition-all duration-500"></div>;
x[0", Math.random() * "100": "- 50]",;
                y[0, Math.random() * 100 - 50]>                opacity[0.6, 0.2, 0.6]}} transition = {}
;
  {}
