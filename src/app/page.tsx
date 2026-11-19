import { IntroVideo } from "@/components/IntroVideo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Products } from "@/sections/Products";
import { Subscriptions } from "@/sections/Subscriptions";

export default function Home() {
  return <><IntroVideo /><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />
    <main id="contenido" tabIndex={-1}><Hero /><About /><Products /><Subscriptions /></main><Footer /></>;
}

