import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-950 to-black-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-xl w-80 sm:w-96 text-white">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Register
        </h2>

        <div className="relative mb-6">
          <FaUser className="absolute left-3 top-3 text-black opacity-70" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-500 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
        </div>

        <div className="relative mb-6">
          <FaEnvelope className="absolute left-3 top-3 text-black " />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-500 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
        </div>

        <div className="relative mb-4">
          <FaLock className="absolute left-3 top-3 text-black" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-500 bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 transition font-bold py-2 rounded-full text-white shadow-md">
          Register
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-black hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
