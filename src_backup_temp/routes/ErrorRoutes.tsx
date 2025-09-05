import React from 'react',;',';';';';
    ';';';';';';
import { Route, Routes  } from 'react-router-dom',;';';';';
    ';';';';';';
import { Suspense, lazy } from 'react',;',';';';';
    ';';';';';';
import LoadingSpinner from '../components/LoadingSpinner',;';';';';
    ';';';';';
// Lazy load error pages';';';';';';
import React from 'react',;',';'; ; import { Route,Routes } from 'react-router-dom',;';'; ; import { Suspense,lazy } from 'react',;',';'; ; import LoadingSpinner from '../components/LoadingSpinner',;';'; ';';'; const NotFound = lazy(() => import('../pages/NotFound')); const "ErrorRoutes": "Reac t.FC = () => { return (<Suspense fallback={<LoadingSpinner />"}> <Routes> <Route path="/404" element={<NotFound />} /> <Route path="*" element={<NotFound />} /> </Routes> </Suspense> )}; export default ErrorRoutes;
import React from 'react',;',';';
    ';';';';
import { Route, Routes  } from 'react-router-dom',;';';
    ';';';';
import { Suspense, lazy } from 'react',;',';';
    ';';';';
import LoadingSpinner from '../components/LoadingSpinner',;';';
    ';';';
// Lazy load error pages';';';';
const NotFound = lazy(() => import('../pages/NotFound'));
const ErrorRoutes: React.FC = () => {
  return (<Suspense fallback={<LoadingSpinner  />}>
      <Routes>
        <Route path="/404" element={<NotFound  />} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </Suspense>
  );
};
export default ErrorRoutes;';
;';;';
import React from 'react',;',';'; ';';';'; import { Route,Routes } from 'react-router-dom',;';'; ';';';'; import { Suspense,lazy } from 'react',;',';'; ';';';'; import LoadingSpinner from '../components/LoadingSpinner',;';'; ';';'; const NotFound = lazy(() => import('../pages/NotFound')); const ErrorRoutes: Reac t.FC = () => { return (<Suspense fallback={<LoadingSpinner />}> <Routes> <Route path="/404" element={<NotFound />} /> <Route path="*" element={<NotFound />} /> </Routes> </Suspense> )}; export default ErrorRoutes;
<<<<<<< HEAD
export default ErrorRoutes;
=======
export default ErrorRoutes;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
