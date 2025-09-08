import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import ServicesDirectory from "@/components/ServicesDirectory";
import TourismSection from "@/components/TourismSection";
import LivingSection from "@/components/LivingSection";
import HistoryCultureSection from "@/components/HistoryCultureSection";
import GastronomyLeisureSection from "@/components/GastronomyLeisureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <NewsSection />
      <EventsSection />
      <ServicesDirectory />
      <TourismSection />
      <LivingSection />
      <HistoryCultureSection />
      <GastronomyLeisureSection />
      <Footer />
    </div>
  );
};

export default Index;
