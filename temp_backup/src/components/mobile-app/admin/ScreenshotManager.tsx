/* eslint-disable */
 interface ScreenshotManagerProps {;
  platform: AppPlatform ;
}type Screenshot = {;
  id: string;
url: string;
file: File ;
};
export const ScreenshotManager: React.FC<ScreenshotManagerProps> = ({;
  platform ;
}) => {;
  const [screenshots,  setScreenshots] = useState<Screenshot[]> ([]);
const [isDragging, setIsDragging] = useState (false);
const fileInputRef = useRef<HTMLInputElement> (null);
if (e.target.files) {;
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 ;
}setScreenshots (prev => [...prev, ...newScreenshots]);
}
};
return filtered;
}) ;
};
<CardHeader> <CardTitle className="text-lg" >App Screenshots</CardTitle> </CardHeader> <CardContent> <div className= {;""
  `border-2 border-dashed rounded-lg p-4 mb-4 text-center transition-colors $ {";""
  isDragging > <Upload className="mx-auto h-8 w-8 text-gray-300 mb-2" /> <p className="text-sm mb-2" >Drag & drop screenshots here</p> <input > <Plus className="mr-2 h-4 w-4" /> Select Files </Button> </div> > <Trash2 className="h-3 w-3" /> </button> </div>) ) ;
}</div> </CardContent> </Card>) ;"
};""
"""`