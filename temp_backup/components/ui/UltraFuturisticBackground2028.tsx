 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle requestAnimationFrame (animate) 
};
animate ();
// Handle resize window.addEventListener ('resize', handleResize);
/> {
  /* Floating Circles */ 
}<motion.div 
}

