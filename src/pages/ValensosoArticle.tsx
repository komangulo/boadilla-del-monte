import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Home, TreePine, Car, GraduationCap, ShoppingCart, Heart, Star, Users, Euro } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ValensosoArticle = () => {
  const advantages = [
    {
      icon: <TreePine className="h-6 w-6 text-boadilla-green" />,
      title: "Zonas Verdes Excepcionales",
      description: "Valenoso destaca por sus amplios espacios verdes, parques infantiles y zonas de esparcimiento que lo convierten en un oasis natural dentro de Boadilla."
    },
    {
      icon: <Car className="h-6 w-6 text-boadilla-blue" />,
      title: "Excelente Conectividad",
      description: "Ubicación estratégica con fácil acceso a la M-40, M-50 y transporte público hacia Madrid y otras localidades de la zona oeste."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-boadilla-gold" />,
      title: "Centros Educativos de Calidad",
      description: "Proximidad a colegios de prestigio tanto públicos como privados, incluyendo centros bilingües y internacionales."
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-boadilla-green" />,
      title: "Servicios Completos",
      description: "Centros comerciales, supermercados, farmacias y todo tipo de servicios a pocos minutos, sin necesidad de desplazarse al centro."
    }
  ];

  const properties = [
    {
      type: "Chalets Independientes",
      priceRange: "800.000€ - 1.500.000€",
      characteristics: ["4-6 dormitorios", "Jardín privado", "Piscina", "Garaje"]
    },
    {
      type: "Viviendas Adosadas",
      priceRange: "450.000€ - 750.000€", 
      characteristics: ["3-4 dormitorios", "Terraza", "Zona comunitaria", "Trastero"]
    },
    {
      type: "Apartamentos Premium",
      priceRange: "350.000€ - 600.000€",
      characteristics: ["2-3 dormitorios", "Terraza", "Parking", "Zonas comunes"]
    }
  ];

  const services = [
    "Centro Médico Valenoso",
    "Farmacia 24 horas",
    "Supermercado Carrefour",
    "Centro Comercial Las Lomas",
    "Restaurantes y cafeterías",
    "Centros deportivos",
    "Peluquerías y estética",
    "Talleres mecánicos"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-boadilla-green transition-colors">Inicio</Link>
            <span>/</span>
            <span>Barrios</span>
            <span>/</span>
            <span className="text-foreground">Valenoso</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-boadilla-green text-white">Barrios</Badge>
            <Badge className="bg-boadilla-blue text-white">Vivienda</Badge>
            <Badge className="bg-boadilla-gold text-black">Calidad de Vida</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Descubre por qué Valenoso es la mejor zona para vivir en Boadilla del Monte
          </h1>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-4">
              <span>Actualizado: Marzo 2024</span>
              <span>•</span>
              <span>Lectura: 8 minutos</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>4.9/5 (127 valoraciones)</span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Valenoso se ha consolidado como uno de los barrios más cotizados y deseados de Boadilla del Monte. 
            Descubre qué hace tan especial a esta zona residencial que combina tranquilidad, servicios de calidad 
            y una ubicación privilegiada.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">¿Por qué elegir Valenoso?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En los últimos años, <strong>Valenoso</strong> ha experimentado un crecimiento extraordinario que lo ha posicionado 
              como <strong>la mejor zona para vivir en Boadilla del Monte</strong>. Este exclusivo barrio combina la tranquilidad 
              de un entorno residencial con la comodidad de tener todos los servicios al alcance de la mano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Las familias que han elegido Valenoso como su hogar destacan especialmente la calidad de vida, 
              la seguridad del entorno y la excelente relación calidad-precio de sus viviendas. No es casualidad 
              que la demanda de propiedades en esta zona haya aumentado un 40% en los últimos dos años.
            </p>
          </section>

          {/* Advantages Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Principales Ventajas de Vivir en Valenoso</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 bg-secondary/50 rounded-lg p-3">
                        {advantage.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Property Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tipos de Vivienda en Valenoso</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El mercado inmobiliario de Valenoso ofrece una amplia variedad de opciones para todos los gustos y presupuestos. 
              Desde chalets independientes con amplios jardines hasta modernos apartamentos con acabados de lujo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-boadilla-green">{property.type}</CardTitle>
                    <div className="flex items-center text-boadilla-blue font-semibold">
                      <Euro className="h-4 w-4 mr-1" />
                      {property.priceRange}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {property.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Home className="h-3 w-3 mr-2 text-boadilla-green" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Servicios y Comercios Disponibles</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Una de las grandes ventajas de <strong>vivir en Valenoso</strong> es la completísima oferta de servicios 
              que tiene a su disposición. Los residentes no necesitan desplazarse lejos para encontrar todo lo que necesitan 
              en su día a día.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-foreground">{service}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Location and Transport */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ubicación y Transporte</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Conexiones por Carretera</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-boadilla-blue" />
                    M-40: 8 minutos
                  </li>
                  <li className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-boadilla-blue" />
                    M-50: 12 minutos
                  </li>
                  <li className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-boadilla-blue" />
                    Centro de Madrid: 25 minutos
                  </li>
                  <li className="flex items-center">
                    <Car className="h-4 w-4 mr-2 text-boadilla-blue" />
                    Aeropuerto Madrid-Barajas: 35 minutos
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Transporte Público</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                    Autobús urbano línea 1 y 2
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                    Conexión con Metro Ligero Oeste
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-boadilla-green" />
                    Estación de Cercanías a 15 min
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Lo que Dicen los Residentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-boadilla-green text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                      M
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-foreground">María González</div>
                      <div className="text-sm text-muted-foreground">Residente desde 2020</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "Valenoso ha superado todas nuestras expectativas. Los niños pueden jugar tranquilos en la calle, 
                    tenemos todo cerca y la comunidad de vecinos es fantástica."
                  </p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-boadilla-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                      J
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-foreground">Javier Martín</div>
                      <div className="text-sm text-muted-foreground">Residente desde 2019</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "La inversión en Valenoso ha sido muy rentable. Además de ganar calidad de vida, 
                    nuestro chalet se ha revalorizado considerablemente en estos años."
                  </p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusión: Valenoso, Sinónimo de Calidad de Vida</h2>
            <div className="bg-gradient-to-r from-boadilla-green/10 to-boadilla-blue/10 rounded-lg p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sin lugar a dudas, <strong>Valenoso es la mejor zona para vivir en Boadilla del Monte</strong>. 
                Su combinación única de tranquilidad, servicios, conectividad y revalorización constante lo convierten 
                en una apuesta segura tanto para familias como para inversores.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si estás pensando en trasladarte a Boadilla del Monte o buscas una inversión inmobiliaria sólida, 
                Valenoso debería estar en lo alto de tu lista de prioridades.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="municipal" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Ver viviendas disponibles
                </Button>
                <Button variant="outline" size="lg">
                  <Users className="mr-2 h-5 w-5" />
                  Contactar con vecinos
                </Button>
              </div>
            </div>
          </section>
        </div>

        <Separator className="my-12" />

        {/* Article Footer */}
        <footer className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Te ha resultado útil este artículo sobre Valenoso? Compártelo con otros interesados en la zona.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">Compartir</Button>
            <Button variant="outline" size="sm">Guardar</Button>
            <Button variant="outline" size="sm">Imprimir</Button>
          </div>
        </footer>
      </article>

      <Footer />
    </div>
  );
};

export default ValensosoArticle;