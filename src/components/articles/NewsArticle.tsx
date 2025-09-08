import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Share2, MessageSquare } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { allNews } from "@/data/news";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsArticleProps {
  newsItem?: {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image?: string;
    content?: string;
  };
}

const NewsArticle = ({ newsItem }: NewsArticleProps) => {
  const { slug } = useParams();
  
  // Si no se proporciona el artículo como prop, intentar encontrarlo por slug
  const article = newsItem || allNews.find(n => 
    n.link && n.link === `/noticias/${slug}`
  );

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Boadilla del Monte`;
      
      // Actualizar meta descripción
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', article.excerpt);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="mb-6">Lo sentimos, no hemos podido encontrar el artículo que buscas.</p>
          <Link to="/noticias">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a noticias
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Contenido del artículo (esto podría venir de un campo 'content' o generar uno basado en el excerpt)
  const articleContent = article.content || `
    <p class="mb-4">${article.excerpt}</p>
    <p class="mb-4">Boadilla del Monte, ${new Date().getFullYear()} - ${article.excerpt}</p>
    <p class="mb-4">Más información sobre este tema próximamente.</p>
  `;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-boadilla-green transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/noticias" className="hover:text-boadilla-green transition-colors">Noticias</Link>
            <span>/</span>
            <span className="text-foreground line-clamp-1">{article.title}</span>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article>
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Clock className="h-4 w-4 mr-1" />
              {article.date}
            </div>
            {article.image && (
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                loading="lazy"
              />
            )}
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />

          <footer className="mt-12 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <Link to="/noticias">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a noticias
                </Button>
              </Link>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Compartir</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                  <span className="sr-only">Comentarios</span>
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;
