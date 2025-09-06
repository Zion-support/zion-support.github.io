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
<<<<<<< HEAD:src && src.pages.disabled/TranslationManager && TranslationManager.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/TranslationManager && TranslationManager.jsx import React from \'react\'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState (\"translation\") ; const [searchQuery,setSearchQuery] = useState (\") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ; import React from \'react\'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState (\"translation\") ; const [searchQuery,setSearchQuery] = useState (\") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ;\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/TranslationManager && TranslationManager.jsx import _React from 'react'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState ("translation") ; const [searchQuery,setSearchQuery] = useState (") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ; import _React from 'react'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState ("translation") ; const [searchQuery,setSearchQuery] = useState (") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ;"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/TranslationManager && TranslationManager.jsx import _React from 'react'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState ("translation") ; const [searchQuery,setSearchQuery] = useState (") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ; import _React from 'react'; export default function TranslationManager () { const { t,i18n } = useTranslation () ; const isMobile = useIsMobile () ; const { supportedLanguages } = useLanguage () ; const { translateContent,isTranslating } = useTranslationService () ; const [selectedNamespace,setSelectedNamespace] = useState ("translation") ; const [searchQuery,setSearchQuery] = useState (") ; const [translations,setTranslations] = useState ({ }) ; const [filteredKeys,setFilteredKeys] = useState ([]) ; const [editingKey,setEditingKey] = useState (null) ; const [editedTranslations,setEditedTranslations] = useState ({ }) ; const [isSaving,setIsSaving] = useState (false) ;"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
