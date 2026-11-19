import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitalFlour · Premezclas de arracacha y choclo",
  description: "Explora VitalFlour: premezclas de arracacha y choclo en presentaciones de 40 g, 400 g y 1 kg. Catálogo conceptual.",
  robots: { index: false, follow: false },
  icons: { icon: "/assets/brand/logo-original.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
