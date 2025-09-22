import { useState } from 'react';'
import { Card, CardContent, CardFooter } from '@/components/ui/card';'
import { Button } from '@/components/ui/button';'
import { Badge } from '@/components/ui/badge';

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {

  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;

  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {
  project: PortfolioProject
  onEdit: (project: PortfolioProject,) => void
  onDelete: (projectId: string,) => void
import { useState  } from 'react';
import { Card, CardContent, CardFooter  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'
import Image from 'next/image';
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId: string) => void
origin/cursor/automate-test-improve-and-merge-code-2533
'
import Image from 'next/image';'
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {}
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;

'
  onDelete: (projectId: string) => void; import Image from 'next/image'
interface ProjectCardProps {};
  project: PortfolioProject;
  onEdit: (project: PortfolioProject,) => void;
  onDelete: (projectId: string,) => void;
}

}

interface ProjectCardProps {;
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;'
  onDelete: (projectId: string) => void;import Image from 'next/image';'
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject,) => void,;
  onDelete: (projectId: string,) => void;
}

export function ProjectCard(): any ({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {;
    if (project && project.id) {;
      onDelete(project && project.id);
    }
    setDeleteDialogOpen(false)
};

  return ('
    <Card className='h-full flex flex-col'>;'
      <div className='relative h-48 overflow-hidden rounded-t-lg bg-muted'>        {project && project.image_url ? (;
          <Image;
            src={project && project.image_url}
            alt={project && project.title}'
            className='object-cover''
            loading='lazy'    <Card className="h-full flex flex-col">;"
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">;
        {project && project.image_url ? (;
          <Image;
            src={project && project.image_url}
            alt={project && project.title}'
            className='object-cover''
            loading='lazy'
        ) : ('
          <div className='w-full h-full flex items-center justify-center bg-muted'>;'
            <FileText className='h-12 w-12 text-muted-foreground/50' />;
          </div>;
        )}
'
import { useState } from 'react';'
import { Card, CardContent, CardFooter } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';
import {}
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image',;
import { PortfolioProject } from '@/types/resume',;
interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject) => void,;
  onDelete: (projectId: string) => void;
}
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
 */
function ProjectCard() {}
  const [deleteDialogOpen, setDeleteDialogOpen] = useState (false);
  const handle_delete = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      on_delete (project.id);
    }
    setDeleteDialogOpen (false);
  }
  return ('
    <Card className='h - full flex flex - col'>;'
      <div className='relative h - 48 overflow - hidden rounded - t-lg bg - muted'>        {project.image_url ? (
          <Image;
            src={project.image_url}
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            alt={project.title}
            className='object - cover';
            loading='lazy'    <Card className="h - full flex flex-col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg-muted">;
        {project.image_url ? (
          <Image;
            src={project.image_url}
            alt={project.title}'
            className='object - cover';'
            loading='lazy') : ('
          <div className='w - full h - full flex items - center justify - center bg - muted'>;'
            <FileText className='h - 12 w - 12 text - muted - foreground / 50' />;
          </div>)}
      </div>;'
      <CardContent className='flex - grow pt - 6'>;'
        <div className='space - y-2'>;'
          <h3 className='font - semibold text - lg'>{project.title}</h3>;

          {project.description && ('
            <p className='text - sm text - muted - foreground line - clamp - 3'>;
              {project.description}

          {project.technologies && project.technologies.length > 0 && ('
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => ('"
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';'
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react'';
import Image from 'next/image';'
import { PortfolioProject } from '@/types/resume';
interface ProjectCardProps {}
  project: PortfolioProject,
  onEdit: (project: PortfolioProject) => void,
  onDelete: (projectId: string) => void;
}

export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {}
  const [ deleteDialogOpen, setDeleteDialogOpen ] = useState(false),

  const handleDelete = () => {}
    if (project.id) {}
      onDelete(project.id)
    }
    setDeleteDialogOpen(false);
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image;
            src={project.image_url}
            alt={project.title}
:src/components/resume-builder/portfolio/ProjectCard.tsx

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx

            className="object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>

          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
{project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
className='object-cover'
            loading='lazy'
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-muted'>
            <FileText className='h-12 w-12 text-muted-foreground/50' />
          </div>
        )}
      </div>
      <CardContent className='flex-grow pt-6'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg'>{project.title}</h3>
          {project.description && (
            <p className='text-sm text-muted-foreground line-clamp-3'>
              {project.description}
            </p>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary' className='text-xs'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  {tech}
                </Badge>
              ))}
            </div>

          )}
:src/components/resume-builder/portfolio/ProjectCard.tsx

          {project && project.technologies && project && project.technologies.length > 0 && (;'
            <div className='flex flex-wrap gap-1 mt-2'>;
              {project && project.technologies.map((tech, index) => (;'"
                <Badge key={index} variant='secondary' className='text-xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">;
          />;
        ) : (;"
          <div className="w-full h-full flex items-center justify-center bg-muted">;"
            <FileText className="h-12 w-12 text-muted-foreground/50" />;
          </div>;
        )}
      </div>;
"
      <CardContent className="flex-grow pt-6">;"
        <div className="space-y-2">;"
          <h3 className="font-semibold text-lg">{project && project.title}</h3>;

          {project && project.description && (;"
            <p className="text-sm text-muted-foreground line-clamp-3">{project && project.description}</p>;
          )}

          {project && project.technologies && project && project.technologies.length > 0 && (;"
            <div className="flex flex-wrap gap-1 mt-2">;
              {project && project.technologies.map((tech, index) => (;"
                <Badge key={index} variant="secondary" className="text-xs">;

                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
        </div>
      </CardContent>
        </div>
      </CardContent>
<CardFooter className='flex justify-between border-t bg-muted/40 p-4'>
        <div className='flex gap-2'>
          {project.github_url && (
origin/cursor/automate-test-improve-and-merge-code-2533
            <a
              href={project && project.github_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='GitHub'
              href = {project && project.github_url,}


      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
        <div className="flex gap-2">
          {project.github_url && (
            <a;
              href={project.github_url}
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >"
              <Button variant="ghost" size="icon" aria-label="GitHub link">"
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
:src/components/resume-builder/portfolio/ProjectCard.tsx
;
          {project.demo_url && (;
            <a;
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              title="Live demo"
            >
              <Button variant="ghost" size="icon" aria-label="Live demo link">

        </div>;
'
        <div className='flex gap-2'>;

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
          {project.demo_url && (
            <a
              href={project.demo_url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Live demo'
              title='Live demo'            >
              <Button variant='ghost' size='icon' aria-label='Live demo link'>
                <Link className='h-4 w-4' />
              </Button>
            </a>
          )}
        </div>
<div className='flex gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button
            variant='ghost'
            size='icon'
            onClick={() => onEdit(project)}'
            aria-label='Edit project';
          >;'
            <Edit className='h-4 w-4' />;
          <Button'
            variant='ghost''
            size='icon'
            onClick={() => setDeleteDialogOpen(true)}

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
                <Link className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
            <Edit className="h-4 w-4" />
          </Button>"
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">"
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
:src/components/resume-builder/portfolio/ProjectCard.tsx
              Are you sure you want to delete this project? This action cannot be undone.
            aria-label='Delete project';
          >;'
            <Trash2 className='h-4 w-4' />;
          </Button>;
        </div>;
      </CardFooter>;

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle>Delete Project</AlertDialogTitle>;

            </p>)}
          {project.technologies && project.technologies.length > 0 && ('
            <div className='flex flex - wrap gap - 1 mt - 2'>;
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant='secondary' className='text - xs'>                  {tech}                <Badge key={index} variant="secondary" className="text-xs">;
          />) : (
          <div className="w - full h - full flex items - center justify - center bg-muted">;
            <FileText className="h - 12 w - 12 text - muted-foreground / 50" />;
          </div>)}
      </div>;
      <CardContent className="flex - grow pt-6">;
        <div className="space-y-2">;
          <h3 className="font - semibold text-lg">{project.title}</h3>;
          {project.description && (
            <p className="text - sm text - muted - foreground line - clamp-3">{project.description}</p>)}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex - wrap gap - 1 mt-2">;
              {project.technologies.map ((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">;
                  {tech}
                </Badge>))}
            </div>)}
        </div>;
      </CardContent>;'
      <CardFooter className='flex justify - between border - t bg - muted / 40 p - 4'>;'
        <div className='flex gap - 2'>;
          {project.github_url && (
            <a;
              href={project.github_url}'
              target='_blank';'
              rel='noopener noreferrer';'
              aria - label='GitHub';'
              title='GitHub';
              href = {project.github_url, }"
              target="_blank";"
              rel="noopener noreferrer";"
              aria - label="GitHub";"
              title="GitHub";
            >;'
              <Button variant='ghost' size='icon' aria - label='GitHub link'>;'
                <Github className='h - 4 w - 4' />;
              </Button>;
            </a>)}
          {project.demo_url && (
            <a;
              href={project.demo_url}'
              target='_blank';'
              rel='noopener noreferrer';'
              aria - label='Live demo';'
              title='Live demo'            >;'
              <Button variant='ghost' size='icon' aria - label='Live demo link'>;'
                <Link className='h - 4 w - 4' />              </Button>;
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            </a>)}
        </div>              <Button variant="ghost" size="icon" aria - label="Live demo link">;
                <Link className="h - 4 w-4" />;
              </Button>;
            </a>)}
        </div>;'
        <div className='flex gap - 2'>;
          <Button;'
            variant='ghost';'
            size='icon';
            on_click={() => on_edit (project)}'
            aria - label='Edit project';
          >;'
            <Edit className='h - 4 w - 4' />;
          <Button;'
            variant='ghost';'
            size='icon';
            on_click={() => setDeleteDialogOpen (true)}'
            aria - label='Delete project';
          >;'
            <Trash2 className='h - 4 w - 4' />;
          </Button>;
        </div>;
      </CardFooter>;
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>;
        <AlertDialogContent>;
          <AlertDialogHeader>;
            <AlertDialogTitle > Delete Project</AlertDialogTitle>;

            <AlertDialogDescription>;
              Are you sure you want to delete this project? This action cannot;
              be undone.            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              onClick={handleDelete}

Are you sure you want to delete this project? This action cannot
              be undone.
origin/cursor/automate-test-improve-and-merge-code-2533
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
:src/components/resume-builder/portfolio/ProjectCard.tsx

:src_backup/components/resume-builder/portfolio/ProjectCard.tsx

            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">

<AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >
:src/components/resume-builder/portfolio/ProjectCard.tsx
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
</AlertDialog>
    </Card>
  )
}
;
              className='bg-destructive text-destructive-foreground'>            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              on_click={handle_delete}'
              className='bg - destructive text - destructive - foreground';
            >              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel > Cancel</AlertDialogCancel>;
            <AlertDialogAction;
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              on_click={handle_delete}
              className='bg - destructive text - destructive - foreground';
            >            <AlertDialogAction on_click={handle_delete} className="bg - destructive text - destructive-foreground">;

              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

  );
}
}
    </Card>);
:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
}
}'"
