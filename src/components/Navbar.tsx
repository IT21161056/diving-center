import React, { useState, useEffect } from 'react';
import { Anchor, Menu, X, Compass } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Compass className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
            Blue Depths Diving
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Home', 'Locations', 'Packages', 'Instructors', 'Gallery', 'Testimonials'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-teal-300'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className={`btn-primary ${!isScrolled && 'bg-opacity-90 hover:bg-opacity-100'}`}
          >
            Book a Dive
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-blue-900 bg-opacity-95 flex flex-col items-center justify-center 
                     transition-transform duration-300 ease-in-out z-40 lg:hidden
                     ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {['Home', 'Locations', 'Packages', 'Instructors', 'Gallery', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl font-medium hover:text-teal-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="#booking"
              className="btn-primary mt-4"
              onClick={toggleMenu}
            >
              Book a Dive
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;