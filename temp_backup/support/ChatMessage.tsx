/* eslint-disable */
 interface ChatMessageProps {;
  message: string;
isUser: boolean;
timestamp: Date ;
}export const ChatMessage: React.FC<ChatMessageProps> = ({;
  message;
isUser;
timestamp ;
}: ChatMessageProps) => {;
  const {;
  theme ;
}= useTheme ();
html: string ;
}> ( () => ({;
  html: formatMessageWithLinks (message) ;
});
[message]);
return (<> <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="User avatar" /> <AvatarFallback>U</AvatarFallback> </>) : (<> <AvatarImage src="https://placehold.co/40x40?text=AI" alt="Zion Support" /> <AvatarFallback className="bg-zion-purple text-white" >Z</AvatarFallback> </>) ;
}</Avatar> </div> </div> </div>) ;
};
//A lightweight HTML escaping utility to prevent XSS. We avoid adding a heavy //dependency like DOMPurify for now and instead escape the five critical //characters. This ensures any user-supplied string is rendered harmless //before we perform our link replacements below. ;
}//First, escape any HTML so that user input cannot break out of the intended //markup.);"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Replace help-center references like [Getting Started]);""
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 """