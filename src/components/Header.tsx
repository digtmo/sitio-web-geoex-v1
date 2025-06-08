import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/WhatsApp Image 2025-06-07 at 10.29.47 PM.jpeg" 
              alt="GeoEx - Ingeniería Geotécnica" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-red-600 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-red-600 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-red-600 transition-colors">
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Solicitar Cotización
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-gray-700 hover:text-red-600">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left py-2 text-gray-700 hover:text-red-600">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left py-2 text-gray-700 hover:text-red-600">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 text-gray-700 hover:text-red-600">
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 mt-4"
              >
                Solicitar Cotización
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;