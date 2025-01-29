// components
import CustomeImages from "./CustomeImages";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomeImages imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{recipe.description}</p>
        <a className="view-button" href="#!">
          View Recipe
        </a>
      </div>
    </div>
  );
}
