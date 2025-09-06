<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/ContentGenerator && ContentGenerator.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ContentGenerator && ContentGenerator.jsx import React from \'react\'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState (\"blog\") ; const [customPrompt,setCustomPrompt] = useState (\") ; const [topic,setTopic] = useState (\") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (\") ; import React from \'react\'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState (\"blog\") ; const [customPrompt,setCustomPrompt] = useState (\") ; const [topic,setTopic] = useState (\") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (\") ;\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/ContentGenerator && ContentGenerator.jsx import _React from 'react'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState ("blog") ; const [customPrompt,setCustomPrompt] = useState (") ; const [topic,setTopic] = useState (") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (") ; import _React from 'react'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState ("blog") ; const [customPrompt,setCustomPrompt] = useState (") ; const [topic,setTopic] = useState (") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (") ;"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/ContentGenerator && ContentGenerator.jsx import _React from 'react'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState ("blog") ; const [customPrompt,setCustomPrompt] = useState (") ; const [topic,setTopic] = useState (") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (") ; import _React from 'react'; export default function ContentGenerator () { const { user,isLoading } = useAuth () ; const router = useNavigate () ; const [contentType,setContentType] = useState ("blog") ; const [customPrompt,setCustomPrompt] = useState (") ; const [topic,setTopic] = useState (") ; const [autoPublish,setAutoPublish] = useState (false) ; const [includeImage,setIncludeImage] = useState (true) ; const [isGenerating,setIsGenerating] = useState (false) ; const [previewContent,setPreviewContent] = useState (null) ; const [testEmail,setTestEmail] = useState (") ;"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
