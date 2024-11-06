import React, { useState } from 'react';

const Header = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-emerald-600 text-white fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">CarRental</a>
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="/about" className="hover:text-emerald-200">About Us</a>
          <a href="/cars" className="hover:text-emerald-200">Cars</a>
          <a href="/contact" className="hover:text-emerald-200">Contact</a>
          <a href="/login" className="hover:text-emerald-200">Login</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-emerald-600 px-4 py-2 space-y-2">
          <a href="/about" className="block text-white hover:text-emerald-200">About Us</a>
          <a href="/cars" className="block text-white hover:text-emerald-200">Cars</a>
          <a href="/contact" className="block text-white hover:text-emerald-200">Contact</a>
          <a href="/login" className="block text-white hover:text-emerald-200">Login</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
