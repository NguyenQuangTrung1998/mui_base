// import type { RouteProps } from "react-router-dom";
import PrivateRouters from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
var userInfo = {
  name: "",
  password: "",
  roles: [],
};

function AuthenticatedRoute() {
  // const { userInfor } = props;

  if (!userInfo || userInfo === undefined) return <PublicRoutes />;
  return <PrivateRouters />;
}

export default AuthenticatedRoute;
