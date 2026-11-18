import Image from "next/image";
import { Inquiry } from "@/components/Inquiry";
import { Reveal } from "@/components/Motion";

function PendingDetails({ plans = false }: { plans?: boolean }) {
  return <dl className="pending-details">{(plans ? ["Frecuencia", "Presentaciones", "Condiciones"] : ["Frecuencia", "Precio", "Condiciones"]).map(label =>
    <div key={label}><dt>{label}</dt><dd>Por definir</dd></div>)}</dl>;
}

export function Subscriptions() {
  return <section id="suscripciones" aria-labelledby="subscriptions-title">
    <div className="subscription-banner">
      <div className="banner-inner page-width">
        <Reveal className="banner-copy">
          <h2 id="subscriptions-title">Suscripciones</h2>
          <p className="banner-subtitle">Una propuesta para seguir disfrutando VitalFlour.</p>
          <p className="concept-label">Propuesta conceptual</p>
          <PendingDetails />
          <Inquiry subject="Planes de suscripción VitalFlour" tone="cream">Solicitar información</Inquiry>
        </Reveal>
        <figure className="banner-figure">
          <Image src="/assets/hero/subscription.webp" width={1200} height={900} alt="Dos empaques conceptuales VitalFlour con arracacha y choclo sobre piedra y lino" sizes="(min-width: 768px) 55vw, 100vw" />
          <figcaption>Visualización conceptual del empaque</figcaption>
        </figure>
      </div>
    </div>
    <div className="plans-section page-width" aria-labelledby="plans-title">
      <div className="section-heading"><h2 id="plans-title">Conoce nuestros planes</h2>
        <p>Tres propuestas conceptuales. Nombres y condiciones por definir.</p></div>
      <div className="plans-grid">{["01", "02", "03"].map((number, index) =>
        <Reveal key={number}><article className={`plan-card ${index === 0 ? "plan-featured" : ""}`} aria-labelledby={`plan-${number}`}>
          <h3 id={`plan-${number}`}>Plan {number}</h3><p>Propuesta conceptual</p>
          <p className="plan-price">Precio por definir</p>
          <PendingDetails plans />
          <Inquiry subject={`Plan ${number} · Propuesta conceptual`} tone={index === 0 ? "wheat" : "forest"}>Solicitar información</Inquiry>
        </article></Reveal>)}</div>
    </div>
  </section>;
}
