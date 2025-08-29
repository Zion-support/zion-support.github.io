import { Route, Routes  } from 'react-router-dom.ts';
import NotFound from "@/pages/NotFound";

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ErrorRoutes;