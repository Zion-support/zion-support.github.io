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
<<<<<<< HEAD:src && src.pages.disabled/TalentDetail && TalentDetail.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/TalentDetail && TalentDetail.jsx import React from \'react\'';\'; import { useParams } from \'react-router-dom\'';\'; import { useQuery } from \'@tanstack/react-query\'';\'; import api from \'@/services/apiClient\'';\'; import NotFound from \'@/components/NotFound\'';\'; import Spinner from \'@/components/Spinner\'';\'; import TalentProfile from \'@/components/TalentProfile\'; export default function TalentDetail() {}; const { id } = useParams(); const { data,isLoading } = useQuery(\'; [\'talent\',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { \"enabled\": \'!!id\' }; ); if (isLoading) return <Spinner />; if (isLoading) return <Spinner />; if (!data) return <NotFound />; return <TalentProfile {...data} />\';\"}\'"\'"\';\"'\"'\"; import React from \'react\'';\'; import { useParams } from \'react - router - dom\'';\'; import { useQuery } from \'@tanstack / react - query\'';\'; import api from \'@/services / apiClient\'';\'; import NotFound from \'@/components / NotFound\'';\'; import Spinner from \'@/components / Spinner\'';\'; import TalentProfile from \'@/components / TalentProfile\'; export default function TalentDetail () {}; const { id } = useParams () ; const { data,isLoading } = useQuery (\'; [\'talent\',id],; () => api && api.get (`/talent/${id}`) .then ( (r) => r && r.data) ,; { \"enabled\": \'!!id\' };) ; if (isLoading) return < Spinner />; if (isLoading) return < Spinner />; if (!data) return < NotFound />; return < TalentProfile {...data} />\';\"}\'"\'"\';\"'\"'\"';\''`;
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/TalentDetail && TalentDetail.jsx import _React from 'react'';'; import { useParams } from 'react-router-dom'';'; import { useQuery } from '@tanstack/react-query'';'; import api from '@/services/apiClient'';'; import NotFound from '@/components/NotFound'';'; import Spinner from '@/components/Spinner'';'; import TalentProfile from '@/components/TalentProfile'; export default function TalentDetail() {}; const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { "enabled": '!!id' }; ); if (isLoading) return <Spinner />; if (isLoading) return <Spinner />; if (!data) return <NotFound />; return <TalentProfile {...data} />';"}'"'"';"'"'"; import _React from 'react'';'; import { useParams } from 'react - router - dom'';'; import { useQuery } from '@tanstack / react - query'';'; import api from '@/services / apiClient'';'; import NotFound from '@/components / NotFound'';'; import Spinner from '@/components / Spinner'';'; import TalentProfile from '@/components / TalentProfile'; export default function TalentDetail () {}; const { id } = useParams () ; const { data,isLoading } = useQuery ('; ['talent',id],; () => api && api.get (`/talent/${id}`) .then ( (r) => r && r.data) ,; { "enabled": '!!id' };) ; if (isLoading) return < Spinner />; if (isLoading) return < Spinner />; if (!data) return < NotFound />; return < TalentProfile {...data} />';"}'"'"';"'"'"';''`;
=======
<<<<<<< "HEAD": src && src.pages.disabled/TalentDetail && TalentDetail.jsx import _React from 'react'';'; import { useParams } from 'react-router-dom'';'; import { useQuery } from '@tanstack/react-query'';'; import api from '@/services/apiClient'';'; import NotFound from '@/components/NotFound'';'; import Spinner from '@/components/Spinner'';'; import TalentProfile from '@/components/TalentProfile'; export default function TalentDetail() {}; const { id } = useParams(); const { data,isLoading } = useQuery('; ['talent',id],; () => api && api.get(`/talent/${id}`).then((r) => r && r.data),; { "enabled": '!!id' }; ); if (isLoading) return <Spinner />; if (isLoading) return <Spinner />; if (!data) return <NotFound />; return <TalentProfile {...data} />';"}'"'"';"'"'"; import _React from 'react'';'; import { useParams } from 'react - router - dom'';'; import { useQuery } from '@tanstack / react - query'';'; import api from '@/services / apiClient'';'; import NotFound from '@/components / NotFound'';'; import Spinner from '@/components / Spinner'';'; import TalentProfile from '@/components / TalentProfile'; export default function TalentDetail () {}; const { id } = useParams () ; const { data,isLoading } = useQuery ('; ['talent',id],; () => api && api.get (`/talent/${id}`) .then ( (r) => r && r.data) ,; { "enabled": '!!id' };) ; if (isLoading) return < Spinner />; if (isLoading) return < Spinner />; if (!data) return < NotFound />; return < TalentProfile {...data} />';"}'"'"';"'"'"';''`;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
