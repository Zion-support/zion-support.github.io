/* eslint-disable */
 export function SupportWidget () {;
  const [isOpen, setIsOpen] = useState (false);
const {;
  theme ;
}= useTheme ();
const router = useRouter ();
/* Fixed button in the bottom right */ ;
}{;
  !isOpen && (<Button onClick={;
  () => setIsOpen (true) ;
}size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-zion-purple hover:bg-zion-purple-light text-white z-50" aria-label="Open support" > <MessageSquare className="h-6 w-6" /> </Button>) ;
}{;
  /* Support panel */ ;"
}{;""
  isOpen && (<div className= {";""
  cn (Zion Support </h3> </div> <div className="flex items-center gap-2" > <Button > <Info className="h-5 w-5" /> </Button> <Button > <X className="h-5 w-5" /> </Button> </div> </div> <ChatBotPanel /> </div>) ;"
}</>) ;""
}"""