# Diseño aprobado e implementación

## Referencia

Se conserva la propuesta editorial aprobada y la revisión de suscripciones con tres tarjetas debajo del banner (`subscriptions-approved.png`). La landing mantiene este orden: navegación, hero, historia, productos, banner de suscripciones, tres planes y footer.

## Sistema visual

- Verde bosque `#304C3A`, crema `#F5ECD8`, dorado trigo `#CBA36B`, beige `#E7D9BE`, marrón `#805B39` y blanco cálido `#FCFAF4`.
- Cormorant Garamond para titulares y notas editoriales; Manrope para controles y lectura.
- Márgenes móviles de 20 px; ancho máximo de contenido 1320 px.
- Radios de controles 8–9 px y tarjetas 15 px; separadores finos dorados.
- Primera tarjeta verde, otras dos claras, con botones de consulta.
- Hero móvil con composición específica de los dos empaques.

## Recursos

El logo de `public/assets/brand/logo-original.png` es una copia binaria del original suministrado. El nombre VitalFlour junto al símbolo es texto de interfaz separado, no una sustitución del archivo original.

Las seis imágenes WebP se generaron con la herramienta integrada Image Gen a partir de las referencias aprobadas. Los prompts solicitaron fotografías independientes sin controles ni textos web: dos empaques con arracacha y choclo para hero; composición cuadrada de ingredientes; un empaque por sabor para catálogo; bodegón sobre verde para suscripciones; adaptación cuadrada del hero para móvil. Se conservaron colores y nombres, excluyendo pesos no validados, claims, tablas nutricionales, sellos, QR y códigos de barras.

`asset-manifest.json` registra rutas, dimensiones y bytes. `scripts/prepare-assets.mjs` permite repetir la conversión a WebP desde los PNG generados. Estos PNG de origen permanecen fuera del proyecto; todos los recursos que consume la aplicación están dentro de `public/assets`.

## Adaptaciones necesarias

- Logo original en navegación/footer, en lugar de las aproximaciones rasterizadas de los bocetos.
- Texto marrón en lugar de dorado claro para asegurar legibilidad sobre crema.
- Controles HTML reales, radios con teclado y diálogos nativos con foco restaurado.
- Los nombres Plan 01, 02 y 03 son provisionales; no se inventan beneficios.
- Los tamaños comparten imagen conceptual por sabor. El diseño final de cada tamaño y la especificación de 15 g siguen pendientes.
- Las consultas abren un aviso local: no existen canales oficiales proporcionados y no se simula envío.
- CSS y Web Animations, sin Motion/GSAP/Tailwind: el layout y las transiciones no requieren esas dependencias para reproducir el concepto.

## Comparación visual

Se contrastaron los bocetos y las capturas del navegador: orden de secciones, jerarquía de titulares, paleta crema/verde, protagonismo del packaging, distribución del catálogo, conservación del banner y fila de tres tarjetas. Se ajustaron la escala del encabezado, altura del banner, integración de bordes de las fotografías y fotografía móvil.

La reproducción de fotografía generada no es pixel a pixel: los renders independientes tienen pequeñas diferencias de perspectiva respecto al boceto. No son artes finales de packaging. La implementación conserva la composición y los contenidos aprobados sin afirmar fidelidad exacta de los renders.
