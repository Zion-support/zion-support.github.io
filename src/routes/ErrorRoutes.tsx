<<<<<<< HEAD
import { RouteRoutes } from "react-router-dom"
=======
import { Route, Routes } from "react-router-dom"
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
import NotFound from "@/pages/NotFound"

const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default ErrorRoutes