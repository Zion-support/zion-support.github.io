 useEffect ( () => {
  //Fetch conversations when component mounts const loadData = async () => {
  try {
  
}
};
}, [fetchConversations]);
}const roomId = `msg-$ {
  activeConversation.id 
}`;
setActiveCall (roomId);
//Show toast notification //Navigate to video call page navigate (`/call/$ {
  roomId 
}`) 
};
return (<ProtectedRoute> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto py-8 px-4" > <div className="flex justify-between items-center mb-6" > <h1 className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold text-white flex items-center gap-2` 
}> <MessageSquare className="h-6 w-6" /> activeConversation && (<Button onClick= {
  startVideoCall 
}className="flex items-center gap-2 bg-zion-purple hover:bg-zion-purple-light" > <Video className="h-4 w-4" /> Start Call </Button>) 
}</div> </div>) : (<ConversationsList conversations= {
  conversations 
}activeConversation= {
  activeConversation 
}setActiveConversation= {
  setActiveConversation 
}markAsRead= {
  markAsRead 
}/>) 
}{
  /* Conversation Detail */ 
}<ConversationDetailView /> </div> </div> </div> </div> </ProtectedRoute>) 
}