

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
    <div className="space-y-2>
      {resumeOptions.length === 0 ? (
        <p className=text-sm text-zion-slate">No saved resumes found.</p>
      ) : (
        <>

            >
              <div className="flex items-center>
                <FileText className=h-4 w-4 mr-2 text-zion-cyan" />
                <span className="text-white>{option.title}</span>
              </div>
            </button>
          ))}

          {resumeOptions.map((option) => (
            <button


              resume={selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading}
            />;
          )}


