import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Calendar, Users, Award } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const servicesData: Record<string, any> = {
    'mecanica-suelos': {
      title: 'Campañas de Mecánica de Suelos',
      subtitle: 'Informes de Caracterización Geotécnica',
      hero: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Realizamos estudios completos de mecánica de suelos con metodologías avanzadas y equipos de última generación para caracterizar las propiedades geotécnicas de su terreno.',
      longDescription: `Nuestros estudios de mecánica de suelos proporcionan la información fundamental necesaria para el diseño seguro y económico de cualquier proyecto de construcción. Utilizamos técnicas de exploración directa e indirecta, combinadas con ensayos de laboratorio especializados, para obtener un perfil geotécnico completo del sitio.

      Trabajamos bajo los más altos estándares de calidad, siguiendo normativas nacionales e internacionales, y entregamos informes detallados que incluyen recomendaciones específicas para fundaciones, excavaciones y obras de contención.`,
      services: [
        'Sondajes geotécnicos SPT (Standard Penetration Test)',
        'Ensayos CPT (Cone Penetration Test)',
        'Ensayos de laboratorio: triaxial, corte directo, consolidación',
        'Determinación de densidad in-situ',
        'Análisis granulométrico y límites de Atterberg',
        'Ensayos de permeabilidad',
        'Clasificación de suelos según USCS y AASHTO',
        'Informes según normativa NCh3206'
      ],
      features: [
        'Equipos calibrados y certificados',
        'Personal técnico especializado',
        'Informes según normativas vigentes',
        'Entrega en plazos acordados',
        'Soporte técnico post-entrega'
      ],
      images: [
        'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'prospeccion-geofisica': {
      title: 'Prospección Geofísica',
      subtitle: 'Clasificación Sísmica DS61 y NCh2369:2025',
      hero: 'https://images.pexels.com/photos/159275/road-construction-work-construction-site-159275.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Estudios geofísicos especializados para la clasificación sísmica de suelos y determinación de parámetros dinámicos según normativas chilenas vigentes.',
      longDescription: `Nuestros estudios de prospección geofísica utilizan tecnologías no invasivas para caracterizar las propiedades dinámicas del subsuelo. Aplicamos métodos sísmicos avanzados que permiten determinar la velocidad de ondas de corte (Vs) y otros parámetros fundamentales para la clasificación sísmica del terreno.

      Estos estudios son esenciales para el cumplimiento de la normativa sísmica chilena y proporcionan información crítica para el diseño sismorresistente de estructuras.`,
      services: [
        'MASW (Análisis de ondas superficiales multicanal)',
        'HVSR (Nakamura) para periodo fundamental del suelo',
        'ReMi (Refraction Microtremor) para determinación de Vs30',
        'Refracción sísmica convencional',
        'Tomografía sísmica',
        'Estudios de ruido sísmico ambiental',
        'Clasificación según DS61 y NCh2369:2025',
        'Determinación de factores de amplificación'
      ],
      features: [
        'Equipos sismográficos de alta resolución',
        'Software de procesamiento especializado',
        'Cumplimiento normativo DS61',
        'Informes técnicos detallados',
        'Mapas de isovelocidades'
      ],
      images: [
        'https://images.pexels.com/photos/159275/road-construction-work-construction-site-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'analisis-estabilidad': {
      title: 'Análisis de Estabilidad Geotécnica',
      subtitle: 'Evaluación integral de riesgos geotécnicos',
      hero: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Análisis especializado de estabilidad de taludes, excavaciones y evaluación de fenómenos como licuación y asentamientos.',
      longDescription: `Realizamos análisis detallados de estabilidad geotécnica utilizando métodos numéricos avanzados y software especializado. Nuestros estudios evalúan las condiciones de estabilidad bajo diferentes escenarios de carga y condiciones sísmicas.

      Proporcionamos soluciones integrales que incluyen el diagnóstico de problemas existentes, análisis predictivo de comportamiento y recomendaciones de medidas de mitigación y refuerzo.`,
      services: [
        'Análisis de estabilidad de taludes',
        'Evaluación de estabilidad de excavaciones',
        'Análisis de licuación de suelos',
        'Cálculo de asentamientos',
        'Back-analysis de fallas',
        'Modelación numérica 2D y 3D',
        'Análisis sísmico pseudoestático',
        'Recomendaciones de mitigación'
      ],
      features: [
        'Software especializado (Plaxis, Slope/W, GeoStudio)',
        'Análisis determinístico y probabilístico',
        'Modelación de condiciones complejas',
        'Factores de seguridad según normativas',
        'Reportes técnicos especializados'
      ],
      images: [
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159275/road-construction-work-construction-site-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'diseno-geotecnico': {
      title: 'Diseño Geotécnico de Ingeniería',
      subtitle: 'Soluciones estructurales especializadas',
      hero: 'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Diseño integral de elementos geotécnicos incluyendo fundaciones, muros de contención, pilotes y sistemas de mejoramiento de suelos.',
      longDescription: `Nuestro equipo de ingenieros especializados desarrolla diseños geotécnicos integrales que optimizan la seguridad, funcionalidad y economía de las obras. Utilizamos metodologías de diseño basadas en estados límite y consideramos las condiciones específicas del sitio.

      Proporcionamos soluciones innovadoras que incluyen desde fundaciones tradicionales hasta sistemas especializados de mejoramiento de suelos y estructuras de contención complejas.`,
      services: [
        'Diseño de pilotes y micropilotes',
        'Muros de contención convencionales y especiales',
        'Fundaciones superficiales y profundas',
        'Mejoramiento de suelos (compaction grouting)',
        'Columnas de grava y stone columns',
        'Sistemas de drenaje subterráneo',
        'Diseño de anclajes y soil nailing',
        'Refuerzo de taludes con geosintéticos'
      ],
      features: [
        'Diseños según códigos internacionales',
        'Optimización técnico-económica',
        'Especificaciones técnicas detalladas',
        'Supervisión de construcción',
        'Control de calidad en obra'
      ],
      images: [
        'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159275/road-construction-work-construction-site-159275.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'geosinteticos': {
      title: 'Revestimientos con Geosintéticos',
      subtitle: 'Control y protección integral',
      hero: 'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Soluciones especializadas con geosintéticos para control de erosión, impermeabilización, drenaje y refuerzo de suelos.',
      longDescription: `Diseñamos e implementamos soluciones integrales con geosintéticos que abordan múltiples necesidades en proyectos de ingeniería civil y ambiental. Nuestros sistemas proporcionan funciones de separación, filtración, drenaje, refuerzo e impermeabilización.

      Trabajamos con productos de última generación y aplicamos metodologías de diseño que consideran las condiciones específicas de cada proyecto, garantizando durabilidad y efectividad a largo plazo.`,
      services: [
        'Control de erosión superficial',
        'Sistemas de impermeabilización',
        'Drenaje y filtración de suelos',
        'Refuerzo mecánico de suelos blandos',
        'Separación de estratos granulares',
        'Protección de taludes',
        'Sistemas de contención de líquidos',
        'Refuerzo de pavimentos'
      ],
      features: [
        'Productos certificados internacionalmente',
        'Diseños técnicos especializados',
        'Supervisión de instalación',
        'Garantía de productos y sistemas',
        'Mantenimiento preventivo'
      ],
      images: [
        'https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/159299/construction-site-build-construction-work-159299.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const service = servicesData[serviceId || ''];

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-red-600 hover:text-red-700">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img 
          src={service.hero}
          alt={service.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-gray-900/60 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Volver a servicios</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-red-100">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción del Servicio</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {service.longDescription}
              </div>
            </div>

            {/* Services List */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">¿Qué incluye este servicio?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.services.map((item: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Carousel */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Galería del Proyecto</h3>
              <ImageCarousel images={service.images} alt={service.title} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Características Destacadas</h3>
              <ul className="space-y-3">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Award className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nuestros Números</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">10+ años</div>
                    <div className="text-sm text-gray-600">de experiencia</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">proyectos completados</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">satisfacción del cliente</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-red-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">¿Necesitas este servicio?</h3>
              <p className="text-red-100 text-sm mb-4">
                Obtén una cotización personalizada para tu proyecto.
              </p>
              <button 
                onClick={() => {
                  window.location.href = '/#contacto';
                }}
                className="w-full bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;