

'import { Route, Routes } from 'react-router-dom';'import { Suspense, lazy } from 'react';'''// Lazy load error pages';
const NotFound = lazy(() => import('../pages/NotFound'));''const ErrorRoutes: React.FC = () => {;
  return (;
    <Suspense fallback={<LoadingSpinner />}><Routes>;
        <Route path="/404" element={<NotFound />} />"        <Route path="*" element={<NotFound />} />"      </Routes>"    </Suspense>);";"});,"})
};"});,"})
;"});,"})
export default ErrorRoutes;";"});,"})
;"});,"})
"});,"})
import { Route, Routes    } from 'react-router-dom';"});,"})
export default function Page() {;"});,"})
export default function Page() {;"});,"})
  import { Suspense, lazy } from 'react';"});,"})
export default function Page() {;"});,"})
export default function Page() {;"});,"})
"});,"})
;"});,"})
// Lazy load error pages;"});,"})
const NotFound = lazy(() => import('../pages/NotFound'));"});,"})
;"});,"})
const ErrorRoutes: React.FC = () => {;"});,"})
  return (<Suspense fallback={<LoadingSpinner />}>;"});,"})
      <Routes>;"});,"})
        <Route path="/404" element={<NotFound />} />;"});,"})
        <Route path="*" element={<NotFound />} />;"});,"})
      </Routes>;"});,"})
    </Suspense>;"});,"})
  );"});,"})
};"});,"})
;"});,"})
export default ErrorRoutes;"});,"})
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff;"});,"})








