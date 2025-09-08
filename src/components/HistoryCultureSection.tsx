import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark, BookOpen, Castle, CalendarDays } from "lucide-react";

const HistoryCultureSection = () => {
  const historicalSites = [
    {
      title: "Palacio del Infante Don Luis",
      description: "Joy arquitectónica del siglo XVIII en Boadilla del Monte",
      icon: <Castle className="h-8 w-8 text-boadilla-gold" />,
      features: [
        "Arquitectura neoclásica",
        "Jardines históricos",
        "Visitas guiadas"
      ]
    },
    {
      title: "Museo de Boadilla del Monte",
      description: "Descubre la rica historia de Boadilla del Monte",
      icon: <Landmark className="h-8 w-8 text-boadilla-blue" />,
      features: [
        "Exposiciones permanentes",
        "Arte local",
        "Actividades culturales"
      ]
    },
    {
      title: "Iglesia de San Cristóbal",
      description: "Monumento histórico en el corazón de Boadilla del Monte",
      icon: <Landmark className="h-8 w-8 text-boadilla-green" />,
      features: [
        "Arquitectura religiosa",
        "Patrimonio cultural",
        "Visitas culturales"
      ]
    }
  ];

  const culturalEvents = [
    {
      title: "Festival de Música Clásica",
      description: "Espectáculos en lugares emblemáticos de Boadilla del Monte",
      date: "Junio - Julio 2024"
    },
    {
      title: "Semana Cultural",
      description: "Celebra la cultura local en Boadilla del Monte",
      date: "Septiembre 2024"
    },
    {
      title: "Mercado Medieval",
      description: "Viaja en el tiempo en las calles de Boadilla del Monte",
      date: "Octubre 2024"
    }
  ];

  return (
    <section id="historia-cultura" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Historia y Cultura de Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora el rico patrimonio histórico y cultural de Boadilla del Monte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {historicalSites.map((site, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-boadilla-blue/10">
                    {site.icon}
                  </div>
                  <CardTitle className="text-xl">{site.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{site.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Características destacadas:</h4>
                <ul className="space-y-2">
                  {site.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-boadilla-green mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4 w-full">
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-boadilla-blue/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Eventos Culturales en Boadilla del Monte
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <CalendarDays className="h-5 w-5 text-boadilla-blue mr-2" />
                  <span className="font-medium text-boadilla-blue">{event.date}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">
                  Ver detalles
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Descubre más sobre la historia de Boadilla del Monte
            </h4>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Boadilla del Monte cuenta con una rica historia que se remonta a la Edad Media. 
              Su patrimonio arquitectónico y cultural la convierten en un destino imprescindible 
              en la Comunidad de Madrid.
            </p>
            <div className="space-x-4">
              <Button variant="municipal">
                Historia de Boadilla del Monte
              </Button>
              <Button variant="outline">
                Galería de imágenes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryCultureSection;
