import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-zinc-100">
      <nav className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
