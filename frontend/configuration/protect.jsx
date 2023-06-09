import { Outlet,Navigate } from "react-router-dom";
export default function Protect(){



if(localStorage.getItem('token')){
    return <Outlet />
}else{
  return <Navigate to="/Nemo-login" />
}
}