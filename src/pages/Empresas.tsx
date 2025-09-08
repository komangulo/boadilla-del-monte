import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data
const mockBusinesses = [
  {
    id: 1,
    name: "Restaurante La Tagliatella",
    category: "Restaurante",
    address: "Calle de la Piruleta, 12",
    phone: "912 345 678"
  },
  {
    id: 2,
    name: "Farmacia Boadilla Centro",
    category: "Salud",
    address: "Avda. Comunidad de Madrid, 45",
    phone: "918 765 432"
  },
  {
    id: 3,
    name: "Tienda de Deportes",
    category: "Deportes",
    address: "Calle del Deporte, 23",
    phone: "915 555 123"
  }
];

export default function Empresas() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredBusinesses = mockBusinesses.filter(business => 
    business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-boadilla-green mb-4">Directorio de Empresas</h1>
          <p className="text-lg text-gray-600">
            Descubre los negocios locales de Boadilla del Monte
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar empresas..."
            className="w-full pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.name}</h3>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-boadilla-green bg-boadilla-green/10 rounded-full mb-3">
                {business.category}
              </span>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">{business.address}</p>
                <p className="text-gray-600">📞 {business.phone}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" className="border-boadilla-green text-boadilla-green hover:bg-boadilla-green/10">
              ← Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
