# Validación de la primera implementación

Fecha: 18 de noviembre de 2026.

## Comandos ejecutados

- `npm install`: instalación completada; auditoría de instalación sin vulnerabilidades reportadas.
- `npm run lint`: sin errores.
- `npm run typecheck`: sin errores, TypeScript estricto.
- `npm run build`: exportación estática completada. El primer intento compiló pero encontró EPERM de Windows creando una carpeta en `out/`; la ejecución autorizada fuera del sandbox completó la exportación. También se reconstruyó tras los ajustes finales.
- `npm run dev`: desarrollo local verificado.
- `PORT=3001 npm start` (equivalente PowerShell): exportación final servida localmente y abierta en el navegador integrado.

## Comprobaciones en navegador integrado

- Navegación por anclas Inicio, Nuestra historia, Productos, Suscripciones y Contacto.
- Seis combinaciones arracacha/choclo × 15 g/400 g/1 kg: nombre y presentación actualizados.
- Cambio de radios con flechas del teclado; foco visible comprobado.
- Diálogo de producto con sabor y tamaño actuales, cierre por Escape y retorno del foco al botón.
- Los tres planes abren su propia consulta informativa; ningún envío o cobro real.
- Menú móvil: apertura, cierre por Escape y cierre al navegar.
- Inspección a 390, 768 y 1440 px; comprobaciones adicionales a 320 y 1024 px.
- Se corrigió el desbordamiento de tarjetas a 320 px. Resultado final: ancho de documento 305 px igual al área útil de 305 px; a 390 px, 375/375; escritorio 1425/1425.
- Imágenes cargadas; sin errores ni advertencias de consola observados.
- Hero móvil usa su propia imagen; parallax desactivado en móvil (transform `none`).
- Reglas `prefers-reduced-motion` presentes en CSS servido; ramas de Web Animations revisadas en código. No se cambió la preferencia del sistema ni se emuló en navegador, por lo que la prueba dinámica de esta preferencia queda pendiente.
- Contrastes calculados: verde/crema 8.05:1; marrón/crema 5.15:1; verde oscuro/dorado 5.04:1.
- SHA-256 idéntico entre logo suministrado y archivo servido.

## Evidencia y comparación

Capturas finales en `docs/design/desktop-implemented.jpg`, `mobile-implemented.jpg` y `subscriptions-implemented.jpg`. Se revisaron con `view_image`, comparándolas con los conceptos aprobados. Ver `docs/design/IMPLEMENTATION_NOTES.md` para decisiones y diferencias intencionales.

Las capturas del navegador integrado presentan suavizado/compresión propios de la captura. El código usa fuentes locales y texto HTML real. No se declara equivalencia pixel a pixel de los renders generados.

## Pendiente

- Confirmar presentación pequeña de 15 g y composición comercial de 400 g.
- Sustituir conceptos por artes finales específicos de las seis variantes.
- Recibir historia oficial, contacto, nombres y condiciones de planes.
- Prueba dinámica con movimiento reducido, lector de pantalla, Safari/Firefox y móvil físico de gama media; medición de rendimiento en dispositivo real.

Esta entrega es local. No se publicó el proyecto ni se habilitaron pagos, pedidos, backend o suscripciones reales.

## Actualización de assets, recetas y testimonios — 19 de noviembre de 2026

- Sustituida imagen de Nuestra historia por pack-40g; añadidas fotos WebP de arepa y colada conservando originales.
- Recetas completas suministradas en tarjetas con detalles nativos accesibles; testimonios sustituidos sin inventar puntuaciones.
- Presentación pequeña actualizada a 40 g en catálogo y metadatos, tras confirmación del usuario; aprobación registrada al inicio de los documentos de referencia.
- Ejecutados lint, typecheck y build correctamente.
- Navegador: apertura/cierre de receta por Enter, apertura de colada por clic, selección Choclo + 40 g, menú móvil y enlace Recetas comprobados.
- Imágenes nuevas cargadas sin errores; consola sin errores ni advertencias en la consulta realizada.
- Capturas inspeccionadas a 390 y 1440 px; ancho del documento 375 y 1425 px respectivamente, sin desbordamiento horizontal. Foco visible del desplegable comprobado.
- Pendientes: prueba específica de tablet, todas las combinaciones del selector, lector de pantalla y emulación de movimiento reducido. No se realizó validación independiente de las afirmaciones suministradas.

### Sustitución por fotografía ancha de arepa
- Fuente encontrada: Assets/arepa-de-choclo-ancha.png (no .jpg); copia WebP de 1200 × 896 y 168174 bytes.
- Tarjeta actualizada para usar el archivo nuevo y sus dimensiones reales.
- Imagen optimizada inspeccionada visualmente. Lint, typecheck y build ejecutados correctamente.
- No se repitieron pruebas interactivas o responsive para esta sustitución puntual; se conserva el componente previamente probado.

## Catálogo e imágenes actualizadas
- Presentaciones confirmadas por el usuario: 40 g, 250 g y 400 g; selección inicial 40 g.
- Imágenes por tamaño verificadas en navegador en las seis combinaciones de sabor/tamaño. Cambio con flechas del teclado comprobado.
- Imágenes nuevas en historia, hero (móvil y escritorio) y recetas; todas cargadas en navegador. Manifiesto: docs/design/assets-update-2026-11-19.json.
- Botón Consultar presentación y leyenda conceptual retirados de Productos; nota Sitio conceptual retirada del footer, verificado en DOM.
- Separado el texto del hero de la fotografía en escritorio para conservar legibilidad con la nueva composición.
- Menú móvil abre y cierra al navegar. Anchos comprobados: 390, 768 y 1440 px, sin desbordamiento horizontal. Capturas móvil y escritorio inspeccionadas.
- Consola sin errores o advertencias observados. Lint, typecheck y build correctos; build repetido tras ajuste final de CSS.
- Pendientes: lector de pantalla, emulación de movimiento reducido y pruebas en dispositivos físicos.

## Restauración del hero y bolsa de 40 g
- Restauradas las imágenes originales del hero y su disposición anterior; retiradas las leyendas de sabores y visualización conceptual.
- Imagen de 40 g sustituida por el archivo suministrado Assets/bolas-40g.png (nombre encontrado), convertido a bolsa-40g.webp. Retirado el texto fijo de presentación individual.
- Lint, typecheck y build completados correctamente.
- Navegación a Productos y selección de 250 g, 400 g y 40 g verificadas en navegador; captura del hero original y captura móvil inspeccionadas. A 390 px no hay desbordamiento horizontal; consola sin errores ni advertencias observados.
- No se repitieron pruebas de lector de pantalla ni movimiento reducido.
