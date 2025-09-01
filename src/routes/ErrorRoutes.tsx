import { Route, Routes } from 'react-router-dom';

const ErrorRoutes = () => {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ErrorRoutes;