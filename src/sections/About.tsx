import Image from "next/image";
import { Reveal } from "@/components/Motion";

export function About() {
  return <section id="historia" className="about-section page-width" aria-labelledby="about-title">
    <div className="section-divider"><h2 id="about-title">Nuestra historia</h2></div>
    <Reveal className="about-grid">
      <Image className="about-image" src="/assets/ingredients/ingredients.webp" width={1000} height={1000} alt="Composición conceptual de arracacha fresca y choclo sobre lino" sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="about-copy">
        <h3>Nuestra<br />historia</h3>
        <p>Un espacio para conocer VitalFlour.</p>
        <p className="editorial-note">Historia y filosofía de marca pendientes de contenido oficial.</p>
        <div className="ingredient-signature"><span />Arracacha y choclo<span /></div>
      </div>
    </Reveal>
  </section>;
}
