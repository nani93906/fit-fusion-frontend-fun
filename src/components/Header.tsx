
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">FitZone</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-gym-primary'
                    : 'text-gray-700 hover:text-gym-primary'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gym-primary to-gym-secondary"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Join Now Button */}
          <button className="hidden md:block gym-button">
            Join Now
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gym-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-gym-primary bg-gray-50'
                      : 'text-gray-700 hover:text-gym-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full gym-button mt-4">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
