
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
  const {user,loading} = useAuth();
  //for location start>
  const location = useLocation();
  //abr user thakla amra children ta patabo na hola navigate koran onno>
  if(loading){
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    )
  }

  if (user){
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;