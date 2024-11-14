import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
