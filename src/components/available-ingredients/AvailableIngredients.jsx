import Ingredient from "./Ingredient";

export default function AvailableIngredients({
  availableIngredients,
  handleAddTopping,
}) {
  return (
    <section id="available-ingredients">
      <h2>Available ingredients</h2>
      {availableIngredients.length === 0 ? (
        "Sorry, there are no ingredients left to select from. We've already ordered more!"
      ) : (
        <ul>
          {availableIngredients.map((ingredient) => (
            <Ingredient
              key={ingredient._id}
              ingredient={ingredient}
              handleAddTopping={handleAddTopping}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
