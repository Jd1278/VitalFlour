import { Brand } from "./Brand";

export function Footer() {
  return <footer id="contacto" className="site-footer page-width">
    <div className="footer-grid"><Brand />
      <nav aria-label="Navegación del pie de página">
        <a href="#inicio">Inicio</a><a href="#historia">Nuestra historia</a><a href="#productos">Productos</a><a href="#recetas">Recetas</a>
        <a href="#opiniones">Testimonios</a>
      </nav>
      <div className="contact-copy"><h2>Contacto</h2><p>Datos ficticios de muestra</p><p>Teléfono · +57 000 000 0001<br />WhatsApp · +57 000 000 0002<br />Instagram · @vitalflour.demo</p></div>
    </div>
    <p className="footer-note">Sitio conceptual · Catálogo de premezclas</p>
  </footer>;
}

