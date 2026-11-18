import Image from "next/image";

export function Brand() {
  return <a className="brand" href="#inicio" aria-label="VitalFlour, inicio">
    <Image src="/assets/brand/logo-original.png" width={68} height={68} alt="" priority />
    <span aria-hidden="true"><span className="brand-gold">Vital</span>Flour</span>
  </a>;
}
