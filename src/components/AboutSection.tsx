import React from 'react';
import { Target, Eye, Award, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Precisión',
      description: 'Datos de calidad para decisiones seguras.'
    },
    {
      icon: Target,
      title: 'Innovación',
      description: 'Tecnologías de punta en terreno y laboratorio.'
    },
    {
      icon: Shield,
      title: 'Compromiso',
      description: 'Plazos cumplidos y acompañamiento integral.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Protección de las personas y el entorno en cada faena.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quiénes somos
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Contenido */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sobre GeoEx</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                GeoEx es una consultora chilena especializada en ingeniería geotécnica y exploración del terreno. 
                Nuestro equipo está formado por ingenieros con sólida formación académica y experiencia en proyectos 
                de infraestructura, minería y edificación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6 text-red-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Misión</h4>
                </div>
                <p className="text-gray-600">
                  Entregar soluciones geotécnicas confiables que optimicen la seguridad y la economía de cada obra.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="h-6 w-6 text-gray-800" />
                  <h4 className="text-lg font-semibold text-gray-900">Visión</h4>
                </div>
                <p className="text-gray-600">
                  Ser el socio de referencia en estudios de suelos y geofísica aplicada en Chile y LATAM.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <img 
              src="/quienesomos.jpeg"
              alt="Profesionales trabajando en laboratorio y terreno"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const iconColor = index % 2 === 0 ? 'text-red-600' : 'text-gray-800';
              const bgColor = index % 2 === 0 ? 'bg-red-100' : 'bg-gray-100';
              const hoverColor = index % 2 === 0 ? 'hover:bg-red-50' : 'hover:bg-gray-50';
              
              return (
                <div key={index} className={`text-center p-6 ${bgColor} rounded-lg ${hoverColor} transition-colors`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} ${iconColor} rounded-full mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;