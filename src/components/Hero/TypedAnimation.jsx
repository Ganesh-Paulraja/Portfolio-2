import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TypedText({ texts, typingSpeed = 150, delay = 5000 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isDeleting) {
      if (displayedText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, typingSpeed / 2);
        return () => clearTimeout(timeoutId);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex < texts[currentTextIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(prev => prev + texts[currentTextIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isDeleting, currentIndex, displayedText, currentTextIndex, texts, typingSpeed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
  );
};