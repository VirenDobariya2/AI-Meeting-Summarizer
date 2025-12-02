import React, { useEffect, useRef } from 'react';

export function GradientMesh() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGradientMesh = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const gradients = [
        {
          x: canvas.width * 0.2 + Math.sin(time) * 100,
          y: canvas.height * 0.3 + Math.cos(time * 0.8) * 100,
          color1: 'rgba(99, 102, 241, 0.3)',
          color2: 'rgba(99, 102, 241, 0)',
          radius: 300,
        },
        {
          x: canvas.width * 0.8 + Math.cos(time * 0.7) * 100,
          y: canvas.height * 0.4 + Math.sin(time * 0.9) * 100,
          color1: 'rgba(139, 92, 246, 0.3)',
          color2: 'rgba(139, 92, 246, 0)',
          radius: 350,
        },
        {
          x: canvas.width * 0.5 + Math.sin(time * 1.2) * 80,
          y: canvas.height * 0.7 + Math.cos(time * 0.6) * 80,
          color1: 'rgba(236, 72, 153, 0.2)',
          color2: 'rgba(236, 72, 153, 0)',
          radius: 280,
        },
      ];

      gradients.forEach((grad) => {
        const gradient = ctx.createRadialGradient(
          grad.x,
          grad.y,
          0,
          grad.x,
          grad.y,
          grad.radius
        );
        gradient.addColorStop(0, grad.color1);
        gradient.addColorStop(1, grad.color2);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(drawGradientMesh);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawGradientMesh();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40 dark:opacity-30"
    />
  );
}
