# AGENTS.md — VitalFlour

## Misión
Construir una landing page conceptual de VitalFlour con alta calidad visual, fidelidad a la identidad de marca y código mantenible.

## Fuente de verdad
Lee y respeta:
- `docs/DESIGN_BRIEF.md`
- `docs/ASSET_INVENTORY.md`
- `docs/CODEX_SPEC.md`

Si una instrucción de una tarea contradice estos documentos, señala la contradicción y solicita confirmación antes de cambiar decisiones de producto o marca.

## Reglas de marca
- Conservar el logotipo suministrado.
- Mantener la dirección verde bosque, crema y dorado trigo.
- Los sabores son arracacha y choclo.
- Las presentaciones son 15 g, 400 g y 1 kg.
- No inventar contenido corporativo, precios, datos nutricionales ni claims de salud.

## Reglas de implementación
- Inspeccionar antes de modificar.
- Mantener TypeScript estricto.
- Componentes reutilizables y responsabilidades claras.
- No añadir dependencias sin necesidad.
- Evitar efectos pesados y animaciones que perjudiquen accesibilidad.
- Respetar `prefers-reduced-motion`.
- Diseño mobile-first.
- No implementar pagos, checkout real ni suscripciones reales.

## Reglas de assets
- No reemplazar el logo.
- No presentar imágenes de referencia como producto oficial.
- No inventar tablas nutricionales, sellos, QR ni códigos de barras.
- Usar placeholders claramente identificados si faltan recursos finales.
- Optimizar imágenes y usar formatos adecuados para web.

## Validación obligatoria
Ejecutar los scripts disponibles de lint, typecheck y build. Probar navegación, selector de variantes, responsive y accesibilidad básica. Informar qué se ejecutó realmente y qué quedó pendiente.
