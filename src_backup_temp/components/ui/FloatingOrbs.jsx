import React,{useEffect,useRef} from &apos;react&apos;; export function FloatingOrbs($1) { const canvasRef = useRef(null); useEffect(() => { const canvas = canvasRef.current; if (!canvas)&apos;; return;&apos;;&apos;; const ctx = canvas.getContext(&apos;2d&apos;); if (!ctx) return; const resizeCanvas = (props) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight};&apos;; resizeCanvas();&apos;;&apos;; window.addEventListener(&apos;resize&apos;,resizeCanvas); class Orb { x; y; radius; vx; vy; opacity; color; constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.radius = Math.random() * 3 + 1; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.opacity = Math.random() * 0.5 + 0.2; this.color = `hsl(${Math.random() * 60 + 180},70%,60%)`} update() {this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1; this.x = Math.max(0,Math.min(canvas.width,this.x)); this.y = Math.max(0,Math.min(canvas.height,this.y))} draw() {ctx.save(); ctx.globalAlpha = this.opacity; const gradient = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius); gradient.addColorStop(0,this.color);&apos;;&apos;; gradient.addColorStop(1,&apos;transparent&apos;); ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2); ctx.fill(); ctx.restore()} } const orbs = []; for (let i = 0; i < count; i++) {orbs.push(new Orb())} let animate = () => { ctx.clearRect(0,0,canvas.width,canvas.height); orbs.forEach(orb => { orb.update(); orb.draw()}); animationId = requestAnimationFrame(animate)}; animate();&apos;; return () => {window.removeEventListener(&apos;resize&apos;,resizeCanvas); cancelAnimationFrame(animationId)}},[count]);&apos;;&apos;; return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style=&quot;{{{ background: &apos;transparent&apos;}}&quot;} />)} export default FloatingOrbs;&apos;;&apos;;
import React, {useEffect, useRef} from 'react';
export function FloatingOrbs("props": "any) {;
export function FloatingOrbs($1) {
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
        // Set canvas size
        const resizeCanvas = (props) => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight};';
        resizeCanvas();';';
        window.addEventListener('resize', resizeCanvas);
        // Orb class;
        class Orb {;
            x;
            y;
            radius;
            vx;
            vy;
            opacity;
            color;
            constructor() {;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 3 + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`}
            update() {this.x += this.vx;
                this.y += this.vy;
                // Bounce off edges;
                if (this.x < 0 || this.x > canvas.width);
                    this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height);
                    this.vy *= -1;
                // Keep within bounds;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y))}
            draw() {ctx.save();
                ctx.globalAlpha = this.opacity;
                // Create gradient;
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);';';
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore()}
        }
        // Create orbs;
        const orbs = [];
        for (let i = 0; i < count; i++) {orbs.push(new Orb())}
        // Animation loop;
        let animate = () => {;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            orbs.forEach(orb => {;
                orb.update();
                orb.draw()}
    );
            animationId = requestAnimationFrame(animate)};
        animate();
        // Cleanup;
        return () => {window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId)}}, [count]);
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{ "background": 'transparent'}}"} />)}
export default FloatingOrbs;
        animate();';
        // Cleanup
        return () => {window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId)}}, [count]);';';
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{ "background": 'transparent'}}"} />)}
export default FloatingOrbs;';';
import React,{useEffect,useRef} from 'react'; export function FloatingOrbs($1) { const canvasRef = useRef(null); useEffect(() => { const canvas = canvasRef.current; if (!canvas)'; return;';'; const ctx = canvas.getContext('2d'); if (!ctx) return; const resizeCanvas = (props) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight};'; resizeCanvas();';'; window.addEventListener('resize',resizeCanvas); class Orb { x; y; radius; vx; vy; opacity; color; constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.radius = Math.random() * 3 + 1; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.opacity = Math.random() * 0.5 + 0.2; this.color = `hsl(${Math.random() * 60 + 180},70%,60%)`} update() {this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1; this.x = Math.max(0,Math.min(canvas.width,this.x)); this.y = Math.max(0,Math.min(canvas.height,this.y))} draw() {ctx.save(); ctx.globalAlpha = this.opacity; const gradient = ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius); gradient.addColorStop(0,this.color);';'; gradient.addColorStop(1,'transparent'); ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2); ctx.fill(); ctx.restore()} } const orbs = []; for (let i = 0; i < count; i++) {orbs.push(new Orb())} let animate = () => { ctx.clearRect(0,0,canvas.width,canvas.height); orbs.forEach(orb => { orb.update(); orb.draw()}); animationId = requestAnimationFrame(animate)}; animate();'; return () => {window.removeEventListener('resize',resizeCanvas); cancelAnimationFrame(animationId)}},[count]);';'; return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style="{{{ background: 'transparent'}}"} />)} export default FloatingOrbs;';';