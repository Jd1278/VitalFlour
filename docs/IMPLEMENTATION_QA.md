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
