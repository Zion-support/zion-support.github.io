<<<<<<< HEAD
import React from 'react';'''; import { useParams  } from 'react-router-dom';'''; import { useQuery  } from '@tanstack/react-query';'''; import api from '@/services/apiClient';'''; import NotFound from '@/components/NotFound';'''; import Spinner from '@/components/Spinner';'''; import TalentProfile from '@/components/TalentProfile'; ; export default function TalentDetail() {}; const { id } = useParams(); const { data, isLoading } = useQuery('; ['talent', id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: !!id }; ); ; if(isLoading) return <Spinner />; ; if(isLoading) return <Spinner />; if(!data) return <NotFound />; ; return <TalentProfile {...data} />;'`; }'`'`; '`'`'`;
=======
<<<<<<< HEAD
'''; import { useParams    } from 'react-router-dom';'''; import { useQuery  } from '@tanstack/react-query';'''; '''; '''; ''';  ; export default function TalentDetail() {}; const { id } = useParams(); const { data, isLoading } = useQuery('; ['talent', id],; () => api.get(`/talent/${id}`).then((r) => r.data),; { enabled: !!id }; ); ; if(isLoading) return <Spinner />; ; if(isLoading) return <Spinner />; if(!data) return <NotFound />; ; return <TalentProfile {...data} />;'`; }'`'`; '`'`'`;,"});,"})
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`; }'`'`'`;'`'`;
=======
<<<<<<< HEAD
'; import: { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id, } )  if(isLoading) return: <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`}'`'`'`;'`'`;';';`;
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`}'`'`'`;'`'`'
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />`}`'`'`;`'`;
'
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom' import { useQuery  } from '@tanstack/react-query' import api from '@/services/apiClient' import NotFound from '@/components/NotFound' import Spinner from '@/components/Spinner' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`}'`'`'`;'`'`;
=======
<<<<<<< HEAD
'; import {useParams    } from 'react-router-dom'' import {useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail()   {} const {id } = useParams() const {data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), {enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`}'`'`'`;'`'`;'
=======
<<<<<<< HEAD
'; import { useParams    } from &apos;react-router-dom&apos;&apos; import { useQuery  } from &apos;@tanstack/react-query&apos;&apos; import api from &apos;@/services/apiClient&apos;&apos; import NotFound from &apos;@/components/NotFound&apos;&apos; import Spinner from &apos;@/components/Spinner&apos;&apos; import TalentProfile from &apos;@/components/TalentProfile&apos;&apos;'  export default function TalentDetail() {} const ;{ id } = useParams() const;const { data, isLoading } = useQuery(&apos; [&apos;talent&apos;, id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return&apos; <Spinner />  if(isLoading) return <Spinner /> if(!data) return <;<NotFound />  return ;<TalentProfile {...data} />&apos;`}&apos;`&apos;`&apos;`;&apos;`&apos;`;
&apos;'
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner /" >  if(isLoading) return <Spinner /" > if(!data) return <NotFound /" >  return <TalentProfile {...data} /" >'`}'`'`'`;'`'`;'`
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner /" >  if(isLoading) return <Spinner /" > if(!data) return <NotFound /" >  return <TalentProfile {...data} /" >'`}'`'`'`;'`'`'
"`"
=======
<<<<<<< HEAD
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile from '@/components/TalentProfile'  export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner />  if(isLoading) return <Spinner /> if(!data) return <NotFound />  return <TalentProfile {...data} />'`}'`'`'`;'`'`;'
=======
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile  from '@/components/TalentProfile';export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner /" >  if(isLoading) return <Spinner /" > if(!data) return <NotFound /" >  return <TalentProfile {...data} /" >'`}'`'`'`;'`'`;'`
'; import { useParams    } from 'react-router-dom'' import { useQuery  } from '@tanstack/react-query'' import api from '@/services/apiClient'' import NotFound from '@/components/NotFound'' import Spinner from '@/components/Spinner'' import TalentProfile  from '@/components/TalentProfile';export default function TalentDetail() {} const { id } = useParams() const { data, isLoading } = useQuery(' ['talent', id], () => api.get(`/talent/${id}`).then((r) => r.data), { enabled: !!id } )  if(isLoading) return <Spinner /" >  if(isLoading) return <Spinner /" > if(!data) return <NotFound /" >  return <TalentProfile {...data} /" >'`}'`'`'`;'`'`
"`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
