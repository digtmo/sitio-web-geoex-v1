import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-red-50 to-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ingeniería geotécnica de 
                <span className="text-red-600 block">alto nivel técnico</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Estudios de suelos, prospección sísmica y soluciones con geosintéticos 
                para obras seguras y eficientes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Ver nuestros servicios</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-red-600">10+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Proyectos realizados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
            </div>
          </div>

          {/* Imagen Hero */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/imagenheader.jpeg"
                alt="Panorámica de obra civil con equipo GeoEx en terreno"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Imagen secundaria flotante */}
            <div className="absolute -bottom-6 -left-6 w-48 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Close-up de sondaje SPT en ejecución"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;