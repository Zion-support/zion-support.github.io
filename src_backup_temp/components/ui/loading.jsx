import {cn} from &apos;@/lib/utils&apos;; export function Loading($1) { const sizeClasses = { sm: &apos;w-4 h-4&apos;,md: &apos;w-6 h-6&apos;,lg: &apos;w-8 h-8&apos;,xl: &apos;w-12 h-12&apos; };; const renderContent = (props) => { switch (variant) { case &apos;dots&apos;: return renderDots(); case &apos;pulse&apos;: return renderPulse(); case &apos;skeleton&apos;: return renderSkeleton(); default: return renderSpinner()} }; return ( <div className=&quot;min-h-screen bg-white&quot;> {renderContent()} {text && (<p className=&quot;text-sm text-zion-slate-light animate-pulse&quot;>{text}</p>)} </div> )} export function Skeleton($1) { return (<div className = { cn(&apos;animate-pulse rounded-md bg-zion-slate-light/20&apos;,className) } {...props} />)} export function PageLoading($1) {return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;text-center space-y-4&quot;> <Loading size=&quot;xl&quot; variant=&quot;spinner&quot; className=&quot;text-zion-cyan&quot; /> <h2 className=&quot;text-xl font-semibold text-zion-slate-light&quot;>Loading Zion Tech Group</h2> <p className=&quot;text-zion-slate-light&quot;>Preparing your experience...</p> </div> </div> )} export function CardSkeleton($1) {return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;h-6 bg-zion-slate-light/20 rounded w-1/2&quot;></div> <div className=&quot;space-y-2&quot;> <div className=&quot;h-4 bg-zion-slate-light/20 rounded&quot;></div> <div className=&quot;h-4 bg-zion-slate-light/20 rounded w-3/4&quot;></div> </div> <div className=&quot;h-10 bg-zion-slate-light/20 rounded w-1/3&quot;></div> </div> )} export default loading;&apos;; </div>;&apos;;&apos;;
import {cn} from '@/lib/utils';
export function Loading("props": "any) {;
    const sizeClasses = {;
  "sm": 'w-4 h-4'",;
        "md": 'w-6 h-6',;
        "lg": 'w-8 h-8',;
  "xl": 'w-12 h-12';
    ;
;
;
;
};
    const renderContent = ("props": "any) => {;
        switch (variant) {;
            case 'dots':;
export function Loading($1) {
    const sizeClasses = {
  "sm": 'w-4 h-4',
        "md": 'w-6 h-6',
        "lg": 'w-8 h-8',
  "xl": 'w-12 h-12'
};
    const renderContent = (props) => {
        switch (variant) {
            case 'dots':
                return renderDots();
            case 'pulse':;
                return renderPulse();
            case 'skeleton':;
                return renderSkeleton();
            "default":;
                return renderSpinner()"}
    };
    return (<div className = {cn('flex flex-col items-center justify-center gap-3',;
  className)}>;
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
    </div>)}
// Skeleton loading for content;
export function Skeleton("props": "any) {;
    return (<div className = {;
  cn('animate-pulse rounded-md bg-zion-slate-light/20'",;
  className);
;
;
;
} {...props} />);
}
// Page loading component;
export function PageLoading("props": "any) {return (<div className="min-h-screen flex items-center justify-center bg-background">;
      <div className="text-center space-y-4">;
        <Loading size="xl" variant="spinner" className="text-zion-cyan" />;
        <h2 className="text-xl font-semibold text-zion-slate-light">Loading Zion Tech Group</h2>;
        <p className="text-zion-slate-light">Preparing your experience...</p>;
      </div>;
    </div>)"}
// Content skeleton loading;
export function CardSkeleton("props": "any) {return (<div className="bg-card border border-border rounded-lg p-6 space-y-4 animate-pulse">;
      <div className="h-6 bg-zion-slate-light/20 rounded w-1/2"></div>;
      <div className="space-y-2">;
        <div className="h-4 bg-zion-slate-light/20 rounded"></div>;
        <div className="h-4 bg-zion-slate-light/20 rounded w-3/4"></div>;
      </div>;
      <div className="h-10 bg-zion-slate-light/20 rounded w-1/3"></div>;
    </div>)"}
;
export default loading;
</div>
            "default": return renderSpinner()}
    };
    return (
        <div className = {cn('flex flex-col items-center justify-center gap-3',
  className)}>
    <div className="min-h-screen bg-white">
      {renderContent()}
      {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)}
        </div>
  );
}
// Skeleton loading for content
export function Skeleton(props: any) {
    return (
        <div className = {
export function Skeleton($1) {
    return (<div className = {
  cn('animate-pulse rounded-md bg-zion-slate-light/20',
  className)
} {...props} />);
}
// Page loading component
export function PageLoading(props: any) {return (
        <div className="min-h-screen flex items-center justify-center bg-background">
export function PageLoading($1) {return (
    <div className="min-h-screen bg-white">
      <div className="text-center space-y-4">
        <Loading size="xl" variant="spinner" className="text-zion-cyan" />
        <h2 className="text-xl font-semibold text-zion-slate-light">Loading Zion Tech Group</h2>
        <p className="text-zion-slate-light">Preparing your experience...</p>
      </div>
        </div>
  );
}
// Content skeleton loading
export function CardSkeleton(props: any) {return (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4 animate-pulse">
export function CardSkeleton($1) {return (
    <div className="min-h-screen bg-white">
      <div className="h-6 bg-zion-slate-light/20 rounded w-1/2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-zion-slate-light/20 rounded"></div>
        <div className="h-4 bg-zion-slate-light/20 rounded w-3/4"></div>
      </div>
      <div className="h-10 bg-zion-slate-light/20 rounded w-1/3"></div>
        </div>
  );
}
export default loading;';
</div>;';';
import {cn} from '@/lib/utils'; export function Loading($1) { const sizeClasses = { sm: 'w-4 h-4',md: 'w-6 h-6',lg: 'w-8 h-8',xl: 'w-12 h-12' };; const renderContent = (props) => { switch (variant) { case 'dots': return renderDots(); case 'pulse': return renderPulse(); case 'skeleton': return renderSkeleton(); default: return renderSpinner()} }; return ( <div className="min-h-screen bg-white"> {renderContent()} {text && (<p className="text-sm text-zion-slate-light animate-pulse">{text}</p>)} </div> )} export function Skeleton($1) { return (<div className = { cn('animate-pulse rounded-md bg-zion-slate-light/20',className) } {...props} />)} export function PageLoading($1) {return ( <div className="min-h-screen bg-white"> <div className="text-center space-y-4"> <Loading size="xl" variant="spinner" className="text-zion-cyan" /> <h2 className="text-xl font-semibold text-zion-slate-light">Loading Zion Tech Group</h2> <p className="text-zion-slate-light">Preparing your experience...</p> </div> </div> )} export function CardSkeleton($1) {return ( <div className="min-h-screen bg-white"> <div className="h-6 bg-zion-slate-light/20 rounded w-1/2"></div> <div className="space-y-2"> <div className="h-4 bg-zion-slate-light/20 rounded"></div> <div className="h-4 bg-zion-slate-light/20 rounded w-3/4"></div> </div> <div className="h-10 bg-zion-slate-light/20 rounded w-1/3"></div> </div> )} export default loading;'; </div>;';';