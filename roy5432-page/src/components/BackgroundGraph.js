import React, { useRef, useEffect } from 'react';

const BackgroundGraph = () => {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const nodeRadius = 4;

  const createNode = (x, y) => {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      console.log('Canvas size set to:', canvas.width, canvas.height);
    };
    setCanvasSize();

    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodesRef.current.push(createNode(x, y));
    }

    let animationFrameId;

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Update node positions and remove nodes that exit the canvas
      for (let i = nodesRef.current.length - 1; i >= 0; i--) {
        const node = nodesRef.current[i];
        node.x += node.vx;
        node.y += node.vy;
        if (
          node.x < 0 ||
          node.x > canvas.width ||
          node.y < 0 ||
          node.y > canvas.height
        ) {
          nodesRef.current.splice(i, 1);
        }
      }
    
      while (nodesRef.current.length < 30) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        nodesRef.current.push(createNode(x, y));
      }
    
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
    
      // Draw the nodes
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#123456';
        ctx.fill();
      });
    
      animationFrameId = requestAnimationFrame(update);
    };

    update();

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
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: 'transparent'
      }}
    />
  );
};

export default BackgroundGraph;
