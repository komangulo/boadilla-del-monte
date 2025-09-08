import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const ServicesDirectory = () => {
  const featuredBusinesses = [
    {
      name: "Restaurante El Palacio",
      category: "Gastronomía",
      rating: 4.8,
      description: "Cocina tradicional española en un ambiente histórico único",
      address: "Plaza del Infante Don Luis, 5",
      phone: "91 351 23 45",
      hours: "12:00 - 16:00, 20:00 - 24:00",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      featured: true
    },
    {
      name: "Centro Médico Boadilla",
      category: "Salud",
      rating: 4.9,
      description: "Atención médica integral con especialistas de primer nivel",
      address: "Av. de España, 12",
      phone: "91 351 67 89",
      hours: "08:00 - 21:00",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      featured: true
    },
    {
      name: "Academia de Idiomas Global",
      category: "Educación",
      rating: 4.7,
      description: "Cursos de inglés, francés y alemán para todas las edades",
      address: "C/ Real, 28",
      phone: "91 351 45 67",
      hours: "09:00 - 21:00",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop",
      featured: false
    },
    {
      name: "Gimnasio Fitness Plus",
      category: "Deporte",
      rating: 4.6,
      description: "Equipamiento moderno y clases dirigidas variadas",
      address: "C/ de las Flores, 15",
      phone: "91 351 89 12",
      hours: "06:00 - 23:00",
      image: "https://images.unsplash.com/photo-1571019613540-996a0b1b9f05?w=400&h=250&fit=crop",
      featured: false
    },
    {
      name: "Floristería Jardín Real",
      category: "Comercio",
      rating: 4.5,
      description: "Flores frescas y arreglos florales para toda ocasión",
      address: "C/ Mayor, 8",
      phone: "91 351 34 56",
      hours: "09:00 - 19:00",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      featured: false
    },
    {
      name: "Peluquería Estilo Moderno",
      category: "Belleza",
      rating: 4.8,
      description: "Cortes de tendencia y tratamientos capilares profesionales",
      address: "Av. Juan Carlos I, 22",
      phone: "91 351 78 90",
      hours: "10:00 - 20:00",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=250&fit=crop",
      featured: false
    }
  ];

  const categories = [
    "Todos", "Gastronomía", "Salud", "Educación", "Deporte", "Comercio", "Belleza", "Servicios"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Gastronomía": "bg-boadilla-gold text-black",
      "Salud": "bg-boadilla-blue text-white", 
      "Educación": "bg-boadilla-green text-white",
      "Deporte": "bg-boadilla-forest text-white",
      "Comercio": "bg-boadilla-green-light text-white",
      "Belleza": "bg-boadilla-blue text-white"
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <section id="empresas" className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Directorio de Empresas de Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los mejores negocios y servicios locales de Boadilla del Monte
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "municipal" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Businesses */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Destacados</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBusinesses.filter(business => business.featured).map((business, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={business.image} 
                    alt={business.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(business.category)}>
                      {business.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center text-sm font-semibold">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {business.rating}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-boadilla-green transition-colors">
                    {business.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {business.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                      {business.address}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-boadilla-blue" />
                      {business.phone}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-boadilla-gold" />
                      {business.hours}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="municipal" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Businesses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBusinesses.filter(business => !business.featured).map((business, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div className="relative">
                <img 
                  src={business.image} 
                  alt={business.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className={getCategoryColor(business.category) + " text-xs"}>
                    {business.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground group-hover:text-boadilla-green transition-colors">
                    {business.name}
                  </h4>
                  <div className="flex items-center text-xs">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    {business.rating}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                  {business.description}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {business.address}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver directorio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesDirectory;