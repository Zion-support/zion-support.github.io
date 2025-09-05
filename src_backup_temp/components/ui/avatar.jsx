export function Avatar("props": "any) {;
    return (<div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className"}`}>;
export function Avatar(props: any) {
    return (
        <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      {children}
    </div>
    );
}
export function AvatarImage("props": "any) {;
    return (<img src={src"} alt={alt} className={`aspect-square h-full w-full ${className}`}  />);
}
export function AvatarFallback("props": "any) {;
    return (<div className={`flex h-full w-full items-center justify-center rounded-full bg-zion-slate ${className"}`}>;
export function AvatarFallback(props: any) {
    return (
        <div className={`flex h-full w-full items-center justify-center rounded-full bg-zion-slate ${className}`}>
      {children}
    </div>
    );
}
import React from 'react';
import {cn} from '@/lib/utils';
const Avatar = React.forwardRef(({className, ...props}, ref) => (<div ref={ref} className = {cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',;
  className)} {...props} />));
Avatar.displayName = 'Avatar';
const AvatarImage = React.forwardRef(({className, src, alt = '', ...props}, ref) => (<img ref={ref} className = {cn('aspect-square h-full w-full',;
  className)} src={src} alt={alt} {...props}  />));
AvatarImage.displayName = 'AvatarImage';
const AvatarFallback = React.forwardRef(({className, ...props}, ref) => (<div ref={ref} className = {cn('flex h-full w-full items-center justify-center rounded-full bg-muted',;
  className)} {...props} />));
AvatarFallback.displayName = 'AvatarFallback';
export {Avatar, AvatarImage, AvatarFallback};
;
export default avatar;
</div>;
</div>
</div>
</div>
export function Avatar($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div>)} export function AvatarImage($1) { return (<img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} />)} export function AvatarFallback($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {children} </div>)} import React from &apos;react&apos;; import {cn} from &apos;@/lib/utils&apos;; const Avatar = React.forwardRef(({className,...props},ref) => (<div ref={ref} className = {cn(&apos;relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full&apos;,className)} {...props}; />));&apos;;&apos;; Avatar.displayName = &apos;Avatar&apos;;&apos;;&apos;; const AvatarImage = React.forwardRef(({className,src,alt = &quot;,...props},ref) => (<img ref={ref} className = {cn(&apos;aspect-square h-full w-full&apos;,className)} src={src} alt={alt} {...props}; />));&apos;;&apos;; AvatarImage.displayName = &apos;AvatarImage&apos;;&apos;;&apos;; const AvatarFallback = React.forwardRef(({className,...props},ref) => (<div ref={ref} className = {cn(&apos;flex h-full w-full items-center justify-center rounded-full bg-muted&apos;,className)} {...props}; />));&apos;;&apos;; AvatarFallback.displayName = &apos;AvatarFallback&apos;; export {Avatar,AvatarImage,AvatarFallback}; export default avatar; </div> </div>;&apos;;&apos;;
module.exports = function Avatar($1) { return ( <div className="min-h-screen bg-white"> {children} </div>)} export function AvatarImage($1) { return (<img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} />)} export function AvatarFallback($1) { return ( <div className="min-h-screen bg-white"> {children} </div>)} import React from "react"; import {cn} from "@/lib/utils"; const Avatar = React.forwardRef(({className,.props},ref) => (<div ref={ref} className = {cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)} {.props}; />));";"; Avatar.displayName = "Avatar";";"; const AvatarImage = React.forwardRef(({className,src,alt = ",.props},ref) => (<img ref={ref} className = {cn("aspect-square h-full w-full",className)} src={src} alt={alt} {.props}; />));";"; AvatarImage.displayName = "AvatarImage";";"; const AvatarFallback = React.forwardRef(({className,.props},ref) => (<div ref={ref} className = {cn("flex h-full w-full items-center justify-center rounded-full bg-muted",className)} {.props}; />));";"; AvatarFallback.displayName = "AvatarFallback"; export {Avatar,AvatarImage,AvatarFallback}; export default avatar; </div> </div>;";";'"`'"`
export function Avatar(_) { return ( <div className="min-h-screen bg-white"> {children} </div>)} export function AvatarImage(_) { return (<img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} />)} export function AvatarFallback(_) { return ( <div className="min-h-screen bg-white"> {children} </div>)} import _React from 'react'; import {cn} from '@/lib/utils'; const Avatar = _React.forwardRef(({className,...props},ref) => (<div ref={ref} className = {cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',className)} {...props}; />));';'; Avatar.displayName = 'Avatar';';'; const AvatarImage = _React.forwardRef(({className,src,alt = ",...props},ref) => (<img ref={ref} className = {cn('aspect-square h-full w-full',className)} src={src} alt={alt} {...props}; />));';'; AvatarImage.displayName = 'AvatarImage';';'; const AvatarFallback = _React.forwardRef(({className,...props},ref) => (<div ref={ref} className = {cn('flex h-full w-full items-center justify-center rounded-full bg-muted',className)} {...props}; />));';'; AvatarFallback.displayName = 'AvatarFallback'; export {Avatar,AvatarImage,AvatarFallback}; export default avatar; </div> </div>;';';