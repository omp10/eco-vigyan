"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Client component wrapper that forces a fade-in (left-to-right) animation.
 */
export default function InViewAnimationComponent({ children, className }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  // Initial state: invisible and translated 3rem (12 units) to the left
  const initialClass = 'opacity-0 -translate-x-12';

  // Final state: fully visible and at its normal position
  const finalClass = 'opacity-100 translate-x-0';

  return (
    <div 
      ref={ref} 
      // Base classes for transition properties (1.2 seconds duration)
      className={`${className} transition-opacity transition-transform duration-[1200ms] ease-out 
                  ${inView ? finalClass : initialClass}`}
    >
      {children}
    </div>
  );
};