
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ValensosoArticle from "./pages/ValensosoArticle";
import AreaVecinal from "./pages/AreaVecinal";
import Noticias from "./pages/Noticias";
import NewsArticle from "./components/articles/NewsArticle";
import Contacto from "./pages/Contacto";
import Empresas from "./pages/Empresas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mejor-zona-valenoso-boadilla" element={<ValensosoArticle />} />
          <Route path="/area-vecinal" element={<AreaVecinal />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NewsArticle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
