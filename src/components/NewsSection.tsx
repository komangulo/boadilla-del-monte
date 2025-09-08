import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredNews, recentNews } from "@/data/news";

const NewsSection = () => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Urbanismo": "bg-boadilla-blue text-white",
      "Deportes": "bg-boadilla-green text-white",
      "Cultura": "bg-boadilla-gold text-black",
      "Transporte": "bg-boadilla-forest text-white",
      "Medio Ambiente": "bg-boadilla-green-light text-white"
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <section id="noticias" className="py-16 bg-gradient-to-b from-background to-secondary/30 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimas Noticias en Boadilla del Monte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantente informado de todo lo que acontece en Boadilla del Monte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {/* Featured News */}
          <div className="lg:col-span-2 w-full">
            <Card className="overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full w-full">
              <div className="relative h-64 w-full">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(featuredNews.category)}>
                    {featuredNews.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl leading-tight group-hover:text-boadilla-green transition-colors">
                  {featuredNews.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredNews.date}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {featuredNews.excerpt}
                </p>
                <div className="mt-auto">
                  <Link to={featuredNews.link} className="block">
                    <Button variant="municipal" className="w-full sm:w-auto">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent News List */}
          <div className="space-y-4 w-full">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center lg:text-left">Más Noticias en Boadilla del Monte</h3>
            
            <div className="grid gap-4">
              {recentNews.slice(0, 4).map((news, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-200 group cursor-pointer w-full">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.date}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-boadilla-green transition-colors mb-1 leading-tight line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center lg:text-left">
              <Link to="/noticias" className="inline-block w-full lg:w-auto">
                <Button variant="outline" className="w-full">
                  Ver todas las noticias
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;