import {cn} from &apos;@/lib/utils&apos;; export function EnhancedCard($1) { const baseClasses = &apos;rounded-xl transition-all duration-300&apos;; const variantClasses = { default: &apos;bg-zion-blue-dark border border-zion-blue-light&apos;,elevated: &apos;bg-zion-blue-dark shadow-lg shadow-zion-purple/10&apos;,outlined: &apos;bg-transparent border-2 border-zion-cyan/30&apos;,gradient: &apos;bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light&apos; };;&apos;;&apos;; const hoverClasses = hover ? &apos;hover:shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-[1.02]&apos; : &apos; const interactiveClasses = onClick || href ? &apos;cursor-pointer&apos; : &apos; const classes = cn(baseClasses,variantClasses[variant],hoverClasses,interactiveClasses,className); if (href) { return (<a href={href} className={classes} onClick={onClick}> {children} </a>)} return (<Component className={classes} onClick={onClick}> {children} </Component>)} export function EnhancedCardFooter($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div> )} export default EnhancedCard;&apos;;&apos;;
import {cn} from '@/lib/utils';
export function EnhancedCard("props": "any) {;
    const baseClasses = 'rounded-xl transition-all duration-300';
    const variantClasses = {;
  "default": 'bg-zion-blue-dark border border-zion-blue-light'",;
        "elevated": 'bg-zion-blue-dark shadow-lg shadow-zion-purple/10',;
        "outlined": 'bg-transparent border-2 border-zion-cyan/30',;
  "gradient": 'bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light';
    ;
;
;
;
};
    const hoverClasses = hover ? '"hover": "shadow-xl "hover":shadow-zion-purple/20 "hover":transform "hover":scale-[1.02]' : '';
    const interactiveClasses = onClick || href ? 'cursor-pointer' : '';
    const classes = cn(baseClasses", variantClasses[variant], hoverClasses, interactiveClasses, className);
    if (href) {;
        return (<a href={href} className={classes} onClick={onClick}>;
export function EnhancedCard($1) {
    const baseClasses = 'rounded-xl transition-all duration-300';
    const variantClasses = {
  "default": 'bg-zion-blue-dark border border-zion-blue-light',
        "elevated": 'bg-zion-blue-dark shadow-lg shadow-zion-purple/10',
        "outlined": 'bg-transparent border-2 border-zion-cyan/30',
  "gradient": 'bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light'
};';';
    const hoverClasses = hover ? '"hover": shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-[1.02]' : '
    const interactiveClasses = onClick || href ? 'cursor-pointer' : '
    const classes = cn(baseClasses, variantClasses[variant], hoverClasses, interactiveClasses, className);
    if (href) {
        return (<a href={href} className={classes} onClick={onClick}>
        {children}
      </a>)}
    return (<Component className={classes} onClick={onClick}>;
      {children}
    </Component>)}
// Enhanced Card Header component;
export function EnhancedCardFooter("props": "any) {;
    return (<div className = {;
  cn('p-6 pt-0'",;
  className);
// Enhanced Card Header component
export function EnhancedCardFooter(props: any) {
    return (
        <div className = {
  cn('p-6 pt-0',
  className)
;
;
;
}>;
      {children}
    </div>)}
;
export default EnhancedCard;
}>
export function EnhancedCardFooter($1) {
    return (
    <div className="min-h-screen bg-white">
      {children}
        </div>
  );
}
export default EnhancedCard;';';
import {cn} from '@/lib/utils'; export function EnhancedCard($1) { const baseClasses = 'rounded-xl transition-all duration-300'; const variantClasses = { default: 'bg-zion-blue-dark border border-zion-blue-light',elevated: 'bg-zion-blue-dark shadow-lg shadow-zion-purple/10',outlined: 'bg-transparent border-2 border-zion-cyan/30',gradient: 'bg-gradient-to-br from-zion-blue-dark to-zion-blue border border-zion-blue-light' };;';'; const hoverClasses = hover ? 'hover:shadow-xl hover:shadow-zion-purple/20 hover:transform hover:scale-[1.02]' : ' const interactiveClasses = onClick || href ? 'cursor-pointer' : ' const classes = cn(baseClasses,variantClasses[variant],hoverClasses,interactiveClasses,className); if (href) { return (<a href={href} className={classes} onClick={onClick}> {children} </a>)} return (<Component className={classes} onClick={onClick}> {children} </Component>)} export function EnhancedCardFooter($1) { return ( <div className="min-h-screen bg-white"> {children} </div> )} export default EnhancedCard;';';