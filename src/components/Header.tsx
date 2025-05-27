import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#1e3a8a]">
            {/* Replace with actual logo image when available */}
            <span className="text-[#1e3a8a]">LushGyal</span>
            <span className="text-[#f8a0a0]">Travel</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
            Contact
          </Link>
          <Link to="/blog" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-[#1e3a8a] hover:text-[#f8a0a0] focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
