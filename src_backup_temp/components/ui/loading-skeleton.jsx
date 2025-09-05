import {cn} from &apos;@/lib/utils&apos;; export function Skeleton($1) { return (<div className={cn(&quot;animate-pulse rounded-md bg-zion-slate/20&quot;,className)} {...props} />)} export function CardSkeleton($1) {return ( <div className=&quot;min-h-screen bg-white&quot;> <Skeleton className=&quot;h-4 w-3/4&quot; /> <Skeleton className=&quot;h-4 w-1/2&quot; /> <Skeleton className=&quot;h-4 w-2/3&quot; /> <div className=&quot;flex gap-2&quot;> <Skeleton className=&quot;h-6 w-16&quot; /> <Skeleton className=&quot;h-6 w-20&quot; /> </div> </div>)} export function ProfileSkeleton($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;flex items-center space-x-4&quot;> <Skeleton className=&quot;h-16 w-16 rounded-full&quot; /> <div className=&quot;space-y-2&quot;> <Skeleton className=&quot;h-4 w-32&quot; /> <Skeleton className=&quot;h-3 w-24&quot; /> </div> </div> <div className=&quot;space-y-3&quot;> <Skeleton className=&quot;h-4 w-full&quot; /> <Skeleton className=&quot;h-4 w-3/4&quot; /> <Skeleton className=&quot;h-4 w-1/2&quot; /> </div> <div className=&quot;flex flex-wrap gap-2&quot;> {Array.from({ length: 5 }).map((_,i) => (<Skeleton key={i} className=&quot;h-6 w-20&quot; />))} </div> </div>)} export function GridSkeleton($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {Array.from({ length: count }).map((_,i) => (<CardSkeleton key={i} />))} </div>)} ;&apos;;&apos;;
import {cn} from '@/lib/utils';
export function Skeleton("props": "any) {;
    return (<div className={cn("animate-pulse rounded-md bg-zion-slate/20"", className)} {...props} />);
}
export function CardSkeleton("props": "any) {return (<div className="rounded-lg border border-zion-slate/20 p-6 space-y-4">;
      <Skeleton className="h-4 w-3/4" />;
      <Skeleton className="h-4 w-1/2" />;
      <Skeleton className="h-4 w-2/3" />;
      <div className="flex gap-2">;
        <Skeleton className="h-6 w-16" />;
        <Skeleton className="h-6 w-20" />;
      </div>;
    </div>);"}
export function ProfileSkeleton("props": "any) {;
    return (<div className="space-y-6">;
      <div className="flex items-center space-x-4">;
        <Skeleton className="h-16 w-16 rounded-full" />;
        <div className="space-y-2">;
          <Skeleton className="h-4 w-32" />;
          <Skeleton className="h-3 w-24" />;
        </div>;
      </div>;
      <div className="space-y-3">;
        <Skeleton className="h-4 w-full" />;
        <Skeleton className="h-4 w-3/4" />;
        <Skeleton className="h-4 w-1/2" />;
      </div>;
      <div className="flex flex-wrap gap-2">;
        {Array.from({ "length": 5 "}).map((_, i) => (<Skeleton key={i} className="h-6 w-20" />))}
      </div>;
    </div>);
}
export function GridSkeleton("props": "any) {;
    return (<div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-6">;
      {Array.from({ "length": count "}).map((_, i) => (<CardSkeleton key={i} />))}
    </div>);
}
export function Skeleton(props: any) {
    return (
        <div className={cn("animate-pulse rounded-md bg-zion-slate/20", className)} {...props} />);
}
export function CardSkeleton(props: any) {return (
        <div className="rounded-lg border border-zion-slate/20 p-6 space-y-4">
export function Skeleton($1) {
    return (<div className={cn("animate-pulse rounded-md bg-zion-slate/20", className)} {...props} />);
}
export function CardSkeleton($1) {return (
    <div className="min-h-screen bg-white">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
    );}
export function ProfileSkeleton(props: any) {
    return (
        <div className="space-y-6">
    </div>);}
export function ProfileSkeleton($1) {
    return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ "length": 5 }).map((_, i) => (<Skeleton key={i} className="h-6 w-20" />))}
      </div>
    </div>
    );
}
export function GridSkeleton(props: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (<CardSkeleton key={i} />))}
    </div>
    );
export function GridSkeleton($1) {
    return (
    <div className="min-h-screen bg-white">
      {Array.from({ "length": count }).map((_, i) => (<CardSkeleton key={i} />))}
    </div>);
}
;';';
import {cn} from '@/lib/utils'; export function Skeleton($1) { return (<div className={cn("animate-pulse rounded-md bg-zion-slate/20",className)} {...props} />)} export function CardSkeleton($1) {return ( <div className="min-h-screen bg-white"> <Skeleton className="h-4 w-3/4" /> <Skeleton className="h-4 w-1/2" /> <Skeleton className="h-4 w-2/3" /> <div className="flex gap-2"> <Skeleton className="h-6 w-16" /> <Skeleton className="h-6 w-20" /> </div> </div>)} export function ProfileSkeleton($1) { return ( <div className="min-h-screen bg-white"> <div className="flex items-center space-x-4"> <Skeleton className="h-16 w-16 rounded-full" /> <div className="space-y-2"> <Skeleton className="h-4 w-32" /> <Skeleton className="h-3 w-24" /> </div> </div> <div className="space-y-3"> <Skeleton className="h-4 w-full" /> <Skeleton className="h-4 w-3/4" /> <Skeleton className="h-4 w-1/2" /> </div> <div className="flex flex-wrap gap-2"> {Array.from({ length: 5 }).map((_,i) => (<Skeleton key={i} className="h-6 w-20" />))} </div> </div>)} export function GridSkeleton($1) { return ( <div className="min-h-screen bg-white"> {Array.from({ length: count }).map((_,i) => (<CardSkeleton key={i} />))} </div>)} ;';';