/* eslint-disable */
 interface ProfileContactProps {;
  email?: string;
profileName: string;
profileType: 'service' | 'talent' ;
}export function ProfileContact ({;
  email,  profileName, profileType ;
}: ProfileContactProps) {;
  const handleSendMessage = (e: React.FormEvent) => {;
  e.preventDefault ();
setIsSending (true);
//Here would be the actual API call to send the message setTimeout ( () => {;
}, 1000);
};
  `mailto:$ {;"
  email ;""`
}` ";"'"
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;'"'"
}'"'"'"`