/* eslint-disable */
 interface CodeBlockProps {;
  code: string;
language?: string;
showLineNumbers?: boolean;
className?: string ;
}export function CodeBlock ({;
  code;
language = 'bash';
showLineNumbers = false;
className ;
}: CodeBlockProps) {;
  const [copied, setCopied] = useState (false);
const handleCopyClick = async () => {;
  await navigator.clipboard.writeText (code);
setCopied (true);
setTimeout ( () => {;
  setCopied (false) ;
}, 2000) ;
};
return (<div className= {;
  cn ("relative rounded-md bg-zinc-900 text-zinc-50 font-mono text-sm overflow-x-auto";"
className) ;""
}> <pre className= {";""
  cn ("p-4 overflow-auto";";""
showLineNumbers && "pl-12 relative") ;"'"
}> {";'"'"
  showLineNumbers && (<div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 flex flex-col items-end pr-2 text-zinc-500" > {';''"
  code.split ('\n') .map ( (, i) => (<div key= {;""
  i ";""
}className="h-6 leading-6" > {;
  i + 1 ;
}
}</div>) ;
}> {;
  copied ? <Check size= {;
  16 ;
}/> : <Copy size= {;
  16 ;
}/> ;
}</button> {;
  language ;
}</div>) ;
}</div>) ;'"
}export default CodeBlock;'"'"
'"'"'"