import React from 'react';
import { Compass, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Compass className="w-8 h-8 text-teal-400 mr-2" />
              <span className="text-xl font-bold">Blue Depths Diving</span>
            </div>
            <p className="text-blue-300 mb-6">
              Discover the wonders beneath the waves with our professional diving experiences in pristine tropical waters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-teal-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Locations', 'Packages', 'Instructors', 'Gallery', 'Testimonials', 'Book a Dive'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Compass className="w-5 h-5 text-blue-300 mr-2" />
                <a href="https://maps.app.goo.gl/UG7mJ3DdfG5Au6xi7" className="text-blue-300 hover:text-white transition-colors">
                Custom Road, Dodanduwa 80250
                </a>
          
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-300 mr-2" />
                <a href="mailto:info@bluedepthsdiving.com" className="text-blue-300 hover:text-white transition-colors">
                  info@bluedepthsdiving.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-300 mr-2" />
                <a href="tel:+15551234567" className="text-blue-300 hover:text-white transition-colors">
                  +94 (71) 465 1418
                </a>
              </li>
              <li className="flex items-center">
                <Facebook className="w-5 h-5 text-blue-300 mr-2" />
                <a href="https://www.facebook.com/dodanduwadivingclub" className="text-blue-300 hover:text-white transition-colors">
                  @Dodanduwa Diving and Water Sports Club 
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Newsletter</h3>
            <p className="text-blue-300 mb-4">
              Subscribe to our newsletter for special offers and diving tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Blue Depths Diving. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;