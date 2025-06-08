import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/WhatsApp Image 2025-06-07 at 10.29.47 PM.jpeg" 
                alt="GeoEx - Ingeniería Geotécnica" 
                className="h-12 w-auto bg-white p-2 rounded"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Consultora chilena especializada en ingeniería geotécnica y exploración del terreno.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Mecánica de Suelos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prospección Geofísica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Análisis de Estabilidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diseño Geotécnico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Geosintéticos</a></li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contacto@geoex.cl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+56 9 __ __</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 GeoEx. Todos los derechos reservados. | Ingeniería geotécnica de alto nivel técnico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;