import Ingredient from "./Ingredient";

const AvailableIngredients = ({ availableIngredients, handleAddTopping }) => {
  return (
    <section>
      <h2>Available ingredients</h2>
      {availableIngredients.length === 0 ? (
        "Sorry, there are no ingredients left to select from. Bon apetit!"
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
};

export default AvailableIngredients;
