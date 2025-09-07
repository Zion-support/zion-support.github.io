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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-8" > <h3 className="text-xl font-bold text-white mb-4 flex items-center" > <Mail className="mr-2 h-5 w-5 text-zion-cyan" /> Contact </h3> <a href= {;
>>>>>>> origin/resolved-merge-conflicts
  `mailto:$ {;"
  email ;""`
}` ";"'"
}className="text-zion-cyan hover:underline truncate block" > required /> </div> <div> <Textarea required /> </div> <Button </Button> </div> </form> </div>) ;'"'"
}'"'"'"`