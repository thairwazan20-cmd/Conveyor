const WHATSAPP = '51959723559';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
export const whatsappWith = (text) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

export const REDUCED_MOTION = matchMedia('(prefers-reduced-motion: reduce)').matches;

export const MENU_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#productos', label: 'Productos' },
  { href: whatsappWith('Hola, quisiera recibir el catálogo de productos.'), label: 'Catálogo', external: true },
  { href: '#contacto', label: 'Contacto' },
];

export const FOOTER_LINKS = MENU_LINKS.filter((link) => !link.external);

// Reemplazar href="#" por las URLs reales de las redes
export const SOCIAL_LINKS = [
  { href: '#', label: 'Facebook', icon: 'facebook' },
  { href: '#', label: 'Instagram', icon: 'instagram' },
  { href: '#', label: 'TikTok', icon: 'tiktok' },
];

export const BRANDS = [
  { src: 'assets/img/marca-intralox.png', alt: 'Intralox' },
  { src: 'assets/img/marca-exwill.png', alt: 'Exwill Conveyor Belting' },
  { src: 'assets/img/marca-tapco.png', alt: 'Tapco Inc.' },
  { src: 'assets/img/marca-cmg.png', alt: 'CMG Heavy Duty Buckets' },
];

export const SECTORS = ['Agroindustria', 'Minería', 'Pesquería', 'Avícola', 'Molinería', 'Comercios', 'Servicios'];

export const SERVICES = [
  { id: 'servicio-mantenimiento', title: 'Mantenimiento de fajas transportadoras', img: 'assets/img/mantenimiento.webp', alt: 'Técnicos realizando mantenimiento a una faja transportadora' },
  { id: 'servicio-vulcanizado', title: 'Servicio de vulcanizado faja PVC-caucho', img: 'assets/img/vulcanizado.webp', alt: 'Prensa de vulcanizado sobre faja de PVC' },
  { id: 'servicio-cortina-pvc', title: 'Instalación de cortina PVC', img: 'assets/img/cortina-pvc.webp', alt: 'Técnico instalando una cortina de PVC' },
  { id: 'servicio-polea', title: 'Recubrimiento de polea', img: 'assets/img/polea.webp', alt: 'Polea con recubrimiento de caucho' },
  { id: 'servicio-empalme', title: 'Empalme de dedos vulcanizado', img: 'assets/img/empalme.webp', alt: 'Máquina de empalme de dedos' },
];

export const PRODUCTS = [
  { id: 'producto-banda-modular', title: 'Banda modular', img: 'assets/img/banda-modular.webp', alt: 'Banda modular blanca transportando fruta' },
  { id: 'producto-banda-sanitaria', title: 'Banda sanitaria', img: 'assets/img/banda-sanitaria.webp', alt: 'Operarias seleccionando paltas sobre banda sanitaria azul' },
  { id: 'producto-faja-elevadores', title: 'Faja para elevadores y molinos', img: 'assets/img/faja-elevadores.webp', alt: 'Rollo de faja para elevadores' },
  { id: 'producto-faja-trotadoras', title: 'Línea de faja para trotadoras de gimnasio y supermercado', img: 'assets/img/faja-trotadoras.webp', alt: 'Faja negra para trotadora' },
  { id: 'producto-pegamentos', title: 'Pegamentos para caucho y PVC', img: 'assets/img/pegamentos.webp', alt: 'Envases de pegamento para faja' },
  { id: 'producto-cangilones', title: 'Cangilones y pernos', img: 'assets/img/cangilones.webp', alt: 'Cangilones blancos con granos' },
  { id: 'producto-cortina-lama', title: 'Cortinas de PVC lama', img: 'assets/img/cortina-lama.webp', alt: 'Montacargas cruzando una cortina de PVC lama' },
  { id: 'producto-grapas', title: 'Grapas y herramientas Flexco', img: 'assets/img/grapas.webp', alt: 'Herramienta Flexco cortando una faja' },
  { id: 'producto-empaquetaduras', title: 'Empaquetaduras', img: 'assets/img/empaquetaduras.webp', alt: 'Planchas de empaquetadura' },
];
