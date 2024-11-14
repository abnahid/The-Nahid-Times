const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg p-20 space-y-8 bg-white rounded-lg shadow-md text-dark03">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>

        <form>
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
          <a href="/register" className="text-primary font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
