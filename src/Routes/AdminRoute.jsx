import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

//   if (loading || isAdminLoading) {
//     return <h1 className="text-4lx font-semibold">loading...</h1>;
//   }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={location.pathname} replace></Navigate>;
};

export default AdminRoute;
