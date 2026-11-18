"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { flavors, sizes, products, type Flavor, type PackageSize } from "@/data/products";
import { Inquiry } from "@/components/Inquiry";
import { Reveal } from "@/components/Motion";

export function Products() {
  const [flavor, setFlavor] = useState<Flavor>("arracacha");
  const [size, setSize] = useState<PackageSize>("400g");
  const groupId = useId();
  const product = products.find(item => item.flavor === flavor && item.size === size)!;
  return <section id="productos" className="products-section page-width" aria-labelledby="products-title">
    <div className="section-heading"><h2 id="products-title">Nuestros productos</h2>
      <p>Arracacha y choclo en presentaciones de 15 g, 400 g y 1 kg.</p><span className="heading-rule" /></div>
    <Reveal className="product-grid">
      <figure className="product-figure">
        <Image key={flavor} className="product-image" src={product.image} width={1000} height={1000}
          alt={`Empaque conceptual de ${flavor}. La imagen no representa el tamaño final de ${product.weightLabel}.`} sizes="(min-width: 768px) 50vw, 100vw" />
        <figcaption>Visualización conceptual del empaque</figcaption>
      </figure>
      <div className="product-controls">
        <fieldset className="choice-group flavor-choices"><legend>Sabor</legend>
          {flavors.map(item => <label className="choice" key={item}>
            <input type="radio" name={`${groupId}-flavor`} value={item} checked={flavor === item} onChange={() => setFlavor(item)} />
            <span>{item === "arracacha" ? "Arracacha" : "Choclo"}</span>
          </label>)}
        </fieldset>
        <div aria-live="polite" aria-atomic="true" className="product-description">
          <h3>{product.displayName}</h3><p>Presentación seleccionada: <strong>{product.weightLabel}</strong></p>
        </div>
        <p>Selecciona un sabor y una presentación.</p>
        <fieldset className="choice-group size-choices"><legend>Presentación</legend>
          {sizes.map(item => <label className="choice" key={item.id}>
            <input type="radio" name={`${groupId}-size`} value={item.id} checked={size === item.id} onChange={() => setSize(item.id)} />
            <span>{item.label}</span>
          </label>)}
        </fieldset>
        <Inquiry subject={`${product.displayName} · ${product.weightLabel}`}>Consultar presentación</Inquiry>
        <p className="product-note">Presentación de 15 g pendiente de validación técnica.</p>
        <p className="asset-note">Imagen conceptual por sabor; diseño final de cada tamaño por confirmar.</p>
      </div>
    </Reveal>
    <div className="section-divider product-signature"><p>Dos sabores · Tres presentaciones</p></div>
  </section>;
}
