# VitalFlour — Asset Inventory

**Versión:** 1.0  
**Estado:** Inventario planificado; los recursos definitivos aún deben producirse o ser suministrados.

## 1. Fuentes visuales disponibles

| Fuente | Uso | Estado |
|---|---|---|
| Imagen del logotipo VitalFlour suministrada en el chat | Identidad principal | Disponible |
| `VitalFlour_cajas Diseño.pdf` (7 páginas) | Referencia conceptual de packaging | Disponible |
| Página 1 del PDF | Vista de dos cajas y línea de sabores | Referencia |
| Páginas 2–4 del PDF | Packaging arracacha: frente, lateral, ingredientes y reverso | Referencia |
| Páginas 5–7 del PDF | Packaging choclo: frente, lateral, ingredientes y reverso | Referencia |

## 2. Decisiones confirmadas

- Marca: VitalFlour.
- Categoría: premezclas alimenticias.
- Sabores: arracacha y choclo.
- Tamaños comerciales indicados por el usuario: 15 g, 400 g y 1 kg.
- El PDF es una referencia conceptual de packaging, no un catálogo de azúcar.
- La web es una landing page conceptual, sin pasarela de pago.
- Los planes se presentarán como planes de suscripción conceptuales.

## 3. Inventario por producir

| ID | Archivo sugerido | Contenido | Formato recomendado | Prioridad |
|---|---|---|---|---|
| B01 | `brand/vitalflour-logo-original.png` | Logo original sin alteraciones | PNG | Alta |
| B02 | `brand/vitalflour-logo.svg` | Vectorización fiel, si es viable | SVG | Media |
| B03 | `brand/favicon.png` | Símbolo reducido del logo | PNG/ICO | Media |
| H01 | `hero/hero-desktop.webp` | Composición hero con ambas variantes | WebP | Alta |
| H02 | `hero/hero-mobile.webp` | Composición adaptada a móvil | WebP | Alta |
| H03 | `hero/hero-background.webp` | Fondo/textura editorial | WebP | Media |
| P01 | `products/arracacha-15g.webp` | Empaque arracacha 15 g | WebP | Alta |
| P02 | `products/arracacha-400g.webp` | Empaque arracacha 400 g | WebP | Alta |
| P03 | `products/arracacha-1kg.webp` | Empaque arracacha 1 kg | WebP | Alta |
| P04 | `products/choclo-15g.webp` | Empaque choclo 15 g | WebP | Alta |
| P05 | `products/choclo-400g.webp` | Empaque choclo 400 g | WebP | Alta |
| P06 | `products/choclo-1kg.webp` | Empaque choclo 1 kg | WebP | Alta |
| I01 | `ingredients/arracacha.webp` | Arracacha fresca | WebP | Media |
| I02 | `ingredients/choclo.webp` | Choclo/maíz fresco | WebP | Media |
| I03 | `ingredients/ingredient-composition.webp` | Composición de ingredientes | WebP | Media |
| R01 | `recipes/recipe-01.webp` | Preparación real aprobada | WebP | Baja |
| D01 | `decorations/botanical-elements.svg` | Elementos botánicos decorativos | SVG | Baja |
| T01 | `textures/cream-paper.webp` | Textura sutil de papel | WebP | Baja |

## 4. Reglas de producción

1. El logo original debe conservar proporciones, colores y composición.
2. Los renders de packaging son conceptuales hasta recibir dielines y artes finales aprobados.
3. No generar etiquetas nutricionales, ingredientes, sellos, códigos de barras o QR ficticios.
4. No alterar el nombre del producto ni los sabores.
5. Mantener coherencia de iluminación, cámara y escala entre los seis empaques.
6. Preparar imágenes de escritorio y móvil para el hero.
7. Optimizar imágenes para web y documentar dimensiones, formato y peso.
8. Usar texto alternativo descriptivo.
9. No usar imágenes generadas como evidencia de certificaciones, resultados nutricionales o beneficios médicos.

## 5. Estructura esperada

```text
public/
└── assets/
    ├── brand/
    ├── hero/
    ├── products/
    │   ├── arracacha/
    │   └── choclo/
    ├── ingredients/
    ├── recipes/
    ├── decorations/
    └── textures/
```

## 6. Inconsistencia que requiere validación

El PDF muestra una caja con contenido neto de 400 g y 10 sobres de 40 g. También muestra el texto “15 g de carbohidratos por porción”. El usuario ha definido una presentación comercial pequeña de 15 g.

**No asumir que esos 15 g de carbohidratos son el peso neto del empaque.** Antes de crear el render definitivo de 15 g, confirmar si se trata de un sobre de 15 g de producto, una porción de 15 g u otra especificación. Confirmar también si la presentación de 400 g sigue siendo 10 sobres de 40 g.

## 7. Estado de assets

- [x] Logotipo de referencia recibido.
- [x] PDF conceptual de packaging recibido.
- [ ] Logo vectorial validado.
- [ ] Packaging final de arracacha en tres tamaños.
- [ ] Packaging final de choclo en tres tamaños.
- [ ] Hero desktop y móvil.
- [ ] Fotografías de ingredientes aprobadas.
- [ ] Fotografías de recetas aprobadas.
- [ ] Favicon.
