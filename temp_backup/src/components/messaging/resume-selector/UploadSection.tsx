/* eslint-disable */
 import {;
  {;
  {;
  Upload, FileText ;
}from 'lucide-react' interface UploadSectionProps {;
  customFile: File | null;
onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}export function UploadSection ({;
  customFile, onFileUpload ;
}: UploadSectionProps) {;
  return (<div className="space-y-3" > <div className="flex flex-col items-center justify-center border-2 border-dashed border-zion-purple/30 rounded-lg p-6 bg-zion-blue-dark/30" > <Upload className="h-8 w-8 text-zion-purple mb-2" /> <p className="text-sm text-zion-slate mb-2" > {";""
  customFile ? customFile.name : "Drag & drop your PDF or click to browse" ";""
}outline"className=" relative" > Browse Files <input /> </Button> </div> </div> </div>) ;'"
}</div>) ;'"'"
}'"'"'"