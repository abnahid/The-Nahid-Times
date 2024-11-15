/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Providers/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelGoogle = () => {
    googleLogin().then((result) => {
      navigate(location.state.from);
    });
  };

  const handelGitHub = () => {
    gitHubLogin().then((result) => {
      navigate(location.state.from);
    });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full space-y-2">
        <button className="btn" onClick={handelGoogle}>
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn" onClick={handelGitHub}>
          <FaGithub></FaGithub> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
