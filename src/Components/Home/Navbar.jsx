import { Link } from "react-router-dom";
import { useContext } from "react";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Firebase/Providers/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);


  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.displayName}</div>
      <div className="flex justify-center items-center gap-4  text-gray-500">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/career" className="hover:underline">
          Career
        </Link>
      </div>

      <div className="login flex gap-2 items-center">
        <div className="">
          {user && user?.email ? (
            <img src={user?.photoURL} alt="" className="w-10 rounded-full" />
          ) : (
            <img src={userIcon} alt="" className="size-10 rounded-full" />
          )}
        </div>
        {user && user?.email ? (
          <button
            onClick={signOutUser}
            className="btn btn-neutral rounded-none px-10"
          >
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
