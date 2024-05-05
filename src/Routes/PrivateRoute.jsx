import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const PrivateRoute = ({children}) => {
const location = useLocation()
const {user,loading}=useContext(AuthContext)
if (loading) {
return <h1 className="text-4lx font-semibold">loading...</h1>;
}
if (user) {
    return children;
}


    return <Navigate to="/system-access/signIn" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;