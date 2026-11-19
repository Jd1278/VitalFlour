"use client";

import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";

export const navigation = [
  ["inicio", "Inicio"], ["historia", "Nuestra historia"], ["productos", "Productos"],
  ["recetas", "Recetas"], ["contacto", "Contacto"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    navigation.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => { observer.disconnect(); window.removeEventListener("resize", onResize); };
  }, []);
  return <header className="site-header" onKeyDown={event => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <div className="header-inner">
      <Brand />
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
        <span className={open ? "menu-lines is-open" : "menu-lines"} aria-hidden="true"><i /><i /><i /></span>
      </button>
      <nav id="primary-navigation" className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Navegación principal">
        {navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}
          onClick={() => { setOpen(false); setActive(id); }}>{label}</a>)}
      </nav>
    </div>
  </header>;
}
