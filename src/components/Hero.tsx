import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/boadilla-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-boadilla-green/80 via-boadilla-blue/70 to-boadilla-green/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bienvenido a <span className="block text-boadilla-gold">Boadilla del Monte</span>
          </h1>
          <h2 className="sr-only">Boadilla del Monte - Tu ciudad de referencia en la Comunidad de Madrid</h2>
          <h3 className="sr-only">Descubre todo sobre Boadilla del Monte: noticias, eventos y servicios</h3>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Tu portal de referencia para noticias, eventos, servicios y todo lo que necesitas 
            saber sobre nuestra ciudad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Explorar Noticias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-boadilla-green">
              Ver Eventos
            </Button>
          </div>

          {/* Quick Stats */}
          <h4 className="sr-only">Datos clave de Boadilla del Monte</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <h5 className="sr-only">Población y geografía de Boadilla del Monte</h5>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-boadilla-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">47,000+</div>
              <div className="text-white/80">Habitantes</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-boadilla-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">47 km²</div>
              <div className="text-white/80">Extensión</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Calendar className="h-8 w-8 text-boadilla-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1208</div>
              <div className="text-white/80">Año Fundación de Boadilla del Monte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;