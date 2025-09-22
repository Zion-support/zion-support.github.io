:src_backup/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD

import React, { useState } from "react",
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Plus, Trash2 } from 'lucide-react'
import { AppPlatform } from "./MetadataManager",
interface ChangelogManagerProps {
  platform: AppPlatform
}

type ChangelogEntry = {

  id: string;
  version: string;
  date: string;
  changes: string,

:src/components/mobile-app/admin/ChangelogManager.tsx
}
    })
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD:src_backup/components/mobile-app/admin/ChangelogManager.tsx
  const handleRemoveEntry = (id: string) => {
<<<<<<< HEAD
  const handleRemoveEntry = (id: string) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    setEntries(entries.filter(entry => entry.id !== id)),
  };
  )
};  const handleRemoveEntry = (id: string,) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    setEntries(entries.filter(entry => entry.id !== id))
  },

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target,
    setNewEntry(prev => ({ ...prev, [name]: value }))
:src/components/mobile-app/admin/ChangelogManager.tsx
},
  return (
    <Card className="bg-zion-blue border-zion-purple/30">
      <CardHeader>
        <CardTitle>Version History</CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="space-y-4">"
          <div className="flex flex-col md:flex-row gap-3">"
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input"
                placeholder="Version (e.g. 1.0.1)""
                name="version"
:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                value={newEntry.version}
                onChange={handleInputChange}

:src/components/mobile-app/admin/ChangelogManager.tsx
              />
:src_backup/components/mobile-app/admin/ChangelogManager.tsx
              <Input
                type="date"
=======
              <Input"
                type="date""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/admin/ChangelogManager.tsx
                name="date"

:src/components/mobile-app/admin/ChangelogManager.tsx
              disabled = {!newEntry.version || !newEntry.changes,}
:src_backup/components/mobile-app/admin/ChangelogManager.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Plus, Trash2 } from 'lucide-react';
import { AppPlatform } from "./MetadataManager",;
interface ChangelogManagerProps {;
  platform: AppPlatform;
}
:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
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
  };
  return (;
=======
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/admin/ChangelogManager.tsx
    <Card className="bg-zion-blue border-zion-purple/30">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <CardHeader>;
        <CardTitle>Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space-y-4">;"
          <div className="flex flex-col md:flex-row gap-3">;"
            <div className="flex-1 grid grid-cols-2 gap-3">;
:src_backup/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
              <Input;
                placeholder="Version (e.g. 1.0.1)";
                name="version";
                value={newEntry.version}
                onChange={handleInputChange}
              />;
=======

:src_backup/components/mobile-app/admin/ChangelogManager.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Input;
                type="date";
                name="date";
                value={newEntry.date}
                onChange={handleInputChange}
              />;
            </div>;
            <Button;
              onClick={handleAddEntry}
              disabled={!newEntry.version || !newEntry.changes}

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            >
=======

            >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/admin/ChangelogManager.tsx
              <Plus className="mr-2 h-4 w-4" />
              Add;
            </Button>
          </div>
:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
          <Textarea
            placeholder="What's new in this version?"
            name="changes"

            value={newEntry.changes}
            onChange={handleInputChange}
            rows={3}
          />
          "
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">
            {entries.map((entry) => (
              <div;
                key={entry.id}
:src/components/mobile-app/admin/ChangelogManager.tsx
=======

:src_backup/components/mobile-app/admin/ChangelogManager.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/admin/ChangelogManager.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"
              >"
                <div className="flex justify-between mb-2">"
                  <div className="flex items-center gap-3">"
                    <span className="text-zion-cyan font-semibold">v{entry.version}</span>"
                    <span className="text-sm text-gray-400">{entry.date}</span>
</div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button
                    variant="ghost"
                    size="sm"
          />;
"
          <div className="border-t border-zion-purple/20 pt-4 space-y-4">;
            {entries && entries.map((entry,) => (;
              <div;
                key = {entry && entry.id,}"
                className="p-3 rounded border border-zion-purple/20 bg-zion-blue-dark">;"
                <div className="flex justify-between mb-2">;"
                  <div className="flex items-center gap-3">;"
                    <span className="text-zion-cyan font-semibold">v{entry && entry.version}</span>;"
                    <span className="text-sm text-gray-400">{entry && entry.date}</span>;
                  </div>;
                  <Button"
                    variant="ghost""
                    size="sm"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    onClick={() => handleRemoveEntry(entry.id)}

:src_backup/components/mobile-app/admin/ChangelogManager.tsx

<<<<<<< HEAD:src/components/mobile-app/admin/ChangelogManager.tsx
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/admin/ChangelogManager.tsx
                    className="text-gray-400 hover:text-red-400 p-1 h-auto"
                  >"
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>"
                <p className="text-sm whitespace-pre-wrap">{entry.changes}</p>
              </div>
            ))}
:src_backup/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD

            {entries.length === 0 && (
              <p className="text-center text-gray-400 py-4">No changelog entries yet</p>
            )}

};

:src/components/mobile-app/admin/ChangelogManager.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );

const handleRemoveEntry = (id: string) =>: any {}
    set_entries (entries.filter (entry => entry.id !== id)),
  }
  );
}  const handleRemoveEntry = (id: string, ) =>: any {}
    set_entries (entries.filter (entry => entry.id !== id));
  },
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement>, ) =>: any {}
    const { name, value } = e.target,
    setNewEntry (prev => ({ ...prev, [name]: value }));
  },
  return ("
    <Card className="bg - zion - blue border - zion - purple / 30">;
      <CardHeader>;
        <CardTitle > Version History</CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="space - y-4">;"
          <div className="flex flex - col md:flex - row gap - 3">;"
            <div className="flex - 1 grid grid - cols - 2 gap - 3">;
              <Input;"
                placeholder="Version (e.g. 1.0.1)";"
                name="version";
                value = {new_entry.version, }
                on_change = {handleInputChange, }
              />;
              <Input;"
                type="date";"
                name="date";
                value = {new_entry.date, }
                on_change = {handleInputChange, }
              />;
            </div>;
            <Button;
              on_click = {handleAddEntry, }
              disabled = {!new_entry.version || !new_entry.changes, }
            >;"
              <Plus className="mr - 2 h - 4 w - 4" />;
              Add;
            </Button>;
          </div>;
          <Textarea;'"
            placeholder="What's new in this version?";"
            name="changes";
            value = {new_entry.changes, }
            on_change = {handleInputChange, }
            rows = {3, }
          />;"
          <div className="border - t border - zion - purple / 20 pt - 4 space - y-4">;
            {entries.map ((entry, ) => (
              <div;
                key = {entry.id, }"
                className="p - 3 rounded border border - zion - purple / 20 bg - zion - blue - dark";
              >;"
                <div className="flex justify - between mb - 2">;"
                  <div className="flex items - center gap - 3">;"
                    <span className="text - zion - cyan font - semibold">v{entry.version}</span>;"
                    <span className="text - sm text - gray - 400">{entry.date}</span>;
                  </div>;
                  <Button;"
                    variant="ghost";"
                    size="sm";
                    on_click = {(, ) => handleRemoveEntry (entry.id), }"
                    className="text - gray - 400 hover:text - red - 400 p - 1 h - auto";
                  >;"
                    <Trash2 className="h - 4 w - 4" />;
                  </Button>;
                </div>;"
                <p className="text - sm whitespace - pre - wrap">{entry.changes}</p>;
              </div>))}
            {entries.length === 0 && ("
              <p className="text - center text - gray - 400 py - 4">No changelog entries yet</p>)}
          </div>;
        </div>;
      </CardContent>;
    </Card>);
},
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
<<<<<<< HEAD:src/components/mobile-app/admin/ChangelogManager.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/mobile-app/admin/ChangelogManager.tsx
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
}
  );
};
setEntries ([entry, ...entries]);
setNewEntry ({;
  version: "";
date: new Date () .toISOString () .split ('T') [0] || new Date () .toLocaleDateString ('en-CA');
};";
  handleAddEntry ;
}disabled= {;
  !newEntry.version || !newEntry.changes ";
}> <Plus className=" mr-2 h-4 w-4"/> Add </Button> </div> <Textarea key= {;
  entry.id ";
}className=" p-3 rounded border border-zion-purple/20 bg-zion-blue-dark"> > <Trash2 className=" h-4 w-4" /> </Button> </div>) ;
}</div> </div> </CardContent> </Card>) ;
};
'"
:src/components/mobile-app/admin/ChangelogManager.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
};'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/mobile-app/admin/ChangelogManager.tsx
