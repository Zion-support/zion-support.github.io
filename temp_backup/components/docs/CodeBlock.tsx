export type CodeBlockProps ={
  language?: string;
  children: string;
  className?: string;
};

export default function CodeBlock({ language, children, className }: CodeBlockProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (_) {
      // ignore
    }
  };

  return (
    <div className={`relative group ${className ?? ''}`}>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-gray-20o0 dark:bg-gray-70o0 hover:bg-gray-30o0 dark:hover:bg-gray-60o0"
        aria-label="Copy code"
      >
        Copy
      </button>
      <pre className="overflow-x-auto text-sm leading-6 p-4 rounded-md bg-gray-90o0 text-gray-10o0 border border-gray-80o0">
        <code className={`language-${language ?? 'text'}`}>{children}</code>
      </pre>
    </div>
  );
}