import { Link } from "react-router-dom";
import LeftPane from "../components/LoginRegister/LeftPane";
import SocialLogin from "../components/LoginRegister/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const inputValues = { email, password };
    console.log(inputValues);

    // create a new user with email password
    signInUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex p-10 bg-slate-50">
        {/* <!-- Left Pane --> */}
        <LeftPane />
        {/* <!-- Right Pane --> */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <h1 className="text-4xl font-semibold mb-6 rancho text-black text-center">
              Sign In
            </h1>
            <h1 className=" font-semibold mb-6 text-gray-500 text-center">
              Join to Our Platform with all time access and free{" "}
            </h1>
            {/* Social Login options */}
            <SocialLogin />

            <div className="mt-4  text-gray-600 text-center">
              <p>or with email</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* <!-- Your form elements go here --> */}

              <div>
                <label
                  htmlFor="email"
                  className="block  font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block  font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="text-2xl absolute top-1/2 right-4"
                >
                  {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-ns-red-pinkish text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-4  text-gray-600 text-center">
              <p>
                Do not have an account?{" "}
                <Link to="/signup" className="text-black hover:underline">
                  Sign Up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
