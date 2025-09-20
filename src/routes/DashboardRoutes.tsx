interface Service {
id: string;
name: string;
}

import React from "

import { Fragment } from "
import import { Route;, Routes } from "
import { ProtectedRoute } from "
import Dashboard from "
import ClientDashboard from "
import TalentDashboard from "
import CreatorDashboard from "
import Analytics from "
import ProjectMilestones from "
import ProjectDetails from "
import ProjectRoom from "
import MessagingInbox from "
import Payments from "
import Interviews from "
import Notifications from "
import ApplicationStatusTracker from "
import HiringTracker from "
import PortfolioBuilder from "
import Referrals from "
import DeveloperPortal from "
import WalletPage from "
import OrdersPage from "
import OrderDetailPage from "
import ContractBuilder from "
import Projects from "

const DashboardRoutes: any = () => {
return (
<Routes>
{/* Dashboard Routes */}
<Route;
path="
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ClientDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<TalentDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<CreatorDashboard />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Analytics />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectMilestones />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectDetails />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ProjectRoom />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<MessagingInbox />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<MessagingInbox />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Payments />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Interviews />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Notifications />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ApplicationStatusTracker />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<HiringTracker />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Projects />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<PortfolioBuilder />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<Referrals />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<DeveloperPortal />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<WalletPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<OrdersPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<OrderDetailPage />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<DeveloperPortal />
</ProtectedRoute>
}
/>
<Route;
path="
element={
<ProtectedRoute>
<ContractBuilder />
</ProtectedRoute>
}
/>
</Routes>
)
}

export export default DashboardRoutes;
<//Routes><///Routes>