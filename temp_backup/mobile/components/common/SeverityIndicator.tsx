/* eslint-disable */
 ;
}export function SeverityIndicator ({;
  severity;
showIcon = true;
showText = true;
size = "md";
className ;
}: SeverityIndicatorProps) {;
  const getSeverityIcon = () => {;
  switch (severity) {;
  case 'dangerous': return <AlertCircle className= {;'
  cn () ;''"
}/>;';'"'"
case 'suspicious': return <AlertTriangle className= {";""
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";";""
"text-amber-500") ;"
}/>;""
default: return <CheckCircle className= {";""
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";";""
"text-green-500") ;
}/>;
}
};'"
return (</div>) ;'"'"
}'"'"'"