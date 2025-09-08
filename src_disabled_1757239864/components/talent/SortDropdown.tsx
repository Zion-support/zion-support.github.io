<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",



<<<<<<< HEAD
=======



>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'

<<<<<<< HEAD





=======
import { Button } from "@/components/ui/button",
import { SORT_OPTIONS } from "@/data/sortOptions",
import { SortDesc, ChevronDown } from 'lucide-react'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  sortOption: string

  setSortOption: (option: string) => void
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba



export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {
interface SortDropdownProps {;
  sortOption: string,;
  setSortOption: (option: string) => void;
}

export function SortDropdown(): any ({ sortOption, setSortOption }: SortDropdownProps) {;
  return (


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light"
      >

        {SORT_OPTIONS.map((option) => (
<<<<<<< HEAD
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${


=======

          <DropdownMenuItem
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
>>>>>>> origin/cursor/delete-old-data-records-6bba


              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
import React from "react",;
import { Button } from "@/components/ui/button",;
import { SORT_OPTIONS } from "@/data/sortOptions",;
import { SortDesc, ChevronDown } from 'lucide-react';
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from "@/components/ui/dropdown-menu",;
interface SortDropdownProps {;
  sortOption: string;
  setSortOption: (option: string) => void;
}
;
export function SortDropdown({ sortOption, setSortOption }: SortDropdownProps) {;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button;
          variant="outline";
          className="w-full justify-between border-zion-blue-light text-white";
        >;
          <div className="flex items-center gap-2">;
            <SortDesc className="h-4 w-4 text-zion-purple" />;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;



              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";

            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}

<<<<<<< HEAD


=======
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || "Sort by"}
          </div>;
          <ChevronDown className="h-4 w-4 ml-2 opacity-50" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>;
  );
};
}
}
}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${;
              sortOption === option.value ? "bg-zion-purple/20 text-zion-purple" : "";
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
<<<<<<< HEAD


  );
}

=======

  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger } from '@/components/ui/ dropdown - menu';
interface SortDropdownProps {
  sort_option: string,
  setSortOption: (option: string) => void;
}
export function SortDropdown() {return (<DropdownMenu>;
      <DropdownMenuTrigger asChild>;
<Button;
          variant='outline;
          className=w-full justify-between border-zion-blue-light text-white';
        >;
          <div className='flex items-center gap-2>;
            <SortDesc className=h-4 w-4 text-zion-purple' />;
            {SORT_OPTIONS.find(opt => opt.value === sortOption)?.label |;
              'Sort by}
          </div>;
          <ChevronDown className=h-4 w-4 ml-2 opacity-50' />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent;
        align='start;
        className=w-[200px] bg-zion-blue-dark border-zion-blue-light';
      >;
        {SORT_OPTIONS.map(option => (<DropdownMenuItem;
            key={option.value}
            onClick={() => setSortOption(option.value)}
            className={`text-white hover:bg-zion-blue-light/30 cursor-pointer ${sortOption === option.value;
                ? 'bg-zion-purple/20 text-zion-purple;
                : ';
            }`}
          >;
            {option.label}
          </DropdownMenuItem>;
        ))}
      </DropdownMenuContent>;
    </DropdownMenu>);
}
      <DropdownMenuContent;
        align="start";
        className="w-[200px] bg-zion-blue-dark border-zion-blue-light";
      >;
        {SORT_OPTIONS.map((option) => (;
          <DropdownMenuItem;
            key={option.value}

<<<<<<< HEAD

=======
            onClick={() => setSortOption(option.value)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
