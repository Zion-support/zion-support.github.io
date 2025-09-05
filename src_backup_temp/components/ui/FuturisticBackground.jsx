import React,{useEffect,useRef} from &apos;react&apos;; export function FuturisticBackground($1) { const canvasRef = useRef(null); useEffect(() => { const canvas = canvasRef.current; if (!canvas)&apos;; return;&apos;;&apos;; const ctx = canvas.getContext(&apos;2d&apos;); if (!ctx) return; const resizeCanvas = (props) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight};&apos;; resizeCanvas();&apos;;&apos;; window.addEventListener(&apos;resize&apos;,resizeCanvas);&apos;; if (variant === &apos;particles&apos;) { const particles = []; const colors = [ &apos;#00ffff&apos;,&apos;#ff00ff&apos;,&apos;#ffff00&apos;,&apos;#00ff00&apos;,&apos;#ff0080&apos;,&apos;#8000ff&apos;,&apos;#00ff80&apos;,&apos;#ff8000&apos; ];&apos;; const particleCount = intensity === &apos;high&apos; ? 200 : intensity === &apos;medium&apos; ? 100 : 50; for (let i = 0; i < particleCount; i++) { particles.push({ x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 2,vy: (Math.random() - 0.5) * 2,size: Math.random() * 3 + 1,opacity: Math.random() * 0.8 + 0.2,color: colors[Math.floor(Math.random() * colors.length)] })} const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach((particle,index) => { particle.x += particle.vx; particle.y += particle.vy; if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1; if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1; if (particle.x < 0) particle.x = canvas.width; if (particle.x > canvas.width) particle.x = 0; if (particle.y < 0) particle.y = canvas.height; if (particle.y > canvas.height) particle.y = 0; ctx.beginPath(); ctx.arc(particle.x,particle.y,particle.size,0,Math.PI * 2); ctx.fillStyle = particle.color; ctx.globalAlpha = particle.opacity; ctx.fill(); ctx.shadowColor = particle.color; ctx.shadowBlur = 20; ctx.fill(); ctx.shadowBlur = 0; particles.forEach((otherParticle,otherIndex) => { if (index !== otherIndex) { const distance = Math.sqrt(Math.pow(particle.x - otherParticle.x,2) + Math.pow(particle.y - otherParticle.y,2)); if (distance < 150) { ctx.beginPath(); ctx.moveTo(particle.x,particle.y); ctx.lineTo(otherParticle.x,otherParticle.y); ctx.strokeStyle = particle.color; ctx.globalAlpha = (150 - distance) / 150 * 0.3; ctx.lineWidth = 1; ctx.stroke()} } })}); requestAnimationFrame(animate)}; animate()} if (variant === &apos;grid&apos;) { const gridSize = intensity === &apos;high&apos; ? 20 : intensity === &apos;medium&apos; ? 30 : 40; const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); ctx.strokeStyle = &apos;#00ffff ctx.lineWidth = 1; ctx.globalAlpha = 0.3; for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke()} for (let y = 0; y < canvas.height; y += gridSize) {ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke()} const time = Date.now() * 0.001; for (let x = 0; x < canvas.width; x += gridSize) { for (let y = 0; y < canvas.height; y += gridSize) { const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5; ctx.beginPath(); ctx.arc(x,y,2 * pulse,0,Math.PI * 2);&apos;;&apos;; ctx.fillStyle = &apos;#00ffff&apos;; ctx.globalAlpha = 0.8 * pulse; ctx.fill()} } requestAnimationFrame(animate)}; animate()} if (variant === &apos;waves&apos;) { const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); const time = Date.now() * 0.001; const waveCount = intensity === &apos;high&apos; ? 5 : intensity === &apos;medium&apos; ? 3 : 2; for (let i = 0; i < waveCount; i++) { ctx.beginPath(); ctx.strokeStyle = `hsl(${180 + i * 60},100%,50%)`; ctx.lineWidth = 2; ctx.globalAlpha = 0.6; for (let x = 0; x < canvas.width; x++) { const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 100 + Math.sin(x * 0.005 + time * 0.5 + i) * 50; if (x === 0) { ctx.moveTo(x,y)} else {ctx.lineTo(x,y)} } ctx.stroke()} requestAnimationFrame(animate)}; animate()} if (variant === &apos;matrix&apos;) { const characters = &apos;01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン const drops = []; const fontSize = intensity === &apos;high&apos; ? 12 : intensity === &apos;medium&apos; ? 16 : 20; const columns = Math.floor(canvas.width / fontSize); for (let i = 0; i < columns; i++) { drops[i] = 1} const animate = (props) => { ctx.fillStyle = &apos;rgba(0,0,0,0.05)&apos;;&apos;; ctx.fillRect(0,0,canvas.width,canvas.height);&apos;;&apos;; ctx.fillStyle = &apos;#0f0&apos;; ctx.font = `${fontSize}px monospace`; for (let i = 0; i < drops.length; i++) { const text = characters[Math.floor(Math.random() * characters.length)]; ctx.fillText(text,i * fontSize,drops[i] * fontSize); if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { drops[i] = 0} drops[i]++} requestAnimationFrame(animate)};&apos;; animate()} return () => {window.removeEventListener(&apos;resize&apos;,resizeCanvas)}},[variant,intensity]);&apos;; return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style=&quot;{{{ background: &apos;linear-gradient(135deg}}&quot;} />)} export function NeonText($1) { const glowSize = glowIntensity === &apos;high&apos; ? &apos;0 0 20px&apos; : glowIntensity === &apos;medium&apos; ? &apos;0 0 15px&apos; : &apos;0 0 10px&apos;; return (<span className={className} style=&quot;{{{ color: color; textShadow: ` ${glowSize}}&quot; ${color},0 0 30px ${color},0 0 40px ${color} `,animation: &apos;neon-pulse 2s ease-in-out infinite alternate&apos; }}> {children} </span>)} export function FuturisticCard($1) { const glowSize = intensity === &apos;high&apos; ? &apos;0 0 30px&apos; : intensity === &apos;medium&apos; ? &apos;0 0 20px&apos; : &apos;0 0 10px&apos;; return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20&quot; /> <div className=&quot;relative z-10 p-6&quot;> {children} </div> <div className=&quot;absolute inset-0 opacity-20&quot; style=&quot;{{{ background: `linear-gradient(45deg}}&quot;20 50%,transparent 70%)`,animation: &apos;shimmer 3s ease-in-out infinite&apos; }} /> </div> )} const style = document.createElement(&apos;style&apos;); style.textContent = ` @keyframes neon-pulse { from { text-shadow: 0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor} to {text-shadow: 0 0 5px currentColor,0 0 10px currentColor,0 0 15px currentColor} } @keyframes shimmer { 0% { transform: translateX(-100%)} 100% {transform: translateX(100%)} } `; document.head.appendChild(style)}}}}}} export default FuturisticBackground; </div> </canvas>;&apos;;&apos;;
import React, {useEffect, useRef} from 'react';
export function FuturisticBackground("props": "any) {;
export function FuturisticBackground($1) {
    const canvasRef = useRef(null);
    useEffect(() => {;
        const canvas = canvasRef.current;
        if (!canvas);
            return;
        if (!canvas)';
            return;';';
        const ctx = canvas.getContext('2d');
        if (!ctx);
            return;
        // Set canvas size;
        const resizeCanvas = ("props": any) => {;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight"};
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Particle system;
        if (variant === 'particles') {;
            const particles = [];
            const colors = [;
                '#00ffff', // Cyan;
                '#ff00ff', // Magenta;
                '#ffff00', // Yellow;
                '#00ff00', // Green;
                '#ff0080', // Pink;
                '#8000ff', // Purple;
                '#00ff80', // Mint;
                '#ff8000' // Orange;
            ];
            // Create particles;
            const particleCount = intensity === 'high' ? 200 : "intensity === 'medium' ? 100 : 50;
            for (let i = 0; i < particleCount; i++) {;
                particles.push({;
                    "x": Math.random() * canvas.width",;
                    "y": "Math.random() * canvas.height",;
                    "vx": "(Math.random() - 0.5) * 2",;
                    "vy": "(Math.random() - 0.5) * 2",;
                    "size": "Math.random() * 3 + 1",;
                    "opacity": "Math.random() * 0.8 + 0.2",;
                    "color": "colors[Math.floor(Math.random() * colors.length)];
                "})}
            // Animation loop;
            const animate = ("props": "any) => {;
                ctx.clearRect(0", 0, canvas.width, canvas.height);
                // Update and draw particles;
                particles.forEach((particle, index) => {;
                    // Update position;
        // Set canvas size
        const resizeCanvas = (props) => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight};';
        resizeCanvas();';';
        window.addEventListener('resize', resizeCanvas);';
        // Particle system
        if (variant === 'particles') {
            const particles = [];
            const colors = ['#00ffff', // Cyan
                '#ff00ff', // Magenta
                '#ffff00', // Yellow
                '#00ff00', // Green
                '#ff0080', // Pink
                '#8000ff', // Purple
                '#00ff80', // Mint
                '#ff8000' // Orange
            ];';
            // Create particles
            const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    "x": Math.random() * canvas.width,
                    "y": Math.random() * canvas.height,
                    "vx": (Math.random() - 0.5) * 2,
                    "vy": (Math.random() - 0.5) * 2,
                    "size": Math.random() * 3 + 1,
                    "opacity": Math.random() * 0.8 + 0.2,
                    "color": colors[Math.floor(Math.random() * colors.length)]
                })}
            // Animation loop
            const animate = (props) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Update and draw particles
                particles.forEach((particle, index) => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    // Bounce off edges;
                    if (particle.x <= 0 || particle.x >= canvas.width);
                        particle.vx *= -1;
                    if (particle.y <= 0 || particle.y >= canvas.height);
                        particle.vy *= -1;
                    // Wrap around edges;
                    if (particle.x < 0);
                        particle.x = canvas.width;
                    if (particle.x > canvas.width);
                        particle.x = 0;
                    if (particle.y < 0);
                        particle.y = canvas.height;
                    if (particle.y > canvas.height);
                        particle.y = 0;
                    // Draw particle;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = particle.color;
                    ctx.globalAlpha = particle.opacity;
                    ctx.fill();
                    // Draw glow effect;
                    ctx.shadowColor = particle.color;
                    ctx.shadowBlur = 20;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    // Draw connections;
                    particles.forEach((otherParticle, otherIndex) => {;
                        if (index !== otherIndex) {;
                            const distance = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) +;
                                Math.pow(particle.y - otherParticle.y, 2));
                            if (distance < 150) {;
                                ctx.beginPath();
                                ctx.moveTo(particle.x, particle.y);
                                ctx.lineTo(otherParticle.x, otherParticle.y);
                                ctx.strokeStyle = particle.color;
                                ctx.globalAlpha = (150 - distance) / 150 * 0.3;
                                ctx.lineWidth = 1;
                                ctx.stroke()}
                        }
                    })}
    );
                requestAnimationFrame(animate)};
            animate()}
        // Grid system;
        if (variant === 'grid') {;
            const gridSize = intensity === 'high' ? 20 : "intensity === 'medium' ? 30 : 40;
            const animate = ("props": any) => {;
                ctx.clearRect(0", 0, canvas.width, canvas.height);
                // Draw grid;
                ctx.strokeStyle = '#00ffff';
        // Grid system
        if (variant === 'grid') {
            const gridSize = intensity === 'high' ? 20 : intensity === 'medium' ? 30 : 40;
            const animate = (props) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Draw grid
                ctx.strokeStyle = '#00ffff
                ctx.lineWidth = 1;
                ctx.globalAlpha = 0.3;
                for (let x = 0; x < canvas.width; x += gridSize) {;
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.stroke()}
                for (let y = 0; y < canvas.height; y += gridSize) {ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke()}
                // Animated grid points;
                const time = Date.now() * 0.001;
                for (let x = 0; x < canvas.width; x += gridSize) {;
                    for (let y = 0; y < canvas.height; y += gridSize) {;
                        const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
                        ctx.beginPath();
                        ctx.arc(x, y, 2 * pulse, 0, Math.PI * 2);';';
                        ctx.fillStyle = '#00ffff';
                        ctx.globalAlpha = 0.8 * pulse;
                        ctx.fill()}
                }
                requestAnimationFrame(animate)};
            animate()}
        // Wave system;
        if (variant === 'waves') {;
            const animate = ("props": "any) => {;
                ctx.clearRect(0", 0, canvas.width, canvas.height);
        // Wave system
        if (variant === 'waves') {
            const animate = (props) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const time = Date.now() * 0.001;
                const waveCount = intensity === 'high' ? 5 : "intensity === 'medium' ? 3 : 2;
                for (let i = 0; i < waveCount; i++) {;
                    ctx.beginPath();
                    ctx.strokeStyle = `hsl(${180 + i * 60"}, 100%, 50%)`;
                    ctx.lineWidth = 2;
                    ctx.globalAlpha = 0.6;
                    for (let x = 0; x < canvas.width; x++) {;
                        const y = canvas.height / 2 +;
                            Math.sin(x * 0.01 + time + i) * 100 +;
                            Math.sin(x * 0.005 + time * 0.5 + i) * 50;
                        if (x === 0) {;
                            ctx.moveTo(x, y)}
                        else {ctx.lineTo(x, y)}
                    }
                    ctx.stroke()}
                requestAnimationFrame(animate)};
            animate()}
        // Matrix system;
        if (variant === 'matrix') {;
            const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        // Matrix system
        if (variant === 'matrix') {
            const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン
            const drops = [];
            const fontSize = intensity === 'high' ? 12 : "intensity === 'medium' ? 16 : 20;
            const columns = Math.floor(canvas.width / fontSize);
            for (let i = 0; i < columns; i++) {;
                drops[i] = 1"}
            const animate = ("props": "any) => {;
                ctx.fillStyle = 'rgba(0", 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < columns; i++) {
                drops[i] = 1}
            const animate = (props) => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';';
                ctx.fillRect(0, 0, canvas.width, canvas.height);';';
                ctx.fillStyle = '#0f0';
                ctx.font = `${fontSize}px monospace`;
                for (let i = 0; i < drops.length; i++) {;
                    const text = characters[Math.floor(Math.random() * characters.length)];
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {;
                        drops[i] = 0}
                    drops[i]++}
                requestAnimationFrame(animate)};';
            animate()}
        return () => {window.removeEventListener('resize', resizeCanvas);};
    }, [variant, intensity]);
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{;
            "background": 'linear-gradient(135deg}}"} />);
}
// Neon text component;
export function NeonText("props": "any) {;
    const glowSize = glowIntensity === 'high' ? '0 0 20px' : glowIntensity === 'medium' ? '0 0 15px' : '0 0 10px';
    return (<span className={className"} style="{{{;
            "color": "color; "textShadow": `;
          ${glowSize"}}" ${color},;
          0 0 30px ${color},;
          0 0 40px ${color}
        `,;
            "animation": 'neon-pulse 2s ease-in-out infinite alternate';
        }}>;
      {children}
    </span>)}
// Futuristic card component;
export function FuturisticCard("props": "any) {;
    const glowSize = intensity === 'high' ? '0 0 30px' : intensity === 'medium' ? '0 0 20px' : '0 0 10px';
    return (<div className={`relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm ${className"}`} style="{{{;
            "boxShadow": "`0 0 ${glowSize"}}" ${glowColor}`,;
            "borderColor": "`${glowColor"}40`;
        }}>;
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />;
      <div className="relative z-10 p-6">;
        {children}
      </div>;
      <div className="absolute inset-0 opacity-20" style="{{{;
            "background": "`linear-gradient(45deg"}}"20 50%, transparent 70%)`,;
            "animation": 'shimmer 3s ease-in-out infinite';
        }} />;
    </div>)}
// Add CSS animations;
const style = document.createElement('style');
style.textContent = `;
  @keyframes neon-pulse {;
    from {;
      text-"shadow": "0 0 10px currentColor", 0 0 20px currentColor, 0 0 30px currentColor}
    to {text-"shadow": "0 0 5px currentColor", 0 0 10px currentColor, 0 0 15px currentColor}
  }
  ;
  @keyframes shimmer {;
    0% {;
      "transform": "translateX(-100%)"}
    100% {"transform": "translateX(100%)"}
    }, [variant, intensity]);';
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{
            "background": 'linear-gradient(135deg}}"} />);
}
// Neon text component
export function NeonText($1) {
    const glowSize = glowIntensity === 'high' ? '0 0 20px' : glowIntensity === 'medium' ? '0 0 15px' : '0 0 10px';
    return (<span className={className} style="{{{
            "color": color; textShadow: `
          ${glowSize}}" ${color},
          0 0 30px ${color},
          0 0 40px ${color}
        `,
            "animation": 'neon-pulse 2s ease-in-out infinite alternate'
        }}>
      {children}
    </span>)}
// Futuristic card component
export function FuturisticCard($1) {
    const glowSize = intensity === 'high' ? '0 0 30px' : intensity === 'medium' ? '0 0 20px' : '0 0 10px';
    return (
        <div className={`relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm ${className}`} style="{{{
            boxShadow: `0 0 ${glowSize}}" ${glowColor}`,
            borderColor: `${glowColor}40`
        }}>
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      <div className="relative z-10 p-6">
        {children}
      </div>
      <div className="absolute inset-0 opacity-20" style="{{{
            "background": "linear-gradient(45deg}}"20 50%, transparent 70%)",
            "animation": 'shimmer 3s ease-in-out infinite'
        }} />
        </div>
  );
}
// Add CSS animations
const style = document.createElement('style');
style.textContent = "
  @keyframes neon-pulse {
    from {
      text-"shadow": 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor}
    to {text-"shadow": 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor}
  }
  @keyframes shimmer {
    0% {
      "transform": translateX(-100%)}
    100% {"transform": translateX(100%)}
  }
";
document.head.appendChild(style);
}}}}}}
;
export default FuturisticBackground;
</div>;
</canvas>
export default FuturisticBackground;
</div>
</canvas>;';';
import React,{useEffect,useRef} from 'react'; export function FuturisticBackground($1) { const canvasRef = useRef(null); useEffect(() => { const canvas = canvasRef.current; if (!canvas)'; return;';'; const ctx = canvas.getContext('2d'); if (!ctx) return; const resizeCanvas = (props) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight};'; resizeCanvas();';'; window.addEventListener('resize',resizeCanvas);'; if (variant === 'particles') { const particles = []; const colors = [ '#00ffff','#ff00ff','#ffff00','#00ff00','#ff0080','#8000ff','#00ff80','#ff8000' ];'; const particleCount = intensity === 'high' ? 200 : intensity === 'medium' ? 100 : 50; for (let i = 0; i < particleCount; i++) { particles.push({ x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 2,vy: (Math.random() - 0.5) * 2,size: Math.random() * 3 + 1,opacity: Math.random() * 0.8 + 0.2,color: colors[Math.floor(Math.random() * colors.length)] })} const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach((particle,index) => { particle.x += particle.vx; particle.y += particle.vy; if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1; if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1; if (particle.x < 0) particle.x = canvas.width; if (particle.x > canvas.width) particle.x = 0; if (particle.y < 0) particle.y = canvas.height; if (particle.y > canvas.height) particle.y = 0; ctx.beginPath(); ctx.arc(particle.x,particle.y,particle.size,0,Math.PI * 2); ctx.fillStyle = particle.color; ctx.globalAlpha = particle.opacity; ctx.fill(); ctx.shadowColor = particle.color; ctx.shadowBlur = 20; ctx.fill(); ctx.shadowBlur = 0; particles.forEach((otherParticle,otherIndex) => { if (index !== otherIndex) { const distance = Math.sqrt(Math.pow(particle.x - otherParticle.x,2) + Math.pow(particle.y - otherParticle.y,2)); if (distance < 150) { ctx.beginPath(); ctx.moveTo(particle.x,particle.y); ctx.lineTo(otherParticle.x,otherParticle.y); ctx.strokeStyle = particle.color; ctx.globalAlpha = (150 - distance) / 150 * 0.3; ctx.lineWidth = 1; ctx.stroke()} } })}); requestAnimationFrame(animate)}; animate()} if (variant === 'grid') { const gridSize = intensity === 'high' ? 20 : intensity === 'medium' ? 30 : 40; const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); ctx.strokeStyle = '#00ffff ctx.lineWidth = 1; ctx.globalAlpha = 0.3; for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke()} for (let y = 0; y < canvas.height; y += gridSize) {ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke()} const time = Date.now() * 0.001; for (let x = 0; x < canvas.width; x += gridSize) { for (let y = 0; y < canvas.height; y += gridSize) { const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5; ctx.beginPath(); ctx.arc(x,y,2 * pulse,0,Math.PI * 2);';'; ctx.fillStyle = '#00ffff'; ctx.globalAlpha = 0.8 * pulse; ctx.fill()} } requestAnimationFrame(animate)}; animate()} if (variant === 'waves') { const animate = (props) => { ctx.clearRect(0,0,canvas.width,canvas.height); const time = Date.now() * 0.001; const waveCount = intensity === 'high' ? 5 : intensity === 'medium' ? 3 : 2; for (let i = 0; i < waveCount; i++) { ctx.beginPath(); ctx.strokeStyle = `hsl(${180 + i * 60},100%,50%)`; ctx.lineWidth = 2; ctx.globalAlpha = 0.6; for (let x = 0; x < canvas.width; x++) { const y = canvas.height / 2 + Math.sin(x * 0.01 + time + i) * 100 + Math.sin(x * 0.005 + time * 0.5 + i) * 50; if (x === 0) { ctx.moveTo(x,y)} else {ctx.lineTo(x,y)} } ctx.stroke()} requestAnimationFrame(animate)}; animate()} if (variant === 'matrix') { const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン const drops = []; const fontSize = intensity === 'high' ? 12 : intensity === 'medium' ? 16 : 20; const columns = Math.floor(canvas.width / fontSize); for (let i = 0; i < columns; i++) { drops[i] = 1} const animate = (props) => { ctx.fillStyle = 'rgba(0,0,0,0.05)';'; ctx.fillRect(0,0,canvas.width,canvas.height);';'; ctx.fillStyle = '#0f0'; ctx.font = `${fontSize}px monospace`; for (let i = 0; i < drops.length; i++) { const text = characters[Math.floor(Math.random() * characters.length)]; ctx.fillText(text,i * fontSize,drops[i] * fontSize); if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { drops[i] = 0} drops[i]++} requestAnimationFrame(animate)};'; animate()} return () => {window.removeEventListener('resize',resizeCanvas)}},[variant,intensity]);'; return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{ background: 'linear-gradient(135deg}}"} />)} export function NeonText($1) { const glowSize = glowIntensity === 'high' ? '0 0 20px' : glowIntensity === 'medium' ? '0 0 15px' : '0 0 10px'; return (<span className={className} style="{{{ color: color; textShadow: ` ${glowSize}}" ${color},0 0 30px ${color},0 0 40px ${color} `,animation: 'neon-pulse 2s ease-in-out infinite alternate' }}> {children} </span>)} export function FuturisticCard($1) { const glowSize = intensity === 'high' ? '0 0 30px' : intensity === 'medium' ? '0 0 20px' : '0 0 10px'; return ( <div className="min-h-screen bg-white"> <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" /> <div className="relative z-10 p-6"> {children} </div> <div className="absolute inset-0 opacity-20" style="{{{ background: `linear-gradient(45deg}}"20 50%,transparent 70%)`,animation: 'shimmer 3s ease-in-out infinite' }} /> </div> )} const style = document.createElement('style'); style.textContent = ` @keyframes neon-pulse { from { text-shadow: 0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor} to {text-shadow: 0 0 5px currentColor,0 0 10px currentColor,0 0 15px currentColor} } @keyframes shimmer { 0% { transform: translateX(-100%)} 100% {transform: translateX(100%)} } `; document.head.appendChild(style)}}}}}} export default FuturisticBackground; </div> </canvas>;';';