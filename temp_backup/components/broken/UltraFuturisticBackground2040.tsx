 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle with glow effect ctx.save ();
ctx.globalAlpha = particle.opacity;
// Glow effect ctx.shadowColor = particle.color;
ctx.shadowBlur = 10;
// Draw connecting lines between nearby particles ctx.strokeStyle = 'rgba (6, 182, 212, 0.1) ';
ctx.lineWidth = 0.5;
}
}// Draw animated grid ctx.strokeStyle = 'rgba (6, 182, 212, 0.05) ';
ctx.lineWidth = 0.5;
ctx.restore () 
});
// Draw energy waves 
}ctx.stroke () 
}animationFrameId = requestAnimationFrame (animate) 
};
animate ();
window.addEventListener ('resize', handleResize);
backgroundImage: ` linear-gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px) `, backgroundSize: '50px 50px', animation: 'gridMove 20s linear infinite' 
}
}/> </div> {
  /* Floating Geometric Elements */ 
}<motion.div /> {
  /* Additional Floating Elements */ 
}<motion.div /> {
  /* Particle Effects */ 
}<motion.div /> </div> {
  /* CSS Animations */ 
}<style jsx> {
  ` @keyframes gridMove {
  0% {
  
}` 
}</style> </div>) 
};
export default UltraFuturisticBackground2040;
