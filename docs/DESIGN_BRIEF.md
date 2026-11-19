# Actualización aprobada — 19 de noviembre de 2026

El usuario confirmó que la presentación pequeña es de **40 g de producto**, en sustitución de los 15 g indicados en la especificación original de abajo. Las presentaciones vigentes son 40 g, 400 g y 1 kg. Los 15 g de carbohidratos citados en las recetas no son el peso del sobre. El usuario declaró aprobados los datos suministrados para las dos recetas y autorizados los tres testimonios reales; esta implementación reproduce ese contenido sin verificación documental independiente. No se añaden sabores al catálogo.

---

# VitalFlour — Design Brief

**Versión:** 1.0  
**Estado:** Concepto aprobado para diseño; pendiente validar datos técnicos y comerciales del empaque de 15 g.  
**Tipo de proyecto:** Landing page conceptual de e-commerce, sin pasarela de pago.

## 1. Contexto del proyecto

VitalFlour es una marca de premezclas alimenticias con dos variantes de sabor: **arracacha** y **choclo**. La línea comercial contempla tres tamaños de empaque para cada variante:

- Pequeño: 15 g.
- Mediano: 400 g.
- Grande: 1 kg.

La experiencia web debe presentar la marca, explicar su propuesta de valor, exhibir los productos y comunicar planes de suscripción. El sitio es una propuesta conceptual: no debe procesar pagos, crear suscripciones reales ni solicitar información financiera.

## 2. Objetivo de diseño

Construir una landing page premium, cálida, moderna y memorable que combine identidad alimentaria natural con una presentación editorial de alta calidad. El impacto visual debe provenir de una composición cuidada, fotografía/render de producto, profundidad y animaciones moderadas; no de efectos decorativos indiscriminados.

## 3. Identidad visual

### Referencia principal

El logotipo proporcionado por el usuario es la fuente de verdad de la identidad. Debe conservarse sin redibujarlo ni reemplazarlo por un logo generado. El PDF `VitalFlour_cajas Diseño.pdf` es referencia conceptual de packaging: caja contenedora, identidad verde/crema/dorado, diferenciación de sabores, sobres individuales, tabla nutricional, código QR y presentación de producto.

### Paleta inicial

Los siguientes valores son una propuesta de trabajo aproximada, no una extracción colorimétrica oficial del logo:

| Token | Color | Hex | Uso |
|---|---|---|---|
| `forest` | Verde bosque | `#304C3A` | Navegación, titulares, fondos destacados |
| `cream` | Crema | `#F5ECD8` | Fondo principal |
| `wheat` | Dorado trigo | `#CBA36B` | Acentos, líneas, detalles |
| `beige` | Beige cálido | `#E7D9BE` | Superficies y fondos secundarios |
| `earth` | Marrón natural | `#805B39` | Detalles y textos secundarios |
| `warm-white` | Blanco cálido | `#FCFAF4` | Tarjetas y espacios de lectura |

Validar contraste WCAG para textos y controles; no usar dorado claro como texto pequeño sobre crema.

### Tipografía propuesta

- Titulares/editorial: Cormorant Garamond.
- Texto de interfaz: Manrope.
- Datos, etiquetas y botones: Manrope con peso 600–700.

La tipografía del logotipo no debe sustituirse por estas fuentes.

## 4. Dirección artística

**Territorio visual:** natural, premium, honesto, contemporáneo y gastronómico.

- Fondos crema y beige con espacios amplios.
- Verde bosque como ancla de marca.
- Dorado trigo en detalles controlados.
- Fotografía editorial de arracacha y choclo.
- Packaging como protagonista, con sombras suaves y perspectiva realista.
- Recursos botánicos discretos; evitar estética farmacéutica o de suplemento médico.
- Evitar clichés de salud, imágenes de pacientes o símbolos médicos.

## 5. Arquitectura de contenido

### 5.1 Navegación
- Logo.
- Inicio.
- Nuestra historia.
- Productos.
- Suscripciones.
- Contacto.
- CTA principal: “Explorar productos” o “Conocer planes”.
- Header sticky, con menú móvil accesible.

### 5.2 Hero
- Presentar VitalFlour y la categoría de premezclas.
- Mostrar los dos sabores y el packaging en una composición protagonista.
- Titular breve, subtítulo verificable y CTA hacia productos.
- Animación de entrada por capas y parallax sutil en escritorio.
- En móvil, sustituir el parallax pesado por una composición estática o movimiento reducido.

### 5.3 Quiénes somos
- Presentar propósito, historia y filosofía de marca.
- No inventar fundadores, trayectoria, certificaciones, origen geográfico ni procesos.
- Utilizar textos provisionales claramente marcados hasta recibir contenido oficial.

### 5.4 Productos
- Dos sabores: arracacha y choclo.
- Tres tamaños por sabor: 15 g, 400 g y 1 kg.
- Seis variantes de catálogo.
- Selector de sabor y tamaño.
- Cada variante debe mostrar nombre, peso neto confirmado, imagen y descripción aprobada.
- CTA conceptual: “Consultar presentación” / “Me interesa”. No simular una compra completada.

### 5.5 Planes de suscripción
- Comunicar visualmente la idea de suscripción.
- No activar suscripciones reales ni cobros.
- Mostrar planes como propuesta conceptual; precios, frecuencia, ahorro, entregas y condiciones quedan como “Por definir” hasta recibir datos aprobados.
- CTA: “Solicitar información” o “Conocer el plan”.
- No inventar porcentajes de descuento ni beneficios.

### 5.6 Footer
- Logo.
- Navegación secundaria.
- Canales de contacto solo cuando sean proporcionados.
- Redes sociales solo si existen URLs oficiales.
- Avisos legales y privacidad como enlaces provisionales, no páginas legales inventadas.

## 6. Motion design

Usar animación para reforzar jerarquía y narrativa:

- Entrada de hero por capas: fondo, titular, packaging y elementos botánicos.
- Reveal de secciones al entrar en viewport.
- Parallax muy sutil en elementos decorativos.
- Hover/focus de tarjetas de producto.
- Transiciones suaves entre variantes de producto.
- Microinteracciones de botones y navegación.

### Reglas
- Respetar `prefers-reduced-motion`.
- Evitar animar propiedades costosas cuando sea posible; preferir `transform` y `opacity`.
- No bloquear scroll ni usar scroll-jacking.
- No depender de animaciones para comunicar información.
- Limitar GSAP a secuencias complejas; Motion/CSS para el resto.
- Medir rendimiento en móvil de gama media.

## 7. Responsive y accesibilidad

- Mobile-first.
- Breakpoints coherentes con Tailwind.
- Navegación por teclado y foco visible.
- Contraste suficiente.
- Textos alternativos descriptivos.
- Controles con etiquetas accesibles.
- No transmitir información únicamente mediante color.
- Evitar parallax en dispositivos con movimiento reducido.

## 8. Restricciones de contenido y claims

La marca no debe presentarse como tratamiento, prevención o cura de enfermedades. No afirmar que el producto es “apto para diabéticos”, “controla la glucosa”, “sin azúcar”, “bajo índice glucémico”, “saludable” o “recomendado por médicos” sin evidencia documental y revisión regulatoria aplicable. Las declaraciones nutricionales deben provenir de la etiqueta aprobada.

## 9. Criterios de aceptación visual

- La identidad se reconoce como la del logo suministrado.
- Se distinguen claramente arracacha y choclo.
- Se representan los tres tamaños por sabor.
- El hero tiene jerarquía visual y producto protagonista.
- Las secciones son coherentes en escritorio y móvil.
- Los efectos no perjudican lectura, navegación ni rendimiento.
- No hay fotografías genéricas que se hagan pasar por el empaque real.
- No se inventan datos comerciales, nutricionales o corporativos.
