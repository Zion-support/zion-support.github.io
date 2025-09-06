<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react',;',';';';';
    ';';';';';';
import { Route, Routes  } from 'react-router-dom',;';';';';
    ';';';';';';
import { Suspense, lazy } from 'react',;',';';';';
    ';';';';';';
import LoadingSpinner from '../components/LoadingSpinner',;';';';';
    ';';';';';
// Lazy load error pages';';';';';';
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
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
<<<<<<< HEAD
export default ErrorRoutes;';
;';;';
import React from 'react',;',';'; ';';';'; import { Route,Routes } from 'react-router-dom',;';'; ';';';'; import { Suspense,lazy } from 'react',;',';'; ';';';'; import LoadingSpinner from '../components/LoadingSpinner',;';'; ';';'; const NotFound = lazy(() => import('../pages/NotFound')); const ErrorRoutes: Reac t.FC = () => { return (<Suspense fallback={<LoadingSpinner />}> <Routes> <Route path="/404" element={<NotFound />} /> <Route path="*" element={<NotFound />} /> </Routes> </Suspense> )}; export default ErrorRoutes;
export default ErrorRoutes;
=======
<<<<<<< HEAD

import React from 'react',;',';'; ';';';'; import { Route,Routes } from 'react-router-dom',;';'; ';';';'; import { Suspense,lazy } from 'react',;',';'; ';';';'; import LoadingSpinner from '../components/LoadingSpinner',;';'; ';';'; const NotFound = lazy(() => import('../pages/NotFound')); const ErrorRoutes: Reac t.FC = () => { return (<Suspense fallback={<LoadingSpinner />}> <Routes> <Route path="/404" element={<NotFound />} /> <Route path="*" element={<NotFound />} /> </Routes> </Suspense> )}; export default ErrorRoutes;
export default ErrorRoutes;
=======
export default ErrorRoutes;';
;';;';
import React from 'react',;',';'; ';';';'; import { Route,Routes } from 'react-router-dom',;';'; ';';';'; import { Suspense,lazy } from 'react',;',';'; ';';';'; import LoadingSpinner from '../components/LoadingSpinner',;';'; ';';'; const NotFound = lazy(() => import('../pages/NotFound')); const ErrorRoutes: Reac t.FC = () => { return (<Suspense fallback={<LoadingSpinner />}> <Routes> <Route path="/404" element={<NotFound />} /> <Route path="*" element={<NotFound />} /> </Routes> </Suspense> )}; export default ErrorRoutes;
export default ErrorRoutes;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
