import { useCurrency } from "@/hooks/useCurrency";
export default function ListingDetail() {
// useParams may be untyped in this environment so avoid passing a;
// type argument and cast the result instead to prevent TS2347 errors.;
target.src = "https: //ui-avatars.com/api/?name=" + encodeURIComponent(listing.author.name)
}}
/>;
</div>;
) : (
<div className="h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center">;
<span className="text-lg font-medium text-zion-purple">;
{listing.author.name.charAt(0)}
</span>;
</div>;
)}
<div>;
<p className="font-medium text-white">;
{listing.author.name}
</p>;
<p className="text-xs text-zion-slate-light">;
Member since 2022;
</p>;
</div>;
</div>;
</div>;
{/* Additional Info */}
<div className="border-t border-zion-blue-light mt-6 pt-6">;
<div className="flex justify-between mb-2">;
<span className="text-zion-slate-light">Listed on</span>;
<span className="text-white">;
{new Date(listing.createdAt).toLocaleDateString()}
</span>;
</div>;
<div className="flex justify-between mb-2">;
<span className="text-zion-slate-light">ID</span>;
<span className="text-white">{listing.id}</span>                  </div>                      </div>;
)}
<div>;
<p className="font-medium text-white">{listing.author.name}</p>;
<p className="text-xs text-zion-slate-light">Member since 2022</p>;
</div>;
</div>;
</div>;
{/* Additional Info */}
<div className="border-t border-zion-blue-light mt-6 pt-6">;
<div className="flex justify-between mb-2">;
<span className="text-zion-slate-light">Listed on</span>;
<span className="text-white">{new Date(listing.createdAt).toLocaleDateString()}</span>;
</div>;
<div className="flex justify-between mb-2">;
<span className="text-zion-slate-light">ID</span>;
<span className="text-white">{listing.id}</span>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
<ChatWidget;
roomId = {listing.id}
recipientId = {listing.author.id}
isOpen = {isChatOpen}
onClose = {() => setIsChatOpen(false)}
/>;
{/* Contact Dialog */}
<Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>;
<DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md">;
<DialogHeader>;
<DialogTitle className="text-xl font-bold text-white">;
Contact Publisher;
</DialogTitle>;
</DialogHeader>;
<ProfileContact;
email={listing.author.email} // TypeScript now knows this might be undefined profileName={listing.author.name}
profileType="service"          />            profileType="service";
<DialogHeader>;
<DialogTitle className="text-xl font-bold text-white">Contact Publisher</DialogTitle>;
</DialogHeader>;
<ProfileContact;
email={listing.author.email} // TypeScript now knows this might be undefined profileName={listing.author.name}
profileType="service";
/>;
</DialogContent>;
</Dialog>;
</>;
);
}/>) : (<Button </Button>) ";
}<Button > <MessageSquare className=" h-4 w-4 mr-2"/> Contact Publisher </Button> </div> ;
}";
}/> </div>) : (<div className=" h-12 w-12 rounded-full bg-zion-purple/20 flex items-center justify-center"> <span className=" text-lg font-medium text-zion-purple"> {listing.author.name.charAt (0) ;
}</span> </div>) ";
}<div> <p className=" font-medium text-white"> {listing.author.name ";
}</p> <p className=" text-xs text-zion-slate-light">Member since 2022</p> listing.id ;
}recipientId= {listing.author.id ;
}isOpen= {isChatOpen ;
}onClose= {() => setIsChatOpen (false) ";
}/> <DialogHeader> <DialogTitle className=" text-xl font-bold text-white" >Contact Publisher</DialogTitle> </DialogHeader> <ProfileContact /> </DialogContent> </Dialog> </>) ;
}'"}