import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Clock, Star } from "lucide-react";

const TourismSection = () => {
  const attractions = [
    {
      name: "Palacio del Infante Don Luis",
      description: "Joya arquitectónica del siglo XVIII, residencia histórica con jardines señoriales",
      type: "Monumento Histórico",
      duration: "1-2 horas",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
      highlights: ["Arquitectura neoclásica", "Jardines históricos", "Exposiciones permanentes"]
    },
    {
      name: "Parque Juan Pablo II",
      description: "Amplio espacio verde ideal para familias con zonas de juego y senderos naturales",
      type: "Parque Natural",
      duration: "2-3 horas",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      highlights: ["Senderos naturales", "Zona infantil", "Área de picnic"]
    },
    {
      name: "Casa de Cultura",
      description: "Centro neurálgico de actividades culturales con exposiciones y eventos",
      type: "Centro Cultural",
      duration: "1 hora",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&h=250&fit=crop",
      highlights: ["Exposiciones temporales", "Biblioteca", "Talleres culturales"]
    }
  ];

  const routes = [
    {
      name: "Ruta Histórica del Centro",
      distance: "2.5 km",
      difficulty: "Fácil",
      time: "45 min",
      description: "Recorrido por los principales monumentos del casco histórico"
    },
    {
      name: "Sendero de los Jardines",
      distance: "3.8 km", 
      difficulty: "Moderada",
      time: "1h 15min",
      description: "Ruta natural por parques y espacios verdes de la ciudad"
    },
    {
      name: "Camino del Palacio Real",
      distance: "1.8 km",
      difficulty: "Fácil",
      time: "30 min",
      description: "Paseo desde el centro hasta el emblemático palacio"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      "Monumento Histórico": "bg-boadilla-gold text-black",
      "Parque Natural": "bg-boadilla-green text-white",
      "Centro Cultural": "bg-boadilla-blue text-white"
    };
    return colors[type] || "bg-secondary text-secondary-foreground";
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: { [key: string]: string } = {
      "Fácil": "bg-boadilla-green text-white",
      "Moderada": "bg-boadilla-gold text-black",
      "Difícil": "bg-destructive text-destructive-foreground"
    };
    return colors[difficulty] || "bg-secondary text-secondary-foreground";
  };

  return (
    <section id="turismo" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Descubre Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora la rica historia, naturaleza y cultura de nuestra ciudad
          </p>
        </div>

        {/* Main Attractions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Lugares de Interés</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTypeColor(attraction.type)}>
                      {attraction.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center text-sm font-semibold">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {attraction.rating}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-boadilla-green transition-colors">
                    {attraction.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {attraction.description}
                  </p>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-boadilla-blue" />
                    Duración recomendada: {attraction.duration}
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-foreground">Destacados:</h5>
                    <div className="flex flex-wrap gap-1">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="municipal" className="w-full mt-4">
                    <Camera className="mr-2 h-4 w-4" />
                    Ver galería
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Walking Routes */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Rutas Recomendadas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200 group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-boadilla-green transition-colors">
                    {route.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {route.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                      <span className="text-muted-foreground">{route.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-boadilla-blue" />
                      <span className="text-muted-foreground">{route.time}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Badge className={getDifficultyColor(route.difficulty)}>
                      {route.difficulty}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Ver ruta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://www.google.com/maps/place/Boadilla+del+Monte,+Madrid/@40.4009,-3.8668,14z', '_blank')}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Mapa turístico
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
