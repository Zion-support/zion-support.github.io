/* eslint-disable */
 interface DiscussionPost {;
  id: number;
author: string;
avatar?: string;
time: string;
title: string;
body: string ;
}const initialPosts: DiscussionPost[] = [ {;
  id: 1;
author: "Anna Zhou";";""
time: "2h ago";";""
title: "What AI trends are you most excited for in 2025?";";""
body: "Let's spark some ideas! I'm excited to see multi-modal models and open-source AI tools grow. What are you watching?" ;
};
{;
  id: 2;
const handleAddPost = () => {;
  if (!newTitle.trim () || !newBody.trim () ) return;"
setPosts ([ {;""
  id: Date.now ();";""
author: "You";";""
time: "Now";
title: newTitle;
body: newBody ;"
};""
...posts]);";""
setNewTitle ("");";""
setNewBody ("");"
setShowNew (false);""
};";""
  newTitle ;
}onChange= {;
  (e: React.ChangeEvent<HTMLInputElement>) => setNewTitle (e.target.value) ;"
}maxLength= {;""
  80 ";""
}/> <Textarea /> <div className=" flex gap-3 justify-end"> <Button > Cancel </Button> <Button > Post </Button> </div> </CardContent> </Card>) ";""
}.join ("") .toUpperCase () .slice (0, 2) ";""
}</AvatarFallback> </Avatar> <div> <div className="flex gap-2 items-center"> <span className="font-semibold text-white"> {;""
  post.author ";""
}</span> <span className="text-xs text-zion-slate-light"> {;""
  post.time ";""
}</span> </div> <h3 className="text-lg font-bold text-zion-cyan mt-1"> {;""
  post.title ";""
}</h3> <p className="text-zion-slate-light mt-1 whitespace-pre-line"> {;"
  post.body ;""
}</p> </div> </CardContent> </Card>) ) ";""
}</div> <div className="mt-8 text-xs text-zion-slate-dark text-center"> 🚀 Stay engaged! Top contributors are regularly featured on the homepage. </div> </div>) ;'"
};'"'"
'"'"'"