import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Wine, Coffee, ShoppingCart, Film } from "lucide-react";

const GastronomyLeisureSection = () => {
  const gastronomyPlaces = [
    {
      title: "Restaurantes en Boadilla del Monte",
      description: "Disfruta de la mejor gastronomía en Boadilla del Monte",
      icon: <Utensils className="h-8 w-8 text-boadilla-gold" />,
      features: [
        "Cocina tradicional y de vanguardia",
        "Terrazas con encanto",
        "Menús especiales"
      ]
    },
    {
      title: "Bares y Cafeterías",
      description: "Los mejores lugares para tapear en Boadilla del Monte",
      icon: <Coffee className="h-8 w-8 text-boadilla-blue" />,
      features: [
        "Tapas tradicionales",
        "Ambiente acogedor",
        "Terrazas al aire libre"
      ]
    },
    {
      title: "Comercios locales",
      description: "Descubre el comercio local de Boadilla del Monte",
      icon: <ShoppingCart className="h-8 w-8 text-boadilla-green" />,
      features: [
        "Productos artesanales",
        "Comercio de proximidad",
        "Ofertas exclusivas"
      ]
    }
  ];

  const leisureActivities = [
    {
      title: "Cine en Boadilla del Monte",
      description: "Disfruta del séptimo arte en nuestras salas",
      icon: <Film className="h-6 w-6 text-boadilla-blue" />
    },
    {
      title: "Rutas de vinos",
      description: "Descubre los mejores vinos de la región",
      icon: <Wine className="h-6 w-6 text-boadilla-red" />
    },
    {
      title: "Eventos gastronómicos",
      description: "Ferias y festivales para todos los gustos",
      icon: <Utensils className="h-6 w-6 text-boadilla-gold" />
    }
  ];

  return (
    <section id="gastronomia-ocio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="sr-only">Gastronomía y Ocio en Boadilla del Monte</h1>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gastronomía y Ocio en Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre los sabores y el entretenimiento que ofrece Boadilla del Monte
          </p>
        </div>

        {/* Gastronomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {gastronomyPlaces.map((place, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-boadilla-blue/10">
                    {place.icon}
                  </div>
                  <CardTitle className="text-xl">{place.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{place.description}</p>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Lo que encontrarás:</h3>
                <ul className="space-y-2">
                  {place.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-boadilla-green mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4 w-full">
                  Ver establecimientos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leisure Activities */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Actividades de Ocio en Boadilla del Monte
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leisureActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="p-2 rounded-full bg-boadilla-blue/10">
                  {activity.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{activity.title}</h4>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Vive Boadilla del Monte al máximo
            </h4>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Boadilla del Monte ofrece una amplia variedad de opciones gastronómicas y de ocio para todos los gustos. 
              Desde restaurantes con estrellas Michelin hasta pequeños locales con encanto, descubre todo lo que nuestra 
              ciudad tiene para ofrecerte.
            </p>
            <div className="space-x-4">
              <Button variant="municipal">
                Guía gastronómica de Boadilla del Monte
              </Button>
              <Button variant="outline">
                Eventos de ocio en Boadilla del Monte
              </Button>
            </div>
          </div>
        </div>

        {/* Hidden SEO Headings */}
        <div className="sr-only">
          <h2>Restaurantes y bares en Boadilla del Monte</h2>
          <h3>Dónde comer en Boadilla del Monte</h3>
          <h4>Gastronomía local de Boadilla del Monte</h4>
          <h5>Ocio y tiempo libre en Boadilla del Monte</h5>
        </div>
      </div>
    </section>
  );
};

export default GastronomyLeisureSection;
