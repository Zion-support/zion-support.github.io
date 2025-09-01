import { Link  } from 'react-router-dom';
export default function Page() {
;
const ErrorRoutes = () => {
    const location = useLocation () ;
    // Check if it's a 500 error(you can implement your own logic here) const isServerError = location.pathname === '/500' || location.state?.error === 'server';
    return (<Routes>
      <Route path="/404" element={<NotFound />}/>
      <Route path="/500" element={<ServerError />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>) };
}