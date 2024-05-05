import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const PrivateRoute = ({children}) => {
const location = useLocation()
const {user,loading}=useAuth()
// if (loading) {
// return <h1 className="text-4lx font-semibold">loading...</h1>;
// }
if (user) {
    return children;
}
console.log(location.pathname)

    return <Navigate to="/system-access/signIn" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;