import React, { useState, useEffect, useRef } from 'react';

const HoverBlock = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      // If the click is outside the hover block, start the timer
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (visible && !timerRef.current) {
          timerRef.current = setTimeout(() => {
            setVisible(false);
          }, 500); // .5 seconds delay
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [visible]);

  const hoverBlockClass = `hover-block ${isHovered ? 'hovered' : ''} ${!visible ? 'faded' : ''}`;

  return (
    <div
      ref={containerRef}
      className={hoverBlockClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>Click the background to see our reactive effect!</p>
    </div>
  );
};

export default HoverBlock;
