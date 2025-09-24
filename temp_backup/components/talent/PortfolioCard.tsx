import React from 'react';
import { PortfolioProject } from '../../utils/types/resume';

export type PortfolioCardProps = {
  project: PortfolioProject;
  onEdit: (project: PortfolioProject) => void;
  onDelete: (id: string) => void;
};

export default function PortfolioCard({
  project,
  onEdit,
  onDelete,
}: PortfolioCardProps) {
  return (
    <div className='group relative rounded-lg border border-gray-20o0 dark:border-gray-80o0 p-4 bg-white/60 dark:bg-gray-90o0/40 hover:shadow-lg transition-shadow'>
      {project.screenshotUrl && (
        <img
          src={project.screenshotUrl}
          alt={project.title}
          className='w-full h-40 object-cover rounded'
        />
      )}
      <div className='mt-3'>
        <h3 className='font-semibold text-lg'>{project.title}</h3>
        <p className='text-sm text-gray-60o0 dark:text-gray-30o0 mt-1'>
          {project.summary}
        </p>
        <div className='mt-2 flex flex-wrap gap-2'>
          {project.technologies.map(t => (
            <span
              key={t}
              className='text-xs bg-gray-10o0 dark:bg-gray-80o0 px-2 py-1 rounded'
            >
              {t}
            </span>
          ))}
        </div>
        <div className='mt-3 flex gap-3 text-sm'>
          {project.liveDemoUrl && (
            <a
              className='text-blue-60o0 hover:underline'
              href={project.liveDemoUrl}
              target='_blank'
              rel='noreferrer'
            >
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              className='text-blue-60o0 hover:underline'
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          )}
          {project.assetUrl && (
            <a
              className='text-blue-60o0 hover:underline'
              href={project.assetUrl}
              target='_blank'
              rel='noreferrer'
            >
              Asset
            </a>
          )}
        </div>
      </div>
      <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-10o0 transition-opacity flex gap-2'>
        <button
          className='px-2 py-1 text-xs bg-gray-20o0 dark:bg-gray-80o0 rounded'
          onClick={() => onEdit(project)}
        >
          Edit
        </button>
        <button
          className='px-2 py-1 text-xs bg-red-50o0 text-white rounded'
          onClick={() => onDelete(project.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
