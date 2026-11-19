export type Flavor = "arracacha" | "choclo";
export type PackageSize = "40g" | "250g" | "400g";
export type ProductVariant = {
  id: string; flavor: Flavor; size: PackageSize; displayName: string; weightLabel: string; image: string | null; width: number; height: number;
};
export const flavors: Flavor[] = ["arracacha", "choclo"];
export const sizes: { id: PackageSize; label: string }[] = [
  { id: "40g", label: "40 g" },
  { id: "250g", label: "250 g" },
  { id: "400g", label: "400 g" },
];
const productImages: Record<Flavor, Record<PackageSize, string | null>> = {
  arracacha: {
    "40g": "/assets/products/arracacha-40g.webp",
    "250g": null,
    "400g": "/assets/products/arracacha-400g.webp",
  },
  choclo: {
    "40g": "/assets/products/choclo-40g.webp",
    "250g": "/assets/products/choclo-250g.webp",
    "400g": "/assets/products/choclo-400g.webp",
  },
};

export const products: ProductVariant[] = flavors.flatMap(flavor => sizes.map(size => ({
  id: `${flavor}-${size.id}`, flavor, size: size.id, displayName: `Premezcla de ${flavor}`,
  weightLabel: size.label, image: productImages[flavor][size.id], width: 1200, height: 896,
})));
