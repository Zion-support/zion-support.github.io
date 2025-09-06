import { useState } from 'react';'
import { Card, CardContent, CardFooter } from '@/components/ui/card';'
import { Button } from '@/components/ui/button';'
import { Badge } from '@/components/ui/badge';

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react',;
import { Card, CardContent, CardFooter } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog',;
=======

<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
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
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
  AlertDialogTitle,
} from '@/components / ui / alert - dialog';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';
import Image from 'next/image',;
import { PortfolioProject } from '@/types/resume',;
interface ProjectCardProps {;
  project: PortfolioProject,;
  onEdit: (project: PortfolioProject) => void,;
  onDelete: (projectId: string) => void;
}
<<<<<<< HEAD
;
export function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDelete = () => {;
    if (project.id) {;
      onDelete(project.id);
    }
    setDeleteDialogOpen(false)
  },
  
=======
export /**
 * ProjectCard - Function description
=======
  AlertDialogTitle,';
} from '@/components / ui / alert - dialog';'
import { Edit, Trash2, Github, Link, FileText } from 'lucide-react';'
import Image from 'next / image';'
import { PortfolioProject } from '@/types / resume';
interface ProjectCardProps {}
  project: PortfolioProject;
  on_edit: (project: PortfolioProject) => void;'
  on_delete: (project_id: string) => void; import Image from 'next / image';
interface ProjectCardProps {}
  project: PortfolioProject,
  on_edit: (project: PortfolioProject, ) => void,
  on_delete: (project_id: string, ) => void;
}
export /**;
 * ProjectCard - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            alt={project.title}
            className='object - cover';
            loading='lazy'    <Card className="h - full flex flex-col">;
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg-muted">;
=======
            alt={project.title}'
            className='object - cover';'"
            loading='lazy'    <Card className="h - full flex flex - col">;"
      <div className="relative h - 48 overflow - hidden rounded - t-lg bg - muted">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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

<<<<<<< HEAD


<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
    <Card className="h-full flex flex-col">
=======
  return ("
    <Card className="h-full flex flex-col">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
        {project.image_url ? (
          <Image;
            src={project.image_url}
            alt={project.title}
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="object-cover"
            loading="lazy"
          />
=======
            className="object-cover"
            loading="lazy"
          />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
=======
"
            className="object-cover""
            loading="lazy"
          />


        ) : ("
          <div className="w-full h-full flex items-center justify-center bg-muted">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
            <FileText className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
<<<<<<< HEAD
      
      <CardContent className="flex-grow pt-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          )}
<<<<<<< HEAD
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
=======
=======

      </div>;
'
      <CardContent className='flex-grow pt-6'>;'
        <div className='space-y-2'>;'
          <h3 className='font-semibold text-lg'>{project && project.title}</h3>;

          {project && project.description && (;'
            <p className='text-sm text-muted-foreground line-clamp-3'>;
              {project && project.description}
            </p>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  {tech}
                </Badge>;
              ))}
            </div>;
          )}
<<<<<<< HEAD
        </div>
      </CardContent>
=======

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">
=======

            <a;
              href={project && project.github_url}'
              target='_blank''
              rel='noopener noreferrer''
              aria-label='GitHub''
              title='GitHub'
              href = {project && project.github_url,}

      "
      <CardFooter className="flex justify-between border-t bg-muted/40 p-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
        <div className="flex gap-2">
          {project.github_url && (
            <a;
              href={project.github_url}
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
=======
"
              target="_blank""
              rel="noopener noreferrer""
              aria-label="GitHub""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
              title="GitHub"
            >"
              <Button variant="ghost" size="icon" aria-label="GitHub link">"
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        </div>;
'
        <div className='flex gap-2'>;

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
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
=======
          <Button'
            variant='ghost''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
            size='icon'
            onClick={() => onEdit(project)}'
            aria-label='Edit project';
          >;'
            <Edit className='h-4 w-4' />;
          <Button'
            variant='ghost''
            size='icon'
            onClick={() => setDeleteDialogOpen(true)}

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
                <Link className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">
=======

        "
        <div className="flex gap-2">"
          <Button variant="ghost" size="icon" onClick={() => onEdit(project)} aria-label="Edit project">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
            <Edit className="h-4 w-4" />
          </Button>"
          <Button variant="ghost" size="icon" onClick={() => setDeleteDialogOpen(true)} aria-label="Delete project">"
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
              Are you sure you want to delete this project? This action cannot be undone.
=======
=======

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
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
=======
              {project.technologies.map ((tech, index) => ('"
                <Badge key={index} variant='secondary' className='text - xs'>                  {tech}                <Badge key={index} variant="secondary" className="text - xs">;
          />) : ("
          <div className="w - full h - full flex items - center justify - center bg - muted">;"
            <FileText className="h - 12 w - 12 text - muted - foreground / 50" />;
          </div>)}
      </div>;"
      <CardContent className="flex - grow pt - 6">;"
        <div className="space - y-2">;"
          <h3 className="font - semibold text - lg">{project.title}</h3>;
          {project.description && ("
            <p className="text - sm text - muted - foreground line - clamp - 3">{project.description}</p>)}
          {project.technologies && project.technologies.length > 0 && ("
            <div className="flex flex - wrap gap - 1 mt - 2">;
              {project.technologies.map ((tech, index) => ("
                <Badge key={index} variant="secondary" className="text - xs">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            </a>)}
        </div>              <Button variant="ghost" size="icon" aria - label="Live demo link">;
                <Link className="h - 4 w-4" />;
=======
            </a>)}"
        </div>              <Button variant="ghost" size="icon" aria - label="Live demo link">;"
                <Link className="h - 4 w - 4" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            <AlertDialogAction
              onClick={handleDelete}
=======

            <AlertDialogAction;
              onClick={handleDelete}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
              className='bg-destructive text-destructive-foreground'>              Delete              Are you sure you want to delete this project? This action cannot be undone.;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
            <AlertDialogCancel>Cancel</AlertDialogCancel>;
            <AlertDialogAction;
              onClick={handleDelete}

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
Are you sure you want to delete this project? This action cannot
              be undone.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
Are you sure you want to delete this project? This action cannot
              be undone.
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
=======
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<AlertDialogAction
              onClick={handleDelete}
              className='bg-destructive text-destructive-foreground'
            >
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              Delete
=======
              Delete;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
<<<<<<< HEAD
      </AlertDialog>
    </Card>
  )
}
;
=======

      </AlertDialog>
    </Card>
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD:src/components/resume-builder/portfolio/ProjectCard.tsx
<<<<<<< HEAD

=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
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
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
              on_click={handle_delete}
              className='bg - destructive text - destructive - foreground';
            >            <AlertDialogAction on_click={handle_delete} className="bg - destructive text - destructive-foreground">;
=======
              on_click={handle_delete}'
              className='bg - destructive text - destructive - foreground';"
            >            <AlertDialogAction on_click={handle_delete} className="bg - destructive text - destructive - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx

              Delete;
            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

  );
}
}
    </Card>);
<<<<<<< HEAD:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/resume-builder/portfolio/ProjectCard.tsx
=======
}'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/resume-builder/portfolio/ProjectCard.tsx
