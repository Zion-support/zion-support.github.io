import React from 'react';
import { FileText } from 'lucide-react';
import { ResumeOption } from '../resume-selector/types';
import { ResumePreviewCard } from './ResumePreviewCard';
import { Resume } from '@/types/resume';

import React from 'react';
import { FileText } from 'lucide-react'
import { ResumeOption  } from '../resume-selector/types';
import { ResumePreviewCard  } from './ResumePreviewCard';
import { Resume } from '@/types/resume';
interface SelectResumeSectionProps {
  resumeOptions: ResumeOption[];
  selectedResume: ResumeOption | null;
  handleResumeSelect: (resumeId: string) => void;
  handleDownloadResume: () => void;
  isLoading: boolean
export function SelectResumeSection({
  resumeOptions;
  selectedResume;
  handleResumeSelect;
  handleDownloadResume;
origin/cursor/automate-test-improve-and-merge-code-2533
  isLoading
}: SelectResumeSectionProps) {
  return (
    <div className="space-y-2">
      {resumeOptions.length === 0 ? (
        <p className="text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>



            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white">{option.title}</span>
              </div>
            </button>
          ))}
          

          


          

          

          {resumeOptions.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-3 rounded-md transition ${
                selectedResume?.id === option.id
                  ? 'bg-zion-purple/20 border border-zion-purple'
                  : 'bg-zion-blue-dark/30 hover:bg-zion-blue-dark/50'
              }`}
              onClick={() => handleResumeSelect(option.id)}
            >
              <div className='flex items-center'>
                <FileText className='h-4 w-4 mr-2 text-zion-cyan' />
                <span className='text-white'>{option.title}</span>
              </div>
            </button>
          ))}

          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (
            <ResumePreviewCard
              resume = {selectedResume.resume as Resume,}
              onDownload = {handleDownloadResume,}
              isLoading = {isLoading,}
            />
;
          {selectedResume?.type === 'ai_resume' && selectedResume.resume && (;
            <ResumePreviewCard;
              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}
        </>
      )}
  );
}};
};

    </div>;
  );
}
;
import React from 'react';
import { FileText } from 'lucide-react';

interface ResumeOption {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

interface Resume {
  id: string;
  title: string;
  description: string;
  lastModified: string;
  fileSize: string;
  url: string;
}

interface ResumePreviewCardProps {
  resume: Resume;
  isSelected: boolean;
  onSelect: (resume: Resume) => void;
}

const ResumePreviewCard: React.FC<ResumePreviewCardProps> = ({
  resume,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(resume)}
    >
      <div className="flex items-start space-x-3">
        <FileText className="h-8 w-8 text-gray-400" />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{resume.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{resume.description}</p>
          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
            <span>Modified: {resume.lastModified}</span>
            <span>{resume.fileSize}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
