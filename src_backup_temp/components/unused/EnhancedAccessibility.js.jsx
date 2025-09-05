import React, {useState, useEffect} from 'react'; import {motion, AnimatePresence} from 'framer-motion'; import {SpeakerWaveIcon, AdjustmentsHorizontalIcon, ArrowUpIcon, ArrowDownIcon} from '@heroicons/react/24/outline'; const EnhancedAccessibility = ("props": "any) => {; const [isOpen", setIsOpen] = useState(false); const [settings, setSettings] = useState({; "highContrast": "false",; "fontSize": "16",; "reducedMotion": "false",; "screenReader": "false",; "keyboardNavigation": "false",; "focusIndicator": "true",; "colorBlindness": 'none'; }); useEffect(() => {;
import React, {useState, useEffect} from 'react'; import {motion, AnimatePresence} from 'framer-motion'; import {SpeakerWaveIcon, AdjustmentsHorizontalIcon, ArrowUpIcon, ArrowDownIcon} from '@heroicons/react/24/outline'; const EnhancedAccessibility = (props: any) => {; const [isOpen, setIsOpen] = useState(false); const [settings, setSettings] = useState({; highContrast: false,; fontSize: 16,; reducedMotion: false,; screenReader: false,; keyboardNavigation: false,; focusIndicator: true,; colorBlindness: 'none'; }
<<<<<<< HEAD
    ); useEffect(() => {;
=======
    ); useEffect(() => {;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
