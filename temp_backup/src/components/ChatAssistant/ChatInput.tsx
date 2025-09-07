/* eslint-disable */
 import {;
  {;
  {;
  Send ;
}from 'lucide-react' interface ChatInputProps {;
  onSend: (message: string) => void;
disabled?: boolean ;
}export function ChatInput ({;'
  onSend, disabled = false ;''
}: ChatInputProps) {';''
  const [message, setMessage] = useState ('');
const inputRef = useRef<HTMLTextAreaElement> (null);
//Focus input when component mounts ;
}
};'
> <Send className='h-5 w-5' /> </Button> </form>) ;''''
}''''''