import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="flex justify-center gap-4 mt-4 text-gray-500">
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
        <div className="size-10">
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded-none px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
