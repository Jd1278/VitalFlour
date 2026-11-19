import Image from "next/image";
import { recipes } from "@/data/recipes";

export function Recipes() {
  return <section id="recetas" className="recipe-section" aria-labelledby="recipe-title">
    <div className="page-width">
      <h2 id="recipe-title">Nuestras recetas</h2>
      <p className="recipe-intro">Dos ideas para llevar la arracacha y el choclo a la mesa.</p>
      <div className="recipe-grid">{recipes.map(recipe =>
        <article key={recipe.id} aria-labelledby={`${recipe.id}-title`}>
          <Image className="recipe-image" src={recipe.image} width={recipe.width} height={recipe.height} alt={recipe.alt} sizes="(min-width: 768px) 45vw, 90vw" />
          <div className="recipe-copy">
            <p className="recipe-category">{recipe.category}</p>
            <h3 id={`${recipe.id}-title`}>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <dl className="recipe-facts">
              <div><dt>Porciones</dt><dd>{recipe.servings}</dd></div>
              <div><dt>Tiempo de preparación</dt><dd>{recipe.time}</dd></div>
              <div><dt>Aporte por porción</dt><dd>{recipe.nutrition}</dd></div>
            </dl>
            <details className="recipe-details">
              <summary>Ingredientes y preparación<span className="sr-only"> de {recipe.title}</span></summary>
              <h4>{recipe.ingredientsTitle}</h4>
              <ul>{recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
              <h4>Preparación paso a paso</h4>
              <ol>{recipe.steps.map(step => <li key={step.title}><strong>{step.title}: </strong>{step.text}</li>)}</ol>
            </details>
          </div>
        </article>)}</div>
    </div>
  </section>;
}
