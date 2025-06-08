import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Activity, BarChart3, Wrench, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'mecanica-suelos',
      icon: Layers,
      title: 'Campañas de Mecánica de Suelos',
      subtitle: 'Informes de Caracterización Geotécnica',
      description: 'Caracterización geotécnica completa con sondajes geotécnicos (SPT, CPT) y ensayos de laboratorio/in-situ según normativa chilena NCh3206.',
      image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=600',
      borderColor: 'border-t-red-600'
    },
    {
      id: 'prospeccion-geofisica',
      icon: Activity,
      title: 'Prospección Geofísica',
      subtitle: 'Clasificación Sísmica DS61 y NCh2369:2025',
      description: 'MASW, HVSR (Nakamura) para periodo fundamental, y ReMi para determinación de Vs30 según normativas vigentes.',
      image: 'https://images.pexels.com/photos/159275/road-construction-work-construction-site-159275.jpeg?auto=compress&cs=tinysrgb&w=600',
      borderColor: 'border-t-gray-800'
    },
    {
      id: 'analisis-estabilidad',
      icon: BarChart3,
      title: 'Análisis de Estabilidad Geotécnica',
      subtitle: 'Evaluación integral de riesgos',
      description: 'Análisis de taludes y excavaciones, evaluación de licuación y asentamientos, back-analysis y recomendaciones de mitigación.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      borderColor: 'border-t-red-600'
    },
    {
      id: 'diseno-geotecnico',
      icon: Wrench,
      title: 'Diseño Geotécnico de Ingeniería',
      subtitle: 'Soluciones estructurales especializadas',
      description: 'Diseño de pilotes, micropilotes, muros de contención, fundaciones y mejoramiento de suelos con técnicas avanzadas.',
      image: 'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=600',
      borderColor: 'border-t-gray-800'
    },
    {
      id: 'geosinteticos',
      icon: Shield,
      title: 'Revestimientos con Geosintéticos',
      subtitle: 'Control y protección integral',
      description: 'Soluciones para control de erosión, impermeabilización, drenaje, filtración y refuerzo mecánico de estratos.',
      image: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=600',
      borderColor: 'border-t-red-600'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en ingeniería geotécnica con tecnología de punta 
            y metodologías probadas para garantizar la seguridad y eficiencia de sus proyectos.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const iconColor = index % 2 === 0 ? 'text-red-600' : 'text-gray-800';
            
            return (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border-t-4 ${service.borderColor}`}>
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <IconComponent className={`h-6 w-6 ${iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <h4 className={`text-sm font-medium mb-3 ${iconColor}`}>
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium group/link"
                  >
                    <span>Ver detalles</span>
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Necesita una consulta personalizada?</h3>
            <p className="text-red-100 mb-6">
              Nuestros especialistas están listos para evaluar su proyecto y proporcionar 
              soluciones geotécnicas adaptadas a sus necesidades específicas.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;