
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import UserPage from "../pages/UserPage";

function PrivateRouters() {
  // const UsersPage = lazy(() => import("../pages/UserPage"));
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/users" />, index: true },
        {
          path: "users",
          element: <UserPage />,
        },
      ],
    },
  ]);
  return routes;
}

export default PrivateRouters;
