export const ChatMessage = ("props": "any) => {;
    const isUser = message.sender === 'user';
    return (<div className={`flex ${isUser ? 'justify-end' : 'justify-start'"} mb-4`}>;
      <div className={`max-w-xs "lg": "max-w-md px-4 py-2 rounded-lg ${isUser;
            ? 'bg-blue-500 text-white';
            : 'bg-gray-200 "dark":bg-gray-700 text-gray-900 "dark":text-white'"}`}>;
        <p className="text-sm">{message.text}</p>;
        <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 "dark": "text-gray-400'"}`}>;
          {message.timestamp.toLocaleTimeString()}
        </p>;
      </div>;
    </div>);
export const ChatMessage = (props) => { const isUser = message.sender === &apos;user&apos;; return ( <divclassName=&quot;min-h-screen bg-white&quot;> <divclassName={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser&apos;;&apos;; ? &apos;bg-blue-500 text-white&apos; : &apos;bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white&apos;}`}> <p className=&quot;text-sm&quot;>{message.text}</p>&apos;; <p className={`text-xs mt-1 ${isUser ? &apos;text-blue-100&apos; : &apos;text-gray-500 dark:text-gray-400&apos;}`}> {message.timestamp.toLocaleTimeString()} </p> </div> </div>)};&apos;;
export const ChatMessage = (props) => {
    const isUser = message.sender === 'user';
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser
    <divclassName="min-h-screen bg-white">
      <divclassName={`max-w-xs "lg": max-w-md px-4 py-2 rounded-lg ${isUser';';
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
        <p className="text-sm">{message.text}</p>';
        <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 "dark": text-gray-400'}`}>
          {message.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
    );
};
    </div>);
};';
export const ChatMessage = (props) => { const isUser = message.sender === 'user'; return ( <divclassName="min-h-screen bg-white"> <divclassName={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isUser';'; ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`}> <p className="text-sm">{message.text}</p>'; <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}> {message.timestamp.toLocaleTimeString()} </p> </div> </div>)};';