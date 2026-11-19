const testimonials = [
  { name: "Sandra Molina", initials: "SM", score: 5, text: "El domingo hicimos arepitas de choclo con mi hija. Ella se encargó de darles forma y me dejó las más chiquitas para probarlas junto al fogón." },
  { name: "Julián Ríos", initials: "JR", score: 4, text: "Llegué buscando cómo preparar una colada de arracacha. Me gustó el toque de canela. La próxima vez la voy a dejar un poquito más espesa." },
  { name: "Elena Vargas", initials: "EV", score: 5, text: "En mi casa siempre discutimos cuál arepa queda mejor dorada. Esta vez mi nieto se quedó al lado de la sartén para escoger la suya." },
];

export function Reviews() {
  return <section id="opiniones" className="reviews-section page-width" aria-labelledby="review-title">
    <div className="section-heading"><h2 id="review-title">Testimonios</h2><p>Relatos ficticios para esta muestra de VitalFlour.</p></div>
    <div className="testimonials">{testimonials.map(({ name, initials, score, text }) =>
      <figure className="testimonial" key={name}>
        <figcaption><span className="initials" aria-hidden="true">{initials}</span><strong>{name}</strong></figcaption>
        <div className="testimonial-score" role="img" aria-label={score + " de 5 estrellas"}>
          {Array.from({ length: 5 }, (_, i) => <span key={i} aria-hidden="true" className={i >= score ? "unfilled" : undefined}>{i < score ? "★" : "☆"}</span>)}
        </div>
        <blockquote>«{text}»</blockquote>
      </figure>)}</div>
  </section>;
}
