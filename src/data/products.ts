export type Flavor = "arracacha" | "choclo";
export type PackageSize = "40g" | "250g" | "400g";
export type ProductVariant = {
  id: string; flavor: Flavor; size: PackageSize; displayName: string; weightLabel: string; image: string; width: number; height: number;
};
export const flavors: Flavor[] = ["arracacha", "choclo"];
export const sizes: { id: PackageSize; label: string; image: string; width: number; height: number }[] = [
  { id: "40g", label: "40 g", image: "/assets/products/bolsa-40g.webp", width: 1200, height: 900 },
  { id: "250g", label: "250 g", image: "/assets/products/pack-250g.webp", width: 1200, height: 900 },
  { id: "400g", label: "400 g", image: "/assets/products/pack-400g.webp", width: 1200, height: 896 },
];
// User-supplied images are shared by both flavors and selected by package size.
export const products: ProductVariant[] = flavors.flatMap(flavor => sizes.map(size => ({
  id: `${flavor}-${size.id}`, flavor, size: size.id, displayName: `Premezcla de ${flavor}`,
  weightLabel: size.label, image: size.image, width: size.width, height: size.height,
})));
