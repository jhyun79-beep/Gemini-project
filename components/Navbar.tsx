import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'People', path: '/people' },
    { name: 'Publications', path: '/publications' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-primary shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-4 sm:gap-6">
            {/* Yonsei University Logo */}
            <a href="https://yonsei.ac.kr/sites/en_sc/index.do" target="_blank" rel="noreferrer" className="flex items-center">
                <img 
                    src="https://yonsei.ac.kr/sites/sc/images/common/img-header-logo.png" 
                    alt="Yonsei University" 
                    className="h-8 sm:h-10 w-auto object-contain"
                />
            </a>
            
            {/* Divider */}
            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>

            {/* Lab Name */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-lg leading-tight text-white tracking-tight">Nano-Neuro Robotics</span>
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider hidden sm:block">Dept. of Nano Biomedical Engineering</span>
                </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-white bg-white/20'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-white bg-white/20'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;