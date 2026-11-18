import { Brand } from "./Brand";

export function Footer() {
  return <footer id="contacto" className="site-footer page-width">
    <div className="footer-grid"><Brand />
      <nav aria-label="Navegación del pie de página">
        <a href="#inicio">Inicio</a><a href="#historia">Nuestra historia</a><a href="#productos">Productos</a><a href="#suscripciones">Suscripciones</a>
      </nav>
      <div className="contact-copy"><h2>Contacto</h2><p>Canales oficiales pendientes de confirmar.</p></div>
    </div>
    <p className="footer-note">Sitio conceptual · Sin compras ni suscripciones activas</p>
  </footer>;
}
