 canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
if (ctx) {
  
}
};
// Get color based on particle type const getColorForType = (type: string) => {
  switch (type) {
  case 'quantum': particles.forEach ( (particle, index) => {
  // Update particle life particle.life--;
if (particle.life <= 0) {
  // Update position particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
if (particle.x > canvas.width / (window.devicePixelRatio || 1) ) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
if (particle.y > canvas.height / (window.devicePixelRatio || 1) ) particle.y = 0;
// Calculate opacity based on life // Draw particle based on type drawParticle (ctx, particle, currentOpacity);
// Draw connections with enhanced effects ctx.restore () 
};
// Quantum particle with wave-like effects // Enhanced connection drawing with different effects const drawConnections = (ctx: CanvasRenderingContext2D, particles: unknown[], currentIndex: number, maxDistance: number, opacity: number) => {
  particles.forEach ( (otherParticle, otherIndex) => {
  if (currentIndex !== otherIndex) {
  // Different connection styles based on particle types if (particles[currentIndex].type === otherParticle.type) {
  // Same type - stronger connection ctx.beginPath ();
ctx.moveTo (particles[currentIndex].x, particles[currentIndex].y);
ctx.lineTo (otherParticle.x, otherParticle.y);
ctx.stroke () 
}
}
}) 
};
// Handle window resize window.addEventListener ('resize', handleResize);
initParticles ();
updateParticles ();
{
  /* Animated gradient overlay */ 
}<motion.div backgroundImage: ` linear-gradient (rgba (139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient (90deg, rgba (139, 92, 246, 0.1) 1px, transparent 1px) `, backgroundSize: '50px 50px' 
}
}/> </div> {
  /* Canvas for animated particles */ 
}<canvas /> {
  /* Floating neon orbs */ 
}<motion.div /> </div> </div> {
  /* Render children */ 
}{
  children 
}</>) 
}