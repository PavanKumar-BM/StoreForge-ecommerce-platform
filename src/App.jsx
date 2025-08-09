export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center text-2xl font-bold text-blue-600">
              MyWebsite
            </div>

            {/* Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <header className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MyWebsite
        </h1>
        <p className="text-lg text-gray-600">
          A clean and modern React + Tailwind CSS starter template
        </p>
      </header>
    </div>
  );
}
