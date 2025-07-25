import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-900 to-stone-900 ">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-xl w-80 sm:w-96 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Login
        </h2>

        <div className="relative mb-6">
          <FaUser className="absolute left-3 top-3 text-black opacity-70" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-500 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
        </div>

        <div className="relative mb-4 text-gray-600">
          <FaLock className="absolute left-3 top-3 text-black opacity-70" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-500 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
        </div>

        <div className="flex items-center justify-between text-sm mb-6">
          <label className="flex items-center space-x-2 text-gray-700">
            <input type="checkbox" className="accent-blue-400" />
            <span>Remember me</span>
          </label>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 transition font-bold py-2 rounded-full text-white shadow-md">
          Login
        </button>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-bold text-black hover:underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
