import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { allNews, featuredNews } from "@/data/news";
import { useEffect } from "react";

const Noticias = () => {
  useEffect(() => {
    document.title = "Noticias de Boadilla del Monte | Portal Oficial";

    const desc =
      "Noticias de Boadilla del Monte: últimas novedades, anuncios y eventos municipales.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", window.location.href);
    if (!linkCanonical.parentElement) document.head.appendChild(linkCanonical);
  }, []);

  // Filter out the featured news by link instead of title to be more reliable
  const otherNews = allNews.filter((n) => n.link !== featuredNews.link);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-secondary/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-boadilla-green transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-foreground">Noticias</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Noticias de Boadilla del Monte</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Consulta todas las noticias publicadas recientemente en nuestro municipio.
          </p>
        </header>

        {/* Featured */}
        <section className="mb-12">
          <Card className="overflow-hidden shadow-card group">
            <div className="relative">
              {featuredNews.image && (
                <img
                  src={featuredNews.image}
                  alt={`Noticia destacada: ${featuredNews.title}`}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute top-4 left-4">
                <Badge className="bg-boadilla-blue text-white">{featuredNews.category}</Badge>
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
            <CardContent>
              <p className="text-muted-foreground mb-4">{featuredNews.excerpt}</p>
              {featuredNews.link && (
                <Link to={featuredNews.link}>
                  <Button variant="municipal">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </section>

        {/* All news */}
        <section aria-label="Listado de noticias" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherNews.map((news, idx) => (
            <article key={idx} className="group">
              <Card className="h-full hover:shadow-md transition-shadow flex flex-col">
                {news.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                      {news.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <h2 className="font-semibold text-foreground group-hover:text-boadilla-green transition-colors mb-1">
                    {news.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{news.excerpt}</p>
                  <div className="mt-auto">
                    {news.link ? (
                      <Link to={news.link} className="inline-block w-full">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          Leer más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full sm:w-auto" disabled>
                        Próximamente
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </section>

        <div className="mt-10">
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Noticias;
