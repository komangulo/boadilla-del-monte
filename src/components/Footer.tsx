import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { title: "Noticias", href: "#noticias" },
    { title: "Eventos", href: "#eventos" },
    { title: "Directorio", href: "#empresas" },
    { title: "Turismo", href: "#turismo" }
  ];

  const services = [
    { title: "Ayuntamiento", href: "#" },
    { title: "Registro Civil", href: "#" },
    { title: "Policía Local", href: "#" },
    { title: "Bomberos", href: "#" },
    { title: "Centro de Salud", href: "#" },
    { title: "Biblioteca", href: "#" }
  ];

  const neighborhoods = [
    "Montepríncipe",
    "Las Lomas", 
    "Valdecabañas",
    "El Olivar",
    "Siglo XXI",
    "Parque Boadilla"
  ];

  return (
    <footer className="bg-boadilla-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-boadilla-gold mb-2">
                Boadilla del Monte
              </h3>
              <h4 className="sr-only">Portal oficial del Ayuntamiento de Boadilla del Monte</h4>
              <p className="text-white/80 text-sm">
                Portal oficial de la ciudad. Tu punto de encuentro para noticias, 
                eventos y servicios locales.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-boadilla-gold" />
                <span>Plaza del Infante Don Luis, 1</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-boadilla-gold" />
                <span>91 351 11 00</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-boadilla-gold" />
                <span>info@boadilladelmonte.es</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="sr-only">Accesos rápidos de Boadilla del Monte</h5>
            <h4 className="text-lg font-semibold text-boadilla-gold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-boadilla-gold transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="sr-only">Servicios municipales de Boadilla del Monte</h5>
            <h4 className="text-lg font-semibold text-boadilla-gold mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-boadilla-gold transition-colors text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h5 className="sr-only">Barrios y urbanizaciones de Boadilla del Monte</h5>
            <h4 className="text-lg font-semibold text-boadilla-gold mb-4">
              Barrios
            </h4>
            <ul className="space-y-2">
              {neighborhoods.map((neighborhood, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-boadilla-gold transition-colors text-sm"
                  >
                    {neighborhood}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-boadilla-gold hover:bg-white/10">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-boadilla-gold hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-boadilla-gold hover:bg-white/10">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-boadilla-gold hover:bg-white/10">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="border-boadilla-gold text-boadilla-gold hover:bg-boadilla-gold hover:text-boadilla-forest">
              Suscríbete al boletín
            </Button>
          </div>
        </div>

        <Separator className="my-6 bg-white/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 space-y-2 md:space-y-0">
          <p>
            © 2024 Ayuntamiento de Boadilla del Monte. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-boadilla-gold transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="hover:text-boadilla-gold transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-boadilla-gold transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-boadilla-gold transition-colors">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;