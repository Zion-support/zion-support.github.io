import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;}
}
}

const TypingAnimation: React.FC<TypingAnimationProps /> = ({ text,speed = 100,delay = 0,className = '',showCursor = true,onComplete   }) => {


const [displayedText, setDisplayedText] =;
  useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete]  = useState(false)useEffect(() => {}
if (currentIndex < text.length) ;}
  const timeout = setTimeout(() => {setDisplayedText(prev => prev + text[currentIndex])setCurrentIndex(prev => prev + 1)}, speed)return () => clearTimeout(timeout)} else if (!isComplete) {setIsComplete(true)onComplete?.()}
  }, [currentIndex, text, speed, onComplete, isComplete];
  return (<span className={className} />;
      {displayedText}
      {showCursor && <span className='animate-pulse' />|</span>}
    </span>;
  )}

export default TypingAnimation;'