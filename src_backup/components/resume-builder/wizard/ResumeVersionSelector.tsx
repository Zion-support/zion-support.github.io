import { useResume } from '@/hooks/useResume';
interface ResumeVersionSelectorProps {
  currentResume: Resume;
  onResumeChange: (resumeId: string) => void

      }
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Resume:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            {currentResume?.basic_info?.title || 'My Resume'}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {existingResumes.map((resume) => (

              className="cursor-pointer"
            >
              {resume.basic_info.title}
            </DropdownMenuItem>;
          ))}

          <DropdownMenuSeparator />;
          <DropdownMenuItem;
            onClick={() => setSaveDialogOpen(true)}
            className="cursor-pointer"
          >
            <Plus className="h-4 w-4 mr-2" />

            Save as new version
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

              <Save className="h-4 w-4" />

              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>