import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/LoginRegister/SocialLogin";
import LeftPane from "../components/LoginRegister/LeftPane";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserData, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const confPassword = form.get("confirm-password");
    const inputValues = { name, photo, email, password, confPassword };
    console.log(inputValues);

    // create a new user with email password
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // update user data
        updateUserData(createdUser, name, photo)
          .then(() => {
            setUser(createdUser);
            navigate("/");
            console.log("updatedUserData");
          })
          .catch((error) => {
            console.log(error);
          });
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
              Sign Up
            </h1>
            <h1 className=" font-semibold mb-6 text-gray-500 text-center">
              Join to Our Platform with all time access and free{" "}
            </h1>
            {/* Social Login options */}
            <SocialLogin />

            <div className="mt-4  text-gray-600 text-center">
              <p>or with email</p>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              {/* <!-- Your form elements go here --> */}
              <div>
                <label
                  htmlFor="name"
                  className="block  font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block  font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  placeholder="Photo URL"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
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
              <div>
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
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block  font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-ns-red-pinkish text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-4  text-gray-600 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/signin" className="text-black hover:underline">
                  Sign In here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
