export type Flavor = "arracacha" | "choclo";
export type PackageSize = "40g" | "400g" | "1kg";
export type ProductVariant = {
  id: string; flavor: Flavor; size: PackageSize; displayName: string; weightLabel: string; image: string;
};
export const flavors: Flavor[] = ["arracacha", "choclo"];
export const sizes: { id: PackageSize; label: string }[] = [
  { id: "40g", label: "40 g" }, { id: "400g", label: "400 g" }, { id: "1kg", label: "1 kg" },
];
// Final size-specific packaging is not approved. All sizes deliberately use a
// clearly labeled flavor concept, never a fabricated size-specific final render.
export const products: ProductVariant[] = flavors.flatMap(flavor => sizes.map(size => ({
  id: `${flavor}-${size.id}`, flavor, size: size.id, displayName: `Premezcla de ${flavor}`,
  weightLabel: size.label, image: `/assets/products/${flavor}.webp`,
})));
