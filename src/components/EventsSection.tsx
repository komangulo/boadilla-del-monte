import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Cine de Verano en Boadilla",
      date: "Julio - Agosto 2024",
      time: "22:00 - 00:30",
      location: "Parque de la Villa y Palacio del Infante Don Luis",
      category: "Cultura",
      attendees: "500+",
      description: "Disfruta del mejor cine al aire libre en las noches de verano de Boadilla. Proyecciones en ubicaciones únicas con servicio de restauración y ambiente familiar.",
      image: "https://images.unsplash.com/photo-1489599849227-2074620ee915?w=800&h=500&fit=crop"
    },
    {
      title: "Mercado Medieval de Boadilla",
      date: "10-12 Mayo 2024",
      time: "11:00 - 22:00",
      location: "Casco Histórico de Boadilla",
      category: "Cultura",
      attendees: "1000+",
      description: "Viaja en el tiempo con nuestro mercado medieval. Más de 150 puestos de artesanía, gastronomía tradicional, espectáculos callejeros y talleres para todas las edades.",
      image: "https://images.unsplash.com/photo-1611688625213-1d35d2c2e2a6?w=800&h=500&fit=crop"
    },
    {
      title: "Mercado de Productores Locales",
      date: "15 Marzo 2024",
      time: "09:00 - 14:00",
      location: "Plaza del Infante Don Luis",
      category: "Gastronomía",
      attendees: "200+",
      description: "Productos frescos y artesanales de la región madrileña",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=250&fit=crop"
    },
    {
      title: "Concierto de Primavera",
      date: "22 Marzo 2024", 
      time: "19:30",
      location: "Auditorio Municipal",
      category: "Música",
      attendees: "500+",
      description: "Orquesta Sinfónica de Madrid interpreta obras clásicas",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    },
    {
      title: "Ruta Senderista Palacio Real",
      date: "24 Marzo 2024",
      time: "10:00 - 13:00", 
      location: "Jardines del Palacio",
      category: "Deporte",
      attendees: "50+",
      description: "Caminata guiada por los senderos históricos de Boadilla",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Gastronomía": "bg-boadilla-gold text-black",
      "Música": "bg-boadilla-blue text-white",
      "Deporte": "bg-boadilla-green text-white",
      "Cultura": "bg-boadilla-forest text-white"
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <section id="eventos" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Próximos Eventos en Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre las actividades y eventos que harán de Boadilla un lugar más vibrante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                  <div className="text-xs font-semibold text-boadilla-green">
                    {event.date.split(' ')[0]}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {event.date.split(' ')[1]} {event.date.split(' ')[2]}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl leading-tight group-hover:text-boadilla-green transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-boadilla-blue" />
                    {event.time}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-boadilla-gold" />
                    {event.attendees} participantes esperados
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="municipal" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Inscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver calendario completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;