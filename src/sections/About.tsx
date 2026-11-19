import Image from "next/image";
import { Reveal } from "@/components/Motion";

export function About() {
  return <section id="historia" className="about-section page-width" aria-labelledby="about-title">
    <div className="section-divider"><h2 id="about-title">Nuestra historia</h2></div>
    <Reveal className="about-grid">
      <Image className="about-image" src="/assets/products/pack-40g.webp" width={1000} height={1000} alt="Presentación de VitalFlour en sobres de 40 g" sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="about-copy">
        <h3>De Bucaramanga para toda la familia.</h3>
        <p>En nuestra tierra la comida es memoria. Una arepa o una colada reúne a abuelos, hijos y nietos alrededor de la misma mesa.</p>
        <p className="editorial-note">VitalFlour nació en Santander para compartir esas recetas de siempre, con arracacha y choclo colombiano.</p>
        <div className="ingredient-signature"><span />Arracacha y choclo<span /></div>
      </div>
    </Reveal>
  </section>;
}
