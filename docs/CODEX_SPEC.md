# Catálogo actualizado — 19 de noviembre de 2026

El usuario confirmó las presentaciones **40 g, 250 g y 400 g**, sustituyendo la lista anterior. El selector inicia en 40 g y usa las imágenes suministradas sobre-40g.jpeg, pack-250g.png y pack-400g.png según tamaño, para ambos sabores. Se retiran la consulta de presentación y su leyenda conceptual en Productos, y la nota conceptual del footer. Las imágenes de historia, hero y recetas se actualizan con los archivos suministrados; el manifiesto técnico está en docs/design/assets-update-2026-11-19.json.

---

# Actualización aprobada — 19 de noviembre de 2026

El usuario confirmó que la presentación pequeña es de **40 g de producto**, en sustitución de los 15 g indicados en la especificación original de abajo. Las presentaciones vigentes son 40 g, 400 g y 1 kg. Los 15 g de carbohidratos citados en las recetas no son el peso del sobre. El usuario declaró aprobados los datos suministrados para las dos recetas y autorizados los tres testimonios reales; esta implementación reproduce ese contenido sin verificación documental independiente. No se añaden sabores al catálogo.

---

# VitalFlour — Codex Implementation Specification

**Versión:** 1.0  
**Estado:** Especificación inicial para implementar un prototipo frontend conceptual.  
**Producto:** Landing page de VitalFlour.

## 1. Rol del agente

Actúa como ingeniero frontend senior y diseñador de interfaces especializado en experiencias de marca premium. Trabaja de forma guiada por especificaciones. Antes de implementar, inspecciona el repositorio, identifica el stack existente y presenta un plan breve. No reemplaces configuraciones ni dependencias sin justificarlo.

## 2. Objetivo

Implementar una landing page responsive para VitalFlour, marca de premezclas alimenticias en sabores arracacha y choclo, con tres tamaños comerciales indicados: 15 g, 400 g y 1 kg.

La web es conceptual. No integrar pasarela de pago, backend de pedidos, autenticación ni suscripciones reales.

## 3. Stack preferido

- Next.js con App Router.
- React.
- TypeScript estricto.
- Tailwind CSS.
- Motion para animaciones de interfaz.
- GSAP + ScrollTrigger únicamente si el parallax requiere una secuencia avanzada.
- Lucide para iconografía.
- Playwright para comprobaciones visuales y funcionales, si el entorno lo permite.

Primero verifica versiones y dependencias existentes. No actualices el stack automáticamente.

## 4. Especificación de páginas y secciones

Implementar una única página principal con estas secciones:

1. Navbar.
2. Hero.
3. Quiénes somos.
4. Productos.
5. Planes de suscripción.
6. Footer.

### Navbar
- Logo original.
- Navegación por anclas.
- CTA de exploración.
- Sticky header discreto.
- Menú móvil accesible.

### Hero
- Fondo crema.
- Producto como foco visual.
- Mostrar arracacha y choclo.
- Titular editorial y descripción breve.
- CTA a productos.
- Entrada por capas y parallax sutil.
- No inventar claims de salud.

### Quiénes somos
- Layout editorial con imagen y texto.
- Usar copy provisional marcado como pendiente si no se ha recibido historia oficial.
- No inventar fundadores, fechas, certificaciones o procedencia.

### Productos
Crear un modelo de datos para dos sabores y tres tamaños:

```ts
type Flavor = "arracacha" | "choclo";
type PackageSize = "15g" | "400g" | "1kg";

type ProductVariant = {
  id: string;
  flavor: Flavor;
  size: PackageSize;
  displayName: string;
  weightLabel: string;
  image: string;
  description?: string;
  price?: number;
};
```

- Total esperado: seis variantes.
- Selector de sabor y tamaño.
- Estados visuales de selección.
- Mostrar imagen, nombre y peso.
- No inventar precios.
- Si faltan imágenes finales, usar placeholders locales claramente identificados; no hacer pasar referencias genéricas por el producto real.
- CTA conceptual: “Consultar presentación”.

### Planes de suscripción
- Presentar una sección visual de planes.
- Son conceptos de suscripción, no suscripciones funcionales.
- No inventar precio, frecuencia, ahorro, cantidades, envío ni condiciones.
- Usar etiquetas “Por definir” donde corresponda.
- CTA “Solicitar información” sin simular una contratación.

### Footer
- Logo.
- Enlaces internos.
- Datos de contacto únicamente si se suministran.
- No inventar redes sociales ni información legal.

## 5. Diseño y tokens

Usar como base:

```css
:root {
  --color-forest: #304C3A;
  --color-cream: #F5ECD8;
  --color-wheat: #CBA36B;
  --color-beige: #E7D9BE;
  --color-earth: #805B39;
  --color-warm-white: #FCFAF4;
}
```

Estos valores son aproximados y deben ajustarse a la imagen original del logo.

- Titulares: Cormorant Garamond.
- UI/body: Manrope.
- Espaciado generoso.
- Bordes suaves y radios consistentes.
- Sombras sutiles.
- Evitar gradientes genéricos, glassmorphism excesivo y estética de plantilla.

## 6. Animaciones

- Motion para reveal, hover y transiciones.
- GSAP ScrollTrigger solo para parallax complejo.
- Animar `transform` y `opacity` preferentemente.
- Implementar `prefers-reduced-motion`.
- En móvil reducir o desactivar parallax.
- Nunca bloquear scroll ni introducir scroll-jacking.
- No permitir que animaciones oculten contenido esencial.

## 7. Arquitectura sugerida

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── ui/
│   └── motion/
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   └── SubscriptionPlans.tsx
├── data/
│   └── products.ts
└── lib/
    └── motion.ts
```

Adapta esta estructura al repositorio existente; no reorganices innecesariamente.

## 8. Restricciones críticas

- No integrar pagos ni checkout real.
- No crear suscripciones reales.
- No inventar precios ni condiciones.
- No inventar claims nutricionales, médicos o regulatorios.
- No afirmar que el producto previene, trata o controla diabetes.
- No crear tablas nutricionales, sellos, QR o códigos de barras ficticios.
- No modificar el logo original.
- No usar imágenes de stock como si fueran el packaging oficial.
- Mantener los textos comerciales en español.

## 9. Validación y Definition of Done

Antes de declarar finalizado:

- Ejecutar lint, typecheck y build disponibles.
- Revisar enlaces y navegación por anclas.
- Verificar selector de sabor/tamaño.
- Probar menú móvil.
- Probar resoluciones móvil, tablet y escritorio.
- Revisar contraste, foco y navegación por teclado.
- Verificar `prefers-reduced-motion`.
- Comprobar ausencia de errores de consola.
- Revisar que no existan imágenes rotas.
- Tomar capturas de pantalla y compararlas con el Design Brief.
- Entregar un resumen de archivos modificados, comandos ejecutados, resultados y pendientes.

No afirmar que una prueba pasó si no se ejecutó.

## 10. Proceso de trabajo obligatorio

1. Inspeccionar el repositorio y reportar stack, scripts y estado.
2. Identificar assets disponibles y vacíos.
3. Proponer plan de implementación por componentes.
4. Esperar aprobación antes de cambios estructurales grandes.
5. Implementar por secciones.
6. Validar visualmente cada sección.
7. Ejecutar pruebas técnicas.
8. Entregar informe de QA y lista de pendientes.

## 11. Preguntas bloqueantes antes del packaging final

El PDF de referencia muestra caja de 400 g con 10 sobres de 40 g. También muestra “15 g de carbohidratos por porción”. El tamaño comercial pequeño definido para la web es 15 g.

Antes de diseñar el empaque final de 15 g, confirmar si 15 g es el peso neto del sobre o si se refiere a una porción/carbohidratos. Confirmar también si el empaque de 400 g conserva 10 sobres de 40 g.

Los renders pueden avanzar como concepto visual sin imprimir información técnica no confirmada.
