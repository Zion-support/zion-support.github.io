
:src/components/resume-builder/wizard/ResumeVersionSelector.tsx
import { useState } from 'react';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuSeparator;
  DropdownMenuTrigger 
 } from '@/components/ui/dropdown-menu';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle  } from '@/components/ui/dialog';
import { useState } from 'react'
import {import { useState } from 'react'
import {
  DropdownMenu
  DropdownMenuContent
  DropdownMenuItem
  DropdownMenuSeparator
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
  Dialog
  DialogContent
  DialogFooter
  DialogHeader
  DialogTitle
} from '@/components/ui/dialog'
import { Save, ChevronDown, Plus, Loader2 } from 'lucide-react'
import { Resume  } from '@/types/resume';
import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void
  const handleCreateNewVersion = async () => {
    if (newResumeTitle.trim()) {
      setIsLoading(true)
      const resumeId = await createResume({ title: newResumeTitle.trim() })
      if (resumeId) {
        await fetchResume(resumeId);
        onResumeChange(resumeId);
        setSaveDialogOpen(false);
setNewResumeTitle('');
      }
      setIsLoading(false);
    }
  }
  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-muted-foreground'>Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='sm' className='gap-2'>
            {currentResume?.basic_info?.title |'My Resume'}
            <ChevronDown className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {existingResumes.map(resume => (
            <DropdownMenuItem
              key={resume.id}
              onClick={() => onResumeChange(resume.id!)}
              className='cursor-pointer'
            >
              {resume.basic_info.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
<DropdownMenuItem
            onClick={() => setSaveDialogOpen(true)}
            className='cursor-pointer'
          >
            <Plus className='h-4 w-4 mr-2' />
            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
<Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Save as new resume version</DialogTitle>
          </DialogHeader>
          <div className='py-4'>
            <Input
              value={newResumeTitle}
              onChange={e => setNewResumeTitle(e.target.value)}
              placeholder='Enter resume title (e.g. DevOps Resume)'
            />
          </div>
          <DialogFooter>
            <Button variant='outline' onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateNewVersion}
              disabled={!newResumeTitle.trim() |isLoading}
              className='gap-2'
            >
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
              <Save className='h-4 w-4' />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
> {;
  resume.basic info.title ;
}</DropdownMenuItem>) ) ;
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h-4 w-4 mr-2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle>Save as new resume version</DialogTitle> </DialogHeader> <div className="py-4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>) ;
}"
import { useResume } from '@/hooks/useResume';
import { useResume } from '@/hooks/useResume';'
:temp-disabled/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
interface ResumeVersionSelectorProps {
  // TODO: Implement
}
  currentResume: Resume;,
  onResumeChange: (resumeId: string) => void;
export function ResumeVersionSelector(): any ({;
  currentResume,;
  onResumeChange,;)
}: ResumeVersionSelectorProps) {;
  const { createResume, fetchResume } = useResume();
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newResumeTitle, setNewResumeTitle] = useState();
  const [existingResumes, setExistingResumes] = useState<Resume[]>([]);

  const [existing_resumes, setExistingResumes] = useState < Resume[]>([]);
  const [is_loading, setIsLoading] = useState (false);
  const handleCreateNewVersion = async () => {
    if () {) {
  $2;
      setIsLoading (true);
      const resume_id = await create_resume ({ title: newResumeTitle.trim () });
      // Check condition;
if ( {) {
        await fetch_resume (resume_id);
        onResumeChange (resume_id);
        setSaveDialogOpen (false);
        setNewResumeTitle ();
      setIsLoading (false);








  return (
)
        setNewResumeTitle()
      setIsLoading(false)
  };


    <div className="flex items-center gap-2">"
</div>"
      <span className="text-sm text-muted-foreground">Resume:</span>"
      <DropdownMenu>

        <DropdownMenuTrigger asChild>
"
          <Button variant="outline" size="sm" className="gap-2">"
            <ChevronDown className="h-4 w-4" />"

          
        
        <DropdownMenuContent align="end">"

            <DropdownMenuItem;"
    <div className='flex items - center gap - 2'>;

      <span className='text - sm text - muted - foreground'>Resume:</span>;
      <DropdownMenu>;

        <DropdownMenuTrigger as_child>;

          <Button variant='outline' size='sm' className='gap - 2'>;

            <ChevronDown className='h - 4 w - 4' />;

          ;
        <DropdownMenuContent align='end'>;

            <DropdownMenuItem;
              key={resume.id})
              on_click={() => onResumeChange (resume.id!)}

        <DropdownMenuContent align="end">;"

              key={resume.id}
    <div className='flex items-center gap-2'>;
</div>
      <span className='text-sm text-muted-foreground'>Resume:</span>;

        <DropdownMenuTrigger asChild>;

          <Button variant='outline' size='sm' className='gap-2'>;

            <ChevronDown className='h-4 w-4' />;


              key={resume && resume.id}
              onClick={() => onResumeChange(resume && resume.id!)}



          <DropdownMenuSeparator />

          <DropdownMenuSeparator />;


            onClick={() => setSaveDialogOpen(true)}
            <Plus className="h-4 w-4 mr-2" />"

          
        
            <Plus className='h-4 w-4 mr-2' />            Save as new version;

            <Plus className="h-4 w-4 mr-2" />;"

            ))}

            on_click={() => setSaveDialogOpen (true)}
            <Plus className='h - 4 w - 4 mr - 2' />            Save as new version;

            <Plus className="h - 4 w - 4 mr - 2" />;"

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">"

          <DialogHeader>

            <DialogTitle>Save as new resume version
          <div className="py-4">"
            <Input;
              value={newResumeTitle}
              onChange={(e) => setNewResumeTitle(e.target.value)}

          <DialogFooter>


            <Button;"
              variant="outline"""
              <Save className="h-4 w-4" />"
:src/components/resume-builder/wizard/ResumeVersionSelector.tsx

            
          
        
      
</Button>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
:temp-disabled/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
          </div>;
          <DialogFooter>;

              variant="outline""
              onClick = {() => setSaveDialogOpen(false),}

            <Button;
              onClick = {handleCreateNewVersion,}
              disabled = {!newResumeTitle && newResumeTitle.trim() || isLoading,}"
              className="gap-2">;"
              {isLoading && <Loader2 className='h-4 w-4 animate-spin' />}
</Loader2>
              <Save className='h-4 w-4' />              Save              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}"
              <Save className="h-4 w-4" />;"

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>;
        <DialogContent className='sm:max - w-md'>;

          <DialogHeader>;

            <DialogTitle > Save as new resume version;
          <div className='py - 4'>;
              on_change={e => setNewResumeTitle (e.target.value)}


            <Button variant='outline' on_click={() => setSaveDialogOpen (false)}>;

              on_click={handleCreateNewVersion}
              disabled={!newResumeTitle.trim () || is_loading}
              className='gap - 2';
              value = {newResumeTitle, }
              on_change = {(e, ) => setNewResumeTitle (e.target.value), }


              variant="outline";"
              on_click = {() => setSaveDialogOpen (false), }

              on_click = {handleCreateNewVersion, }
              disabled = {!newResumeTitle.trim () || is_loading, }"
              className="gap - 2";"
            >;
              {is_loading && <Loader2 className='h - 4 w - 4 animate - spin' />}
              <Save className='h - 4 w - 4' />              Save              {is_loading && <Loader2 className="h - 4 w - 4 animate - spin" />}"
              <Save className="h - 4 w - 4" />;"
:src/components/resume-builder/wizard/ResumeVersionSelector.tsx

    </div>);
}) );"
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h - 4 w - 4 mr - 2" /> Save as new version    <DialogHeader> <DialogTitle > Save as new resume version  <div className="py - 4" > <Input /> </div> <DialogFooter> <Button > Cancel  <Button Save     </div>);"
pr-12325
</Save>

            </Button>;
          </DialogFooter>;
        </DialogContent>;
      </Dialog>;

    </div>);
}</DropdownMenuItem>) );"
}<DropdownMenuSeparator /> <DropdownMenuItem > <Plus className="h - 4 w - 4 mr - 2" /> Save as new version </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> <DialogHeader> <DialogTitle > Save as new resume version</DialogTitle> </DialogHeader> <div className="py - 4" > <Input /> </div> <DialogFooter> <Button > Cancel </Button> <Button Save </Button> </DialogFooter> </DialogContent> </Dialog> </div>);"
</DropdownMenuSeparator>"

:temp-disabled/src/components/resume-builder/wizard/ResumeVersionSelector.tsx
