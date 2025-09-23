import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Globe, Users, Heart, Calendar, Camera, Phone, Newspaper, Award, Facebook, Instagram, Youtube } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('kannada');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleLanguage = () => {
    setLanguage(language === 'kannada' ? 'english' : 'kannada');
  };

  const content = {
    kannada: {
      home: 'ಮುಖ್ಯ ಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      services: 'ಸೇವೆ ಸಂಸ್ಥೆಗಳು',
      news: 'ಮಾಹಿತಿಗಳು',
      gallery: 'ಗ್ಯಾಲರಿ',
      events: 'ಮೇಳಾವಣಿಗೆ ಮತ್ತು ಸೇವಾಸಂಸ್ಥೆಗಳು',
      programs: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      membership: 'ಸದಸ್ಯತ್ವ(MemberShip)',
      contact: 'ಸಂಪರ್ಕ',
      orgName: 'ತುಳುನಾಡ ಜವನೆರ್ ಬೆಂಗಳೂರು (ರಿ)',
      submenus: {
        about: ['ನಮ್ಮ ಇತಿಹಾಸ', 'ನಮ್ಮ ಧ್ಯೇಯ', 'ನಮ್ಮ ತಂಡ'],
        services: ['ರಕ್ತದಾನ ಶಿಬಿರ', 'ಆರೋಗ್ಯ ನಿಧಿ', 'ವಿದ್ಯಾ ನಿಧಿ'],
        gallery: ['ಫೋಟೋ ಗ್ಯಾಲರಿ', 'ವೀಡಿಯೋ ಗ್ಯಾಲರಿ'],
        events: ['ಸದಸ್ಯತ್ವ ನೋಂದಣಿ', 'ಸ್ವಯಂಸೇವಕ ನೋಂದಣಿ', 'ಕಾರ್ಯಕ್ರಮ ನೋಂದಣಿ']
      }
    },
    english: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      news: 'News',
      gallery: 'Gallery',
      events: 'Events',
      programs: 'Programs',
      membership: 'Membership',
      contact: 'Contact',
      orgName: 'Tulu Nadu Javaner Bengaluru ®',
      submenus: {
        about: ['Our History', 'Our Mission', 'Our Team'],
        services: ['Blood Donation Camp', 'Health Fund', 'Education Fund'],
        gallery: ['Photo Gallery', 'Video Gallery'],
        events: ['Membership Registration', 'Volunteer Registration', 'Event Registration']
      }
    }
  };

  const menuItems = [
    { key: 'home', path: '/', hasSubmenu: false },
    { key: 'about', path: '/about', hasSubmenu: true },
    // { key: 'services', path: '/services', hasSubmenu: true },
    // { key: 'news', path: '/news', hasSubmenu: false },
    { key: 'gallery', path: '/gallery', hasSubmenu: true },
    // { key: 'events', path: '/events', hasSubmenu: true },
    // { key: 'programs', path: '/programs', hasSubmenu: false },
    { key: 'membership', path: '/membership', hasSubmenu: false },
    { key: 'contact', path: '/contact', hasSubmenu: false }
  ];

  const handleDropdownToggle = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-tulu-rustic-red to-tulu-bold-red shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20 md:h-24">
              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 flex items-center justify-center group-hover:rotate-12 transition-all duration-500 group-hover:scale-110">
                  <img 
                    src="https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/TJB%20Family/Logo.png" 
                    alt="TJB Logo"
                    className="h-full w-full object-contain drop-shadow-2xl filter brightness-125 contrast-125 saturate-110"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item) => (
                  <div key={item.key} className="relative group">
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm text-base font-medium ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
                      onMouseEnter={() => item.hasSubmenu && setActiveDropdown(item.key)}
                      onMouseLeave={() => item.hasSubmenu && setActiveDropdown(null)}
                    >
                      {content[language][item.key]}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.hasSubmenu && activeDropdown === item.key && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-orange-200 overflow-hidden animate-slide-down z-50"
                        onMouseEnter={() => setActiveDropdown(item.key)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {content[language].submenus[item.key].map((submenu, index) => (
                          <Link
                            key={index}
                            to={`${item.path}/${submenu.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 border-b border-gray-100 last:border-b-0 font-medium ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
                          >
                            {submenu}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center px-4 py-3 bg-tulu-golden-yellow/20 text-white rounded-lg hover:bg-tulu-golden-yellow/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm ml-4 font-medium ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
                >
                  <Globe className="h-5 w-5 mr-2" />
                  {language === 'kannada' ? 'ಕನ್ನಡ' : 'English'}
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 text-white hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
                <div className="bg-white h-full w-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 flex justify-between items-center">
                    <h2 className="text-white text-lg font-bold">Menu</h2>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white p-2 hover:bg-white/20 rounded-full"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex-1 p-4 space-y-3">
                    {menuItems.map((item) => (
                      <div key={item.key}>
                        <Link
                          to={item.path}
                          className={`block w-full text-left px-4 py-3 text-gray-800 bg-gray-50 hover:bg-orange-100 hover:text-orange-600 rounded-lg font-medium transition-colors shadow-sm ${language === 'kannada' ? 'font-kannada text-base' : 'font-display text-base'}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {content[language][item.key]}
                        </Link>
                        
                        {item.hasSubmenu && (
                          <div className="ml-4 mt-2 space-y-1 bg-gray-100 rounded-lg p-2">
                            {content[language].submenus[item.key].map((submenu, index) => (
                              <Link
                                key={index}
                                to={`${item.path}/${submenu.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`block px-4 py-2 text-gray-600 bg-white hover:text-orange-600 hover:bg-orange-50 rounded text-sm transition-colors shadow-sm ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {submenu}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Language Toggle */}
                  <div className="p-4 border-t border-gray-200">
                    <button
                      onClick={toggleLanguage}
                      className={`w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium transition-all hover:from-orange-600 hover:to-red-600 shadow-lg ${language === 'kannada' ? 'font-kannada' : 'font-display'}`}
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      {language === 'kannada' ? 'ಕನ್ನಡ' : 'English'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/services" element={<ServicesPage language={language} />} />
            <Route path="/news" element={<NewsPage language={language} />} />
            <Route path="/gallery" element={<GalleryPage language={language} />} />
            <Route path="/contact" element={<ContactPage language={language} />} />
            <Route path="/events" element={<EventsPage language={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-tulu-almost-black to-tulu-very-dark text-tulu-warm-grey py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-tulu-golden-yellow">
                  {content[language].orgName}
                </h3>
                <p className="text-tulu-warm-grey mb-4 font-body leading-relaxed">
                  {language === 'kannada' 
                    ? 'ಸಂಸ್ಕೃತಿ... ಭಾಷೆ... ಸೇವೆ.. ಕ್ರೀಡೆ.. ಈ ವಿಚಾರಗಳನ್ನು ರಾಜಧಾನಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪಸರಿಸುವ ಜೊತೆಗೆ ಇಲ್ಲಿರುವ ತುಳುವರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವುದೇ ನಮ್ಮ ಮೂಲ ಧ್ಯೇಯ.'
                    : 'Spreading Culture, Language, Service, and Sports in Bengaluru while uniting all Tuluvas is our core mission.'
                  }
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-tulu-golden-yellow font-display">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-tulu-warm-grey hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-tulu-warm-grey hover:text-pink-400 transition-colors duration-200 transform hover:scale-110">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-tulu-warm-grey hover:text-green-400 transition-colors duration-200 transform hover:scale-110">
                    <span className="sr-only">WhatsApp</span>
                    <Phone className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-tulu-warm-grey hover:text-red-400 transition-colors duration-200 transform hover:scale-110">
                    <span className="sr-only">YouTube</span>
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-tulu-coffee-brown mt-8 pt-8 text-center">
              <p className="text-tulu-warm-grey font-body">
                © 2025 {content[language].orgName}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;