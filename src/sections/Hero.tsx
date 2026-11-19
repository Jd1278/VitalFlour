import Image from "next/image";
import { Parallax } from "@/components/Motion";

export function Hero() {
  return <section id="inicio" aria-labelledby="hero-title" className="hero">
    <div className="hero-stage">
      <div className="hero-copy page-width">
        <h1 id="hero-title">VitalFlour</h1>
        <p className="hero-subtitle">Premezclas de arracacha y choclo</p>
        <p className="hero-description">Dos sabores. Tres presentaciones para explorar.</p>
        <a className="button button-forest" href="#productos">Explorar productos</a>
      </div>
      <figure className="hero-scene">
        <div className="hero-image"><Parallax><picture>
          <source media="(max-width: 767px)" srcSet="/assets/hero/hero-mobile.webp" width={800} height={800} />
          <Image src="/assets/hero/header-scene.webp" alt="Empaques conceptuales VitalFlour de arracacha y choclo, acompañados de sus ingredientes" width={1672} height={941} sizes="100vw" loading="eager" fetchPriority="high" />
        </picture></Parallax></div>
      </figure>
    </div>
  </section>;
}
