import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, School, HeartPulse, TreePine, Bus } from "lucide-react";

const LivingSection = () => {
  const livingFeatures = [
    {
      title: "Calidad de Vida en Boadilla del Monte",
      description: "Descubre por qué Boadilla del Monte es uno de los mejores lugares para vivir en la Comunidad de Madrid",
      icon: <Home className="h-8 w-8 text-boadilla-blue" />,
      features: [
        "Entorno residencial de alto nivel",
        "Amplias zonas verdes y parques",
        "Excelente calidad del aire"
      ]
    },
    {
      title: "Educación en Boadilla del Monte",
      description: "Los mejores centros educativos para tus hijos en Boadilla del Monte",
      icon: <School className="h-8 w-8 text-boadilla-green" />,
      features: [
        "Colegios públicos y privados de prestigio",
        "Amplia oferta educativa",
        "Instalaciones modernas y equipadas"
      ]
    },
    {
      title: "Salud en Boadilla del Monte",
      description: "Cobertura sanitaria de calidad en Boadilla del Monte",
      icon: <HeartPulse className="h-8 w-8 text-boadilla-red" />,
      features: [
        "Centros de salud modernos",
        "Amplia red de especialistas",
        "Servicios de urgencias"
      ]
    },
    {
      title: "Naturaleza en Boadilla del Monte",
      description: "Disfruta de la naturaleza en Boadilla del Monte",
      icon: <TreePine className="h-8 w-8 text-boadilla-forest" />,
      features: [
        "Parques naturales cercanos",
        "Rutas de senderismo",
        "Zonas verdes urbanas"
      ]
    },
    {
      title: "Transporte en Boadilla del Monte",
      description: "Conectividad y movilidad en Boadilla del Monte",
      icon: <Bus className="h-8 w-8 text-boadilla-gold" />,
      features: [
        "Excelentes conexiones por carretera",
        "Transporte público eficiente",
        "Carriles bici"
      ]
    }
  ];

  return (
    <section id="vive-boadilla" className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vive Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre por qué Boadilla del Monte es el lugar ideal para vivir, trabajar y disfrutar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {livingFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-boadilla-blue/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Beneficios en Boadilla del Monte:</h4>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-boadilla-green mr-2">✓</span>
                      <span>{item}</span>
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

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            ¿Por qué elegir Boadilla del Monte?
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
            Boadilla del Monte combina la tranquilidad de una ciudad residencial con todos los servicios 
            y comodidades de una gran ciudad. Su excelente ubicación, su oferta educativa y su calidad 
            de vida la convierten en uno de los municipios más deseados de la Comunidad de Madrid.
          </p>
          <Button variant="municipal">
            Descubre más sobre Boadilla del Monte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LivingSection;
