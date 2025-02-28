import React, { useRef, useEffect } from 'react';

const BackgroundGraph = () => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const nodeRadius = 4;

  const createNode = (x, y) => ({
    x,
    y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set a fixed height (or a percentage of the viewport)
    const setCanvasSize = () => {
      const mainSection = document.querySelector('main');
      if (!mainSection) return;
      const rect = mainSection.getBoundingClientRect();
      // Use window.scrollY/X to convert viewport coordinates to page coordinates
      canvas.style.position = 'absolute';
      canvas.style.top = `${rect.top + window.scrollY}px`;
      canvas.width = document.documentElement.clientWidth;;
      canvas.height = rect.height;
    };
    setCanvasSize();

    // Initialize nodes
    nodesRef.current = [];
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodesRef.current.push(createNode(x, y));
    }

    let animationFrameId;
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Iterate backwards so that removal doesn't affect the loop index.
      for (let i = nodesRef.current.length - 1; i >= 0; i--) {
        const node = nodesRef.current[i];
        node.x += node.vx;
        node.y += node.vy;
    
        // Check if the node is outside the canvas bounds.
        if (
          node.x < 0 ||
          node.x > canvas.width ||
          node.y < 0 ||
          node.y > canvas.height
        ) {
          // Randomly choose behavior: bounce (50%) or remove & replace (50%)
          if (nodesRef.current.length > 40 || Math.random() < 0.5) {
            if (node.x < 0 || node.x > canvas.width) {
              node.x = node.x < 0 ? 0 : canvas.width;
              node.vy = -node.vy;
            }
            if (node.y < 0 || node.y > canvas.height) {
              node.y = node.y < 0 ? 0 : canvas.height;
              node.vy = -node.vy;
            }
          } else {
            // Remove the node and generate a new one.
            nodesRef.current.splice(i, 1);
            const newX = Math.random() * canvas.width;
            const newY = Math.random() * canvas.height;
            nodesRef.current.push(createNode(newX, newY));
            // Continue to the next node.
            continue;
          }
        }
      }
    
      // Draw connecting lines.
      nodesRef.current.forEach(node => {
        const nearest = nodesRef.current
          .filter(n => n !== node)
          .map(n => ({
            node: n,
            dist: Math.hypot(n.x - node.x, n.y - node.y)
          }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 3);
        nearest.forEach(item => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(item.node.x, item.node.y);
          ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
          ctx.stroke();
        });
      });
    
      // Draw the nodes.
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#123456';
        ctx.fill();
      });
    
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    // Allow users to add nodes by clicking
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nodesRef.current.push(createNode(x, y));
    };
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        zIndex: 0,
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default BackgroundGraph;
