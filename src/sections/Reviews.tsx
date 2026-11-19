const testimonials = [
  { name: "Carlos Mendoza", initials: "CM", role: "Paciente con Diabetes Tipo 1", text: "Calcular a ojo los carbohidratos de una arepa o una colada siempre me genera miedo a un pico de glucosa o a errar en mi dosis de insulina. Tener sobres medidos con 15 g exactos me daría una tranquilidad enorme para volver a comer lo tradicional sin hacer cuentas difíciles." },
  { name: "Laura Valdivieso", initials: "LV", role: "Nieta y cuidadora", text: "En mi casa los domingos siempre tocaba cocinarle aparte a mi abuelo mientras los demás comíamos arepa de choclo o colada. Un producto así nos cambiaría los almuerzos: por fin podríamos preparar una sola receta y verlo disfrutar en la mesa con todos nosotros." },
  { name: "Dra. Diana Rueda", initials: "DR", role: "Nutricionista Clínica", text: "En consulta vemos que muchos adultos mayores abandonan alimentos de su cultura por falta de precisión nutricional, y las alternativas actuales suelen ser costosas o poco apetecibles. Una harina andina fortificada, sin sellos y estandarizada por porción sería una gran herramienta para recomendar." },
];

export function Reviews() {
  return <section id="opiniones" className="reviews-section page-width" aria-labelledby="review-title">
    <div className="section-heading"><h2 id="review-title">Testimonios</h2></div>
    <div className="testimonials">{testimonials.map(({ name, initials, role, text }) =>
      <figure className="testimonial" key={name}>
        <figcaption><span className="initials" aria-hidden="true">{initials}</span><div><strong>{name}</strong><span className="testimonial-role">{role}</span></div></figcaption>
        <blockquote>«{text}»</blockquote>
      </figure>)}</div>
  </section>;
}
