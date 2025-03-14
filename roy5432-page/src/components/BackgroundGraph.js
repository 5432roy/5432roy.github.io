import React, { useRef, useEffect } from 'react';

const BackgroundGraph = () => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const nodeRadius = 4;

  // Helper function to create a node with random velocity
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

    // Ensure the .home-section in your CSS is position: relative
    // so the canvas can be absolutely positioned inside it.
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';

    // Dynamically set the canvas size to match its parent (.home-section)
    const setCanvasSize = () => {
      const parent = canvas.parentNode; // The parent is .home-section
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // Initial sizing
    setCanvasSize();

    // Initialize some nodes
    nodesRef.current = [];
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodesRef.current.push(createNode(x, y));
    }

    let animationFrameId;
    const update = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move each node
      for (let i = nodesRef.current.length - 1; i >= 0; i--) {
        const node = nodesRef.current[i];
        node.x += node.vx;
        node.y += node.vy;

        // If node goes out of bounds, reflect or regenerate it
        if (
          node.x < 0 ||
          node.x > canvas.width ||
          node.y < 0 ||
          node.y > canvas.height
        ) {
          // If there are already many nodes, or randomly, just reflect velocity
          if (nodesRef.current.length > 40 || Math.random() < 0.5) {
            if (node.x < 0 || node.x > canvas.width) {
              node.x = node.x < 0 ? 0 : canvas.width;
              node.vx = -node.vx;
            }
            if (node.y < 0 || node.y > canvas.height) {
              node.y = node.y < 0 ? 0 : canvas.height;
              node.vy = -node.vy;
            }
          } else {
            // Otherwise remove and create a new node
            nodesRef.current.splice(i, 1);
            const newX = Math.random() * canvas.width;
            const newY = Math.random() * canvas.height;
            nodesRef.current.push(createNode(newX, newY));
          }
        }
      }

      // Draw connecting lines to nearest neighbors
      nodesRef.current.forEach((node) => {
        const nearest = nodesRef.current
          .filter((n) => n !== node)
          .map((n) => ({
            node: n,
            dist: Math.hypot(n.x - node.x, n.y - node.y),
          }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 3);

        nearest.forEach((item) => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(item.node.x, item.node.y);
          ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
          ctx.stroke();
        });
      });

      // Draw each node
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#123456';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(update);
    };
    update();

    // Add new nodes on click
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nodesRef.current.push(createNode(x, y));
    };
    canvas.addEventListener('click', handleClick);

    // Resize listener
    window.addEventListener('resize', setCanvasSize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" />;
};

export default BackgroundGraph;
