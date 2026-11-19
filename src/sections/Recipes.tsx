export function Recipes() {
  return <section id="recetas" className="recipe-section" aria-labelledby="recipe-title">
    <div className="page-width">
      <h2 id="recipe-title">Recetas</h2>
      <p className="recipe-intro">Dos ideas para llevar la arracacha y el choclo a la mesa.</p>
      <div className="recipe-grid">
        <article><h3>Arepitas de choclo</h3>
          <p>Para unas arepitas doradas, mezcla choclo tierno desgranado y triturado con harina de maíz precocida. Añade agua poco a poco hasta que la masa mantenga su forma.</p>
          <p>Forma discos delgados y cocínalos en una sartén ligeramente engrasada, a fuego medio, hasta que estén dorados por ambos lados y cocidos en el centro.</p>
        </article>
        <article><h3>Colada de arracacha</h3>
          <p>Pela y corta la arracacha en trozos pequeños. Cuécela en agua hasta que esté tierna y tritúrala con un poco del líquido de cocción.</p>
          <p>Vuelve a ponerla al fuego con leche y una rama de canela. Remueve hasta conseguir una textura cremosa, retira la canela y sirve caliente.</p>
        </article>
      </div>
    </div>
  </section>;
}
