 const [selected, setSelected] = useState<any | null> (null);
}return (<EnhancedLayout> <div className="max-w-7xl mx-auto" > <div className="flex items-center justify-between mb-4" > <h1 className="text-2xl font-semibold" >Admin Content Review</h1> </div> </div> <div className="overflow-auto border rounded" > <table className="min-w-full text-sm" > <thead className="bg-gray-50 dark:bg-gray-900" > <tr> <th className="text-left px-3 py-2" >ID</th> <th className="text-left px-3 py-2" >Type</th> <th className="text-left px-3 py-2" >User</th> <th className="text-left px-3 py-2" >Reason</th> <th className="text-left px-3 py-2" >AI Scores</th> <th className="text-left px-3 py-2" >Created</th> <th className="text-left px-3 py-2" >Status</th> <th className="text-left px-3 py-2" >Actions</th> </tr> </thead> <tbody>) 
}</tbody> </table> </div> </div> {
  selected && (<ModerationModal flag= {
  selected 
}onClose= {
  () => setSelected (null) 
}onAction= {
  handleAction 
}/>) 
}</EnhancedLayout>) 
}