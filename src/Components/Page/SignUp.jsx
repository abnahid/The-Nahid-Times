/* eslint-disable no-useless-escape */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);

  const [validations, setValidations] = useState({
    lower: false,
    upper: false,
    number: false,
    special: false,
    length: false,
  });

  const handleChange = (value) => {
    const rules = {
      lower: /[a-z]/,
      upper: /[A-Z]/,
      number: /[0-9]/,
      special: /[!@#\$%\^&\*]/,
      length: /.{8,}/,
    };

    setValidations({
      lower: rules.lower.test(value),
      upper: rules.upper.test(value),
      number: rules.number.test(value),
      special: rules.special.test(value),
      length: rules.length.test(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ ...error, name: "Name should be more than 5 characters" });
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User created successfully!");
        setUser(user);

        return updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then(() => {
        navigate("/"); // Redirect to home
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-16 py-20 space-y-8 bg-white rounded-lg border border-white text-dark03">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Register your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              required
            />
            {error.name && (
              <label className="label text-sm text-red-500">{error.name}</label>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              className="input input-bordered w-full"
              placeholder="Enter photo URL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={type}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="Enter your password"
              onChange={(e) => handleChange(e.target.value)}
              required
            />
            <span
              className="text-2xl absolute right-4  top-12 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
            <div className="text-sm mt-2">
              <p
                className={
                  validations.lower ? "text-green-500" : "text-red-500"
                }
              >
                Contains a lowercase letter
              </p>
              <p
                className={
                  validations.upper ? "text-green-500" : "text-red-500"
                }
              >
                Contains an uppercase letter
              </p>
              <p
                className={
                  validations.number ? "text-green-500" : "text-red-500"
                }
              >
                Contains a number
              </p>
              <p
                className={
                  validations.special ? "text-green-500" : "text-red-500"
                }
              >
                Contains a special character
              </p>
              <p
                className={
                  validations.length ? "text-green-500" : "text-red-500"
                }
              >
                At least 8 characters long
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="acceptTerms"
              className="checkbox"
              required
            />
            <label className="ml-2 text-sm">
              Accept{" "}
              <a href="#" className="text-neutral-500 font-semibold">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button type="submit" className="btn bg-dark03 text-white w-full">
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
