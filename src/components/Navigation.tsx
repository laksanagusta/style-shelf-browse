
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6281761215676', '_blank');
  };

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@boutique_ummi', '_blank');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gray-900">UMMI BOUTIQUE</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </button>
            
            <button
              onClick={handleTikTokClick}
              className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="text-sm">TikTok</span>
            </button>

            <Link 
              to="/store" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Foto Toko
            </Link>
            <Link 
              to="/catalog" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Katalog
            </Link>
            <Link 
              to="/catalog" 
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Belanja Sekarang
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                to="/store"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Foto Toko
              </Link>
              <Link
                to="/catalog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Katalog
              </Link>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-green-600 hover:text-green-700 hover:bg-gray-50 rounded-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </button>
              <button
                onClick={() => {
                  handleTikTokClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </button>
              <Link
                to="/catalog"
                className="block w-full mt-4 px-3 py-2 text-center text-base font-medium text-white bg-black hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Belanja Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
