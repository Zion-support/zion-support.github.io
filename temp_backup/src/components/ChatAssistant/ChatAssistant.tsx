/* eslint-disable */
 /** Optional canned questions shown when the chat is empty */ starterQuestions?: string[] ;
}const [storedGuestMessages, setStoredGuestMessages] = useLocalStorage< Message[] > (isGuest ? localStorageKey : 'dummy-guest-key', //Use a dummy key if not guest to prevent LS write for logged-in users []);
const [displayGuestMessages, setDisplayGuestMessages] = useState<Message[]> ([]);
const [loggedInMessages, setLoggedInMessages] = useState<Message[]> (initialMessages);
//Effect for guest user messages useEffect ( () => {;
  if (isGuest) {;
  //Priority: initialMessages prop > localStorage > empty array if (initialMessages && initialMessages.length > 0) {;
}
}, [ isGuest;
initialMessages;
storedGuestMessages;
setStoredGuestMessages;
recipient.id]);
//Effect for logged-in user messages useEffect ( () => {;
  if (!isGuest) {;
  //Update state if initialMessages prop changes (e.g. new conversation loaded) useEffect ( () => {;
  if (debouncedApiCallParams) {;
  onSendMessage (if (!isGuest) {;
  //Logged-in user const newMessage: Message = {;
  setShowGuestModal (false);
setGuestMessage (null) ;
};
if (!isOpen) return null;
return (<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="chat-assistant-title" >) ";""
}</div> </div> <Button > <X className="h-5 w-5" /> </Button> </div> {;
  contextHeader ;
}</div>) ;"
}{;""
  /* Messages */ ";""
}<div className="flex-1 overflow-y-auto p-4 space-y-4" aria-live="polite" > > {;
  q ;
}</Button>) ) ;
}</div>) ;
}</div>) : (currentMessages.map ( (msg) => (<ChatMessage key= {;
  msg.id ;
}role= {;
  msg.role ;
}message= {;
  msg.message ;
}/>) ) ) ;
}<div ref= {;"
  messagesEndRef ;""
}/> </div> </div> </div> {";""
  showGuestModal && guestMessage && (<div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-message-title" > <div className="bg-zion-blue-darker p-6 rounded-lg shadow-xl w-full max-w-md" > <h3 id="confirm-message-title" className="text-lg font-semibold text-white mb-4" > Confirm Message </h3> <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words" > {;""
  guestMessage ";""
}</p> <div className="flex justify-end space-x-3" > <Button > Cancel </Button> <Button > Send </Button> </div> </div> </div>) ;'"
}</div>) ;'"'"
}'"'"'"