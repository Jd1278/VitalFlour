# VitalFlour

Landing conceptual de premezclas de arracacha y choclo, basada en el diseño aprobado. Incluye catálogo de seis variantes y tres propuestas de suscripción. No procesa pagos, pedidos ni suscripciones reales.

## Desarrollo

Requiere Node.js 20.9 o posterior y npm.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:3000. Las fuentes se sirven localmente; no requiere claves API ni servicios externos.

## Validación y vista de producción

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`build` genera la exportación estática en `out/`. `start` la sirve localmente, sin instalar otro servidor. Detener primero `dev` si usa el mismo puerto. Para otro puerto en PowerShell: `$env:PORT=3001; npm start`.

## Organización

- `src/app`: página, metadatos y sistema visual.
- `src/sections`: hero, historia, catálogo y suscripciones.
- `src/components`: navegación, logo, movimiento y diálogo informativo accesible.
- `src/data/products.ts`: sabores, tamaños y seis variantes.
- `public/assets`: logo original y fotografías conceptuales optimizadas.
- `docs/design`: referencia aprobada, inventario de imágenes y decisiones.
- `docs/IMPLEMENTATION_QA.md`: verificaciones realizadas y límites.

Se usan Next.js App Router, React y TypeScript estricto. CSS y Web Animations cubren este diseño sin dependencias adicionales de animación; se respeta `prefers-reduced-motion`. El parallax se limita a escritorio, sin bloquear el scroll.

El logo original se conserva sin cambios. Los renders son conceptuales por sabor y se reutilizan para los tamaños todavía pendientes de arte final. Historia, contacto, precios y condiciones siguen pendientes de contenido oficial. Los botones muestran una consulta informativa local y no envían datos.
