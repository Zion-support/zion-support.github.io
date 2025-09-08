/* eslint-disable */
 import {;
  {;
  {;
  Copy, Facebook, Link,  Share, Twitter ;
}from 'lucide-react' interface ReferralLinkProps {;'
  referralLink: string;''
onCopy: () => void;';''
onShare: (platform: 'twitter' | 'facebook' | 'linkedin') => void ;
}export function ReferralLink ({;
  referralLink,  onCopy, onShare ;
}: ReferralLinkProps) {;
  const [copied,  setCopied] = useState (false);
const handleCopy = () => {;
  onCopy ();
setCopied (true);
setTimeout ( () => setCopied (false), 2000) ;
};
mt-6"> <CardHeader> <CardTitle className=" flex items-center gap-2"> <Link className=" h-5 w-5"/> Your Referral Link </CardTitle> <CardDescription> Share this link with others to earn rewards when they join and complete onboarding </CardDescription> </CardHeader> <CardContent> <div className=" flex flex-col space-y-3"> <div className=" flex space-x-2"> <Input value= {;""
  referralLink ";""
}readOnly className=" font-mono text-sm"/> Copied to clipboard! </p>) ";"'"
}</div> </CardContent> <CardFooter className=" border-t bg-muted/50 p-4"> <div className=" flex flex-col sm:flex-row w-full justify-between items-center gap-4"> <p className=" text-sm text-muted-foreground">Share on social media:</p> <div className=" flex space-x-2"> <Button > <Twitter className=" h-4 w-4"/> Twitter </Button> <Button > <Facebook className=" h-4 w-4"/> Facebook </Button> <Button > <Share className=" h-4 w-4" /> LinkedIn </Button> </div> </div> </CardFooter> </Card>) ;'"'"
}'"'"'"