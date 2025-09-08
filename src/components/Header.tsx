import { Button } from "@/components/ui/button";
import { Menu, Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link to="/" className="no-underline">
                <h1 className="text-2xl font-bold text-boadilla-green hover:underline">
                  Boadilla del Monte
                </h1>
              </Link>
              <p className="text-xs text-muted-foreground">Portal Oficial</p>
              <h2 className="sr-only">Ayuntamiento de Boadilla del Monte - Página de inicio</h2>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Navegación principal de Boadilla del Monte">
            <h3 className="sr-only">Menú de navegación de Boadilla del Monte</h3>
            <Link to="/noticias" className="text-foreground hover:text-boadilla-green transition-colors">
              Noticias
            </Link>
            <a href="#eventos" className="text-foreground hover:text-boadilla-green transition-colors">
              Eventos
            </a>
            <Link to="/empresas" className="text-foreground hover:text-boadilla-green transition-colors">
              Empresas
            </Link>
            <a href="#turismo" className="text-foreground hover:text-boadilla-green transition-colors">
              Turismo
            </a>
            <a href="#servicios" className="text-foreground hover:text-boadilla-green transition-colors">
              Servicios
            </a>
            <Link to="/contacto" className="text-foreground hover:text-boadilla-green transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/area-vecinal">
              <Button variant="municipal" className="hidden sm:inline-flex">
                Área Vecinal
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
