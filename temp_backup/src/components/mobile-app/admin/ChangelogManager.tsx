/* eslint-disable */
 interface ChangelogManagerProps {;
  platform: AppPlatform ;
}type ChangelogEntry = {;
  id: string;
version: string;
date: string;
changes: string ;
};
platform ;
}) => {;
  const [entries,  setEntries] = useState<ChangelogEntry[]> ([ {;
  const handleAddEntry = () => {;
  if (!newEntry.version || !newEntry.changes) return;
const entry: ChangelogEntry = {;
  ...newEntry;
id: Math.random () .toString (36) .substring (2, 9) ;
};
setEntries ([entry, ...entries]);
setNewEntry ({;
  version: "";"
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA');""
};";""
  handleAddEntry ;"
}disabled= {;""
  !newEntry.version || !newEntry.changes ";""
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {;""
  entry.id ";""
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) ;
}</div> </div> </CardContent> </Card>) ;'"
};'"'"
'"'"'"