import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

export default function Contacto() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xjkoqqrl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-boadilla-green mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xjkoqqrl" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full"
                  placeholder="¿Sobre qué quieres contactarnos?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-boadilla-green hover:bg-boadilla-green/90">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Horario de atención</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Lunes a viernes</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lunes a jueves</span>
                <span>17:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes tarde</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados y domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
          
          {/* Botón para volver al inicio */}
          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="outline" className="border-boadilla-green text-boadilla-green hover:bg-boadilla-green/10">
                ← Volver al inicio
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
