
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Users, MessageCircle, Calendar, FileText, Bell, Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AreaVecinal = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6 text-boadilla-green" />,
      title: "Gestión de Documentos",
      description: "Solicitudes, certificados y trámites municipales online",
      available: true
    },
    {
      icon: <Calendar className="h-6 w-6 text-boadilla-blue" />,
      title: "Reserva de Espacios",
      description: "Reserva salas comunitarias, pistas deportivas y espacios públicos",
      available: true
    },
    {
      icon: <Shield className="h-6 w-6 text-boadilla-gold" />,
      title: "Incidencias y Averías",
      description: "Reporta problemas en la vía pública, alumbrado o servicios",
      available: true
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-boadilla-green" />,
      title: "Foro Vecinal",
      description: "Comunícate con otros vecinos y el ayuntamiento",
      available: false
    }
  ];

  const quickLinks = [
    { title: "Padrón Municipal", description: "Certificados de empadronamiento" },
    { title: "Recogida de Residuos", description: "Horarios y calendarios" },
    { title: "Transportes", description: "Horarios de autobuses urbanos" },
    { title: "Actividades Culturales", description: "Programación mensual" },
    { title: "Deportes", description: "Inscripciones y reservas" },
    { title: "Juventud", description: "Programas y actividades" }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-boadilla-green" />,
      label: "Teléfono",
      value: "91 632 50 00"
    },
    {
      icon: <Mail className="h-5 w-5 text-boadilla-blue" />,
      label: "Email",
      value: "info@boadilladelmonte.org"
    },
    {
      icon: <MapPin className="h-5 w-5 text-boadilla-gold" />,
      label: "Dirección",
      value: "Plaza de la Constitución, 1"
    },
    {
      icon: <Clock className="h-5 w-5 text-boadilla-green" />,
      label: "Horario",
      value: "Lun-Vie 8:30-14:30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-boadilla-green transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-foreground">Área Vecinal</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge className="bg-boadilla-green text-white text-lg px-4 py-2">
              <Users className="mr-2 h-5 w-5" />
              Área Vecinal
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portal del Ciudadano
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accede a todos los servicios municipales, gestiona tus trámites y mantente informado 
            sobre las novedades de Boadilla del Monte desde un solo lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Servicios Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`shadow-card hover:shadow-lg transition-all duration-300 ${!service.available ? 'opacity-75' : 'cursor-pointer'}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {service.available ? (
                    <Button variant="municipal" size="sm" className="w-full">
                      Acceder
                    </Button>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      Próximamente
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Accesos Rápidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="shadow-card hover:shadow-md transition-all duration-200 cursor-pointer group">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-boadilla-green transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Información de Contacto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  <p className="text-muted-foreground text-sm">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-gradient-to-r from-boadilla-green/10 to-boadilla-blue/10 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <Bell className="h-8 w-8 text-boadilla-green" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            ¿Necesitas ayuda urgente?
          </h3>
          <p className="text-muted-foreground mb-6">
            Para emergencias o incidencias graves, contacta directamente con nuestros servicios 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="municipal" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Emergencias
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat en Vivo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AreaVecinal;
