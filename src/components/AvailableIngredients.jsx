import Ingredient from "./Ingredient";

const AvailableIngredients = ({ handleAddTopping }) => {
  return (
    // map through props.ingredients
    <section id="available-ingredients">
      <h2>Available ingredients</h2>
      <ul>
        <Ingredient handleAddTopping={handleAddTopping} />
      </ul>
    </section>
  );
};

export default AvailableIngredients;
