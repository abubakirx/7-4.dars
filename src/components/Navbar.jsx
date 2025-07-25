import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-neutral-900 border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide">
          MyApp
        </Link>
        <nav className="space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-400">
            Login
          </Link>
          <Link to="/profile" className="hover:text-blue-400">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
