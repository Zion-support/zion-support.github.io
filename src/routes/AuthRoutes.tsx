interface Service {
id: string;,
name: string;
}
}
}

import { Routes, Route  } from "react-router-dom, ";
import React from "react;";
// Next.js routing - no need for react-router-dom;
import Login from "@/pages/Login;";
import Signup from "@/pages/Signup;";
import { ProtectedRoute } from "../ProtectedRoute, ";

const AuthRoutes: any = () => {
return (
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />

{/* Protected routes that require authentication */};
<Route;
path="/profile";
element={
<<<<<<< HEAD
<ProtectedRoute>
<div>Profile Page</div>
</ProtectedRoute>
=======
<ProtectedRoute>;
<div>Profile Page</div>
</ProtectedRoute>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
/>

<Route;
path="/dashboard";
element={
<<<<<<< HEAD
<ProtectedRoute>
<div>Dashboard</div>
</ProtectedRoute>
=======
<ProtectedRoute>;
<div>Dashboard</div>
</ProtectedRoute>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
/>

<Route;
path="/settings";
element={
<<<<<<< HEAD
<ProtectedRoute>
<div>Settings</div>
</ProtectedRoute>
=======
<ProtectedRoute>;
<div>Settings</div>
</ProtectedRoute>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
/>
</Routes>
);
};

export default AuthRoutes;<//Routes><///Routes>