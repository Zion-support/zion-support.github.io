className={cn();
        baseClasses,;
        variantClasses[variant],;
        animationClasses[animation],;
        className;
className={cn() baseClasses,variantClasses[variant],animationClasses[animation],className )} style={style} /> )} export function SkeletonText(...args: an y[]): any { return (&apos; <div className={cn(&apos;space-y-2&apos;,className)}> {Array.from({ length: anyline s }).map((_,i) => ( <Skeleton key={i} variant=&quot;text&quot; width={i === lines - 1 ? &apos;75%&apos; : &apos;100%&apos;}&quot; className=&quot;h-4&quot; /> ))} </div> )} export function SkeletonCard(...args: an y[]): any { return (&apos; <div className={cn(&apos;p-6 space-y-4&apos;,className)}>&quot; <div className=&quot;flex items-center space-x-4&quot;>&quot; <Skeleton variant=&quot;circular&quot; width={40} height={40} />&quot; <div className=&quot;space-y-2 flex-1&quot;>&quot; <Skeleton variant=&quot;text&quot; width=&quot;60%&quot; />&quot; <Skeleton variant=&quot;text&quot; width=&quot;40%&quot; /> </div> </div>&quot; <Skeleton variant=&quot;text&quot; lines={3} />&quot; <div className=&quot;flex space-x-2&quot;>&quot; <Skeleton variant=&quot;rounded&quot; width={80} height={32} />&quot; <Skeleton variant=&quot;rounded&quot; width={100} height={32} /> </div> </div> )} export function SkeletonTable(...args: an y[]): any { return (&apos; <div className={cn(&apos;space-y-3&apos;,className)}> {}&quot; <div className=&quot;flex space-x-4&quot;> {Array.from({ length: anycolumn s }).map((_,i) => (&quot; <Skeleton key={i} variant=&quot;text&quot; width={120} height={20} /> ))} </div> {} {Array.from({ length: anyrow s }).map((_,rowIndex) => (&quot; <div key={rowIndex} className=&quot;flex space-x-4&quot;> {Array.from({ length: anycolumn s }).map((_,colIndex) => ( <Skeleton key={colIndex}&quot; variant=&quot;text&quot; width={colIndex === 0 ? 150 : 100} height={16} /> ))} </div> ))} </div> )} export function SkeletonGrid(...args: an y[]): any { return ()&apos;; <div&apos;;&apos;; className={cn(&apos; &apos;grid gap-6&apos;,columns === 1 && &apos;grid-cols-1&apos;,columns === 2 && &apos;grid-cols-1 md: gri d-cols-2&apos;,columns === 3 && &apos;grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3&apos;,columns === 4 && &apos;grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4&apos;,className )} > {Array.from({ length: item s }).map((_,i) => ( <SkeletonCard key={i} /> ))} </div> )} export function SkeletonHero(...args: an y[]): any { return (&apos; <div className={cn(&apos;space-y-8&apos;,className)}> {}&quot; <div className=&quot;space-y-4&quot;>&quot; <Skeleton variant=&quot;text&quot; width=&quot;80%&quot; height={48} className=&quot;mx-auto&quot; />&quot; <Skeleton variant=&quot;text&quot; width=&quot;60%&quot; height={24} className=&quot;mx-auto&quot; /> </div> {}&quot; <Skeleton variant=&quot;text&quot; lines={3} className=&quot;max-w-2xl mx-auto&quot; /> {}&quot; <div className=&quot;flex justify-center space-x-4&quot;>&quot; <Skeleton variant=&quot;rounded&quot; width={160} height={48} />&quot; <Skeleton variant=&quot;rounded&quot; width={140} height={48} /> </div> </div> )} &quot;` </Skeleton> </Skeleton>&apos;;
      className={cn()
        baseClasses,
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
    />;
  )}
;
// Predefined skeleton components for common use cases;
export function SkeletonText(..."args": "an y[]): any {;
  return (';
    <div className={cn('space-y-2'", className)}>;
      {Array.from({ "length": "anyline s "}).map((_, i) => (;
        <Skeleton key={i}
          variant="text"';
          width={i === lines - 1 ? '75%' : '100%'}"          className="h-4";
           />;
      ))}
    </div>;
  )}
;
export function SkeletonCard(..."args": "an y[]): any {;
  return (';
    <div className={cn('p-6 space-y-4'", className)}>";
      <div className="flex items-center space-x-4">";
        <Skeleton variant="circular" width={40} height={40}   />";
        <div className="space-y-2 flex-1">";
          <Skeleton variant="text" width="60%"   />";
          <Skeleton variant="text" width="40%"   />;
        </div>;
      </div>";
      <Skeleton variant="text" lines={3}   />";
      <div className="flex space-x-2">";
        <Skeleton variant="rounded" width={80} height={32}   />";
        <Skeleton variant="rounded" width={100} height={32}   />      </div>;
    </div>;
  )}
;
export function SkeletonTable(..."args": "an y[]): any {;
  return (';
    <div className={cn('space-y-3'", className)}>;
      {/* Header */}";
      <div className="flex space-x-4">;
        {Array.from({ "length": "anycolumn s "}).map((_, i) => (";
          <Skeleton key={i} variant="text" width={120} height={20}   />        ))}
      </div>;
      {/* Rows */}
      {Array.from({ "length": "anyrow s "}).map((_, rowIndex) => (";
        <div key={rowIndex} className="flex space-x-4">;
          {Array.from({ "length": "anycolumn s "}).map((_, colIndex) => (;
            <Skeleton key={colIndex}"              variant="text";
              width={colIndex === 0 ? 150 : "100"}
// Predefined skeleton components for common use cases
export function SkeletonText(..."args": an y[]): any {
  return ('
    <div className={cn('space-y-2', className)}>
      {Array.from({ "length": anyline s }).map((_, i) => (
        <Skeleton key={i}
          variant="text"
          width={i === lines - 1 ? '75%' : '100%'}"          className="h-4"
           />
      ))}
        </div>
  );
}
export function SkeletonCard(..."args": an y[]): any {
  return ('
    <div className={cn('p-6 space-y-4', className)}>"
      <div className="flex items-center space-x-4">"
        <Skeleton variant="circular" width={40} height={40}   />"
        <div className="space-y-2 flex-1">"
          <Skeleton variant="text" width="60%"   />"
          <Skeleton variant="text" width="40%"   />
        </div>
      </div>"
      <Skeleton variant="text" lines={3}   />"
      <div className="flex space-x-2">"
        <Skeleton variant="rounded" width={80} height={32}   />"
        <Skeleton variant="rounded" width={100} height={32}   />      </div>
        </div>
  );
}
export function SkeletonTable(..."args": an y[]): any {
  return ('
    <div className={cn('space-y-3', className)}>
      {/* Header */}"
      <div className="flex space-x-4">
        {Array.from({ "length": anycolumn s }).map((_, i) => ("
          <Skeleton key={i} variant="text" width={120} height={20}   />        ))}
      </div>
      {/* Rows */}
      {Array.from({ "length": anyrow s }).map((_, rowIndex) => ("
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ "length": anycolumn s }).map((_, colIndex) => (
            <Skeleton key={colIndex}"              variant="text"
              width={colIndex === 0 ? 150 : 100}
              height={16}
               />;
          ))}
        </div>;
      ))}
    </div>;
  )}
;
export function SkeletonGrid(..."args": "an y[]): any {;
  return ();
    <div;
      className={cn(';
        'grid gap-6'",;
        columns === 1 && 'grid-cols-1',;
        columns === 2 && 'grid-cols-1 "md": "gri d-cols-2'",;
        columns === 3 && 'grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3'",;
        columns === 4 && 'grid-cols-1 "md": "anygri d-cols-2 "lg": gri d-cols-4'",;
        className;
      )}
    >;
      {Array.from({ "length": "item s "}).map((_, i) => (;
        <SkeletonCard key={i}   />      ))}
    </div>;
  )}
;
export function SkeletonHero(..."args": "an y[]): any {;
  return (';
    <div className={cn('space-y-8'", className)}>;
      {/* Title */}";
      <div className="space-y-4">";
        <Skeleton variant="text" width="80%" height={48} className="mx-auto"   />";
        <Skeleton variant="text" width="60%" height={24} className="mx-auto"   />;
      </div>;
      {/* Description */}";
      <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto"   />;
      {/* CTA Buttons */}";
      <div className="flex justify-center space-x-4">";
        <Skeleton variant="rounded" width={160} height={48}   />";
        <Skeleton variant="rounded" width={140} height={48}   />;
      </div>;
    </div>;
  )}
'"`;
</Skeleton>;
</Skeleton>
        </div>
  );
}
export function SkeletonGrid(..."args": an y[]): any {
  return ()';
    <div';';
      className={cn('
        'grid gap-6',
        columns === 1 && 'grid-cols-1',
        columns === 2 && 'grid-cols-1 "md": gri d-cols-2',
        columns === 3 && 'grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-3',
        columns === 4 && 'grid-cols-1 "md": anygri d-cols-2 lg: gri d-cols-4',
        className
      )}
    >
      {Array.from({ "length": item s }).map((_, i) => (
        <SkeletonCard key={i}   />      ))}
        </div>
  );
}
export function SkeletonHero(..."args": an y[]): any {
  return ('
    <div className={cn('space-y-8', className)}>
      {/* Title */}"
      <div className="space-y-4">"
        <Skeleton variant="text" width="80%" height={48} className="mx-auto"   />"
        <Skeleton variant="text" width="60%" height={24} className="mx-auto"   />
      </div>
      {/* Description */}"
      <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto"   />
      {/* CTA Buttons */}"
      <div className="flex justify-center space-x-4">"
        <Skeleton variant="rounded" width={160} height={48}   />"
        <Skeleton variant="rounded" width={140} height={48}   />
      </div>
    </div>
  )}
"`
</Skeleton>
</Skeleton>';
className={cn() baseClasses,variantClasses[variant],animationClasses[animation],className )} style={style} /> )} export function SkeletonText(...args: an y[]): any { return (' <div className={cn('space-y-2',className)}> {Array.from({ length: anyline s }).map((_,i) => ( <Skeleton key={i} variant="text" width={i === lines - 1 ? '75%' : '100%'}" className="h-4" /> ))} </div> )} export function SkeletonCard(...args: an y[]): any { return (' <div className={cn('p-6 space-y-4',className)}>" <div className="flex items-center space-x-4">" <Skeleton variant="circular" width={40} height={40} />" <div className="space-y-2 flex-1">" <Skeleton variant="text" width="60%" />" <Skeleton variant="text" width="40%" /> </div> </div>" <Skeleton variant="text" lines={3} />" <div className="flex space-x-2">" <Skeleton variant="rounded" width={80} height={32} />" <Skeleton variant="rounded" width={100} height={32} /> </div> </div> )} export function SkeletonTable(...args: an y[]): any { return (' <div className={cn('space-y-3',className)}> {}" <div className="flex space-x-4"> {Array.from({ length: anycolumn s }).map((_,i) => (" <Skeleton key={i} variant="text" width={120} height={20} /> ))} </div> {} {Array.from({ length: anyrow s }).map((_,rowIndex) => (" <div key={rowIndex} className="flex space-x-4"> {Array.from({ length: anycolumn s }).map((_,colIndex) => ( <Skeleton key={colIndex}" variant="text" width={colIndex === 0 ? 150 : 100} height={16} /> ))} </div> ))} </div> )} export function SkeletonGrid(...args: an y[]): any { return ()'; <div';'; className={cn(' 'grid gap-6',columns === 1 && 'grid-cols-1',columns === 2 && 'grid-cols-1 md: gri d-cols-2',columns === 3 && 'grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3',columns === 4 && 'grid-cols-1 md: anygri d-cols-2 lg: gri d-cols-4',className )} > {Array.from({ length: item s }).map((_,i) => ( <SkeletonCard key={i} /> ))} </div> )} export function SkeletonHero(...args: an y[]): any { return (' <div className={cn('space-y-8',className)}> {}" <div className="space-y-4">" <Skeleton variant="text" width="80%" height={48} className="mx-auto" />" <Skeleton variant="text" width="60%" height={24} className="mx-auto" /> </div> {}" <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto" /> {}" <div className="flex justify-center space-x-4">" <Skeleton variant="rounded" width={160} height={48} />" <Skeleton variant="rounded" width={140} height={48} /> </div> </div> )} "` </Skeleton> </Skeleton>';