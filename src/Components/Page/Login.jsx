import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Providers/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success(`User Login successfully!: ${user.email}`);
        e.target.reset();
        setUser(user); // Pass the user object
        navigate(location?.state?.from || "/category/01"); // Use the navigate function
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="flex justify-center items-center my-4 min-h-screen">
      <div className="w-full max-w-lg p-20 space-y-8 bg-white rounded-lg border border-white text-dark03">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>

        <form onSubmit={handelSubmit}>
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full max-w-sm mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-block bg-dark03 mt-6 text-white"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
          <a href="/auth/register" className="text-primary font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
