<<<<<<< HEAD


=======
<<<<<<< HEAD
:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent  } from "@/components/ui/card";
import { Button  } from "@/components/ui/button";
import { Input  } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
=======
import React, { useState } from "react,
import { Card, CardHeader, CardTitle, CardContent  } from @/components/ui/card";
import { Button  } from "@/components/ui/button;
import { Input  } from @/components/ui/input";
import { Textarea } from "@/components/ui/textarea;
import { Plus, Trash2 } from 'lucide-react
import { AppPlatform } from ./MetadataManager";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {

  id: string;
  version: string;
  date: string;
  changes: string,

  id: string,

  version: string,
  date: string,
  changes: string;
},

export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {}
  const [entries, setEntries] = useState<ChangelogEntry[]>([]
    {}
      id: "1","
      version: "1.0.0","
      date: "2025-05-15","
      changes: "Initial release of the Zion AI Marketplace app."
    }
  ]),
  "
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({"
    version: "",
    date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),"
    changes: ""
  }),
  
  const handleAddEntry = () => {}
    if (!newEntry.version || !newEntry.changes) return,
    
    const entry: ChangelogEntry = {}
      ...newEntry,
      id: Math.random().toString(36).substring(2, 9)
    },
    
    setEntries([entry, ...entries]),
    setNewEntry({"
      version: "",'
      date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),"
      changes: ""
    })
  },
<<<<<<< HEAD


=======
<<<<<<< HEAD
  const handleRemoveEntry = (id: string) => {
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    setEntries(entries.filter(entry => entry.id !== id))
  }
  )
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleRemoveEntry = (id: string) => {

    setEntries(entries.filter(entry => entry.id !== id)),
  };
  )
};  const handleRemoveEntry = (id: string,) => {

    setEntries(entries.filter(entry => entry.id !== id))
  },
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,

    setNewEntry(prev => ({ ...prev, [name]: value }))



<<<<<<< HEAD
import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from "./MetadataManager";
=======
import { Plus, Trash2 } from 'lucide-react'import { AppPlatform } from ./MetadataManager";
<<<<<<< HEAD

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input
<<<<<<< HEAD
                placeholder="Version (e.g. 1.0.1)"
                name="version"
                value = {newEntry.version,}
                onChange = {handleInputChange,}
=======
                placeholder="Version (e.g. 1.0.1)
                name=version"
                value = {newEntry.version}
                onChange = {handleInputChange}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

                value={newEntry.version}
                onChange={handleInputChange}

              />

              <Input
                type="date"

<<<<<<< HEAD

                name="date"

=======
<<<<<<< HEAD
                name="date"
=======
<<<<<<< HEAD
                name=date"
>>>>>>> origin/resolved-merge-conflicts
:src/components/mobile-app/admin/ChangelogManager.tsx
                value = {newEntry.date,}
                onChange = {handleInputChange,}
              />
            </div>
            <Button
<<<<<<< HEAD
              onClick = {handleAddEntry,}
              disabled = {!newEntry.version |!newEntry.changes,}
=======
              onClick = {handleAddEntry}
              disabled = {!newEntry.version |!newEntry.changes}
=======
                name="date"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

              disabled = {!newEntry.version || !newEntry.changes,}

import { AppPlatform } from "./MetadataManager",;
interface ChangelogManagerProps {;
  platform: AppPlatform;
}

;
type ChangelogEntry = {;
  id: string,;
  version: string,;
  date: string,;
  changes: string;
},;
export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {;
  const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {;"
      id: "1",;"
      version: "1.0.0",;"
      date: "2025-05-15",;"
      changes: "Initial release of the Zion AI Marketplace app.";
    }
  ]),;"
  const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({;"
    version: "",;'
    date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),;"
    changes: "";
  }),;
  const handleAddEntry = () => {;
    if (!newEntry.version || !newEntry.changes) return,;
    const entry: ChangelogEntry = {;
      ...newEntry,;
      id: Math.random().toString(36).substring(2, 9);
    },;
    setEntries([entry, ...entries]),;
    setNewEntry({;"
      version: "",;'
      date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),;"
      changes: "";
    });
  },;
  const handleRemoveEntry = (id: string) => {;
    setEntries(entries.filter(entry => entry.id !== id));
  },;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target,;
    setNewEntry(prev => ({ ...prev, [name]: value }));
<<<<<<< HEAD


=======
<<<<<<< HEAD
    <Card className="bg-zion-blue border-zion-purple/30">;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Card className=bg-zion-blue border-zion-purple/30>;
>>>>>>> origin/resolved-merge-conflicts
interface ChangelogManagerProps  {platform: AppPlatform;
}type ChangelogEntry = {id: string;
  version: string;
  date: string;
  changes: string}
    })}id: string,version: string,date: string,changes: string;
},export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {id: "1",version: "1.0.0",date: "2025-05-15",changes: "Initial release of the Zion AI Marketplace app.";
    }
  ]),const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({version: "",date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),changes: "";
  }),const handleAddEntry = () => {if (!newEntry.version || !newEntry.changes) return,const entry: ChangelogEntry = {...newEntry,id: Math.random().toString(36).substring(2, 9)},setEntries([entry, ...entries]),setNewEntry({version: "",date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),changes: "";
    })},const handleRemoveEntry = (id: string) => {setEntries(entries.filter(entry => entry.id !== id))}
  )const handleRemoveEntry = (id: string) => {setEntries(entries.filter(entry => entry.id !== id))})}const handleRemoveEntry = (id: string,) => {setEntries(entries.filter(entry => entry.id !== id))}
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {const { name, value } = e.target;
<<<<<<< HEAD
    setNewEntry(prev => ({ ...prev, [name]: value }))}import { Plus, Trash2 } from 'lucide-react'import { AppPlatform  } from './MetadataManager';
  return (<Card className="bg-zion-blue border-zion-purple/30">;
  };
=======
    setNewEntry(prev => ({ ...prev, [name]: value }))}import { Plus, Trash2 } from 'lucide-react'import { AppPlatform  } from ./MetadataManager;
  return (<Card className=bg-zion-blue border-zion-purple/30>;
  }
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (;

    <Card className="bg-zion-blue border-zion-purple/30">;

      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;

              <Input;
                placeholder="Version (e.g. 1.0.1)";

                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                onChange={handleInputChange}/>;
              <Input;
                type="date";
                name="date";
              disabled = {!newEntry.version || !newEntry.changes}import React, { useState } from "react",import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",import { Button } from "@/components/ui/button",import { Input } from "@/components/ui/input",import { Textarea } from "@/components/ui/textarea",import { Plus, Trash2  } from 'lucide-react';
import { AppPlatform } from "./MetadataManager",interface ChangelogManagerProps  {platform: AppPlatform;
}type ChangelogEntry = {id: string,version: string,date: string,changes: string;
},export const ChangelogManager: React.FC<ChangelogManagerProps> = ({ platform }) => {const [entries, setEntries] = useState<ChangelogEntry[]>([;
    {id: "1",version: "1.0.0",date: "2025-05-15",changes: "Initial release of the Zion AI Marketplace app.";
    }
  ]),const [newEntry, setNewEntry] = useState<Omit<ChangelogEntry "id">>({version: "",date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),changes: "";
  }),const handleAddEntry = () => {if (!newEntry.version || !newEntry.changes) return,const entry: ChangelogEntry = {...newEntry,id: Math.random().toString(36).substring(2, 9)},setEntries([entry, ...entries]),setNewEntry({version: "",date: new Date().toISOString().split('T')[0] || new Date().toLocaleDateString('en-CA'),changes: "";
    })},const handleRemoveEntry = (id: string) => {setEntries(entries.filter(entry => entry.id !== id))},const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {const { name, value } = e.target,setNewEntry(prev => ({ ...prev, [name]: value }))},return (<Card className="bg-zion-blue border-zion-purple/30">;
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-4">;
          <div className="flex flex-col md:flex-row gap-3">;
            <div className="flex-1 grid grid-cols-2 gap-3">;<Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;<Input;
<<<<<<< HEAD
                type="date";
                name="date";
=======
                type="date;
                name=date";
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                name="date";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}

            >

              <Plus className="mr-2 h-4 w-4" />
              Add;
            </Button>
          </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              />;
            </div>;
            <Button
              onClick = {handleAddEntry,}
              disabled = {!newEntry && newEntry.version || !newEntry && newEntry.changes,}>;
              disabled={!newEntry.version || !newEntry.changes}>;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;
              />;
            </div>;
            <Button;
              onClick = {handleAddEntry}
              disabled = {!newEntry && newEntry.version || !newEntry && newEntry.changes}>;
              <Plus className="mr-2 h-4 w-4" />;
              Add;
            </Button>;
          </div>;<Textarea;
            placeholder="What's new in this version?";
            name="changes";
            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div 
                key={entry.id}

=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Textarea
            placeholder="What's new in this version?"

<<<<<<< HEAD

=======
<<<<<<< HEAD
            name="changes"
=======
<<<<<<< HEAD
            name=changes"
>>>>>>> origin/resolved-merge-conflicts
:src/components/mobile-app/admin/ChangelogManager.tsx
            value = {newEntry.changes,}
            onChange = {handleInputChange,}
            rows = {3,}
          />
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry,) => (
              <div
                key = {entry.id,}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>
                    <span className="text-sm text-gray-400">{entry.date}</span>
                  </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          />;
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries.map((entry) => (<div;
                key={entry.id}className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark";
              >;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>;
                    <span className="text-sm text-gray-400">{entry.date}</span>;
                  </div>;
          />;<div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry,) => (<div;
                key = {entry && entry.id}
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;
                <div className="flex justify-between mb-2">;
                  <div className="flex items-center gap-3">;
                    <span className="text-zion-cyan font-semibold">v{entry && entry.version}</span>;
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick = {(,) => handleRemoveEntry(entry.id),}
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Button
                    variant="ghost
                    size=sm"
                    onClick = {(,) => handleRemoveEntry(entry.id)}
<<<<<<< HEAD

=======
=======
            name="changes"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          "
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div;
                key={entry.id}

                    onClick={() => handleRemoveEntry(entry.id)}

                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >"
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>"
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
            ))}
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba

            )}

};

          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );

<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <Button;
                    variant="ghost";
                    size="sm";
                    onClick={() => handleRemoveEntry(entry.id)}className="text-gray-400 hover:text-red-400 p-1 h-auto";
                  >;
                    <Trash2 className="h-4 w-4" />;
                  </Button>;
                </div>;
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>;
              </div>;
            ))}{entries && entries.length === 0 && (<p className="text-center text-gray-400 py-4">No changelog entries yet</p>;
            )}</div>;
        </div>;
      </CardContent>;
    </Card>;
  )const handleRemoveEntry = (id: string) =>: any {set_entries (entries.filter (entry => entry.id !== id))}
  )}  const handleRemoveEntry = (id: string, ) =>: any {set_entries (entries.filter (entry => entry.id !== id))},const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>, ) =>: any {const { name, value } = e.target,setNewEntry (prev => ({ ...prev, [name]: value }))},return (<Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle > Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-4">;
          <div className="flex flex - col md:flex - row gap - 3">;
            <div className="flex - 1 grid grid - cols - 2 gap - 3">;
              <Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value = {new_entry.version }
                on_change = {handleInputChange }
              />;
              <Input;
                type="date";
                name="date";
                value = {new_entry.date }
                on_change = {handleInputChange }
              />;
            </div>;
            <Button;
              on_click = {handleAddEntry }
              disabled = {!new_entry.version || !new_entry.changes }
            >;
              <Plus className="mr - 2 h - 4 w - 4" />;
              Add;
            </Button>;
          </div>;
          <Textarea;
            placeholder="What's new in this version?";
            name="changes";
            value = {new_entry.changes }
            on_change = {handleInputChange }
            rows = {3 }
          />;
          <div className="border - t border - zion - purple / 20 pt - 4 space - y-4">;
            {entries.map ((entry, ) => (<div;
                key = {entry.id }
                className="p - 3 rounded border border - zion - purple / 20 bg - zion - blue - dark";
              >;
                <div className="flex justify - between mb - 2">;
                  <div className="flex items - center gap - 3">;
                    <span className="text - zion - cyan font - semibold">v{entry.version}</span>;
                    <span className="text - sm text - gray - 400">{entry.date}</span>;
                  </div>;
                  <Button;
                    variant="ghost";
                    size="sm";
                    on_click = {(, ) => handleRemoveEntry (entry.id) }
                    className="text - gray - 400 hover:text - red - 400 p - 1 h - auto";
                  >;
                    <Trash2 className="h - 4 w - 4" />;
                  </Button>;
                </div>;
                <p className="text - sm whitespace - pre - wrap">{entry.changes}</p>;
              </div>))}
            {entries.length === 0 && (<p className="text - center text - gray - 400 py - 4">No changelog entries yet</p>)}
          </div>;
        </div>;
      </CardContent>;
    </Card>);
},
;
};

>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from './MetadataManager';

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
  platform: AppPlatform
    </Card>)}import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import { AppPlatform  } from './MetadataManager';
interface ChangelogManagerProps  {platform: AppPlatform;
}
  )}setEntries ([entry, ...entries])setNewEntry ({version: "";
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA')}";
  handleAddEntry ;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from './MetadataManager';

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager";
interface ChangelogManagerProps {
  platform: AppPlatform
});
};
<<<<<<< HEAD

=======
<<<<<<< HEAD
setEntries ([entry, ...entries]);
setNewEntry ({;
  version: "";
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA');
};";
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  handleAddEntry ;
}disabled= {;
  !newEntry.version || !newEntry.changes ";
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {;
  entry.id ";
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) ;
}</div> </div> </CardContent> </Card>) ;
};
'"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}disabled= {!newEntry.version || !newEntry.changes ";
<<<<<<< HEAD
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {entry.id ";
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>)}</div> </div> </CardContent> </Card>)}'";
=======
}> <Plus className= mr-2 h-4 w-4/> Add </Button> </div> <Textarea key= {entry.id ";
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark> > <Trash2 className= h-4 w-4" /> </Button> </div>)}</div> </div> </CardContent> </Card>)}'";
<<<<<<< HEAD

=======
=======
'"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
