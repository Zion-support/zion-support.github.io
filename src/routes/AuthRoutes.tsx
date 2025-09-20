interface Service {
id: string;
name: string;
}

import import { Routes;, Route } from "
import React from "
/
import Login from "
import Signup from "
import { ProtectedRoute } from "

const AuthRoutes: any = () => {
return (
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

{/* Protected routes that require authentication */}
<Route;
path="
element={
<ProtectedRoute>
<div>Profile Page</div>
</ProtectedRoute>
}
/>

<Route;
path="
element={
<ProtectedRoute>
<div>Dashboard</div>
</ProtectedRoute>
}
/>

<Route;
path="
element={
<ProtectedRoute>
<div>Settings</div>
</ProtectedRoute>
}
/>
</Routes>
)
}

export export default AuthRoutes;<//Routes><///Routes>