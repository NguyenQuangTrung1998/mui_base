
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import ProductsPage from "../pages/ProductsPage";

function PublicRoutes() {
  const routers = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "products", element: <ProductsPage /> },
      ],
    },
  ]);
  return routers;
}

export default PublicRoutes;
