export type NewsItem = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  link?: string;
  content?: string; // Contenido completo del artículo (opcional)
};

// Noticia destacada
export const featuredNews: NewsItem = {
  title: "Descubre por qué Valenoso es la mejor zona para vivir en Boadilla del Monte",
  excerpt: "Valenoso se ha convertido en el barrio más deseado de Boadilla del Monte, destacando por su excelente calidad de vida, amplias zonas verdes, servicios de primer nivel y una comunidad familiar única. Descubre por qué tantas familias eligen Valenoso como su hogar ideal.",
  category: "Zonas de Boadilla",
  date: "11/08/2025",
  image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=630&fit=crop",
  link: "/mejor-zona-valenoso-boadilla",
  content: `
    <p>Boadilla del Monte no es solo un municipio en la Comunidad de Madrid, es un estilo de vida. Un lugar donde la calidad de vida se vive y se siente en cada rincón, gracias a una combinación excepcional de servicios, actividades culturales y verdes, y una sólida infraestructura pública. Con más de 50.000 habitantes, este municipio se ha convertido en uno de los destinos más deseados para vivir en la región, ofreciendo un equilibrio perfecto entre naturaleza y modernidad.</p>
    
    <h2>Excelencia en Servicios Públicos y Educación 🏫</h2>
    <p>El compromiso de Boadilla del Monte con sus ciudadanos se refleja en la excelencia de sus servicios públicos. La localidad cuenta con una red de atención ciudadana que obtuvo un 94% de satisfacción en la última encuesta municipal, destacando por su eficiencia y trato personalizado.</p>
    
    <h3>Centros Educativos de Referencia</h3>
    <p>La oferta educativa en Boadilla es de primera categoría, con más de 20 centros que cubren todas las etapas formativas:</p>
    <ul>
      <li><strong>Educación Infantil y Primaria</strong>: Destacan centros como el CEIP Federico García Lorca y el CEIP Teresa Berganza, con programas educativos innovadores y amplias instalaciones deportivas.</li>
      <li><strong>Educación Secundaria y Bachillerato</strong>: El IES Profesor Máximo Trueba y el IES Arquitecto Ventura Rodríguez ofrecen una formación académica de excelencia, con un 92% de aprobados en selectividad en 2024.</li>
      <li><strong>Centros Internacionales</strong>: El Colegio Internacional J.H. Newman y el Colegio Virgen de Europa son referentes en educación bilingüe y formación internacional.</li>
      <li><strong>Formación Profesional</strong>: El IES Ventura Rodríguez destaca por sus ciclos formativos en informática, administración y comercio.</li>
    </ul>

    <h3>Servicios Municipales de Calidad</h3>
    <p>Boadilla ofrece una amplia gama de servicios municipales que mejoran la calidad de vida de sus vecinos:</p>
    <ul>
      <li><strong>Centro de Salud Boadilla del Monte</strong>: Con más de 30 especialidades médicas y un tiempo medio de espera de solo 48 horas para consulta con especialista.</li>
      <li><strong>Policía Local</strong>: Con un tiempo de respuesta medio de 6 minutos, uno de los más bajos de la Comunidad de Madrid.</li>
      <li><strong>Bibliotecas Municipales</strong>: La Red de Bibliotecas de Boadilla supera los 100.000 volúmenes y ofrece más de 200 actividades culturales anuales.</li>
      <li><strong>Oficina de Atención al Ciudadano</strong>: Con servicio de cita previa y gestión telemática del 85% de los trámites.</li>
    </ul>

    <h2>Un Paraíso Verde en la Comunidad de Madrid 🌳</h2>
    <p>Con más de 7 millones de metros cuadrados de zonas verdes, Boadilla del Monte es un auténtico pulmón verde en la región. El 60% de su término municipal está catalogado como espacio natural protegido, ofreciendo a sus habitantes un entorno único de bienestar y contacto con la naturaleza.</p>
    
    <h3>Parques y Zonas Verdes Emblemáticas</h3>
    <ul>
      <li><strong>Parque Regional del Curso Medio del Río Guadarrama</strong>: 10.000 hectáreas de naturaleza en estado puro, con más de 20 km de sendas señalizadas para senderismo y ciclismo.</li>
      <li><strong>Parque de la Villa</strong>: 150.000 m² de zonas ajardinadas, con lago artificial, paseos arbolados y áreas de juegos infantiles.</li>
      <li><strong>Parque de la Fresneda</strong>: 80.000 m² de bosque mediterráneo con miradores panorámicos y rutas botánicas.</li>
      <li><strong>Parque de las Laderas</strong>: Con sus 45 hectáreas, es el mayor parque urbano del municipio, con circuitos biosaludables y zonas de picnic.</li>
    </ul>

    <h3>Actividades al Aire Libre</h3>
    <p>Boadilla ofrece innumerables posibilidades para disfrutar del aire libre:</p>
    <ul>
      <li><strong>Red de Senderos</strong>: Más de 50 km de rutas señalizadas para todos los niveles, que conectan los principales espacios naturales del municipio.</li>
      <li><strong>Circuito de Ciclismo</strong>: Con 8 km de recorrido y diferentes niveles de dificultad en el Parque de las Laderas.</li>
      <li><strong>Áreas Caninas</strong>: 5 parques para perros distribuidos estratégicamente por el municipio.</li>
      <li><strong>Huertos Urbanos</strong>: Más de 200 parcelas municipales para cultivo ecológico.</li>
    </ul>

    <h2>Oferta Cultural y de Ocio sin Igual 🎭</h2>
    <p>La vida cultural en Boadilla es rica y variada, con una programación estable durante todo el año que satisface todos los gustos y edades.</p>
    
    <h3>Equipamientos Culturales de Referencia</h3>
    <ul>
      <li><strong>Palacio del Infante Don Luis</strong>: Joya del neoclasicismo español que alberga exposiciones temporales, conciertos y eventos culturales.</li>
      <li><strong>Teatro Municipal Princesa Doña Leonor</strong>: Con más de 200 representaciones anuales de teatro, danza y música.</li>
      <li><strong>Centro de Formación Integral</strong>: Ofrece más de 100 talleres culturales y formativos cada temporada.</li>
      <li><strong>Auditorio Municipal</strong>: Con capacidad para 1.200 personas, acoge los principales eventos culturales del municipio.</li>
    </ul>

    <h3>Eventos y Festivales</h3>
    <p>El calendario de eventos de Boadilla es uno de los más completos de la región, destacando especialmente dos citas imprescindibles que atraen a visitantes de toda la Comunidad de Madrid:</p>
    
    <h4>🎬 Cine de Verano de Boadilla</h4>
    <p>Durante los meses de julio y agosto, Boadilla se convierte en un auténtico cine al aire libre. El Festival de Cine de Verano de Boadilla ofrece una cuidada selección de películas para todos los públicos en diferentes localizaciones emblemáticas del municipio:</p>
    <ul>
      <li><strong>Ubicaciones únicas</strong>: Proyecciones en el Patio de Armas del Palacio del Infante Don Luis, el Parque de la Villa y el Auditorio Municipal.</li>
      <li><strong>Programación variada</strong>: Desde estrenos de cine español hasta clásicos del cine internacional, pasando por ciclos temáticos y cine familiar.</li>
      <li><strong>Actividades complementarias</strong>: Encuentros con directores, talleres de cine para niños y rutas cinematográficas por Boadilla.</li>
      <li><strong>Entorno inigualable</strong>: Disfruta del mejor cine bajo las estrellas en un ambiente familiar y acogedor, con servicio de restauración y zonas de pic-nic.</li>
    </ul>

    <h4>🏰 Mercado Medieval de Boadilla</h4>
    <p>Un viaje en el tiempo que cada primavera transforma el centro histórico de Boadilla en un auténtico mercado medieval:</p>
    <ul>
      <li><strong>Más de 150 puestos</strong> de artesanos que ofrecen productos tradicionales, gastronomía artesanal y objetos de decoración.</li>
      <li><strong>Espectáculos callejeros</strong>: Malabaristas, músicos, cuentacuentos y exhibiciones de cetrería que recrean el ambiente de la Edad Media.</li>
      <li><strong>Talleres didácticos</strong>: Para todas las edades, incluyendo tiro con arco, escritura gótica, acuñación de monedas y elaboración de velas artesanales.</li>
      <li><strong>Gastronomía histórica</strong>: Degustación de platos tradicionales preparados según recetas medievales, acompañados de cerveza artesanal y vinos de la región.</li>
      <li><strong>Recreaciones históricas</strong>: Representaciones de torneos a caballo, justas medievales y escenas de la vida cotidiana de la época.</li>
    </ul>

    <p>Además de estos eventos estelares, Boadilla ofrece una agenda cultural que incluye:</p>
    <ul>
      <li><strong>Fiestas Patronales de San Sebastián</strong>: 10 días de celebraciones en enero con conciertos, verbenas y actividades para todos los públicos.</li>
      <li><strong>Veladas del Palacio</strong>: Ciclo de conciertos de música clásica en el entorno mágico del Palacio del Infante Don Luis.</li>
      <li><strong>Festival de Teatro Aficionado</strong>: Donde compañías locales muestran su talento en diferentes espacios culturales del municipio.</li>
      <li><strong>Feria del Libro</strong>: Con presentaciones de autores, firmas de ejemplares y actividades de fomento de la lectura.</li>
    </ul>

    <h2>Deporte y Vida Saludable 🏃‍♂️</h2>
    <p>Boadilla es un referente en promoción del deporte y hábitos de vida saludables, con unas instalaciones deportivas de primer nivel.</p>
    
    <h3>Complejos Deportivos</h3>
    <ul>
      <li><strong>Polideportivo Municipal</strong>: Con piscina climatizada, pistas de pádel, tenis y pabellón cubierto.</li>
      <li><strong>Ciudad Deportiva Valdecabañas</strong>: 50.000 m² dedicados al deporte con campos de fútbol, pistas de atletismo y rocódromo.</li>
      <li><strong>Club de Golf RACE</strong>: Campo de 18 hoyos diseñado por el prestigioso arquitecto Javier Arana.</li>
      <li><strong>Piscina de Verano</strong>: Con más de 2.000 m² de lámina de agua y zonas de césped para el descanso.</li>
    </ul>

    <h2>Movilidad y Conectividad 🚆</h2>
    <p>Boadilla ofrece excelentes conexiones con Madrid y el resto de la región, facilitando la movilidad de sus habitantes.</p>
    
    <h3>Opciones de Transporte</h3>
    <ul>
      <li><strong>Metro Ligero</strong>: Línea ML3 con 8 paradas en el municipio y conexión directa con Madrid en 30 minutos.</li>
      <li><strong>Autobuses Urbanos e Interurbanos</strong>: 12 líneas que conectan todos los barrios y municipios vecinos.</li>
      <li><strong>Red de Cercanías</strong>: Estación de Cercanías en Pozuelo a 5 minutos en coche.</li>
      <li><strong>Accesos por Carretera</strong>: Conexión directa con la M-40, M-50, A-5 y A-6.</li>
    </ul>

    <h2>Comercio y Hostelería de Calidad 🛍️</h2>
    <p>La oferta comercial y de restauración de Boadilla es amplia y variada, destacando por su calidad y variedad.</p>
    
    <h3>Zonas Comerciales</h3>
    <ul>
      <li><strong>Centro Comicial Boadilla</strong>: Más de 100 tiendas de primeras marcas en 35.000 m².</li>
      <li><strong>Mercado Municipal</strong>: Productos frescos y de proximidad en un edificio histórico recientemente renovado.</li>
      <li><strong>Zona Centro</strong>: Comercio tradicional en un entorno peatonalizado y acogedor.</li>
    </ul>

    <h2>Un Futuro Prometedor ✨</h2>
    <p>Boadilla del Monte sigue creciendo con proyectos que refuerzan su posición como uno de los mejores lugares para vivir en la Comunidad de Madrid:</p>
    <ul>
      <li>Ampliación de la red de carriles bici que superará los 100 km en 2026.</li>
      <li>Nuevo Hospital de Día especializado en medicina preventiva.</li>
      <li>Proyecto de Ciudad Deportiva con instalaciones de alto rendimiento.</li>
      <li>Plan de Sostenibilidad 2025 para reducir la huella de carbono del municipio.</li>
    </ul>
    
    <p>Con una población que crece un 3% anual y una tasa de desempleo del 7,8% (por debajo de la media nacional), Boadilla del Monte se consolida como un municipio dinámico, con una calidad de vida excepcional y un futuro prometedor. No es de extrañar que el 97% de sus vecinos se declaren satisfechos con su ciudad, según la última encuesta de satisfacción municipal.</p>

    <p>Si estás buscando el lugar perfecto para vivir en Boadilla del Monte, Valenoso debería estar en lo alto de tu lista de prioridades. Su combinación de naturaleza, servicios y accesibilidad lo convierten en un lugar único para establecerse.</p>
  `
};

// Lista de noticias recientes
export const recentNews: NewsItem[] = [
  {
    title: "Boadilla del Monte: Un Elogio a la Excelente Calidad de Vida en la Comunidad de Madrid",
    excerpt: "Descubre por qué Boadilla del Monte es sinónimo de excelente calidad de vida, con sus parques, servicios públicos, oferta educativa y cultural de primer nivel, y un entorno natural privilegiado que la convierten en uno de los mejores lugares para vivir en Madrid.",
    category: "Calidad de Vida",
    date: "11/08/2025",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=400&fit=crop",
    link: "/boadilla-calidad-de-vida",
    content: `
    <p>Boadilla del Monte no es solo un municipio en la Comunidad de Madrid, es un estilo de vida. Un lugar donde la calidad de vida se vive y se siente en cada rincón, gracias a una combinación excepcional de servicios, actividades culturales y verdes, y una sólida infraestructura pública. Con más de 50.000 habitantes, este municipio se ha convertido en uno de los destinos más deseados para vivir en la región, ofreciendo un equilibrio perfecto entre naturaleza y modernidad.</p>
    
    <h2>Excelencia en Servicios Públicos y Educación 🏫</h2>
    <p>El compromiso de Boadilla del Monte con sus ciudadanos se refleja en la excelencia de sus servicios públicos. La localidad cuenta con una red de atención ciudadana que obtuvo un 94% de satisfacción en la última encuesta municipal, destacando por su eficiencia y trato personalizado.</p>
    
    <h3>Centros Educativos de Referencia</h3>
    <p>La oferta educativa en Boadilla es de primera categoría, con más de 20 centros que cubren todas las etapas formativas:</p>
    <ul>
      <li><strong>Educación Infantil y Primaria</strong>: Destacan centros como el CEIP Federico García Lorca y el CEIP Teresa Berganza, con programas educativos innovadores y amplias instalaciones deportivas.</li>
      <li><strong>Educación Secundaria y Bachillerato</strong>: El IES Profesor Máximo Trueba y el IES Arquitecto Ventura Rodríguez ofrecen una formación académica de excelencia, con un 92% de aprobados en selectividad en 2024.</li>
      <li><strong>Centros Internacionales</strong>: El Colegio Internacional J.H. Newman y el Colegio Virgen de Europa son referentes en educación bilingüe y formación internacional.</li>
      <li><strong>Formación Profesional</strong>: El IES Ventura Rodríguez destaca por sus ciclos formativos en informática, administración y comercio.</li>
    </ul>

    <h3>Servicios Municipales de Calidad</h3>
    <p>Boadilla ofrece una amplia gama de servicios municipales que mejoran la calidad de vida de sus vecinos:</p>
    <ul>
      <li><strong>Centro de Salud Boadilla del Monte</strong>: Con más de 30 especialidades médicas y un tiempo medio de espera de solo 48 horas para consulta con especialista.</li>
      <li><strong>Policía Local</strong>: Con un tiempo de respuesta medio de 6 minutos, uno de los más bajos de la Comunidad de Madrid.</li>
      <li><strong>Bibliotecas Municipales</strong>: La Red de Bibliotecas de Boadilla supera los 100.000 volúmenes y ofrece más de 200 actividades culturales anuales.</li>
      <li><strong>Oficina de Atención al Ciudadano</strong>: Con servicio de cita previa y gestión telemática del 85% de los trámites.</li>
    </ul>

    <h2>Un Paraíso Verde en la Comunidad de Madrid 🌳</h2>
    <p>Con más de 7 millones de metros cuadrados de zonas verdes, Boadilla del Monte es un auténtico pulmón verde en la región. El 60% de su término municipal está catalogado como espacio natural protegido, ofreciendo a sus habitantes un entorno único de bienestar y contacto con la naturaleza.</p>
    
    <h3>Parques y Zonas Verdes Emblemáticas</h3>
    <ul>
      <li><strong>Parque Regional del Curso Medio del Río Guadarrama</strong>: 10.000 hectáreas de naturaleza en estado puro, con más de 20 km de sendas señalizadas para senderismo y ciclismo.</li>
      <li><strong>Parque de la Villa</strong>: 150.000 m² de zonas ajardinadas, con lago artificial, paseos arbolados y áreas de juegos infantiles.</li>
      <li><strong>Parque de la Fresneda</strong>: 80.000 m² de bosque mediterráneo con miradores panorámicos y rutas botánicas.</li>
      <li><strong>Monte de Boadilla</strong>: Más de 1.200 hectáreas de encinar mediterráneo perfectas para el senderismo y el avistamiento de aves.</li>
    </ul>

    <h3>Compromiso con la Sostenibilidad</h3>
    <p>Boadilla es un referente en políticas medioambientales, como demuestran estos datos:</p>
    <ul>
      <li>Más de 50.000 árboles en calles y parques, con un plan de reforestación que ha plantado 5.000 ejemplares en los últimos 3 años.</li>
      <li>Sistema de recogida neumática de residuos que cubre el 75% del municipio, con una tasa de reciclaje del 68%.</li>
      <li>Red de 42 km de carril bici que conecta todos los barrios y puntos de interés del municipio.</li>
      <li>Certificación EMAS e ISO 14001 para la gestión medioambiental del Ayuntamiento.</li>
    </ul>

    <h2>Oferta Cultural y de Ocio sin Igual 🎭</h2>
    <p>La vida cultural en Boadilla es rica y variada, con una programación estable durante todo el año que incluye teatro, música, exposiciones y actividades para todos los públicos.</p>
    
    <h3>Instalaciones Culturales de Referencia</h3>
    <p>Boadilla cuenta con espacios culturales de primer nivel que la convierten en un referente en la Comunidad de Madrid:</p>
    <ul>
      <li><strong>Palacio del Infante Don Luis</strong>: Joya del neoclasicismo español que alberga exposiciones temporales, conciertos y eventos culturales.</li>
      <li><strong>Teatro Municipal Princesa Doña Leonor</strong>: Con más de 200 representaciones anuales de teatro, danza y música.</li>
      <li><strong>Centro de Formación Integral</strong>: Ofrece más de 100 talleres culturales y formativos cada temporada.</li>
      <li><strong>Auditorio Municipal</strong>: Con capacidad para 1.200 personas, acoge los principales eventos culturales del municipio.</li>
    </ul>

    <h3>Eventos y Festivales</h3>
    <p>El calendario de eventos de Boadilla es uno de los más completos de la región, destacando especialmente dos citas imprescindibles que atraen a visitantes de toda la Comunidad de Madrid:</p>
    
    <h4>🎬 Cine de Verano de Boadilla</h4>
    <p>Durante los meses de julio y agosto, Boadilla se convierte en un auténtico cine al aire libre. El Festival de Cine de Verano de Boadilla ofrece una cuidada selección de películas para todos los públicos en diferentes localizaciones emblemáticas del municipio:</p>
    <ul>
      <li><strong>Ubicaciones únicas</strong>: Proyecciones en el Patio de Armas del Palacio del Infante Don Luis, el Parque de la Villa y el Auditorio Municipal.</li>
      <li><strong>Programación variada</strong>: Desde estrenos de cine español hasta clásicos del cine internacional, pasando por ciclos temáticos y cine familiar.</li>
      <li><strong>Actividades complementarias</strong>: Encuentros con directores, talleres de cine para niños y rutas cinematográficas por Boadilla.</li>
      <li><strong>Entorno inigualable</strong>: Disfruta del mejor cine bajo las estrellas en un ambiente familiar y acogedor, con servicio de restauración y zonas de pic-nic.</li>
    </ul>

    <h4>🏰 Mercado Medieval de Boadilla</h4>
    <p>Un viaje en el tiempo que cada primavera transforma el centro histórico de Boadilla en un auténtico mercado medieval:</p>
    <ul>
      <li><strong>Más de 150 puestos</strong> de artesanos que ofrecen productos tradicionales, gastronomía artesanal y objetos de decoración.</li>
      <li><strong>Espectáculos callejeros</strong>: Malabaristas, músicos, cuentacuentos y exhibiciones de cetrería que recrean el ambiente de la Edad Media.</li>
      <li><strong>Talleres didácticos</strong>: Para todas las edades, incluyendo tiro con arco, escritura gótica, acuñación de monedas y elaboración de velas artesanales.</li>
      <li><strong>Gastronomía histórica</strong>: Degustación de platos tradicionales preparados según recetas medievales, acompañados de cerveza artesanal y vinos de la región.</li>
      <li><strong>Recreaciones históricas</strong>: Representaciones de torneos a caballo, justas medievales y escenas de la vida cotidiana de la época.</li>
    </ul>

    <p>Además de estos eventos estelares, Boadilla ofrece una agenda cultural que incluye:</p>
    <ul>
      <li><strong>Fiestas Patronales de San Sebastián</strong>: 10 días de celebraciones en enero con conciertos, verbenas y actividades para todos los públicos.</li>
      <li><strong>Veladas del Palacio</strong>: Ciclo de conciertos de música clásica en el entorno mágico del Palacio del Infante Don Luis.</li>
      <li><strong>Festival de Teatro Aficionado</strong>: Donde compañías locales muestran su talento en diferentes espacios culturales del municipio.</li>
      <li><strong>Feria del Libro</strong>: Con presentaciones de autores, firmas de ejemplares y actividades de fomento de la lectura.</li>
    </ul>

    <h2>Deporte y Vida Saludable 🏃‍♂️</h2>
    <p>Boadilla es un referente en instalaciones deportivas y promoción de hábitos saludables, con más de 50 instalaciones deportivas repartidas por todo el municipio.</p>
    
    <h3>Instalaciones Deportivas de Primera</h3>
    <ul>
      <li><strong>Polideportivo Municipal</strong>: Con piscina climatizada cubierta, pistas de pádel, tenis y pabellón polideportivo.</li>
      <li><strong>Ciudad Deportiva Valdelasfuentes</strong>: 100.000 m² con campos de fútbol, pistas de atletismo y piscina de verano.</li>
      <li><strong>Red de Gimnasios al Aire Libre</strong>: 15 zonas de ejercicio repartidas por parques y zonas verdes.</li>
      <li><strong>Rutas de Running y Senderismo</strong>: Más de 30 km de rutas señalizadas con diferentes niveles de dificultad.</li>
    </ul>

    <h3>Vida Saludable</h3>
    <p>Boadilla promueve activamente un estilo de vida saludable a través de diversos programas:</p>
    <ul>
      <li><strong>Boadilla Activa</strong>: Programa municipal con más de 100 actividades deportivas semanales para todas las edades.</li>
      <li><strong>Mercado de Productores Locales</strong>: Cada sábado, ofreciendo productos frescos y de temporada directamente del agricultor.</li>
      <li><strong>Escuelas Deportivas Municipales</strong>: Más de 30 disciplinas deportivas para niños y jóvenes.</li>
      <li><strong>Red de Bicicletas Públicas</strong>: 25 estaciones con 250 bicicletas para uso compartido.</li>
    </ul>

    <h2>Comercio y Hostelería de Calidad 🛍️</h2>
    <p>El tejido comercial de Boadilla destaca por su variedad y calidad, con más de 1.200 establecimientos que cubren todas las necesidades de los vecinos.</p>
    
    <h3>Zonas Comerciales</h3>
    <ul>
      <li><strong>Centro Comercial Boadilla del Monte</strong>: Más de 100 tiendas, restaurantes y cines en un entorno moderno y accesible.</li>
      <li><strong>Zona Centro</strong>: Comercio tradicional y de proximidad en un entorno peatonal y acogedor.</li>
      <li><strong>Mercado de Abastos</strong>: Productos frescos y de calidad en un edificio histórico recientemente reformado.</li>
      <li><strong>Zona de Oporto-Piñeiro</strong>: Área en expansión con nuevas aperturas y establecimientos de diseño.</li>
    </ul>

    <h3>Gastronomía para Todos los Gustos</h3>
    <p>La oferta gastronómica de Boadilla es tan variada como sus vecinos, con más de 150 establecimientos que van desde la cocina tradicional hasta las últimas tendencias:</p>
    <ul>
      <li><strong>Restaurantes con Estrella Michelin</strong>: Como el prestigioso Coque, con dos estrellas Michelin.</li>
      <li><strong>Cocina Tradicional Madrileña</strong>: Donde degustar los platos más típicos de la región.</li>
      <li><strong>Terrazas con Encanto</strong>: Perfectas para disfrutar de las suaves temperaturas de la sierra.</li>
      <li><strong>Rutas del Vino y la Tapa</strong>: Que recorren los establecimientos más emblemáticos del municipio.</li>
    </ul>

    <h2>Movilidad y Transporte 🚆</h2>
    <p>Boadilla ofrece excelentes conexiones con Madrid y el resto de la Comunidad, facilitando los desplazamientos de sus vecinos.</p>
    
    <h3>Conexiones de Transporte</h3>
    <ul>
      <li><strong>Metro Ligero</strong>: Línea ML3 con 8 paradas en el municipio y conexión directa con Madrid en 30 minutos.</li>
      <li><strong>Autobuses Urbanos e Interurbanos</strong>: 12 líneas que conectan todos los barrios y municipios vecinos.</li>
      <li><strong>Red de Cercanías</strong>: Estación de Cercanías en Pozuelo a 5 minutos en coche.</li>
      <li><strong>Accesos por Carretera</strong>: Conexión directa con la M-40, M-50, A-5 y A-6.</li>
    </ul>

    <h3>Movilidad Sostenible</h3>
    <p>Boadilla apuesta por una movilidad más sostenible y respetuosa con el medio ambiente:</p>
    <ul>
      <li><strong>Red de Carriles Bici</strong>: 42 km de carriles bici que conectan todos los puntos de interés.</li>
      <li><strong>Puntos de Recarga para Vehículos Eléctricos</strong>: 25 puntos de recarga rápida distribuidos por el municipio.</li>
      <li><strong>Zonas de Bajas Emisiones</strong>: Planes para implementar áreas de tráfico restringido en el centro.</li>
      <li><strong>Plan de Movilidad Urbana Sostenible</strong>: Con medidas para reducir el tráfico y fomentar el transporte público.</li>
    </ul>

    <h2>Proyectos de Futuro 🚀</h2>
    <p>Boadilla sigue creciendo y mejorando, con ambiciosos proyectos que consolidarán su posición como uno de los mejores lugares para vivir en la Comunidad de Madrid.</p>
    
    <h3>Nuevas Infraestructuras</h3>
    <ul>
      <li><strong>Ampliación del Hospital Universitario Puerta de Hierro</strong>: Con nuevas especialidades y mayor capacidad asistencial.</li>
      <li><strong>Nuevo Centro de Mayores</strong>: Con instalaciones adaptadas y programas de envejecimiento activo.</li>
      <li><strong>Remodelación Integral del Casco Histórico</strong>: Recuperando el patrimonio y mejorando la accesibilidad.</li>
      <li><strong>Nuevas Zonas Verdes</strong>: Creación de 5 nuevos parques urbanos en los próximos 3 años.</li>
    </ul>

    <h3>Innovación y Sostenibilidad</h3>
    <p>Boadilla apuesta por la innovación y la sostenibilidad como pilares de su desarrollo futuro:</p>
    <ul>
      <li><strong>Smart City</strong>: Implantación de soluciones tecnológicas para una gestión más eficiente de los recursos.</li>
      <li><strong>Energías Renovables</strong>: Ampliación de la red de paneles solares en edificios municipales.</li>
      <li><strong>Vivienda Accesible</strong>: Planes de promoción de vivienda protegida para jóvenes y familias.</li>
      <li><strong>Economía Circular</strong>: Fomento del comercio de proximidad y el consumo responsable.</li>
    </ul>

    <h2>Comunidad y Participación Ciudadana 👥</h2>
    <p>Uno de los mayores activos de Boadilla es su tejido social, con más de 300 asociaciones que trabajan en todos los ámbitos de la vida comunitaria.</p>
    
    <h3>Asociacionismo y Voluntariado</h3>
    <ul>
      <li><strong>Asociaciones Vecinales</strong>: Que trabajan por la mejora de los barrios y la convivencia.</li>
      <li><strong>Colectivos Culturales</strong>: Que organizan actividades y eventos durante todo el año.</li>
      <li><strong>Asociaciones Deportivas</strong>: Más de 50 clubes que fomentan el deporte base y de competición.</li>
      <li><strong>Voluntariado Social</strong>: Programas de ayuda a colectivos vulnerables y personas en riesgo de exclusión.</li>
    </ul>

    <h3>Participación Ciudadana</h3>
    <p>Boadilla fomenta la participación activa de sus vecinos en la toma de decisiones:</p>
    <ul>
      <li><strong>Presupuestos Participativos</strong>: Los vecinos deciden en qué invertir parte del presupuesto municipal.</li>
      <li><strong>Consejos Sectoriales</strong>: De educación, cultura, deporte y medio ambiente, entre otros.</li>
      <li><strong>Plataforma de Participación Digital</strong>: Para realizar propuestas y consultas de forma telemática.</li>
      <li><strong>Asambleas Vecinales</strong>: Donde los ciudadanos pueden plantear sus inquietudes y propuestas.</li>
    </ul>

    <h2>Conclusión: Boadilla, un Lugar para Vivir Mejor 🌟</h2>
    <p>Boadilla del Monte es mucho más que un municipio en la periferia de Madrid. Es un lugar donde la calidad de vida se palpa en cada rincón, donde la naturaleza y la modernidad conviven en perfecta armonía, y donde los servicios públicos, la oferta cultural y el tejido social conforman un entorno único para vivir, trabajar y disfrutar.</p>
    
    <p>Si estás buscando el lugar perfecto para establecerte en la Comunidad de Madrid, Boadilla del Monte debería estar en lo alto de tu lista. Su combinación de servicios, infraestructuras, entorno natural y calidad de vida la convierten en una de las mejores opciones para quienes buscan lo mejor de la ciudad sin renunciar a la tranquilidad y el bienestar.</p>
    
    <p>Ven a descubrir Boadilla del Monte y comprueba por ti mismo por qué miles de personas han elegido llamar hogar a este rincón privilegiado de la Comunidad de Madrid.</p>
    `
  },
  {
    title: "Abierto el plazo para el II Concurso de solistas y grupos musicales",
    excerpt: "Los ganadores actuarán en las próximas fiestas patronales de octubre. Plazo de inscripción abierto hasta el 7 de septiembre.",
    category: "Cultura",
    date: "28/07/2025",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop",
    link: "/noticias/concurso-musical",
    content: `
      <p>El Ayuntamiento de Boadilla del Monte ha abierto el plazo de inscripción para la segunda edición del Concurso de Solistas y Grupos Musicales, una iniciativa que busca promocionar el talento musical local y ofrecer una plataforma de difusión a los artistas emergentes.</p>
      
      <h2>Bases del concurso</h2>
      <p>El concurso está abierto a solistas y grupos de cualquier estilo musical, con las siguientes categorías:</p>
      <ul>
        <li>Solistas (hasta 25 años)</li>
        <li>Grupos (sin límite de edad)</li>
        <li>Canción original (premio especial)</li>
      </ul>

      <h2>Premios</h2>
      <p>Los ganadores tendrán la oportunidad de actuar en las próximas Fiestas Patronales de octubre y recibirán los siguientes premios:</p>
      <ul>
        <li>1er premio: 1.200€ y actuación en las fiestas</li>
        <li>2º premio: 800€ y grabación profesional</li>
        <li>3er premio: 500€ y sesión de fotos profesional</li>
      </ul>

      <p>El jurado estará compuesto por profesionales de la música y representantes del Ayuntamiento. Las inscripciones pueden realizarse a través de la web municipal hasta el 7 de septiembre.</p>
    `
  },
  {
    title: "Ayudas para clubes deportivos: plazo abierto hasta el 13 de agosto",
    excerpt: "Convocatoria de ayudas 2025 para clubes deportivos que trabajan en Boadilla. Presentación de solicitudes hasta el 13 de agosto.",
    category: "Deportes",
    date: "28/07/2025",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&h=400&fit=crop",
    link: "/noticias/ayudas-deportivas",
    content: `
      <p>El Ayuntamiento de Boadilla del Monte ha abierto el plazo para la convocatoria de ayudas a clubes deportivos para el año 2025, con un presupuesto total de 180.000 euros destinados a apoyar la actividad deportiva en el municipio.</p>
      
      <h2>Requisitos de las ayudas</h2>
      <p>Podrán optar a estas subvenciones los clubes deportivos que cumplan con los siguientes requisitos:</p>
      <ul>
        <li>Estar inscritos en el Registro de Entidades Deportivas de la Comunidad de Madrid</li>
        <li>Desarrollar su actividad principal en instalaciones del municipio</li>
        <li>Contar con un mínimo de 50 deportistas federados</li>
        <li>Presentar un plan de actividades para la temporada 2025-2026</li>
      </ul>

      <h2>Cuantía y distribución</h2>
      <p>Las ayudas se distribuirán de la siguiente forma:</p>
      <ul>
        <li>50% en función del número de licencias federadas</li>
        <li>30% por participación en competiciones oficiales</li>
        <li>20% por proyectos de promoción del deporte base</li>
      </ul>

      <p>El plazo de presentación de solicitudes finaliza el próximo 13 de agosto a las 14:00 horas. Toda la documentación deberá presentarse a través de la Sede Electrónica del Ayuntamiento.</p>
    `
  },
  {
    title: "Reforma integral de la avenida de Monte Segovia",
    excerpt: "Obras de mejora en el firme de la calzada para reforzar la seguridad vial y accesibilidad. Inversión de 4,2 millones de euros.",
    category: "Urbanismo",
    date: "24/07/2025",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=400&fit=crop",
    link: "/noticias/reforma-monte-segovia",
    content: `
      <p>El Ayuntamiento de Boadilla del Monte ha iniciado las obras de reforma integral de la avenida de Monte Segovia, una de las principales vías de acceso al municipio, con una inversión de 4,2 millones de euros.</p>
      
      <h2>Mejoras previstas</h2>
      <p>La actuación incluirá las siguientes mejoras:</p>
      <ul>
        <li>Renovación completa del firme de la calzada</li>
        <li>Ampliación de aceras para garantizar la accesibilidad universal</li>
        <li>Nuevo sistema de drenaje para evitar inundaciones</li>
        <li>Renovación del alumbrado público con tecnología LED</li>
        <li>Instalación de nuevos bancos y zonas de descanso</li>
      </ul>

      <h2>Fases de la obra</h2>
      <p>Los trabajos se desarrollarán en tres fases para minimizar las molestias a los vecinos:</p>
      <ol>
        <li>Renovación de infraestructuras subterráneas (agua, gas, electricidad)</li>
        <li>Reforma de la calzada y aceras</li>
        <li>Urbanización y ajardinamiento de las zonas peatonales</li>
      </ol>

      <p>El plazo de ejecución está estimado en 10 meses, durante los cuales se habilitarán desvíos alternativos para el tráfico rodado. El Ayuntamiento ha habilitado un teléfono de atención al ciudadano (900 100 000) para atender consultas sobre las obras.</p>
    `
  },
  {
    title: "Metro Ligero Oeste cumple 18 años de servicio en Boadilla",
    excerpt: "Casi 52 millones de viajeros desde su inauguración en 2007, con un índice de puntualidad del 99,9% y una media de 90.000 usuarios semanales.",
    category: "Transporte",
    date: "27/07/2025",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
    link: "/noticias/metro-ligero-aniversario",
    content: `
      <p>El Metro Ligero Oeste (MLO) celebra este mes de julio su 18º aniversario transportando a los vecinos de Boadilla del Monte, con un balance que supera los 52 millones de viajeros desde su puesta en marcha en 2007.</p>
      
      <h2>Datos destacados</h2>
      <p>El servicio ha mantenido unos estándares de calidad excepcionales durante estos años:</p>
      <ul>
        <li>99,9% de puntualidad en los últimos 5 años</li>
        <li>90.000 viajeros semanales de media</li>
        <li>13,5 km de vía que conectan Boadilla con Madrid</li>
        <li>14 estaciones, 4 de ellas con aparcamiento disuasorio</li>
      </ul>

      <h2>Mejoras recientes</h2>
      <p>Con motivo de este aniversario, se han implementado varias mejoras en el servicio:</p>
      <ul>
        <li>Renovación de la flota con trenes más accesibles</li>
        <li>Nuevo sistema de información al viajero en tiempo real</li>
        <li>Ampliación del horario nocturno los fines de semana</li>
        <li>Integración completa con el sistema de transporte público de Madrid</li>
      </ul>

      <p>El alcalde de Boadilla, Javier Úbeda, ha destacado que "el Metro Ligero se ha convertido en un pilar fundamental para la movilidad de nuestros vecinos, ofreciendo un servicio rápido, cómodo y respetuoso con el medio ambiente".</p>
    `
  },
  {
    title: "40 proyectos de mejora en infraestructuras para 2025",
    excerpt: "Inversión de 28 millones de euros en mejoras de infraestructuras y servicios en Boadilla durante el presente año.",
    category: "Urbanismo",
    date: "25/07/2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
    link: "/noticias/proyectos-mejora-2025",
    content: `
      <p>El Ayuntamiento de Boadilla del Monte ha presentado su Plan de Inversiones 2025, que contempla 40 proyectos de mejora de infraestructuras y servicios con una inversión total de 28 millones de euros, la mayor de la última década.</p>
      
      <h2>Principales áreas de inversión</h2>
      <p>Los proyectos se agrupan en cinco ejes estratégicos:</p>
      <ul>
        <li>Movilidad y accesibilidad (35% del presupuesto)</li>
        <li>Espacios públicos y zonas verdes (25% del presupuesto)</li>
        <li>Equipamientos deportivos y culturales (20% del presupuesto)</li>
        <li>Modernización de servicios públicos (15% del presupuesto)</li>
        <li>Sostenibilidad y eficiencia energética (5% del presupuesto)</li>
      </ul>

      <h2>Proyectos destacados</h2>
      <p>Entre las actuaciones más relevantes se encuentran:</p>
      <ul>
        <li>Reforma integral del Pabellón Príncipe Don Felipe</li>
        <li>Nueva estación depuradora de aguas residuales</li>
        <li>Renovación del alumbrado público con tecnología LED</li>
        <li>Ampliación de la red de carriles bici</li>
        <li>Rehabilitación de fachadas en el casco histórico</li>
      </ul>

      <p>El alcalde ha asegurado que "estas inversiones mejorarán significativamente la calidad de vida de todos los boadillenses y situarán a nuestro municipio a la vanguardia de la Comunidad de Madrid".</p>
    `
  },
  {
    title: "La Guerra Civil en Boadilla del Monte: crónica histórica de un frente olvidado",
    excerpt: "Un recorrido detallado por el impacto del conflicto en Boadilla, desde los combates de 1936 hasta la recuperación de la memoria histórica en el siglo XXI.",
    category: "Historia",
    date: "20/07/2025",
    image: "https://images.unsplash.com/photo-1562870539-0cc43d5f2513?w=1200&h=630&fit=crop",
    link: "/noticias/guerra-civil-boadilla",
    content: `
      <p>Boadilla del Monte ocupó un lugar estratégico durante la Batalla de Madrid en la Guerra Civil Española (1936-1939), convirtiéndose en testigo y víctima de algunos de los episodios más cruentos del conflicto. Este artículo recorre la huella imborrable que dejó la guerra en el municipio, desde los combates de 1936 hasta los esfuerzos actuales por preservar y dar a conocer este legado histórico.</p>
      
      <h2>El frente de Boadilla: noviembre-diciembre de 1936</h2>
      <p>La Batalla de Boadilla, desarrollada entre el 13 y el 23 de diciembre de 1936, fue uno de los episodios más sangrientos de la defensa de Madrid. Las tropas del general Varela, al mando del ejército sublevado, intentaron rodear la capital por el noroeste, encontrando una feroz resistencia republicana en las colinas de Boadilla.</p>
      
      <p>El pueblo cambió de manos en varias ocasiones durante intensos combates que dejaron cientos de bajas en ambos bandos. El frente se estabilizó finalmente a las afueras del casco urbano, donde permaneció prácticamente inalterado hasta el final de la guerra.</p>
      
      <h2>Patrimonio bélico: testigos de piedra y hormigón</h2>
      <p>Boadilla conserva uno de los conjuntos más completos de arquitectura militar de la Guerra Civil en la Comunidad de Madrid. Estos restos, hoy protegidos como Bien de Interés Patrimonial, incluyen:</p>
      
      <h3>1. La posición de "El Castillo"</h3>
      <p>Ubicada en el cerro más alto del municipio, esta posición artillada republicana controlaba el acceso noroeste a Madrid. Se conservan:</p>
      <ul>
        <li>Búnkeres de hormigón para ametralladoras y piezas anticarro</li>
        <li>Puestos de mando y observatorio</li>
        <li>Trincheras de comunicación entre posiciones</li>
        <li>Refugios antiaéreos para la tropa</li>
      </ul>

      <h3>2. El frente del Arroyo de la Fresneda</h3>
      <p>Esta línea defensiva natural fue fortificada con:</p>
      <ul>
        <li>Nidos de ametralladora camuflados en la roca</li>
        <li>Trincheras excavadas en la roca viva</li>
        <li>Puestos avanzados de tiradores</li>
        <li>Posiciones de mortero</li>
      </ul>

      <h3>3. Huellas en el casco urbano</h3>
      <p>El patrimonio histórico de Boadilla también muestra las cicatrices de la guerra:</p>
      <ul>
        <li>Impactos de artillería en la fachada del Palacio del Infante Don Luis</li>
        <li>Restos de trincheras en el Parque de la Villa</li>
        <li>Edificios históricos que sirvieron como hospitales de campaña</li>
      </ul>

      <h2>Rutas de la memoria: recorriendo la historia</h2>
      <p>El Ayuntamiento de Boadilla ha desarrollado un ambicioso proyecto de recuperación de la memoria histórica que incluye varias rutas señalizadas:</p>
      
      <h3>1. Ruta de las Trincheras (2,5 km - Dificultad media)</h3>
      <p>Recorrido circular que permite visitar las posiciones republicanas mejor conservadas, con paneles explicativos que detallan:</p>
      <ul>
        <li>La vida cotidiana en las trincheras</li>
        <li>Las tácticas de combate empleadas</li>
        <li>Testimonios de soldados de ambos bandos</li>
        <li>La evolución de las fortificaciones</li>
      </ul>

      <h3>2. Ruta del Frente del Noroeste (5 km - Dificultad media-alta)</h3>
      <p>Itinerario que sigue la línea del frente, conectando las posiciones republicanas con las nacionales. Incluye:</p>
      <ul>
        <li>Observatorios de artillería</li>
        <li>Puestos de mando</li>
        <li>Zonas de retaguardia</li>
        <li>Áreas de descanso de tropas</li>
      </ul>

      <h3>3. Ruta de los Búnkeres (3 km - Dificultad baja)</h3>
      <p>Recorrido accesible que muestra diferentes tipos de fortificaciones:</p>
      <ul>
        <li>Búnkeres para ametralladora</li>
        <li>Puestos de tirador</li>
        <li>Refugios antiaéreos</li>
        <li>Puestos de observación</li>
      </ul>

      <h2>Proyecto "Boadilla, memoria histórica"</h2>
      <p>Esta iniciativa municipal tiene como objetivos:</p>
      <ul>
        <li>Conservar y restaurar los restos de la Guerra Civil</li>
        <li>Investigar y documentar los hechos históricos</li>
        <li>Divulgar este patrimonio entre la ciudadanía</li>
        <li>Fomentar el turismo cultural y de memoria histórica</li>
      </ul>

      <p>El proyecto incluye:</p>
      <ul>
        <li>Exposiciones temporales en el Centro Cultural Pérez de la Riva</li>
        <li>Jornadas de puertas abiertas en las fortificaciones restauradas</li>
        <li>Actividades educativas para escolares</li>
        <li>Publicaciones y material divulgativo</li>
        <li>Visitas guiadas con guías especializados</li>
      </ul>

      <h2>La memoria viva: testimonios de los últimos testigos</h2>
      <p>El Archivo Municipal de Boadilla ha recopilado decenas de testimonios de vecinos que vivieron la guerra, creando un fondo documental único que incluye:</p>
      <ul>
        <li>Entrevistas en vídeo a testigos directos</li>
        <li>Cartas y diarios personales de la época</li>
        <li>Fotografías inéditas del frente y la retaguardia</li>
        <li>Documentos oficiales de ambos bandos</li>
      </ul>

      <p>Este material está disponible para investigadores y público en general en el Archivo Municipal, contribuyendo a mantener viva la memoria de uno de los episodios más dramáticos de la historia reciente de Boadilla del Monte.</p>
    `
  },
  {
    title: "El turismo en Boadilla crece un 48% en 2024",
    excerpt: "Incremento récord en la afluencia de visitantes durante el primer semestre del año, superando todas las previsiones.",
    category: "Turismo",
    date: "18/07/2025",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&h=400&fit=crop",
    link: "/noticias/crecimiento-turismo-2024",
    content: `
      <p>Boadilla del Monte ha registrado un incremento del 48% en el número de visitantes durante el primer semestre de 2024 respecto al mismo periodo del año anterior, según los datos facilitados por la Oficina Municipal de Turismo.</p>
      
      <h2>Datos del sector</h2>
      <p>El perfil del turista que visita Boadilla muestra las siguientes características:</p>
      <ul>
        <li>65% turismo nacional, 35% internacional</li>
        <li>Estancia media: 1,8 noches</li>
        <li>Gasto medio por visitante: 95€/día</li>
        <li>Principal motivación: turismo cultural (45%), negocios (30%), ocio (25%)</li>
      </ul>

      <h2>Atractivos turísticos</h2>
      <p>Los lugares más visitados han sido:</p>
      <ol>
        <li>Palacio del Infante Don Luis</li>
        <li>Convento de la Encarnación</li>
        <li>Parque de El Plantío</li>
        <li>Centro de Interpretación del Vino</li>
        <li>Rutas por los restos de la Guerra Civil</li>
      </ol>

      <p>La concejala de Turismo, Ana Pérez, ha atribuido este éxito a la estrategia de promoción implementada, que ha incluido presencia en ferias internacionales, campañas en redes sociales y la creación de paquetes turísticos temáticos.</p>
    `
  },
  {
    title: "Boadilla registra una de las mayores subidas de precio en vivienda nueva",
    excerpt: "La localidad se posiciona entre las zonas con mayor revalorización inmobiliaria de la Comunidad de Madrid.",
    category: "Vivienda",
    date: "15/07/2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    link: "/noticias/precio-vivienda-2025",
    content: `
      <p>Boadilla del Monte ha experimentado una subida del 8,7% en el precio de la vivienda nueva durante el primer semestre de 2025, situándose como el tercer municipio con mayor revalorización de la Comunidad de Madrid, solo por detrás de Pozuelo de Alarcón y Las Rozas.</p>
      
      <h2>Datos del mercado inmobiliario</h2>
      <p>Según el último informe del Colegio de Registradores:</p>
      <ul>
        <li>Precio medio del m²: 3.850€ (nueva) / 2.950€ (segunda mano)</li>
        <li>Subida interanual: 8,7% (nueva) / 5,2% (segunda mano)</li>
        <li>Días de exposición media: 45 días (frente a 68 en 2024)</li>
        <li>Demanda: 3,2 compradores por vivienda (media de la Comunidad: 2,1)</li>
      </ul>

      <h2>Zonas más demandadas</h2>
      <p>Las áreas con mayor actividad inmobiliaria son:</p>
      <ol>
        <li>Montepríncipe - Valdecabañas</li>
        <li>Ciudad de la Imagen - Valdenebro</li>
        <li>Centro - La Berzosa</li>
        <li>Parque Empresarial de Boadilla</li>
      </ol>

      <p>Los expertos atribuyen esta tendencia a factores como la calidad de vida, las buenas comunicaciones, la oferta educativa y la proximidad a Madrid capital. Sin embargo, advierten de que esta escalada de precios podría afectar a la accesibilidad de la vivienda para los jóvenes y familias con menos recursos.</p>
    `
  },
  {
    title: "Inicio de la segunda fase del complejo deportivo Condesa de Chinchón",
    excerpt: "Ampliación de las instalaciones deportivas con nuevas pistas y servicios para los vecinos de Boadilla.",
    category: "Deportes",
    date: "12/07/2025",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    link: "/noticias/complejo-deportivo-condesa",
    content: `
      <p>El Ayuntamiento de Boadilla del Monte ha iniciado las obras de la segunda fase del Complejo Deportivo Municipal Condesa de Chinchón, una actuación que supondrá una inversión de 3,8 millones de euros y que permitirá ampliar y modernizar las instalaciones deportivas del municipio.</p>
      
      <h2>Nuevas instalaciones</h2>
      <p>La ampliación incluirá:</p>
      <ul>
        <li>Piscina climatizada cubierta de 25 metros</li>
        <li>Gimnasio de 800 m² con equipamiento de última generación</li>
        <li>Pistas de pádel cubiertas</li>
        <li>Sala multiusos para actividades dirigidas</li>
        <li>Zona de wellness con sauna y baño turco</li>
      </ul>

      <h2>Fases del proyecto</h2>
      <p>Las obras se desarrollarán en dos fases:</p>
      <ol>
        <li>Construcción de la estructura y cerramientos (hasta diciembre 2025)</li>
        <li>Instalaciones interiores y equipamiento (enero a junio 2026)</li>
      </ol>

      <h2>Beneficios para los vecinos</h2>
      <p>Esta ampliación permitirá:</p>
      <ul>
        <li>Ampliar la oferta de actividades acuáticas durante todo el año</li>
        <li>Reducir las listas de espera en las instalaciones deportivas</li>
        <li>Atraer competiciones deportivas de nivel autonómico</li>
        <li>Crear 15 nuevos puestos de trabajo directos</li>
      </ul>

      <p>El complejo mantendrá su actividad durante las obras, que se realizarán en horario de menor afluencia para minimizar las molestias a los usuarios.</p>
    `
  }
];

// Noticias sobre zonas de Boadilla
export const zonasNews: NewsItem[] = [
  {
    title: "Bonan: Un remanso de paz en Boadilla del Monte",
    excerpt: "Descubre Bonan, una de las zonas residenciales más tranquilas y verdes de Boadilla, perfecta para familias que buscan tranquilidad sin renunciar a las comodidades urbanas.",
    category: "Zonas de Boadilla",
    date: "10/08/2025",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=400&fit=crop",
    link: "/noticias/zona-bonan",
    content: `
      <p>Bonan es una de las zonas residenciales más tranquilas y verdes de Boadilla del Monte, caracterizada por sus amplias zonas ajardinadas, calles arboladas y un ambiente familiar que la convierten en un lugar ideal para vivir.</p>
      
      <h2>Características principales</h2>
      <p>Bonan destaca por su diseño urbanístico que prioriza la calidad de vida de sus vecinos:</p>
      <ul>
        <li><strong>Zonas verdes</strong>: Amplios parques y jardines que invitan al paseo y al deporte al aire libre.</li>
        <li><strong>Accesibilidad</strong>: Excelentes conexiones con el centro de Boadilla y con Madrid a través de la M-40 y M-50.</li>
        <li><strong>Servicios</strong>: Colegios, supermercados y centros de salud a poca distancia.</li>
        <li><strong>Oferta inmobiliaria</strong>: Mayoritariamente viviendas unifamiliares con jardín y zonas comunitarias.</li>
      </ul>

      <h2>Ventajas de vivir en Bonan</h2>
      <p>Los residentes de Bonan disfrutan de una excelente calidad de vida gracias a:</p>
      <ul>
        <li>Entorno tranquilo y seguro, ideal para el descanso y la vida familiar.</li>
        <li>Comunidad vecinal activa y participativa.</li>
        <li>Proximidad a zonas comerciales y de ocio.</li>
        <li>Fácil acceso a transporte público y principales vías de comunicación.</li>
      </ul>

      <p>Si buscas un hogar en un entorno tranquilo y bien comunicado, Bonan es sin duda una de las mejores opciones en Boadilla del Monte.</p>
    `
  },
  {
    title: "Casco Antiguo: El corazón histórico de Boadilla",
    excerpt: "Explora el encanto del Casco Antiguo de Boadilla, donde la historia se funde con la modernidad en un entorno urbano lleno de carácter y tradición.",
    category: "Zonas de Boadilla",
    date: "09/08/2025",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&h=630&fit=crop",
    link: "/noticias/casco-antiguo-boadilla",
    content: `
      <p>El Casco Antiguo de Boadilla del Monte es el auténtico corazón histórico del municipio, un lugar donde cada rincón cuenta una historia y donde se respira la esencia más tradicional de esta localidad madrileña. Con un patrimonio histórico-artístico excepcional, esta zona es un auténtico museo al aire libre que atrae tanto a residentes como a visitantes.</p>
      
      <h2>Patrimonio histórico y cultural</h2>
      <p>El Casco Antiguo de Boadilla alberga algunos de los monumentos más emblemáticos de la localidad, testigos mudos de siglos de historia:</p>
      <ul>
        <li><strong>Palacio del Infante Don Luis</strong>: Joya del neoclasicismo español diseñado por Ventura Rodríguez en el siglo XVIII, que destaca por su imponente fachada y sus hermosos jardines. Actualmente alberga la Casa Consistorial y es el edificio más representativo de Boadilla.</li>
        <li><strong>Iglesia de San Sebastián Mártir</strong>: Templo del siglo XV con elementos góticos y reformas posteriores que alberga importantes obras de arte sacro. Su torre mudéjar es uno de los símbolos más reconocibles de la localidad.</li>
        <li><strong>Fuente de Ventura Rodríguez</strong>: Obra del siglo XVIII que combina funcionalidad y belleza, situada en la plaza de la localidad y que ha sido testigo de la vida cotidiana de los boadillenses durante siglos.</li>
        <li><strong>Plaza de la Villa</strong>: Corazón del municipio, punto de encuentro social donde se desarrollan mercados tradicionales, ferias y celebraciones a lo largo del año.</li>
        <li><strong>Antiguo Hospital de San Juan Bautista</strong>: Edificio del siglo XVI que actualmente alberga la Casa de la Cultura, mostrando la evolución de la arquitectura civil a lo largo de los siglos.</li>
      </ul>

      <h2>Vida en el Casco Antiguo</h2>
      <p>Vivir en el Casco Antiguo de Boadilla es disfrutar de un entorno único con numerosas ventajas que combinan tradición y modernidad:</p>
      <ul>
        <li><strong>Ambiente tradicional y acogedor</strong>: Calles empedradas, fachadas históricas y rincones con encanto que invitan a pasear y descubrir la historia en cada esquina. El trazado medieval de sus calles crea un ambiente íntimo y cercano.</li>
        <li><strong>Comercio y hostelería</strong>: Amplia oferta de comercios tradicionales, tiendas de artesanía, cafeterías con encanto y restaurantes donde degustar la gastronomía típica de la Comunidad de Madrid. Los mercados semanales son una cita ineludible para los amantes de los productos locales.</li>
        <li><strong>Vida cultural activa</strong>: El Casco Antiguo es el centro neurálgico de la actividad cultural de Boadilla, con programación estable de teatro, exposiciones, conciertos y celebraciones tradicionales que mantienen vivas las raíces de la localidad.</li>
        <li><strong>Servicios y equipamientos</strong>: A pesar de su carácter histórico, la zona cuenta con todos los servicios modernos necesarios: centros de salud, colegios, bibliotecas y zonas deportivas, todo ello integrado respetando el entorno patrimonial.</li>
        <li><strong>Conectividad</strong>: Excelente ubicación con conexiones de transporte público que facilitan el acceso al resto del municipio y a Madrid, así como amplias zonas peatonales que priorizan la movilidad sostenible.</li>
      </ul>

      <h2>Arquitectura y urbanismo</h2>
      <p>El Casco Antiguo de Boadilla es un libro abierto de historia de la arquitectura, donde conviven estilos que van desde el mudéjar hasta el neoclasicismo:</p>
      <ul>
        <li><strong>Arquitectura tradicional</strong>: Casas de dos plantas con fachadas de ladrillo visto y teja árabe, patios interiores y rejerías de forja que son testimonio de la arquitectura popular madrileña.</li>
        <li><strong>Edificios señoriales</strong>: Casonas blasonadas que nos hablan del pasado nobiliario de la localidad, con escudos heráldicos en sus fachadas y patios interiores de gran valor arquitectónico.</li>
        <li><strong>Espacios públicos</strong>: Plazuelas recoletas, fuentes históricas y jardines que invitan al paseo y al descanso, creando una trama urbana humanizada y a escala peatonal.</li>
        <li><strong>Rehabilitación integradora</strong>: Proyectos de rehabilitación que han sabido combinar la conservación del patrimonio con las necesidades de la vida moderna, manteniendo la esencia del lugar.</li>
      </ul>

      <h2>Fiestas y tradiciones</h2>
      <p>El calendario festivo del Casco Antiguo es rico y variado, con celebraciones que tienen su origen en tradiciones centenarias:</p>
      <ul>
        <li><strong>Fiestas Patronales de San Sebastián</strong>: Celebradas en enero en honor al patrón de Boadilla, con procesiones, verbenas y actividades para todos los públicos.</li>
        <li><strong>Semana Santa</strong>: Con procesiones que recorren las calles del Casco Antiguo, destacando la del Santo Entierro del Viernes Santo.</li>
        <li><strong>Ferias y Mercados Medievales</strong>: Que recrean el ambiente de épocas pasadas con puestos de artesanía, exhibiciones y animación callejera.</li>
        <li><strong>Navidad</strong>: Con un especial encanto en sus calles iluminadas, belenes vivientes y mercadillos navideños que atraen a visitantes de toda la región.</li>
      </ul>

      <p>El Casco Antiguo de Boadilla es mucho más que una zona residencial; es el alma histórica del municipio, un lugar donde el pasado y el presente se dan la mano para ofrecer una calidad de vida excepcional en un entorno cargado de encanto y personalidad. Sus calles, plazas y edificios son testigos vivos de la historia de Boadilla, ofreciendo a sus habitantes y visitantes la oportunidad de pasear por siglos de historia mientras disfrutan de todas las comodidades de la vida moderna. Un lugar donde cada piedra tiene una historia que contar y donde el patrimonio cultural se convierte en el escenario de la vida cotidiana.</p>
    `
  },
  {
    title: "Cortijo Sur: Tradición y modernidad en armonía",
    excerpt: "Conoce Cortijo Sur, una zona residencial que combina la tranquilidad de la periferia con la cercanía al centro de Boadilla, ofreciendo lo mejor de ambos mundos en un entorno familiar y bien comunicado.",
    category: "Zonas de Boadilla",
    date: "08/08/2025",
    image: "https://images.unsplash.com/photo-1592595896616-019fbaa2d569?w=1200&h=630&fit=crop",
    link: "/noticias/cortijo-sur-boadilla",
    content: `
      <p>Cortijo Sur es una de las zonas residenciales más dinámicas y mejor valoradas de Boadilla del Monte, que ha experimentado un importante desarrollo urbanístico en las últimas décadas, ofreciendo una excelente calidad de vida a sus residentes en un entorno que combina la tranquilidad de la periferia con la comodidad de tener todos los servicios al alcance de la mano.</p>
      
      <h2>Características de la zona</h2>
      <p>Cortijo Sur destaca por su diseño urbanístico cuidado y su oferta residencial de calidad:</p>
      <ul>
        <li><strong>Urbanizaciones modernas</strong>: Conjuntos residenciales que combinan viviendas unifamiliares, adosadas y bloques de pisos de baja altura, todos ellos integrados en amplias zonas verdes que preservan la vegetación autóctona.</li>
        <li><strong>Infraestructuras deportivas</strong>: Complejo deportivo municipal con piscinas cubiertas y al aire libre, pistas de pádel, tenis y fútbol, así como un circuito biosaludable para todas las edades.</li>
        <li><strong>Parques infantiles y zonas de esparcimiento</strong>: Numerosas áreas verdes dotadas de columpios, zonas de juego y espacios para el ocio familiar, incluyendo la zona de El Bosque del Santander, un gran parque forestal con senderos y zonas de picnic.</li>
        <li><strong>Excelentes comunicaciones</strong>: Conexión directa con el centro de Boadilla a través de la Avenida de la Comunidad de Madrid, y acceso rápido a la M-40 y M-50 para llegar a Madrid en menos de 20 minutos.</li>
        <li><strong>Centro de Salud Cortijo Sur</strong>: Modernas instalaciones médicas que ofrecen atención primaria y servicios especializados a los residentes de la zona.</li>
      </ul>

      <h2>Vida en Cortijo Sur</h2>
      <p>Vivir en Cortijo Sur ofrece un estilo de vida equilibrado con numerosas ventajas para sus residentes:</p>
      <ul>
        <li><strong>Entorno familiar</strong>: Zona residencial ideal para familias, con amplias aceras, calles tranquilas y un ambiente seguro para los más pequeños.</li>
        <li><strong>Amplia oferta educativa</strong>: Colegios públicos y concertados de gran prestigio como el CEIP Federico García Lorca y el IES Profesor Máximo Trueba, además de guarderías y escuelas infantiles.</li>
        <li><strong>Comercio y servicios</strong>: Zona comercial con supermercados, farmacias, clínicas veterinarias y todo tipo de establecimientos para el día a día, además de un mercado semanal los martes.</li>
        <li><strong>Ocio y restauración</strong>: Variedad de restaurantes, bares de tapas y cafeterías que ofrecen gastronomía local e internacional, además de cines y centros de ocio en las inmediaciones.</li>
        <li><strong>Asociacionismo vecinal</strong>: Fuerte tejido asociativo que organiza actividades culturales, deportivas y festivas a lo largo de todo el año, fomentando el sentimiento de comunidad.</li>
      </ul>

      <h2>Entorno natural y sostenibilidad</h2>
      <p>Cortijo Sur se integra armoniosamente en el entorno natural de Boadilla, ofreciendo a sus residentes la posibilidad de disfrutar de la naturaleza sin salir del barrio:</p>
      <ul>
        <li><strong>Corredor ecológico</strong>: Zonas verdes que conectan con el Parque Regional del Curso Medio del Río Guadarrama, ideal para practicar senderismo y ciclismo.</li>
        <li><strong>Jardines temáticos</strong>: Áreas ajardinadas con especies autóctonas que requieren poco consumo de agua, siguiendo criterios de sostenibilidad medioambiental.</li>
        <li><strong>Movilidad sostenible</strong>: Red de carriles bici que conectan con el centro de Boadilla y otras zonas del municipio, fomentando la movilidad sostenible.</li>
        <li><strong>Fauna urbana</strong>: Numerosas especies de aves que anidan en los parques y jardines del barrio, creando un entorno natural en plena ciudad.</li>
      </ul>

      <p>En definitiva, Cortijo Sur representa un modelo de desarrollo urbano equilibrado que ha sabido crecer manteniendo su esencia residencial y familiar. Su combinación de servicios, espacios verdes y excelentes comunicaciones lo convierten en una de las zonas más demandadas de Boadilla del Monte para aquellos que buscan calidad de vida en un entorno moderno y bien conectado.</p>
    `
  },
  {
    title: "El Olivar de Mirabal: Elegancia y naturaleza en Boadilla",
    excerpt: "Descubre El Olivar de Mirabal, una de las zonas residenciales más exclusivas de Boadilla, donde la tranquilidad y el lujo se dan la mano en un entorno natural privilegiado.",
    category: "Zonas de Boadilla",
    date: "07/08/2025",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=400&fit=crop",
    link: "/noticias/olivar-mirabal-boadilla",
    content: `
      <p>El Olivar de Mirabal es sinónimo de exclusividad y elegancia en Boadilla del Monte. Esta zona residencial de alto standing destaca por sus amplias parcelas, viviendas de diseño y un entorno natural privilegiado.</p>
      
      <h2>Características destacadas</h2>
      <p>El Olivar de Mirabal ofrece a sus residentes:</p>
      <ul>
        <li><strong>Viviendas de lujo</strong>: Chalets unifamiliares con amplios jardines y piscina.</li>
        <li><strong>Zonas verdes</strong>: Extensas áreas ajardinadas y paseos arbolados.</li>
        <li><strong>Seguridad</strong>: Urbanización privada con vigilancia 24 horas.</li>
        <li><strong>Servicios exclusivos</strong>: Zonas deportivas, piscina comunitaria y áreas sociales.</li>
      </ul>

      <h2>Entorno y localización</h2>
      <p>La ubicación de El Olivar de Mirabal es otro de sus grandes atractivos:</p>
      <ul>
        <li>Excelentes comunicaciones con Madrid a través de la A-5 y M-40.</li>
        <li>Proximidad a colegios internacionales de prestigio.</li>
        <li>Cercanía a centros comerciales y de ocio.</li>
        <li>Entorno natural privilegiado con vistas a la sierra de Madrid.</li>
      </ul>

      <p>Para quienes buscan el máximo confort y exclusividad, El Olivar de Mirabal representa una de las mejores opciones residenciales en Boadilla del Monte.</p>
    `
  },
  {
    title: "El Pastel: Tradición y encanto en el corazón de Boadilla",
    excerpt: "Descubre El Pastel, un barrio con personalidad propia que combina la tradición con la modernidad en un entorno residencial de gran valor arquitectónico y calidad de vida.",
    category: "Zonas de Boadilla",
    date: "06/08/2025",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=400&fit=crop",
    link: "/noticias/el-pastel-boadilla",
    content: `
      <p>El Pastel es uno de los barrios con más encanto de Boadilla del Monte, conocido por su arquitectura tradicional y su ambiente acogedor que invita a pasear por sus calles y disfrutar de sus rincones con historia.</p>
      
      <h2>Características del barrio</h2>
      <p>El Pastel destaca por su singular personalidad:</p>
      <ul>
        <li><strong>Arquitectura tradicional</strong>: Casas bajas con fachadas de ladrillo visto y tejados a dos aguas.</li>
        <li><strong>Calles empedradas</strong>: Pequeñas plazas y rincones con encanto que recuerdan a los pueblos tradicionales.</li>
        <li><strong>Zonas peatonales</strong>: Áreas peatonales que invitan al paseo y al disfrute del espacio público.</li>
        <li><strong>Comercios locales</strong>: Pequeños establecimientos que mantienen el espíritu tradicional del barrio.</li>
      </ul>

      <h2>Ventajas de vivir en El Pastel</h2>
      <p>Los residentes de El Pastel disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Ubicación privilegiada cerca del centro de Boadilla.</li>
        <li>Ambiente tranquilo y familiar.</li>
        <li>Proximidad a parques y zonas verdes.</li>
        <li>Excelente comunicación con transporte público y principales vías de acceso.</li>
      </ul>

      <p>Si buscas un hogar con encanto y personalidad en Boadilla del Monte, El Pastel es una excelente opción que combina tradición y comodidad.</p>
    `
  },
  {
    title: "Las Lomas: Calidad de vida en un entorno privilegiado",
    excerpt: "Conoce Las Lomas, una zona residencial que destaca por su tranquilidad, amplias zonas verdes y excelente calidad de vida, ideal para familias y amantes de la naturaleza.",
    category: "Zonas de Boadilla",
    date: "05/08/2025",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=400&fit=crop",
    link: "/noticias/las-lomas-boadilla",
    content: `
      <p>Las Lomas es una de las zonas residenciales más apreciadas de Boadilla del Monte, destacando por su entorno natural, amplias zonas verdes y una excelente calidad de vida para sus residentes.</p>
      
      <h2>Características principales</h2>
      <p>Las Lomas ofrece un entorno residencial de gran calidad:</p>
      <ul>
        <li><strong>Amplias zonas verdes</strong>: Parques y jardines bien cuidados que invitan al paseo y al deporte al aire libre.</li>
        <li><strong>Viviendas espaciosas</strong>: Mayoritariamente chalets unifamiliares con jardín y piscina.</li>
        <li><strong>Zonas deportivas</strong>: Instalaciones para la práctica de diversos deportes.</li>
        <li><strong>Entorno seguro</strong>: Urbanización tranquila y bien cuidada.</li>
      </ul>

      <h2>Servicios y accesibilidad</h2>
      <p>Vivir en Las Lomas ofrece numerosas ventajas:</p>
      <ul>
        <li>Excelentes comunicaciones con el centro de Boadilla y Madrid.</li>
        <li>Proximidad a centros comerciales y de ocio.</li>
        <li>Colegios y centros educativos de calidad en las inmediaciones.</li>
        <li>Amplia oferta de servicios y comercios en zonas cercanas.</li>
      </ul>

      <p>Para quienes buscan tranquilidad sin renunciar a las comodidades urbanas, Las Lomas representa una de las mejores opciones residenciales en Boadilla del Monte.</p>
    `
  },
  {
    title: "Parque Boadilla: Naturaleza y modernidad en perfecta armonía",
    excerpt: "Explora Parque Boadilla, una zona residencial que combina el encanto de la naturaleza con las comodidades de la vida moderna en un entorno único y privilegiado.",
    category: "Zonas de Boadilla",
    date: "04/08/2025",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=400&fit=crop",
    link: "/noticias/parque-boadilla",
    content: `
      <p>Parque Boadilla es un proyecto urbanístico que ha sabido integrar a la perfección el respeto por el medio ambiente con un diseño urbano moderno y funcional, creando un espacio único en Boadilla del Monte.</p>
      
      <h2>Diseño y sostenibilidad</h2>
      <p>Parque Boadilla destaca por su enfoque innovador:</p>
      <ul>
        <li><strong>Diseño sostenible</strong>: Integración de energías renovables y sistemas de eficiencia energética.</li>
        <li><strong>Amplias zonas verdes</strong>: Más del 50% de la superficie son zonas ajardinadas y arboladas.</li>
        <li><strong>Movilidad sostenible</strong>: Red de carriles bici y zonas peatonales que fomentan la movilidad sostenible.</li>
        <li><strong>Arquitectura moderna</strong>: Viviendas de diseño con materiales de alta calidad y bajo impacto ambiental.</li>
      </ul>

      <h2>Ventajas de vivir en Parque Boadilla</h2>
      <p>Los residentes de Parque Boadilla disfrutan de un estilo de vida único:</p>
      <ul>
        <li>Entorno natural privilegiado con lagos y zonas verdes.</li>
        <li>Amplia oferta de ocio y deporte al aire libre.</li>
        <li>Excelentes comunicaciones con Madrid y otras localidades.</li>
        <li>Comunidad de vecinos activa y comprometida con el medio ambiente.</li>
      </ul>

      <p>Si buscas un hogar que combine sostenibilidad, diseño y calidad de vida, Parque Boadilla es la elección perfecta.</p>
    `
  },
  {
    title: "Sector B: Modernidad y excelente ubicación en Boadilla",
    excerpt: "Descubre el Sector B, una zona residencial que combina modernas urbanizaciones con una inmejorable ubicación, ofreciendo la mejor calidad de vida a sus residentes.",
    category: "Zonas de Boadilla",
    date: "03/08/2025",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=400&fit=crop",
    link: "/noticias/sector-b-boadilla",
    content: `
      <p>El Sector B es una de las zonas residenciales más dinámicas de Boadilla del Monte, caracterizada por su diseño urbano moderno, amplias zonas verdes y excelentes comunicaciones que lo convierten en un lugar ideal para vivir.</p>
      
      <h2>Características principales</h2>
      <p>El Sector B ofrece un entorno residencial de alta calidad:</p>
      <ul>
        <li><strong>Urbanizaciones modernas</strong>: Conjuntos residenciales con amplias zonas comunes y servicios de calidad.</li>
        <li><strong>Zonas verdes</strong>: Parques y jardines bien cuidados que invitan al esparcimiento al aire libre.</li>
        <li><strong>Equipamientos deportivos</strong>: Instalaciones para la práctica de diversos deportes.</li>
        <li><strong>Áreas infantiles</strong>: Zonas de juego para los más pequeños.</li>
      </ul>

      <h2>Ubicación y accesibilidad</h2>
      <p>El Sector B destaca por su privilegiada ubicación:</p>
      <ul>
        <li>Excelentes conexiones con Madrid a través de la M-40 y M-50.</li>
        <li>Próximo al centro de Boadilla y a los principales servicios municipales.</li>
        <li>Fácil acceso a centros comerciales y de ocio.</li>
        <li>Buena red de transporte público que facilita los desplazamientos.</li>
      </ul>

      <p>Si buscas un hogar en una zona bien comunicada y con todos los servicios a tu alcance, el Sector B es una excelente opción en Boadilla del Monte.</p>
    `
  },
  {
    title: "Sector S: Elegancia y tranquilidad en Boadilla del Monte",
    excerpt: "Conoce el Sector S, una zona residencial de alto standing que combina lujo, tranquilidad y naturaleza en un entorno privilegiado de Boadilla del Monte.",
    category: "Zonas de Boadilla",
    date: "02/08/2025",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=400&fit=crop",
    link: "/noticias/sector-s-boadilla",
    content: `
      <p>El Sector S es sinónimo de elegancia y exclusividad en Boadilla del Monte. Esta zona residencial de alto standing destaca por sus amplias parcelas, viviendas de diseño y un entorno natural que invita al descanso y al disfrute de la vida al aire libre.</p>
      
      <h2>Características destacadas</h2>
      <p>El Sector S ofrece a sus residentes un estilo de vida único:</p>
      <ul>
        <li><strong>Viviendas de lujo</strong>: Chalets unifamiliares con amplios jardines y piscina.</li>
        <li><strong>Entorno natural</strong>: Zonas verdes y arboladas que invitan al paseo y al deporte al aire libre.</li>
        <li><strong>Seguridad</strong>: Urbanización privada con vigilancia 24 horas.</li>
        <strong>Servicios exclusivos</strong>: Zonas deportivas, piscina comunitaria y áreas sociales.</li>
      </ul>

      <h2>Ventajas de vivir en el Sector S</h2>
      <p>Los residentes del Sector S disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Entorno tranquilo y seguro, ideal para el descanso y la vida familiar.</li>
        <li>Excelentes comunicaciones con Madrid a través de la A-5 y M-40.</li>
        <li>Proximidad a colegios internacionales de prestigio.</li>
        <li>Cercanía a centros comerciales y de ocio de alta gama.</li>
      </ul>

      <p>Para quienes buscan el máximo confort y exclusividad, el Sector S representa una de las mejores opciones residenciales en Boadilla del Monte.</p>
    `
  },
  {
    title: "Urb. Este - Montepríncipe: Confort y servicios en un entorno privilegiado",
    excerpt: "Descubre la Urbanización Este - Montepríncipe, una zona residencial que combina la tranquilidad de un barrio residencial con la comodidad de tener todos los servicios al alcance de la mano.",
    category: "Zonas de Boadilla",
    date: "01/08/2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop",
    link: "/noticias/urb-este-monteprincipe",
    content: `
      <p>La Urbanización Este - Montepríncipe es una de las zonas más valoradas de Boadilla del Monte, destacando por su excelente ubicación, amplia oferta de servicios y ambiente familiar que la convierten en un lugar ideal para vivir.</p>
      
      <h2>Características principales</h2>
      <p>La Urbanización Este - Montepríncipe ofrece un entorno residencial de gran calidad:</p>
      <ul>
        <li><strong>Amplia oferta residencial</strong>: Desde apartamentos a chalets unifamiliares, adaptándose a diferentes necesidades.</li>
        <li><strong>Zonas verdes</strong>: Parques y jardines bien cuidados que invitan al paseo y al deporte al aire libre.</li>
        <li><strong>Comercios y servicios</strong>: Amplia variedad de tiendas, restaurantes y servicios de todo tipo.</li>
        <li><strong>Equipamientos educativos</strong>: Colegios y guarderías de calidad en las inmediaciones.</li>
      </ul>

      <h2>Ventajas de vivir en Urb. Este - Montepríncipe</h2>
      <p>Los residentes de esta zona disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Excelente comunicación con Madrid y otras localidades.</li>
        <li>Amplia oferta de ocio y restauración.</li>
        <li>Ambiente familiar y seguro.</li>
        <li>Proximidad al Hospital Universitario Puerta de Hierro - Majadahonda.</li>
      </ul>

      <p>Si buscas un hogar en una zona bien comunicada y con todos los servicios a tu alcance, la Urbanización Este - Montepríncipe es una excelente opción en Boadilla del Monte.</p>
    `
  },
  {
    title: "Valdecabañas: Naturaleza y tranquilidad en Boadilla del Monte",
    excerpt: "Descubre Valdecabañas, un entorno residencial que combina la belleza natural con la comodidad de vivir cerca de la ciudad, ofreciendo un estilo de vida único en Boadilla.",
    category: "Zonas de Boadilla",
    date: "31/07/2025",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=400&fit=crop",
    link: "/noticias/valdecanas-boadilla",
    content: `
      <p>Valdecabañas es una de las zonas más tranquilas y verdes de Boadilla del Monte, ideal para aquellos que buscan vivir en contacto con la naturaleza sin renunciar a las comodidades de la ciudad.</p>
      
      <h2>Entorno natural</h2>
      <p>Valdecabañas destaca por su entorno natural privilegiado:</p>
      <ul>
        <li><strong>Amplias zonas verdes</strong>: Bosques y áreas naturales que rodean la urbanización.</li>
        <li><strong>Rutas de senderismo</strong>: Caminos que invitan a practicar deporte al aire libre.</li>
        <li><strong>Fauna local</strong>: Numerosas especies de aves y animales que habitan en la zona.</li>
        <li><strong>Ambiente tranquilo</strong>: Lejos del ruido y el estrés de la ciudad.</li>
      </ul>

      <h2>Ventajas de vivir en Valdecabañas</h2>
      <p>Los residentes de Valdecabañas disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Calidad de vida excepcional en un entorno natural.</li>
        <li>Amplias parcelas y viviendas espaciosas.</li>
        <li>Comunidad de vecinos reducida y familiar.</li>
        <li>Proximidad a Boadilla centro y buenas comunicaciones con Madrid.</li>
      </ul>

      <p>Si buscas un hogar en un entorno natural y tranquilo, Valdecabañas es la elección perfecta en Boadilla del Monte.</p>
    `
  },
  {
    title: "Valdepastores - Las Encinas: Tradición y modernidad en armonía",
    excerpt: "Conoce Valdepastores - Las Encinas, una zona residencial que combina la tradición de Boadilla con las comodidades de la vida moderna, ofreciendo un entorno ideal para las familias.",
    category: "Zonas de Boadilla",
    date: "30/07/2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop",
    link: "/noticias/valdepastores-las-encinas",
    content: `
      <p>Valdepastores - Las Encinas es una de las zonas más consolidadas de Boadilla del Monte, destacando por su ambiente familiar, amplias zonas verdes y excelentes servicios que la convierten en un lugar ideal para vivir.</p>
      
      <h2>Características principales</h2>
      <p>Valdepastores - Las Encinas ofrece un entorno residencial de gran calidad:</p>
      <ul>
        <li><strong>Amplia oferta de viviendas</strong>: Desde apartamentos a chalets unifamiliares.</li>
        <li><strong>Zonas verdes</strong>: Numerosos parques y jardines para el disfrute de los vecinos.</li>
        <li><strong>Equipamientos deportivos</strong>: Instalaciones para la práctica de diversos deportes.</li>
        <li><strong>Comercios y servicios</strong>: Todo lo necesario para el día a día al alcance de la mano.</li>
      </ul>

      <h2>Ventajas de vivir en Valdepastores - Las Encinas</h2>
      <p>Los residentes de esta zona disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Excelente comunicación con el centro de Boadilla y Madrid.</li>
        <li>Amplia oferta educativa con colegios públicos y concertados.</li>
        <li>Ambiente familiar y seguro.</li>
        <li>Proximidad a centros comerciales y de ocio.</li>
      </ul>

      <p>Si buscas un hogar en una zona consolidada y con todos los servicios, Valdepastores - Las Encinas es una excelente opción en Boadilla del Monte.</p>
    `
  },
  {
    title: "Viñas Viejas: Elegancia y tradición vinícola en Boadilla",
    excerpt: "Descubre Viñas Viejas, una zona residencial que rinde homenaje a la tradición vinícola de la región, ofreciendo un entorno único lleno de encanto y personalidad en Boadilla del Monte.",
    category: "Zonas de Boadilla",
    date: "29/07/2025",
    image: "https://images.unsplash.com/photo-1501782910366-8d8a7a9300a9?w=1200&h=630&fit=crop",
    link: "/noticias/vinas-viejas-boadilla",
    content: `
      <p>En el corazón de Boadilla del Monte se encuentra Viñas Viejas, un barrio que rinde homenaje a la rica tradición vinícola que antaño caracterizó a esta región. Este desarrollo urbanístico, que toma su nombre de los antiguos viñedos que cubrían estas tierras, se ha convertido en uno de los entornos residenciales más singulares y apreciados del municipio, combinando diseño contemporáneo con referencias a la herencia vitivinícola de la zona.</p>
      
      <h2>Un diseño urbano con personalidad propia</h2>
      <p>Viñas Viejas destaca por su diseño urbano cuidado y temático, donde cada detalle evoca la tradición vinícola que le da nombre:</p>
      <ul>
        <li><strong>Nomenclatura vinícola</strong>: Las calles llevan nombres de variedades de uva (Tempranillo, Garnacha, Albariño) y términos relacionados con la enología, creando un mapa urbano único.</li>
        <li><strong>Arquitectura de calidad</strong>: Viviendas unifamiliares y adosadas que combinan materiales nobles como la piedra y la madera con acabados modernos, siguiendo un diseño armónico que respeta la escala humana.</li>
        <li><strong>Elementos decorativos temáticos</strong>: Farolas con formas de racimos de uva, fuentes ornamentales y mobiliario urbano diseñado ex profeso refuerzan la identidad del barrio.</li>
        <li><strong>Zonas peatonales</strong>: Amplias aceras arboladas y calzadas de adoquín que invitan al paseo y reducen la velocidad del tráfico, creando un entorno seguro y agradable.</li>
      </ul>

      <h2>Entorno natural y zonas verdes</h2>
      <p>La integración con la naturaleza es uno de los grandes atractivos de Viñas Viejas:</p>
      <ul>
        <li><strong>Parques temáticos</strong>: Áreas verdes diseñadas con especies vegetales autóctonas y elementos que recuerdan a los viñedos, como emparrados y pérgolas cubiertas de vides.</li>
        <li>Jardines privados: Las viviendas cuentan con generosos jardines que permiten disfrutar del aire libre en privacidad.</li>
        <li>Rutas verdes: Conexión con los principales corredores ecológicos del municipio, ideales para practicar senderismo o ciclismo.</li>
        <li>Arbolado urbano: Selección de especies que ofrecen sombra en verano y permiten el paso de la luz en invierno, mejorando la eficiencia energética de las viviendas.</li>
      </ul>

      <h2>Calidad de vida en Viñas Viejas</h2>
      <p>Vivir en Viñas Viejas ofrece numerosas ventajas que mejoran la calidad de vida de sus residentes:</p>
      <ul>
        <li><strong>Comunicaciones excelentes</strong>: Acceso rápido a la M-40 y M-50, con conexión directa al centro de Madrid en menos de 25 minutos. Líneas de autobús urbano e interurbano con paradas cercanas.</li>
        <li><strong>Oferta educativa de calidad</strong>: Colegios públicos y concertados en las inmediaciones, incluyendo el CEIP Federico García Lorca y el IES Profesor Máximo Trueba, además de guarderías y escuelas infantiles.</li>
        <li><strong>Comercio y servicios</strong>: Zona comercial con supermercados, farmacias, clínicas médicas y todo tipo de establecimientos para el día a día. Mercado semanal los martes en las inmediaciones.</li>
        <li><strong>Ocio y restauración</strong>: Variedad de restaurantes y bares de tapas, algunos con temática vinícola, donde disfrutar de la gastronomía local. Cercanía a centros comerciales y cines.</li>
        <li><strong>Seguridad</strong>: Entorno residencial tranquilo con bajo índice de criminalidad y presencia de seguridad privada en algunas urbanizaciones.</li>
      </ul>

      <h2>Actividades y vida comunitaria</h2>
      <p>La vida en Viñas Viejas va más allá de lo residencial, ofreciendo una rica oferta de actividades:</p>
      <ul>
        <li><strong>Asociación de Vecinos</strong>: Organiza eventos culturales, talleres y actividades para todas las edades durante todo el año.</li>
        <li><strong>Fiestas del Barrio</strong>: Celebraciones anuales que incluyen actividades infantiles, conciertos al aire libre y degustaciones de productos locales.</li>
        <li><strong>Talleres de enología</strong>: Cursos de cata de vinos y talleres sobre viticultura que rinden homenaje a la tradición que da nombre al barrio.</li>
        <li><strong>Actividades deportivas</strong>: Escuelas deportivas, torneos intervecinales y grupos de running que aprovechan los espacios verdes del barrio.</li>
      </ul>

      <h2>Inversión y valoración</h2>
      <p>Viñas Viejas se ha consolidado como una de las zonas más valoradas de Boadilla del Monte:</p>
      <ul>
        <li><strong>Revalorización constante</strong>: Los precios de la vivienda han mostrado una tendencia alcista, con una revalorización media del 4,5% anual en los últimos cinco años.</li>
        <li><strong>Demanda sostenida</strong>: El perfil de comprador suele ser familiar, con una media de edad entre 35 y 55 años, que valora la tranquilidad, la calidad de vida y la buena comunicación con Madrid.</li>
        <li><strong>Calidad constructiva</strong>: Las viviendas destacan por sus altos estándares de construcción, con materiales de primera calidad y diseños que priorizan la eficiencia energética.</li>
        <li><strong>Proyectos futuros</strong>: El Ayuntamiento ha anunciado mejoras en infraestructuras y la creación de nuevos espacios verdes que reforzarán aún más el atractivo de la zona.</li>
      </ul>

      <p>En definitiva, Viñas Viejas representa un modelo de desarrollo urbano que ha sabido combinar la tradición con la modernidad, ofreciendo a sus residentes un entorno residencial de calidad, con personalidad propia y todos los servicios necesarios para el día a día. Su diseño cuidado, su ambiente tranquilo y familiar, y su excelente ubicación lo convierten en una de las zonas más deseadas de Boadilla del Monte para aquellos que buscan calidad de vida en un entorno único y con carácter.</p>
      <p>Los residentes de Viñas Viejas disfrutan de numerosas ventajas:</p>
      <ul>
        <li>Entorno único con una clara identidad propia.</li>
        <li>Excelente calidad de vida en un ambiente tranquilo y familiar.</li>
        <li>Buenas comunicaciones con el centro de Boadilla y Madrid.</li>
        <li>Comunidad de vecinos activa y participativa.</li>
      </ul>

      <p>Si buscas un hogar con personalidad en un entorno único, Viñas Viejas es la elección perfecta en Boadilla del Monte.</p>
    `
  }
];

// Todas las noticias (destacada + recientes + zonas)
export const allNews: NewsItem[] = [featuredNews, ...recentNews, ...zonasNews];
