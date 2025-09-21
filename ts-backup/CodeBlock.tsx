import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'bash', className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      <div className="flex justify-between items-center p-2 bg-gray-800 border-b border-gray-700 rounded-t-md">
        <span className="text-sm text-gray-400 font-mono">{language}</span>
        <Button
          
          size="sm"
          onClick={handleCopy}
          className="h-8 w-8 p-0 text-gray-400 hover:text-white"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-md overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}