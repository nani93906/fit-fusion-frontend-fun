
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-gym-primary to-gym-secondary rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">FitZone</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your body and mind at FitZone. We provide world-class fitness equipment, 
              expert trainers, and a supportive community to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gym-primary transition-colors p-2 rounded-full hover:bg-gray-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-primary transition-colors p-2 rounded-full hover:bg-gray-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-primary transition-colors p-2 rounded-full hover:bg-gray-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-gym-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gym-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gym-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gym-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gym-primary" />
                <span className="text-gray-300">123 Fitness St, Gym City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gym-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gym-primary" />
                <span className="text-gray-300">info@fitzone.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FitZone. All rights reserved. Built with passion for fitness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
