


export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-300">Book For</span> Travel
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="/" className="hover:text-yellow-300 transition">Home</a>
          <a href="/about" className="hover:text-yellow-300 transition">About</a>
          <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Menu
        </button>
      </div>
    </nav>
  );
}

