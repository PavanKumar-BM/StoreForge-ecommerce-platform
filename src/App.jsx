export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center text-2xl font-bold text-blue-600">
              ShopEase
            </div>

            {/* Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Deals
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

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Discover Your Style
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Shop the latest trends in fashion, electronics, and home
              essentials — all in one place.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/400x400.png?text=Product+Image"
              alt="Featured Product"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
