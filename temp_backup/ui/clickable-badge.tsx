/* eslint-disable */
 ;
}export function ClickableBadge ({;
  children;
className;
variant = "default";
onRemove;
...props ;
}: ClickableBadgeProps) {;
  return (<div className= {;
  cn (badgeVariants ({;"
  variant ;""
});";""
"group flex items-center gap-1";";""
onRemove && "pl-2.5 pr-1.5 py-1";"
}{;""
  ...props ";""
}> > <X className="h-3 w-3" /> </button>) ;"
}</div>) ;""
}"""